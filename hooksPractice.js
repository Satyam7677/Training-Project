import React,{useReducer} from "react";
import { SafeAreaView, Text, TouchableOpacity, } from 'react-native';

const reducer=(state, action)=>{
    switch(action.type)
    {
        case 'counter':
            return {...state,count:state.count+1}
        case 'ShowText':
            return {...state, showText:!state.showText}
        default :
            return state
    }
}

const PracticeHooks =()=>{
    const [state, dispatch] = useReducer(reducer, {count:0, showText:true})

    return (
        <SafeAreaView>
            <Text>{state.count}</Text>
            <TouchableOpacity
            onPress={()=>{
                dispatch({type:'counter'})
                dispatch({type:'ShowText'})
            }}><Text>{'Click here'}</Text></TouchableOpacity>
            {state.showText && <Text>{'Visible'}</Text>}
        </SafeAreaView>
    )
}
export default PracticeHooks