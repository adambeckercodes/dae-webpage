var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper("followSwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});