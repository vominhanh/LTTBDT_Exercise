import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  const data = [
    { id: '1', name: 'Pina Mountai', price: '$ 1800', image: require('./assets/bluebicycle.png') },
    { id: '2', name: 'Pina Bike', price: '$ 1800', image: require('./assets/purplebicycle.png') },
    { id: '3', name: 'Pinarello', price: '$ 1800', image: require('./assets/redbicycle.png') },
    { id: '4', name: 'Pinarello', price: '$ 1800', image: require('./assets/purplebicycle.png') },
    { id: '5', name: 'Pinarello', price: '$ 1800', image: require('./assets/bluebicycle.png') },
    { id: '6', name: 'Pinarello', price: '$ 1800', image: require('./assets/bluebicycle.png') },

  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemBox} onPress={()=>navigation.navigate('Screen3')}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemTilteBox}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.title}>The world’s Best Bike</Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.contentBox}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 360,
    height: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'rgba(233, 65, 65, 1)',
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    height: 50,
  },
  button: {
    width: 100,
    height: 32,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(233, 65, 65, 0.53)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  contentBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBox: {
    width: 167,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  itemTilteBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontWeight: '400',
    fontSize: 18,
    color: 'black',
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 16,
    color: 'rgba(233, 65, 65, 1)',
  },
});

export default Screen2;
