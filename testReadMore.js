import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class TestReadMore extends Component {
    constructor(props){
        super(props)
        this.state = {
            textLenth: null,
            numberOfLines: 3,
        }
    }
  render() {
    return (
        <SafeAreaView>
      <View>
    <Text
     numberOfLines={this.state.numberOfLines}
     onPress={() => this.handleSeeMore()}
     ellipsizeMode="middle"
     onTextLayout={({nativeEvent: {lines}}) =>
     this.setState({textLenth: lines.length === 3})
     }>
         This Gig Take a glance at the showcase of our artistic work:
         Modern and Trendy Logo Artworkslkjfkljf ksnfksfnsf Mascot &
         Custom Logo efdfg Artworks:lk knnk 'Explore the
         ultimate Experience..!' To fulfill your designing needs, 
         Make us Graphically Yours...!! Why Team StrideInIt? We 
         believe in our
     {'                      '}
         {this.state.textLenth && (
         <Text
         color="red"
         onPress={() => this.setState({numberOfLines: 0})}>
             see more
         </Text>
         )}
     </Text>
      </View>
      </SafeAreaView>
    )
  }
}



handleSeeMore = () => {
    this.state.textLenth
    ? this.setState({numberOfLines: 0})
    : this.setState({numberOfLines: 3});
};

