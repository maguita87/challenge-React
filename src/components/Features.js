import React from "react";
import FeatureItem from "./FeatureItem";
import "./styles/Features.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Features = () => {
  return (
    <div className="container feature-text-style">
      <div className="mb-3 d-flex justify-content-center">
        <div className="circle">
          <div className="arrow">
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
      <div className="col-6 dashed-line mb-4"></div>
      <div className="row mb-5">
        <div className="col-2"></div>
        <div className="col-8">
          <h2 className="mb-4">Idea of the Project</h2>
          <p className='p-style'>
            We has developed a system that allows you to unite many bank cards
            into one electronic card, thereby tracking all data synchronizing
            all of them as one whole, you can at any time track transactions of
            several cards simultaneosly and this is only a small part of what
            OneBlue can.
          </p>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row container-feature-item">
        <div className="col-sm">
          <FeatureItem
            img={require("../img/icon-real.png")}
            title="Smart Electronic Card"
            text="Our map is designed in such a way that it unitesall your cards in the system and synchronize data as one multifunction card."
          />
        </div>
        <div className="col-sm">
          <FeatureItem
            img={require("../img/icon-smart.png")}
            title="Real-time statistics"
            text="One various pages there are graphics statistics, its data is update in real time and at any time you can find out your data."
          />
        </div>
        <div className="col-sm">
          <FeatureItem
            img={require("../img/icon-receiving.png")}
            title="Receiving the information"
            text="This function allows you to process your data in at the same time, when they come to your card. Information will be sent to the main page."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
