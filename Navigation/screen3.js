import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Screen3=({navigation,route})=>{
    const {x} = route.params

    return (
        <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Screen4')}>
            <Text>
                {`This is Screen 3 ${x}`}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.push('Screen4')}>
            <Text>
                {'Push:This is Screen 3'}
            </Text>
            </TouchableOpacity>
        </View>
    )

}
export default Screen3