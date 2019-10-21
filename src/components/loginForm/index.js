import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    password: Joi.string().required()
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  doSubmit() {
    console.log("submitted");
  }

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit} className="col-6 offset-3">
          <p className="lead text-center">Login</p>
          {this.renderInput("email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <p className="text-center pt-3">
            <Link to="signup">Don't have an account?</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
