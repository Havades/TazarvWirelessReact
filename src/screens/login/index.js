import React , {useState} from 'react'
import { View, Text , TextInput, TouchableOpacity, Alert, Switch } from 'react-native'
import { useSelector} from 'react-redux'
import styles from './style'
import { LoginTemplate , ScreenTemplate } from './../../components/template'

const Login = () => {        
    const {width ,height ,isPortrait} = useSelector((state) => state.screen)
    const [userInfo , setUserInfo] = useState({username : '' , password : ''});
    const [isRemember, setIsRemember] = useState(false);
    const onChangeHandle = (e , name) => setUserInfo({...userInfo , [name] : e})
    const onSubmit = (e) => Alert.alert("<User> : " + userInfo.username + " <Pass> : " + userInfo.password + " <Remember> : " + isRemember)
    const toggleSwitch = () => setIsRemember(previousState => !previousState);
    return (
            <ScreenTemplate>
                <View style={styles.container}>
                    <LoginTemplate title="سامانه بی سیم تذرو">
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
                        <View style={styles.rememberView}>
                            <Switch style={styles.switchRemember}
                                trackColor={{ false: "darkgrey", true: "orange" }}
                                thumbColor={isRemember ? "white" :"white" }
                                ios_backgroundColor={"darkgrey"}
                                onValueChange={toggleSwitch}
                                value={isRemember}
                            />
                            <Text style={styles.txtRemember} onPress={toggleSwitch}> من را به خاطر بسپار </Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={onSubmit}>
                            <Text style={styles.txtTouch}> ورود </Text>
                        </TouchableOpacity>
                    </LoginTemplate>
                </View>
            </ScreenTemplate>
    )
}
export default Login
