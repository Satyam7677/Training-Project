import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './logIn';
import SignUp from './signUp'
import Home from './home'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "SignUp" component = {SignUp}/>
        <Stack.Screen name = 'Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}