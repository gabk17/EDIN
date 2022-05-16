// {
//   location: 'Roadster',
//   time: '12:49 pm',
//   details: {
//     item_1: {
//       price: 10,
//       quantity: 1,
//       title
//     },
//     item_2: {
//       price: 3,
//       quantity: 1,
//       title: 'French Fries'
//     },
//   }
// }
import React, { useState, useEffect } from "react"
import { View, TextInput, Button, LogBox, Text } from 'react-native'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import styles from '../screens/Recent'
import { db } from '../firebase'

const AddOrder = () => {
  LogBox.ignoreLogs(['Setting a timer']);
  LogBox.ignoreLogs(['AsyncStorage has been extracted']);


  const [recent, setRecent] = useState([]);
  const [docID, setDocID] = useState();
  const FetchOrder = async () => {
    const querySnapshot = await getDocs(collection(db, "recent"));
    querySnapshot.forEach((doc) => {
      setRecent(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(doc.id, " => ", doc.data());
      // console.log(doc.data());
      setDocID(doc.id)
      // const { details } = doc.data()

      // console.log(details)
      // console.log(itemDetails)

    })
  }

  const [title, setTitle] = useState('');
  const handleSubmit = async (e) => {

    await deleteDoc(doc(db, "recent", docID));

    if (title !== '') {
      await addDoc(collection(db, "recent"),
        {
          "details": [
            { "name": "French Fries", "price": 10, "quantity": 2 },
            { "name": "Steak Platter", "price": 30, "quantity": 1 },
            { "name": "Steak Platter", "price": 30, "quantity": 1 },
            { "name": "Steak Platter", "price": 30, "quantity": 1 },
            { "name": "Steak Platter", "price": 30, "quantity": 1 },
            { "name": "Steak Platter", "price": 30, "quantity": 1 },
            { "name": "Steak Platter", "price": 30, "quantity": 1 },

          ],
          "location": "Roadster Diner",
          "time": "12:49 am"
        }
      )
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="Item Title" value={title}
        onChangeText={(e) => setTitle(e)}
      />
      <Button title='Add Item' color="#E85486"
        onPress={handleSubmit}
      />

      {recent.map((item, id) => {
        {/* console.log(item.details[2].name)
        const { name } = item.details[id]
        console.log(name) */}
        return (
          <View key={item.id}>
            <View>
              <Text>{item.time}</Text>
            </View>
            {item.details.map((detail) => {
              return (
                <View key={item.details.id}>
                  <Text>{detail.name}</Text>
                </View>
              )
            })}
          </View>
        )
      })}
      <Button title='Fetch Order' color="#E85486"
        onPress={FetchOrder}
      />
    </View>
  )
}


export default AddOrder