import { useFocusEffect } from '@react-navigation/core';
import React , {useState , useEffect, useCallback} from 'react'
import { NativeModules, Text, View } from 'react-native';
import { AppBar} from './../../components/template'
import * as Login from './login_handler'; 
import Spinner from 'react-native-loading-spinner-overlay';
import { Waiting} from './../../components/organism'
import {NavigationContainer} from '@react-navigation/native'
import {ActiveUsers , Channels , Users} from './../tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
const { AuthModule } = NativeModules;

const Tab = createMaterialTopTabNavigator();

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
  // useEffect(() => {
  //   Login.loginCheck(props.navigation , AuthModule , setUserId)
  //   return () => {}
  // } , [])
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
        <NavigationContainer independent={true}>
          <Tab.Navigator
            initialRouteName={"Channels"}
            >
              <Tab.Screen name={"Users"} component={Users}/>
              <Tab.Screen name={"Channels"} component={Channels}/>
              <Tab.Screen name={"ActiveUsers"} component={ActiveUsers}/>
          </Tab.Navigator>
        </NavigationContainer>
        {/* <View style={{display: 'flex' , flex : 1}}>
          <Text style={{flex : 1, textAlign : 'center' , textAlignVertical : 'center' , fontSize : 30}}>
            User ID : {userId} </Text>
        </View> */}
    </>
    )
}
export default Main