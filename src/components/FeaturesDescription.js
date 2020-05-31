import React from "react";
import FeatureInfo from "./FeatureInfo";
import FeatureImage from "./FeatureImage";
import "./styles/Features.css";
const FeaturesDescription = ({ info }) => {
  return (
    <div className="container">
      <div
        className={
          info.id % 2 === 0
            ? "d-flex container-info flex-wrap"
            : "flex-row-reverse d-flex flex-wrap container-info"
        }
      >
        <div className="col-12 col-sm col-md-6 text-left d-flex align-items-center">
          <FeatureInfo
            label={info.label}
            title={info.title}
            text={info.paragraph}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center">
          <FeatureImage url={info.img} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesDescription;
