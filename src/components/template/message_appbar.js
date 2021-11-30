import React from 'react'
import { View, Text , StyleSheet , Image} from 'react-native'
import { Appbar ,IconButton, Colors ,Button,Menu, Divider, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector} from 'react-redux'

const MessageAppBar = (props) => {
    const {isTablet , isLandscape} = useSelector((state) => state.screen)
    return (
    <>
    <Appbar.Header style={styles.header}>
        {isTablet && isLandscape ? null : 
            <Appbar.BackAction style={styles.backBtn} size={35} onPress={() => {}} />}
        <Appbar.Content title={props.title} subtitle="Subtitle" style={styles.text} />
        {props.mute ? <MaterialCommunityIcons name="volume-variant-off" size={30} color={Colors.grey500}/> : null}
        {props.connected ? <Ionicons name="shield-checkmark" size={30} color={Colors.orange400}/> 
            : <Image style={styles.image} source={require('./../../assets/connection_wait.gif')}/>}
        <Appbar.Action icon="dots-vertical" size={35} onPress={() => props.viibility(prev => !prev)} />
    </Appbar.Header>
    </>
    )
}
const styles = StyleSheet.create({
    header : {
        backgroundColor : Colors.black,
        borderBottomColor : Colors.white,
        borderTopColor : Colors.white,
        borderTopWidth : 1,
        borderBottomWidth : 1,
        flexDirection : 'row-reverse',
    },
    text : {
        flex : 1,
        alignItems : 'flex-end'
    },
    backBtn : {
        transform: [{ rotate: '180deg'}],
        height : '100%',
        alignSelf : 'center'
    },
    image : {
        width : 20,
        height : 20
    },
})
export default MessageAppBar
