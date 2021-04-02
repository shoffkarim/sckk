/* eslint-disable class-methods-use-this */
class Logo {
  constructor() {
    this.init();
  }

  init() {
    if (document.body.classList.contains("index") && (document.documentElement.clientWidth > 767)) {
      const logo = document.querySelector(".logo-wrapper");
      const geog = document.querySelector(".geography");
      // const footer = document.querySelector(".footer");
      window.addEventListener('scroll', function () {
        logo.classList.add("logo-fixed");
        const position = geog.getBoundingClientRect();
        if (position.top < 64) {
          logo.classList.add("green");
        } else {
          logo.classList.remove("green");
        }
      });
    }
  }
}
export default Logo;