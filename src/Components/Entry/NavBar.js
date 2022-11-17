import React from "react";
import logo from "../../images/palm.png";

import "../../styles/Navbar.css";

export const NavBar = () => {
  return (
    <div className="nav">
      <a href="/">
        <img src={logo} alt="logo" style={{ width: 30, padding:5}} />
      </a>
      <h3>Field Notebook</h3>
    </div>
  );
};
