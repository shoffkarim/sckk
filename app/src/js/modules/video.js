/* eslint-disable class-methods-use-this */
class Video {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-video")) {
      const btnsPlay = document.querySelectorAll(".js-play-video");
      btnsPlay.forEach((i) => i.addEventListener("click", function () {
        const wrapper = i.parentElement;
        const video = wrapper.querySelector("video");
        video.setAttribute("controls", "controls");
        video.play();
        i.classList.add("hidden");
      }));
    }
  }
}
export default Video;