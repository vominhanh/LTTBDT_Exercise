import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

const Api_Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    navigation.navigate('Api_Screen2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('./todo-list.png')} 
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>MANAGE YOUR</Text>
      <Text style={styles.title}>TASK</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Enter your name"
        placeholderTextColor="#B0B0B0"
        value={name}
        onChangeText={setName} 
      />

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 120, 
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B4DC8', 
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#00C2C2', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Api_Screen1;