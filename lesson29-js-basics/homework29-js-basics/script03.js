/* Homework Maximum */

// 1. Запитай у користувача радіус кола і виведи площу такої окружності.
const circleRadius = prompt("Enter circle radius");
// const areaOfCircle = Math.PI * circleRadius * circleRadius;
const areaOfCircle = (Math.PI * Math.pow(circleRadius, 2)).toFixed(2);
alert(`Area of circle is equal to ${areaOfCircle}`);

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const distance = prompt("Enter distance between to cities (in kilometers)");
const timeToReachPlace = prompt("Enter the desired time to reach the city (in hours)");
const speed = distance / timeToReachPlace;
alert(`To reach your desired place on time you have to move with speed ${speed} km/h`);

// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const exchangeRate = 0.92;
const amountUSD = prompt(`Enter the amount in US dollars`);
const convertedAmountEuro = (amountUSD * exchangeRate).toFixed(2);
alert(
  `${amountUSD} US dollars at the exchange rate of 0.92 is equal to ${convertedAmountEuro} euros.`
);
