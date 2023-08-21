import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Router";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Routes />
      <App />
    </React.StrictMode>
  </Router>
);
