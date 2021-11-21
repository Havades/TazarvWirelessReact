import { StyleSheet } from "react-native";
import { Metrics } from "./../../theme";
import { useSelector } from 'react-redux';

export default StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'column',
        alignItems : 'center',
        alignContent : 'center',
        justifyContent : 'center',
    },
    text : {
        height : 25,
        margin : 5,
        fontSize : 20,
        color : 'white',
        textAlign : 'right',
        width : '90%',
        textAlignVertical : 'center'
    },
    input : {
        height : 40,
        width : '90%',
        margin : 10,
        backgroundColor : 'white',
        textAlign : 'center',
        borderRadius : 15,
        fontSize : 15,
        color : 'black',
    },
    button : {
        marginTop : 10,
        height : 40,
        width : '90%',
        margin : 5,
        textAlign : 'center',
        backgroundColor : 'orange',
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center'
    },
    txtTouch : {
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 20,
        fontWeight : 'normal',
        textShadowColor : 'grey',
        color : 'black'
    }
})
