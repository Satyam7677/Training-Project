import React,{useEffect,useState, useRef} from "react";
import axios from "axios";
import { FlatList,View,Text,SafeAreaView, Image,StyleSheet, TouchableOpacity } from "react-native";



const HooksUseEffect = ()=>{
    let flatListRef = useRef(null)
   
    const [data, setData] = useState([])
    const [count, setCount] = useState(1) 

    

    
    

    const APICall =async ()=>{
        // console.log("Hello i am here")
        try{
        let response=await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${count}&size=10`)
            console.log('i am in APICALL',response.data.data)
            // setCount(count+1)
          setData([...data,...response.data.data])
        }
        catch(err){
            console.log("err")
        }
    }

    useEffect(()=>{
        APICall()
        console.log('hellll',data)
        return ()=>{
            console.log('unmounting....')
        }
    },[count])

    

    const renderMyItem=(item)=>{
        
        return (
        
        <View style={styles.perView}>
            <Text style={{alignSelf:'center', fontWeight:'700', fontSize:20}}>{item.airline[0].name}</Text>
           
            <Image source={{uri: item.airline[0].logo}} style={styles.image}/>
            <View style={{marginTop:20}}>
            <Text style={styles.inText}>{`Passenger Name:`}<Text style={styles.innerText}>{`${item.name}`}</Text></Text>
            <Text style={styles.inText}>{`Country :`}<Text style={styles.innerText}>{`${item.airline[0].country}`}</Text></Text>
            
            <Text style={styles.inText}>{`Headquater: `}<Text style={styles.innerText}>{`${item.airline[0].head_quaters}`}</Text></Text>
            </View>
            <Text style={{...styles.innerText, alignSelf:'center', fontWeight:'500',position:'absolute',bottom:0}}>{`${item.airline[0].slogan}`}</Text>
            
        
        </View>
        
    )}
    const itemSeparator=()=>(
        <View style={{margin:10}}></View>
    )
    
    const endReach=()=>{
        setCount(count+1)
        console.log("this is count",count)
    }
    const scrollToTop=()=>{
        console.log(flatListRef.current)
        flatListRef.current.scrollToIndex({animated:true, index:0})
    }


    

    // const handlePress = ()=>{
    //     setIdFromClick(idFromClick+1)
    // }
  

    return (
        <SafeAreaView style={styles.outerStyle}>
            <View style={styles.Heading}>
                <Text style={styles.HeadingText}>{'Airlines'}</Text>
            </View>
            <FlatList 

            data={data}
            renderItem = {({item})=>renderMyItem(item)}
            // ItemSeparatorComponent={itemSeparator}
            // refreshing={false}
            // onRefresh={refresh}
            onEndReached={endReach}
            onEndReachedThreshold={0.7}
            ref = {flatListRef}
            keyExtractor={(item, index)=>item._id+index}
            ItemSeparatorComponent={itemSeparator}
            scrollsToTop={false}
            
            />
            <View >
            <TouchableOpacity onPress={scrollToTop}>
            <Image source={require('./src/assets/image/up-arrow.png')} style={styles.upImage}/>
        </TouchableOpacity>
        </View>

        </SafeAreaView>
    )
}
export default HooksUseEffect


const styles= StyleSheet.create(
    {
        perView:{
            
            borderRadius:15,
            backgroundColor:'#F4F4F2',
            width:'98%',
            height:300,
            marginLeft:'1%',
            shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
            
            
           
        },
        image:{
            height:80, width:'100%', resizeMode:'contain'
        },
        upImage:{
            height:40,
            width:40,
            right:10,
            bottom:0,
            position:'absolute',
            borderWidth:1,
            borderRadius:10
            
        
        },
        outerStyle:{
            flex:1,
           
        },
        inText:{
            fontWeight:'600',
            fontSize:20,
            marginLeft:10,
            marginBottom:10,
            fontFamily:'American Typewriter'
            
        },
        Heading:{
            alignSelf:'center',
            backgroundColor:'black',
            borderWidth:1,
            borderRadius:10,
            shadowColor: "#000",
            position:'relative',
            top:0,
            shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
        },
        HeadingText:{
            fontSize:30,
            fontWeight:'bold',
            color:'white',
            
            
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.51,
            shadowRadius: 13.16,

            elevation: 20,
        },
        innerText:{
            fontSize:20,
            fontWeight:'400',
            fontFamily:'Cochin'
            
        }
       
    }
)








// import React, { useState } from 'react';
// import
// {
//     TouchableOpacity,
//     View,
//     StyleSheet,
//     TextInput,
//     Text, 
//     Alert,
//     Image,
//     SafeAreaView
// }
// from 'react-native'

// const Home = ({navigation}) => {
//     const [email, setEmail] = useState('');
//     const [emailConfirm, setEmailConfirm] = useState(false);
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [passwordConfirm, setpasswordConfirm] = useState(false);
//     const [passwordShow, setPasswordShow] = useState(true);
//     const [passwordShow2, setPasswordShow2] = useState(true);

//     const notify = () => {
//         Alert.alert("Hi, you are registered");
//     }

//     const handleNavigation = () => {
//         navigation.navigate("Login")
//     }

//     const validationOn=(text)=>{
//         console.log("Hello")
//         setEmail(text)
//         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(text) == false) {
//             if(text.length==0){
//                 setEmailConfirm(false);
//             }
//             else{
//                 setEmailConfirm(true);
//             }
//         }
//         else {
//             setEmailConfirm(false);
//         }
//     }

//     const validatePass = () => {
//         let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
//         if (!reg.test(password)) {
//             if (password.length == 0)
//                 setpasswordConfirm(false)
//             else
//                 setpasswordConfirm(true)
//         }
//         else {
//             setpasswordConfirm(false)
//         }
//     }

// return (
//     <SafeAreaView style = {{flex: 1}}>
//             <Image style = {styles.image_containere} source = {require('./src/assets/image/BigPic.png')}/>
//              <View style={styles.container}>
//             <View style={{width:"90%"}}>
//                <Text onPress = {notify} style = {styles.register_container}>Register</Text>  
//                <Text style = {styles.details_container}>Enter your details to continue</Text>
//             </View>
//                 <TextInput
//                     style = {styles.input_container}
//                     placeholder='Name'
//                     label='Name'
//                     value={name}
//                     onChangeText={text => setName(text)}
//                 />
//                 <View style={{height:'20%',width:'100%', marginLeft:'10%'}}>
//                 <TextInput
//                     style = {{...styles.input_container,margin:0}}
//                     placeholder='Email'
//                     label='Email'
//                     autoFocus = {true}
//                     onChangeText={validationOn}
//                 />
//                 <View style={{height:'20%'}}>
//                 {
//                     emailConfirm &&<Text style = {{color: 'red', marginRight: '65%'}}>Incorrect Email</Text>
//                 }
//                 </View>
//                 </View>
                
//                 <View style={{height:'18%',width:'100%', marginLeft:'10%'}}>
//                 <TextInput
//                     style = {{...styles.input_container,margin:0}}
//                     autoCorrect = {false}
//                     autoCapitalize = "none"
//                     secureTextEntry
//                     placeholder='Password'
//                     label='Password'
//                     // value={password}
//                     onChangeText={(text)=>{
//                         setPassword(text)
//                         validatePass()
//                     }
//                 }
//                 />
//                 {
//                     password.length>0 && passwordConfirm && <Text style = {{color: 'red', marginRight: '55%'}}>Not a valid password</Text>
//                 }
//                 </View>
                
//                 <TextInput
//                     style = {styles.input_container}
//                     autoCorrect = {false}
//                     autoCapitalize = "none"
//                     secureTextEntry
//                     placeholder='Confirm Password'
//                     label='Confirm Password'
//                     value={setpasswordConfirm}
//                     onChangeText={text => setpasswordConfirm(text)}
//                 />
//             </View>
//                 <View style = {{flexDirection: 'row', justifyContent: 'center', marginBottom: '8%', marginTop: '3%'}}>
//                     <Text>Agree to</Text>
//                     <Text style = {{fontWeight: 'bold'}}>Terms of Service & Privacy Policy</Text>
//                 </View>
//             <TouchableOpacity onPress = {notify} style={styles.button}>
//                     <Text style = {styles.logIn_text} >Register</Text>
//             </TouchableOpacity>
//             <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: '3%'}}>
//                 <Text style = {{fontSize: 15}}>Already Have an Account? </Text>
//                 <Text style = {{fontWeight: 'bold', fontSize: 15}} onPress={handleNavigation}>Login</Text>
//             </View>
//         </SafeAreaView>
//         )
//     }



// const styles = StyleSheet.create({
//     details_container:{
//         marginLeft: '1%',
//         marginTop: 10,
//         color: 'grey'
//     },
//     register_container:{
//         marginLeft: '1%',
//         fontSize: 25,
//         fontWeight: 'bold'
//     },
//     image_containere:{
//         resizeMode: 'contain',
//         height: '25%',
//         width: '110%',
//         position:'absolute'
//     },
//     container: {
//         // flex: 1,
//         // backgroundColor: 'white',
//         alignItems: 'center',
//         marginTop:'25%'
//     },
//     button: {
//         height: '8%',
//         width: '90%',
//         borderRadius: 4,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F1B22A',
//         alignSelf:"center"
//     },
//     logIn_text: {
//         color: 'black',
//         fontSize: 20,
//     },
//     input_container:{
//         // fontWeight: 'bold',
//         fontSize: 15,
//         letterSpacing: 0.3,
//         backgroundColor: '#fafafa',
//         padding: 20,
//         margin: 10,
//         height: 60,
//         borderColor: 'black',
//         borderWidth: 0.5,
//         width: '90%',
//         borderRadius: 4,
//     },
//     forget_text: {
//         marginLeft: 230,
//         marginTop: 15,
//         marginBottom: 20,
//         // color: '#0095f6',
//         // fontWeight: 'bold',
//         letterSpacing: 0.8,
//         fontSize: 15,
//     }
// });

// export default Home;