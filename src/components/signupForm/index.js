import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class SignupForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string()
      .min(5)
      .required()
  };

  doSubmit() {
    console.log("Registration submitted");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="col-6 offset-3">
          <p className="lead">Sign Up</p>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Sign up")}
        </form>
      </div>
    );
  }
}

export default SignupForm;
