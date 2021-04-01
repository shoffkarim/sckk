/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// STYLES=============================================================================
import '../sass/style.sass';
import Burger from "./modules/burger";

const burger = new Burger();

// SWIPER
// eslint-disable-next-line no-unused-vars
let mainSlider = new Swiper('.main-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.main-button-next',
    prevEl: '.main-button-prev',
  },
});

// eslint-disable-next-line no-unused-vars
let thumbCatalogSlider = new Swiper('.catalog-thumb-slider', {
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 6,
    }
  }
});

// eslint-disable-next-line no-unused-vars
let catalogSlider = new Swiper('.catalog-slider', {
  slidesPerView: 1,
  thumbs: {
    swiper: thumbCatalogSlider
  },
  navigation: {
    nextEl: '.catalog-button-next',
    prevEl: '.catalog-button-prev',
  },
});
