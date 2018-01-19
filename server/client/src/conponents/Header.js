import React, { Component } from "react";
import { Link } from "react-router-dom";

import Avatar from "./Avatar";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="nav">
          <div className="menu">
            {this.props.feature == "back" || this.props.feature == "" ? (
              // 后退按钮
              <Link to="/">
                <i className="fa fa-angle-left" aria-hidden="true" />
              </Link>
            ) : (
                // 菜单按钮
                <i className="fa fa-bars" aria-hidden="true" />
              )}
          </div>
          <div className="avatarWrapper">
            <Avatar />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
