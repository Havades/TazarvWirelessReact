import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safeArea : {
        flex : 1,
        backgroundColor : 'grey',
        direction : 'rtl',
    },
    scrollview : {
        width : '100%',
    },
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    view : {
        justifyContent : "center",
        alignContent : "center",
        backgroundColor : 'orange',
        marginTop : '20%',
        padding : 20,
        marginBottom : 50,
        width : '90%',
        borderRadius : 20
    },
    text : {
        height : 25,
        margin : 5,
        fontSize : 20,
        textAlign : 'right',
        width : '90%',
        textAlignVertical : 'center'
    },
    txtTop: {
        height : 40,
        margin : 10,
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        textAlignVertical : 'center'
    },
    input : {
        height : 40,
        margin : 10,
        backgroundColor : 'white',
        textAlign : 'center',
        borderRadius : 20,
        fontSize : 15
    },
    button : {
        marginTop : 10,
        height : 40,
        margin : 5,
        textAlign : 'center',
        backgroundColor : 'dodgerblue',
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center'
    },
    txtTouch : {
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : 20,
        fontWeight : 'bold',
        textShadowColor : 'grey',
        color : 'white'
    }
})
