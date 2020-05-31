import React from "react";
import "./styles/RegisterBox.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const RegisterBox = (props) => {
  return (
    <Router>
      <div className="bg-gradient registerBoxContainer">
        <div className="container">
          <div className="text-light mb-3">
            <h2>Start monitoring your cards right now</h2>
          </div>
          <div className="description-style text-light">
            <p>
              If you register now, you will receive 15 days of product use
              completly unheeded
            </p>
          </div>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className="button-register">
              <Link className="button-light" to="#">
                Get Started Free
              </Link>
            </div>
            <div className="d-flex link-registerBox">
              <p className="button-light mr-1 mb-0">or you can</p>
              <Link className="button-light font-italic" to="#">
                view pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default RegisterBox;
