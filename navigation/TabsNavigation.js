import React, { useRef, useEffect } from 'react';
import { View, Animated, Image, Dimensions, Alert, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStackNavigator'
import ScannerStackNavigator from './ScannerStackNavigator'
import DiscoverStackNavigator from './DiscoverStackNavigator'
import SettingsStackNavigator from './SettingsStackNavigator'
import Settings from '../screens/Settings'
import styles from './styles';

const width = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();

const DATA = [
  {
    id: 0,
    name: 'Home',
    component: HomeStackNavigator,
    image: require('../assets/HomeIcon.png'),
    tabIndicatorOffset: 0,
    unmount: false
  },
  {
    id: 1,
    name: 'Discover',
    component: DiscoverStackNavigator,
    image: require('../assets/SearchIcon.png'),
    tabIndicatorOffset: width * 0.22,
    unmount: false
  },
  {
    id: 2,
    name: 'Scanner',
    component: ScannerStackNavigator,
    image: require('../assets/CameraIcon.png'),
    tabIndicatorOffset: width * 0.43,
    unmount: true
  },
  {
    id: 3,
    name: 'Settings',
    component: SettingsStackNavigator,
    image: require('../assets/SettingsIcon.png'),
    tabIndicatorOffset: width * 0.64,
    unmount: false,
  }
]


const TabsNavigator = () => {

  const tabOffsetValue = useRef(new Animated.Value(0)).current

  const tabTemplate = (item) => {

    return (
      <Tab.Screen
        name={item.name}
        component={item.component}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={item.image}
                resizeMode="contain"
                style={[{ tintColor: focused ? '#fff' : '#393B40' }, styles.tabIcon]}
              />
            </View>
          ),
          unmountOnBlur: item.unmount,

        }}
        listeners={{
          focus: () => {
            Animated.spring(tabOffsetValue, {
              toValue: item.tabIndicatorOffset,
              useNativeDriver: true
            }).start();
          }
        }}
        key={item.id} />
    )
  }

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: styles.tabContainer,
        }}>
        {DATA.map(tabTemplate)}
      </Tab.Navigator>

      <Animated.View style={[
        styles.animatedIndicator,
        {
          transform: [{ translateX: tabOffsetValue }]
        },
      ]} />
    </>
  );
}

export default TabsNavigator;
