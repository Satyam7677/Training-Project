import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    bigPic: {
     top:'0%',
      height: '28%',
      width: '100%',
      resizeMode: 'contain',
      position:'absolute'
      
    },
    headText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
    },
    logInView: {
      marginTop:'40%',
      marginLeft: '7%',
      flex: 1,
    },
    subText: {
      fontSize: 15,
      color: '#868680',
    },
    LoginTextView: {
      marginBottom: 20,
    },
    emailTextView: {
      borderWidth: 1,
      borderColor: '#868680',
      borderRadius: 3,
      marginRight: '7%',
      height:50,
      margin:5,
      justifyContent:'center'
    },
    emailText: {
      marginLeft: '7%',
      
      color:'black'
      
    },
  
    password: {
      flexDirection: 'row',
    },
    eye: {
      height: 20,
      width: 20,
      resizeMode:'contain',

     
      // position:'absolute',  
    },
    forgotPassword: {
      textAlign: 'right',
      margin:30,
      color: '#868680',
    },
    button: {
      borderRadius:4,
      marginRight: '7%',
      padding: '4%',
    },
    logInButtonText: {
      textAlign: 'center',
      fontSize: 20,
    },
    notRegistered:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignSelf:'center',
        marginTop:'39.5%'
    },
    tick:{
        height:20,
        width:20,
        
    },
    agreePolicy:{
        flexDirection:'row',
        
    },
    invalid:{
      color:'red',
      fontSize:12
    },
    alreadyAccountView:{
      flexDirection:'row',
      marginTop:30,
      justifyContent:'center'
    },
    form:{
      
    },
    inInput:{color:'#868680',
    marginLeft: '7%',
      marginTop: '2%',
      color:'#868680'
  }
    
  });
export default  styles
  