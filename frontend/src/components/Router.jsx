import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Admin } from "../pages/Admin";
import { About } from "../pages/About";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/contact" element={<Contact />}>
        Contact
      </Route>
      <Route path="/admin" element={<Admin />}>
        Admin
      </Route>
      <Route path="/about" element={<About />}>
        About
      </Route>
    </Routes>
  );
};
