import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity, Button } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import TimeAgo from 'react-native-timeago';
import Modal from "react-native-modal";

import styles from './styles';
import { db } from '../../firebase'

const Orders = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [order, setOrder] = useState([]);
  const [orderDetails, setOrderDetails] = useState({ "details": [] })
  const [loading, setLoading] = useState(true)
  const info = useSelector(state => state.userInfo)

  let [, userID] = info

  useEffect(async () => {
    const q = query(collection(db, "recent"), where("userID", "==", userID));
    const fetchOrders = await getDocs(q);
    setLoading(false)

    fetchOrders.forEach((doc) => {
      setOrder(fetchOrders.docs.map((doc) => ({ ...doc.data() })))
    });

  }, [])

  const handleModal = (id) => {
    setIsModalVisible(!isModalVisible)
    setOrderDetails(order[id])
  };

  return (
    <View style={styles.container}>
      {order == '' && !loading ?
        <Image
          style={styles.noRecentFound}
          source={require('../../assets/NoRecentFound.png')}
        />
        :
        <ScrollView
          vertical={true}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}>
          {!loading ? order.map((item, id) => {
            const orderTimeAgo = new Date(item.time.seconds * 1000)
            {/* console.log(order[1])
          console.log('------------') */}
            return (
              <View key={item.id}>
                <View style={styles.orderContainer} >
                  <TouchableOpacity style={styles.itemRow} onPress={() => handleModal(id)}>
                    <View style={styles.rectangle} />
                    <View style={styles.orderTimeAgo}>
                      <Text style={styles.timeAgoText}>
                        {item.location} - <TimeAgo time={orderTimeAgo} />
                      </Text>
                    </View>
                  </TouchableOpacity>

                </View>

                <Modal isVisible={isModalVisible}
                  animationInTiming={500}
                  animationOutTiming={500}
                  backdropTransitionInTiming={100}
                  backdropTransitionOutTiming={100}
                  backdropColor="rgba(255,255,255,0)"
                  onBackdropPress={() => setIsModalVisible(!isModalVisible)}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      {orderDetails.details.map((detail, idx) => {
                        return (
                          <View key={idx}>
                            {detail.name === null ? null :
                              <View style={styles.itemRowModal} >
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
                      <View style={styles.buttonContainer}>
                        <Button title="Hide"
                          onPress={() => setIsModalVisible(!isModalVisible)}
                          color='#E8546D'

                        />
                      </View>
                    </View>
                  </View>
                </Modal>
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

export default Orders;