import React , {useState , useEffect} from 'react'
import { View, Text, StyleSheet , Alert , TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import styles from './style'
import { useSelector} from 'react-redux'

const Room = (props) => {
    const [isRecording, setIsRecording] = useState(false)
    const [isMute, setIsMute] = useState(false)
    const {isTablet , isLandscape} = useSelector((state) => state.screen)
    useEffect(() => {
        setIsMute(props.isSilent)
    }, [])
    return (
        <View style={styles.container}>
            { props.type === 'user' ?
            <View style={styles.wifiIcon}>
                <MaterialCommunityIcons name={props.online ? 'wifi' : 'wifi-off'} size={40} 
                    color={props.online ? Colors.blue400 : Colors.grey100}/>
            </View>
            : <TouchableOpacity activeOpacity={0.8} onPressIn={()=> setIsRecording(true)} onPressOut={()=> setIsRecording(false)}>
                <MaterialCommunityIcons name="microphone" style={styles.micIcon} size={70} 
                    color={isRecording ? Colors.red500 : Colors.orange400}/>
            </TouchableOpacity>
            }
            <TouchableOpacity style={{flex : 1}} activeOpacity={0.8} onPress={()=>{
                if(!isLandscape || !isTablet)
                    props.nav.navigation.navigate('Messages')
            }}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text , styles.topText]} ellipsizeMode={'tail'} numberOfLines={1}>
                    {props.name} </Text>
                    <View style={styles.captionContainer}>
                        <Text style={[styles.text , styles.bottonText]} ellipsizeMode={'tail'} numberOfLines={1}>
                            {props.caption}</Text>
                        <Text style={[styles.text , styles.stopwatch]}>
                            {isRecording && '01:05:78'}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.countContainer}>
                <Text style={styles.txtCount}> {props.messageCount > 99 ? '+99' : props.messageCount} </Text>
            </View>
            { props.type === 'channel' ?
            <TouchableOpacity activeOpacity={0.8} style={styles.SpeakerIcon} 
                onPress={() => {
                    const withTxt = isMute ? 'با' : 'بی';
                    Snackbar.show({
                        text: 'اتاق گفتگوی ' + props.name + ' به حالت '+ withTxt +' صدا درآمد.',
                        duration: Snackbar.LENGTH_LONG,
                        rtl	: true,
                        textColor : Colors.black,
                        backgroundColor : Colors.orange200
                    });
                    setIsMute(prev => !prev)
                    }}>
            <MaterialCommunityIcons name={isMute ? "volume-off": "volume-high"} size={40} 
                    color={isMute ? Colors.red400 :Colors.green400} />
            </TouchableOpacity>
            : <View style={styles.space}/>
            }
        </View>
    )
}
export default Room
