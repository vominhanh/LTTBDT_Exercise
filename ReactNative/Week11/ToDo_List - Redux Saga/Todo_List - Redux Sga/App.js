import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store'; // Đảm bảo đường dẫn đúng
import Api_Screen1 from './component/Api_Screen1'; // Đường dẫn đúng
import Api_Screen2 from './component/Api_Screen2'; // Đường dẫn đúng
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Api_Screen1">
          <Stack.Screen 
            name="Api_Screen1" 
            component={Api_Screen1} 
            options={{ title: 'Home' }} 
          />
          <Stack.Screen 
            name="Api_Screen2" 
            component={Api_Screen2} 
            options={{ title: 'Task Manager' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;