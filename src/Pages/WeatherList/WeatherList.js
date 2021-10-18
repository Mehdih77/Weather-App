import "./WeatherList.css";
import { useWeatherState } from "../../Context/WeatherProvider";
import {useSettingContext} from '../../Context/SettingContext/SettingProvider';
import rain from '../../images/rain.png';

export default function WeatherList() {
  
  const { englishLanguage } = useSettingContext();
  const { allWeather: data } = useWeatherState();

  const showList = data.list?.map((item) => {
    const iconurl =`http://openweathermap.org/img/w/${item.weather[0]?.icon}.png`;

    return (
      <div key={item.dt} className="weather_wrapper">
        <div className="weather_wrapper_time">
          <p>{item.dt_txt.split(",").join().slice(0, 10)}</p>
          <p><i className="far fa-clock"></i>{item.dt_txt.split(",").join().slice(10, 16)}</p>
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
      <h3>{englishLanguage ? "Forecast Report" : "پیش بینی هواشناسی"}</h3>
      <img className='weather_list_page_img' src={rain} alt='Forecast Report' />
      {showList}
      </section>;
}
