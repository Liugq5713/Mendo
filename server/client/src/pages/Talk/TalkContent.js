import React, { Component } from "react";
import TalkMessage from "./TalkMessage";

export default class TalkContent extends Component {
  render() {
    const chatContents = this.props.talkMsgContents.map((talk, idx) => {
      console.log('talk', talk)
      return (
        <TalkMessage key={idx} usernaem={talk.username} msg={talk.msg} />
      )
    });
    return <div className="row">{chatContents}</div>;
  }
}
