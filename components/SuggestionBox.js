import React, { useState, useEffect, useRef } from "react"
import { Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, View, Image } from 'react-native';
import Svg, { Path } from "react-native-svg"

import { MostPopularData } from '../utils/MostPopularData';
import { OutdoorData } from '../utils/OutdoorData';
import { BarsAndPubsData } from '../utils/BarsAndPubsData';
import { CasualDinersData } from '../utils/CasualDinersData';
import { DessertsData } from '../utils/DessertsData';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SuggestionBox = ({ option, navigation }) => {

  const scrollRef = useRef();

  useEffect(() => {
    setSelectedOption(option)
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [option])

  const [selectedOption, setSelectedOption] = useState(option)

  const optionClick = (item) => {
    {
      navigation.navigate('Details', { item })
    }
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
          onPress={() => optionClick(item)}>
          <View style={styles.suggestionBoxBottom}>
            <View style={styles.alignment}>
              <View style={styles.suggestionTextContainer}>
                <Text style={styles.placeName}>{item.title}</Text>
                <Text style={styles.rating}>{starSVG} {item.rating}</Text>
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

  const optionalRendering = () => {
    switch (selectedOption) {
      case "Most Popular":
        return MostPopularData.map(suggestionTemplate)

      case "Outdoor":
        return OutdoorData.map(suggestionTemplate)

      case "Bars and Pubs":
        return BarsAndPubsData.map(suggestionTemplate)

      case "Casual Diners":
        return CasualDinersData.map(suggestionTemplate)

      case "Desserts":
        return DessertsData.map(suggestionTemplate)
    }
  }
  return (
    <>
      <ScrollView
        horizontal={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        {optionalRendering()}
      </ScrollView>

      <View style={[styles.infoContainer]} />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  suggestionContainer: {
    margin: 15,
    marginBottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  suggestionBoxTop: {
    width: width - width / 5.5,
    height: height - height / 1.25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#E755',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#000',
    overflow: 'hidden'
  },
  suggestionBoxBottom: {
    width: width - width / 5.5,
    height: height - height / 1.12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#000'
  },
  suggestionTextContainer: {
    marginLeft: 40,
  },
  placeName: {
    fontWeight: 'bold',
    color: '#E8546D',
    fontSize: 18,
  },
  rating: {
    fontWeight: 'bold',
    color: '#393B40',
    fontSize: 18,
  },
  suggestionLookupIcon: {
    marginRight: 40,
    marginTop: 10,
  },
});
export default SuggestionBox