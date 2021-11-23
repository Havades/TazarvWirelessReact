import React from 'react'
import { Login , Main , Message , Setting , Profile } from './../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const appName = "نرم افزار بی سیم تذرو"

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" >
                <Stack.Screen name="Main" component={Main} options={{ title: appName }}/>
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Message" component={Message} />
                <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigation