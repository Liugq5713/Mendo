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

import Auth from "./Auth";
import Home from "./Rooms";
import Login from "./Login";
import Signup from "./Signup";
import Talk from "./Talk";
import Transfer from "./Transfer";
import About from "./About";
// TODO的内容
import Invitation from "./Invitation"
export default class App extends Component {
  render() {
    return (
      <Router>
        {/* className="container"    */}
        <div id="componentWrapper">
          {/*AuthRedirect用于控制未登录状态下显示的界面  */}
          <Route path="/" exact strict component={Auth} />
          {/* <Route path="/" exact strict component={Home} /> */}
          {/* <Route path="/" exact strict component={Invitation} /> */}
          <Route path="/home" exact strict component={Home} />
          <Route exact path="/invite" component={Invitation} />
          <Route exact path="/transfer" component={Transfer} />
          <Route exact path="/about" component={About} />
          <Route path="/signup" component={Signup} />
          <Route path="/room/:roomId" component={Talk} />
        </div>
      </Router>
    );
  }
}
