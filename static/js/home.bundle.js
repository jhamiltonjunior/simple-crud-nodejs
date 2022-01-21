/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/js/animation.js":
/*!**********************************!*\
  !*** ./frontend/js/animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "elementPrimary": () => (/* binding */ elementPrimary),
/* harmony export */   "allElementsSpecify": () => (/* binding */ allElementsSpecify),
/* harmony export */   "allElementsEmphasis": () => (/* binding */ allElementsEmphasis),
/* harmony export */   "homeLink": () => (/* binding */ homeLink),
/* harmony export */   "logo": () => (/* binding */ logo)
/* harmony export */ });
var header = document.querySelectorAll('[data-animate-header]');
var elementPrimary = document.querySelectorAll('[data-animation-primary]');
var allElementsSpecify = document.querySelectorAll('[data-all-animation-specify]');
var allElementsEmphasis = document.querySelectorAll('[data-all-animation-emphasis]');
var homeLink = document.querySelectorAll('.home-link');
var logo = document.querySelector('.header-home__logo--title');
var animate = 'animate';
var animateEmphasis = 'animate-emphasis';
var resetColor = 'color-black';
setTimeout(function () {
  elementPrimary.forEach(function (element) {
    element.classList.add(animate);
  });
}, 200);
window.addEventListener('scroll', function () {
  var windowTop = window.pageYOffset;
  var windowHeight = window.innerHeight * 1 / 15;
  header.forEach(function (element) {
    if (windowTop > windowHeight) {
      element.classList.add(animate);
    } else {
      header.forEach(function (el) {
        el.classList.remove(animate);
      });
    }
  });

  if (windowTop > windowHeight) {
    logo.classList.add('h-logo--scroll');
  } else {
    logo.classList.remove('h-logo--scroll');
  }
});
window.addEventListener('scroll', function () {
  var windowTop = window.pageYOffset;
  var windowHeight = window.innerHeight * 1 / 15;
  homeLink.forEach(function (element) {
    if (windowTop > windowHeight) {
      element.classList.add(resetColor);
    } else {
      header.forEach(function (el) {
        el.classList.remove(resetColor);
      });
    }
  });
});
window.addEventListener('scroll', function () {
  var windowTop = window.pageYOffset;
  var windowHeight = window.innerHeight / 4;
  allElementsSpecify.forEach(function (element) {
    if (windowTop > windowHeight) {
      element.classList.add(animate);
    } else {
      allElementsSpecify.forEach(function (el) {
        el.classList.remove(animate);
      });
    }
  });
});
window.addEventListener('scroll', function () {
  var windowTop = window.pageYOffset;
  var windowHeight = window.innerHeight * 2 / 2.8;
  allElementsEmphasis.forEach(function (element) {
    if (windowTop > windowHeight) {
      element.classList.add(animateEmphasis);
    } else {
      allElementsEmphasis.forEach(function (el) {
        el.classList.remove(animateEmphasis);
      });
    }
  });
});

/***/ }),

/***/ "./frontend/js/util/setImage.js":
/*!**************************************!*\
  !*** ./frontend/js/util/setImage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetImage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SetImage = /*#__PURE__*/function () {
  function SetImage(url, id) {
    _classCallCheck(this, SetImage);

    this.url = url;
    this.img = document.getElementById(id);
  }

  _createClass(SetImage, [{
    key: "innerImage",
    value: function innerImage() {
      this.img.src = this.url;
    }
  }]);

  return SetImage;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/css/animation.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/css/animation.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, " [data-animate-header] {\n  transition: var(--transition-secondary);\n  transform: translate3d(0, 10px, 0);\n}\n\n[data-animate-header].animate {\n  background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85));\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-anime] {\n  opacity: 0;\n}\n\n[data-animation-primary=\"left\"] {\n  transform: translate3d(70px, 0, 0);\n}\n\n[data-animation-primary=\"right\"] {\n  transform: translate3d(-70px, 0, 0);\n}\n\n[data-animation-primary=\"left\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-animation-primary=\"right\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation=\"left\"] {\n  transform: translate3d(-70px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation=\"left\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation=\"top\"] {\n  transform: translate3d(0, -70px, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation=\"top\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation=\"right\"] {\n  transform: translate3d(70px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation=\"right\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation-emphasis=\"left\"] {\n  transform: translate3d(0px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation-emphasis=\"left\"].animate-emphasis {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(65px, 0px, 0px);\n}\n\n[data-all-animation-emphasis=\"right\"] {\n  transform: translate3d(0px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation-emphasis=\"right\"].animate-emphasis {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(-65px, 0px, 0px);\n}", "",{"version":3,"sources":["webpack://./frontend/css/animation.css"],"names":[],"mappings":"CAAC;EACC,uCAAuC;EACvC,kCAAkC;AACpC;;AAEA;EACE,iFAAiF;EACjF,uCAAuC;EACvC,qCAAqC;AACvC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,UAAU;EACV,uCAAuC;EACvC,qCAAqC;AACvC;;AAEA;EACE,UAAU;EACV,uCAAuC;EACvC,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;EACnC,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,uCAAuC;EACvC,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;EACnC,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,uCAAuC;EACvC,qCAAqC;AACvC;;AAEA;EACE,kCAAkC;EAClC,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,uCAAuC;EACvC,qCAAqC;AACvC;;AAEA;EACE,iCAAiC;EACjC,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,uCAAuC;EACvC,sCAAsC;AACxC;;AAEA;EACE,iCAAiC;EACjC,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,uCAAuC;EACvC,uCAAuC;AACzC","sourcesContent":[" [data-animate-header] {\n  transition: var(--transition-secondary);\n  transform: translate3d(0, 10px, 0);\n}\n\n[data-animate-header].animate {\n  background: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85));\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-anime] {\n  opacity: 0;\n}\n\n[data-animation-primary=\"left\"] {\n  transform: translate3d(70px, 0, 0);\n}\n\n[data-animation-primary=\"right\"] {\n  transform: translate3d(-70px, 0, 0);\n}\n\n[data-animation-primary=\"left\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-animation-primary=\"right\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation=\"left\"] {\n  transform: translate3d(-70px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation=\"left\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation=\"top\"] {\n  transform: translate3d(0, -70px, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation=\"top\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation=\"right\"] {\n  transform: translate3d(70px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation=\"right\"].animate {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(0px, 0px, 0px);\n}\n\n[data-all-animation-emphasis=\"left\"] {\n  transform: translate3d(0px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation-emphasis=\"left\"].animate-emphasis {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(65px, 0px, 0px);\n}\n\n[data-all-animation-emphasis=\"right\"] {\n  transform: translate3d(0px, 0, 0);\n  transition: var(--transition-secondary);\n}\n\n[data-all-animation-emphasis=\"right\"].animate-emphasis {\n  opacity: 1;\n  transition: var(--transition-secondary);\n  transform: translate3d(-65px, 0px, 0px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/css/default.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/css/default.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  box-sizing: border-box;\n  font-family: var(--primary-font-family);\n  font-size: var(--font-size);\n  scroll-behavior: smooth;\n}\n\nhtml, body {\n  height: 100%;\n  /* background-color: var(--color-secondary-dark); */\n  min-height:1000vh;\n}\n\nh1 {\n  font-family: var(--secondary-font-family);\n  font-size: 250%;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.container {\n  max-width: var(--container-max-size);\n  width: var(--container-size);\n  margin: var(--align-center);\n}\n\nol, li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.button--default {\n  cursor: pointer;\n  transition: var(--transition-default);\n  padding:\n    var(--padding-top-default-button)\n    var(--padding-left-default-button);\n  border: var(--border-style-default);\n  border-radius: var(--border-radius-default);\n}\n\n.button--default__color {\n  border: var(--border-style-secondary);\n}\n.button--default:hover {\n  background-color: rgba(255, 255, 255, 0.123);\n}\n\n.emphasis--color {\n  color: var(--color-emphasis);\n}\n", "",{"version":3,"sources":["webpack://./frontend/css/default.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,sBAAsB;EACtB,uCAAuC;EACvC,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,mDAAmD;EACnD,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC;;sCAEoC;EACpC,mCAAmC;EACnC,2CAA2C;AAC7C;;AAEA;EACE,qCAAqC;AACvC;AACA;EACE,4CAA4C;AAC9C;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  box-sizing: border-box;\n  font-family: var(--primary-font-family);\n  font-size: var(--font-size);\n  scroll-behavior: smooth;\n}\n\nhtml, body {\n  height: 100%;\n  /* background-color: var(--color-secondary-dark); */\n  min-height:1000vh;\n}\n\nh1 {\n  font-family: var(--secondary-font-family);\n  font-size: 250%;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.container {\n  max-width: var(--container-max-size);\n  width: var(--container-size);\n  margin: var(--align-center);\n}\n\nol, li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.button--default {\n  cursor: pointer;\n  transition: var(--transition-default);\n  padding:\n    var(--padding-top-default-button)\n    var(--padding-left-default-button);\n  border: var(--border-style-default);\n  border-radius: var(--border-radius-default);\n}\n\n.button--default__color {\n  border: var(--border-style-secondary);\n}\n.button--default:hover {\n  background-color: rgba(255, 255, 255, 0.123);\n}\n\n.emphasis--color {\n  color: var(--color-emphasis);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/css/page/home.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/css/page/home.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-home {\n  z-index: 982;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  padding: .9rem 0;\n}\n\n.header-home__logo--title {\n  color: white;\n  font-size: 130%;\n}\n\n.h-logo--scroll {\n  color: #5864FF;\n}\n\n.home-link {\n  color: white;\n  transition: var(--transition-default);\n}\n\n.home-link:hover {\n  width: 1000px;\n  height: 100px;\n  font-size: 110%;\n  border-bottom: 4px solid var(--color-logo-secondary);\n}\n\na.color-black {\n  color: black;\n}\n\n.home-link__size {\n  font-size: 80%;\n}\n\n.header-home__nav {\n  width: 70%;\n}\n\n/* \n          HEADER line\n*/\n\n/* .head-line {\n  position: absolute;\n} */\n\n.hl-container {\n  padding-top: 15vh;\n  /* justify-content: end; */\n}\n\n.hl-background-svg {\n  max-width: 1800px;\n  width: 100%;\n  min-height: 979px;\n  margin: var(--align-center);\n  background-image: url('http://localhost:5000/img/background-svg/hero-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top;\n}\n\n.head__primary-text,\n.head__image {\n  width: 49%;\n}\n\n.hl-container p {\n  margin: 40px 0;\n}\n\n/*\n\n         SPECIFY CONTENT\n\n*/\n\n.specify {\n  padding: 2% 0 8%;\n}\n\n.sepcify-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1%;\n}\n\n.specify-details {\n  text-align: center;\n}\n\n.specify-details__sub-title {\n  margin: 20px 0;\n}\n\n.specify-details__sub-text {\n  font-size: 95%;\n  color: var(--color-text-base);\n}\n\n.icon {\n  width: 130px;\n  height: 130px;\n  /* text-align: center;\n  vertical-align: center; */\n  justify-content: center;\n  border-radius: 500px;\n  margin: var(--align-center);\n  background-color: var(--color-background);\n}\n\n.icon-home {\n  color: var(--color-primary-dark);\n  font-size: 400%;\n}\n\n/*\n\n    emphasis  \n\n*/\n\n.emphasis-container {\n  height: 600px;\n  /* padding: 0 250px 0; */\n  background-image: url('http://localhost:5000/img/background-svg/about-left-shape.svg');\n  background-repeat: no-repeat;\n  background-position: left;\n  background-size: contain;\n}\n\n.emphasis-item {\n  width: 46%;\n}\n\n.emphasis--image {\n  box-shadow: 1px 0px 9px .1px;\n  max-width: 533px;\n  max-height: 314px;\n  border-radius: 8px;\n}\n\n\n.emphasis--backgrund-svg {\n  max-width: 1800px;\n}", "",{"version":3,"sources":["webpack://./frontend/css/page/home.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,eAAe;EACf,oDAAoD;AACtD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;;CAEC;;AAED;;GAEG;;AAEH;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,2BAA2B;EAC3B,6EAA6E;EAC7E,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;CAIC;;AAED;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb;2BACyB;EACzB,uBAAuB;EACvB,oBAAoB;EACpB,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA;EACE,gCAAgC;EAChC,eAAe;AACjB;;AAEA;;;;CAIC;;AAED;EACE,aAAa;EACb,wBAAwB;EACxB,sFAAsF;EACtF,4BAA4B;EAC5B,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;;AAGA;EACE,iBAAiB;AACnB","sourcesContent":[".header-home {\n  z-index: 982;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  padding: .9rem 0;\n}\n\n.header-home__logo--title {\n  color: white;\n  font-size: 130%;\n}\n\n.h-logo--scroll {\n  color: #5864FF;\n}\n\n.home-link {\n  color: white;\n  transition: var(--transition-default);\n}\n\n.home-link:hover {\n  width: 1000px;\n  height: 100px;\n  font-size: 110%;\n  border-bottom: 4px solid var(--color-logo-secondary);\n}\n\na.color-black {\n  color: black;\n}\n\n.home-link__size {\n  font-size: 80%;\n}\n\n.header-home__nav {\n  width: 70%;\n}\n\n/* \n          HEADER line\n*/\n\n/* .head-line {\n  position: absolute;\n} */\n\n.hl-container {\n  padding-top: 15vh;\n  /* justify-content: end; */\n}\n\n.hl-background-svg {\n  max-width: 1800px;\n  width: 100%;\n  min-height: 979px;\n  margin: var(--align-center);\n  background-image: url('http://localhost:5000/img/background-svg/hero-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top;\n}\n\n.head__primary-text,\n.head__image {\n  width: 49%;\n}\n\n.hl-container p {\n  margin: 40px 0;\n}\n\n/*\n\n         SPECIFY CONTENT\n\n*/\n\n.specify {\n  padding: 2% 0 8%;\n}\n\n.sepcify-container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1%;\n}\n\n.specify-details {\n  text-align: center;\n}\n\n.specify-details__sub-title {\n  margin: 20px 0;\n}\n\n.specify-details__sub-text {\n  font-size: 95%;\n  color: var(--color-text-base);\n}\n\n.icon {\n  width: 130px;\n  height: 130px;\n  /* text-align: center;\n  vertical-align: center; */\n  justify-content: center;\n  border-radius: 500px;\n  margin: var(--align-center);\n  background-color: var(--color-background);\n}\n\n.icon-home {\n  color: var(--color-primary-dark);\n  font-size: 400%;\n}\n\n/*\n\n    emphasis  \n\n*/\n\n.emphasis-container {\n  height: 600px;\n  /* padding: 0 250px 0; */\n  background-image: url('http://localhost:5000/img/background-svg/about-left-shape.svg');\n  background-repeat: no-repeat;\n  background-position: left;\n  background-size: contain;\n}\n\n.emphasis-item {\n  width: 46%;\n}\n\n.emphasis--image {\n  box-shadow: 1px 0px 9px .1px;\n  max-width: 533px;\n  max-height: 314px;\n  border-radius: 8px;\n}\n\n\n.emphasis--backgrund-svg {\n  max-width: 1800px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/css/variable.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/css/variable.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-logo-primary: #FDDD7B;\n    --color-logo-secondary: #FF7E26;\n\n    --color-svg-lighter: #5F6AFF;\n    --color-svg-light: #5864FF;\n\n    --color-primary-lighter: #a0b6ff;\n    --color-primary-light: #819ff3;\n    --color-primary: #6288e7;\n    --color-primary-dark: #4271db;\n    --color-primary-darker: #235acf;\n\n    --color-secondary-light: #E5F2F1;\n    --color-secondary: #22a089;\n    --color-secondary-dark: #118d77;\n\n    --color-background: #EEEFFF;\n    --color-header-background: #f0f0f7c7;\n\n    \n    --color-title-in-primary: #FFFFFF;\n    --color-text-in-primary: #D4C2FF;\n    --color-text-title: #32264D;\n\n    --color-text-complement: #9C98A6;\n    --color-text-base: #4f495f;\n\n    --color-line-in-white: #E6E6F0;\n\n    --color-input-background: #F8F8FC;\n\n    --color-button-text: #FFFFFF;\n\n    --color-box-base: #FFFFFF;\n    --color-box-footer: #FAFAFC;\n\n    --color-small-info: #C1BCCC;\n    \n    --container-max-size: 1320px;\n    --container-size: 98%;\n    \n    --align-center: 0 auto;\n\n    --padding-default: 1rem;\n    --padding-top-default-button: .6rem;\n    --padding-left-default-button: 1.2rem;\n\n    --color-emphasis: white;\n\n    --border-radius-default: 40px;\n\n    --transition-default: .3s;\n    --transition-secondary: .8s;\n\n    --border-style-default: 2.5px solid var(--color-emphasis);\n    --border-style-secondary: 2.5px solid black;\n\n    --font-size: 1.2rem;\n    --primary-font-family: 'Nunito', sans-serif;\n    \n    --secondary-font-family: 'Arimo', sans-serif;\n}", "",{"version":3,"sources":["webpack://./frontend/css/variable.css"],"names":[],"mappings":"AAGA;IACI,6BAA6B;IAC7B,+BAA+B;;IAE/B,4BAA4B;IAC5B,0BAA0B;;IAE1B,gCAAgC;IAChC,8BAA8B;IAC9B,wBAAwB;IACxB,6BAA6B;IAC7B,+BAA+B;;IAE/B,gCAAgC;IAChC,0BAA0B;IAC1B,+BAA+B;;IAE/B,2BAA2B;IAC3B,oCAAoC;;;IAGpC,iCAAiC;IACjC,gCAAgC;IAChC,2BAA2B;;IAE3B,gCAAgC;IAChC,0BAA0B;;IAE1B,8BAA8B;;IAE9B,iCAAiC;;IAEjC,4BAA4B;;IAE5B,yBAAyB;IACzB,2BAA2B;;IAE3B,2BAA2B;;IAE3B,4BAA4B;IAC5B,qBAAqB;;IAErB,sBAAsB;;IAEtB,uBAAuB;IACvB,mCAAmC;IACnC,qCAAqC;;IAErC,uBAAuB;;IAEvB,6BAA6B;;IAE7B,yBAAyB;IACzB,2BAA2B;;IAE3B,yDAAyD;IACzD,2CAA2C;;IAE3C,mBAAmB;IACnB,2CAA2C;;IAE3C,4CAA4C;AAChD","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap');\n\n:root {\n    --color-logo-primary: #FDDD7B;\n    --color-logo-secondary: #FF7E26;\n\n    --color-svg-lighter: #5F6AFF;\n    --color-svg-light: #5864FF;\n\n    --color-primary-lighter: #a0b6ff;\n    --color-primary-light: #819ff3;\n    --color-primary: #6288e7;\n    --color-primary-dark: #4271db;\n    --color-primary-darker: #235acf;\n\n    --color-secondary-light: #E5F2F1;\n    --color-secondary: #22a089;\n    --color-secondary-dark: #118d77;\n\n    --color-background: #EEEFFF;\n    --color-header-background: #f0f0f7c7;\n\n    \n    --color-title-in-primary: #FFFFFF;\n    --color-text-in-primary: #D4C2FF;\n    --color-text-title: #32264D;\n\n    --color-text-complement: #9C98A6;\n    --color-text-base: #4f495f;\n\n    --color-line-in-white: #E6E6F0;\n\n    --color-input-background: #F8F8FC;\n\n    --color-button-text: #FFFFFF;\n\n    --color-box-base: #FFFFFF;\n    --color-box-footer: #FAFAFC;\n\n    --color-small-info: #C1BCCC;\n    \n    --container-max-size: 1320px;\n    --container-size: 98%;\n    \n    --align-center: 0 auto;\n\n    --padding-default: 1rem;\n    --padding-top-default-button: .6rem;\n    --padding-left-default-button: 1.2rem;\n\n    --color-emphasis: white;\n\n    --border-radius-default: 40px;\n\n    --transition-default: .3s;\n    --transition-secondary: .8s;\n\n    --border-style-default: 2.5px solid var(--color-emphasis);\n    --border-style-secondary: 2.5px solid black;\n\n    --font-size: 1.2rem;\n    --primary-font-family: 'Nunito', sans-serif;\n    \n    --secondary-font-family: 'Arimo', sans-serif;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./frontend/css/animation.css":
/*!************************************!*\
  !*** ./frontend/css/animation.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./animation.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/css/animation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/css/default.css":
/*!**********************************!*\
  !*** ./frontend/css/default.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./default.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/css/default.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/css/page/home.css":
/*!************************************!*\
  !*** ./frontend/css/page/home.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/css/page/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/css/variable.css":
/*!***********************************!*\
  !*** ./frontend/css/variable.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variable_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./variable.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/css/variable.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_variable_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_variable_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_variable_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_variable_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./frontend/js/page/home.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_variable_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/variable.css */ "./frontend/css/variable.css");
/* harmony import */ var _css_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/default.css */ "./frontend/css/default.css");
/* harmony import */ var _css_animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/animation.css */ "./frontend/css/animation.css");
/* harmony import */ var _css_page_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/page/home.css */ "./frontend/css/page/home.css");
/* harmony import */ var _util_setImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/setImage.js */ "./frontend/js/util/setImage.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animation.js */ "./frontend/js/animation.js");
// sempre colocar os arquivos mais importantes por ultimo






new _util_setImage_js__WEBPACK_IMPORTED_MODULE_4__["default"]('http://localhost:5000/img/page/home/hero-img.png', 'hero-head-line').innerImage();
new _util_setImage_js__WEBPACK_IMPORTED_MODULE_4__["default"]('http://localhost:5000/img/emphasis/initial-page.png', 'initial-page').innerImage();
})();

/******/ })()
;
//# sourceMappingURL=home.bundle.js.map