import React, { Component } from "react";
// 组件 和 redux 进行连接
import { connect } from "react-redux";

import Login from "../Login";
import Room from "../Rooms";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Mendo"
    };
  }
  render() {
    const username = this.props.username;
    console.assert(username !== undefined, "username", username, "用户未登录")
    return <div>{username == undefined ? <Login /> : <Room />}</div>;
  }
}

const mapStateToprops = state => (
  {
    username: state.auth.profile.username
  }
)

export default connect(mapStateToprops)(Auth);
