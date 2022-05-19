import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, TouchableOpacity, Text, Dimensions, ToastAndroid } from 'react-native';
import Svg, { Path } from "react-native-svg"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { doc, updateDoc, query, getDocs, collection, where, addDoc } from 'firebase/firestore'


import app from '../../firebase'
import { db } from '../../firebase'
import styles from './styles';
import EdinLogo from "../../components/EdinLogo";
import SignUpHeader from "../../components/SignUpHeader";
import { authSuccess } from '../../redux/actions/checkAuth';
import { saveUserInfo } from '../../redux/actions/userInfo';


const SignUp = () => {

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

  const emailSVG = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={19}
      fill="none"
    >
      <Path
        fill="#EA6E6E"
        d="M10 0C7.349.003 4.807 1.004 2.932 2.785 1.057 4.566.002 6.981 0 9.5c-.104 7.58 9.299 12.215 15.75 7.772a1.175 1.175 0 0 0 .517-.769 1.129 1.129 0 0 0-.21-.89 1.226 1.226 0 0 0-.354-.32 1.292 1.292 0 0 0-.946-.153c-.16.034-.312.1-.446.19C9.517 18.67 2.386 15.157 2.5 9.5c.393-9.445 14.607-9.443 15 0v1.188c0 .314-.132.617-.366.84a1.284 1.284 0 0 1-.884.347c-.332 0-.65-.125-.884-.348a1.158 1.158 0 0 1-.366-.84V9.5c-.21-6.277-9.79-6.276-10 0 .008.92.297 1.82.832 2.587a4.96 4.96 0 0 0 2.18 1.74c.889.367 1.87.482 2.826.33a5.124 5.124 0 0 0 2.56-1.183 3.78 3.78 0 0 0 1.898 1.132c.74.184 1.52.15 2.238-.098.719-.25 1.34-.7 1.78-1.294.44-.593.68-1.3.686-2.027V9.5c-.003-2.519-1.058-4.934-2.932-6.715C15.193 1.005 12.65.003 10 0zm0 11.875c-.663 0-1.299-.25-1.768-.696A2.316 2.316 0 0 1 7.5 9.5c0-.63.263-1.234.732-1.68A2.568 2.568 0 0 1 10 7.126c.663 0 1.299.25 1.768.696a2.32 2.32 0 0 1 .732 1.679c0 .63-.264 1.234-.732 1.68a2.568 2.568 0 0 1-1.768.695z"
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


  const height = Dimensions.get("window").height;

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo)
  let [userPhoneNumber] = userInfo

  const handleSignUp = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
      const user = userCredential.user;
      console.log(`Registered in with ${user.email}, ${user.uid}`);
      const q = query(collection(db, "users"), where("id", "==", user.uid));
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          id: user.uid,
          email: user.email,
        }).then(async (docRef) => {
          const userDoc = doc(db, 'users', docRef.id)
          const newField = { firstName: firstName, lastName: lastName, phoneNumber: userPhoneNumber, score: 0 }
          await updateDoc(userDoc, newField, { merge: true })
        })
      };
      dispatch(saveUserInfo(user.uid))
      dispatch(saveUserInfo(firstName))
      dispatch(saveUserInfo(lastName))
      dispatch(saveUserInfo(email))
      dispatch(authSuccess())
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(`Failed to register: ${errorMessage} ${error.code}`)
      if (error.code === 'auth/weak-password' && Platform.OS === "android") {
        ToastAndroid.show('Password should be at least 6 characters', ToastAndroid.SHORT)
      }
      if (error.code === 'auth/email-already-in-use' && Platform.OS === "android") {
        ToastAndroid.show('Email has already been taken', ToastAndroid.SHORT)
      }
      if (error.code === 'auth/invalid-email' && Platform.OS === "android") {
        ToastAndroid.show('Invalid Email', ToastAndroid.SHORT)
      }
    })
  }

  return (
    <>
      <View style={styles.edinLogo}>
        <EdinLogo />
        <View style={styles.signUpHeader}>
          <SignUpHeader />
        </View>
        <View style={styles.inputContainer}
        >
          <View style={styles.logo}>
            {profileSVG}
          </View>
          <TextInput style={styles.input} placeholder="First Name" maxLength={32} value={firstName} onChangeText={e => setFirstName(e)} />

        </View>
        <View style={styles.inputContainer}>
          <View style={styles.logo}>
            {familySVG}
          </View>
          <TextInput style={styles.input} placeholder="Family Name" maxLength={32} value={lastName} onChangeText={e => setLastName(e)} />

        </View>
        <View style={styles.inputContainer}>
          <View style={styles.logo}>
            {emailSVG}
          </View>
          <TextInput style={styles.input} placeholder="Email Address" maxLength={32} value={email} onChangeText={e => setEmail(e)} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.logo}>
            {passSVG}
          </View>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} maxLength={32} value={password} onChangeText={e => setPassword(e)} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>


      </View>

      <StatusBar style="auto" />
    </>
  );
}

export default SignUp;