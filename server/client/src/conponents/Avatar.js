import avatar from "../images/avatar/avatar_03.jpg";

import React, { Component } from "react";

export default class Talkcontent extends Component {
  render() {
    return (
      <div className="avatar">
        <img src={`${avatar}`} alt="avatar" className="circle circle__style" />
      </div>
    );
  }
}
