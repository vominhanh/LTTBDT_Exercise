import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksRequest, deleteTaskRequest, addTaskRequest, updateTaskRequest } from '../store/actions';
import { Ionicons } from '@expo/vector-icons';

const Api_Screen2 = ({ route }) => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state.taskReducer || {});
  const { userName } = route.params;

  const [taskName, setTaskName] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTaskRequest(id));
  };

  const handleAddOrUpdateTask = () => {
    if (taskName.trim()) {
      if (editingTaskId) {
        dispatch(updateTaskRequest({ id: editingTaskId, name: taskName }));
        setEditingTaskId(null);
      } else {
        const newTask = { name: taskName };
        dispatch(addTaskRequest(newTask));
        Alert.alert("Task Added", "New task has been added successfully.");
      }
      setTaskName('');
    } else {
      Alert.alert("Error", "Task name cannot be empty");
    }
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setTaskName(task.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../todo-list.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileText}>{userName}</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder={editingTaskId ? "Update task" : "Enter new task"}
        value={taskName}
        onChangeText={setTaskName}
        onSubmitEditing={handleAddOrUpdateTask}
        returnKeyType="done"
      />

      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <View style={styles.taskLeft}>
              <Ionicons name="checkmark-circle-outline" size={24} color="green" />
              <Text style={styles.taskText}>{item.name}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleEditTask(item)} style={styles.editButton}>
                <Ionicons name="pencil" size={18} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Ionicons name="trash" size={18} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={handleAddOrUpdateTask}>
        <Ionicons name="checkmark" size={32} color="#fff" />
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Api_Screen2;