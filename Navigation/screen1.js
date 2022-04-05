import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Screen1=({navigation,route})=>{
    const {x}=route.params
   
   

  
    return (
        <View>
            <TouchableOpacity
            onPress={()=>{navigation.setParams({
                x:'india'
            })
            navigation.navigate('Screen2',route.params)}}>
            <Text>
                {`Push:This is Screen 1..`}
            </Text>
            </TouchableOpacity>

            <Text>{`${JSON.stringify(route.params)}`}</Text>
            
        </View>
    )

}
export default Screen1