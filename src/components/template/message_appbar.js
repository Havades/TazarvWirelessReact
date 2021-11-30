import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { Appbar ,IconButton, Colors ,Button,Menu, Divider, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector} from 'react-redux'

const MessageAppBar = (props) => {
    const {isTablet , isLandscape} = useSelector((state) => state.screen)
    return (
    <>
    <Appbar.Header style={styles.header}>
        {isTablet && isLandscape ? null : 
            <Appbar.BackAction style={styles.backBtn} size={35} onPress={() => {}} />}
        <Appbar.Content title={props.title} subtitle="Subtitle" style={styles.text} />
         <Appbar.Action icon="dots-vertical" size={35} onPress={() => {
             props.viibility(prev => !prev)
             console.log('--dot-vert--')
             }} />
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
})
export default MessageAppBar
