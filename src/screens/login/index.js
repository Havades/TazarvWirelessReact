import React , {useState} from 'react'
import { View, Text , TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import { useSelector} from 'react-redux'
import styles from './style'
import { LoginTemplate , ScreenTemplate } from './../../components/template'
import { Metrics } from "./../../theme";
const Login = () => {        
    const {width ,height ,isPortrait} = useSelector((state) => {
        console.log('====omid=====', state.screen)
        return state.screen
    })
    const [userInfo , setUserInfo] = useState({username : '' , password : ''});
    const onChangeHandle = (e , name) => setUserInfo({...userInfo , [name] : e})
    const onSubmit = (e) => Alert.alert("isPortrait : " + isPortrait + "\nscreenW : " + width)

    return (
            <ScreenTemplate>
                <View style={styles.container}>
                {/* <ScrollView> */}
                    <LoginTemplate>                   
                        <Text style={styles.text}>
                            نام کاربری :
                        </Text>
                        <TextInput style={styles.input}
                            onChangeText={(e) => onChangeHandle(e , "username")}
                            placeholder="admin" name="username"
                        />
                        <Text style={styles.text}>
                            رمز عبور :
                        </Text>
                        <TextInput style={styles.input} 
                            onChangeText={(e) => onChangeHandle(e , "password")}
                            placeholder="admin@123"
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.button} onPress={onSubmit}>
                            <Text style={styles.txtTouch}> ورود </Text>
                        </TouchableOpacity>
                    </LoginTemplate>
                {/* </ScrollView> */}
                </View>
            </ScreenTemplate>
    )
}
export default Login
