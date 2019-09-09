import React from "react";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <div>
      <Link to="/">megan schulte</Link>
      <ul>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <a href="https://github.com/meganschultepdx">github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/megan-schulte-pdx/">linkedin</a>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
