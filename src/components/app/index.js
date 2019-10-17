import React, { Component } from "react";
import Navbar from "../navbar";
import "bootstrap/dist/css/bootstrap.css";
import $ from "popper.js";
import jquery from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Navbar />
        <div className="container">
          <h1>React Forms</h1>
        </div>
      </main>
    );
  }
}

export default App;
