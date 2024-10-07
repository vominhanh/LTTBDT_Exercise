import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Api_Screen1 from './Api_Screen1'; 
import Api_Screen2 from './Api_Screen2'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Api_Screen1">
        <Stack.Screen name="Api_Screen1" component={Api_Screen1} />
        <Stack.Screen name="Api_Screen2" component={Api_Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;