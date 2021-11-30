import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { Appbar ,IconButton, Colors  } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector} from 'react-redux'

const MessageAppBar = (props) => {
    const {isTablet , isLandscape} = useSelector((state) => state.screen)
    return (
        <Appbar.Header style={styles.header}>
        {isTablet && isLandscape ? null : <Appbar.BackAction style={styles.backBtn} size={35} onPress={() => {}} />}
        <View style={styles.view}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <View style={styles.iconsView}>
            <IconButton
                icon="magnify"
                style={{marginLeft : 0 , marginRight : 0}}
                color={Colors.orange300}
                size={35}
                onPress={() => console.log('Pressed')}
            />
            <MaterialCommunityIcons
                name={ props.isChannel ? "satellite-uplink" : "account"}
                style={{marginLeft : 0 , marginRight : 0 , alignSelf : 'center'}}
                color={Colors.grey400}
                size={35}
            />
            </View>
        </View>
    </Appbar.Header>
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
    iconsView: {
        position : 'absolute',
        right : 0,
        flexDirection : 'row'
    },
    view : {
        flexDirection : 'row-reverse',
        alignItems : 'center',
        justifyContent : 'flex-start',
        alignContent : 'center' ,
        flex : 1,
        paddingLeft : 10,
        paddingRight : 10,
    },
    backBtn : {
        transform: [{ rotate: '180deg'}],
        height : '100%',
        alignSelf : 'center'
    },
    title : {
        color : Colors.white , 
        fontSize : 25,
    },
})
export default MessageAppBar
