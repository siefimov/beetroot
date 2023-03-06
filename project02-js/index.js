const $ = document.querySelector.bind(document);
const nextBtn = $(".next-btn");
const userName = $("#name");
let allTodos = 0;
let doneTodos = 0;

const welcomeWrapper = $(".welcome-wrapper");
welcomeWrapper.style.display = localStorage.getItem("welcome") || "flex";

const greetingsName = $(".greetings__name");
greetingsName.innerText = localStorage.getItem("user-name") || "";

const itemsContainer = $(".container__items");

// ================================
const addItemsOnLoad = () => {
  if (localStorage.getItem("todoContainer") == null) {
    return " ";
  } else {
    let currentItems = JSON.parse(localStorage.getItem("todoContainer"));
    currentItems.forEach((element) => {
      const newBlock = `
    <div class="item-content">
        <button class="checked-item"></button> 
        <span>${element}</span>
        <div class="button-items">
            <button class="change-item">&#128394</button>
            <button class="remove-item">Х</button>
        </div>
    </div>
    `;
      itemsContainer.insertAdjacentHTML("beforeend", newBlock);
    });
  }

  if (localStorage.getItem("user-name") == null) {
    $(".todo-wrapper").style.display = "none";
  }
};
window.addEventListener("load", addItemsOnLoad);


nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("user-name", userName.value);
  greetingsName.innerHTML = localStorage.getItem("user-name");

  localStorage.setItem("welcome", "none");

  $(".welcome-wrapper").style.display = localStorage.getItem("welcome");
  $(".todo-wrapper").style.display = "flex";
});

// ================================== //
//* ADD NEW ITEM //
// ================================== //

const button = $(".todo__add-item");

const addItem = (e) => {
  e.preventDefault();

  let inputValue = $("#input-value").value;

  // if there is nothing at the start then save an empty array
  if (localStorage.getItem("todoContainer") == null) {
    localStorage.setItem("todoContainer", "[]");
  }

  let old_data = JSON.parse(localStorage.getItem("todoContainer"));
  old_data.push(inputValue);

  // save the old + new data to the local storage
  localStorage.setItem("todoContainer", JSON.stringify(old_data));

  // add input value to the page
  if (inputValue != "") {
    const newBlock = `
    <div class="item-content">
        <button class="checked-item"></button> 
        <span>${inputValue}</span>
        <div class="button-items">
            <button class="change-item">&#128394</button>
            <button class="remove-item">Х</button>
        </div>
    </div>
    `;
    itemsContainer.insertAdjacentHTML("beforeend", newBlock);

    // clear the input box
    $("#input-value").value = "";
    $("#input-value").focus();

    allTodos++;
    console.log(allTodos);

    $(".todo__all").innerText = allTodos;
    $(".todo__done").innerHTML = doneTodos;
  } else {
    $("#input-value").focus();
  }
};
button.addEventListener("click", addItem);

// ================================== //
//* MARK AS DONE //
// ================================== //
const doneButton = $(".container__items");

const doneItem = (e) => {
  if (e.target.classList.contains("checked-item")) {
    console.log(e.target);
    e.target.nextElementSibling.classList.add("checked-text");
    e.target.classList.add("checked-item-done");
    doneTodos++;
    $(".todo__done").innerHTML = doneTodos;
  }
};

doneButton.addEventListener("click", doneItem);

// ================================== //
//* ======== SEARCH ITEMS ========= //
// =================================== //

let searchInput = $(".search__input");

const searchItem = (e) => {
  let searchInputValue = document.querySelector(".search__input").value.toLowerCase();

  let items = document.querySelectorAll(".item-content");

  items.forEach((item) => {
    if (item.innerText.toLowerCase().indexOf(searchInputValue) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

searchInput.addEventListener("keyup", searchItem);

// =================================== //
//* ======== DELETE ITEMS ======== //
// =================================== //

const removeButton = $(".container__items");

const removeItem = (e) => {
  if (e.target.classList.contains("remove-item")) {
    itemsContainer.removeChild(e.target.parentElement.parentElement);
  }
};

removeButton.addEventListener("click", removeItem);
