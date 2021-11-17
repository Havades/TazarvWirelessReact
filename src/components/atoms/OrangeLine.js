import React from 'react'
import { View , StyleSheet } from 'react-native'

const OrangeLine = () => {
    return (
        <View style={styles.line}/>
    )
}
export default OrangeLine

const styles = StyleSheet.create({
    line : {
        backgroundColor : 'orange',
        height : 5,
        width : '100%',
        borderRadius : 5
    }
})