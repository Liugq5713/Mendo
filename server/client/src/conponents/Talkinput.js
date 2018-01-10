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
            value="test"
            onClick={this.props.sendMessage}
          >
            发送
          </button>
        </div>
      </div>
    );
  }
}
