import React , {useState} from 'react'
import { View, Text , SafeAreaView, TextInput, TouchableOpacity, ScrollView , Image } from 'react-native'
import { useSelector , useDispatch} from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as actionCreator from './../../store/actions'
import styles from './style'
import { LoginTemplate } from './../../components/template'

const Login = () => {    
    // const {isLoggedIn , userId} = useSelector((state) => state.login)
    // const dispatch = useDispatch()
    // const {signIn , signOut} = bindActionCreators(actionCreator , dispatch)
    const [userInfo , setUserInfo] = useState({username : '' , password : ''});
    
    const onChangeHandle = (e , name) => setUserInfo({...userInfo , [name] : e})
    const onSubmit = (e) => {
        
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollview}> 
                <View style={styles.container}>
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
                            placeholder="admin123"
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtTouch}> ورود </Text>
                        </TouchableOpacity>
                    </LoginTemplate>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login
