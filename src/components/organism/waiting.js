import React from 'react'
import { View, StyleSheet,Text,Image } from 'react-native'

const Waiting = () => {
    return (
        <View style={styles.view}>
        <Image style={styles.image}
            source={require('./../../assets/waiting_icon.gif')}/>
            {/* <Text style={styles.text}> لطفا صبر کنید... </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    view : {
        // position : 'fixed',
    },
    text : {
        fontSize : 50,
        color : 'darkorange'
    },
    image : {
        alignSelf : 'center',
        width : 150,
        height : 150
    }
})

export default Waiting
