(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@halobear/vue-debug"), require("@halobear/vue-amap"), require("@halobear/vue-region"), require("@halobear/vue-request"), require("@halobear/vue-dialog"), require("@halobear/vue-shape"), require("@halobear/vue-qrcode"), require("@halobear/vue-feedback"), require("@halobear/vue-upload"));
	else if(typeof define === 'function' && define.amd)
		define(["@halobear/vue-debug", "@halobear/vue-amap", "@halobear/vue-region", "@halobear/vue-request", "@halobear/vue-dialog", "@halobear/vue-shape", "@halobear/vue-qrcode", "@halobear/vue-feedback", "@halobear/vue-upload"], factory);
	else if(typeof exports === 'object')
		exports["bear-vue"] = factory(require("@halobear/vue-debug"), require("@halobear/vue-amap"), require("@halobear/vue-region"), require("@halobear/vue-request"), require("@halobear/vue-dialog"), require("@halobear/vue-shape"), require("@halobear/vue-qrcode"), require("@halobear/vue-feedback"), require("@halobear/vue-upload"));
	else
		root["bear-vue"] = factory(root["@halobear/vue-debug"], root["@halobear/vue-amap"], root["@halobear/vue-region"], root["@halobear/vue-request"], root["@halobear/vue-dialog"], root["@halobear/vue-shape"], root["@halobear/vue-qrcode"], root["@halobear/vue-feedback"], root["@halobear/vue-upload"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__04a8__, __WEBPACK_EXTERNAL_MODULE__0f78__, __WEBPACK_EXTERNAL_MODULE__230f__, __WEBPACK_EXTERNAL_MODULE__3e33__, __WEBPACK_EXTERNAL_MODULE__5004__, __WEBPACK_EXTERNAL_MODULE__65e6__, __WEBPACK_EXTERNAL_MODULE__9427__, __WEBPACK_EXTERNAL_MODULE__9a71__, __WEBPACK_EXTERNAL_MODULE_be27__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "13b1");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04a8":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__04a8__;

/***/ }),

/***/ "0f78":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0f78__;

/***/ }),

/***/ "13b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueAmap", function() { return /* reexport */ vue_amap_default.a; });
__webpack_require__.d(__webpack_exports__, "VueDebug", function() { return /* reexport */ vue_debug_default.a; });
__webpack_require__.d(__webpack_exports__, "VueDialog", function() { return /* reexport */ vue_dialog_default.a; });
__webpack_require__.d(__webpack_exports__, "loading", function() { return /* reexport */ vue_feedback_["loading"]; });
__webpack_require__.d(__webpack_exports__, "toast", function() { return /* reexport */ vue_feedback_["toast"]; });
__webpack_require__.d(__webpack_exports__, "VueQrcode", function() { return /* reexport */ vue_qrcode_default.a; });
__webpack_require__.d(__webpack_exports__, "VueRegion", function() { return /* reexport */ vue_region_default.a; });
__webpack_require__.d(__webpack_exports__, "createApi", function() { return /* reexport */ vue_request_["createApi"]; });
__webpack_require__.d(__webpack_exports__, "encrypt", function() { return /* reexport */ vue_request_["encrypt"]; });
__webpack_require__.d(__webpack_exports__, "VueShape", function() { return /* reexport */ vue_shape_default.a; });
__webpack_require__.d(__webpack_exports__, "VueUpload", function() { return /* reexport */ vue_upload_default.a; });

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_@vue_cli-service@4.2.3@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("a6d7")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "@halobear/vue-amap"
var vue_amap_ = __webpack_require__("0f78");
var vue_amap_default = /*#__PURE__*/__webpack_require__.n(vue_amap_);

// EXTERNAL MODULE: external "@halobear/vue-debug"
var vue_debug_ = __webpack_require__("04a8");
var vue_debug_default = /*#__PURE__*/__webpack_require__.n(vue_debug_);

// EXTERNAL MODULE: external "@halobear/vue-dialog"
var vue_dialog_ = __webpack_require__("5004");
var vue_dialog_default = /*#__PURE__*/__webpack_require__.n(vue_dialog_);

// EXTERNAL MODULE: external "@halobear/vue-feedback"
var vue_feedback_ = __webpack_require__("9a71");

// EXTERNAL MODULE: external "@halobear/vue-qrcode"
var vue_qrcode_ = __webpack_require__("9427");
var vue_qrcode_default = /*#__PURE__*/__webpack_require__.n(vue_qrcode_);

// EXTERNAL MODULE: external "@halobear/vue-region"
var vue_region_ = __webpack_require__("230f");
var vue_region_default = /*#__PURE__*/__webpack_require__.n(vue_region_);

// EXTERNAL MODULE: external "@halobear/vue-request"
var vue_request_ = __webpack_require__("3e33");

// EXTERNAL MODULE: external "@halobear/vue-shape"
var vue_shape_ = __webpack_require__("65e6");
var vue_shape_default = /*#__PURE__*/__webpack_require__.n(vue_shape_);

// EXTERNAL MODULE: external "@halobear/vue-upload"
var vue_upload_ = __webpack_require__("be27");
var vue_upload_default = /*#__PURE__*/__webpack_require__.n(vue_upload_);

// CONCATENATED MODULE: ./index.js
 // qrcode二维码

 // vue调试

 // vue弹窗

 // 反馈组件

 // qrcode二维码

 // vue形状编辑


 // vue形状编辑

 // vue上传组件


// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_@vue_cli-service@4.2.3@@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "230f":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__230f__;

/***/ }),

/***/ "3e33":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3e33__;

/***/ }),

/***/ "5004":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5004__;

/***/ }),

/***/ "65e6":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__65e6__;

/***/ }),

/***/ "9427":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9427__;

/***/ }),

/***/ "9a71":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9a71__;

/***/ }),

/***/ "a6d7":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "be27":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_be27__;

/***/ })

/******/ });
});