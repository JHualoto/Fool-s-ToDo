import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
