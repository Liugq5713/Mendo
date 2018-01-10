import React, { Component } from "react";
import Talkheader from "./Header";
import Talkcontent from "./Talkcontent";
import Talkinput from "./Talkinput";
import io from "socket.io-client";
// import Chat from "./Chat";
class Talkpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talkMsgContents: [],
      talkMsgContent: {
        msg: ""
      }
    };
    //socket  io 连接发送信息配置
    this.socket = io("10.224.5.55:5000");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });
    const addMessage = data => {
      console.log(data);
      this.setState({
        talkMsgContents: [...this.state.talkMsgContents, data]
      });
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        message: this.state.talkMsgContent
      });
      this.setState({
        talkMsgContent: { ...this.state.talkMsgContent, msg: "" }
      });
    };
  }
  //-----------------------------------
  handleInput(e) {
    this.setState({
      talkMsgContent: { ...this.state.talkMsgContent, msg: e.target.value }
    });
  }

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
          <Talkinput
            msg={this.state.talkMsgContent.msg}
            sendMessage={this.sendMessage}
            handleInput={this.handleInput}
          />
        </div>
      </div>
    );
  }
}

export default Talkpage;
