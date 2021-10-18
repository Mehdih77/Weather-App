import React from "react";
import Layout from "./Layout/Layout";
import Weather from "./Pages/Home/Weather";
import WeatherList from "./Pages/WeatherList/WeatherList";
import Settings from "./Pages/Settings/Settings";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Weather} />
        <Route exact path="/list" component={WeatherList} />
        <Route exact path="/settings" component={Settings} />
      </Layout>
    </Switch>
  );
}
