import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import { ContributionGraph, PieChart } from 'react-native-chart-kit';

import styles from './styles';
import { db } from '../../firebase'
import ActivityHeader from '../../components/ActivityHeader'
const Activity = () => {

  const info = useSelector(state => state.userInfo)
  const [orderTime, setOrderTime] = useState([])
  const [loading, setLoading] = useState(true)
  const [pieLocation, setPieLocation] = useState([])
  let [, userID] = info

  function convertDate(date) {
    const convertedTime = new Date(date)
    var year = convertedTime.getFullYear();

    var month = (1 + convertedTime.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = convertedTime.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    const finalOrderTime = year + '-' + month + '-' + day;

    return finalOrderTime
  }

  useEffect(async () => {
    try {
      const q = query(collection(db, "recent"), where("userID", "==", userID), orderBy("time", "desc"));

      const fetchDoc = await getDocs(q);

      const arrayTime = []

      fetchDoc.forEach((doc) => {
        arrayTime.push({ date: convertDate(doc.data().time.seconds * 1000), count: 0 })
      });
      setLoading(false)

      const arrayTest = []

      const arrayTemp = []

      arrayTime.forEach((order) => {
        if (arrayTemp.includes(order.date)) {
          arrayTest.forEach((array) => {
            if (array.date === order.date) {
              array.count++;
            }
          })
        }
        else {
          order.count++
          arrayTemp.push(order.date)
          arrayTest.push(order)
        }
      })

      const dateOfTomorrow = new Date()
      dateOfTomorrow.setDate(dateOfTomorrow.getDate() + 1);

      setOrderTime([...arrayTest, { date: convertDate(dateOfTomorrow), count: 0 }])

    } catch (e) {
      console.log(e)
    }

  }, [])

  useEffect(async () => {
    try {
      const q = query(collection(db, "recent"), where("userID", "==", userID));

      const fetchDoc = await getDocs(q);

      const locationArray = []
      fetchDoc.forEach((doc) => {
        locationArray.push(doc.data().location)
      });

      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      var uniqueLocationArray = locationArray.filter(onlyUnique);

      let pieArray = [];

      const colorArray = ['#54E89E', '#E8546D', '#54CFE8']
      uniqueLocationArray.forEach((location, idx) => {
        pieArray.push({
          name: location, count: locationArray.filter(x => x === location).length, color: colorArray[idx], legendFontColor: '#393B40', legendFontSize: 14,
        })
      })

      pieArray.sort((a, b) => b.count - a.count)
      pieArray = pieArray.slice(0, 3)
      setPieLocation([...pieArray])
      console.log(pieArray)
    } catch (e) {
      console.log(e)
    }
  }, [])

  function dateWithMonthsDelay(months) {
    const date = new Date()
    date.setMonth(date.getMonth() + months)
    return date
  }

  return (
    <View style={styles.container}>
      <View style={styles.activityHeader}>
        <ActivityHeader />
      </View>
      {!loading ?
        <>
          <ContributionGraph
            values={orderTime}
            endDate={dateWithMonthsDelay(1)}
            numDays={105}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#E8546D',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(232, 84, 109, ${opacity})`,
              style: { borderRadius: 16 },
            }}
            style={{
              borderWidth: 1,
              borderRadius: 16,
              borderColor: '#E8546D',
              margin: 20
            }}
          />
          <PieChart
            data={pieLocation}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#E8546D',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(232, 84, 109, ${opacity})`,
              style: { borderRadius: 16 },
            }}
            style={{
              borderWidth: 1,
              borderRadius: 16,
              borderColor: '#E8546D',
              margin: 20
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="5"
            absolute //for the absolute number remove if you want percentage
          />
        </> :
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color="#E8546D" />
        </View>}


      <StatusBar style="auto" />
    </View>
  );
}

export default Activity;