import React, { Component } from "react";
import io from "socket.io-client";

import Talkheader from "../../conponents/Header";
import Talkcontent from "./TalkContent";
import Talkinput from "./TalkInput";

// import Chat from "./Chat";
class PageTalk extends Component {
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
    // this.socket = io();

    this.socket.on("hi", (data) => {
      console.log(data)
    })
    this.socket.on("RECEIVE_MESSAGE", function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      console.log(data);
      this.setState({
        talkMsgContents: [...this.state.talkMsgContents, data.message]
      });
    };

    this.sendMessage = () => {
      this.socket.emit("SEND_MESSAGE", {
        message: this.state.talkMsgContent
      });
      this.setState({
        talkMsgContent: { ...this.state.talkMsgContent, msg: "" }
      });
      setTimeout(this.scrollToBottom, 0);
    };

    // this.sendMessage = ev => {
    //   ev.preventDefault();
    //   this.socket.emit("SEND_MESSAGE", {
    //     message: this.state.talkMsgContent
    //   });
    //   this.setState({
    //     talkMsgContent: { ...this.state.talkMsgContent, msg: "" }
    //   });
    //   this.scrollToBottom();
    // };

    this.handleInput = this.handleInput.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  //-----------------------------------
  componentWillMount() { }
  //按下发送键之后，将聊天内容区域滑动到底部
  scrollToBottom() {
    this.dom_talk_middle.scrollTop = this.dom_talk_middle.scrollHeight;
  }
  //处理输入框的输入，并且存入state中
  handleInput(e) {
    e.persist();
    this.setState(function (prevState, props) {
      return {
        talkMsgContent: { ...this.state.talkMsgContent, msg: e.target.value }
      };
    });
  }

  render() {
    const talkMsgContents = this.state.talkMsgContents;
    return (
      <div className="page_talk">
        <div className="talk_header">
          <Talkheader feature="back" />
        </div>
        <div
          className="talk_middle"
          ref={dom_talk_middle => (this.dom_talk_middle = dom_talk_middle)}
        >
          <Talkcontent talkMsgContents={talkMsgContents} />
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

export default PageTalk;
