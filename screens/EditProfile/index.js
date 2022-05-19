import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ToastAndroid } from 'react-native';
import { useSelector } from 'react-redux';
import { doc, updateDoc, query, getDocs, collection, where, onSnapshot } from 'firebase/firestore'
import Svg, { Path } from "react-native-svg"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

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

  const forwardSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="M5.542 19a.792.792 0 0 1-.562-1.354l6.467-6.468a2.375 2.375 0 0 0 0-3.356L4.98 1.354A.795.795 0 1 1 6.104.23l6.468 6.467a3.958 3.958 0 0 1 0 5.606L6.104 18.77a.791.791 0 0 1-.562.23z"
      />
    </Svg>
  )

  const passSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={21}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="M15.01 7.715V6.458C15.01 3.121 12.32.416 9 .416S2.99 3.121 2.99 6.458v1.257a4.75 4.75 0 0 0-2.575 4.223v4.315C.417 18.873 2.53 20.997 5.137 21h7.727c2.606-.003 4.719-2.126 4.721-4.747v-4.315a4.75 4.75 0 0 0-2.575-4.223zM9 3.005a3.443 3.443 0 0 1 3.434 3.453v.733H5.566v-.733A3.443 3.443 0 0 1 9 3.006zm6.01 13.248a2.152 2.152 0 0 1-2.146 2.158H5.136a2.152 2.152 0 0 1-2.147-2.158v-4.315c0-1.192.961-2.158 2.147-2.158h7.727c1.185 0 2.146.966 2.146 2.158v4.315z"
      />
      <Path
        fill="#EA6E6E"
        d="M8.57 12.37h.86c.71 0 1.287.579 1.287 1.294 0 .715-.576 1.295-1.288 1.295h-.858c-.711 0-1.288-.58-1.288-1.295s.577-1.295 1.288-1.295z"
      />
    </Svg>
  )

  const [userDocID, setUserDocID] = useState('')
  const [firebaseFirstName, setFirebaseFirstName] = useState('')
  const [firebaseLastName, setFirebaseLastName] = useState('')

  const auth = getAuth();
  const info = useSelector(state => state.userInfo)
  let [, userID, , , email] = info

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

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      ToastAndroid.show("Password reset link sent!", ToastAndroid.SHORT)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.editProfileContainer}>
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

      <TouchableOpacity style={styles.settingsContainer} onPress={() => sendPasswordReset(email)}>
        <View style={styles.passLogo}>{passSVG}</View>
        <Text style={styles.settingsText}>Reset Password</Text>
        <View style={styles.forwardIcon}>{forwardSVG}</View>
      </TouchableOpacity>
    </View>
  );
}

export default EditProfile;