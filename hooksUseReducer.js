import React,{useReducer} from "react";
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'Counter':
            return {...state,count:state.count+1}
        case 'TextSee':
            return {...state,showText:!state.showText}
        default:
            return state
    }
}

const useReducerFun = ()=>{
    const [state,dispatch]= useReducer(reducer,{count:0,showText:false})
    return(
        <SafeAreaView>
            <Text>{state.count}</Text>
            <TouchableOpacity
            onPress={()=>{
                dispatch({type:'Counter'})
                dispatch({type:'TextSee'})
            }}>
                <Text style={{fontWeight:'bold'}}>{'Click here'}</Text>
            </TouchableOpacity>
            {state.showText && <Text>{'Ab main dikh rha hu '}</Text>}
        </SafeAreaView>
    )
}
export default useReducerFun