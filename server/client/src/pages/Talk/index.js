import React, { Component } from "react";

import Header from "../../conponents/Header";
import Talkcontent from "./TalkContent";
import Talkinput from "./TalkInput";

import socket from "../../actions/socket"

import { connect } from "react-redux";

// import Chat from "./Chat";
class PageTalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talkMsgContents: [],
      talkMsgContent: {
        username: this.props.username,
        msg: ""
      }
    };
    console.log('props.username-----', props.username)
    console.log('props.username-----', this.props.username)
    //socket  io 连接发送信息  配置
    socket.on("connectToRoom", (data) => {
      console.log(data)
    })

    // socket接受消息，然后将消息添加到state
    socket.on("RECEIVE_MESSAGE", function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      console.log(data);
      this.setState({
        talkMsgContents: this.state.talkMsgContents.concat(data.message)
      });
    };
    // 发送消息
    this.sendMessage = () => {
      console.log('this.state.talkMsgContent', this.state.talkMsgContent)
      socket.emit("SEND_MESSAGE", {
        message: this.state.talkMsgContent
      });
      this.setState({
        talkMsgContent: { ...this.state.talkMsgContent, msg: "" }
      });
      setTimeout(this.scrollToBottom, 0);
    };

    this.handleInput = this.handleInput.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  //按下发送键之后，将聊天内容区域滑动到底部
  scrollToBottom() {
    this.dom_talk_middle.scrollTop = this.dom_talk_middle.scrollHeight;
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
    console.log('state', this.state)
    const talkMsgContents = this.state.talkMsgContents;
    return (
      <div className="page_talk">
        <div className="talk_header">
          <Header feature="back" />
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

const mapStateToprops = state => ({
  username: state.auth.profile.username
})

export default connect(mapStateToprops)(PageTalk);
