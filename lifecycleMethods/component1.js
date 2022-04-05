import React,{useState} from "react";
import {View,Text,SafeAreaView, FlatList} from 'react-native'
import Component2 from "./component2";

const Component1=()=>{
    const [data, setData]= useState([{x:1,y:2},{x:3,y:4},{x:5,y:6},{x:7,y:8}])


    const renderItem=({item})=>(
        <Component2 item={item}/>
    )

    return (
       <SafeAreaView>
           <FlatList
           data={data}
           renderItem={(item)=>renderItem(item)}/>


       </SafeAreaView>
    )

}
export default Component1