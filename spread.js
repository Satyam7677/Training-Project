import { SafeAreaView, SectionList, Text, View , StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'
import React, { Component } from 'react'

export default class spread extends Component {
    constructor(){
        super()
        this.state={
            Data : [
                {
                  title: {key :'1' , value : 'test1' , description: 'test demo testing1' },
                  data: ["Pizza", "Burger", "Risotto"]
                },
                {
                  title: {key :'1' , value : "Sides", description: 'test demo testing2' },
                  data: ["French Fries", "Onion Rings", "Fried Shrimps"]
                },
                {
                  title: {key :'1' , value : "Drinks", description: 'test demo testing3' },
                  data: ["Water", "Coke", "Beer"]
                },
                {
                  title: {key :'1' , value : "Desserts", description: 'test demo testing4' },
                  data: ["Cheese Cake", "Ice Cream"]
                }
              ]
        }
    }

   Item=({one})=>{
        console.log('Data: ',one)
        return (
            <View style={styles.childView}>
                <Text style={styles.childText}>{one.item}</Text>
                <TouchableOpacity onPress={()=>{
                    this.delItem(one)
                }}>
                <Text style={{textAlign:'right'}}>{'Delete this'}</Text></TouchableOpacity>
            </View>
        )

    }
    addItem=()=>{
       const x=  {
                  title: {key :'1' , value : "Salad", description: 'test demo testing4' },
                  data: ["Lettuce", "Tomato cuts"]
                }
        this.setState({Data:this.toAdd(x)})

    }
    toAdd=(x)=>{
        for(let i=0;i<this.state.Data.length;i++)
        {
            if(x.title.value==this.state.Data[i].title.value)
            {
                var z= this.state.Data
                z[i].data=[...z[i].data,...x.data]
                return z
            }  
        }
        return [...this.state.Data,x]
    }

    delItem=(one)=>{
        console.log('one.title.value is', one)
       for(let i=0;i<this.state.Data.length;i++)
       {
           if(one.section.title.value==this.state.Data[i].title.value)
           {
               
               this.state.Data[i].data.splice(one.index,1)
               if(this.state.Data[i].data.length==0)
               {
                   this.state.Data.splice(i,1)
               }
           }
       }
       this.setState({Data:this.state.Data})
        // console.log('IndexSec is', IndexSec)
    }


  render() {
    return (
        <SafeAreaView style={styles.mainView}>
      <View style={styles.inView}>
          <Text style={{textAlign:'center', color:'white', fontSize:30,fontWeight:'bold'}}>{'Order Menu'}</Text>
        <SectionList
            sections={this.state.Data}
            renderItem={(item)=><this.Item one={item}/>}
            renderSectionHeader={({section:{title:{value}}})=>(
                <View style={styles.header}>
                    <Text style={styles.headText}>{value}</Text>
                </View>
            )}
            ListEmptyComponent={(<View style={{marginTop:'50%'}}>

                <Text style={styles.headText}>{'Restaurant is closed Now!!'}</Text>
            </View>)}
            />
        <TouchableOpacity
            onPress={
                this.addItem
            } style={{borderWidth:1, borderColor:'greenyellow',borderRadius:30,backgroundColor:'lightslategrey'}}
        >
            <Text style={{color:'white', fontSize:30, textAlign:'center'}}>{'Add Item'}</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create(
    {
        header:{
            backgroundColor:'black'
        },
        headText:{
            color:'white',
            fontSize:30,
            textAlign:'center'
        },
        childText:{
            fontSize:20,
            textAlign:'center'
        },
        childView:{
            flex:1,
            backgroundColor:'silver',
            borderWidth:1,
            borderRadius:10
        },
        mainView:{
            flex:1,
            backgroundColor:'black'
        },
        inView:{
            flex:1,
            backgroundColor:'black'
        }
    }
)



