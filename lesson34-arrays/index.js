// Minimum
/*
Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій 
для роботи з таким масивом:
1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
що ще не придбані, а потім - ті, що вже придбали.
2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
*/

const shopingList = [
  { productName: "milk", qty: 2, bought: true, pricePerItem: 35, amount: 70 },
  { productName: "cheese", qty: 1, bought: false, pricePerItem: 320, amount: 320 },
  { productName: "orange", qty: 1, bought: false, pricePerItem: 60, amount: 60 },
  { productName: "juice", qty: 3, bought: true, pricePerItem: 30, amount: 90 },
  { productName: "bread", qty: 2, bought: true, pricePerItem: 27, amount: 54 },
];

// 1. disply unbught and then unbought products
// 1.1 - using filter, map and join
// list of product showing as a String
function sortProductByBought(array) {
  const boughtProducts = array
    .filter((product) => product.bought === true)
    .map((product) => product.productName)
    .join(", ");

  const unboughtProducts = array
    .filter((product) => product.bought === false)
    .map((product) => product.productName)
    .join(", ");

  const sortedProductsString = `Unbought Products: ${unboughtProducts}. Bought Products: ${boughtProducts}`;
  console.log({ sortedProductsString });
  console.log(typeof sortedProductsString);
}

sortProductByBought(shopingList);

// 1.2 - using filter, map and forEach
function sortProductByBought1(array) {
  const unboughtProducts = array
    .filter((product) => product.bought === false)
    .map((product) => product.productName);

  console.log("Unbought Products:");
  unboughtProducts.forEach((item) => {
    console.log(item);
  });

  const boughtProducts = array
    .filter((product) => product.bought === true)
    .map((product) => product.productName);

  console.log("Bought Products:");
  boughtProducts.forEach((item) => {
    console.log(item);
  });
}

sortProductByBought1(shopingList);

// 1.3 - using sort and map
const sortProductByBought2 = (arrayOfProducts) => {
  const sortedProducts = arrayOfProducts
    .sort((a, b) => a.bought - b.bought)
    .map((product) => product.productName);

  return sortedProducts;
};

console.log(sortProductByBought2(shopingList));

// 2.1 - The function takes the name of the product and marks it as purchased.
function markProductPurchased(arrayOfProducts, nameOfProduct) {
  return arrayOfProducts.map((product) => {
    return product.productName === nameOfProduct ? { ...product, bought: true } : { ...product };
  });
}
console.log(markProductPurchased(shopingList, "cheese"));
console.log(markProductPurchased(shopingList, "orange"));

//* NORMA
/*
1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
  в якому продукт, що ми шукаємо, буде відсутнім)*/

const deleteProduct = (shopingList, nameOfproduct) => {
  const newListOfProducts = [];
  shopingList.forEach((product) => {
    if (product.productName !== nameOfproduct) {
      newListOfProducts.push(product);
    }
  });

  return newListOfProducts;
};

console.log(deleteProduct(shopingList, "cheese"));

/*2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна 
змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24
*/
function addProductToList(shopingList, nameOfproduct, qtyOfProduct, pricePerItem) {
  const index = shopingList.findIndex((product) => product.productName === nameOfproduct);
  if (index !== -1) {
    shopingList[index].qty += qtyOfProduct;
    shopingList[index].pricePerItem = pricePerItem;
    shopingList[index].amount = shopingList[index].qty * shopingList[index].pricePerItem;
  } else {
    shopingList.push({
      productName: nameOfproduct,
      qty: qtyOfProduct,
      bought: false,
      pricePerItem: pricePerItem,
      amount: qtyOfProduct * pricePerItem,
    });
  }

  return shopingList;
}
console.log(addProductToList(shopingList, "bread", 2, 27));
console.log(addProductToList(shopingList, "banana", 3, 60));
console.log(addProductToList(shopingList, "milk", 3, 37));

// * MAX
/*
/*1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.*/

function calcSummOfAllProducts(shopingList) {
  const listOfAmountAllProducts = shopingList.map((product) => product.amount);
  const sumOfAllProducts = listOfAmountAllProducts.reduce((acc, cur) => acc + cur);
  return `Sum of all products is ${sumOfAllProducts}`;
}

console.log(calcSummOfAllProducts(shopingList));

/*2.Підрахунок суми всіх (не) придбаних продуктів.*/
function calcSumBughtProducrs(shopingList) {
  const sumBoughtProducts = shopingList
    .filter((product) => product.bought === true)
    .map((product) => product.amount)
    .reduce((acc, cur) => acc + cur);
  console.log(`Sum of all bought products is ${sumBoughtProducts}`);
}
calcSumBughtProducrs(shopingList);

/*3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
в залежності від параметра функції, який вона приймає)
*/

function sortBySum(array, sortMethod) {
  if (sortMethod === 1) {
    array.sort((a, b) => a.amount - b.amount);
  }
  if (sortMethod === 2) {
    array.sort((a, b) => b.amount - a.amount);
  }
  return array;
}
console.log(sortBySum(shopingList, 2));
