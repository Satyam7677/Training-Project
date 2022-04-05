import React from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    Modal,
  } from 'react-native';

class FormItem extends React.Component{

   shouldComponentUpdate(nextProps,nextState){
     if(this.props.Name != nextProps.Name || this.props.Email != nextProps.Email)
     return true
     return false 
   }


    render() {
        
        
        return(
            <View style={styles.itemView}>
      <Text style={styles.inListText}>
        <Text style={{fontWeight: '600'}}>{`Name : `}</Text>
        {`${this.props.Name}`}
      </Text>
      <Text style={styles.inListText}>
        <Text style={{fontWeight: '600'}}>{`Email address : `}</Text>
        {`${this.props.Email}`}
      </Text>
      <TouchableOpacity
        onPress={() => {
          const index = this.props.MainData.findIndex(i => i.Email == this.props.Email);
         
          this.props.onRemove(index);
        
        }}
        style={styles.delView}>
        <Image
          source={require('./src/assets/image/cross1.png')}
          style={styles.delImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          const index = this.props.MainData.findIndex(i => i.Email == this.props.Email);
          this.props.setIndex(index);
          this.props.onClickEdit(index);
        }}
        style={{...styles.delView, bottom: 10, top: '60%'}}>
        <Image
          source={require('./src/assets/image/editIcon.png')}
          style={styles.editImage}
        />
      </TouchableOpacity>
    </View>
        )
    }
}

export default FormItem
const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#F7F5F2',
    },
    headText: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontFamily: 'Arial Rounded MT Bold',
      color: 'white',
    },
  
    formView: {
      height: '30%',
  
      borderRadius: 10,
      marginHorizontal: '2%',
      padding: '5%',
      justifyContent: 'space-between',
      margin: 10,
      backgroundColor: '#FBF8F1',
  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
  
      elevation: 15,
    },
    inputView: {
      height: '80%',
    },
    buttonView: {
      height: 40,
      width: 150,
      alignSelf: 'center',
      borderRadius: 20,
      justifyContent: 'center',
  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
  
      elevation: 15,
    },
    inputArea: {
      height: '30%',
    },
    itemView: {
      borderRadius: 10,
      margin: '2%',
      height: 80,
      justifyContent: 'center',
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
  
      elevation: 15,
      backgroundColor: 'white',
      borderBottomColor: '#466525',
      borderBottomWidth: 3,
    },
    invalidText: {
      color: 'red',
    },
    delImage: {
      height: 20,
      width: 20,
    },
    delView: {
      position: 'absolute',
      right: 5,
      top: 3,
      // justifyContent: 'center',
    },
    insideInputView: {
      borderRadius: 10,
  
      height: '100%',
      padding: '5%',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderBottomColor: '#BFBFBE',
      borderBottomWidth: 3,
    },
    listItem: {
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
  
      elevation: 15,
    },
    HeadView: {
      backgroundColor: '#9EB749',
      // borderRadius:10,
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
  
      elevation: 15,
    },
    inListText: {
      fontFamily: 'American Typewriter',
      fontSize: 18,
    },
    editImage: {
      height: 20,
      width: 20,
    },
    searchBarView: {
      height: 40,
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 7,
      marginHorizontal: 5,
      padding: 10,
    },
    plusImage: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    plusTouch: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 0,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
  });