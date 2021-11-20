import React from 'react'
import { SafeAreaView, ScrollView ,StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const ScreenTemplate = (props) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient colors={['black', 'grey']} style={styles.linearGradient}>
                {/* <ScrollView style={styles.scrollview}> */}
                    {props.children}
                {/* </ScrollView> */}
            </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea : {
        flex : 1,
        backgroundColor : 'grey',
        direction : 'rtl',
    },    
    linearGradient:{
        flex :1
    },
    scrollview : {
        flex : 1
    },
})

export default ScreenTemplate
