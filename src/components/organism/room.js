import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Room = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="microphone" style={styles.micIcon} size={70} color="white"/>
            <View style={styles.textContainer}>
                <Text style={[styles.text , styles.topText]}> deded </Text>
                <Text style={[styles.text , styles.bottonText]}> deded </Text>
            </View>
            <MaterialCommunityIcons name="volume-high" style={styles.SpeakerIcon} size={70} color="white"/>
        </View>
    )
} 
const styles = StyleSheet.create({
    container : {
        marginTop : 10,
        flexDirection : 'row-reverse',
        height : 70,
        backgroundColor : 'transparent',
        borderColor : 'white',
        borderWidth : 1,
    },
    textContainer: {
        flex : 1,
        flexDirection : 'column'
    },
    text : {
        color : 'white'
    },
    topText : {
        fontSize : 25,
        flex : 2
    },
    bottonText : {
        fontSize : 15,
        flex : 1,
    }
})
export default Room
