import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import styles from './styleSheet'

const X = ({navigation}) => {

  const def = () => {
    navigation.navigate("Home")
  }
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 const validateEmail=(text)=>{
   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
   if(reg.test(text)==false)
   {console.log('Email incorrect')
   setEmail(text)
   }
   else
   {console.log('Email correct')
   setEmail(text)
   }
  }

const validatePassword=(text)=>{
  if(text.length<7)
  {
    console.log('Password should be minimum 8 characters ')
    setPassword(text)
  }
  else
  {
    console.log('Password ok')
    setPassword(text)
  }

}
const handle = () => {
  navigation.navigate("LogIn");
}


  return (
    <View>
      <Image
        source={require('./src/assets/image/BigPic.png')}
        style={styles.bigPic}
      />
      <View style={styles.logInView}>
        <View style={styles.LoginTextView}>
          <Text style={styles.headText}>{'Login'}</Text>
          <Text style={styles.subText}>{'Enter your details to continue'}</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.emailTextView}>
            <Text style={styles.emailText}>{'Email'}</Text>
            <TextInput
              placeholder="Enter email"
              onChangeText={(text)=>validateEmail(text)}
              value={email}
              style={styles.emailText}></TextInput>
          </View>
          <View style={styles.emailTextView}>
          <View style={styles.password}>
            <Text style={styles.emailText}>{'Password'}</Text>
            <TouchableOpacity>
            <Image
                source={require('./src/assets/image/Eye.png')}
                style={styles.eye}
              />
              </TouchableOpacity>
              </View>
            
              <TextInput
                placeholder="Enter Password"
                secureTextEntry
                onChangeText={(text)=>validatePassword(text)}
                value={password}
                style={styles.emailText}/>
          </View>
          <TouchableOpacity>
          <Text style={styles.forgotPassword}>{'Forgot Password?'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.logInButtonText}>{'Login'}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.notRegistered}>  
        <Text>{'Not Registered yet?'}</Text>
        <TouchableOpacity
        onPress = {def} >
        <Text style={{fontWeight:'bold'}}>{'ABC'}</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};
export default X;

