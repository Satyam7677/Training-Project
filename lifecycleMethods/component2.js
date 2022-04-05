import React from "react";
import {View, Text} from 'react-native'

export default class Component2 extends React.PureComponent
{
    constructor(props){
        super(props)

    }

   render()
   {
       console.log('Render')
       
       return(
           <View>
               <Text>{`x:${this.props.item.x} and y:${this.props.item.y}`}</Text>
           </View>
       )
   }
}