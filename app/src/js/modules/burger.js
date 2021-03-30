/* eslint-disable class-methods-use-this */
class Burger {
  constructor() {
    this.init();
  }

  init() {
    const burgerBtns = document.querySelectorAll(".js-burger");
    const burgerMenu = document.querySelector(".burger-menu");
    burgerBtns.forEach((i) => i.addEventListener("click", function (e) {
      e.preventDefault();
      i.classList.toggle("close");
      burgerMenu.classList.toggle("js-open");
    }));
  }
}
export default Burger;