import React , {useState} from 'react'
import { View, Text , TextInput, TouchableOpacity ,Alert} from 'react-native'
import { LoginTemplate , ScreenTemplate , AppBar} from './../../components/template'
import styles from './style'

const Profile = (props) => {
    const [userInfo , setUserInfo] = useState({oldPass : '' , newPass : '' , repeatPass : ''});

    const onChangeHandle = (e , name) => setUserInfo({...userInfo , [name] : e})
    const onSubmit = (e) => Alert.alert("{ "+userInfo.oldPass+", "+userInfo.newPass+", "+userInfo.repeatPass+"}")
    return (
        <>
        <AppBar {...props } title='کاربری' isShowSearch={false}/>
        <ScreenTemplate>
            <View style={styles.container}>
                <LoginTemplate title={"تنطیمات کاربری"}>
                    <Text style={styles.text}>
                        رمز عبور کنونی 
                    </Text>
                    <TextInput style={styles.input}
                        onChangeText={(e) => onChangeHandle(e , "oldPass")}
                        placeholder="admin"
                    />
                    <Text style={styles.text}>
                        رمز عبور جدید 
                    </Text>
                    <TextInput style={styles.input} 
                        onChangeText={(e) => onChangeHandle(e , "newPass")}
                        placeholder="admin@123"
                        secureTextEntry={true}
                    />
                     <Text style={styles.text}>
                        تکرار رمز جدید 
                    </Text>
                    <TextInput style={styles.input} 
                        onChangeText={(e) => onChangeHandle(e , "repeatPass")}
                        placeholder="admin@123"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={onSubmit}>
                            <Text style={styles.txtTouch}> ذخیره </Text>
                    </TouchableOpacity>
                </LoginTemplate>
            </View>
        </ScreenTemplate>
    </>
    )
}

export default Profile
