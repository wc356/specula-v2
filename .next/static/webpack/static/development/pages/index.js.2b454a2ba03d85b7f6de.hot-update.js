webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _src_components_PhoneDashboardPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/PhoneDashboardPage */ "./src/components/PhoneDashboardPage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_actions_phones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/actions/phones */ "./src/actions/phones.js");
/* harmony import */ var _src_selectors_phones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/selectors/phones */ "./src/selectors/phones.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/specula/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var store = Object(_src_store_configureStore__WEBPACK_IMPORTED_MODULE_1__["default"])();
store.dispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_5__["addPhone"])({
  name: "iPhone 8",
  release: "Sept 2018",
  price: 900
}));
store.dispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_5__["addPhone"])({
  name: "iPhone 11",
  release: "Jan 2018",
  price: 900
}));
var state = store.getState();
var visiblePhones = Object(_src_selectors_phones__WEBPACK_IMPORTED_MODULE_6__["default"])(state.phones, state.filters);
console.log(visiblePhones);

var Index = function Index() {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_src_components_PhoneDashboardPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(store)(Index));

/***/ })

})
//# sourceMappingURL=index.js.2b454a2ba03d85b7f6de.hot-update.js.map