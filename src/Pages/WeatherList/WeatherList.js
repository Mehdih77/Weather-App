import { useWeatherState } from "../../Context/WeatherProvider";
import "./WeatherList.css";
import rain from '../../images/rain.png';

export default function WeatherList() {
  const { allWeather: data } = useWeatherState();

  const showList = data.list?.map((item) => {
    const iconurl =
      "http://openweathermap.org/img/w/" + `${item.weather[0]?.icon}` + ".png";

    return (
      <div className="weather_wrapper">
        <div className="weather_wrapper_time">
          <p>{item.dt_txt.split(",").join().slice(0, 10)}</p>
          <p>{item.dt_txt.split(",").join().slice(10, 16)}</p>
        </div>
        <div className="weather_wrapper_temp">
          {Math.floor(item.main.temp)}
          <sup>
            o <span>C</span>
          </sup>
        </div>
        <div className="weather_wrapper_img">
          <img src={iconurl} alt={item.weather[0].description} />
        </div>
      </div>
    );
  });

  return <section className='weather_list_page'>
      <h3>Forecast Report</h3>
      <img className='weather_list_page_img' src={rain} />
      {showList}
      </section>;
}
