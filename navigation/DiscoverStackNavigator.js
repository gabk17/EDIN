import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from '../screens/Discover';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }} />

    </Stack.Navigator>
  );
};

export default DiscoverStackNavigator;
