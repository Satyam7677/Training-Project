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

const Login = ({navigation}) => {
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogIn = () => {
    navigation.navigate('Home');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [checkMail, setCheckMail] = useState(false);
  const [checkPassword, setcheckPassword] = useState(false);

  const validateEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) == false && text.length > 0) {
      console.log('Incorrect emailformat');
      setEmail(text);
      setCheckMail(true);
    } else {
      console.log('Correct email format');
      setEmail(text);
      setCheckMail(false);
    }
  };

  const validatePassword = text => {
    if (text.length == 0) {
      setPassword(text);
      setcheckPassword(true);
    } else {
      console.log('Password ok');
      setPassword(text);
      setcheckPassword(false);
    }
  };
  const seePassword = () => {
    setShowPassword(!showPassword);
  };
  const disableLogIn = () => {
    if (password.length > 0 && email.length > 0) {
      return checkPassword || checkMail;
    } else return true;
  };

  return (
    <View >
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
            {email.length > 0 && <Text style={styles.inInput}>{'Email'}</Text>}

            <TextInput
              placeholder="Enter Email"
              onChangeText={text => validateEmail(text)}
              autoCapitalize={'none'}
              // value={email}
              style={styles.emailText}/>
        
          </View>
          {checkMail && 
            <Text style={styles.invalid}>{'Invalid Email Format'}</Text>
          }
      
          {/* Showing invalid if email format is not valid */}

          <View style={styles.emailTextView}>
            {password.length > 0 && (
              <Text style={styles.inInput}>{'Password'}</Text>
            )}

            <TextInput
              placeholder="Enter Password"
              secureTextEntry={showPassword}
              onChangeText={text => validatePassword(text)}
              autoCapitalize={'none'}
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

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>{'Forgot Password?'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: disableLogIn() ? '#E0D6C2' : '#F1B22A',
            }}
            disabled={disableLogIn()}
            onPress={handleLogIn}>
            <Text style={styles.logInButtonText}>{'LOGIN'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notRegistered}>
          <Text>{'Not Registered yet?'}</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{fontWeight: 'bold'}}>{'Register'}</Text>
          </TouchableOpacity>
        </View>
      </View>
  </View>
  );
};

export default Login;
