import React from 'react'
import { View, Text , ScrollView } from 'react-native'
import {Room} from './../.././../components/organism'
import styles from './style'
import {ScreenTemplate} from './../../../components/template'

const Channels = () => {
    return (
        <ScreenTemplate>
            <ScrollView>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
            </ScrollView>
        </ScreenTemplate>
    )
}

export default Channels
