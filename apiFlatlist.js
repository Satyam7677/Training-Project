// import { View, Text, FlatList, SafeAreaView, StyleSheet,Image } from 'react-native'
// import React from 'react'
// import axios from 'axios'

// export default function apiFlatlist() {
//     const [APIdata, setData] = React.useState([])
//   axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{ 
//       setData(response.data)
//     }).catch(err=>{console.log(err)})
   

//     const renderMyItem=(item)=>{
//         return(
//             <View style={styles.inView}>
//                 <Text style={styles.text}>{'Name: '+ item.name}</Text>
//                 <Text style={styles.text}>{'Email: '+ item.email}</Text>
//                 <Text style={styles.text}>{'Address: '+item.address.street +' '+ item.address.city}</Text>
                
//             </View>
//         )
//     }


//   return (
//       <SafeAreaView style={styles.scroll}>
//       <View style={{flex:1}} >
//           <Text style={{fontSize:30, alignSelf:'center'}}>{'Details'}</Text>
//           <FlatList
//          ItemSeparatorComponent={()=>{return(
//             <View style={{borderBottomWidth:3,borderColor:'white'}}></View>
//          )}}
//          ListEmptyComponent={()=>{
//              return(
//                  <View>
//                      <Image source={require('./src/assets/image/download.jpeg')}/>
//                  </View>
//              )
//          }}
//           numColumns={2}
//           data={APIdata}
//           renderItem={({item})=>
//               renderMyItem(item)
//           }
//           />
//       </View>
//       </SafeAreaView>
//   )
// }




import { Text, View,StyleSheet, FlatList, SafeAreaView, Alert, RefreshControl} from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import { Header } from 'react-native/Libraries/NewAppScreen'
export default class apiFlatlist extends Component {
    constructor(props){
        super(props)
    this.state={APIdata:[]}

    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            this.setState({APIdata:response.data})
        }).catch(err=>{
            console.log(err)
        })
        console.log('Inside component did mount',this.state.APIdata)
    }
     


  render() {
    const renderMyItem=(item)=>{
        return(
            <View style={styles.inView}>
                <Text>{'Name: '+item.name}</Text>
                <Text>{'Email: '+item.email}</Text>
                <Text>{'Phone number: '+item.phone}</Text>
                <Text>{'Latitude: '+item.address.geo.lat}</Text>
            </View>
        )
    }
    const HeaderComp=()=>{
        return(
            <Text style={styles.footText}>Fetching Details</Text>
        )
    }

    const endReach=()=>{
        console.log('Inside endReach')
        return(
          Alert.alert('You have reached the end')
        )
    }
    const newAPiCall=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(respnse=>{this.setState({APIdata:this.state.APIdata.concat([{name:'Satyam', email:'s@mail.com',phone:98999, address:{geo:{lat:179}}}])})})
        .catch(err=>{console.log(err)})
        console.log('This is inside newAPI Call',this.state.APIdata)
    }
    return (
        <SafeAreaView style={styles.scroll}>
      <View >
          <FlatList
            data={this.state.APIdata}
            numColumns={2}
            ItemSeparatorComponent={()=>{
                return(
                    <View style={{borderBottomWidth:2, marginBottom:10}}></View>
                )
            }}
            ListEmptyComponent={()=>{
                return(
                    <View>
                        <Text>Hello</Text>
                    </View>
                )
            }}
            ListFooterComponent={()=>{return(
                    <Text style={styles.footText}>End of the list</Text>   
            )}}
            ListFooterComponentStyle={styles.footer}
            ListHeaderComponent = {HeaderComp()}
            ListHeaderComponentStyle={styles.header}
            // onEndReached={endReach}
            // onEndReachedThreshold={0.5}
            refreshControl={<RefreshControl refreshing={false} onRefresh={newAPiCall}/>}
            renderItem={({item})=>
            renderMyItem(item)
                      }
          />
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    scroll:{
        flex:1,
        backgroundColor:'white' ,   
    },
    inView:{
        backgroundColor:'silver',
        borderRightWidth:1,
        height:'100%',
        width:'50%',
    },
    text:{
        fontSize:17
    },
    footer:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center',
        backgroundColor:'aqua'
    },
    footText:{
        fontSize:30,
        fontWeight:'bold'
    },
    header:{
        backgroundColor:'green',
        alignSelf:'center'
    },
    headText:{
        fontSize:40,
        fontWeight:'bold'
    }
 
})