import React from 'react'
import { Alert, Button, NativeModules, Text, View, StyleSheet } from 'react-native';
import { AppBar} from './../../components/template'
const {TCPModule, DBDataModule, AuthModule, PlayerModule} = NativeModules;

const Test = (props) => {
    return (
        <>
        <AppBar {...props } title='تست' isShowSearch={false}/>
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
              //const data = DBDataModule.GetData("Tbl_User","UserId=6")

              PlayerModule.PlaySound();

                /*
                AuthModule.Login({Username:'hashemi', Password:'123', IsRemember:true},(error,data)=>{
                  console.log(data,error);
                });
                */

                /*
                AuthModule.CheckRemember((error,data)=>{
                  console.log(data,error);
                });
                */

              //console.log("Login Result: " , data)
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
export default Test
