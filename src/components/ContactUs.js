import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import "./styles/Footer.css";
const ContactUs = (props) => {
  const logoIcons = [
    <a href='#'><FacebookIcon className="social-icons" /></a>,
    <a href='#'><TwitterIcon className="social-icons" /></a>,
    <a href='#'><LinkedInIcon className="social-icons" /></a>,
    <a href='#'><YouTubeIcon className="social-icons" /></a>,
    <a href='#'><RadioButtonUncheckedIcon className="social-icons"/></a>,
  ];
  return (
    <div className="footer-links mb-5">
      <h3>Contact Us</h3>
      <ul className="list">
        <li className="mb-2 liStyle">+44 (0) 77 2123 9241</li>
        <li className="mb-2 liStyle">hello@onebluesocial.com</li>
        <li className="mb-2 liStyle">{logoIcons}</li>
      </ul>
    </div>
  );
};

export default ContactUs;
