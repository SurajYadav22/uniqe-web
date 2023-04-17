import React from "react";
import "../Css/Header.css";
import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
  return (
    <div className="headerContainer">
      {/* <HamburgerMenu /> */}
      <nav className="header">
        <img
          src="https://brandradiator.com/images/BR-logo1.png"
          width="100px"
          height="20px"
        />
      </nav>
    </div>
  );
};
