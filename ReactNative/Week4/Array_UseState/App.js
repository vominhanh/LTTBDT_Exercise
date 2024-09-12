import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {

  const [numbers, setNumbers] = useState([5, 6, 7]);

  const Numbers = () => {
    setNumbers(numbers.map(number => number + 1));
  };

  return (
    <View style={styles.container}>
 
      {numbers.map((number, index) => (
        <Text key={index}>{number}</Text>
      ))}
      <Button title="Increment" onPress={Numbers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
