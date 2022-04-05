import React from "react";
import {View, Text, SafeAreaView, FlatList} from 'react-native'

export default class FetchApiCall extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            Data:[]
        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            this.setState({Data:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
renderMyItem =(item)=> (
        <View style={{marginHorizontal:10,height:40, width:'50%',borderRightWidth:1 ,borderRightColor:'pink'}}>
            <Text>{`${item.id}  ${item.email}`}</Text>
        </View>
    )
    itemSeparator=()=>
       ( <View style={{borderWidth:1, borderColor:'grey',}}></View>)
    

    render()
    {
        console.log('Data is', this.state.Data)
        return(
            <SafeAreaView>
                <FlatList
                data={this.state.Data}
                renderItem = {({item})=>this.renderMyItem(item)
                }
                ItemSeparatorComponent={this.itemSeparator}
                numColumns={2}
                keyExtractor={item=>item.id}
               />
            </SafeAreaView>
        )
    }
}
