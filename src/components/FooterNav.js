import React from "react";
import "./styles/Footer.css";
const FooterNav = (props) => {
  return (
    <div className="footer-links mb-5">
      <h3>{props.title}</h3>
      <ul className="list">
        {props.links.map((link) => (
          <li className="mb-2 liStyle">{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
