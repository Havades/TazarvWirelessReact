import React , {useState} from 'react'
import { View, Text , TextInput, TouchableOpacity ,Alert,Switch} from 'react-native'
import { LoginTemplate , ScreenTemplate } from './../../components/template'
import styles from './style'

const Setting = () => {
    const [appInfo , setAppInfo] = useState({
                    server : '' , port : 80
                    , sslPort : 443 , isSSL : false 
                    , isShowNoti : false , isPlayNoti : false
                });

    const onSubmit = (e) => Alert.alert("{ " + appInfo.server + ", " + appInfo.port + ", " + appInfo.sslPort 
    + ", " + appInfo.isSSL + ", " + appInfo.isShowNoti + ", " + appInfo.isPlayNoti +"}")
    const onChangeHandle = (e , name) => setAppInfo({...appInfo , [name] : e})
    const toggleSwitch = (name) => {
        const state = appInfo[name];
        setAppInfo({...appInfo , [name] : !state});
    }
    return (
        <ScreenTemplate>
            <View style={styles.container}>
                <LoginTemplate title="تنظیمات نرم افزار">
                    <Text style={styles.text}>
                        سرور : 
                    </Text>
                    <TextInput style={styles.input}
                        onChangeText={(e) => onChangeHandle(e , "server")}
                        placeholder="www.tazarv.com"
                    />
                    <View style={styles.viewPort}>
                        <Text style={styles.textPort}>
                            پورت : 
                        </Text>
                        <TextInput style={styles.inputPort}
                            onChangeText={(e) => onChangeHandle(e , "port")}
                            placeholder="80"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.viewPort}>
                        <Text style={styles.textPort}>
                            پورت SSL : 
                        </Text>
                        <TextInput style={styles.inputPort}
                            onChangeText={(e) => onChangeHandle(e , "sslPort")}
                            placeholder="443"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.viewPort}>
                        <Text style={styles.textPort} onPress={() => toggleSwitch("isSSL")}>
                            دارای SSL
                        </Text>
                        <Switch style={styles.switch}
                                trackColor={{ false: "darkgrey", true: "orange" }}
                                thumbColor="white"
                                ios_backgroundColor="darkgrey"
                                onValueChange={() => toggleSwitch("isSSL")}
                                value={appInfo.isSSL}
                        />
                    </View>
                    <View style={styles.viewPort}>
                        <Text style={styles.textPort} onPress={() => toggleSwitch("isShowNoti")}>
                            نمایش اعلانات
                        </Text>
                        <Switch style={styles.switch}
                                trackColor={{ false: "darkgrey", true: "orange" }}
                                thumbColor="white"
                                ios_backgroundColor="darkgrey"
                                onValueChange={() => toggleSwitch("isShowNoti")}
                                value={appInfo.isShowNoti}
                        />
                    </View>
                    <View style={styles.viewPort}>
                        <Text style={styles.textPort} onPress={() => toggleSwitch("isPlayNoti")}>
                            پخش صوت اعلانات
                        </Text>
                        <Switch style={styles.switch}
                                trackColor={{ false: "darkgrey", true: "orange" }}
                                thumbColor="white"
                                ios_backgroundColor="darkgrey"
                                onValueChange={() => toggleSwitch("isPlayNoti")}
                                value={appInfo.isPlayNoti}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={onSubmit}>
                        <Text style={styles.txtTouch}> ذخیره </Text>
                    </TouchableOpacity>
                </LoginTemplate>
            </View>
        </ScreenTemplate>
    )
}

export default Setting
