import React , {useEffect , useState} from 'react'
import {Room} from './../.././../components/organism'
import styles from './style'
import {ScreenTemplate} from './../../../components/template'
import data from './../../../assets/dummy/chatroom.json'
import { FlatList, View } from 'react-native'
const ActiveUsers = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        setRooms(data.activeusers)
    }, [])
    const renderItem = ({item ,index, separators }) => (
        <Room caption={item.caption} name={item.name} isSilent={item.silent}
            type={"activeuser"} messageCount={item.msgCount}/>
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

export default ActiveUsers
