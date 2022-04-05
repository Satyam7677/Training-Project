import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Home=({navigation})=>{
    return (
        <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Screen1',{x:'XXX'})}>
            <Text>
                {'This is Home Screen'}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.push('Screen1',{x:'XXX'})}>
            <Text>
                {'Push:This is Home Screen'}
            </Text>
            </TouchableOpacity>
        </View>
    )

}
export default Home