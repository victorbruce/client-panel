import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";

const heroStyle = {
  color: "#000",
  paddingTop: "2.5em",
  paddingBottom: "2.5em",
  textAlign: "center"
};

const heroBtn = {
  fontWeight: "500"
};

class Hero extends Component {
  state = {};
  render() {
    return (
      <div style={heroStyle}>
        <div className="container">
          <h1 className="page-header">Hello React Forms!</h1>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1200, duration: 800 }}
          >
            {props => (
              <div style={props}>
                <p>
                  This project focuses mainly on how to build forms in React
                  <br />
                  using the best practices out there.
                </p>
              </div>
            )}
          </Spring>
          <Link to="/login" style={heroBtn} className="btn btn-warning">
            Get started
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
