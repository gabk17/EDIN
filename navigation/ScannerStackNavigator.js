import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Scanner from '../screens/Scanner';
import Roulette from '../screens/Roulette';
import Home from '../screens/Home';
const Stack = createStackNavigator();

const ScannerStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="Roulette"
        component={Roulette}
        options={{
          headerShown: false,
        }} />

    </Stack.Navigator>
  );
};

export default ScannerStackNavigator;
