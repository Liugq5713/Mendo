import React, { Component } from "react";
import ReactDOM from "react-dom";
//在app.js 里面作为组织组件的入口，在这里处理路由
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}
