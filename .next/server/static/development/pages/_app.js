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
/* harmony import */ var _src_reducers_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/reducers/filters */ "./src/reducers/filters.js");
/* harmony import */ var _src_reducers_phones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/reducers/phones */ "./src/reducers/phones.js");
/* harmony import */ var _src_actions_phones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/actions/phones */ "./src/actions/phones.js");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_src_reducers_phones__WEBPACK_IMPORTED_MODULE_3__["default"], []);
  const {
    0: filters,
    1: filtersDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_src_reducers_filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "",
    sortBy: "release"
  }); // componentDidMount() - Initial Render Phones

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("Successfully Mounted");
    phonesDispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_4__["addPhone"])({
      name: "iPhone 8",
      release: "Sept 2018",
      price: 900
    }));
    phonesDispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_4__["addPhone"])({
      name: "iPhone 11",
      release: "Oct 2019",
      price: 1800
    }));
    phonesDispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_4__["addPhone"])({
      name: "iPhone 12",
      release: "Jan 2020",
      price: 3200
    }));
    phonesDispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_4__["addPhone"])({
      name: "iPhone 13",
      release: "Jan 2020",
      price: 4000,
      brand: "Apple"
    }));
    phonesDispatch(Object(_src_actions_phones__WEBPACK_IMPORTED_MODULE_4__["addPhone"])({
      name: "Galaxy Note 8",
      release: "Sept 2018",
      price: 3300,
      brand: "Samsung"
    }));
  }, []); // Load data from localStorage

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(Component, _extends({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/phones.js":
/*!*******************************!*\
  !*** ./src/actions/phones.js ***!
  \*******************************/
/*! exports provided: addPhone, removePhone, editPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhone", function() { return addPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePhone", function() { return removePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPhone", function() { return editPhone; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
 // ADD_PHONE

const addPhone = ({
  name = "",
  release = "",
  price = 0,
  brand = "",
  display = "",
  screen = 0,
  dimensions = ""
} = {}) => ({
  type: "ADD_PHONE",
  phone: {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
    name,
    release,
    price,
    brand,
    display,
    screen,
    dimensions
  }
}); // REMOVE_PHONE

const removePhone = ({
  id
} = {}) => ({
  type: "REMOVE_PHONE",
  id
}); // EDIT_PHONE

const editPhone = (id, updates) => ({
  type: "EDIT_PHONE",
  id,
  updates
});

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map