/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sample = function () {
  function Sample() {
    _classCallCheck(this, Sample);
  }

  _createClass(Sample, [{
    key: 'say',
    value: function say() {
      return 'Hello World';
    }
  }]);

  return Sample;
}();

exports.default = Sample;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _incetance = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../imports/view/incetance\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _sample = __webpack_require__(0);

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import 'lodash';
// import 'Velocity';
// import 'Velocity.ui';
// import '../../vendors/velocity.easeplus';
// import 'custom-event-polyfill';  // https://github.com/krambuhl/custom-event-polyfill.git
// import 'html5-polyfills/classList';
// import 'html5-polyfills/dataset';
// import 'fetch';
// import 'rAF';  // https://gist.github.com/1579671.git
// import 'html-domparser';  // https://gist.github.com/1129031.git
// import '../../requires/polyfill/function';

/**
 * get path name
 */
var getPathName = function getPathName() {
  return location.pathname.replace('index.html', '');
};

window.addEventListener('DOMContentLoaded', function () {

  // const page = getPathName();

  var _modules = [[_sample2.default, '.js-sample']];

  var _singleModules = [[_sample2.default, '.js-sample']];

  _modules.forEach(function (arr) {
    _incetance.createIncetance.apply(undefined, _toConsumableArray(arr));
  });

  _singleModules.forEach(function (arr) {
    _incetance.createSingleIncetance.apply(undefined, _toConsumableArray(arr));
  });
});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map