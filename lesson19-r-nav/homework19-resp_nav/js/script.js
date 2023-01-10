const chevronBox = document.querySelector(".chevron-box");
const sidebar = document.querySelector(".sidebar");
const chevron = document.querySelector(".chevron");

chevronBox.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  chevron.classList.toggle("switch");
});
