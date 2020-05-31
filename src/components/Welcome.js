import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import "./styles/Welcome.css";
import "./styles/Intro.css";
const Welcome = () => {
  return (
    <div className="bg-gradient welcome-container">
      <NavBar />
      <Intro />
      <div>
        <div className="img-welcome">
          <img alt='welcome'className="w-100" src={require("./img/img2.png")}></img>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
