/* eslint-disable class-methods-use-this */
class DiffAnswer {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-diff-answer")) {
      const wrap = document.querySelectorAll(".js-diff-answer");
      wrap.forEach(function (i) {
        const radio = i.querySelector("input");
        console.log(radio);
        radio.addEventListener("change", function () {
          const input = i.querySelector(".js-diff-input");
          input.classList.toggle("open");
        });
      });
    }
  }
}
export default DiffAnswer;