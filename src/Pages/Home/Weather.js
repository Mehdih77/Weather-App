import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import night from '../../images/night.jpg';
import sunset from '../../images/sunset.jpg';
import sunrise from '../../images/sunrise.jpg';
import SearchInput from "../../components/Search/SearchInput";

function Weather() {

  // change background image by Clock Time
  const clock = new Date().toLocaleTimeString('en-US',{ hour12: false,hour: '2-digit' });
  let bgPoster;
  if ( 20 < clock || clock < 6) {
    bgPoster = night
  };
  if( clock < 17) {
    bgPoster = sunrise
  };
  if( 17 < clock < 20 ){
    bgPoster = sunset
  };
  
  return (
    <section style={{backgroundImage:`url(${bgPoster})`}} className="weather">
      <SearchInput />
        <div>
          <DisplayWeather />
        </div>
    </section>
  );
}

export default Weather;
