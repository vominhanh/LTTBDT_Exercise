// ColorSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const productData = {
  name: "Điện Thoại Vsmart Joy 3",
  description: "Hàng chính hãng",
  colors: [
    { name: "Màu Xanh nhạt", hex: "#b2f4ff" },
    { name: "Màu Đỏ", hex: "#ff2d2d" },
    { name: "Màu Đen", hex: "#000000" },
    { name: "Màu Xanh dương", hex: "#0044cc" },
  ],
  imageUrl: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/33a0be06a0cced0c5c40a32716d64d4f", 
};

export default function ColorSelectionScreen() {
  const [selectedColor, setSelectedColor] = useState(null);

  const renderColorItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.colorItem, { backgroundColor: item.hex }]}
        onPress={() => setSelectedColor(item.name)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfoContainer}>
        <Image source={{ uri: productData.imageUrl }} style={styles.productImage} />
        <View style={styles.productTextContainer}>
          <Text style={styles.productName}>{productData.name}</Text>
          <Text style={styles.productDescription}>{productData.description}</Text>
        </View>
      </View>

      <Text style={styles.selectColorText}>Chọn một màu bên dưới:</Text>
      <FlatList
        data={productData.colors}
        renderItem={renderColorItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.colorList}
      />

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 20,
    justifyContent: 'space-between',
  },
  productInfoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
  },
  selectColorText: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorItem: {
    width: 100,
    height: 100,
    marginVertical: 5,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});