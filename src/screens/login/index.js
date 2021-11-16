import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector , useDispatch} from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as actionCreator from './../../store/actions'

const Login = () => {
    
    const {isLoggedIn , userId} = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const {signIn , signOut} = bindActionCreators(actionCreator , dispatch)

    console.log("----omid----" , "Login Screen" )
    return (
        <View style={{display : "flex"}}>
            <Text>---Login Screen--- {"\n"}
                is logged in : {isLoggedIn} {"\n"}
                user id : {userId} {"\n"} 
            </Text>
            <Button title="Login" onPress={() => signIn(1000)}/>
            <Button title="Logout" onPress={() => signOut(1000)}/>
        </View>
    )
}

export default Login
