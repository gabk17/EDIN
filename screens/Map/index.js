import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Animated, Image, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Svg, { Path } from "react-native-svg"

import { AllLocations } from '../../utils/AllLocations'

import styles from './styles';

const Map = ({ navigation }) => {

  const width = Dimensions.get('window').width

  const detailClick = (item) => {
    {
      navigation.navigate('Details', { item })
    }
  }
  const markerTemplate = (item) => {
    return (
      <Marker
        pinColor={"#E8546D"}
        key={item.id}
        coordinate={{
          latitude: item.latitude,
          longitude: item.longitude,
        }}
        title="Test Title"
        description="Test Description"
      >
        <Callout tooltip onPress={() => detailClick(item)}>
          <View style={styles.locationContainer}>
            <View style={styles.locationBox}>
              <View style={styles.alignmentMarker}>
                <View style={styles.locationTextContainer}>
                  <Text style={styles.placeName}>{item.title}</Text>
                  <Text style={styles.rating}>{starSVG} {item.rating}</Text>
                </View>
                <View style={styles.locationLookupIcon}>
                  {lookupIconSVG}
                </View>
              </View>
            </View>
          </View>
        </Callout>
      </Marker>
    )
  }

  const mapRef = useRef(null)

  const suggestionTemplate = (item) => {

    const location = {
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    const goToLocation = () => {
      mapRef.current.animateToRegion(location, 2 * 1000);
    };

    return (
      <View key={item.id} style={styles.suggestionContainer}>
        <TouchableOpacity onPress={() => goToLocation()}>
          <View style={styles.suggestionBoxTop}>
            <Image
              style={styles.image}
              source={item.image}
            />
          </View>

          <View style={styles.suggestionBoxBottom}>
            <View style={styles.alignment}>
              <View style={styles.suggestionTextContainer}>
                <Text style={styles.placeName}>{item.title}</Text>
                <Text style={styles.rating}>{starSVG} {item.rating}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

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

  const lookupIconSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="M18 0a18 18 0 1 0 18 18A18.019 18.019 0 0 0 18 0zm6 19.5h-4.5V24a1.5 1.5 0 1 1-3 0v-4.5H12a1.5 1.5 0 0 1 0-3h4.5V12a1.5 1.5 0 1 1 3 0v4.5H24a1.5 1.5 0 1 1 0 3z"
      />
    </Svg>
  )
  return (
    <>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 33.8938,
          longitude: 35.5018,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        ref={mapRef}
      >
        {AllLocations.map(markerTemplate)}

      </MapView>

      <Animated.ScrollView
        style={styles.markerLocationContainer}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - width / 2.7}
        snapToAlignment="center"
        contentContainerStyle={{
          paddingHorizontal: width * 0.15
        }}>
        {AllLocations.map(suggestionTemplate)}
      </Animated.ScrollView>
      <Text style={styles.markerLocationText}>Click a Marker to check location</Text>
      <StatusBar style="auto" />
    </>
  );
}

export default Map;