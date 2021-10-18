import React from "react";
import { useWeatherState } from "../../Context/WeatherProvider";
import "./displayweather.css";

function DisplayWeather() {

  const {oneWeather: data} = useWeatherState()

  const iconurl =
    "http://openweathermap.org/img/w/" +
    `${data.cod === 200 ? (data.weather[0]?.icon) : null}` +
    ".png";

  return (
    <>
    <div className="displayweather">
      {data && data.weather ? (
        <React.Fragment>
          <div className="maincard">
            <div className="maincard_weather_image">
              <span className="weather-main">
                {data?.weather[0]?.description}
              </span>
              <img className="weather-icon" src={iconurl} alt="weather" />
            </div>
            <div className="maincard_weather_desc">
              <h1>
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
              </h1>
              <span className="cardtitle">
                {data.name} , {data.sys.country}
              </span>
            </div>
          </div>
          <div className="weatherdetails">
            <table>
              <tr>
                <td>
                  <span>{data.main.humidity} %</span>
                </td>
                <td>
                  <h4>Humidity</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    {Math.floor(data.main.temp_max - 273.15)}/
                    {Math.floor(data.main.temp_min - 273.15)}
                  </span>
                </td>
                <td>
                  <h4>High/Low</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                </td>
                <td>
                  <h4>Wind</h4>
                </td>
              </tr>
            </table>
          </div>
        </React.Fragment>
      ) : null}
    </div>
    </>
  );
}

export default DisplayWeather;
