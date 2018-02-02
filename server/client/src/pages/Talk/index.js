import React, { Component } from "react";

import Header from "../../conponents/Header";
import TalkContent from "./TalkContent";
import TalkInput from "./TalkInput";

import socket from "../../actions/socket"

import { connect } from "react-redux";

// import Chat from "./Chat";
class PageTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talkMsgContents: [],
      talkMsgContent: {
        username: "",
        msg: ""
      }
    };
    //socket  io 连接发送信息  配置
    socket.on("connect", () => {
      socket.emit("join", "one join--has joined--" + this.props.match.params.roomId)
    })

    // socket接受消息，然后将消息添加到state
    socket.on("RECEIVE_MESSAGE", function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      this.setState({
        talkMsgContents: this.state.talkMsgContents.concat(data.message)
      });
    };
    // 发送消息
    this.sendMessage = () => {
      socket.send({
        message: this.state.talkMsgContent
      });
      this.setState({
        talkMsgContent: { ...this.state.talkMsgContent, msg: "" }
      });
    };

    this.handleInput = this.handleInput.bind(this);
  }

  //处理输入框的输入，并且存入state中
  handleInput(e) {
    e.persist();
    this.setState(function (prevState, props) {
      return {
        talkMsgContent: { ...this.state.talkMsgContent, msg: e.target.value, username: this.props.username }
      };
    });
  }


  render() {
    const talkMsgContents = this.state.talkMsgContents;
    const username = this.props.username;

    return (
      <div className="page_talk">
        <div className="talk_header">
          <Header feature="back" />
        </div>
        <div
          className="talk_middle"
          ref={dom_talk_middle => (this.dom_talk_middle = dom_talk_middle)}
        >
          <TalkContent
            talkMsgContents={talkMsgContents}
            username={username}
          />
        </div>
        <div className="talk_footer">
          <TalkInput
            msg={this.state.talkMsgContent.msg}
            sendMessage={this.sendMessage}
            handleInput={this.handleInput}
          />
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => ({
  username: state.auth.profile.username
})

export default connect(mapStateToprops)(PageTalk);
