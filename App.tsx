import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { signInAnonymously } from './src/services/authService';
import HomeScreen from './src/screens/Home';
import QuizScreen from './src/screens/QuizScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    signInAnonymously(); // Anonymous login on app start
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
