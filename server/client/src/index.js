import React from "react";
import ReactDOM from "react-dom";
import App from "./conponents/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles/style.scss";
import configureStore from "./store/configureStore";
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
