import React, { Component } from "react";
// import io from "socket.io-client";

export default class Talkinput extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
    // console.log(this.boxToSendMsg);
    setTimeout(this.boxToSendMsg.scrollIntoView, 300);
  }

  //发送键和enter绑定
  onKeyPressed = e => {
    if (e.keyCode == 13 && this.props.msg != "") {
      this.props.sendMessage();
    }
  };

  render() {
    return (
      <div
        className="row boxToSendMsg"
        ref={boxToSendMsg => (this.boxToSendMsg = boxToSendMsg)}
      >
        <div className="col s9">
          <input
            className="inputToSendMsg"
            type="text"
            value={this.props.msg}
            onChange={this.props.handleInput}
          />
        </div>
        <div className="col s3 removeLeftPadding">
          <button
            className="btnToSendMsg btn waves-effect waves-light "
            type="submit"
            name="action"
            value=""
            onClick={
              this.props.msg == "" ? null : this.props.sendMessage // 有内容才可以调用发送函数，没有内容为null
            }
          >
            发送
          </button>
        </div>
      </div>
    );
  }
}
