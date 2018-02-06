import React, { Component } from "react";

export default class TalkInput extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
    this.TimeoutScrollID = setTimeout(() => {
      this.boxToSendMsg.scrollIntoView(true);
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.TimeoutScrollID);
  }

  //发送键和enter绑定
  onKeyPressed = e => {
    if (e.keyCode == 13 && this.props.msg != "") {
      this.props.sendMessage();
    }
  };

  render() {
    return (
      <div className="boxToSendMsg"
        ref={boxToSendMsg => (this.boxToSendMsg = boxToSendMsg)}>
        <div className="inputToSendMsgWrapper">
          <input
            className="inputToSendMsg"
            type="text"
            value={this.props.msg}
            onChange={this.props.handleInput}
          />
        </div>

        <div className="btnToSendMsgWrapper">
          <button
            className=" btn waves-effect waves-light "
            type="submit"
            name="action"
            value=""
            onClick={
              this.props.msg == "" ? null : this.props.sendMessage // 有内容才可以调用发送函数，没有内容为null
            }
          >
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
