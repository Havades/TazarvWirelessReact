import React from 'react'
import { SafeAreaView, ScrollView ,StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const ScreenTemplate = (props) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['black', 'grey']} style={styles.linearGradient}>
                {props.children}
            </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea : {
        flex : 1,
        direction : 'rtl',
    },    
    linearGradient:{
        flex :1
    },
})

export default ScreenTemplate
