import React from "react";
const FeatureImage = (props) => {
  return (
    <div>
      <img alt='feature' className="w-100" src={require(`${props.url}`)}></img>
    </div>
  );
};

export default FeatureImage;
