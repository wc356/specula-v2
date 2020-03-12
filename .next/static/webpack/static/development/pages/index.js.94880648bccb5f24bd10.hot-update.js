webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/index */ "./database/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/specula/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Index = function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2859625574" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2859625574" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, renderPhones())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2859625574",
    __self: this
  }, ".container.jsx-2859625574{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUyxBQUcwQiwwRUFDSyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9zcGVjdWxhL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBwaG9uZXMgZnJvbSBcIi4uL2RhdGFiYXNlL2luZGV4XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWluZXJcIj57cmVuZGVyUGhvbmVzKCl9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IHJlbmRlclBob25lcyA9ICgpID0+IHtcbiAgY29uc3QgcGhvbmVMaXN0ID0gcGhvbmVzLm1hcChwaG9uZSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8YT57cGhvbmUubmFtZX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPntwaG9uZURlc2NyaXB0aW9uKHBob25lKX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gcGhvbmVMaXN0O1xufTtcblxuY29uc3QgcGhvbmVEZXNjcmlwdGlvbiA9IHBob25lID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBob25lKS5tYXAoa2V5ID0+IHtcbiAgICByZXR1cm4gPHAga2V5PXt1dWlkdjQoKX0+e2Ake2tleX06ICR7cGhvbmVba2V5XX1gfTwvcD47XG4gIH0pO1xuICByZXR1cm4ga2V5cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
};

var renderPhones = function renderPhones() {
  var phoneList = _database_index__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (phone) {
    return __jsx("li", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      className: "jsx-1758113731" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1758113731" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1758113731",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, phone.name)), __jsx("ul", {
      className: "jsx-1758113731",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1758113731",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, phoneDescription(phone))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1758113731",
      __self: this
    }, "li.jsx-1758113731{list-style:none;}.card.jsx-1758113731{border:1px solid black;}.title.jsx-1758113731{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1csQUFHK0IsQUFHTyxBQUdMLGdCQUxwQixFQU1BLEtBSEEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9zcGVjdWxhL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBwaG9uZXMgZnJvbSBcIi4uL2RhdGFiYXNlL2luZGV4XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWluZXJcIj57cmVuZGVyUGhvbmVzKCl9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IHJlbmRlclBob25lcyA9ICgpID0+IHtcbiAgY29uc3QgcGhvbmVMaXN0ID0gcGhvbmVzLm1hcChwaG9uZSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8YT57cGhvbmUubmFtZX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPntwaG9uZURlc2NyaXB0aW9uKHBob25lKX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gcGhvbmVMaXN0O1xufTtcblxuY29uc3QgcGhvbmVEZXNjcmlwdGlvbiA9IHBob25lID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBob25lKS5tYXAoa2V5ID0+IHtcbiAgICByZXR1cm4gPHAga2V5PXt1dWlkdjQoKX0+e2Ake2tleX06ICR7cGhvbmVba2V5XX1gfTwvcD47XG4gIH0pO1xuICByZXR1cm4ga2V5cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
  });
  return phoneList;
};

var phoneDescription = function phoneDescription(phone) {
  var keys = Object.keys(phone).map(function (key) {
    return __jsx("p", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "".concat(key, ": ").concat(phone[key]));
  });
  return keys;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.94880648bccb5f24bd10.hot-update.js.map