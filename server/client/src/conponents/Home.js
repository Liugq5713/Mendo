import React, { Component } from "react";
import Talkheader from "./Header";
import Talkcontent from "./Talkcontent";
import Talkinput from "./Talkinput";
class Home extends Component {
  render() {
    return (
      <div className="page_talk">
        <div className="talk_header ">
          <Talkheader />
        </div>
        <div className="talk_middle">
          <Talkcontent />
        </div>
        <div className="talk_footer">
          <Talkinput />
        </div>
      </div>
    );
  }
}

export default Home;
