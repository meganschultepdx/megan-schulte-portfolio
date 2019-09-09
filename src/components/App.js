import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Navbar />
        <Router>
          <Home path="/" />
          <Projects path="/projects" />
          <Contact path="/contact" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
