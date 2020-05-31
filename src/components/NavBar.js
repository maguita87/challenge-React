import React from "react";
import "./styles/Main.css";
import "./styles/NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
const NavBar = () => {
  return (
    <div className="container">
      <div className="menu-desktop">
        <div className="d-flex justify-content-between pt-4">
          <div>
            <a href="#">
              <h1 className='brand-logo'>Oniblue</h1>
            </a>
          </div>
          <div className="menu d-flex">
            <nav className="nav-style">
              <a href="#">About</a>
              <a href="#">Products</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </nav>
            <div className="buttons">
              <a className="button-blue" href="#">
                Login
              </a>
              <a className="button-white" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hamburguer-overflow">
        <div className="pt-4 d-flex justify-content-between">
          <h5 className="text-light text-left">Oniblue</h5>
          <div className="text-light">
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
