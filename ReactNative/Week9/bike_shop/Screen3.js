import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Screen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Image source={require('./assets/bicycle.png')} style={styles.image} />
      </View>
      <View style={styles.bodyBox}>
        <Text style={styles.title}>Pina Mountain</Text>
        <Text style={styles.price}>15% OFF | $350</Text>
      </View>
      <View style={styles.descriptionBox}>
        <Text style={styles.subtitle}>DESCRIPTION</Text>
        <Text style={styles.descriptionContent}>
          It is a very important form of writing as we write almost everything in paragraphs, 
          be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={styles.footer}>
        <Image source={require('./assets/tymicon.png')}/>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Screen2')}>
          <Text style={styles.buttonTitle}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bodyBox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  title: {
    fontWeight: '600',
    fontSize: 28,
    color: '#333',
  },
  price: {
    fontWeight: '500',
    fontSize: 24,
    color: 'gray',
    marginTop: 10,
  },
  descriptionBox: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 22,
    color: '#333',
    marginBottom: 10,
  },
  descriptionContent: {
    color: 'gray',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    height: 54,
    width: 269,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 30,
  },
  buttonTitle: {
    fontWeight: '400',
    fontSize: 25,
    color: 'white'
  }
});

export default Screen3;
