/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  NativeModules,
  Text,
  View,
} from 'react-native';

const {MyModule} = NativeModules;

const App = () => {

  return (
    <View>
      <Text>App.js File</Text>
      <Button title="Native Toast" onPress={() => MyModule.MakeToast("Omid Is Back :D")}/>
    </View>
  );
};

export default App;
