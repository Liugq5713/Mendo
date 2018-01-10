import React, { Component } from "react";
import Talkmessage from "./Talkmessage";

export default class Talkcontent extends Component {
  render() {
    const chatContents = this.props.talkMsgContents.map((talk, idx) => (
      <Talkmessage key={idx} name={talk.name} msg={talk.msg} />
    ));
    return <div className="row">{chatContents}</div>;
  }
}
