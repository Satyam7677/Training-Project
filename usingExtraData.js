import React,{useState,useEffect} from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList} from 'react-native'
const UsingExtraData = ()=>{
    const [Data, setData] = useState([])

    const Items_1=[{
        id:1,
        name: 'A'
    },
    {
        id:2,
        name: 'B'
    },
    {
        id:3,
        name: 'C'
    },
    ]

    const Items_2=[
        {
            id:4,
            name: 'D'
        },
        {
            id:5,
            name: 'E'
        },
        {
            id:6,
            name: 'F'
        },
    ]

    useEffect(()=>{
        setData(Items_1)
    },[])

    const re_render_Flatlist= ()=>{
        setData([...Items_1,...Items_2])
    }

    const Render_Item=({name})=>(
            <View>
                <Text>{name}</Text>
            </View>
    )

    return(
        <SafeAreaView>
            <TouchableOpacity
            onPress={re_render_Flatlist}>
                <Text>{'Click here to re-render'}</Text>
            </TouchableOpacity>

            <FlatList
            data = {Data}
            renderItem={({item})=><Render_Item name={item.name}/>}
            keyExtractor={item=>item.id}
            extraData = {Data}
            />
        </SafeAreaView>
    )

}
export default UsingExtraData