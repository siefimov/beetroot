// mobile navigation
const navBtn = document.querySelector(".burger");
const mobileNav = document.querySelector(".header__menu");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("header__menu--mobile");
  navBtn.classList.toggle("burger__close");
});

// search bar
const menuList = document.querySelector(".menu__list");
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("mouseover", () => {
  menuList.style.opacity = 0;
});
searchBox.addEventListener("mouseout", () => {
  menuList.style.opacity = 1;
});
