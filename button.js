import React from "react";
import {View,Text, StyleSheet, SafeAreaView,Image, ScrollView} from 'react-native'
const TestButton=()=>{
    return(
        <SafeAreaView style={styles.safeview} >
            <ScrollView style={{backgroundColor:'white'}} bounces={false}>
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('./src/assets/image/arrow.webp')} style={styles.button}/>
                    <Text style={[styles.head,{position:'absolute', left:'35%'}]}>{'Payment'}</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={[styles.head,{fontSize:25}]}>{'Total'}</Text>
                    <Text style={styles.head}>{'$180'}</Text>
                </View>
                
            <View style={styles.innerView}>
                <View style={[styles.txtImgBorder,{marginLeft:10}]}>
                <Image source={require('./src/assets/image/debit_image.png')} style={styles.img}/>
                <Text style={styles.textActorName}>{'Debit'}</Text>
                </View>
                <View style={[styles.txtImgBorder,{marginRight:10}]}>
                <Image source={require('./src/assets/image/credit.png')} style={styles.img}/>
                <Text style={styles.textActorName}>{'Credit'}</Text>
                </View>
            </View>
            <View style={styles.innerView}>
                <View style={[styles.txtImgBorder,{marginLeft:10}]}>
                <Image source={require('./src/assets/image/cash.png')} style={styles.img}/>
                <Text style={styles.textActorName}>
                    {'Cash'}
                </Text>
                </View>
                <View style={[styles.txtImgBorder,{marginRight:10}]}>
                <Image source={require('./src/assets/image/giftCard.png')} style={styles.img}/>
                <Text style={styles.textActorName}>{'Gift card'}</Text>
                </View>
            </View>
            </View>
            </ScrollView>
   
        </SafeAreaView>
    )

}
export default TestButton

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            
            justifyContent:'flex-start'
        },
        head:{
            fontWeight:'normal',
            fontSize:30,
           alignSelf:'center'
        },
        safeview:{
            flex:1,
            backgroundColor:'silver'
        },
        innerView:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:40
              
        },
        img:{
            height:150,
            width:150,
            borderRadius:20
            
        },
        textActorName:{
            fontSize:20,
            alignSelf:'center',
            backgroundColor:'linen',
        },
        txtImgBorder:{
            borderWidth:1,
            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
	     width: 0,
	    height: 7,
                },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
            
        },
        button:{
            height:30,
            width:30
        }
    }
)



