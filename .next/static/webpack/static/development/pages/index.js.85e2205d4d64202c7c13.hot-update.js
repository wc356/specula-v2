webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _database_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database/index */ "./database/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var _jsxFileName = "/Users/WooChoi/Desktop/React.js/specula/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Index = function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-781323850" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-781323850" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, renderPhones())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "781323850",
    __self: this
  }, ".container.jsx-781323850{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZUyxBQUcwQiwwRUFDZ0IsMkhBQ2QseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgcGhvbmVzIGZyb20gXCIuLi9kYXRhYmFzZS9pbmRleFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e3JlbmRlclBob25lcygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IHJlbmRlclBob25lcyA9ICgpID0+IHtcbiAgY29uc3QgcGhvbmVMaXN0ID0gcGhvbmVzLm1hcChwaG9uZSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgPGE+e3Bob25lLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwaG9uZS1zcGVjXCI+XG4gICAgICAgICAgPGxpPntwaG9uZURlc2NyaXB0aW9uKHBob25lKX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4LWJveDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBob25lLXNwZWMge1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gcGhvbmVMaXN0O1xufTtcblxuY29uc3QgcGhvbmVEZXNjcmlwdGlvbiA9IHBob25lID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBob25lKS5tYXAoa2V5ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHAga2V5PXt1dWlkdjQoKX0+e2NhcGl0YWxpemVGaXJzdExldHRlcihrZXkpICsgYDogJHtwaG9uZVtrZXldfWB9PC9wPlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoW2ZpcnN0LCAuLi5yZXN0XSkge1xuICAgICAgcmV0dXJuIFtmaXJzdC50b1VwcGVyQ2FzZSgpLCAuLi5yZXN0XS5qb2luKFwiXCIpO1xuICAgIH1cbiAgfSk7XG4gIGtleXMuc2hpZnQoKTtcbiAgcmV0dXJuIGtleXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
};

var renderPhones = function renderPhones() {
  var phoneList = _database_index__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (phone) {
    return __jsx("li", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
      className: "jsx-945619341" + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-945619341" + " " + "img-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-945619341" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-945619341",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, phone.name))), __jsx("ul", {
      className: "jsx-945619341" + " " + "phone-spec",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-945619341",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, phoneDescription(phone))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "945619341",
      __self: this
    }, ".card.jsx-945619341{display:block;border:1px solid black;font-size:14px;margin-bottom:15px;}.img-container.jsx-945619341{display:flex-box;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:250px;width:200px;background-color:lightgray;}.phone-spec.jsx-945619341{line-height:1.5;padding:0 10px;}.title.jsx-945619341{text-align:center;margin:10px 0;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ1csQUFHNkIsQUFNRyxBQU9ELEFBSUUsY0FoQkssRUFhUixDQVBRLENBV1QsYUFIaEIsQ0FJa0IsS0FqQkQsV0FrQmpCLElBakJxQixtQkFDckIsNkNBSWUsYUFDRCxZQUNlLDJCQUM3QiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3NwZWN1bGEvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHBob25lcyBmcm9tIFwiLi4vZGF0YWJhc2UvaW5kZXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntyZW5kZXJQaG9uZXMoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCByZW5kZXJQaG9uZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHBob25lTGlzdCA9IHBob25lcy5tYXAocGhvbmUgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIDxhPntwaG9uZS5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGhvbmUtc3BlY1wiPlxuICAgICAgICAgIDxsaT57cGhvbmVEZXNjcmlwdGlvbihwaG9uZSl9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5waG9uZS1zcGVjIHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIHBob25lTGlzdDtcbn07XG5cbmNvbnN0IHBob25lRGVzY3JpcHRpb24gPSBwaG9uZSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwaG9uZSkubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGtleT17dXVpZHY0KCl9PntjYXBpdGFsaXplRmlyc3RMZXR0ZXIoa2V5KSArIGA6ICR7cGhvbmVba2V5XX1gfTwvcD5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFtmaXJzdCwgLi4ucmVzdF0pIHtcbiAgICAgIHJldHVybiBbZmlyc3QudG9VcHBlckNhc2UoKSwgLi4ucmVzdF0uam9pbihcIlwiKTtcbiAgICB9XG4gIH0pO1xuICBrZXlzLnNoaWZ0KCk7XG4gIHJldHVybiBrZXlzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/pages/index.js */"));
  });
  return phoneList;
};

var phoneDescription = function phoneDescription(phone) {
  var keys = Object.keys(phone).map(function (key) {
    return __jsx("p", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, capitalizeFirstLetter(key) + ": ".concat(phone[key]));

    function capitalizeFirstLetter(_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref),
          first = _ref2[0],
          rest = _ref2.slice(1);

      return [first.toUpperCase()].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rest)).join("");
    }
  });
  keys.shift();
  return keys;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.85e2205d4d64202c7c13.hot-update.js.map