/* Homework Norm */

//1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let userName = prompt("Your name?");
alert(`Hello, ${userName}`);

//2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const currentYear = 2023;

let yearOfBirth = prompt("Your birth year?");
let age = currentYear - +yearOfBirth;
alert(`Your age is ${age}`);

// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let lengthOfSquare = prompt("Enter length of square");
let perimeterOfSquare = +lengthOfSquare * 4;
alert(`Perimeter of a square is ${perimeterOfSquare}`);
