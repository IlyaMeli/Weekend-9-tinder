import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button disabled={this.props.btnState} onClick={this.props.handleClick}>
          {this.props.btnType}
        </button>
      </div>
    );
  }
}
