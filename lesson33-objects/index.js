// MINIMUM
/*
 * 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
 * обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для
 * роботи з цим об'єктом:
 * 1.1 Метод, який виводить на екран інформацію про автомобіль.
 * 1.2 Додавання ім’я водія у список
 * 1.3 Перевірка водія на наявність його ім’я у списку
 * 1.4 Підрахунок необхідного часу та кількості палива для подолання переданої відстані з
 * середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
 */

const auto = {
  brand: "Mazda",
  model: 6,
  year: 2022,
  avgSpeed: 90,
  fuelTank: 55,
  fuelConsumption: 8,
  drivers: ["Steve", "Kevin", "Georg"],
  displayCarInfo: () => {
    for (let key in auto) {
      typeof auto[key] !== "function" ? console.log(`${key}: ${auto[key]}`) : null;
    }
  },
  addDriverToList: function (name) {
    switch (true) {
      case !isNaN(name) || typeof name !== "string":
        console.log("Enter correct name");
        break;
      case typeof name === "string" && name.length > 1:
        this.drivers.push(name);
        break;
    }
  },
  checkDriver: function (name) {
    const answer = this.drivers.includes(name)
      ? console.log(`Yes, ${name} is present in the list of drivers`)
      : console.log(`There is no such name.`);
    return answer;
  },
  calcHoursAndFuel: function (distance) {
    const hoursToGetTo = +(distance / this.avgSpeed).toFixed(2);
    hoursToGetTo > 4 ? hoursToGetTo + 1 : hoursToGetTo;
    const requiredFuel = (this.fuelConsumption * distance) / 100;
    return console.log(hoursToGetTo, requiredFuel);
  },
};

auto.displayCarInfo();

auto.addDriverToList("Mark");
console.log(auto.drivers);

auto.checkDriver("Test");
auto.calcHoursAndFuel("620");

// NORMA
/*
 * Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції
 * для роботи з цим об'єктом:
 * 1. Для виведення часу на екран.
 * 2. Зміни часу на передану кількість секунд.
 * 3. Зміни часу на передану кількість хвилин.
 * 4. Зміни часу на передану кількість годин.
 * 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу,
 * може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд,
 * то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити
 * можливість того що користувач може передати 150 секунд, або 75 хвилин.
 */

const hours = {
  hours: 23,
  minutes: 20,
  seconds: 30,
  displayTime: () => {
    let arrayOfValues = Object.values(hours);

    let arrayOfTime = [];
    arrayOfValues.forEach((item) => {
      if (typeof item !== "function") {
        arrayOfTime.push(item);
      }
    });
    console.log(`Display time: ${arrayOfTime.join(":")}`);
  },

  displayTime2: () => {
    console.log(`Display time-2: ${hours.hours}:${hours.minutes}:${hours.seconds}`);
  },

  changeSeconds: function (value) {
    // decompose the input value into hours, minutes, seconds
    const addHourValue = Math.floor(value / 3600);
    const addMinValue = Math.floor(value / 60);
    const addSecValue = value % 60;

    const currentPlusAddSec = this.seconds + addSecValue;
    this.seconds = currentPlusAddSec % 60;

    const currentPlusAddMin = this.minutes + addMinValue + Math.floor(currentPlusAddSec / 60);
    this.minutes = currentPlusAddMin % 60;

    const currentPlusAddHour = this.hours + addHourValue + Math.floor(currentPlusAddMin / 60);
    this.hours = currentPlusAddHour % 24;
  },

  changeMinutes: function (value) {
    const addHourValue = Math.floor(value / 60);
    const addMinValue = value % 60;

    const currentPlusAddMin = this.minutes + addMinValue;
    this.minutes = currentPlusAddMin % 60;

    const currentPlusAddHour = this.hours + addHourValue + Math.floor(currentPlusAddMin / 60);
    this.hours = currentPlusAddHour % 24;
  },

  changeHours: function (value) {
    const currentPlusAddHour = this.hours + value;
    this.hours = currentPlusAddHour % 24;
  },
};

hours.displayTime();
hours.displayTime2();

hours.changeSeconds(4250);
hours.displayTime();

hours.changeMinutes(70);
hours.displayTime();

hours.changeHours(30);
hours.displayTime();
