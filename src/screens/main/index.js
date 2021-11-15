import React from 'react'
import { Alert, Button, NativeModules, Text, View, StyleSheet } from 'react-native';

const {TCPModule} = NativeModules;
 
const Main = () => {
    return (
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
              const model = TCPModule.TestModel();
              console.log("Omid Map" , model)
             //  Alert.alert(model.Id + "-\n-" + model.IP + "-\n-" + model.Port + "-\n-" + model.IsConnected);
            }}/>
        </View>
        <View style={{flex : 1}}>
          <Button title="Start SQLite" style ={styles.DBButton}
            onPress={() => console.log(TCPModule.StartDB()) }/>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    DBButton : {
      color : "red"
    }
  })
export default Main
