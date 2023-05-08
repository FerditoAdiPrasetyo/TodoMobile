import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authtentication from './authentication/Authtentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  return (
    <NavigationContainer>
      <Authtentication/>
    </NavigationContainer>
  )
}

export default App;