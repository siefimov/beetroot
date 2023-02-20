/*
 * Створити HTML-сторінку для відображення/редагування тексту. При відкритті
 * сторінки текст відображається за допомогою тега div. При натисканні
 * Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер
 * можна редагувати. При натисканні Ctrl + S, замість textarea з'являється
 * div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням
 * для цих поєднань клавіш.
 */

const divBox = document.querySelector(".entered-text");
const textarea = document.getElementById("textarea");

textarea.style.display = "none";

const toggleDivTextarea = (e) => {
  if (e.key === "e" && e.ctrlKey) {
    divBox.style.display = "none";
    textarea.style.display = "block";
    textarea.value = divBox.textContent;
    e.preventDefault();
  }
  if (e.key === "s" && e.ctrlKey) {
    divBox.textContent = textarea.value;
    divBox.style.display = "block";
    textarea.style.display = "none";
    e.preventDefault();
  }
};

document.addEventListener("keydown", toggleDivTextarea);

/*
 * Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно
 * відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа,
 * а не як рядки.
 */

let colPrev = -1; //used to determine if the same column is clicked again

const sortBy = (c) => {
  console.log(c.target);

  const rows = document.querySelector("table").rows.length; // num of rows
  const columns = document.querySelector("table").rows[0].cells.length; // num of columns

  const arrTable = [...Array(rows)].map(() => Array(columns)); // create an empty 2d array

  for (let row = 0; row < rows; row++) { // cycle through rows
    for (let col = 0; col < columns; col++) { // cycle through columns
      // assign the value in each row-column to a 2d array by row-column
      arrTable[row][col] = document.querySelector("table").rows[row].cells[col].innerHTML;
    }
  }

  th = arrTable.shift(); // remove the header row from the array, and save it

  if (c !== colPrev) { // different column is clicked, so sort by the new column
    arrTable.sort((a, b) => {
      if (a[c] === b[c]) {
        return 0;
      } else {
        return a[c] < b[c] ? -1 : 1;
      }
    });

    // sort number data
    arrTable.sort((a, b) => {
      if (typeof +a[c] === "number" && typeof +b[c] === "number") {
        return +a[c] - +b[c];
      }
    });
  } else {
    arrTable.reverse(); // if the same column is clicked then reverse the array
  }

  colPrev = c; // save in previous c

  arrTable.unshift(th); // put the header back in to the array

  // cycle through rows-columns placing values from the array back into the html table
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      document.querySelector("table").rows[row].cells[col].innerHTML = arrTable[row][col];
    }
  }
};

// calculate the average price of products in each category,
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const myFunc = (array) => {
  const electronicsPrices = [];
  const clothesPrices = [];

  array.forEach((product) => {
    product.category === "Electronics"
      ? electronicsPrices.push(product.price)
      : clothesPrices.push(product.price);
  });
  const aveElPrice = electronicsPrices.reduce((acc, cur) => acc + cur) / electronicsPrices.length;
  const aveClothesPrice = clothesPrices.reduce((acc, cur) => acc + cur) / clothesPrices.length;
  console.log(aveElPrice);
  console.log(aveClothesPrice);
};
myFunc(products);

// create a form with submit
/*when I click submit i could see either in alert or console all data that user has inserted
FormData
Name: data
email: jejrj@gmail.com
passsword: asffdfds
*/

const form = document.querySelector("#form");

const showUsersData = (e) => {
  e.preventDefault();

  const allInputs = document.querySelectorAll("input");
  console.log(typeof allInputs);

  [...allInputs.values()].forEach((input) => {
    const span = document.createElement("span");
    span.innerText = `${input.name}: ${input.value}`;
    input.insertAdjacentElement("afterend", span);

    console.log(`${input.name}: ${input.value}`);
  });
};

form.addEventListener("submit", showUsersData);

// handler for clearing input's data when button "clear" is clicked
document.querySelector('button[type="button"]').addEventListener("click", (e) => {
  const allInputs = document.querySelectorAll("input");
  [...allInputs.values()].forEach((input) => {
    input.value = "";
    input.nextSibling.remove();
  });
});
