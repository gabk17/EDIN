import scoreReducer from "./scoreReducer";
import checkAuthReducer from "./checkAuthReducer";
import recentOrderIdReducer from "./recentOrderIdReducer";
import userInfoReducer from "./userInfoReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  score: scoreReducer,
  checkAuth: checkAuthReducer,
  recentOrderId: recentOrderIdReducer,
  userInfo: userInfoReducer
});

export default rootReducer