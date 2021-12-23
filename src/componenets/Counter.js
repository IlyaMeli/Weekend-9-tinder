import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <>
        <h2 className={this.props.name}>
          {this.props.name} <span>{this.props.counter}</span>
        </h2>
      </>
    );
  }
}
