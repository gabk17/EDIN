import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="EditProfile" component={EditProfile} />

    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
