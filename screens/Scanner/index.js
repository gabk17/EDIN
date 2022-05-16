import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux';

import { db } from '../../firebase'
import EdinLogo from "../../components/EdinLogo";
import ScannerHeader from "../../components/ScannerHeader";
import { saveRecent } from '../../redux/actions/recentOrderId';
import styles from './styles';

const Scanner = ({ navigation }) => {

  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const info = useSelector(state => state.userInfo)
  // console.log(info)
  let [, userID] = info

  useEffect(async () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);


    const json_data = JSON.parse(data)
    const {
      details: [{ name0 }],
      details: [{ }, { name1 }],
      details: [{ }, { }, { name2 }],
      details: [{ }, { }, { }, { name3 }],
      details: [{ }, { }, { }, { }, { name4 }],


      details: [{ price0 }],
      details: [{ }, { price1 }],
      details: [{ }, { }, { price2 }],
      details: [{ }, { }, { }, { price3 }],
      details: [{ }, { }, { }, { }, { price4 }],

      details: [{ quantity0 }],
      details: [{ }, { quantity1 }],
      details: [{ }, { }, { quantity2 }],
      details: [{ }, { }, { }, { quantity3 }],
      details: [{ }, { }, { }, { }, { quantity4 }],

      location } = json_data

    // docID === '' ? null : await deleteDoc(doc(db, "recent", docID));

    await addDoc(collection(db, "recent"), {
      "details": [
        { "name": name0, "price": price0, "quantity": quantity0 },
        { "name": name1, "price": price1, "quantity": quantity1 },
        { "name": name2, "price": price2, "quantity": quantity2 },
        { "name": name3, "price": price3, "quantity": quantity3 },
        { "name": name4, "price": price4, "quantity": quantity4 },
      ],
      "location": location,
    }).then(async (docRef) => {
      dispatch(saveRecent(docRef.id));
      const recentDoc = doc(db, 'recent', docRef.id)
      const newField = { id: docRef.id, userID: userID, time: new Date() }
      await updateDoc(recentDoc, newField, { merge: true })
    }).catch((error) => {
      console.log(`There has been a problem with your operation: ${error.message}`)
    })

    navigation.navigate('Roulette')
  };

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <ActivityIndicator size="large" color="#E8546D" />
      </View>
    )
  }
  if (hasPermission === false) {
    return (
      <View style={styles.permissionText}>
        <Text>No access to camera</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.topContainer} >
        <View style={styles.edinLogo}>
          <EdinLogo />
        </View>
        <View style={styles.scannerHeader}>
          <ScannerHeader />
        </View>
      </View>

      <View style={styles.bottomContainer} >
        <View style={styles.textContainer}>
          <Text style={styles.qrText}>Please Scan the QR Code Provided</Text>
        </View>
      </View>


      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      <StatusBar style="auto" />
    </View>
  );
}

export default Scanner
