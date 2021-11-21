import React from 'react'
import { Login , Main , Message , Setting , Profile } from './../screens';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const appName = "نرم افزار بی سیم تذرو"
const routeNames = {
    Main : "نرم افزار بی سیم تذرو",
    Profile: "کاربری",
    Login: "ورود",
    Message: "پیام ها",
    Setting: "تنظیمات",
}
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Setting"
                screenOptions={{
                    drawerPosition : 'right',
                    drawerStyle: {
                        backgroundColor: '#36454F',
                        alignItems : 'stretch',
                      },
                      headerStyle : {
                          height : 60,
                          backgroundColor : '#778899',
                          color : 'white'
                      }
                     , drawerLabelStyle : {
                        fontSize : 20,
                        color : 'white'
                    }
                }}
                >
                <Drawer.Screen name="Main" component={Main} options={{ title: routeNames.Main}}/>
                <Drawer.Screen name="Profile" component={Profile} options={{ title: routeNames.Profile }}/>
                <Drawer.Screen name="Login" component={Login} options={{ title: routeNames.Login }}/>
                <Drawer.Screen name="Message" component={Message} options={{ title: routeNames.Message }}/>
                <Drawer.Screen name="Setting" component={Setting} options={{ title: routeNames.Setting }}/>
            </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default Navigation