import React , {useState} from 'react'
import { View, Text , Modal} from 'react-native'
import {MessageAppBar , ScreenTemplate} from '../../components/template'
import { Button, Menu, Divider, Provider, Colors } from 'react-native-paper';
import {styles , theme} from './style'
import { MessageSearch } from './../../components/organism'
import {JalaliDatePicker} from './../../components/base'

const Message = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [isMute , setIsMute ] = useState(false);
    const [isConnected , setIsConnected ] = useState(false);
    return (
        <>
        <MessageAppBar {...props } title='سینا کمبوجیه' subtitle='last seen 1400/08/03 14:52'
             viibility={setMenuVisible} mute={isMute} connected={isConnected}/>
        <View style={{height : '100%'}}>
        <ScreenTemplate>
        <Provider theme={theme}>
        <View style={{height : 0}}>
            <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={{ x: 0 , y : 0}}
            >
            <Button icon="magnify" mode="contained" color={Colors.grey800} 
                onPress={() => {setMenuVisible(false);}}
                style={styles.menuBtn} labelStyle={styles.menuBtnLabel} contentStyle = {styles.menuBtnContent}>
                جستجو
            </Button>
            <Button icon={isMute ? 'volume-low' : 'volume-variant-off'} mode="contained" color={Colors.grey800} 
                onPress={() => {setMenuVisible(false); setIsMute(prev => !prev); }}
                style={styles.menuBtn} labelStyle={styles.menuBtnLabel} contentStyle = {styles.menuBtnContent}>
                حالت {isMute ? "با" : "بی"} صدا
            </Button>
            </Menu>
        </View>
        </Provider>
        {/*-------------------Main Part--------------------*/}
        <View style={styles.container}>
            <Modal
            style={{height : 500 , width : 300}}
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            console.log("Modal has been closed.");
            // setModalVisible(false);
            }}
            >
                <MessageSearch />
            </Modal>
            
            <JalaliDatePicker onDateChange={(date) => console.log('--date by Props--', date)}/>
            <Button mode="contained" onPress={()=> setModalVisible(true)}> ShowModal </Button>
            <Button mode="contained" onPress={()=> setIsConnected(prev => !prev)}> connect </Button>
        </View>
        </ScreenTemplate>
        </View>
        </>
    )
}
export default Message