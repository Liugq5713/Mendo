import React, { Component } from "react";
import TalkMessage from "./TalkMessage";

export default class TalkContent extends Component {
  render() {
    const chatContents = this.props.talkMsgContents.map((talk, idx) => (
      <TalkMessage key={idx} name={talk.name} msg={talk.msg} />
    ));
    return <div className="row">{chatContents}</div>;
  }
}
