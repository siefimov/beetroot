const app = document.querySelector("#app");
const userInput = document.querySelector("#user-input");
const search = document.querySelector("#btn-search");

const _endpoint = "https://www.omdbapi.com/";
const apiKey = "&apikey=d3db9187";
let modifyiedInput = "";

// ***********************************
//* search and display title of movie
// ***********************************
const displayMovieTitle = () => {
  event.preventDefault();

  modifyiedInput = userInput.value.split(" ").join("+");

  fetch(_endpoint + "?t=" + modifyiedInput + apiKey)
    .then((data) => data.json())
    .then((obj) => {
      console.log(obj);
      console.log(typeof obj.Ratings);
      console.log(obj.Ratings);

      if (typeof obj.Title === "undefined") {
        const movieTitle = document.createElement("h2");
        movieTitle.classList.add("movie-title");
        movieTitle.innerText = "Movie not found";
        app.append(movieTitle);
        return;
      }

      const divTitle = document.createElement("div");
      divTitle.classList.add("title-wrapper");

      const movieTitle = document.createElement("h2");
      movieTitle.classList.add("movie-title");
      movieTitle.innerHTML = `<span class="title-mark">Title:</span> <span class="title-name">${obj.Title}</span>`;

      const btnDetails = document.createElement("button");
      btnDetails.type = "submit";
      btnDetails.innerHTML = "Details";

      divTitle.append(movieTitle);
      divTitle.append(btnDetails);
      app.append(divTitle);
    });
  userInput.value = "";
  userInput.focus();
};

// ***********************************
//* display and hide ditails of movie
// ***********************************
const displayMovieDetails = (e) => {
  // check if click was on button
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  const titleWrapper = e.target.parentElement;
  const movieTitle = e.target.previousSibling.children[1].innerText;

  if (e.target.innerText === "HIDE") {
    app.removeChild(e.target.parentElement.nextSibling);
    e.target.innerText = "DETAILS";
    return;
  }

  e.target.innerText = e.target.innerText === "DETAILS" ? "HIDE" : "DETAILS";

  const modifyiedTitle = movieTitle.split(" ").join("+");

  fetch(_endpoint + "?t=" + modifyiedTitle + apiKey)
    .then((data) => data.json())
    .then((obj) => {
      const movieInfo = document.createElement("div");
      titleWrapper.insertAdjacentElement("afterend", movieInfo);

      for (let key in obj) {
        const div = document.createElement("div");
        div.classList.add("item-wrapper");

        const divKey = document.createElement("div");
        divKey.classList.add("item-key");
        divKey.innerText = key;

        const divValue = document.createElement("div");
        divValue.classList.add("item-value");
        divValue.innerText = obj[key];

        div.append(divKey);
        div.append(divValue);

        movieInfo.append(div);
      }
    });
};

search.addEventListener("click", displayMovieTitle);

app.addEventListener("click", displayMovieDetails);