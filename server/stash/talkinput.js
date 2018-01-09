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
    this.updateDimensions = this.updateDimensions.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
    this.scrollIntoformer = this.scrollIntoformer.bind(this);
  }
  componentWillMount() {
    this.updateDimensions();
  }
  updateDimensions() {
    this.setState({
      // width: $(window).width(),
      viewheight: $(window).height(),
      inputboxHeight: $(".formToSendMsg").height()
    });
  }
  componentDidMount() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  scrollIntoView() {
    // const heightfix = this.state.viewheight - 63;
    // $(".formToSendMsg").addClass("formToSendMsg__fixed");
    // $(".formToSendMsg").css("bottom", 0);
  }
  scrollIntoformer() {
    $(".formToSendMsg").removeClass("formToSendMsg__fixed");
  }
  handleInput(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="row">
        <form
          ref={inputbox => {
            this.inputbox = inputbox;
          }}
          className="formToSendMsg"
        >
          <div className="row">
            <div className="col s9  ">
              <input
                className="inputToSendMsg"
                type="text"
                value={this.state.value}
                onChange={this.handleInput}
                onFocus={this.scrollIntoView}
                onBlur={this.scrollIntoformer}
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
