import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { Appbar ,IconButton, Colors  } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'
import { useSelector} from 'react-redux'

const AppBar = (props) => {
        
    const {isLoggedIn , userId} = useSelector((state) => state.login)
    return (
    <Appbar.Header style={{backgroundColor : Colors.black}}>
        {props.back ? <Appbar.BackAction onPress={props.navigation.goBack} /> : null}
        <LinearGradient colors={['black', 'grey']} style={styles.linearGradient}>
        <View style={styles.view}>
            {props.isShowSearch ? <IconButton
                style={styles.icoSearch}
                icon="magnify"
                color={Colors.orange300}
                size={30}
                onPress={() => console.log("Search Pressed :D")}
                /> : null}
            <Text style={isLoggedIn ? styles.title : [styles.title , {marginRight : 50}] }>
                {props.title}
            </Text>
            { !isLoggedIn ? null : <IconButton
                icon="menu"
                color="white"
                size={40}
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                />}
        </View>
        </LinearGradient>
    </Appbar.Header>
    )
}
const styles = StyleSheet.create({
    view : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-end',
        alignContent : 'center' ,
        flex : 1,
    },
    icoSearch : {
        position : 'absolute' ,
        justifyContent : 'center' , 
        left : 1
    },
    title : {
        color : Colors.white , 
        fontSize : 25
    },
    linearGradient :{
        flex : 1,
        borderRadius : 5,
    }
})
export default AppBar
