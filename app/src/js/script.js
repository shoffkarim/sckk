/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// STYLES=============================================================================
import '../sass/style.sass';
import Burger from "./modules/burger";
import Popup from "./modules/popup";
import Validation from "./modules/validation";
import InputMask from "./modules/inputMask";
import Cookie from "./modules/cookie";
import Logo from "./modules/logo";
import Video from "./modules/video";
import Seo from "./modules/seo";
import CustomSelect from "./modules/custom-select";

const burger = new Burger();
const popup = new Popup();
const validation = new Validation();
const mask = new InputMask();
const cookie = new Cookie();
const logo = new Logo();
const video = new Video();
const seo = new Seo();
const select = new CustomSelect();

// SWIPER
// eslint-disable-next-line no-unused-vars
let mainSlider = new Swiper('.main-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.main-button-next',
    prevEl: '.main-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
  speed: 600,
});

// eslint-disable-next-line no-unused-vars
let thumbCatalogSlider = new Swiper('.catalog-thumb-slider', {
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
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
  allowTouchMove: true,
  autoplay: {
    delay: 5000,
  },
  speed: 600,
  navigation: {
    nextEl: '.catalog-button-next',
    prevEl: '.catalog-button-prev',
  },
});

// eslint-disable-next-line no-unused-vars
let aboutSlider = new Swiper('.about-slider', {
  slidesPerView: 2,
  spaceBetween: 38,
  centeredSlides: true,
  navigation: {
    nextEl: '.about-button-next',
    prevEl: '.about-button-prev',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    1600: {
      slidesPerView: 2,
    }
  }
});
let newsSlider = new Swiper('.news-slider', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

let historySlider = new Swiper('.history-slider', {
  slidesPerView: "auto",
  spaceBetween: 55,
  navigation: {
    nextEl: '.history-button-next',
    prevEl: '.history-button-prev'
  },
  breakpoints: {
    320: {
      spaceBetween: 5,
    },
    500: {
      spaceBetween: 55,
    }
  },
});

if (document.querySelector(".photo-slider")) {
  if (document.querySelectorAll(".photo-slider__item").length > 1) {
    let photoSlider = new Swiper('.photo-slider', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.photo-slider-next',
        prevEl: '.photo-slider-prev',
      },
      loop: true,
    });
  }
}
