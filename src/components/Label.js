import React from "react";
import "./styles/Features.css";

const Label = (props) => {
  return (
    <div className="label">
      <span>{props.name}</span>
    </div>
  );
};

export default Label;
