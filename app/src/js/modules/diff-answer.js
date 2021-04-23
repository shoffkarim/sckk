/* eslint-disable class-methods-use-this */
class DiffAnswer {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-diff-wrap")) {
      const container = document.querySelectorAll(".js-diff-wrap");
      container.forEach(function (i) {
        const name = i.dataset.name;
        const radios = i.querySelectorAll(`input[name=${name}]`);
        radios.forEach((j) => j.addEventListener("change", function () {
          if (j.parentElement.parentElement.classList.contains("js-diff-answer")) {
            const wrap = i.querySelector(".js-diff-answer");
            const input = wrap.querySelector(".js-diff-input");
            input.classList.add("open");
          } else {
            const wrap = i.querySelector(".js-diff-answer");
            const input = wrap.querySelector(".js-diff-input");
            input.classList.remove("open");
          }
        }));
      });
    }
  }
}
export default DiffAnswer;