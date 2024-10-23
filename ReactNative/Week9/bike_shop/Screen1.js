import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}>
        <Text style={styles.title}>A premium online store for {'\n'} sporter and their stylish choice</Text>
      </View>
      <View style={styles.subcontainer2}>
       <Image source={require('./assets/image.png')}/>
      </View>
      <View style={styles.subcontainer1}>
        <Text style={styles.title2}>POWER BIKE {'\n'} SHOP</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Screen2')}>
        <Text style={styles.btnTitle}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subcontainer1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    width: 360,
    height: 388,
    borderRadius: 30
  },
  title: {
    fontFamily: 'VT323',
    fontWeight: '400',
    fontSize: 24,
    color: 'rgba(131, 83, 226, 1)',
    textAlign: 'center',
    marginTop: 10,
  },
  title2: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 61,
    backgroundColor: 'rgba(233, 65, 65, 1)',
    borderRadius: 30,
  },
  btnTitle: {
   fontFamily: 'VT323',
    fontWeight: '400',
    fontSize: 27,
    color: 'white',
    textAlign: 'center',
  },
});

export default Screen1;
