import React , {useState , useEffect} from 'react'
import { Alert, Button, NativeModules, Text, View, StyleSheet } from 'react-native';
import { AppBar} from './../../components/template'
import * as Login from './login_handler'; 

const {AuthModule} = NativeModules;

const Main = (props) => {

  useEffect(() => {
    const userId = Login.loginCheck(props.navigation , AuthModule)
    setUserId(userId)
    Login.onUserIdChange(userId , props.navigation)
    return () => {}
  } , [])
  // useEffect(() => { Login.onUserIdChange(userId , props.navigation) }, [userId]);
  const [userId , setUserId] = useState(0)
    return (
      <>
        <AppBar {...props } title='سامانه بی سیم' isShowSearch={false}/>
        <View style={{display: 'flex' , flex : 1}}>
          <Text style={{flex : 1, textAlign : 'center' , textAlignVertical : 'center' , fontSize : 30}}>
            User ID : {userId}</Text>
        </View>
    </>
    )
}
export default Main
