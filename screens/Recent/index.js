import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useSelector } from 'react-redux';

import styles from './styles';
import { db } from '../../firebase'

const Recent = () => {

  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  const docID = useSelector(state => state.recentOrderId)

  useEffect(async () => {
    const q = query(collection(db, "recent"), where("id", "==", docID));
    const querySnapshot = await getDocs(q);
    setLoading(false)

    querySnapshot.forEach((doc) => {
      setRecent(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

      let total = doc.data().details.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0)
      setTotal(total)
    });

  }, [])

  return (
    <View style={styles.container}>
      {recent == '' && !loading ?
        <Image
          style={styles.noRecentFound}
          source={require('../../assets/NoRecentFound.png')}
        />
        :
        <ScrollView
          vertical={true}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}>
          {!loading ? recent.map((item) => {
            console.log(item.time)
            const orderTime = new Date(item.time.seconds * 1000)
            var year = orderTime.getFullYear();

            var month = (1 + orderTime.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = orderTime.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            const finalOrderTime = month + '/' + day + '/' + year;
            return (
              <View style={styles.recentContainer} key={item.id}>
                <View style={styles.recentTitle}>
                  <Text style={styles.recentTitleText}>{item.location} - {finalOrderTime}</Text>
                </View>
                {item.details.map((detail, idx) => {
                  return (
                    <View key={idx}>
                      {detail.name === null ? null :
                        <View style={styles.itemRow} >
                          <View style={styles.rectangle} />
                          <View style={styles.itemQuantity}>
                            <Text style={styles.quantityText}>{detail.quantity}</Text>
                          </View>
                          <View style={styles.itemTitle}>
                            <Text style={styles.titleText}>{detail.name}</Text>
                          </View>
                          <View style={styles.itemPrice}>
                            <Text style={styles.priceText}>${detail.quantity * detail.price}</Text>
                          </View>
                        </View>}
                    </View>
                  )
                })}
                <View style={styles.itemRow}>
                  <View style={styles.rectangle} />
                  <View style={styles.rectangle} />
                  <View style={styles.rectangle} />

                  <View style={styles.totalContainer}>
                    <Text style={styles.totalTitle}>Total</Text>
                  </View>
                  <View style={styles.totalPrice}>
                    <Text style={styles.totalText}>${total}</Text>
                  </View>
                </View>
              </View>
            )
          }) :

            <View style={styles.loadingIndicator}>
              <ActivityIndicator size="large" color="#E8546D" />
            </View>
          }

          <StatusBar style="auto" />
        </ScrollView>}

    </View>
  );
}

export default Recent;