var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      720: {
        slidesPerView: 2,
      },
    },
    navigation: {
        nextEl: '.series-button-next',
      },
});

var menuButton = document.querySelector(".menu-botton-container");
var menuButtonActive = document.querySelector(".navigation-menu-button");
var menu = document.querySelector(".navigation");

menuButton.addEventListener('click', function() {
  menuButtonActive.classList.toggle("navigation-menu-button-active")
  menu.classList.toggle("header-active");
});
