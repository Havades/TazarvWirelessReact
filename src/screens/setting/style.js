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
        marginTop : 30,
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
    textPort : {
        height : 25,
        flex : 1,
        color : 'white',
        fontSize : 20,
        textAlignVertical : 'center'
    },
    inputPort : {
        height : 35,
        flex : 2,
        fontSize : 18,
        backgroundColor : 'white',
        textAlignVertical : 'center',
        padding : 0,        
        borderRadius : 15,
        color : 'black',
        textAlign : 'center',
    },
    switch : {
        marginLeft : 20,
        flex : -1,
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
    },
    viewPort : {
        marginTop : 15,
        margin : 5,
        width : '90%',
        flexDirection: 'row-reverse',
        justifyContent : 'flex-end'
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
