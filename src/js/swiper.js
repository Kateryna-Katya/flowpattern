import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

new Swiper('.swiper', {
  modules: [Autoplay],

  slidesPerView: 1.55,
    centeredSlides: true,
  centerInsufficientSlides: true,
  spaceBetween: 16,

    loop: true,
  initialSlide: 1,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    },
  breakpoints: {
  1440: {
    slidesPerView: 1.7,
    spaceBetween: 32,
  },
},
});