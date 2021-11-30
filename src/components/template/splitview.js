import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { Colors } from 'react-native-paper';
import {useSelector} from 'react-redux'

const styles = StyleSheet.create({
  root: {flex: 1, flexDirection: 'row-reverse'},
  masterView: {flex: 2 },
  detailView: { flex: 3},
  seperator : { 
    width : 1,
    height : '100%',
    backgroundColor : Colors.white 
  }
});

const SplitView = ({children}) => {
  const screen = useSelector(state => state.screen)
  return (
  <View style={styles.root}>
    <View style={styles.masterView}>{children[0]}</View>
    { screen.isLandscape ? 
      <>
      <View style={styles.seperator}/>
      <View style={styles.detailView}>{children[1]}</View>
       </> : null }
  </View>
)};

export default SplitView;