import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class WhatWeDo extends Component {
  state = {};
  render() {
    return (
      <Spring
        config={{ delay: 1000, duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <div style={props}>
            <div className="text-center mt-5">
              <h2>What We Do</h2>
              <p>Lorem ipsum dolor sit amet consispincing amet dolor.</p>
              <div>
                Number of downloads:
                <Spring
                  from={{ number: 0 }}
                  to={{ number: 100 }}
                  config={{ delay: 1000, duration: 10000 }}
                >
                  {props => (
                    <div style={props}>
                      <span className="badge badge-warning">
                        {props.number.toFixed()}
                      </span>
                    </div>
                  )}
                </Spring>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default WhatWeDo;
