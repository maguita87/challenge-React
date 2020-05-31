import React from "react";
import "./styles/Welcome.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Intro = () => {
  return (
    <Router>
      <div className="container-welcome-text d-flex align-items-center">
        <div className="container">
          <div className="text-welcome pt-5 my-auto mb-5 ">
            <h2 className="title-intro">
              Combine all your credit cards in one place
            </h2>
            <p className="p-text-style">
              We alow you to connect diferent bank cards, in one system, in
              which you will have the opportunity to manage to financial data
              and track the statistics of your costs.
            </p>
            <Link className="button-gradient" to="#">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Intro;
