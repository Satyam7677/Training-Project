import axios from "axios";
import React,{useRef, useLayoutEffect, useState, useEffect, useMemo} from "react";
import {Text, TouchableOpacity, View, SafeAreaView, TextInput,StyleSheet, Alert} from 'react-native'

const advanceHooksPractice=()=>{

    /// ********useRef************

    // const inputRef = useRef(null)

    // const Focus=()=>{
    //     console.log(inputRef)
    //     inputRef.current.focus()
    // }
    // const Blur=()=>{
    //     inputRef.current.blur()
    // }
    



    // return(
    //     <SafeAreaView>
    //         <TextInput
    //         ref={inputRef}
    //         placeholder={'Write Here'}
    //         style={styles.inputText}
    //         onFocus={()=>Alert.alert('Focused')}
    //         onBlur={()=>Alert.alert('Blurred')}/>
    //         <TouchableOpacity
    //         onPress={Focus}>
    //             <Text>{'Focus'}</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //         onPress={Blur}>
    //             <Text>{'Blur'}</Text>
    //         </TouchableOpacity>
            
    //     </SafeAreaView>
    // )


    ///*******useLayoutEffect ************
        // const [value,setValue]= useState(0)

        // useLayoutEffect(()=>{
        //     if(value===0)
        //     setValue(10+Math.random()*2)
        // },[value])

        // useEffect(() => {
        //     if(value===0)
        //         setValue(10+Math.random()*2)
        // }, [value])
        



        // return(
        //     <SafeAreaView >
        //         <TouchableOpacity onPress={()=>setValue(0)}>
        //         <Text>{value}</Text>
        //         </TouchableOpacity>
        //     </SafeAreaView>
        // )


        // ********** UseMemo************
        // const [data, setData] = useState(null)
        // const [toggle, setToggle] = useState(false)

        // useEffect(()=>{
        //     axios.get("https://jsonplaceholder.typicode.com/comments")
        //     .then(response=>{
        //         setData(response.data)
        //     })
        //     .catch((err)=>{console.log(err)})
        // },[])


        // const findLongestName = (comment)=>{
        //     if(!comment)
        //     return null

        //     let longestName=''
        //     for(let i=0;i<comment.length;i++)
        //     {
        //         let currentName=comment[i].name 
        //         if(currentName.length > longestName.length) {
        //             longestName = currentName
        //         }
        //     }
        //     return longestName

        // }
        // const getLongestName=useMemo(()=>findLongestName(data),[data])


        // return(
        //         <SafeAreaView>
        //             <View><Text>{getLongestName}</Text></View>
        //             <TouchableOpacity
        //             onPress={()=>{setToggle(!toggle)}}
        //             >
        //                 <Text>{'Press it'}</Text>

        //             </TouchableOpacity>
        //         </SafeAreaView>
        // )



        //*******useCallback */
        
   



 }
export default advanceHooksPractice

const styles=StyleSheet.create(
    {
        inputText:{
            borderWidth:1,
           
            
        }
    }
)