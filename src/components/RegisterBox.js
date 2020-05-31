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
          <a className="button-register" href="#">
            Get Started Free
          </a>
          <a class="button-light" href="#">
            or you can view pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterBox;
