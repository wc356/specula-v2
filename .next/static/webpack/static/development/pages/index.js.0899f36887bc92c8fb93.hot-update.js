webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _src_components_PhoneDashboardPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/PhoneDashboardPage */ "./src/components/PhoneDashboardPage.js");
/* harmony import */ var _src_actions_phones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/actions/phones */ "./src/actions/phones.js");
/* harmony import */ var _src_selectors_phones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/selectors/phones */ "./src/selectors/phones.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/specula/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Index = function Index(props) {
  return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_src_components_PhoneDashboardPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Prop from Redux ", props.name));
};

Index.getInitialProps = function (_ref) {
  var store = _ref.store,
      isServer = _ref.isServer,
      pathname = _ref.pathname,
      query = _ref.query;
  store.dispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_5__["addPhone"])({
    name: "iPhone 8",
    release: "Sept 2018",
    price: 900
  }));
  store.dispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_5__["addPhone"])({
    name: "iPhone 11",
    release: "Jan 2018",
    price: 1600
  }));
  var state = store.getState();
  Object(_src_selectors_phones__WEBPACK_IMPORTED_MODULE_6__["default"])(state.phones, state.filters);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state;
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.0899f36887bc92c8fb93.hot-update.js.map