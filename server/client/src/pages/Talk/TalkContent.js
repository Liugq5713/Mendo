import React, { Component } from "react";
import TalkMessage from "./TalkMessage";

export default class TalkContent extends Component {
  render() {

    const chatContents = this.props.talkMsgContents.map((talk, idx) => {
      console.log('talk', talk.username)
      const isSelf = talk.username === this.props.username;
      return (
        <TalkMessage key={idx} username={talk.username} msg={talk.msg} isSelf={isSelf} />
      )
    });
    return <div className="row">{chatContents}</div>;
  }
}
