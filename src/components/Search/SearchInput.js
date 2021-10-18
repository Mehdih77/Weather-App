import { useState } from 'react';
import './SearchInput.css';
import {fetchWeather} from '../api/fetchWeather';
import { useWeatherDispatch } from '../../Context/WeatherProvider';


export default function SearchInput() {

    const [query, setQuery] = useState("");
    const dispatch = useWeatherDispatch();

    async function weatherData(e) {
      e.preventDefault();
      const data = await fetchWeather(query);
      dispatch({
          type: "GET_ONEWEATHER",
          payload: data
      })
      setQuery('');
    }

  
  return (
    <form>
      <label>
        <input
          type="text"
          placeholder="City"
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
