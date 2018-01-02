import React, { Component } from "react";
//登录界面需要有去注册界面的路由
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="row">
        <form method="POST" action="/api/signup" className="col s10 offset-s1">
          <div className="row">
            <div className="input-field">
              <input id="email" name="email" type="text" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
              />
              <label htmlFor="passport">passport</label>
            </div>
          </div>
          <div className="row">
            <button
              type="submit"
              className="btn waves-effect waves-light col s12"
            >
              <i class="fa fa-sign-in col s2" aria-hidden="true" />
              登 录
            </button>
          </div>
          <div className="row">
            <a className="waves-effect waves-light btn col s12">
              <i className="fa fa-github  col s2" aria-hidden="true" /> GITHUB
              大佬专用通道
            </a>
          </div>
          <div className="row">
            <div className="center-align">
              <Link to="/signup">
                ---------------还没有账号,点此注册---------------
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
