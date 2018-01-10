import React, { Component } from "react";
// import io from "socket.io-client";

export default class Talkinput extends Component {
  render() {
    return (
      <div className="row boxToSendMsg">
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
            // 有内容才可以调用发送函数，没有内容为null
            onClick={this.props.msg == "" ? null : this.props.sendMessage}
          >
            发送
          </button>
        </div>
      </div>
    );
  }
}
