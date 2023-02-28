/* 1.
 * Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
 * - поле, що зберігає радіус кола;
 * - get-властивість, яке повертає радіус кола;
 * - set-властивість, що встановлює радіус кола;
 * - get-властивість, яке повертає діаметр кола;
 * - метод, що обчислює площу кола;
 * - метод, що обчислює довжину кола.
 * Продемонструй роботу властивостей і методів.
 */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  setRadius(value) {
    this.radius = value;
  }

  getRadius() {
    return this.radius;
  }

  getDiametr() {
    return this.radius * 2;
  }
  getAreaOfCircle() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
  getLengthOfCircle() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}

const circle = new Circle(12);
console.log(circle.radius);
circle.setRadius(14);
console.log(circle.radius);
console.log(circle.getDiametr());
console.log(circle.getAreaOfCircle());
console.log(`radius: ${circle.radius}, diametr: ${circle.getDiametr()}`);
console.log(circle.getLengthOfCircle());

/* 2.
Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
- поле, яке зберігає колір маркера;
- поле, яке зберігає кількість чорнил у маркері (у відсотках);
- метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, 
  доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від
простого маркера й додай метод для заправки.
Продемонструй роботу написаних методів.
*/

class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }

  getTextToPrint(text) {
    let restOfMarker = this.ink * 2;

    const lettersArray = text.split("");

    const textWithoutWhiteSpaces = text.split(" ").join("");

    const textForPrint =
      restOfMarker >= textWithoutWhiteSpaces.length
        ? text
        : text.slice(0, this.lenghToSliceText(lettersArray, restOfMarker));

    this.ink =
      restOfMarker > textForPrint.length ? (restOfMarker - textWithoutWhiteSpaces.length) / 2 : 0;

    return textForPrint;
  }

  lenghToSliceText(arr, num) {
    let count = 0;

    while (num > 0) {
      for (let el of arr) {
        if (el !== " ") {
          num--;
        }
        count++;
        if (num === 0) break;
      }
    }
    return count;
  }
}

const marker = new Marker("blue", 10);
const res = marker.getTextToPrint("we are here and we want to be with you!");
console.log(res);

// create child class
class RechargableMarker extends Marker {
  constructor(color, ink) {
    super(color, ink);
  }

  /**
   * @param {number} value
   */
  chargeInk(value) {
    this.ink = this.ink + value > 100 ? 100 : this.ink + value;
  }
}

const rechargableMarker = new RechargableMarker("green", 20);
rechargableMarker.chargeInk(50);
const myText =
  "Here, we’re fetching a programming joke from the JokeAPI. The API’s response is in JSON format, so we extract that response once the request completes (using the json() method), then log the joke to the console.";

const textToPrint = rechargableMarker.getTextToPrint(myText);
console.log({ textToPrint });

console.log(rechargableMarker.ink);

const inkRest = document.querySelector(".ink-rest");
const text = document.querySelector(".text");
text.style.color = rechargableMarker.color;
inkRest.innerHTML = `ink: ${rechargableMarker.ink}%`;

const oneLetter = textToPrint.split("");
console.log(oneLetter);

text.innerHTML = textToPrint;

/*
 * Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
 * Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників
 * банку. Масив працівників необхідно передавати через конструктор, а отримувати
 * HTML-код за допомогою методу getHtml ().
 * Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
 */

const employeesArr = [
  "John Lester",
  "Terry Wolson",
  "Ann Finder",
  "Merry Christmas",
  "Dan Tiger",
  "Lev Simpson",
  "Emma Watson",
  "Kevin Costner",
];

class Employee {
  constructor(employees) {
    this.employees = employees;
  }
}

class EmpTable extends Employee {
  constructor(employees) {
    super(employees);
  }

  getHtml() {
    let ul = document.querySelector("ul");

    this.employees.forEach((employee) => {
      let li = document.createElement("li");
      li.innerText = employee;
      ul.append(li);
    });
  }
}

const empHtmlTable = new EmpTable(employeesArr);
empHtmlTable.getHtml();
