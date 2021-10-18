import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import backG from '../../images/dark-bg.jfif';
import night from '../../images/night.png';
import SearchInput from "../../components/Search/SearchInput";

function Weather() {

  return (
    <div style={{backgroundImage:`url(${night})`}} className="weather">
      <SearchInput />
        <div>
          <DisplayWeather />
        </div>
    </div>
  );
}

export default Weather;
