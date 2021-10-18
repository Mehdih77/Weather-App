import axios from "axios";

const APIKEY = "bcda9a156c4a2107c473949d17b8dc15";

export const fetchWeatherOne = async(query) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKEY}`)

    return data;
}

// get 5days/per 3clock weather forecast
export const fetchWeatherAll = async(query) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${APIKEY}`)

    return data;
}
