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
        HOME
      </NavLink>
      <NavLink className="menu-item" to="/about">
        ABOUT US
      </NavLink>
      <NavLink className="menu-item" to="/contact">
        CONTACT US
      </NavLink>
      <NavLink className="menu-item" to="admin">
        ADMIN
      </NavLink>
    </Menu>
  );
};
