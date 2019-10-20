import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../common/input";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: ""
    },
    errors: {}
  };

  validateProperty = ({ name, value }) => {
    if (name === "email") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  validate = () => {
    const errors = {};

    if (this.state.account.email.trim() === "")
      errors.email = "Email address is required";
    if (this.state.account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call the server
    console.log("submitted");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit} className="col-6 offset-3">
          <p className="lead text-center">Login</p>
          <Input
            name="email"
            label="Email address"
            value={account.email}
            error={errors.email}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            error={errors.password}
            onChange={this.handleChange}
          />
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
