require('./form.js');
require('./burger.js');

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.spekers-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 21,
  pagination: {
    el: ".speakers__pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    946: {
      spaceBetween: 31,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 41,
    },
  },
  navigation: {
    nextEl: '.speakers__button-next',
    prevEl: '.speakers__button-prev',
  },
});
