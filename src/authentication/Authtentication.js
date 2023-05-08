import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreen from '../screens/todo/TodoScreen';
import ForgetScreen from '../screens/ForgetScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Authtentication = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TodoScreen" component={TodoScreen} options={{title: 'Todo List'}}/>
        <Stack.Screen name="ForgetScreen" component={ForgetScreen}/>
    </Stack.Navigator>
  );
};

export default Authtentication;