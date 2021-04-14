/* eslint-disable class-methods-use-this */
class DiffAnswer {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-diff-wrap")) {
      const container = document.querySelector(".js-diff-wrap");
      const name = container.dataset.name;
      const radios = container.querySelectorAll(`input[name=${name}]`);
      radios.forEach((i) => i.addEventListener("change", function () {
        if (i.parentElement.parentElement.classList.contains("js-diff-answer")) {
          const wrap = container.querySelector(".js-diff-answer");
          const input = wrap.querySelector(".js-diff-input");
          input.classList.add("open");
        } else {
          const wrap = container.querySelector(".js-diff-answer");
          const input = wrap.querySelector(".js-diff-input");
          input.classList.remove("open");
        }
      }));
    }
  }
}
export default DiffAnswer;