import { StyleSheet } from "react-native";
import {Colors} from 'react-native-paper'

export default StyleSheet.create({
    parent : {
        display : 'flex',
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
    },
    container : {
        backgroundColor : Colors.grey800,
        borderRadius : 20,
        borderColor : Colors.orange400,
        borderWidth : 2,
        alignSelf : 'center'
    },
    mainContainer : {
        justifyContent : 'center',
        alignSelf : 'center',
        margin : 20,
        alignContent : 'center',
    },
    dtContainer : {

    },
    coupleContainer : {
        flexDirection : 'row-reverse',
        justifyContent : 'center',
        alignContent : 'center'
    },
    text : {
        marginRight : 10,
        fontSize : 20,
        color : Colors.white,
    },
    input: {
        marginLeft : 30,
        marginRight : 30,
        height : 30
    },
    datePicker : {},
    timePicker: {},
    comboList : {},
    closeBtn : {
        margin : 0,
        alignSelf : 'flex-end'
    },
    button : {}
})