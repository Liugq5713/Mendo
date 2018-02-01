import React, { Component } from "react";
import Avatar from "../../conponents/Avatar";

// 添加
class TalkMessage extends Component {
  render() {
    const username = this.props.username;
    console.log('username', username)
    const isSelf = this.props.isSelf;

    return (
      (isSelf) ? (<div className="talkMsgWrapper  talkMsgWrapper__self">
        <div className="avatarWrapper avatarWrapper__self">
          <Avatar />
        </div>
        <div className="sliderWrapper sliderWrapper__self">
          <div className="talkerName talkerName__self">{username}</div>
          <div className="talkDialog talkDialog__self">
            <div className="talkMsg">{this.props.msg}</div>
            <div className="triangle triangle__self" />
          </div>
        </div>
      </div>) : (
          <div className="talkMsgWrapper">
            <div className="avatarWrapper">
              <Avatar />
            </div>
            <div className="sliderWrapper">
              <div className="talkerName">{this.props.username}</div>
              <div className="talkDialog">
                <div className="triangle" />
                <div className="talkMsg">{this.props.msg}</div>
              </div>
            </div>
          </div>
        )
    );
  }
}

export default TalkMessage;
