import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text, Switch } from 'react-native';
import LottieView from 'lottie-react-native';
import Svg, { Path, G } from "react-native-svg"
import { useDispatch, useSelector } from 'react-redux';
import * as Notifications from 'expo-notifications'
import { resetRecent } from '../../redux/actions/recentOrderId'
import { signOut } from '../../redux/actions/checkAuth';
import { resetUserInfo } from '../../redux/actions/userInfo';

import EdinLogo from "../../components/EdinLogo";
import SettingsHeader from "../../components/SettingsHeader";

import styles from './styles';

const Settings = ({ navigation }) => {
  const sideBarAnimation = React.useRef(null)
  const dispatch = useDispatch();

  const [sidebarIconClicked, setSidebarIconClicked] = useState(false)

  const [isEnabled, setIsEnabled] = useState(false);

  Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true
      };
    }
  })

  const triggerNotificationHandler = () => {
    setIsEnabled(!isEnabled);
    !isEnabled && Notifications.scheduleNotificationAsync({
      content: {
        title: 'It works!',
        body: 'You will get notified with new updates',
      },
      trigger: {
        seconds: 2,
        repeats: true,
      }
    })

    isEnabled && Notifications.cancelAllScheduledNotificationsAsync()
  };

  // useEffect(() => {
  //   if (sidebarIconClicked) {
  //     sideBarAnimation.current.play(0, 20)
  //   }
  //   else {
  //     sideBarAnimation.current.play(20, 0)
  //   }

  // }, [sidebarIconClicked])

  // const openSideBar = () => {
  //   setSidebarIconClicked(!sidebarIconClicked)
  // }

  const profileSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
    >
      <Path
        d="M9.5 9.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zm0-7.917a3.167 3.167 0 1 1 0 6.334 3.167 3.167 0 0 1 0-6.334zm0 9.5a7.133 7.133 0 0 0-7.125 7.125.792.792 0 1 0 1.583 0 5.542 5.542 0 0 1 11.084 0 .792.792 0 1 0 1.583 0A7.133 7.133 0 0 0 9.5 11.083z"
        fill="#EA6E6E"
      />
    </Svg>
  )

  const notificationSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="m17.856 10.816-1.504-5.412a7.379 7.379 0 0 0-14.313.375L.875 11.016a3.958 3.958 0 0 0 3.864 4.817h.882a3.959 3.959 0 0 0 7.758 0h.664a3.958 3.958 0 0 0 3.814-5.017zm-8.356 6.6a2.376 2.376 0 0 1-2.23-1.583h4.46a2.375 2.375 0 0 1-2.23 1.584zm6.433-4.104a2.358 2.358 0 0 1-1.891.938H4.739a2.375 2.375 0 0 1-2.318-2.89l1.164-5.238a5.796 5.796 0 0 1 11.241-.295l1.505 5.412a2.357 2.357 0 0 1-.398 2.073z"
      />
    </Svg>
  )

  const aboutSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
    >
      <G fill="#EA6E6E">
        <Path d="M9.5 0A9.5 9.5 0 1 0 19 9.5 9.51 9.51 0 0 0 9.5 0zm0 17.417A7.917 7.917 0 1 1 17.417 9.5 7.926 7.926 0 0 1 9.5 17.417z" />
        <Path d="M9.5 7.917h-.792a.792.792 0 0 0 0 1.583H9.5v4.75a.792.792 0 1 0 1.583 0V9.5A1.583 1.583 0 0 0 9.5 7.917zm0-1.584a1.188 1.188 0 1 0 0-2.375 1.188 1.188 0 0 0 0 2.375z" />
      </G>
    </Svg>
  )

  const signOutSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <G fill="#EA6E6E">
        <Path d="m18.073 7.261-3.07-3.07a.792.792 0 0 0-1.12 1.119l3.07 3.07c.092.094.172.197.238.31-.012 0-.021-.007-.033-.007L4.74 8.708a.792.792 0 0 0 0 1.584l12.412-.026c.022 0 .04-.01.062-.012-.07.134-.16.257-.265.365l-3.07 3.071a.792.792 0 1 0 1.119 1.12l3.07-3.071a3.167 3.167 0 0 0 0-4.478h.004z" />
        <Path d="M5.542 17.417H3.958a2.375 2.375 0 0 1-2.375-2.375V3.958a2.375 2.375 0 0 1 2.375-2.375h1.584a.792.792 0 1 0 0-1.583H3.958A3.963 3.963 0 0 0 0 3.958v11.084A3.963 3.963 0 0 0 3.958 19h1.584a.792.792 0 1 0 0-1.583z" />
      </G>
    </Svg>
  )

  const forwardSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="M5.542 19a.792.792 0 0 1-.562-1.354l6.467-6.468a2.375 2.375 0 0 0 0-3.356L4.98 1.354A.795.795 0 1 1 6.104.23l6.468 6.467a3.958 3.958 0 0 1 0 5.606L6.104 18.77a.791.791 0 0 1-.562.23z"
      />
    </Svg>
  )

  return (
    <View style={styles.container}>
      <View style={Platform.OS === "android" ? styles.androidHeader : styles.iosHeader}>
        {/* <TouchableOpacity onPress={openSideBar}>
          <LottieView
            ref={sideBarAnimation}
            style={styles.sidebarIcon}
            source={require('../../assets/lottie/sidebarAnimation.json')} autoPlay={false}
            loop={false} />
        </TouchableOpacity> */}

        <View style={styles.edinLogo}>
          <EdinLogo />
        </View>
      </View>

      <View style={styles.settingsHeader}>
        <SettingsHeader />
      </View>

      <View style={styles.settingsOptionContainer}>
        <TouchableOpacity style={styles.settingsContainer} onPress={() => navigation.navigate('EditProfile')}>
          <View style={styles.logo}>{profileSVG}</View>
          <Text style={styles.settingsText}>Edit Profile</Text>
          <View style={styles.forwardIcon}>{forwardSVG}</View>
        </TouchableOpacity>

        <View style={styles.settingsContainer}>
          <View style={styles.logo}>{notificationSVG}</View>
          <Text style={styles.settingsText}>Notification</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#393B40" }}
            thumbColor={isEnabled ? "#EA6E6E" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={triggerNotificationHandler}
            value={isEnabled}
            style={styles.switch}
          />
        </View>

        <TouchableOpacity style={styles.settingsContainer}>
          <View style={styles.logo}>{aboutSVG}</View>
          <Text style={styles.settingsText}>About</Text>
          <View style={styles.forwardIcon}>{forwardSVG}</View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsContainer}
          onPress={() => { dispatch(signOut()); dispatch(resetUserInfo()); dispatch(resetRecent()) }}>
          <View style={styles.logo}>{signOutSVG}</View>
          <Text style={styles.settingsText}>Sign Out</Text>
          <View style={styles.forwardIcon}>{forwardSVG}</View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Settings;