const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

// ==========
const div = document.querySelector("#app");
const ol = document.createElement("ol");
div.append(ol);

playList.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item.song;
  ol.append(li);
});

// playlist extended
const divExtended = document.querySelector("#app-extended");
const olExtended = document.createElement("ol");
divExtended.append(olExtended);

playList.forEach((item) => {
  const liExtended = document.createElement("li");
  liExtended.innerHTML = `<b>author:</b> <span class="author">${item.author}</span>, <b>song:</b> <span class="song">${item.song}</span>`;
  olExtended.append(liExtended);
});

// ***********
/* 
2. create list of 20 elements inside js file 
( even : background blue , color: white, align on right side / 
odd  background pink, color: black, align on left side, 
first element and last element align center heading 2 )
*/

const list = [
  "apple",
  "mango",
  "banana",
  "apricot",
  "lime",
  "cherry",
  "kiwi",
  "pineapple",
  "pomelo",
  "avocado",
  "lemon",
  "melon",
  "blueberry",
  "plum",
  "orange",
  "pear",
  "peach",
  "watermelon",
  "grape",
  "viburnum",
];

const body = document.body;

list.forEach((fruit, i, arr) => {
  if (i % 2 === 0 && i !== 0) {
    const p = document.createElement("p");
    p.textContent = fruit;
    p.style.backgroundColor = "blue";
    p.style.color = "white";
    p.style.textAlign = "right";
    p.style.padding = "10px";
    body.append(p);
  } else if (i % 2 !== 0 && i !== arr.length - 1) {
    const p = document.createElement("p");
    p.textContent = fruit;
    p.style.backgroundColor = "pink";
    p.style.color = "black";
    p.style.padding = "10px";
    body.append(p);
  } else {
    const h2 = document.createElement("h2");
    h2.textContent = fruit;
    h2.style.textAlign = "center";
    h2.style.padding = "10px";
    body.append(h2);
  }
});
