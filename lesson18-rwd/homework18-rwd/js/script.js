// mobile navigation
const navBtn = document.querySelector(".burger");
const mobileNav = document.querySelector(".header__menu");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("header__menu--mobile");
  navBtn.classList.toggle("burger__close");
});
