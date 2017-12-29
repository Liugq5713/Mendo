import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { checkuser } from "../actions/saga";
import TEST from "../reducers";
export default () => {
  const store = createStore(
    TEST,
    applyMiddleware(createSagaMiddleware(checkUserAsync)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
