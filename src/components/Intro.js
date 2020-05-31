import React from "react";
import "./styles/Welcome.css";
const Intro = () => {
  return (
    <div className="container-welcome-text d-flex align-items-center">
      <div className="container">
        <div class="text-welcome pt-5 my-auto mb-5 ">
          <h2 class="title-intro">
            Combine all your credit cards in one place
          </h2>
          <p class="mb-5 p-text-style">
            We alow you to connect diferent bank cards, in one system, in which
            you will have the opportunity to manage to financial data and track
            the statistics of your costs.
          </p>
          <a class="button-gradient" href="#">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
