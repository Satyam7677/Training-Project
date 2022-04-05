import { SafeAreaView, Text, View, SectionList,} from 'react-native'
import React, { PureComponent } from 'react'
import axios from 'axios'

export default class  extends PureComponent {
    constructor(props){
        super(props)

        this.state={
            APIdata:[],
            counter:0

        }
    }

  async componentDidMount()
    {
        try{
       let res= await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c38e5779ba4a43b1890ee609d32f75d1')
        this.setState({APIdata:res.data.articles})

        }
        catch(error){
            console.log(error)
        }
       console.log('Inside component did mount')
       console.log('API data is ',this.state.APIdata)
    }

    formatData = ()=>{
        this.state.APIdata.reduce((prev,cur)=>{
            let group=prev.find(x=>x.source.name)
        })
    }

  render() {
      console.log('Inside render')
    return (
        <SafeAreaView>
      <View>
        <Text>{'This is pure component'} </Text>
        <Text onPress={()=>{
            this.setState({counter:this.state.counter+1})
        }}>{'Satyam'}</Text>
      </View>
      </SafeAreaView>
    )
  }
}