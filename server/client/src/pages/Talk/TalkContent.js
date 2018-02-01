import React, { Component } from "react";
import TalkMessage from "./TalkMessage";

export default class TalkContent extends Component {
  constructor() {
    super();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidUpdate() {
    if (this.TalkContainer != undefined) {
      console.log('this.TalkContainer.scrollHeight', this.TalkContainer.scrollHeight)
      console.log('this.TalkContainer.scrollTop', this.TalkContainer.scrollTop)
      this.scrollToBottom();
    }
  }
  scrollToBottom() {
    this.TalkContainer.scrollTop = this.TalkContainer.scrollHeight;
  }
  render() {
    const chatContents = this.props.talkMsgContents.map((talk, idx) => {
      const isSelf = talk.username === this.props.username;
      return (

        <TalkMessage key={idx} username={talk.username} msg={talk.msg} isSelf={isSelf} />

      )
    });
    return (
      <div className="TalkContainer"
        ref={
          TalkContainer => (this.TalkContainer = TalkContainer)
        }
      >
        <div className="row">{chatContents}</div>;
      </div>
    )

  }
}
