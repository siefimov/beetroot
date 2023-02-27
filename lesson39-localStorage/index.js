import { getWeather, currentWeather } from "./api.js";

getWeather();

document.querySelector(".temp__data").innerHTML = `${currentWeather[0]}C&#176`;
document.querySelector(".description__data").innerHTML = currentWeather[1];
document.querySelector(".pressure__data").innerHTML = currentWeather[2];
document.querySelector(".speed__data").innerHTML = currentWeather[3];

setInterval(() => {
  getWeather();
}, 7200000);

// ****************
// * date and time
// ****************
let date = new Date();
document.querySelector(".date-day").innerHTML = `
  ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()},
`;

setInterval(currentTime, 1000);
function currentTime() {
  let d = new Date();
  document.querySelector(".date-time").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
