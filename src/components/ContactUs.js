import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles/Footer.css";
const ContactUs = (props) => {
  const logoIcons = [
    <Link key="0" to="#">
      <FacebookIcon className="social-icons" />
    </Link>,
    <Link key="1" to="#">
      <TwitterIcon className="social-icons" />
    </Link>,
    <Link key="2" to="#">
      <LinkedInIcon className="social-icons" />
    </Link>,
    <Link key="3" to="#">
      <YouTubeIcon className="social-icons" />
    </Link>,
    <Link key="4" to="#">
      <RadioButtonUncheckedIcon className="social-icons" />
    </Link>,
  ];
  return (
    <Router>
      <div className="footer-links mb-5">
        <h3>Contact Us</h3>
        <ul className="list">
          <li className="mb-2 liStyle font-italic">+44 (0) 77 2123 9241</li>
          <li className="mb-2 liStyle font-italic">hello@onebluesocial.com</li>
          <li className="mb-2 liStyle">{logoIcons}</li>
        </ul>
      </div>
    </Router>
  );
};

export default ContactUs;
