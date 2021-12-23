import React, { Component } from "react";
import "./App.css";
import data from "./data";
import Button from "./componenets/Button";
import Counter from "./componenets/Counter";

class App extends Component {
  state = { data: data, likes: 0, dislikes: 0, imgCounter: 0, isOn: false };

  handleBtnClick = (counter) => {
    this.setState((prevState) => ({
      [counter]: prevState[counter] + 1,
      imgCounter: prevState.imgCounter + 1,
    }));
  };
  showData = (idx) => {
    const { data } = this.state;
    return (
      <div className="hero">
        <h3>{data[idx].name}</h3>
        <img src={data[idx].ImgUrl} alt="picutre" />
      </div>
    );
  };
  showEnd = () => {
    !this.state.isOn && this.setState({ isOn: true });
    return (
      <div className="hero">
        <h1>~ Finished ~ </h1>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="counter-container">
          <Counter name="Dislikes" counter={this.state.dislikes} />
          <Counter name="Likes" counter={this.state.likes} />
        </div>
        {this.state.imgCounter < this.state.data.length
          ? this.showData(this.state.imgCounter)
          : this.showEnd()}

        <div className="btn-container">
          <Button
            handleClick={() => {
              this.handleBtnClick("dislikes");
            }}
            btnType="Dislike"
            btnState={this.state.isOn}
          />
          <Button
            handleClick={() => {
              this.handleBtnClick("likes");
            }}
            btnType="Like"
            btnState={this.state.isOn}
          />
        </div>
      </div>
    );
  }
}

export default App;
