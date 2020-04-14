webpackHotUpdate("static/development/pages/add.js",{

/***/ "./src/components/PhoneForm.js":
/*!*************************************!*\
  !*** ./src/components/PhoneForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./src/hooks/useInput.js");


var _jsxFileName = "/Users/WooChoi/Desktop/React.js/specula/src/components/PhoneForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var PhoneForm = function PhoneForm(props) {
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
      name = _useInput2[0],
      bindName = _useInput2[1],
      resetName = _useInput2[2];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 3),
      release = _useInput4[0],
      bindRelease = _useInput4[1],
      resetRelease = _useInput4[2];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      price = _useState[0],
      setPrice = _useState[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput5, 3),
      brand = _useInput6[0],
      bindBrand = _useInput6[1],
      resetBrand = _useInput6[2];

  var _useInput7 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
      _useInput8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput7, 3),
      display = _useInput8[0],
      bindDisplay = _useInput8[1],
      resetDisplay = _useInput8[2];

  var _useInput9 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
      _useInput10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput9, 3),
      screen = _useInput10[0],
      bindScreen = _useInput10[1],
      resetScreen = _useInput10[2];

  var _useInput11 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(""),
      _useInput12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput11, 3),
      dimensions = _useInput12[0],
      bindDimensions = _useInput12[1],
      resetDimensions = _useInput12[2];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var resetPrice = function resetPrice() {
    setPrice("");
  };

  var onPriceChange = function onPriceChange(e) {
    // Regex to constrain currency input to two decimal places
    var val = e.target.val;

    if (!val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setPrice(val);
    }
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();

    if (!name || !brand) {
      setError("Please provide Name and Brand");
    } else {
      setError("");
      props.onSubmit({
        name: name,
        release: release,
        price: price,
        brand: brand,
        display: display,
        screen: screen,
        dimensions: dimensions
      });
      resetName();
      resetRelease();
      resetBrand();
      resetPrice();
      resetDisplay();
      resetScreen();
      resetDimensions();
    }
  };

  return __jsx("div", {
    className: "jsx-2050445578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, error && __jsx("p", {
    className: "jsx-2050445578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, error), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-2050445578" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindName, {
    placeholder: "phone name",
    autoFocus: true,
    className: "jsx-2050445578" + " " + (bindName && bindName.className != null && bindName.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindRelease, {
    placeholder: "release year",
    className: "jsx-2050445578" + " " + (bindRelease && bindRelease.className != null && bindRelease.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("input", {
    type: "text",
    value: price,
    onChange: onPriceChange,
    placeholder: "phone price",
    className: "jsx-2050445578" + " " + "flex-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindBrand, {
    placeholder: "brand",
    className: "jsx-2050445578" + " " + (bindBrand && bindBrand.className != null && bindBrand.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindDisplay, {
    placeholder: "display",
    className: "jsx-2050445578" + " " + (bindDisplay && bindDisplay.className != null && bindDisplay.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindScreen, {
    placeholder: "screen",
    className: "jsx-2050445578" + " " + (bindScreen && bindScreen.className != null && bindScreen.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindDimensions, {
    placeholder: "dimensions",
    className: "jsx-2050445578" + " " + (bindDimensions && bindDimensions.className != null && bindDimensions.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx("button", {
    className: "jsx-2050445578" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "ADD EXPENSE")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2050445578",
    __self: this
  }, ".container.jsx-2050445578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 100px;}.flex-item.jsx-2050445578{margin-bottom:20px;border-radius:8px;border:solid 0.5px lightgray;}.btn.jsx-2050445578{background-color:gray;font-size:15px;height:30px;border-radius:15px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9zcmMvY29tcG9uZW50cy9QaG9uZUZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdTLEFBRzBCLEFBS00sQUFLRyxtQkFKSixHQUtILGVBSmMsQUFLakIsWUFDTyxpQkFMckIsRUFNYyxNQWJVLE1BY3hCLHdFQWJrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9zcGVjdWxhL3NyYy9jb21wb25lbnRzL1Bob25lRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBQaG9uZUZvcm0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW25hbWUsIGJpbmROYW1lLCByZXNldE5hbWVdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtyZWxlYXNlLCBiaW5kUmVsZWFzZSwgcmVzZXRSZWxlYXNlXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYnJhbmQsIGJpbmRCcmFuZCwgcmVzZXRCcmFuZF0gPSB1c2VJbnB1dChcIlwiKTtcbiAgY29uc3QgW2Rpc3BsYXksIGJpbmREaXNwbGF5LCByZXNldERpc3BsYXldID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtzY3JlZW4sIGJpbmRTY3JlZW4sIHJlc2V0U2NyZWVuXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbZGltZW5zaW9ucywgYmluZERpbWVuc2lvbnMsIHJlc2V0RGltZW5zaW9uc10gPSB1c2VJbnB1dChcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCByZXNldFByaWNlID0gKCkgPT4ge1xuICAgIHNldFByaWNlKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJpY2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIC8vIFJlZ2V4IHRvIGNvbnN0cmFpbiBjdXJyZW5jeSBpbnB1dCB0byB0d28gZGVjaW1hbCBwbGFjZXNcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWw7XG4gICAgaWYgKCF2YWwgfHwgdmFsLm1hdGNoKC9eXFxkezEsfShcXC5cXGR7MCwyfSk/JC8pKSB7XG4gICAgICBzZXRQcmljZSh2YWwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmFtZSB8fCAhYnJhbmQpIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgTmFtZSBhbmQgQnJhbmRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKFwiXCIpO1xuXG4gICAgICBwcm9wcy5vblN1Ym1pdCh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHJlbGVhc2UsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBicmFuZCxcbiAgICAgICAgZGlzcGxheSxcbiAgICAgICAgc2NyZWVuLFxuICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgfSk7XG5cbiAgICAgIHJlc2V0TmFtZSgpO1xuICAgICAgcmVzZXRSZWxlYXNlKCk7XG4gICAgICByZXNldEJyYW5kKCk7XG4gICAgICByZXNldFByaWNlKCk7XG4gICAgICByZXNldERpc3BsYXkoKTtcbiAgICAgIHJlc2V0U2NyZWVuKCk7XG4gICAgICByZXNldERpbWVuc2lvbnMoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2Vycm9yICYmIDxwPntlcnJvcn08L3A+fVxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgey4uLmJpbmROYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGhvbmUgbmFtZVwiXG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtaXRlbVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHsuLi5iaW5kUmVsZWFzZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlbGVhc2UgeWVhclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtaXRlbVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25QcmljZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBob25lIHByaWNlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgey4uLmJpbmRCcmFuZH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImJyYW5kXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgey4uLmJpbmREaXNwbGF5fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGlzcGxheVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtaXRlbVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHsuLi5iaW5kU2NyZWVufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2NyZWVuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgey4uLmJpbmREaW1lbnNpb25zfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGltZW5zaW9uc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+QUREIEVYUEVOU0U8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4LWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggbGlnaHRncmF5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZUZvcm07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/src/components/PhoneForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneForm);

/***/ })

})
//# sourceMappingURL=add.js.5557fd7225aaaa65c2f3.hot-update.js.map