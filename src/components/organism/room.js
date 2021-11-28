import React , {useState , useEffect} from 'react'
import { View, Text, StyleSheet , Alert , TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper';
const Room = (props) => {
    const [isRecording, setIsRecording] = useState(false)
    const [isMute, setIsMute] = useState(false)
    useEffect(() => {
        setIsMute(props.isSilent)
    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPressIn={()=> setIsRecording(true)} onPressOut={()=> setIsRecording(false)}>
                <MaterialCommunityIcons name="microphone" style={styles.micIcon} size={70} 
                    color={isRecording ? Colors.red500 : Colors.orange400}/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex : 1}} activeOpacity={0.8} onPress={()=>Alert.alert("Icon" , "Should Navigate :D")}>
                <View style={styles.textContainer} onPress={()=>Alert.alert("Icon" , "You clicked on speaker icon !!!")}>
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
            <TouchableOpacity activeOpacity={0.8} style={styles.SpeakerIcon} 
                onPress={() => setIsMute(prev => !prev)}>
                <MaterialCommunityIcons name={isMute ? "volume-off": "volume-high"} size={50} 
                    color={isMute ? Colors.red400 :Colors.green400} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        marginTop : 10,
        flexDirection : 'row-reverse',
        height : 70,
        paddingBottom : 5,
        borderColor : 'grey',
        borderWidth : 1,
        borderRadius : 20
    },
    textContainer: {
        flex : 1,
        flexDirection : 'column'
    },
    captionContainer : {
        flexDirection : 'row'
    },
    text : {
        color : 'white'
    },
    topText : {
        fontSize : 25,
        flex : 2,
    },
    SpeakerIcon : {
        width : 70,
        height : 70,
        alignItems : 'center',
        justifyContent : 'center'
    },
    micIcon: {
        width : 70
    },
    bottonText : {
        fontSize : 15,
        flex : 1,
        textAlign : 'left',
        textAlignVertical : 'center'
    },
    stopwatch : {
        color : Colors.red200,
        width : 70,
        textAlign : 'right',
    }
})
export default Room
