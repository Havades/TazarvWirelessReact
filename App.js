/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React , {useEffect} from 'react'
import {DrawerNavigation} from './src/navigation'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as actionCreator from './src/store/actions'
import {Dimensions} from 'react-native'
import { isTablet, isLandscapeSync} from 'react-native-device-info';

const App = () => {
  const dispatch = useDispatch()
  const {screenSizeChange} = bindActionCreators(actionCreator , dispatch)

  const screenHandler = (screen) => {
    screenSizeChange({
      width : screen.width,
      height : screen.height,
      isTablet : isTablet(),
      isLandscape : isLandscapeSync()
    })
    console.log('tablet:',isTablet(),' land:',isTablet())
  }
  useEffect(() => {
    screenHandler({width : 0 ,height : 0})
    const screenChangeEvent = Dimensions.addEventListener('change' , ({screen}) => screenHandler(screen)) 
    return () => {
      screenChangeEvent.remove()
    }
  }, [])
  const state = useSelector((state) => state)
  
  return (
    <DrawerNavigation/>
   );
 }


 export default App;
 