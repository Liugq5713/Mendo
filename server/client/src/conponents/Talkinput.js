import React, { Component } from "react";
// import io from "socket.io-client";

export default class Talkinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      viewheight: 0,
      inputboxHeight: 0,
      username: "",
      message: "",
      messages: []
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="row boxToSendMsg">
        <div className="col s9">
          <input
            className="inputToSendMsg"
            type="text"
            value={this.state.value}
            onChange={this.handleInput}
          />
        </div>
        <div className="col s3 removeLeftPadding">
          <button
            className="btnToSendMsg btn waves-effect waves-light "
            type="submit"
            name="action"
            value="test"
          >
            发送
          </button>
        </div>
      </div>
    );
  }
}
