import React from "react";
import "./styles/Features.css";
import Label from "./Label";
import { BrowserRouter as Router, Link } from "react-router-dom";
const FeatureInfo = (props) => {
  return (
    <Router>
      <div className="infoContainer">
        <Label name={props.label} />
        <div className="mb-5">
          <h2 className="title-style">{props.title}</h2>
          <p className="info-style mb-5">{props.text}</p>
          <Link className="button-content" to="#">
            Learn More
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default FeatureInfo;
