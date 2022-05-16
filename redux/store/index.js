import { createStore } from 'redux';
import rootReducer from '../reducers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'new_root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);

const Persistor = persistStore(store)

export { Persistor }
export default store;