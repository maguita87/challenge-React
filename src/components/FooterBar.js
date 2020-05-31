import React from "react";
import "./styles/Footer.css";
const FooterBar = () => {
  return (
    <div className="footer-bar d-flex align-items-center">
      <div>
        <a href="#">
          <img src={require("./img/logo.png")}></img>
        </a>
      </div>
      <div className="copy-text pl-2">
        <span>All rights reserved Oniblue 2018</span>
      </div>
    </div>
  );
};

export default FooterBar;
