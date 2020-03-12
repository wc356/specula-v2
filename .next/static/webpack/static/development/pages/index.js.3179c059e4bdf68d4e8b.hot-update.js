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
      className: "jsx-316405885" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-316405885" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-316405885",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, phone.name)), __jsx("ul", {
      className: "jsx-316405885",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-316405885",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, phoneDescription(phone))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "316405885",
      __self: this
    }, "li.jsx-316405885{list-style:none;}.card.jsx-316405885{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlcsQUFHK0IsQUFHSCxnQkFGZiwwREFHQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3NwZWN1bGEvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHBob25lcyBmcm9tIFwiLi4vZGF0YWJhc2UvaW5kZXhcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHVsPntyZW5kZXJQaG9uZXMoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCByZW5kZXJQaG9uZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHBob25lTGlzdCA9IHBob25lcy5tYXAocGhvbmUgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPGE+e3Bob25lLm5hbWV9PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT57cGhvbmVEZXNjcmlwdGlvbihwaG9uZSl9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gcGhvbmVMaXN0O1xufTtcblxuY29uc3QgcGhvbmVEZXNjcmlwdGlvbiA9IHBob25lID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBob25lKS5tYXAoa2V5ID0+IHtcbiAgICByZXR1cm4gPHAga2V5PXt1dWlkdjQoKX0+e2Ake2tleX06ICR7cGhvbmVba2V5XX1gfTwvcD47XG4gIH0pO1xuICByZXR1cm4ga2V5cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
  });
  return phoneList;
};

var phoneDescription = function phoneDescription(phone) {
  var keys = Object.keys(phone).map(function (key) {
    return __jsx("p", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "".concat(key, ": ").concat(phone[key]));
  });
  return keys;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3179c059e4bdf68d4e8b.hot-update.js.map