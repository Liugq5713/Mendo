import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import "eruda/eruda.min.js";

import App from "./pages";
import configureStore from "./store/configureStore";

if (process.env.NODE_ENV !== "production") {
  console.log("Happy Coding!");
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
