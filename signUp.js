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
import styles from './styleSheet';

const SignUp = ({navigation}) => {
  const handle = () => {
    navigation.goBack();
  };

  const handleNav = () => {
    navigation.navigate('Home');
  };

  // const reducer = (state,action)=>{
  //   switch(action.type, action.value )
  //   {
  //     case 'name':
  //       return {...state,name:action.value}
  //   }
  // }

  //  const [state, dispatch] = useReducer(reducer,{name:'',email:'',password:'',confPassword:'',showPassword:true,showConfirmPassword:true,checkMail:false,checkPassword:false,checkConfirmPassword:false,checkTick:false})

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [checkMail, setCheckMail] = useState(false);
  const [checkPassword, setcheckPassword] = useState(false);
  const [checkConfirmPassword, setcheckConfirmPassword] = useState(false);
  const [checkTick, setCheckTick] = useState(false);

  const validateEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) == false && text.length > 0) {
      console.log('Incorrect emailformat');
      setEmail(text);
      setCheckMail(true);
    } else {
      console.log('Email correct');
      setEmail(text);
      setCheckMail(false);
    }
  };

  const validatePassword = (text) => {
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (reg.test(text) == false && text.length > 0) {
      setPassword(text);
      setcheckPassword(true);
    } else {
      console.log('Email correct');
      setPassword(text);
      setcheckPassword(false);
    }
  };

 
  const confirmPassword = text => {
    if (text != password && text.length != 0) {
      setConfPassword(text);
      setcheckConfirmPassword(true);
    } else {
      setConfPassword(text);
      setcheckConfirmPassword(false);
    }
  };
  const seePassword = () => {
    setShowPassword(!showPassword);
  };
  const seeConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toCheckTick = () => {
    setCheckTick(!checkTick);
  };
  const disableRegister = () => {
    console.log('CheckTick is', checkTick);
    if (
      password.length > 0 &&
      email.length > 0 &&
      confPassword.length > 0 &&
      name.length > 0
    )
      return checkPassword || checkConfirmPassword || checkMail || !checkTick;
    else return true;
  };

  return (
    <View style={{flex:1}}>
      <Image
        source={require('./src/assets/image/BigPic.png')}
        style={styles.bigPic}
      />

      <View style={styles.logInView}>
        <View style={styles.LoginTextView}>
          <Text style={styles.headText}>{'Register'}</Text>
          <Text style={styles.subText}>{'Enter your details to continue'}</Text>
        </View>
        <View style={styles.form}>
          <View style={{...styles.emailTextView, height: '10.7%'}}>
            {name.length > 0 && <Text style={styles.inInput}>{'Name'}</Text>}
            <TextInput
              placeholder="Enter Name"
              onChangeText={text => setName(text)}
              // onChangeText={(text)=>dispatch({type:'name',value:text})}
              style={styles.emailText}
            />
          </View>
          <View style={{marginBottom:'10%'}}>
            <View style={{...styles.emailTextView,}}>
              {email.length > 0 && (
                <Text style={styles.inInput}>{'Email'}</Text>
              )}
              <TextInput
                placeholder="Enter email"
                onChangeText={text => validateEmail(text)}
                autoCapitalize={'none'}
                keyboardType="email-address"
                value={email}
                style={styles.emailText}
              />
            </View>
            {checkMail && (
              <Text style={styles.invalid}>{'Invalid Email Format'}</Text>
            )}
          </View>
          
            <View style={styles.emailTextView}>
              <View style={styles.password}>
                {password.length > 0 && (
                  <Text style={styles.inInput}>{'Password'}</Text>
                )}
              <TextInput
                placeholder="Enter Password"
                secureTextEntry={showPassword}
                autoCapitalize={'none'}
                onChangeText={text => validatePassword(text)}
                // value={password}
                style={styles.emailText}
              />
              <TouchableOpacity
                onPress={seePassword}
                style={{position: 'absolute', right: 10, top: 10}}>
                {password.length > 0 && showPassword && (
                  <Image
                    source={require('./src/assets/image/Eye.png')}
                    style={styles.eye}
                  />
                )}
                {password.length > 0 && !showPassword && (
                  <Image
                    source={require('./src/assets/image/HideEye.png')}
                    style={styles.eye}
                  />
                )}
              </TouchableOpacity>
            </View>
            {checkPassword && (
              <Text style={styles.invalid}>
                {'Password must contain a special character, a number, digits capital as well as small and length should be between 6-16 character'}
              </Text>
            )}
          </View>

          <View>
            <View style={styles.emailTextView}>
              <View style={styles.password}>
                {confPassword.length > 0 && (
                  <Text style={styles.inInput}>{'Confirm Password'}</Text>
                )}
              </View>

              <TextInput
                placeholder="Re-Enter Password"
                secureTextEntry={showConfirmPassword}
                autoCapitalize={'none'}
                onChangeText={text => confirmPassword(text)}
                // value={password}
                style={styles.emailText}
              />
              <TouchableOpacity
                onPress={seeConfirmPassword}
                style={{position: 'absolute', right: 10, top: 10}}>
                {confPassword.length > 0 && showConfirmPassword && (
                  <Image
                    source={require('./src/assets/image/Eye.png')}
                    style={styles.eye}
                  />
                )}
                {confPassword.length > 0 && !showConfirmPassword && (
                  <Image
                    source={require('./src/assets/image/HideEye.png')}
                    style={styles.eye}
                  />
                )}
              </TouchableOpacity>
            </View>
            {checkConfirmPassword && (
              <Text style={styles.invalid}>{'Password mismatch'}</Text>
            )}
          </View>
          <View style={{marginTop: '5%'}}>
            <View style={styles.agreePolicy}>
              <TouchableOpacity onPress={toCheckTick}>
                {checkTick && (
                  <Image
                    source={require('./src/assets/image/accept.png')}
                    style={styles.tick}
                  />
                )}
                {!checkTick && (
                  <Image
                    source={require('./src/assets/image/Tick.png')}
                    style={styles.tick}
                  />
                )}
              </TouchableOpacity>
              <Text style={{marginBottom: '10%', color:'#868680'}}>
                {'  Agree to '}
                <Text style={{fontWeight: 'bold'}}>
                  {'Terms of Service & Privacy Policy'}
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: disableRegister() ? '#E0D6C2' : '#F1B22A',
              }}
              disabled={disableRegister()}
              onPress={handleNav}>
              <Text style={styles.logInButtonText}>{'Register'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alreadyAccountView}>
            <Text>{'Already have an account?'}</Text>
            <TouchableOpacity onPress={handle}>
              <Text style={{fontWeight: 'bold'}}>{'Login'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
