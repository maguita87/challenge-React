import React from "react";
import "./styles/Features.css";
const FeatureItem = (props) => {
  return (
    <div className="features-items">
      <div>
        <img alt='icon' src={props.img}></img>
      </div>
      <div className="feature-title"><span>{props.title}</span></div>
      <div className="p-style"><p> {props.text}</p></div>
    </div>
  );
};

export default FeatureItem;
