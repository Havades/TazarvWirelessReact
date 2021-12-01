import React , {useEffect , useState} from 'react'
import { View, Text , StyleSheet , Image , Dimensions} from 'react-native'
import { Appbar ,IconButton, Colors ,Button,Menu, Divider, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector} from 'react-redux'

const MessageAppBar = (props) => {
    const {isTablet , isLandscape} = useSelector((state) => state.screen)
    const [dim , setDim] = useState({x: 0, y:0 , height: 0, width: 0})
    useEffect(() => {
        const window = Dimensions.get('window')
        if(isTablet && isLandscape && window.width === dim.width)
            props.navigation.goBack();
    }, [dim])
    return (
    <>
    <Appbar.Header style={styles.header} onLayout={(e)=> {
        const location = e.nativeEvent.layout;
        setDim(location)
    }}>
        {isTablet && isLandscape ? null :
            <Appbar.BackAction style={styles.backBtn} size={35} onPress={() => {props.navigation.goBack()}} />}
        <Appbar.Content
            title={<Text ellipsizeMode={'tail'} style={styles.AppbarText}>{props.title}</Text>}
            subtitle={props.subtitle} style={styles.text} />
        <View style={{width : isLandscape ? 60 : 30, flexDirection : isLandscape ? 'row' : 'column'}}>
            <View style={{flex : 1}}>
            {props.mute ? <MaterialCommunityIcons name="volume-variant-off" size={isLandscape ? 30 : 25} color={Colors.grey500}/> : null}
            </View>
            <View style={{flex : 1}}>
            {props.mute ? <MaterialCommunityIcons name="filter" size={isLandscape ? 30 : 25} color={Colors.green300}/> : null}
            </View>
        </View>
        {props.connected ? <Ionicons style={styles.connected} name="shield-checkmark" size={30} color={Colors.orange400}/> 
            : <Image style={styles.image} source={require('./../../assets/connection_wait.gif')}/>}
        <Appbar.Action icon="dots-vertical" size={35} onPress={() => props.viibility(prev => !prev)} />
    </Appbar.Header>
    </>
    )
}
const styles = StyleSheet.create({
    header : {
        backgroundColor : Colors.black,
        borderBottomColor : Colors.white,
        borderTopColor : Colors.white,
        borderTopWidth : 1,
        borderBottomWidth : 1,
        flexDirection : 'row-reverse',
        height : 70
    },
    text : {
        flex : 1,
        alignItems : 'flex-end'
    },
    AppbarText: {
        fontSize : 25,
        textAlign : 'center'
    },
    connected : {
        marginRight : 10
    },
    backBtn : {
        transform: [{ rotate: '180deg'}],
        height : '100%',
        alignSelf : 'center',
    },
    image : {
        width : 20,
        height : 20,
        marginRight : 10
    },
})
export default MessageAppBar
