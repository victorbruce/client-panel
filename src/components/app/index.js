import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../navbar";
import LoginForm from "../loginForm";
import SignupForm from "../signupForm";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Navbar />
        <div className="container">
          <h1>React Forms</h1>
          <Switch>
            <Route path="/signup" component={SignupForm} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
