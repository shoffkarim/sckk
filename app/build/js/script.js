(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s='./app/src/js/script.js')})({"./app/src/js/modules/burger.js":/*!**************************************!*\
  !*** ./app/src/js/modules/burger.js ***!
  \**************************************//*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){'use strict';eval('__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable class-methods-use-this */\nvar Burger = /*#__PURE__*/function () {\n  function Burger() {\n    _classCallCheck(this, Burger);\n\n    this.init();\n  }\n\n  _createClass(Burger, [{\n    key: "init",\n    value: function init() {\n      var burgerBtns = document.querySelectorAll(".js-burger");\n      var burgerMenu = document.querySelector(".burger-menu");\n      burgerBtns.forEach(function (i) {\n        return i.addEventListener("click", function (e) {\n          e.preventDefault();\n          i.classList.toggle("close");\n          burgerMenu.classList.toggle("js-open");\n        });\n      });\n    }\n  }]);\n\n  return Burger;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Burger);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3JjL2pzL21vZHVsZXMvYnVyZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9qcy9tb2R1bGVzL2J1cmdlci5qcz9iYTA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuY2xhc3MgQnVyZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnN0IGJ1cmdlckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWJ1cmdlclwiKTtcclxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlci1tZW51XCIpO1xyXG4gICAgYnVyZ2VyQnRucy5mb3JFYWNoKChpKSA9PiBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGkuY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlXCIpO1xyXG4gICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1vcGVuXCIpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXJnZXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTs7Ozs7O0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/src/js/modules/burger.js\n')},"./app/src/js/script.js":/*!******************************!*\
  !*** ./app/src/js/script.js ***!
  \******************************//*! no exports provided */function(module,__webpack_exports__,__webpack_require__){'use strict';eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.sass */ "./app/src/sass/style.sass");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./app/src/js/modules/burger.js");\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable no-undef */\n// STYLES=============================================================================\n\n\nvar burger = new _modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"](); // SWIPER\n// eslint-disable-next-line no-unused-vars\n\nvar mainSlider = new Swiper(\'.main-slider\', {\n  slidesPerView: 1,\n  navigation: {\n    nextEl: \'.swiper-button-next\',\n    prevEl: \'.swiper-button-prev\'\n  }\n}); // eslint-disable-next-line no-unused-vars\n\nvar thumbCatalogSlider = new Swiper(\'.catalog-thumb-slider\', {\n  slidesPerView: 6,\n  freeMode: true,\n  watchSlidesVisibility: true,\n  watchSlidesProgress: true,\n  breakpoints: {\n    320: {\n      slidesPerView: 2\n    },\n    1000: {\n      slidesPerView: 6\n    }\n  }\n}); // eslint-disable-next-line no-unused-vars\n\nvar catalogSlider = new Swiper(\'.catalog-slider\', {\n  slidesPerView: 1,\n  thumbs: {\n    swiper: thumbCatalogSlider\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3JjL2pzL3NjcmlwdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zcmMvanMvc2NyaXB0LmpzP2JlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLy8gU1RZTEVTPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNhc3MnO1xyXG5pbXBvcnQgQnVyZ2VyIGZyb20gXCIuL21vZHVsZXMvYnVyZ2VyXCI7XHJcblxyXG5jb25zdCBidXJnZXIgPSBuZXcgQnVyZ2VyKCk7XHJcblxyXG4vLyBTV0lQRVJcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmxldCBtYWluU2xpZGVyID0gbmV3IFN3aXBlcignLm1haW4tc2xpZGVyJywge1xyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5sZXQgdGh1bWJDYXRhbG9nU2xpZGVyID0gbmV3IFN3aXBlcignLmNhdGFsb2ctdGh1bWItc2xpZGVyJywge1xyXG4gIHNsaWRlc1BlclZpZXc6IDYsXHJcbiAgZnJlZU1vZGU6IHRydWUsXHJcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICAgIDEwMDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogNixcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmxldCBjYXRhbG9nU2xpZGVyID0gbmV3IFN3aXBlcignLmNhdGFsb2ctc2xpZGVyJywge1xyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgdGh1bWJzOiB7XHJcbiAgICBzd2lwZXI6IHRodW1iQ2F0YWxvZ1NsaWRlclxyXG4gIH1cclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFMQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/src/js/script.js\n')},"./app/src/sass/style.sass":/*!*********************************!*\
  !*** ./app/src/sass/style.sass ***!
  \*********************************//*! no static exports found */function(module,exports,__webpack_require__){eval('// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3JjL3Nhc3Mvc3R5bGUuc2Fzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zcmMvc2Fzcy9zdHlsZS5zYXNzPzY3Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/src/sass/style.sass\n')}});