import React, { useState } from "react";
import {fetchWeather} from './api/fetchWeather';
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  async function weatherData(e) {
    e.preventDefault();
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery('');
  }

  return (
    <div className="weather container">
      <p className="title">Weather App</p>
      <br />
      <form>
        <label>
          <input
            type="text"
            placeholder="City"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete='off'
          />
          <button className="weather-btn" onClick={weatherData}>
            <i className="fas fa-search"></i>
          </button>
        </label>
      </form>

      {weather.main ? (
        <div>
          <DisplayWeather data={weather} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
