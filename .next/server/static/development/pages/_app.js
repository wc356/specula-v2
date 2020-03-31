module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_context_phones_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/context/phones-context */ "./src/context/phones-context.js");
/* harmony import */ var _src_database_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/database/index */ "./src/database/index.js");
/* harmony import */ var _src_reducers_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/reducers/filters */ "./src/reducers/filters.js");
/* harmony import */ var _src_reducers_phones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/reducers/phones */ "./src/reducers/phones.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/specula/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const App = ({
  Component,
  pageProps
}) => {
  const {
    0: phones,
    1: phonesDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_src_reducers_phones__WEBPACK_IMPORTED_MODULE_4__["default"], _src_database_index__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    0: filters,
    1: filtersDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_src_reducers_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "",
    sortBy: "release"
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("Successfully Mounted"); // Load data from localStorage

    const phones = JSON.parse(localStorage.getItem("phones"));

    if (phones) {
      phonesDispatch({
        type: "POPULATE_PHONES",
        phones
      });
    }
  }, []); // Save item 'phones' to localStorage

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem("phones", JSON.stringify(phones));
  }, [phones]);
  return __jsx(_src_context_phones_context__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      phones,
      phonesDispatch,
      filters,
      filtersDispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(Component, _extends({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/context/phones-context.js":
/*!***************************************!*\
  !*** ./src/context/phones-context.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PhonesContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();


/***/ }),

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: "iPhone 11",
  name: "iPhone 11",
  release: "Sept 2019",
  price: "690.00",
  brand: "Apple",
  display: "Liquid Retina HD",
  screen: "6.1 in",
  dimensions: "2.98 x 5.94 x 0.33 in",
  img: "/img/iPhone-11.png"
}, {
  id: "iPhone 11 Pro",
  name: "iPhone 11 Pro",
  release: "Sept 2019",
  price: "999.00",
  brand: "Apple",
  display: "Super Retina XDR",
  screen: "5.8 in",
  dimensions: "2.81 x 5.67 x 0.32 in",
  img: "/img/iPhone-11-Pro.png"
}, {
  id: "iPhone 11 Pro Max",
  name: "iPhone 11 Pro Max",
  release: "Sept 2019",
  price: "1099.00",
  brand: "Apple",
  display: "Super Retina XDR",
  screen: "6.5 in",
  dimensions: "3.06 x 6.22 x 0.32 in",
  img: "/img/iPhone-11-Pro-Max.png"
}, {
  id: "iPhone Xr",
  name: "iPhone Xr",
  release: "Sept 2018",
  price: "599.00",
  brand: "Apple",
  display: "Liquid Retina HD",
  screen: "6.1 in",
  dimensions: "2.98 x 5.94 x 0.33 in",
  img: "/img/iPhone-Xr.png"
}, {
  id: "Galaxy Note 10",
  name: "Galaxy Note 10",
  release: "July 2019",
  price: "949.99",
  brand: "Samsung",
  display: "FHD+ Dynamic AMOLED",
  screen: "6.3 in",
  dimensions: "2.83 x 5.94 x 0.31 in",
  img: "/img/Galaxy-Note-10.jpg"
}, {
  id: "Galaxy Note 10+",
  name: "Galaxy Note 10+",
  release: "July 2019",
  price: "1099.09",
  brand: "Samsung",
  display: "Quad HD+ Dynamic AMOLED",
  screen: "6.8 in",
  dimensions: "3.04 x 6.39 x 0.31 in",
  img: "/img/Galaxy-Note-10+.jpg"
}, {
  id: "Galaxy S10",
  name: "Galaxy S10",
  release: "March 2019",
  price: "899.99",
  brand: "Samsung",
  display: "Quad HD+ Dynamic AMOLED",
  screen: "6.1 in",
  dimensions: "2.77 x 5.90 x 0.31 in",
  img: "/img/Galaxy-S10.jpg"
}, {
  id: "Galaxy S10+",
  name: "Galaxy S10+",
  release: "March 2019",
  price: "999.99",
  brand: "Samsung",
  display: "Quad HD+ Dynamic AMOLED",
  screen: "6.4 in",
  dimensions: "2.92 x 6.20 x 0.31 in",
  img: "/img/Galaxy-S10+.jpg"
}, {
  id: "Galaxy Fold",
  name: "Galaxy Fold",
  release: "Sept 2019",
  price: "1980.00",
  brand: "Samsung",
  display: "QXGA+ Dynamic AMOLED",
  screen: "7.3 in",
  dimensions: "4.64 x 6.33 x 0.30 in",
  img: "/img/Galaxy-Fold.png"
}, {
  id: "Pixel 3",
  name: "Pixel 3",
  release: "Sept 2019",
  price: "799.00",
  brand: "Google",
  display: "FHD+ flexible OLED",
  screen: "5.5 in",
  dimensions: "2.69 x 5.73 x 0.31 in",
  img: "/img/Pixel-3.png"
}]);

/***/ }),

/***/ "./src/reducers/filters.js":
/*!*********************************!*\
  !*** ./src/reducers/filters.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Filters Reducer
const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return _objectSpread({}, state, {
        text: action.text
      });

    case "SORT_BY_PRICE":
      return _objectSpread({}, state, {
        sortBy: "price"
      });

    case "SORT_BY_RELEASE":
      return _objectSpread({}, state, {
        sortBy: "release"
      });

    case "SORT_BY_BRAND":
      return _objectSpread({}, state, {
        sortBy: "brand"
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (filtersReducer);

/***/ }),

/***/ "./src/reducers/phones.js":
/*!********************************!*\
  !*** ./src/reducers/phones.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Phones Reducer
const phonesReducerDefaultState = [];

const phonesReducer = (state = phonesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PHONE":
      return [...state, action.phone];

    case "REMOVE_PHONE":
      return state.filter(({
        id
      }) => id !== action.id);

    case "EDIT_PHONE":
      return state.map(phone => {
        if (phone.id === action.id) {
          return _objectSpread({}, phone, {}, action.updates);
        } else {
          return phone;
        }
      });

    case "POPULATE_PHONES":
      return action.phones;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (phonesReducer);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map