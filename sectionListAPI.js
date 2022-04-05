import {
  Text,
  View,
  StyleSheet,
  SectionList,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
export default class apiSectionlist extends Component {
  constructor(props) {
    super(props);

    this.state = {APIdata: [],};
   
  }


   getDescription=(title)=>{
    return(
      <Text numberOfLines={this.a}>{title.desc}</Text>
    )
  
   }






  async componentDidMount() {
    try{
    let response= await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c38e5779ba4a43b1890ee609d32f75d1',
      )
      console.log("articles",response.data.articles)
        this.setState({
          APIdata: response.data.articles
          .map(item => {
            return ({
              title: item.source.name,
              desc: item.description,
              img: item.urlToImage,
              author:item.author
            })
          })
        })
      }
      catch(error) {
        console.log('The error is',error);
      }
      // console.log('this.state.data: ', this.state.APIdata)

      // const reducer = (acc, cur) => {
      //   const item = acc.find((x) => x.title === cur.title);
      //   if (item) {
      //     item.data.push(cur);
      //   } else {
      //     acc.push({
      //       title: cur.title,
      //       data: [cur]
      //     });
      //   }
      //   return acc;
      // };
      // console.log(this.state.APIdata.reduce(reducer, []))
      // this.setState({APIdata:this.state.APIdata.reduce(reducer, [])})

      ////******Code to format data */


 console.log(this.formatData())
//  this.setState({APIdata:formatData})
     
    //   //   console.log("item me return hua", typeof(item))
    //   // this.setState()
    //   console.log('nArr looks like this',nArr)
    //   // this.setState({APIdata:nArr})
    //   console.log('API data is ', this.state.APIdata)
  }


  formatData=()=>{return(this.state.APIdata.reduce((accum, current)=> {
    // console.log("inside reduce",accum,current)
       let group = accum.find(x => x.title === current.title);
       if(!group) {
         group = { title: current.title, data: [] }
         accum.push(group);
       }
       group.data.push(current);
       return accum;
     }, []))};





  a = 1
  read = 'Read More'

  render() {
    // console.log('MAin YAhan HU YAHan')

    // console.log(this.state.APIdata)

    const Item = ({title}) => {
      // console.log('tilte',title)
      return (
        <View style={styles.item}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: title.img}} style={styles.image} />
            <Text style={styles.title}>{title.title}</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold',color:'grey'}}>{title.author}</Text>
            {/* <Text numberOfLines={this.a}>{title.desc}</Text> */}
            {this.getDescription(title)}
            <Text
              style={{textAlign: 'right', color: 'blue'}}
              onPress={
                ()=>{
                  //  const indexSec= formatData.findIndex(i=>(i.title==title.title))
                    // console.log('The value of nArr',nArr)
                    // console.log('The value of nArr[indexSec]', nArr[indexSec].data)
                    // console.log('The value of title.data.desc',title.desc)
                   // const indexInSec = formatData[indexSec].data.findIndex(i=>(i.desc==title.desc))
                    // console.log('The value of array at index is', nArr[indexSec])
                    // console.log('Index of section is', indexSec)
                    // console.log('Index of inside section is', indexInSec)
                    if(this.a==1)
                    {this.a=null
                    this.read ='Read Less'}
                    else
                    {this.a=1
                      this.read='Read More'}
                    this.setState({})
                }
            }
              > 
              {this.read}
            </Text>
          </View>
        </View>
      );
    };

    return (
      <SafeAreaView>
        <View>
          <SectionList
            sections={this.formatData()}
            renderItem={({item}) => <Item title={item}/>}
            keyExtractor={(item, index) => index} 
            renderSectionHeader={({section: {title}}) => {
              return (
                <View style={{backgroundColor: 'white'}}>
                  <Text style={styles.header}>{title}</Text>
                </View>
              );
            }}
            ListEmptyComponent={()=>(
                <View style={{alignItems:'center', justifyContent:'center', marginTop:300}}>
                    <Text style={{color:'red',fontSize:30, fontWeight:'bold'}}>{'Your net might be slow'}</Text>
                </View>
            )

            }
          /> 
         
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  inview: {
    flexDirection: 'row',
  },
  otview: {
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    margin: 10,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  header: {fontSize: 30, fontWeight: 'bold', color: 'brown'},
  image: {height: 60, width: 60, borderRadius: 10},
});
