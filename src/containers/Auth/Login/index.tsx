import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";

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

    const { firebase } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password,
      })
      .catch((err) => alert("Invalid login credentials"));
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card mt-5">
                <div className="card-body">
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

export default firebaseConnect()(Login);
