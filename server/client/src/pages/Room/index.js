import React, { Component } from "react";

import Header from "../../conponents/Header";
import Room from "./Room";

class PageRoom extends Component {
  render() {
    return (
      <div>
        <Header feature="menu" />
        <Room />
        <Room />
        <Room />
      </div>
    );
  }
}

export default PageRoom;
