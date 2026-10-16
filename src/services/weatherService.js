import {
  formatDate,
  formatDay,
  formatHour,
  formatTime,
  formatWeekday,
} from "../utils/dateTime";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OWM_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (cityName) => {
  const currentResponse = await axios.get(`${BASE_URL}/weather`, {
    params: { q: cityName, units: "metric", appid: API_KEY },
  });
  const current = currentResponse.data;

  const forecastResponse = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: cityName, units: "metric", appid: API_KEY },
  });
  const forecastList = forecastResponse.data.list;

  const hourly = forecastList.slice(0, 8).map((item) => ({
    label: formatHour(item.dt),
    temp: Math.round(item.main.temp),
  }));

  const weekly = forecastList
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .map((item) => ({
      day: formatDay(item.dt),
      condition: item.weather[0].description,
      max: Math.round(item.main.temp_max),
      min: Math.round(item.main.temp_min),
    }));

  return {
    id: String(current.id),
    city: current.name,
    country: current.sys.country,
    temp: Math.round(current.main.temp),
    condition: current.weather[0].description,
    time: formatTime(current.dt, current.timezone),
    date: formatDate(),
    weekday: formatWeekday(),
    feelsLike: Math.round(current.main.feels_like),
    min: Math.round(current.main.temp_min),
    max: Math.round(current.main.temp_max),
    humidity: current.main.humidity,
    pressure: current.main.pressure,
    wind: current.wind.speed,
    visibility:
      current.visibility >= 10000
        ? "Unlimited"
        : `${current.visibility / 1000} km`,
    hourly: hourly,
    weekly: weekly,
    favorite: false,
  };
};

export const getWeatherForCities = async (cityNames) => {
  const cities = [];
  for (const name of cityNames) {
    const city = await getWeather(name);
    cities.push(city);
  }
  return cities;
};
