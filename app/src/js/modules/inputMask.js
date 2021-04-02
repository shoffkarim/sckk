class InputMask {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector('.tel-mask')) {
      let list = document.querySelectorAll('.tel-mask');
      list.forEach(function (el) {
        let maskOptions = {
          mask: '+{7}(000)000-00-00',
          lazy: false,
        };
        // eslint-disable-next-line no-undef, no-unused-vars
        let mask = IMask(el, maskOptions);
      });
    }
  }
}
// eslint-disable-next-line import/prefer-default-export
export default InputMask;