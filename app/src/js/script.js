/* eslint-disable no-undef */
// STYLES=============================================================================
import '../sass/style.sass';

// SWIPER
// eslint-disable-next-line no-unused-vars
let mainSlider = new Swiper('.main-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
