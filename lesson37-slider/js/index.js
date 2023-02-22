// mobile navigation
const navBtn = document.querySelector(".burger");
const mobileNav = document.querySelector(".header__menu");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("header__menu--mobile");
  navBtn.classList.toggle("burger__close");
});

// search bar
// const menuList = document.querySelector(".menu__list");
// const searchBox = document.querySelector(".search-box");

// searchBox.addEventListener("mouseover", () => {
//   menuList.style.opacity = 0;
// });
// searchBox.addEventListener("mouseout", () => {
//   menuList.style.opacity = 1;
// });

const swiper = new Swiper(".swiper-slider", {
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperProduct = new Swiper(".swiper-product", {
  // loop: true,
  speed: 800,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination__product",
    dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  // + (index + 1)
  navigation: {
    nextEl: ".product__next-btn",
    prevEl: ".product__prev-btn",
  },

  breakpoints: {
    1320: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    488: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    487: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const swiperPartners = new Swiper(".swiper-partners", {
  // loop: true,
  speed: 800,
  slidesPerView: 9,
  spaceBetween: 20,

  navigation: {
    nextEl: ".partners__arr-next-button",
    prevEl: ".partners__arr-prev-button",
  },

  pagination: {
    el: ".swiper-pagination__partners",
    dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },

  breakpoints: {
    1320: {
      slidesPerView: 9,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    // 488: {
    //   slidesPerView: 6,
    //   spaceBetween: 10,
    // },
    // 487: {
    //   slidesPerView: 6,
    //   spaceBetween: 10,
    // },
    320: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
});
