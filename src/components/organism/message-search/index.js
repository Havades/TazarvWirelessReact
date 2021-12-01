import React , {useState} from 'react'
import { View, Text , Pressable , Modal } from 'react-native'
import { IconButton, TextInput } from 'react-native-paper'
import styles from './style'
import {JalaliDatePicker} from './../../base'

const MessageSearch = (props) => {
    const [datePickerVisible , setDatePickerVisible] = useState(false)
    const [formData , setFormDate] = useState({
        fromDate : '1400/08/05' , toDate : '' , fromTime : 0 , toTime :0 , senders : [] , onlineState : ''
    })
    return (
    <Pressable onPress={()=> props.closeModal()} style={styles.parent}>
        <Pressable onPress={()=> {}} style={styles.container}>
            <IconButton icon="close-circle" color="red" size={40} style={styles.closeBtn}
                        onPress={() => props.closeModal()}
                    />
            <View style={styles.mainContainer}>
                <View style={styles.coupleContainer}>
                    <Text style={styles.text} >از تاریخ : </Text>
                    <Pressable onPress={() => setDatePickerVisible(true)}>
                        <TextInput
                            style={styles.input} 
                            value={formData.fromDate}
                            placeholder="admin@123"
                            editable={false}
                            disabled={false}
                        />
                    </Pressable>
                </View>
            </View>
        </Pressable>
        <Modal
            style={{height : 20 , width : 20 , margin : 0}}
            animationType="fade"
            transparent={true}
            visible={datePickerVisible}
            onRequestClose={() => {}}
            >
                <JalaliDatePicker initDate={formData.fromDate} close={()=>setDatePickerVisible(false)}
                 onDateChange={(date) => {
                    setDatePickerVisible(false)
                    setFormDate({...formData , fromDate : date})
                    }}/>
            </Modal>
    </Pressable>
    )
}

export default MessageSearch
