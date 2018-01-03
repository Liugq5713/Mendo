import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <div className="row">
        <form method="POST" action="/api/signup" className="col s10 offset-s1">
          <div className="row">
            <div className="input-field">
              <input
                id="username"
                name="username"
                type="text"
                className="validate"
              />
              <label htmlFor="username">username</label>
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
              <i className="fa fa-sign-in" aria-hidden="true" />&nbsp;注 册
            </button>
          </div>
          <div className="row">
            <a
              href="/auth/github"
              className="waves-effect waves-light btn col s12 blue-grey-text text-lighten-5"
            >
              <i className="fa fa-github" aria-hidden="true" />
              &nbsp;GITHUB大佬专用通道
            </a>
          </div>
          <div className="row">
            <div className="center-align">
              <Link to="/login">
                ---------------已有账号,点此登录---------------
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
