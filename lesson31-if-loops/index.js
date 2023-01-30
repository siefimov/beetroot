//* ===== Minimum =====
/* 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), 
підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач 
можливість введення невірних даних.*/
const age = prompt("Enter your age");

if (age === null || age === " " || age === "") {
  console.log("Please enter your age in numbers");
} else {
  Number(age);
  switch (true) {
    case age >= 0 && age <= 11:
      console.log("You are children");
      break;
    case age >= 12 && age <= 17:
      console.log("You are teenager");
      break;
    case age >= 18 && age <= 59:
      console.log("You are adult");
      break;
    case age >= 60:
      console.log("You are pensioner");
      break;
    default:
      console.log("unrecognized");
  }
}

/* 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований 
на цій клавіші (1 !, 2 @, 3 # і т. д).*/
let number = prompt("Enter any number from 0 to 9");

if (number === null || number === " " || number === "") {
  console.log(`${number} is not a number. Please enter number from 0 to 9.`);
} else {
  number = +number;
  switch (number) {
    case 0:
      console.log(")");
      break;
    case 1:
      console.log(`! - special character that is located on keyboard key 1`);
      break;
    case 2:
      console.log("@ - special character that is located on keyboard key 2");
      break;
    case 3:
      console.log("# - special character that is located on keyboard key 3");
      break;
    case 4:
      console.log("$ - special character that is located on keyboard key 4");
      break;
    case 5:
      console.log("% - special character that is located on keyboard key 5");
      break;
    case 6:
      console.log("^ - special character that is located on keyboard key 6");
      break;
    case 7:
      console.log("& - special character that is located on keyboard key 7");
      break;
    case 8:
      console.log("* - special character that is located on keyboard key 8");
      break;
    case 9:
      console.log(`( - special character that is located on keyboard key 9`);
      break;
    default:
      console.log("unrecognized");
  }
}

/* 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні. */
const userArray = [20, 40, 60];
// const userArray = [23, 43, 45, 65, 67, 76, 78, 87, 89, 98];
let sumUserArray = 0;
for (let i = 0; i < userArray.length; i++) {
  sumUserArray += userArray[i];
}
console.log(`The sum of all numbers from the range is equal ${sumUserArray}`);

//* ==== NORMA ====
/* 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/

const userAmount = +prompt("Enter amount for purchasing.");
let discountPrice;

switch (true) {
  case userAmount >= 200 && userAmount <= 299:
    discountPrice = userAmount - userAmount * 0.03;
    console.log(`Your discount price is ${discountPrice}`);
    break;
  case userAmount >= 300 && userAmount <= 499:
    discountPrice = userAmount - userAmount * 0.05;
    console.log(`Your discount price is ${discountPrice}`);
    break;
  case userAmount >= 500:
    discountPrice = userAmount - userAmount * 0.07;
    console.log(`Your discount price is ${discountPrice}`);
    break;
  default:
    console.log("Your discount is zero.");
}

/* 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/

let numbers = "";
let userNumber;
let positiveNumbers = 0;
let negativeNumbers = 0;
let zero = 0;
let odd = 0;
let even = 0;

for (let i = 1; i <= 10; i++) {
  userNumber = prompt(`Enter ${i} number`);

  if (userNumber === null || userNumber === " " || userNumber === "" || isNaN(+userNumber)) {
    console.log(`"${userNumber}" is not a number. Please enter number.`);
  } else {
    numbers += userNumber + ", ";
    switch (true) {
      case Math.sign(+userNumber) === 1:
        positiveNumbers++;
        break;
      case Math.sign(+userNumber) === -1:
        negativeNumbers++;
        break;
      case Math.sign(+userNumber) === 0 || Math.sign(+userNumber) === -0:
        zero++;
        break;
      default:
        console.log("unrecognized");
    }

    if (+userNumber != 0) {
      if (+userNumber % 2) {
        odd++;
      } else {
        even++;
      }
    }
  }
}

console.log(`You enter: ${numbers}`);
console.log(`positive numbers: ${positiveNumbers} units`);
console.log(`negative numbers: ${negativeNumbers} units`);
console.log(`zero numbers: ${zero} units`);
console.log(`even numbers: ${even} units`);
console.log(`odd numbers: ${odd} units`);

/* 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити 
наступний день? » і так до тих пір, поки користувач натискає OK.*/
let weekDay = "";
do {
  weekDay = prompt("Week Day. Do you want to see nexr day?");
} while (weekDay != null);

console.log(weekDay);

//* ====== MAXIMUM ======
/* 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити 
на числа від 1 до 10.*/
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/* 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість 
переходу на наступний місяць, рік, а також високосний рік. */
let userDay = +prompt("Enter day:");
let userMonth = +prompt("Enter month in digit:");
let userYear = +prompt("Enter year:");
let nextDay = "";
console.log(`You entered ${userDay}.${userMonth}.${userYear}`);

// for february
if (userMonth === 2) {
  if (((0 == userYear % 4 && 0 != userYear % 100) || 0 == userYear % 400) && userDay === 29) {
    userDay = 01;
    userMonth = 03;
  } else {
    userDay = userDay + 1;
  }
}

// for december
switch (true) {
  case userDay === 31 && userMonth === 12:
    userDay = 01;
    userMonth = 01;
    ++userYear;
    break;
  case userDay != 31 && userMonth === 12:
    ++userDay;
    break;
  default:
  // console.log("it is not a december");
}

// for months with 31 days except december
switch (true) {
  case userDay === 31 && userMonth === 1:
  case userDay === 31 && userMonth === 3:
  case userDay === 31 && userMonth === 5:
  case userDay === 31 && userMonth === 7:
  case userDay === 31 && userMonth === 8:
  case userDay === 31 && userMonth === 10:
    userDay = 01;
    ++userMonth;
    break;
  case userDay != 31 && userMonth === 1 && userDay != 1:
  case userDay != 31 && userMonth === 3 && userDay != 1:
  case userDay != 31 && userMonth === 5:
  case userDay != 31 && userMonth === 7:
  case userDay != 31 && userMonth === 8:
  case userDay != 31 && userMonth === 10:
    ++userDay;
    break;
  default:
  // console.log("it is not a month with 31 days");
}

// for months with 30 days
switch (true) {
  case userDay === 30 && userMonth === 4:
  case userDay === 30 && userMonth === 6:
  case userDay === 30 && userMonth === 9:
  case userDay === 30 && userMonth === 11:
    userDay = 01;
    ++userMonth;
    break;
  case userDay != 30 && userMonth === 4:
  case userDay != 30 && userMonth === 6:
  case userDay != 30 && userMonth === 9:
  case userDay != 30 && userMonth === 11:
    ++userDay;
    break;
  default:
  // console.log("it is not a month with 30 days");
}

nextDay = `${userDay}.${userMonth}.${userYear}`;
console.log(`nextDay is ${nextDay}`);
