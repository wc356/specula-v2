webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/PhoneListItem.js":
/*!*****************************************!*\
  !*** ./src/components/PhoneListItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _context_phones_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/phones-context */ "./src/context/phones-context.js");
/* harmony import */ var _actions_phones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/phones */ "./src/actions/phones.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/specula/src/components/PhoneListItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Export stateless functional component






var PhoneListItem = function PhoneListItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      release = _ref.release,
      price = _ref.price,
      brand = _ref.brand,
      display = _ref.display,
      screen = _ref.screen,
      dimensions = _ref.dimensions;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_phones_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      phonesDispatch = _useContext.phonesDispatch;

  return __jsx("li", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
    className: "jsx-3175948833" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3175948833" + " " + "img-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3175948833" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3175948833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, name))), __jsx("ul", {
    className: "jsx-3175948833" + " " + "phone-spec",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3175948833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Released: ", release), __jsx("li", {
    className: "jsx-3175948833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Price: $", price), __jsx("li", {
    className: "jsx-3175948833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Brand: ", brand), __jsx("li", {
    className: "jsx-3175948833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Display: ", display), __jsx("li", {
    className: "jsx-3175948833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Screen: ", screen), __jsx("li", {
    className: "jsx-3175948833",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Dimensions: ", dimensions)), __jsx("div", {
    className: "jsx-3175948833" + " " + "btn-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      phonesDispatch(Object(_actions_phones__WEBPACK_IMPORTED_MODULE_5__["removePhone"])({
        id: id
      }));
    },
    className: "jsx-3175948833" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Remove")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3175948833",
    __self: this
  }, ".card.jsx-3175948833{display:block;min-height:425px;width:240px;border:1px solid #eee;font-size:14px;margin-bottom:15px;padding-top:20px;border-radius:5px;-webkit-transition:all 0.15s;transition:all 0.15s;box-shadow:2px 2px 8px lightgray;}.card.jsx-3175948833:hover{-webkit-transform:translateY(-13px);-ms-transform:translateY(-13px);transform:translateY(-13px);border:1px solid pink;}.img-container.jsx-3175948833{display:block;margin:0 auto;height:250px;width:200px;border-radius:3px;background-color:lavender;}.phone-spec.jsx-3175948833{line-height:1.5;padding:0 20px;}.title.jsx-3175948833{text-align:center;margin:10px 0;font-weight:600;}.btn-container.jsx-3175948833{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.btn.jsx-3175948833{display:block;margin:10px 0;width:100px;height:30px;border-radius:10px;background-color:pink;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9zcmMvY29tcG9uZW50cy9QaG9uZUxpc3RJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUcyQixBQVljLEFBSWQsQUFRRSxBQUlFLEFBS0wsQUFJQyxjQXBDRyxBQWdCSCxBQXFCQSxFQWJDLEVBSUQsVUFYRCxBQXFCRCxHQXJDQSxBQXdCZCxDQUlrQixRQVVKLENBckJBLEVBaEJVLEtBNEJ4QixJQVVxQixDQXJCRCxZQWhCSCxNQWlCVyxBQXFCSixHQVJDLE1BN0JKLGFBc0NQLEdBOUJVLENBU3hCLEVBaEJtQixNQXNDbkIsV0FyQ29CLEVBT3BCLGdCQU51Qix1Q0EyQnZCLFdBMUJtQyxpQ0FDbkMiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9zcGVjdWxhL3NyYy9jb21wb25lbnRzL1Bob25lTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnQgc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IFBob25lc0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcGhvbmVzLWNvbnRleHRcIjtcbmltcG9ydCB7IHJlbW92ZVBob25lIH0gZnJvbSBcIi4uL2FjdGlvbnMvcGhvbmVzXCI7XG5cbmNvbnN0IFBob25lTGlzdEl0ZW0gPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgcmVsZWFzZSxcbiAgcHJpY2UsXG4gIGJyYW5kLFxuICBkaXNwbGF5LFxuICBzY3JlZW4sXG4gIGRpbWVuc2lvbnNcbn0pID0+IHtcbiAgY29uc3QgeyBwaG9uZXNEaXNwYXRjaCB9ID0gdXNlQ29udGV4dChQaG9uZXNDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhPntuYW1lfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGhvbmUtc3BlY1wiPlxuICAgICAgICA8bGk+UmVsZWFzZWQ6IHtyZWxlYXNlfTwvbGk+XG4gICAgICAgIDxsaT5QcmljZTogJHtwcmljZX08L2xpPlxuICAgICAgICA8bGk+QnJhbmQ6IHticmFuZH08L2xpPlxuICAgICAgICA8bGk+RGlzcGxheToge2Rpc3BsYXl9PC9saT5cbiAgICAgICAgPGxpPlNjcmVlbjoge3NjcmVlbn08L2xpPlxuICAgICAgICA8bGk+RGltZW5zaW9uczoge2RpbWVuc2lvbnN9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcGhvbmVzRGlzcGF0Y2gocmVtb3ZlUGhvbmUoeyBpZCB9KSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlbW92ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggbGlnaHRncmF5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzcHgpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcGluaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBob25lLXNwZWMge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZUxpc3RJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/src/components/PhoneListItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneListItem);

/***/ })

})
//# sourceMappingURL=index.js.a0b4e42ae0b24f67f5fe.hot-update.js.map