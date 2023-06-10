import React, { Component } from "react";
import auth from "../../utils/auth";

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  LogOut() {
    auth.logout(() => {
      this.props.history.push("/");
    });
  }

  handleClick(evt) {
    this.LogOut();
  }
  render() {
    return (
      <div>
        <h1>App Layout</h1>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}

export default AppLayout;
