import { useFocusEffect } from '@react-navigation/core';
import React , {useState , useEffect, useCallback} from 'react'
import { Alert, Button, NativeModules, Text, View, StyleSheet } from 'react-native';
import { AppBar} from './../../components/template'
import * as Login from './login_handler'; 
import Spinner from 'react-native-loading-spinner-overlay';
import { Waiting} from './../../components/organism'
import { Colors } from 'react-native-paper';
const { AuthModule } = NativeModules;

const Main = (props) => {
  const [userId , setUserId] = useState(0)
  const [isWaiting , setIsWaiting] = useState(true)
  useEffect(() => { Login.onUserIdChange(userId , props.navigation) }, [userId])
  useFocusEffect(
    useCallback(
      () => Login.loginCheck(props.navigation , props.route, AuthModule , setUserId)
      , [],
    )
  )
  // useEffect(() => {
  //   Login.loginCheck(props.navigation , AuthModule , setUserId)
  //   return () => {}
  // } , [])
    return (
      <>
        {/* <Spinner
          visible={ isWaiting }
          size={'large'}
          animation={"slide"}
          cancelable={true}
          customIndicator={<Waiting/>}
        /> */}
          <Spinner
          visible={isWaiting}
          textContent={'Loading...'}
          color={"red"}
        />
        <AppBar {...props } title='سامانه بی سیم' isShowSearch={false}/>
        <View style={{display: 'flex' , flex : 1}}>
          <Text style={{flex : 1, textAlign : 'center' , textAlignVertical : 'center' , fontSize : 30}}>
            User ID : {userId} </Text>
        </View>
    </>
    )
}
export default Main