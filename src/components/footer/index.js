import React, { Component } from "react";

const footerStyle = {
  width: "100%",
  margin: "0",
  position: "absolute",
  bottom: "0",
  fontWeight: "bold",
  textAlign: "center",
  background: "#f8f9fa"
};

const footerParagraph = {
  padding: "10px",
  margin: "0"
};

class Footer extends Component {
  state = {};
  render() {
    return (
      <div style={footerStyle}>
        <p style={footerParagraph}>Copyright &copy; 2019.</p>
      </div>
    );
  }
}

export default Footer;
