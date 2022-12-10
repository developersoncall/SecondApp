import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './src/navigation/MainStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

export default App;
