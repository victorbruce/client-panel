import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import AppLayout from "../../../layouts/AppLayout";

class Settings extends Component<any, any> {
  allowRegistrationChange = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  };

  disableBalanceOnAddChange = () => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  };

  disableBalanceOnEditChange = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  };

  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration,
    } = this.props.settings;

    return (
      <AppLayout>
        <div className="Settings">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link to="/" className="btn btn-link">
                  Back to Dashboard
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">Edit Settings</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="allowRegistration">
                      Allow Registration
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="allowRegistration"
                      checked={!!allowRegistration}
                      onChange={this.allowRegistrationChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="disableBalanceOnAdd">
                      Disable Balance on Add
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="disableBalanceOnAdd"
                      checked={!!disableBalanceOnAdd}
                      onChange={this.disableBalanceOnAddChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="disableBalanceOnEdit">
                      Disable Balance on Edit
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="disableBalanceOnEdit"
                      checked={!!disableBalanceOnEdit}
                      onChange={this.disableBalanceOnEditChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    settings: state.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDisableBalanceOnAdd: () => dispatch(actions.disableBalanceOnAdd()),
    setDisableBalanceOnEdit: () => dispatch(actions.disableBalanceOnEdit()),
    setAllowRegistration: () => dispatch(actions.allowRegistration()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
