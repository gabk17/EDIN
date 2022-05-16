import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text, TextInput, ScrollView, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import Svg, { Path } from "react-native-svg"

import { AllLocations } from '../../utils/AllLocations'
import EdinLogo from "../../components/EdinLogo";
import DiscoverHeader from "../../components/DiscoverHeader";
import styles from './styles';

const Discover = ({ navigation }) => {

  const searchAnimation = React.useRef(null)

  const searchSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
    >
      <Path
        fill="#E75455"
        d="M18.652 16.977 14.975 13.3a8.316 8.316 0 1 0-1.676 1.675l3.68 3.68a1.184 1.184 0 0 0 1.673-1.675v-.002zM8.348 14.264a5.917 5.917 0 1 1 5.917-5.917 5.923 5.923 0 0 1-5.917 5.917z"
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

  const crossSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <Path
        fill="#E75455"
        d="M12.715 6.285a1.188 1.188 0 0 0-1.68 0L9.5 7.821 7.965 6.285a1.188 1.188 0 1 0-1.68 1.68L7.821 9.5l-1.536 1.535a1.188 1.188 0 1 0 1.68 1.68L9.5 11.179l1.535 1.536a1.188 1.188 0 1 0 1.68-1.68L11.179 9.5l1.536-1.535a1.188 1.188 0 0 0 0-1.68z"
      />
      <Path
        fill="#E75455"
        d="M9.5 0A9.5 9.5 0 1 0 19 9.5 9.51 9.51 0 0 0 9.5 0zm0 16.625A7.125 7.125 0 1 1 16.625 9.5 7.133 7.133 0 0 1 9.5 16.625z"
      />
    </Svg>
  )

  const [search, setSearch] = useState('')
  const [filteredSearch, setFilteredSearch] = useState([...AllLocations]);

  const searchLocation = (e) => {
    setSearch(e)
    setFilteredSearch(AllLocations.filter(i => i.title.toLowerCase().includes(e.toLowerCase())))
  }

  const detailClick = (item) => {
    navigation.navigate('Details', { item })
  }

  const suggestionTemplate = (item) => {

    return (
      <View style={styles.suggestionContainer} key={item.id}>
        <View style={styles.suggestionBoxTop}>
          <Image
            style={styles.image}
            source={item.image}
          />
        </View>
        <TouchableOpacity
          onPress={() => detailClick(item)}>
          <View style={styles.suggestionBoxBottom}>
            <View style={styles.alignment}>
              <View style={styles.suggestionTextContainer}>
                <Text style={styles.placeName}>{item.title}</Text>
              </View>
              <View style={styles.suggestionLookupIcon}>
                {lookupIconSVG}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={Platform.OS === "android" ? styles.androidHeader : styles.iosHeader}>

        <View style={styles.edinLogo}>
          <EdinLogo />
        </View>
      </View>

      <View style={styles.discoverHeader}>
        <DiscoverHeader />
        <View style={styles.inputContainer}>
          <View style={styles.logo}>
            {search === '' ? searchSVG : <TouchableOpacity onPress={() => setSearch('')}>
              {crossSVG}
            </TouchableOpacity>}

          </View>
          <TextInput style={styles.input}
            placeholder="Search"
            maxLength={30}
            value={search}
            onChangeText={(e) => searchLocation(e)} />
        </View>

        {search === '' ?

          <View style={styles.searchIconContainer}>
            <LottieView
              ref={searchAnimation}
              style={styles.searchIcon}
              source={require('../../assets/lottie/searchAnimation.json')}
              autoPlay loop />
          </View>
          : <ScrollView
            style={styles.scrollViewContainer}
            vertical={true}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
          >
            {filteredSearch.map(suggestionTemplate)}
          </ScrollView>}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Discover;