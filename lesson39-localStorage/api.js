// import { currentWeather } from "./index.js";

const _endpoint = "http://api.openweathermap.org/geo/1.0/direct?q=";
const limit = "&limit=1";
const apiKey = "&appid=dffa26ea8d14ee5e87a62d77e9c9678d";
const city = "Kyiv";

export let currentWeather = JSON.parse(localStorage.getItem("temp")) || [];

export const getWeather = () => {
  // get coordinates (latitude, longitude) by the city
  fetch(_endpoint + city + limit + apiKey)
    .then((response) => response.json())
    .then((data) => {
      // get current weather data, using the obtained coordinates of the city
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric${apiKey}`
      )
        .then((response) => response.json())
        .then((weather) => {
          currentWeather = [
            weather.main.temp,
            weather.weather[0].description,
            weather.main.pressure,
            weather.wind.speed,
          ];
          localStorage.setItem("temp", JSON.stringify(currentWeather));
          document.querySelector(".temp__data").innerHTML = `${currentWeather[0]}C&#176`;
          document.querySelector(".description__data").innerHTML = currentWeather[1];
          document.querySelector(".pressure__data").innerHTML = currentWeather[2];
          document.querySelector(".speed__data").innerHTML = currentWeather[3];
          return currentWeather;
        });
    });
};
