import React, { Component } from "react";
// 组件 和 redux 进行连接
import { connect } from "react-redux";

import Avatar from "./Avatar";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="nav">
          <a href="#" className="menu">
            {this.props.feature == "back" || this.props.feature == "" ? (
              <i className="fa fa-angle-left" aria-hidden="true" />
            ) : (
              <i className="fa fa-bars" aria-hidden="true" />
            )}
          </a>
          <div className="avatarWrapper">
            <Avatar />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
