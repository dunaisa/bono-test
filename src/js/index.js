// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 41,
  pagination: {
    el: ".speakers__pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 21,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 31,
    },
  },
  navigation: {
    nextEl: '.speakers__button-next',
    prevEl: '.speakers__button-prev',
  },
});
