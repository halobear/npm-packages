(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-shape"] = factory();
	else
		root["vue-shape"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "ddbc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02df":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var isObject = __webpack_require__("6ffb");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "0535":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("55ac");
var getOwnPropertyNamesModule = __webpack_require__("48a0");
var getOwnPropertySymbolsModule = __webpack_require__("50d6");
var anObject = __webpack_require__("c3f2");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "05f6":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6ffb");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "0631":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("c3f2");
var aPossiblePrototype = __webpack_require__("05f6");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "0ab2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("e49d");
var definePropertyModule = __webpack_require__("74fa");
var createPropertyDescriptor = __webpack_require__("d480");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "0bfd":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "219e":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("379c");
var ownKeys = __webpack_require__("0535");
var getOwnPropertyDescriptorModule = __webpack_require__("60d3");
var definePropertyModule = __webpack_require__("74fa");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "26d4":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6ffb");
var setPrototypeOf = __webpack_require__("0631");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "2cfa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("c3f2");
var defineProperties = __webpack_require__("6910");
var enumBugKeys = __webpack_require__("cf47");
var hiddenKeys = __webpack_require__("0bfd");
var html = __webpack_require__("f819");
var documentCreateElement = __webpack_require__("02df");
var sharedKey = __webpack_require__("fc4f");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "2e32":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dcc0");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "2e47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("e49d");
var global = __webpack_require__("34f3");
var isForced = __webpack_require__("ec49");
var redefine = __webpack_require__("6d4c");
var has = __webpack_require__("379c");
var classof = __webpack_require__("6fd9");
var inheritIfRequired = __webpack_require__("26d4");
var toPrimitive = __webpack_require__("bca5");
var fails = __webpack_require__("dcc0");
var create = __webpack_require__("2cfa");
var getOwnPropertyNames = __webpack_require__("48a0").f;
var getOwnPropertyDescriptor = __webpack_require__("60d3").f;
var defineProperty = __webpack_require__("74fa").f;
var trim = __webpack_require__("56b2").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "3071":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "324f":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("feb3");
var enumBugKeys = __webpack_require__("cf47");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "33c4":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("465f");
var create = __webpack_require__("2cfa");
var definePropertyModule = __webpack_require__("74fa");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "3426":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "34f3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3426")))

/***/ }),

/***/ "3526":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ea03");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "373c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6ffb");
var classof = __webpack_require__("6fd9");
var wellKnownSymbol = __webpack_require__("465f");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "379c":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "44a7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("92bc");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".shape-container[data-v-4d381f18]{position:absolute;background-color:rgba(0,0,0,.3);width:150px;height:150px;top:100px;left:100px;border:1px solid #2a86ff}.shape-inner[data-v-4d381f18]{position:absolute;left:0;top:0;width:100%;height:100%}.shape-inner.draggable[data-v-4d381f18]{cursor:-webkit-grab;cursor:grab}.shape-inner.draggable[data-v-4d381f18]:active{cursor:-webkit-grabbing;cursor:grabbing}.b[data-v-4d381f18],.l[data-v-4d381f18],.r[data-v-4d381f18],.t[data-v-4d381f18]{position:absolute;background-color:#fff;z-index:1000}.b[data-v-4d381f18],.t[data-v-4d381f18]{width:16px;height:6px;border:1px solid rgba(112,112,119,.3);border-radius:3.5px;left:0;right:0;margin:auto;cursor:ns-resize}.t[data-v-4d381f18]{top:-4px}.b[data-v-4d381f18]{bottom:-4px}.l[data-v-4d381f18],.r[data-v-4d381f18]{cursor:ew-resize;top:0;bottom:0;margin:auto;height:16px;width:6px;border:1px solid rgba(112,112,119,.3);border-radius:3.5px}.l[data-v-4d381f18]{left:-4px}.r[data-v-4d381f18]{right:-4px}.bl[data-v-4d381f18],.br[data-v-4d381f18],.tl[data-v-4d381f18],.tr[data-v-4d381f18]{z-index:530;position:absolute;width:10px;height:10px;border-radius:3px;background-color:#fff;border:1px solid rgba(112,112,119,.3);border-radius:50%;z-index:1000}.tl[data-v-4d381f18]{left:-5px;cursor:nwse-resize}.tl[data-v-4d381f18],.tr[data-v-4d381f18]{top:-5px}.tr[data-v-4d381f18]{right:-5px}.bl[data-v-4d381f18],.tr[data-v-4d381f18]{cursor:nesw-resize}.bl[data-v-4d381f18]{left:-5px}.bl[data-v-4d381f18],.br[data-v-4d381f18]{bottom:-5px}.br[data-v-4d381f18]{right:-5px;cursor:nwse-resize}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "465f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var shared = __webpack_require__("7993");
var has = __webpack_require__("379c");
var uid = __webpack_require__("ce0e");
var NATIVE_SYMBOL = __webpack_require__("2e32");
var USE_SYMBOL_AS_UID = __webpack_require__("5cd0");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "48a0":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("feb3");
var enumBugKeys = __webpack_require__("cf47");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "50d6":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "55ac":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("6950");
var global = __webpack_require__("34f3");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "56b2":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("3071");
var whitespaces = __webpack_require__("58be");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "582f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "58be":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "5979":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4d381f18_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d2f4");
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4d381f18_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4d381f18_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4d381f18_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5b2a":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "5cd0":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("2e32");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "60d3":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("e49d");
var propertyIsEnumerableModule = __webpack_require__("64aa");
var createPropertyDescriptor = __webpack_require__("d480");
var toIndexedObject = __webpack_require__("f08e");
var toPrimitive = __webpack_require__("bca5");
var has = __webpack_require__("379c");
var IE8_DOM_DEFINE = __webpack_require__("9323");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "6471":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("e49d");
var fails = __webpack_require__("dcc0");
var has = __webpack_require__("379c");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "64aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "6910":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("e49d");
var definePropertyModule = __webpack_require__("74fa");
var anObject = __webpack_require__("c3f2");
var objectKeys = __webpack_require__("324f");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "6950":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");

module.exports = global;


/***/ }),

/***/ "6d4c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var createNonEnumerableProperty = __webpack_require__("0ab2");
var has = __webpack_require__("379c");
var setGlobal = __webpack_require__("ee03");
var inspectSource = __webpack_require__("fa00");
var InternalStateModule = __webpack_require__("bece");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6fd9":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6ffb":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "74fa":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("e49d");
var IE8_DOM_DEFINE = __webpack_require__("9323");
var anObject = __webpack_require__("c3f2");
var toPrimitive = __webpack_require__("bca5");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "7993":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("5b2a");
var store = __webpack_require__("f3bd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "92bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "9323":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("e49d");
var fails = __webpack_require__("dcc0");
var createElement = __webpack_require__("02df");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "9ffa":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("373c");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "a56d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var notARegExp = __webpack_require__("9ffa");
var requireObjectCoercible = __webpack_require__("3071");
var correctIsRegExpLogic = __webpack_require__("ad08");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


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

/***/ "ad08":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("465f");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "b08f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("f08e");
var toLength = __webpack_require__("b14e");
var toAbsoluteIndex = __webpack_require__("3526");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "b14e":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ea03");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "bca5":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6ffb");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "bece":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("fdc6");
var global = __webpack_require__("34f3");
var isObject = __webpack_require__("6ffb");
var createNonEnumerableProperty = __webpack_require__("0ab2");
var objectHas = __webpack_require__("379c");
var sharedKey = __webpack_require__("fc4f");
var hiddenKeys = __webpack_require__("0bfd");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "c3f2":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6ffb");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "c8e7":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dcc0");
var classof = __webpack_require__("6fd9");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "ce0e":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "cf47":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "d2f4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("44a7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("582f").default
var update = add("23620b2c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d480":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "d740":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var getOwnPropertyDescriptor = __webpack_require__("60d3").f;
var createNonEnumerableProperty = __webpack_require__("0ab2");
var redefine = __webpack_require__("6d4c");
var setGlobal = __webpack_require__("ee03");
var copyConstructorProperties = __webpack_require__("219e");
var isForced = __webpack_require__("ec49");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "dcc0":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "ddbc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

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

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a7974c30-vue-loader-template"}!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=template&id=4d381f18&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.disabled)?_c('div',[_vm._t("default")],2):_c('div',_vm._g({staticClass:"shape-container",style:(_vm.style)},_vm.$listeners),[_c('div',{staticClass:"shape-inner",class:{draggable: _vm.draggable},on:{"mousedown":function($event){return _vm.bindEvent($event, 's')}}},[_vm._t("default")],2),_vm._l((_vm.actions),function(item){return _c('div',{key:item,class:item,on:{"mousedown":function($event){return _vm.bindEvent($event, item)}}})})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index.vue?vue&type=template&id=4d381f18&scoped=true&

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("f55b");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("2e47");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("a56d");

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--12-1!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_srcvue_type_script_lang_js_ = ({
  props: {
    w: {
      type: Number,
      default: 100
    },
    h: {
      type: Number,
      default: 1000
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      width: this.w,
      height: this.h,
      left: this.x,
      top: this.y,
      actions: ["t", "r", "b", "l", "tr", "tl", "br", "bl"]
    };
  },
  computed: {
    style: function style() {
      var width = this.width,
          height = this.height,
          left = this.left,
          top = this.top;
      return {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        left: "".concat(left, "px"),
        top: "".concat(top, "px")
      };
    }
  },
  watch: {
    x: function x(_x) {
      this.left = _x;
    },
    y: function y(_y) {
      this.top = _y;
    },
    w: function w(_w) {
      this.width = _w;
    },
    h: function h(_h) {
      this.height = _h;
    }
  },
  methods: {
    bindEvent: function bindEvent(e, className) {
      var _this = this;

      if (this.disabled) return;
      var width = this.width,
          height = this.height,
          left = this.left,
          top = this.top; // 鼠标按下时的位置

      var clientx = e.clientX;
      var clienty = e.clientY;
      if (typeof document === "undefined") return;

      document.onmousemove = function (e) {
        if (className === "s") {
          if (_this.draggable) return;
          _this.top = top + e.clientY - clienty;
          _this.left = left + (e.clientX - clientx);
        } else {
          if (className.includes("t")) {
            _this.height = Math.max(height + clienty - e.clientY, 0);
            _this.top = top + e.clientY - clienty;
          }

          if (className.includes("b")) {
            _this.height = height + e.clientY - clienty;
          }

          if (className.includes("r")) {
            _this.width = width + e.clientX - clientx;
          }

          if (className.includes("l")) {
            _this.width = width + clientx - e.clientX;
            _this.left = left + (e.clientX - clientx);
          }
        }
      };

      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;

        _this.$emit("change", {
          x: _this.left,
          y: _this.top,
          w: _this.width,
          h: _this.height
        });
      };
    }
  },
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {}
});
// CONCATENATED MODULE: ./src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var srcvue_type_script_lang_js_ = (lib_vue_loader_options_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index.vue?vue&type=style&index=0&id=4d381f18&lang=less&scoped=true&
var srcvue_type_style_index_0_id_4d381f18_lang_less_scoped_true_ = __webpack_require__("5979");

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/index.vue






/* normalize component */

var component = normalizeComponent(
  srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4d381f18",
  null
  
)

/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./index.js


src.install = function (Vue) {
  Vue.component("vue-shape", src);
};

/* harmony default export */ var index = (src);
// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_@vue_cli-service@4.2.3@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index);



/***/ }),

/***/ "e49d":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dcc0");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "ea03":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ec49":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dcc0");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "ee03":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var createNonEnumerableProperty = __webpack_require__("0ab2");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "f08e":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("c8e7");
var requireObjectCoercible = __webpack_require__("3071");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "f3bd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var setGlobal = __webpack_require__("ee03");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "f55b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var $includes = __webpack_require__("b08f").includes;
var addToUnscopables = __webpack_require__("33c4");
var arrayMethodUsesToLength = __webpack_require__("6471");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "f819":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("55ac");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "fa00":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("f3bd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "fc4f":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("7993");
var uid = __webpack_require__("ce0e");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fdc6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var inspectSource = __webpack_require__("fa00");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "feb3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("379c");
var toIndexedObject = __webpack_require__("f08e");
var indexOf = __webpack_require__("b08f").indexOf;
var hiddenKeys = __webpack_require__("0bfd");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ })

/******/ });
});