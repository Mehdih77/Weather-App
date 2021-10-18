import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import WeatherProvider from "./Context/WeatherProvider";
import SettingProvider from "./Context/SettingContext/SettingProvider";

ReactDOM.render(
  <React.StrictMode>
    <SettingProvider>
    <WeatherProvider>
      <Router>
        <App />
      </Router>
    </WeatherProvider>
    </SettingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
