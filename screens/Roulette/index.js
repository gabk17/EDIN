import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { View, Text, Animated, Easing, Alert, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add, reset } from '../../redux/actions/scoreActions';
import { doc, updateDoc, query, getDocs, collection, where, addDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import EdinLogo from "../../components/EdinLogo";
import RouletteHeader from "../../components/RouletteHeader";
import Wheel from '../../components/Wheel'
import WheelMarker from '../../components/WheelMarker'
import styles from './styles';

const Roulette = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0)
  const [userDocID, setUserDocID] = useState('')
  const [newFirebaseScore, setNewFirebaseScore] = useState(0)
  const info = useSelector(state => state.userInfo)
  const totalScore = useSelector(state => state.score)

  let [, userID] = info

  useEffect(async () => {
    const q = query(collection(db, "users"), where("id", "==", userID));
    const docs = await getDocs(q);
    docs.forEach((doc) => {
      setUserDocID(doc.id)
    })
  }, [])
  console.log(userDocID)


  //[reward, weight, wheel spin degrees]
  const data = [
    [0, 0, '2925deg'],
    [10, 3, '3195deg'],
    [40, 2, '3105deg'],
    [100, 1, '3015deg'],
  ];

  let rewardArray = [];

  for (let i = 0; i < data.length; ++i) {
    for (let j = 0; j < data[i][1]; ++j) {
      rewardArray.push([data[i][0], data[i][2]]);
    }
  }

  let reward = rewardArray[Math.floor(Math.random() * rewardArray.length)]

  let spinValue = new Animated.Value(value);

  const spinWheel = () => {

    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
    setValue(0)
    console.log(totalScore, reward[0])
    setTimeout(() => {
      const userDoc = doc(db, 'users', userDocID)
      const newField = { score: totalScore + reward[0] }
      updateDoc(userDoc, newField)
      if (reward[0] === 10 || reward[0] === 40 || reward[0] === 100) {
        Alert.alert(
          "Congratulations !",
          `You have won ${reward[0]} points`,
          [
            {
              text: "Thanks", onPress: () => {

                dispatch(add(reward[0]))
              },
              style: "cancel"
            },
          ]
        );
      } else {
        Alert.alert(
          "Oops!",
          `Better Luck Next Time!`,
          [
            {
              text: "Okay",
              style: "cancel"
            },
          ]
        );
      }
    }, 4500);
    setTimeout(() => {
      setSpinned(true)
    }, 6000);

  }

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', reward[1]]
  })

  const [spinned, setSpinned] = useState(false)

  const goHome = () => {
    navigation.navigate('Home', { screen: 'Home' })
  }

  return (
    <View style={styles.header}>
      <View style={styles.edinLogo}>
        <EdinLogo />
        <View style={styles.rouletteHeader}>
          <RouletteHeader />
        </View>
      </View>
      <View style={styles.wheelContainer}>
        <View style={styles.wheel}>
          <View style={styles.wheelMarker}>
            <WheelMarker />
          </View>
          <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]}>
            <Wheel />
          </Animated.View>
        </View>
        <View style={styles.buttonContainer}>
          {!spinned ?
            <TouchableOpacity style={styles.spinButton} onPress={() => spinWheel()}>
              <Text style={styles.buttonText}>Spin The Wheel</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.spinButton} onPress={() => goHome()}>
              <Text style={styles.buttonText}>Go Home</Text>
            </TouchableOpacity>}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Roulette;