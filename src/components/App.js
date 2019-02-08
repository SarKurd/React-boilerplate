import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import "./App.scss";

class App extends Component {
  state = {
    world: "World"
  };
  render() {
    return <div id="app">Hello, {this.state.world}!</div>;
  }
}
export default hot(App);
