import React from "react";

import "./Css/App.css";

import { Router } from "./components/Router";
import { Navbar } from "./components/Header";
import { Footer } from "./components/Footer";
import { HamburgerMenu } from "./components/HamburgerMenu";

function App() {
  return (
    <div>
      <Navbar />
      <div className="appmenu">
        <HamburgerMenu />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
