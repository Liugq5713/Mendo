import "jquery/dist/jquery.min.js";
import "materialize-css/dist/js/materialize.min.js";

import "materialize-css/dist/css/materialize.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/style.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";

//在app.js 里面作为组织组件的入口，在这里处理路由
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Home from "./Talk";
import Login from "./Login";
import Signup from "./Signup";
import Test from "../conponents/Test";

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* className="container"    */}
        <div id="componentWrapper">
          {/* <PrivateRoute path="/protected" component={Protected} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/test" component={Test} />
        </div>
      </Router>
    );
  }
}
