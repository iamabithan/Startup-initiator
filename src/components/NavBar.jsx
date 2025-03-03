import React from "react";
import logo from "../assets/icons/Logo.svg";
import "./NavBar.css";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} className="logo" />
      <div className="button-container">
        <div>FAQ</div>
        <div>Pricing</div>
        <div>Support</div>
      </div>
      <Button text={"Get Started"} style={{height:'28px' , fontSize:'12px'}}/>
    </div>
  );
};

export default NavBar;
