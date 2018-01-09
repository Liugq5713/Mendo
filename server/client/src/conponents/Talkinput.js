import React, { Component } from "react";

export default class Talkinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      viewheight: 0,
      inputboxHeight: 0
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="row">
        <form className="formToSendMsg">
          <div className="row">
            <div className="col s9  ">
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
        </form>
      </div>
    );
  }
}
