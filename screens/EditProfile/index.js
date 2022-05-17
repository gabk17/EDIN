import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ToastAndroid } from 'react-native';
import { useSelector } from 'react-redux';
import { doc, updateDoc, query, getDocs, collection, where, onSnapshot } from 'firebase/firestore'
import Svg, { Path } from "react-native-svg"

import { db } from '../../firebase'
import styles from './styles';
import EdinLogo from "../../components/EdinLogo";
import ForwardButton from '../../components/ForwardButton'

const EditProfile = ({ navigation }) => {

  const profileSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={21}
      fill="none"

    >
      <Path
        fill="#EA6E6E"
        d="M6.987 12.357c-3.996.329-7.04 3.405-6.986 7.06v.186c0 .708.63 1.282 1.406 1.282.776 0 1.406-.574 1.406-1.282v-.236c-.042-2.245 1.775-4.159 4.219-4.443 2.579-.233 4.877 1.483 5.133 3.834.015.139.023.279.023.418v.427c0 .708.63 1.282 1.406 1.282.776 0 1.406-.574 1.406-1.282v-.427c-.005-3.779-3.37-6.84-7.516-6.835-.166 0-.332.005-.497.016zm.513-1.725c3.107 0 5.625-2.295 5.625-5.126C13.125 2.675 10.607.38 7.5.38c-3.106 0-5.624 2.295-5.624 5.126.003 2.83 2.52 5.123 5.624 5.126zm0-7.69c1.554 0 2.813 1.148 2.813 2.564 0 1.416-1.26 2.563-2.813 2.563-1.553 0-2.812-1.147-2.812-2.563 0-1.416 1.26-2.563 2.812-2.563z"
      />
    </Svg>
  )

  const familySVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="m18.189 6.883-5.61-5.61a4.36 4.36 0 0 0-6.158 0l-5.61 5.61A2.753 2.753 0 0 0 0 8.843v8.215A1.945 1.945 0 0 0 1.944 19h15.112c1.073 0 1.942-.87 1.944-1.942V8.842a2.753 2.753 0 0 0-.811-1.96zm-1.564 9.742h-3.958v-2.52a3.023 3.023 0 0 0-3.023-3.022h-.288a3.023 3.023 0 0 0-3.023 3.023v2.519H2.375V8.842a.4.4 0 0 1 .116-.28l5.61-5.61a1.98 1.98 0 0 1 2.798 0l5.61 5.61a.4.4 0 0 1 .116.28v7.783z"
      />
    </Svg>
  )

  const [userDocID, setUserDocID] = useState('')
  const [firebaseFirstName, setFirebaseFirstName] = useState('')
  const [firebaseLastName, setFirebaseLastName] = useState('')

  const info = useSelector(state => state.userInfo)

  let [, userID] = info

  useEffect(async () => {
    const q = query(collection(db, "users"), where("id", "==", userID));

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUserDocID(doc.id)
        setFirebaseFirstName(doc.data().firstName)
        setFirebaseLastName(doc.data().lastName)
      });
    });
  }, [])

  const handleEdit = async () => {
    const userDoc = doc(db, 'users', userDocID)
    const newField = { firstName: firebaseFirstName, lastName: firebaseLastName }
    updateDoc(userDoc, newField)

    ToastAndroid.show('Profile has been edited', ToastAndroid.SHORT)

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.logo}>
          {profileSVG}
        </View>
        <TextInput style={styles.input} placeholder="First Name" maxLength={32} value={firebaseFirstName} onChangeText={e => setFirebaseFirstName(e)} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.logo}>
          {familySVG}
        </View>
        <TextInput style={styles.input} placeholder="First Name" maxLength={32} value={firebaseLastName} onChangeText={e => setFirebaseLastName(e)} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButtonContainer} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EditProfile;