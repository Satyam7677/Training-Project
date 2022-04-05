import React from "react";
import {View,Text,FlatList, SafeAreaView, Alert} from 'react-native'
import axios from 'axios'

export default class TaskFlatlist extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            Data:[],
            page:1
        }
    }

    async componentDidMount()
    {
        try{
        let res= await axios.get('https://jsonplaceholder.typicode.com/comments')
        this.setState({Data:res.data.slice(0,this.state.page*50),page:this.state.page+1})
        }
        catch(error){
            console.log(error)
        }
        console.log('Page: ',this.state.page)
    }



    renderItem=(item)=>(
        <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:20}}>{item.id}</Text>
            <Text>{item.email}</Text>
        </View>
    )

    itemSeparator=()=>(
        <View style={{margin:10}}/>
    )
    onEndReach=async ()=>{
        try{
            let res= await axios.get('https://jsonplaceholder.typicode.com/comments')
            this.setState({Data:res.data.slice(0,this.state.page * 50),page:this.state.page+1})
            }
            catch(error){
                console.log(error)
            }
            console.log('Now page is ',this.state.page)

        
    }

    render()
    {
        return(
            <SafeAreaView>
                <View>
                <FlatList
                    data = {this.state.Data}
                    renderItem={({item})=>this.renderItem(item)}
                    ListEmptyComponent={(<View>
                        <Text>{'List Empty'}</Text>
                    </View>)}
                    onEndReached = {this.onEndReach}
                    onEndReachedThreshold={0.5}
                    ItemSeparatorComponent={this.itemSeparator}

                />
                </View>
            </SafeAreaView>
        )
    }


}