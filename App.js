import * as React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { LogBox } from 'react-native'
import store, { Persistor } from './redux/store/index';
import RootNavigator from './navigation/RootNavigator'
import Recent from './screens/Recent'
import Roulette from './screens/Roulette'
import SetUpStackNavigator from './navigation/SetUpStackNavigator'
import TabsNavigation from "./navigation/TabsNavigation";
export default function App() {

  LogBox.ignoreLogs(['AsyncStorage has been extracted', 'Setting a timer']);
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        {/* <Roulette /> */}
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
