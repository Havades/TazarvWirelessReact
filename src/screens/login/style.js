import { StyleSheet } from "react-native";

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
    rememberView : {
        margin : 5,
        width : '90%',
        flexDirection: 'row-reverse',
        justifyContent : 'flex-start'
    },
    txtRemember : {
        fontSize : 20,
        marginRight : 10,
        color : 'white',
        alignSelf : 'flex-end',
    },
    switchRemember :{
        alignSelf : 'flex-start',
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    }
})
