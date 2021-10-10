import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState({});

  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "bcda9a156c4a2107c473949d17b8dc15";

  async function weatherData(e) {

    e.preventDefault();

    if (!form.city) {
      alert("Add values");
    } else {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
      )
        .then( response => response.json())
        .then( data => setWeather({data: data}));
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })

  };

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={handleChange}
        />
        <button className="getweather" onClick={weatherData}>
          Submit
        </button>
      </form>

      {weather.data ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
