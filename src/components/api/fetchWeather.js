import axios from "axios";

const APIKEY = "bcda9a156c4a2107c473949d17b8dc15";

export const fetchWeather = async(query) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKEY}`)

    return data;
}