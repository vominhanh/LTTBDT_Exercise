import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const tasks = [
  { id: '1', title: 'To check email' },
  { id: '2', title: 'UI task web page' },
  { id: '3', title: 'Learn javascript basic' },
  { id: '4', title: 'Learn HTML Advance' },
  { id: '5', title: 'Medical App UI' },
  { id: '6', title: 'Learn Java' },
];

const Api_Screen2 = () => {
  const navigation = useNavigation();
  const [textUrl, setTextUrl] = useState('Hi Milker');
  const route = useRoute();
  useEffect(() => {
    if (route.params?.setName) {
      setTextUrl(route.params.setName);
    }
  }, [route.params?.setName]);
  
  const createTextApi = "https://6626f906b625bf088c0705c3.mockapi.io/todo-list";
  const [text, setText] = useState({name:'Tân'});

  const handleSubmit = async () => {
    const response = await fetch(createTextApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(text),
    });

  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./todo-list.png')} 
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileText}>Minh Anh</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={20} color="#FF00FF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <View style={styles.taskLeft}>
              <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              <Text style={styles.taskText}>{item.title}</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome5 name="pencil-alt" size={18} color="#FF00FF" />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={handleSubmit}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  fab: {
    
    bottom: 10,
    left: 120,
    backgroundColor: '#00C2C2',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Api_Screen2;