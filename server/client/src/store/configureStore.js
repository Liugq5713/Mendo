import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
import roomReducer from "../pages/Room/reducer"

import { getRoomlist } from "../pages/Room/action"

const rootReducer = combineReducers({ room: roomReducer, reducer: reducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  //  对房间信息进行一次初始化
  store.dispatch(getRoomlist())
  return store;
};
