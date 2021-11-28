import React , {useEffect , useState} from 'react'
import {Room} from './../.././../components/organism'
import {ScreenTemplate} from './../../../components/template'
import data from './../../../assets/dummy/chatroom.json'
import { FlatList } from 'react-native'

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
             <FlatList
                data={rooms}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScreenTemplate>
    )
}

export default Users
