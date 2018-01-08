import React, { Component } from "react";

export default class Talkinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      width: 0,
      height: 3
    };
    this.scrollIntoView = this.scrollIntoView.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentWillMount() {
    this.updateDimensions();
    // this.scrollIntoView();
  }
  updateDimensions() {
    console.log("width", $(window).width());
    console.log("height", $(window).height());
    const viewTop = $(window).scrollTop(); // 可视区域顶部
    console.log("viewTop", viewTop);
    const viewBottom = viewTop + window.innerHeight; // 可视区域底部
    console.log("viewBottom", viewBottom);
    // console.log("height", $(this.textInput));

    // $(this.textInput).removeClass("formToSendMsg__fixed");
    // $(this.textInput).addClass("formToSendMsg__absolute");
    // $(this.form).css("top", "1px");
    this.setState({ width: $(window).width(), height: $(window).height() });
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  scrollIntoView() {
    // window.re;
    // Explicitly focus the text input using the raw DOM API
  }
  handleInput(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="row">
        <form
          ref={form => {
            this.form = form;
          }}
          className="formToSendMsg formToSendMsg__fixed"
        >
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
                // onFocus={this.scrollIntoView}
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
