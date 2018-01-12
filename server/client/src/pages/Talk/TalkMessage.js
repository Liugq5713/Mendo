import React, { Component } from "react";
import Avatar from "../../conponents/Avatar";
class TalkMessage extends Component {
  render() {
    //   左中两个结构
    return (
      <div className="talkmsgWrapper row">
        <div className="avatarWrapper col s2">
          <Avatar />
        </div>
        <div className="col s8">
          <div className="talkerName">supersun</div>
          <div className="talkMsgWrapper">
            <div className="triangle" />
            <div className="talkmsgdetail">{this.props.msg}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default TalkMessage;
