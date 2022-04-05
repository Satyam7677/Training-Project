import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Screen4=({navigation})=>{
    return (
        <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Home')}>
                {console.log(navigation)}
            <Text>
                {'This is Screen 4'}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.push('Home')}>
                {console.log(navigation)}
            <Text>
                {'Push:This is Screen 4'}
            </Text>
            </TouchableOpacity>
        </View>
    )

}
export default Screen4