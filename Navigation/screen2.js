import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'

const Screen2=({navigation,route})=>{
    const {x} = route.params

    
    return (
        <View>
            <Text>
                {`${x}.....`}
      
            </Text>
            
        </View>
    )

}
export default Screen2