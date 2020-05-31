import React from "react";
import "./styles/Footer.css";
const FooterBar = () => {
  return (
    <div className="footer-bar">
      <a href="#">
        <img src={require("./img/logo.png")}></img>
      </a>
      <span className="copy-text pl-2">All rights reserved Oniblue 2018</span>
    </div>
  );
};

export default FooterBar;
