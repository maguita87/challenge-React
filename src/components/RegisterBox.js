import React from "react";
import "./styles/RegisterBox.css";
const RegisterBox = (props) => {
  return (
    <div className="bg-gradient registerBoxContainer">
      <div className="container">
        <h2 className="text-light mb-3">
          Start monitoring your cards right now
        </h2>
        <h3 className="description-style text-light">
          If you register now, you will receive 15 days of product use completly
          unheeded
        </h3>
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
