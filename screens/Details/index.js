import React, { useRef } from "react"
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Animated, ScrollView, Dimensions } from 'react-native';
import Svg, { Path } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

const Details = ({ navigation, route }) => {

  const { width, height } = Dimensions.get('window')
  const { item } = route.params;

  const starSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      fill="none"
    >
      <Path
        fill="#FAA85D"
        d="m.83 7.75 2.224 1.625-.845 2.617a1.987 1.987 0 0 0 .74 2.258 1.986 1.986 0 0 0 2.375-.012L7.5 12.637l2.176 1.6a2.017 2.017 0 0 0 3.115-2.245l-.845-2.617L14.17 7.75a2.017 2.017 0 0 0-1.188-3.645H10.25L9.42 1.52a2.017 2.017 0 0 0-3.84 0l-.83 2.585H2.02A2.017 2.017 0 0 0 .831 7.75H.829z"
      />
    </Svg>
  )

  const crossSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="M13.458 0a.791.791 0 0 1 .563 1.354L7.553 7.822a2.375 2.375 0 0 0 0 3.356l6.468 6.468a.795.795 0 0 1-1.125 1.124l-6.468-6.467a3.958 3.958 0 0 1 0-5.606L12.896.23a.792.792 0 0 1 .562-.23z"
      />
    </Svg>
  )

  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View>
        <Animated.ScrollView
          onScroll={item.color && Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }], { useNativeDriver: true }
          )}
          scrollEventThrottle={16}>
          <View style={styles.bannerContainer(item.color)}>
            <Animated.Image style={styles.banner(scrollA)} source={item.image} />
          </View>

          <View>
            <View style={[StyleSheet.absoluteFillObject, styles.infoContainer]}>
              <View style={styles.titleContainer}>
                <View style={styles.backButton}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    {crossSVG}
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemTitle}>
                  {' '}{item.title}
                </Text>
              </View>
              <LinearGradient
                start={[1, 1]}
                colors={['#E85486', '#E8546D', '#E75455']}
                style={styles.separator}
              ></LinearGradient>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>Rating: {starSVG} {item.rating} </Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.callButton} onPress={() => { Linking.openURL(`tel:${item.phoneNumber}`) }}>
                  <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: height - 25 }}>

            </View>
          </View>
        </Animated.ScrollView>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

export default Details;
