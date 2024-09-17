/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBurgerHandler: () => (/* binding */ addBurgerHandler)\n/* harmony export */ });\nfunction addBurgerHandler() {\n  var burger = document.querySelector(\".burger\");\n  var menu = document.querySelector(\".header__navigation\");\n  var header = document.querySelector('.header');\n  var body = document.querySelector('body');\n  var wrapper = document.querySelector(\".header__wrapper\");\n  var toggleMenu = function toggleMenu() {\n    burger.classList.toggle('burger--open');\n    header.classList.toggle('header--mobile');\n    menu.classList.toggle(\"header__navigation--active\");\n    wrapper.classList.toggle(\"header__wrapper--active\");\n    body.classList.toggle(\"overflow-hidden\");\n  };\n  burger.addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    toggleMenu();\n  });\n  menu.addEventListener(\"click\", function (e) {\n    if (e.target.closest('.menu__item')) {\n      toggleMenu();\n    }\n  });\n  document.addEventListener('click', function (e) {\n    if (!header.contains(e.target) && burger.classList.contains('burger--open')) {\n      toggleMenu();\n    }\n  });\n  return function () {\n    burger.removeEventListener(\"click\", toggleMenu);\n    header.removeEventListener(\"click\", toggleMenu);\n    document.removeEventListener('click', toggleMenu);\n  };\n}\n\n//# sourceURL=webpack://shelter/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/createBigArray.js":
/*!**********************************!*\
  !*** ./src/js/createBigArray.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBigArray)\n/* harmony export */ });\n/* harmony import */ var _js_createNumArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/createNumArray.js */ \"./src/js/createNumArray.js\");\n\nfunction createBigArray() {\n  var arr = [];\n  for (var i = 0; i < 6; i++) {\n    arr.push((0,_js_createNumArray_js__WEBPACK_IMPORTED_MODULE_0__.createNumArray)());\n  }\n  return arr;\n}\n\n//# sourceURL=webpack://shelter/./src/js/createBigArray.js?");

/***/ }),

/***/ "./src/js/createCard.js":
/*!******************************!*\
  !*** ./src/js/createCard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard)\n/* harmony export */ });\n/* harmony import */ var _js_pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/pets.json */ \"./src/js/pets.json\");\n/* harmony import */ var _showModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showModal */ \"./src/js/showModal.js\");\n\n // Убедитесь, что путь к файлу верный\n\nfunction createCard(index) {\n  var pet = _js_pets_json__WEBPACK_IMPORTED_MODULE_0__[index];\n  var li = document.createElement('li');\n  li.className = 'our-friends__item';\n  li.dataset.id = index;\n  li.innerHTML = \"\\n    <img src=\\\"\".concat(pet.img, \"\\\" alt=\\\"\").concat(pet.name, \"\\\" class=\\\"our-friends__img\\\">\\n    <p class=\\\"our-friends__name\\\">\").concat(pet.name, \"</p>\\n    <button class=\\\"our-friends__btn button button--clear\\\">Learn more</button>\\n  \");\n  li.addEventListener('click', function () {\n    (0,_showModal__WEBPACK_IMPORTED_MODULE_1__.showModal)(index);\n  });\n  return li;\n}\n\n//# sourceURL=webpack://shelter/./src/js/createCard.js?");

/***/ }),

/***/ "./src/js/createNumArray.js":
/*!**********************************!*\
  !*** ./src/js/createNumArray.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNumArray: () => (/* binding */ createNumArray)\n/* harmony export */ });\n/* harmony import */ var _js_pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/pets.json */ \"./src/js/pets.json\");\n\nfunction createNumArray() {\n  var arr = [];\n  var maxNum = _js_pets_json__WEBPACK_IMPORTED_MODULE_0__.length;\n  while (arr.length < maxNum) {\n    var newNumber = Math.floor(Math.random() * 8);\n    if (!arr.includes(newNumber)) {\n      arr.push(newNumber);\n    }\n  }\n  return arr;\n}\n\n//# sourceURL=webpack://shelter/./src/js/createNumArray.js?");

/***/ }),

/***/ "./src/js/createPage.js":
/*!******************************!*\
  !*** ./src/js/createPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\n/* harmony import */ var _js_createCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/createCard.js */ \"./src/js/createCard.js\");\n\nfunction createPage(arr) {\n  var petPage = document.querySelector('.our-friends__list--pets');\n  petPage.innerHTML = '';\n  for (var i = 0; i < arr.length; i++) {\n    var index = arr[i];\n    var li = (0,_js_createCard_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(index);\n    petPage.append(li);\n  }\n  return petPage;\n}\n\n//# sourceURL=webpack://shelter/./src/js/createPage.js?");

/***/ }),

/***/ "./src/js/createPetArray.js":
/*!**********************************!*\
  !*** ./src/js/createPetArray.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPetArray)\n/* harmony export */ });\n/* harmony import */ var _js_createBigArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/createBigArray.js */ \"./src/js/createBigArray.js\");\n\nfunction createPetArray(countPages, cardsOnPage) {\n  var bigArray = (0,_js_createBigArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().flat();\n  var arr2 = [];\n  while (arr2.length < countPages) {\n    var arr = [];\n    var newNumber = void 0;\n    while (arr.length < cardsOnPage) {\n      do {\n        newNumber = bigArray.splice(0, 1);\n      } while (arr.includes(newNumber));\n      arr.push(parseInt(newNumber.join()));\n    }\n    arr2.push(arr);\n  }\n  return arr2;\n}\n\n//# sourceURL=webpack://shelter/./src/js/createPetArray.js?");

/***/ }),

/***/ "./src/js/pagination.js":
/*!******************************!*\
  !*** ./src/js/pagination.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pagination: () => (/* binding */ pagination)\n/* harmony export */ });\n/* harmony import */ var _js_createPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/createPage.js */ \"./src/js/createPage.js\");\n/* harmony import */ var _js_createPetArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/createPetArray.js */ \"./src/js/createPetArray.js\");\n\n\nfunction pagination() {\n  var prev = document.querySelector('.prev');\n  var start = document.querySelector('.start');\n  var current = document.querySelector('.current');\n  var next = document.querySelector('.next');\n  var end = document.querySelector('.end');\n  var screenWidth = document.documentElement.offsetWidth;\n  var num = current.textContent;\n  var countPages;\n  var cardsOnPage;\n  if (screenWidth >= 1280) {\n    countPages = 6;\n    cardsOnPage = 8;\n  } else if (screenWidth >= 768) {\n    countPages = 8;\n    cardsOnPage = 6;\n  } else {\n    countPages = 16;\n    cardsOnPage = 3;\n  }\n  var petArray = (0,_js_createPetArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(countPages, cardsOnPage);\n  (0,_js_createPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(petArray[0]);\n  next.addEventListener('click', function () {\n    current.textContent = ++num;\n    (0,_js_createPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(petArray[num - 1]);\n    prev.disabled = false;\n    end.disabled = false;\n    start.disabled = false;\n    if (num === countPages) {\n      next.disabled = true;\n      end.disabled = true;\n    }\n  });\n  end.addEventListener('click', function () {\n    current.textContent = countPages;\n    (0,_js_createPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(petArray[countPages - 1]);\n    prev.disabled = false;\n    start.disabled = false;\n    next.disabled = true;\n    end.disabled = true;\n    num = countPages;\n  });\n  prev.addEventListener('click', function () {\n    current.textContent = --num;\n    (0,_js_createPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(petArray[num - 1]);\n    next.disabled = false;\n    end.disabled = false;\n    if (num === 1) {\n      prev.disabled = true;\n      start.disabled = true;\n    }\n  });\n  start.addEventListener('click', function () {\n    current.textContent = 1;\n    (0,_js_createPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(petArray[1 - 1]);\n    prev.disabled = true;\n    start.disabled = true;\n    next.disabled = false;\n    end.disabled = false;\n    num = 1;\n  });\n}\n\n//# sourceURL=webpack://shelter/./src/js/pagination.js?");

/***/ }),

/***/ "./src/js/showModal.js":
/*!*****************************!*\
  !*** ./src/js/showModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModal: () => (/* binding */ initModal),\n/* harmony export */   showModal: () => (/* binding */ showModal)\n/* harmony export */ });\n/* harmony import */ var _js_pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/pets.json */ \"./src/js/pets.json\");\n\nfunction initModal() {\n  var modal = document.createElement('div');\n  modal.className = 'modal';\n  modal.innerHTML = \"\\n    <div class=\\\"modal__wrapper\\\">\\n      <div class=\\\"modal__box\\\">\\n        <img class=\\\"modal__img\\\">\\n      </div>\\n      <div class=\\\"modal__inner\\\">\\n        <h3 class=\\\"modal__name\\\"></h3>\\n        <span class=\\\"modal__type\\\"></span>\\n        <span class=\\\"modal__breed\\\"></span>\\n        <p class=\\\"modal__description\\\"></p>\\n        <ul class=\\\"modal__list\\\"></ul>\\n      </div>\\n      <button class=\\\"modal__btn\\\" aria-label=\\\"close\\\"></button>\\n    </div>\\n  \";\n  document.body.appendChild(modal);\n  var btnClose = modal.querySelector('.modal__btn');\n  btnClose.addEventListener(\"click\", function () {\n    return closeModal();\n  });\n  modal.addEventListener(\"click\", function (e) {\n    if (!e.target.closest('.modal__wrapper')) {\n      closeModal();\n    }\n  });\n}\nfunction showModal(index) {\n  initModal();\n  var pet = _js_pets_json__WEBPACK_IMPORTED_MODULE_0__[index];\n  var modal = document.querySelector('.modal');\n  var image = modal.querySelector('.modal__img');\n  var name = modal.querySelector('.modal__name');\n  var type = modal.querySelector('.modal__type');\n  var breed = modal.querySelector('.modal__breed');\n  var descr = modal.querySelector('.modal__description');\n  var list = modal.querySelector('.modal__list');\n  image.src = \"/shelter/assets/images/modal/\".concat(pet[\"name\"], \".png\");\n  name.textContent = pet[\"name\"];\n  type.textContent = \"\".concat(pet[\"type\"], \" - \");\n  breed.textContent = pet[\"breed\"];\n  descr.textContent = pet[\"description\"];\n  list.innerHTML = \"\\n    <li class=\\\"modal__item\\\"><span class=\\\"modal__info-title\\\">Age:</span><span class=\\\"modal__info\\\">\".concat(pet[\"age\"], \"</span></li>\\n    <li class=\\\"modal__item\\\"><span class=\\\"modal__info-title\\\">Inoculations:</span><span class=\\\"modal__info\\\">\").concat(pet[\"inoculations\"].join(\", \"), \"</span></li>\\n    <li class=\\\"modal__item\\\"><span class=\\\"modal__info-title\\\">Diseases:</span><span class=\\\"modal__info\\\">\").concat(pet[\"diseases\"].join(\", \"), \"</span></li>\\n    <li class=\\\"modal__item\\\"><span class=\\\"modal__info-title\\\">Parasites:</span><span class=\\\"modal__info\\\">\").concat(pet[\"parasites\"].join(\", \"), \"</span></li>\\n  \");\n  modal.classList.add('modal--active');\n  document.body.classList.add(\"overflow-hidden\");\n}\nfunction closeModal() {\n  var modal = document.querySelector('.modal');\n  if (modal) {\n    modal.remove();\n  }\n  document.body.classList.remove(\"overflow-hidden\");\n}\n\n//# sourceURL=webpack://shelter/./src/js/showModal.js?");

/***/ }),

/***/ "./src/pages/pets/index.js":
/*!*********************************!*\
  !*** ./src/pages/pets/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/burger.js */ \"./src/js/burger.js\");\n/* harmony import */ var _js_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/pagination.js */ \"./src/js/pagination.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/pages/pets/style.scss\");\n\n\n\n(0,_js_burger_js__WEBPACK_IMPORTED_MODULE_0__.addBurgerHandler)();\n(0,_js_pagination_js__WEBPACK_IMPORTED_MODULE_1__.pagination)();\n\n//# sourceURL=webpack://shelter/./src/pages/pets/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/pets/style.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/pets/style.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_fonts_Arial_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/fonts/Arial.woff2 */ \"./src/assets/fonts/Arial.woff2\");\n/* harmony import */ var _assets_fonts_Georgia_Bold_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/fonts/Georgia-Bold.woff2 */ \"./src/assets/fonts/Georgia-Bold.woff2\");\n/* harmony import */ var _assets_fonts_Georgia_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/fonts/Georgia.woff2 */ \"./src/assets/fonts/Georgia.woff2\");\n/* harmony import */ var _assets_fonts_Georgia_Italic_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/fonts/Georgia-Italic.woff2 */ \"./src/assets/fonts/Georgia-Italic.woff2\");\n/* harmony import */ var _assets_images_icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/icons/close.svg */ \"./src/assets/images/icons/close.svg\");\n/* harmony import */ var _assets_images_footer_gradient_background_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/footer-gradient-background.png */ \"./src/assets/images/footer-gradient-background.png\");\n/* harmony import */ var _assets_images_footer_background_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/footer-background.png */ \"./src/assets/images/footer-background.png\");\n/* harmony import */ var _assets_images_icons_mail_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/icons/mail.svg */ \"./src/assets/images/icons/mail.svg\");\n/* harmony import */ var _assets_images_icons_mail_grey_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/icons/mail-grey.svg */ \"./src/assets/images/icons/mail-grey.svg\");\n/* harmony import */ var _assets_images_icons_phone_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/icons/phone.svg */ \"./src/assets/images/icons/phone.svg\");\n/* harmony import */ var _assets_images_icons_phone_grey_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/images/icons/phone-grey.svg */ \"./src/assets/images/icons/phone-grey.svg\");\n/* harmony import */ var _assets_images_icons_pin_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/images/icons/pin.svg */ \"./src/assets/images/icons/pin.svg\");\n/* harmony import */ var _assets_images_icons_pin_grey_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/images/icons/pin-grey.svg */ \"./src/assets/images/icons/pin-grey.svg\");\n// Imports\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_Arial_woff2__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_Georgia_Bold_woff2__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_Georgia_woff2__WEBPACK_IMPORTED_MODULE_4__);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_Georgia_Italic_woff2__WEBPACK_IMPORTED_MODULE_5__);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_footer_gradient_background_png__WEBPACK_IMPORTED_MODULE_7__);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_footer_background_png__WEBPACK_IMPORTED_MODULE_8__);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_icons_mail_svg__WEBPACK_IMPORTED_MODULE_9__);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_icons_mail_grey_svg__WEBPACK_IMPORTED_MODULE_10__);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_icons_phone_svg__WEBPACK_IMPORTED_MODULE_11__);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_icons_phone_grey_svg__WEBPACK_IMPORTED_MODULE_12__);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_icons_pin_svg__WEBPACK_IMPORTED_MODULE_13__);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_icons_pin_grey_svg__WEBPACK_IMPORTED_MODULE_14__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\n   ========================================================================== */\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\nhtml {\\n  line-height: 1.15;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n/**\\n * Remove the margin in all browsers.\\n */\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\nhr {\\n  box-sizing: content-box;\\n  /* 1 */\\n  height: 0;\\n  /* 1 */\\n  overflow: visible;\\n  /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\npre {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\nabbr[title] {\\n  border-bottom: none;\\n  /* 1 */\\n  text-decoration: underline;\\n  /* 2 */\\n  text-decoration: underline dotted;\\n  /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: 1.15;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\nbutton,\\n[type=button],\\n[type=reset],\\n[type=submit] {\\n  -webkit-appearance: button;\\n  -moz-appearance: button;\\n  appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\nbutton::-moz-focus-inner,\\n[type=button]::-moz-focus-inner,\\n[type=reset]::-moz-focus-inner,\\n[type=submit]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\nbutton:-moz-focusring,\\n[type=button]:-moz-focusring,\\n[type=reset]:-moz-focusring,\\n[type=submit]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\nlegend {\\n  box-sizing: border-box;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  display: table;\\n  /* 1 */\\n  max-width: 100%;\\n  /* 1 */\\n  padding: 0;\\n  /* 3 */\\n  white-space: normal;\\n  /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n[type=checkbox],\\n[type=radio] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n[type=number]::-webkit-inner-spin-button,\\n[type=number]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n[type=search] {\\n  -webkit-appearance: textfield;\\n  -moz-appearance: textfield;\\n  appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  -moz-appearance: button;\\n  appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 10+.\\n */\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n[hidden] {\\n  display: none;\\n}\\n\\nhtml {\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  box-sizing: inherit;\\n}\\n\\nul,\\nol,\\nbutton {\\n  padding: 0;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul,\\nol,\\nli,\\nfigure,\\nfigcaption,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n  display: block;\\n}\\n\\ninput {\\n  outline-color: transparent;\\n  border: none;\\n}\\n\\nbutton {\\n  background-color: transparent;\\n  outline-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.footer__location, .footer__phone, .footer__email, .modal__btn, .modal, .pagination__btn, .our-friends__item, .burger--open:before, .burger, .menu__link, .header__navigation, .header__wrapper, .header__logo, .slider__btn, .button {\\n  transition: all 0.5s ease-out;\\n}\\n\\nbody {\\n  font-family: \\\"Georgia\\\", Verdana, sans-serif;\\n}\\n\\n.menu__link, .header__subtitle {\\n  font-family: \\\"Arial\\\", Verdana, sans-serif;\\n}\\n\\n.burger:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  display: inline-block;\\n  background-color: currentColor;\\n  width: 100%;\\n  height: 2px;\\n}\\n\\n@font-face {\\n  font-family: \\\"Arial\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\");\\n  font-weight: 400;\\n  font-display: swap;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\\"Georgia\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff2\\\");\\n  font-weight: 700;\\n  font-display: swap;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\\"Georgia\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\");\\n  font-weight: 400;\\n  font-display: swap;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\\"Georgia\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff2\\\");\\n  font-weight: 400;\\n  font-display: swap;\\n  font-style: italic;\\n}\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n@media (max-width: 767px) {\\n  html {\\n    overflow-x: hidden;\\n  }\\n}\\n\\nbody {\\n  font-size: 15px;\\n  line-height: 16.5px;\\n  font-weight: 400;\\n  font-style: normal;\\n  color: #4C4C4C;\\n  position: relative;\\n}\\n@media (max-width: 767px) {\\n  body {\\n    overflow-x: hidden;\\n  }\\n}\\n\\nbody.overflow-hidden {\\n  overflow: hidden;\\n  background: rgba(41, 41, 41, 0.6);\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 10;\\n}\\n\\n.title {\\n  font-size: 35px;\\n  line-height: 45.5px;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n  color: #545454;\\n}\\n.title--white {\\n  color: #fff;\\n}\\n@media (max-width: 767px) {\\n  .title {\\n    font-size: 30px;\\n    text-align: center;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .title {\\n    text-align: center;\\n    font-size: 25px;\\n    line-height: 130%;\\n  }\\n}\\n\\n.main-title {\\n  color: #F1CDB3;\\n  font-size: 32px;\\n  line-height: 110%;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n}\\n.main-title--pets {\\n  color: #545454;\\n}\\n.main-title--pets:hover {\\n  color: #F1CDB3;\\n}\\n\\n.main {\\n  margin: -120px 0 0 0;\\n}\\n\\n.main--pets {\\n  margin: 0;\\n}\\n@media (max-width: 768px) {\\n  .main--pets {\\n    margin-bottom: -21px;\\n  }\\n}\\n\\n.section {\\n  padding-top: 80px;\\n  padding-bottom: 100px;\\n}\\n@media (max-width: 767px) {\\n  .section {\\n    padding-top: 60px;\\n    padding-bottom: 64px;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .section {\\n    padding-top: 41px;\\n    padding-bottom: 44px;\\n  }\\n}\\n\\n.button {\\n  display: inline-block;\\n  background-color: #F1CDB3;\\n  border-radius: 100px;\\n  padding: 15px 45px;\\n  font-size: 17px;\\n  line-height: 130%;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n  color: #292929;\\n  cursor: pointer;\\n}\\n.button:hover {\\n  background-color: #FDDCC4;\\n}\\n.button--clear {\\n  background-color: transparent;\\n  border: 2px solid #F1CDB3;\\n  padding-bottom: 11px;\\n  padding-top: 14px;\\n}\\n.button--long {\\n  border-radius: 10px;\\n  padding: 10px 15px;\\n  font-size: 17px;\\n  line-height: 130%;\\n  font-weight: 400;\\n  font-style: normal;\\n  color: #545454;\\n}\\n\\n.slider__btn {\\n  cursor: pointer;\\n}\\n.slider__btn:hover {\\n  background-color: #FDDCC4;\\n  border-color: #FDDCC4;\\n}\\n\\n.container {\\n  max-width: 1280px;\\n  margin: 0 auto;\\n  padding-left: 40px;\\n  padding-right: 40px;\\n}\\n@media (max-width: 768px) {\\n  .container {\\n    padding: 0 30px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .container {\\n    padding: 0 15px;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .container {\\n    padding: 0 10px;\\n  }\\n}\\n.container--flex {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n@media (max-width: 1220px) {\\n  .container--flex {\\n    justify-content: space-evenly;\\n    gap: 30px;\\n  }\\n}\\n@media (max-width: 768px) {\\n  .container--flex {\\n    gap: 0;\\n    justify-content: space-between;\\n    flex-direction: column-reverse;\\n  }\\n}\\n.container--center {\\n  text-align: center;\\n}\\n\\n.header {\\n  position: relative;\\n  z-index: 10;\\n  height: 60px;\\n  margin-top: 30px;\\n}\\n@media (max-width: 768px) {\\n  .header {\\n    margin-top: 30px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .header {\\n    margin-top: 0;\\n    padding-top: 30px;\\n  }\\n}\\n.header--mobile {\\n  margin-top: 0;\\n  padding-top: 30px;\\n}\\n.header__container {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n}\\n@media (max-width: 767px) {\\n  .header__container {\\n    padding: 0 20px;\\n    overflow-x: hidden;\\n  }\\n}\\n.header__title {\\n  margin-bottom: 10px;\\n}\\n.header__subtitle {\\n  font-size: 13px;\\n  line-height: 15px;\\n  font-weight: 400;\\n  font-style: normal;\\n  color: #fff;\\n  letter-spacing: 0.1em;\\n}\\n.header__subtitle--black {\\n  color: #545454;\\n}\\n.header__logo {\\n  text-align: center;\\n}\\n.header__logo:hover > .main-title {\\n  color: #F1CDB3;\\n}\\n.header--pets {\\n  margin-top: 30px;\\n  margin-bottom: 30px;\\n}\\n@media (max-width: 767px) {\\n  .header--pets {\\n    margin-top: 0;\\n    margin-bottom: 60px;\\n  }\\n}\\n.header__wrapper {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 2;\\n  background: rgba(41, 41, 41, 0.6);\\n  display: none;\\n  opacity: 0;\\n}\\n.header__wrapper--active {\\n  display: block;\\n  opacity: 0.6;\\n}\\n@media (max-width: 767px) {\\n  .header__navigation {\\n    position: absolute;\\n    background-color: #292929;\\n    padding: 30px 20px;\\n    top: 0px;\\n    text-align: center;\\n    right: 0;\\n    left: 55px;\\n    height: 110vh;\\n    transform: translateX(100%);\\n    z-index: 5;\\n  }\\n}\\n@media (max-width: 767px) and (max-width: 767px) {\\n  .header__navigation--active {\\n    transform: translateX(0);\\n  }\\n}\\n@media (max-width: 320px) {\\n  .header__navigation {\\n    left: 0;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .header--pets .header__navigation--active {\\n    background-color: #fff;\\n  }\\n}\\n\\n.menu {\\n  display: flex;\\n  gap: 36px;\\n  padding-top: 15px;\\n}\\n@media (max-width: 767px) {\\n  .menu {\\n    flex-direction: column;\\n    gap: 40px;\\n    align-items: center;\\n    padding: 219px 0 50px 0;\\n  }\\n}\\n.menu__link {\\n  font-size: 15px;\\n  line-height: 24px;\\n  font-weight: 400;\\n  font-style: normal;\\n  color: #CDCDCD;\\n}\\n@media (max-width: 767px) {\\n  .menu__link {\\n    font-size: 32px;\\n    line-height: 160%;\\n  }\\n}\\n.menu__link:hover {\\n  color: #FAFAFA;\\n}\\n.menu__link:active {\\n  color: #FAFAFA;\\n  border-bottom: 3px solid #F1CDB3;\\n}\\n.menu__link--active {\\n  color: #FAFAFA;\\n  border-bottom: 3px solid #F1CDB3;\\n  cursor: default;\\n  pointer-events: none;\\n}\\n.menu__link--pets {\\n  color: #545454;\\n}\\n.menu__link--pets:hover {\\n  color: #292929;\\n}\\n\\n.burger {\\n  display: none;\\n  min-width: 30px;\\n  height: 22px;\\n  border-top: 2px solid #F1CDB3;\\n  border-bottom: 2px solid #F1CDB3;\\n  position: relative;\\n  right: 0;\\n  top: 19px;\\n  color: #F1CDB3;\\n  z-index: 5;\\n}\\n.burger--pets {\\n  color: #000;\\n  border-color: #000;\\n}\\n.burger:before {\\n  top: 8px;\\n  right: 0;\\n}\\n@media (max-width: 767px) {\\n  .burger {\\n    display: block;\\n  }\\n}\\n.burger--open {\\n  transform: rotate(90deg);\\n}\\n.our-friends {\\n  background-color: #F6F6F6;\\n}\\n.our-friends__title {\\n  margin-bottom: 60px;\\n}\\n@media (max-width: 320px) {\\n  .our-friends__title {\\n    margin-bottom: 40px;\\n  }\\n}\\n@media (max-width: 768px) {\\n  .our-friends__title--pets {\\n    margin-bottom: 30px;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .our-friends__title--pets {\\n    margin-bottom: 42px;\\n  }\\n}\\n.our-friends__list {\\n  display: flex;\\n  gap: 90px;\\n}\\n@media (max-width: 1279px) {\\n  .our-friends__list {\\n    gap: 40px;\\n  }\\n}\\n@media (max-width: 768px) {\\n  .our-friends__list {\\n    gap: 40px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .our-friends__list {\\n    margin: 0 auto;\\n    width: 300px;\\n  }\\n}\\n.our-friends__list--pets {\\n  flex-wrap: wrap;\\n  gap: 30px 40px;\\n  padding: 0;\\n}\\n@media (max-width: 768px) {\\n  .our-friends__list--pets {\\n    max-height: 1365px;\\n    overflow: hidden;\\n    width: 100%;\\n    padding-left: 65px;\\n    padding-right: 20px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .our-friends__list--pets {\\n    padding-left: 20px;\\n    padding-right: 20px;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .our-friends__list--pets {\\n    gap: 20px;\\n  }\\n}\\n.our-friends__item {\\n  flex: 0 0 270px;\\n  width: 270px;\\n  overflow: hidden;\\n  background-color: #FAFAFA;\\n  text-align: center;\\n  padding-bottom: 30px;\\n  font-size: 20px;\\n  line-height: 22.7px;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n  border-radius: 9px;\\n  color: #545454;\\n  cursor: pointer;\\n}\\n.our-friends__item:hover {\\n  cursor: pointer;\\n  background-color: #fff;\\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\\n}\\n.our-friends__item:hover > .button {\\n  background-color: #FDDCC4;\\n  border-color: #FDDCC4;\\n}\\n.our-friends__img {\\n  border-radius: 9px 9px 0 0;\\n}\\n.our-friends__name {\\n  margin: 30px 0;\\n}\\n@media (max-width: 320px) {\\n  .our-friends__name {\\n    margin-top: 32px;\\n  }\\n}\\n\\n.pagination {\\n  display: flex;\\n  gap: 20px;\\n  width: 340px;\\n  margin: 61px auto 0;\\n}\\n@media (max-width: 768px) {\\n  .pagination {\\n    margin-top: 37px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .pagination {\\n    gap: 10px;\\n    justify-content: center;\\n    width: 100%;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .pagination {\\n    margin-top: 42px;\\n    margin-bottom: 20px;\\n    gap: 10px;\\n    width: 100%;\\n  }\\n}\\n.pagination__btn {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 52px;\\n  height: 52px;\\n  border: 2px solid #F1CDB3;\\n  border-radius: 100px;\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n}\\n.pagination__btn:disabled {\\n  border-color: #CDCDCD;\\n  cursor: default;\\n  pointer-events: none;\\n}\\n.pagination__btn:disabled > svg > path {\\n  fill: #CDCDCD;\\n}\\n.pagination__btn--active {\\n  background-color: #F1CDB3;\\n  color: #292929;\\n  font-size: 20px;\\n  line-height: 23px;\\n  font-weight: 400;\\n  font-style: normal;\\n  cursor: default;\\n  pointer-events: none;\\n}\\n.pagination__btn:hover {\\n  background-color: #FDDCC4;\\n  border-color: #FDDCC4;\\n}\\n\\n.modal {\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  overflow-y: hidden;\\n  overflow-x: hidden;\\n  z-index: 10;\\n  left: 0;\\n  top: 0;\\n  background-color: rgba(41, 41, 41, 0.6);\\n  display: none;\\n  opacity: 0;\\n  align-items: center;\\n  justify-content: center;\\n}\\n@media (max-width: 320px) {\\n  .modal {\\n    width: 320px;\\n    height: 100vh;\\n  }\\n}\\n.modal--active {\\n  display: flex;\\n  opacity: 1;\\n}\\n.modal__wrapper {\\n  position: relative;\\n  z-index: 11;\\n  width: 900px;\\n  display: flex;\\n  justify-content: center;\\n  background-color: #FAFAFA;\\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\\n  border-radius: 9px;\\n}\\n@media (max-width: 1220px) {\\n  .modal__wrapper {\\n    width: 630px;\\n    height: 350px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .modal__wrapper {\\n    width: 240px;\\n    height: auto;\\n  }\\n}\\n.modal__box {\\n  flex: 0 0 500px;\\n}\\n@media (max-width: 1220px) {\\n  .modal__box {\\n    flex: 0 0 350px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .modal__box {\\n    display: none;\\n  }\\n}\\n.modal__img {\\n  border-radius: 9px 0 0 9px;\\n}\\n.modal__inner {\\n  padding: 50px 20px 50px 30px;\\n  color: #000000;\\n  background-color: #FAFAFA;\\n}\\n@media (max-width: 1220px) {\\n  .modal__inner {\\n    padding: 10px 9px 10px 11px;\\n    border-radius: 9px;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .modal__inner {\\n    padding: 10px;\\n  }\\n}\\n.modal__name {\\n  font-size: 35px;\\n  line-height: 130%;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n  margin-bottom: 10px;\\n}\\n.modal__type,\\n.modal .modal__breed {\\n  font-size: 20px;\\n  line-height: 115%;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n}\\n.modal__description {\\n  padding: 40px 0;\\n  font-size: 15px;\\n  line-height: 110%;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n}\\n@media (max-width: 1220px) {\\n  .modal__description {\\n    font-size: 13px;\\n    padding: 20px 0;\\n  }\\n}\\n.modal__list {\\n  font-size: 15px;\\n  line-height: 110%;\\n  font-weight: 400;\\n  font-style: normal;\\n  list-style: disc;\\n  color: #F1CDB3;\\n  margin-left: 10px;\\n  letter-spacing: 0.06em;\\n}\\n@media (max-width: 767px) {\\n  .modal__list {\\n    margin-left: 15px;\\n  }\\n}\\n.modal__item:not(:last-child) {\\n  margin-bottom: 11px;\\n}\\n@media (max-width: 1220px) {\\n  .modal__item:not(:last-child) {\\n    margin-bottom: 5px;\\n  }\\n}\\n.modal__info-title {\\n  font-weight: 700;\\n  color: #000;\\n  margin-right: 5px;\\n}\\n.modal__info {\\n  color: #000;\\n}\\n.modal__btn {\\n  display: block;\\n  position: absolute;\\n  border-radius: 100%;\\n  width: 52px;\\n  height: 52px;\\n  border: 2px solid #F1CDB3;\\n  right: -42px;\\n  top: -52px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n  cursor: pointer;\\n}\\n.modal__btn:hover {\\n  background-color: #F1CDB3;\\n}\\n@media (max-width: 767px) {\\n  .modal__btn {\\n    right: -40px;\\n    top: -53px;\\n    box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\\n  }\\n}\\n\\n.footer {\\n  padding-top: 40px;\\n  color: #F1CDB3;\\n  font-size: 20px;\\n  line-height: 115%;\\n  font-weight: 400;\\n  font-style: normal;\\n  letter-spacing: 0.06em;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n  background-color: #5c5656;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n@media (max-width: 768px) {\\n  .footer {\\n    padding-top: 32px;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .footer {\\n    padding-top: 28px;\\n  }\\n}\\n.footer__container {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n@media (max-width: 1220px) {\\n  .footer__container {\\n    justify-content: center;\\n    flex-wrap: wrap;\\n    gap: 37px;\\n  }\\n}\\n@media (max-width: 768px) {\\n  .footer__container {\\n    justify-content: center;\\n    flex-wrap: wrap;\\n    gap: 37px;\\n  }\\n}\\n.footer__col {\\n  flex: 0 1 300px;\\n  margin-top: 17px;\\n}\\n@media (max-width: 768px) {\\n  .footer__col {\\n    margin-top: 0;\\n  }\\n}\\n.footer__title {\\n  margin-bottom: 34px;\\n}\\n.footer__address > .footer__title {\\n  margin-bottom: 26px;\\n}\\n@media (max-width: 320px) {\\n  .footer__address > .footer__title {\\n    margin-bottom: 31px;\\n    margin-right: 7px;\\n    margin-left: 7px;\\n  }\\n}\\n.footer__address {\\n  margin-right: 23px;\\n}\\n@media (max-width: 768px) {\\n  .footer__address {\\n    margin-right: 0;\\n  }\\n}\\n.footer__email {\\n  margin-bottom: 31px;\\n  padding-left: 60px;\\n  padding-top: 9px;\\n  padding-bottom: 9px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n  background-repeat: no-repeat;\\n  background-position: left 50%;\\n}\\n@media (max-width: 320px) {\\n  .footer__email {\\n    margin-left: 25px;\\n  }\\n}\\n.footer__email:hover {\\n  color: #545454;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n}\\n.footer__phone {\\n  padding-left: 60px;\\n  padding-top: 9px;\\n  padding-bottom: 9px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n  background-repeat: no-repeat;\\n  background-position: left 50%;\\n}\\n@media (max-width: 320px) {\\n  .footer__phone {\\n    margin-left: 30px;\\n  }\\n}\\n.footer__phone:hover {\\n  color: #545454;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n}\\n.footer__location {\\n  margin-bottom: 23px;\\n  padding-left: 40px;\\n  padding-top: 6px;\\n  padding-bottom: 9px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n  background-repeat: no-repeat;\\n  background-position: left 50%;\\n}\\n@media (max-width: 320px) {\\n  .footer__location {\\n    margin-bottom: 30px;\\n  }\\n}\\n.footer__location:hover {\\n  color: #545454;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n}\\n@media (max-width: 320px) {\\n  .footer__location + .footer__location {\\n    margin-bottom: 0;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .footer__img {\\n    width: 40%;\\n  }\\n}\\n@media (max-width: 320px) {\\n  .footer__img {\\n    width: 260px;\\n    height: 269px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shelter/./src/pages/pets/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/pages/pets/style.scss":
/*!***********************************!*\
  !*** ./src/pages/pets/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/pets/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shelter/./src/pages/pets/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images/footer-background.png":
/*!*************************************************!*\
  !*** ./src/assets/images/footer-background.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c52dd3e9a78b48674c4.png\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/footer-background.png?");

/***/ }),

/***/ "./src/assets/images/footer-gradient-background.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/footer-gradient-background.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bcaa7e0e24cca0519e5.png\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/footer-gradient-background.png?");

/***/ }),

/***/ "./src/assets/images/icons/close.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/close.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0e95bd299578aa31f7a.svg\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/icons/close.svg?");

/***/ }),

/***/ "./src/assets/images/icons/mail-grey.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/mail-grey.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54965cf727c86444c330.svg\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/icons/mail-grey.svg?");

/***/ }),

/***/ "./src/assets/images/icons/mail.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icons/mail.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"753b8077a7589902976d.svg\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/icons/mail.svg?");

/***/ }),

/***/ "./src/assets/images/icons/phone-grey.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/phone-grey.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f67594c4e467c11d6ad5.svg\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/icons/phone-grey.svg?");

/***/ }),

/***/ "./src/assets/images/icons/phone.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/phone.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9360ce44fbde4bec6fc6.svg\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/icons/phone.svg?");

/***/ }),

/***/ "./src/assets/images/icons/pin-grey.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/pin-grey.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1b18ae5dab534a9deb1.svg\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/icons/pin-grey.svg?");

/***/ }),

/***/ "./src/assets/images/icons/pin.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icons/pin.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f011e45af5211cffddc6.svg\";\n\n//# sourceURL=webpack://shelter/./src/assets/images/icons/pin.svg?");

/***/ }),

/***/ "./src/assets/fonts/Arial.woff2":
/*!**************************************!*\
  !*** ./src/assets/fonts/Arial.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"11afa102500e47f849b3.woff2\";\n\n//# sourceURL=webpack://shelter/./src/assets/fonts/Arial.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Georgia-Bold.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Georgia-Bold.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3fc24d368e768700b0a5.woff2\";\n\n//# sourceURL=webpack://shelter/./src/assets/fonts/Georgia-Bold.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Georgia-Italic.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Georgia-Italic.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb22f0b6927ca6c386e9.woff2\";\n\n//# sourceURL=webpack://shelter/./src/assets/fonts/Georgia-Italic.woff2?");

/***/ }),

/***/ "./src/assets/fonts/Georgia.woff2":
/*!****************************************!*\
  !*** ./src/assets/fonts/Georgia.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5d4e07a47234f2ac20c.woff2\";\n\n//# sourceURL=webpack://shelter/./src/assets/fonts/Georgia.woff2?");

/***/ }),

/***/ "./src/js/pets.json":
/*!**************************!*\
  !*** ./src/js/pets.json ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"Jennifer\",\"img\":\"/shelter/assets/images/pets/Jennifer.png\",\"type\":\"Dog\",\"breed\":\"Labrador\",\"description\":\"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\\'t hesitate to play up a storm in the house if she has all of her favorite toys.\",\"age\":\"2 months\",\"inoculations\":[\"none\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"name\":\"Sophia\",\"img\":\"/shelter/assets/images/pets/Sophia.png\",\"type\":\"Dog\",\"breed\":\"Shih tzu\",\"description\":\"Sophia here and I\\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\"age\":\"1 month\",\"inoculations\":[\"parvovirus\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"name\":\"Woody\",\"img\":\"/shelter/assets/images/pets/Woody.png\",\"type\":\"Dog\",\"breed\":\"Golden Retriever\",\"description\":\"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\",\"age\":\"3 years 6 months\",\"inoculations\":[\"adenovirus\",\"distemper\"],\"diseases\":[\"right back leg mobility reduced\"],\"parasites\":[\"none\"]},{\"name\":\"Scarlett\",\"img\":\"/shelter/assets/images/pets/Scarlett.png\",\"type\":\"Dog\",\"breed\":\"Jack Russell Terrier\",\"description\":\"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\",\"age\":\"3 months\",\"inoculations\":[\"parainfluenza\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"name\":\"Katrine\",\"img\":\"/shelter/assets/images/pets/Katrine.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\",\"age\":\"6 months\",\"inoculations\":[\"panleukopenia\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"name\":\"Timmy\",\"img\":\"/shelter/assets/images/pets/Timmy.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\",\"age\":\"2 years 3 months\",\"inoculations\":[\"calicivirus\",\"viral rhinotracheitis\"],\"diseases\":[\"kidney stones\"],\"parasites\":[\"none\"]},{\"name\":\"Freddie\",\"img\":\"/shelter/assets/images/pets/Freddie.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\",\"age\":\"2 months\",\"inoculations\":[\"rabies\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"name\":\"Charly\",\"img\":\"/shelter/assets/images/pets/Charly.png\",\"type\":\"Dog\",\"breed\":\"Jack Russell Terrier\",\"description\":\"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\",\"age\":\"8 years\",\"inoculations\":[\"bordetella bronchiseptica\",\"leptospirosis\"],\"diseases\":[\"deafness\",\"blindness\"],\"parasites\":[\"lice\",\"fleas\"]}]');\n\n//# sourceURL=webpack://shelter/./src/js/pets.json?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/shelter/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/pets/index.js");
/******/ 	
/******/ })()
;