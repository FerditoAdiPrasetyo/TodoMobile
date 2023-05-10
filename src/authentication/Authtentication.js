import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreen from '../screens/todo/TodoScreen';
import TodoBeta from '../screens/beta/TodoBeta';
import Splash from '../screens/splash';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Authtentication = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TodoScreen" component={TodoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TodoBeta" component={TodoBeta}/>
    </Stack.Navigator>
  );
};

export default Authtentication;