//* MINIMUM
/*
TODO 1. Напиши всі можливі варіанти створення функцій.
*/
function funcDeclaration() {
  console.log("function declration");
}

const funcExpression = function () {
  console.log("function expression");
};

const arrowFunc = (a, b) => a + b;

/*
TODO 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
*/
const quantityOfArguments = function () {
  console.log(`${arguments.length} arguments are passed to the function`);
};

/* 
TODO 3. Напиши функцію, яка приймає 2 числа і повертає : 
* -1, якщо перше число менше, ніж друге; 
* 1 - якщо перше число більше, ніж друге; 
* 0 - якщо числа рівні.
*/

const compareTwoNumbers = (numberOne, numberTwo) => {
  switch (true) {
    case !numberOne || !numberTwo:
    case isNaN(numberOne) || isNaN(numberTwo):
      return "Please pass two numbers as an arguments to function";
    case numberOne < numberTwo:
      return -1;
    case numberOne > numberTwo:
      return 1;
    case numberOne === numberTwo:
      return 0;
  }
};

/* 
TODO 4. Напиши функцію, яка обчислює факторіал переданого їй числа. 
*/
const calcFactorial = (factorial) => {
  if (!factorial || isNaN(factorial)) {
    return `${factorial} is not a number. Please pass the number.`;
  } else {
    for (let i = factorial - 1; i > 0; i--) {
      console.log(`${factorial} * ${i} = ${factorial * i}`);
      factorial *= i;
    }
  }
  return factorial;
};

/* 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/
const joinNumbers = (firstNumber = 1, secondNumber = 1, thirdNumber = 1) => {
  if (
    !firstNumber ||
    !secondNumber ||
    !thirdNumber ||
    isNaN(firstNumber) ||
    isNaN(secondNumber) ||
    isNaN(thirdNumber)
  ) {
    return "Please provide tree numbers in correct way.";
  } else if (
    firstNumber.toString().length > 1 ||
    secondNumber.toString().length > 1 ||
    thirdNumber.toString().length > 1
  ) {
    return "Every number can have only one digit and have to be integer (not float).";
  } else {
    const oneNumber = `${firstNumber}${secondNumber}${thirdNumber}`;
    return oneNumber;
  }
};

console.log(joinNumbers(1, " ", 3));

/* 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/
const calcAreaOfRectangle = (length, width) => {
  switch (true) {
    case typeof length !== "number" || typeof width !== "number":
      return "Please provide two arguments - 'length' and 'width' as a numeric characters.";
    case length <= 0 || width <= 0:
      return "Please provide 'length' and 'width' in correct format - positive numbers in digit.";
    case typeof length === "number" && typeof width === "number":
      return `Area of rectangle is ${length} * ${width} = ${length * width}.`;
    default:
      console.log("There is nothing to show");
  }
};

console.log(calcAreaOfRectangle());
console.log(calcAreaOfRectangle(12, 15));
console.log(calcAreaOfRectangle(12, "25"));
console.log(calcAreaOfRectangle(12, -15));
console.log(calcAreaOfRectangle(12));
console.log(calcAreaOfRectangle(12, true));
console.log(calcAreaOfRectangle(12, false));
console.log(calcAreaOfRectangle(12, " "));
console.log(calcAreaOfRectangle(12, ""));
console.log(calcAreaOfRectangle(12, 0));

//! harder (use closures )
// write function that base on year of birth  received will return age,
// the year must be different each time i call the functiomn
// 1. check if correct argument is provided
// 2. check if argument is provided
// 3. for person older than 150 years return message irrelevnt number
// 4. if all good return message your age is ....

const calcAge = (currentYear) => {
  return (yearOfBirth) => {
    // if (isNaN(yearOfBirth) || !yearOfBirth || yearOfBirth === " ")
    if (typeof yearOfBirth !== "number") {
      return "Please enter valid value of year of your birth";
    }
    const age = currentYear - Number(yearOfBirth);

    if (age > 150) {
      return "irrelevant number";
    }

    return `Your are <${age}> years old`;
  };
};

const calcYourAge = calcAge(2023);
console.log(calcYourAge(2000));
console.log(calcYourAge("1988"));
console.log(calcYourAge(1300));
console.log(calcYourAge(-2000));
console.log(calcYourAge(false));
console.log(calcYourAge(true));
console.log(calcYourAge(0));
console.log(calcYourAge(-0));
console.log(calcYourAge(+0));
console.log(calcYourAge(""));
console.log(calcYourAge(" "));
console.log(calcYourAge(null));

// ! NORMA
/*
 * 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
 * Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
 */

function isPerfect(number) {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    return "Це досконале число.";
  } else {
    return "Це не досконале число.";
  }
}
console.log(isPerfect(28));
