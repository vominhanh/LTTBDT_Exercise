import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đây là màn hình khác!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default AnotherScreen;