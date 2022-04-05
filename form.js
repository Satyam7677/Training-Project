import React, {useState, useRef, useMemo} from 'react';
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
import FormItem from './FormItem';

const Form = () => {
  const[details,setDetails]= useState({Name:'', Email:''})
  const [checkDetails, setCheckdetails] = useState({checkName:false, checkEmail:false})
  
  const [update, setUpdate] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [editIndex, setIndex] = useState(-1);
  const [obj, setObj] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const flatListRef = useRef(null);

/********* For search */
  

  const renderItem = ({item}) => (
    <FormItem Name={item.Name} Email={item.Email} onRemove={on_del} MainData={mainData} setIndex={setIndex} onClickEdit={onClickEdit}/>
    
  );
  const on_del = index => {
    if (index === editIndex) {
      Alert.alert("Can't delete this object as it is in editing process");
    } else {
      if (index < editIndex) setIndex(editIndex - 1);
      mainData.splice(index, 1);
      setMainData([...mainData]);
    }
  };
  const onClickEdit = index => {
    setModalVisible(true);
   
    setDetails({Name:mainData[index].Name, Email:mainData[index].Email})
    setUpdate(true);
    setIndex(index)
  };
  const cancelEdit = () => {
    setDetails({Name:'', Email:''})
    setModalVisible(false);
    setCheckdetails({checkName:false,checkEmail:false})
  };

  const validateEmail = e=> {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(e.nativeEvent.text) == false && e.nativeEvent.text.length > 0) {
      
      setCheckdetails({checkName:checkDetails.checkName, checkEmail:true})
    } else {
      // console.log('Email correct');
      // setEmail(text);
      setDetails({Name:details.Name,Email:e.nativeEvent.text})
      setCheckdetails({checkName:checkDetails.checkName,checkEmail:false})
    }
  };

  const validateName = e => {
    let reg = /^[a-zA-Z '.-]*$/;
   
    if (reg.test(e.nativeEvent.text) == false && e.nativeEvent.text.length > 0) {
     
      setCheckdetails({checkName:true, checkEmail:checkDetails.checkEmail})
    } else {
     
      // console.log('validate name')
      setDetails({Name:e.nativeEvent.text,Email:details.Email})
      setCheckdetails({checkName:false, checkEmail:checkDetails.checkEmail})
    }
  };
  const addItem = () => {
    if (update == false) {
      if (!checkDetails.checkEmail && !checkDetails.checkName) {
        if (mainData.some(obj => obj.Email === details.Email)) {
          // console.log('Object already present');
          Alert.alert('Email address already exist');
        } else {
          setMainData([...mainData, {Email: details.Email, Name: details.Name}]);
          // console.log(mainData);
          scrollToBottom();
          setDetails({Name:'', Email:''})
          setModalVisible(false);
        }
      }
    } else {
      if (!checkDetails.checkEmail && !checkDetails.checkName) {
        console.log('editIndex iss ssss', editIndex)
        if (
          mainData.some(
            obj => obj.Email === details.Email && mainData[editIndex].Email !=details.Email,
          )
        ) {
          // console.log('Object already present');
          Alert.alert('Email address already exist');
        } else {
          // console.log('Edit index', editIndex);
          mainData[editIndex] = {Email: details.Email, Name: details.Name};
          setMainData([...mainData]);
          // console.log('Edit index', editIndex);
          // console.log(mainData);
          scrollToBottom();
         setDetails({Name:'', Email:''})
          setModalVisible(false);
          setUpdate(false);
          setIndex(-1);
        }
      }
    }
  };
  const isDisabling = () => {
    if (details.Email.length > 0 && details.Name.length > 0) return checkDetails.checkEmail || checkDetails.checkName;
    else return true;
  };

  const disabing=useMemo(()=>isDisabling(),[details.Email, details.Name])



  const scrollToBottom = () => {
    // console.log(flatListRef.current);
    flatListRef.current.scrollToEnd({animationType: 'slide'});
  };

  const search = text => {
    if (text.length == 0) {
      return obj;
    } else {
      let nArr = obj.filter(item =>
        item.Name.toLowerCase().includes(text.toLowerCase()),
      );
      return nArr;
    }
  };
  
  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.mainView}>
      {console.log('Parent')}
      <View style={{flex: 1}}>
        <Modal visible={modalVisible} animationType={'slide'}>
          <View style={{...styles.listItem, margin: modalVisible ? '12%' : 0}}>
            <View style={styles.HeadView}>
              {modalVisible && (
                <Text style={styles.headText}>{'Fill the Form'}</Text>
              )}
            </View>
          </View>
          <View style={styles.formView}>
            <View style={styles.inputArea}>
              <View style={styles.insideInputView}>
                {details.Name.length > 0 && (
                  <Text style={{color: '#A6A29D'}}>{'Name'}</Text>
                )}

                <TextInput
                  placeholder={'Enter full name'}
                  autoCapitalize={'none'}
                  // value={details.Name}
                  style={styles.inputView}
                  // onChangeText={validateName}
                  onBlur={validateName}
                  defaultValue={details.Name}
                  
                />
              </View>

              {/* {(name.length>0)&&<Text>{'Name'}</Text>} */}
              {checkDetails.checkName && (
                <Text style={styles.invalidText}>{'Invalid Name format'}</Text>
              )}
            </View>

            <View style={styles.inputArea}>
              <View style={styles.insideInputView}>
                {details.Email.length > 0 && (
                  <Text style={{color: '#A6A29D'}}>{'Email'}</Text>
                )}
                <TextInput
                  placeholder={'Enter email'}
                  // onChangeText={validateEmail}
                  onBlur={validateEmail}
                  // value={details.Email}
                  style={styles.inputView}
                  autoCapitalize={'none'}
                  defaultValue={details.Email}
                />
              </View>

              {checkDetails.checkEmail && (
                <Text style={styles.invalidText}>{'Invalid Email format'}</Text>
              )}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  ...styles.buttonView,
                  backgroundColor: disabing ? '#d9eac6' : '#364d1c',
                  elevation: disabing ? 0 : 15,
                  shadowColor: disabing ? 'white' : 'black',
                }}>
                <TouchableOpacity onPress={addItem} disabled={disabing}>
                  {update ? (
                    <Text
                      style={{
                        ...styles.headText,
                        fontFamily: 'Arial Hebrew',
                        color: disabing ? '#edf5e4' : 'white',
                      }}>
                      {'Update'}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        ...styles.headText,
                        fontFamily: 'Arial Hebrew',
                        color: disabing ? '#edf5e4' : 'white',
                      }}>
                      {'Add'}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={cancelEdit}>
                <View
                  style={{
                    ...styles.buttonView,
                    right: 0,
                    backgroundColor: '#364d1c',
                  }}>
                  <Text
                    style={{...styles.headText, fontFamily: 'Arial Hebrew'}}>
                    {'Cancel'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={{backgroundColor: '#F7F5F2', flex: 1}}>
          <View style={{...styles.listItem, backgroundColor: '#9EB749'}}>
            <Text style={styles.headText}>{'List of Items'}</Text>
          </View>

          {mainData.length > 0 && (
            <View style={styles.searchBarView}>
              <TextInput
                placeholder="Search"
                autoCapitalize='none'
                style={styles.input}
                onResponderStart={() => {
                  setObj(mainData);
                }}
                onChangeText={text => {
                  const x = search(text);
                  // this.setState({students:this.state.students})
                  // console.log('This is x', x);
                  setMainData(x);
                }}
              />
            </View>
          )}

          <FlatList
            ref={flatListRef}
            data={mainData}
            keyExtractor={(item,index) => index}
            renderItem={renderItem}
          />
        </View>
        <TouchableOpacity onPress={showModal} style={styles.plusTouch}>
          <Image
            source={require('./src/assets/image/plus.png')}
            style={styles.plusImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Form;

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
