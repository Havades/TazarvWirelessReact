import React from 'react'
import { Alert, Button, NativeModules, Text, View, StyleSheet } from 'react-native';
import { AppBar} from './../../components/template'

const {TCPModule, DBDataModule} = NativeModules;
 
const Main = (props) => {
    return (
      <>
        <AppBar {...props } title='سامانه بی سیم' isShowSearch={false}/>
        <View style={{display: 'flex' , flex : 1}}>
        <View style={{flex : 1}}>
          <Text> App.js File </Text>
        </View>
        <View style={{flex : 1}}>
          <Button title="Native Toast TCP module" 
            onPress={() => TCPModule.MakeToast("Omid Is Back :S")}/>
        </View>
        <View style={{flex : 1}}>
          <Button title="Object Test" 
            onPress={() =>{ 
              const data = DBDataModule.GetData("Tbl_AreaUser")
              console.log("Map: " , data)
             //  Alert.alert(model.Id + "-\n-" + model.IP + "-\n-" + model.Port + "-\n-" + model.IsConnected);
            }}/>
        </View>
        <View style={{flex : 1}}>
          <Button title="Start SQLite" style ={styles.DBButton}
            onPress={() => console.log(TCPModule.StartDB()) }/>
        </View>
      </View>
    </>
    )
}
const styles = StyleSheet.create({
    DBButton : {
      color : "red"
    }
  })
export default Main
