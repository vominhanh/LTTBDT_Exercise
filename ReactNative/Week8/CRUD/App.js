import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const apiUrl = 'https://6626f906b625bf088c0705c3.mockapi.io/todo-list';

const App = () => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [cityId, setCityId] = useState('');

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
      const response = await axios.get(apiUrl);
      setCities(response.data);
  };

  const createCity = async () => {
      const response = await axios.post(apiUrl, { name: cityName });
      setCities([...cities, response.data]);
      setCityName('');
  };

  const updateCity = async () => {
      const response = await axios.put(`${apiUrl}/${cityId}`, { name: cityName });
      const updatedCities = cities.map(city => (city.id === cityId ? response.data : city));
      setCities(updatedCities);
      setCityId('');
      setCityName('');
  };

  const deleteCity = async () => {
      await axios.delete(`${apiUrl}/${cityId}`);
      setCities(cities.filter(city => city.id !== cityId));
      setCityId('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhap ten "
        value={cityName}
        onChangeText={setCityName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhap Id Xóa/Sửa"
        value={cityId}
        onChangeText={setCityId}
      />
      <Button title="Them" onPress={createCity} />
      <Button title="Sua" onPress={updateCity} />
      <Button title="Xoa" onPress={deleteCity} />

      <FlatList
        data={cities}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.cityItem}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  cityItem: {
    padding: 10,
    fontSize: 18,
  },
});

export default App;