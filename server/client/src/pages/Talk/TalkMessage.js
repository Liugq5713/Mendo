import React, { Component } from "react";
import Avatar from "../../conponents/Avatar";

import { connect } from "react-redux"
// 添加
class TalkMessage extends Component {
  render() {
    const username = this.props.username;
    return (
      <div className="talkmsgWrapper row">
        <div className="avatarWrapper col s2">
          <Avatar />
        </div>
        <div className="col s8">
          <div className="talkerName">{username}</div>
          <div className="talkMsgWrapper">
            <div className="triangle" />
            <div className="talkmsgdetail">{this.props.msg}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => ({
  username: state.auth.profile.username
})

export default connect(mapStateToprops)(TalkMessage);
