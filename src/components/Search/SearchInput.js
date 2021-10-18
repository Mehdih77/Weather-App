import { useState } from "react";
import "./SearchInput.css";
import { useWeatherDispatch } from "../../Context/WeatherProvider";
import { fetchWeatherAll, fetchWeatherOne } from "../../api/fetchWeather";
import { useSettingContext } from "../../Context/SettingContext/SettingProvider";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const dispatch = useWeatherDispatch();
  const { englishLanguage } = useSettingContext();

  async function weatherData(e) {
    e.preventDefault();
    const data = await fetchWeatherOne(query);
    const allData = await fetchWeatherAll(query);
    dispatch({
      type: "GET_ONEWEATHER",
      payload: data,
    });
    dispatch({
      type: "GET_ALLWEATHER",
      payload: allData,
    });
    setQuery("");
  }

  return (
    <form>
      <label>
        <input
          type="text"
          placeholder={englishLanguage ? "City" : "جستجوی نام شهر(انگلیسی)"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
        <button className="weather-btn" onClick={weatherData}>
          <i className="fas fa-search"></i>
        </button>
      </label>
    </form>
  );
}
