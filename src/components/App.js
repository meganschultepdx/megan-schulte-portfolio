import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./Home";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header />
        <Router>
          <Home path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
