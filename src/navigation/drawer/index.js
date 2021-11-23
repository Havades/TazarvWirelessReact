import React from 'react'
import { Image , View , Text} from 'react-native'
import { Login , Main , Message , Setting , Profile ,Test} from '../../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator , DrawerContentScrollView ,DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OrangeLine } from '../../components/atoms';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './style'

// const appName = "نرم افزار بی سیم تذرو"
const routeNames = {
    Main : "خانه",
    Profile: "کاربری",
    Login: "خروج",
    Message: "پیام ها",
    Setting: "تنظیمات",
    Test : "تست"
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Setting"
              screenOptions={{
                headerShown: false,
                drawerPosition : 'right',
                drawerStyle: styles.drawerStyle,
                headerStyle : styles.headerStyle,
                drawerLabelStyle : styles.drawerLabelStyle,
                overlayColor: 'transparent'
              }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                >
                <Drawer.Screen name="Main" component={Main} options={{ 
                    title: routeNames.Main,
                    drawerIcon: ({focused}) => <MaterialIcons name="home" style={styles.icon} size={30} color={focused ? "orange":"white"}/>
                  }}/>
                <Drawer.Screen name="Message" component={Message} options={{ 
                  title: routeNames.Message,
                  drawerIcon: ({focused}) => <MaterialCommunityIcons name="android-messages" style={styles.icon} size={30} color={focused ? "orange":"white"}/>
                  }}/>
                <Drawer.Screen name="Profile" component={Profile} options={{ 
                  title: routeNames.Profile,
                  drawerIcon: ({focused}) => <MaterialCommunityIcons name="account-settings" style={styles.icon} size={30} color={focused? "orange":"white"}/>
                  }}/>
                <Drawer.Screen name="Setting" component={Setting} options={{ 
                  title: routeNames.Setting,
                  drawerIcon: ({focused}) => <MaterialIcons name="settings" style={styles.icon} size={30} color={focused ? "orange":"white"}/>
                  }}/>
                <Drawer.Screen name="Login" component={Login} options={{ 
                  title: routeNames.Login,
                  drawerIcon: ({focused}) => <MaterialIcons name="logout" style={styles.icon} size={30} color={focused ? "orange":"white"}/>
                  }}/>
                <Drawer.Screen name="Test" component={Test} options={{ 
                  title: routeNames.Test,
                  drawerIcon: ({focused}) => <Fontisto name="test-tube" style={styles.icon} size={30} color={focused ? "orange":"white"}/>
                  }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.view}>
            <Image style={styles.image}
                resizeMode='cover'
                source={require('./../../assets/app_icon.png')}
            />
            <Text style={styles.text}>
            سامانه بی سیم
            </Text>
      </View>
      <OrangeLine/>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}

export default DrawerNavigation