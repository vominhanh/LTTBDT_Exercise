import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from './ChatScreen'; 
import AnotherScreen from './AnotherScreen'; 
import BackScreen from './BackScreen'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialBottomTabNavigator();
const Tab1 = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab1.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab1.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ tabBarLabel: 'Home1' }}
      />
      <Tab1.Screen
        name="AnotherScreen"
        component={AnotherScreen}
        options={{ tabBarLabel: 'Updates1' }}
      />
      <Tab1.Screen
        name="BackScreen"
        component={BackScreen}
        options={{ tabBarLabel: 'Profile1' }}
      />
    </Tab1.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ChatScreen"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="ChatScreen"
          component={TopTabNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AnotherScreen"
          component={AnotherScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="BackScreen"
          component={BackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;