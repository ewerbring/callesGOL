import React, { Component } from "react";
import "./App.css";
import Game from "./Game";
import Maptest from "./components/Maptest";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game /> */}
        <Maptest />
      </div>
    );
  }
}

export default App;
