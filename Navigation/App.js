import React from "react";
import {View, Text} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './home'
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";


const RootStack = createNativeStackNavigator()

const App=()=>{

    return(
    <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen name='Home' component={Home}/>
            <RootStack.Screen name='Screen1' component={Screen1}/>
            <RootStack.Screen name='Screen2' component={Screen2}/>
            <RootStack.Screen name='Screen3' component={Screen3}/>
            <RootStack.Screen name='Screen4' component={Screen4}/>
        </RootStack.Navigator>
    </NavigationContainer>
    )


}
export default App