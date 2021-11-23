import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
    view : {
        margin : 10,
        flexDirection : 'row-reverse',
        backgroundColor : '#202829'
    },
    icon : {
      alignSelf: "center",
      position: "absolute",
      right: 5,
    },
    text : {
      alignSelf : 'flex-end',
      fontSize : 25,
      color : 'orange',
      textAlign : 'center',
      textAlignVertical : 'center',
      height : 80
    },
    image : {
        margin : 10,
        width : 80,
        height :80,
        alignSelf : 'center'
    },
    drawerLabelStyle :{
      fontSize : 22,
      marginRight : 30,
      color : 'white'
    },
    drawerStyle: {
      backgroundColor: '#2c2e2e',
      alignItems : 'stretch',
    },
    headerStyle : {
        height : 60,
        backgroundColor : 'white',
      },
    navigator : {
      color : 'white'
    },
})