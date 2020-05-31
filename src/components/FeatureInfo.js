import React from "react";
import "./styles/Features.css";
import Label from "./Label";
const FeatureInfo = (props) => {
  return (
    <div className="infoContainer">
      <Label name={props.label} />
      <div className="mb-5">
        <h2 className='title-style'>{props.title}</h2>
        <p className="info-style mb-5">{props.text}</p>
        <a className="button-content" href="#">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default FeatureInfo;
