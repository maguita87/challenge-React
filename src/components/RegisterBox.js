import React from "react";
import "./styles/RegisterBox.css";
const RegisterBox = (props) => {
  return (
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
            <a className="button-light" href="#">
              Get Started Free
            </a>
          </div>
          <div className="d-flex link-registerBox">
            <p className="button-light mr-1 mb-0">or you can</p>
            <a className="button-light font-italic" href="#">
              view pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBox;
