import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import AppLayout from "../../../layouts/AppLayout";

class EditClient extends Component<any, any> {
  private firstNameInput: React.RefObject<HTMLInputElement>;
  private lastNameInput: React.RefObject<HTMLInputElement>;
  private emailInput: React.RefObject<HTMLInputElement>;
  private phoneInput: React.RefObject<HTMLInputElement>;
  private balanceInput: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const { id, firestore, history } = this.props;

    // updated client
    const updatedClient = {
      firstName: this.firstNameInput.current
        ? this.firstNameInput.current.value
        : null,
      lastName: this.lastNameInput.current
        ? this.lastNameInput.current.value
        : null,
      email: this.emailInput.current ? this.emailInput.current.value : null,
      phone: this.phoneInput.current ? this.phoneInput.current.value : null,
      balance: this.balanceInput.current
        ? this.balanceInput.current.value === ""
          ? 0
          : this.balanceInput.current.value
        : null,
    };

    // update firestore
    firestore
      .update({ collection: "clients", doc: id[0].id }, updatedClient)
      .then(() => {
        history.push("/");
      });
  };

  render() {
    const { client } = this.props;

    if (client) {
      return (
        <AppLayout>
          <div className="EditClient">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Link to="/" className="btn btn-link">
                    Back To Dashboard
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Edit Client</div>
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
                        ref={this.firstNameInput}
                        defaultValue={client.firstName}
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
                        ref={this.lastNameInput}
                        defaultValue={client.lastName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        ref={this.emailInput}
                        defaultValue={client.email}
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
                        ref={this.phoneInput}
                        defaultValue={client.phone}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="balance">Balance</label>
                      <input
                        type="text"
                        className="form-control"
                        name="balance"
                        ref={this.balanceInput}
                        defaultValue={client.balance}
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
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.firestore.data.client,
    id: state.firestore.ordered.client,
  };
};

export default compose<any>(
  firestoreConnect((props: any) => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id },
  ]),
  connect(mapStateToProps)
)(EditClient);
