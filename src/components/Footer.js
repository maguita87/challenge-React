import React from "react";
import FooterNav from "./FooterNav";
import ContactUs from "./ContactUs";
import FooterBar from "./FooterBar";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="links-container">
        <div className="col-xs-12 col-sm-6 col-md footer-link">
          <FooterNav
            title="Company"
            links={["About Us", "Careers", "Support"]}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md footer-link">
          <FooterNav title="Product" links={["Features", "Pricing", "Login"]} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md footer-link">
          <FooterNav title="Resources" links={["Help", "Blog", "Status"]} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md footer-link">
          <FooterNav
            title="Perfomance"
            links={["Media", "Reach", "Creative"]}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md footer-link">
          <ContactUs
            title="Contact Us"
            links={["+44 (0) 77 2123 9241", "hello@onebluesocial.com"]}
          />
        </div>
      </div>
      <div className="text-left">
        <FooterBar />
      </div>
    </div>
  );
};

export default Footer;
