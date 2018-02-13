import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../pages/Auth/reducer"
import roomReducer from "../pages/Rooms/reducer";
import inviteReducer from "../pages/Invitation/reducer"

import { getUsername } from "../pages/Auth/action"
import { getRoomlist } from "../pages/Rooms/action";

const rootReducer = combineReducers({
  room: roomReducer,
  auth: authReducer,
  link: inviteReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  // 对个人信息进行初始化
  store.dispatch(getUsername())
  //  对房间信息进行一次初始化
  store.dispatch(getRoomlist());
  return store;
};
