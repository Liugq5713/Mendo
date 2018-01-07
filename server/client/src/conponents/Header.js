import React, { Component } from "react";
// 组件 和 redux 进行连接
import { connect } from "react-redux";

import { checkUserAsync, test } from "../actions";

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
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              {username}
            </a>
            <a
              href="#"
              data-activates="mobile-demo"
              className="button-collapse"
            >
              <i className="fa fa-bars" aria-hidden="true" />
            </a>
            <a
              href="#"
              data-activates="mobile-demo"
              className="button-collapse right"
            >
              <i className="fa fa-sign-out" aria-hidden="true" />
            </a>
          </div>
        </nav>
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
