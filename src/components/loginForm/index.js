import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };

  handleChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("submitted");
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit} className="col-6 offset-3">
          <p className="lead text-center">Login</p>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={account.email}
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={account.password}
              id="password"
              placeholder="password"
            />
          </div>
          <button className="btn btn-primary block">Login</button>
          <p className="text-center pt-3">
            <Link to="signup">Don't have an Account?</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
