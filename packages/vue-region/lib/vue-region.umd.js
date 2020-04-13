(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-region"] = factory();
	else
		root["vue-region"] = factory();
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

/***/ "05d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var fails = __webpack_require__("dcc0");
var isArray = __webpack_require__("a3f6");
var isObject = __webpack_require__("6ffb");
var toObject = __webpack_require__("67de");
var toLength = __webpack_require__("b14e");
var createProperty = __webpack_require__("5ef8");
var arraySpeciesCreate = __webpack_require__("b0c4");
var arrayMethodHasSpeciesSupport = __webpack_require__("89ed");
var wellKnownSymbol = __webpack_require__("465f");
var V8_VERSION = __webpack_require__("d43e");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


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

/***/ "0863":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("8caa");
var redefine = __webpack_require__("6d4c");
var fails = __webpack_require__("dcc0");
var wellKnownSymbol = __webpack_require__("465f");
var regexpExec = __webpack_require__("1e2f");
var createNonEnumerableProperty = __webpack_require__("0ab2");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


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

/***/ "0c72":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3bb0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("582f").default
var update = add("6597bbad", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "144e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var $find = __webpack_require__("68e2").find;
var addToUnscopables = __webpack_require__("33c4");
var arrayMethodUsesToLength = __webpack_require__("6471");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "1550":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("55ac");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "17dc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("92bc");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1563009_ojm11np8cm.eot?t=1576252765335);src:url(//at.alicdn.com/t/font_1563009_ojm11np8cm.eot?t=1576252765335#iefix) format(\"embedded-opentype\"),url(\"data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKUAAsAAAAABkAAAAJHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApMYQE2AiQDCAsGAAQgBYRtBy8bhgXIvkA8tqMSEZBUFzMcunB5bePl59c2rINCQgTfj/1+zxXEPTFE0SqeyCQSIVkiQSmU/Eu0UDRk5u3/0qX7d9vKPN8tqxZjqelvJP9+b+fC0jyEBSNRCiFBOLKpizkBMYVrrj6/bqxLJjcrJCvTI5CyMtZ94t7pn0AfZD6gHPeisSZN6gLq4kAKcC+MIiuhjBvGLniBjwm0mTJVOz67uQejsFcF4sFZD0whoigs3yI0NRws4kPVkt7SeI++H/9thiGpmd10fn8awvZ3pyhrcBcQogR0vCJjAyjEdWPmVEMwrqEt0zQHjlUf/N5oBG5xVIdgf51d2wEmoPKZVN5KARI81kT9wOikHUQ//pwnFIabH7ZffTXvlbm2E6fo3py0Xjcr2WDL/lluS18CwWffM95u2gv45SJ7McxHy068wc9QDewrhsZ2paKpGoeT/pO0tGlDAw70+ZtqHTxzIbQYnOBrNpkha7FAFnYDVbstNGmxhzbrzo+36ycaorRizQdA6PGNpMs3ZD1+yML+ohryjyY90UCb2+i/sN1SuN6RkKcUov+GLsgzdj3ai+tvyT4lnuQ1Ef9IUrk4rubLcv6cMpIltlTPdq3KyJKneAaeoyTJsZD8SIHOI9Vis1hw05vmQZ5CzxFBPIqEkO8NcgK5DAejVa/y+VvEepLwSEdPXfERERU3PVqZWw4gz43ZoJ5HeaXyzFpTiiEmcil0BuaRRCKHiuZ5RySg5qIJqcLGwhnEQ43z7c3p3x2DNrYthTMjq4/ORgoAAAAA\") format(\"woff2\"),url(//at.alicdn.com/t/font_1563009_ojm11np8cm.woff?t=1576252765335) format(\"woff\"),url(//at.alicdn.com/t/font_1563009_ojm11np8cm.ttf?t=1576252765335) format(\"truetype\"),url(//at.alicdn.com/t/font_1563009_ojm11np8cm.svg?t=1576252765335#iconfont) format(\"svg\")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-right:before{content:\"\\e7eb\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1e2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("8903");
var stickyHelpers = __webpack_require__("c092");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


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

/***/ "2cce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("ba05").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "2ce7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_VueSelect_vue_vue_type_style_index_0_id_7065f170_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6414");
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_VueSelect_vue_vue_type_style_index_0_id_7065f170_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_VueSelect_vue_vue_type_style_index_0_id_7065f170_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_VueSelect_vue_vue_type_style_index_0_id_7065f170_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "3bb0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("92bc");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".region-outer .vue-select[data-v-5d523886]:not(:last-child){margin-right:5px}", ""]);
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

/***/ "48f1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("92bc");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".transition-container{overflow:hidden;position:relative;-webkit-transition:height .2s;transition:height .2s}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4cff":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("6932");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "50d6":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "50e4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var isObject = __webpack_require__("6ffb");
var isArray = __webpack_require__("a3f6");
var toAbsoluteIndex = __webpack_require__("3526");
var toLength = __webpack_require__("b14e");
var toIndexedObject = __webpack_require__("f08e");
var createProperty = __webpack_require__("5ef8");
var wellKnownSymbol = __webpack_require__("465f");
var arrayMethodHasSpeciesSupport = __webpack_require__("89ed");
var arrayMethodUsesToLength = __webpack_require__("6471");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "5226":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var $map = __webpack_require__("68e2").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("89ed");
var arrayMethodUsesToLength = __webpack_require__("6471");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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

/***/ "56fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var $filter = __webpack_require__("68e2").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("89ed");
var arrayMethodUsesToLength = __webpack_require__("6471");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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

/***/ "5ef8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("bca5");
var definePropertyModule = __webpack_require__("74fa");
var createPropertyDescriptor = __webpack_require__("d480");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


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

/***/ "6414":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8858");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("582f").default
var update = add("88662c98", content, true, {"sourceMap":false,"shadowMode":false});

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

/***/ "67de":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("3071");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "68e2":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("4cff");
var IndexedObject = __webpack_require__("c8e7");
var toObject = __webpack_require__("67de");
var toLength = __webpack_require__("b14e");
var arraySpeciesCreate = __webpack_require__("b0c4");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


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

/***/ "6932":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
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

/***/ "7f96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d523886_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c72");
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d523886_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d523886_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d523886_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "847b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var IndexedObject = __webpack_require__("c8e7");
var toIndexedObject = __webpack_require__("f08e");
var arrayMethodIsStrict = __webpack_require__("fa2b");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "8858":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("92bc");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__("17dc");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".vue-select[data-v-7065f170]{max-width:120px;display:inline-block;background-color:#fff;border-radius:4px;-webkit-transition:all .5s ease;transition:all .5s ease;position:relative;font-size:14px;color:#474747;height:100%;text-align:left;border:1px solid #d9d9d9;line-height:1.2}.vue-select .select[data-v-7065f170]{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px}.vue-select .select .text[data-v-7065f170]{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;border:none;outline:none;padding:8px 0;font-size:14px;background-color:transparent}.vue-select .select>i[data-v-7065f170]{color:#888;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;float:right;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.vue-select[data-v-7065f170]:hover{-webkit-box-shadow:0 0 4px #ccc;box-shadow:0 0 4px #ccc}.vue-select[data-v-7065f170]:active{background-color:#fafafa}.vue-select.active[data-v-7065f170],.vue-select.active[data-v-7065f170]:hover{border-radius:3px 3px 0 0;background-color:#fafafa;border-color:#1890ff;border-bottom-color:none;-webkit-box-shadow:0 0 0 1px rgba(24,144,255,.2);box-shadow:0 0 0 1px rgba(24,144,255,.2)}.vue-select.active.show-search .text[data-v-7065f170]{cursor:text}.vue-select.active .select>i[data-v-7065f170]{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vue-select .dropdown-outer[data-v-7065f170]{position:absolute;width:100%;left:0;margin-top:1px;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc}.vue-select .dropdown-select[data-v-7065f170]{background-color:#fff;padding:5px 0;margin:0;border-radius:0 1px 5px 5px;display:block;max-height:200px;overflow-x:hidden;overflow-y:auto;z-index:9;list-style:none;border-top:none}.vue-select .dropdown-select[data-v-7065f170]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.vue-select .dropdown-select[data-v-7065f170]::-webkit-scrollbar{width:3px}.vue-select .dropdown-select li[data-v-7065f170]{padding:5px 10px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.vue-select .dropdown-select li.active[data-v-7065f170]{background-color:#f7f7f7}.vue-select .dropdown-select li[data-v-7065f170]:active,.vue-select .dropdown-select li[data-v-7065f170]:hover{background-color:#e6f7ff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8903":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("c3f2");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "89ba":
/***/ (function(module) {

module.exports = JSON.parse("[{\"parent_id\":0,\"label\":\"全国\",\"value\":\"0\"},{\"parent_id\":0,\"label\":\"北京\",\"value\":\"110000\"},{\"parent_id\":110000,\"label\":\"北京市\",\"value\":\"110100\"},{\"parent_id\":110100,\"label\":\"东城区\",\"value\":\"110101\"},{\"parent_id\":110100,\"label\":\"西城区\",\"value\":\"110102\"},{\"parent_id\":110100,\"label\":\"朝阳区\",\"value\":\"110105\"},{\"parent_id\":110100,\"label\":\"丰台区\",\"value\":\"110106\"},{\"parent_id\":110100,\"label\":\"石景山区\",\"value\":\"110107\"},{\"parent_id\":110100,\"label\":\"海淀区\",\"value\":\"110108\"},{\"parent_id\":110100,\"label\":\"门头沟区\",\"value\":\"110109\"},{\"parent_id\":110100,\"label\":\"房山区\",\"value\":\"110111\"},{\"parent_id\":110100,\"label\":\"通州区\",\"value\":\"110112\"},{\"parent_id\":110100,\"label\":\"顺义区\",\"value\":\"110113\"},{\"parent_id\":110100,\"label\":\"昌平区\",\"value\":\"110114\"},{\"parent_id\":110100,\"label\":\"大兴区\",\"value\":\"110115\"},{\"parent_id\":110100,\"label\":\"怀柔区\",\"value\":\"110116\"},{\"parent_id\":110100,\"label\":\"平谷区\",\"value\":\"110117\"},{\"parent_id\":110100,\"label\":\"密云区\",\"value\":\"110118\"},{\"parent_id\":110100,\"label\":\"延庆区\",\"value\":\"110119\"},{\"parent_id\":0,\"label\":\"天津\",\"value\":\"120000\"},{\"parent_id\":120000,\"label\":\"天津市\",\"value\":\"120100\"},{\"parent_id\":120100,\"label\":\"和平区\",\"value\":\"120101\"},{\"parent_id\":120100,\"label\":\"河东区\",\"value\":\"120102\"},{\"parent_id\":120100,\"label\":\"河西区\",\"value\":\"120103\"},{\"parent_id\":120100,\"label\":\"南开区\",\"value\":\"120104\"},{\"parent_id\":120100,\"label\":\"河北区\",\"value\":\"120105\"},{\"parent_id\":120100,\"label\":\"红桥区\",\"value\":\"120106\"},{\"parent_id\":120100,\"label\":\"东丽区\",\"value\":\"120110\"},{\"parent_id\":120100,\"label\":\"西青区\",\"value\":\"120111\"},{\"parent_id\":120100,\"label\":\"津南区\",\"value\":\"120112\"},{\"parent_id\":120100,\"label\":\"北辰区\",\"value\":\"120113\"},{\"parent_id\":120100,\"label\":\"武清区\",\"value\":\"120114\"},{\"parent_id\":120100,\"label\":\"宝坻区\",\"value\":\"120115\"},{\"parent_id\":120100,\"label\":\"滨海新区\",\"value\":\"120116\"},{\"parent_id\":120100,\"label\":\"宁河区\",\"value\":\"120117\"},{\"parent_id\":120100,\"label\":\"静海区\",\"value\":\"120118\"},{\"parent_id\":120100,\"label\":\"蓟州区\",\"value\":\"120119\"},{\"parent_id\":0,\"label\":\"河北省\",\"value\":\"130000\"},{\"parent_id\":130000,\"label\":\"石家庄市\",\"value\":\"130100\"},{\"parent_id\":130100,\"label\":\"长安区\",\"value\":\"130102\"},{\"parent_id\":130100,\"label\":\"桥西区\",\"value\":\"130104\"},{\"parent_id\":130100,\"label\":\"新华区\",\"value\":\"130105\"},{\"parent_id\":130100,\"label\":\"井陉矿区\",\"value\":\"130107\"},{\"parent_id\":130100,\"label\":\"裕华区\",\"value\":\"130108\"},{\"parent_id\":130100,\"label\":\"藁城区\",\"value\":\"130109\"},{\"parent_id\":130100,\"label\":\"鹿泉区\",\"value\":\"130110\"},{\"parent_id\":130100,\"label\":\"栾城区\",\"value\":\"130111\"},{\"parent_id\":130100,\"label\":\"井陉县\",\"value\":\"130121\"},{\"parent_id\":130100,\"label\":\"正定县\",\"value\":\"130123\"},{\"parent_id\":130100,\"label\":\"行唐县\",\"value\":\"130125\"},{\"parent_id\":130100,\"label\":\"灵寿县\",\"value\":\"130126\"},{\"parent_id\":130100,\"label\":\"高邑县\",\"value\":\"130127\"},{\"parent_id\":130100,\"label\":\"深泽县\",\"value\":\"130128\"},{\"parent_id\":130100,\"label\":\"赞皇县\",\"value\":\"130129\"},{\"parent_id\":130100,\"label\":\"无极县\",\"value\":\"130130\"},{\"parent_id\":130100,\"label\":\"平山县\",\"value\":\"130131\"},{\"parent_id\":130100,\"label\":\"元氏县\",\"value\":\"130132\"},{\"parent_id\":130100,\"label\":\"赵县\",\"value\":\"130133\"},{\"parent_id\":130100,\"label\":\"辛集市\",\"value\":\"130181\"},{\"parent_id\":130100,\"label\":\"晋州市\",\"value\":\"130183\"},{\"parent_id\":130100,\"label\":\"新乐市\",\"value\":\"130184\"},{\"parent_id\":130000,\"label\":\"唐山市\",\"value\":\"130200\"},{\"parent_id\":130200,\"label\":\"路南区\",\"value\":\"130202\"},{\"parent_id\":130200,\"label\":\"路北区\",\"value\":\"130203\"},{\"parent_id\":130200,\"label\":\"古冶区\",\"value\":\"130204\"},{\"parent_id\":130200,\"label\":\"开平区\",\"value\":\"130205\"},{\"parent_id\":130200,\"label\":\"丰南区\",\"value\":\"130207\"},{\"parent_id\":130200,\"label\":\"丰润区\",\"value\":\"130208\"},{\"parent_id\":130200,\"label\":\"曹妃甸区\",\"value\":\"130209\"},{\"parent_id\":130200,\"label\":\"滦县\",\"value\":\"130223\"},{\"parent_id\":130200,\"label\":\"滦南县\",\"value\":\"130224\"},{\"parent_id\":130200,\"label\":\"乐亭县\",\"value\":\"130225\"},{\"parent_id\":130200,\"label\":\"迁西县\",\"value\":\"130227\"},{\"parent_id\":130200,\"label\":\"玉田县\",\"value\":\"130229\"},{\"parent_id\":130200,\"label\":\"遵化市\",\"value\":\"130281\"},{\"parent_id\":130200,\"label\":\"迁安市\",\"value\":\"130283\"},{\"parent_id\":130000,\"label\":\"秦皇岛市\",\"value\":\"130300\"},{\"parent_id\":130300,\"label\":\"海港区\",\"value\":\"130302\"},{\"parent_id\":130300,\"label\":\"山海关区\",\"value\":\"130303\"},{\"parent_id\":130300,\"label\":\"北戴河区\",\"value\":\"130304\"},{\"parent_id\":130300,\"label\":\"抚宁区\",\"value\":\"130306\"},{\"parent_id\":130300,\"label\":\"青龙满族自治县\",\"value\":\"130321\"},{\"parent_id\":130300,\"label\":\"昌黎县\",\"value\":\"130322\"},{\"parent_id\":130300,\"label\":\"卢龙县\",\"value\":\"130324\"},{\"parent_id\":130000,\"label\":\"邯郸市\",\"value\":\"130400\"},{\"parent_id\":130400,\"label\":\"邯山区\",\"value\":\"130402\"},{\"parent_id\":130400,\"label\":\"丛台区\",\"value\":\"130403\"},{\"parent_id\":130400,\"label\":\"复兴区\",\"value\":\"130404\"},{\"parent_id\":130400,\"label\":\"峰峰矿区\",\"value\":\"130406\"},{\"parent_id\":130400,\"label\":\"临漳县\",\"value\":\"130423\"},{\"parent_id\":130400,\"label\":\"成安县\",\"value\":\"130424\"},{\"parent_id\":130400,\"label\":\"大名县\",\"value\":\"130425\"},{\"parent_id\":130400,\"label\":\"涉县\",\"value\":\"130426\"},{\"parent_id\":130400,\"label\":\"磁县\",\"value\":\"130427\"},{\"parent_id\":130400,\"label\":\"肥乡区\",\"value\":\"130428\"},{\"parent_id\":130400,\"label\":\"永年区\",\"value\":\"130429\"},{\"parent_id\":130400,\"label\":\"邱县\",\"value\":\"130430\"},{\"parent_id\":130400,\"label\":\"鸡泽县\",\"value\":\"130431\"},{\"parent_id\":130400,\"label\":\"广平县\",\"value\":\"130432\"},{\"parent_id\":130400,\"label\":\"馆陶县\",\"value\":\"130433\"},{\"parent_id\":130400,\"label\":\"魏县\",\"value\":\"130434\"},{\"parent_id\":130400,\"label\":\"曲周县\",\"value\":\"130435\"},{\"parent_id\":130400,\"label\":\"武安市\",\"value\":\"130481\"},{\"parent_id\":130000,\"label\":\"邢台市\",\"value\":\"130500\"},{\"parent_id\":130500,\"label\":\"桥东区\",\"value\":\"130502\"},{\"parent_id\":130500,\"label\":\"桥西区\",\"value\":\"130503\"},{\"parent_id\":130500,\"label\":\"邢台县\",\"value\":\"130521\"},{\"parent_id\":130500,\"label\":\"临城县\",\"value\":\"130522\"},{\"parent_id\":130500,\"label\":\"内丘县\",\"value\":\"130523\"},{\"parent_id\":130500,\"label\":\"柏乡县\",\"value\":\"130524\"},{\"parent_id\":130500,\"label\":\"隆尧县\",\"value\":\"130525\"},{\"parent_id\":130500,\"label\":\"任县\",\"value\":\"130526\"},{\"parent_id\":130500,\"label\":\"南和县\",\"value\":\"130527\"},{\"parent_id\":130500,\"label\":\"宁晋县\",\"value\":\"130528\"},{\"parent_id\":130500,\"label\":\"巨鹿县\",\"value\":\"130529\"},{\"parent_id\":130500,\"label\":\"新河县\",\"value\":\"130530\"},{\"parent_id\":130500,\"label\":\"广宗县\",\"value\":\"130531\"},{\"parent_id\":130500,\"label\":\"平乡县\",\"value\":\"130532\"},{\"parent_id\":130500,\"label\":\"威县\",\"value\":\"130533\"},{\"parent_id\":130500,\"label\":\"清河县\",\"value\":\"130534\"},{\"parent_id\":130500,\"label\":\"临西县\",\"value\":\"130535\"},{\"parent_id\":130500,\"label\":\"南宫市\",\"value\":\"130581\"},{\"parent_id\":130500,\"label\":\"沙河市\",\"value\":\"130582\"},{\"parent_id\":130000,\"label\":\"保定市\",\"value\":\"130600\"},{\"parent_id\":130600,\"label\":\"竞秀区\",\"value\":\"130602\"},{\"parent_id\":130600,\"label\":\"莲池区\",\"value\":\"130606\"},{\"parent_id\":130600,\"label\":\"满城区\",\"value\":\"130607\"},{\"parent_id\":130600,\"label\":\"清苑区\",\"value\":\"130608\"},{\"parent_id\":130600,\"label\":\"徐水区\",\"value\":\"130609\"},{\"parent_id\":130600,\"label\":\"涞水县\",\"value\":\"130623\"},{\"parent_id\":130600,\"label\":\"阜平县\",\"value\":\"130624\"},{\"parent_id\":130600,\"label\":\"定兴县\",\"value\":\"130626\"},{\"parent_id\":130600,\"label\":\"唐县\",\"value\":\"130627\"},{\"parent_id\":130600,\"label\":\"高阳县\",\"value\":\"130628\"},{\"parent_id\":130600,\"label\":\"容城县\",\"value\":\"130629\"},{\"parent_id\":130600,\"label\":\"涞源县\",\"value\":\"130630\"},{\"parent_id\":130600,\"label\":\"望都县\",\"value\":\"130631\"},{\"parent_id\":130600,\"label\":\"安新县\",\"value\":\"130632\"},{\"parent_id\":130600,\"label\":\"易县\",\"value\":\"130633\"},{\"parent_id\":130600,\"label\":\"曲阳县\",\"value\":\"130634\"},{\"parent_id\":130600,\"label\":\"蠡县\",\"value\":\"130635\"},{\"parent_id\":130600,\"label\":\"顺平县\",\"value\":\"130636\"},{\"parent_id\":130600,\"label\":\"博野县\",\"value\":\"130637\"},{\"parent_id\":130600,\"label\":\"雄县\",\"value\":\"130638\"},{\"parent_id\":130600,\"label\":\"涿州市\",\"value\":\"130681\"},{\"parent_id\":130600,\"label\":\"定州市\",\"value\":\"130682\"},{\"parent_id\":130600,\"label\":\"安国市\",\"value\":\"130683\"},{\"parent_id\":130600,\"label\":\"高碑店市\",\"value\":\"130684\"},{\"parent_id\":130000,\"label\":\"张家口市\",\"value\":\"130700\"},{\"parent_id\":130700,\"label\":\"桥东区\",\"value\":\"130702\"},{\"parent_id\":130700,\"label\":\"桥西区\",\"value\":\"130703\"},{\"parent_id\":130700,\"label\":\"宣化区\",\"value\":\"130705\"},{\"parent_id\":130700,\"label\":\"下花园区\",\"value\":\"130706\"},{\"parent_id\":130700,\"label\":\"万全区\",\"value\":\"130708\"},{\"parent_id\":130700,\"label\":\"崇礼区\",\"value\":\"130709\"},{\"parent_id\":130700,\"label\":\"张北县\",\"value\":\"130722\"},{\"parent_id\":130700,\"label\":\"康保县\",\"value\":\"130723\"},{\"parent_id\":130700,\"label\":\"沽源县\",\"value\":\"130724\"},{\"parent_id\":130700,\"label\":\"尚义县\",\"value\":\"130725\"},{\"parent_id\":130700,\"label\":\"蔚县\",\"value\":\"130726\"},{\"parent_id\":130700,\"label\":\"阳原县\",\"value\":\"130727\"},{\"parent_id\":130700,\"label\":\"怀安县\",\"value\":\"130728\"},{\"parent_id\":130700,\"label\":\"怀来县\",\"value\":\"130730\"},{\"parent_id\":130700,\"label\":\"涿鹿县\",\"value\":\"130731\"},{\"parent_id\":130700,\"label\":\"赤城县\",\"value\":\"130732\"},{\"parent_id\":130000,\"label\":\"承德市\",\"value\":\"130800\"},{\"parent_id\":130800,\"label\":\"双桥区\",\"value\":\"130802\"},{\"parent_id\":130800,\"label\":\"双滦区\",\"value\":\"130803\"},{\"parent_id\":130800,\"label\":\"鹰手营子矿区\",\"value\":\"130804\"},{\"parent_id\":130800,\"label\":\"承德县\",\"value\":\"130821\"},{\"parent_id\":130800,\"label\":\"兴隆县\",\"value\":\"130822\"},{\"parent_id\":130800,\"label\":\"平泉县\",\"value\":\"130823\"},{\"parent_id\":130800,\"label\":\"滦平县\",\"value\":\"130824\"},{\"parent_id\":130800,\"label\":\"隆化县\",\"value\":\"130825\"},{\"parent_id\":130800,\"label\":\"丰宁满族自治县\",\"value\":\"130826\"},{\"parent_id\":130800,\"label\":\"宽城满族自治县\",\"value\":\"130827\"},{\"parent_id\":130800,\"label\":\"围场满族蒙古族自治县\",\"value\":\"130828\"},{\"parent_id\":130000,\"label\":\"沧州市\",\"value\":\"130900\"},{\"parent_id\":130900,\"label\":\"新华区\",\"value\":\"130902\"},{\"parent_id\":130900,\"label\":\"运河区\",\"value\":\"130903\"},{\"parent_id\":130900,\"label\":\"沧县\",\"value\":\"130921\"},{\"parent_id\":130900,\"label\":\"青县\",\"value\":\"130922\"},{\"parent_id\":130900,\"label\":\"东光县\",\"value\":\"130923\"},{\"parent_id\":130900,\"label\":\"海兴县\",\"value\":\"130924\"},{\"parent_id\":130900,\"label\":\"盐山县\",\"value\":\"130925\"},{\"parent_id\":130900,\"label\":\"肃宁县\",\"value\":\"130926\"},{\"parent_id\":130900,\"label\":\"南皮县\",\"value\":\"130927\"},{\"parent_id\":130900,\"label\":\"吴桥县\",\"value\":\"130928\"},{\"parent_id\":130900,\"label\":\"献县\",\"value\":\"130929\"},{\"parent_id\":130900,\"label\":\"孟村回族自治县\",\"value\":\"130930\"},{\"parent_id\":130900,\"label\":\"泊头市\",\"value\":\"130981\"},{\"parent_id\":130900,\"label\":\"任丘市\",\"value\":\"130982\"},{\"parent_id\":130900,\"label\":\"黄骅市\",\"value\":\"130983\"},{\"parent_id\":130900,\"label\":\"河间市\",\"value\":\"130984\"},{\"parent_id\":130000,\"label\":\"廊坊市\",\"value\":\"131000\"},{\"parent_id\":131000,\"label\":\"安次区\",\"value\":\"131002\"},{\"parent_id\":131000,\"label\":\"广阳区\",\"value\":\"131003\"},{\"parent_id\":131000,\"label\":\"固安县\",\"value\":\"131022\"},{\"parent_id\":131000,\"label\":\"永清县\",\"value\":\"131023\"},{\"parent_id\":131000,\"label\":\"香河县\",\"value\":\"131024\"},{\"parent_id\":131000,\"label\":\"大城县\",\"value\":\"131025\"},{\"parent_id\":131000,\"label\":\"文安县\",\"value\":\"131026\"},{\"parent_id\":131000,\"label\":\"大厂回族自治县\",\"value\":\"131028\"},{\"parent_id\":131000,\"label\":\"霸州市\",\"value\":\"131081\"},{\"parent_id\":131000,\"label\":\"三河市\",\"value\":\"131082\"},{\"parent_id\":130000,\"label\":\"衡水市\",\"value\":\"131100\"},{\"parent_id\":131100,\"label\":\"桃城区\",\"value\":\"131102\"},{\"parent_id\":131100,\"label\":\"冀州区\",\"value\":\"131103\"},{\"parent_id\":131100,\"label\":\"枣强县\",\"value\":\"131121\"},{\"parent_id\":131100,\"label\":\"武邑县\",\"value\":\"131122\"},{\"parent_id\":131100,\"label\":\"武强县\",\"value\":\"131123\"},{\"parent_id\":131100,\"label\":\"饶阳县\",\"value\":\"131124\"},{\"parent_id\":131100,\"label\":\"安平县\",\"value\":\"131125\"},{\"parent_id\":131100,\"label\":\"故城县\",\"value\":\"131126\"},{\"parent_id\":131100,\"label\":\"景县\",\"value\":\"131127\"},{\"parent_id\":131100,\"label\":\"阜城县\",\"value\":\"131128\"},{\"parent_id\":131100,\"label\":\"深州市\",\"value\":\"131182\"},{\"parent_id\":0,\"label\":\"山西省\",\"value\":\"140000\"},{\"parent_id\":140000,\"label\":\"太原市\",\"value\":\"140100\"},{\"parent_id\":140100,\"label\":\"小店区\",\"value\":\"140105\"},{\"parent_id\":140100,\"label\":\"迎泽区\",\"value\":\"140106\"},{\"parent_id\":140100,\"label\":\"杏花岭区\",\"value\":\"140107\"},{\"parent_id\":140100,\"label\":\"尖草坪区\",\"value\":\"140108\"},{\"parent_id\":140100,\"label\":\"万柏林区\",\"value\":\"140109\"},{\"parent_id\":140100,\"label\":\"晋源区\",\"value\":\"140110\"},{\"parent_id\":140100,\"label\":\"清徐县\",\"value\":\"140121\"},{\"parent_id\":140100,\"label\":\"阳曲县\",\"value\":\"140122\"},{\"parent_id\":140100,\"label\":\"娄烦县\",\"value\":\"140123\"},{\"parent_id\":140100,\"label\":\"古交市\",\"value\":\"140181\"},{\"parent_id\":140000,\"label\":\"大同市\",\"value\":\"140200\"},{\"parent_id\":140200,\"label\":\"城区\",\"value\":\"140202\"},{\"parent_id\":140200,\"label\":\"矿区\",\"value\":\"140203\"},{\"parent_id\":140200,\"label\":\"南郊区\",\"value\":\"140211\"},{\"parent_id\":140200,\"label\":\"新荣区\",\"value\":\"140212\"},{\"parent_id\":140200,\"label\":\"阳高县\",\"value\":\"140221\"},{\"parent_id\":140200,\"label\":\"天镇县\",\"value\":\"140222\"},{\"parent_id\":140200,\"label\":\"广灵县\",\"value\":\"140223\"},{\"parent_id\":140200,\"label\":\"灵丘县\",\"value\":\"140224\"},{\"parent_id\":140200,\"label\":\"浑源县\",\"value\":\"140225\"},{\"parent_id\":140200,\"label\":\"左云县\",\"value\":\"140226\"},{\"parent_id\":140200,\"label\":\"大同县\",\"value\":\"140227\"},{\"parent_id\":140000,\"label\":\"阳泉市\",\"value\":\"140300\"},{\"parent_id\":140300,\"label\":\"城区\",\"value\":\"140302\"},{\"parent_id\":140300,\"label\":\"矿区\",\"value\":\"140303\"},{\"parent_id\":140300,\"label\":\"郊区\",\"value\":\"140311\"},{\"parent_id\":140300,\"label\":\"平定县\",\"value\":\"140321\"},{\"parent_id\":140300,\"label\":\"盂县\",\"value\":\"140322\"},{\"parent_id\":140000,\"label\":\"长治市\",\"value\":\"140400\"},{\"parent_id\":140400,\"label\":\"城区\",\"value\":\"140402\"},{\"parent_id\":140400,\"label\":\"郊区\",\"value\":\"140411\"},{\"parent_id\":140400,\"label\":\"长治县\",\"value\":\"140421\"},{\"parent_id\":140400,\"label\":\"襄垣县\",\"value\":\"140423\"},{\"parent_id\":140400,\"label\":\"屯留县\",\"value\":\"140424\"},{\"parent_id\":140400,\"label\":\"平顺县\",\"value\":\"140425\"},{\"parent_id\":140400,\"label\":\"黎城县\",\"value\":\"140426\"},{\"parent_id\":140400,\"label\":\"壶关县\",\"value\":\"140427\"},{\"parent_id\":140400,\"label\":\"长子县\",\"value\":\"140428\"},{\"parent_id\":140400,\"label\":\"武乡县\",\"value\":\"140429\"},{\"parent_id\":140400,\"label\":\"沁县\",\"value\":\"140430\"},{\"parent_id\":140400,\"label\":\"沁源县\",\"value\":\"140431\"},{\"parent_id\":140400,\"label\":\"潞城市\",\"value\":\"140481\"},{\"parent_id\":140000,\"label\":\"晋城市\",\"value\":\"140500\"},{\"parent_id\":140500,\"label\":\"城区\",\"value\":\"140502\"},{\"parent_id\":140500,\"label\":\"沁水县\",\"value\":\"140521\"},{\"parent_id\":140500,\"label\":\"阳城县\",\"value\":\"140522\"},{\"parent_id\":140500,\"label\":\"陵川县\",\"value\":\"140524\"},{\"parent_id\":140500,\"label\":\"泽州县\",\"value\":\"140525\"},{\"parent_id\":140500,\"label\":\"高平市\",\"value\":\"140581\"},{\"parent_id\":140000,\"label\":\"朔州市\",\"value\":\"140600\"},{\"parent_id\":140600,\"label\":\"朔城区\",\"value\":\"140602\"},{\"parent_id\":140600,\"label\":\"平鲁区\",\"value\":\"140603\"},{\"parent_id\":140600,\"label\":\"山阴县\",\"value\":\"140621\"},{\"parent_id\":140600,\"label\":\"应县\",\"value\":\"140622\"},{\"parent_id\":140600,\"label\":\"右玉县\",\"value\":\"140623\"},{\"parent_id\":140600,\"label\":\"怀仁县\",\"value\":\"140624\"},{\"parent_id\":140000,\"label\":\"晋中市\",\"value\":\"140700\"},{\"parent_id\":140700,\"label\":\"榆次区\",\"value\":\"140702\"},{\"parent_id\":140700,\"label\":\"榆社县\",\"value\":\"140721\"},{\"parent_id\":140700,\"label\":\"左权县\",\"value\":\"140722\"},{\"parent_id\":140700,\"label\":\"和顺县\",\"value\":\"140723\"},{\"parent_id\":140700,\"label\":\"昔阳县\",\"value\":\"140724\"},{\"parent_id\":140700,\"label\":\"寿阳县\",\"value\":\"140725\"},{\"parent_id\":140700,\"label\":\"太谷县\",\"value\":\"140726\"},{\"parent_id\":140700,\"label\":\"祁县\",\"value\":\"140727\"},{\"parent_id\":140700,\"label\":\"平遥县\",\"value\":\"140728\"},{\"parent_id\":140700,\"label\":\"灵石县\",\"value\":\"140729\"},{\"parent_id\":140700,\"label\":\"介休市\",\"value\":\"140781\"},{\"parent_id\":140000,\"label\":\"运城市\",\"value\":\"140800\"},{\"parent_id\":140800,\"label\":\"盐湖区\",\"value\":\"140802\"},{\"parent_id\":140800,\"label\":\"临猗县\",\"value\":\"140821\"},{\"parent_id\":140800,\"label\":\"万荣县\",\"value\":\"140822\"},{\"parent_id\":140800,\"label\":\"闻喜县\",\"value\":\"140823\"},{\"parent_id\":140800,\"label\":\"稷山县\",\"value\":\"140824\"},{\"parent_id\":140800,\"label\":\"新绛县\",\"value\":\"140825\"},{\"parent_id\":140800,\"label\":\"绛县\",\"value\":\"140826\"},{\"parent_id\":140800,\"label\":\"垣曲县\",\"value\":\"140827\"},{\"parent_id\":140800,\"label\":\"夏县\",\"value\":\"140828\"},{\"parent_id\":140800,\"label\":\"平陆县\",\"value\":\"140829\"},{\"parent_id\":140800,\"label\":\"芮城县\",\"value\":\"140830\"},{\"parent_id\":140800,\"label\":\"永济市\",\"value\":\"140881\"},{\"parent_id\":140800,\"label\":\"河津市\",\"value\":\"140882\"},{\"parent_id\":140000,\"label\":\"忻州市\",\"value\":\"140900\"},{\"parent_id\":140900,\"label\":\"忻府区\",\"value\":\"140902\"},{\"parent_id\":140900,\"label\":\"定襄县\",\"value\":\"140921\"},{\"parent_id\":140900,\"label\":\"五台县\",\"value\":\"140922\"},{\"parent_id\":140900,\"label\":\"代县\",\"value\":\"140923\"},{\"parent_id\":140900,\"label\":\"繁峙县\",\"value\":\"140924\"},{\"parent_id\":140900,\"label\":\"宁武县\",\"value\":\"140925\"},{\"parent_id\":140900,\"label\":\"静乐县\",\"value\":\"140926\"},{\"parent_id\":140900,\"label\":\"神池县\",\"value\":\"140927\"},{\"parent_id\":140900,\"label\":\"五寨县\",\"value\":\"140928\"},{\"parent_id\":140900,\"label\":\"岢岚县\",\"value\":\"140929\"},{\"parent_id\":140900,\"label\":\"河曲县\",\"value\":\"140930\"},{\"parent_id\":140900,\"label\":\"保德县\",\"value\":\"140931\"},{\"parent_id\":140900,\"label\":\"偏关县\",\"value\":\"140932\"},{\"parent_id\":140900,\"label\":\"原平市\",\"value\":\"140981\"},{\"parent_id\":140000,\"label\":\"临汾市\",\"value\":\"141000\"},{\"parent_id\":141000,\"label\":\"尧都区\",\"value\":\"141002\"},{\"parent_id\":141000,\"label\":\"曲沃县\",\"value\":\"141021\"},{\"parent_id\":141000,\"label\":\"翼城县\",\"value\":\"141022\"},{\"parent_id\":141000,\"label\":\"襄汾县\",\"value\":\"141023\"},{\"parent_id\":141000,\"label\":\"洪洞县\",\"value\":\"141024\"},{\"parent_id\":141000,\"label\":\"古县\",\"value\":\"141025\"},{\"parent_id\":141000,\"label\":\"安泽县\",\"value\":\"141026\"},{\"parent_id\":141000,\"label\":\"浮山县\",\"value\":\"141027\"},{\"parent_id\":141000,\"label\":\"吉县\",\"value\":\"141028\"},{\"parent_id\":141000,\"label\":\"乡宁县\",\"value\":\"141029\"},{\"parent_id\":141000,\"label\":\"大宁县\",\"value\":\"141030\"},{\"parent_id\":141000,\"label\":\"隰县\",\"value\":\"141031\"},{\"parent_id\":141000,\"label\":\"永和县\",\"value\":\"141032\"},{\"parent_id\":141000,\"label\":\"蒲县\",\"value\":\"141033\"},{\"parent_id\":141000,\"label\":\"汾西县\",\"value\":\"141034\"},{\"parent_id\":141000,\"label\":\"侯马市\",\"value\":\"141081\"},{\"parent_id\":141000,\"label\":\"霍州市\",\"value\":\"141082\"},{\"parent_id\":140000,\"label\":\"吕梁市\",\"value\":\"141100\"},{\"parent_id\":141100,\"label\":\"离石区\",\"value\":\"141102\"},{\"parent_id\":141100,\"label\":\"文水县\",\"value\":\"141121\"},{\"parent_id\":141100,\"label\":\"交城县\",\"value\":\"141122\"},{\"parent_id\":141100,\"label\":\"兴县\",\"value\":\"141123\"},{\"parent_id\":141100,\"label\":\"临县\",\"value\":\"141124\"},{\"parent_id\":141100,\"label\":\"柳林县\",\"value\":\"141125\"},{\"parent_id\":141100,\"label\":\"石楼县\",\"value\":\"141126\"},{\"parent_id\":141100,\"label\":\"岚县\",\"value\":\"141127\"},{\"parent_id\":141100,\"label\":\"方山县\",\"value\":\"141128\"},{\"parent_id\":141100,\"label\":\"中阳县\",\"value\":\"141129\"},{\"parent_id\":141100,\"label\":\"交口县\",\"value\":\"141130\"},{\"parent_id\":141100,\"label\":\"孝义市\",\"value\":\"141181\"},{\"parent_id\":141100,\"label\":\"汾阳市\",\"value\":\"141182\"},{\"parent_id\":0,\"label\":\"内蒙古自治区\",\"value\":\"150000\"},{\"parent_id\":150000,\"label\":\"呼和浩特市\",\"value\":\"150100\"},{\"parent_id\":150100,\"label\":\"新城区\",\"value\":\"150102\"},{\"parent_id\":150100,\"label\":\"回民区\",\"value\":\"150103\"},{\"parent_id\":150100,\"label\":\"玉泉区\",\"value\":\"150104\"},{\"parent_id\":150100,\"label\":\"赛罕区\",\"value\":\"150105\"},{\"parent_id\":150100,\"label\":\"土默特左旗\",\"value\":\"150121\"},{\"parent_id\":150100,\"label\":\"托克托县\",\"value\":\"150122\"},{\"parent_id\":150100,\"label\":\"和林格尔县\",\"value\":\"150123\"},{\"parent_id\":150100,\"label\":\"清水河县\",\"value\":\"150124\"},{\"parent_id\":150100,\"label\":\"武川县\",\"value\":\"150125\"},{\"parent_id\":150000,\"label\":\"包头市\",\"value\":\"150200\"},{\"parent_id\":150200,\"label\":\"东河区\",\"value\":\"150202\"},{\"parent_id\":150200,\"label\":\"昆都仑区\",\"value\":\"150203\"},{\"parent_id\":150200,\"label\":\"青山区\",\"value\":\"150204\"},{\"parent_id\":150200,\"label\":\"石拐区\",\"value\":\"150205\"},{\"parent_id\":150200,\"label\":\"白云鄂博矿区\",\"value\":\"150206\"},{\"parent_id\":150200,\"label\":\"九原区\",\"value\":\"150207\"},{\"parent_id\":150200,\"label\":\"土默特右旗\",\"value\":\"150221\"},{\"parent_id\":150200,\"label\":\"固阳县\",\"value\":\"150222\"},{\"parent_id\":150200,\"label\":\"达尔罕茂明安联合旗\",\"value\":\"150223\"},{\"parent_id\":150000,\"label\":\"乌海市\",\"value\":\"150300\"},{\"parent_id\":150300,\"label\":\"海勃湾区\",\"value\":\"150302\"},{\"parent_id\":150300,\"label\":\"海南区\",\"value\":\"150303\"},{\"parent_id\":150300,\"label\":\"乌达区\",\"value\":\"150304\"},{\"parent_id\":150000,\"label\":\"赤峰市\",\"value\":\"150400\"},{\"parent_id\":150400,\"label\":\"红山区\",\"value\":\"150402\"},{\"parent_id\":150400,\"label\":\"元宝山区\",\"value\":\"150403\"},{\"parent_id\":150400,\"label\":\"松山区\",\"value\":\"150404\"},{\"parent_id\":150400,\"label\":\"阿鲁科尔沁旗\",\"value\":\"150421\"},{\"parent_id\":150400,\"label\":\"巴林左旗\",\"value\":\"150422\"},{\"parent_id\":150400,\"label\":\"巴林右旗\",\"value\":\"150423\"},{\"parent_id\":150400,\"label\":\"林西县\",\"value\":\"150424\"},{\"parent_id\":150400,\"label\":\"克什克腾旗\",\"value\":\"150425\"},{\"parent_id\":150400,\"label\":\"翁牛特旗\",\"value\":\"150426\"},{\"parent_id\":150400,\"label\":\"喀喇沁旗\",\"value\":\"150428\"},{\"parent_id\":150400,\"label\":\"宁城县\",\"value\":\"150429\"},{\"parent_id\":150400,\"label\":\"敖汉旗\",\"value\":\"150430\"},{\"parent_id\":150000,\"label\":\"通辽市\",\"value\":\"150500\"},{\"parent_id\":150500,\"label\":\"科尔沁区\",\"value\":\"150502\"},{\"parent_id\":150500,\"label\":\"科尔沁左翼中旗\",\"value\":\"150521\"},{\"parent_id\":150500,\"label\":\"科尔沁左翼后旗\",\"value\":\"150522\"},{\"parent_id\":150500,\"label\":\"开鲁县\",\"value\":\"150523\"},{\"parent_id\":150500,\"label\":\"库伦旗\",\"value\":\"150524\"},{\"parent_id\":150500,\"label\":\"奈曼旗\",\"value\":\"150525\"},{\"parent_id\":150500,\"label\":\"扎鲁特旗\",\"value\":\"150526\"},{\"parent_id\":150500,\"label\":\"霍林郭勒市\",\"value\":\"150581\"},{\"parent_id\":150000,\"label\":\"鄂尔多斯市\",\"value\":\"150600\"},{\"parent_id\":150600,\"label\":\"东胜区\",\"value\":\"150602\"},{\"parent_id\":150600,\"label\":\"康巴什区\",\"value\":\"150603\"},{\"parent_id\":150600,\"label\":\"达拉特旗\",\"value\":\"150621\"},{\"parent_id\":150600,\"label\":\"准格尔旗\",\"value\":\"150622\"},{\"parent_id\":150600,\"label\":\"鄂托克前旗\",\"value\":\"150623\"},{\"parent_id\":150600,\"label\":\"鄂托克旗\",\"value\":\"150624\"},{\"parent_id\":150600,\"label\":\"杭锦旗\",\"value\":\"150625\"},{\"parent_id\":150600,\"label\":\"乌审旗\",\"value\":\"150626\"},{\"parent_id\":150600,\"label\":\"伊金霍洛旗\",\"value\":\"150627\"},{\"parent_id\":150000,\"label\":\"呼伦贝尔市\",\"value\":\"150700\"},{\"parent_id\":150700,\"label\":\"海拉尔区\",\"value\":\"150702\"},{\"parent_id\":150700,\"label\":\"扎赉诺尔区\",\"value\":\"150703\"},{\"parent_id\":150700,\"label\":\"阿荣旗\",\"value\":\"150721\"},{\"parent_id\":150700,\"label\":\"莫力达瓦达斡尔族自治旗\",\"value\":\"150722\"},{\"parent_id\":150700,\"label\":\"鄂伦春自治旗\",\"value\":\"150723\"},{\"parent_id\":150700,\"label\":\"鄂温克族自治旗\",\"value\":\"150724\"},{\"parent_id\":150700,\"label\":\"陈巴尔虎旗\",\"value\":\"150725\"},{\"parent_id\":150700,\"label\":\"新巴尔虎左旗\",\"value\":\"150726\"},{\"parent_id\":150700,\"label\":\"新巴尔虎右旗\",\"value\":\"150727\"},{\"parent_id\":150700,\"label\":\"满洲里市\",\"value\":\"150781\"},{\"parent_id\":150700,\"label\":\"牙克石市\",\"value\":\"150782\"},{\"parent_id\":150700,\"label\":\"扎兰屯市\",\"value\":\"150783\"},{\"parent_id\":150700,\"label\":\"额尔古纳市\",\"value\":\"150784\"},{\"parent_id\":150700,\"label\":\"根河市\",\"value\":\"150785\"},{\"parent_id\":150000,\"label\":\"巴彦淖尔市\",\"value\":\"150800\"},{\"parent_id\":150800,\"label\":\"临河区\",\"value\":\"150802\"},{\"parent_id\":150800,\"label\":\"五原县\",\"value\":\"150821\"},{\"parent_id\":150800,\"label\":\"磴口县\",\"value\":\"150822\"},{\"parent_id\":150800,\"label\":\"乌拉特前旗\",\"value\":\"150823\"},{\"parent_id\":150800,\"label\":\"乌拉特中旗\",\"value\":\"150824\"},{\"parent_id\":150800,\"label\":\"乌拉特后旗\",\"value\":\"150825\"},{\"parent_id\":150800,\"label\":\"杭锦后旗\",\"value\":\"150826\"},{\"parent_id\":150000,\"label\":\"乌兰察布市\",\"value\":\"150900\"},{\"parent_id\":150900,\"label\":\"集宁区\",\"value\":\"150902\"},{\"parent_id\":150900,\"label\":\"卓资县\",\"value\":\"150921\"},{\"parent_id\":150900,\"label\":\"化德县\",\"value\":\"150922\"},{\"parent_id\":150900,\"label\":\"商都县\",\"value\":\"150923\"},{\"parent_id\":150900,\"label\":\"兴和县\",\"value\":\"150924\"},{\"parent_id\":150900,\"label\":\"凉城县\",\"value\":\"150925\"},{\"parent_id\":150900,\"label\":\"察哈尔右翼前旗\",\"value\":\"150926\"},{\"parent_id\":150900,\"label\":\"察哈尔右翼中旗\",\"value\":\"150927\"},{\"parent_id\":150900,\"label\":\"察哈尔右翼后旗\",\"value\":\"150928\"},{\"parent_id\":150900,\"label\":\"四子王旗\",\"value\":\"150929\"},{\"parent_id\":150900,\"label\":\"丰镇市\",\"value\":\"150981\"},{\"parent_id\":150000,\"label\":\"兴安盟\",\"value\":\"152200\"},{\"parent_id\":152200,\"label\":\"乌兰浩特市\",\"value\":\"152201\"},{\"parent_id\":152200,\"label\":\"阿尔山市\",\"value\":\"152202\"},{\"parent_id\":152200,\"label\":\"科尔沁右翼前旗\",\"value\":\"152221\"},{\"parent_id\":152200,\"label\":\"科尔沁右翼中旗\",\"value\":\"152222\"},{\"parent_id\":152200,\"label\":\"扎赉特旗\",\"value\":\"152223\"},{\"parent_id\":152200,\"label\":\"突泉县\",\"value\":\"152224\"},{\"parent_id\":150000,\"label\":\"锡林郭勒盟\",\"value\":\"152500\"},{\"parent_id\":152500,\"label\":\"二连浩特市\",\"value\":\"152501\"},{\"parent_id\":152500,\"label\":\"锡林浩特市\",\"value\":\"152502\"},{\"parent_id\":152500,\"label\":\"阿巴嘎旗\",\"value\":\"152522\"},{\"parent_id\":152500,\"label\":\"苏尼特左旗\",\"value\":\"152523\"},{\"parent_id\":152500,\"label\":\"苏尼特右旗\",\"value\":\"152524\"},{\"parent_id\":152500,\"label\":\"东乌珠穆沁旗\",\"value\":\"152525\"},{\"parent_id\":152500,\"label\":\"西乌珠穆沁旗\",\"value\":\"152526\"},{\"parent_id\":152500,\"label\":\"太仆寺旗\",\"value\":\"152527\"},{\"parent_id\":152500,\"label\":\"镶黄旗\",\"value\":\"152528\"},{\"parent_id\":152500,\"label\":\"正镶白旗\",\"value\":\"152529\"},{\"parent_id\":152500,\"label\":\"正蓝旗\",\"value\":\"152530\"},{\"parent_id\":152500,\"label\":\"多伦县\",\"value\":\"152531\"},{\"parent_id\":150000,\"label\":\"阿拉善盟\",\"value\":\"152900\"},{\"parent_id\":152900,\"label\":\"阿拉善左旗\",\"value\":\"152921\"},{\"parent_id\":152900,\"label\":\"阿拉善右旗\",\"value\":\"152922\"},{\"parent_id\":152900,\"label\":\"额济纳旗\",\"value\":\"152923\"},{\"parent_id\":0,\"label\":\"辽宁省\",\"value\":\"210000\"},{\"parent_id\":210000,\"label\":\"沈阳市\",\"value\":\"210100\"},{\"parent_id\":210100,\"label\":\"和平区\",\"value\":\"210102\"},{\"parent_id\":210100,\"label\":\"沈河区\",\"value\":\"210103\"},{\"parent_id\":210100,\"label\":\"大东区\",\"value\":\"210104\"},{\"parent_id\":210100,\"label\":\"皇姑区\",\"value\":\"210105\"},{\"parent_id\":210100,\"label\":\"铁西区\",\"value\":\"210106\"},{\"parent_id\":210100,\"label\":\"苏家屯区\",\"value\":\"210111\"},{\"parent_id\":210100,\"label\":\"浑南区\",\"value\":\"210112\"},{\"parent_id\":210100,\"label\":\"沈北新区\",\"value\":\"210113\"},{\"parent_id\":210100,\"label\":\"于洪区\",\"value\":\"210114\"},{\"parent_id\":210100,\"label\":\"辽中区\",\"value\":\"210115\"},{\"parent_id\":210100,\"label\":\"康平县\",\"value\":\"210123\"},{\"parent_id\":210100,\"label\":\"法库县\",\"value\":\"210124\"},{\"parent_id\":210100,\"label\":\"新民市\",\"value\":\"210181\"},{\"parent_id\":210000,\"label\":\"大连市\",\"value\":\"210200\"},{\"parent_id\":210200,\"label\":\"中山区\",\"value\":\"210202\"},{\"parent_id\":210200,\"label\":\"西岗区\",\"value\":\"210203\"},{\"parent_id\":210200,\"label\":\"沙河口区\",\"value\":\"210204\"},{\"parent_id\":210200,\"label\":\"甘井子区\",\"value\":\"210211\"},{\"parent_id\":210200,\"label\":\"旅顺口区\",\"value\":\"210212\"},{\"parent_id\":210200,\"label\":\"金州区\",\"value\":\"210213\"},{\"parent_id\":210200,\"label\":\"普兰店区\",\"value\":\"210214\"},{\"parent_id\":210200,\"label\":\"长海县\",\"value\":\"210224\"},{\"parent_id\":210200,\"label\":\"瓦房店市\",\"value\":\"210281\"},{\"parent_id\":210200,\"label\":\"庄河市\",\"value\":\"210283\"},{\"parent_id\":210000,\"label\":\"鞍山市\",\"value\":\"210300\"},{\"parent_id\":210300,\"label\":\"铁东区\",\"value\":\"210302\"},{\"parent_id\":210300,\"label\":\"铁西区\",\"value\":\"210303\"},{\"parent_id\":210300,\"label\":\"立山区\",\"value\":\"210304\"},{\"parent_id\":210300,\"label\":\"千山区\",\"value\":\"210311\"},{\"parent_id\":210300,\"label\":\"台安县\",\"value\":\"210321\"},{\"parent_id\":210300,\"label\":\"岫岩满族自治县\",\"value\":\"210323\"},{\"parent_id\":210300,\"label\":\"海城市\",\"value\":\"210381\"},{\"parent_id\":210000,\"label\":\"抚顺市\",\"value\":\"210400\"},{\"parent_id\":210400,\"label\":\"新抚区\",\"value\":\"210402\"},{\"parent_id\":210400,\"label\":\"东洲区\",\"value\":\"210403\"},{\"parent_id\":210400,\"label\":\"望花区\",\"value\":\"210404\"},{\"parent_id\":210400,\"label\":\"顺城区\",\"value\":\"210411\"},{\"parent_id\":210400,\"label\":\"抚顺县\",\"value\":\"210421\"},{\"parent_id\":210400,\"label\":\"新宾满族自治县\",\"value\":\"210422\"},{\"parent_id\":210400,\"label\":\"清原满族自治县\",\"value\":\"210423\"},{\"parent_id\":210000,\"label\":\"本溪市\",\"value\":\"210500\"},{\"parent_id\":210500,\"label\":\"平山区\",\"value\":\"210502\"},{\"parent_id\":210500,\"label\":\"溪湖区\",\"value\":\"210503\"},{\"parent_id\":210500,\"label\":\"明山区\",\"value\":\"210504\"},{\"parent_id\":210500,\"label\":\"南芬区\",\"value\":\"210505\"},{\"parent_id\":210500,\"label\":\"本溪满族自治县\",\"value\":\"210521\"},{\"parent_id\":210500,\"label\":\"桓仁满族自治县\",\"value\":\"210522\"},{\"parent_id\":210000,\"label\":\"丹东市\",\"value\":\"210600\"},{\"parent_id\":210600,\"label\":\"元宝区\",\"value\":\"210602\"},{\"parent_id\":210600,\"label\":\"振兴区\",\"value\":\"210603\"},{\"parent_id\":210600,\"label\":\"振安区\",\"value\":\"210604\"},{\"parent_id\":210600,\"label\":\"宽甸满族自治县\",\"value\":\"210624\"},{\"parent_id\":210600,\"label\":\"东港市\",\"value\":\"210681\"},{\"parent_id\":210600,\"label\":\"凤城市\",\"value\":\"210682\"},{\"parent_id\":210000,\"label\":\"锦州市\",\"value\":\"210700\"},{\"parent_id\":210700,\"label\":\"古塔区\",\"value\":\"210702\"},{\"parent_id\":210700,\"label\":\"凌河区\",\"value\":\"210703\"},{\"parent_id\":210700,\"label\":\"太和区\",\"value\":\"210711\"},{\"parent_id\":210700,\"label\":\"黑山县\",\"value\":\"210726\"},{\"parent_id\":210700,\"label\":\"义县\",\"value\":\"210727\"},{\"parent_id\":210700,\"label\":\"凌海市\",\"value\":\"210781\"},{\"parent_id\":210700,\"label\":\"北镇市\",\"value\":\"210782\"},{\"parent_id\":210000,\"label\":\"营口市\",\"value\":\"210800\"},{\"parent_id\":210800,\"label\":\"站前区\",\"value\":\"210802\"},{\"parent_id\":210800,\"label\":\"西市区\",\"value\":\"210803\"},{\"parent_id\":210800,\"label\":\"鲅鱼圈区\",\"value\":\"210804\"},{\"parent_id\":210800,\"label\":\"老边区\",\"value\":\"210811\"},{\"parent_id\":210800,\"label\":\"盖州市\",\"value\":\"210881\"},{\"parent_id\":210800,\"label\":\"大石桥市\",\"value\":\"210882\"},{\"parent_id\":210000,\"label\":\"阜新市\",\"value\":\"210900\"},{\"parent_id\":210900,\"label\":\"海州区\",\"value\":\"210902\"},{\"parent_id\":210900,\"label\":\"新邱区\",\"value\":\"210903\"},{\"parent_id\":210900,\"label\":\"太平区\",\"value\":\"210904\"},{\"parent_id\":210900,\"label\":\"清河门区\",\"value\":\"210905\"},{\"parent_id\":210900,\"label\":\"细河区\",\"value\":\"210911\"},{\"parent_id\":210900,\"label\":\"阜新蒙古族自治县\",\"value\":\"210921\"},{\"parent_id\":210900,\"label\":\"彰武县\",\"value\":\"210922\"},{\"parent_id\":210000,\"label\":\"辽阳市\",\"value\":\"211000\"},{\"parent_id\":211000,\"label\":\"白塔区\",\"value\":\"211002\"},{\"parent_id\":211000,\"label\":\"文圣区\",\"value\":\"211003\"},{\"parent_id\":211000,\"label\":\"宏伟区\",\"value\":\"211004\"},{\"parent_id\":211000,\"label\":\"弓长岭区\",\"value\":\"211005\"},{\"parent_id\":211000,\"label\":\"太子河区\",\"value\":\"211011\"},{\"parent_id\":211000,\"label\":\"辽阳县\",\"value\":\"211021\"},{\"parent_id\":211000,\"label\":\"灯塔市\",\"value\":\"211081\"},{\"parent_id\":210000,\"label\":\"盘锦市\",\"value\":\"211100\"},{\"parent_id\":211100,\"label\":\"双台子区\",\"value\":\"211102\"},{\"parent_id\":211100,\"label\":\"兴隆台区\",\"value\":\"211103\"},{\"parent_id\":211100,\"label\":\"大洼区\",\"value\":\"211104\"},{\"parent_id\":211100,\"label\":\"盘山县\",\"value\":\"211122\"},{\"parent_id\":210000,\"label\":\"铁岭市\",\"value\":\"211200\"},{\"parent_id\":211200,\"label\":\"银州区\",\"value\":\"211202\"},{\"parent_id\":211200,\"label\":\"清河区\",\"value\":\"211204\"},{\"parent_id\":211200,\"label\":\"铁岭县\",\"value\":\"211221\"},{\"parent_id\":211200,\"label\":\"西丰县\",\"value\":\"211223\"},{\"parent_id\":211200,\"label\":\"昌图县\",\"value\":\"211224\"},{\"parent_id\":211200,\"label\":\"调兵山市\",\"value\":\"211281\"},{\"parent_id\":211200,\"label\":\"开原市\",\"value\":\"211282\"},{\"parent_id\":210000,\"label\":\"朝阳市\",\"value\":\"211300\"},{\"parent_id\":211300,\"label\":\"双塔区\",\"value\":\"211302\"},{\"parent_id\":211300,\"label\":\"龙城区\",\"value\":\"211303\"},{\"parent_id\":211300,\"label\":\"朝阳县\",\"value\":\"211321\"},{\"parent_id\":211300,\"label\":\"建平县\",\"value\":\"211322\"},{\"parent_id\":211300,\"label\":\"喀喇沁左翼蒙古族自治县\",\"value\":\"211324\"},{\"parent_id\":211300,\"label\":\"北票市\",\"value\":\"211381\"},{\"parent_id\":211300,\"label\":\"凌源市\",\"value\":\"211382\"},{\"parent_id\":210000,\"label\":\"葫芦岛市\",\"value\":\"211400\"},{\"parent_id\":211400,\"label\":\"连山区\",\"value\":\"211402\"},{\"parent_id\":211400,\"label\":\"龙港区\",\"value\":\"211403\"},{\"parent_id\":211400,\"label\":\"南票区\",\"value\":\"211404\"},{\"parent_id\":211400,\"label\":\"绥中县\",\"value\":\"211421\"},{\"parent_id\":211400,\"label\":\"建昌县\",\"value\":\"211422\"},{\"parent_id\":211400,\"label\":\"兴城市\",\"value\":\"211481\"},{\"parent_id\":0,\"label\":\"吉林省\",\"value\":\"220000\"},{\"parent_id\":220000,\"label\":\"长春市\",\"value\":\"220100\"},{\"parent_id\":220100,\"label\":\"南关区\",\"value\":\"220102\"},{\"parent_id\":220100,\"label\":\"宽城区\",\"value\":\"220103\"},{\"parent_id\":220100,\"label\":\"朝阳区\",\"value\":\"220104\"},{\"parent_id\":220100,\"label\":\"二道区\",\"value\":\"220105\"},{\"parent_id\":220100,\"label\":\"绿园区\",\"value\":\"220106\"},{\"parent_id\":220100,\"label\":\"双阳区\",\"value\":\"220112\"},{\"parent_id\":220100,\"label\":\"九台区\",\"value\":\"220113\"},{\"parent_id\":220100,\"label\":\"农安县\",\"value\":\"220122\"},{\"parent_id\":220100,\"label\":\"榆树市\",\"value\":\"220182\"},{\"parent_id\":220100,\"label\":\"德惠市\",\"value\":\"220183\"},{\"parent_id\":220000,\"label\":\"吉林市\",\"value\":\"220200\"},{\"parent_id\":220200,\"label\":\"昌邑区\",\"value\":\"220202\"},{\"parent_id\":220200,\"label\":\"龙潭区\",\"value\":\"220203\"},{\"parent_id\":220200,\"label\":\"船营区\",\"value\":\"220204\"},{\"parent_id\":220200,\"label\":\"丰满区\",\"value\":\"220211\"},{\"parent_id\":220200,\"label\":\"永吉县\",\"value\":\"220221\"},{\"parent_id\":220200,\"label\":\"蛟河市\",\"value\":\"220281\"},{\"parent_id\":220200,\"label\":\"桦甸市\",\"value\":\"220282\"},{\"parent_id\":220200,\"label\":\"舒兰市\",\"value\":\"220283\"},{\"parent_id\":220200,\"label\":\"磐石市\",\"value\":\"220284\"},{\"parent_id\":220000,\"label\":\"四平市\",\"value\":\"220300\"},{\"parent_id\":220300,\"label\":\"铁西区\",\"value\":\"220302\"},{\"parent_id\":220300,\"label\":\"铁东区\",\"value\":\"220303\"},{\"parent_id\":220300,\"label\":\"梨树县\",\"value\":\"220322\"},{\"parent_id\":220300,\"label\":\"伊通满族自治县\",\"value\":\"220323\"},{\"parent_id\":220300,\"label\":\"公主岭市\",\"value\":\"220381\"},{\"parent_id\":220300,\"label\":\"双辽市\",\"value\":\"220382\"},{\"parent_id\":220000,\"label\":\"辽源市\",\"value\":\"220400\"},{\"parent_id\":220400,\"label\":\"龙山区\",\"value\":\"220402\"},{\"parent_id\":220400,\"label\":\"西安区\",\"value\":\"220403\"},{\"parent_id\":220400,\"label\":\"东丰县\",\"value\":\"220421\"},{\"parent_id\":220400,\"label\":\"东辽县\",\"value\":\"220422\"},{\"parent_id\":220000,\"label\":\"通化市\",\"value\":\"220500\"},{\"parent_id\":220500,\"label\":\"东昌区\",\"value\":\"220502\"},{\"parent_id\":220500,\"label\":\"二道江区\",\"value\":\"220503\"},{\"parent_id\":220500,\"label\":\"通化县\",\"value\":\"220521\"},{\"parent_id\":220500,\"label\":\"辉南县\",\"value\":\"220523\"},{\"parent_id\":220500,\"label\":\"柳河县\",\"value\":\"220524\"},{\"parent_id\":220500,\"label\":\"梅河口市\",\"value\":\"220581\"},{\"parent_id\":220500,\"label\":\"集安市\",\"value\":\"220582\"},{\"parent_id\":220000,\"label\":\"白山市\",\"value\":\"220600\"},{\"parent_id\":220600,\"label\":\"浑江区\",\"value\":\"220602\"},{\"parent_id\":220600,\"label\":\"江源区\",\"value\":\"220605\"},{\"parent_id\":220600,\"label\":\"抚松县\",\"value\":\"220621\"},{\"parent_id\":220600,\"label\":\"靖宇县\",\"value\":\"220622\"},{\"parent_id\":220600,\"label\":\"长白朝鲜族自治县\",\"value\":\"220623\"},{\"parent_id\":220600,\"label\":\"临江市\",\"value\":\"220681\"},{\"parent_id\":220000,\"label\":\"松原市\",\"value\":\"220700\"},{\"parent_id\":220700,\"label\":\"宁江区\",\"value\":\"220702\"},{\"parent_id\":220700,\"label\":\"前郭尔罗斯蒙古族自治县\",\"value\":\"220721\"},{\"parent_id\":220700,\"label\":\"长岭县\",\"value\":\"220722\"},{\"parent_id\":220700,\"label\":\"乾安县\",\"value\":\"220723\"},{\"parent_id\":220700,\"label\":\"扶余市\",\"value\":\"220781\"},{\"parent_id\":220000,\"label\":\"白城市\",\"value\":\"220800\"},{\"parent_id\":220800,\"label\":\"洮北区\",\"value\":\"220802\"},{\"parent_id\":220800,\"label\":\"镇赉县\",\"value\":\"220821\"},{\"parent_id\":220800,\"label\":\"通榆县\",\"value\":\"220822\"},{\"parent_id\":220800,\"label\":\"洮南市\",\"value\":\"220881\"},{\"parent_id\":220800,\"label\":\"大安市\",\"value\":\"220882\"},{\"parent_id\":220000,\"label\":\"延边朝鲜族自治州\",\"value\":\"222400\"},{\"parent_id\":222400,\"label\":\"延吉市\",\"value\":\"222401\"},{\"parent_id\":222400,\"label\":\"图们市\",\"value\":\"222402\"},{\"parent_id\":222400,\"label\":\"敦化市\",\"value\":\"222403\"},{\"parent_id\":222400,\"label\":\"珲春市\",\"value\":\"222404\"},{\"parent_id\":222400,\"label\":\"龙井市\",\"value\":\"222405\"},{\"parent_id\":222400,\"label\":\"和龙市\",\"value\":\"222406\"},{\"parent_id\":222400,\"label\":\"汪清县\",\"value\":\"222424\"},{\"parent_id\":222400,\"label\":\"安图县\",\"value\":\"222426\"},{\"parent_id\":0,\"label\":\"黑龙江省\",\"value\":\"230000\"},{\"parent_id\":230000,\"label\":\"哈尔滨市\",\"value\":\"230100\"},{\"parent_id\":230100,\"label\":\"道里区\",\"value\":\"230102\"},{\"parent_id\":230100,\"label\":\"南岗区\",\"value\":\"230103\"},{\"parent_id\":230100,\"label\":\"道外区\",\"value\":\"230104\"},{\"parent_id\":230100,\"label\":\"平房区\",\"value\":\"230108\"},{\"parent_id\":230100,\"label\":\"松北区\",\"value\":\"230109\"},{\"parent_id\":230100,\"label\":\"香坊区\",\"value\":\"230110\"},{\"parent_id\":230100,\"label\":\"呼兰区\",\"value\":\"230111\"},{\"parent_id\":230100,\"label\":\"阿城区\",\"value\":\"230112\"},{\"parent_id\":230100,\"label\":\"双城区\",\"value\":\"230113\"},{\"parent_id\":230100,\"label\":\"依兰县\",\"value\":\"230123\"},{\"parent_id\":230100,\"label\":\"方正县\",\"value\":\"230124\"},{\"parent_id\":230100,\"label\":\"宾县\",\"value\":\"230125\"},{\"parent_id\":230100,\"label\":\"巴彦县\",\"value\":\"230126\"},{\"parent_id\":230100,\"label\":\"木兰县\",\"value\":\"230127\"},{\"parent_id\":230100,\"label\":\"通河县\",\"value\":\"230128\"},{\"parent_id\":230100,\"label\":\"延寿县\",\"value\":\"230129\"},{\"parent_id\":230100,\"label\":\"尚志市\",\"value\":\"230183\"},{\"parent_id\":230100,\"label\":\"五常市\",\"value\":\"230184\"},{\"parent_id\":230000,\"label\":\"齐齐哈尔市\",\"value\":\"230200\"},{\"parent_id\":230200,\"label\":\"龙沙区\",\"value\":\"230202\"},{\"parent_id\":230200,\"label\":\"建华区\",\"value\":\"230203\"},{\"parent_id\":230200,\"label\":\"铁锋区\",\"value\":\"230204\"},{\"parent_id\":230200,\"label\":\"昂昂溪区\",\"value\":\"230205\"},{\"parent_id\":230200,\"label\":\"富拉尔基区\",\"value\":\"230206\"},{\"parent_id\":230200,\"label\":\"碾子山区\",\"value\":\"230207\"},{\"parent_id\":230200,\"label\":\"梅里斯达斡尔族区\",\"value\":\"230208\"},{\"parent_id\":230200,\"label\":\"龙江县\",\"value\":\"230221\"},{\"parent_id\":230200,\"label\":\"依安县\",\"value\":\"230223\"},{\"parent_id\":230200,\"label\":\"泰来县\",\"value\":\"230224\"},{\"parent_id\":230200,\"label\":\"甘南县\",\"value\":\"230225\"},{\"parent_id\":230200,\"label\":\"富裕县\",\"value\":\"230227\"},{\"parent_id\":230200,\"label\":\"克山县\",\"value\":\"230229\"},{\"parent_id\":230200,\"label\":\"克东县\",\"value\":\"230230\"},{\"parent_id\":230200,\"label\":\"拜泉县\",\"value\":\"230231\"},{\"parent_id\":230200,\"label\":\"讷河市\",\"value\":\"230281\"},{\"parent_id\":230000,\"label\":\"鸡西市\",\"value\":\"230300\"},{\"parent_id\":230300,\"label\":\"鸡冠区\",\"value\":\"230302\"},{\"parent_id\":230300,\"label\":\"恒山区\",\"value\":\"230303\"},{\"parent_id\":230300,\"label\":\"滴道区\",\"value\":\"230304\"},{\"parent_id\":230300,\"label\":\"梨树区\",\"value\":\"230305\"},{\"parent_id\":230300,\"label\":\"城子河区\",\"value\":\"230306\"},{\"parent_id\":230300,\"label\":\"麻山区\",\"value\":\"230307\"},{\"parent_id\":230300,\"label\":\"鸡东县\",\"value\":\"230321\"},{\"parent_id\":230300,\"label\":\"虎林市\",\"value\":\"230381\"},{\"parent_id\":230300,\"label\":\"密山市\",\"value\":\"230382\"},{\"parent_id\":230000,\"label\":\"鹤岗市\",\"value\":\"230400\"},{\"parent_id\":230400,\"label\":\"向阳区\",\"value\":\"230402\"},{\"parent_id\":230400,\"label\":\"工农区\",\"value\":\"230403\"},{\"parent_id\":230400,\"label\":\"南山区\",\"value\":\"230404\"},{\"parent_id\":230400,\"label\":\"兴安区\",\"value\":\"230405\"},{\"parent_id\":230400,\"label\":\"东山区\",\"value\":\"230406\"},{\"parent_id\":230400,\"label\":\"兴山区\",\"value\":\"230407\"},{\"parent_id\":230400,\"label\":\"萝北县\",\"value\":\"230421\"},{\"parent_id\":230400,\"label\":\"绥滨县\",\"value\":\"230422\"},{\"parent_id\":230000,\"label\":\"双鸭山市\",\"value\":\"230500\"},{\"parent_id\":230500,\"label\":\"尖山区\",\"value\":\"230502\"},{\"parent_id\":230500,\"label\":\"岭东区\",\"value\":\"230503\"},{\"parent_id\":230500,\"label\":\"四方台区\",\"value\":\"230505\"},{\"parent_id\":230500,\"label\":\"宝山区\",\"value\":\"230506\"},{\"parent_id\":230500,\"label\":\"集贤县\",\"value\":\"230521\"},{\"parent_id\":230500,\"label\":\"友谊县\",\"value\":\"230522\"},{\"parent_id\":230500,\"label\":\"宝清县\",\"value\":\"230523\"},{\"parent_id\":230500,\"label\":\"饶河县\",\"value\":\"230524\"},{\"parent_id\":230000,\"label\":\"大庆市\",\"value\":\"230600\"},{\"parent_id\":230600,\"label\":\"萨尔图区\",\"value\":\"230602\"},{\"parent_id\":230600,\"label\":\"龙凤区\",\"value\":\"230603\"},{\"parent_id\":230600,\"label\":\"让胡路区\",\"value\":\"230604\"},{\"parent_id\":230600,\"label\":\"红岗区\",\"value\":\"230605\"},{\"parent_id\":230600,\"label\":\"大同区\",\"value\":\"230606\"},{\"parent_id\":230600,\"label\":\"肇州县\",\"value\":\"230621\"},{\"parent_id\":230600,\"label\":\"肇源县\",\"value\":\"230622\"},{\"parent_id\":230600,\"label\":\"林甸县\",\"value\":\"230623\"},{\"parent_id\":230600,\"label\":\"杜尔伯特蒙古族自治县\",\"value\":\"230624\"},{\"parent_id\":230000,\"label\":\"伊春市\",\"value\":\"230700\"},{\"parent_id\":230700,\"label\":\"伊春区\",\"value\":\"230702\"},{\"parent_id\":230700,\"label\":\"南岔区\",\"value\":\"230703\"},{\"parent_id\":230700,\"label\":\"友好区\",\"value\":\"230704\"},{\"parent_id\":230700,\"label\":\"西林区\",\"value\":\"230705\"},{\"parent_id\":230700,\"label\":\"翠峦区\",\"value\":\"230706\"},{\"parent_id\":230700,\"label\":\"新青区\",\"value\":\"230707\"},{\"parent_id\":230700,\"label\":\"美溪区\",\"value\":\"230708\"},{\"parent_id\":230700,\"label\":\"金山屯区\",\"value\":\"230709\"},{\"parent_id\":230700,\"label\":\"五营区\",\"value\":\"230710\"},{\"parent_id\":230700,\"label\":\"乌马河区\",\"value\":\"230711\"},{\"parent_id\":230700,\"label\":\"汤旺河区\",\"value\":\"230712\"},{\"parent_id\":230700,\"label\":\"带岭区\",\"value\":\"230713\"},{\"parent_id\":230700,\"label\":\"乌伊岭区\",\"value\":\"230714\"},{\"parent_id\":230700,\"label\":\"红星区\",\"value\":\"230715\"},{\"parent_id\":230700,\"label\":\"上甘岭区\",\"value\":\"230716\"},{\"parent_id\":230700,\"label\":\"嘉荫县\",\"value\":\"230722\"},{\"parent_id\":230700,\"label\":\"铁力市\",\"value\":\"230781\"},{\"parent_id\":230000,\"label\":\"佳木斯市\",\"value\":\"230800\"},{\"parent_id\":230800,\"label\":\"向阳区\",\"value\":\"230803\"},{\"parent_id\":230800,\"label\":\"前进区\",\"value\":\"230804\"},{\"parent_id\":230800,\"label\":\"东风区\",\"value\":\"230805\"},{\"parent_id\":230800,\"label\":\"郊区\",\"value\":\"230811\"},{\"parent_id\":230800,\"label\":\"桦南县\",\"value\":\"230822\"},{\"parent_id\":230800,\"label\":\"桦川县\",\"value\":\"230826\"},{\"parent_id\":230800,\"label\":\"汤原县\",\"value\":\"230828\"},{\"parent_id\":230800,\"label\":\"同江市\",\"value\":\"230881\"},{\"parent_id\":230800,\"label\":\"富锦市\",\"value\":\"230882\"},{\"parent_id\":230800,\"label\":\"抚远市\",\"value\":\"230883\"},{\"parent_id\":230000,\"label\":\"七台河市\",\"value\":\"230900\"},{\"parent_id\":230900,\"label\":\"新兴区\",\"value\":\"230902\"},{\"parent_id\":230900,\"label\":\"桃山区\",\"value\":\"230903\"},{\"parent_id\":230900,\"label\":\"茄子河区\",\"value\":\"230904\"},{\"parent_id\":230900,\"label\":\"勃利县\",\"value\":\"230921\"},{\"parent_id\":230000,\"label\":\"牡丹江市\",\"value\":\"231000\"},{\"parent_id\":231000,\"label\":\"东安区\",\"value\":\"231002\"},{\"parent_id\":231000,\"label\":\"阳明区\",\"value\":\"231003\"},{\"parent_id\":231000,\"label\":\"爱民区\",\"value\":\"231004\"},{\"parent_id\":231000,\"label\":\"西安区\",\"value\":\"231005\"},{\"parent_id\":231000,\"label\":\"林口县\",\"value\":\"231025\"},{\"parent_id\":231000,\"label\":\"绥芬河市\",\"value\":\"231081\"},{\"parent_id\":231000,\"label\":\"海林市\",\"value\":\"231083\"},{\"parent_id\":231000,\"label\":\"宁安市\",\"value\":\"231084\"},{\"parent_id\":231000,\"label\":\"穆棱市\",\"value\":\"231085\"},{\"parent_id\":231000,\"label\":\"东宁市\",\"value\":\"231086\"},{\"parent_id\":230000,\"label\":\"黑河市\",\"value\":\"231100\"},{\"parent_id\":231100,\"label\":\"爱辉区\",\"value\":\"231102\"},{\"parent_id\":231100,\"label\":\"嫩江县\",\"value\":\"231121\"},{\"parent_id\":231100,\"label\":\"逊克县\",\"value\":\"231123\"},{\"parent_id\":231100,\"label\":\"孙吴县\",\"value\":\"231124\"},{\"parent_id\":231100,\"label\":\"北安市\",\"value\":\"231181\"},{\"parent_id\":231100,\"label\":\"五大连池市\",\"value\":\"231182\"},{\"parent_id\":230000,\"label\":\"绥化市\",\"value\":\"231200\"},{\"parent_id\":231200,\"label\":\"北林区\",\"value\":\"231202\"},{\"parent_id\":231200,\"label\":\"望奎县\",\"value\":\"231221\"},{\"parent_id\":231200,\"label\":\"兰西县\",\"value\":\"231222\"},{\"parent_id\":231200,\"label\":\"青冈县\",\"value\":\"231223\"},{\"parent_id\":231200,\"label\":\"庆安县\",\"value\":\"231224\"},{\"parent_id\":231200,\"label\":\"明水县\",\"value\":\"231225\"},{\"parent_id\":231200,\"label\":\"绥棱县\",\"value\":\"231226\"},{\"parent_id\":231200,\"label\":\"安达市\",\"value\":\"231281\"},{\"parent_id\":231200,\"label\":\"肇东市\",\"value\":\"231282\"},{\"parent_id\":231200,\"label\":\"海伦市\",\"value\":\"231283\"},{\"parent_id\":230000,\"label\":\"大兴安岭地区\",\"value\":\"232700\"},{\"parent_id\":232700,\"label\":\"加格达奇区\",\"value\":\"232701\"},{\"parent_id\":232700,\"label\":\"呼玛县\",\"value\":\"232721\"},{\"parent_id\":232700,\"label\":\"塔河县\",\"value\":\"232722\"},{\"parent_id\":232700,\"label\":\"漠河县\",\"value\":\"232723\"},{\"parent_id\":0,\"label\":\"上海\",\"value\":\"310000\"},{\"parent_id\":310000,\"label\":\"上海市\",\"value\":\"310100\"},{\"parent_id\":310100,\"label\":\"黄浦区\",\"value\":\"310101\"},{\"parent_id\":310100,\"label\":\"徐汇区\",\"value\":\"310104\"},{\"parent_id\":310100,\"label\":\"长宁区\",\"value\":\"310105\"},{\"parent_id\":310100,\"label\":\"静安区\",\"value\":\"310106\"},{\"parent_id\":310100,\"label\":\"普陀区\",\"value\":\"310107\"},{\"parent_id\":310100,\"label\":\"虹口区\",\"value\":\"310109\"},{\"parent_id\":310100,\"label\":\"杨浦区\",\"value\":\"310110\"},{\"parent_id\":310100,\"label\":\"闵行区\",\"value\":\"310112\"},{\"parent_id\":310100,\"label\":\"宝山区\",\"value\":\"310113\"},{\"parent_id\":310100,\"label\":\"嘉定区\",\"value\":\"310114\"},{\"parent_id\":310100,\"label\":\"浦东新区\",\"value\":\"310115\"},{\"parent_id\":310100,\"label\":\"金山区\",\"value\":\"310116\"},{\"parent_id\":310100,\"label\":\"松江区\",\"value\":\"310117\"},{\"parent_id\":310100,\"label\":\"青浦区\",\"value\":\"310118\"},{\"parent_id\":310100,\"label\":\"奉贤区\",\"value\":\"310120\"},{\"parent_id\":310100,\"label\":\"崇明区\",\"value\":\"310151\"},{\"parent_id\":0,\"label\":\"江苏省\",\"value\":\"320000\"},{\"parent_id\":320000,\"label\":\"南京市\",\"value\":\"320100\"},{\"parent_id\":320100,\"label\":\"玄武区\",\"value\":\"320102\"},{\"parent_id\":320100,\"label\":\"秦淮区\",\"value\":\"320104\"},{\"parent_id\":320100,\"label\":\"建邺区\",\"value\":\"320105\"},{\"parent_id\":320100,\"label\":\"鼓楼区\",\"value\":\"320106\"},{\"parent_id\":320100,\"label\":\"浦口区\",\"value\":\"320111\"},{\"parent_id\":320100,\"label\":\"栖霞区\",\"value\":\"320113\"},{\"parent_id\":320100,\"label\":\"雨花台区\",\"value\":\"320114\"},{\"parent_id\":320100,\"label\":\"江宁区\",\"value\":\"320115\"},{\"parent_id\":320100,\"label\":\"六合区\",\"value\":\"320116\"},{\"parent_id\":320100,\"label\":\"溧水区\",\"value\":\"320117\"},{\"parent_id\":320100,\"label\":\"高淳区\",\"value\":\"320118\"},{\"parent_id\":320000,\"label\":\"无锡市\",\"value\":\"320200\"},{\"parent_id\":320200,\"label\":\"锡山区\",\"value\":\"320205\"},{\"parent_id\":320200,\"label\":\"惠山区\",\"value\":\"320206\"},{\"parent_id\":320200,\"label\":\"滨湖区\",\"value\":\"320211\"},{\"parent_id\":320200,\"label\":\"梁溪区\",\"value\":\"320213\"},{\"parent_id\":320200,\"label\":\"新吴区\",\"value\":\"320214\"},{\"parent_id\":320200,\"label\":\"江阴市\",\"value\":\"320281\"},{\"parent_id\":320200,\"label\":\"宜兴市\",\"value\":\"320282\"},{\"parent_id\":320000,\"label\":\"徐州市\",\"value\":\"320300\"},{\"parent_id\":320300,\"label\":\"鼓楼区\",\"value\":\"320302\"},{\"parent_id\":320300,\"label\":\"云龙区\",\"value\":\"320303\"},{\"parent_id\":320300,\"label\":\"贾汪区\",\"value\":\"320305\"},{\"parent_id\":320300,\"label\":\"泉山区\",\"value\":\"320311\"},{\"parent_id\":320300,\"label\":\"铜山区\",\"value\":\"320312\"},{\"parent_id\":320300,\"label\":\"丰县\",\"value\":\"320321\"},{\"parent_id\":320300,\"label\":\"沛县\",\"value\":\"320322\"},{\"parent_id\":320300,\"label\":\"睢宁县\",\"value\":\"320324\"},{\"parent_id\":320300,\"label\":\"新沂市\",\"value\":\"320381\"},{\"parent_id\":320300,\"label\":\"邳州市\",\"value\":\"320382\"},{\"parent_id\":320000,\"label\":\"常州市\",\"value\":\"320400\"},{\"parent_id\":320400,\"label\":\"天宁区\",\"value\":\"320402\"},{\"parent_id\":320400,\"label\":\"钟楼区\",\"value\":\"320404\"},{\"parent_id\":320400,\"label\":\"新北区\",\"value\":\"320411\"},{\"parent_id\":320400,\"label\":\"武进区\",\"value\":\"320412\"},{\"parent_id\":320400,\"label\":\"金坛区\",\"value\":\"320413\"},{\"parent_id\":320400,\"label\":\"溧阳市\",\"value\":\"320481\"},{\"parent_id\":320000,\"label\":\"苏州市\",\"value\":\"320500\"},{\"parent_id\":320500,\"label\":\"虎丘区\",\"value\":\"320505\"},{\"parent_id\":320500,\"label\":\"吴中区\",\"value\":\"320506\"},{\"parent_id\":320500,\"label\":\"相城区\",\"value\":\"320507\"},{\"parent_id\":320500,\"label\":\"姑苏区\",\"value\":\"320508\"},{\"parent_id\":320500,\"label\":\"吴江区\",\"value\":\"320509\"},{\"parent_id\":320500,\"label\":\"苏州工业园区\",\"value\":\"320571\"},{\"parent_id\":320500,\"label\":\"常熟市\",\"value\":\"320581\"},{\"parent_id\":320500,\"label\":\"张家港市\",\"value\":\"320582\"},{\"parent_id\":320500,\"label\":\"昆山市\",\"value\":\"320583\"},{\"parent_id\":320500,\"label\":\"太仓市\",\"value\":\"320585\"},{\"parent_id\":320000,\"label\":\"南通市\",\"value\":\"320600\"},{\"parent_id\":320600,\"label\":\"崇川区\",\"value\":\"320602\"},{\"parent_id\":320600,\"label\":\"港闸区\",\"value\":\"320611\"},{\"parent_id\":320600,\"label\":\"通州区\",\"value\":\"320612\"},{\"parent_id\":320600,\"label\":\"海安县\",\"value\":\"320621\"},{\"parent_id\":320600,\"label\":\"如东县\",\"value\":\"320623\"},{\"parent_id\":320600,\"label\":\"启东市\",\"value\":\"320681\"},{\"parent_id\":320600,\"label\":\"如皋市\",\"value\":\"320682\"},{\"parent_id\":320600,\"label\":\"海门市\",\"value\":\"320684\"},{\"parent_id\":320000,\"label\":\"连云港市\",\"value\":\"320700\"},{\"parent_id\":320700,\"label\":\"连云区\",\"value\":\"320703\"},{\"parent_id\":320700,\"label\":\"海州区\",\"value\":\"320706\"},{\"parent_id\":320700,\"label\":\"赣榆区\",\"value\":\"320707\"},{\"parent_id\":320700,\"label\":\"东海县\",\"value\":\"320722\"},{\"parent_id\":320700,\"label\":\"灌云县\",\"value\":\"320723\"},{\"parent_id\":320700,\"label\":\"灌南县\",\"value\":\"320724\"},{\"parent_id\":320000,\"label\":\"淮安市\",\"value\":\"320800\"},{\"parent_id\":320800,\"label\":\"清江浦区\",\"value\":\"320802\"},{\"parent_id\":320800,\"label\":\"淮安区\",\"value\":\"320803\"},{\"parent_id\":320800,\"label\":\"淮阴区\",\"value\":\"320804\"},{\"parent_id\":320800,\"label\":\"洪泽区\",\"value\":\"320813\"},{\"parent_id\":320800,\"label\":\"涟水县\",\"value\":\"320826\"},{\"parent_id\":320800,\"label\":\"盱眙县\",\"value\":\"320830\"},{\"parent_id\":320800,\"label\":\"金湖县\",\"value\":\"320831\"},{\"parent_id\":320000,\"label\":\"盐城市\",\"value\":\"320900\"},{\"parent_id\":320900,\"label\":\"亭湖区\",\"value\":\"320902\"},{\"parent_id\":320900,\"label\":\"盐都区\",\"value\":\"320903\"},{\"parent_id\":320900,\"label\":\"大丰区\",\"value\":\"320904\"},{\"parent_id\":320900,\"label\":\"响水县\",\"value\":\"320921\"},{\"parent_id\":320900,\"label\":\"滨海县\",\"value\":\"320922\"},{\"parent_id\":320900,\"label\":\"阜宁县\",\"value\":\"320923\"},{\"parent_id\":320900,\"label\":\"射阳县\",\"value\":\"320924\"},{\"parent_id\":320900,\"label\":\"建湖县\",\"value\":\"320925\"},{\"parent_id\":320900,\"label\":\"东台市\",\"value\":\"320981\"},{\"parent_id\":320000,\"label\":\"扬州市\",\"value\":\"321000\"},{\"parent_id\":321000,\"label\":\"广陵区\",\"value\":\"321002\"},{\"parent_id\":321000,\"label\":\"邗江区\",\"value\":\"321003\"},{\"parent_id\":321000,\"label\":\"江都区\",\"value\":\"321012\"},{\"parent_id\":321000,\"label\":\"宝应县\",\"value\":\"321023\"},{\"parent_id\":321000,\"label\":\"仪征市\",\"value\":\"321081\"},{\"parent_id\":321000,\"label\":\"高邮市\",\"value\":\"321084\"},{\"parent_id\":320000,\"label\":\"镇江市\",\"value\":\"321100\"},{\"parent_id\":321100,\"label\":\"京口区\",\"value\":\"321102\"},{\"parent_id\":321100,\"label\":\"润州区\",\"value\":\"321111\"},{\"parent_id\":321100,\"label\":\"丹徒区\",\"value\":\"321112\"},{\"parent_id\":321100,\"label\":\"丹阳市\",\"value\":\"321181\"},{\"parent_id\":321100,\"label\":\"扬中市\",\"value\":\"321182\"},{\"parent_id\":321100,\"label\":\"句容市\",\"value\":\"321183\"},{\"parent_id\":320000,\"label\":\"泰州市\",\"value\":\"321200\"},{\"parent_id\":321200,\"label\":\"海陵区\",\"value\":\"321202\"},{\"parent_id\":321200,\"label\":\"高港区\",\"value\":\"321203\"},{\"parent_id\":321200,\"label\":\"姜堰区\",\"value\":\"321204\"},{\"parent_id\":321200,\"label\":\"兴化市\",\"value\":\"321281\"},{\"parent_id\":321200,\"label\":\"靖江市\",\"value\":\"321282\"},{\"parent_id\":321200,\"label\":\"泰兴市\",\"value\":\"321283\"},{\"parent_id\":320000,\"label\":\"宿迁市\",\"value\":\"321300\"},{\"parent_id\":321300,\"label\":\"宿城区\",\"value\":\"321302\"},{\"parent_id\":321300,\"label\":\"宿豫区\",\"value\":\"321311\"},{\"parent_id\":321300,\"label\":\"沭阳县\",\"value\":\"321322\"},{\"parent_id\":321300,\"label\":\"泗阳县\",\"value\":\"321323\"},{\"parent_id\":321300,\"label\":\"泗洪县\",\"value\":\"321324\"},{\"parent_id\":0,\"label\":\"浙江省\",\"value\":\"330000\"},{\"parent_id\":330000,\"label\":\"杭州市\",\"value\":\"330100\"},{\"parent_id\":330100,\"label\":\"上城区\",\"value\":\"330102\"},{\"parent_id\":330100,\"label\":\"下城区\",\"value\":\"330103\"},{\"parent_id\":330100,\"label\":\"江干区\",\"value\":\"330104\"},{\"parent_id\":330100,\"label\":\"拱墅区\",\"value\":\"330105\"},{\"parent_id\":330100,\"label\":\"西湖区\",\"value\":\"330106\"},{\"parent_id\":330100,\"label\":\"滨江区\",\"value\":\"330108\"},{\"parent_id\":330100,\"label\":\"萧山区\",\"value\":\"330109\"},{\"parent_id\":330100,\"label\":\"余杭区\",\"value\":\"330110\"},{\"parent_id\":330100,\"label\":\"富阳区\",\"value\":\"330111\"},{\"parent_id\":330100,\"label\":\"桐庐县\",\"value\":\"330122\"},{\"parent_id\":330100,\"label\":\"淳安县\",\"value\":\"330127\"},{\"parent_id\":330100,\"label\":\"建德市\",\"value\":\"330182\"},{\"parent_id\":330100,\"label\":\"临安市\",\"value\":\"330185\"},{\"parent_id\":330000,\"label\":\"宁波市\",\"value\":\"330200\"},{\"parent_id\":330200,\"label\":\"海曙区\",\"value\":\"330203\"},{\"parent_id\":330200,\"label\":\"江北区\",\"value\":\"330205\"},{\"parent_id\":330200,\"label\":\"北仑区\",\"value\":\"330206\"},{\"parent_id\":330200,\"label\":\"镇海区\",\"value\":\"330211\"},{\"parent_id\":330200,\"label\":\"鄞州区\",\"value\":\"330212\"},{\"parent_id\":330200,\"label\":\"象山县\",\"value\":\"330225\"},{\"parent_id\":330200,\"label\":\"宁海县\",\"value\":\"330226\"},{\"parent_id\":330200,\"label\":\"余姚市\",\"value\":\"330281\"},{\"parent_id\":330200,\"label\":\"慈溪市\",\"value\":\"330282\"},{\"parent_id\":330200,\"label\":\"奉化区\",\"value\":\"330283\"},{\"parent_id\":330000,\"label\":\"温州市\",\"value\":\"330300\"},{\"parent_id\":330300,\"label\":\"鹿城区\",\"value\":\"330302\"},{\"parent_id\":330300,\"label\":\"龙湾区\",\"value\":\"330303\"},{\"parent_id\":330300,\"label\":\"瓯海区\",\"value\":\"330304\"},{\"parent_id\":330300,\"label\":\"洞头区\",\"value\":\"330305\"},{\"parent_id\":330300,\"label\":\"永嘉县\",\"value\":\"330324\"},{\"parent_id\":330300,\"label\":\"平阳县\",\"value\":\"330326\"},{\"parent_id\":330300,\"label\":\"苍南县\",\"value\":\"330327\"},{\"parent_id\":330300,\"label\":\"文成县\",\"value\":\"330328\"},{\"parent_id\":330300,\"label\":\"泰顺县\",\"value\":\"330329\"},{\"parent_id\":330300,\"label\":\"瑞安市\",\"value\":\"330381\"},{\"parent_id\":330300,\"label\":\"乐清市\",\"value\":\"330382\"},{\"parent_id\":330000,\"label\":\"嘉兴市\",\"value\":\"330400\"},{\"parent_id\":330400,\"label\":\"南湖区\",\"value\":\"330402\"},{\"parent_id\":330400,\"label\":\"秀洲区\",\"value\":\"330411\"},{\"parent_id\":330400,\"label\":\"嘉善县\",\"value\":\"330421\"},{\"parent_id\":330400,\"label\":\"海盐县\",\"value\":\"330424\"},{\"parent_id\":330400,\"label\":\"海宁市\",\"value\":\"330481\"},{\"parent_id\":330400,\"label\":\"平湖市\",\"value\":\"330482\"},{\"parent_id\":330400,\"label\":\"桐乡市\",\"value\":\"330483\"},{\"parent_id\":330000,\"label\":\"湖州市\",\"value\":\"330500\"},{\"parent_id\":330500,\"label\":\"吴兴区\",\"value\":\"330502\"},{\"parent_id\":330500,\"label\":\"南浔区\",\"value\":\"330503\"},{\"parent_id\":330500,\"label\":\"德清县\",\"value\":\"330521\"},{\"parent_id\":330500,\"label\":\"长兴县\",\"value\":\"330522\"},{\"parent_id\":330500,\"label\":\"安吉县\",\"value\":\"330523\"},{\"parent_id\":330000,\"label\":\"绍兴市\",\"value\":\"330600\"},{\"parent_id\":330600,\"label\":\"越城区\",\"value\":\"330602\"},{\"parent_id\":330600,\"label\":\"柯桥区\",\"value\":\"330603\"},{\"parent_id\":330600,\"label\":\"上虞区\",\"value\":\"330604\"},{\"parent_id\":330600,\"label\":\"新昌县\",\"value\":\"330624\"},{\"parent_id\":330600,\"label\":\"诸暨市\",\"value\":\"330681\"},{\"parent_id\":330600,\"label\":\"嵊州市\",\"value\":\"330683\"},{\"parent_id\":330000,\"label\":\"金华市\",\"value\":\"330700\"},{\"parent_id\":330700,\"label\":\"婺城区\",\"value\":\"330702\"},{\"parent_id\":330700,\"label\":\"金东区\",\"value\":\"330703\"},{\"parent_id\":330700,\"label\":\"武义县\",\"value\":\"330723\"},{\"parent_id\":330700,\"label\":\"浦江县\",\"value\":\"330726\"},{\"parent_id\":330700,\"label\":\"磐安县\",\"value\":\"330727\"},{\"parent_id\":330700,\"label\":\"兰溪市\",\"value\":\"330781\"},{\"parent_id\":330700,\"label\":\"义乌市\",\"value\":\"330782\"},{\"parent_id\":330700,\"label\":\"东阳市\",\"value\":\"330783\"},{\"parent_id\":330700,\"label\":\"永康市\",\"value\":\"330784\"},{\"parent_id\":330000,\"label\":\"衢州市\",\"value\":\"330800\"},{\"parent_id\":330800,\"label\":\"柯城区\",\"value\":\"330802\"},{\"parent_id\":330800,\"label\":\"衢江区\",\"value\":\"330803\"},{\"parent_id\":330800,\"label\":\"常山县\",\"value\":\"330822\"},{\"parent_id\":330800,\"label\":\"开化县\",\"value\":\"330824\"},{\"parent_id\":330800,\"label\":\"龙游县\",\"value\":\"330825\"},{\"parent_id\":330800,\"label\":\"江山市\",\"value\":\"330881\"},{\"parent_id\":330000,\"label\":\"舟山市\",\"value\":\"330900\"},{\"parent_id\":330900,\"label\":\"定海区\",\"value\":\"330902\"},{\"parent_id\":330900,\"label\":\"普陀区\",\"value\":\"330903\"},{\"parent_id\":330900,\"label\":\"岱山县\",\"value\":\"330921\"},{\"parent_id\":330900,\"label\":\"嵊泗县\",\"value\":\"330922\"},{\"parent_id\":330000,\"label\":\"台州市\",\"value\":\"331000\"},{\"parent_id\":331000,\"label\":\"椒江区\",\"value\":\"331002\"},{\"parent_id\":331000,\"label\":\"黄岩区\",\"value\":\"331003\"},{\"parent_id\":331000,\"label\":\"路桥区\",\"value\":\"331004\"},{\"parent_id\":331000,\"label\":\"玉环县\",\"value\":\"331021\"},{\"parent_id\":331000,\"label\":\"三门县\",\"value\":\"331022\"},{\"parent_id\":331000,\"label\":\"天台县\",\"value\":\"331023\"},{\"parent_id\":331000,\"label\":\"仙居县\",\"value\":\"331024\"},{\"parent_id\":331000,\"label\":\"温岭市\",\"value\":\"331081\"},{\"parent_id\":331000,\"label\":\"临海市\",\"value\":\"331082\"},{\"parent_id\":330000,\"label\":\"丽水市\",\"value\":\"331100\"},{\"parent_id\":331100,\"label\":\"莲都区\",\"value\":\"331102\"},{\"parent_id\":331100,\"label\":\"青田县\",\"value\":\"331121\"},{\"parent_id\":331100,\"label\":\"缙云县\",\"value\":\"331122\"},{\"parent_id\":331100,\"label\":\"遂昌县\",\"value\":\"331123\"},{\"parent_id\":331100,\"label\":\"松阳县\",\"value\":\"331124\"},{\"parent_id\":331100,\"label\":\"云和县\",\"value\":\"331125\"},{\"parent_id\":331100,\"label\":\"庆元县\",\"value\":\"331126\"},{\"parent_id\":331100,\"label\":\"景宁畲族自治县\",\"value\":\"331127\"},{\"parent_id\":331100,\"label\":\"龙泉市\",\"value\":\"331181\"},{\"parent_id\":0,\"label\":\"安徽省\",\"value\":\"340000\"},{\"parent_id\":340000,\"label\":\"合肥市\",\"value\":\"340100\"},{\"parent_id\":340100,\"label\":\"瑶海区\",\"value\":\"340102\"},{\"parent_id\":340100,\"label\":\"庐阳区\",\"value\":\"340103\"},{\"parent_id\":340100,\"label\":\"蜀山区\",\"value\":\"340104\"},{\"parent_id\":340100,\"label\":\"包河区\",\"value\":\"340111\"},{\"parent_id\":340100,\"label\":\"长丰县\",\"value\":\"340121\"},{\"parent_id\":340100,\"label\":\"肥东县\",\"value\":\"340122\"},{\"parent_id\":340100,\"label\":\"肥西县\",\"value\":\"340123\"},{\"parent_id\":340100,\"label\":\"庐江县\",\"value\":\"340124\"},{\"parent_id\":340100,\"label\":\"巢湖市\",\"value\":\"340181\"},{\"parent_id\":340000,\"label\":\"芜湖市\",\"value\":\"340200\"},{\"parent_id\":340200,\"label\":\"镜湖区\",\"value\":\"340202\"},{\"parent_id\":340200,\"label\":\"弋江区\",\"value\":\"340203\"},{\"parent_id\":340200,\"label\":\"鸠江区\",\"value\":\"340207\"},{\"parent_id\":340200,\"label\":\"三山区\",\"value\":\"340208\"},{\"parent_id\":340200,\"label\":\"芜湖县\",\"value\":\"340221\"},{\"parent_id\":340200,\"label\":\"繁昌县\",\"value\":\"340222\"},{\"parent_id\":340200,\"label\":\"南陵县\",\"value\":\"340223\"},{\"parent_id\":340200,\"label\":\"无为县\",\"value\":\"340225\"},{\"parent_id\":340000,\"label\":\"蚌埠市\",\"value\":\"340300\"},{\"parent_id\":340300,\"label\":\"龙子湖区\",\"value\":\"340302\"},{\"parent_id\":340300,\"label\":\"蚌山区\",\"value\":\"340303\"},{\"parent_id\":340300,\"label\":\"禹会区\",\"value\":\"340304\"},{\"parent_id\":340300,\"label\":\"淮上区\",\"value\":\"340311\"},{\"parent_id\":340300,\"label\":\"怀远县\",\"value\":\"340321\"},{\"parent_id\":340300,\"label\":\"五河县\",\"value\":\"340322\"},{\"parent_id\":340300,\"label\":\"固镇县\",\"value\":\"340323\"},{\"parent_id\":340000,\"label\":\"淮南市\",\"value\":\"340400\"},{\"parent_id\":340400,\"label\":\"大通区\",\"value\":\"340402\"},{\"parent_id\":340400,\"label\":\"田家庵区\",\"value\":\"340403\"},{\"parent_id\":340400,\"label\":\"谢家集区\",\"value\":\"340404\"},{\"parent_id\":340400,\"label\":\"八公山区\",\"value\":\"340405\"},{\"parent_id\":340400,\"label\":\"潘集区\",\"value\":\"340406\"},{\"parent_id\":340400,\"label\":\"凤台县\",\"value\":\"340421\"},{\"parent_id\":340400,\"label\":\"寿县\",\"value\":\"340422\"},{\"parent_id\":340000,\"label\":\"马鞍山市\",\"value\":\"340500\"},{\"parent_id\":340500,\"label\":\"花山区\",\"value\":\"340503\"},{\"parent_id\":340500,\"label\":\"雨山区\",\"value\":\"340504\"},{\"parent_id\":340500,\"label\":\"博望区\",\"value\":\"340506\"},{\"parent_id\":340500,\"label\":\"当涂县\",\"value\":\"340521\"},{\"parent_id\":340500,\"label\":\"含山县\",\"value\":\"340522\"},{\"parent_id\":340500,\"label\":\"和县\",\"value\":\"340523\"},{\"parent_id\":340000,\"label\":\"淮北市\",\"value\":\"340600\"},{\"parent_id\":340600,\"label\":\"杜集区\",\"value\":\"340602\"},{\"parent_id\":340600,\"label\":\"相山区\",\"value\":\"340603\"},{\"parent_id\":340600,\"label\":\"烈山区\",\"value\":\"340604\"},{\"parent_id\":340600,\"label\":\"濉溪县\",\"value\":\"340621\"},{\"parent_id\":340000,\"label\":\"铜陵市\",\"value\":\"340700\"},{\"parent_id\":340700,\"label\":\"铜官区\",\"value\":\"340705\"},{\"parent_id\":340700,\"label\":\"义安区\",\"value\":\"340706\"},{\"parent_id\":340700,\"label\":\"郊区\",\"value\":\"340711\"},{\"parent_id\":340700,\"label\":\"枞阳县\",\"value\":\"340722\"},{\"parent_id\":340000,\"label\":\"安庆市\",\"value\":\"340800\"},{\"parent_id\":340800,\"label\":\"迎江区\",\"value\":\"340802\"},{\"parent_id\":340800,\"label\":\"大观区\",\"value\":\"340803\"},{\"parent_id\":340800,\"label\":\"宜秀区\",\"value\":\"340811\"},{\"parent_id\":340800,\"label\":\"怀宁县\",\"value\":\"340822\"},{\"parent_id\":340800,\"label\":\"潜山县\",\"value\":\"340824\"},{\"parent_id\":340800,\"label\":\"太湖县\",\"value\":\"340825\"},{\"parent_id\":340800,\"label\":\"宿松县\",\"value\":\"340826\"},{\"parent_id\":340800,\"label\":\"望江县\",\"value\":\"340827\"},{\"parent_id\":340800,\"label\":\"岳西县\",\"value\":\"340828\"},{\"parent_id\":340800,\"label\":\"桐城市\",\"value\":\"340881\"},{\"parent_id\":340000,\"label\":\"黄山市\",\"value\":\"341000\"},{\"parent_id\":341000,\"label\":\"屯溪区\",\"value\":\"341002\"},{\"parent_id\":341000,\"label\":\"黄山区\",\"value\":\"341003\"},{\"parent_id\":341000,\"label\":\"徽州区\",\"value\":\"341004\"},{\"parent_id\":341000,\"label\":\"歙县\",\"value\":\"341021\"},{\"parent_id\":341000,\"label\":\"休宁县\",\"value\":\"341022\"},{\"parent_id\":341000,\"label\":\"黟县\",\"value\":\"341023\"},{\"parent_id\":341000,\"label\":\"祁门县\",\"value\":\"341024\"},{\"parent_id\":340000,\"label\":\"滁州市\",\"value\":\"341100\"},{\"parent_id\":341100,\"label\":\"琅琊区\",\"value\":\"341102\"},{\"parent_id\":341100,\"label\":\"南谯区\",\"value\":\"341103\"},{\"parent_id\":341100,\"label\":\"来安县\",\"value\":\"341122\"},{\"parent_id\":341100,\"label\":\"全椒县\",\"value\":\"341124\"},{\"parent_id\":341100,\"label\":\"定远县\",\"value\":\"341125\"},{\"parent_id\":341100,\"label\":\"凤阳县\",\"value\":\"341126\"},{\"parent_id\":341100,\"label\":\"天长市\",\"value\":\"341181\"},{\"parent_id\":341100,\"label\":\"明光市\",\"value\":\"341182\"},{\"parent_id\":340000,\"label\":\"阜阳市\",\"value\":\"341200\"},{\"parent_id\":341200,\"label\":\"颍州区\",\"value\":\"341202\"},{\"parent_id\":341200,\"label\":\"颍东区\",\"value\":\"341203\"},{\"parent_id\":341200,\"label\":\"颍泉区\",\"value\":\"341204\"},{\"parent_id\":341200,\"label\":\"临泉县\",\"value\":\"341221\"},{\"parent_id\":341200,\"label\":\"太和县\",\"value\":\"341222\"},{\"parent_id\":341200,\"label\":\"阜南县\",\"value\":\"341225\"},{\"parent_id\":341200,\"label\":\"颍上县\",\"value\":\"341226\"},{\"parent_id\":341200,\"label\":\"界首市\",\"value\":\"341282\"},{\"parent_id\":340000,\"label\":\"宿州市\",\"value\":\"341300\"},{\"parent_id\":341300,\"label\":\"埇桥区\",\"value\":\"341302\"},{\"parent_id\":341300,\"label\":\"砀山县\",\"value\":\"341321\"},{\"parent_id\":341300,\"label\":\"萧县\",\"value\":\"341322\"},{\"parent_id\":341300,\"label\":\"灵璧县\",\"value\":\"341323\"},{\"parent_id\":341300,\"label\":\"泗县\",\"value\":\"341324\"},{\"parent_id\":340000,\"label\":\"六安市\",\"value\":\"341500\"},{\"parent_id\":341500,\"label\":\"金安区\",\"value\":\"341502\"},{\"parent_id\":341500,\"label\":\"裕安区\",\"value\":\"341503\"},{\"parent_id\":341500,\"label\":\"叶集区\",\"value\":\"341504\"},{\"parent_id\":341500,\"label\":\"霍邱县\",\"value\":\"341522\"},{\"parent_id\":341500,\"label\":\"舒城县\",\"value\":\"341523\"},{\"parent_id\":341500,\"label\":\"金寨县\",\"value\":\"341524\"},{\"parent_id\":341500,\"label\":\"霍山县\",\"value\":\"341525\"},{\"parent_id\":340000,\"label\":\"亳州市\",\"value\":\"341600\"},{\"parent_id\":341600,\"label\":\"谯城区\",\"value\":\"341602\"},{\"parent_id\":341600,\"label\":\"涡阳县\",\"value\":\"341621\"},{\"parent_id\":341600,\"label\":\"蒙城县\",\"value\":\"341622\"},{\"parent_id\":341600,\"label\":\"利辛县\",\"value\":\"341623\"},{\"parent_id\":340000,\"label\":\"池州市\",\"value\":\"341700\"},{\"parent_id\":341700,\"label\":\"贵池区\",\"value\":\"341702\"},{\"parent_id\":341700,\"label\":\"东至县\",\"value\":\"341721\"},{\"parent_id\":341700,\"label\":\"石台县\",\"value\":\"341722\"},{\"parent_id\":341700,\"label\":\"青阳县\",\"value\":\"341723\"},{\"parent_id\":340000,\"label\":\"宣城市\",\"value\":\"341800\"},{\"parent_id\":341800,\"label\":\"宣州区\",\"value\":\"341802\"},{\"parent_id\":341800,\"label\":\"郎溪县\",\"value\":\"341821\"},{\"parent_id\":341800,\"label\":\"广德县\",\"value\":\"341822\"},{\"parent_id\":341800,\"label\":\"泾县\",\"value\":\"341823\"},{\"parent_id\":341800,\"label\":\"绩溪县\",\"value\":\"341824\"},{\"parent_id\":341800,\"label\":\"旌德县\",\"value\":\"341825\"},{\"parent_id\":341800,\"label\":\"宁国市\",\"value\":\"341881\"},{\"parent_id\":0,\"label\":\"福建省\",\"value\":\"350000\"},{\"parent_id\":350000,\"label\":\"福州市\",\"value\":\"350100\"},{\"parent_id\":350100,\"label\":\"鼓楼区\",\"value\":\"350102\"},{\"parent_id\":350100,\"label\":\"台江区\",\"value\":\"350103\"},{\"parent_id\":350100,\"label\":\"仓山区\",\"value\":\"350104\"},{\"parent_id\":350100,\"label\":\"马尾区\",\"value\":\"350105\"},{\"parent_id\":350100,\"label\":\"晋安区\",\"value\":\"350111\"},{\"parent_id\":350100,\"label\":\"闽侯县\",\"value\":\"350121\"},{\"parent_id\":350100,\"label\":\"连江县\",\"value\":\"350122\"},{\"parent_id\":350100,\"label\":\"罗源县\",\"value\":\"350123\"},{\"parent_id\":350100,\"label\":\"闽清县\",\"value\":\"350124\"},{\"parent_id\":350100,\"label\":\"永泰县\",\"value\":\"350125\"},{\"parent_id\":350100,\"label\":\"平潭县\",\"value\":\"350128\"},{\"parent_id\":350100,\"label\":\"福清市\",\"value\":\"350181\"},{\"parent_id\":350100,\"label\":\"长乐市\",\"value\":\"350182\"},{\"parent_id\":350000,\"label\":\"厦门市\",\"value\":\"350200\"},{\"parent_id\":350200,\"label\":\"思明区\",\"value\":\"350203\"},{\"parent_id\":350200,\"label\":\"海沧区\",\"value\":\"350205\"},{\"parent_id\":350200,\"label\":\"湖里区\",\"value\":\"350206\"},{\"parent_id\":350200,\"label\":\"集美区\",\"value\":\"350211\"},{\"parent_id\":350200,\"label\":\"同安区\",\"value\":\"350212\"},{\"parent_id\":350200,\"label\":\"翔安区\",\"value\":\"350213\"},{\"parent_id\":350000,\"label\":\"莆田市\",\"value\":\"350300\"},{\"parent_id\":350300,\"label\":\"城厢区\",\"value\":\"350302\"},{\"parent_id\":350300,\"label\":\"涵江区\",\"value\":\"350303\"},{\"parent_id\":350300,\"label\":\"荔城区\",\"value\":\"350304\"},{\"parent_id\":350300,\"label\":\"秀屿区\",\"value\":\"350305\"},{\"parent_id\":350300,\"label\":\"仙游县\",\"value\":\"350322\"},{\"parent_id\":350000,\"label\":\"三明市\",\"value\":\"350400\"},{\"parent_id\":350400,\"label\":\"梅列区\",\"value\":\"350402\"},{\"parent_id\":350400,\"label\":\"三元区\",\"value\":\"350403\"},{\"parent_id\":350400,\"label\":\"明溪县\",\"value\":\"350421\"},{\"parent_id\":350400,\"label\":\"清流县\",\"value\":\"350423\"},{\"parent_id\":350400,\"label\":\"宁化县\",\"value\":\"350424\"},{\"parent_id\":350400,\"label\":\"大田县\",\"value\":\"350425\"},{\"parent_id\":350400,\"label\":\"尤溪县\",\"value\":\"350426\"},{\"parent_id\":350400,\"label\":\"沙县\",\"value\":\"350427\"},{\"parent_id\":350400,\"label\":\"将乐县\",\"value\":\"350428\"},{\"parent_id\":350400,\"label\":\"泰宁县\",\"value\":\"350429\"},{\"parent_id\":350400,\"label\":\"建宁县\",\"value\":\"350430\"},{\"parent_id\":350400,\"label\":\"永安市\",\"value\":\"350481\"},{\"parent_id\":350000,\"label\":\"泉州市\",\"value\":\"350500\"},{\"parent_id\":350500,\"label\":\"鲤城区\",\"value\":\"350502\"},{\"parent_id\":350500,\"label\":\"丰泽区\",\"value\":\"350503\"},{\"parent_id\":350500,\"label\":\"洛江区\",\"value\":\"350504\"},{\"parent_id\":350500,\"label\":\"泉港区\",\"value\":\"350505\"},{\"parent_id\":350500,\"label\":\"惠安县\",\"value\":\"350521\"},{\"parent_id\":350500,\"label\":\"安溪县\",\"value\":\"350524\"},{\"parent_id\":350500,\"label\":\"永春县\",\"value\":\"350525\"},{\"parent_id\":350500,\"label\":\"德化县\",\"value\":\"350526\"},{\"parent_id\":350500,\"label\":\"金门县\",\"value\":\"350527\"},{\"parent_id\":350500,\"label\":\"石狮市\",\"value\":\"350581\"},{\"parent_id\":350500,\"label\":\"晋江市\",\"value\":\"350582\"},{\"parent_id\":350500,\"label\":\"南安市\",\"value\":\"350583\"},{\"parent_id\":350000,\"label\":\"漳州市\",\"value\":\"350600\"},{\"parent_id\":350600,\"label\":\"芗城区\",\"value\":\"350602\"},{\"parent_id\":350600,\"label\":\"龙文区\",\"value\":\"350603\"},{\"parent_id\":350600,\"label\":\"云霄县\",\"value\":\"350622\"},{\"parent_id\":350600,\"label\":\"漳浦县\",\"value\":\"350623\"},{\"parent_id\":350600,\"label\":\"诏安县\",\"value\":\"350624\"},{\"parent_id\":350600,\"label\":\"长泰县\",\"value\":\"350625\"},{\"parent_id\":350600,\"label\":\"东山县\",\"value\":\"350626\"},{\"parent_id\":350600,\"label\":\"南靖县\",\"value\":\"350627\"},{\"parent_id\":350600,\"label\":\"平和县\",\"value\":\"350628\"},{\"parent_id\":350600,\"label\":\"华安县\",\"value\":\"350629\"},{\"parent_id\":350600,\"label\":\"龙海市\",\"value\":\"350681\"},{\"parent_id\":350000,\"label\":\"南平市\",\"value\":\"350700\"},{\"parent_id\":350700,\"label\":\"延平区\",\"value\":\"350702\"},{\"parent_id\":350700,\"label\":\"建阳区\",\"value\":\"350703\"},{\"parent_id\":350700,\"label\":\"顺昌县\",\"value\":\"350721\"},{\"parent_id\":350700,\"label\":\"浦城县\",\"value\":\"350722\"},{\"parent_id\":350700,\"label\":\"光泽县\",\"value\":\"350723\"},{\"parent_id\":350700,\"label\":\"松溪县\",\"value\":\"350724\"},{\"parent_id\":350700,\"label\":\"政和县\",\"value\":\"350725\"},{\"parent_id\":350700,\"label\":\"邵武市\",\"value\":\"350781\"},{\"parent_id\":350700,\"label\":\"武夷山市\",\"value\":\"350782\"},{\"parent_id\":350700,\"label\":\"建瓯市\",\"value\":\"350783\"},{\"parent_id\":350000,\"label\":\"龙岩市\",\"value\":\"350800\"},{\"parent_id\":350800,\"label\":\"新罗区\",\"value\":\"350802\"},{\"parent_id\":350800,\"label\":\"永定区\",\"value\":\"350803\"},{\"parent_id\":350800,\"label\":\"长汀县\",\"value\":\"350821\"},{\"parent_id\":350800,\"label\":\"上杭县\",\"value\":\"350823\"},{\"parent_id\":350800,\"label\":\"武平县\",\"value\":\"350824\"},{\"parent_id\":350800,\"label\":\"连城县\",\"value\":\"350825\"},{\"parent_id\":350800,\"label\":\"漳平市\",\"value\":\"350881\"},{\"parent_id\":350000,\"label\":\"宁德市\",\"value\":\"350900\"},{\"parent_id\":350900,\"label\":\"蕉城区\",\"value\":\"350902\"},{\"parent_id\":350900,\"label\":\"霞浦县\",\"value\":\"350921\"},{\"parent_id\":350900,\"label\":\"古田县\",\"value\":\"350922\"},{\"parent_id\":350900,\"label\":\"屏南县\",\"value\":\"350923\"},{\"parent_id\":350900,\"label\":\"寿宁县\",\"value\":\"350924\"},{\"parent_id\":350900,\"label\":\"周宁县\",\"value\":\"350925\"},{\"parent_id\":350900,\"label\":\"柘荣县\",\"value\":\"350926\"},{\"parent_id\":350900,\"label\":\"福安市\",\"value\":\"350981\"},{\"parent_id\":350900,\"label\":\"福鼎市\",\"value\":\"350982\"},{\"parent_id\":0,\"label\":\"江西省\",\"value\":\"360000\"},{\"parent_id\":360000,\"label\":\"南昌市\",\"value\":\"360100\"},{\"parent_id\":360100,\"label\":\"东湖区\",\"value\":\"360102\"},{\"parent_id\":360100,\"label\":\"西湖区\",\"value\":\"360103\"},{\"parent_id\":360100,\"label\":\"青云谱区\",\"value\":\"360104\"},{\"parent_id\":360100,\"label\":\"湾里区\",\"value\":\"360105\"},{\"parent_id\":360100,\"label\":\"青山湖区\",\"value\":\"360111\"},{\"parent_id\":360100,\"label\":\"新建区\",\"value\":\"360112\"},{\"parent_id\":360100,\"label\":\"南昌县\",\"value\":\"360121\"},{\"parent_id\":360100,\"label\":\"安义县\",\"value\":\"360123\"},{\"parent_id\":360100,\"label\":\"进贤县\",\"value\":\"360124\"},{\"parent_id\":360000,\"label\":\"景德镇市\",\"value\":\"360200\"},{\"parent_id\":360200,\"label\":\"昌江区\",\"value\":\"360202\"},{\"parent_id\":360200,\"label\":\"珠山区\",\"value\":\"360203\"},{\"parent_id\":360200,\"label\":\"浮梁县\",\"value\":\"360222\"},{\"parent_id\":360200,\"label\":\"乐平市\",\"value\":\"360281\"},{\"parent_id\":360000,\"label\":\"萍乡市\",\"value\":\"360300\"},{\"parent_id\":360300,\"label\":\"安源区\",\"value\":\"360302\"},{\"parent_id\":360300,\"label\":\"湘东区\",\"value\":\"360313\"},{\"parent_id\":360300,\"label\":\"莲花县\",\"value\":\"360321\"},{\"parent_id\":360300,\"label\":\"上栗县\",\"value\":\"360322\"},{\"parent_id\":360300,\"label\":\"芦溪县\",\"value\":\"360323\"},{\"parent_id\":360000,\"label\":\"九江市\",\"value\":\"360400\"},{\"parent_id\":360400,\"label\":\"濂溪区\",\"value\":\"360402\"},{\"parent_id\":360400,\"label\":\"浔阳区\",\"value\":\"360403\"},{\"parent_id\":360400,\"label\":\"九江县\",\"value\":\"360421\"},{\"parent_id\":360400,\"label\":\"武宁县\",\"value\":\"360423\"},{\"parent_id\":360400,\"label\":\"修水县\",\"value\":\"360424\"},{\"parent_id\":360400,\"label\":\"永修县\",\"value\":\"360425\"},{\"parent_id\":360400,\"label\":\"德安县\",\"value\":\"360426\"},{\"parent_id\":360400,\"label\":\"庐山市\",\"value\":\"360427\"},{\"parent_id\":360400,\"label\":\"都昌县\",\"value\":\"360428\"},{\"parent_id\":360400,\"label\":\"湖口县\",\"value\":\"360429\"},{\"parent_id\":360400,\"label\":\"彭泽县\",\"value\":\"360430\"},{\"parent_id\":360400,\"label\":\"瑞昌市\",\"value\":\"360481\"},{\"parent_id\":360400,\"label\":\"共青城市\",\"value\":\"360482\"},{\"parent_id\":360000,\"label\":\"新余市\",\"value\":\"360500\"},{\"parent_id\":360500,\"label\":\"渝水区\",\"value\":\"360502\"},{\"parent_id\":360500,\"label\":\"分宜县\",\"value\":\"360521\"},{\"parent_id\":360000,\"label\":\"鹰潭市\",\"value\":\"360600\"},{\"parent_id\":360600,\"label\":\"月湖区\",\"value\":\"360602\"},{\"parent_id\":360600,\"label\":\"余江县\",\"value\":\"360622\"},{\"parent_id\":360600,\"label\":\"贵溪市\",\"value\":\"360681\"},{\"parent_id\":360000,\"label\":\"赣州市\",\"value\":\"360700\"},{\"parent_id\":360700,\"label\":\"章贡区\",\"value\":\"360702\"},{\"parent_id\":360700,\"label\":\"南康区\",\"value\":\"360703\"},{\"parent_id\":360700,\"label\":\"赣县\",\"value\":\"360721\"},{\"parent_id\":360700,\"label\":\"信丰县\",\"value\":\"360722\"},{\"parent_id\":360700,\"label\":\"大余县\",\"value\":\"360723\"},{\"parent_id\":360700,\"label\":\"上犹县\",\"value\":\"360724\"},{\"parent_id\":360700,\"label\":\"崇义县\",\"value\":\"360725\"},{\"parent_id\":360700,\"label\":\"安远县\",\"value\":\"360726\"},{\"parent_id\":360700,\"label\":\"龙南县\",\"value\":\"360727\"},{\"parent_id\":360700,\"label\":\"定南县\",\"value\":\"360728\"},{\"parent_id\":360700,\"label\":\"全南县\",\"value\":\"360729\"},{\"parent_id\":360700,\"label\":\"宁都县\",\"value\":\"360730\"},{\"parent_id\":360700,\"label\":\"于都县\",\"value\":\"360731\"},{\"parent_id\":360700,\"label\":\"兴国县\",\"value\":\"360732\"},{\"parent_id\":360700,\"label\":\"会昌县\",\"value\":\"360733\"},{\"parent_id\":360700,\"label\":\"寻乌县\",\"value\":\"360734\"},{\"parent_id\":360700,\"label\":\"石城县\",\"value\":\"360735\"},{\"parent_id\":360700,\"label\":\"瑞金市\",\"value\":\"360781\"},{\"parent_id\":360000,\"label\":\"吉安市\",\"value\":\"360800\"},{\"parent_id\":360800,\"label\":\"吉州区\",\"value\":\"360802\"},{\"parent_id\":360800,\"label\":\"青原区\",\"value\":\"360803\"},{\"parent_id\":360800,\"label\":\"吉安县\",\"value\":\"360821\"},{\"parent_id\":360800,\"label\":\"吉水县\",\"value\":\"360822\"},{\"parent_id\":360800,\"label\":\"峡江县\",\"value\":\"360823\"},{\"parent_id\":360800,\"label\":\"新干县\",\"value\":\"360824\"},{\"parent_id\":360800,\"label\":\"永丰县\",\"value\":\"360825\"},{\"parent_id\":360800,\"label\":\"泰和县\",\"value\":\"360826\"},{\"parent_id\":360800,\"label\":\"遂川县\",\"value\":\"360827\"},{\"parent_id\":360800,\"label\":\"万安县\",\"value\":\"360828\"},{\"parent_id\":360800,\"label\":\"安福县\",\"value\":\"360829\"},{\"parent_id\":360800,\"label\":\"永新县\",\"value\":\"360830\"},{\"parent_id\":360800,\"label\":\"井冈山市\",\"value\":\"360881\"},{\"parent_id\":360000,\"label\":\"宜春市\",\"value\":\"360900\"},{\"parent_id\":360900,\"label\":\"袁州区\",\"value\":\"360902\"},{\"parent_id\":360900,\"label\":\"奉新县\",\"value\":\"360921\"},{\"parent_id\":360900,\"label\":\"万载县\",\"value\":\"360922\"},{\"parent_id\":360900,\"label\":\"上高县\",\"value\":\"360923\"},{\"parent_id\":360900,\"label\":\"宜丰县\",\"value\":\"360924\"},{\"parent_id\":360900,\"label\":\"靖安县\",\"value\":\"360925\"},{\"parent_id\":360900,\"label\":\"铜鼓县\",\"value\":\"360926\"},{\"parent_id\":360900,\"label\":\"丰城市\",\"value\":\"360981\"},{\"parent_id\":360900,\"label\":\"樟树市\",\"value\":\"360982\"},{\"parent_id\":360900,\"label\":\"高安市\",\"value\":\"360983\"},{\"parent_id\":360000,\"label\":\"抚州市\",\"value\":\"361000\"},{\"parent_id\":361000,\"label\":\"临川区\",\"value\":\"361002\"},{\"parent_id\":361000,\"label\":\"南城县\",\"value\":\"361021\"},{\"parent_id\":361000,\"label\":\"黎川县\",\"value\":\"361022\"},{\"parent_id\":361000,\"label\":\"南丰县\",\"value\":\"361023\"},{\"parent_id\":361000,\"label\":\"崇仁县\",\"value\":\"361024\"},{\"parent_id\":361000,\"label\":\"乐安县\",\"value\":\"361025\"},{\"parent_id\":361000,\"label\":\"宜黄县\",\"value\":\"361026\"},{\"parent_id\":361000,\"label\":\"金溪县\",\"value\":\"361027\"},{\"parent_id\":361000,\"label\":\"资溪县\",\"value\":\"361028\"},{\"parent_id\":361000,\"label\":\"东乡县\",\"value\":\"361029\"},{\"parent_id\":361000,\"label\":\"广昌县\",\"value\":\"361030\"},{\"parent_id\":360000,\"label\":\"上饶市\",\"value\":\"361100\"},{\"parent_id\":361100,\"label\":\"信州区\",\"value\":\"361102\"},{\"parent_id\":361100,\"label\":\"广丰区\",\"value\":\"361103\"},{\"parent_id\":361100,\"label\":\"上饶县\",\"value\":\"361121\"},{\"parent_id\":361100,\"label\":\"玉山县\",\"value\":\"361123\"},{\"parent_id\":361100,\"label\":\"铅山县\",\"value\":\"361124\"},{\"parent_id\":361100,\"label\":\"横峰县\",\"value\":\"361125\"},{\"parent_id\":361100,\"label\":\"弋阳县\",\"value\":\"361126\"},{\"parent_id\":361100,\"label\":\"余干县\",\"value\":\"361127\"},{\"parent_id\":361100,\"label\":\"鄱阳县\",\"value\":\"361128\"},{\"parent_id\":361100,\"label\":\"万年县\",\"value\":\"361129\"},{\"parent_id\":361100,\"label\":\"婺源县\",\"value\":\"361130\"},{\"parent_id\":361100,\"label\":\"德兴市\",\"value\":\"361181\"},{\"parent_id\":0,\"label\":\"山东省\",\"value\":\"370000\"},{\"parent_id\":370000,\"label\":\"济南市\",\"value\":\"370100\"},{\"parent_id\":370100,\"label\":\"历下区\",\"value\":\"370102\"},{\"parent_id\":370100,\"label\":\"市中区\",\"value\":\"370103\"},{\"parent_id\":370100,\"label\":\"槐荫区\",\"value\":\"370104\"},{\"parent_id\":370100,\"label\":\"天桥区\",\"value\":\"370105\"},{\"parent_id\":370100,\"label\":\"历城区\",\"value\":\"370112\"},{\"parent_id\":370100,\"label\":\"长清区\",\"value\":\"370113\"},{\"parent_id\":370100,\"label\":\"平阴县\",\"value\":\"370124\"},{\"parent_id\":370100,\"label\":\"济阳县\",\"value\":\"370125\"},{\"parent_id\":370100,\"label\":\"商河县\",\"value\":\"370126\"},{\"parent_id\":370100,\"label\":\"章丘区\",\"value\":\"370181\"},{\"parent_id\":370000,\"label\":\"青岛市\",\"value\":\"370200\"},{\"parent_id\":370200,\"label\":\"市南区\",\"value\":\"370202\"},{\"parent_id\":370200,\"label\":\"市北区\",\"value\":\"370203\"},{\"parent_id\":370200,\"label\":\"黄岛区\",\"value\":\"370211\"},{\"parent_id\":370200,\"label\":\"崂山区\",\"value\":\"370212\"},{\"parent_id\":370200,\"label\":\"李沧区\",\"value\":\"370213\"},{\"parent_id\":370200,\"label\":\"城阳区\",\"value\":\"370214\"},{\"parent_id\":370200,\"label\":\"胶州市\",\"value\":\"370281\"},{\"parent_id\":370200,\"label\":\"即墨市\",\"value\":\"370282\"},{\"parent_id\":370200,\"label\":\"平度市\",\"value\":\"370283\"},{\"parent_id\":370200,\"label\":\"莱西市\",\"value\":\"370285\"},{\"parent_id\":370000,\"label\":\"淄博市\",\"value\":\"370300\"},{\"parent_id\":370300,\"label\":\"淄川区\",\"value\":\"370302\"},{\"parent_id\":370300,\"label\":\"张店区\",\"value\":\"370303\"},{\"parent_id\":370300,\"label\":\"博山区\",\"value\":\"370304\"},{\"parent_id\":370300,\"label\":\"临淄区\",\"value\":\"370305\"},{\"parent_id\":370300,\"label\":\"周村区\",\"value\":\"370306\"},{\"parent_id\":370300,\"label\":\"桓台县\",\"value\":\"370321\"},{\"parent_id\":370300,\"label\":\"高青县\",\"value\":\"370322\"},{\"parent_id\":370300,\"label\":\"沂源县\",\"value\":\"370323\"},{\"parent_id\":370000,\"label\":\"枣庄市\",\"value\":\"370400\"},{\"parent_id\":370400,\"label\":\"市中区\",\"value\":\"370402\"},{\"parent_id\":370400,\"label\":\"薛城区\",\"value\":\"370403\"},{\"parent_id\":370400,\"label\":\"峄城区\",\"value\":\"370404\"},{\"parent_id\":370400,\"label\":\"台儿庄区\",\"value\":\"370405\"},{\"parent_id\":370400,\"label\":\"山亭区\",\"value\":\"370406\"},{\"parent_id\":370400,\"label\":\"滕州市\",\"value\":\"370481\"},{\"parent_id\":370000,\"label\":\"东营市\",\"value\":\"370500\"},{\"parent_id\":370500,\"label\":\"东营区\",\"value\":\"370502\"},{\"parent_id\":370500,\"label\":\"河口区\",\"value\":\"370503\"},{\"parent_id\":370500,\"label\":\"垦利区\",\"value\":\"370505\"},{\"parent_id\":370500,\"label\":\"利津县\",\"value\":\"370522\"},{\"parent_id\":370500,\"label\":\"广饶县\",\"value\":\"370523\"},{\"parent_id\":370000,\"label\":\"烟台市\",\"value\":\"370600\"},{\"parent_id\":370600,\"label\":\"芝罘区\",\"value\":\"370602\"},{\"parent_id\":370600,\"label\":\"福山区\",\"value\":\"370611\"},{\"parent_id\":370600,\"label\":\"牟平区\",\"value\":\"370612\"},{\"parent_id\":370600,\"label\":\"莱山区\",\"value\":\"370613\"},{\"parent_id\":370600,\"label\":\"长岛县\",\"value\":\"370634\"},{\"parent_id\":370600,\"label\":\"龙口市\",\"value\":\"370681\"},{\"parent_id\":370600,\"label\":\"莱阳市\",\"value\":\"370682\"},{\"parent_id\":370600,\"label\":\"莱州市\",\"value\":\"370683\"},{\"parent_id\":370600,\"label\":\"蓬莱市\",\"value\":\"370684\"},{\"parent_id\":370600,\"label\":\"招远市\",\"value\":\"370685\"},{\"parent_id\":370600,\"label\":\"栖霞市\",\"value\":\"370686\"},{\"parent_id\":370600,\"label\":\"海阳市\",\"value\":\"370687\"},{\"parent_id\":370000,\"label\":\"潍坊市\",\"value\":\"370700\"},{\"parent_id\":370700,\"label\":\"潍城区\",\"value\":\"370702\"},{\"parent_id\":370700,\"label\":\"寒亭区\",\"value\":\"370703\"},{\"parent_id\":370700,\"label\":\"坊子区\",\"value\":\"370704\"},{\"parent_id\":370700,\"label\":\"奎文区\",\"value\":\"370705\"},{\"parent_id\":370700,\"label\":\"临朐县\",\"value\":\"370724\"},{\"parent_id\":370700,\"label\":\"昌乐县\",\"value\":\"370725\"},{\"parent_id\":370700,\"label\":\"青州市\",\"value\":\"370781\"},{\"parent_id\":370700,\"label\":\"诸城市\",\"value\":\"370782\"},{\"parent_id\":370700,\"label\":\"寿光市\",\"value\":\"370783\"},{\"parent_id\":370700,\"label\":\"安丘市\",\"value\":\"370784\"},{\"parent_id\":370700,\"label\":\"高密市\",\"value\":\"370785\"},{\"parent_id\":370700,\"label\":\"昌邑市\",\"value\":\"370786\"},{\"parent_id\":370000,\"label\":\"济宁市\",\"value\":\"370800\"},{\"parent_id\":370800,\"label\":\"任城区\",\"value\":\"370811\"},{\"parent_id\":370800,\"label\":\"兖州区\",\"value\":\"370812\"},{\"parent_id\":370800,\"label\":\"微山县\",\"value\":\"370826\"},{\"parent_id\":370800,\"label\":\"鱼台县\",\"value\":\"370827\"},{\"parent_id\":370800,\"label\":\"金乡县\",\"value\":\"370828\"},{\"parent_id\":370800,\"label\":\"嘉祥县\",\"value\":\"370829\"},{\"parent_id\":370800,\"label\":\"汶上县\",\"value\":\"370830\"},{\"parent_id\":370800,\"label\":\"泗水县\",\"value\":\"370831\"},{\"parent_id\":370800,\"label\":\"梁山县\",\"value\":\"370832\"},{\"parent_id\":370800,\"label\":\"曲阜市\",\"value\":\"370881\"},{\"parent_id\":370800,\"label\":\"邹城市\",\"value\":\"370883\"},{\"parent_id\":370000,\"label\":\"泰安市\",\"value\":\"370900\"},{\"parent_id\":370900,\"label\":\"泰山区\",\"value\":\"370902\"},{\"parent_id\":370900,\"label\":\"岱岳区\",\"value\":\"370911\"},{\"parent_id\":370900,\"label\":\"宁阳县\",\"value\":\"370921\"},{\"parent_id\":370900,\"label\":\"东平县\",\"value\":\"370923\"},{\"parent_id\":370900,\"label\":\"新泰市\",\"value\":\"370982\"},{\"parent_id\":370900,\"label\":\"肥城市\",\"value\":\"370983\"},{\"parent_id\":370000,\"label\":\"威海市\",\"value\":\"371000\"},{\"parent_id\":371000,\"label\":\"环翠区\",\"value\":\"371002\"},{\"parent_id\":371000,\"label\":\"文登区\",\"value\":\"371003\"},{\"parent_id\":371000,\"label\":\"荣成市\",\"value\":\"371082\"},{\"parent_id\":371000,\"label\":\"乳山市\",\"value\":\"371083\"},{\"parent_id\":370000,\"label\":\"日照市\",\"value\":\"371100\"},{\"parent_id\":371100,\"label\":\"东港区\",\"value\":\"371102\"},{\"parent_id\":371100,\"label\":\"岚山区\",\"value\":\"371103\"},{\"parent_id\":371100,\"label\":\"五莲县\",\"value\":\"371121\"},{\"parent_id\":371100,\"label\":\"莒县\",\"value\":\"371122\"},{\"parent_id\":370000,\"label\":\"莱芜市\",\"value\":\"371200\"},{\"parent_id\":371200,\"label\":\"莱城区\",\"value\":\"371202\"},{\"parent_id\":371200,\"label\":\"钢城区\",\"value\":\"371203\"},{\"parent_id\":370000,\"label\":\"临沂市\",\"value\":\"371300\"},{\"parent_id\":371300,\"label\":\"兰山区\",\"value\":\"371302\"},{\"parent_id\":371300,\"label\":\"罗庄区\",\"value\":\"371311\"},{\"parent_id\":371300,\"label\":\"河东区\",\"value\":\"371312\"},{\"parent_id\":371300,\"label\":\"沂南县\",\"value\":\"371321\"},{\"parent_id\":371300,\"label\":\"郯城县\",\"value\":\"371322\"},{\"parent_id\":371300,\"label\":\"沂水县\",\"value\":\"371323\"},{\"parent_id\":371300,\"label\":\"兰陵县\",\"value\":\"371324\"},{\"parent_id\":371300,\"label\":\"费县\",\"value\":\"371325\"},{\"parent_id\":371300,\"label\":\"平邑县\",\"value\":\"371326\"},{\"parent_id\":371300,\"label\":\"莒南县\",\"value\":\"371327\"},{\"parent_id\":371300,\"label\":\"蒙阴县\",\"value\":\"371328\"},{\"parent_id\":371300,\"label\":\"临沭县\",\"value\":\"371329\"},{\"parent_id\":370000,\"label\":\"德州市\",\"value\":\"371400\"},{\"parent_id\":371400,\"label\":\"德城区\",\"value\":\"371402\"},{\"parent_id\":371400,\"label\":\"陵城区\",\"value\":\"371403\"},{\"parent_id\":371400,\"label\":\"宁津县\",\"value\":\"371422\"},{\"parent_id\":371400,\"label\":\"庆云县\",\"value\":\"371423\"},{\"parent_id\":371400,\"label\":\"临邑县\",\"value\":\"371424\"},{\"parent_id\":371400,\"label\":\"齐河县\",\"value\":\"371425\"},{\"parent_id\":371400,\"label\":\"平原县\",\"value\":\"371426\"},{\"parent_id\":371400,\"label\":\"夏津县\",\"value\":\"371427\"},{\"parent_id\":371400,\"label\":\"武城县\",\"value\":\"371428\"},{\"parent_id\":371400,\"label\":\"乐陵市\",\"value\":\"371481\"},{\"parent_id\":371400,\"label\":\"禹城市\",\"value\":\"371482\"},{\"parent_id\":370000,\"label\":\"聊城市\",\"value\":\"371500\"},{\"parent_id\":371500,\"label\":\"东昌府区\",\"value\":\"371502\"},{\"parent_id\":371500,\"label\":\"阳谷县\",\"value\":\"371521\"},{\"parent_id\":371500,\"label\":\"莘县\",\"value\":\"371522\"},{\"parent_id\":371500,\"label\":\"茌平县\",\"value\":\"371523\"},{\"parent_id\":371500,\"label\":\"东阿县\",\"value\":\"371524\"},{\"parent_id\":371500,\"label\":\"冠县\",\"value\":\"371525\"},{\"parent_id\":371500,\"label\":\"高唐县\",\"value\":\"371526\"},{\"parent_id\":371500,\"label\":\"临清市\",\"value\":\"371581\"},{\"parent_id\":370000,\"label\":\"滨州市\",\"value\":\"371600\"},{\"parent_id\":371600,\"label\":\"滨城区\",\"value\":\"371602\"},{\"parent_id\":371600,\"label\":\"沾化区\",\"value\":\"371603\"},{\"parent_id\":371600,\"label\":\"惠民县\",\"value\":\"371621\"},{\"parent_id\":371600,\"label\":\"阳信县\",\"value\":\"371622\"},{\"parent_id\":371600,\"label\":\"无棣县\",\"value\":\"371623\"},{\"parent_id\":371600,\"label\":\"博兴县\",\"value\":\"371625\"},{\"parent_id\":371600,\"label\":\"邹平县\",\"value\":\"371626\"},{\"parent_id\":370000,\"label\":\"菏泽市\",\"value\":\"371700\"},{\"parent_id\":371700,\"label\":\"牡丹区\",\"value\":\"371702\"},{\"parent_id\":371700,\"label\":\"定陶区\",\"value\":\"371703\"},{\"parent_id\":371700,\"label\":\"曹县\",\"value\":\"371721\"},{\"parent_id\":371700,\"label\":\"单县\",\"value\":\"371722\"},{\"parent_id\":371700,\"label\":\"成武县\",\"value\":\"371723\"},{\"parent_id\":371700,\"label\":\"巨野县\",\"value\":\"371724\"},{\"parent_id\":371700,\"label\":\"郓城县\",\"value\":\"371725\"},{\"parent_id\":371700,\"label\":\"鄄城县\",\"value\":\"371726\"},{\"parent_id\":371700,\"label\":\"东明县\",\"value\":\"371728\"},{\"parent_id\":0,\"label\":\"河南省\",\"value\":\"410000\"},{\"parent_id\":410000,\"label\":\"郑州市\",\"value\":\"410100\"},{\"parent_id\":410100,\"label\":\"中原区\",\"value\":\"410102\"},{\"parent_id\":410100,\"label\":\"二七区\",\"value\":\"410103\"},{\"parent_id\":410100,\"label\":\"管城回族区\",\"value\":\"410104\"},{\"parent_id\":410100,\"label\":\"金水区\",\"value\":\"410105\"},{\"parent_id\":410100,\"label\":\"上街区\",\"value\":\"410106\"},{\"parent_id\":410100,\"label\":\"惠济区\",\"value\":\"410108\"},{\"parent_id\":410100,\"label\":\"中牟县\",\"value\":\"410122\"},{\"parent_id\":410100,\"label\":\"巩义市\",\"value\":\"410181\"},{\"parent_id\":410100,\"label\":\"荥阳市\",\"value\":\"410182\"},{\"parent_id\":410100,\"label\":\"新密市\",\"value\":\"410183\"},{\"parent_id\":410100,\"label\":\"新郑市\",\"value\":\"410184\"},{\"parent_id\":410100,\"label\":\"登封市\",\"value\":\"410185\"},{\"parent_id\":410000,\"label\":\"开封市\",\"value\":\"410200\"},{\"parent_id\":410200,\"label\":\"龙亭区\",\"value\":\"410202\"},{\"parent_id\":410200,\"label\":\"顺河回族区\",\"value\":\"410203\"},{\"parent_id\":410200,\"label\":\"鼓楼区\",\"value\":\"410204\"},{\"parent_id\":410200,\"label\":\"禹王台区\",\"value\":\"410205\"},{\"parent_id\":410200,\"label\":\"祥符区\",\"value\":\"410212\"},{\"parent_id\":410200,\"label\":\"杞县\",\"value\":\"410221\"},{\"parent_id\":410200,\"label\":\"通许县\",\"value\":\"410222\"},{\"parent_id\":410200,\"label\":\"尉氏县\",\"value\":\"410223\"},{\"parent_id\":410200,\"label\":\"兰考县\",\"value\":\"410225\"},{\"parent_id\":410000,\"label\":\"洛阳市\",\"value\":\"410300\"},{\"parent_id\":410300,\"label\":\"老城区\",\"value\":\"410302\"},{\"parent_id\":410300,\"label\":\"西工区\",\"value\":\"410303\"},{\"parent_id\":410300,\"label\":\"瀍河回族区\",\"value\":\"410304\"},{\"parent_id\":410300,\"label\":\"涧西区\",\"value\":\"410305\"},{\"parent_id\":410300,\"label\":\"吉利区\",\"value\":\"410306\"},{\"parent_id\":410300,\"label\":\"洛龙区\",\"value\":\"410311\"},{\"parent_id\":410300,\"label\":\"孟津县\",\"value\":\"410322\"},{\"parent_id\":410300,\"label\":\"新安县\",\"value\":\"410323\"},{\"parent_id\":410300,\"label\":\"栾川县\",\"value\":\"410324\"},{\"parent_id\":410300,\"label\":\"嵩县\",\"value\":\"410325\"},{\"parent_id\":410300,\"label\":\"汝阳县\",\"value\":\"410326\"},{\"parent_id\":410300,\"label\":\"宜阳县\",\"value\":\"410327\"},{\"parent_id\":410300,\"label\":\"洛宁县\",\"value\":\"410328\"},{\"parent_id\":410300,\"label\":\"伊川县\",\"value\":\"410329\"},{\"parent_id\":410300,\"label\":\"偃师市\",\"value\":\"410381\"},{\"parent_id\":410000,\"label\":\"平顶山市\",\"value\":\"410400\"},{\"parent_id\":410400,\"label\":\"新华区\",\"value\":\"410402\"},{\"parent_id\":410400,\"label\":\"卫东区\",\"value\":\"410403\"},{\"parent_id\":410400,\"label\":\"石龙区\",\"value\":\"410404\"},{\"parent_id\":410400,\"label\":\"湛河区\",\"value\":\"410411\"},{\"parent_id\":410400,\"label\":\"宝丰县\",\"value\":\"410421\"},{\"parent_id\":410400,\"label\":\"叶县\",\"value\":\"410422\"},{\"parent_id\":410400,\"label\":\"鲁山县\",\"value\":\"410423\"},{\"parent_id\":410400,\"label\":\"郏县\",\"value\":\"410425\"},{\"parent_id\":410400,\"label\":\"舞钢市\",\"value\":\"410481\"},{\"parent_id\":410400,\"label\":\"汝州市\",\"value\":\"410482\"},{\"parent_id\":410000,\"label\":\"安阳市\",\"value\":\"410500\"},{\"parent_id\":410500,\"label\":\"文峰区\",\"value\":\"410502\"},{\"parent_id\":410500,\"label\":\"北关区\",\"value\":\"410503\"},{\"parent_id\":410500,\"label\":\"殷都区\",\"value\":\"410505\"},{\"parent_id\":410500,\"label\":\"龙安区\",\"value\":\"410506\"},{\"parent_id\":410500,\"label\":\"安阳县\",\"value\":\"410522\"},{\"parent_id\":410500,\"label\":\"汤阴县\",\"value\":\"410523\"},{\"parent_id\":410500,\"label\":\"滑县\",\"value\":\"410526\"},{\"parent_id\":410500,\"label\":\"内黄县\",\"value\":\"410527\"},{\"parent_id\":410500,\"label\":\"林州市\",\"value\":\"410581\"},{\"parent_id\":410000,\"label\":\"鹤壁市\",\"value\":\"410600\"},{\"parent_id\":410600,\"label\":\"鹤山区\",\"value\":\"410602\"},{\"parent_id\":410600,\"label\":\"山城区\",\"value\":\"410603\"},{\"parent_id\":410600,\"label\":\"淇滨区\",\"value\":\"410611\"},{\"parent_id\":410600,\"label\":\"浚县\",\"value\":\"410621\"},{\"parent_id\":410600,\"label\":\"淇县\",\"value\":\"410622\"},{\"parent_id\":410000,\"label\":\"新乡市\",\"value\":\"410700\"},{\"parent_id\":410700,\"label\":\"红旗区\",\"value\":\"410702\"},{\"parent_id\":410700,\"label\":\"卫滨区\",\"value\":\"410703\"},{\"parent_id\":410700,\"label\":\"凤泉区\",\"value\":\"410704\"},{\"parent_id\":410700,\"label\":\"牧野区\",\"value\":\"410711\"},{\"parent_id\":410700,\"label\":\"新乡县\",\"value\":\"410721\"},{\"parent_id\":410700,\"label\":\"获嘉县\",\"value\":\"410724\"},{\"parent_id\":410700,\"label\":\"原阳县\",\"value\":\"410725\"},{\"parent_id\":410700,\"label\":\"延津县\",\"value\":\"410726\"},{\"parent_id\":410700,\"label\":\"封丘县\",\"value\":\"410727\"},{\"parent_id\":410700,\"label\":\"长垣县\",\"value\":\"410728\"},{\"parent_id\":410700,\"label\":\"卫辉市\",\"value\":\"410781\"},{\"parent_id\":410700,\"label\":\"辉县市\",\"value\":\"410782\"},{\"parent_id\":410000,\"label\":\"焦作市\",\"value\":\"410800\"},{\"parent_id\":410800,\"label\":\"解放区\",\"value\":\"410802\"},{\"parent_id\":410800,\"label\":\"中站区\",\"value\":\"410803\"},{\"parent_id\":410800,\"label\":\"马村区\",\"value\":\"410804\"},{\"parent_id\":410800,\"label\":\"山阳区\",\"value\":\"410811\"},{\"parent_id\":410800,\"label\":\"修武县\",\"value\":\"410821\"},{\"parent_id\":410800,\"label\":\"博爱县\",\"value\":\"410822\"},{\"parent_id\":410800,\"label\":\"武陟县\",\"value\":\"410823\"},{\"parent_id\":410800,\"label\":\"温县\",\"value\":\"410825\"},{\"parent_id\":410800,\"label\":\"沁阳市\",\"value\":\"410882\"},{\"parent_id\":410800,\"label\":\"孟州市\",\"value\":\"410883\"},{\"parent_id\":410000,\"label\":\"濮阳市\",\"value\":\"410900\"},{\"parent_id\":410900,\"label\":\"华龙区\",\"value\":\"410902\"},{\"parent_id\":410900,\"label\":\"清丰县\",\"value\":\"410922\"},{\"parent_id\":410900,\"label\":\"南乐县\",\"value\":\"410923\"},{\"parent_id\":410900,\"label\":\"范县\",\"value\":\"410926\"},{\"parent_id\":410900,\"label\":\"台前县\",\"value\":\"410927\"},{\"parent_id\":410900,\"label\":\"濮阳县\",\"value\":\"410928\"},{\"parent_id\":410000,\"label\":\"许昌市\",\"value\":\"411000\"},{\"parent_id\":411000,\"label\":\"魏都区\",\"value\":\"411002\"},{\"parent_id\":411000,\"label\":\"许昌县\",\"value\":\"411023\"},{\"parent_id\":411000,\"label\":\"鄢陵县\",\"value\":\"411024\"},{\"parent_id\":411000,\"label\":\"襄城县\",\"value\":\"411025\"},{\"parent_id\":411000,\"label\":\"禹州市\",\"value\":\"411081\"},{\"parent_id\":411000,\"label\":\"长葛市\",\"value\":\"411082\"},{\"parent_id\":410000,\"label\":\"漯河市\",\"value\":\"411100\"},{\"parent_id\":411100,\"label\":\"源汇区\",\"value\":\"411102\"},{\"parent_id\":411100,\"label\":\"郾城区\",\"value\":\"411103\"},{\"parent_id\":411100,\"label\":\"召陵区\",\"value\":\"411104\"},{\"parent_id\":411100,\"label\":\"舞阳县\",\"value\":\"411121\"},{\"parent_id\":411100,\"label\":\"临颍县\",\"value\":\"411122\"},{\"parent_id\":410000,\"label\":\"三门峡市\",\"value\":\"411200\"},{\"parent_id\":411200,\"label\":\"湖滨区\",\"value\":\"411202\"},{\"parent_id\":411200,\"label\":\"陕州区\",\"value\":\"411203\"},{\"parent_id\":411200,\"label\":\"渑池县\",\"value\":\"411221\"},{\"parent_id\":411200,\"label\":\"卢氏县\",\"value\":\"411224\"},{\"parent_id\":411200,\"label\":\"义马市\",\"value\":\"411281\"},{\"parent_id\":411200,\"label\":\"灵宝市\",\"value\":\"411282\"},{\"parent_id\":410000,\"label\":\"南阳市\",\"value\":\"411300\"},{\"parent_id\":411300,\"label\":\"宛城区\",\"value\":\"411302\"},{\"parent_id\":411300,\"label\":\"卧龙区\",\"value\":\"411303\"},{\"parent_id\":411300,\"label\":\"南召县\",\"value\":\"411321\"},{\"parent_id\":411300,\"label\":\"方城县\",\"value\":\"411322\"},{\"parent_id\":411300,\"label\":\"西峡县\",\"value\":\"411323\"},{\"parent_id\":411300,\"label\":\"镇平县\",\"value\":\"411324\"},{\"parent_id\":411300,\"label\":\"内乡县\",\"value\":\"411325\"},{\"parent_id\":411300,\"label\":\"淅川县\",\"value\":\"411326\"},{\"parent_id\":411300,\"label\":\"社旗县\",\"value\":\"411327\"},{\"parent_id\":411300,\"label\":\"唐河县\",\"value\":\"411328\"},{\"parent_id\":411300,\"label\":\"新野县\",\"value\":\"411329\"},{\"parent_id\":411300,\"label\":\"桐柏县\",\"value\":\"411330\"},{\"parent_id\":411300,\"label\":\"邓州市\",\"value\":\"411381\"},{\"parent_id\":410000,\"label\":\"商丘市\",\"value\":\"411400\"},{\"parent_id\":411400,\"label\":\"梁园区\",\"value\":\"411402\"},{\"parent_id\":411400,\"label\":\"睢阳区\",\"value\":\"411403\"},{\"parent_id\":411400,\"label\":\"民权县\",\"value\":\"411421\"},{\"parent_id\":411400,\"label\":\"睢县\",\"value\":\"411422\"},{\"parent_id\":411400,\"label\":\"宁陵县\",\"value\":\"411423\"},{\"parent_id\":411400,\"label\":\"柘城县\",\"value\":\"411424\"},{\"parent_id\":411400,\"label\":\"虞城县\",\"value\":\"411425\"},{\"parent_id\":411400,\"label\":\"夏邑县\",\"value\":\"411426\"},{\"parent_id\":411400,\"label\":\"永城市\",\"value\":\"411481\"},{\"parent_id\":410000,\"label\":\"信阳市\",\"value\":\"411500\"},{\"parent_id\":411500,\"label\":\"浉河区\",\"value\":\"411502\"},{\"parent_id\":411500,\"label\":\"平桥区\",\"value\":\"411503\"},{\"parent_id\":411500,\"label\":\"罗山县\",\"value\":\"411521\"},{\"parent_id\":411500,\"label\":\"光山县\",\"value\":\"411522\"},{\"parent_id\":411500,\"label\":\"新县\",\"value\":\"411523\"},{\"parent_id\":411500,\"label\":\"商城县\",\"value\":\"411524\"},{\"parent_id\":411500,\"label\":\"固始县\",\"value\":\"411525\"},{\"parent_id\":411500,\"label\":\"潢川县\",\"value\":\"411526\"},{\"parent_id\":411500,\"label\":\"淮滨县\",\"value\":\"411527\"},{\"parent_id\":411500,\"label\":\"息县\",\"value\":\"411528\"},{\"parent_id\":410000,\"label\":\"周口市\",\"value\":\"411600\"},{\"parent_id\":411600,\"label\":\"川汇区\",\"value\":\"411602\"},{\"parent_id\":411600,\"label\":\"扶沟县\",\"value\":\"411621\"},{\"parent_id\":411600,\"label\":\"西华县\",\"value\":\"411622\"},{\"parent_id\":411600,\"label\":\"商水县\",\"value\":\"411623\"},{\"parent_id\":411600,\"label\":\"沈丘县\",\"value\":\"411624\"},{\"parent_id\":411600,\"label\":\"郸城县\",\"value\":\"411625\"},{\"parent_id\":411600,\"label\":\"淮阳县\",\"value\":\"411626\"},{\"parent_id\":411600,\"label\":\"太康县\",\"value\":\"411627\"},{\"parent_id\":411600,\"label\":\"鹿邑县\",\"value\":\"411628\"},{\"parent_id\":411600,\"label\":\"项城市\",\"value\":\"411681\"},{\"parent_id\":410000,\"label\":\"驻马店市\",\"value\":\"411700\"},{\"parent_id\":411700,\"label\":\"驿城区\",\"value\":\"411702\"},{\"parent_id\":411700,\"label\":\"西平县\",\"value\":\"411721\"},{\"parent_id\":411700,\"label\":\"上蔡县\",\"value\":\"411722\"},{\"parent_id\":411700,\"label\":\"平舆县\",\"value\":\"411723\"},{\"parent_id\":411700,\"label\":\"正阳县\",\"value\":\"411724\"},{\"parent_id\":411700,\"label\":\"确山县\",\"value\":\"411725\"},{\"parent_id\":411700,\"label\":\"泌阳县\",\"value\":\"411726\"},{\"parent_id\":411700,\"label\":\"汝南县\",\"value\":\"411727\"},{\"parent_id\":411700,\"label\":\"遂平县\",\"value\":\"411728\"},{\"parent_id\":411700,\"label\":\"新蔡县\",\"value\":\"411729\"},{\"parent_id\":410000,\"label\":\"济源市\",\"value\":\"419001\"},{\"parent_id\":0,\"label\":\"湖北省\",\"value\":\"420000\"},{\"parent_id\":420000,\"label\":\"武汉市\",\"value\":\"420100\"},{\"parent_id\":420100,\"label\":\"江岸区\",\"value\":\"420102\"},{\"parent_id\":420100,\"label\":\"江汉区\",\"value\":\"420103\"},{\"parent_id\":420100,\"label\":\"硚口区\",\"value\":\"420104\"},{\"parent_id\":420100,\"label\":\"汉阳区\",\"value\":\"420105\"},{\"parent_id\":420100,\"label\":\"武昌区\",\"value\":\"420106\"},{\"parent_id\":420100,\"label\":\"青山区\",\"value\":\"420107\"},{\"parent_id\":420100,\"label\":\"洪山区\",\"value\":\"420111\"},{\"parent_id\":420100,\"label\":\"东西湖区\",\"value\":\"420112\"},{\"parent_id\":420100,\"label\":\"汉南区\",\"value\":\"420113\"},{\"parent_id\":420100,\"label\":\"蔡甸区\",\"value\":\"420114\"},{\"parent_id\":420100,\"label\":\"江夏区\",\"value\":\"420115\"},{\"parent_id\":420100,\"label\":\"黄陂区\",\"value\":\"420116\"},{\"parent_id\":420100,\"label\":\"新洲区\",\"value\":\"420117\"},{\"parent_id\":420000,\"label\":\"黄石市\",\"value\":\"420200\"},{\"parent_id\":420200,\"label\":\"黄石港区\",\"value\":\"420202\"},{\"parent_id\":420200,\"label\":\"西塞山区\",\"value\":\"420203\"},{\"parent_id\":420200,\"label\":\"下陆区\",\"value\":\"420204\"},{\"parent_id\":420200,\"label\":\"铁山区\",\"value\":\"420205\"},{\"parent_id\":420200,\"label\":\"阳新县\",\"value\":\"420222\"},{\"parent_id\":420200,\"label\":\"大冶市\",\"value\":\"420281\"},{\"parent_id\":420000,\"label\":\"十堰市\",\"value\":\"420300\"},{\"parent_id\":420300,\"label\":\"茅箭区\",\"value\":\"420302\"},{\"parent_id\":420300,\"label\":\"张湾区\",\"value\":\"420303\"},{\"parent_id\":420300,\"label\":\"郧阳区\",\"value\":\"420304\"},{\"parent_id\":420300,\"label\":\"郧西县\",\"value\":\"420322\"},{\"parent_id\":420300,\"label\":\"竹山县\",\"value\":\"420323\"},{\"parent_id\":420300,\"label\":\"竹溪县\",\"value\":\"420324\"},{\"parent_id\":420300,\"label\":\"房县\",\"value\":\"420325\"},{\"parent_id\":420300,\"label\":\"丹江口市\",\"value\":\"420381\"},{\"parent_id\":420000,\"label\":\"宜昌市\",\"value\":\"420500\"},{\"parent_id\":420500,\"label\":\"西陵区\",\"value\":\"420502\"},{\"parent_id\":420500,\"label\":\"伍家岗区\",\"value\":\"420503\"},{\"parent_id\":420500,\"label\":\"点军区\",\"value\":\"420504\"},{\"parent_id\":420500,\"label\":\"猇亭区\",\"value\":\"420505\"},{\"parent_id\":420500,\"label\":\"夷陵区\",\"value\":\"420506\"},{\"parent_id\":420500,\"label\":\"远安县\",\"value\":\"420525\"},{\"parent_id\":420500,\"label\":\"兴山县\",\"value\":\"420526\"},{\"parent_id\":420500,\"label\":\"秭归县\",\"value\":\"420527\"},{\"parent_id\":420500,\"label\":\"长阳土家族自治县\",\"value\":\"420528\"},{\"parent_id\":420500,\"label\":\"五峰土家族自治县\",\"value\":\"420529\"},{\"parent_id\":420500,\"label\":\"宜都市\",\"value\":\"420581\"},{\"parent_id\":420500,\"label\":\"当阳市\",\"value\":\"420582\"},{\"parent_id\":420500,\"label\":\"枝江市\",\"value\":\"420583\"},{\"parent_id\":420000,\"label\":\"襄阳市\",\"value\":\"420600\"},{\"parent_id\":420600,\"label\":\"襄城区\",\"value\":\"420602\"},{\"parent_id\":420600,\"label\":\"樊城区\",\"value\":\"420606\"},{\"parent_id\":420600,\"label\":\"襄州区\",\"value\":\"420607\"},{\"parent_id\":420600,\"label\":\"南漳县\",\"value\":\"420624\"},{\"parent_id\":420600,\"label\":\"谷城县\",\"value\":\"420625\"},{\"parent_id\":420600,\"label\":\"保康县\",\"value\":\"420626\"},{\"parent_id\":420600,\"label\":\"老河口市\",\"value\":\"420682\"},{\"parent_id\":420600,\"label\":\"枣阳市\",\"value\":\"420683\"},{\"parent_id\":420600,\"label\":\"宜城市\",\"value\":\"420684\"},{\"parent_id\":420000,\"label\":\"鄂州市\",\"value\":\"420700\"},{\"parent_id\":420700,\"label\":\"梁子湖区\",\"value\":\"420702\"},{\"parent_id\":420700,\"label\":\"华容区\",\"value\":\"420703\"},{\"parent_id\":420700,\"label\":\"鄂城区\",\"value\":\"420704\"},{\"parent_id\":420000,\"label\":\"荆门市\",\"value\":\"420800\"},{\"parent_id\":420800,\"label\":\"东宝区\",\"value\":\"420802\"},{\"parent_id\":420800,\"label\":\"掇刀区\",\"value\":\"420804\"},{\"parent_id\":420800,\"label\":\"京山县\",\"value\":\"420821\"},{\"parent_id\":420800,\"label\":\"沙洋县\",\"value\":\"420822\"},{\"parent_id\":420800,\"label\":\"钟祥市\",\"value\":\"420881\"},{\"parent_id\":420000,\"label\":\"孝感市\",\"value\":\"420900\"},{\"parent_id\":420900,\"label\":\"孝南区\",\"value\":\"420902\"},{\"parent_id\":420900,\"label\":\"孝昌县\",\"value\":\"420921\"},{\"parent_id\":420900,\"label\":\"大悟县\",\"value\":\"420922\"},{\"parent_id\":420900,\"label\":\"云梦县\",\"value\":\"420923\"},{\"parent_id\":420900,\"label\":\"应城市\",\"value\":\"420981\"},{\"parent_id\":420900,\"label\":\"安陆市\",\"value\":\"420982\"},{\"parent_id\":420900,\"label\":\"汉川市\",\"value\":\"420984\"},{\"parent_id\":420000,\"label\":\"荆州市\",\"value\":\"421000\"},{\"parent_id\":421000,\"label\":\"沙市区\",\"value\":\"421002\"},{\"parent_id\":421000,\"label\":\"荆州区\",\"value\":\"421003\"},{\"parent_id\":421000,\"label\":\"公安县\",\"value\":\"421022\"},{\"parent_id\":421000,\"label\":\"监利县\",\"value\":\"421023\"},{\"parent_id\":421000,\"label\":\"江陵县\",\"value\":\"421024\"},{\"parent_id\":421000,\"label\":\"石首市\",\"value\":\"421081\"},{\"parent_id\":421000,\"label\":\"洪湖市\",\"value\":\"421083\"},{\"parent_id\":421000,\"label\":\"松滋市\",\"value\":\"421087\"},{\"parent_id\":420000,\"label\":\"黄冈市\",\"value\":\"421100\"},{\"parent_id\":421100,\"label\":\"黄州区\",\"value\":\"421102\"},{\"parent_id\":421100,\"label\":\"团风县\",\"value\":\"421121\"},{\"parent_id\":421100,\"label\":\"红安县\",\"value\":\"421122\"},{\"parent_id\":421100,\"label\":\"罗田县\",\"value\":\"421123\"},{\"parent_id\":421100,\"label\":\"英山县\",\"value\":\"421124\"},{\"parent_id\":421100,\"label\":\"浠水县\",\"value\":\"421125\"},{\"parent_id\":421100,\"label\":\"蕲春县\",\"value\":\"421126\"},{\"parent_id\":421100,\"label\":\"黄梅县\",\"value\":\"421127\"},{\"parent_id\":421100,\"label\":\"麻城市\",\"value\":\"421181\"},{\"parent_id\":421100,\"label\":\"武穴市\",\"value\":\"421182\"},{\"parent_id\":420000,\"label\":\"咸宁市\",\"value\":\"421200\"},{\"parent_id\":421200,\"label\":\"咸安区\",\"value\":\"421202\"},{\"parent_id\":421200,\"label\":\"嘉鱼县\",\"value\":\"421221\"},{\"parent_id\":421200,\"label\":\"通城县\",\"value\":\"421222\"},{\"parent_id\":421200,\"label\":\"崇阳县\",\"value\":\"421223\"},{\"parent_id\":421200,\"label\":\"通山县\",\"value\":\"421224\"},{\"parent_id\":421200,\"label\":\"赤壁市\",\"value\":\"421281\"},{\"parent_id\":420000,\"label\":\"随州市\",\"value\":\"421300\"},{\"parent_id\":421300,\"label\":\"曾都区\",\"value\":\"421303\"},{\"parent_id\":421300,\"label\":\"随县\",\"value\":\"421321\"},{\"parent_id\":421300,\"label\":\"广水市\",\"value\":\"421381\"},{\"parent_id\":420000,\"label\":\"恩施土家族苗族自治州\",\"value\":\"422800\"},{\"parent_id\":422800,\"label\":\"恩施市\",\"value\":\"422801\"},{\"parent_id\":422800,\"label\":\"利川市\",\"value\":\"422802\"},{\"parent_id\":422800,\"label\":\"建始县\",\"value\":\"422822\"},{\"parent_id\":422800,\"label\":\"巴东县\",\"value\":\"422823\"},{\"parent_id\":422800,\"label\":\"宣恩县\",\"value\":\"422825\"},{\"parent_id\":422800,\"label\":\"咸丰县\",\"value\":\"422826\"},{\"parent_id\":422800,\"label\":\"来凤县\",\"value\":\"422827\"},{\"parent_id\":422800,\"label\":\"鹤峰县\",\"value\":\"422828\"},{\"parent_id\":420000,\"label\":\"仙桃市\",\"value\":\"429004\"},{\"parent_id\":420000,\"label\":\"潜江市\",\"value\":\"429005\"},{\"parent_id\":420000,\"label\":\"天门市\",\"value\":\"429006\"},{\"parent_id\":420000,\"label\":\"神农架林区\",\"value\":\"429021\"},{\"parent_id\":0,\"label\":\"湖南省\",\"value\":\"430000\"},{\"parent_id\":430000,\"label\":\"长沙市\",\"value\":\"430100\"},{\"parent_id\":430100,\"label\":\"芙蓉区\",\"value\":\"430102\"},{\"parent_id\":430100,\"label\":\"天心区\",\"value\":\"430103\"},{\"parent_id\":430100,\"label\":\"岳麓区\",\"value\":\"430104\"},{\"parent_id\":430100,\"label\":\"开福区\",\"value\":\"430105\"},{\"parent_id\":430100,\"label\":\"雨花区\",\"value\":\"430111\"},{\"parent_id\":430100,\"label\":\"望城区\",\"value\":\"430112\"},{\"parent_id\":430100,\"label\":\"长沙县\",\"value\":\"430121\"},{\"parent_id\":430100,\"label\":\"宁乡县\",\"value\":\"430124\"},{\"parent_id\":430100,\"label\":\"浏阳市\",\"value\":\"430181\"},{\"parent_id\":430000,\"label\":\"株洲市\",\"value\":\"430200\"},{\"parent_id\":430200,\"label\":\"荷塘区\",\"value\":\"430202\"},{\"parent_id\":430200,\"label\":\"芦淞区\",\"value\":\"430203\"},{\"parent_id\":430200,\"label\":\"石峰区\",\"value\":\"430204\"},{\"parent_id\":430200,\"label\":\"天元区\",\"value\":\"430211\"},{\"parent_id\":430200,\"label\":\"株洲县\",\"value\":\"430221\"},{\"parent_id\":430200,\"label\":\"攸县\",\"value\":\"430223\"},{\"parent_id\":430200,\"label\":\"茶陵县\",\"value\":\"430224\"},{\"parent_id\":430200,\"label\":\"炎陵县\",\"value\":\"430225\"},{\"parent_id\":430200,\"label\":\"醴陵市\",\"value\":\"430281\"},{\"parent_id\":430000,\"label\":\"湘潭市\",\"value\":\"430300\"},{\"parent_id\":430300,\"label\":\"雨湖区\",\"value\":\"430302\"},{\"parent_id\":430300,\"label\":\"岳塘区\",\"value\":\"430304\"},{\"parent_id\":430300,\"label\":\"湘潭县\",\"value\":\"430321\"},{\"parent_id\":430300,\"label\":\"湘乡市\",\"value\":\"430381\"},{\"parent_id\":430300,\"label\":\"韶山市\",\"value\":\"430382\"},{\"parent_id\":430000,\"label\":\"衡阳市\",\"value\":\"430400\"},{\"parent_id\":430400,\"label\":\"珠晖区\",\"value\":\"430405\"},{\"parent_id\":430400,\"label\":\"雁峰区\",\"value\":\"430406\"},{\"parent_id\":430400,\"label\":\"石鼓区\",\"value\":\"430407\"},{\"parent_id\":430400,\"label\":\"蒸湘区\",\"value\":\"430408\"},{\"parent_id\":430400,\"label\":\"南岳区\",\"value\":\"430412\"},{\"parent_id\":430400,\"label\":\"衡阳县\",\"value\":\"430421\"},{\"parent_id\":430400,\"label\":\"衡南县\",\"value\":\"430422\"},{\"parent_id\":430400,\"label\":\"衡山县\",\"value\":\"430423\"},{\"parent_id\":430400,\"label\":\"衡东县\",\"value\":\"430424\"},{\"parent_id\":430400,\"label\":\"祁东县\",\"value\":\"430426\"},{\"parent_id\":430400,\"label\":\"耒阳市\",\"value\":\"430481\"},{\"parent_id\":430400,\"label\":\"常宁市\",\"value\":\"430482\"},{\"parent_id\":430000,\"label\":\"邵阳市\",\"value\":\"430500\"},{\"parent_id\":430500,\"label\":\"双清区\",\"value\":\"430502\"},{\"parent_id\":430500,\"label\":\"大祥区\",\"value\":\"430503\"},{\"parent_id\":430500,\"label\":\"北塔区\",\"value\":\"430511\"},{\"parent_id\":430500,\"label\":\"邵东县\",\"value\":\"430521\"},{\"parent_id\":430500,\"label\":\"新邵县\",\"value\":\"430522\"},{\"parent_id\":430500,\"label\":\"邵阳县\",\"value\":\"430523\"},{\"parent_id\":430500,\"label\":\"隆回县\",\"value\":\"430524\"},{\"parent_id\":430500,\"label\":\"洞口县\",\"value\":\"430525\"},{\"parent_id\":430500,\"label\":\"绥宁县\",\"value\":\"430527\"},{\"parent_id\":430500,\"label\":\"新宁县\",\"value\":\"430528\"},{\"parent_id\":430500,\"label\":\"城步苗族自治县\",\"value\":\"430529\"},{\"parent_id\":430500,\"label\":\"武冈市\",\"value\":\"430581\"},{\"parent_id\":430000,\"label\":\"岳阳市\",\"value\":\"430600\"},{\"parent_id\":430600,\"label\":\"岳阳楼区\",\"value\":\"430602\"},{\"parent_id\":430600,\"label\":\"云溪区\",\"value\":\"430603\"},{\"parent_id\":430600,\"label\":\"君山区\",\"value\":\"430611\"},{\"parent_id\":430600,\"label\":\"岳阳县\",\"value\":\"430621\"},{\"parent_id\":430600,\"label\":\"华容县\",\"value\":\"430623\"},{\"parent_id\":430600,\"label\":\"湘阴县\",\"value\":\"430624\"},{\"parent_id\":430600,\"label\":\"平江县\",\"value\":\"430626\"},{\"parent_id\":430600,\"label\":\"汨罗市\",\"value\":\"430681\"},{\"parent_id\":430600,\"label\":\"临湘市\",\"value\":\"430682\"},{\"parent_id\":430000,\"label\":\"常德市\",\"value\":\"430700\"},{\"parent_id\":430700,\"label\":\"武陵区\",\"value\":\"430702\"},{\"parent_id\":430700,\"label\":\"鼎城区\",\"value\":\"430703\"},{\"parent_id\":430700,\"label\":\"安乡县\",\"value\":\"430721\"},{\"parent_id\":430700,\"label\":\"汉寿县\",\"value\":\"430722\"},{\"parent_id\":430700,\"label\":\"澧县\",\"value\":\"430723\"},{\"parent_id\":430700,\"label\":\"临澧县\",\"value\":\"430724\"},{\"parent_id\":430700,\"label\":\"桃源县\",\"value\":\"430725\"},{\"parent_id\":430700,\"label\":\"石门县\",\"value\":\"430726\"},{\"parent_id\":430700,\"label\":\"津市市\",\"value\":\"430781\"},{\"parent_id\":430000,\"label\":\"张家界市\",\"value\":\"430800\"},{\"parent_id\":430800,\"label\":\"永定区\",\"value\":\"430802\"},{\"parent_id\":430800,\"label\":\"武陵源区\",\"value\":\"430811\"},{\"parent_id\":430800,\"label\":\"慈利县\",\"value\":\"430821\"},{\"parent_id\":430800,\"label\":\"桑植县\",\"value\":\"430822\"},{\"parent_id\":430000,\"label\":\"益阳市\",\"value\":\"430900\"},{\"parent_id\":430900,\"label\":\"资阳区\",\"value\":\"430902\"},{\"parent_id\":430900,\"label\":\"赫山区\",\"value\":\"430903\"},{\"parent_id\":430900,\"label\":\"南县\",\"value\":\"430921\"},{\"parent_id\":430900,\"label\":\"桃江县\",\"value\":\"430922\"},{\"parent_id\":430900,\"label\":\"安化县\",\"value\":\"430923\"},{\"parent_id\":430900,\"label\":\"沅江市\",\"value\":\"430981\"},{\"parent_id\":430000,\"label\":\"郴州市\",\"value\":\"431000\"},{\"parent_id\":431000,\"label\":\"北湖区\",\"value\":\"431002\"},{\"parent_id\":431000,\"label\":\"苏仙区\",\"value\":\"431003\"},{\"parent_id\":431000,\"label\":\"桂阳县\",\"value\":\"431021\"},{\"parent_id\":431000,\"label\":\"宜章县\",\"value\":\"431022\"},{\"parent_id\":431000,\"label\":\"永兴县\",\"value\":\"431023\"},{\"parent_id\":431000,\"label\":\"嘉禾县\",\"value\":\"431024\"},{\"parent_id\":431000,\"label\":\"临武县\",\"value\":\"431025\"},{\"parent_id\":431000,\"label\":\"汝城县\",\"value\":\"431026\"},{\"parent_id\":431000,\"label\":\"桂东县\",\"value\":\"431027\"},{\"parent_id\":431000,\"label\":\"安仁县\",\"value\":\"431028\"},{\"parent_id\":431000,\"label\":\"资兴市\",\"value\":\"431081\"},{\"parent_id\":430000,\"label\":\"永州市\",\"value\":\"431100\"},{\"parent_id\":431100,\"label\":\"零陵区\",\"value\":\"431102\"},{\"parent_id\":431100,\"label\":\"冷水滩区\",\"value\":\"431103\"},{\"parent_id\":431100,\"label\":\"祁阳县\",\"value\":\"431121\"},{\"parent_id\":431100,\"label\":\"东安县\",\"value\":\"431122\"},{\"parent_id\":431100,\"label\":\"双牌县\",\"value\":\"431123\"},{\"parent_id\":431100,\"label\":\"道县\",\"value\":\"431124\"},{\"parent_id\":431100,\"label\":\"江永县\",\"value\":\"431125\"},{\"parent_id\":431100,\"label\":\"宁远县\",\"value\":\"431126\"},{\"parent_id\":431100,\"label\":\"蓝山县\",\"value\":\"431127\"},{\"parent_id\":431100,\"label\":\"新田县\",\"value\":\"431128\"},{\"parent_id\":431100,\"label\":\"江华瑶族自治县\",\"value\":\"431129\"},{\"parent_id\":430000,\"label\":\"怀化市\",\"value\":\"431200\"},{\"parent_id\":431200,\"label\":\"鹤城区\",\"value\":\"431202\"},{\"parent_id\":431200,\"label\":\"中方县\",\"value\":\"431221\"},{\"parent_id\":431200,\"label\":\"沅陵县\",\"value\":\"431222\"},{\"parent_id\":431200,\"label\":\"辰溪县\",\"value\":\"431223\"},{\"parent_id\":431200,\"label\":\"溆浦县\",\"value\":\"431224\"},{\"parent_id\":431200,\"label\":\"会同县\",\"value\":\"431225\"},{\"parent_id\":431200,\"label\":\"麻阳苗族自治县\",\"value\":\"431226\"},{\"parent_id\":431200,\"label\":\"新晃侗族自治县\",\"value\":\"431227\"},{\"parent_id\":431200,\"label\":\"芷江侗族自治县\",\"value\":\"431228\"},{\"parent_id\":431200,\"label\":\"靖州苗族侗族自治县\",\"value\":\"431229\"},{\"parent_id\":431200,\"label\":\"通道侗族自治县\",\"value\":\"431230\"},{\"parent_id\":431200,\"label\":\"洪江市\",\"value\":\"431281\"},{\"parent_id\":430000,\"label\":\"娄底市\",\"value\":\"431300\"},{\"parent_id\":431300,\"label\":\"娄星区\",\"value\":\"431302\"},{\"parent_id\":431300,\"label\":\"双峰县\",\"value\":\"431321\"},{\"parent_id\":431300,\"label\":\"新化县\",\"value\":\"431322\"},{\"parent_id\":431300,\"label\":\"冷水江市\",\"value\":\"431381\"},{\"parent_id\":431300,\"label\":\"涟源市\",\"value\":\"431382\"},{\"parent_id\":430000,\"label\":\"湘西土家族苗族自治州\",\"value\":\"433100\"},{\"parent_id\":433100,\"label\":\"吉首市\",\"value\":\"433101\"},{\"parent_id\":433100,\"label\":\"泸溪县\",\"value\":\"433122\"},{\"parent_id\":433100,\"label\":\"凤凰县\",\"value\":\"433123\"},{\"parent_id\":433100,\"label\":\"花垣县\",\"value\":\"433124\"},{\"parent_id\":433100,\"label\":\"保靖县\",\"value\":\"433125\"},{\"parent_id\":433100,\"label\":\"古丈县\",\"value\":\"433126\"},{\"parent_id\":433100,\"label\":\"永顺县\",\"value\":\"433127\"},{\"parent_id\":433100,\"label\":\"龙山县\",\"value\":\"433130\"},{\"parent_id\":0,\"label\":\"广东省\",\"value\":\"440000\"},{\"parent_id\":440000,\"label\":\"广州市\",\"value\":\"440100\"},{\"parent_id\":440100,\"label\":\"荔湾区\",\"value\":\"440103\"},{\"parent_id\":440100,\"label\":\"越秀区\",\"value\":\"440104\"},{\"parent_id\":440100,\"label\":\"海珠区\",\"value\":\"440105\"},{\"parent_id\":440100,\"label\":\"天河区\",\"value\":\"440106\"},{\"parent_id\":440100,\"label\":\"白云区\",\"value\":\"440111\"},{\"parent_id\":440100,\"label\":\"黄埔区\",\"value\":\"440112\"},{\"parent_id\":440100,\"label\":\"番禺区\",\"value\":\"440113\"},{\"parent_id\":440100,\"label\":\"花都区\",\"value\":\"440114\"},{\"parent_id\":440100,\"label\":\"南沙区\",\"value\":\"440115\"},{\"parent_id\":440100,\"label\":\"从化区\",\"value\":\"440117\"},{\"parent_id\":440100,\"label\":\"增城区\",\"value\":\"440118\"},{\"parent_id\":440000,\"label\":\"韶关市\",\"value\":\"440200\"},{\"parent_id\":440200,\"label\":\"武江区\",\"value\":\"440203\"},{\"parent_id\":440200,\"label\":\"浈江区\",\"value\":\"440204\"},{\"parent_id\":440200,\"label\":\"曲江区\",\"value\":\"440205\"},{\"parent_id\":440200,\"label\":\"始兴县\",\"value\":\"440222\"},{\"parent_id\":440200,\"label\":\"仁化县\",\"value\":\"440224\"},{\"parent_id\":440200,\"label\":\"翁源县\",\"value\":\"440229\"},{\"parent_id\":440200,\"label\":\"乳源瑶族自治县\",\"value\":\"440232\"},{\"parent_id\":440200,\"label\":\"新丰县\",\"value\":\"440233\"},{\"parent_id\":440200,\"label\":\"乐昌市\",\"value\":\"440281\"},{\"parent_id\":440200,\"label\":\"南雄市\",\"value\":\"440282\"},{\"parent_id\":440000,\"label\":\"深圳市\",\"value\":\"440300\"},{\"parent_id\":440300,\"label\":\"罗湖区\",\"value\":\"440303\"},{\"parent_id\":440300,\"label\":\"福田区\",\"value\":\"440304\"},{\"parent_id\":440300,\"label\":\"南山区\",\"value\":\"440305\"},{\"parent_id\":440300,\"label\":\"宝安区\",\"value\":\"440306\"},{\"parent_id\":440300,\"label\":\"龙岗区\",\"value\":\"440307\"},{\"parent_id\":440300,\"label\":\"盐田区\",\"value\":\"440308\"},{\"parent_id\":440000,\"label\":\"珠海市\",\"value\":\"440400\"},{\"parent_id\":440400,\"label\":\"香洲区\",\"value\":\"440402\"},{\"parent_id\":440400,\"label\":\"斗门区\",\"value\":\"440403\"},{\"parent_id\":440400,\"label\":\"金湾区\",\"value\":\"440404\"},{\"parent_id\":440000,\"label\":\"汕头市\",\"value\":\"440500\"},{\"parent_id\":440500,\"label\":\"龙湖区\",\"value\":\"440507\"},{\"parent_id\":440500,\"label\":\"金平区\",\"value\":\"440511\"},{\"parent_id\":440500,\"label\":\"濠江区\",\"value\":\"440512\"},{\"parent_id\":440500,\"label\":\"潮阳区\",\"value\":\"440513\"},{\"parent_id\":440500,\"label\":\"潮南区\",\"value\":\"440514\"},{\"parent_id\":440500,\"label\":\"澄海区\",\"value\":\"440515\"},{\"parent_id\":440500,\"label\":\"南澳县\",\"value\":\"440523\"},{\"parent_id\":440000,\"label\":\"佛山市\",\"value\":\"440600\"},{\"parent_id\":440600,\"label\":\"禅城区\",\"value\":\"440604\"},{\"parent_id\":440600,\"label\":\"南海区\",\"value\":\"440605\"},{\"parent_id\":440600,\"label\":\"顺德区\",\"value\":\"440606\"},{\"parent_id\":440600,\"label\":\"三水区\",\"value\":\"440607\"},{\"parent_id\":440600,\"label\":\"高明区\",\"value\":\"440608\"},{\"parent_id\":440000,\"label\":\"江门市\",\"value\":\"440700\"},{\"parent_id\":440700,\"label\":\"蓬江区\",\"value\":\"440703\"},{\"parent_id\":440700,\"label\":\"江海区\",\"value\":\"440704\"},{\"parent_id\":440700,\"label\":\"新会区\",\"value\":\"440705\"},{\"parent_id\":440700,\"label\":\"台山市\",\"value\":\"440781\"},{\"parent_id\":440700,\"label\":\"开平市\",\"value\":\"440783\"},{\"parent_id\":440700,\"label\":\"鹤山市\",\"value\":\"440784\"},{\"parent_id\":440700,\"label\":\"恩平市\",\"value\":\"440785\"},{\"parent_id\":440000,\"label\":\"湛江市\",\"value\":\"440800\"},{\"parent_id\":440800,\"label\":\"赤坎区\",\"value\":\"440802\"},{\"parent_id\":440800,\"label\":\"霞山区\",\"value\":\"440803\"},{\"parent_id\":440800,\"label\":\"坡头区\",\"value\":\"440804\"},{\"parent_id\":440800,\"label\":\"麻章区\",\"value\":\"440811\"},{\"parent_id\":440800,\"label\":\"遂溪县\",\"value\":\"440823\"},{\"parent_id\":440800,\"label\":\"徐闻县\",\"value\":\"440825\"},{\"parent_id\":440800,\"label\":\"廉江市\",\"value\":\"440881\"},{\"parent_id\":440800,\"label\":\"雷州市\",\"value\":\"440882\"},{\"parent_id\":440800,\"label\":\"吴川市\",\"value\":\"440883\"},{\"parent_id\":440000,\"label\":\"茂名市\",\"value\":\"440900\"},{\"parent_id\":440900,\"label\":\"茂南区\",\"value\":\"440902\"},{\"parent_id\":440900,\"label\":\"电白区\",\"value\":\"440904\"},{\"parent_id\":440900,\"label\":\"高州市\",\"value\":\"440981\"},{\"parent_id\":440900,\"label\":\"化州市\",\"value\":\"440982\"},{\"parent_id\":440900,\"label\":\"信宜市\",\"value\":\"440983\"},{\"parent_id\":440000,\"label\":\"肇庆市\",\"value\":\"441200\"},{\"parent_id\":441200,\"label\":\"端州区\",\"value\":\"441202\"},{\"parent_id\":441200,\"label\":\"鼎湖区\",\"value\":\"441203\"},{\"parent_id\":441200,\"label\":\"高要区\",\"value\":\"441204\"},{\"parent_id\":441200,\"label\":\"广宁县\",\"value\":\"441223\"},{\"parent_id\":441200,\"label\":\"怀集县\",\"value\":\"441224\"},{\"parent_id\":441200,\"label\":\"封开县\",\"value\":\"441225\"},{\"parent_id\":441200,\"label\":\"德庆县\",\"value\":\"441226\"},{\"parent_id\":441200,\"label\":\"四会市\",\"value\":\"441284\"},{\"parent_id\":440000,\"label\":\"惠州市\",\"value\":\"441300\"},{\"parent_id\":441300,\"label\":\"惠城区\",\"value\":\"441302\"},{\"parent_id\":441300,\"label\":\"惠阳区\",\"value\":\"441303\"},{\"parent_id\":441300,\"label\":\"博罗县\",\"value\":\"441322\"},{\"parent_id\":441300,\"label\":\"惠东县\",\"value\":\"441323\"},{\"parent_id\":441300,\"label\":\"龙门县\",\"value\":\"441324\"},{\"parent_id\":440000,\"label\":\"梅州市\",\"value\":\"441400\"},{\"parent_id\":441400,\"label\":\"梅江区\",\"value\":\"441402\"},{\"parent_id\":441400,\"label\":\"梅县区\",\"value\":\"441403\"},{\"parent_id\":441400,\"label\":\"大埔县\",\"value\":\"441422\"},{\"parent_id\":441400,\"label\":\"丰顺县\",\"value\":\"441423\"},{\"parent_id\":441400,\"label\":\"五华县\",\"value\":\"441424\"},{\"parent_id\":441400,\"label\":\"平远县\",\"value\":\"441426\"},{\"parent_id\":441400,\"label\":\"蕉岭县\",\"value\":\"441427\"},{\"parent_id\":441400,\"label\":\"兴宁市\",\"value\":\"441481\"},{\"parent_id\":440000,\"label\":\"汕尾市\",\"value\":\"441500\"},{\"parent_id\":441500,\"label\":\"城区\",\"value\":\"441502\"},{\"parent_id\":441500,\"label\":\"海丰县\",\"value\":\"441521\"},{\"parent_id\":441500,\"label\":\"陆河县\",\"value\":\"441523\"},{\"parent_id\":441500,\"label\":\"陆丰市\",\"value\":\"441581\"},{\"parent_id\":440000,\"label\":\"河源市\",\"value\":\"441600\"},{\"parent_id\":441600,\"label\":\"源城区\",\"value\":\"441602\"},{\"parent_id\":441600,\"label\":\"紫金县\",\"value\":\"441621\"},{\"parent_id\":441600,\"label\":\"龙川县\",\"value\":\"441622\"},{\"parent_id\":441600,\"label\":\"连平县\",\"value\":\"441623\"},{\"parent_id\":441600,\"label\":\"和平县\",\"value\":\"441624\"},{\"parent_id\":441600,\"label\":\"东源县\",\"value\":\"441625\"},{\"parent_id\":440000,\"label\":\"阳江市\",\"value\":\"441700\"},{\"parent_id\":441700,\"label\":\"江城区\",\"value\":\"441702\"},{\"parent_id\":441700,\"label\":\"阳东区\",\"value\":\"441704\"},{\"parent_id\":441700,\"label\":\"阳西县\",\"value\":\"441721\"},{\"parent_id\":441700,\"label\":\"阳春市\",\"value\":\"441781\"},{\"parent_id\":440000,\"label\":\"清远市\",\"value\":\"441800\"},{\"parent_id\":441800,\"label\":\"清城区\",\"value\":\"441802\"},{\"parent_id\":441800,\"label\":\"清新区\",\"value\":\"441803\"},{\"parent_id\":441800,\"label\":\"佛冈县\",\"value\":\"441821\"},{\"parent_id\":441800,\"label\":\"阳山县\",\"value\":\"441823\"},{\"parent_id\":441800,\"label\":\"连山壮族瑶族自治县\",\"value\":\"441825\"},{\"parent_id\":441800,\"label\":\"连南瑶族自治县\",\"value\":\"441826\"},{\"parent_id\":441800,\"label\":\"英德市\",\"value\":\"441881\"},{\"parent_id\":441800,\"label\":\"连州市\",\"value\":\"441882\"},{\"parent_id\":440000,\"label\":\"东莞市\",\"value\":\"441900\"},{\"parent_id\":440000,\"label\":\"中山市\",\"value\":\"442000\"},{\"parent_id\":440000,\"label\":\"东沙群岛\",\"value\":\"442100\"},{\"parent_id\":442100,\"label\":\"东沙群岛\",\"value\":\"442101\"},{\"parent_id\":440000,\"label\":\"潮州市\",\"value\":\"445100\"},{\"parent_id\":445100,\"label\":\"湘桥区\",\"value\":\"445102\"},{\"parent_id\":445100,\"label\":\"潮安区\",\"value\":\"445103\"},{\"parent_id\":445100,\"label\":\"饶平县\",\"value\":\"445122\"},{\"parent_id\":440000,\"label\":\"揭阳市\",\"value\":\"445200\"},{\"parent_id\":445200,\"label\":\"榕城区\",\"value\":\"445202\"},{\"parent_id\":445200,\"label\":\"揭东区\",\"value\":\"445203\"},{\"parent_id\":445200,\"label\":\"揭西县\",\"value\":\"445222\"},{\"parent_id\":445200,\"label\":\"惠来县\",\"value\":\"445224\"},{\"parent_id\":445200,\"label\":\"普宁市\",\"value\":\"445281\"},{\"parent_id\":440000,\"label\":\"云浮市\",\"value\":\"445300\"},{\"parent_id\":445300,\"label\":\"云城区\",\"value\":\"445302\"},{\"parent_id\":445300,\"label\":\"云安区\",\"value\":\"445303\"},{\"parent_id\":445300,\"label\":\"新兴县\",\"value\":\"445321\"},{\"parent_id\":445300,\"label\":\"郁南县\",\"value\":\"445322\"},{\"parent_id\":445300,\"label\":\"罗定市\",\"value\":\"445381\"},{\"parent_id\":0,\"label\":\"广西壮族自治区\",\"value\":\"450000\"},{\"parent_id\":450000,\"label\":\"南宁市\",\"value\":\"450100\"},{\"parent_id\":450100,\"label\":\"兴宁区\",\"value\":\"450102\"},{\"parent_id\":450100,\"label\":\"青秀区\",\"value\":\"450103\"},{\"parent_id\":450100,\"label\":\"江南区\",\"value\":\"450105\"},{\"parent_id\":450100,\"label\":\"西乡塘区\",\"value\":\"450107\"},{\"parent_id\":450100,\"label\":\"良庆区\",\"value\":\"450108\"},{\"parent_id\":450100,\"label\":\"邕宁区\",\"value\":\"450109\"},{\"parent_id\":450100,\"label\":\"武鸣区\",\"value\":\"450110\"},{\"parent_id\":450100,\"label\":\"隆安县\",\"value\":\"450123\"},{\"parent_id\":450100,\"label\":\"马山县\",\"value\":\"450124\"},{\"parent_id\":450100,\"label\":\"上林县\",\"value\":\"450125\"},{\"parent_id\":450100,\"label\":\"宾阳县\",\"value\":\"450126\"},{\"parent_id\":450100,\"label\":\"横县\",\"value\":\"450127\"},{\"parent_id\":450000,\"label\":\"柳州市\",\"value\":\"450200\"},{\"parent_id\":450200,\"label\":\"城中区\",\"value\":\"450202\"},{\"parent_id\":450200,\"label\":\"鱼峰区\",\"value\":\"450203\"},{\"parent_id\":450200,\"label\":\"柳南区\",\"value\":\"450204\"},{\"parent_id\":450200,\"label\":\"柳北区\",\"value\":\"450205\"},{\"parent_id\":450200,\"label\":\"柳江区\",\"value\":\"450221\"},{\"parent_id\":450200,\"label\":\"柳城县\",\"value\":\"450222\"},{\"parent_id\":450200,\"label\":\"鹿寨县\",\"value\":\"450223\"},{\"parent_id\":450200,\"label\":\"融安县\",\"value\":\"450224\"},{\"parent_id\":450200,\"label\":\"融水苗族自治县\",\"value\":\"450225\"},{\"parent_id\":450200,\"label\":\"三江侗族自治县\",\"value\":\"450226\"},{\"parent_id\":450000,\"label\":\"桂林市\",\"value\":\"450300\"},{\"parent_id\":450300,\"label\":\"秀峰区\",\"value\":\"450302\"},{\"parent_id\":450300,\"label\":\"叠彩区\",\"value\":\"450303\"},{\"parent_id\":450300,\"label\":\"象山区\",\"value\":\"450304\"},{\"parent_id\":450300,\"label\":\"七星区\",\"value\":\"450305\"},{\"parent_id\":450300,\"label\":\"雁山区\",\"value\":\"450311\"},{\"parent_id\":450300,\"label\":\"临桂区\",\"value\":\"450312\"},{\"parent_id\":450300,\"label\":\"阳朔县\",\"value\":\"450321\"},{\"parent_id\":450300,\"label\":\"灵川县\",\"value\":\"450323\"},{\"parent_id\":450300,\"label\":\"全州县\",\"value\":\"450324\"},{\"parent_id\":450300,\"label\":\"兴安县\",\"value\":\"450325\"},{\"parent_id\":450300,\"label\":\"永福县\",\"value\":\"450326\"},{\"parent_id\":450300,\"label\":\"灌阳县\",\"value\":\"450327\"},{\"parent_id\":450300,\"label\":\"龙胜各族自治县\",\"value\":\"450328\"},{\"parent_id\":450300,\"label\":\"资源县\",\"value\":\"450329\"},{\"parent_id\":450300,\"label\":\"平乐县\",\"value\":\"450330\"},{\"parent_id\":450300,\"label\":\"荔浦县\",\"value\":\"450331\"},{\"parent_id\":450300,\"label\":\"恭城瑶族自治县\",\"value\":\"450332\"},{\"parent_id\":450000,\"label\":\"梧州市\",\"value\":\"450400\"},{\"parent_id\":450400,\"label\":\"万秀区\",\"value\":\"450403\"},{\"parent_id\":450400,\"label\":\"长洲区\",\"value\":\"450405\"},{\"parent_id\":450400,\"label\":\"龙圩区\",\"value\":\"450406\"},{\"parent_id\":450400,\"label\":\"苍梧县\",\"value\":\"450421\"},{\"parent_id\":450400,\"label\":\"藤县\",\"value\":\"450422\"},{\"parent_id\":450400,\"label\":\"蒙山县\",\"value\":\"450423\"},{\"parent_id\":450400,\"label\":\"岑溪市\",\"value\":\"450481\"},{\"parent_id\":450000,\"label\":\"北海市\",\"value\":\"450500\"},{\"parent_id\":450500,\"label\":\"海城区\",\"value\":\"450502\"},{\"parent_id\":450500,\"label\":\"银海区\",\"value\":\"450503\"},{\"parent_id\":450500,\"label\":\"铁山港区\",\"value\":\"450512\"},{\"parent_id\":450500,\"label\":\"合浦县\",\"value\":\"450521\"},{\"parent_id\":450000,\"label\":\"防城港市\",\"value\":\"450600\"},{\"parent_id\":450600,\"label\":\"港口区\",\"value\":\"450602\"},{\"parent_id\":450600,\"label\":\"防城区\",\"value\":\"450603\"},{\"parent_id\":450600,\"label\":\"上思县\",\"value\":\"450621\"},{\"parent_id\":450600,\"label\":\"东兴市\",\"value\":\"450681\"},{\"parent_id\":450000,\"label\":\"钦州市\",\"value\":\"450700\"},{\"parent_id\":450700,\"label\":\"钦南区\",\"value\":\"450702\"},{\"parent_id\":450700,\"label\":\"钦北区\",\"value\":\"450703\"},{\"parent_id\":450700,\"label\":\"灵山县\",\"value\":\"450721\"},{\"parent_id\":450700,\"label\":\"浦北县\",\"value\":\"450722\"},{\"parent_id\":450000,\"label\":\"贵港市\",\"value\":\"450800\"},{\"parent_id\":450800,\"label\":\"港北区\",\"value\":\"450802\"},{\"parent_id\":450800,\"label\":\"港南区\",\"value\":\"450803\"},{\"parent_id\":450800,\"label\":\"覃塘区\",\"value\":\"450804\"},{\"parent_id\":450800,\"label\":\"平南县\",\"value\":\"450821\"},{\"parent_id\":450800,\"label\":\"桂平市\",\"value\":\"450881\"},{\"parent_id\":450000,\"label\":\"玉林市\",\"value\":\"450900\"},{\"parent_id\":450900,\"label\":\"玉州区\",\"value\":\"450902\"},{\"parent_id\":450900,\"label\":\"福绵区\",\"value\":\"450903\"},{\"parent_id\":450900,\"label\":\"容县\",\"value\":\"450921\"},{\"parent_id\":450900,\"label\":\"陆川县\",\"value\":\"450922\"},{\"parent_id\":450900,\"label\":\"博白县\",\"value\":\"450923\"},{\"parent_id\":450900,\"label\":\"兴业县\",\"value\":\"450924\"},{\"parent_id\":450900,\"label\":\"北流市\",\"value\":\"450981\"},{\"parent_id\":450000,\"label\":\"百色市\",\"value\":\"451000\"},{\"parent_id\":451000,\"label\":\"右江区\",\"value\":\"451002\"},{\"parent_id\":451000,\"label\":\"田阳县\",\"value\":\"451021\"},{\"parent_id\":451000,\"label\":\"田东县\",\"value\":\"451022\"},{\"parent_id\":451000,\"label\":\"平果县\",\"value\":\"451023\"},{\"parent_id\":451000,\"label\":\"德保县\",\"value\":\"451024\"},{\"parent_id\":451000,\"label\":\"那坡县\",\"value\":\"451026\"},{\"parent_id\":451000,\"label\":\"凌云县\",\"value\":\"451027\"},{\"parent_id\":451000,\"label\":\"乐业县\",\"value\":\"451028\"},{\"parent_id\":451000,\"label\":\"田林县\",\"value\":\"451029\"},{\"parent_id\":451000,\"label\":\"西林县\",\"value\":\"451030\"},{\"parent_id\":451000,\"label\":\"隆林各族自治县\",\"value\":\"451031\"},{\"parent_id\":451000,\"label\":\"靖西市\",\"value\":\"451081\"},{\"parent_id\":450000,\"label\":\"贺州市\",\"value\":\"451100\"},{\"parent_id\":451100,\"label\":\"八步区\",\"value\":\"451102\"},{\"parent_id\":451100,\"label\":\"平桂区\",\"value\":\"451103\"},{\"parent_id\":451100,\"label\":\"昭平县\",\"value\":\"451121\"},{\"parent_id\":451100,\"label\":\"钟山县\",\"value\":\"451122\"},{\"parent_id\":451100,\"label\":\"富川瑶族自治县\",\"value\":\"451123\"},{\"parent_id\":450000,\"label\":\"河池市\",\"value\":\"451200\"},{\"parent_id\":451200,\"label\":\"金城江区\",\"value\":\"451202\"},{\"parent_id\":451200,\"label\":\"南丹县\",\"value\":\"451221\"},{\"parent_id\":451200,\"label\":\"天峨县\",\"value\":\"451222\"},{\"parent_id\":451200,\"label\":\"凤山县\",\"value\":\"451223\"},{\"parent_id\":451200,\"label\":\"东兰县\",\"value\":\"451224\"},{\"parent_id\":451200,\"label\":\"罗城仫佬族自治县\",\"value\":\"451225\"},{\"parent_id\":451200,\"label\":\"环江毛南族自治县\",\"value\":\"451226\"},{\"parent_id\":451200,\"label\":\"巴马瑶族自治县\",\"value\":\"451227\"},{\"parent_id\":451200,\"label\":\"都安瑶族自治县\",\"value\":\"451228\"},{\"parent_id\":451200,\"label\":\"大化瑶族自治县\",\"value\":\"451229\"},{\"parent_id\":451200,\"label\":\"宜州市\",\"value\":\"451281\"},{\"parent_id\":450000,\"label\":\"来宾市\",\"value\":\"451300\"},{\"parent_id\":451300,\"label\":\"兴宾区\",\"value\":\"451302\"},{\"parent_id\":451300,\"label\":\"忻城县\",\"value\":\"451321\"},{\"parent_id\":451300,\"label\":\"象州县\",\"value\":\"451322\"},{\"parent_id\":451300,\"label\":\"武宣县\",\"value\":\"451323\"},{\"parent_id\":451300,\"label\":\"金秀瑶族自治县\",\"value\":\"451324\"},{\"parent_id\":451300,\"label\":\"合山市\",\"value\":\"451381\"},{\"parent_id\":450000,\"label\":\"崇左市\",\"value\":\"451400\"},{\"parent_id\":451400,\"label\":\"江州区\",\"value\":\"451402\"},{\"parent_id\":451400,\"label\":\"扶绥县\",\"value\":\"451421\"},{\"parent_id\":451400,\"label\":\"宁明县\",\"value\":\"451422\"},{\"parent_id\":451400,\"label\":\"龙州县\",\"value\":\"451423\"},{\"parent_id\":451400,\"label\":\"大新县\",\"value\":\"451424\"},{\"parent_id\":451400,\"label\":\"天等县\",\"value\":\"451425\"},{\"parent_id\":451400,\"label\":\"凭祥市\",\"value\":\"451481\"},{\"parent_id\":0,\"label\":\"海南省\",\"value\":\"460000\"},{\"parent_id\":460000,\"label\":\"海口市\",\"value\":\"460100\"},{\"parent_id\":460100,\"label\":\"秀英区\",\"value\":\"460105\"},{\"parent_id\":460100,\"label\":\"龙华区\",\"value\":\"460106\"},{\"parent_id\":460100,\"label\":\"琼山区\",\"value\":\"460107\"},{\"parent_id\":460100,\"label\":\"美兰区\",\"value\":\"460108\"},{\"parent_id\":460000,\"label\":\"三亚市\",\"value\":\"460200\"},{\"parent_id\":460200,\"label\":\"海棠区\",\"value\":\"460202\"},{\"parent_id\":460200,\"label\":\"吉阳区\",\"value\":\"460203\"},{\"parent_id\":460200,\"label\":\"天涯区\",\"value\":\"460204\"},{\"parent_id\":460200,\"label\":\"崖州区\",\"value\":\"460205\"},{\"parent_id\":460000,\"label\":\"三沙市\",\"value\":\"460300\"},{\"parent_id\":460300,\"label\":\"西沙群岛\",\"value\":\"460321\"},{\"parent_id\":460300,\"label\":\"南沙群岛\",\"value\":\"460322\"},{\"parent_id\":460300,\"label\":\"中沙群岛的岛礁及其海域\",\"value\":\"460323\"},{\"parent_id\":460000,\"label\":\"儋州市\",\"value\":\"460400\"},{\"parent_id\":460000,\"label\":\"五指山市\",\"value\":\"469001\"},{\"parent_id\":460000,\"label\":\"琼海市\",\"value\":\"469002\"},{\"parent_id\":460000,\"label\":\"文昌市\",\"value\":\"469005\"},{\"parent_id\":460000,\"label\":\"万宁市\",\"value\":\"469006\"},{\"parent_id\":460000,\"label\":\"东方市\",\"value\":\"469007\"},{\"parent_id\":460000,\"label\":\"定安县\",\"value\":\"469021\"},{\"parent_id\":460000,\"label\":\"屯昌县\",\"value\":\"469022\"},{\"parent_id\":460000,\"label\":\"澄迈县\",\"value\":\"469023\"},{\"parent_id\":460000,\"label\":\"临高县\",\"value\":\"469024\"},{\"parent_id\":460000,\"label\":\"白沙黎族自治县\",\"value\":\"469025\"},{\"parent_id\":460000,\"label\":\"昌江黎族自治县\",\"value\":\"469026\"},{\"parent_id\":460000,\"label\":\"乐东黎族自治县\",\"value\":\"469027\"},{\"parent_id\":460000,\"label\":\"陵水黎族自治县\",\"value\":\"469028\"},{\"parent_id\":460000,\"label\":\"保亭黎族苗族自治县\",\"value\":\"469029\"},{\"parent_id\":460000,\"label\":\"琼中黎族苗族自治县\",\"value\":\"469030\"},{\"parent_id\":0,\"label\":\"重庆\",\"value\":\"500000\"},{\"parent_id\":500000,\"label\":\"重庆市\",\"value\":\"500100\"},{\"parent_id\":500100,\"label\":\"万州区\",\"value\":\"500101\"},{\"parent_id\":500100,\"label\":\"涪陵区\",\"value\":\"500102\"},{\"parent_id\":500100,\"label\":\"渝中区\",\"value\":\"500103\"},{\"parent_id\":500100,\"label\":\"大渡口区\",\"value\":\"500104\"},{\"parent_id\":500100,\"label\":\"江北区\",\"value\":\"500105\"},{\"parent_id\":500100,\"label\":\"沙坪坝区\",\"value\":\"500106\"},{\"parent_id\":500100,\"label\":\"九龙坡区\",\"value\":\"500107\"},{\"parent_id\":500100,\"label\":\"南岸区\",\"value\":\"500108\"},{\"parent_id\":500100,\"label\":\"北碚区\",\"value\":\"500109\"},{\"parent_id\":500100,\"label\":\"綦江区\",\"value\":\"500110\"},{\"parent_id\":500100,\"label\":\"大足区\",\"value\":\"500111\"},{\"parent_id\":500100,\"label\":\"渝北区\",\"value\":\"500112\"},{\"parent_id\":500100,\"label\":\"巴南区\",\"value\":\"500113\"},{\"parent_id\":500100,\"label\":\"黔江区\",\"value\":\"500114\"},{\"parent_id\":500100,\"label\":\"长寿区\",\"value\":\"500115\"},{\"parent_id\":500100,\"label\":\"江津区\",\"value\":\"500116\"},{\"parent_id\":500100,\"label\":\"合川区\",\"value\":\"500117\"},{\"parent_id\":500100,\"label\":\"永川区\",\"value\":\"500118\"},{\"parent_id\":500100,\"label\":\"南川区\",\"value\":\"500119\"},{\"parent_id\":500100,\"label\":\"璧山区\",\"value\":\"500120\"},{\"parent_id\":500100,\"label\":\"铜梁区\",\"value\":\"500151\"},{\"parent_id\":500100,\"label\":\"潼南区\",\"value\":\"500152\"},{\"parent_id\":500100,\"label\":\"荣昌区\",\"value\":\"500153\"},{\"parent_id\":500100,\"label\":\"开州区\",\"value\":\"500154\"},{\"parent_id\":500000,\"label\":\"重庆郊县\",\"value\":\"500200\"},{\"parent_id\":500200,\"label\":\"梁平县\",\"value\":\"500228\"},{\"parent_id\":500200,\"label\":\"城口县\",\"value\":\"500229\"},{\"parent_id\":500200,\"label\":\"丰都县\",\"value\":\"500230\"},{\"parent_id\":500200,\"label\":\"垫江县\",\"value\":\"500231\"},{\"parent_id\":500200,\"label\":\"武隆县\",\"value\":\"500232\"},{\"parent_id\":500200,\"label\":\"忠县\",\"value\":\"500233\"},{\"parent_id\":500200,\"label\":\"云阳县\",\"value\":\"500235\"},{\"parent_id\":500200,\"label\":\"奉节县\",\"value\":\"500236\"},{\"parent_id\":500200,\"label\":\"巫山县\",\"value\":\"500237\"},{\"parent_id\":500200,\"label\":\"巫溪县\",\"value\":\"500238\"},{\"parent_id\":500200,\"label\":\"石柱土家族自治县\",\"value\":\"500240\"},{\"parent_id\":500200,\"label\":\"秀山土家族苗族自治县\",\"value\":\"500241\"},{\"parent_id\":500200,\"label\":\"酉阳土家族苗族自治县\",\"value\":\"500242\"},{\"parent_id\":500200,\"label\":\"彭水苗族土家族自治县\",\"value\":\"500243\"},{\"parent_id\":0,\"label\":\"四川省\",\"value\":\"510000\"},{\"parent_id\":510000,\"label\":\"成都市\",\"value\":\"510100\"},{\"parent_id\":510100,\"label\":\"锦江区\",\"value\":\"510104\"},{\"parent_id\":510100,\"label\":\"青羊区\",\"value\":\"510105\"},{\"parent_id\":510100,\"label\":\"金牛区\",\"value\":\"510106\"},{\"parent_id\":510100,\"label\":\"武侯区\",\"value\":\"510107\"},{\"parent_id\":510100,\"label\":\"成华区\",\"value\":\"510108\"},{\"parent_id\":510100,\"label\":\"龙泉驿区\",\"value\":\"510112\"},{\"parent_id\":510100,\"label\":\"青白江区\",\"value\":\"510113\"},{\"parent_id\":510100,\"label\":\"新都区\",\"value\":\"510114\"},{\"parent_id\":510100,\"label\":\"温江区\",\"value\":\"510115\"},{\"parent_id\":510100,\"label\":\"双流区\",\"value\":\"510116\"},{\"parent_id\":510100,\"label\":\"金堂县\",\"value\":\"510121\"},{\"parent_id\":510100,\"label\":\"郫县\",\"value\":\"510124\"},{\"parent_id\":510100,\"label\":\"大邑县\",\"value\":\"510129\"},{\"parent_id\":510100,\"label\":\"蒲江县\",\"value\":\"510131\"},{\"parent_id\":510100,\"label\":\"新津县\",\"value\":\"510132\"},{\"parent_id\":510100,\"label\":\"简阳市\",\"value\":\"510180\"},{\"parent_id\":510100,\"label\":\"都江堰市\",\"value\":\"510181\"},{\"parent_id\":510100,\"label\":\"彭州市\",\"value\":\"510182\"},{\"parent_id\":510100,\"label\":\"邛崃市\",\"value\":\"510183\"},{\"parent_id\":510100,\"label\":\"崇州市\",\"value\":\"510184\"},{\"parent_id\":510000,\"label\":\"自贡市\",\"value\":\"510300\"},{\"parent_id\":510300,\"label\":\"自流井区\",\"value\":\"510302\"},{\"parent_id\":510300,\"label\":\"贡井区\",\"value\":\"510303\"},{\"parent_id\":510300,\"label\":\"大安区\",\"value\":\"510304\"},{\"parent_id\":510300,\"label\":\"沿滩区\",\"value\":\"510311\"},{\"parent_id\":510300,\"label\":\"荣县\",\"value\":\"510321\"},{\"parent_id\":510300,\"label\":\"富顺县\",\"value\":\"510322\"},{\"parent_id\":510000,\"label\":\"攀枝花市\",\"value\":\"510400\"},{\"parent_id\":510400,\"label\":\"东区\",\"value\":\"510402\"},{\"parent_id\":510400,\"label\":\"西区\",\"value\":\"510403\"},{\"parent_id\":510400,\"label\":\"仁和区\",\"value\":\"510411\"},{\"parent_id\":510400,\"label\":\"米易县\",\"value\":\"510421\"},{\"parent_id\":510400,\"label\":\"盐边县\",\"value\":\"510422\"},{\"parent_id\":510000,\"label\":\"泸州市\",\"value\":\"510500\"},{\"parent_id\":510500,\"label\":\"江阳区\",\"value\":\"510502\"},{\"parent_id\":510500,\"label\":\"纳溪区\",\"value\":\"510503\"},{\"parent_id\":510500,\"label\":\"龙马潭区\",\"value\":\"510504\"},{\"parent_id\":510500,\"label\":\"泸县\",\"value\":\"510521\"},{\"parent_id\":510500,\"label\":\"合江县\",\"value\":\"510522\"},{\"parent_id\":510500,\"label\":\"叙永县\",\"value\":\"510524\"},{\"parent_id\":510500,\"label\":\"古蔺县\",\"value\":\"510525\"},{\"parent_id\":510000,\"label\":\"德阳市\",\"value\":\"510600\"},{\"parent_id\":510600,\"label\":\"旌阳区\",\"value\":\"510603\"},{\"parent_id\":510600,\"label\":\"中江县\",\"value\":\"510623\"},{\"parent_id\":510600,\"label\":\"罗江县\",\"value\":\"510626\"},{\"parent_id\":510600,\"label\":\"广汉市\",\"value\":\"510681\"},{\"parent_id\":510600,\"label\":\"什邡市\",\"value\":\"510682\"},{\"parent_id\":510600,\"label\":\"绵竹市\",\"value\":\"510683\"},{\"parent_id\":510000,\"label\":\"绵阳市\",\"value\":\"510700\"},{\"parent_id\":510700,\"label\":\"涪城区\",\"value\":\"510703\"},{\"parent_id\":510700,\"label\":\"游仙区\",\"value\":\"510704\"},{\"parent_id\":510700,\"label\":\"安州区\",\"value\":\"510705\"},{\"parent_id\":510700,\"label\":\"三台县\",\"value\":\"510722\"},{\"parent_id\":510700,\"label\":\"盐亭县\",\"value\":\"510723\"},{\"parent_id\":510700,\"label\":\"梓潼县\",\"value\":\"510725\"},{\"parent_id\":510700,\"label\":\"北川羌族自治县\",\"value\":\"510726\"},{\"parent_id\":510700,\"label\":\"平武县\",\"value\":\"510727\"},{\"parent_id\":510700,\"label\":\"江油市\",\"value\":\"510781\"},{\"parent_id\":510000,\"label\":\"广元市\",\"value\":\"510800\"},{\"parent_id\":510800,\"label\":\"利州区\",\"value\":\"510802\"},{\"parent_id\":510800,\"label\":\"元坝区\",\"value\":\"510811\"},{\"parent_id\":510800,\"label\":\"朝天区\",\"value\":\"510812\"},{\"parent_id\":510800,\"label\":\"旺苍县\",\"value\":\"510821\"},{\"parent_id\":510800,\"label\":\"青川县\",\"value\":\"510822\"},{\"parent_id\":510800,\"label\":\"剑阁县\",\"value\":\"510823\"},{\"parent_id\":510800,\"label\":\"苍溪县\",\"value\":\"510824\"},{\"parent_id\":510000,\"label\":\"遂宁市\",\"value\":\"510900\"},{\"parent_id\":510900,\"label\":\"船山区\",\"value\":\"510903\"},{\"parent_id\":510900,\"label\":\"安居区\",\"value\":\"510904\"},{\"parent_id\":510900,\"label\":\"蓬溪县\",\"value\":\"510921\"},{\"parent_id\":510900,\"label\":\"射洪县\",\"value\":\"510922\"},{\"parent_id\":510900,\"label\":\"大英县\",\"value\":\"510923\"},{\"parent_id\":510000,\"label\":\"内江市\",\"value\":\"511000\"},{\"parent_id\":511000,\"label\":\"市中区\",\"value\":\"511002\"},{\"parent_id\":511000,\"label\":\"东兴区\",\"value\":\"511011\"},{\"parent_id\":511000,\"label\":\"威远县\",\"value\":\"511024\"},{\"parent_id\":511000,\"label\":\"资中县\",\"value\":\"511025\"},{\"parent_id\":511000,\"label\":\"隆昌县\",\"value\":\"511028\"},{\"parent_id\":510000,\"label\":\"乐山市\",\"value\":\"511100\"},{\"parent_id\":511100,\"label\":\"市中区\",\"value\":\"511102\"},{\"parent_id\":511100,\"label\":\"沙湾区\",\"value\":\"511111\"},{\"parent_id\":511100,\"label\":\"五通桥区\",\"value\":\"511112\"},{\"parent_id\":511100,\"label\":\"金口河区\",\"value\":\"511113\"},{\"parent_id\":511100,\"label\":\"犍为县\",\"value\":\"511123\"},{\"parent_id\":511100,\"label\":\"井研县\",\"value\":\"511124\"},{\"parent_id\":511100,\"label\":\"夹江县\",\"value\":\"511126\"},{\"parent_id\":511100,\"label\":\"沐川县\",\"value\":\"511129\"},{\"parent_id\":511100,\"label\":\"峨边彝族自治县\",\"value\":\"511132\"},{\"parent_id\":511100,\"label\":\"马边彝族自治县\",\"value\":\"511133\"},{\"parent_id\":511100,\"label\":\"峨眉山市\",\"value\":\"511181\"},{\"parent_id\":510000,\"label\":\"南充市\",\"value\":\"511300\"},{\"parent_id\":511300,\"label\":\"顺庆区\",\"value\":\"511302\"},{\"parent_id\":511300,\"label\":\"高坪区\",\"value\":\"511303\"},{\"parent_id\":511300,\"label\":\"嘉陵区\",\"value\":\"511304\"},{\"parent_id\":511300,\"label\":\"南部县\",\"value\":\"511321\"},{\"parent_id\":511300,\"label\":\"营山县\",\"value\":\"511322\"},{\"parent_id\":511300,\"label\":\"蓬安县\",\"value\":\"511323\"},{\"parent_id\":511300,\"label\":\"仪陇县\",\"value\":\"511324\"},{\"parent_id\":511300,\"label\":\"西充县\",\"value\":\"511325\"},{\"parent_id\":511300,\"label\":\"阆中市\",\"value\":\"511381\"},{\"parent_id\":510000,\"label\":\"眉山市\",\"value\":\"511400\"},{\"parent_id\":511400,\"label\":\"东坡区\",\"value\":\"511402\"},{\"parent_id\":511400,\"label\":\"彭山区\",\"value\":\"511403\"},{\"parent_id\":511400,\"label\":\"仁寿县\",\"value\":\"511421\"},{\"parent_id\":511400,\"label\":\"洪雅县\",\"value\":\"511423\"},{\"parent_id\":511400,\"label\":\"丹棱县\",\"value\":\"511424\"},{\"parent_id\":511400,\"label\":\"青神县\",\"value\":\"511425\"},{\"parent_id\":510000,\"label\":\"宜宾市\",\"value\":\"511500\"},{\"parent_id\":511500,\"label\":\"翠屏区\",\"value\":\"511502\"},{\"parent_id\":511500,\"label\":\"南溪区\",\"value\":\"511503\"},{\"parent_id\":511500,\"label\":\"宜宾县\",\"value\":\"511521\"},{\"parent_id\":511500,\"label\":\"江安县\",\"value\":\"511523\"},{\"parent_id\":511500,\"label\":\"长宁县\",\"value\":\"511524\"},{\"parent_id\":511500,\"label\":\"高县\",\"value\":\"511525\"},{\"parent_id\":511500,\"label\":\"珙县\",\"value\":\"511526\"},{\"parent_id\":511500,\"label\":\"筠连县\",\"value\":\"511527\"},{\"parent_id\":511500,\"label\":\"兴文县\",\"value\":\"511528\"},{\"parent_id\":511500,\"label\":\"屏山县\",\"value\":\"511529\"},{\"parent_id\":510000,\"label\":\"广安市\",\"value\":\"511600\"},{\"parent_id\":511600,\"label\":\"广安区\",\"value\":\"511602\"},{\"parent_id\":511600,\"label\":\"前锋区\",\"value\":\"511603\"},{\"parent_id\":511600,\"label\":\"岳池县\",\"value\":\"511621\"},{\"parent_id\":511600,\"label\":\"武胜县\",\"value\":\"511622\"},{\"parent_id\":511600,\"label\":\"邻水县\",\"value\":\"511623\"},{\"parent_id\":511600,\"label\":\"华蓥市\",\"value\":\"511681\"},{\"parent_id\":510000,\"label\":\"达州市\",\"value\":\"511700\"},{\"parent_id\":511700,\"label\":\"通川区\",\"value\":\"511702\"},{\"parent_id\":511700,\"label\":\"达川区\",\"value\":\"511703\"},{\"parent_id\":511700,\"label\":\"宣汉县\",\"value\":\"511722\"},{\"parent_id\":511700,\"label\":\"开江县\",\"value\":\"511723\"},{\"parent_id\":511700,\"label\":\"大竹县\",\"value\":\"511724\"},{\"parent_id\":511700,\"label\":\"渠县\",\"value\":\"511725\"},{\"parent_id\":511700,\"label\":\"万源市\",\"value\":\"511781\"},{\"parent_id\":510000,\"label\":\"雅安市\",\"value\":\"511800\"},{\"parent_id\":511800,\"label\":\"雨城区\",\"value\":\"511802\"},{\"parent_id\":511800,\"label\":\"名山区\",\"value\":\"511803\"},{\"parent_id\":511800,\"label\":\"荥经县\",\"value\":\"511822\"},{\"parent_id\":511800,\"label\":\"汉源县\",\"value\":\"511823\"},{\"parent_id\":511800,\"label\":\"石棉县\",\"value\":\"511824\"},{\"parent_id\":511800,\"label\":\"天全县\",\"value\":\"511825\"},{\"parent_id\":511800,\"label\":\"芦山县\",\"value\":\"511826\"},{\"parent_id\":511800,\"label\":\"宝兴县\",\"value\":\"511827\"},{\"parent_id\":510000,\"label\":\"巴中市\",\"value\":\"511900\"},{\"parent_id\":511900,\"label\":\"巴州区\",\"value\":\"511902\"},{\"parent_id\":511900,\"label\":\"恩阳区\",\"value\":\"511903\"},{\"parent_id\":511900,\"label\":\"通江县\",\"value\":\"511921\"},{\"parent_id\":511900,\"label\":\"南江县\",\"value\":\"511922\"},{\"parent_id\":511900,\"label\":\"平昌县\",\"value\":\"511923\"},{\"parent_id\":510000,\"label\":\"资阳市\",\"value\":\"512000\"},{\"parent_id\":512000,\"label\":\"雁江区\",\"value\":\"512002\"},{\"parent_id\":512000,\"label\":\"安岳县\",\"value\":\"512021\"},{\"parent_id\":512000,\"label\":\"乐至县\",\"value\":\"512022\"},{\"parent_id\":510000,\"label\":\"阿坝藏族羌族自治州\",\"value\":\"513200\"},{\"parent_id\":513200,\"label\":\"马尔康市\",\"value\":\"513201\"},{\"parent_id\":513200,\"label\":\"汶川县\",\"value\":\"513221\"},{\"parent_id\":513200,\"label\":\"理县\",\"value\":\"513222\"},{\"parent_id\":513200,\"label\":\"茂县\",\"value\":\"513223\"},{\"parent_id\":513200,\"label\":\"松潘县\",\"value\":\"513224\"},{\"parent_id\":513200,\"label\":\"九寨沟县\",\"value\":\"513225\"},{\"parent_id\":513200,\"label\":\"金川县\",\"value\":\"513226\"},{\"parent_id\":513200,\"label\":\"小金县\",\"value\":\"513227\"},{\"parent_id\":513200,\"label\":\"黑水县\",\"value\":\"513228\"},{\"parent_id\":513200,\"label\":\"壤塘县\",\"value\":\"513230\"},{\"parent_id\":513200,\"label\":\"阿坝县\",\"value\":\"513231\"},{\"parent_id\":513200,\"label\":\"若尔盖县\",\"value\":\"513232\"},{\"parent_id\":513200,\"label\":\"红原县\",\"value\":\"513233\"},{\"parent_id\":510000,\"label\":\"甘孜藏族自治州\",\"value\":\"513300\"},{\"parent_id\":513300,\"label\":\"康定市\",\"value\":\"513301\"},{\"parent_id\":513300,\"label\":\"泸定县\",\"value\":\"513322\"},{\"parent_id\":513300,\"label\":\"丹巴县\",\"value\":\"513323\"},{\"parent_id\":513300,\"label\":\"九龙县\",\"value\":\"513324\"},{\"parent_id\":513300,\"label\":\"雅江县\",\"value\":\"513325\"},{\"parent_id\":513300,\"label\":\"道孚县\",\"value\":\"513326\"},{\"parent_id\":513300,\"label\":\"炉霍县\",\"value\":\"513327\"},{\"parent_id\":513300,\"label\":\"甘孜县\",\"value\":\"513328\"},{\"parent_id\":513300,\"label\":\"新龙县\",\"value\":\"513329\"},{\"parent_id\":513300,\"label\":\"德格县\",\"value\":\"513330\"},{\"parent_id\":513300,\"label\":\"白玉县\",\"value\":\"513331\"},{\"parent_id\":513300,\"label\":\"石渠县\",\"value\":\"513332\"},{\"parent_id\":513300,\"label\":\"色达县\",\"value\":\"513333\"},{\"parent_id\":513300,\"label\":\"理塘县\",\"value\":\"513334\"},{\"parent_id\":513300,\"label\":\"巴塘县\",\"value\":\"513335\"},{\"parent_id\":513300,\"label\":\"乡城县\",\"value\":\"513336\"},{\"parent_id\":513300,\"label\":\"稻城县\",\"value\":\"513337\"},{\"parent_id\":513300,\"label\":\"得荣县\",\"value\":\"513338\"},{\"parent_id\":510000,\"label\":\"凉山彝族自治州\",\"value\":\"513400\"},{\"parent_id\":513400,\"label\":\"西昌市\",\"value\":\"513401\"},{\"parent_id\":513400,\"label\":\"木里藏族自治县\",\"value\":\"513422\"},{\"parent_id\":513400,\"label\":\"盐源县\",\"value\":\"513423\"},{\"parent_id\":513400,\"label\":\"德昌县\",\"value\":\"513424\"},{\"parent_id\":513400,\"label\":\"会理县\",\"value\":\"513425\"},{\"parent_id\":513400,\"label\":\"会东县\",\"value\":\"513426\"},{\"parent_id\":513400,\"label\":\"宁南县\",\"value\":\"513427\"},{\"parent_id\":513400,\"label\":\"普格县\",\"value\":\"513428\"},{\"parent_id\":513400,\"label\":\"布拖县\",\"value\":\"513429\"},{\"parent_id\":513400,\"label\":\"金阳县\",\"value\":\"513430\"},{\"parent_id\":513400,\"label\":\"昭觉县\",\"value\":\"513431\"},{\"parent_id\":513400,\"label\":\"喜德县\",\"value\":\"513432\"},{\"parent_id\":513400,\"label\":\"冕宁县\",\"value\":\"513433\"},{\"parent_id\":513400,\"label\":\"越西县\",\"value\":\"513434\"},{\"parent_id\":513400,\"label\":\"甘洛县\",\"value\":\"513435\"},{\"parent_id\":513400,\"label\":\"美姑县\",\"value\":\"513436\"},{\"parent_id\":513400,\"label\":\"雷波县\",\"value\":\"513437\"},{\"parent_id\":0,\"label\":\"贵州省\",\"value\":\"520000\"},{\"parent_id\":520000,\"label\":\"贵阳市\",\"value\":\"520100\"},{\"parent_id\":520100,\"label\":\"南明区\",\"value\":\"520102\"},{\"parent_id\":520100,\"label\":\"云岩区\",\"value\":\"520103\"},{\"parent_id\":520100,\"label\":\"花溪区\",\"value\":\"520111\"},{\"parent_id\":520100,\"label\":\"乌当区\",\"value\":\"520112\"},{\"parent_id\":520100,\"label\":\"白云区\",\"value\":\"520113\"},{\"parent_id\":520100,\"label\":\"观山湖区\",\"value\":\"520115\"},{\"parent_id\":520100,\"label\":\"开阳县\",\"value\":\"520121\"},{\"parent_id\":520100,\"label\":\"息烽县\",\"value\":\"520122\"},{\"parent_id\":520100,\"label\":\"修文县\",\"value\":\"520123\"},{\"parent_id\":520100,\"label\":\"清镇市\",\"value\":\"520181\"},{\"parent_id\":520000,\"label\":\"六盘水市\",\"value\":\"520200\"},{\"parent_id\":520200,\"label\":\"钟山区\",\"value\":\"520201\"},{\"parent_id\":520200,\"label\":\"六枝特区\",\"value\":\"520203\"},{\"parent_id\":520200,\"label\":\"水城县\",\"value\":\"520221\"},{\"parent_id\":520200,\"label\":\"盘县\",\"value\":\"520222\"},{\"parent_id\":520000,\"label\":\"遵义市\",\"value\":\"520300\"},{\"parent_id\":520300,\"label\":\"红花岗区\",\"value\":\"520302\"},{\"parent_id\":520300,\"label\":\"汇川区\",\"value\":\"520303\"},{\"parent_id\":520300,\"label\":\"播州区\",\"value\":\"520304\"},{\"parent_id\":520300,\"label\":\"桐梓县\",\"value\":\"520322\"},{\"parent_id\":520300,\"label\":\"绥阳县\",\"value\":\"520323\"},{\"parent_id\":520300,\"label\":\"正安县\",\"value\":\"520324\"},{\"parent_id\":520300,\"label\":\"道真仡佬族苗族自治县\",\"value\":\"520325\"},{\"parent_id\":520300,\"label\":\"务川仡佬族苗族自治县\",\"value\":\"520326\"},{\"parent_id\":520300,\"label\":\"凤冈县\",\"value\":\"520327\"},{\"parent_id\":520300,\"label\":\"湄潭县\",\"value\":\"520328\"},{\"parent_id\":520300,\"label\":\"余庆县\",\"value\":\"520329\"},{\"parent_id\":520300,\"label\":\"习水县\",\"value\":\"520330\"},{\"parent_id\":520300,\"label\":\"赤水市\",\"value\":\"520381\"},{\"parent_id\":520300,\"label\":\"仁怀市\",\"value\":\"520382\"},{\"parent_id\":520000,\"label\":\"安顺市\",\"value\":\"520400\"},{\"parent_id\":520400,\"label\":\"西秀区\",\"value\":\"520402\"},{\"parent_id\":520400,\"label\":\"平坝区\",\"value\":\"520403\"},{\"parent_id\":520400,\"label\":\"普定县\",\"value\":\"520422\"},{\"parent_id\":520400,\"label\":\"镇宁布依族苗族自治县\",\"value\":\"520423\"},{\"parent_id\":520400,\"label\":\"关岭布依族苗族自治县\",\"value\":\"520424\"},{\"parent_id\":520400,\"label\":\"紫云苗族布依族自治县\",\"value\":\"520425\"},{\"parent_id\":520000,\"label\":\"毕节市\",\"value\":\"520500\"},{\"parent_id\":520500,\"label\":\"七星关区\",\"value\":\"520502\"},{\"parent_id\":520500,\"label\":\"大方县\",\"value\":\"520521\"},{\"parent_id\":520500,\"label\":\"黔西县\",\"value\":\"520522\"},{\"parent_id\":520500,\"label\":\"金沙县\",\"value\":\"520523\"},{\"parent_id\":520500,\"label\":\"织金县\",\"value\":\"520524\"},{\"parent_id\":520500,\"label\":\"纳雍县\",\"value\":\"520525\"},{\"parent_id\":520500,\"label\":\"威宁彝族回族苗族自治县\",\"value\":\"520526\"},{\"parent_id\":520500,\"label\":\"赫章县\",\"value\":\"520527\"},{\"parent_id\":520000,\"label\":\"铜仁市\",\"value\":\"520600\"},{\"parent_id\":520600,\"label\":\"碧江区\",\"value\":\"520602\"},{\"parent_id\":520600,\"label\":\"万山区\",\"value\":\"520603\"},{\"parent_id\":520600,\"label\":\"江口县\",\"value\":\"520621\"},{\"parent_id\":520600,\"label\":\"玉屏侗族自治县\",\"value\":\"520622\"},{\"parent_id\":520600,\"label\":\"石阡县\",\"value\":\"520623\"},{\"parent_id\":520600,\"label\":\"思南县\",\"value\":\"520624\"},{\"parent_id\":520600,\"label\":\"印江土家族苗族自治县\",\"value\":\"520625\"},{\"parent_id\":520600,\"label\":\"德江县\",\"value\":\"520626\"},{\"parent_id\":520600,\"label\":\"沿河土家族自治县\",\"value\":\"520627\"},{\"parent_id\":520600,\"label\":\"松桃苗族自治县\",\"value\":\"520628\"},{\"parent_id\":520000,\"label\":\"黔西南布依族苗族自治州\",\"value\":\"522300\"},{\"parent_id\":522300,\"label\":\"兴义市\",\"value\":\"522301\"},{\"parent_id\":522300,\"label\":\"兴仁县\",\"value\":\"522322\"},{\"parent_id\":522300,\"label\":\"普安县\",\"value\":\"522323\"},{\"parent_id\":522300,\"label\":\"晴隆县\",\"value\":\"522324\"},{\"parent_id\":522300,\"label\":\"贞丰县\",\"value\":\"522325\"},{\"parent_id\":522300,\"label\":\"望谟县\",\"value\":\"522326\"},{\"parent_id\":522300,\"label\":\"册亨县\",\"value\":\"522327\"},{\"parent_id\":522300,\"label\":\"安龙县\",\"value\":\"522328\"},{\"parent_id\":520000,\"label\":\"黔东南苗族侗族自治州\",\"value\":\"522600\"},{\"parent_id\":522600,\"label\":\"凯里市\",\"value\":\"522601\"},{\"parent_id\":522600,\"label\":\"黄平县\",\"value\":\"522622\"},{\"parent_id\":522600,\"label\":\"施秉县\",\"value\":\"522623\"},{\"parent_id\":522600,\"label\":\"三穗县\",\"value\":\"522624\"},{\"parent_id\":522600,\"label\":\"镇远县\",\"value\":\"522625\"},{\"parent_id\":522600,\"label\":\"岑巩县\",\"value\":\"522626\"},{\"parent_id\":522600,\"label\":\"天柱县\",\"value\":\"522627\"},{\"parent_id\":522600,\"label\":\"锦屏县\",\"value\":\"522628\"},{\"parent_id\":522600,\"label\":\"剑河县\",\"value\":\"522629\"},{\"parent_id\":522600,\"label\":\"台江县\",\"value\":\"522630\"},{\"parent_id\":522600,\"label\":\"黎平县\",\"value\":\"522631\"},{\"parent_id\":522600,\"label\":\"榕江县\",\"value\":\"522632\"},{\"parent_id\":522600,\"label\":\"从江县\",\"value\":\"522633\"},{\"parent_id\":522600,\"label\":\"雷山县\",\"value\":\"522634\"},{\"parent_id\":522600,\"label\":\"麻江县\",\"value\":\"522635\"},{\"parent_id\":522600,\"label\":\"丹寨县\",\"value\":\"522636\"},{\"parent_id\":520000,\"label\":\"黔南布依族苗族自治州\",\"value\":\"522700\"},{\"parent_id\":522700,\"label\":\"都匀市\",\"value\":\"522701\"},{\"parent_id\":522700,\"label\":\"福泉市\",\"value\":\"522702\"},{\"parent_id\":522700,\"label\":\"荔波县\",\"value\":\"522722\"},{\"parent_id\":522700,\"label\":\"贵定县\",\"value\":\"522723\"},{\"parent_id\":522700,\"label\":\"瓮安县\",\"value\":\"522725\"},{\"parent_id\":522700,\"label\":\"独山县\",\"value\":\"522726\"},{\"parent_id\":522700,\"label\":\"平塘县\",\"value\":\"522727\"},{\"parent_id\":522700,\"label\":\"罗甸县\",\"value\":\"522728\"},{\"parent_id\":522700,\"label\":\"长顺县\",\"value\":\"522729\"},{\"parent_id\":522700,\"label\":\"龙里县\",\"value\":\"522730\"},{\"parent_id\":522700,\"label\":\"惠水县\",\"value\":\"522731\"},{\"parent_id\":522700,\"label\":\"三都水族自治县\",\"value\":\"522732\"},{\"parent_id\":0,\"label\":\"云南省\",\"value\":\"530000\"},{\"parent_id\":530000,\"label\":\"昆明市\",\"value\":\"530100\"},{\"parent_id\":530100,\"label\":\"五华区\",\"value\":\"530102\"},{\"parent_id\":530100,\"label\":\"盘龙区\",\"value\":\"530103\"},{\"parent_id\":530100,\"label\":\"官渡区\",\"value\":\"530111\"},{\"parent_id\":530100,\"label\":\"西山区\",\"value\":\"530112\"},{\"parent_id\":530100,\"label\":\"东川区\",\"value\":\"530113\"},{\"parent_id\":530100,\"label\":\"呈贡区\",\"value\":\"530114\"},{\"parent_id\":530100,\"label\":\"晋宁县\",\"value\":\"530122\"},{\"parent_id\":530100,\"label\":\"富民县\",\"value\":\"530124\"},{\"parent_id\":530100,\"label\":\"宜良县\",\"value\":\"530125\"},{\"parent_id\":530100,\"label\":\"石林彝族自治县\",\"value\":\"530126\"},{\"parent_id\":530100,\"label\":\"嵩明县\",\"value\":\"530127\"},{\"parent_id\":530100,\"label\":\"禄劝彝族苗族自治县\",\"value\":\"530128\"},{\"parent_id\":530100,\"label\":\"寻甸回族彝族自治县\",\"value\":\"530129\"},{\"parent_id\":530100,\"label\":\"安宁市\",\"value\":\"530181\"},{\"parent_id\":530000,\"label\":\"曲靖市\",\"value\":\"530300\"},{\"parent_id\":530300,\"label\":\"麒麟区\",\"value\":\"530302\"},{\"parent_id\":530300,\"label\":\"沾益区\",\"value\":\"530303\"},{\"parent_id\":530300,\"label\":\"马龙县\",\"value\":\"530321\"},{\"parent_id\":530300,\"label\":\"陆良县\",\"value\":\"530322\"},{\"parent_id\":530300,\"label\":\"师宗县\",\"value\":\"530323\"},{\"parent_id\":530300,\"label\":\"罗平县\",\"value\":\"530324\"},{\"parent_id\":530300,\"label\":\"富源县\",\"value\":\"530325\"},{\"parent_id\":530300,\"label\":\"会泽县\",\"value\":\"530326\"},{\"parent_id\":530300,\"label\":\"宣威市\",\"value\":\"530381\"},{\"parent_id\":530000,\"label\":\"玉溪市\",\"value\":\"530400\"},{\"parent_id\":530400,\"label\":\"红塔区\",\"value\":\"530402\"},{\"parent_id\":530400,\"label\":\"江川区\",\"value\":\"530403\"},{\"parent_id\":530400,\"label\":\"澄江县\",\"value\":\"530422\"},{\"parent_id\":530400,\"label\":\"通海县\",\"value\":\"530423\"},{\"parent_id\":530400,\"label\":\"华宁县\",\"value\":\"530424\"},{\"parent_id\":530400,\"label\":\"易门县\",\"value\":\"530425\"},{\"parent_id\":530400,\"label\":\"峨山彝族自治县\",\"value\":\"530426\"},{\"parent_id\":530400,\"label\":\"新平彝族傣族自治县\",\"value\":\"530427\"},{\"parent_id\":530400,\"label\":\"元江哈尼族彝族傣族自治县\",\"value\":\"530428\"},{\"parent_id\":530000,\"label\":\"保山市\",\"value\":\"530500\"},{\"parent_id\":530500,\"label\":\"隆阳区\",\"value\":\"530502\"},{\"parent_id\":530500,\"label\":\"施甸县\",\"value\":\"530521\"},{\"parent_id\":530500,\"label\":\"龙陵县\",\"value\":\"530523\"},{\"parent_id\":530500,\"label\":\"昌宁县\",\"value\":\"530524\"},{\"parent_id\":530500,\"label\":\"腾冲市\",\"value\":\"530581\"},{\"parent_id\":530000,\"label\":\"昭通市\",\"value\":\"530600\"},{\"parent_id\":530600,\"label\":\"昭阳区\",\"value\":\"530602\"},{\"parent_id\":530600,\"label\":\"鲁甸县\",\"value\":\"530621\"},{\"parent_id\":530600,\"label\":\"巧家县\",\"value\":\"530622\"},{\"parent_id\":530600,\"label\":\"盐津县\",\"value\":\"530623\"},{\"parent_id\":530600,\"label\":\"大关县\",\"value\":\"530624\"},{\"parent_id\":530600,\"label\":\"永善县\",\"value\":\"530625\"},{\"parent_id\":530600,\"label\":\"绥江县\",\"value\":\"530626\"},{\"parent_id\":530600,\"label\":\"镇雄县\",\"value\":\"530627\"},{\"parent_id\":530600,\"label\":\"彝良县\",\"value\":\"530628\"},{\"parent_id\":530600,\"label\":\"威信县\",\"value\":\"530629\"},{\"parent_id\":530600,\"label\":\"水富县\",\"value\":\"530630\"},{\"parent_id\":530000,\"label\":\"丽江市\",\"value\":\"530700\"},{\"parent_id\":530700,\"label\":\"古城区\",\"value\":\"530702\"},{\"parent_id\":530700,\"label\":\"玉龙纳西族自治县\",\"value\":\"530721\"},{\"parent_id\":530700,\"label\":\"永胜县\",\"value\":\"530722\"},{\"parent_id\":530700,\"label\":\"华坪县\",\"value\":\"530723\"},{\"parent_id\":530700,\"label\":\"宁蒗彝族自治县\",\"value\":\"530724\"},{\"parent_id\":530000,\"label\":\"普洱市\",\"value\":\"530800\"},{\"parent_id\":530800,\"label\":\"思茅区\",\"value\":\"530802\"},{\"parent_id\":530800,\"label\":\"宁洱哈尼族彝族自治县\",\"value\":\"530821\"},{\"parent_id\":530800,\"label\":\"墨江哈尼族自治县\",\"value\":\"530822\"},{\"parent_id\":530800,\"label\":\"景东彝族自治县\",\"value\":\"530823\"},{\"parent_id\":530800,\"label\":\"景谷傣族彝族自治县\",\"value\":\"530824\"},{\"parent_id\":530800,\"label\":\"镇沅彝族哈尼族拉祜族自治县\",\"value\":\"530825\"},{\"parent_id\":530800,\"label\":\"江城哈尼族彝族自治县\",\"value\":\"530826\"},{\"parent_id\":530800,\"label\":\"孟连傣族拉祜族佤族自治县\",\"value\":\"530827\"},{\"parent_id\":530800,\"label\":\"澜沧拉祜族自治县\",\"value\":\"530828\"},{\"parent_id\":530800,\"label\":\"西盟佤族自治县\",\"value\":\"530829\"},{\"parent_id\":530000,\"label\":\"临沧市\",\"value\":\"530900\"},{\"parent_id\":530900,\"label\":\"临翔区\",\"value\":\"530902\"},{\"parent_id\":530900,\"label\":\"凤庆县\",\"value\":\"530921\"},{\"parent_id\":530900,\"label\":\"云县\",\"value\":\"530922\"},{\"parent_id\":530900,\"label\":\"永德县\",\"value\":\"530923\"},{\"parent_id\":530900,\"label\":\"镇康县\",\"value\":\"530924\"},{\"parent_id\":530900,\"label\":\"双江拉祜族佤族布朗族傣族自治县\",\"value\":\"530925\"},{\"parent_id\":530900,\"label\":\"耿马傣族佤族自治县\",\"value\":\"530926\"},{\"parent_id\":530900,\"label\":\"沧源佤族自治县\",\"value\":\"530927\"},{\"parent_id\":530000,\"label\":\"楚雄彝族自治州\",\"value\":\"532300\"},{\"parent_id\":532300,\"label\":\"楚雄市\",\"value\":\"532301\"},{\"parent_id\":532300,\"label\":\"双柏县\",\"value\":\"532322\"},{\"parent_id\":532300,\"label\":\"牟定县\",\"value\":\"532323\"},{\"parent_id\":532300,\"label\":\"南华县\",\"value\":\"532324\"},{\"parent_id\":532300,\"label\":\"姚安县\",\"value\":\"532325\"},{\"parent_id\":532300,\"label\":\"大姚县\",\"value\":\"532326\"},{\"parent_id\":532300,\"label\":\"永仁县\",\"value\":\"532327\"},{\"parent_id\":532300,\"label\":\"元谋县\",\"value\":\"532328\"},{\"parent_id\":532300,\"label\":\"武定县\",\"value\":\"532329\"},{\"parent_id\":532300,\"label\":\"禄丰县\",\"value\":\"532331\"},{\"parent_id\":530000,\"label\":\"红河哈尼族彝族自治州\",\"value\":\"532500\"},{\"parent_id\":532500,\"label\":\"个旧市\",\"value\":\"532501\"},{\"parent_id\":532500,\"label\":\"开远市\",\"value\":\"532502\"},{\"parent_id\":532500,\"label\":\"蒙自市\",\"value\":\"532503\"},{\"parent_id\":532500,\"label\":\"弥勒市\",\"value\":\"532504\"},{\"parent_id\":532500,\"label\":\"屏边苗族自治县\",\"value\":\"532523\"},{\"parent_id\":532500,\"label\":\"建水县\",\"value\":\"532524\"},{\"parent_id\":532500,\"label\":\"石屏县\",\"value\":\"532525\"},{\"parent_id\":532500,\"label\":\"泸西县\",\"value\":\"532527\"},{\"parent_id\":532500,\"label\":\"元阳县\",\"value\":\"532528\"},{\"parent_id\":532500,\"label\":\"红河县\",\"value\":\"532529\"},{\"parent_id\":532500,\"label\":\"金平苗族瑶族傣族自治县\",\"value\":\"532530\"},{\"parent_id\":532500,\"label\":\"绿春县\",\"value\":\"532531\"},{\"parent_id\":532500,\"label\":\"河口瑶族自治县\",\"value\":\"532532\"},{\"parent_id\":530000,\"label\":\"文山壮族苗族自治州\",\"value\":\"532600\"},{\"parent_id\":532600,\"label\":\"文山市\",\"value\":\"532601\"},{\"parent_id\":532600,\"label\":\"砚山县\",\"value\":\"532622\"},{\"parent_id\":532600,\"label\":\"西畴县\",\"value\":\"532623\"},{\"parent_id\":532600,\"label\":\"麻栗坡县\",\"value\":\"532624\"},{\"parent_id\":532600,\"label\":\"马关县\",\"value\":\"532625\"},{\"parent_id\":532600,\"label\":\"丘北县\",\"value\":\"532626\"},{\"parent_id\":532600,\"label\":\"广南县\",\"value\":\"532627\"},{\"parent_id\":532600,\"label\":\"富宁县\",\"value\":\"532628\"},{\"parent_id\":530000,\"label\":\"西双版纳傣族自治州\",\"value\":\"532800\"},{\"parent_id\":532800,\"label\":\"景洪市\",\"value\":\"532801\"},{\"parent_id\":532800,\"label\":\"勐海县\",\"value\":\"532822\"},{\"parent_id\":532800,\"label\":\"勐腊县\",\"value\":\"532823\"},{\"parent_id\":530000,\"label\":\"大理白族自治州\",\"value\":\"532900\"},{\"parent_id\":532900,\"label\":\"大理市\",\"value\":\"532901\"},{\"parent_id\":532900,\"label\":\"漾濞彝族自治县\",\"value\":\"532922\"},{\"parent_id\":532900,\"label\":\"祥云县\",\"value\":\"532923\"},{\"parent_id\":532900,\"label\":\"宾川县\",\"value\":\"532924\"},{\"parent_id\":532900,\"label\":\"弥渡县\",\"value\":\"532925\"},{\"parent_id\":532900,\"label\":\"南涧彝族自治县\",\"value\":\"532926\"},{\"parent_id\":532900,\"label\":\"巍山彝族回族自治县\",\"value\":\"532927\"},{\"parent_id\":532900,\"label\":\"永平县\",\"value\":\"532928\"},{\"parent_id\":532900,\"label\":\"云龙县\",\"value\":\"532929\"},{\"parent_id\":532900,\"label\":\"洱源县\",\"value\":\"532930\"},{\"parent_id\":532900,\"label\":\"剑川县\",\"value\":\"532931\"},{\"parent_id\":532900,\"label\":\"鹤庆县\",\"value\":\"532932\"},{\"parent_id\":530000,\"label\":\"德宏傣族景颇族自治州\",\"value\":\"533100\"},{\"parent_id\":533100,\"label\":\"瑞丽市\",\"value\":\"533102\"},{\"parent_id\":533100,\"label\":\"芒市\",\"value\":\"533103\"},{\"parent_id\":533100,\"label\":\"梁河县\",\"value\":\"533122\"},{\"parent_id\":533100,\"label\":\"盈江县\",\"value\":\"533123\"},{\"parent_id\":533100,\"label\":\"陇川县\",\"value\":\"533124\"},{\"parent_id\":530000,\"label\":\"怒江傈僳族自治州\",\"value\":\"533300\"},{\"parent_id\":533300,\"label\":\"泸水市\",\"value\":\"533301\"},{\"parent_id\":533300,\"label\":\"福贡县\",\"value\":\"533323\"},{\"parent_id\":533300,\"label\":\"贡山独龙族怒族自治县\",\"value\":\"533324\"},{\"parent_id\":533300,\"label\":\"兰坪白族普米族自治县\",\"value\":\"533325\"},{\"parent_id\":530000,\"label\":\"迪庆藏族自治州\",\"value\":\"533400\"},{\"parent_id\":533400,\"label\":\"香格里拉市\",\"value\":\"533401\"},{\"parent_id\":533400,\"label\":\"德钦县\",\"value\":\"533422\"},{\"parent_id\":533400,\"label\":\"维西傈僳族自治县\",\"value\":\"533423\"},{\"parent_id\":0,\"label\":\"西藏自治区\",\"value\":\"540000\"},{\"parent_id\":540000,\"label\":\"拉萨市\",\"value\":\"540100\"},{\"parent_id\":540100,\"label\":\"城关区\",\"value\":\"540102\"},{\"parent_id\":540100,\"label\":\"堆龙德庆区\",\"value\":\"540103\"},{\"parent_id\":540100,\"label\":\"林周县\",\"value\":\"540121\"},{\"parent_id\":540100,\"label\":\"当雄县\",\"value\":\"540122\"},{\"parent_id\":540100,\"label\":\"尼木县\",\"value\":\"540123\"},{\"parent_id\":540100,\"label\":\"曲水县\",\"value\":\"540124\"},{\"parent_id\":540100,\"label\":\"达孜县\",\"value\":\"540126\"},{\"parent_id\":540100,\"label\":\"墨竹工卡县\",\"value\":\"540127\"},{\"parent_id\":540000,\"label\":\"日喀则市\",\"value\":\"540200\"},{\"parent_id\":540200,\"label\":\"桑珠孜区\",\"value\":\"540202\"},{\"parent_id\":540200,\"label\":\"南木林县\",\"value\":\"540221\"},{\"parent_id\":540200,\"label\":\"江孜县\",\"value\":\"540222\"},{\"parent_id\":540200,\"label\":\"定日县\",\"value\":\"540223\"},{\"parent_id\":540200,\"label\":\"萨迦县\",\"value\":\"540224\"},{\"parent_id\":540200,\"label\":\"拉孜县\",\"value\":\"540225\"},{\"parent_id\":540200,\"label\":\"昂仁县\",\"value\":\"540226\"},{\"parent_id\":540200,\"label\":\"谢通门县\",\"value\":\"540227\"},{\"parent_id\":540200,\"label\":\"白朗县\",\"value\":\"540228\"},{\"parent_id\":540200,\"label\":\"仁布县\",\"value\":\"540229\"},{\"parent_id\":540200,\"label\":\"康马县\",\"value\":\"540230\"},{\"parent_id\":540200,\"label\":\"定结县\",\"value\":\"540231\"},{\"parent_id\":540200,\"label\":\"仲巴县\",\"value\":\"540232\"},{\"parent_id\":540200,\"label\":\"亚东县\",\"value\":\"540233\"},{\"parent_id\":540200,\"label\":\"吉隆县\",\"value\":\"540234\"},{\"parent_id\":540200,\"label\":\"聂拉木县\",\"value\":\"540235\"},{\"parent_id\":540200,\"label\":\"萨嘎县\",\"value\":\"540236\"},{\"parent_id\":540200,\"label\":\"岗巴县\",\"value\":\"540237\"},{\"parent_id\":540000,\"label\":\"昌都市\",\"value\":\"540300\"},{\"parent_id\":540300,\"label\":\"卡若区\",\"value\":\"540302\"},{\"parent_id\":540300,\"label\":\"江达县\",\"value\":\"540321\"},{\"parent_id\":540300,\"label\":\"贡觉县\",\"value\":\"540322\"},{\"parent_id\":540300,\"label\":\"类乌齐县\",\"value\":\"540323\"},{\"parent_id\":540300,\"label\":\"丁青县\",\"value\":\"540324\"},{\"parent_id\":540300,\"label\":\"察雅县\",\"value\":\"540325\"},{\"parent_id\":540300,\"label\":\"八宿县\",\"value\":\"540326\"},{\"parent_id\":540300,\"label\":\"左贡县\",\"value\":\"540327\"},{\"parent_id\":540300,\"label\":\"芒康县\",\"value\":\"540328\"},{\"parent_id\":540300,\"label\":\"洛隆县\",\"value\":\"540329\"},{\"parent_id\":540300,\"label\":\"边坝县\",\"value\":\"540330\"},{\"parent_id\":540000,\"label\":\"林芝市\",\"value\":\"540400\"},{\"parent_id\":540400,\"label\":\"巴宜区\",\"value\":\"540402\"},{\"parent_id\":540400,\"label\":\"工布江达县\",\"value\":\"540421\"},{\"parent_id\":540400,\"label\":\"米林县\",\"value\":\"540422\"},{\"parent_id\":540400,\"label\":\"墨脱县\",\"value\":\"540423\"},{\"parent_id\":540400,\"label\":\"波密县\",\"value\":\"540424\"},{\"parent_id\":540400,\"label\":\"察隅县\",\"value\":\"540425\"},{\"parent_id\":540400,\"label\":\"朗县\",\"value\":\"540426\"},{\"parent_id\":540000,\"label\":\"山南市\",\"value\":\"540500\"},{\"parent_id\":540500,\"label\":\"乃东区\",\"value\":\"540502\"},{\"parent_id\":540500,\"label\":\"扎囊县\",\"value\":\"540521\"},{\"parent_id\":540500,\"label\":\"贡嘎县\",\"value\":\"540522\"},{\"parent_id\":540500,\"label\":\"桑日县\",\"value\":\"540523\"},{\"parent_id\":540500,\"label\":\"琼结县\",\"value\":\"540524\"},{\"parent_id\":540500,\"label\":\"曲松县\",\"value\":\"540525\"},{\"parent_id\":540500,\"label\":\"措美县\",\"value\":\"540526\"},{\"parent_id\":540500,\"label\":\"洛扎县\",\"value\":\"540527\"},{\"parent_id\":540500,\"label\":\"加查县\",\"value\":\"540528\"},{\"parent_id\":540500,\"label\":\"隆子县\",\"value\":\"540529\"},{\"parent_id\":540500,\"label\":\"错那县\",\"value\":\"540530\"},{\"parent_id\":540500,\"label\":\"浪卡子县\",\"value\":\"540531\"},{\"parent_id\":540000,\"label\":\"那曲地区\",\"value\":\"542400\"},{\"parent_id\":542400,\"label\":\"那曲县\",\"value\":\"542421\"},{\"parent_id\":542400,\"label\":\"嘉黎县\",\"value\":\"542422\"},{\"parent_id\":542400,\"label\":\"比如县\",\"value\":\"542423\"},{\"parent_id\":542400,\"label\":\"聂荣县\",\"value\":\"542424\"},{\"parent_id\":542400,\"label\":\"安多县\",\"value\":\"542425\"},{\"parent_id\":542400,\"label\":\"申扎县\",\"value\":\"542426\"},{\"parent_id\":542400,\"label\":\"索县\",\"value\":\"542427\"},{\"parent_id\":542400,\"label\":\"班戈县\",\"value\":\"542428\"},{\"parent_id\":542400,\"label\":\"巴青县\",\"value\":\"542429\"},{\"parent_id\":542400,\"label\":\"尼玛县\",\"value\":\"542430\"},{\"parent_id\":542400,\"label\":\"双湖县\",\"value\":\"542431\"},{\"parent_id\":540000,\"label\":\"阿里地区\",\"value\":\"542500\"},{\"parent_id\":542500,\"label\":\"普兰县\",\"value\":\"542521\"},{\"parent_id\":542500,\"label\":\"札达县\",\"value\":\"542522\"},{\"parent_id\":542500,\"label\":\"噶尔县\",\"value\":\"542523\"},{\"parent_id\":542500,\"label\":\"日土县\",\"value\":\"542524\"},{\"parent_id\":542500,\"label\":\"革吉县\",\"value\":\"542525\"},{\"parent_id\":542500,\"label\":\"改则县\",\"value\":\"542526\"},{\"parent_id\":542500,\"label\":\"措勤县\",\"value\":\"542527\"},{\"parent_id\":0,\"label\":\"陕西省\",\"value\":\"610000\"},{\"parent_id\":610000,\"label\":\"西安市\",\"value\":\"610100\"},{\"parent_id\":610100,\"label\":\"新城区\",\"value\":\"610102\"},{\"parent_id\":610100,\"label\":\"碑林区\",\"value\":\"610103\"},{\"parent_id\":610100,\"label\":\"莲湖区\",\"value\":\"610104\"},{\"parent_id\":610100,\"label\":\"灞桥区\",\"value\":\"610111\"},{\"parent_id\":610100,\"label\":\"未央区\",\"value\":\"610112\"},{\"parent_id\":610100,\"label\":\"雁塔区\",\"value\":\"610113\"},{\"parent_id\":610100,\"label\":\"阎良区\",\"value\":\"610114\"},{\"parent_id\":610100,\"label\":\"临潼区\",\"value\":\"610115\"},{\"parent_id\":610100,\"label\":\"长安区\",\"value\":\"610116\"},{\"parent_id\":610100,\"label\":\"高陵区\",\"value\":\"610117\"},{\"parent_id\":610100,\"label\":\"蓝田县\",\"value\":\"610122\"},{\"parent_id\":610100,\"label\":\"周至县\",\"value\":\"610124\"},{\"parent_id\":610100,\"label\":\"户县\",\"value\":\"610125\"},{\"parent_id\":610000,\"label\":\"铜川市\",\"value\":\"610200\"},{\"parent_id\":610200,\"label\":\"王益区\",\"value\":\"610202\"},{\"parent_id\":610200,\"label\":\"印台区\",\"value\":\"610203\"},{\"parent_id\":610200,\"label\":\"耀州区\",\"value\":\"610204\"},{\"parent_id\":610200,\"label\":\"宜君县\",\"value\":\"610222\"},{\"parent_id\":610000,\"label\":\"宝鸡市\",\"value\":\"610300\"},{\"parent_id\":610300,\"label\":\"渭滨区\",\"value\":\"610302\"},{\"parent_id\":610300,\"label\":\"金台区\",\"value\":\"610303\"},{\"parent_id\":610300,\"label\":\"陈仓区\",\"value\":\"610304\"},{\"parent_id\":610300,\"label\":\"凤翔县\",\"value\":\"610322\"},{\"parent_id\":610300,\"label\":\"岐山县\",\"value\":\"610323\"},{\"parent_id\":610300,\"label\":\"扶风县\",\"value\":\"610324\"},{\"parent_id\":610300,\"label\":\"眉县\",\"value\":\"610326\"},{\"parent_id\":610300,\"label\":\"陇县\",\"value\":\"610327\"},{\"parent_id\":610300,\"label\":\"千阳县\",\"value\":\"610328\"},{\"parent_id\":610300,\"label\":\"麟游县\",\"value\":\"610329\"},{\"parent_id\":610300,\"label\":\"凤县\",\"value\":\"610330\"},{\"parent_id\":610300,\"label\":\"太白县\",\"value\":\"610331\"},{\"parent_id\":610000,\"label\":\"咸阳市\",\"value\":\"610400\"},{\"parent_id\":610400,\"label\":\"秦都区\",\"value\":\"610402\"},{\"parent_id\":610400,\"label\":\"杨陵区\",\"value\":\"610403\"},{\"parent_id\":610400,\"label\":\"渭城区\",\"value\":\"610404\"},{\"parent_id\":610400,\"label\":\"三原县\",\"value\":\"610422\"},{\"parent_id\":610400,\"label\":\"泾阳县\",\"value\":\"610423\"},{\"parent_id\":610400,\"label\":\"乾县\",\"value\":\"610424\"},{\"parent_id\":610400,\"label\":\"礼泉县\",\"value\":\"610425\"},{\"parent_id\":610400,\"label\":\"永寿县\",\"value\":\"610426\"},{\"parent_id\":610400,\"label\":\"彬县\",\"value\":\"610427\"},{\"parent_id\":610400,\"label\":\"长武县\",\"value\":\"610428\"},{\"parent_id\":610400,\"label\":\"旬邑县\",\"value\":\"610429\"},{\"parent_id\":610400,\"label\":\"淳化县\",\"value\":\"610430\"},{\"parent_id\":610400,\"label\":\"武功县\",\"value\":\"610431\"},{\"parent_id\":610400,\"label\":\"兴平市\",\"value\":\"610481\"},{\"parent_id\":610000,\"label\":\"渭南市\",\"value\":\"610500\"},{\"parent_id\":610500,\"label\":\"临渭区\",\"value\":\"610502\"},{\"parent_id\":610500,\"label\":\"华州区\",\"value\":\"610503\"},{\"parent_id\":610500,\"label\":\"潼关县\",\"value\":\"610522\"},{\"parent_id\":610500,\"label\":\"大荔县\",\"value\":\"610523\"},{\"parent_id\":610500,\"label\":\"合阳县\",\"value\":\"610524\"},{\"parent_id\":610500,\"label\":\"澄城县\",\"value\":\"610525\"},{\"parent_id\":610500,\"label\":\"蒲城县\",\"value\":\"610526\"},{\"parent_id\":610500,\"label\":\"白水县\",\"value\":\"610527\"},{\"parent_id\":610500,\"label\":\"富平县\",\"value\":\"610528\"},{\"parent_id\":610500,\"label\":\"韩城市\",\"value\":\"610581\"},{\"parent_id\":610500,\"label\":\"华阴市\",\"value\":\"610582\"},{\"parent_id\":610000,\"label\":\"延安市\",\"value\":\"610600\"},{\"parent_id\":610600,\"label\":\"宝塔区\",\"value\":\"610602\"},{\"parent_id\":610600,\"label\":\"延长县\",\"value\":\"610621\"},{\"parent_id\":610600,\"label\":\"延川县\",\"value\":\"610622\"},{\"parent_id\":610600,\"label\":\"子长县\",\"value\":\"610623\"},{\"parent_id\":610600,\"label\":\"安塞区\",\"value\":\"610624\"},{\"parent_id\":610600,\"label\":\"志丹县\",\"value\":\"610625\"},{\"parent_id\":610600,\"label\":\"吴起县\",\"value\":\"610626\"},{\"parent_id\":610600,\"label\":\"甘泉县\",\"value\":\"610627\"},{\"parent_id\":610600,\"label\":\"富县\",\"value\":\"610628\"},{\"parent_id\":610600,\"label\":\"洛川县\",\"value\":\"610629\"},{\"parent_id\":610600,\"label\":\"宜川县\",\"value\":\"610630\"},{\"parent_id\":610600,\"label\":\"黄龙县\",\"value\":\"610631\"},{\"parent_id\":610600,\"label\":\"黄陵县\",\"value\":\"610632\"},{\"parent_id\":610000,\"label\":\"汉中市\",\"value\":\"610700\"},{\"parent_id\":610700,\"label\":\"汉台区\",\"value\":\"610702\"},{\"parent_id\":610700,\"label\":\"南郑县\",\"value\":\"610721\"},{\"parent_id\":610700,\"label\":\"城固县\",\"value\":\"610722\"},{\"parent_id\":610700,\"label\":\"洋县\",\"value\":\"610723\"},{\"parent_id\":610700,\"label\":\"西乡县\",\"value\":\"610724\"},{\"parent_id\":610700,\"label\":\"勉县\",\"value\":\"610725\"},{\"parent_id\":610700,\"label\":\"宁强县\",\"value\":\"610726\"},{\"parent_id\":610700,\"label\":\"略阳县\",\"value\":\"610727\"},{\"parent_id\":610700,\"label\":\"镇巴县\",\"value\":\"610728\"},{\"parent_id\":610700,\"label\":\"留坝县\",\"value\":\"610729\"},{\"parent_id\":610700,\"label\":\"佛坪县\",\"value\":\"610730\"},{\"parent_id\":610000,\"label\":\"榆林市\",\"value\":\"610800\"},{\"parent_id\":610800,\"label\":\"榆阳区\",\"value\":\"610802\"},{\"parent_id\":610800,\"label\":\"横山区\",\"value\":\"610803\"},{\"parent_id\":610800,\"label\":\"神木县\",\"value\":\"610821\"},{\"parent_id\":610800,\"label\":\"府谷县\",\"value\":\"610822\"},{\"parent_id\":610800,\"label\":\"靖边县\",\"value\":\"610824\"},{\"parent_id\":610800,\"label\":\"定边县\",\"value\":\"610825\"},{\"parent_id\":610800,\"label\":\"绥德县\",\"value\":\"610826\"},{\"parent_id\":610800,\"label\":\"米脂县\",\"value\":\"610827\"},{\"parent_id\":610800,\"label\":\"佳县\",\"value\":\"610828\"},{\"parent_id\":610800,\"label\":\"吴堡县\",\"value\":\"610829\"},{\"parent_id\":610800,\"label\":\"清涧县\",\"value\":\"610830\"},{\"parent_id\":610800,\"label\":\"子洲县\",\"value\":\"610831\"},{\"parent_id\":610000,\"label\":\"安康市\",\"value\":\"610900\"},{\"parent_id\":610900,\"label\":\"汉滨区\",\"value\":\"610902\"},{\"parent_id\":610900,\"label\":\"汉阴县\",\"value\":\"610921\"},{\"parent_id\":610900,\"label\":\"石泉县\",\"value\":\"610922\"},{\"parent_id\":610900,\"label\":\"宁陕县\",\"value\":\"610923\"},{\"parent_id\":610900,\"label\":\"紫阳县\",\"value\":\"610924\"},{\"parent_id\":610900,\"label\":\"岚皋县\",\"value\":\"610925\"},{\"parent_id\":610900,\"label\":\"平利县\",\"value\":\"610926\"},{\"parent_id\":610900,\"label\":\"镇坪县\",\"value\":\"610927\"},{\"parent_id\":610900,\"label\":\"旬阳县\",\"value\":\"610928\"},{\"parent_id\":610900,\"label\":\"白河县\",\"value\":\"610929\"},{\"parent_id\":610000,\"label\":\"商洛市\",\"value\":\"611000\"},{\"parent_id\":611000,\"label\":\"商州区\",\"value\":\"611002\"},{\"parent_id\":611000,\"label\":\"洛南县\",\"value\":\"611021\"},{\"parent_id\":611000,\"label\":\"丹凤县\",\"value\":\"611022\"},{\"parent_id\":611000,\"label\":\"商南县\",\"value\":\"611023\"},{\"parent_id\":611000,\"label\":\"山阳县\",\"value\":\"611024\"},{\"parent_id\":611000,\"label\":\"镇安县\",\"value\":\"611025\"},{\"parent_id\":611000,\"label\":\"柞水县\",\"value\":\"611026\"},{\"parent_id\":0,\"label\":\"甘肃省\",\"value\":\"620000\"},{\"parent_id\":620000,\"label\":\"兰州市\",\"value\":\"620100\"},{\"parent_id\":620100,\"label\":\"城关区\",\"value\":\"620102\"},{\"parent_id\":620100,\"label\":\"七里河区\",\"value\":\"620103\"},{\"parent_id\":620100,\"label\":\"西固区\",\"value\":\"620104\"},{\"parent_id\":620100,\"label\":\"安宁区\",\"value\":\"620105\"},{\"parent_id\":620100,\"label\":\"红古区\",\"value\":\"620111\"},{\"parent_id\":620100,\"label\":\"永登县\",\"value\":\"620121\"},{\"parent_id\":620100,\"label\":\"皋兰县\",\"value\":\"620122\"},{\"parent_id\":620100,\"label\":\"榆中县\",\"value\":\"620123\"},{\"parent_id\":620000,\"label\":\"嘉峪关市\",\"value\":\"620200\"},{\"parent_id\":620000,\"label\":\"金昌市\",\"value\":\"620300\"},{\"parent_id\":620300,\"label\":\"金川区\",\"value\":\"620302\"},{\"parent_id\":620300,\"label\":\"永昌县\",\"value\":\"620321\"},{\"parent_id\":620000,\"label\":\"白银市\",\"value\":\"620400\"},{\"parent_id\":620400,\"label\":\"白银区\",\"value\":\"620402\"},{\"parent_id\":620400,\"label\":\"平川区\",\"value\":\"620403\"},{\"parent_id\":620400,\"label\":\"靖远县\",\"value\":\"620421\"},{\"parent_id\":620400,\"label\":\"会宁县\",\"value\":\"620422\"},{\"parent_id\":620400,\"label\":\"景泰县\",\"value\":\"620423\"},{\"parent_id\":620000,\"label\":\"天水市\",\"value\":\"620500\"},{\"parent_id\":620500,\"label\":\"秦州区\",\"value\":\"620502\"},{\"parent_id\":620500,\"label\":\"麦积区\",\"value\":\"620503\"},{\"parent_id\":620500,\"label\":\"清水县\",\"value\":\"620521\"},{\"parent_id\":620500,\"label\":\"秦安县\",\"value\":\"620522\"},{\"parent_id\":620500,\"label\":\"甘谷县\",\"value\":\"620523\"},{\"parent_id\":620500,\"label\":\"武山县\",\"value\":\"620524\"},{\"parent_id\":620500,\"label\":\"张家川回族自治县\",\"value\":\"620525\"},{\"parent_id\":620000,\"label\":\"武威市\",\"value\":\"620600\"},{\"parent_id\":620600,\"label\":\"凉州区\",\"value\":\"620602\"},{\"parent_id\":620600,\"label\":\"民勤县\",\"value\":\"620621\"},{\"parent_id\":620600,\"label\":\"古浪县\",\"value\":\"620622\"},{\"parent_id\":620600,\"label\":\"天祝藏族自治县\",\"value\":\"620623\"},{\"parent_id\":620000,\"label\":\"张掖市\",\"value\":\"620700\"},{\"parent_id\":620700,\"label\":\"甘州区\",\"value\":\"620702\"},{\"parent_id\":620700,\"label\":\"肃南裕固族自治县\",\"value\":\"620721\"},{\"parent_id\":620700,\"label\":\"民乐县\",\"value\":\"620722\"},{\"parent_id\":620700,\"label\":\"临泽县\",\"value\":\"620723\"},{\"parent_id\":620700,\"label\":\"高台县\",\"value\":\"620724\"},{\"parent_id\":620700,\"label\":\"山丹县\",\"value\":\"620725\"},{\"parent_id\":620000,\"label\":\"平凉市\",\"value\":\"620800\"},{\"parent_id\":620800,\"label\":\"崆峒区\",\"value\":\"620802\"},{\"parent_id\":620800,\"label\":\"泾川县\",\"value\":\"620821\"},{\"parent_id\":620800,\"label\":\"灵台县\",\"value\":\"620822\"},{\"parent_id\":620800,\"label\":\"崇信县\",\"value\":\"620823\"},{\"parent_id\":620800,\"label\":\"华亭县\",\"value\":\"620824\"},{\"parent_id\":620800,\"label\":\"庄浪县\",\"value\":\"620825\"},{\"parent_id\":620800,\"label\":\"静宁县\",\"value\":\"620826\"},{\"parent_id\":620000,\"label\":\"酒泉市\",\"value\":\"620900\"},{\"parent_id\":620900,\"label\":\"肃州区\",\"value\":\"620902\"},{\"parent_id\":620900,\"label\":\"金塔县\",\"value\":\"620921\"},{\"parent_id\":620900,\"label\":\"瓜州县\",\"value\":\"620922\"},{\"parent_id\":620900,\"label\":\"肃北蒙古族自治县\",\"value\":\"620923\"},{\"parent_id\":620900,\"label\":\"阿克塞哈萨克族自治县\",\"value\":\"620924\"},{\"parent_id\":620900,\"label\":\"玉门市\",\"value\":\"620981\"},{\"parent_id\":620900,\"label\":\"敦煌市\",\"value\":\"620982\"},{\"parent_id\":620000,\"label\":\"庆阳市\",\"value\":\"621000\"},{\"parent_id\":621000,\"label\":\"西峰区\",\"value\":\"621002\"},{\"parent_id\":621000,\"label\":\"庆城县\",\"value\":\"621021\"},{\"parent_id\":621000,\"label\":\"环县\",\"value\":\"621022\"},{\"parent_id\":621000,\"label\":\"华池县\",\"value\":\"621023\"},{\"parent_id\":621000,\"label\":\"合水县\",\"value\":\"621024\"},{\"parent_id\":621000,\"label\":\"正宁县\",\"value\":\"621025\"},{\"parent_id\":621000,\"label\":\"宁县\",\"value\":\"621026\"},{\"parent_id\":621000,\"label\":\"镇原县\",\"value\":\"621027\"},{\"parent_id\":620000,\"label\":\"定西市\",\"value\":\"621100\"},{\"parent_id\":621100,\"label\":\"安定区\",\"value\":\"621102\"},{\"parent_id\":621100,\"label\":\"通渭县\",\"value\":\"621121\"},{\"parent_id\":621100,\"label\":\"陇西县\",\"value\":\"621122\"},{\"parent_id\":621100,\"label\":\"渭源县\",\"value\":\"621123\"},{\"parent_id\":621100,\"label\":\"临洮县\",\"value\":\"621124\"},{\"parent_id\":621100,\"label\":\"漳县\",\"value\":\"621125\"},{\"parent_id\":621100,\"label\":\"岷县\",\"value\":\"621126\"},{\"parent_id\":620000,\"label\":\"陇南市\",\"value\":\"621200\"},{\"parent_id\":621200,\"label\":\"武都区\",\"value\":\"621202\"},{\"parent_id\":621200,\"label\":\"成县\",\"value\":\"621221\"},{\"parent_id\":621200,\"label\":\"文县\",\"value\":\"621222\"},{\"parent_id\":621200,\"label\":\"宕昌县\",\"value\":\"621223\"},{\"parent_id\":621200,\"label\":\"康县\",\"value\":\"621224\"},{\"parent_id\":621200,\"label\":\"西和县\",\"value\":\"621225\"},{\"parent_id\":621200,\"label\":\"礼县\",\"value\":\"621226\"},{\"parent_id\":621200,\"label\":\"徽县\",\"value\":\"621227\"},{\"parent_id\":621200,\"label\":\"两当县\",\"value\":\"621228\"},{\"parent_id\":620000,\"label\":\"临夏回族自治州\",\"value\":\"622900\"},{\"parent_id\":622900,\"label\":\"临夏市\",\"value\":\"622901\"},{\"parent_id\":622900,\"label\":\"临夏县\",\"value\":\"622921\"},{\"parent_id\":622900,\"label\":\"康乐县\",\"value\":\"622922\"},{\"parent_id\":622900,\"label\":\"永靖县\",\"value\":\"622923\"},{\"parent_id\":622900,\"label\":\"广河县\",\"value\":\"622924\"},{\"parent_id\":622900,\"label\":\"和政县\",\"value\":\"622925\"},{\"parent_id\":622900,\"label\":\"东乡族自治县\",\"value\":\"622926\"},{\"parent_id\":622900,\"label\":\"积石山保安族东乡族撒拉族自治县\",\"value\":\"622927\"},{\"parent_id\":620000,\"label\":\"甘南藏族自治州\",\"value\":\"623000\"},{\"parent_id\":623000,\"label\":\"合作市\",\"value\":\"623001\"},{\"parent_id\":623000,\"label\":\"临潭县\",\"value\":\"623021\"},{\"parent_id\":623000,\"label\":\"卓尼县\",\"value\":\"623022\"},{\"parent_id\":623000,\"label\":\"舟曲县\",\"value\":\"623023\"},{\"parent_id\":623000,\"label\":\"迭部县\",\"value\":\"623024\"},{\"parent_id\":623000,\"label\":\"玛曲县\",\"value\":\"623025\"},{\"parent_id\":623000,\"label\":\"碌曲县\",\"value\":\"623026\"},{\"parent_id\":623000,\"label\":\"夏河县\",\"value\":\"623027\"},{\"parent_id\":0,\"label\":\"青海省\",\"value\":\"630000\"},{\"parent_id\":630000,\"label\":\"西宁市\",\"value\":\"630100\"},{\"parent_id\":630100,\"label\":\"城东区\",\"value\":\"630102\"},{\"parent_id\":630100,\"label\":\"城中区\",\"value\":\"630103\"},{\"parent_id\":630100,\"label\":\"城西区\",\"value\":\"630104\"},{\"parent_id\":630100,\"label\":\"城北区\",\"value\":\"630105\"},{\"parent_id\":630100,\"label\":\"大通回族土族自治县\",\"value\":\"630121\"},{\"parent_id\":630100,\"label\":\"湟中县\",\"value\":\"630122\"},{\"parent_id\":630100,\"label\":\"湟源县\",\"value\":\"630123\"},{\"parent_id\":630000,\"label\":\"海东市\",\"value\":\"630200\"},{\"parent_id\":630200,\"label\":\"乐都区\",\"value\":\"630202\"},{\"parent_id\":630200,\"label\":\"平安区\",\"value\":\"630203\"},{\"parent_id\":630200,\"label\":\"民和回族土族自治县\",\"value\":\"630222\"},{\"parent_id\":630200,\"label\":\"互助土族自治县\",\"value\":\"630223\"},{\"parent_id\":630200,\"label\":\"化隆回族自治县\",\"value\":\"630224\"},{\"parent_id\":630200,\"label\":\"循化撒拉族自治县\",\"value\":\"630225\"},{\"parent_id\":630000,\"label\":\"海北藏族自治州\",\"value\":\"632200\"},{\"parent_id\":632200,\"label\":\"门源回族自治县\",\"value\":\"632221\"},{\"parent_id\":632200,\"label\":\"祁连县\",\"value\":\"632222\"},{\"parent_id\":632200,\"label\":\"海晏县\",\"value\":\"632223\"},{\"parent_id\":632200,\"label\":\"刚察县\",\"value\":\"632224\"},{\"parent_id\":630000,\"label\":\"黄南藏族自治州\",\"value\":\"632300\"},{\"parent_id\":632300,\"label\":\"同仁县\",\"value\":\"632321\"},{\"parent_id\":632300,\"label\":\"尖扎县\",\"value\":\"632322\"},{\"parent_id\":632300,\"label\":\"泽库县\",\"value\":\"632323\"},{\"parent_id\":632300,\"label\":\"河南蒙古族自治县\",\"value\":\"632324\"},{\"parent_id\":630000,\"label\":\"海南藏族自治州\",\"value\":\"632500\"},{\"parent_id\":632500,\"label\":\"共和县\",\"value\":\"632521\"},{\"parent_id\":632500,\"label\":\"同德县\",\"value\":\"632522\"},{\"parent_id\":632500,\"label\":\"贵德县\",\"value\":\"632523\"},{\"parent_id\":632500,\"label\":\"兴海县\",\"value\":\"632524\"},{\"parent_id\":632500,\"label\":\"贵南县\",\"value\":\"632525\"},{\"parent_id\":630000,\"label\":\"果洛藏族自治州\",\"value\":\"632600\"},{\"parent_id\":632600,\"label\":\"玛沁县\",\"value\":\"632621\"},{\"parent_id\":632600,\"label\":\"班玛县\",\"value\":\"632622\"},{\"parent_id\":632600,\"label\":\"甘德县\",\"value\":\"632623\"},{\"parent_id\":632600,\"label\":\"达日县\",\"value\":\"632624\"},{\"parent_id\":632600,\"label\":\"久治县\",\"value\":\"632625\"},{\"parent_id\":632600,\"label\":\"玛多县\",\"value\":\"632626\"},{\"parent_id\":630000,\"label\":\"玉树藏族自治州\",\"value\":\"632700\"},{\"parent_id\":632700,\"label\":\"玉树市\",\"value\":\"632701\"},{\"parent_id\":632700,\"label\":\"杂多县\",\"value\":\"632722\"},{\"parent_id\":632700,\"label\":\"称多县\",\"value\":\"632723\"},{\"parent_id\":632700,\"label\":\"治多县\",\"value\":\"632724\"},{\"parent_id\":632700,\"label\":\"囊谦县\",\"value\":\"632725\"},{\"parent_id\":632700,\"label\":\"曲麻莱县\",\"value\":\"632726\"},{\"parent_id\":630000,\"label\":\"海西蒙古族藏族自治州\",\"value\":\"632800\"},{\"parent_id\":632800,\"label\":\"格尔木市\",\"value\":\"632801\"},{\"parent_id\":632800,\"label\":\"德令哈市\",\"value\":\"632802\"},{\"parent_id\":632800,\"label\":\"乌兰县\",\"value\":\"632821\"},{\"parent_id\":632800,\"label\":\"都兰县\",\"value\":\"632822\"},{\"parent_id\":632800,\"label\":\"天峻县\",\"value\":\"632823\"},{\"parent_id\":632800,\"label\":\"海西蒙古族藏族自治州直辖\",\"value\":\"632825\"},{\"parent_id\":0,\"label\":\"宁夏回族自治区\",\"value\":\"640000\"},{\"parent_id\":640000,\"label\":\"银川市\",\"value\":\"640100\"},{\"parent_id\":640100,\"label\":\"兴庆区\",\"value\":\"640104\"},{\"parent_id\":640100,\"label\":\"西夏区\",\"value\":\"640105\"},{\"parent_id\":640100,\"label\":\"金凤区\",\"value\":\"640106\"},{\"parent_id\":640100,\"label\":\"永宁县\",\"value\":\"640121\"},{\"parent_id\":640100,\"label\":\"贺兰县\",\"value\":\"640122\"},{\"parent_id\":640100,\"label\":\"灵武市\",\"value\":\"640181\"},{\"parent_id\":640000,\"label\":\"石嘴山市\",\"value\":\"640200\"},{\"parent_id\":640200,\"label\":\"大武口区\",\"value\":\"640202\"},{\"parent_id\":640200,\"label\":\"惠农区\",\"value\":\"640205\"},{\"parent_id\":640200,\"label\":\"平罗县\",\"value\":\"640221\"},{\"parent_id\":640000,\"label\":\"吴忠市\",\"value\":\"640300\"},{\"parent_id\":640300,\"label\":\"利通区\",\"value\":\"640302\"},{\"parent_id\":640300,\"label\":\"红寺堡区\",\"value\":\"640303\"},{\"parent_id\":640300,\"label\":\"盐池县\",\"value\":\"640323\"},{\"parent_id\":640300,\"label\":\"同心县\",\"value\":\"640324\"},{\"parent_id\":640300,\"label\":\"青铜峡市\",\"value\":\"640381\"},{\"parent_id\":640000,\"label\":\"固原市\",\"value\":\"640400\"},{\"parent_id\":640400,\"label\":\"原州区\",\"value\":\"640402\"},{\"parent_id\":640400,\"label\":\"西吉县\",\"value\":\"640422\"},{\"parent_id\":640400,\"label\":\"隆德县\",\"value\":\"640423\"},{\"parent_id\":640400,\"label\":\"泾源县\",\"value\":\"640424\"},{\"parent_id\":640400,\"label\":\"彭阳县\",\"value\":\"640425\"},{\"parent_id\":640000,\"label\":\"中卫市\",\"value\":\"640500\"},{\"parent_id\":640500,\"label\":\"沙坡头区\",\"value\":\"640502\"},{\"parent_id\":640500,\"label\":\"中宁县\",\"value\":\"640521\"},{\"parent_id\":640500,\"label\":\"海原县\",\"value\":\"640522\"},{\"parent_id\":0,\"label\":\"新疆维吾尔自治区\",\"value\":\"650000\"},{\"parent_id\":650000,\"label\":\"乌鲁木齐市\",\"value\":\"650100\"},{\"parent_id\":650100,\"label\":\"天山区\",\"value\":\"650102\"},{\"parent_id\":650100,\"label\":\"沙依巴克区\",\"value\":\"650103\"},{\"parent_id\":650100,\"label\":\"新市区\",\"value\":\"650104\"},{\"parent_id\":650100,\"label\":\"水磨沟区\",\"value\":\"650105\"},{\"parent_id\":650100,\"label\":\"头屯河区\",\"value\":\"650106\"},{\"parent_id\":650100,\"label\":\"达坂城区\",\"value\":\"650107\"},{\"parent_id\":650100,\"label\":\"米东区\",\"value\":\"650109\"},{\"parent_id\":650100,\"label\":\"乌鲁木齐县\",\"value\":\"650121\"},{\"parent_id\":650000,\"label\":\"克拉玛依市\",\"value\":\"650200\"},{\"parent_id\":650200,\"label\":\"独山子区\",\"value\":\"650202\"},{\"parent_id\":650200,\"label\":\"克拉玛依区\",\"value\":\"650203\"},{\"parent_id\":650200,\"label\":\"白碱滩区\",\"value\":\"650204\"},{\"parent_id\":650200,\"label\":\"乌尔禾区\",\"value\":\"650205\"},{\"parent_id\":650000,\"label\":\"吐鲁番市\",\"value\":\"650400\"},{\"parent_id\":650400,\"label\":\"高昌区\",\"value\":\"650402\"},{\"parent_id\":650400,\"label\":\"鄯善县\",\"value\":\"650421\"},{\"parent_id\":650400,\"label\":\"托克逊县\",\"value\":\"650422\"},{\"parent_id\":650000,\"label\":\"哈密市\",\"value\":\"650500\"},{\"parent_id\":650500,\"label\":\"伊州区\",\"value\":\"650502\"},{\"parent_id\":650500,\"label\":\"巴里坤哈萨克自治县\",\"value\":\"650521\"},{\"parent_id\":650500,\"label\":\"伊吾县\",\"value\":\"650522\"},{\"parent_id\":650000,\"label\":\"昌吉回族自治州\",\"value\":\"652300\"},{\"parent_id\":652300,\"label\":\"昌吉市\",\"value\":\"652301\"},{\"parent_id\":652300,\"label\":\"阜康市\",\"value\":\"652302\"},{\"parent_id\":652300,\"label\":\"呼图壁县\",\"value\":\"652323\"},{\"parent_id\":652300,\"label\":\"玛纳斯县\",\"value\":\"652324\"},{\"parent_id\":652300,\"label\":\"奇台县\",\"value\":\"652325\"},{\"parent_id\":652300,\"label\":\"吉木萨尔县\",\"value\":\"652327\"},{\"parent_id\":652300,\"label\":\"木垒哈萨克自治县\",\"value\":\"652328\"},{\"parent_id\":650000,\"label\":\"博尔塔拉蒙古自治州\",\"value\":\"652700\"},{\"parent_id\":652700,\"label\":\"博乐市\",\"value\":\"652701\"},{\"parent_id\":652700,\"label\":\"阿拉山口市\",\"value\":\"652702\"},{\"parent_id\":652700,\"label\":\"精河县\",\"value\":\"652722\"},{\"parent_id\":652700,\"label\":\"温泉县\",\"value\":\"652723\"},{\"parent_id\":650000,\"label\":\"巴音郭楞蒙古自治州\",\"value\":\"652800\"},{\"parent_id\":652800,\"label\":\"库尔勒市\",\"value\":\"652801\"},{\"parent_id\":652800,\"label\":\"轮台县\",\"value\":\"652822\"},{\"parent_id\":652800,\"label\":\"尉犁县\",\"value\":\"652823\"},{\"parent_id\":652800,\"label\":\"若羌县\",\"value\":\"652824\"},{\"parent_id\":652800,\"label\":\"且末县\",\"value\":\"652825\"},{\"parent_id\":652800,\"label\":\"焉耆回族自治县\",\"value\":\"652826\"},{\"parent_id\":652800,\"label\":\"和静县\",\"value\":\"652827\"},{\"parent_id\":652800,\"label\":\"和硕县\",\"value\":\"652828\"},{\"parent_id\":652800,\"label\":\"博湖县\",\"value\":\"652829\"},{\"parent_id\":650000,\"label\":\"阿克苏地区\",\"value\":\"652900\"},{\"parent_id\":652900,\"label\":\"阿克苏市\",\"value\":\"652901\"},{\"parent_id\":652900,\"label\":\"温宿县\",\"value\":\"652922\"},{\"parent_id\":652900,\"label\":\"库车县\",\"value\":\"652923\"},{\"parent_id\":652900,\"label\":\"沙雅县\",\"value\":\"652924\"},{\"parent_id\":652900,\"label\":\"新和县\",\"value\":\"652925\"},{\"parent_id\":652900,\"label\":\"拜城县\",\"value\":\"652926\"},{\"parent_id\":652900,\"label\":\"乌什县\",\"value\":\"652927\"},{\"parent_id\":652900,\"label\":\"阿瓦提县\",\"value\":\"652928\"},{\"parent_id\":652900,\"label\":\"柯坪县\",\"value\":\"652929\"},{\"parent_id\":650000,\"label\":\"克孜勒苏柯尔克孜自治州\",\"value\":\"653000\"},{\"parent_id\":653000,\"label\":\"阿图什市\",\"value\":\"653001\"},{\"parent_id\":653000,\"label\":\"阿克陶县\",\"value\":\"653022\"},{\"parent_id\":653000,\"label\":\"阿合奇县\",\"value\":\"653023\"},{\"parent_id\":653000,\"label\":\"乌恰县\",\"value\":\"653024\"},{\"parent_id\":650000,\"label\":\"喀什地区\",\"value\":\"653100\"},{\"parent_id\":653100,\"label\":\"喀什市\",\"value\":\"653101\"},{\"parent_id\":653100,\"label\":\"疏附县\",\"value\":\"653121\"},{\"parent_id\":653100,\"label\":\"疏勒县\",\"value\":\"653122\"},{\"parent_id\":653100,\"label\":\"英吉沙县\",\"value\":\"653123\"},{\"parent_id\":653100,\"label\":\"泽普县\",\"value\":\"653124\"},{\"parent_id\":653100,\"label\":\"莎车县\",\"value\":\"653125\"},{\"parent_id\":653100,\"label\":\"叶城县\",\"value\":\"653126\"},{\"parent_id\":653100,\"label\":\"麦盖提县\",\"value\":\"653127\"},{\"parent_id\":653100,\"label\":\"岳普湖县\",\"value\":\"653128\"},{\"parent_id\":653100,\"label\":\"伽师县\",\"value\":\"653129\"},{\"parent_id\":653100,\"label\":\"巴楚县\",\"value\":\"653130\"},{\"parent_id\":653100,\"label\":\"塔什库尔干塔吉克自治县\",\"value\":\"653131\"},{\"parent_id\":650000,\"label\":\"和田地区\",\"value\":\"653200\"},{\"parent_id\":653200,\"label\":\"和田市\",\"value\":\"653201\"},{\"parent_id\":653200,\"label\":\"和田县\",\"value\":\"653221\"},{\"parent_id\":653200,\"label\":\"墨玉县\",\"value\":\"653222\"},{\"parent_id\":653200,\"label\":\"皮山县\",\"value\":\"653223\"},{\"parent_id\":653200,\"label\":\"洛浦县\",\"value\":\"653224\"},{\"parent_id\":653200,\"label\":\"策勒县\",\"value\":\"653225\"},{\"parent_id\":653200,\"label\":\"于田县\",\"value\":\"653226\"},{\"parent_id\":653200,\"label\":\"民丰县\",\"value\":\"653227\"},{\"parent_id\":650000,\"label\":\"伊犁哈萨克自治州\",\"value\":\"654000\"},{\"parent_id\":654000,\"label\":\"伊宁市\",\"value\":\"654002\"},{\"parent_id\":654000,\"label\":\"奎屯市\",\"value\":\"654003\"},{\"parent_id\":654000,\"label\":\"霍尔果斯市\",\"value\":\"654004\"},{\"parent_id\":654000,\"label\":\"伊宁县\",\"value\":\"654021\"},{\"parent_id\":654000,\"label\":\"察布查尔锡伯自治县\",\"value\":\"654022\"},{\"parent_id\":654000,\"label\":\"霍城县\",\"value\":\"654023\"},{\"parent_id\":654000,\"label\":\"巩留县\",\"value\":\"654024\"},{\"parent_id\":654000,\"label\":\"新源县\",\"value\":\"654025\"},{\"parent_id\":654000,\"label\":\"昭苏县\",\"value\":\"654026\"},{\"parent_id\":654000,\"label\":\"特克斯县\",\"value\":\"654027\"},{\"parent_id\":654000,\"label\":\"尼勒克县\",\"value\":\"654028\"},{\"parent_id\":650000,\"label\":\"塔城地区\",\"value\":\"654200\"},{\"parent_id\":654200,\"label\":\"塔城市\",\"value\":\"654201\"},{\"parent_id\":654200,\"label\":\"乌苏市\",\"value\":\"654202\"},{\"parent_id\":654200,\"label\":\"额敏县\",\"value\":\"654221\"},{\"parent_id\":654200,\"label\":\"沙湾县\",\"value\":\"654223\"},{\"parent_id\":654200,\"label\":\"托里县\",\"value\":\"654224\"},{\"parent_id\":654200,\"label\":\"裕民县\",\"value\":\"654225\"},{\"parent_id\":654200,\"label\":\"和布克赛尔蒙古自治县\",\"value\":\"654226\"},{\"parent_id\":650000,\"label\":\"阿勒泰地区\",\"value\":\"654300\"},{\"parent_id\":654300,\"label\":\"阿勒泰市\",\"value\":\"654301\"},{\"parent_id\":654300,\"label\":\"布尔津县\",\"value\":\"654321\"},{\"parent_id\":654300,\"label\":\"富蕴县\",\"value\":\"654322\"},{\"parent_id\":654300,\"label\":\"福海县\",\"value\":\"654323\"},{\"parent_id\":654300,\"label\":\"哈巴河县\",\"value\":\"654324\"},{\"parent_id\":654300,\"label\":\"青河县\",\"value\":\"654325\"},{\"parent_id\":654300,\"label\":\"吉木乃县\",\"value\":\"654326\"},{\"parent_id\":650000,\"label\":\"石河子市\",\"value\":\"659001\"},{\"parent_id\":650000,\"label\":\"阿拉尔市\",\"value\":\"659002\"},{\"parent_id\":650000,\"label\":\"图木舒克市\",\"value\":\"659003\"},{\"parent_id\":650000,\"label\":\"五家渠市\",\"value\":\"659004\"},{\"parent_id\":650000,\"label\":\"北屯市\",\"value\":\"659005\"},{\"parent_id\":650000,\"label\":\"铁门关市\",\"value\":\"659006\"},{\"parent_id\":650000,\"label\":\"双河市\",\"value\":\"659007\"},{\"parent_id\":650000,\"label\":\"可克达拉市\",\"value\":\"659008\"},{\"parent_id\":650000,\"label\":\"昆玉市\",\"value\":\"659009\"},{\"parent_id\":0,\"label\":\"台湾省\",\"value\":\"710000\"},{\"parent_id\":710000,\"label\":\"台北市\",\"value\":\"710100\"},{\"parent_id\":710100,\"label\":\"中正区\",\"value\":\"710101\"},{\"parent_id\":710100,\"label\":\"大同区\",\"value\":\"710102\"},{\"parent_id\":710100,\"label\":\"中山区\",\"value\":\"710103\"},{\"parent_id\":710100,\"label\":\"松山区\",\"value\":\"710104\"},{\"parent_id\":710100,\"label\":\"大安区\",\"value\":\"710105\"},{\"parent_id\":710100,\"label\":\"万华区\",\"value\":\"710106\"},{\"parent_id\":710100,\"label\":\"信义区\",\"value\":\"710107\"},{\"parent_id\":710100,\"label\":\"士林区\",\"value\":\"710108\"},{\"parent_id\":710100,\"label\":\"北投区\",\"value\":\"710109\"},{\"parent_id\":710100,\"label\":\"内湖区\",\"value\":\"710110\"},{\"parent_id\":710100,\"label\":\"南港区\",\"value\":\"710111\"},{\"parent_id\":710100,\"label\":\"文山区\",\"value\":\"710112\"},{\"parent_id\":710100,\"label\":\"其它区\",\"value\":\"710113\"},{\"parent_id\":710000,\"label\":\"高雄市\",\"value\":\"710200\"},{\"parent_id\":710200,\"label\":\"新兴区\",\"value\":\"710201\"},{\"parent_id\":710200,\"label\":\"前金区\",\"value\":\"710202\"},{\"parent_id\":710200,\"label\":\"芩雅区\",\"value\":\"710203\"},{\"parent_id\":710200,\"label\":\"盐埕区\",\"value\":\"710204\"},{\"parent_id\":710200,\"label\":\"鼓山区\",\"value\":\"710205\"},{\"parent_id\":710200,\"label\":\"旗津区\",\"value\":\"710206\"},{\"parent_id\":710200,\"label\":\"前镇区\",\"value\":\"710207\"},{\"parent_id\":710200,\"label\":\"三民区\",\"value\":\"710208\"},{\"parent_id\":710200,\"label\":\"左营区\",\"value\":\"710209\"},{\"parent_id\":710200,\"label\":\"楠梓区\",\"value\":\"710210\"},{\"parent_id\":710200,\"label\":\"小港区\",\"value\":\"710211\"},{\"parent_id\":710200,\"label\":\"其它区\",\"value\":\"710212\"},{\"parent_id\":710200,\"label\":\"苓雅区\",\"value\":\"710241\"},{\"parent_id\":710200,\"label\":\"仁武区\",\"value\":\"710242\"},{\"parent_id\":710200,\"label\":\"大社区\",\"value\":\"710243\"},{\"parent_id\":710200,\"label\":\"冈山区\",\"value\":\"710244\"},{\"parent_id\":710200,\"label\":\"路竹区\",\"value\":\"710245\"},{\"parent_id\":710200,\"label\":\"阿莲区\",\"value\":\"710246\"},{\"parent_id\":710200,\"label\":\"田寮区\",\"value\":\"710247\"},{\"parent_id\":710200,\"label\":\"燕巢区\",\"value\":\"710248\"},{\"parent_id\":710200,\"label\":\"桥头区\",\"value\":\"710249\"},{\"parent_id\":710200,\"label\":\"梓官区\",\"value\":\"710250\"},{\"parent_id\":710200,\"label\":\"弥陀区\",\"value\":\"710251\"},{\"parent_id\":710200,\"label\":\"永安区\",\"value\":\"710252\"},{\"parent_id\":710200,\"label\":\"湖内区\",\"value\":\"710253\"},{\"parent_id\":710200,\"label\":\"凤山区\",\"value\":\"710254\"},{\"parent_id\":710200,\"label\":\"大寮区\",\"value\":\"710255\"},{\"parent_id\":710200,\"label\":\"林园区\",\"value\":\"710256\"},{\"parent_id\":710200,\"label\":\"鸟松区\",\"value\":\"710257\"},{\"parent_id\":710200,\"label\":\"大树区\",\"value\":\"710258\"},{\"parent_id\":710200,\"label\":\"旗山区\",\"value\":\"710259\"},{\"parent_id\":710200,\"label\":\"美浓区\",\"value\":\"710260\"},{\"parent_id\":710200,\"label\":\"六龟区\",\"value\":\"710261\"},{\"parent_id\":710200,\"label\":\"内门区\",\"value\":\"710262\"},{\"parent_id\":710200,\"label\":\"杉林区\",\"value\":\"710263\"},{\"parent_id\":710200,\"label\":\"甲仙区\",\"value\":\"710264\"},{\"parent_id\":710200,\"label\":\"桃源区\",\"value\":\"710265\"},{\"parent_id\":710200,\"label\":\"那玛夏区\",\"value\":\"710266\"},{\"parent_id\":710200,\"label\":\"茂林区\",\"value\":\"710267\"},{\"parent_id\":710200,\"label\":\"茄萣区\",\"value\":\"710268\"},{\"parent_id\":710000,\"label\":\"台南市\",\"value\":\"710300\"},{\"parent_id\":710300,\"label\":\"中西区\",\"value\":\"710301\"},{\"parent_id\":710300,\"label\":\"东区\",\"value\":\"710302\"},{\"parent_id\":710300,\"label\":\"南区\",\"value\":\"710303\"},{\"parent_id\":710300,\"label\":\"北区\",\"value\":\"710304\"},{\"parent_id\":710300,\"label\":\"安平区\",\"value\":\"710305\"},{\"parent_id\":710300,\"label\":\"安南区\",\"value\":\"710306\"},{\"parent_id\":710300,\"label\":\"其它区\",\"value\":\"710307\"},{\"parent_id\":710300,\"label\":\"永康区\",\"value\":\"710339\"},{\"parent_id\":710300,\"label\":\"归仁区\",\"value\":\"710340\"},{\"parent_id\":710300,\"label\":\"新化区\",\"value\":\"710341\"},{\"parent_id\":710300,\"label\":\"左镇区\",\"value\":\"710342\"},{\"parent_id\":710300,\"label\":\"玉井区\",\"value\":\"710343\"},{\"parent_id\":710300,\"label\":\"楠西区\",\"value\":\"710344\"},{\"parent_id\":710300,\"label\":\"南化区\",\"value\":\"710345\"},{\"parent_id\":710300,\"label\":\"仁德区\",\"value\":\"710346\"},{\"parent_id\":710300,\"label\":\"关庙区\",\"value\":\"710347\"},{\"parent_id\":710300,\"label\":\"龙崎区\",\"value\":\"710348\"},{\"parent_id\":710300,\"label\":\"官田区\",\"value\":\"710349\"},{\"parent_id\":710300,\"label\":\"麻豆区\",\"value\":\"710350\"},{\"parent_id\":710300,\"label\":\"佳里区\",\"value\":\"710351\"},{\"parent_id\":710300,\"label\":\"西港区\",\"value\":\"710352\"},{\"parent_id\":710300,\"label\":\"七股区\",\"value\":\"710353\"},{\"parent_id\":710300,\"label\":\"将军区\",\"value\":\"710354\"},{\"parent_id\":710300,\"label\":\"学甲区\",\"value\":\"710355\"},{\"parent_id\":710300,\"label\":\"北门区\",\"value\":\"710356\"},{\"parent_id\":710300,\"label\":\"新营区\",\"value\":\"710357\"},{\"parent_id\":710300,\"label\":\"后壁区\",\"value\":\"710358\"},{\"parent_id\":710300,\"label\":\"白河区\",\"value\":\"710359\"},{\"parent_id\":710300,\"label\":\"东山区\",\"value\":\"710360\"},{\"parent_id\":710300,\"label\":\"六甲区\",\"value\":\"710361\"},{\"parent_id\":710300,\"label\":\"下营区\",\"value\":\"710362\"},{\"parent_id\":710300,\"label\":\"柳营区\",\"value\":\"710363\"},{\"parent_id\":710300,\"label\":\"盐水区\",\"value\":\"710364\"},{\"parent_id\":710300,\"label\":\"善化区\",\"value\":\"710365\"},{\"parent_id\":710300,\"label\":\"大内区\",\"value\":\"710366\"},{\"parent_id\":710300,\"label\":\"山上区\",\"value\":\"710367\"},{\"parent_id\":710300,\"label\":\"新市区\",\"value\":\"710368\"},{\"parent_id\":710300,\"label\":\"安定区\",\"value\":\"710369\"},{\"parent_id\":710000,\"label\":\"台中市\",\"value\":\"710400\"},{\"parent_id\":710400,\"label\":\"中区\",\"value\":\"710401\"},{\"parent_id\":710400,\"label\":\"东区\",\"value\":\"710402\"},{\"parent_id\":710400,\"label\":\"南区\",\"value\":\"710403\"},{\"parent_id\":710400,\"label\":\"西区\",\"value\":\"710404\"},{\"parent_id\":710400,\"label\":\"北区\",\"value\":\"710405\"},{\"parent_id\":710400,\"label\":\"北屯区\",\"value\":\"710406\"},{\"parent_id\":710400,\"label\":\"西屯区\",\"value\":\"710407\"},{\"parent_id\":710400,\"label\":\"南屯区\",\"value\":\"710408\"},{\"parent_id\":710400,\"label\":\"其它区\",\"value\":\"710409\"},{\"parent_id\":710400,\"label\":\"太平区\",\"value\":\"710431\"},{\"parent_id\":710400,\"label\":\"大里区\",\"value\":\"710432\"},{\"parent_id\":710400,\"label\":\"雾峰区\",\"value\":\"710433\"},{\"parent_id\":710400,\"label\":\"乌日区\",\"value\":\"710434\"},{\"parent_id\":710400,\"label\":\"丰原区\",\"value\":\"710435\"},{\"parent_id\":710400,\"label\":\"后里区\",\"value\":\"710436\"},{\"parent_id\":710400,\"label\":\"石冈区\",\"value\":\"710437\"},{\"parent_id\":710400,\"label\":\"东势区\",\"value\":\"710438\"},{\"parent_id\":710400,\"label\":\"和平区\",\"value\":\"710439\"},{\"parent_id\":710400,\"label\":\"新社区\",\"value\":\"710440\"},{\"parent_id\":710400,\"label\":\"潭子区\",\"value\":\"710441\"},{\"parent_id\":710400,\"label\":\"大雅区\",\"value\":\"710442\"},{\"parent_id\":710400,\"label\":\"神冈区\",\"value\":\"710443\"},{\"parent_id\":710400,\"label\":\"大肚区\",\"value\":\"710444\"},{\"parent_id\":710400,\"label\":\"沙鹿区\",\"value\":\"710445\"},{\"parent_id\":710400,\"label\":\"龙井区\",\"value\":\"710446\"},{\"parent_id\":710400,\"label\":\"梧栖区\",\"value\":\"710447\"},{\"parent_id\":710400,\"label\":\"清水区\",\"value\":\"710448\"},{\"parent_id\":710400,\"label\":\"大甲区\",\"value\":\"710449\"},{\"parent_id\":710400,\"label\":\"外埔区\",\"value\":\"710450\"},{\"parent_id\":710400,\"label\":\"大安区\",\"value\":\"710451\"},{\"parent_id\":710000,\"label\":\"金门县\",\"value\":\"710500\"},{\"parent_id\":710500,\"label\":\"金沙镇\",\"value\":\"710507\"},{\"parent_id\":710500,\"label\":\"金湖镇\",\"value\":\"710508\"},{\"parent_id\":710500,\"label\":\"金宁乡\",\"value\":\"710509\"},{\"parent_id\":710500,\"label\":\"金城镇\",\"value\":\"710510\"},{\"parent_id\":710500,\"label\":\"烈屿乡\",\"value\":\"710511\"},{\"parent_id\":710500,\"label\":\"乌坵乡\",\"value\":\"710512\"},{\"parent_id\":710000,\"label\":\"南投县\",\"value\":\"710600\"},{\"parent_id\":710600,\"label\":\"南投市\",\"value\":\"710614\"},{\"parent_id\":710600,\"label\":\"中寮乡\",\"value\":\"710615\"},{\"parent_id\":710600,\"label\":\"草屯镇\",\"value\":\"710616\"},{\"parent_id\":710600,\"label\":\"国姓乡\",\"value\":\"710617\"},{\"parent_id\":710600,\"label\":\"埔里镇\",\"value\":\"710618\"},{\"parent_id\":710600,\"label\":\"仁爱乡\",\"value\":\"710619\"},{\"parent_id\":710600,\"label\":\"名间乡\",\"value\":\"710620\"},{\"parent_id\":710600,\"label\":\"集集镇\",\"value\":\"710621\"},{\"parent_id\":710600,\"label\":\"水里乡\",\"value\":\"710622\"},{\"parent_id\":710600,\"label\":\"鱼池乡\",\"value\":\"710623\"},{\"parent_id\":710600,\"label\":\"信义乡\",\"value\":\"710624\"},{\"parent_id\":710600,\"label\":\"竹山镇\",\"value\":\"710625\"},{\"parent_id\":710600,\"label\":\"鹿谷乡\",\"value\":\"710626\"},{\"parent_id\":710000,\"label\":\"基隆市\",\"value\":\"710700\"},{\"parent_id\":710700,\"label\":\"仁爱区\",\"value\":\"710701\"},{\"parent_id\":710700,\"label\":\"信义区\",\"value\":\"710702\"},{\"parent_id\":710700,\"label\":\"中正区\",\"value\":\"710703\"},{\"parent_id\":710700,\"label\":\"中山区\",\"value\":\"710704\"},{\"parent_id\":710700,\"label\":\"安乐区\",\"value\":\"710705\"},{\"parent_id\":710700,\"label\":\"暖暖区\",\"value\":\"710706\"},{\"parent_id\":710700,\"label\":\"七堵区\",\"value\":\"710707\"},{\"parent_id\":710700,\"label\":\"其它区\",\"value\":\"710708\"},{\"parent_id\":710000,\"label\":\"新竹市\",\"value\":\"710800\"},{\"parent_id\":710800,\"label\":\"东区\",\"value\":\"710801\"},{\"parent_id\":710800,\"label\":\"北区\",\"value\":\"710802\"},{\"parent_id\":710800,\"label\":\"香山区\",\"value\":\"710803\"},{\"parent_id\":710800,\"label\":\"其它区\",\"value\":\"710804\"},{\"parent_id\":710000,\"label\":\"嘉义市\",\"value\":\"710900\"},{\"parent_id\":710900,\"label\":\"东区\",\"value\":\"710901\"},{\"parent_id\":710900,\"label\":\"西区\",\"value\":\"710902\"},{\"parent_id\":710900,\"label\":\"其它区\",\"value\":\"710903\"},{\"parent_id\":710000,\"label\":\"新北市\",\"value\":\"711100\"},{\"parent_id\":711100,\"label\":\"万里区\",\"value\":\"711130\"},{\"parent_id\":711100,\"label\":\"金山区\",\"value\":\"711131\"},{\"parent_id\":711100,\"label\":\"板桥区\",\"value\":\"711132\"},{\"parent_id\":711100,\"label\":\"汐止区\",\"value\":\"711133\"},{\"parent_id\":711100,\"label\":\"深坑区\",\"value\":\"711134\"},{\"parent_id\":711100,\"label\":\"石碇区\",\"value\":\"711135\"},{\"parent_id\":711100,\"label\":\"瑞芳区\",\"value\":\"711136\"},{\"parent_id\":711100,\"label\":\"平溪区\",\"value\":\"711137\"},{\"parent_id\":711100,\"label\":\"双溪区\",\"value\":\"711138\"},{\"parent_id\":711100,\"label\":\"贡寮区\",\"value\":\"711139\"},{\"parent_id\":711100,\"label\":\"新店区\",\"value\":\"711140\"},{\"parent_id\":711100,\"label\":\"坪林区\",\"value\":\"711141\"},{\"parent_id\":711100,\"label\":\"乌来区\",\"value\":\"711142\"},{\"parent_id\":711100,\"label\":\"永和区\",\"value\":\"711143\"},{\"parent_id\":711100,\"label\":\"中和区\",\"value\":\"711144\"},{\"parent_id\":711100,\"label\":\"土城区\",\"value\":\"711145\"},{\"parent_id\":711100,\"label\":\"三峡区\",\"value\":\"711146\"},{\"parent_id\":711100,\"label\":\"树林区\",\"value\":\"711147\"},{\"parent_id\":711100,\"label\":\"莺歌区\",\"value\":\"711148\"},{\"parent_id\":711100,\"label\":\"三重区\",\"value\":\"711149\"},{\"parent_id\":711100,\"label\":\"新庄区\",\"value\":\"711150\"},{\"parent_id\":711100,\"label\":\"泰山区\",\"value\":\"711151\"},{\"parent_id\":711100,\"label\":\"林口区\",\"value\":\"711152\"},{\"parent_id\":711100,\"label\":\"芦洲区\",\"value\":\"711153\"},{\"parent_id\":711100,\"label\":\"五股区\",\"value\":\"711154\"},{\"parent_id\":711100,\"label\":\"八里区\",\"value\":\"711155\"},{\"parent_id\":711100,\"label\":\"淡水区\",\"value\":\"711156\"},{\"parent_id\":711100,\"label\":\"三芝区\",\"value\":\"711157\"},{\"parent_id\":711100,\"label\":\"石门区\",\"value\":\"711158\"},{\"parent_id\":710000,\"label\":\"宜兰县\",\"value\":\"711200\"},{\"parent_id\":711200,\"label\":\"宜兰市\",\"value\":\"711214\"},{\"parent_id\":711200,\"label\":\"头城镇\",\"value\":\"711215\"},{\"parent_id\":711200,\"label\":\"礁溪乡\",\"value\":\"711216\"},{\"parent_id\":711200,\"label\":\"壮围乡\",\"value\":\"711217\"},{\"parent_id\":711200,\"label\":\"员山乡\",\"value\":\"711218\"},{\"parent_id\":711200,\"label\":\"罗东镇\",\"value\":\"711219\"},{\"parent_id\":711200,\"label\":\"三星乡\",\"value\":\"711220\"},{\"parent_id\":711200,\"label\":\"大同乡\",\"value\":\"711221\"},{\"parent_id\":711200,\"label\":\"五结乡\",\"value\":\"711222\"},{\"parent_id\":711200,\"label\":\"冬山乡\",\"value\":\"711223\"},{\"parent_id\":711200,\"label\":\"苏澳镇\",\"value\":\"711224\"},{\"parent_id\":711200,\"label\":\"南澳乡\",\"value\":\"711225\"},{\"parent_id\":711200,\"label\":\"钓鱼台\",\"value\":\"711226\"},{\"parent_id\":710000,\"label\":\"新竹县\",\"value\":\"711300\"},{\"parent_id\":711300,\"label\":\"竹北市\",\"value\":\"711314\"},{\"parent_id\":711300,\"label\":\"湖口乡\",\"value\":\"711315\"},{\"parent_id\":711300,\"label\":\"新丰乡\",\"value\":\"711316\"},{\"parent_id\":711300,\"label\":\"新埔镇\",\"value\":\"711317\"},{\"parent_id\":711300,\"label\":\"关西镇\",\"value\":\"711318\"},{\"parent_id\":711300,\"label\":\"芎林乡\",\"value\":\"711319\"},{\"parent_id\":711300,\"label\":\"宝山乡\",\"value\":\"711320\"},{\"parent_id\":711300,\"label\":\"竹东镇\",\"value\":\"711321\"},{\"parent_id\":711300,\"label\":\"五峰乡\",\"value\":\"711322\"},{\"parent_id\":711300,\"label\":\"横山乡\",\"value\":\"711323\"},{\"parent_id\":711300,\"label\":\"尖石乡\",\"value\":\"711324\"},{\"parent_id\":711300,\"label\":\"北埔乡\",\"value\":\"711325\"},{\"parent_id\":711300,\"label\":\"峨眉乡\",\"value\":\"711326\"},{\"parent_id\":710000,\"label\":\"桃园县\",\"value\":\"711400\"},{\"parent_id\":711400,\"label\":\"中坜市\",\"value\":\"711414\"},{\"parent_id\":711400,\"label\":\"平镇市\",\"value\":\"711415\"},{\"parent_id\":711400,\"label\":\"龙潭乡\",\"value\":\"711416\"},{\"parent_id\":711400,\"label\":\"杨梅市\",\"value\":\"711417\"},{\"parent_id\":711400,\"label\":\"新屋乡\",\"value\":\"711418\"},{\"parent_id\":711400,\"label\":\"观音乡\",\"value\":\"711419\"},{\"parent_id\":711400,\"label\":\"桃园市\",\"value\":\"711420\"},{\"parent_id\":711400,\"label\":\"龟山乡\",\"value\":\"711421\"},{\"parent_id\":711400,\"label\":\"八德市\",\"value\":\"711422\"},{\"parent_id\":711400,\"label\":\"大溪镇\",\"value\":\"711423\"},{\"parent_id\":711400,\"label\":\"复兴乡\",\"value\":\"711424\"},{\"parent_id\":711400,\"label\":\"大园乡\",\"value\":\"711425\"},{\"parent_id\":711400,\"label\":\"芦竹乡\",\"value\":\"711426\"},{\"parent_id\":710000,\"label\":\"苗栗县\",\"value\":\"711500\"},{\"parent_id\":711500,\"label\":\"竹南镇\",\"value\":\"711519\"},{\"parent_id\":711500,\"label\":\"头份镇\",\"value\":\"711520\"},{\"parent_id\":711500,\"label\":\"三湾乡\",\"value\":\"711521\"},{\"parent_id\":711500,\"label\":\"南庄乡\",\"value\":\"711522\"},{\"parent_id\":711500,\"label\":\"狮潭乡\",\"value\":\"711523\"},{\"parent_id\":711500,\"label\":\"后龙镇\",\"value\":\"711524\"},{\"parent_id\":711500,\"label\":\"通霄镇\",\"value\":\"711525\"},{\"parent_id\":711500,\"label\":\"苑里镇\",\"value\":\"711526\"},{\"parent_id\":711500,\"label\":\"苗栗市\",\"value\":\"711527\"},{\"parent_id\":711500,\"label\":\"造桥乡\",\"value\":\"711528\"},{\"parent_id\":711500,\"label\":\"头屋乡\",\"value\":\"711529\"},{\"parent_id\":711500,\"label\":\"公馆乡\",\"value\":\"711530\"},{\"parent_id\":711500,\"label\":\"大湖乡\",\"value\":\"711531\"},{\"parent_id\":711500,\"label\":\"泰安乡\",\"value\":\"711532\"},{\"parent_id\":711500,\"label\":\"铜锣乡\",\"value\":\"711533\"},{\"parent_id\":711500,\"label\":\"三义乡\",\"value\":\"711534\"},{\"parent_id\":711500,\"label\":\"西湖乡\",\"value\":\"711535\"},{\"parent_id\":711500,\"label\":\"卓兰镇\",\"value\":\"711536\"},{\"parent_id\":710000,\"label\":\"彰化县\",\"value\":\"711700\"},{\"parent_id\":711700,\"label\":\"彰化市\",\"value\":\"711727\"},{\"parent_id\":711700,\"label\":\"芬园乡\",\"value\":\"711728\"},{\"parent_id\":711700,\"label\":\"花坛乡\",\"value\":\"711729\"},{\"parent_id\":711700,\"label\":\"秀水乡\",\"value\":\"711730\"},{\"parent_id\":711700,\"label\":\"鹿港镇\",\"value\":\"711731\"},{\"parent_id\":711700,\"label\":\"福兴乡\",\"value\":\"711732\"},{\"parent_id\":711700,\"label\":\"线西乡\",\"value\":\"711733\"},{\"parent_id\":711700,\"label\":\"和美镇\",\"value\":\"711734\"},{\"parent_id\":711700,\"label\":\"伸港乡\",\"value\":\"711735\"},{\"parent_id\":711700,\"label\":\"员林镇\",\"value\":\"711736\"},{\"parent_id\":711700,\"label\":\"社头乡\",\"value\":\"711737\"},{\"parent_id\":711700,\"label\":\"永靖乡\",\"value\":\"711738\"},{\"parent_id\":711700,\"label\":\"埔心乡\",\"value\":\"711739\"},{\"parent_id\":711700,\"label\":\"溪湖镇\",\"value\":\"711740\"},{\"parent_id\":711700,\"label\":\"大村乡\",\"value\":\"711741\"},{\"parent_id\":711700,\"label\":\"埔盐乡\",\"value\":\"711742\"},{\"parent_id\":711700,\"label\":\"田中镇\",\"value\":\"711743\"},{\"parent_id\":711700,\"label\":\"北斗镇\",\"value\":\"711744\"},{\"parent_id\":711700,\"label\":\"田尾乡\",\"value\":\"711745\"},{\"parent_id\":711700,\"label\":\"埤头乡\",\"value\":\"711746\"},{\"parent_id\":711700,\"label\":\"溪州乡\",\"value\":\"711747\"},{\"parent_id\":711700,\"label\":\"竹塘乡\",\"value\":\"711748\"},{\"parent_id\":711700,\"label\":\"二林镇\",\"value\":\"711749\"},{\"parent_id\":711700,\"label\":\"大城乡\",\"value\":\"711750\"},{\"parent_id\":711700,\"label\":\"芳苑乡\",\"value\":\"711751\"},{\"parent_id\":711700,\"label\":\"二水乡\",\"value\":\"711752\"},{\"parent_id\":710000,\"label\":\"嘉义县\",\"value\":\"711900\"},{\"parent_id\":711900,\"label\":\"番路乡\",\"value\":\"711919\"},{\"parent_id\":711900,\"label\":\"梅山乡\",\"value\":\"711920\"},{\"parent_id\":711900,\"label\":\"竹崎乡\",\"value\":\"711921\"},{\"parent_id\":711900,\"label\":\"阿里山乡\",\"value\":\"711922\"},{\"parent_id\":711900,\"label\":\"中埔乡\",\"value\":\"711923\"},{\"parent_id\":711900,\"label\":\"大埔乡\",\"value\":\"711924\"},{\"parent_id\":711900,\"label\":\"水上乡\",\"value\":\"711925\"},{\"parent_id\":711900,\"label\":\"鹿草乡\",\"value\":\"711926\"},{\"parent_id\":711900,\"label\":\"太保市\",\"value\":\"711927\"},{\"parent_id\":711900,\"label\":\"朴子市\",\"value\":\"711928\"},{\"parent_id\":711900,\"label\":\"东石乡\",\"value\":\"711929\"},{\"parent_id\":711900,\"label\":\"六脚乡\",\"value\":\"711930\"},{\"parent_id\":711900,\"label\":\"新港乡\",\"value\":\"711931\"},{\"parent_id\":711900,\"label\":\"民雄乡\",\"value\":\"711932\"},{\"parent_id\":711900,\"label\":\"大林镇\",\"value\":\"711933\"},{\"parent_id\":711900,\"label\":\"溪口乡\",\"value\":\"711934\"},{\"parent_id\":711900,\"label\":\"义竹乡\",\"value\":\"711935\"},{\"parent_id\":711900,\"label\":\"布袋镇\",\"value\":\"711936\"},{\"parent_id\":710000,\"label\":\"云林县\",\"value\":\"712100\"},{\"parent_id\":712100,\"label\":\"斗南镇\",\"value\":\"712121\"},{\"parent_id\":712100,\"label\":\"大埤乡\",\"value\":\"712122\"},{\"parent_id\":712100,\"label\":\"虎尾镇\",\"value\":\"712123\"},{\"parent_id\":712100,\"label\":\"土库镇\",\"value\":\"712124\"},{\"parent_id\":712100,\"label\":\"褒忠乡\",\"value\":\"712125\"},{\"parent_id\":712100,\"label\":\"东势乡\",\"value\":\"712126\"},{\"parent_id\":712100,\"label\":\"台西乡\",\"value\":\"712127\"},{\"parent_id\":712100,\"label\":\"仑背乡\",\"value\":\"712128\"},{\"parent_id\":712100,\"label\":\"麦寮乡\",\"value\":\"712129\"},{\"parent_id\":712100,\"label\":\"斗六市\",\"value\":\"712130\"},{\"parent_id\":712100,\"label\":\"林内乡\",\"value\":\"712131\"},{\"parent_id\":712100,\"label\":\"古坑乡\",\"value\":\"712132\"},{\"parent_id\":712100,\"label\":\"莿桐乡\",\"value\":\"712133\"},{\"parent_id\":712100,\"label\":\"西螺镇\",\"value\":\"712134\"},{\"parent_id\":712100,\"label\":\"二仑乡\",\"value\":\"712135\"},{\"parent_id\":712100,\"label\":\"北港镇\",\"value\":\"712136\"},{\"parent_id\":712100,\"label\":\"水林乡\",\"value\":\"712137\"},{\"parent_id\":712100,\"label\":\"口湖乡\",\"value\":\"712138\"},{\"parent_id\":712100,\"label\":\"四湖乡\",\"value\":\"712139\"},{\"parent_id\":712100,\"label\":\"元长乡\",\"value\":\"712140\"},{\"parent_id\":710000,\"label\":\"屏东县\",\"value\":\"712400\"},{\"parent_id\":712400,\"label\":\"屏东市\",\"value\":\"712434\"},{\"parent_id\":712400,\"label\":\"三地门乡\",\"value\":\"712435\"},{\"parent_id\":712400,\"label\":\"雾台乡\",\"value\":\"712436\"},{\"parent_id\":712400,\"label\":\"玛家乡\",\"value\":\"712437\"},{\"parent_id\":712400,\"label\":\"九如乡\",\"value\":\"712438\"},{\"parent_id\":712400,\"label\":\"里港乡\",\"value\":\"712439\"},{\"parent_id\":712400,\"label\":\"高树乡\",\"value\":\"712440\"},{\"parent_id\":712400,\"label\":\"盐埔乡\",\"value\":\"712441\"},{\"parent_id\":712400,\"label\":\"长治乡\",\"value\":\"712442\"},{\"parent_id\":712400,\"label\":\"麟洛乡\",\"value\":\"712443\"},{\"parent_id\":712400,\"label\":\"竹田乡\",\"value\":\"712444\"},{\"parent_id\":712400,\"label\":\"内埔乡\",\"value\":\"712445\"},{\"parent_id\":712400,\"label\":\"万丹乡\",\"value\":\"712446\"},{\"parent_id\":712400,\"label\":\"潮州镇\",\"value\":\"712447\"},{\"parent_id\":712400,\"label\":\"泰武乡\",\"value\":\"712448\"},{\"parent_id\":712400,\"label\":\"来义乡\",\"value\":\"712449\"},{\"parent_id\":712400,\"label\":\"万峦乡\",\"value\":\"712450\"},{\"parent_id\":712400,\"label\":\"崁顶乡\",\"value\":\"712451\"},{\"parent_id\":712400,\"label\":\"新埤乡\",\"value\":\"712452\"},{\"parent_id\":712400,\"label\":\"南州乡\",\"value\":\"712453\"},{\"parent_id\":712400,\"label\":\"林边乡\",\"value\":\"712454\"},{\"parent_id\":712400,\"label\":\"东港镇\",\"value\":\"712455\"},{\"parent_id\":712400,\"label\":\"琉球乡\",\"value\":\"712456\"},{\"parent_id\":712400,\"label\":\"佳冬乡\",\"value\":\"712457\"},{\"parent_id\":712400,\"label\":\"新园乡\",\"value\":\"712458\"},{\"parent_id\":712400,\"label\":\"枋寮乡\",\"value\":\"712459\"},{\"parent_id\":712400,\"label\":\"枋山乡\",\"value\":\"712460\"},{\"parent_id\":712400,\"label\":\"春日乡\",\"value\":\"712461\"},{\"parent_id\":712400,\"label\":\"狮子乡\",\"value\":\"712462\"},{\"parent_id\":712400,\"label\":\"车城乡\",\"value\":\"712463\"},{\"parent_id\":712400,\"label\":\"牡丹乡\",\"value\":\"712464\"},{\"parent_id\":712400,\"label\":\"恒春镇\",\"value\":\"712465\"},{\"parent_id\":712400,\"label\":\"满州乡\",\"value\":\"712466\"},{\"parent_id\":710000,\"label\":\"台东县\",\"value\":\"712500\"},{\"parent_id\":712500,\"label\":\"台东市\",\"value\":\"712517\"},{\"parent_id\":712500,\"label\":\"绿岛乡\",\"value\":\"712518\"},{\"parent_id\":712500,\"label\":\"兰屿乡\",\"value\":\"712519\"},{\"parent_id\":712500,\"label\":\"延平乡\",\"value\":\"712520\"},{\"parent_id\":712500,\"label\":\"卑南乡\",\"value\":\"712521\"},{\"parent_id\":712500,\"label\":\"鹿野乡\",\"value\":\"712522\"},{\"parent_id\":712500,\"label\":\"关山镇\",\"value\":\"712523\"},{\"parent_id\":712500,\"label\":\"海端乡\",\"value\":\"712524\"},{\"parent_id\":712500,\"label\":\"池上乡\",\"value\":\"712525\"},{\"parent_id\":712500,\"label\":\"东河乡\",\"value\":\"712526\"},{\"parent_id\":712500,\"label\":\"成功镇\",\"value\":\"712527\"},{\"parent_id\":712500,\"label\":\"长滨乡\",\"value\":\"712528\"},{\"parent_id\":712500,\"label\":\"金峰乡\",\"value\":\"712529\"},{\"parent_id\":712500,\"label\":\"大武乡\",\"value\":\"712530\"},{\"parent_id\":712500,\"label\":\"达仁乡\",\"value\":\"712531\"},{\"parent_id\":712500,\"label\":\"太麻里乡\",\"value\":\"712532\"},{\"parent_id\":710000,\"label\":\"花莲县\",\"value\":\"712600\"},{\"parent_id\":712600,\"label\":\"花莲市\",\"value\":\"712615\"},{\"parent_id\":712600,\"label\":\"新城乡\",\"value\":\"712616\"},{\"parent_id\":712600,\"label\":\"太鲁阁\",\"value\":\"712617\"},{\"parent_id\":712600,\"label\":\"秀林乡\",\"value\":\"712618\"},{\"parent_id\":712600,\"label\":\"吉安乡\",\"value\":\"712619\"},{\"parent_id\":712600,\"label\":\"寿丰乡\",\"value\":\"712620\"},{\"parent_id\":712600,\"label\":\"凤林镇\",\"value\":\"712621\"},{\"parent_id\":712600,\"label\":\"光复乡\",\"value\":\"712622\"},{\"parent_id\":712600,\"label\":\"丰滨乡\",\"value\":\"712623\"},{\"parent_id\":712600,\"label\":\"瑞穗乡\",\"value\":\"712624\"},{\"parent_id\":712600,\"label\":\"万荣乡\",\"value\":\"712625\"},{\"parent_id\":712600,\"label\":\"玉里镇\",\"value\":\"712626\"},{\"parent_id\":712600,\"label\":\"卓溪乡\",\"value\":\"712627\"},{\"parent_id\":712600,\"label\":\"富里乡\",\"value\":\"712628\"},{\"parent_id\":710000,\"label\":\"澎湖县\",\"value\":\"712700\"},{\"parent_id\":712700,\"label\":\"马公市\",\"value\":\"712707\"},{\"parent_id\":712700,\"label\":\"西屿乡\",\"value\":\"712708\"},{\"parent_id\":712700,\"label\":\"望安乡\",\"value\":\"712709\"},{\"parent_id\":712700,\"label\":\"七美乡\",\"value\":\"712710\"},{\"parent_id\":712700,\"label\":\"白沙乡\",\"value\":\"712711\"},{\"parent_id\":712700,\"label\":\"湖西乡\",\"value\":\"712712\"},{\"parent_id\":710000,\"label\":\"连江县\",\"value\":\"712800\"},{\"parent_id\":712800,\"label\":\"南竿乡\",\"value\":\"712805\"},{\"parent_id\":712800,\"label\":\"北竿乡\",\"value\":\"712806\"},{\"parent_id\":712800,\"label\":\"莒光乡\",\"value\":\"712807\"},{\"parent_id\":712800,\"label\":\"东引乡\",\"value\":\"712808\"},{\"parent_id\":0,\"label\":\"香港特别行政区\",\"value\":\"810000\"},{\"parent_id\":810000,\"label\":\"中西區\",\"value\":\"810001\"},{\"parent_id\":810000,\"label\":\"灣仔區\",\"value\":\"810002\"},{\"parent_id\":810000,\"label\":\"東區\",\"value\":\"810003\"},{\"parent_id\":810000,\"label\":\"南區\",\"value\":\"810004\"},{\"parent_id\":810000,\"label\":\"油尖旺區\",\"value\":\"810005\"},{\"parent_id\":810000,\"label\":\"深水埗區\",\"value\":\"810006\"},{\"parent_id\":810000,\"label\":\"九龍城區\",\"value\":\"810007\"},{\"parent_id\":810000,\"label\":\"黃大仙區\",\"value\":\"810008\"},{\"parent_id\":810000,\"label\":\"觀塘區\",\"value\":\"810009\"},{\"parent_id\":810000,\"label\":\"荃灣區\",\"value\":\"810010\"},{\"parent_id\":810000,\"label\":\"屯門區\",\"value\":\"810011\"},{\"parent_id\":810000,\"label\":\"元朗區\",\"value\":\"810012\"},{\"parent_id\":810000,\"label\":\"北區\",\"value\":\"810013\"},{\"parent_id\":810000,\"label\":\"大埔區\",\"value\":\"810014\"},{\"parent_id\":810000,\"label\":\"西貢區\",\"value\":\"810015\"},{\"parent_id\":810000,\"label\":\"沙田區\",\"value\":\"810016\"},{\"parent_id\":810000,\"label\":\"葵青區\",\"value\":\"810017\"},{\"parent_id\":810000,\"label\":\"離島區\",\"value\":\"810018\"},{\"parent_id\":0,\"label\":\"澳门特别行政区\",\"value\":\"820000\"},{\"parent_id\":820000,\"label\":\"花地瑪堂區\",\"value\":\"820001\"},{\"parent_id\":820000,\"label\":\"花王堂區\",\"value\":\"820002\"},{\"parent_id\":820000,\"label\":\"望德堂區\",\"value\":\"820003\"},{\"parent_id\":820000,\"label\":\"大堂區\",\"value\":\"820004\"},{\"parent_id\":820000,\"label\":\"風順堂區\",\"value\":\"820005\"},{\"parent_id\":820000,\"label\":\"嘉模堂區\",\"value\":\"820006\"},{\"parent_id\":820000,\"label\":\"路氹填海區\",\"value\":\"820007\"},{\"parent_id\":820000,\"label\":\"聖方濟各堂區\",\"value\":\"820008\"}]");

/***/ }),

/***/ "89ed":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("dcc0");
var wellKnownSymbol = __webpack_require__("465f");
var V8_VERSION = __webpack_require__("d43e");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "8caa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("d740");
var exec = __webpack_require__("1e2f");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "912b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_TransitionView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9be");
/* harmony import */ var _nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_TransitionView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_TransitionView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_10_oneOf_1_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_css_loader_3_4_2_css_loader_dist_cjs_js_ref_10_oneOf_1_1_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_2_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_nvm_versions_node_v12_14_1_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_TransitionView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "a3f6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("6fd9");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
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

/***/ "a9be":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("48f1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("582f").default
var update = add("d31fe922", content, true, {"sourceMap":false,"shadowMode":false});

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

/***/ "b09b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("c3f2");
var aFunction = __webpack_require__("6932");
var wellKnownSymbol = __webpack_require__("465f");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "b0c4":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("6ffb");
var isArray = __webpack_require__("a3f6");
var wellKnownSymbol = __webpack_require__("465f");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
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

/***/ "ba05":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ea03");
var requireObjectCoercible = __webpack_require__("3071");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
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

/***/ "c092":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("dcc0");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


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

/***/ "d2a9":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("6fd9");
var regexpExec = __webpack_require__("1e2f");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "d43e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("34f3");
var userAgent = __webpack_require__("1550");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


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

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d1d176c-vue-loader-template"}!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=template&id=5d523886&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"region-outer"},[_c('vue-select',{staticClass:"vue-select",attrs:{"placeholder":"选择省份","showSearch":_vm.showSearch,"options":_vm.province,"value":_vm.region[0]},on:{"input":_vm.changeProvince}}),(_vm.isVisible(1, _vm.city))?_c('vue-select',{staticClass:"vue-select",attrs:{"placeholder":"选择城市","showSearch":_vm.showSearch,"options":_vm.city,"value":_vm.region[1]},on:{"input":_vm.changeCity}}):_vm._e(),(_vm.isVisible(2, _vm.district))?_c('vue-select',{staticClass:"vue-select",attrs:{"placeholder":"选择区域","showSearch":_vm.showSearch,"options":_vm.district},model:{value:(_vm.region[2]),callback:function ($$v) {_vm.$set(_vm.region, 2, $$v)},expression:"region[2]"}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index.vue?vue&type=template&id=5d523886&scoped=true&

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("56fc");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("144e");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("847b");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("5226");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("50e4");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("2e47");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("8caa");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("f06c");

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d1d176c-vue-loader-template"}!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/components/VueSelect.vue?vue&type=template&id=7065f170&scoped=true&
var VueSelectvue_type_template_id_7065f170_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-select",class:{ active: _vm.active && _vm.options.length, 'show-search': _vm.showSearch }},[_c('div',{staticClass:"select"},[_c('input',{staticClass:"text",attrs:{"readonly":!_vm.showSearch,"placeholder":_vm.text || _vm.placeholder},domProps:{"value":_vm.active ? _vm.filterText : _vm.text},on:{"focus":_vm.show,"blur":_vm.hide,"input":_vm.changeValue}}),(_vm.options.length)?_c('i',{staticClass:"iconfont icon-right"}):_vm._e()]),_c('transition-view',{staticClass:"dropdown-outer",attrs:{"visible":_vm.active}},[_c('ul',{staticClass:"dropdown-select"},_vm._l((_vm.filterOptions),function(item){return _c('li',{key:item.value,class:{ active: item.value == _vm.value },on:{"click":function($event){$event.stopPropagation();return _vm.select(item.value)}}},[_vm._v(_vm._s(item.label))])}),0)])],1)}
var VueSelectvue_type_template_id_7065f170_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueSelect.vue?vue&type=template&id=7065f170&scoped=true&

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("05d0");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("f55b");

// EXTERNAL MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_core-js@3.6.4@core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("a56d");

// CONCATENATED MODULE: /Users/halobear/Desktop/yun-work/npm-packages/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: /Users/halobear/Desktop/yun-work/npm-packages/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: /Users/halobear/Desktop/yun-work/npm-packages/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: /Users/halobear/Desktop/yun-work/npm-packages/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: /Users/halobear/Desktop/yun-work/npm-packages/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /Users/halobear/Desktop/yun-work/npm-packages/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d1d176c-vue-loader-template"}!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/components/TransitionView.vue?vue&type=template&id=39e89164&
var TransitionViewvue_type_template_id_39e89164_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"transition-container",on:{"transitionend":_vm.transitionend}},[(_vm.visible)?_c('div',{staticClass:"close-bg",on:{"click":function($event){return _vm.$emit('toggle')}}}):_vm._e(),_c('div',{staticClass:"transition-content"},[_vm._t("default")],2)])}
var TransitionViewvue_type_template_id_39e89164_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TransitionView.vue?vue&type=template&id=39e89164&

// CONCATENATED MODULE: ./src/utils/getEleSize.js
function getEleSize(elem) {
  var width,
      height,
      noneNodes = [],
      nodeStyle = [];
  getNoneNode(elem); //获取多层display：none;的元素

  setNodeStyle();
  width = elem.clientWidth;
  height = elem.clientHeight;
  resumeNodeStyle();
  return {
    width: width,
    height: height
  };

  function getNoneNode(node) {
    if (!node) return;
    var display = getStyles(node).getPropertyValue("display"),
        tagName = node.nodeName.toLowerCase();

    if (display != "none" && tagName != "body") {
      getNoneNode(node.parentNode);
    } else {
      noneNodes.push(node);
      if (tagName != "body") getNoneNode(node.parentNode);
    }
  } //这方法才能获取最终是否有display属性设置，不能style.display。


  function getStyles(elem) {
    // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  }

  function setNodeStyle() {
    var i = 0;

    for (; i < noneNodes.length; i++) {
      var visibility = noneNodes[i].style.visibility,
          display = noneNodes[i].style.display,
          style = noneNodes[i].getAttribute("style"); //覆盖其他display样式

      noneNodes[i].setAttribute("style", "visibility:hidden;display:block !important;" + style);
      nodeStyle[i] = {
        visibility: visibility,
        display: display
      };
    }
  }

  function resumeNodeStyle() {
    for (var i = 0; i < noneNodes.length; i++) {
      noneNodes[i].style.visibility = nodeStyle[i].visibility;
      noneNodes[i].style.display = nodeStyle[i].display;
    }
  }
}
// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--12-1!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/components/TransitionView.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var TransitionViewvue_type_script_lang_js_ = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible: function visible(_visible) {
      if (_visible) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  mounted: function mounted() {
    this.transitionend();
  },
  methods: {
    hide: function hide() {
      if (this.visible) return;
      var container = this.$refs.container;
      container.style.display = "block";

      var _getEleSize = getEleSize(container),
          height = _getEleSize.height;

      container.style.height = "".concat(height, "px");
      setTimeout(function () {
        container.style.height = 0;
      });
    },
    show: function show() {
      var container = this.$refs.container;
      container.style.height = "";

      var _getEleSize2 = getEleSize(container),
          height = _getEleSize2.height;

      container.style.display = "block";
      container.style.height = 0;
      setTimeout(function () {
        container.style.height = "".concat(height, "px");
      });
    },
    transitionend: function transitionend() {
      var container = this.$refs.container;
      container.style.display = this.visible ? "block" : "none";
      container.style.height = "";
    }
  }
});
// CONCATENATED MODULE: ./src/components/TransitionView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TransitionViewvue_type_script_lang_js_ = (TransitionViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TransitionView.vue?vue&type=style&index=0&lang=less&
var TransitionViewvue_type_style_index_0_lang_less_ = __webpack_require__("912b");

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

// CONCATENATED MODULE: ./src/components/TransitionView.vue






/* normalize component */

var component = normalizeComponent(
  components_TransitionViewvue_type_script_lang_js_,
  TransitionViewvue_type_template_id_39e89164_render,
  TransitionViewvue_type_template_id_39e89164_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TransitionView = (component.exports);
// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--12-1!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/components/VueSelect.vue?vue&type=script&lang=js&













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
//
//
//

/* harmony default export */ var VueSelectvue_type_script_lang_js_ = ({
  components: {
    TransitionView: TransitionView
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    autoSelect: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      active: false,
      filterText: ""
    };
  },
  computed: {
    text: function text() {
      var _this$options = this.options,
          options = _this$options === void 0 ? [] : _this$options,
          _this$value = this.value,
          value = _this$value === void 0 ? "" : _this$value;
      var target = options.find(function (item) {
        return item.value === value;
      });
      return target ? target.label : value;
    },
    filterOptions: function filterOptions() {
      var filterText = this.filterText;
      var options = !this.autoSelect ? [{
        parent_id: 0,
        label: "不限",
        value: ""
      }].concat(_toConsumableArray(this.options)) : this.options;
      if (!filterText) return options;
      var res = options.filter(function (item) {
        return item.label.includes(filterText);
      });
      return res;
    }
  },
  methods: {
    changeValue: function changeValue(e) {
      this.filterText = e.target.value;
    },
    select: function select(value) {
      this.$emit("input", value);
    },
    hide: function hide() {
      var _this = this;

      setTimeout(function () {
        _this.active = false;
      }, 200);
    },
    show: function show() {
      this.active = true;
      this.filterText = "";
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueSelectvue_type_script_lang_js_ = (VueSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VueSelect.vue?vue&type=style&index=0&id=7065f170&lang=less&scoped=true&
var VueSelectvue_type_style_index_0_id_7065f170_lang_less_scoped_true_ = __webpack_require__("2ce7");

// CONCATENATED MODULE: ./src/components/VueSelect.vue






/* normalize component */

var VueSelect_component = normalizeComponent(
  components_VueSelectvue_type_script_lang_js_,
  VueSelectvue_type_template_id_7065f170_scoped_true_render,
  VueSelectvue_type_template_id_7065f170_scoped_true_staticRenderFns,
  false,
  null,
  "7065f170",
  null
  
)

/* harmony default export */ var VueSelect = (VueSelect_component.exports);
// EXTERNAL MODULE: ./src/utils/region.json
var region = __webpack_require__("89ba");

// CONCATENATED MODULE: /Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--12-1!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!/Users/halobear/.nvm/versions/node/v12.14.1/lib/node_modules/@vue/cli-service-global/node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=script&lang=js&
















//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_srcvue_type_script_lang_js_ = ({
  components: {
    VueSelect: VueSelect
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Array
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    level: {
      type: Number,
      default: 1
    },
    format: {
      type: Function
    },
    autoSelect: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var d = region;

    if (this.format) {
      d = this.format(region);
    }

    return {
      region: this.value || [],
      data: d
    };
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(value) {
        this.region = value || [];
      }
    }
  },
  computed: {
    province: function province() {
      return region.filter(function (item) {
        return item.parent_id == 0;
      });
    },
    city: function city() {
      var c = this.region[0];
      if (!c) return [];
      return region.filter(function (item) {
        return item.parent_id && item.parent_id == c;
      });
    },
    district: function district() {
      var d = this.region[1];
      if (!d) return [];
      return region.filter(function (item) {
        return item.parent_id && item.parent_id == d;
      });
    },
    region_name: function region_name() {
      return this.region.map(function (value) {
        var target = region.find(function (item) {
          return item.value == value;
        });

        return target ? target.label : "";
      }).filter(function (item) {
        return item;
      }).join(" ");
    }
  },
  methods: {
    isVisible: function isVisible(index, data) {
      if (this.level < index) return false;
      return data.length || !this.autoSelect;
    },
    changeProvince: function changeProvince() {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0";
      if (p == this.region[0]) return this.change();
      this.region = [p]; // 选中默认城市

      this.changeCity();
    },
    changeCity: function changeCity(cityValue) {
      var _this$city = this.city,
          city = _this$city === void 0 ? [] : _this$city; // 选择全国、只有一级选择

      if (!city.length) return this.change();
      var c = cityValue;

      if (!c) {
        if (!this.autoSelect) {
          this.region = [this.region[0], "", ""].slice(0, this.level);
          return this.change();
        } else {
          c = city[0].value;
        }
      }

      this.region = [this.region[0], c];

      if (this.autoSelect) {
        // 默认选中第一个地区
        var district = this.district;

        if (district.length) {
          this.region.push(district[0].value);
        }
      }

      this.change();
    },
    change: function change() {
      var region_name = this.region_name.split(" ").filter(function (item) {
        return item;
      }).slice(0, this.level + 1);
      this.$emit("change", this.region, region_name);
    }
  }
});
// CONCATENATED MODULE: ./src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var srcvue_type_script_lang_js_ = (lib_vue_loader_options_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index.vue?vue&type=style&index=0&id=5d523886&lang=less&scoped=true&
var srcvue_type_style_index_0_id_5d523886_lang_less_scoped_true_ = __webpack_require__("7f96");

// CONCATENATED MODULE: ./src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5d523886",
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./index.js


src.install = function (Vue) {
  Vue.component("vue-region", src);
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

/***/ "f06c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("0863");
var isRegExp = __webpack_require__("373c");
var anObject = __webpack_require__("c3f2");
var requireObjectCoercible = __webpack_require__("3071");
var speciesConstructor = __webpack_require__("b09b");
var advanceStringIndex = __webpack_require__("2cce");
var toLength = __webpack_require__("b14e");
var callRegExpExec = __webpack_require__("d2a9");
var regexpExec = __webpack_require__("1e2f");
var fails = __webpack_require__("dcc0");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


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

/***/ "fa2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("dcc0");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


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