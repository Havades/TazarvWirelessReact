import React , {useEffect , useState} from 'react'
import {Room} from './../.././../components/organism'
import {ScreenTemplate} from './../../../components/template'
import data from './../../../assets/dummy/chatroom.json'
import { FlatList } from 'react-native'

const Users = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        setRooms(data.users)
    }, [])
    const renderItem = ({item ,index, separators }) => (
        <Room caption={item.caption} name={item.name} isSilent={item.silent}/>
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
