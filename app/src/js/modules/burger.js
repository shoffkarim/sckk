/* eslint-disable class-methods-use-this */
class Burger {
  constructor() {
    this.init();
  }

  init() {
    const burgerBtns = document.querySelectorAll(".js-burger");
    const burgerBtnsClose = document.querySelectorAll(".js-close-burger");
    const burgerMenu = document.querySelector(".burger-menu");

    burgerBtns.forEach((i) => i.addEventListener("click", function (e) {
      e.preventDefault();
      if (i.classList.contains("close")) {
        document.body.classList.remove("no-overflow");
      } else {
        document.body.classList.add("no-overflow");
      }
      i.classList.toggle("close");
      burgerMenu.classList.toggle("js-open");
    }));

    burgerBtnsClose.forEach((i) => i.addEventListener("click", function (e) {
      e.preventDefault();
      i.classList.toggle("close");
      burgerBtns.forEach((j) => j.classList.toggle("close"));
      document.body.classList.remove("no-overflow");
      burgerMenu.classList.toggle("js-open");
    }));
  }
}
export default Burger;