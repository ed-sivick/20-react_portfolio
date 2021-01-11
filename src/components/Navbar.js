import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand mb-1 h1" href="#">
        <span className="navbar-brand mb-1 h1">Edward Sivick</span>
      </a>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://ed-sivick.github.io/16-updated_portfolio/webDev.html">
              Web Developer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://ed-sivick.github.io/16-updated_portfolio/mechEng.html">
              Mechanical Engineer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
