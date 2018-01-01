import React, { Component } from "react";
import ReactDOM from "react-dom";

// 组件 和 redux 进行连接
import { connect } from "react-redux";

//在app.js 里面作为组织组件的入口，在这里处理路由
import { BrowserRouter, Route } from "react-router-dom";

import { checkUser, test } from "../actions";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.test();
  }
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

const mapDispatchToProps = dispatch => ({
  test: () => {
    dispatch(test());
  }
});

export default connect(null, mapDispatchToProps)(App);
