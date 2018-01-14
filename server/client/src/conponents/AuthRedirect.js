import React, { Component } from "react";
// 组件 和 redux 进行连接
import { connect } from "react-redux";

import { checkUserAsync, test } from "../actions";

import Login from "../pages/Login";
import Room from "../pages/Room";

class AuthRedirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Mendo"
    };
  }
  componentWillMount() {
    this.props.checkUser();
  }
  render() {
    console.log("auth");
    const username = this.props.username;
    return <div>{this.props.username == undefined ? <Login /> : <Room />}</div>;
  }
}

const mapStateToprops = state => ({
  username: state.profile.username
});

const mapDispatchToProps = dispatch => {
  return {
    checkUser: () => {
      dispatch(checkUserAsync());
    }
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(AuthRedirect);
