import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <a className="navbar-brand mb-1 h1" href="#">
        <span className="nav-name"> Edward Sivick</span>
      </a>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/webdev"
          className={location.pathname === "/webdev" ? "nav-link active" : "nav-link"}
        >
          Web Developer
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/mecheng"
          className={location.pathname === "/mecheng" ? "nav-link active" : "nav-link"}
        >
          Mechanical Engineer
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
