class InputMask {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector('.tel-mask')) {
      let tellist = document.querySelectorAll('.tel-mask');
      tellist.forEach(function (el) {
        let telMaskOptions = {
          mask: '+{7}(000)000-00-00',
          lazy: false,
        };
        // eslint-disable-next-line no-undef, no-unused-vars
        let mask = IMask(el, telMaskOptions);
      });
    }
    if (document.querySelector(".date-mask")) {
      const dateList = document.querySelectorAll(".date-mask");
      dateList.forEach(function (el) {
        let dateMaskOption = {
          mask: Date,
          min: new Date(1910, 0, 1),
          max: new Date(2021, 0, 1),
          lazy: false
        };
        // eslint-disable-next-line no-undef, no-unused-vars
        let dateMask = IMask(el, dateMaskOption);
      });
    }
  }
}
// eslint-disable-next-line import/prefer-default-export
export default InputMask;