import React, { Component } from "react";
import Header from "./Header";
import Pannelchat from "./Pannelchat";
import Inputchat from "./Inputchat";
class Home extends Component {
  render() {
    return (
      <div className="row">
        <Header />
        <main className="home--main">
          <div className="home--chatcontent">
            <Pannelchat />
          </div>
        </main>
        <Inputchat />
      </div>
    );
  }
}

export default Home;
