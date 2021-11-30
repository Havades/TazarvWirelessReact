import React , {useState} from 'react'
import { View, Text } from 'react-native'
import {MessageAppBar , ScreenTemplate} from '../../components/template'
import { Button, Menu, Divider, Provider, Colors } from 'react-native-paper';
import {styles , theme} from './style'

const Message = (props) => {
    const [visible, setVisible] = useState(false);
    const [isMute , setIsMute ] = useState(false);
    const [isConnected , setIsConnected ] = useState(true);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <>
        <MessageAppBar {...props } title='سینا کمبوجیه' viibility={setVisible} mute={isMute} connected={isConnected}/>
        <ScreenTemplate>
        <Provider theme={theme}>
        <View style={{height : 0}}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={{ x: 0 , y : 0}}
            >
            <Button icon="magnify" mode="contained" color={Colors.grey800} 
                onPress={() => {closeMenu();}}
                style={styles.menuBtn} labelStyle={styles.menuBtnLabel} contentStyle = {styles.menuBtnContent}>
                جستجو
            </Button>
            <Button icon={isMute ? 'volume-low' : 'volume-variant-off'} mode="contained" color={Colors.grey800} 
                onPress={() => {closeMenu(); setIsMute(prev => !prev); }}
                style={styles.menuBtn} labelStyle={styles.menuBtnLabel} contentStyle = {styles.menuBtnContent}>
                حالت {isMute ? "با" : "بی"} صدا
            </Button>
            </Menu>
        </View>
        </Provider>
        {/*-------------------Main Part--------------------*/}
        <View style={styles.container}>
            <Button mode="contained" onPress={()=> setIsConnected(prev => !prev)}> connect </Button>
        </View>
        </ScreenTemplate>
        </>
    )
}

export default Message
