import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";

import Reducer from "../reducers";

// import { helloSaga } from "../actions/saga";
// const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
