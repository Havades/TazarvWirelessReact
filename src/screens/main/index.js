import { useFocusEffect } from '@react-navigation/core';
import React , {useState , useEffect, useCallback} from 'react'
import { NativeModules, Text, View } from 'react-native';
import { AppBar} from './../../components/template'
import * as Login from './login_handler'; 
import Spinner from 'react-native-loading-spinner-overlay';
import { Waiting} from './../../components/organism'
import {TabNavigation} from './../../navigation'
const { AuthModule } = NativeModules;

const Main = (props) => {
  const [userId , setUserId] = useState(0)
  const [isWaiting , setIsWaiting] = useState(false)
  useEffect(() => { Login.onUserIdChange(userId , props.navigation , setIsWaiting) }, [userId])
  useFocusEffect(
    useCallback(
      () => Login.loginCheck(props.navigation , props.route, AuthModule , setUserId)
      , [],
    )
  )
    return (
      <>
        <Spinner
          visible={ isWaiting }
          size={'normal'}
          animation={"slide"}
          cancelable={true}
          customIndicator={<Waiting/>}
        />
        <AppBar {...props } title='سامانه بی سیم' isShowSearch={false}/>
        <TabNavigation/>
    </>
    )
}
export default Main