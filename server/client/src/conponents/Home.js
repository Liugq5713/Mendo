import React, { Component } from "react";
import Header from "./Header";
import Pannelchat from "./Pannelchat";
import Inputchat from "./Inputchat";
class Home extends Component {
  render() {
    return (
      <div className="page">
        <div className="fixed-top">
          <Header />
        </div>
        <main className="fixed-middle">
          <div className="content">
            <Pannelchat />
          </div>
        </main>
        <div className="fixed-bottom">
          <Inputchat />
        </div>
      </div>
    );
  }
}

export default Home;
