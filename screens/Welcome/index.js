import React, { useState, useRef } from "react"
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { TextInput, View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import Svg, { Path } from "react-native-svg"

import { useDispatch, useSelector } from 'react-redux';

import firebaseApp from '../../firebase'
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

import { db } from '../../firebase'
import Header from '../../components/Header'
import BorderLineHeader from '../../components/BorderLineHeader'
import BorderLineFooter from '../../components/BorderLineFooter'
import GoogleIcon from '../../components/GoogleIcon'
import MoreIcon from '../../components/MoreIcon'
import { saveUserInfo } from '../../redux/actions/userInfo';


import styles from './styles';

try {
  firebaseApp
  console.log('Running App')
} catch (err) {
  console.log('App is already running')
}

const app = getApp();
const auth = getAuth();

const Welcome = ({ navigation }) => {

  const dispatch = useDispatch();
  const info = useSelector(state => state.userInfo)
  // console.log(info)

  const title = (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={266}
      height={143}
      fill="none"
    >
      <Path
        fill="#393B40"
        d="M99.755 7.332 93.931 26h-2.496l-4.55-13.845a6.53 6.53 0 0 1-.273-1.001c-.095.399-.186.732-.273 1.001L81.737 26h-2.483L73.43 7.332h2.314c.243 0 .446.06.611.182a.789.789 0 0 1 .325.468l3.68 12.493c.068.243.13.507.181.793.06.286.121.585.182.897.06-.312.121-.611.182-.897a8 8 0 0 1 .234-.793l4.212-12.493a.912.912 0 0 1 .325-.455.99.99 0 0 1 .611-.195h.793c.243 0 .442.06.598.182.156.121.269.277.338.468l4.2 12.493c.155.477.294 1.018.415 1.625.104-.598.217-1.14.338-1.625l3.692-12.493a.818.818 0 0 1 .325-.455.99.99 0 0 1 .611-.195h2.158zm9.372 10.595c0-.503-.074-.966-.221-1.391a3.09 3.09 0 0 0-.624-1.105 2.878 2.878 0 0 0-1.014-.728c-.399-.173-.858-.26-1.378-.26-1.066 0-1.907.308-2.522.923-.607.615-.993 1.469-1.157 2.561h6.916zm2.093 6.188a5.15 5.15 0 0 1-1.079.949c-.408.26-.841.472-1.3.637-.46.165-.936.286-1.43.364a9.095 9.095 0 0 1-1.443.117 6.94 6.94 0 0 1-2.535-.455 5.808 5.808 0 0 1-2.015-1.352c-.564-.598-1.006-1.335-1.326-2.21-.312-.884-.468-1.898-.468-3.042 0-.919.143-1.772.429-2.561a6.218 6.218 0 0 1 1.222-2.08 5.722 5.722 0 0 1 1.963-1.391c.771-.338 1.638-.507 2.6-.507a5.96 5.96 0 0 1 2.223.403c.684.26 1.274.641 1.768 1.144.494.503.879 1.122 1.157 1.859.286.737.429 1.577.429 2.522 0 .39-.044.654-.13.793-.087.13-.247.195-.481.195h-8.658c.026.789.138 1.478.338 2.067.199.58.472 1.066.819 1.456.355.39.775.68 1.261.871.485.19 1.027.286 1.625.286.563 0 1.048-.065 1.456-.195.416-.13.771-.269 1.066-.416.303-.156.554-.299.754-.429.208-.13.39-.195.546-.195.208 0 .368.078.481.234l.728.936zm5.519-17.303V26h-2.548V6.812h2.548zm12.877 8.45a1.492 1.492 0 0 1-.234.234c-.069.052-.173.078-.312.078a.805.805 0 0 1-.442-.156 3.91 3.91 0 0 0-.572-.351 4.213 4.213 0 0 0-.832-.351c-.321-.113-.719-.169-1.196-.169-.624 0-1.174.113-1.651.338a3.234 3.234 0 0 0-1.196.962c-.312.416-.55.923-.715 1.521-.165.598-.247 1.27-.247 2.015 0 .771.087 1.46.26 2.067.173.598.42 1.105.741 1.521.321.407.711.72 1.17.936.459.208.971.312 1.534.312.546 0 .997-.065 1.352-.195.355-.139.65-.286.884-.442.234-.156.429-.299.585-.429.156-.139.316-.208.481-.208.208 0 .368.078.481.234l.728.936a4.828 4.828 0 0 1-1.027.949c-.373.26-.771.472-1.196.637a6.777 6.777 0 0 1-1.339.364 8.366 8.366 0 0 1-1.404.117 5.894 5.894 0 0 1-2.314-.455 5.305 5.305 0 0 1-1.859-1.326c-.52-.58-.932-1.291-1.235-2.132-.303-.85-.455-1.811-.455-2.886 0-.98.134-1.885.403-2.717.277-.832.68-1.547 1.209-2.145a5.542 5.542 0 0 1 1.976-1.417c.78-.347 1.673-.52 2.678-.52.945 0 1.777.152 2.496.455a6.096 6.096 0 0 1 1.924 1.287l-.676.936zm8.586-2.678c.971 0 1.846.16 2.626.481a5.313 5.313 0 0 1 2.002 1.365c.555.59.979 1.304 1.274 2.145.295.832.442 1.768.442 2.808 0 1.04-.147 1.98-.442 2.821-.295.84-.719 1.556-1.274 2.145a5.52 5.52 0 0 1-2.002 1.365c-.78.312-1.655.468-2.626.468-.979 0-1.863-.156-2.652-.468a5.678 5.678 0 0 1-2.002-1.365c-.555-.59-.984-1.304-1.287-2.145-.295-.84-.442-1.781-.442-2.821 0-1.04.147-1.976.442-2.808.303-.84.732-1.556 1.287-2.145a5.458 5.458 0 0 1 2.002-1.365c.789-.32 1.673-.481 2.652-.481zm0 11.622c1.248 0 2.18-.42 2.795-1.261.615-.84.923-2.024.923-3.549s-.308-2.708-.923-3.549c-.615-.85-1.547-1.274-2.795-1.274-1.265 0-2.21.425-2.834 1.274-.615.84-.923 2.024-.923 3.549s.308 2.708.923 3.549c.624.84 1.569 1.261 2.834 1.261zM147.376 26V12.792h1.521c.355 0 .576.169.663.507l.182 1.261a6.656 6.656 0 0 1 1.612-1.417c.598-.373 1.295-.559 2.093-.559.875 0 1.586.243 2.132.728.546.477.944 1.127 1.196 1.95a4.087 4.087 0 0 1 1.755-2.041 4.516 4.516 0 0 1 1.183-.481 5.383 5.383 0 0 1 1.287-.156c.702 0 1.326.113 1.872.338a3.642 3.642 0 0 1 1.404.962c.381.425.671.949.871 1.573.199.624.299 1.335.299 2.132V26h-2.548v-8.411c0-.988-.217-1.733-.65-2.236-.425-.503-1.049-.754-1.872-.754-.364 0-.711.065-1.04.195-.33.121-.62.308-.871.559a2.81 2.81 0 0 0-.585.936c-.139.373-.208.806-.208 1.3V26h-2.548v-8.411c0-1.023-.204-1.777-.611-2.262-.408-.485-1.006-.728-1.794-.728-.546 0-1.053.143-1.521.429a4.919 4.919 0 0 0-1.287 1.17V26h-2.535zm30.229-8.073a4.2 4.2 0 0 0-.221-1.391 3.06 3.06 0 0 0-.624-1.105 2.86 2.86 0 0 0-1.014-.728c-.398-.173-.858-.26-1.378-.26-1.066 0-1.906.308-2.522.923-.606.615-.992 1.469-1.157 2.561h6.916zm2.093 6.188c-.312.364-.671.68-1.079.949-.407.26-.84.472-1.3.637a7.85 7.85 0 0 1-1.43.364 9.076 9.076 0 0 1-1.443.117 6.94 6.94 0 0 1-2.535-.455 5.817 5.817 0 0 1-2.015-1.352c-.563-.598-1.005-1.335-1.326-2.21-.312-.884-.468-1.898-.468-3.042 0-.919.143-1.772.429-2.561a6.235 6.235 0 0 1 1.222-2.08 5.741 5.741 0 0 1 1.963-1.391c.772-.338 1.638-.507 2.6-.507a5.96 5.96 0 0 1 2.223.403 4.86 4.86 0 0 1 1.768 1.144c.494.503.88 1.122 1.157 1.859.286.737.429 1.577.429 2.522 0 .39-.043.654-.13.793-.086.13-.247.195-.481.195h-8.658c.026.789.139 1.478.338 2.067.2.58.473 1.066.819 1.456.356.39.776.68 1.261.871.486.19 1.027.286 1.625.286.564 0 1.049-.065 1.456-.195.416-.13.772-.269 1.066-.416a8.49 8.49 0 0 0 .754-.429c.208-.13.39-.195.546-.195.208 0 .369.078.481.234l.728.936zm5.897-16.783v7.436a25.101 25.101 0 0 1-.104 2.275c-.026.373-.061.758-.104 1.157s-.091.819-.143 1.261h-1.716c-.052-.442-.1-.862-.143-1.261a84.336 84.336 0 0 1-.117-1.157 50.378 50.378 0 0 1-.065-1.131 25.101 25.101 0 0 1-.026-1.144V7.332h2.418zm-2.964 17.147a1.7 1.7 0 0 1 .494-1.209 1.68 1.68 0 0 1 .546-.364c.208-.095.433-.143.676-.143.234 0 .455.048.663.143a1.675 1.675 0 0 1 .91.91c.095.208.143.429.143.663 0 .243-.048.468-.143.676a1.68 1.68 0 0 1-1.573 1.04c-.243 0-.468-.043-.676-.13a1.675 1.675 0 0 1-.91-.91 1.734 1.734 0 0 1-.13-.676zM76.943 83.778V87H62.147V61.152h3.834v22.626h10.962zm13.93-7.956a5.84 5.84 0 0 0-.306-1.926 4.264 4.264 0 0 0-.864-1.53 3.968 3.968 0 0 0-1.404-1.008c-.552-.24-1.188-.36-1.908-.36-1.476 0-2.64.426-3.492 1.278-.84.852-1.374 2.034-1.602 3.546h9.576zm2.898 8.568c-.432.504-.93.942-1.494 1.314a8.944 8.944 0 0 1-1.8.882c-.636.228-1.296.396-1.98.504-.672.108-1.338.162-1.998.162-1.26 0-2.43-.21-3.51-.63a8.05 8.05 0 0 1-2.79-1.872c-.78-.828-1.392-1.848-1.836-3.06-.432-1.224-.648-2.628-.648-4.212 0-1.272.198-2.454.594-3.546a8.617 8.617 0 0 1 1.692-2.88 7.936 7.936 0 0 1 2.718-1.926c1.068-.468 2.268-.702 3.6-.702 1.116 0 2.142.186 3.078.558a6.74 6.74 0 0 1 2.448 1.584c.684.696 1.218 1.554 1.602 2.574.396 1.02.594 2.184.594 3.492 0 .54-.06.906-.18 1.098-.12.18-.342.27-.666.27H81.207c.036 1.092.192 2.046.468 2.862.276.804.654 1.476 1.134 2.016.492.54 1.074.942 1.746 1.206.672.264 1.422.396 2.25.396.78 0 1.452-.09 2.016-.27a9.996 9.996 0 0 0 1.476-.576c.42-.216.768-.414 1.044-.594.288-.18.54-.27.756-.27.288 0 .51.108.666.324l1.008 1.296zm9.626 2.898c-1.476 0-2.616-.414-3.42-1.242-.792-.828-1.188-2.01-1.188-3.546V71.556h-2.124a.789.789 0 0 1-.522-.18c-.132-.132-.198-.324-.198-.576v-1.422l2.97-.414.792-5.454a.826.826 0 0 1 .27-.468.815.815 0 0 1 .54-.18h1.782V69h5.184v2.556h-5.184v10.71c0 .72.174 1.26.522 1.62.36.348.816.522 1.368.522.324 0 .6-.042.828-.126.24-.084.444-.174.612-.27.168-.108.312-.204.432-.288a.585.585 0 0 1 .324-.126c.12 0 .21.03.27.09a.78.78 0 0 1 .216.252l1.044 1.692a6.065 6.065 0 0 1-2.052 1.224 7.16 7.16 0 0 1-2.466.432zm9.713-27.864c.528.876.882 1.8 1.062 2.772.192.96.216 1.914.072 2.862a8.23 8.23 0 0 1-.936 2.718 8.538 8.538 0 0 1-1.908 2.322l-1.08-.684c-.204-.132-.294-.288-.27-.468a.745.745 0 0 1 .198-.45c.3-.36.558-.804.774-1.332a6.33 6.33 0 0 0 .45-1.746 6.777 6.777 0 0 0-.072-1.962 5.911 5.911 0 0 0-.756-1.98c-.168-.276-.216-.522-.144-.738.072-.216.228-.372.468-.468l2.142-.846zm15.314 12.438c-.096.156-.198.27-.306.342a.846.846 0 0 1-.414.09c-.192 0-.408-.066-.648-.198a10.77 10.77 0 0 0-.846-.432 7.79 7.79 0 0 0-1.152-.432c-.444-.132-.972-.198-1.584-.198-.504 0-.966.066-1.386.198-.408.12-.756.294-1.044.522-.288.216-.51.48-.666.792-.156.3-.234.624-.234.972 0 .456.132.834.396 1.134.276.3.63.558 1.062.774.444.216.942.414 1.494.594.564.168 1.134.348 1.71.54.588.192 1.158.414 1.71.666.564.24 1.062.546 1.494.918.444.36.798.798 1.062 1.314.276.516.414 1.146.414 1.89 0 .852-.156 1.644-.468 2.376a5.06 5.06 0 0 1-1.35 1.872c-.588.528-1.32.942-2.196 1.242-.876.3-1.878.45-3.006.45-1.26 0-2.424-.21-3.492-.63-1.068-.42-1.962-.954-2.682-1.602l.828-1.35a.996.996 0 0 1 .36-.378c.144-.096.336-.144.576-.144.228 0 .462.084.702.252.24.168.528.354.864.558a7.43 7.43 0 0 0 1.224.54c.48.156 1.08.234 1.8.234.6 0 1.122-.072 1.566-.216.444-.156.81-.36 1.098-.612.3-.264.522-.564.666-.9.144-.336.216-.69.216-1.062 0-.48-.138-.876-.414-1.188-.264-.324-.618-.6-1.062-.828a8.245 8.245 0 0 0-1.494-.594 69.364 69.364 0 0 1-1.728-.54 17.704 17.704 0 0 1-1.728-.666 6.097 6.097 0 0 1-1.512-.954 4.617 4.617 0 0 1-1.062-1.404c-.264-.552-.396-1.224-.396-2.016 0-.708.144-1.386.432-2.034a5.2 5.2 0 0 1 1.278-1.71c.564-.492 1.254-.882 2.07-1.17.828-.3 1.77-.45 2.826-.45 1.212 0 2.304.192 3.276.576.984.384 1.824.912 2.52 1.584l-.774 1.278zm35.784 2.556v10.08a14.866 14.866 0 0 1-4.176 2.106c-1.476.456-3.084.684-4.824.684-2.088 0-3.978-.324-5.67-.972-1.68-.648-3.114-1.554-4.302-2.718-1.188-1.164-2.106-2.556-2.754-4.176-.636-1.62-.954-3.402-.954-5.346 0-1.956.306-3.744.918-5.364.624-1.632 1.512-3.024 2.664-4.176 1.152-1.164 2.544-2.064 4.176-2.7 1.644-.648 3.486-.972 5.526-.972 1.032 0 1.986.078 2.862.234.888.156 1.71.378 2.466.666a11.31 11.31 0 0 1 2.088 1.044c.648.396 1.248.846 1.8 1.35l-1.098 1.728c-.168.276-.39.45-.666.522-.276.072-.576.006-.9-.198-.312-.18-.66-.39-1.044-.63a7.447 7.447 0 0 0-1.35-.666 11.087 11.087 0 0 0-1.818-.522c-.696-.144-1.518-.216-2.466-.216-1.416 0-2.694.234-3.834.702a7.966 7.966 0 0 0-2.916 1.98c-.804.864-1.422 1.908-1.854 3.132-.432 1.212-.648 2.574-.648 4.086 0 1.584.228 3.006.684 4.266.456 1.248 1.098 2.31 1.926 3.186.84.864 1.854 1.524 3.042 1.98 1.2.456 2.538.684 4.014.684.576 0 1.11-.03 1.602-.09.504-.072.984-.168 1.44-.288a9.41 9.41 0 0 0 1.314-.45c.432-.18.858-.378 1.278-.594v-5.418h-3.816a.842.842 0 0 1-.594-.216.733.733 0 0 1-.216-.54v-2.178h8.1zm16.349 1.404a5.84 5.84 0 0 0-.306-1.926 4.264 4.264 0 0 0-.864-1.53 3.968 3.968 0 0 0-1.404-1.008c-.552-.24-1.188-.36-1.908-.36-1.476 0-2.64.426-3.492 1.278-.84.852-1.374 2.034-1.602 3.546h9.576zm2.898 8.568c-.432.504-.93.942-1.494 1.314a8.944 8.944 0 0 1-1.8.882c-.636.228-1.296.396-1.98.504-.672.108-1.338.162-1.998.162-1.26 0-2.43-.21-3.51-.63a8.05 8.05 0 0 1-2.79-1.872c-.78-.828-1.392-1.848-1.836-3.06-.432-1.224-.648-2.628-.648-4.212 0-1.272.198-2.454.594-3.546a8.617 8.617 0 0 1 1.692-2.88 7.936 7.936 0 0 1 2.718-1.926c1.068-.468 2.268-.702 3.6-.702 1.116 0 2.142.186 3.078.558a6.74 6.74 0 0 1 2.448 1.584c.684.696 1.218 1.554 1.602 2.574.396 1.02.594 2.184.594 3.492 0 .54-.06.906-.18 1.098-.12.18-.342.27-.666.27h-11.988c.036 1.092.192 2.046.468 2.862.276.804.654 1.476 1.134 2.016.492.54 1.074.942 1.746 1.206.672.264 1.422.396 2.25.396.78 0 1.452-.09 2.016-.27a9.996 9.996 0 0 0 1.476-.576c.42-.216.768-.414 1.044-.594.288-.18.54-.27.756-.27.288 0 .51.108.666.324l1.008 1.296zm9.626 2.898c-1.476 0-2.616-.414-3.42-1.242-.792-.828-1.188-2.01-1.188-3.546V71.556h-2.124a.789.789 0 0 1-.522-.18c-.132-.132-.198-.324-.198-.576v-1.422l2.97-.414.792-5.454a.826.826 0 0 1 .27-.468.815.815 0 0 1 .54-.18h1.782V69h5.184v2.556h-5.184v10.71c0 .72.174 1.26.522 1.62.36.348.816.522 1.368.522.324 0 .6-.042.828-.126.24-.084.444-.174.612-.27.168-.108.312-.204.432-.288a.585.585 0 0 1 .324-.126c.12 0 .21.03.27.09a.78.78 0 0 1 .216.252l1.044 1.692a6.065 6.065 0 0 1-2.052 1.224 7.16 7.16 0 0 1-2.466.432zM54.455 119.776V130h-3.816v-10.224l-9.468-15.624h3.366c.336 0 .606.084.81.252.204.156.372.366.504.63l5.616 9.666c.228.444.432.864.612 1.26.192.396.36.786.504 1.17.132-.384.282-.774.45-1.17.18-.396.384-.816.612-1.26l5.598-9.666c.12-.216.282-.414.486-.594.216-.192.486-.288.81-.288h3.384l-9.468 15.624zm15.715-8.352c1.344 0 2.556.222 3.636.666a7.36 7.36 0 0 1 2.772 1.89c.768.816 1.356 1.806 1.764 2.97.408 1.152.612 2.448.612 3.888s-.204 2.742-.612 3.906c-.408 1.164-.996 2.154-1.764 2.97-.756.816-1.68 1.446-2.772 1.89-1.08.432-2.292.648-3.636.648-1.356 0-2.58-.216-3.672-.648a7.856 7.856 0 0 1-2.772-1.89c-.768-.816-1.362-1.806-1.782-2.97-.408-1.164-.612-2.466-.612-3.906s.204-2.736.612-3.888c.42-1.164 1.014-2.154 1.782-2.97a7.554 7.554 0 0 1 2.772-1.89c1.092-.444 2.316-.666 3.672-.666zm0 16.092c1.728 0 3.018-.582 3.87-1.746.852-1.164 1.278-2.802 1.278-4.914 0-2.112-.426-3.75-1.278-4.914-.852-1.176-2.142-1.764-3.87-1.764-1.752 0-3.06.588-3.924 1.764-.852 1.164-1.278 2.802-1.278 4.914 0 2.112.426 3.75 1.278 4.914.864 1.164 2.172 1.746 3.924 1.746zm27.912-15.804V130h-2.106c-.48 0-.792-.234-.936-.702l-.252-1.836c-.396.42-.81.804-1.242 1.152a8.064 8.064 0 0 1-1.386.9 7.581 7.581 0 0 1-1.566.558 7.04 7.04 0 0 1-1.782.216c-1.008 0-1.896-.168-2.664-.504a5.337 5.337 0 0 1-1.908-1.404c-.516-.612-.906-1.344-1.17-2.196-.264-.852-.396-1.794-.396-2.826v-11.646h3.528v11.646c0 1.308.3 2.328.9 3.06.6.72 1.518 1.08 2.754 1.08.9 0 1.74-.21 2.52-.63.78-.432 1.512-1.02 2.196-1.764v-13.392h3.51zm28.099-3.348c-.12.204-.246.354-.378.45a.835.835 0 0 1-.504.144c-.216 0-.462-.096-.738-.288a10.784 10.784 0 0 0-1.044-.666 7.06 7.06 0 0 0-1.476-.666c-.576-.204-1.266-.306-2.07-.306-.756 0-1.422.102-1.998.306a4.011 4.011 0 0 0-1.422.81 3.376 3.376 0 0 0-.882 1.206 3.811 3.811 0 0 0-.288 1.494c0 .696.174 1.272.522 1.728.36.456.828.846 1.404 1.17.576.324 1.23.606 1.962.846s1.482.492 2.25.756a21.33 21.33 0 0 1 2.25.882 7.788 7.788 0 0 1 1.962 1.278 5.606 5.606 0 0 1 1.386 1.872c.36.732.54 1.632.54 2.7 0 1.14-.198 2.208-.594 3.204a7.426 7.426 0 0 1-1.692 2.61c-.744.744-1.662 1.332-2.754 1.764-1.08.42-2.31.63-3.69.63-.828 0-1.632-.084-2.412-.252a11.857 11.857 0 0 1-2.214-.666c-.696-.3-1.35-.654-1.962-1.062-.6-.42-1.14-.888-1.62-1.404l1.098-1.836c.108-.144.234-.264.378-.36a.976.976 0 0 1 .522-.144c.252 0 .54.132.864.396.336.264.744.558 1.224.882.492.312 1.074.6 1.746.864.684.264 1.512.396 2.484.396.792 0 1.5-.102 2.124-.306.624-.216 1.146-.516 1.566-.9.432-.396.762-.87.99-1.422a4.766 4.766 0 0 0 .342-1.836c0-.756-.174-1.374-.522-1.854a4.255 4.255 0 0 0-1.386-1.206c-.576-.324-1.23-.6-1.962-.828l-2.25-.702a24.183 24.183 0 0 1-2.25-.864 7.417 7.417 0 0 1-1.962-1.26 5.86 5.86 0 0 1-1.386-1.962c-.348-.792-.522-1.764-.522-2.916a6.908 6.908 0 0 1 2.106-4.968c.696-.672 1.548-1.206 2.556-1.602 1.008-.408 2.16-.612 3.456-.612 1.452 0 2.784.234 3.996.702a9.158 9.158 0 0 1 3.186 1.98l-.936 1.818zm10.404 21.924c-1.476 0-2.616-.414-3.42-1.242-.792-.828-1.188-2.01-1.188-3.546v-10.944h-2.124a.789.789 0 0 1-.522-.18c-.132-.132-.198-.324-.198-.576v-1.422l2.97-.414.792-5.454a.826.826 0 0 1 .27-.468.815.815 0 0 1 .54-.18h1.782V112h5.184v2.556h-5.184v10.71c0 .72.174 1.26.522 1.62.36.348.816.522 1.368.522.324 0 .6-.042.828-.126.24-.084.444-.174.612-.27.168-.108.312-.204.432-.288a.585.585 0 0 1 .324-.126c.12 0 .21.03.27.09a.78.78 0 0 1 .216.252l1.044 1.692a6.065 6.065 0 0 1-2.052 1.224 7.16 7.16 0 0 1-2.466.432zm17.147-8.406c-1.428.048-2.64.162-3.636.342-.996.168-1.806.396-2.43.684-.624.288-1.074.63-1.35 1.026a2.167 2.167 0 0 0-.414 1.296c0 .456.072.852.216 1.188.156.324.36.594.611.81.265.204.571.354.919.45.348.096.726.144 1.134.144a6.248 6.248 0 0 0 2.754-.612c.396-.204.774-.45 1.134-.738.36-.288.714-.618 1.062-.99v-3.6zm-10.296-7.614c1.02-.972 2.124-1.698 3.312-2.178 1.2-.48 2.514-.72 3.941-.72 1.045 0 1.969.174 2.773.522.804.336 1.482.81 2.034 1.422a5.984 5.984 0 0 1 1.242 2.196c.288.852.432 1.794.432 2.826V130h-1.566c-.348 0-.612-.054-.792-.162-.18-.12-.324-.336-.432-.648l-.378-1.602c-.468.432-.93.816-1.386 1.152a9.63 9.63 0 0 1-1.44.846 7.433 7.433 0 0 1-1.584.522c-.564.12-1.188.18-1.872.18-.72 0-1.398-.096-2.034-.288a4.67 4.67 0 0 1-1.638-.918 4.392 4.392 0 0 1-1.116-1.53c-.264-.612-.396-1.326-.396-2.142 0-.72.192-1.41.576-2.07.396-.672 1.032-1.272 1.908-1.8.888-.528 2.04-.96 3.456-1.296 1.428-.336 3.18-.528 5.256-.576v-1.332c0-1.38-.294-2.412-.882-3.096-.588-.684-1.452-1.026-2.592-1.026-.768 0-1.416.096-1.944.288a7.446 7.446 0 0 0-1.35.648 31.07 31.07 0 0 0-.99.63 1.491 1.491 0 0 1-.864.288c-.24 0-.45-.066-.63-.198a1.71 1.71 0 0 1-.414-.468l-.63-1.134zm21.744.954c.588-1.2 1.296-2.142 2.124-2.826.828-.684 1.824-1.026 2.988-1.026.396 0 .768.048 1.116.144.36.084.672.216.936.396l-.234 2.646c-.084.324-.282.486-.594.486-.168 0-.42-.03-.756-.09a5.149 5.149 0 0 0-1.08-.108c-.564 0-1.062.084-1.494.252a3.397 3.397 0 0 0-1.17.72 4.793 4.793 0 0 0-.9 1.17c-.264.456-.51.978-.738 1.566V130h-3.51v-18.288h2.016c.384 0 .642.072.774.216.144.132.246.372.306.72l.216 2.574zm15.596 15.066c-1.476 0-2.616-.414-3.42-1.242-.792-.828-1.188-2.01-1.188-3.546v-10.944h-2.124a.789.789 0 0 1-.522-.18c-.132-.132-.198-.324-.198-.576v-1.422l2.97-.414.792-5.454a.826.826 0 0 1 .27-.468.815.815 0 0 1 .54-.18h1.782V112h5.184v2.556h-5.184v10.71c0 .72.174 1.26.522 1.62.36.348.816.522 1.368.522.324 0 .6-.042.828-.126.24-.084.444-.174.612-.27.168-.108.312-.204.432-.288a.585.585 0 0 1 .324-.126c.12 0 .21.03.27.09a.78.78 0 0 1 .216.252l1.044 1.692a6.065 6.065 0 0 1-2.052 1.224 7.16 7.16 0 0 1-2.466.432zm19.327-11.466a5.84 5.84 0 0 0-.306-1.926 4.264 4.264 0 0 0-.864-1.53 3.968 3.968 0 0 0-1.404-1.008c-.552-.24-1.188-.36-1.908-.36-1.476 0-2.64.426-3.492 1.278-.84.852-1.374 2.034-1.602 3.546h9.576zm2.898 8.568c-.432.504-.93.942-1.494 1.314a8.944 8.944 0 0 1-1.8.882c-.636.228-1.296.396-1.98.504-.672.108-1.338.162-1.998.162-1.26 0-2.43-.21-3.51-.63a8.05 8.05 0 0 1-2.79-1.872c-.78-.828-1.392-1.848-1.836-3.06-.432-1.224-.648-2.628-.648-4.212 0-1.272.198-2.454.594-3.546a8.617 8.617 0 0 1 1.692-2.88 7.936 7.936 0 0 1 2.718-1.926c1.068-.468 2.268-.702 3.6-.702 1.116 0 2.142.186 3.078.558a6.74 6.74 0 0 1 2.448 1.584c.684.696 1.218 1.554 1.602 2.574.396 1.02.594 2.184.594 3.492 0 .54-.06.906-.18 1.098-.12.18-.342.27-.666.27h-11.988c.036 1.092.192 2.046.468 2.862.276.804.654 1.476 1.134 2.016.492.54 1.074.942 1.746 1.206.672.264 1.422.396 2.25.396.78 0 1.452-.09 2.016-.27a9.996 9.996 0 0 0 1.476-.576c.42-.216.768-.414 1.044-.594.288-.18.54-.27.756-.27.288 0 .51.108.666.324l1.008 1.296zm15.833-11.25c-.576-.756-1.2-1.284-1.872-1.584-.66-.3-1.404-.45-2.232-.45-1.608 0-2.856.582-3.744 1.746-.876 1.152-1.314 2.838-1.314 5.058 0 1.164.096 2.16.288 2.988.204.816.492 1.488.864 2.016.384.516.852.9 1.404 1.152.552.24 1.176.36 1.872.36 1.02 0 1.902-.228 2.646-.684.744-.456 1.44-1.098 2.088-1.926v-8.676zm3.528-12.708V130h-2.124c-.492 0-.798-.234-.918-.702l-.306-2.106a9.785 9.785 0 0 1-2.664 2.232c-.984.552-2.124.828-3.42.828-1.044 0-1.992-.204-2.844-.612a6.026 6.026 0 0 1-2.16-1.782c-.6-.792-1.062-1.77-1.386-2.934-.324-1.164-.486-2.502-.486-4.014 0-1.356.18-2.616.54-3.78.36-1.164.882-2.172 1.566-3.024a7.29 7.29 0 0 1 2.484-1.998c.972-.492 2.07-.738 3.294-.738 1.104 0 2.04.18 2.808.54.78.36 1.476.87 2.088 1.53v-10.008h3.528z"
      />
    </Svg>
  )

  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verificationId, setVerificationId] = useState();
  const attemptInvisibleVerification = true;

  const handlePhoneSignIn = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        `+961 ${phoneNumber}`,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);

      Platform.OS === 'android' && ToastAndroid.show('OTP has been sent to your phone', ToastAndroid.SHORT)

      dispatch(saveUserInfo(phoneNumber));

      navigation.navigate('SMSVerification', { verificationId })
    } catch (err) {
      { Platform.OS === 'android' && ToastAndroid.show(`Error: ${err.message}`, ToastAndroid.SHORT) }
    }
  }

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("id", "==", user.uid));
      const docs = await getDocs(q);
      console.log(user.displayName)
      // if (docs.docs.length === 0) {
      //   await addDoc(collection(db, "users"), {
      //     id: user.uid,
      //     email: user.email,
      //     name: user.displayName,
      //     authProvider: "google",
      //   });
      // }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        attemptInvisibleVerification={true}
      />
      {Platform.OS === "android" ?
        <View style={styles.androidHeader}>
          <Header />
        </View> :
        <View style={styles.iosHeader}>
          {title}
        </View>}

      <View style={Platform.OS === "android" ? styles.androidLoginHeader : styles.iosLoginHeader}>
        <BorderLineHeader />
        <View style={styles.inputContainer}>
          <View style={styles.extension}>
            <Text style={styles.extensionText}>+961</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={e => setPhoneNumber(e)} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            disabled={!phoneNumber}
            onPress={() => handlePhoneSignIn()}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.loginFooter}>
        <BorderLineFooter />
        <View style={styles.orButtonsContainer}>
          <TouchableOpacity style={styles.googleIcon}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <MoreIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.recaptcha} />
        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
      </View>
      <ExpoStatusBar style="auto" />
    </View>
  );
}

export default Welcome;