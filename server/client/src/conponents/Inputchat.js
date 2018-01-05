import React, { Component } from "react";

class InputChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.scrollIntoView = this.scrollIntoView.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentWillMount() {
    this.scrollIntoView();
  }
  scrollIntoView() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.scrollIntoView();
  }
  handleInput(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="row formToSendMsg ">
        <form>
          <div className="row">
            <div className="col s9  ">
              <input
                id="inputToSendMsg"
                className="inputToSendMsg"
                type="text"
                ref={input => {
                  this.textInput = input;
                }}
                value={this.state.value}
                onChange={this.handleInput}
              />
            </div>
            <div className="col s3 removeLeftPadding">
              <button
                id="btnToSendMsg"
                className="btn waves-effect waves-light"
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

export default InputChat;
