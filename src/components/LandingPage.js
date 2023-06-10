import React, { Component } from "react";
import auth from "../../utils/auth";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  login() {
    auth.login(() => {
      this.props.history.push("/app");
    });
  }

  handleClick(evt) {
    this.login();
  }
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default LandingPage;
