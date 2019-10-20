import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";
import LoginForm from "../loginForm";
import SignupForm from "../signupForm";
import HomePage from "../homePage";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Navbar />
        <div>
          <Switch>
            <Route path="/signup" component={SignupForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </main>
    );
  }
}

export default App;
