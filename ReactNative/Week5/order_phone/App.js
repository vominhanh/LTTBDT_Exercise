import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  ColorSelectionScreen from './ColorSelectionScreen'; // Đường dẫn đến ProductScreen
import ProductScreen from './ProductScreen'; // Đường dẫn đến ColorSelectionScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="ColorSelection" component={ColorSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}