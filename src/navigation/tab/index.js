import React from 'react'
import {ActiveUsers , Users , Channels} from './../../screens/tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();

const TabNavigation = (props) => {
    return (
        <NavigationContainer independent={true}>
          <Tab.Navigator tabBarOptions={{
          style: {
            backgroundColor: 'black' , height : 80
          },
          activeTintColor: 'orange',
          inactiveTintColor: 'white',
          labelStyle: {
            textAlign: 'center' ,fontWeight : 'bold' , fontSize : 18
          },
          indicatorStyle: {
            borderBottomColor: 'orange',
            borderBottomWidth: 3,
          }
          ,}}
            initialRouteName={'Channels'}
            >
              <Tab.Screen name={"Users"} children={() => <Users upperNav={props}/>} options={{ tabBarLabel: 'کاربران',
                  tabBarIcon:({focused})=><MaterialCommunityIcons name="account-group" size={25} color={focused ? "orange":"white"}/>
              }}/>
              <Tab.Screen name={"Channels"} children={() => <Channels upperNav={props}/>} options={{ tabBarLabel: 'کانال ها',
                  tabBarIcon:({focused})=><MaterialCommunityIcons name="satellite-uplink" size={25} color={focused ? "orange":"white"}/>
              }}/>
              <Tab.Screen name={"ActiveUsers"} children={() => <ActiveUsers upperNav={props}/>} options={{ tabBarLabel: 'کاربران آنلاین',
                  tabBarIcon:({focused})=><MaterialCommunityIcons name="wifi" size={25} color={focused ? "orange":"white"}/>
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation