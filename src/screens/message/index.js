import React from 'react'
import { View, Text } from 'react-native'
import { AppBar} from './../../components/template'

const Message = (props) => {
    return (
        <>
        <AppBar {...props } title='پیام ها'  leftActions={[{
          action : console.log("magnify"),
          icon : {
              name : 'magnify',
              color : 'orange'
          }
        }]}/>
        <View>
            <Text>Message Screen</Text>
        </View>
        </>
    )
}

export default Message
