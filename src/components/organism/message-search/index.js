import React , {useState} from 'react'
import { View, Text , Pressable } from 'react-native'
import { TextInput } from 'react-native-paper'
import styles from './style'
import {JalaliDatePicker} from './../../base'
const MessageSearch = () => {
    const [formData , setFormDate] = useState({
        fromData : '' , toDate : '' , fromTime : 0 , toTime :0 , senders : [] , onlineState : ''
    })
    return (
    <View style={styles.parent}>
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.coupleContainer}>
                    <Text style={styles.text} >از تاریخ : </Text>
                    <Pressable onPress={() => console.log('stillomid')}>
                        <TextInput 
                            style={styles.input} 
                            value={'1400/08/06'}
                            placeholder="admin@123"
                            editable={false}
                            disabled={false}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
    )
}

export default MessageSearch
