import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import AppLayout from "../../../layouts/AppLayout";

type AddClientState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  balance: string | number;
};

class AddClient extends Component<any, AddClientState> {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: "",
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedState = { [name]: value } as Pick<
      AddClientState,
      keyof AddClientState
    >;
    this.setState(updatedState);
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const newClient = this.state;

    const { firestore, history } = this.props;

    // if no balance, set value to 0
    if (newClient.balance.trim() === "") {
      newClient.balance = "0";
    }

    // add client to firebase
    firestore
      .add({ collection: "clients" }, newClient)
      .then(() => history.push("/"));
  };

  render() {
    return (
      <AppLayout>
        <div className="AddClient">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link to="/" className="btn btn-link">
                  Back To Dashboard
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-header">Add Client</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      minLength={2}
                      required
                      onChange={this.handleInputChange}
                      value={this.state.firstName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      minLength={2}
                      required
                      onChange={this.handleInputChange}
                      value={this.state.lastName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      minLength={10}
                      required
                      onChange={this.handleInputChange}
                      value={this.state.phone}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input
                      type="text"
                      className="form-control"
                      name="balance"
                      onChange={this.handleInputChange}
                      value={this.state.balance}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default firestoreConnect()(AddClient);
