import React from 'react'
import { View, Text } from 'react-native'
import { Login , Main , Message , Setting , Profile } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar, Menu,IconButton, Colors  } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';

// import { Button, Menu, Divider, Provider } from 'react-native-paper';
// import { IconButton, Colors } from 'react-native-paper';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Details" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
function CustomNavigationBar(props) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    console.log(props.route.name)
    return (
      <Appbar.Header style={{backgroundColor : '#0e0336'}}>
        {props.back ? <Appbar.BackAction onPress={props.navigation.goBack} /> : null}
        <View style={{flexDirection : 'row' , alignItems : 'center' 
        , justifyContent : 'flex-end' , alignContent : 'center' , flex : 1}}>
        <IconButton
           style={{ position : 'absolute' , justifyContent : 'center' , left : 1}}
           icon="magnify"
           color={Colors.blue500}
           size={30}
           onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
         />
        <Text style={{color : Colors.white , fontSize : 25}}>سامانه بی سیم</Text>
        <IconButton
           style={{}}
           icon="menu"
           color={Colors.orange500}
           size={40}
           onPress={() => console.log('Pressed')}
         />
         </View>
      </Appbar.Header>
    );
  }

export default Navigation
