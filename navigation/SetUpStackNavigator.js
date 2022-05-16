import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import SMSVerification from '../screens/SMSVerification';
import Choice from '../screens/Choice'
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
const Stack = createStackNavigator();

const SetUpStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="SMSVerification"
        component={SMSVerification}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="Choice"
        component={Choice}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }} />

    </Stack.Navigator>
  );
};

export default SetUpStackNavigator;
