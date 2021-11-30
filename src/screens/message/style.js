import { StyleSheet } from "react-native";
import { DefaultTheme , Colors } from 'react-native-paper';

const styles =  StyleSheet.create({
    menuBtn : {
        borderWidth : 0,
        borderRadius : 0,
        justifyContent :'center'
    },
    menuBtnContent : {
        flexDirection : 'row-reverse',
        justifyContent : 'flex-start'
    },
    menuBtnLabel : {
        fontSize: 22
    },
    container : {
        display : 'flex',
        height : '100%',
        justifyContent : 'center',
    },
})
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      surface : Colors.grey800
    },
}

export {
    styles,
    theme
}