import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'column',
        alignItems : 'center',
        alignContent : 'center',
        justifyContent : 'center',
    },
    button : {
        marginTop : 10,
        height : 40,
        width : '90%',
        margin : 5,
        backgroundColor : 'orange',
        borderRadius : 20,
        justifyContent : 'center'
    },
    txtTouch : {
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 22,
        fontWeight : 'normal',
        textShadowColor : 'grey',
        color : 'black'
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
        height : 35,
        width : '90%',
        margin : 10,
        backgroundColor : 'white',
        textAlign : 'center',
        borderRadius : 15,
        padding : 0,
        fontSize : 18,
        color : 'black',
    },
})
