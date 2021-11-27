import React , {useState , useEffect , useCallback} from 'react'
import { View, Text , BackHandler , TextInput, TouchableOpacity, Alert, Switch ,NativeModules } from 'react-native'
import styles from './style'
import { useDispatch} from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as actionCreator from './../../store/actions'
import * as Handler from './login_handler'; 
import { useFocusEffect } from '@react-navigation/native';
import { LoginTemplate , ScreenTemplate , AppBar} from './../../components/template'

const {AuthModule} = NativeModules;

const Login = (props) => {
    const dispatch = useDispatch()
    const {signIn , signOut} = bindActionCreators(actionCreator , dispatch)

    useFocusEffect(
        useCallback(() => {
            signOut()
            const event = BackHandler.addEventListener("hardwareBackPress" , (e) => {
                BackHandler.exitApp()
                return true;
            })
            return () => event.remove()
        } , []
      ));
    const [userInfo , setUserInfo] = useState({username : '' , password : ''});
    const [isRemember, setIsRemember] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);
    const onChangeHandle = (e , name) => setUserInfo({...userInfo , [name] : e})
    const toggleSwitch = () => setIsRemember(previousState => !previousState);
    const onSubmit = (e) => Handler.onSubmit(AuthModule , userInfo , isRemember , props.navigation, signIn , Alert.alert)
    return (
        <>
        <AppBar {...props } title='ورود' isShowSearch={false}/>
        <ScreenTemplate>
            <View style={styles.container}>
                <LoginTemplate title="سامانه بی سیم تذرو">
                    <Text style={styles.text}>
                        نام کاربری :
                    </Text>
                    <TextInput style={styles.input}
                        onChangeText={(e) => onChangeHandle(e , "username")}
                        placeholder="admin"
                        value={userInfo.username}
                    />
                    <Text style={styles.text}>
                        رمز عبور :
                    </Text>
                    <TextInput style={styles.input} 
                        onChangeText={(e) => onChangeHandle(e , "password")}
                        placeholder="admin@123"
                        secureTextEntry={true}
                        value={userInfo.password}
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
        </>
    )
}
export default Login
