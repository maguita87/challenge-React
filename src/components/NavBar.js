import React from "react";
import "./styles/Main.css";
import "./styles/NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Router>
      <div className="container">
        <div className="menu-desktop">
          <div className="d-flex justify-content-between pt-4">
            <div>
              <Link to="#">
                <h1 className="brand-logo">Oniblue</h1>
              </Link>
            </div>
            <div className="menu d-flex">
              <nav className="nav-style">
                <Link to="#">About</Link>
                <Link to="#">Products</Link>
                <Link to="#">Pricing</Link>
                <Link to="#">Blog</Link>
                <Link to="#">Contact</Link>
              </nav>
              <div className="buttons">
                <Link className="button-blue" to="#">
                  Login
                </Link>
                <Link className="button-white" to="#">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hamburguer-overflow">
          <div className="pt-4 d-flex justify-content-between">
            <div className="text-light text-left">
              <Link to="#">
                <h1 className="brand-logo">Oniblue</h1>
              </Link>
            </div>
            <div className="text-light">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default NavBar;
