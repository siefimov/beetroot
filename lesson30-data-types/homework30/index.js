/* ==== MINIMUM ==== */
// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const sum = 0.1 + 0.2;
const mathCorrectSum = +sum.toFixed(1);
console.log(mathCorrectSum);

/* 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
      добийся математично правильної відповіді. */
const one = "1";
const two = 2;
const addOneTwo = +one + two;
console.log(addOneTwo);

/* 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів 
      розміром в 820 Мб поміщається на флешку.*/
const sizeOfFlashDrive = prompt("Enter the size of the flash drive in GB.");
const convertedSizeOfFlashDrive = +sizeOfFlashDrive * 1024;
const sizeOneFile = 820;
const quantityFiles = Math.floor(convertedSizeOfFlashDrive / sizeOneFile);
alert(
  `Flash drive in ${sizeOfFlashDrive}GB can place ${quantityFiles} files with a size of 820MB each.`
);

/* ==== NORMA ==== */
/* 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/
const amountOfMoney = prompt("Enter amount of your money");
const priceOneChocolate = prompt("Enter the price of the one chocolate");
const quantityChocolates = Math.floor(amountOfMoney / priceOneChocolate);
const totalAmountForChocolates = (priceOneChocolate * quantityChocolates).toFixed(2);
const changeMoney = (amountOfMoney - totalAmountForChocolates).toFixed(2);
alert(`You can buy ${quantityChocolates} chocolate(-s) and your change will be ${changeMoney}`);

/* 2. Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/
const usersNumber = prompt("Enter any three-digit number");
const firstNumber = Math.floor(usersNumber / 100);
const secondNumber = Math.floor((usersNumber % 100) / 10);
const lastNumber = usersNumber % 10;
const numberBackword = lastNumber.toString() + secondNumber + firstNumber;
alert(`Number ${usersNumber} backword is ${numberBackword}.`);

/* ==== MAXIMUM ==== */
/* 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.*/
const termOfDeposit = 2;
const depositInterestRate = 5;
const depositAmount = prompt("Enter your deposit amount");
const interestOnDeposit = (
  ((depositAmount * depositInterestRate) / 100 / 12) *
  termOfDeposit
).toFixed(2);
alert(
  `Your interest on deposit amount ${depositAmount} for ${termOfDeposit} months will be ${interestOnDeposit}`
);

// 2. Що повернуть вирази:
console.log(2 && 0 && 3); //0

console.log(2 || 0 || 3); //2

console.log((2 && 0) || 3); //3
