import React, { Component } from "react";
import Navbar from "../navbar";


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
