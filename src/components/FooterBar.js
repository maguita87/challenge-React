import React from "react";
import "./styles/Footer.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const FooterBar = () => {
  return (
    <Router>
      <div className="footer-bar d-flex align-items-center">
        <div>
          <Link to="#">
            <img alt="logo" src={require("./img/logo.png")}></img>
          </Link>
        </div>
        <div className="copy-text pl-2">
          <span>All rights reserved Oniblue 2018</span>
        </div>
      </div>
    </Router>
  );
};

export default FooterBar;
