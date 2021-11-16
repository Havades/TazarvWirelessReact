/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import Navigation from './src/navigation'
import { useSelector } from 'react-redux'
 
const App = () => {

  const state = useSelector((state) => state)

  console.warn(state, "-------omid-------")
 
  return (
    <Navigation/>
   );
 }


 export default App;
 