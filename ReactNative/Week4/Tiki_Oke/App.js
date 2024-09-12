import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {img}from'./book.png'

const CheckoutScreen = () => {
  const unitPrice = 141800; 
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(unitPrice);


  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * unitPrice);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * unitPrice);
    }
  };

  return (
    <View style={styles.container}>
      {/* SanPham */}
      <View style={styles.productSection}>
        <Image
          style={styles.productImage}
          source={require('./book.png')} 
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Nguyên hàm, Tích phân và ứng dụng</Text>
          <Text style={styles.vendor}>Cung cấp bởi Tiki Trading</Text>
        
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityText}>-</Text>
              
            </TouchableOpacity>
            <Text style={styles.quantityNumber}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>

              <Text style={styles.quantityText}>+</Text>

            </TouchableOpacity>
            <Text style={styles.text3}>Mua sau</Text>
          </View>
        
          <Text style={styles.price}>{totalPrice.toLocaleString()} đ</Text>
        </View>
      </View>

      {/* Giam Gia */}
     <View style={styles.couponSection}>
      <Text style={styles.text2}> Mã giảm giá đã lưu</Text>
      <Text style={styles.text1}> Xem tại đây</Text>
      </View>

      <View style={styles.couponSection}>
      
        <TextInput
          style={styles.couponInput}
          placeholder="Mã giảm giá"
        />
        <Button title="Áp dụng" onPress={() => {}} />
      </View>

      {/* Tam Tinh */}
      <View style={styles.subtotalSection}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      {/* Dat Hang */}
      <View style={styles.subtotalSection}>
          <Text style={styles.subtotalText}>Thành tiền</Text>
          <Text style={styles.subtotalPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => {}}>
        <Text style={styles.checkoutText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  text1:{
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
  },
  text2:{
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  text3:{
    fontSize: 12,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft:30,
  },
  productSection: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  productInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vendor: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#ccc',
    padding: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityNumber: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  couponSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
  },
  subtotalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  subtotalText: {
    fontSize: 16,
  },
  subtotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'red',
  },
  checkoutButton: {
    
    backgroundColor: 'red',
    padding: 16,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
