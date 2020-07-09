import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import AppLayout from "../../../layouts/AppLayout";

class ClientDetails extends Component<any, any> {
  render() {
    const { client, id } = this.props;

    if (id && client && id[0]) {
      return (
        <AppLayout>
          <div className="ClientDetails">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Link to="/" className="btn btn-link">
                    Back To Dashboard
                  </Link>
                </div>
                <div className="col-md-6">
                  <div className="btn-group float-right">
                    <Link
                      to={`/client/edit/${id[0].id}`}
                      className="btn btn-dark"
                    >
                      Edit
                    </Link>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card">
                <h3 className="card-header">
                  {client.firstName} {client.lastName}
                </h3>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8 col-sm-6">
                      <h4>
                        Client ID:{" "}
                        <span className="text-secondary">{id[0].id}</span>
                      </h4>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <h3 className="pull-right">
                        Balance:{" "}
                        <span
                          className={
                            parseFloat(client.balance) > 0
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          ${parseFloat(client.balance).toFixed(2)}
                        </span>
                      </h3>
                      {/* @todo - balance form */}
                    </div>
                  </div>
                  <hr />
                  <ul className="list-group">
                    <li className="list-group-item">
                      Contact Email: {client.email}
                    </li>
                    <li className="list-group-item">
                      Contact Phone: {client.phone}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AppLayout>
      );
    }

    return <h1>Loading...</h1>;
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
    {
      collection: "clients",
      storeAs: "client",
      doc: props.match.params.id,
    },
  ]),
  connect(mapStateToProps)
)(ClientDetails);
