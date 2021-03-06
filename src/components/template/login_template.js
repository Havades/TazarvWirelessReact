import React from 'react'
import { View, StyleSheet } from 'react-native'
import {LoginOrganism} from './../organism'

const LoginTemplate = (props) => {
    return (
        <View style={styles.view}>
            <LoginOrganism title={props.title}>
                {props.children}
            </LoginOrganism>
        </View>
    )
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        alignSelf : 'center',
        justifyContent : 'center',
        padding : 5 ,
        width : '90%',
    }
})

export default LoginTemplate
