import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Message } from '../../screens';

const Stack = createStackNavigator();

const MessageNavigator = (props) => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Home" children={() => <Main propUpper={props}/>} />
            <Stack.Screen name="Messages" component={Message} />
        </Stack.Navigator>
    )
}

export default MessageNavigator
