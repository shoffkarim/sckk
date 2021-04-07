/* eslint-disable class-methods-use-this */
class Popup {
  constructor() {
    this.init();
  }

  init() {
    const popupBtns = document.querySelectorAll(".js-open-popup");
    const popupBtnsClose = document.querySelectorAll(".js-popup-close");
    const rightMenu = document.querySelector(".right-menu");

    popupBtns.forEach((i) => i.addEventListener("click", function (e) {
      e.preventDefault();
      const typePopup = i.dataset.popup;
      document.body.classList.add("no-overflow");
      rightMenu.classList.toggle("hidden");
      const popup = document.querySelector(`.popup[data-popup="${typePopup}"]`);
      popup.classList.add("open-popup");
    }));

    popupBtnsClose.forEach((i) => i.addEventListener("click", function (e) {
      e.preventDefault();
      let popup;
      if (i.parentElement.classList.contains("popup")) {
        popup = i.parentElement;
      } else {
        popup = i.parentElement.parentElement;
      }
      popup.classList.remove("open-popup");
      document.body.classList.remove("no-overflow");
      rightMenu.classList.toggle("hidden");
    }));
  }
}
export default Popup;