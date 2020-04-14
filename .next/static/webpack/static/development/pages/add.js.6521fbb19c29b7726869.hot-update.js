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

  var resetPrice = function resetPrice(e) {
    e.target.value = "";
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
      resetDisplay();
      resetScreen();
      resetDimensions();
    }
  };

  return __jsx("div", {
    className: "jsx-2050445578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, error && __jsx("p", {
    className: "jsx-2050445578",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, error), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-2050445578" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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
      lineNumber: 56
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindRelease, {
    placeholder: "release year",
    className: "jsx-2050445578" + " " + (bindRelease && bindRelease.className != null && bindRelease.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
      lineNumber: 69
    },
    __self: this
  }), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindBrand, {
    placeholder: "brand",
    className: "jsx-2050445578" + " " + (bindBrand && bindBrand.className != null && bindBrand.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindDisplay, {
    placeholder: "display",
    className: "jsx-2050445578" + " " + (bindDisplay && bindDisplay.className != null && bindDisplay.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindScreen, {
    placeholder: "screen",
    className: "jsx-2050445578" + " " + (bindScreen && bindScreen.className != null && bindScreen.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, bindDimensions, {
    placeholder: "dimensions",
    className: "jsx-2050445578" + " " + (bindDimensions && bindDimensions.className != null && bindDimensions.className || "flex-item"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx("button", {
    className: "jsx-2050445578" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "ADD EXPENSE")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2050445578",
    __self: this
  }, ".container.jsx-2050445578{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 100px;}.flex-item.jsx-2050445578{margin-bottom:20px;border-radius:8px;border:solid 0.5px lightgray;}.btn.jsx-2050445578{background-color:gray;font-size:15px;height:30px;border-radius:15px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvc3BlY3VsYS9zcmMvY29tcG9uZW50cy9QaG9uZUZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dTLEFBRzBCLEFBS00sQUFLRyxtQkFKSixHQUtILGVBSmMsQUFLakIsWUFDTyxpQkFMckIsRUFNYyxNQWJVLE1BY3hCLHdFQWJrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9zcGVjdWxhL3NyYy9jb21wb25lbnRzL1Bob25lRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBQaG9uZUZvcm0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW25hbWUsIGJpbmROYW1lLCByZXNldE5hbWVdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtyZWxlYXNlLCBiaW5kUmVsZWFzZSwgcmVzZXRSZWxlYXNlXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYnJhbmQsIGJpbmRCcmFuZCwgcmVzZXRCcmFuZF0gPSB1c2VJbnB1dChcIlwiKTtcbiAgY29uc3QgW2Rpc3BsYXksIGJpbmREaXNwbGF5LCByZXNldERpc3BsYXldID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IFtzY3JlZW4sIGJpbmRTY3JlZW4sIHJlc2V0U2NyZWVuXSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBbZGltZW5zaW9ucywgYmluZERpbWVuc2lvbnMsIHJlc2V0RGltZW5zaW9uc10gPSB1c2VJbnB1dChcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCByZXNldFByaWNlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3Qgb25QcmljZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgLy8gUmVnZXggdG8gY29uc3RyYWluIGN1cnJlbmN5IGlucHV0IHRvIHR3byBkZWNpbWFsIHBsYWNlc1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbDtcbiAgICBpZiAoIXZhbCB8fCB2YWwubWF0Y2goL15cXGR7MSx9KFxcLlxcZHswLDJ9KT8kLykpIHtcbiAgICAgIHNldFByaWNlKHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFuYW1lIHx8ICFicmFuZCkge1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBOYW1lIGFuZCBCcmFuZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoXCJcIik7XG5cbiAgICAgIHByb3BzLm9uU3VibWl0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcmVsZWFzZSxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGJyYW5kLFxuICAgICAgICBkaXNwbGF5LFxuICAgICAgICBzY3JlZW4sXG4gICAgICAgIGRpbWVuc2lvbnMsXG4gICAgICB9KTtcblxuICAgICAgcmVzZXROYW1lKCk7XG4gICAgICByZXNldFJlbGVhc2UoKTtcbiAgICAgIHJlc2V0QnJhbmQoKTtcbiAgICAgIHJlc2V0RGlzcGxheSgpO1xuICAgICAgcmVzZXRTY3JlZW4oKTtcbiAgICAgIHJlc2V0RGltZW5zaW9ucygpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWluZXJcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWl0ZW1cIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB7Li4uYmluZE5hbWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwaG9uZSBuYW1lXCJcbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgey4uLmJpbmRSZWxlYXNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmVsZWFzZSB5ZWFyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblByaWNlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGhvbmUgcHJpY2VcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWl0ZW1cIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB7Li4uYmluZEJyYW5kfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYnJhbmRcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWl0ZW1cIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB7Li4uYmluZERpc3BsYXl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJkaXNwbGF5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgey4uLmJpbmRTY3JlZW59XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzY3JlZW5cIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWl0ZW1cIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB7Li4uYmluZERpbWVuc2lvbnN9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJkaW1lbnNpb25zXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5BREQgRVhQRU5TRTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZsZXgtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCBsaWdodGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob25lRm9ybTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/specula/src/components/PhoneForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneForm);

/***/ })

})
//# sourceMappingURL=add.js.6521fbb19c29b7726869.hot-update.js.map