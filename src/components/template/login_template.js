import React from 'react'
import { View, StyleSheet } from 'react-native'
import {LoginOrganism} from './../organism'

const LoginTemplate = (props) => {
    return (
        <View style={styles.view}>
            <LoginOrganism>
                {props.children}
            </LoginOrganism>
        </View>
    )
}

const styles = StyleSheet.create({
    view : {
        flexDirection : 'column',
        padding : 5 ,
        backgroundColor : 'grey',
        width : '90%',
    }
})

export default LoginTemplate
