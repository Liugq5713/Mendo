import avatar from "../images/avatar.png";

import React, { Component } from "react";

export default class Talkcontent extends Component {
  render() {
    return (
      <div>
        <a href="#" className="avatar">
          <img src={`/${avatar}`} alt="avatar" className="circle circle__style" />
        </a>
      </div>
    );
  }
}
