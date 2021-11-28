import React , {useEffect , useState} from 'react'
import {Room} from './../.././../components/organism'
import styles from './style'
import {ScreenTemplate} from './../../../components/template'
import data from './../../../assets/dummy/chatroom.json'
import { FlatList } from 'react-native'

const Channels = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        setRooms(data.channels)
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

export default Channels
