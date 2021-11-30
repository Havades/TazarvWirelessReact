import React , {useEffect , useState} from 'react'
import {Room} from './../.././../components/organism'
import {ScreenTemplate} from './../../../components/template'
import data from './../../../assets/dummy/chatroom.json'
import { FlatList , StyleSheet , View } from 'react-native'
import styles from './style'


const Users = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        const list = data.users.sort((a,b) => (a.isOnline === b.isOnline) ? 0 : (a.isOnline) ? -1 : 1)
        setRooms(list)
    }, [])
    const renderItem = ({item ,index, separators }) => (
        <Room caption={item.caption} name={item.name} isSilent={item.silent} 
            type={"user"} online={item.isOnline} messageCount={item.msgCount}/>
    );
    return (
        <ScreenTemplate>
            <View style={styles.container}>
                <FlatList
                    data={rooms}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScreenTemplate>
    )
}
export default Users
