/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "build/" + ({"compiler":"compiler"}[chunkId]||chunkId) + "." + {"compiler":"1c4ab75b"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CandiesButton/CandiesButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sizeMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sizeMixin */ \"./src/components/sizeMixin.js\");\n/* harmony import */ var _sizeMixin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sizeMixin__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'candies-button',\n  mixins: [_sizeMixin__WEBPACK_IMPORTED_MODULE_0___default.a],\n  props: {\n    /**\n     * 设置按钮颜色\n     */\n    color: {\n      type: String,\n      default: 'black'\n    },\n\n    /** 设置按钮的背景颜色\n     * @since 1.2.0\n     */\n    background: {\n      type: String,\n      default: 'white'\n    },\n\n    /** @deprecated 使用颜色相反 */\n    oldColor: String,\n\n    /**\n     * 设置糖果按钮样式\n     */\n    candiesTpye: {\n      type: String,\n      default: 'custom-btn'\n    }\n  },\n  computed: {\n    styles: function styles() {\n      return {\n        'font-size': this.size,\n        margin: this.margin\n      };\n    },\n    candiesClass: function candiesClass() {\n      switch (this.candiesTpye) {\n        case 'candies-1':\n          return {\n            'custom-btn': true,\n            'btn-1': true,\n            'btn-1:hover': true\n          };\n\n        case 'candies-2':\n          return {\n            'custom-btn': true,\n            'btn-2': true,\n            'btn-2:before': true,\n            'btn-2:hover': true\n          };\n\n        case 'candies-3':\n          return {\n            'custom-btn': true,\n            'btn-3 span': true,\n            'btn-3:before,btn-3:after': true,\n            'btn-3:before': true,\n            'btn-3:after': true,\n            'btn-3:hover': true,\n            'btn-3:hover:before': true,\n            'btn-3:hover:after': true,\n            'btn-3 span:hover': true,\n            'btn-3 span:before,btn-3 span:after': true,\n            'btn-3 span:before': true,\n            'btn-3 span:after': true,\n            'btn-3 span:hover:before': true,\n            'btn-3 span:hover:after': true\n          };\n\n        case 'candies-4':\n          return {\n            'custom-btn': true\n          };\n\n        case 'candies-5':\n          return {\n            'custom-btn': true\n          };\n\n        case 'candies-6':\n          return {\n            'custom-btn': true\n          };\n\n        default:\n          return {\n            'custom-btn': true\n          };\n      }\n    }\n  },\n  methods: {\n    handleClick: function handleClick(e) {\n      /** 当点击按钮时触发\n       * @event click\n       * @type {Event}\n       */\n      this.$emit('click', e);\n      /** 事件为 Alligator 的例子\n       * @event gator\n       * @type {Event}\n       */\n\n      this.$emit('gator', e);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"d153ef94-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=template&id=570eebde&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d153ef94-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CandiesButton/CandiesButton.vue?vue&type=template&id=570eebde&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.candiesClass,style:(_vm.styles),on:{\"click\":_vm.handleClick}},[_c('span',[_vm._t(\"default\")],2)])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22d153ef94-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!./candiesButton.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/components/CandiesButton/candiesButton.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/components/CandiesButton/candiesButton.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./src/components/CandiesButton/candiesButton.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"button {\\r\\n  margin: 20px;\\n}\\n.custom-btn {\\r\\n  width: 130px;\\r\\n  height: 40px;\\r\\n  color: #fff;\\r\\n  border-radius: 50px;\\r\\n  padding: 10px 25px;\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  font-weight: 500;\\r\\n  font-size: 16px;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.3s ease;\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n   box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),\\r\\n    inset -7px -7px 10px 0px rgba(0,0,0,.1),7px 7px 20px 0px rgba(0,0,0,.1),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.1);\\r\\n  text-shadow:  2px 2px 3px rgba(255,255,255,.5),\\r\\n              -4px -4px 6px rgba(116, 125, 136, .2);\\r\\n  outline: none;\\n}\\r\\n\\r\\n/* 1 */\\n.btn-1 {\\r\\n  color: rgba(0,3,255,.5);\\r\\n  background-color: #b2d8ff;\\r\\n  border: none;\\n}\\n.btn-1:hover {\\r\\n   color: rgba(0,3,255, .7);\\r\\nbackground: linear-gradient(0deg, rgba(0,3,255,.5) 0%, rgba(2,126,251,.5) 100%);\\n}\\r\\n\\r\\n/* 2 */\\n.btn-2 {\\r\\n  background-color: #e8d1ff;\\r\\n  color: rgba(96,9,240, .5);\\r\\n  border: none;\\n}\\n.btn-2:before {\\r\\n  height: 0%;\\r\\n  width: 2px;\\n}\\n.btn-2:hover {\\r\\n  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),\\r\\n              -4px -4px 6px 0 rgba(116, 125, 136, .5), \\r\\n    inset -4px -4px 6px 0 rgba(255,255,255,.2),\\r\\n    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);\\n}\\r\\n\\r\\n\\r\\n/* 3 */\\n.btn-3 {\\r\\n  color: rgba(2,126,251,1);\\r\\n  background: rgba(118,174,241,1);\\r\\n  width: 130px;\\r\\n  height: 40px;\\r\\n  line-height: 42px;\\r\\n  padding: 0;\\r\\n  border: none;\\n}\\n.btn-3 span {\\r\\n  position: relative;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 100%;\\n}\\n.btn-3:before,\\r\\n.btn-3:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n   background: rgba(2,126,251,1);\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-3:before {\\r\\n  height: 0%;\\r\\n  width: 2px;\\n}\\n.btn-3:after {\\r\\n  width: 0%;\\r\\n  height: 2px;\\n}\\n.btn-3:hover{\\r\\n   background: transparent;\\r\\n  box-shadow: none;\\n}\\n.btn-3:hover:before {\\r\\n  height: 100%;\\n}\\n.btn-3:hover:after {\\r\\n  width: 100%;\\n}\\n.btn-3 span:hover{\\r\\n   color: rgba(2,126,251,1);\\n}\\n.btn-3 span:before,\\r\\n.btn-3 span:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n   background: rgba(2,126,251,1);\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-3 span:before {\\r\\n  width: 2px;\\r\\n  height: 0%;\\n}\\n.btn-3 span:after {\\r\\n  width: 0%;\\r\\n  height: 2px;\\n}\\n.btn-3 span:hover:before {\\r\\n  height: 100%;\\n}\\n.btn-3 span:hover:after {\\r\\n  width: 100%;\\n}\\r\\n\\r\\n/* 4 */\\n.btn-4 {\\r\\n  color: #03c8a8;\\r\\nbackground: #96e4df;\\r\\n  line-height: 42px;\\r\\n  padding: 0;\\r\\n  border: none;\\n}\\n.btn-4:hover{\\r\\n  background-color: #89d8d3;\\n}\\r\\n\\r\\n\\r\\n\\r\\n/* 5 */\\n.btn-5 {\\r\\n  border: none;\\r\\n  color: #ff84c1;\\r\\n  background-color: #ffc1e0;\\n}\\n.btn-5:hover {\\r\\n  color: #f0094a;\\r\\n  background: transparent;\\r\\n   box-shadow:none;\\n}\\n.btn-5:before,\\r\\n.btn-5:after{\\r\\n  content:'';\\r\\n  position:absolute;\\r\\n  top:0;\\r\\n  right:0;\\r\\n  height:2px;\\r\\n  width:0;\\r\\n  background: #f0094a;\\r\\n  box-shadow:\\r\\n   -1px -1px 5px 0px #fff,\\r\\n   7px 7px 20px 0px #0003,\\r\\n   4px 4px 5px 0px #0002;\\r\\n  transition:400ms ease all;\\n}\\n.btn-5:after{\\r\\n  right:inherit;\\r\\n  top:inherit;\\r\\n  left:0;\\r\\n  bottom:0;\\n}\\n.btn-5:hover:before,\\r\\n.btn-5:hover:after{\\r\\n  width:100%;\\r\\n  transition:800ms ease all;\\n}\\r\\n\\r\\n\\r\\n/* 6 */\\n.btn-6 {\\r\\n  color: rgba(234,76,137,1);\\r\\n  background: rgb(247,150,192);\\r\\n  line-height: 42px;\\r\\n  padding: 0;\\r\\n  border: none;\\n}\\n.btn-6 span {\\r\\n  position: relative;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 100%;\\n}\\n.btn-6:before,\\r\\n.btn-6:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  height: 0%;\\r\\n  width: 1px;\\r\\n box-shadow:\\r\\n   -1px -1px 20px 0px rgba(255,255,255,1),\\r\\n   -4px -4px 5px 0px rgba(255,255,255,1),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.4),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.3);\\n}\\n.btn-6:before {\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  transition: all 500ms ease;\\n}\\n.btn-6:after {\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  transition: all 500ms ease;\\n}\\n.btn-6:hover{\\r\\n  background: transparent;\\r\\n  color: #76aef1;\\r\\n  box-shadow: none;\\n}\\n.btn-6:hover:before {\\r\\n  transition: all 500ms ease;\\r\\n  height: 100%;\\n}\\n.btn-6:hover:after {\\r\\n  transition: all 500ms ease;\\r\\n  height: 100%;\\n}\\n.btn-6 span:before,\\r\\n.btn-6 span:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  box-shadow:\\r\\n   -1px -1px 20px 0px rgba(255,255,255,1),\\r\\n   -4px -4px 5px 0px rgba(255,255,255,1),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.4),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.3);\\n}\\n.btn-6 span:before {\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 0%;\\r\\n  height: .5px;\\r\\n  transition: all 500ms ease;\\n}\\n.btn-6 span:after {\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  width: 0%;\\r\\n  height: .5px;\\r\\n  transition: all 500ms ease;\\n}\\n.btn-6 span:hover:before {\\r\\n  width: 100%;\\n}\\n.btn-6 span:hover:after {\\r\\n  width: 100%;\\n}\\r\\n\\r\\n/* 7 */\\n.btn-7 {\\r\\nbackground: #ffbf7f;\\r\\n  line-height: 42px;\\r\\n  color: darkorange;\\r\\n  padding: 0;\\r\\n  border: none;\\n}\\n.btn-7 span {\\r\\n  position: relative;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 100%;\\n}\\n.btn-7:before,\\r\\n.btn-7:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background: rgba(251,75,2,1);\\r\\n  box-shadow:\\r\\n   -7px -7px 20px 0px rgba(255,255,255,.9),\\r\\n   -4px -4px 5px 0px rgba(255,255,255,.9),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.2),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.3);\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-7:before{\\r\\n   height: 0%;\\r\\n   width: 2px;\\n}\\n.btn-7:after {\\r\\n  width: 0%;\\r\\n  height: 2px;\\n}\\n.btn-7:hover{\\r\\n  color: rgba(251,75,2,1);\\r\\n  background: transparent;\\n}\\n.btn-7:hover:before {\\r\\n  height: 100%;\\n}\\n.btn-7:hover:after {\\r\\n  width: 100%;\\n}\\n.btn-7 span:before,\\r\\n.btn-7 span:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  background: rgba(251,75,2,1);\\r\\n  box-shadow:\\r\\n   -7px -7px 20px 0px rgba(255,255,255,.9),\\r\\n   -4px -4px 5px 0px rgba(255,255,255,.9),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.2),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.3);\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-7 span:before {\\r\\n  width: 2px;\\r\\n  height: 0%;\\n}\\n.btn-7 span:after {\\r\\n  height: 2px;\\r\\n  width: 0%;\\n}\\n.btn-7 span:hover:before {\\r\\n  height: 100%;\\n}\\n.btn-7 span:hover:after {\\r\\n  width: 100%;\\n}\\r\\n\\r\\n/* 8 */\\n.btn-8 {\\r\\n  background-color: #d9d0f5;\\r\\n   color: #c797eb;\\r\\n  line-height: 42px;\\r\\n  padding: 0;\\r\\n  border: none;\\n}\\n.btn-8 span {\\r\\n  position: relative;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 100%;\\n}\\n.btn-8:before,\\r\\n.btn-8:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background: #c797eb;\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-8:before{\\r\\n   height: 0%;\\r\\n   width: 2px;\\n}\\n.btn-8:after {\\r\\n  width: 0%;\\r\\n  height: 2px;\\n}\\n.btn-8:hover:before {\\r\\n  height: 100%;\\n}\\n.btn-8:hover:after {\\r\\n  width: 100%;\\n}\\n.btn-8:hover{\\r\\n  background: transparent;\\n}\\n.btn-8 span:hover{\\r\\n  color: #c797eb;\\n}\\n.btn-8 span:before,\\r\\n.btn-8 span:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  background: #c797eb;\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-8 span:before {\\r\\n  width: 2px;\\r\\n  height: 0%;\\n}\\n.btn-8 span:after {\\r\\n  height: 2px;\\r\\n  width: 0%;\\n}\\n.btn-8 span:hover:before {\\r\\n  height: 100%;\\n}\\n.btn-8 span:hover:after {\\r\\n  width: 100%;\\n}\\r\\n  \\r\\n\\r\\n/* 9 */\\n.btn-9 {\\r\\n  border: none;\\r\\n  transition: all 0.3s ease;\\r\\n  overflow: hidden;\\r\\n  color: #1fd1f9;\\r\\n  color: #0cbcff;\\n}\\n.btn-9:after {\\r\\n  position: absolute;\\r\\n  content: \\\" \\\";\\r\\n  z-index: -1;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: #5fe0fd;\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-9:hover {\\r\\n  background: transparent;\\r\\n  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),\\r\\n              -4px -4px 6px 0 rgba(116, 125, 136, .2), \\r\\n    inset -4px -4px 6px 0 rgba(255,255,255,.5),\\r\\n    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);\\r\\n  color: #fff;\\n}\\n.btn-9:hover:after {\\r\\n  transform: scale(2) rotate(180deg);\\r\\n  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),\\r\\n              -4px -4px 6px 0 rgba(116, 125, 136, .2), \\r\\n    inset -4px -4px 6px 0 rgba(255,255,255,.5),\\r\\n    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);\\n}\\r\\n\\r\\n/* 10 */\\n.btn-10 {\\r\\n  background: lightblue;\\r\\n  color: #60abf7;\\r\\n  border: none;\\r\\n  transition: all 0.3s ease;\\r\\n  overflow: hidden;\\n}\\n.btn-10:after {\\r\\n  position: absolute;\\r\\n  content: \\\" \\\";\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  transition: all 0.3s ease;\\r\\n  transform: scale(.1);\\n}\\n.btn-10:hover {\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  background: transparent;\\n}\\n.btn-10:hover:after {\\r\\n  background: #7fbfff;\\r\\n  transform: scale(1);\\n}\\r\\n\\r\\n/* 11 */\\n.btn-11 {\\r\\n  border: none;\\r\\n  background: rgb(251,33,117);\\r\\n    background: linear-gradient(0deg, rgba(251,33,117,1) 0%, rgba(234,76,137,1) 100%);\\r\\n  background: #f7d0f5;\\r\\n    color: rgba(251,33,117,.5);\\r\\n    overflow: hidden;\\n}\\n.btn-11:hover {\\r\\n    text-decoration: none;\\r\\n    color: #fff;\\n}\\n.btn-11:before {\\r\\n    position: absolute;\\r\\n    content: '';\\r\\n    display: inline-block;\\r\\n    top: -180px;\\r\\n    left: 0;\\r\\n    width: 30px;\\r\\n    height: 100%;\\r\\n    background-color: #fff;\\r\\n    -webkit-animation: shiny-btn1 3s ease-in-out infinite;\\r\\n            animation: shiny-btn1 3s ease-in-out infinite;\\n}\\n.btn-11:hover{\\r\\n  opacity: .7;\\n}\\n.btn-11:active{\\r\\n  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),\\r\\n              -4px -4px 6px 0 rgba(116, 125, 136, .2), \\r\\n    inset -4px -4px 6px 0 rgba(255,255,255,.2),\\r\\n    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);\\n}\\n@-webkit-keyframes shiny-btn1 {\\n0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0;\\n}\\n80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5;\\n}\\n81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1;\\n}\\n100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0;\\n}\\n}\\r\\n\\r\\n\\r\\n/* 12 */\\n.btn-12{\\r\\n  position: relative;\\r\\n  right: 20px;\\r\\n  bottom: 20px;\\r\\n  border:none;\\r\\n  box-shadow: none;\\r\\n  width: 130px;\\r\\n  height: 40px;\\r\\n  line-height: 42px;\\r\\n  perspective: 230px;\\n}\\n.btn-12 span {\\r\\n  background: #7fbfff;\\r\\n  color: #3b97f3;\\r\\n  display: block;\\r\\n  position: absolute;\\r\\n  width: 130px;\\r\\n  height: 40px;\\r\\n  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.1),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.1);\\r\\n  border-radius: 50px;\\r\\n  margin:0;\\r\\n  text-align: center;\\r\\n  box-sizing: border-box;\\r\\n  transition: all .3s;\\n}\\n.btn-12 span:nth-child(1) {\\r\\n  box-shadow:\\r\\n   -7px -7px 20px 0px #fff9,\\r\\n   -4px -4px 5px 0px #fff9,\\r\\n   7px 7px 20px 0px #0002,\\r\\n   4px 4px 5px 0px #0001;\\r\\n  transform: rotateX(90deg);\\r\\n  transform-origin: 50% 50% -20px;\\n}\\n.btn-12 span:nth-child(2) {\\r\\n  transform: rotateX(0deg);\\r\\n  transform-origin: 50% 50% -20px;\\n}\\n.btn-12:hover span:nth-child(1) {\\r\\n  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.1),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.1);\\r\\n  transform: rotateX(0deg);\\n}\\n.btn-12:hover span:nth-child(2) {\\r\\n background: transparent;\\r\\n  color: transparent;\\r\\n  box-shadow: none;\\r\\n  text-shadow: none;\\r\\n  transform: rotateX(-90deg);\\n}\\r\\n\\r\\n\\r\\n/* 13 */\\n.btn-13 {\\r\\n  color: lightseagreen;\\r\\n  background-color: #89d8d3;\\r\\n  border: none;\\r\\n  z-index: 1;\\n}\\n.btn-13:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  width: 100%;\\r\\n  height: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n  border-radius: 50px;\\r\\n   background-color: #4dccc6;\\r\\nbackground-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);\\r\\n  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),\\r\\n    inset -7px -7px 10px 0px rgba(0,0,0,.1),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.1),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.1);\\r\\n   text-shadow:  0px 0px 6px rgba(255,255,255,.3),\\r\\n              -4px -4px 6px rgba(116, 125, 136, .2);\\r\\n  transition: all 0.3s ease;\\n}\\r\\n/* .btn-13:hover {\\r\\n  \\r\\n} */\\n.btn-13:hover:after {\\r\\n  top: 0;\\r\\n  height: 100%;\\n}\\n.btn-13:active {\\r\\n  top: 2px;\\n}\\r\\n\\r\\n\\r\\n/* 14 */\\n.btn-14 {\\r\\n  background: #ffff9e;\\r\\n  color: #ffb64d;\\r\\n  border: none;\\r\\n  z-index: 1;\\n}\\n.btn-14:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  width: 100%;\\r\\n  height: 0;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n  border-radius: 50px;\\r\\n  background-color: #ffff8a;\\r\\n  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),\\r\\n    inset -7px -7px 10px 0px rgba(0,0,0,.1),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.1),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.1);\\r\\n   text-shadow:  0px 0px 6px rgba(255,255,255,.3),\\r\\n              -4px -4px 6px rgba(116, 125, 136, .2);\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-14:hover {\\r\\n  color: #ffb64d;\\n}\\n.btn-14:hover:after {\\r\\n  top: auto;\\r\\n  bottom: 0;\\r\\n  height: 100%;\\n}\\n.btn-14:active {\\r\\n  top: 2px;\\n}\\r\\n\\r\\n/* 15 */\\n.btn-15 {\\r\\n  background: #c68eff;\\r\\n  color: #a453f5;\\r\\n  border: none;\\r\\n  z-index: 1;\\n}\\n.btn-15:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  width: 0;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  z-index: -1;\\r\\n  background-color: #7f7fff;\\r\\n  border-radius: 50px;\\r\\n   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),\\r\\n   7px 7px 20px 0px rgba(0,0,0,.1),\\r\\n   4px 4px 5px 0px rgba(0,0,0,.1);\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-15:hover {\\r\\n  color: #4c4cf1;\\n}\\n.btn-15:hover:after {\\r\\n  left: 0;\\r\\n  width: 100%;\\n}\\n.btn-15:active {\\r\\n  top: 2px;\\n}\\r\\n\\r\\n\\r\\n/* 16 */\\n.btn-16 {\\r\\n  border: none;\\r\\n  color: #aaa;\\n}\\n.btn-16:after {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  width: 0;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  direction: rtl;\\r\\n  z-index: -1;\\r\\n  border-radius: 50px;\\r\\n  box-shadow:\\r\\n   -7px -7px 20px 0px #fff9,\\r\\n   -4px -4px 5px 0px #fff9,\\r\\n   7px 7px 20px 0px #0002,\\r\\n   4px 4px 5px 0px #0001;\\r\\n  transition: all 0.3s ease;\\n}\\n.btn-16:hover {\\r\\n  color: #bbb;\\n}\\n.btn-16:hover:after {\\r\\n  left: auto;\\r\\n  right: 0;\\r\\n  width: 100%;\\n}\\n.btn-16:active {\\r\\n  top: 2px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/CandiesButton/candiesButton.css?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"6282af56\", content, true, {\"sourceMap\":false,\"shadowMode\":false});\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=custom&index=0&blockType=docs":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CandiesButton/CandiesButton.vue?vue&type=custom&index=0&blockType=docs ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n\t\tComponent.options.__docs = \"module.exports = {}\"\n\t  });\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/CandiesButton/CandiesButton.vue":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/CandiesButton/CandiesButton.vue ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = {};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '花里胡哨的糖果按钮\\n\\n## 组件案例\\n\\n糖果按钮-1:'\n    },\n    {\n        'type': 'code',\n        'content': '<candies-button candiesTpye=\"candies-1\">Push Me</candies-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': ';return {data:function(){return {};}}',\n            'style': void 0,\n            'template': '<candies-button candiesTpye=\"candies-1\">Push Me</candies-button>'\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '糖果按钮-2:'\n    },\n    {\n        'type': 'code',\n        'content': '<candies-button candiesTpye=\"candies-2\">Push Me</candies-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': ';return {data:function(){return {};}}',\n            'style': void 0,\n            'template': '<candies-button candiesTpye=\"candies-2\">Push Me</candies-button>'\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '糖果按钮-3:'\n    },\n    {\n        'type': 'code',\n        'content': '<candies-button candiesTpye=\"candies-3\">Push Me</candies-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': ';return {data:function(){return {};}}',\n            'style': void 0,\n            'template': '<candies-button candiesTpye=\"candies-3\">Push Me</candies-button>'\n        }\n    }\n]\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue%7Cjs%7Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/CandiesButton/CandiesButton.vue":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/CandiesButton/CandiesButton.vue ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'exportName': 'default',\n    'displayName': 'candies-button',\n    'docsBlocks': ['花里胡哨的糖果按钮 \\n\\n## 组件案例\\n\\n糖果按钮-1:\\n\\n```jsx\\n<candies-button candiesTpye=\"candies-1\">Push Me</candies-button>\\n```\\n\\n糖果按钮-2:\\n\\n```jsx\\n<candies-button candiesTpye=\"candies-2\">Push Me</candies-button>\\n```\\n\\n糖果按钮-3:\\n\\n```jsx\\n<candies-button candiesTpye=\"candies-3\">Push Me</candies-button>\\n```'],\n    'description': '',\n    'tags': {},\n    'props': [\n        {\n            'name': 'background',\n            'description': '设置按钮的背景颜色',\n            'tags': {\n                'since': [{\n                        'description': '1.2.0',\n                        'title': 'since'\n                    }]\n            },\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'white\\''\n            }\n        },\n        {\n            'name': 'candiesTpye',\n            'description': '设置糖果按钮样式',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'custom-btn\\''\n            }\n        },\n        {\n            'name': 'color',\n            'description': '设置按钮颜色',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'black\\''\n            }\n        },\n        {\n            'name': 'margin',\n            'description': '设置元素外边距',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'20px\\''\n            }\n        },\n        {\n            'name': 'oldColor',\n            'tags': {\n                'deprecated': [{\n                        'description': '使用颜色相反',\n                        'title': 'deprecated'\n                    }]\n            },\n            'type': { 'name': 'string' }\n        },\n        {\n            'name': 'size',\n            'description': '设置元素的大小',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'14px\\''\n            }\n        }\n    ],\n    'events': {\n        'click': {\n            'name': 'click',\n            'description': '当点击按钮时触发',\n            'type': { 'names': ['Event'] }\n        },\n        'gator': {\n            'name': 'gator',\n            'description': '事件为 Alligator 的例子',\n            'type': { 'names': ['Event'] }\n        }\n    },\n    'methods': void 0,\n    'slots': {\n        'default': {\n            'name': 'default',\n            'description': '使用此槽放置按钮内容'\n        }\n    },\n    'example': __webpack_require__(/*! !./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/CandiesButton/CandiesButton.vue */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/CandiesButton/CandiesButton.vue\"),\n    'examples': null\n}\n\t\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./src/components/CandiesButton/CandiesButton.vue":
/*!********************************************************!*\
  !*** ./src/components/CandiesButton/CandiesButton.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CandiesButton_vue_vue_type_template_id_570eebde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandiesButton.vue?vue&type=template&id=570eebde&scoped=true& */ \"./src/components/CandiesButton/CandiesButton.vue?vue&type=template&id=570eebde&scoped=true&\");\n/* harmony import */ var _CandiesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandiesButton.vue?vue&type=script&lang=js& */ \"./src/components/CandiesButton/CandiesButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _CandiesButton_vue_vue_type_style_index_0_id_570eebde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css& */ \"./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _CandiesButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CandiesButton.vue?vue&type=custom&index=0&blockType=docs */ \"./src/components/CandiesButton/CandiesButton.vue?vue&type=custom&index=0&blockType=docs\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _CandiesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CandiesButton_vue_vue_type_template_id_570eebde_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CandiesButton_vue_vue_type_template_id_570eebde_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"570eebde\",\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _CandiesButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === 'function') Object(_CandiesButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?");

/***/ }),

/***/ "./src/components/CandiesButton/CandiesButton.vue?vue&type=custom&index=0&blockType=docs":
/*!***********************************************************************************************!*\
  !*** ./src/components/CandiesButton/CandiesButton.vue?vue&type=custom&index=0&blockType=docs ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-styleguidist/lib/loaders/docs-loader.js!../../../node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CandiesButton.vue?vue&type=custom&index=0&blockType=docs */ \"./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=custom&index=0&blockType=docs\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_custom_index_0_blockType_docs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?");

/***/ }),

/***/ "./src/components/CandiesButton/CandiesButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/components/CandiesButton/CandiesButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CandiesButton.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?");

/***/ }),

/***/ "./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_style_index_0_id_570eebde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=style&index=0&id=570eebde&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_style_index_0_id_570eebde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_style_index_0_id_570eebde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_style_index_0_id_570eebde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_style_index_0_id_570eebde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?");

/***/ }),

/***/ "./src/components/CandiesButton/CandiesButton.vue?vue&type=template&id=570eebde&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/components/CandiesButton/CandiesButton.vue?vue&type=template&id=570eebde&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_d153ef94_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_template_id_570eebde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"d153ef94-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CandiesButton.vue?vue&type=template&id=570eebde&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"d153ef94-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CandiesButton/CandiesButton.vue?vue&type=template&id=570eebde&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_d153ef94_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_template_id_570eebde_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_d153ef94_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandiesButton_vue_vue_type_template_id_570eebde_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/CandiesButton/CandiesButton.vue?");

/***/ }),

/***/ "./src/components/sizeMixin.js":
/*!*************************************!*\
  !*** ./src/components/sizeMixin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @mixin\n */\nmodule.exports = {\n  props: {\n    /**\n     * 设置元素的大小\n     */\n    size: {\n      type: String,\n      default: '14px'\n    },\n\n    /**\n     * 设置元素外边距\n     */\n    margin: {\n      type: String,\n      default: '20px'\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/components/sizeMixin.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./node_modules/vue-styleguidist/lib/client/index ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! E:\\A-学习\\组件开发\\styleguidist-obj\\node_modules\\vue-styleguidist\\lib\\client\\index */\"./node_modules/vue-styleguidist/lib/client/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/vue-styleguidist/lib/client/index?");

/***/ })

/******/ });