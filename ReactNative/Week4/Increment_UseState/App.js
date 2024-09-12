import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      
      <Button  title="Increment" onPress={increment} style={styles.button}/>

 
      {Array.from({ length: count + 1 }, (_, index) => (
        <Text key={index} style={styles.text}>{index}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    margin:400,
  },
});

export default App;
