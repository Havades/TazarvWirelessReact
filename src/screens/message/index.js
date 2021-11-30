import React from 'react'
import { View, Text } from 'react-native'
import {MessageAppBar , ScreenTemplate} from '../../components/template'

const Message = (props) => {
    return (
        <>
        <MessageAppBar {...props } title='پیام ها'/>
        <ScreenTemplate>
            <Text>ededde</Text>
        </ScreenTemplate>
        </>
    )
}

export default Message
