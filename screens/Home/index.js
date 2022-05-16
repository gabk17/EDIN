import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { doc, updateDoc, query, getDocs, collection, where, addDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import styles from './styles';
import EdinLogo from "../../components/EdinLogo";
import ForwardButton from '../../components/ForwardButton'
import SuggestionBox from '../../components/SuggestionBox';


const Home = ({ navigation }) => {

  const [selectedOption, setSelectedOption] = useState('Most Popular')
  const [firebaseUserScore, setFirebaseUserScore] = useState('')
  const [firebaseFirstName, setFirebaseFirstName] = useState('')
  const [firebaseLastName, setFirebaseLastName] = useState('')

  const info = useSelector(state => state.userInfo)
  // console.log(info)
  let [, userID] = info

  useEffect(async () => {
    const q = query(collection(db, "users"), where("id", "==", userID));
    const docs = await getDocs(q);
    docs.forEach((doc) => {
      setFirebaseUserScore(doc.data().score)
      setFirebaseFirstName(doc.data().firstName)
      setFirebaseLastName(doc.data().lastName)
    })
  }, [])

  const DATA = [
    { id: 0, title: "Most Popular" },
    { id: 1, title: "Outdoor" },
    { id: 2, title: "Bars and Pubs" },
    { id: 3, title: "Casual Diners" },
    { id: 4, title: "Desserts" },
  ]

  const suggestionTemplate = (item) => {

    return (
      <TouchableOpacity key={item.id}
        onPress={() => setSelectedOption(item.title)}>
        <Text style={[selectedOption === item.title ? styles.selectedOption : styles.notSelectedOption, styles.suggestionOption]}>
          {selectedOption === item.title ? '\u2B24' : null} {item.title}
        </Text>
      </TouchableOpacity>
    )
  }


  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ScrollView
        vertical={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
        <View style={Platform.OS === "android" ? styles.androidHeader : styles.iosHeader}>

          <View style={styles.edinLogo}>
            <EdinLogo />
          </View>

        </View>
        <View style={styles.helloMsgContainer}>
          <Text style={styles.helloText}>Hello, {''}</Text>
          <Text style={styles.usernameText}>{firebaseFirstName}!</Text>
        </View>

        <View style={styles.scoreContainer}>
          <LinearGradient
            start={[1, 1]}
            colors={['#E85486', '#E8546D', '#E75455']}
            style={styles.scoreBox}
          >
            <View style={styles.alignment}>
              <View style={styles.userTextContainer}>
                <Text style={styles.username}>{firebaseFirstName} {firebaseLastName}</Text>
                <Text style={styles.totalScore}>Total Score: </Text>
              </View>
              <View style={styles.userScoreContainer}>
                <Text style={styles.scoreText}>{firebaseUserScore}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>



        <View style={styles.optionContainer}>
          <View style={styles.align}>
            <TouchableOpacity onPress={() => navigation.navigate('Recent')}>
              <LinearGradient
                start={[1, 1]}
                colors={['#E8546D', '#E75455']}
                style={styles.optionBoxN1}
              >
                <View style={styles.forwardButton}>
                  <ForwardButton color={"#fff"} />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTextN1}>Recent</Text>
                  <Text style={styles.optionTextN1}>Visit</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
              <View style={styles.optionBoxN2}>
                <View style={styles.forwardButton}>
                  <ForwardButton color={"#E85486"} />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTextN2}>Favorite</Text>
                  <Text style={styles.optionTextN2}>Menu</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.align}>
            <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
              <View style={styles.optionBoxN3}>
                <View style={styles.forwardButton}>
                  <ForwardButton color={"#E75455"} />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTextOrder}>My Orders</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
              <LinearGradient
                start={[1, 1]}
                colors={['#E85486', '#E8546D']}
                style={styles.optionBoxN1}
              >
                <View style={styles.forwardButton}>
                  <ForwardButton color={"#fff"} />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionTextN1}>EDIN</Text>
                  <Text style={styles.optionTextN1}>Map</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={styles.suggestionBarContainer}
          horizontal={true}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        >
          {DATA.map(suggestionTemplate)}
        </ScrollView>

        <SuggestionBox option={selectedOption} navigation={navigation} />

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

export default Home;