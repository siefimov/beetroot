const chevronBox = document.querySelector(".chevron-box");
const sidebar = document.querySelector(".sidebar");
const chevron = document.querySelector(".chevron");
const body = document.querySelector('body');
const switchTheme = document.querySelector('.switch-toggle');



chevronBox.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  chevron.classList.toggle("switch");
});

switchTheme.addEventListener('click',()=>{
  body.classList.toggle("dark");
})