import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <form method="POST" action="/api/signup">
        <input
          type="text"
          name="username"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}
