import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
// https://gist.github.com/nandorojo/e84e938568a018e044aadae9d64456ec

import Home from '../screens/Home';
import Map from '../screens/Map';
import Details from '../screens/Details';
import Recent from '../screens/Recent';
import Favorite from '../screens/Favorite';
import Orders from '../screens/Orders';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Details" component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Recent" component={Recent} />
      <Stack.Screen name="Favorite" component={Favorite} />

    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
