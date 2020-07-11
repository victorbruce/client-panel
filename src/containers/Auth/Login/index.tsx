import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import * as actions from "../../../store/actions";

import Alert from "../../../components/Alert";

type LoginState = {
  email: string;
  password: string;
};

class Login extends Component<any, LoginState> {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    const updatedState = { [name]: value } as Pick<
      LoginState,
      keyof LoginState
    >;

    this.setState(updatedState);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password,
      })
      .catch((err) => notifyUser("Invalid login credentials", "error"));
  };

  render() {
    const { message, messageType } = this.props.notify;

    return (
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card mt-5">
                <div className="card-body">
                  {message ? (
                    <Alert message={message} messageType={messageType} />
                  ) : null}
                  <h1 className="text-center pb-4 pb-3 text-primary">Login</h1>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notify: state.notify,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    notifyUser: (message, messageType) =>
      dispatch(actions.notifyUser(message, messageType)),
  };
};

export default compose<any>(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
