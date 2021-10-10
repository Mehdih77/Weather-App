import React from "react";
import "./displayweather.css";

function DisplayWeather({data}) {

  const iconurl = "http://openweathermap.org/img/w/" + `${!data.cod !== 404 ? data.weather[0].icon : null}` + ".png";

  return (
    <div className="displayweather">
      {data ? (
        <React.Fragment>
          <div className="maincard">
            <div>
              <span className="cardtitle">
                {data.name} , {data.sys.country}
              </span>
              <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
              </span>
              <span className="weather-main">{data.weather[0].description}</span>
            </div>
            <div>
              <h1>
                {Math.floor(data.main.temp - 273.15)}
                <sup>o</sup>
              </h1>
              <img className="weather-icon" src={iconurl} alt=""/>
            </div>
          </div>
          <div className="weatherdetails">
              <table>
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
                    <span>{data.main.humidity} %</span>
                  </td>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                  <td>
                    <h4>Visibility</h4>
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
                <tr>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                </tr>
              </table>
            </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>Error 404!</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
