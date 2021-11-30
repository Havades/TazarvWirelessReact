import React , {useState} from 'react'
import { View, Text } from 'react-native'
import {MessageAppBar , ScreenTemplate} from '../../components/template'
import { Button, Menu, Divider, Provider, Colors } from 'react-native-paper';
import styles from './style'

const Message = (props) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <>
        <MessageAppBar {...props } title='پیام ها' viibility={setVisible}/>
        <ScreenTemplate>
        <Provider>
        <View>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={{ x: 0 , y : 0}}
            >
            <Button icon="magnify" mode="contained" color={Colors.grey800} onPress={() => console.log('Pressed')}
            style={styles.menuBtn} labelStyle={styles.menuBtnLabel} contentStyle = {styles.menuBtnContent}>
                جستجو
            </Button>
            <Button icon="magnify" mode="contained" color={Colors.grey800} onPress={() => console.log('Pressed')}
            style={styles.menuBtn} labelStyle={styles.menuBtnLabel} contentStyle = {styles.menuBtnContent}>
                حالت بی صدا
            </Button>
            </Menu>
        </View>
        </Provider>
            <Text>ededde</Text>
        </ScreenTemplate>
        
        {/* //   anchor={<Button onPress={openMenu}>Show menu</Button>} */}
        </>
    )
}

export default Message
