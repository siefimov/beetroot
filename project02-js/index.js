const $ = document.querySelector.bind(document);
const nextBtn = $(".next-btn");
const userName = $("#name");

let numAllTodos;
let numDoneTodos;

const welcomeWrapper = $(".welcome-wrapper");
const todoWrapper = $(".todo-wrapper");
const greetingsName = $(".greetings__name");
const itemsContainer = $(".container__items");

// ===
const upAllTodos = () => {
  numAllTodos = JSON.parse(localStorage.getItem("numTodosAll"));
  numAllTodos++;
  localStorage.setItem("numTodosAll", numAllTodos);

  $(".todo__all").innerText = numAllTodos;
};

const downAllTodos = () => {
  numAllTodos = JSON.parse(localStorage.getItem("numTodosAll"));
  console.log(numAllTodos);

  numAllTodos--;
  console.log(numAllTodos);

  localStorage.setItem("numTodosAll", numAllTodos);
  $(".todo__done").innerText = numAllTodos;
};

const upDoneTodos = () => {
  numDoneTodos = JSON.parse(localStorage.getItem("numTodosDone"));
  numDoneTodos++;
  localStorage.setItem("numTodosDone", numDoneTodos);
  $(".todo__done").innerText = numDoneTodos;
};
const downDoneTodos = () => {
  numDoneTodos = JSON.parse(localStorage.getItem("numTodosDone"));
  numDoneTodos--;
  localStorage.setItem("numTodosDone", numDoneTodos);
  $(".todo__done").innerText = numDoneTodos;
};

//* ================================
//* WHEN PAGE IS LOADED
//* ===============================
const addItemsOnLoad = () => {
  welcomeWrapper.style.display = localStorage.getItem("welcome") || "flex";
  todoWrapper.style.display = localStorage.getItem("todo") || "none";

  greetingsName.innerText = localStorage.getItem("user-name") || "";

  if (localStorage.getItem("numTodosAll") == null) {
    localStorage.setItem("numTodosAll", "0");
  }
  if (localStorage.getItem("numTodosDone") == null) {
    localStorage.setItem("numTodosDone", "0");
  }
  if (localStorage.getItem("numTodosActive") == null) {
    localStorage.setItem("numTodosActive", "0");
  }

  let numAllTodos = JSON.parse(localStorage.getItem("numTodosAll"));
  let numDoneTodos = JSON.parse(localStorage.getItem("numTodosDone"));
  $(".todo__all").innerText = numAllTodos;
  $(".todo__done").innerText = numDoneTodos;

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
  $("#input-value").focus();
};
window.addEventListener("load", addItemsOnLoad);

// * =================================
// * click on button after enter name
// * =================================
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("user-name", userName.value);
  greetingsName.innerHTML = localStorage.getItem("user-name");

  localStorage.setItem("welcome", "none");
  localStorage.setItem("todo", "flex");

  $(".welcome-wrapper").style.display = localStorage.getItem("welcome");
  $(".todo-wrapper").style.display = localStorage.getItem("todo");
});

//* ================================== //
//* ADD NEW ITEM //
//* ================================== //

// const button = $(".todo__add-btn");
const button = $("#to-do");

const addItem = (e) => {
  e.preventDefault();
  console.log(e.target);

  if (!e.target.classList.contains("todo__add-btn")) {
    return;
  }

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

    // change number of all todos
    upAllTodos();
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
    e.target.classList.toggle("checked-item-done");
    e.target.nextElementSibling.classList.toggle("checked-text");
    if (
      // e.target.classList.contains("checked-item") &&
      e.target.classList.contains("checked-item-done")
    ) {
      downDoneTodos();
    } else {
      upDoneTodos();
    }
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

  // change number of all todos
  downAllTodos();
  // change number of done todos
  downDoneTodos();
};

removeButton.addEventListener("click", removeItem);
