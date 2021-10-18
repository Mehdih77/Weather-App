import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import WeatherProvider from "./Context/WeatherProvider";

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <Router>
        <App />
      </Router>
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
