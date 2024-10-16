import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const apiUrl = 'https://6626f906b625bf088c0705c3.mockapi.io/todo-list';

const Api_Screen2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState({ name: 'Minh Anh' });

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTextApi = "https://6626f906b625bf088c0705c3.mockapi.io/todo-list";

  const handleSubmit = async () => {
    try {
      const response = await fetch(createTextApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
      });

      const newTask = await response.json();
      setTasks(prevTasks => [...prevTasks, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      console.error(error);

    }
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
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <View style={styles.taskLeft}>
              <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              <Text style={styles.taskText}>{item.name}</Text>
            </View>
            <View style={styles.iconsContainer}>
              <TouchableOpacity>
                <FontAwesome5 name="pencil-alt" size={18} color="#FF00FF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Ionicons name="trash" size={18} color="red" />
              </TouchableOpacity>
            </View>
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
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    marginLeft: 10,
  },
  fab: {
    bottom: 10,
    left: 150,
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