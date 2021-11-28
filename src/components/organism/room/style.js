import {StyleSheet} from 'react-native'
import { Colors } from 'react-native-paper'

export default StyleSheet.create({
    container : {
        marginTop : 10,
        flexDirection : 'row-reverse',
        height : 70,
        paddingBottom : 5,
        borderColor : Colors.grey500,
        borderWidth : 1,
        borderRadius : 20
    },
    textContainer: {
        flex : 1,
        flexDirection : 'column'
    },
    captionContainer : {
        flexDirection : 'row'
    },
    countContainer: {
        marginLeft : 5,
        marginRight : 5,
        width : 50,
        height : 70,
        alignItems : 'center',
        justifyContent : 'center'
    },
    txtCount : {
        width : 35,
        height : 35,
        padding : 1,
        fontSize : 15,
        textAlign : 'center',
        textAlignVertical : 'center',
        backgroundColor : Colors.blue600,
        color : Colors.white,
        borderRadius : 100
    },
    text : {
        color : Colors.white
    },
    topText : {
        fontSize : 25,
        flex : 2,
    },
    SpeakerIcon : {
        width : 50,
        height : 70,
        alignItems : 'center',
        justifyContent : 'center'
    },
    space : {
        width : 10,
    },
    micIcon: {
        width : 70
    },
    wifiIcon : {
        width : 70,
        justifyContent : 'center',
        alignItems : 'center'
    },
    bottonText : {
        fontSize : 15,
        flex : 1,
        textAlign : 'left',
        textAlignVertical : 'center'
    },
    stopwatch : {
        color : Colors.red200,
        width : 70,
        textAlign : 'right',
    }
})
