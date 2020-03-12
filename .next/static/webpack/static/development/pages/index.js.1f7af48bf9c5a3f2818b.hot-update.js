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
    className: "jsx-3846453990" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3846453990" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, renderPhones())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3846453990",
    __self: this
  }, ".container.jsx-3846453990{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUyxBQUcwQiwwRUFDZiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3NwZWN1bGEvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHBob25lcyBmcm9tIFwiLi4vZGF0YWJhc2UvaW5kZXhcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntyZW5kZXJQaG9uZXMoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyUGhvbmVzID0gKCkgPT4ge1xuICBjb25zdCBwaG9uZUxpc3QgPSBwaG9uZXMubWFwKHBob25lID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17dXVpZHY0KCl9IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxhPntwaG9uZS5uYW1lfTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+e3Bob25lRGVzY3JpcHRpb24ocGhvbmUpfTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBwaG9uZUxpc3Q7XG59O1xuXG5jb25zdCBwaG9uZURlc2NyaXB0aW9uID0gcGhvbmUgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGhvbmUpLm1hcChrZXkgPT4ge1xuICAgIHJldHVybiA8cCBrZXk9e3V1aWR2NCgpfT57YCR7a2V5fTogJHtwaG9uZVtrZXldfWB9PC9wPjtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
};

var renderPhones = function renderPhones() {
  var phoneList = _database_index__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (phone) {
    return __jsx("li", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      className: "jsx-3049589671" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3049589671" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3049589671",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, phone.name)), __jsx("ul", {
      className: "jsx-3049589671",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-3049589671",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, phoneDescription(phone))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3049589671",
      __self: this
    }, "li.jsx-3049589671{list-style:none;}.card.jsx-3049589671{border:1px solid black;}.title.jsx-3049589671{-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1csQUFHK0IsQUFHTyxBQUdMLGdCQUxwQixPQUdBLDhFQUdBIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgcGhvbmVzIGZyb20gXCIuLi9kYXRhYmFzZS9pbmRleFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e3JlbmRlclBob25lcygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCByZW5kZXJQaG9uZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHBob25lTGlzdCA9IHBob25lcy5tYXAocGhvbmUgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPGE+e3Bob25lLm5hbWV9PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT57cGhvbmVEZXNjcmlwdGlvbihwaG9uZSl9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIHBob25lTGlzdDtcbn07XG5cbmNvbnN0IHBob25lRGVzY3JpcHRpb24gPSBwaG9uZSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwaG9uZSkubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIDxwIGtleT17dXVpZHY0KCl9PntgJHtrZXl9OiAke3Bob25lW2tleV19YH08L3A+O1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
  });
  return phoneList;
};

var phoneDescription = function phoneDescription(phone) {
  var keys = Object.keys(phone).map(function (key) {
    return __jsx("p", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "".concat(key, ": ").concat(phone[key]));
  });
  return keys;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1f7af48bf9c5a3f2818b.hot-update.js.map