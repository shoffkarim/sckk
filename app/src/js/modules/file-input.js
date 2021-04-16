/* eslint-disable class-methods-use-this */
class FileInput {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-fake-file")) {
      const wraps = document.querySelectorAll(".js-fake-file");
      wraps.forEach(function (item) {
        const input = item.querySelector(".js-file-input");
        const emptyFileList = input.files;
        const label = item.querySelector(".js-file-label");
        const labelText = label.innerHTML;
        const btnDelete = item.querySelector(".js-file-delete");
        input.addEventListener("change", function () {
          const name = input.files[0].name;
          label.innerHTML = name;
          item.classList.add("file-loaded");
        });
        btnDelete.addEventListener("click", function () {
          input.files = emptyFileList;
          item.classList.remove("file-loaded");
          label.innerHTML = labelText;
        });
      });
    }
  }
}
export default FileInput;