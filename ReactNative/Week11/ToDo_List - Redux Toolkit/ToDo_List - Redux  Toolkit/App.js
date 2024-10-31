import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store/store'; // Đảm bảo đúng đường dẫn
import Api_Screen1 from './component/Api_Screen1'; // Đảm bảo đúng đường dẫn
import Api_Screen2 from './component/Api_Screen2'; // Đảm bảo đúng đường dẫn

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Api_Screen1">
          <Stack.Screen name="Home" component={Api_Screen1} />
          <Stack.Screen name="Task Manager" component={Api_Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;