webpackHotUpdate("static/development/pages/index.js",{

/***/ "./AC/index.js":
/*!*********************!*\
  !*** ./AC/index.js ***!
  \*********************/
/*! exports provided: increment, decrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants.js");

var increment = function increment() {
  return function (dispatch) {
    return dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]
    });
  };
};
var decrement = function decrement() {
  return function (dispatch) {
    return dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["DECREMENT"]
    });
  };
};

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: INCREMENT, DECREMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';

/***/ })

})
//# sourceMappingURL=index.js.560d04d91d0d4759b19b.hot-update.js.map