import React from "react";
import "../Css/HamburgerMenu.css";
// import { slide as Menu } from "react-burger-menu";

import { bubble as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

// import { elastic as Menu } from "react-burger-menu";

export const HamburgerMenu = () => {
  return (
    <Menu>
      <NavLink className="menu-item" to="/">
        Home Page
      </NavLink>
      <NavLink className="menu-item" to="/about">
        About Us
      </NavLink>
      <NavLink className="menu-item" to="/contact">
        Contact Us
      </NavLink>
      <NavLink className="menu-item" to="admin">
        Admin Page
      </NavLink>
    </Menu>
  );
};
