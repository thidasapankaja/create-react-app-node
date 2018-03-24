import React, { Component } from "react";

class WelcomeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { fromServer: false, replyFromServer: "" };
  }

  buttonClick = async () => {
    const res = await fetch("/api/reply");
    const data = await res.json();
    console.log(data.reply);
    this.setState({ replyFromServer: data.reply });
  };

  render() {
    return (
      <div>
        <button onClick={this.buttonClick}> Click this!</button>
        <div>
          <h3>{this.state.replyFromServer}</h3>
        </div>
      </div>
    );
  }
}

export default WelcomeButton;
