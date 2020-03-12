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
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, renderPhones())));
};

var renderPhones = function renderPhones() {
  var phoneList = _database_index__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (phone) {
    return __jsx("li", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      className: "jsx-2904379972" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2904379972" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2904379972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, phone.name)), __jsx("ul", {
      className: "jsx-2904379972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-2904379972",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, phoneDescription(phone))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2904379972",
      __self: this
    }, "li.jsx-2904379972{list-style:none;}.card.jsx-2904379972{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:pink;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlcsQUFHK0IsQUFHSCxnQkFGZiwwREFHd0Isc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgcGhvbmVzIGZyb20gXCIuLi9kYXRhYmFzZS9pbmRleFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8dWw+e3JlbmRlclBob25lcygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IHJlbmRlclBob25lcyA9ICgpID0+IHtcbiAgY29uc3QgcGhvbmVMaXN0ID0gcGhvbmVzLm1hcChwaG9uZSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICA8YT57cGhvbmUubmFtZX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPntwaG9uZURlc2NyaXB0aW9uKHBob25lKX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBwaG9uZUxpc3Q7XG59O1xuXG5jb25zdCBwaG9uZURlc2NyaXB0aW9uID0gcGhvbmUgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGhvbmUpLm1hcChrZXkgPT4ge1xuICAgIHJldHVybiA8cCBrZXk9e3V1aWR2NCgpfT57YCR7a2V5fTogJHtwaG9uZVtrZXldfWB9PC9wPjtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
  });
  return phoneList;
};

var phoneDescription = function phoneDescription(phone) {
  var keys = Object.keys(phone).map(function (key) {
    return __jsx("p", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "".concat(key, ": ").concat(phone[key]));
  });
  return keys;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5174923b06b81c14bc59.hot-update.js.map