import React, { Component } from "react";
// 组件 和 redux 进行连接
import { connect } from "react-redux";

import { checkUserAsync, test } from "../actions";
import avatar from "../images/avatar.jpg";

class Header extends Component {
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
    const username = this.props.username;
    return (
      <header className="header">
        <div className="nav">
          <a href="#" className="menu">
            <i className="fa fa-bars" aria-hidden="true" />
          </a>
          <a href="#" className="avatar">
            <img src={avatar} alt="" className="circle circle__style" />
          </a>
        </div>
      </header>
    );
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

export default connect(mapStateToprops, mapDispatchToProps)(Header);
