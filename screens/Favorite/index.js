import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';
import { db } from '../../firebase'

const Favorite = () => {
  const [favorite, setFavorite] = useState('');

  return (
    <View style={styles.container}>
      {favorite === '' ?
        <>
          <Image
            style={styles.noFavorites}
            source={require('../../assets/NoFavorites.png')}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={favorite}
              onValueChange={(itemValue, itemIndex) =>
                setFavorite(itemValue)
              }>
              <Picker.Item label="Select Favorite" value="" enabled={false} color="#E8546D" />
              <Picker.Item label="Roadster Diner" value="Roadster" color="#393B40" />
              <Picker.Item label="Ahwak" value="Ahwak" color="#393B40" />
              <Picker.Item label="Chilli's" value="Chilli" color="#393B40" />
              <Picker.Item label="Dip n Dip" value="Dip" color="#393B40" />
            </Picker>
          </View>
        </>
        :
        null}

      <StatusBar style="auto" />
    </View>
  );
}

export default Favorite;