import React from 'react'
import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector , useDispatch} from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as actionCreator from './../../store/actions'
import styles from './style'

const Login = () => {    
    // const {isLoggedIn , userId} = useSelector((state) => state.login)
    // const dispatch = useDispatch()
    // const {signIn , signOut} = bindActionCreators(actionCreator , dispatch)
    const [userInfo , setUserInfo] = useState({username : '' , password : ''});
    const onChangeHandle = (e) => {
        e.target.name
    }
    const onSubmit = (e) => {
        
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollview}> 
                <View style={styles.container}>
                    <View style={styles.view}>
                        <Text style={styles.txtTop}>
                            نرم افزار بی سیم
                        </Text>
                        <Text style={styles.text}>
                            نام کاربری :
                        </Text>
                        <TextInput style={styles.input}
                            placeholder="admin"
                        />
                        <Text style={styles.text}>
                            رمز عبور :
                        </Text>
                        <TextInput style={styles.input} 
                            placeholder="admin123"
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtTouch}> ورود </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login
