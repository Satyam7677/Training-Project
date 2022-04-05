import React,{useState} from 'react'
import {SafeAreaView, Text,TouchableOpacity} from 'react-native'

const fun =()=>{
    const[data, setData] = useState('')
    const [count, setCount] = useState(0)


    return (
        <SafeAreaView >
            <TouchableOpacity style={{backgroundColor:'grey',width:80}} onPress={()=>{
                setCount(count+1)
            }}>
                <Text>{'Press here'}</Text>
            </TouchableOpacity>
            <Text>{`The count is ${count}`}</Text>
 
        </SafeAreaView>
    )

}
export default fun