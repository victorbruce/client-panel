import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

class Navbar extends Component<any, any> {
  state = {
    isAuthenticated: false,
  };

  handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const { firebase } = this.props;

    firebase.logout();
  };

  static getDerivedStateFromProps = (props, state) => {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  };

  render() {
    const { auth } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ClientPanel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  tab-index="-1"
                  aria-disabled="true"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  {auth && auth.email}
                </a>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link" onClick={this.handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default compose<any>(
  firebaseConnect(),
  connect(mapStateToProps)
)(Navbar);
