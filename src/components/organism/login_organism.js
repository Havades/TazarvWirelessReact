import React from 'react'
import { View , StyleSheet , Image, Text, ScrollView} from 'react-native'
import { Center } from './../molecule'
import { OrangeLine } from './../atoms'
import { Colors } from 'react-native-paper'
const LoginOrganism = (props) => {
    return (
        <View style={styles.view}>
            <ScrollView>
            <View style={styles.bar}>
                <Text style={styles.text}> {props.title} </Text>
                <Image style={styles.image}
                        source={require('./../../assets/tazarv-log.png')}
                />
                {/* <Image style={styles.image}
                        source={{
                                uri :'https://adrinsoft.ir/image/aang.jpg',   
                                height: 50,
                                width: 50
                        }}
                /> */}
            </View>
            <Center>
                <OrangeLine/>
                {props.children}
            </Center>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    view :{
        // flex : 1,
        flexDirection : 'column',
        width : '100%',
        backgroundColor : Colors.grey700,
        borderRadius : 20,
        borderWidth : 1,
        borderColor : 'black',
        borderStyle : 'solid',
        alignSelf:'center',
        padding : 8,
        maxWidth : 600,
    },
    bar : {
        flexDirection : 'row-reverse',
        alignItems : 'space-between',
    },
    text : {
        fontSize : 25,
        color : 'white',
        flex : 1,
        height : 60,
        textAlignVertical : 'center',
        marginTop : 0
    }, 
    image : {
        alignSelf : 'flex-end',
        width : 80,
        height :60
    }
})


export default LoginOrganism
