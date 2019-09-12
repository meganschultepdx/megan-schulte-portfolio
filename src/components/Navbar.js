import React from "react";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars"></i>
      </span>

      <Link to="/" className="logo">
        megan schulte
      </Link>
      <ul className="main-nav" id="js-menu">
        <li>
          <Link to="/projects" className="nav-links">
            projects
          </Link>
        </li>
        <li>
          <a href="https://github.com/meganschultepdx" className="nav-links">
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/megan-schulte-pdx/"
            className="nav-links"
          >
            linkedin
          </a>
        </li>
        <li>
          <Link to="/contact" className="nav-links">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
