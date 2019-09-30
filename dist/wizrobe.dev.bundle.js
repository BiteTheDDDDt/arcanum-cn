var wizrobe =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"wizrobe": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "dev/" + ({"bestiary-ui":"bestiary-ui","enchant-ui":"enchant-ui","equip-ui":"equip-ui","homes-ui":"homes-ui","inv-ui":"inv-ui","minions-ui":"minions-ui","player-ui":"player-ui","potions-ui":"potions-ui","skills-ui":"skills-ui","spells-ui":"spells-ui"}[chunkId]||chunkId) + ".bundle.js"
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.adventure[data-v-d27ac1a4] {\r\n\tdisplay:flex;\r\n\tpadding:0px 15px;\r\n\talign-self: flex-start;\r\n\tflex-flow: column nowrap;\r\n\theight:100%;\n}\ndiv.locales[data-v-d27ac1a4] {\r\n\tdisplay:flex;\r\n\talign-items:flex-start;\r\n\tflex-grow:1;\r\n\tflex-flow: row wrap;\r\n\tjustify-content: space-between;\r\n\toverflow-y: auto;\r\n\tmin-height: 50%;\r\n\tpadding-bottom: 32px;\r\n\tborder-bottom: 1px solid var(--separator-color);\n}\ndiv.raid-bottom[data-v-d27ac1a4] {\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\r\n\tjustify-content: space-between;\r\n\tpadding-top:8px;\r\n\twidth:100%;\r\n\toverflow-y:auto;\n}\n.adventure .log[data-v-d27ac1a4] {\r\n\tflex-basis:48%;\r\n\tflex-grow:1;\r\n\tmargin: 0px 0px 10px 20px;\n}\n.active-dungeon[data-v-d27ac1a4] {\r\n\tdisplay:flex;\r\n\tflex-basis:40%;\r\n\tmin-width:222px;\r\n\tflex-direction:column;\n}\ndiv.dungeon[data-v-d27ac1a4] {\r\n\tdisplay:flex;\r\n\tflex-basis: 40%;\r\n\tflex-flow: column nowrap;\n}\n.bar[data-v-d27ac1a4] {\r\n\talign-self: stretch;\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nspan.my-span[data-v-193f0119] {\r\n\tdisplay:contents;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nlabel[data-v-6d0e0bec] {\r\n\tmargin-right:8px;\n}\ndiv.filter-box[data-v-6d0e0bec] {\r\n\tfont-size: 105%;\r\n\tvertical-align: middle;\r\n\tline-height: 1.2em;\r\n\tmargin: 8px 4px 8px 12px;\n}\n.filter-box input[type=text][data-v-6d0e0bec] {\r\n\tpadding: 4px;\r\n\tfont-size: 105%;\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.bar .fill {\n\t  height:100%;\n\t  padding:0;\n\t  margin:0;\n}\ndiv.bar .bar-text {\n\tcolor: var( --progbar-dark-text );\n}\ndiv.container {\n\tdisplay:inline-block;\n}\ndiv.bar {\n\n\tpadding:unset;\n\tdisplay:inline-block;\n\tbackground: #333;\n\toverflow:hidden;\n\tmargin:4px 4px 0px 2px;\n\tpadding:2px;\n\tmin-height:18px;\n\twidth:-webkit-fill-available;\n\twidth:-moz-available;\n\tborder-radius: 10px;\n}\ndiv.bar > div {\n\tbackground:orange;\n\tborder-radius: 8px;\n\tmax-height: 100%;\n\tmin-width:0px;\n\twidth:0px;\n}\n\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.popup[data-v-b5da6c06] {\r\n\theight:auto;\r\n\tmin-height:100px;\r\n\tmin-width:200px;\r\n\tmax-width:240px;\r\n\tposition: absolute;\r\n\tz-index:20000;\r\n\tleft:50%;\r\n\ttop:20%;\r\n\talign-self: center;\r\n\tbackground:inherit;\r\n\tpadding:12px;\r\n\tborder: 1.5px solid rgb( 100, 100,100);\r\n\tborder-radius: 0.20rem;\n}\ndiv.popup div[data-v-b5da6c06] {\r\n\tmargin:6px 0px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.dot-view[data-v-7dcb4a2c] {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n}\ndiv.dot-view span.mini[data-v-7dcb4a2c] {\n\tdisplay:flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n\talign-items: center;\n}\ndiv.dot[data-v-7dcb4a2c] {\n\tmax-height:40px;\n\tmargin:0px 2px;\n\ttext-align: center;\n\tpadding:4px;\n\tborder: 1px solid black;\n}\ndiv.mini[data-v-7dcb4a2c] {\n\theight:22px;\n\twidth: 22px;\n\tfont-size: 0.7em;\n\tpadding:0;\n}\n\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.pop-title[data-v-4a3f5612] {\r\n\r\n\tfont-weight: bold;\r\n\tborder-bottom: 1px solid black;\r\n\tmargin-bottom: 8px;\n}\n.item-popup[data-v-4a3f5612] {\r\n\theight:auto;\r\n\tmin-height:100px;\r\n\tmin-width:200px;\r\n\tmax-width:280px;\r\n\tposition: absolute;\r\n\tz-index:10000;\r\n\ttop:0;\r\n\topacity: 0.9;\r\n\tbackground:inherit;\r\n\tborder: 1.5px solid rgb( 100, 100,100);\r\n\tborder-radius: 0.20rem;\n}\n.popup-content[data-v-4a3f5612] {\r\n\tpadding: 10px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.combat[data-v-35ac75f5] {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\r\n\twidth:98%;\n}\n.group[data-v-35ac75f5] {\r\n\r\n\twidth:45%;\r\n\tmax-width:45%;\r\n\tmin-height:120px;\r\n\tborder: 2px solid black;\r\n\tborder-radius: 8px;\r\n\tpadding: 12px;\r\n\tmargin: 10px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.explore div.stressors[data-v-2024cb3c] {\r\n\tdisplay:flex;\r\n\tflex-flow: column wrap;\n}\ndiv.stressors .stress[data-v-2024cb3c] {\r\n\tflex-basis: 48%;\n}\ndiv.explore .active-title[data-v-2024cb3c] {\r\n\tdisplay:flex;\r\n\tmin-width: 400px;\n}\ndiv.explore .active-title > span[data-v-2024cb3c] {\r\n\tmargin-right:16px;\n}\n.combat[data-v-2024cb3c] {\r\n\toverflow-y: auto;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.tight[data-v-2d591720] {\r\n\tmargin:0;\r\n\tpadding:0;\n}\nhr[data-v-2d591720] {\r\nmargin-bottom: 4px;\n}\ndiv.item-desc[data-v-2d591720] {\r\n\tmargin: 5px 0px 10px;\r\n\tfont-size: 0.96em;\n}\n.item-name[data-v-2d591720] {\r\n\tfont-weight: bold;\n}\n.flavor[data-v-2d591720] {\r\n\tfont-style: italic;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nhr[data-v-408e302f] {\r\nmargin-bottom: 4px;\n}\ndiv.item-desc[data-v-408e302f] {\r\n\tmargin: 5px 0px 10px;\r\n\tfont-size: 0.96em;\n}\n.item-name[data-v-408e302f] {\r\n\tfont-weight: bold;\n}\n.flavor[data-v-408e302f] {\r\n\tfont-style: italic;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.name-span[data-v-09dd16a2] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\n}\n.title[data-v-09dd16a2] {\r\n\tfont-weight: bold;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.full[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tbackground:inherit;\r\n\tflex-direction: column;\r\n\tmin-width:500px;\r\n\tmax-height:100vh;\r\n\theight:100vh;\r\n\tmargin: 0px 8px;\n}\ndiv.game-main[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tmax-height: calc( 100vh - 150px);\r\n\tflex-direction: row;\r\n\tflex-grow: 1;\r\n\tjustify-content: space-between;\n}\ndiv.game-mid[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tborder-left: 1px solid var(--separator-color); border-right: 1px solid var(--separator-color);\r\n\tmax-height: 100%;\r\n\theight:100%;\r\n\tflex-basis:48%;\r\n\tflex-grow:1;\r\n\talign-content: space-around;\n}\ndiv.game-mid div.main-actions[data-v-6f034aea] {\r\n\toverflow-y: auto;\r\n\theight:100%;\n}\ndiv.action-list[data-v-6f034aea], div.upgrade-list[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tmin-height:0;\r\n\tflex-flow: row wrap;\r\n\tflex-direction: row;\r\n\tpadding:0px 6px;\r\n\ttext-transform: capitalize;\n}\ndiv.action-list[data-v-6f034aea] {\r\n\tjustify-items: flex-start;\n}\ndiv.upgrade-list[data-v-6f034aea], div.action-list[data-v-6f034aea] {\r\n\tmargin: 8px 2px 2px 8px;\n}\ndiv.upgrade-list[data-v-6f034aea] {\r\n\tmin-height:0;\r\n\t/*border-top: 1px solid var( --separator-color );*/\r\n\tmargin-top:4px;\n}\ndiv.inv-equip[data-v-6f034aea] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\toverflow-y: auto;\r\n\tjustify-content: space-between;\r\n\theight:100%;\r\n\tpadding: 0px 16px;\n}\ndiv.bot-bar[data-v-6f034aea] {\r\n\tbackground:inherit;\r\n\tborder-top: 1px solid var(--separator-color); padding: 4px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.outlog[data-v-c9d4ddf0] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\toverflow-y:auto;\r\n\tmax-height: 82vh;\n}\ndiv.log-view[data-v-c9d4ddf0] {\r\n\tborder-left:1px solid var(--separator-color);\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tmargin-left: 8px;\r\n\tflex-basis:20%;\r\n\tmax-width: 250px;\r\n\tmax-height: inherit;\n}\ndiv.top-span[data-v-c9d4ddf0] {\r\n\tmax-height:64px;\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\r\n\tmargin: 2px 8px 5px;\r\n\tpadding-bottom: 2px;\r\n\tborder-bottom: 1px solid rgb(88, 87, 87);\n}\nspan.checks[data-v-c9d4ddf0] {\r\n\tdisplay:flex;\r\n\tflex-flow: row wrap;\r\n\talign-items: flex-start;\n}\n.checks span[data-v-c9d4ddf0] { flex-basis: 50%;\n}\n.log-view div.log-item[data-v-c9d4ddf0] {\r\n\tpadding: 4px; margin: 1px 0; border-bottom: 1px dotted #DDD;\n}\r\n\r\n/*div.log-item {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tmargin: 8px 0px;\r\n}*/\n.log-title[data-v-c9d4ddf0] {\r\n\tfont-weight: bold;\n}\n.log-text[data-v-c9d4ddf0] {\r\n\tfont-weight: normal;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\np.use-msg[data-v-3473ec58] {\r\n\tfont-size:20px;\r\n\tline-height: 1.4em;\r\n\tmargin-left: 10%;\n}\ndiv.quickbar[data-v-3473ec58] {\r\n\r\n\tdisplay:flex;\r\n\tcursor:pointer;\r\n\tflex-basis: 72px;\r\n\twidth:100%;\r\n\tflex-direction: row;\r\n\tjustify-self: flex-end;\r\n\tz-index: 50;\r\n\tmargin: 8px 0px;\n}\ndiv.quickslot[data-v-3473ec58] {\r\n\tz-index: 100;\r\n\tmin-width: 52px;\r\n\tmin-height:52px;\r\n\ttext-transform: capitalize;\r\n\tmargin: 2px 6px 4px 4px;\r\n\tpadding:2px;\r\n\ttext-align: center;\r\n\t/** relative so remove button correctly placed. **/\r\n\tposition: relative;\r\n\tfont-size:xx-large;\r\n\tborder: 1px solid #181818;\n}\ndiv.remove[data-v-3473ec58] {\r\n\tposition:absolute;\r\n\tborder: 1px solid #181818;\r\n\ttop:0px;\r\n\tright:0px;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tbackground:white;\r\n\topacity:0.65;\r\n\tz-index: 10;\r\n\tmin-height:12px;\r\n\tmin-width: 12px;\r\n\tfont-size: 0.8rem;\n}\ndiv.remove[data-v-3473ec58]::after {\r\n\tcontent:\"x\";\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.resource-list[data-v-9c4a587a] {\r\n\toverflow-y:auto;\r\n\toverflow-x:visible;\r\n\twidth: fit-content;\r\n\tpadding-right:4px;\r\n\tpadding-top:8px;\r\n\tmin-width: 160px;\n}\ntr td[data-v-9c4a587a]:first-child {\r\n\tpadding-right: 6px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.running[data-v-a3fd1046] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.settings[data-v-0292def5] {\r\n\theight:auto;\r\n\tmin-height:200px;\r\n\tmin-width:300px;\r\n\tmax-width:440px;\r\n\tposition: absolute;\r\n\tz-index:10000;\r\n\ttop:120px;\r\n\tbackground:inherit;\r\n\tborder: 1.5px solid rgb( 100, 100,100);\r\n\tborder-radius: 0.20rem;\r\n\tpadding: 12px;\n}\nbutton.close[data-v-0292def5] {\r\n\tposition:absolute;\r\n\tbottom: 10px;\r\n\tright:10px;\n}\n.hide[data-v-0292def5] {\r\n\tdisplay:none;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nspan.vers[data-v-5e8f13b9] {\r\n\tfont-size: 0.9em;\r\n\talign-self: center;\r\n\tmargin-bottom: 4px;\n}\n#save-file[data-v-5e8f13b9] {\r\n\ttext-decoration: none;\n}\n#drop-file[data-v-5e8f13b9] {\r\n\tborder: 1.75px dashed rgb(117, 117, 117);\n}\ndiv.top-bar[data-v-5e8f13b9] {\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\r\n\tjustify-content: flex-start;\r\n\tjustify-items: flex-start;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tmin-height:52px;\r\n\tmax-width:100%;\r\n\toverflow:hidden;\r\n\tpadding: 0px 14px 4px;\r\n\tborder-bottom: 1px solid var(--separator-color);\n}\n.top-bar .items[data-v-5e8f13b9] {\r\n\tdisplay:flex;\r\n\tmargin-left:20px;\n}\n.load-opts[data-v-5e8f13b9] {\r\n\tdisplay:flex;\n}\n.load-opts button[data-v-5e8f13b9] {\r\n\tmin-height:29px;\r\n\theight:29px;\r\n\tmax-height:29px;\n}\n.load-opts .text-button[data-v-5e8f13b9] {\r\n\tmax-height:21px;\n}\n.link-bar[data-v-5e8f13b9] {\r\n\tjustify-self: flex-end;\r\n\tdisplay:flex;\r\n\tflex-grow: 1;\r\n\tflex-flow: row-reverse nowrap;\r\n\tfont-size: 0.90em;\n}\n.link-bar a[data-v-5e8f13b9] {\r\n\tmargin:0px 10px 4px;\r\n\talign-self:center;\n}\nspan.load-message[data-v-5e8f13b9] {\r\n\tpadding: 8px 8px 2px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.vitals[data-v-0b887939] {\r\n\tmargin:4px 8px;\r\n\tflex-basis: 19%;\r\n\tmin-width: 200px;\n}\ndiv.vitals .bars[data-v-0b887939] {\r\n\twidth: -moz-available;\r\n\twidth:-webkit-fill-available;\n}\ntable .td-prog[data-v-0b887939] {\r\n\tcolumns: 2;\n}\ntr td[data-v-0b887939]:first-child {\r\n\tmax-width: 33%;\n}\ntr td[data-v-0b887939]:last-child {\r\n\twidth:100%;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/objecty/index.js":
/*!***************************************!*\
  !*** ./node_modules/objecty/index.js ***!
  \***************************************/
/*! exports provided: changes, clone, cloneClass, propPaths, merge, mergeSafe, getProps, includesAny, randElm, getPropDesc, assign, defineExcept, jsonify, defineVars, sublists, randMatch, assignOwn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changes", function() { return changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneClass", function() { return cloneClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propPaths", function() { return propPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSafe", function() { return mergeSafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProps", function() { return getProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includesAny", function() { return includesAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randElm", function() { return randElm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropDesc", function() { return getPropDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineExcept", function() { return defineExcept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonify", function() { return jsonify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineVars", function() { return defineVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sublists", function() { return sublists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randMatch", function() { return randMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignOwn", function() { return assignOwn; });
function changes( clone, original ) {

	let res = null;

	for( let p in clone ) {

		var sub = clone[p];
		var orig = original[p];

		if ( (sub === original[p]) ) continue;
		if ( !sub ) {

			if (!orig) continue;

		} else if ( typeof sub === 'object' ) {

			if ( typeof orig === 'object' && orig !== null ) {

				sub = changes( sub, orig );
				if ( sub === null ) continue;

			}

		}

		if ( res === null ) res = {};
		res[p] = sub;

	}

	return res;

}

/**
 * Merge two objects with overwrites from src.
 * @param {Object} dest
 * @param {Object} src
 */
function merge( dest, src ) {

	for( let p in src ) {

		var srcSub = src[p];

		if ( ( typeof srcSub !== 'object' && typeof srcSub !== 'function') ) {
			dest[p] = srcSub;
			continue;
		}

		var destSub = dest[p];
		if (  Array.isArray(destSub) ) {

			if ( Array.isArray(srcSub) ) dest[p] = mergeArrays( destSub, srcSub );
			else if ( !destSub.includes(srcSub) ) destSub.push(srcSub);

		} else if ( typeof destSub === 'object') merge( destSub, srcSub );


	}

}

function mergeSafe( dest, src ) {

	for( let p in src ) {

		var destSub = dest[p];
		let srcSub = src[p];

		if ( destSub === undefined ) {

			if ( srcSub !== null && typeof srcSub === 'object' ) dest[p] = clone( srcSub, Array.isArray(srcSub) ? [] : {} );
			else dest[p] = srcSub;

			continue;

		} else if ( destSub === null ) continue;


		if ( srcSub && typeof destSub === 'object' && typeof srcSub === 'object') {

			if ( !Array.isArray(destSub) && !Array.isArray(srcSub) ) mergeSafe( destSub, srcSub );

		}

	}

}

/**
 * Merge two arrays, ignoring entries duplicated between arrays.
 * @param {Array} a1
 * @param {Array} a2
 * @returns {Array}
 */
function mergeArrays( a1, a2) {
	return a1.concat( a2.filter(v=>!a1.includes(v) ) );
}

/**
 * Performs a deep-clone of an object, including class prototype
 * and class methods.
 * @param {Object} src
 */
function cloneClass( src ) {

	let o, f;

	let proto = Object.getPrototypeOf( src );
	let dest = Array.isArray(src) ? [] : ( proto ? Object.create( proto ) : {} );

	for( let p in src ) {

		o = src[p];

		var def = getPropDesc( dest, p );
		if ( def && ( !def.writable || def.set === undefined ) ) continue;

		if ( o === null || o === undefined ) dest[p] = o;
		else if ( typeof o === 'object' ) {

			f = ( o.clone );
			if ( f && typeof f === 'function' ) dest[p] = f.call( o );
			else dest[p] = cloneClass( o );

		} else dest[p] = o;

	}

	return dest;

}

function clone( src, dest={} ){

	let o, f;
	for( let p in src ) {

		o = src[p];
		if ( o === null || o === undefined ) dest[p] = o;
		else if ( Array.isArray(o) ) {

			dest[p] = clone( o, [] );

		} else if ( typeof o === 'object' ) {

			f = ( o.clone );
			if ( f && typeof f === 'function' ) dest[p] = f.call( o );
			else dest[p] = clone( o );

		} else dest[p] = o;

	}

	return dest;

}

function propPaths( base ) {

	let res = [];
	let objStack = [];
	let pathStack = [];

	let path = '';

	while ( base ) {

		for( let p in base ) {

			var sub = base[p];
			if ( typeof sub === 'object' && !( Array.isArray(sub)) ) {
				objStack.push(sub);
				pathStack.push( path + p + '.' );
				continue;
			} else res.push( path + p );

		}

		base = objStack.pop();
		if ( base === undefined ) break;
		path = pathStack.pop();

	}

	return res;

}

/**
 * Return an array of all properties defined by an Object or its ancestors.
 * @param {Object} obj - Object whose properties are returned.
 * @param {bool} ownData - whether to include private data variables.
 * @param {bool} getters - whether to include getter properties.
 * @return {string[]} Array of property names.
 */
function getProps( obj, ownData=true, getters=true ) {

	if ( !obj ) return [];

	let proto = ownData ? obj : Object.getPrototypeOf(obj);

	let p, props = [];

	/// fast version for when private variables and getters don't
	/// have to be ruled out.
	if ( getters === true ) {
		while ( proto !== Object.prototype ) {

			for ( p of Object.getOwnPropertyNames(proto)) {

				if ( typeof obj[p] !== 'function') props.push( p );
			}

			// quick push.
			//props.push.apply( props, Object.getOwnPropertyNames(proto) );
			proto = Object.getPrototypeOf( proto );

		} // while-loop.

	} else {

		while ( proto !== Object.prototype ) {

			for ( p of Object.getOwnPropertyNames(proto)) {

				if ( typeof obj[p] === 'function') continue;
				if ( Object.getOwnPropertyDescriptor(proto, p).get === undefined ) {
					props.push( p );
					//else console.log( 'hiding internal prop: ' + p );
				} else {
					if ( getters === true ) props.push(p);
				}

			}
			proto = Object.getPrototypeOf( proto );

		} // while-loop.

	}

	return props;

}


/**
 * Determines if array contains any of the given params.
 * @param {Array} arr - array to test for inclusions.
 * @param  {...any} params - arguments to test for inclusion in array.
 * @returns {boolean} - true if at least one param is found in the array.
 */
function includesAny( arr, ...params ) {

	for( let i = params.length-1; i>= 0; i-- ) {
		if ( arr.includes(params[i]) ) return true;
	}
	return false;

}

/**
 * Return random element of an array.
 * @param {Array} a
 * @returns {*} Random element of array.
 */
function randElm( a ) {
	return (a===undefined||a.length===0) ? null : a[Math.floor( Math.random()*a.length) ];
}

/**
 * Return a random element from an array which matches
 * a predicate.
 * @param {Array} a
 * @param {(*)=>boolean} pred - predicate test which a picked array element must pass.
 * @returns {*} random element of array which passes the predicate.
 */
function randMatch( a, pred ) {

	let start = Math.floor( Math.random()*a.length );
	let ind = start;

	do {

		if ( pred( a[ind] ) ) return a[ind];
		ind = --ind >= 0 ? ind : a.length-1;

	} while ( ind !== start );

	return null;

}

/**
 * Sort item of a target array or object into sublists
 * based on each subobject's indexer value.
 * @param {Array|Object} arr
 * @param {string|function} indexer - property indexer or function that returns sublist index.
 * @returns {Object.<string|number,Array>} An object containing arrays
 * of sub-objects with matching property values.
 */
function sublists( arr, indexer ) {

	let lists = {};

	let func = ((typeof indexer) === 'function');

	for( let i in arr ) {

		var sub = arr[i];
		if ( sub === null || sub === undefined ) continue;

		var ind = func ? func(sub) : sub[indexer];

		var list = lists[ind];
		if ( list === null || list === undefined ) lists[ind] = list = [];

		list.push(sub);

	}

	return lists;

}

/**
 * Define values for all of an Object's undefined properties with setters
 * up through its Object chain.
 * This can be useful in frameworks like Vue, where watched Objects must
 * have all their properties defined when the template is created.
 * @param {Object} obj - Object to assign properties for.
 * @param {*} [defaultVal=null] - Value to assign to undefined properties.
 */
function defineVars( obj, defaultVal=null ) {

	if ( !obj ) return;
	let proto = obj;

	while ( proto !== Object.prototype ) {

		for ( p of Object.getOwnPropertyNames(proto)) {

			if ( obj[p] !== undefined ) continue;
			if ( Object.getOwnPropertyDescriptor(proto, p).set !== undefined ) {

				obj[p] = defaultVal;

			}

		}
		proto = Object.getPrototypeOf( proto );

	} // while-loop.

}

/**
 * Define values for all of an Object's undefined properties with setters
 * up through its Object chain.
 * This can be useful in frameworks like Vue, where watched Objects must
 * have all their properties defined when the template is created.
 * @param {Object} obj - Object to assign properties for.
 * @param {*} [defaultVal=null] - Value to assign to undefined properties.
 * @param {string[]} [except=[]] - Properties to ignore.
 */
function defineExcept( obj, defaultVal=null, except=[] ) {

	if ( !obj ) return;
	let proto = obj;

	while ( proto !== Object.prototype ) {

		for ( let p of Object.getOwnPropertyNames(proto)) {

			if ( except.includes(p) || obj[p] !== undefined ) continue;
			if ( Object.getOwnPropertyDescriptor(proto, p).set !== undefined ) {

				obj[p] = defaultVal;

			}

		}
		proto = Object.getPrototypeOf( proto );

	} // while-loop.

}

/**
 * Searches an object's prototype chain for a property descriptor.
 * @param {Object} obj
 * @param {string} k - property key.
 * @returns {PropertyDescriptor|null}
 */
function getPropDesc(obj, k) {

	while (obj !== Object.prototype) {

		var desc = Object.getOwnPropertyDescriptor(obj, k);
		if (desc) return desc;
		obj = Object.getPrototypeOf(obj);

	}
	return null;

}

/**
 * Copies all values from a source object into a destination object,
 * if property is writable on destination.
 * @param {Object} dest - Destination for json data.
 * @param {Object} src - Object data to write into dest.
 * @param {string[]} [exclude=null] - Array of properties not to copy from src to dest.
 * @returns {Object} the destination object.
 */
function assign(dest, src, exclude = null) {

	while ( src !== Object.prototype ) {

		for (let p of Object.getOwnPropertyNames(src) ) {

			if (exclude && exclude.includes(p)) continue;
			var desc = getPropDesc(dest, p );

			if ( desc && (desc.set === undefined && !desc.writable )) continue;

			dest[p] = src[p];

		} //for

		src = Object.getPrototypeOf(src);
	}

	return dest;

}

/**
 * Copies all values from a source object into a destination object,
 * when those values exist as properties of the destination.
 * @param {Object} dest - Destination for json data.
 * @param {Object} src - Object data to write into dest.
 * @param {string[]} [exclude=null] - Array of properties not to copy from src to dest.
 * @returns {Object} the destination object.
 */
function assignOwn(dest, src, exclude = null) {

	for (let p in src ) {

		if (exclude && exclude.includes(p)) continue;
		var desc = getPropDesc(dest, p );

		if ( desc === null || (desc.set === undefined && !desc.writable )) continue;

		dest[p] = src[p];

	} //for


	return dest;

}

/**
 * Convert an object to a JSON object ready to be stringified.
 * @param {Object} obj - the objet to convert.
 * @param {string[]} [excludes=null] - Array of properties to exclude from encoding.
 * @param {string[]} [includes=null] - Array of properties to always include in encoding, if they exist.
 * @param {bool} [writableOnly=true] - Whether to only include writable properties / exclude read-only properties.
 */
function jsonify(obj, excludes=null, includes=null, writableOnly = true) {

	let r = {}, p, sub;

	if (includes) {
		let len = includes.length;
		for (let i = len - 1; i >= 0; i--) {

			p = includes[i];
			if ( obj.hasOwnProperty(p) ) {
				sub = obj[p];
				if ( typeof sub === 'object' && sub !== null && typeof sub.toJSON === 'function') r[p] = sub.toJSON();
				else r[p] = sub;
			}

		}
	}

	var proto = Object.getPrototypeOf(obj);
	while (proto != Object.prototype) {

		for ( p of Object.getOwnPropertyNames(proto)) {

			if ( excludes && excludes.includes(p) ) continue;

			var desc = Object.getOwnPropertyDescriptor(proto, p);
			if (writableOnly && desc.set === undefined && !desc.writable) continue;

			sub = obj[p];
			if (typeof sub === 'function') continue;
			if ( typeof sub === 'object' && sub !== null && typeof sub.toJSON === 'function') r[p] = sub.toJSON();
			else r[p] = sub;

		}

		proto = Object.getPrototypeOf(proto);

	} //

	return r;

}



/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./progbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/actionsView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/actionsView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemsBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemsBase.js */ "./src/ui/itemsBase.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/game.js");





/**
 * @emits [itemover, itemout]
 */
/* harmony default export */ __webpack_exports__["default"] = ({

	props:['items'],
	mixins:[_itemsBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
	created(){
		this.game = _game__WEBPACK_IMPORTED_MODULE_1__["default"];
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/adventure.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _itemsBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemsBase.js */ "./src/ui/itemsBase.js");
/* harmony import */ var _components_progbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/progbar.vue */ "./src/ui/components/progbar.vue");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filterbox.vue */ "./src/ui/components/filterbox.vue");
/* harmony import */ var _items_explore_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/explore.vue */ "./src/ui/items/explore.vue");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events */ "./src/events.js");











const MAX_ITEMS = 5;

/* harmony default export */ __webpack_exports__["default"] = ({

	props:['state'],
	mixins:[_itemsBase_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
	data(){
		return {
			log:_game__WEBPACK_IMPORTED_MODULE_0__["default"].log,
			filtered:null
		}
	},
	beforeCreate(){
		this.ENTER_LOC = _events__WEBPACK_IMPORTED_MODULE_5__["ENTER_LOC"];
		this.game = _game__WEBPACK_IMPORTED_MODULE_0__["default"];
	},
	components:{
		explore:_items_explore_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
		progbar:_components_progbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
		inv:()=>__webpack_require__.e(/*! import() | inv-ui */ "inv-ui").then(__webpack_require__.bind(null, /*! ./inventory.vue */ "./src/ui/inventory.vue"))
	},
	computed:{

		drops() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.drops; },

		combatLog() {
			return this.log.items.filter(
				v=>v.type==='combat' ).slice( -MAX_ITEMS );
		},

		explore() { return this.state.raid.running ? this.state.raid : this.state.explore; },

		exploring() { return this.explore && this.explore.running; },

		locales(){
			return this.state.filterItems(
				it=>(it.type==='dungeon'||it.type==='locale') && !this.locked(it)
			);
		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/confirm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {string} confirm - confirm display text.
	 * @property {string} cancel - cancel display text.
	 */
	props:['confirm','cancel'],
	data(){
		return {
			btnConfirm:this.confirm||'Confirm',
			btnCancel:this.cancel||'Cancel',
			confirming:false
		};
	},
	methods:{

		/**
		 * @public
		 * Resets the confirm dialog when the Confirm prompt
		 * is no longer applicable.
		 */
		reset() {
			this.confirming = false;
		},
		mainClick(){
			this.confirming=true;
			this.$emit( 'click' );
		},
		confirmClick(){
			this.confirming = false;
			this.$emit( 'confirm' );
		},
		cancelClick(){
			this.confirming=false;
			this.$emit( 'cancel' );
		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {object[]} items - items to filter.
	 * @property {prop} [prop='name'] - target prop of filter test.
	 *
	 * @property {number} [minItems=0] - minimum number of items before box is visible.
	 */
	props:['value', 'items', 'prop', 'minItems'],
	data() {
		return {
			text:'',
			pprop:this.prop||'name'
		}
	},
	watch:{
		items(newVal,oldVal){
			this.findText = this.findText;
		}
	},
	created(){
		this.findText = this.text;
	},
	computed:{

		findText:{

			get() { return this.text; },
			set(v){

				this.text = v;

				let p = this.pprop;

				if ( !v ) this.$emit( 'input', this.items );
				else if ( typeof p === 'function') {

 					this.$emit( 'input', this.items.filter(
						it=>p(it, v)
					));

				} else this.$emit( 'input', this.items.filter(
					it=>(typeof it === 'object') &&
					( (typeof it[p]) === 'string' ) && it[p].includes( v )
				));

			}

		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/menu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/menu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({

	props:['value', 'items'],
	methods:{

		itemTitle(it) {

			if ( it instanceof Object ) {
				return it.name || it.desc || it.id;
			} return it;

		},

		itemId(it){
			if ( it instanceof Object ) {
				return it.id;
			}
			return it;
		},

		setActive( it ) {

			this.$emit( 'input', it );
			this.$emit( 'changed', it );

		}

	}

});



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/progbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({

	props:['value', 'max', 'label', 'hideStats'],
	computed:{

		val() { return this.value ? this.value : 0; },

		width(){
			let val = Math.floor( 100*(this.value/this.max) );
			if ( val > 100 ) val = 100;
			else if ( val < 0 ) val = 0;
			return val + '%;'
		}
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/warn.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popups_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popups.js */ "./src/ui/components/popups.js");



/* harmony default export */ __webpack_exports__["default"] = ({

	data() {
		return { item:null }
	},
	updated() {
		if ( this.item ) {
			Object(_popups_js__WEBPACK_IMPORTED_MODULE_0__["center"])( this.$el );
		}
	},
	methods:{
		warn(it){
			this.item = it;
		},
		confirm(){
			let it = this.item;
			this.item = null;
			if ( it ) this.$emit('confirmed', it );

		},
		cancel(){ this.item = null; }

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/dotView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/format.js */ "./src/util/format.js");
/* harmony import */ var ui_itemsBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/itemsBase */ "./src/ui/itemsBase.js");




/* harmony default export */ __webpack_exports__["default"] = ({

	props:['dots', 'mini'],
	mixins:[ui_itemsBase__WEBPACK_IMPORTED_MODULE_1__["default"]],
	beforeCreate(){
		this.seconds = _util_format_js__WEBPACK_IMPORTED_MODULE_0__["seconds"];
		this.abbr = _util_format_js__WEBPACK_IMPORTED_MODULE_0__["abbr"];
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/itemPopup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _items_gdata_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/gdata.vue */ "./src/ui/items/gdata.vue");
/* harmony import */ var _components_popups_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/popups.js */ "./src/ui/components/popups.js");







/**
 * Box for displaying item information.
 */
/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {boolean} sell - if the pane is a sell-view.
	 *
	 * @property {string} title - optional custom title
	 */
	props:["item", "elm", 'sell', 'title'],
	updated() {
		// waiting for width to change before reposition.
		if ( this.item ) {
			Object(_components_popups_js__WEBPACK_IMPORTED_MODULE_2__["positionAt"])( this.$el, this.elm );
		}
	},
	components:{ gdata:_items_gdata_vue__WEBPACK_IMPORTED_MODULE_1__["default"] }

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/attack.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/attack.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../values/range */ "./src/values/range.js");
/* harmony import */ var _dot_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dot.vue */ "./src/ui/items/dot.vue");




/* harmony default export */ __webpack_exports__["default"] = ({

	props:['item'],
	name:'attack',
	components:{
		gdata:() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./gdata.vue */ "./src/ui/items/gdata.vue")),
		dot:_dot_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
	},
	computed:{

		damage(){

			let dmg = this.item.damage;
			if( typeof dmg === 'number') return dmg;
			else if ( dmg instanceof _values_range__WEBPACK_IMPORTED_MODULE_0__["default"] ) return dmg.toString();
			else if ( dmg ) {
				//console.log('unknown damage:' + this.item.damage );
				//console.log( typeof this.item.damage );
				//console.log( this.item.damage.min);
			}

		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/combat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game */ "./src/game.js");
/* harmony import */ var _npc_group_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./npc-group.vue */ "./src/ui/items/npc-group.vue");




/* harmony default export */ __webpack_exports__["default"] = ({

	props:['combat'],
	components:{
		'npc-group':_npc_group_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
	},
	computed:{
		player() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.player; }
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/dot.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/dot.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../values/range */ "./src/values/range.js");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _info_block_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-block.vue */ "./src/ui/items/info-block.vue");






/* harmony default export */ __webpack_exports__["default"] = ({

	props:['dot'],
	name:'dot',
	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_1__["default"]],
	components:{
		info:_info_block_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
	},
	computed:{

		damage(){

			let dmg = this.dot.damage;
			if( typeof dmg === 'number') {
				return dmg;
			} else if ( dmg instanceof _values_range__WEBPACK_IMPORTED_MODULE_0__["default"] ) return dmg.toString();

		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/explore.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game */ "./src/game.js");
/* harmony import */ var _combat_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat.vue */ "./src/ui/items/combat.vue");
/* harmony import */ var _components_progbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/progbar.vue */ "./src/ui/components/progbar.vue");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events */ "./src/events.js");








/* harmony default export */ __webpack_exports__["default"] = ({

	props:['explore'],
	components:{
		combat:_combat_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
		progbar:_components_progbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
	},
	created(){
		this.EXIT_LOC = _events__WEBPACK_IMPORTED_MODULE_3__["EXIT_LOC"];
	},
	methods:{

		/**
		 * Enc rollover
		 */
		encOver($event){

			if ( this.enc ) this.dispatch('itemover', $event, this.enc );

		}

	},
	computed:{

		stressors() {
			return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.stressors.filter(v=>!v.locked&&!v.disabled);
		},

		/**
		 * @property {Player} player
		 */
		player() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.player; },

		/**
		 * @property {string} type - locale type
		 */
		type() { return this.explore.type; },

		/**
		 * @property {Encounter} enc - current encounter.
		 */
		enc() { return this.explore.enc; },

		encName(){
			return this.enc ? this.enc.name : '';
		},
		encVal(){
			return this.enc ? this.enc.exp : 0;
		},
		encLen(){
			return this.enc ? this.enc.length : 10;
		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/gdata.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game */ "./src/game.js");
/* harmony import */ var _itemsBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsBase.js */ "./src/ui/itemsBase.js");
/* harmony import */ var _info_block_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-block.vue */ "./src/ui/items/info-block.vue");
/* harmony import */ var _attack_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attack.vue */ "./src/ui/items/attack.vue");
/* harmony import */ var _util_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/format */ "./src/util/format.js");









/* harmony default export */ __webpack_exports__["default"] = ({
	props:['item'],
	name:"gdata",
	mixins:[_itemsBase_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
	components:{
		info:_info_block_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
		attack:_attack_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
	},
	methods:{
		precise(v){return Object(_util_format__WEBPACK_IMPORTED_MODULE_4__["precise"])(v);},
	},
	computed:{

		sellPrice(){ return _game__WEBPACK_IMPORTED_MODULE_0__["default"].sellPrice(this.item);},

		/**
		 * Occurance of next 'every' improvement relative to cur value.
		 */
		nextEvery() {

			let v = Math.floor( this.item.value );

			var next = Number.MAX_VALUE;

			var f;	// save every-divisor for pct computation.

			for( let p in this.item.every ) {

				var dist = p - ( v % p );
				if ( dist < next ) {
					next = dist;
					f = p;
				}

			}

			return ( next !== Number.MAX_VALUE) ? ( (f-dist) / f ) : -1;

		},

		nextAt() {

			let v = this.item.value;

			// least upper bound.
			var sup = Number.MAX_VALUE;
			for( let p in this.item.at ) {
				p = Number(p);
				if ( p > v && p < sup ) sup = p;
			}

			return ( sup > v && sup !== Number.MAX_VALUE ) ? sup : -1;

		},
		tags(){

			let t = this.item.tags;
			if ( typeof t === 'string') return this.stripTags(t);
			else if ( Array.isArray(t) ) return t.map( this.stripTags, this ).join(', ');

		}


	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/info-block.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemsBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../itemsBase.js */ "./src/ui/itemsBase.js");



/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
	props:['title', 'info', 'rate'],
	mixins:[_itemsBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]]
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/npc-group.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_progbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/progbar.vue */ "./src/ui/components/progbar.vue");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _dotView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dotView.vue */ "./src/ui/dotView.vue");





/* harmony default export */ __webpack_exports__["default"] = ({

	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_1__["default"]],
	props:['npcs', 'label', 'player'],
	components:{
		prog:_components_progbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
		dots:_dotView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/main.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _components_menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu.vue */ "./src/ui/components/menu.vue");
/* harmony import */ var _resources_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.vue */ "./src/ui/resources.vue");
/* harmony import */ var _actionsView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionsView.vue */ "./src/ui/actionsView.vue");
/* harmony import */ var _upgrades_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upgrades.vue */ "./src/ui/upgrades.vue");
/* harmony import */ var _quickbar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quickbar.vue */ "./src/ui/quickbar.vue");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _components_warn_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/warn.vue */ "./src/ui/components/warn.vue");
/* harmony import */ var ui_vitals_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ui/vitals.vue */ "./src/ui/vitals.vue");
/* harmony import */ var _dotView_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dotView.vue */ "./src/ui/dotView.vue");
/* harmony import */ var _itemPopup_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./itemPopup.vue */ "./src/ui/itemPopup.vue");
/* harmony import */ var _top_bar_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./top-bar.vue */ "./src/ui/top-bar.vue");
/* harmony import */ var _settings_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings.vue */ "./src/ui/settings.vue");
/* harmony import */ var _outlog_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./outlog.vue */ "./src/ui/outlog.vue");
/* harmony import */ var _adventure_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adventure.vue */ "./src/ui/adventure.vue");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../settings */ "./src/settings.js");
/* harmony import */ var _cheats__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../cheats */ "./src/cheats.js");
























/**
 * @var {number} SAVE_TIME  - time in seconds between auto-saves.
 */
const SAVE_TIME = 30;

/**
 * @listens [sell,itemover,itemout]
 */
/* harmony default export */ __webpack_exports__["default"] = ({

	//mixins:__DIST ? [ItemsBase] : [ItemsBase,Cheats],\
	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_6__["default"],_cheats__WEBPACK_IMPORTED_MODULE_16__["default"]],
	components:{
		resources:_resources_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
		actions:_actionsView_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
		upgrades:_upgrades_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
		itempopup:_itemPopup_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
		vitals:ui_vitals_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
		log:_outlog_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
		quickbar:_quickbar_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
		dots:_dotView_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
		warn:_components_warn_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
		'top-bar':_top_bar_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
		settings:_settings_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
		skills:()=> __webpack_require__.e(/*! import() | skills-ui */ "skills-ui").then(__webpack_require__.bind(null, /*! ./skillsPane.vue */ "./src/ui/skillsPane.vue")),
		equip:()=>__webpack_require__.e(/*! import() | equip-ui */ "equip-ui").then(__webpack_require__.bind(null, /*! ./equip.vue */ "./src/ui/equip.vue")),
		inventory:()=> __webpack_require__.e(/*! import() | inv-ui */ "inv-ui").then(__webpack_require__.bind(null, /*! ./inventory.vue */ "./src/ui/inventory.vue")),
		potions:()=> __webpack_require__.e(/*! import() | potions-ui */ "potions-ui").then(__webpack_require__.bind(null, /*! ./potions.vue */ "./src/ui/potions.vue")),
		homes:()=>__webpack_require__.e(/*! import() | homes-ui */ "homes-ui").then(__webpack_require__.bind(null, /*! ./homes.vue */ "./src/ui/homes.vue")),
		player:()=>__webpack_require__.e(/*! import() | player-ui */ "player-ui").then(__webpack_require__.bind(null, /*! ./player.vue */ "./src/ui/player.vue")),
		bestiary:()=>__webpack_require__.e(/*! import() | bestiary-ui */ "bestiary-ui").then(__webpack_require__.bind(null, /*! ./bestiary.vue */ "./src/ui/bestiary.vue")),
		spellbook:()=>__webpack_require__.e(/*! import() | spells-ui */ "spells-ui").then(__webpack_require__.bind(null, /*! ui/spellbook.vue */ "./src/ui/spellbook.vue")),
		adventure:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./adventure.vue */ "./src/ui/adventure.vue")),
		enchanting:()=>__webpack_require__.e(/*! import() | enchant-ui */ "enchant-ui").then(__webpack_require__.bind(null, /*! ./enchanting.vue */ "./src/ui/enchanting.vue")),
		minions:()=>__webpack_require__.e(/*! import() | minions-ui */ "minions-ui").then(__webpack_require__.bind(null, /*! ./minions.vue */ "./src/ui/minions.vue")),
		'vue-menu':_components_menu_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
	},
	data(){

		return {
			state:null,
			overItem:null,
			overTitle:null,
			overElm:null,
			section:null
		};

	},
	created(){

		/**
	 	* @property {Game} game
	 	*/
		this.game = _game__WEBPACK_IMPORTED_MODULE_0__["default"];

		this.listen('game-loaded', this.gameLoaded );
		this.listen('setting', this.onSetting );

		this.listen( 'sell', this.onSell );
		this.listen( 'take', this.onTake );
		this.listen( 'itemover', this.itemOver );
		this.listen( 'itemout', this.itemOut );

		this.listen( 'upgrade', this.onUpgrade );
		this.listen( 'action', this.onAction );

		this.listen( 'rest', this.onRest );

		this.listen('equip', this.onEquip );
		this.listen('unequip', this.onUnequip );
		this.listen('drop', this.onDrop );
		this.listen('enchant', this.onEnchant );
		this.listen('brew', this.onBrew );
		this.listen( 'use', this.onUse );

		this.listen('home', this.onHome );

		this.listen( 'spell', this.onSpell );
		this.listen( 'buy', this.onBuy );

		this.listen('pause', this.pause );
		this.listen('unpause', this.unpause );

		// primary attack.
		this.listen( 'primary', this.onPrimary);


	},
	methods:{

		gameLoaded() {

			this.state = _game__WEBPACK_IMPORTED_MODULE_0__["default"].state;
			this.section = this.state.sections.find( v=>v.id==='sect_main');

		},

		onSetting( setting, val ) {

			if ( setting === 'autoSave' ) {
				if ( val ) this.startAutoSave();
				else this.stopAutoSave();
			}

		},

		stopAutoSave() {
			if ( this.saver ) {
				console.log('STOP AUTOSAVE');
				let int = this.saver;
				this.saver = null;
				clearInterval( int );
			}
		},

		startAutoSave() {

			if ( _settings__WEBPACK_IMPORTED_MODULE_15__["default"].vars.autoSave && !this.saver ) {
				console.log('START AUTOSAVE');
				this.saver = setInterval( ()=>this.dispatch('autosave'), 1000*SAVE_TIME );
			}

		},

		pause() {

			if ( this.runner ) {
				let int = this.runner;
				this.runner = null;
				clearInterval( int );
			}
			this.stopAutoSave();

			if ( this.keyListen ) window.removeEventListener('keydown', this.keyListen, false );


		},
		unpause() {

			if ( this.game.loaded ) {

				if ( !this.runner ) {
					this.game.lastUpdate = Date.now();
					this.runner = setInterval( ()=>this.game.update(), _game__WEBPACK_IMPORTED_MODULE_0__["TICK_TIME"] );
				}

				this.keyListen = evt=>{
				if ( evt.repeat) return;
				this.keyDown( evt ); evt.stopPropagation(); }

				window.addEventListener('keydown', this.keyListen, false );
				this.startAutoSave();

			}


		},

		keyDown( e ){

			if ( !this.runner ) return;

			let slice = e.code.slice(0,-1);
			if ( slice === 'Digit' || slice === 'Numpad' ) {

				let num = Number( e.code.slice(-1) );
				//console.log('number: ' + num );

				if ( e.shiftKey && this.overItem ) this.state.setQuickSlot( this.overItem, num );
				else {
					let it = this.state.getQuickSlot(num);
					if ( it) this.game.tryItem( it );
				}

			}

		},

		onEquip( it, inv ) { this.game.equip( it,inv ); },

		onUnequip(slot, it){ this.game.unequip(slot, it) },

		/**
		 * Drop item from inventory.
		 * @param {Item} it - item to drop
		 */
		onDrop(it) { this.game.drop(it); },

		onTake(it) { this.game.take(it); },

		onBrew(it) { this.game.craft(it); },

		/**
		 * Use instanced item.
		 */
		onUse(it) { this.game.use(it); },

		/**
		 * @param {Enchant} e - enchantment
		 * @param {Item} targ - enchant target.
		 */
		onEnchant( e, targ ) {
			this.game.tryUseWith( e, targ );
		},

		onSell( it, inv, count ) { this.game.trySell( it, inv, count ); },

		itemOver(evt, it, title) {
			this.overItem = it;
			this.overTitle = title;
			this.overElm = evt.currentTarget;
		},

		itemOut(){

			this.overElm = null;
			this.overItem = null;

		},

		onRest(){
			this.game.toggleAction( this.state.restAction );
		},

		onAction( action ) {

			this.game.tryItem( action );
		},

		/**
		 * Attempt to buy new house.
		 */
		onHome(it) { this.game.tryItem(it); },
		onConfirmed(it) { this.game.tryItem(it); },
		onSpell( spell ) { this.game.tryItem(spell); },

		onUpgrade(upgrade) {

			if ( upgrade.warn ) this.$refs.warn.warn( upgrade );
			else this.game.tryItem(upgrade);

		},

		/**
		 * Buy a spell or item without casting/using the item or its mods.
		 * @property {Item} item - item to buy.
		 */
		onBuy(item) { this.game.tryBuy(item); },

		onPrimary( s) {
			if ( this.state.player.primary === s) this.state.player.setPrimary(null);
			else this.state.player.setPrimary(s);
		}

	},
	computed:{

		menuItems(){ return this.state.sections.filter( it=>!this.locked(it) ); }

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/outlog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const LogTypes = ['event','unlock','combat', 'loot'];

/**
 * Displays event output to user.
 */
/* harmony default export */ __webpack_exports__["default"] = ({

	props:['log'],
	data() {

		return {
			LogTypes:LogTypes,
			filter:LogTypes.concat(),
			items:this.log.items,
			/**
			 * @property {string[]} exclude - types to exclude.
			 */
		}

	},
	methods:{

		clearLog(){ this.log.clear(); }

	},
	computed:{

		visItems(){

			let all = this.items;
			let a = [];

			for( let i = this.items.length-1; i>=0; i-- ) {

				var it = all[i];
				if ( !it.type || this.filter.includes(it.type) ) a.push(it);
			}
			return a;

		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/quickbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/format */ "./src/util/format.js");




/**
 * Bar for quick-use items.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
	props:['slots'],
	/*data(){
		return {
			slots:this.state.quickslots
		}
	},*/
	methods:{

		remove(ind){

			if ( ind >= 0) this.$set( this.slots, ind, undefined );

		},

		clicked(it) {
		},

		abbr:_util_format__WEBPACK_IMPORTED_MODULE_0__["abbr"]

	},
	computed:{

		hasItems(){ return this.slots.some(v=>v!=null); }

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/resources.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemsBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemsBase.js */ "./src/ui/itemsBase.js");



/* harmony default export */ __webpack_exports__["default"] = ({

	props:['items'],
	mixins:[_itemsBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]],

	computed:{
		displayed(){
			return this.items.filter( v=>!v.hasTag('manas')&&v.id!=='space')
		}
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/running.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _modules_runner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/runner */ "./src/modules/runner.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");





/* harmony default export */ __webpack_exports__["default"] = ({

	methods:{

		actionStr( a ){
			return (a.verb || a.name) +
				( ( a.length ) ? ' ' + a.percent().toFixed(0) + '%': '' );
		},
		halt(a) { this.dispatch( _events__WEBPACK_IMPORTED_MODULE_2__["HALT_ACT"], a); }

	},
	computed:{

		runner(){return _modules_runner__WEBPACK_IMPORTED_MODULE_1__["default"]; }

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings */ "./src/settings.js");
/* harmony import */ var _components_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/popups */ "./src/ui/components/popups.js");





/* harmony default export */ __webpack_exports__["default"] = ({

	data(){

		return {
			closed:true
		};
	},
	updated() {

		if (!this.closed) Object(_components_popups__WEBPACK_IMPORTED_MODULE_1__["center"])(this.$el);
	},
	created() {

		this.listen('open-settings', this.show );
		_settings__WEBPACK_IMPORTED_MODULE_0__["default"].load();

		for( let p in _settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars ) {
			this.dispatch('setting', p, _settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars[p] );
		}

	},
	methods:{

		close() {
			_settings__WEBPACK_IMPORTED_MODULE_0__["default"].save();
			this.closed = true;
		},

		show() {
			this.closed = false;
		}

	},
	computed:{

		compactMode: {
			get() { return _settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars.compactMode; },
			set(v){
				_settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars.compactMode=v;
				this.dispatch('setting', 'compactMode', v);
			}

		},
		autoSave:{
			get(){
				return _settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars.autoSave;
			},
			set(v){
				_settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars.autoSave = v;
				this.dispatch('setting', 'autoSave', v );
			}
		},
		darkMode:{
			get(){
				return _settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars.darkMode;
			},
			set(v){
				_settings__WEBPACK_IMPORTED_MODULE_0__["default"].vars.darkMode = v;
				this.dispatch('setting', 'darkMode', v );
			}
		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/top-bar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({

	computed:{
		VERSION(){return 100; }
	},
	methods:{

		fileDrop(e){
			e.stopPropagation();
			e.preventDefault();

			e.target.classList.remove('hilite');

			const dt = e.dataTransfer;
			this.dispatch('load-file', dt.files);

		},
		fileDrag(e){
			e.stopPropagation();
			e.preventDefault();
			e.currentTarget.classList.add('hilite');
		},
		dragOut(e){
			e.stopPropagation();
			e.preventDefault();
			e.currentTarget.classList.remove('hilite');
		},

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/upgrades.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/upgrades.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemsBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemsBase.js */ "./src/ui/itemsBase.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/game.js");




/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {string} event - name of event to fire when an item is selected.
	 */
	props:['pickEvent', 'items'],
	mixins:[_itemsBase_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
	created(){

		this.pEvent = this.pickEvent || 'upgrade';
		/*return {
			pEvent:this.pickEvent || 'upgrade',
			pLayout:this.layout||'upgrade-list'
		};*/

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/vitals.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_components_progbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/components/progbar.vue */ "./src/ui/components/progbar.vue");
/* harmony import */ var _running_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./running.vue */ "./src/ui/running.vue");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemsBase */ "./src/ui/itemsBase.js");







/**
 * Player vital bars.
 */
/* harmony default export */ __webpack_exports__["default"] = ({

	props:['state','player'],
	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_3__["default"]],
	components:{
		progbar:ui_components_progbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
		running:_running_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
	},
	computed:{

		focus() { return this.state.getData('focus'); },
		manaList() { return this.state.filterItems( it=>it.hasTag('manas') && !it.locked)},
		resting() {
			return this.state.restAction.running;
		},
		stamina(){ return this.state.getData('stamina'); }
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/actionsView.vue?vue&type=template&id=5043b240&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/actionsView.vue?vue&type=template&id=5043b240&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.items, function(it) {
      return _c(
        "span",
        {
          key: it.id,
          class: {
            "action-btn": true,
            locked: _vm.locked(it),
            running: it.running,
            runnable: it.perpetual || it.length > 0
          },
          on: {
            "!mouseenter": function($event) {
              $event.stopPropagation()
              return _vm.dispatch("itemover", $event, it)
            }
          }
        },
        [
          _c(
            "button",
            {
              staticClass: "wrapped-btn",
              attrs: { disabled: !_vm.usable(it) },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.dispatch("action", it)
                }
              }
            },
            [_vm._v(_vm._s(_vm.showName(it)))]
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=template&id=d27ac1a4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/adventure.vue?vue&type=template&id=d27ac1a4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "adventure" },
    [
      _vm.exploring
        ? _c("explore", { attrs: { explore: _vm.explore } })
        : _c(
            "div",
            { staticClass: "locales" },
            _vm._l(_vm.locales, function(d) {
              return _c("div", { key: d.id, staticClass: "dungeon" }, [
                _c("span", [
                  _c("span", [_vm._v(_vm._s(d.name))]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      on: {
                        "!mouseenter": function($event) {
                          $event.stopPropagation()
                          return _vm.dispatch("itemover", $event, d)
                        }
                      }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "raid-btn",
                          attrs: { disabled: !_vm.game.canRun(d) },
                          on: {
                            click: function($event) {
                              return _vm.dispatch(_vm.ENTER_LOC, d, true)
                            }
                          }
                        },
                        [_vm._v("\r\n\t\t\t\tEnter")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "bar" },
                  [_c("progbar", { attrs: { value: d.exp, max: d.length } })],
                  1
                )
              ])
            }),
            0
          ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "raid-bottom" },
        [
          _c("inv", {
            staticClass: "inv",
            attrs: { inv: _vm.drops, take: "true", nosearch: "true" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "log" }, [
            _vm.exploring
              ? _c("span", [_vm._v("Exploring..."), _c("br")])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "outlog" },
              _vm._l(_vm.combatLog, function(it, i) {
                return _c("div", { key: i, staticClass: "log-item" }, [
                  _c("span", { staticClass: "log-text" }, [
                    _vm._v(_vm._s(it.text || ""))
                  ])
                ])
              }),
              0
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=template&id=193f0119&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/confirm.vue?vue&type=template&id=193f0119&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.confirming
    ? _c("span", { staticClass: "my-span" }, [
        _c(
          "button",
          { attrs: { type: "button" }, on: { click: _vm.confirmClick } },
          [_vm._v(_vm._s(_vm.btnConfirm))]
        ),
        _vm._v(" "),
        _c(
          "button",
          { attrs: { type: "button" }, on: { click: _vm.cancelClick } },
          [_vm._v(_vm._s(_vm.btnCancel))]
        )
      ])
    : _c("span", { staticClass: "my-span" }, [
        _c(
          "button",
          { attrs: { type: "button" }, on: { click: _vm.mainClick } },
          [_vm._t("default", [_vm._v("Delete")])],
          2
        )
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !this.minItems || this.items.length >= this.minItems
    ? _c("div", { staticClass: "filter-box" }, [
        _c("label", { attrs: { for: _vm.elmId("filter") } }, [_vm._v("Find")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.findText,
              expression: "findText"
            }
          ],
          attrs: { id: _vm.elmId("filter"), type: "text" },
          domProps: { value: _vm.findText },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.findText = $event.target.value
            }
          }
        })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/menu.vue?vue&type=template&id=636f3856&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/menu.vue?vue&type=template&id=636f3856& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "menu" }, [
    _c(
      "div",
      { staticClass: "menu-items" },
      _vm._l(_vm.items, function(it) {
        return _c("div", { key: it.id, staticClass: "menu-item" }, [
          it != _vm.value
            ? _c(
                "span",
                {
                  key: _vm.itemTitle(it),
                  on: {
                    click: function($event) {
                      return _vm.setActive(it)
                    }
                  }
                },
                [_c("u", [_vm._v(" " + _vm._s(_vm.itemTitle(it)) + " ")])]
              )
            : _c("span", { key: _vm.itemTitle(it) }, [
                _vm._v(" " + _vm._s(_vm.itemTitle(it)) + " ")
              ])
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "menu-content" },
      [_vm._t(_vm.itemId(_vm.value))],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=template&id=1a530f5c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/progbar.vue?vue&type=template&id=1a530f5c& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: {} }, [
    _vm.label
      ? _c("label", { attrs: { for: _vm.elmId("bar") } }, [
          _vm._v(_vm._s(_vm.label))
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "bar", attrs: { id: _vm.elmId("bar") } }, [
      _c("div", { staticClass: "fill", style: "width:" + _vm.width }, [
        !_vm.hideStats
          ? _c("span", { staticClass: "bar-text" }, [
              _vm._v(_vm._s(_vm.val.toFixed(1) + "/" + _vm.max.toFixed(1)))
            ])
          : _c("span", [_vm._v(" ")])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=template&id=b5da6c06&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/warn.vue?vue&type=template&id=b5da6c06&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.item != null
    ? _c("div", { staticClass: "popup" }, [
        _c("div", [_vm._v(_vm._s(_vm.item.name))]),
        _vm._v(" "),
        _c("div", [_vm._v(_vm._s(_vm.item.desc))]),
        _vm._v(" "),
        _c("div", [_vm._v("This action is not reversible. Continue?")]),
        _vm._v(" "),
        _c("div", [
          _c("button", { on: { click: _vm.confirm } }, [_vm._v("Confirm")]),
          _vm._v(" "),
          _c("button", { on: { click: _vm.cancel } }, [_vm._v("Cancel")])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dot-view" },
    _vm._l(_vm.dots, function(d) {
      return _c(
        "div",
        {
          key: d.id,
          class: ["dot", d.kind, d.school, _vm.mini ? "mini" : ""],
          on: {
            "!mouseenter": function($event) {
              $event.stopPropagation()
              return _vm.dispatch("itemover", $event, d)
            }
          }
        },
        [
          _c("span", [_vm._v(_vm._s(Math.ceil(d.duration)))]),
          _vm._v(" "),
          !_vm.mini
            ? _c("span", [
                _c("br"),
                _vm._v(_vm._s(_vm.mini ? _vm.abbr(d) : d.name))
              ])
            : _vm._e(),
          _vm._v(" "),
          d.kind || d.school
            ? _c("div", { staticClass: "bgfill" }, [_vm._v(" ")])
            : _vm._e()
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.item != null,
          expression: "item!=null"
        }
      ],
      staticClass: "item-popup"
    },
    [
      _c(
        "div",
        { staticClass: "popup-content" },
        [
          _vm.title
            ? _c("div", { staticClass: "pop-title" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            : _vm._e(),
          _vm._v(" "),
          Array.isArray(_vm.item)
            ? _vm._l(_vm.item, function(t) {
                return _c("div", { key: t }, [_vm._v(_vm._s(t.toString()))])
              })
            : [_vm.item ? _c("gdata", { attrs: { item: _vm.item } }) : _vm._e()]
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/attack.vue?vue&type=template&id=50c6c96e&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/attack.vue?vue&type=template&id=50c6c96e& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "attack" },
    [
      _c("div", [_vm._v("hit bonus: " + _vm._s(_vm.item.tohit || 0))]),
      _vm._v(" "),
      _vm.item.hands > 1 ? _c("div", [_vm._v("Two Handed")]) : _vm._e(),
      _vm._v(" "),
      _vm.damage !== null
        ? _c("div", { staticClass: "damage" }, [
            _vm._v("damage: " + _vm._s(_vm.damage))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", [_vm._v("kind: " + _vm._s(_vm.item.kind))]),
      _vm._v(" "),
      _vm.item.dot ? _c("dot", { attrs: { dot: _vm.item.dot } }) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=template&id=35ac75f5&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/combat.vue?vue&type=template&id=35ac75f5&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "combat" },
    [
      _c("npc-group", {
        staticClass: "group",
        attrs: { player: _vm.player, npcs: _vm.combat.allies, label: "allies" }
      }),
      _vm._v(" "),
      _c("npc-group", {
        staticClass: "group",
        attrs: { npcs: _vm.combat.enemies, label: "enemies" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/dot.vue?vue&type=template&id=b9be64d0&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/dot.vue?vue&type=template&id=b9be64d0& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dot" }, [
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "note-text" }, [_vm._v("dot:")]),
    _vm._v(" "),
    _c("div", [
      _c("div", [
        _c("span", [_vm._v("duration: ")]),
        _c("span", [_vm._v(_vm._s(_vm.dot.duration || "infinity"))])
      ]),
      _vm._v(" "),
      _vm.dot.damage
        ? _c("div", [
            _c("span", [_vm._v("dmg: ")]),
            _c("span", [_vm._v(_vm._s(_vm.damage))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.dot.kind
        ? _c("div", [
            _c("span", [_vm._v("kind: ")]),
            _c("span", [_vm._v(_vm._s(_vm.dot.kind))])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.dot.effect || _vm.dot.mod
      ? _c(
          "div",
          [
            _c("hr"),
            _vm._v(" "),
            _vm.dot.effect || _vm.dot.mod
              ? _c("div", { staticClass: "note-text" }, [_vm._v("effects:")])
              : _vm._e(),
            _vm._v(" "),
            _vm.dot.effect
              ? _c("info", {
                  attrs: { info: _vm.dot.effect, runnable: "true" }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.dot.mod
              ? _c("info", { attrs: { info: _vm.dot.mod } })
              : _vm._e()
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=template&id=2024cb3c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/explore.vue?vue&type=template&id=2024cb3c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "explore" },
    [
      _c("span", { staticClass: "active-title" }, [
        _c("span", [_vm._v(_vm._s(_vm.explore.name))]),
        _c(
          "button",
          {
            staticClass: "raid-btn",
            on: {
              click: function($event) {
                return _vm.dispatch(_vm.EXIT_LOC, _vm.explore.locale, false)
              },
              "!mouseenter": function($event) {
                $event.stopPropagation()
                return _vm.dispatch("itemover", $event, _vm.explore.locale)
              }
            }
          },
          [_vm._v("Flee")]
        )
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "bar" },
        [
          _c("progbar", {
            attrs: { value: _vm.explore.exp, max: _vm.explore.length }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.type === "raid"
        ? [
            _c("combat", {
              staticClass: "combat",
              attrs: { combat: _vm.explore.combat }
            })
          ]
        : [
            _c(
              "div",
              {
                on: {
                  "!mouseenter": function($event) {
                    $event.stopPropagation()
                    return _vm.encOver($event)
                  }
                }
              },
              [
                _c("span", [_vm._v(_vm._s(_vm.encName))]),
                _vm._v(" "),
                _c("progbar", { attrs: { value: _vm.encVal, max: _vm.encLen } })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "stressors" },
              _vm._l(_vm.stressors, function(s) {
                return _c(
                  "div",
                  {
                    key: s.id,
                    staticClass: "stress",
                    on: {
                      "!mouseenter": function($event) {
                        $event.stopPropagation()
                        return _vm.dispatch("itemover", $event, s)
                      }
                    }
                  },
                  [
                    _c("span", [_vm._v(_vm._s(s.name))]),
                    _vm._v(" "),
                    _c("progbar", {
                      attrs: { value: s.value, max: s.max.value }
                    })
                  ],
                  1
                )
              }),
              0
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=template&id=2d591720&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/gdata.vue?vue&type=template&id=2d591720&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "item-info" },
    [
      _c("span", { staticClass: "separate" }, [
        _c("span", { staticClass: "item-name" }, [
          _vm._v(_vm._s(_vm.item.name))
        ]),
        _vm._v(" "),
        _vm.item.type === "resource"
          ? _c("span", [
              _vm._v(
                _vm._s(
                  _vm.item.current.toFixed(0) +
                    (_vm.item.max ? " / " + Math.floor(_vm.item.max.value) : "")
                )
              )
            ])
          : _vm.item.type === "furniture"
          ? _c("span", [
              _vm._v(
                "max: " +
                  _vm._s(
                    _vm.item.max
                      ? Math.floor(_vm.item.max.value)
                      : _vm.item.repeat
                      ? "∞"
                      : 1
                  )
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.item.tags
        ? _c("div", { staticClass: "tight note-text" }, [
            _vm._v(_vm._s(_vm.tags))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.item.rate && _vm.item.rate.value != 0
        ? _c("span", { staticClass: "flex-right" }, [
            _vm._v(_vm._s(_vm.precise(_vm.item.rate.value)) + " /s")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", [
        _c("span", { staticClass: "separate" }, [
          _vm.item.level && _vm.item.type !== "action"
            ? _c("span", [_vm._v("lvl: " + _vm._s(_vm.item.level))])
            : _vm._e(),
          _vm._v(" "),
          _vm.item.slot
            ? _c("span", [_vm._v("slot: " + _vm._s(_vm.item.slot))])
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.item.at && _vm.nextAt > 0
          ? _c("span", { staticClass: "note-text" }, [
              _vm._v(
                "\r\n\t\t\tNext Improvement: " +
                  _vm._s(
                    Math.round((100 * _vm.item.value) / _vm.nextAt) + "%"
                  ) +
                  "\r\n\t\t"
              )
            ])
          : _vm.item.every && _vm.nextEvery >= 0
          ? _c("span", { staticClass: "note-text" }, [
              _vm._v(
                "\r\n\t\t\tNext Improvement: " +
                  _vm._s(Math.round(100 * _vm.nextEvery) + "%") +
                  "\r\n\t\t"
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.item.cd && _vm.item.timer > 0
          ? _c("div", [
              _vm._v("Cooldown: " + _vm._s(_vm.item.timer.toFixed(2)))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.item.dist
          ? _c("div", [_vm._v("distance: " + _vm._s(_vm.item.dist))])
          : _vm._e(),
        _vm._v(" "),
        _vm.item.armor
          ? _c("div", [_vm._v("armor: " + _vm._s(_vm.item.armor))])
          : _vm._e(),
        _vm._v(" "),
        _vm.item.desc
          ? _c("div", { staticClass: "item-desc" }, [
              _vm._v(_vm._s(_vm.item.desc))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.item.need
        ? _c("info", { attrs: { info: _vm.item.need, title: "need" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.buy && !_vm.item.owned
        ? _c("info", { attrs: { info: _vm.item.buy, title: "purchase cost" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.cost
        ? _c("info", { attrs: { info: _vm.item.cost, title: "cost" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.sell || _vm.item.instance || _vm.item.type === "furniture"
        ? _c("info", { attrs: { info: _vm.sellPrice, title: "sell" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.run
        ? _c("info", {
            attrs: { info: _vm.item.run, title: "progress cost", rate: "true" }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.attack
        ? _c("attack", { attrs: { item: _vm.item.attack } })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.effect || _vm.item.mod || _vm.item.result
        ? _c("div", { staticClass: "note-text" }, [
            _c("hr"),
            _vm._v("effects:")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.item.effect
        ? _c("info", {
            attrs: { info: _vm.item.effect, rate: _vm.runnable(_vm.item) }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.mod ? _c("info", { attrs: { info: _vm.item.mod } }) : _vm._e(),
      _vm._v(" "),
      _vm.item.result
        ? _c("info", { attrs: { info: _vm.item.result } })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.lock || _vm.item.disable
        ? _c("div", { staticClass: "note-text" }, [_c("hr"), _vm._v("locks:")])
        : _vm._e(),
      _vm._v(" "),
      _vm.item.lock ? _c("info", { attrs: { info: _vm.item.lock } }) : _vm._e(),
      _vm._v(" "),
      _vm.item.disable
        ? _c("info", { attrs: { info: _vm.item.disable } })
        : _vm._e(),
      _vm._v(" "),
      _vm.item.flavor
        ? _c("div", { staticClass: "note-text" }, [
            _vm._v(_vm._s(_vm.item.flavor))
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=template&id=408e302f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/info-block.vue?vue&type=template&id=408e302f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.info
    ? _c(
        "div",
        [
          _vm.title
            ? _c("div", { staticClass: "note-text" }, [
                _c("hr"),
                _vm._v(_vm._s(_vm.title))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.effectItems(_vm.info, _vm.rate), function(v, k) {
            return _c("div", { key: k }, [
              typeof v === "boolean"
                ? _c("span", [_vm._v(_vm._s(k))])
                : typeof v === "number"
                ? _c("span", [_vm._v(_vm._s(k + ": " + v))])
                : _c("span", [_vm._v(_vm._s(k + ": " + v))])
            ])
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=template&id=09dd16a2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/items/npc-group.vue?vue&type=template&id=09dd16a2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "npc-group" },
    [
      _vm.label
        ? _c("span", { staticClass: "title" }, [_vm._v(_vm._s(_vm.label))])
        : _vm._e(),
      _vm._v(" "),
      _vm.player
        ? _c(
            "div",
            [
              _c(
                "span",
                { staticClass: "name-span" },
                [
                  _c("span", [_vm._v(_vm._s(_vm.player.name))]),
                  _c("dots", {
                    staticClass: "inline",
                    attrs: { mini: "true", dots: _vm.player.dots }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("prog", {
                staticClass: "hp",
                attrs: {
                  value: _vm.player.hp.value,
                  max: _vm.player.hp.max.value
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.npcs, function(p) {
        return _c(
          "div",
          { key: p.id },
          [
            _c(
              "span",
              { staticClass: "name-span" },
              [
                _c("span", [_vm._v(_vm._s(p.name))]),
                _c("dots", {
                  staticClass: "inline",
                  attrs: { mini: "true", dots: p.dots }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("prog", {
              staticClass: "hp",
              attrs: { value: p.hp, max: p.maxHp.value }
            })
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=template&id=6f034aea&scoped=true&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/main.vue?vue&type=template&id=6f034aea&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "full",
      on: {
        "!mouseover": function($event) {
          $event.stopPropagation()
          return _vm.dispatch("itemout")
        }
      }
    },
    [
      _c(
        "top-bar",
        [
          _c(
            "template",
            { slot: "center" },
            [
              !_vm.state
                ? _c("span", { staticClass: "load-message" }, [
                    _vm._v("LOADING DATA...")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.state
                ? _c("dots", { attrs: { dots: _vm.state.player.dots } })
                : _vm._e()
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("itempopup", {
        attrs: { item: _vm.overItem, elm: _vm.overElm, title: _vm.overTitle }
      }),
      _vm._v(" "),
      _c("warn", { ref: "warn", on: { confirmed: _vm.onConfirmed } }),
      _vm._v(" "),
      _c("settings"),
      _vm._v(" "),
      _vm.state
        ? _c(
            "div",
            { staticClass: "game-main" },
            [
              _c("resources", { attrs: { items: _vm.state.resources } }),
              _vm._v(" "),
              _c(
                "vue-menu",
                {
                  staticClass: "game-mid",
                  attrs: { items: _vm.menuItems },
                  model: {
                    value: _vm.section,
                    callback: function($$v) {
                      _vm.section = $$v
                    },
                    expression: "section"
                  }
                },
                [
                  _c("template", { slot: "sect_main" }, [
                    _c(
                      "div",
                      { staticClass: "main-actions" },
                      [
                        _c("actions", {
                          staticClass: "action-list",
                          attrs: { items: _vm.state.actions }
                        }),
                        _vm._v(" "),
                        _c("upgrades", {
                          staticClass: "upgrade-list",
                          attrs: { items: _vm.state.upgrades }
                        }),
                        _vm._v(" "),
                        _c("upgrades", {
                          staticClass: "upgrade-list",
                          attrs: { items: _vm.state.classes }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "sect_skills" },
                    [_c("skills", { attrs: { state: _vm.state } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "sect_player" }, [_c("player")], 1),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "sect_house" },
                    [_c("homes", { attrs: { state: _vm.state } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "sect_raid" },
                    [_c("adventure", { attrs: { state: _vm.state } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "sect_equip" }, [
                    _c(
                      "div",
                      { staticClass: "inv-equip" },
                      [
                        _c("equip", { attrs: { equip: _vm.state.equip } }),
                        _vm._v(" "),
                        _c("inventory", { attrs: { inv: _vm.state.inventory } })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "sect_spells" },
                    [_c("spellbook", { attrs: { state: _vm.state } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "sect_potions" }, [_c("potions")], 1),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "sect_bestiary" },
                    [_c("bestiary")],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "sect_minions" }, [_c("minions")], 1),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "sect_enchant" },
                    [_c("enchanting")],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("vitals", {
                attrs: { player: _vm.state.player, state: _vm.state }
              }),
              _vm._v(" "),
              _c("log", { attrs: { log: _vm.game.log } })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.state
        ? _c(
            "div",
            { staticClass: "bot-bar" },
            [_c("quickbar", { attrs: { slots: _vm.state.quickslots } })],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "log-view" }, [
    _c("div", { staticClass: "top-span" }, [
      _c(
        "button",
        {
          staticClass: "inline btn-sm",
          attrs: { type: "button" },
          on: { click: _vm.clearLog }
        },
        [_vm._v("Clear")]
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "checks" },
        _vm._l(_vm.LogTypes, function(p) {
          return _c("span", { key: p }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filter,
                  expression: "filter"
                }
              ],
              attrs: { type: "checkbox", id: _vm.elmId(p) },
              domProps: {
                value: p,
                checked: Array.isArray(_vm.filter)
                  ? _vm._i(_vm.filter, p) > -1
                  : _vm.filter
              },
              on: {
                change: function($event) {
                  var $$a = _vm.filter,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = p,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.filter = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.filter = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.filter = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: _vm.elmId(p) } }, [_vm._v(_vm._s(p))])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "outlog" },
      _vm._l(_vm.visItems, function(it, i) {
        return _c("div", { key: i, staticClass: "log-item" }, [
          it.title
            ? _c("span", { staticClass: "log-title" }, [
                _vm._v(_vm._s(it.title))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("span", { staticClass: "log-text" }, [_vm._v(_vm._s(it.text))])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=template&id=3473ec58&scoped=true&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/quickbar.vue?vue&type=template&id=3473ec58&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.hasItems
    ? _c(
        "div",
        { staticClass: "quickbar" },
        _vm._l(_vm.slots, function(it, i) {
          return _c("div", { key: i, staticClass: "quickslot" }, [
            it != null
              ? _c(
                  "div",
                  {
                    class: it.school ? it.school : "",
                    on: {
                      click: function($event) {
                        return _vm.dispatch("action", it)
                      },
                      "!mouseenter": function($event) {
                        $event.stopPropagation()
                        return _vm.dispatch("itemover", $event, it)
                      }
                    }
                  },
                  [
                    _c("div", [_vm._v(_vm._s(_vm.abbr(it)))]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "remove",
                      on: {
                        click: function($event) {
                          return _vm.remove(i)
                        }
                      }
                    }),
                    _vm._v(" "),
                    it.school
                      ? _c("div", { staticClass: "bgfill" }, [_vm._v(" ")])
                      : _vm._e()
                  ]
                )
              : _c("div", [_vm._v(_vm._s(i != 9 ? i + 1 : 0))])
          ])
        }),
        0
      )
    : _c("div", { staticClass: "quickbar" }, [_vm._m(0)])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "use-msg" }, [
      _vm._v(
        "\n\t\tRoll-over Item and hold {Shift} + {Number} to assign quickslot."
      ),
      _c("br"),
      _vm._v("\n\t\tPress {Number} again to use quickslot Item.\n\t")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=template&id=9c4a587a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/resources.vue?vue&type=template&id=9c4a587a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "resource-list" },
    _vm._l(_vm.displayed, function(it) {
      return _c(
        "tr",
        {
          key: it.id,
          class: { "item-name": true, locked: _vm.reslocked(it) },
          on: {
            "!mouseenter": function($event) {
              $event.stopPropagation()
              return _vm.dispatch("itemover", $event, it)
            }
          }
        },
        [
          _c("td", [_vm._v(_vm._s(it.name))]),
          _vm._v(" "),
          _c("td", { staticClass: "num-align" }, [
            _vm._v(
              _vm._s(
                _vm.floor(it.value) +
                  (it.max && it.max.value > 0
                    ? "/" + _vm.floor(it.max.value)
                    : "")
              )
            )
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=template&id=a3fd1046&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/running.vue?vue&type=template&id=a3fd1046&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "running" },
    _vm._l(_vm.runner.actives, function(v) {
      return _c("div", { key: v.id }, [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.halt(v)
              }
            }
          },
          [_vm._v("Stop")]
        ),
        _c("span", [_vm._v(_vm._s(_vm.actionStr(v)))])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=template&id=0292def5&scoped=true&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/settings.vue?vue&type=template&id=0292def5&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: ["settings", "popup", _vm.closed ? "hide" : ""] }, [
    _c("div", [
      _c("label", { attrs: { for: _vm.elmId("auto-save") } }, [
        _vm._v("auto-save")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.autoSave,
            expression: "autoSave"
          }
        ],
        attrs: { type: "checkbox", id: _vm.elmId("auto-save") },
        domProps: {
          checked: Array.isArray(_vm.autoSave)
            ? _vm._i(_vm.autoSave, null) > -1
            : _vm.autoSave
        },
        on: {
          change: function($event) {
            var $$a = _vm.autoSave,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.autoSave = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.autoSave = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.autoSave = $$c
            }
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", [
      _c("label", { attrs: { for: _vm.elmId("dark-mode") } }, [
        _vm._v("dark mode")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.darkMode,
            expression: "darkMode"
          }
        ],
        attrs: { type: "checkbox", id: _vm.elmId("dark-mode") },
        domProps: {
          checked: Array.isArray(_vm.darkMode)
            ? _vm._i(_vm.darkMode, null) > -1
            : _vm.darkMode
        },
        on: {
          change: function($event) {
            var $$a = _vm.darkMode,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.darkMode = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.darkMode = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.darkMode = $$c
            }
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", [
      _c("label", { attrs: { for: _vm.elmId("compact-mode") } }, [
        _vm._v("compact mode")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.compactMode,
            expression: "compactMode"
          }
        ],
        attrs: { type: "checkbox", id: _vm.elmId("compact-mode") },
        domProps: {
          checked: Array.isArray(_vm.compactMode)
            ? _vm._i(_vm.compactMode, null) > -1
            : _vm.compactMode
        },
        on: {
          change: function($event) {
            var $$a = _vm.compactMode,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.compactMode = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.compactMode = $$a
                    .slice(0, $$i)
                    .concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.compactMode = $$c
            }
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("button", { staticClass: "close", on: { click: _vm.close } }, [
      _vm._v("close")
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "note-text sm" }, [
      _vm._v("thanks to:"),
      _c("br"),
      _vm._v("\r\n\t\tkermit tears"),
      _c("br"),
      _vm._v("\r\n\t\tdbulm2"),
      _c("br"),
      _vm._v("\r\n\t\tmathias"),
      _c("br"),
      _vm._v("\r\n\t\tvondrey\r\n\t")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "top-bar" }, [
    _c(
      "span",
      { staticClass: "load-opts" },
      [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.dispatch("save")
              }
            }
          },
          [_vm._v("save")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            on: {
              click: function($event) {
                return _vm.dispatch("load")
              }
            }
          },
          [_vm._v("load")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "text-button" }, [
          _c(
            "a",
            {
              staticClass: "text-button",
              attrs: {
                id: "save-file",
                href: "",
                download: "",
                type: "text/json"
              },
              on: {
                click: function($event) {
                  if ($event.target !== $event.currentTarget) {
                    return null
                  }
                  return _vm.dispatch("save-file", $event)
                }
              }
            },
            [_vm._v("get save")]
          )
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            attrs: { id: "drop-file" },
            on: {
              drop: _vm.fileDrop,
              dragover: _vm.fileDrag,
              "!dragleave": function($event) {
                $event.stopPropagation()
                return _vm.dragOut($event)
              }
            }
          },
          [_vm._v("[Drop Save]")]
        ),
        _vm._v(" "),
        _c(
          "confirm",
          {
            on: {
              confirm: function($event) {
                return _vm.dispatch("reset")
              }
            }
          },
          [_vm._v("reset")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("span", { staticClass: "items" }, [_vm._t("center")], 2),
    _vm._v(" "),
    _c("span", { staticClass: "link-bar" }, [
      _c(
        "button",
        {
          staticClass: "text-button",
          on: {
            click: function($event) {
              return _vm.dispatch("open-settings")
            }
          }
        },
        [_vm._v("⚙")]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "vers" }, [
        _vm._v("ver. " + _vm._s(_vm.VERSION))
      ]),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://discord.gg/4dB2ZE5", target: "_blank" } },
        [_vm._v("discord")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          attrs: {
            href: "https://www.patreon.com/theoryofmagic",
            target: "_blank"
          }
        },
        [_vm._v("patreon")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          attrs: { href: "https://www.reddit.com/r/wizrobe/", target: "_blank" }
        },
        [_vm._v("reddit")]
      ),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://discord.gg/8jDVVC3", target: "_blank" } },
        [_vm._v("guide")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/upgrades.vue?vue&type=template&id=d7d65aae&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/upgrades.vue?vue&type=template&id=d7d65aae& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.items, function(it) {
      return _c(
        "span",
        {
          key: it.id,
          class: { "action-btn": true, locked: it.owned || _vm.locked(it) },
          on: {
            "!mouseenter": function($event) {
              $event.stopPropagation()
              return _vm.dispatch("itemover", $event, it)
            }
          }
        },
        [
          _c(
            "button",
            {
              staticClass: "wrapped-btn",
              attrs: { disabled: !_vm.usable(it) },
              on: {
                click: function($event) {
                  return _vm.dispatch(_vm.pEvent, it)
                }
              }
            },
            [_vm._v(_vm._s(_vm.showName(it)))]
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=template&id=0b887939&scoped=true&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/vitals.vue?vue&type=template&id=0b887939&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vitals" },
    [
      _c("div", { staticClass: "separate" }, [
        _c(
          "button",
          {
            staticClass: "btn-sm",
            on: {
              click: function($event) {
                return _vm.dispatch("rest")
              },
              "!mouseenter": function($event) {
                $event.stopPropagation()
                return _vm.dispatch("itemover", $event, _vm.state.restAction)
              }
            }
          },
          [_vm._v("\n\t\t" + _vm._s(this.resting ? "Stop" : "Rest"))]
        ),
        _vm._v(" "),
        !_vm.focus.locked
          ? _c(
              "button",
              {
                staticClass: "btn-sm",
                attrs: { disabled: !_vm.usable(_vm.focus) },
                on: {
                  "!mouseenter": function($event) {
                    $event.stopPropagation()
                    return _vm.dispatch("itemover", $event, _vm.focus)
                  },
                  click: function($event) {
                    return _vm.dispatch("action", _vm.focus)
                  }
                }
              },
              [_vm._v("Focus")]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("running"),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "bars" },
        [
          _c("tr", [
            _c("td", [_vm._v("stamina")]),
            _vm._v(" "),
            _c(
              "td",
              { attrs: { colspan: "2" } },
              [
                _c("progbar", {
                  staticClass: "stamina",
                  attrs: {
                    value: _vm.stamina.value,
                    max: _vm.stamina.max.value
                  },
                  nativeOn: {
                    "!mouseenter": function($event) {
                      $event.stopPropagation()
                      return _vm.dispatch("itemover", $event, _vm.stamina)
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("hp")]),
            _vm._v(" "),
            _c(
              "td",
              { attrs: { colspan: "2" } },
              [
                _c("progbar", {
                  staticClass: "hp",
                  attrs: {
                    value: _vm.player.hp.value,
                    max: _vm.player.hp.max.value
                  },
                  nativeOn: {
                    "!mouseenter": function($event) {
                      $event.stopPropagation()
                      return _vm.dispatch("itemover", $event, _vm.player.hp)
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.manaList, function(it) {
            return _c("tr", { key: it.key }, [
              _c("td", [_vm._v(_vm._s(it.name))]),
              _vm._v(" "),
              _c(
                "td",
                { attrs: { colspan: "2" } },
                [
                  _c("progbar", {
                    class: it.id,
                    attrs: { value: it.value, max: it.max.value },
                    nativeOn: {
                      "!mouseenter": function($event) {
                        $event.stopPropagation()
                        return _vm.dispatch("itemover", $event, it)
                      }
                    }
                  })
                ],
                1
              )
            ])
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
      // register for functioal component in vue file
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


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/chars/attack.js":
/*!*****************************!*\
  !*** ./src/chars/attack.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attack; });
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");



class Attack {

	toJSON(){

		return {
			dmg:this._damage,
			tohit:this.tohit||undefined,
			bonus:this.bonus||undefined,
			kind:this.kind,
			id:this.id,
			dot:this.dot
		};

	}

	get kind(){ return this._kind; }
	set kind(k){

		this._kind = k;
		if ( this.dot ){
			if ( !this.dot.kind ) this.dot.kind = k;
		}

	}

	/**
	 * @property {'all'|'self'|'allies'} targets - target of attack.
	 */
	get targets() { return this._targets; }
	set targets(v) { this._targets=v;}

	get bonus() { return this._bonus; }
	set bonus(v) {
		/** @todo mod apply bug. **/
		this._bonus = ( typeof v === 'object') ? (v.value || 0) : v;
	}

	set dmg(v) { this.damage = v; }

	get damage() { return this._damage; }
	set damage(v) {

		if ( v instanceof _values_range__WEBPACK_IMPORTED_MODULE_0__["default"] || typeof v === 'string' || typeof v ==='object') this._damage = new _values_range__WEBPACK_IMPORTED_MODULE_0__["default"](v);
		else if ( !isNaN(v) ) this._damage = Number(v);
		else if ( typeof v === 'string' || typeof v === 'object') this._damage = new _values_range__WEBPACK_IMPORTED_MODULE_0__["default"](v);

	}

	clone(){
		let a = new Attack({
			damage:this.damage,
			bonus:this.bonus,
			tohit:this.tohit,
			kind:this.kind,
			targets:this.targets,
			dot:this.dot
		})
	}

	constructor( vars=null ){

		if ( vars ) Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["assignPublic"])(this,vars); //Object.assign(this,vars);

		this.damage = this.damage || 0;
		this.bonus = this.bonus || 0;

		this.tohit = this.tohit || 0;

	}

	getDamage() {

		return this.bonus +
		( ( typeof this._damage === 'number') ? this._damage : this._damage.value );

	}


}

/***/ }),

/***/ "./src/chars/char.js":
/*!***************************!*\
  !*** ./src/chars/char.js ***!
  \***************************/
/*! exports provided: DELAY_RATE, getDelay, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_RATE", function() { return DELAY_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelay", function() { return getDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Char; });
/* harmony import */ var _items_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/base */ "./src/items/base.js");
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");
/* harmony import */ var _composites_combat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../composites/combat */ "./src/composites/combat.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _dot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dot */ "./src/chars/dot.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attack */ "./src/chars/attack.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gameState */ "./src/gameState.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");









/**
 * @constant {number} DELAY_RATE - speed to attack delay conversion constant.
 */
const DELAY_RATE = 3;
function getDelay(s) {
	return DELAY_RATE*Math.exp(-s/4);
}

class Char {

	get states() { return this._states; }
	set states(v) { this._states = v; }

	get defense() { return this._defense; }
	set defense(v) {
		this._defense = v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"] ? v : new _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"](v);
	}

	get tohit() { return this._tohit; }
	set tohit(v) { this._tohit = v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"] ? v : new _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"](v); }

	get resist() { return this._resist };
	set resist(v) { this._resist = v; }

	get speed() { return this._speed; }
	set speed(v) {
		this._speed = v;
		this.delay = getDelay(v);
	}

	get attacks() { return this._attacks; }
	set attacks(v){

		for( let i = v.length-1; i>=0; i-- ) {
			v[i] = (v[i] instanceof _attack__WEBPACK_IMPORTED_MODULE_5__["default"]) ? v[i] : new _attack__WEBPACK_IMPORTED_MODULE_5__["default"](v[i]);

		}

		this._attacks = v;
	}

	get attack() { return this._attack; }
	set attack(v) {
		this._attack = ( v instanceof _attack__WEBPACK_IMPORTED_MODULE_5__["default"]) ? v : new _attack__WEBPACK_IMPORTED_MODULE_5__["default"](v);
	}

	get dots() { return this._dots; }
	set dots(v) {

		for( let i = v.length-1; i >= 0; i-- ) {
			v[i] = new _dot__WEBPACK_IMPORTED_MODULE_4__["default"](v[i]);
		}
		this._dots =v;

	}

	get regen() { return this._regen; }
	set regen(v) { this._regen = ( v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"] ) ? v : new _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"](v); }

	/*get died() { return this._died; }
	set died(v) { this._died = v; }*/

	get alive() { return this.hp > 0; }
	set alive(v) {}

	constructor( vars ){

		if ( vars ) Object(_util_util__WEBPACK_IMPORTED_MODULE_7__["assignNoFunc"])(this,vars);

		this.type = 'npc';

		this.states = this.states || {};
		this.immunities = this.immunities || {};
		this._resist = this._resist || {};

		//console.log( this.id + ' damage: ' + this.damage );
		//console.log( this.id + ' tohit: ' + this.tohit );

		/**
		 * @property {Object[]} dots - timed/ongoing effects.
		*/
		this.dots = this.dots || [];

		/**
		 * @property {number} timer
		 */
		this.timer = this.timer || this.delay;

	}

	/**
	 * Revive from data after Game state restored.
	 * @param {GameState} state
	 */
	revive( state ){

		for( let i = this.dots.length-1; i>=0; i--) {
			this.dots[i].revive(state);
		}


		if ( this.template ) {

			let it = state.getData( this.template );
			if ( it ) Object(objecty__WEBPACK_IMPORTED_MODULE_1__["mergeSafe"])( this, it );

			if ( !this._name ) this._name = it.name;
			//if ( this.hp instanceof Range ) this.hp = this.hp.value;

		}

	}

	/**
	 * Base item of dot.
	 * @param {Dot} it
	 */
	addDot( it ) {

		let id = it.id;

		let cur = id ? this.dots.find( d=>d.id===id) : undefined;
		if ( cur !== undefined ) cur.duration = it.duration;
		else {
			this.dots.push( new _dot__WEBPACK_IMPORTED_MODULE_4__["default"](it) );
		}

	}

	update(dt) {

		for( let i = this.dots.length-1; i >= 0; i-- ) {

			var dot = this.dots[i];
			let dotTime = dot.tick(dt);

			if ( dotTime ) {

				if ( dot.duration <= 0 ) {
					this.dots.splice( i, 1);
				}
				if ( dot.damage ) {
					Object(_composites_combat__WEBPACK_IMPORTED_MODULE_2__["tryDamage"])( this, dot, dot.source );
				}

			}

		}

		if ( this.regen ) this.hp += this.regen*dt;
		if ( !this.alive ) return;

		this.timer -= dt;
		if ( this.timer <= 0 ) {

			this.timer += this.delay;
			return this.attacks || ( this.attack || this );

		}

	}

	hasStatus(stat) { return this.states[stat] > 0; }
	isImmune(kind) { return this.immunities[kind] > 0; }

	/**
	 * Roll a resistance check against the given damage type.
	 * @param {string} kind - kind of damage.
	 */
	tryResist(kind) {

		return ( this.resist && this.resist[kind] ) ? 100*Math.random() < this.resist[kind] : false;

	}

	getResist(kind) {

		return (this._resist[kind]||0)/100;
	}

	removeResist( kind, amt ) {
		if ( this._resist[kind] ) this._resist[kind] -= amt;
	}

	addResist( kind, amt ) {

		if ( !this._resist[kind] ) this._resist[kind] = amt;
		else this._resist[kind].base += amt;

	}

	addStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] + 1 : 1;
	}

	removeStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] - 1 : 0;
	}

	/**
	 *
	 * @param {string} kind
	 */
	addImmune(kind){
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] + 1 : 1;
	}

	/**
	 *
	 * @param {string} kind
	 */
	removeImmune(kind) {
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] - 1 : 0;
	}

}

Object(_items_base__WEBPACK_IMPORTED_MODULE_0__["mergeClass"])( Char, _items_base__WEBPACK_IMPORTED_MODULE_0__["default"] );

/***/ }),

/***/ "./src/chars/dot.js":
/*!**************************!*\
  !*** ./src/chars/dot.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dot; });
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");
/* harmony import */ var _values_mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/mod */ "./src/values/mod.js");



class Dot {

	toJSON(){

		return {

			id:this.id || undefined,
			kind:this.kind || undefined,
			name:this.name || undefined,
			dmg:this.damage || undefined,
			effect:this.effect||undefined,
			mod:this.mod||undefined,
			acc:this.acc,
			duration:this.duration,
			source:this.source ? ( typeof this.source === 'string' ? this.source : this.source.id ) : undefined
		};

	}

	set dmg(v) { this.damage = v; }

	get damage() { return this._damage; }
	set damage(v) {

		if ( v instanceof _values_range__WEBPACK_IMPORTED_MODULE_0__["default"] ) this._damage = v;
		else if ( !isNaN(v) ) this._damage = Number(v);
		else if ( typeof v === 'string' || typeof v === 'object') this._damage = new _values_range__WEBPACK_IMPORTED_MODULE_0__["default"](v);

	}

	/**
	 * Get a damage value for the dot.
	 */
	getDamage() {

		return (typeof this._damage === 'number') ? this._damage : this._damage.value;

	}

	constructor( vars, source, name ){

		Object.assign( this, vars );

		this.source = this.source || source || null;

		this.name = this.name || name || ( source ? source.name : '' );
		this.id = this.id || this.name || (source ? source.id || source.name : '');

		/**
		 * @property {boolean} stack - ability of dot to stack.
		 */

		/**
		 * @private {number} acc - integer accumulator
		 */
		this.acc = this.acc || 0;

	}

	reviveMod( m ){

		if ( typeof m === 'object' && !(m instanceof _values_mod__WEBPACK_IMPORTED_MODULE_1__["default"]) ) {


			if ( m.id ) return new _values_mod__WEBPACK_IMPORTED_MODULE_1__["default"](m);

			for( let p in m ) {
				m[p] = this.reviveMod( m[p] );
			}

		}
		return m;

	}

	revive(state) {

		if ( this.source && typeof this.source === 'string') this.source = state.getData( this.source );

		if ( this.mod ) this.mod = this.reviveMod(this.mod);

	}

	/**
	 * Ticks dt and returns the amount the dot has actually ticked,
	 * (allowing for seconds-only updates.)
	 * @param {number} dt
	 */
	tick(dt) {

		this.acc += dt;
		if ( this.acc >= 1 ) {

			this.acc--;
			this.duration--;
			return 1;

		}

		return 0;

	}

}

/***/ }),

/***/ "./src/chars/equip.js":
/*!****************************!*\
  !*** ./src/chars/equip.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Equip; });
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot */ "./src/chars/slot.js");
/* harmony import */ var _wearable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wearable */ "./src/chars/wearable.js");
/* harmony import */ var _slotgroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slotgroup */ "./src/chars/slotgroup.js");




class Equip extends _slotgroup__WEBPACK_IMPORTED_MODULE_2__["default"] {

	toJSON(){
		return { slots:( this.slots ) };
	}

	constructor( vars=null ) {

		super(vars );

		this.slots = this._slots || {
			"left":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'left'
			}),
			"right":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'right'
			}),
			"head":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'head'
			}),
			"hands":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'hands'
			}),
			"back":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'back'
			}),
			"waist":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'waist'
			}),
			"neck":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'neck',
				max:3
			}),
			"fingers":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'fingers',
				max:4
			}),
			"chest":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'chest'
			}),
			"shins":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'shins'
			}),
			"feet":new _slot__WEBPACK_IMPORTED_MODULE_0__["default"]({
				id:'feet'
			})
		};

	}

	/**
	 *
	 * @param {Item} it
	 */
	remove( it, slot=null ) {
		return ( it.type === 'weapon') ? this.removeWeap(it) : super.remove(it,slot);
	}

	removeWeap( it ) {
		return this.slots.right.remove(it) || this.slots.left.remove(it);
	}

	/**
	 * Get a count of items returned when using item.
	 * This is to ensure there is sufficient inventory space for new items.
	 * (Equip from Dungeon drops, multihanded weaps, etc.)
	 * @todo this is somewhat incorrect as inventory doesnt currently count spaces-used.
	 * @param {Item} it
	 * @returns {number}
	 */
	replaceCount(it) {

		let space = (it.type==='weapon') ?
			this.freeSpace( 'right' ) + this.freeSpace('left') : this.freeSpace(it.slot);

		return Math.max( ( it.numslots || 1 ) - space, 0 );

	}

	/**
	 *
	 * @param {Armor|Weapon} it
	 * @param {string} slot
	 * @returns {boolean|Wearable|Wearable[]}
	 */
	equip( it, slot=null ) {

		if ( it.type === 'weapon' ) return this.equipWeap(it);

		slot = slot || it.slot;
		if( slot === null || !this.slots.hasOwnProperty(slot)) return false;

		let cur = this.slots[slot];
		return cur.equip(it);
	}

	/**
	 *
	 * @param {*} it
	 * @returns {Item|Item[]|true}
	 */
	equipWeap( it ) {

		console.log('equipping weapon...');

		let right = this.slots.right;
		let left = this.slots.left;

		if ( it.hands === 2 ) {

			console.log( 'Setting two handed weapon.');
			let rightItem = right.equip( it );
			let leftItem = left.remove();

			return rightItem && leftItem ? [ rightItem, leftItem ] :
				(rightItem || leftItem );

		} else {

			if ( right.empty() ) {

				console.log('setting right hand.');

				right.equip( it );
				return ( left.hands() > 1 ) ? left.remove() : true;

			} else if ( left.empty() ) {

				console.log('setting left hand.');

				left.equip( it );
				return ( right.hands() > 1 ) ? right.remove() : true;

			} else {

				console.log('neither empty. passing off hands.');

				let res = right.equip( left.equip(it) );
				return res;

			}

		}

	}

}

/***/ }),

/***/ "./src/chars/inventory.js":
/*!********************************!*\
  !*** ./src/chars/inventory.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inventory; });
/* harmony import */ var _wearable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wearable */ "./src/chars/wearable.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _items_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/base */ "./src/items/base.js");
/* harmony import */ var _items_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/item */ "./src/items/item.js");
/* harmony import */ var _npc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./npc */ "./src/chars/npc.js");
/* harmony import */ var _itemgen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../itemgen */ "./src/itemgen.js");







class Inventory {

	/**
	 * @property {number} length - items in inventory.
	 */
	get count() { return this.items.length; }

	valueOf() { return this.items.length; }

	toJSON(){
		return {
			items:(this.items),
			max:(this.max)
		}
	}

	get max() { return this._max; }
	set max(v) {
		this._max = v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"] ? v : new _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"](v,true);
	}

	constructor(vars=null){

		if ( vars ) Object.assign(this,vars);

		if ( !this.items ) this.items = [];

		this.type = this.id = 'inventory';

		this.max = this._max || 0;

	}

	revive(state){

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = Object(_itemgen__WEBPACK_IMPORTED_MODULE_5__["itemRevive"])( state, this.items[i] );
			if ( it == null ) this.items.splice( i, 1 );
			else this.items[i] = it;

		}

		// todo: reassign items for Vue reactivity?

	}

	add(it){

		if ( it === null || it === undefined || typeof it === 'boolean' || this.full() ) return false;
		if ( Array.isArray(it) ) {

			//this.items = this.items.concat(it);
			for( let i = it.length-1; i>=0; i-- ) {
				var sub = it[i];
				if ( sub === null || sub === undefined || typeof sub === 'boolean') continue;
				this.items.push( sub );
			}

		} else {

			if ( it.stack ) {
				console.warn('adding stacking item: ' + it.id );
				let inst = this.find( it.id, true );
				if ( inst && inst !== it ){
					inst.value++;
					return inst;
				}
			}
			this.items.push(it);

		}
		this.dirty = true;

	}

	includes(it) {
		return this.items.includes(it);
	}

	/**
	 * @returns {number} number of free spaces left.
	 */
	freeSpace() {
		return this.max ? this.max - this.items.length : Number.MAX_SAFE_INTEGER;
	}

	/**
	 * @returns {boolean} true if inventory full.
	 */
	full(){
		//console.log('full: ' + ( this.max >0 && this.items.length >= this.max));
		return this.max >0 && this.items.length >= this.max;
	}

	/**
	 * Filter inventory items.
	 * @param {*} p
	 */
	filter(p) {
		return this.items.filter(p);
	}

	/**
	 * Attempt to find item in inventory.
	 * @param {string} id,
	 * @param {boolean} proto - whether to find any item instanced from the prototype id.
	 * If false, only an exact id match is returned.
	 */
	find(id, proto=false ) {
		console.log('find id: ' + id );
		return proto === true ? this.items.find( v=>v.id===id||v.protoId===id) :
			this.items.find( v=>v.id===id);
	}

	/**
	 * Remove all items from inventory.
	 * splice is used for vue reactivity.
	 */
	clear() {
		this.items.splice(0, this.items.length);
	}

	removeAt(ind) {
		this.items.splice(ind,1);
	}

	removeAll(){
		return this.items.splice(0, this.items.length);
	}

	/**
	 *
	 * @param {Item} it
	 */
	remove( it ){

		let ind = this.items.indexOf( it );
		if ( ind < 0 ) return;
		this.items.splice( ind, 1 );


	}

}

Object(_items_base__WEBPACK_IMPORTED_MODULE_2__["mergeClass"])( Inventory, _items_base__WEBPACK_IMPORTED_MODULE_2__["default"] );

/***/ }),

/***/ "./src/chars/material.js":
/*!*******************************!*\
  !*** ./src/chars/material.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Material; });
/* harmony import */ var _items_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/base */ "./src/items/base.js");


class Material {

	constructor(vars=null) {

		if ( vars ) Object.assign( this, vars);

	}

}

Object(_items_base__WEBPACK_IMPORTED_MODULE_0__["mergeClass"])( Material, _items_base__WEBPACK_IMPORTED_MODULE_0__["default"] );

/***/ }),

/***/ "./src/chars/minions.js":
/*!******************************!*\
  !*** ./src/chars/minions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Minions; });
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory */ "./src/chars/inventory.js");
/* harmony import */ var _npc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./npc */ "./src/chars/npc.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");





class Minions extends _inventory__WEBPACK_IMPORTED_MODULE_0__["default"] {

	/**
	 * @property {Stat} allies - level max allies taken into battle.
	 */
	get maxAllies() { return this._maxAllies; }
	set maxAllies(v) {
		this._maxAllies = v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"] ? v : new _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"](v,true);
	}

	/**
	 * @property {number} allyTotal - sum of all allies levels.
	 */
	get allyTotal() { return this._allyTotal; }
	set allyTotal(v) { this._allyTotal = v;}

	/**
	 * @property {string[]}
	 */
	get active() { return this._active; }
	set active(v) { this._active = v; }

	constructor(vars=null){

		super(vars);

		this.type = this.id = "minions";

		if ( !this.max ) this.max = 0;

		this._active = [];

	}

	update(dt) {

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = this.items[i];
			if ( it.active === false && it.alive ) it.rest(dt);

		}

	}

	add(m ) {

		super.add(m);

		m.team = _npc__WEBPACK_IMPORTED_MODULE_1__["ALLY"];

		if ( m.active ) {
			this.setActive(m)
		}


	}

	/**
	 * Get list of Minions by id.
	 * @param {string[]} ids
	 */
	getList( ids ) {
		return this.items.filter( v=>ids.includes(v.id) );
	}

	setActive( b, active=true ) {

		if ( active === true ) {

			if ( !b.alive || b.level + this.allyTotal > this.maxAllies ) {
				b.active = false;
				return false;
			}
			if ( !this.active.includes(b) ) {

				this.allyTotal += b.level;
				this.active.push(b);

			}

		} else {

			let ind = this.active.indexOf(b);
			if ( ind >= 0 ) {

				this.allyTotal -= b.level;
				this.active.splice(ind,1);

			}

		}

		b.active = active;

	}

	revive( state ) {

		super.revive(state);

		if ( !this.maxAllies ) {
			this.maxAllies = Math.floor( state.player.level / 5 );
		}

		let used = 0;

		for( let p in this.items ) {

			var m = this.items[p];
			if ( m.active ) {

				used += m.level;
				/** @todo can't test vs. maxAllies here because mods havent been applied yet. */
				this._active.push(m);

			}

			/** @compatibiltiy */
			m.team = _npc__WEBPACK_IMPORTED_MODULE_1__["ALLY"];

		}

		this.allyTotal = used;

		_events__WEBPACK_IMPORTED_MODULE_2__["default"].add( _events__WEBPACK_IMPORTED_MODULE_2__["ALLY_DIED"], this.died, this );
		_events__WEBPACK_IMPORTED_MODULE_2__["default"].add( _events__WEBPACK_IMPORTED_MODULE_2__["ACT_CHANGED"], this.resetActives, this );

	}

	/**
	 * Reset the active list for any minions that have died,
	 * gone inactive, etc.
	 */
	resetActives() {

		for( let i = this.active.length-1; i>=0; i-- ) {

			if ( !this.active[i].active || !this.active[i].alive ) {
				this.setActive( this.active[i], false );
			}

		}

	}

	remove( m ) {

		super.remove(m);

		console.log('removing minion: ' + m.id );
		this.setActive( m, false );

	}

	died( m ) {

		//m.active = false;

	}

}

/***/ }),

/***/ "./src/chars/npc.js":
/*!**************************!*\
  !*** ./src/chars/npc.js ***!
  \**************************/
/*! exports provided: ALLY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLY", function() { return ALLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Npc; });
/* harmony import */ var _char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./char */ "./src/chars/char.js");
/* harmony import */ var _items_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/monster */ "./src/items/monster.js");
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _values_percent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../values/percent */ "./src/values/percent.js");







/**
 * @const {number} ALLY - team constant for allies.
 */
const ALLY = 1;

/**
 * Class for specific Enemies/Minions in game.
 */
class Npc extends _char__WEBPACK_IMPORTED_MODULE_0__["default"] {

	toJSON() {

		let data = super.toJSON();
		data.id = this.id;
		data.template = this.template.id;
		data.cost = undefined;
		data.team = this.team||undefined;

		if ( this.name != this.template.name ) data.name = this.name;
		//data.died = this.died||undefined;

		return data;

	}

	get maxHp() { return this._maxHp; }
	set maxHp(v) {
		this._maxHp = v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_4__["default"] ? v : new _values_stat__WEBPACK_IMPORTED_MODULE_4__["default"](v,true);
	}

	get hp() { return this._hp; }
	set hp(v) {

		if ( this._maxHp && v > this._maxHp ) this._hp = this._maxHp.value;
		else this._hp = v;

	}

	get loot() {
		console.log('GEtting GETTER loot');
		return this.template ? this.template.loot : null;
	}
	set loot(v){}

	get damage() { return this._damage; }
	set damage(v) {

		if ( v && !(v instanceof _values_range__WEBPACK_IMPORTED_MODULE_3__["default"]) ) {

			if ( typeof v === 'string' || typeof v === 'object') this._damage = new _values_range__WEBPACK_IMPORTED_MODULE_3__["default"]( v );
			else {

				this._damage = Number( v );
			}

		} else this._damage = v;

	}

	/**
	 * @property {number} team - side in combat.
	 */
	get team() { return this._team; }
	set team(v) { this._team=v;}

	/**
	 * @property {boolean} active - whether minion is active in combat.
	 */
	get active() { return this._active; }
	set active(v) { this._active = v; }

	constructor(vars) {

		super( vars instanceof _items_monster__WEBPACK_IMPORTED_MODULE_1__["default"] ? Object(objecty__WEBPACK_IMPORTED_MODULE_2__["cloneClass"])(vars) : vars );

		this.dodge = this.dodge || 0;

		this.active = this.active === undefined || this.active === null ? false : this.active;

		if ( typeof this.hp === 'string' || typeof this.hp === 'object') this.hp = new _values_range__WEBPACK_IMPORTED_MODULE_3__["default"](this.hp);
		if ( this.hp instanceof _values_range__WEBPACK_IMPORTED_MODULE_3__["default"] ) this.hp = this.hp.value;
		if ( !this.hp ) {

			console.log('MISSING HP:  ' + this.id );
		}

		this.tohit = this.tohit || 0;
		this.maxHp = this._maxHp || this._hp;

		if ( this.dmg && (this.damage===null||this.damage===undefined) ) this.damage = this.dmg;

		this.initLoot();
	}

	initLoot(){

		let loot = this.loot;
		if ( !loot) return;

		for( let p in loot ) {

			var sub = loot[p];
			if ( (typeof sub==='string') ) {

				if ( _values_percent__WEBPACK_IMPORTED_MODULE_5__["PercentTest"].test(sub)) {

					loot[p] = new _values_percent__WEBPACK_IMPORTED_MODULE_5__["default"](sub);
				} else if ( _values_range__WEBPACK_IMPORTED_MODULE_3__["RangeTest"].test(sub) ) {
					loot[p ] = new _values_range__WEBPACK_IMPORTED_MODULE_3__["default"](sub);
				}
			}

		}

	}

	rest(dt) {
		this.hp += 0.01*this.maxHp.value*dt;
	}

	/**
	 * @returns {number} the damage from a single attack by npc.
	 */
	getDamage() {
		return this.attack ? this.attack.getDamage() : (
			(typeof this._damage === 'number') ? this._damage : this._damage.value
		);
	}

	/*update(dt) {

		super.update(dt);

		if ( !this.alive ) return;

		this.timer -= dt;
		if ( this.timer <= 0 ) {

			this.timer += this.delay;
			return this.attacks || this.attack || this;

		}

	}*/

}

/***/ }),

/***/ "./src/chars/player.js":
/*!*****************************!*\
  !*** ./src/chars/player.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _items_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/resource */ "./src/items/resource.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");
/* harmony import */ var _items_gdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/gdata */ "./src/items/gdata.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _composites_combat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../composites/combat */ "./src/composites/combat.js");
/* harmony import */ var _char__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./char */ "./src/chars/char.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attack */ "./src/chars/attack.js");
/* harmony import */ var _wearable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wearable */ "./src/chars/wearable.js");












/**
 * @constant {number} EXP_RATE
 */
const EXP_RATE = 0.125;

class Player extends _char__WEBPACK_IMPORTED_MODULE_6__["default"] {

	get level() { return this._level; }
	set level(v) { this._level=v;}

	/**
	 * @property {string} title
	 */
	get title() { return this._title; }
	set title(v) {
		this._title =v;
		if ( !this.titles.includes(v) ) this.titles.push(v);
	}

	/**
	 * @property {string[]} titles
	 */
	get titles(){
		if ( this._titles == null ) this._titles = [];
		return this._titles;
	}
	set titles(v){
		this._titles = v;
	}

	get exp(){ return this._exp; }
	set exp(v) {

		if ( this._exp === undefined ) this._exp = v;
		else {

			this._exp.value = v;
			while ( this._next > 0 && this._exp.value >= this._next ) this.levelUp();

		}
	}

	get className() { return this._className; }
	set className(v) { this._className = v; }

	/**
	 * @property {number} next - exp to level up.
	 */
	get next() { return this._next; }
	set next(v) { this._next = v;}

	get hp() { return this._hp; }
	set hp(v) {

		if ( this._hp ) this._hp.value = v;
		else if ( v instanceof _items_resource__WEBPACK_IMPORTED_MODULE_1__["default"] ) this._hp = v;
		else this._hp = new _items_resource__WEBPACK_IMPORTED_MODULE_1__["default"]( {value:v} );

	}

	/**
	 * @property {Wearable} weapon - primary weapon.
	 */
	get weapon() { return this._weapon; }
	set weapon(v) {
		this._weapon = v;
		if ( !(v instanceof _wearable__WEBPACK_IMPORTED_MODULE_9__["default"]) ) console.log('NON WEAPON SOURCE');
		if ( !v ) this._weapon = this.baseWeapon;
	}

	/**
	 * @property {Resource} speed
	 * speed normalized to an average of level=speed.
	 */
	get speed() { return this._speed; }
	set speed(v) {

		this._speed = v;
		this.delay = Object(_char__WEBPACK_IMPORTED_MODULE_6__["getDelay"])( this._speed.value );

	}

	get mount() { return this._mount; }
	set mount(v) {
		this._mount = v;
	}

	get alive() {return this._hp.value > 0; }

	get defeated() {

		if ( this._hp.value <= 0 ) return true;
		for( let i = this.stressors.length-1; i>=0; i--){

			var s = this.stressors[i];
			if ( s.value >= s.max.value ) return true;
		}
		return false;

	}

	/**
	 * NOTE: Elements that are themselves Items are not encoded,
	 * since they are encoded in the Item array.
	 * @return {object}
	 */
	toJSON() {

		let data = {};

		data.defense = ( this.defense );
		data.tohit = ( this.tohit );
		data.level = ( this.level );
		data.title = ( this.title );
		data.name = ( this.name );

		data.titles = this.titles;

		data.next = ( this.next );
		// attack timer.
		data.timer = ( this.timer );
		data.alignment = ( this.alignment );
		data.damage = ( this.damage );
		data.dots = ( this.dots );

		data.bonuses = this.bonuses;
		data.immunities = this.immunities;
		data.resists =this.resists;

		data.retreat = this.retreat||undefined;

		data.states = this.states;
		data.className = this.className;

		if ( this.primary ) data.primary = this.primary.id;
		if ( this.weapon ) data.weapon = this.weapon.id;

		return data;

	}

	constructor( vars=null ){

		super(vars);

		this.id = this.type = "player";

		//if ( vars ) Object.assign( this, vars );
		this._level = this._level || 0;
		this._title = this._title || 'waif';

		this.titles = this._titles || [];

		this._next = this._next || 50;

		this.retreat = this.retreat || 0;

		if ( !this.tohit) this.tohit = 1;
		if ( !this.defense ) this.defense = 0;

		this._resist = this._resist || {};
		for( let p in this._resist ) {
			this._resist[p] = new _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"]( this._resist[p]);
		}

		this._states = this._states || {
			fly:0,
			sleep:0,
			swim:0,
			immortal:0,
			paralyzed:0,
			stoned:0,
			confused:0
		};

		this.immunities = this.immunities || {
			fire:0,
			water:0,
			air:0,
			earth:0,
			light:0,
			shadow:0,
			arcane:0,
			physical:0,
			natural:0,
			poison:0,
			disease:0
		}

		this.bonuses = this.bonuses || {
		}

		this.baseWeapon = this.baseWeapon || {

			id:'baseWeapon',
			name:'fists',
			attack:new _attack__WEBPACK_IMPORTED_MODULE_8__["default"]({
				tohit:1,
				kind:'blunt',
				damage:new _values_range__WEBPACK_IMPORTED_MODULE_2__["default"](0,1)
			})

		};

		this.damage = this.damage || 1;

		this.alignment = this.alignment || 'neutral';

		/**
		 * @property {Item} primary - primary attack.
		 */
		this.primary = this.primary || null;
		this.weapon = this.weapon || this.baseWeapon;

		this._name = this._name || 'wizrobe';

	}

	addTitle( title ){
		if ( !this._titles.includes(title) ) {
			this._titles.push(title);
		}
	}


	revive( state ) {

		super.revive(state);

		if ( this.weapon && (typeof this.weapon === 'string') ) this.weapon = state.equip.find( this.weapon );
		this.primary = this.primary && typeof this.primary === 'string' ? state.getData( this.primary ) : this.primary;

		// copy in stressors to test player defeats.
		this.stressors = state.stressors;

	}

	/**
	 * Perform update effects.
	 * @param {number} dt - elapsed time.
	 */
	update( dt ) {

		let updates = this.dots;
		let dot;

		for( let i = updates.length-1; i >= 0; i-- ) {

			dot = updates[i];
			if ( !dot.tick(dt) ) continue;

			// ignore any remainder beyond 0.
			if ( dot.effect ) _game__WEBPACK_IMPORTED_MODULE_4__["default"].applyEffect( dot.effect );
			if ( dot.damage ) Object(_composites_combat__WEBPACK_IMPORTED_MODULE_5__["tryDamage"])( this, dot, dot.source );

			if ( dot.duration <= dt ) {

				updates.splice( i, 1 );
				if ( dot.mod ) _game__WEBPACK_IMPORTED_MODULE_4__["default"].addMod( dot.mod, -1 );

			} else dot.duration -= dt;


		}
		if ( this.regen ) this.hp += this.regen*dt;

	}

	/**
	 * @returns {Resource[]} - list of all resources defined by Player.
	 */
	getResources() {

		let res =[];

		for( let p in this ) {

			var obj = this[p];
			if ( obj !== null && typeof obj === 'object' && obj.type === 'resource') res.push(obj);

		}

		console.log('player resources: ' + res.length );

		return res;

	}

	/**
	 *
	 * @param {Dot} dot - dot to add.
	 */
	addDot( dot ) {

		let id = dot.id;

		let cur = id ? this.dots.find( d=>d.id===id) : undefined;
		if ( cur !== undefined ) {
			cur.duration = dot.duration;
		}
		else {

			this.dots.push( dot );
			if ( dot.mod ) _game__WEBPACK_IMPORTED_MODULE_4__["default"].addMod( dot.mod, 1 );

		}

	}

	/* getResist( kind ) {
		return this._resist[kind].value / 100;
	}*/

	removeResist( kind, amt ) {
		if ( this._resist[kind] ) this._resist[kind].base -= amt;
	}

	addResist( kind, amt ) {

		if ( !this._resist[kind] ) this._resist[kind] = new _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"]( amt );
		else this._resist[kind].base += amt;

	}

	/**
	 * Set primary spell attack.
	 * @param {GData} s
	 */
	setPrimary( s ) {

		if ( this.primary === s || ( s && !s.attack )) return;
		if ( this.primary !== null ) this.removePrimary();

		this.primary = s;

	}

	/**
	 * Clear primary spell attack.
	 */
	removePrimary() {
		//let p = this.primary;
		this.primary = null;
	}

	levelUp() {

		this._level++;

		this.dirty = true;
		if ( this._level % 3 === 0 ) this.sp.value++;
		if ( this._level % 5 === 0 ) _game__WEBPACK_IMPORTED_MODULE_4__["default"].getData('minions').maxAllies.value++;
		if ( this._level % 4 === 0 ) _game__WEBPACK_IMPORTED_MODULE_4__["default"].getData('speed').value++;

		this.tohit++;
		this.hp.max.base += 2;
		this.stamina.max.base += 1;

		this._exp.value -= this._next;
		this._next = Math.floor( this._next * ( 1 + EXP_RATE ) );

		_events__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_7__["LEVEL_UP"], this );

	}

}

/***/ }),

/***/ "./src/chars/slot.js":
/*!***************************!*\
  !*** ./src/chars/slot.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slot; });
/* harmony import */ var _itemgen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../itemgen */ "./src/itemgen.js");
/* harmony import */ var _wearable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wearable */ "./src/chars/wearable.js");
/* harmony import */ var _items_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/item */ "./src/items/item.js");




/**
 * Equipment slot.
 */
class Slot {

	toJSON(){
		return {
			id:this.id,
			item:this.item,
			multi:this.multi,
			max:this.max
		}
	}

	get item() {
		return this._item;
	}
	set item(v){

		this._item = v;

	}

	constructor(vars=null){

		if ( vars ) Object.assign( this, vars);

		this.max = this.max || 1;
		this.item = this.item || ( this.max > 1 ? [] : null );

		/**
		 * @property {boolean} multi - true if slot holds multiple items.
		 */
		this.multi = Array.isArray( this.item );

		this.name = this.name || this.id;

	}

	/**
	 * Compute spaces left in slot.
	 * @returns {number}
	 */
	freeSpace() {

		let count = this.max;
		if ( !this.item ) return count;
		else if ( count === 1 ) return 0;

		// should be impossible.
		if ( !Array.isArray(this.item) ) return 0;

		for( let i = this.item.length-1; i>= 0; i-- ) {
			count -= ( this.item[i].numslots || 1 );
		}

		return count;

	}

	/**
	 *
	 * @param {Item} it - the item to place in the slot.
	 * @returns {Item|boolean} Item(s) removed from slot, or true,
	 * if no item needs to be removed.
	 */
	equip( it ){

		let spaces = it.numslots ? it.numslots : 1;

		// won't fit in slot.
		if ( spaces > this.max ) return false;

		if ( this.multi === true ) {


			this.item.push(it);
			for( let i = this.item.length-2; i >= 0; i-- ) {

				spaces += (this.item[i].numslots || 1);
				if ( spaces > this.max ) {

					return this.item.splice( 0, i+1);

				}

			}
			return true;

		} else if ( !this.item ) {

			this.item = it;
			return true;

		} else {

			let tmp = this.item;
			this.item = it;

			return tmp;

		}

	}

	/**
	 * Find item in slot by id.
	 * @param {string} id
	 * @returns {Item|null}
	 */
	find(id ) {
		if ( this.item === null) return null;
		return this.multi ?
			this.item.find(v=>v.id===id) :
			(this.item.id === id) ? this.item : null
	}

	/**
	 *
	 * @param {*} it
	 * @returns {boolean}
	 */
	has(it) {
		return (this.multi === false ) ? this.item === it : this.item.includes(it);
	}

	/**
	 * Remove item from slot.
	 * @param {?Item} [it=null] - item to remove. If item is null, any item(s) in slot are removed.
	 * @returns {?Item|boolean} - If no parameter is specified, removes all items and returns them.
	 * If a param is specified, returns the item removed.
	 */
	remove( it=undefined) {

		if ( this.item === it ) {

			this.item = null;
			return it;

		} else if ( it === null || it === undefined ) {

			it = this.item;
			this.item = null;

			return it;

		} else if ( this.multi ) {

			let ind = this.item.indexOf(it);
			if ( ind < 0 ) return false;
			return this.item.splice(ind,1)[0];

		}

		return false;

	}

	revive( state ) {

		if ( this.item === null || this.item === undefined ) return;
		if ( Array.isArray( this.item) ) {

			for( let i = this.item.length-1; i>= 0; i-- ) {

				var it = Object(_itemgen__WEBPACK_IMPORTED_MODULE_0__["itemRevive"])(state, this.item[i]);
				if (!it) {

					this.item.splice(i,1);
				} else this.item[i] = it;
			}

		} else this.item = Object(_itemgen__WEBPACK_IMPORTED_MODULE_0__["itemRevive"])(state, this.item );

	}

	/**
	 * Return the hands used by a weapon held in this slot.
	 */
	hands() {
		return this.item != null ? (this.item.hands) || 0 : 0;
	}

	empty(){
		return this.item === null ||
			(Array.isArray(this.item) && this.item.length===0);
	}

}

/***/ }),

/***/ "./src/chars/slotgroup.js":
/*!********************************!*\
  !*** ./src/chars/slotgroup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlotGroup; });
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot */ "./src/chars/slot.js");


class SlotGroup {

	get slots() { return this._slots; }
	set slots(v) {

		for( let p in v ) {

			var s = v[p];
			if ( s instanceof _slot__WEBPACK_IMPORTED_MODULE_0__["default"] ) continue;
			v[p] = new _slot__WEBPACK_IMPORTED_MODULE_0__["default"](s);

		}

		this._slots = v;

	}

	constructor( vars=null ) {

		if ( vars ) Object.assign(this, vars);

	}

	/**
	 * Find equipment item by id.
	 * @param {string} id
	 * @returns {Item|null}
	 */
	find( id ) {

		for( let p in this.slots ) {
			var it = this.slots[p].find(id);
			if ( it ) return it;
		}
		return null;

	}

	/**
	 * Get item or items in a named slot.
	 * @param {string} slot
	 * @returns {?Item|Item[]}
	 */
	get( slot ) {

		slot = this.slots[slot];
		if ( slot === undefined ) return undefined;

		return slot.item;


	}

	freeSpace( slot ) {
		slot = this.slots[slot];
		if ( slot === undefined ) return 0;
		return slot.freeSpace();
	}

	/**
	 *
	 * @param {Item} it
	 */
	remove( it, slot=null ) {

		slot = slot || it.slot;
		if ( typeof slot === 'string' ) slot = this.slots[slot];

		//console.log('remove from: ' + slot.id );
		if ( slot ) return slot.remove(it);

		return false;

	}

	revive(state) {
		for( let p in this.slots ) {
			this.slots[p].revive(state);
		}

	}

	/**
	 *
	 * @param {Armor|Weapon} it
	 * @param {string} slot
	 * @returns {boolean|Wearable|Wearable[]}
	 */
	setSlot( it, slot=null ) {

		slot = slot || it.slot;
		if( slot === null || !this.slots.hasOwnProperty(slot)) return false;

		let cur = this.slots[slot];
		return cur.equip(it);
	}

	/**
	 * Iterate slot names.
	 */
	* slotNames() {
		for( let k in this.slots ) yield k;
	}

	*[Symbol.iterator]() {

		for( let k in this.slots ) {

			var it = this.slots[k].item;
			if ( Array.isArray(it) ) {

				for( let i = it.length-1; i>= 0; i-- ) {
					if ( it[i]) yield it[i];
				}

			} else if (it ) yield it;

		}

	}

}

/***/ }),

/***/ "./src/chars/wearable.js":
/*!*******************************!*\
  !*** ./src/chars/wearable.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wearable; });
/* harmony import */ var _items_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/base */ "./src/items/base.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attack */ "./src/chars/attack.js");
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");
/* harmony import */ var _values_mod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values/mod */ "./src/values/mod.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");









class Wearable {

	toJSON() {

		let data = this.excludeJSON( ['material', 'kind'] ) || {};

		data.id = this.id;

		if ( !this.template ) console.warn('MISSING TEMPLATE: ' + this.id );
		else if ( typeof this.template === 'string' ) {
			data.template = this.template;
		}
		else data.template = this.template.id;

		data.name = this.name;
		data.attack = this.attack || undefined;

		data.enchants = this.enchants || undefined;
		if ( this.mod ) data.mod = this.mod;

		if ( this.material ) {
			if ( !data ) data = {};
			data.material = this.material.id;
		}

		return data ? data : undefined;

	}

	get instance() { return true; }
	get equippable() { return true; }

	/**
	 * @property {string} protoId - id of item template used to instance this item.
	 */
	get protoId() { return this.template?  this.template.id : this._id; }

	/**
	 * @property {number} enchants - total level of all enchantments applied.
	 */
	get enchants() { return this._enchants || 0; }
	set enchants(v) { this._enchants = v; }

	get material() { return this._material; }
	set material(v) { this._material=v;}

	/**
	 * @property {} armor
	 */
	get armor(){ return this._armor; }
	set armor(v) { this._armor = v; }

	get attack() { return this._attack; }
	set attack(v) {

		if ( v ) {
			this._attack = v instanceof _attack__WEBPACK_IMPORTED_MODULE_2__["default"] ? v.clone() : new _attack__WEBPACK_IMPORTED_MODULE_2__["default"](v);
		} else this._attack = null;

	}

	/**
	 * @property {string} kind - subtype of wearable.
	 */
	get kind() { return this._kind; }
	set kind(v) { this._kind = v; }

	/*get mod() { return this._mod; }
	set mod(v) {
		this._mod = this.convertMods(v);
	}*/

	constructor(vars=null){

		if ( vars ) Object(_util_util__WEBPACK_IMPORTED_MODULE_5__["assignNoFunc"])(this,vars );// Object.assign(this,vars);

		this.value = this.value || 1;

		//if ( vars ) logObj( vars, 'vars');
		//if( vars.template ) logObj( vars.template, ' template' );
		if ( !this.type ) {
			this.type = 'wearable';
		}

	}

	maxed() { return false; }

	revive( state ) {

		if ( typeof this.material === 'string') this.material = state.getMaterial( this.material );

		if ( typeof this.template === 'string' ) this.template = state.getData( this.template );
		if ( this.template ) {

			if ( this.armor === null || this.armor === undefined ) this.armor = this.template.armor;
			// bonus applied for using item; not linked to attack.
			if ( this.tohit === null || this.tohit === undefined ) this.tohit = this.template.tohit || 0;

			if ( this.attack === null || this.attack === undefined ) this.attack = this.template.attack;

			this.type = this.template.type || this.type;

			Object(objecty__WEBPACK_IMPORTED_MODULE_3__["mergeSafe"])( this, this.template );

		} else console.log('wearable template not found: ' + this.template );

	}

	applyMaterial( mat ) {

		if (!mat) return;

		this.material = mat;
		if ( this.armor !== null && this.armor !== undefined ) this.applyBonus( this, 'armor', mat.bonus );

		if ( this.attack ) {


			if ( this.attack.damage !== null && this.attack.damage !== undefined ) {
				this.applyBonus( this.attack, 'damage', mat.bonus );
			}
			if ( mat.tohit ) {
				//console.log('apply mat to: ' + this.id );
				this.applyBonus( this.attack, 'tohit', mat.tohit );
			}

		} else {

		}

	}

	/**
	 * Bonus applied by material.
	 * @param {Object} obj - object being modified.
	 * @param {string} prop
	 * @param {number|Mod} amt
	 */
	applyBonus( obj, prop, amt=0 ) {

		let cur = obj[prop];
		if ( cur === null || cur === undefined ) {
			console.log('item tohit undefined. assign: ' + amt );
			obj[prop] = amt;
		}
		else if ( typeof cur === 'number') {
			 obj[prop] = cur + amt;
		}
		else if ( cur instanceof _values_range__WEBPACK_IMPORTED_MODULE_1__["default"] ) cur.add( amt );

	}

	equip( player ) {

		if ( this.armor ) player.defense += this.armor;
		if ( this.type === 'weapon' ) player.weapon = this;

	}

	unequip( player ) {

		if ( this.armor ) player.defense -= this.armor;
		if ( player.weapon == this ) player.weapon = null;

	}

	convertMods(v) {

		let t = typeof v;
		if ( v instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) {
			console.log('ALREADY MOD: ' + v );
			return v;
		}

		console.log('CONVERTING MOD: ' + this.id );
		if ( t === 'object') {

			if ( v.id ) {
				console.log('creating mod: ' );
				for( let p in v ) console.log( p + ' -> ' + v[p]);
				return new _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"]( v );
			} else {

				for( let p in v ) {
					v[p] = this.convertMods( v[p] );
				}

			}

		} else if ( t === 'string' || t==='number') return new _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"](v, this.id);

		return v;

	}

}


Object(_items_base__WEBPACK_IMPORTED_MODULE_0__["mergeClass"])( Wearable, _items_base__WEBPACK_IMPORTED_MODULE_0__["default"] );

/***/ }),

/***/ "./src/cheats.js":
/*!***********************!*\
  !*** ./src/cheats.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cheats;

if ( false ) {} else {

	const cheatKeys = {
		b: 'herbs',
		g: 'gold',
		s: 'scrolls',
		e: 'exp',
		t: 'stamina',
		h: "hp",
		k: 'sp',
		m: 'mana',
		c: 'codices',
		a: 'arcana',
		r: 'research'
	};

 cheats = {

	created() {

		window.addEventListener('keydown', e => {
			if (e.repeat) return;
			this.cheatKey(e);
		}, false);

		this.enabled = false;
		this.code = 'bodias';
		this.input = '';
	},

	methods: {

		cheatKey(e) {

			if (!this.runner) return;

			let key = e.key.toLowerCase();

			if ( !this.enabled ) {
				this.testUnlock(key);
				return;
			}

			let targ = cheatKeys[key];

			if (key === 'p') {
				this.state.getData('runner').autoProgress();
				e.stopPropagation();
			}

			if ( targ ) {
				if (e.shiftKey) this.state.addMax( targ );
				else {
					let it = this.state.getData( targ );
					if (it.locked) it.locked = false;
					this.game.fillItem( targ );
				}
				e.stopPropagation();
			}

		},
		testUnlock(key){

			this.input += key;
			if ( this.input === this.code ) {

				console.warn('CHEATS ON');
				this.enabled = true;

			} else if ( this.input.length >= this.code.length ) {
				this.input = this.input.slice( 1+ this.input.length - this.code.length );
			}

		}

	}

}

}

/* harmony default export */ __webpack_exports__["default"] = (cheats);

/***/ }),

/***/ "./src/composites/combat.js":
/*!**********************************!*\
  !*** ./src/composites/combat.js ***!
  \**********************************/
/*! exports provided: tryDamage, applyDamage, getDamage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryDamage", function() { return tryDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyDamage", function() { return applyDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDamage", function() { return getDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Combat; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");
/* harmony import */ var _chars_dot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chars/dot */ "./src/chars/dot.js");
/* harmony import */ var _chars_npc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chars/npc */ "./src/chars/npc.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _items_monster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items/monster */ "./src/items/monster.js");
/* harmony import */ var _chars_wearable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chars/wearable */ "./src/chars/wearable.js");










/**
* Attempt to damage a target. Made external for use by dots, other code.
* @param {Char} target
* @param {Object} attack
*/
function tryDamage(target, attack, attacker = null) {

	if (attack.kind) {

		if (target.isImmune(attack.kind)) {

			_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_events__WEBPACK_IMPORTED_MODULE_4__["DAMAGE_MISS"], target.name + ' is immune to ' + attack.kind);

			return false;
		}

	}
	if (attack.damage ) {

		if ( !attack.getDamage){
			console.error('NO DMG FUNC: ' + attack );
		}
		// add optional base damage from attacker.

		let dmg = ( attack.getDamage ? attack.getDamage() : getDamage(attack.damage) ) +
			((attacker && (attacker !== attack) && attacker.damage) ?
				getDamage(attacker.damage) : 0);

		let resist = target.getResist(attack.kind);
		if (resist > 0) {

			dmg *= (1 - resist);
		}

		target.hp -= dmg;
		if ( target.hp <= 0 ) {
			_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_4__["CHAR_DIED"], target, attack );
		}

		var attackName = attack.name || (attacker ? attacker.name : '');

		_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_events__WEBPACK_IMPORTED_MODULE_4__["EVT_COMBAT"], null, target.name + ' hit' +
			(attackName != null ? (' by ' + attackName ) : '') +
			': ' + dmg.toFixed(1));

		if (attack.leech && attacker) {
			let amt = Math.floor(100 * attack.leech * dmg) / 100;
			attacker.hp += amt;
			_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_events__WEBPACK_IMPORTED_MODULE_4__["EVT_COMBAT"], null, attacker.name + ' steals ' + amt + ' life.');
		}

	}

	if (attack.dot) {
		target.addDot(new _chars_dot__WEBPACK_IMPORTED_MODULE_2__["default"](attack.dot, attacker, attack.name));
	}

	return true;

}

function applyDamage(target, attack, attacker = null) {
}

/**
* Convert damage object to raw damage value.
* @param {number|function|Range|Attack} dmg /
*/
function getDamage(dmg) {

	if (dmg instanceof _values_range__WEBPACK_IMPORTED_MODULE_1__["default"]) return dmg.value;
	else if (!isNaN(dmg)) return Number(dmg);
	console.log('Damage undefined: ' + dmg);
	return 0;

	// TODO: invalid
	//else return dmg( this.state, this.player, this.enemy );

}

class Combat {

	toJSON() {

		return {
			enemies: this._enemies
		}

	}

	/**
	 * @property {Npc[]} enemies - enemies in the combat.
	 */
	get enemies() { return this._enemies; }
	set enemies(v) {

		for (let i = v.length - 1; i >= 0; i--) {

			var obj = v[i];
			if ( obj instanceof _items_monster__WEBPACK_IMPORTED_MODULE_5__["default"] ) v[i] = _game__WEBPACK_IMPORTED_MODULE_0__["default"].itemGen.npc( obj);
			else if (!(obj instanceof _chars_npc__WEBPACK_IMPORTED_MODULE_3__["default"]) ) v[i] = new _chars_npc__WEBPACK_IMPORTED_MODULE_3__["default"]( v[i] );

		}

		this._enemies = v;
	}

	/**
	 * @property {Npc[]} allies - creatures fighting for player.
	 */
	get allies() { return this._allies; }
	set allies(v) { this._allies = v; }

	get complete() { return this._enemies.length === 0; }

	constructor(vars = null) {

		if (vars) Object.assign(this, vars);

		this._enemies = this._enemies || [];

	}

	revive(state) {

		this.state = state;
		this.player = state.player;

		for( let i = this._enemies.length-1; i>=0; i-- ) this._enemies[i].revive(state);

		_events__WEBPACK_IMPORTED_MODULE_4__["default"].add( _events__WEBPACK_IMPORTED_MODULE_4__["CHAR_DIED"], this.charDied, this );

		this.allies = state.minions.active;

	}

	update(dt) {

		if ( this._enemies.length === 0 ) return;

		this.player.timer -= dt;
		if ( this.player.alive === false ) {
			return;
		}
		if ( this.player.timer <= 0 ) {

			this.player.timer += this.player.delay;

			// attempt to use primary item attack first.
			if ( !this.player.primary || !_game__WEBPACK_IMPORTED_MODULE_0__["default"].tryItem( this.player.primary )) {

				this.allyAttack( this.player, this.player.weapon||this.player.baseWeapon );

			}

		}

		var e, action;
		for( let i = this._allies.length-1; i >= 0; i-- ) {

			e = this._allies[i];
			if ( e.alive === false ) {
				continue;
			}
			action = e.update(dt);
			if ( action ) this.allyAttack( e, action );

		}

		for( let i = this._enemies.length-1; i >= 0; i-- ) {

			e = this._enemies[i];
			if ( e.alive === false ) { this._enemies.splice(i,1); continue;}
			action = e.update(dt);
			if ( action ) this.enemyAttack( e, action );

		}

	}

	/**
	 * Player-casted spell or action attack.
	 * @param {Item} it
	 */
	spellAttack( it ) {

		//console.log('spell attack');
		if ( this._enemies.length===0 ) {

			_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_events__WEBPACK_IMPORTED_MODULE_4__["EVT_COMBAT"], null, this.player.name + ' casts ' + it.name + ' at the darkness.' );

		} else this.allyAttack( this.player, it );

	}

	/**
	 *
	 * @param {Item} src - attack source. (spell,weapon,etc.)
	 */
	allyAttack( attacker, src ) {

		let atk = src ? (src.attack||src) : attacker.attack;

		if ( atk.targets === 'all') {

			for( let i = this.enemies.length-1; i>= 0; i-- ) {
				this.doAttack(attacker, atk, this.enemies[i]);
			}

		} else this.doAttack( attacker, atk, this.enemies[0] );

	}

	/**
	 *
	 * @param {Char} attacker - enemy attacking.
	 * @param {Object|Char} attack - attack object.
	 */
	enemyAttack( attacker, attack ) {

		if ( Array.isArray(attack) ) {
			attack.forEach(v=>this.enemyAttack(attacker,v), this);
			return;
		}

		if ( attack.targets === 'all' ) {

			this._allies.forEach(v=>this.doAttack(attacker, attack, v) );
			this.doAttack( attacker, attack, this.player );

		} else this.doAttack( attacker, attack, this.nextAlly() );

	}

	/**
	 * @returns {Npc} next target of an enemy attack
	 */
	nextAlly() {

		let len = this._allies.length;

		//console.log('allies: ' + len );

		for( let i = 0; i < len; i++ ) {
			if ( this._allies[i].alive ) return this._allies[i];
		}
		return this.player;
	}

	/**
	 *
	 * @param {Char} attacker
	 * @param {Attack} atk
	 * @param {Char} targ
	 */
	doAttack( attacker, atk, targ ) {

		if ( this.tryHit( attacker, targ, atk ) ) {
			tryDamage( targ, atk, attacker );
		}

	}

	/**
	 * Rolls an attack roll against a defender.
	 * @param {Char} attacker - attack object
	 * @param {Char} defender - defending char.
	 * @param {Object} attack - attack or weapon used to hit.
	 * @returns {boolean} true if char hit.
	 */
	tryHit( attacker, defender, attack ){

		let tohit = attacker.tohit || 0;
		if ( attack && (attack != attacker) ) tohit += ( attack.tohit || 0 );

		if ( Math.random() >  this.dodgeRoll( defender.dodge, tohit )) {

			_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_4__["DAMAGE_MISS"], defender.name + ' dodges ' + (attack.name||attacker.name));
			return false;
		}

		//console.log( attacker.name + ': ' + tohit + '  vs: ' + defender.defense );
		if ( Math.random()*( 10 + tohit ) >= Math.random()*(10 + defender.defense ) ) return true;

		_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_4__["DAMAGE_MISS"], attacker.name + ' misses' );
		return false;

	}

	setEnemies( enemy, pct ) {

		var enemies = [];

		if (  Array.isArray(enemy)){

			for( let i = enemy.length-1; i >=0; i-- ) {
				enemies.push( this.makeEnemy( enemy[i], pct) );
			}

		} else {

			enemies.push( this.makeEnemy(enemy, pct) );

		}

		if ( enemies.length>0 && enemies[0]) _events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_4__["EVT_COMBAT"], enemies[0].name + ' Encountered' );

		this.enemies = enemies;

	}

	/**
	 * Retrieve enemy template data from enemy string or build object.
	 */
	makeEnemy( e, pct=1 ) {

		if ( typeof e === 'string' ) return _game__WEBPACK_IMPORTED_MODULE_0__["default"].getData(e);

		e = _game__WEBPACK_IMPORTED_MODULE_0__["default"].itemGen.genEnemy( e, pct );
		if ( !e) {console.warn( 'Missing Enemy: ') }

		return e;

	}

	/**
	 * Clear the current combat encounter.
	 */
	clear() { this._enemies = []; }

	dodgeRoll( dodge, tohit ) {

		let x = ( tohit > dodge ? 1 : dodge - tohit )/10;
		return ( Math.exp( -x*x ) );

	}

	charDied( char, attacker ) {

		if ( char === this.player ) return;
		else if ( char.team === _chars_npc__WEBPACK_IMPORTED_MODULE_3__["ALLY"] ) {

			_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_4__["ALLY_DIED"], char );

		} else _events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_4__["ENEMY_SLAIN"], char, attacker );

	}

}

/***/ }),

/***/ "./src/composites/explore.js":
/*!***********************************!*\
  !*** ./src/composites/explore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explore; });
/* harmony import */ var _chars_inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chars/inventory */ "./src/chars/inventory.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _chars_char__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chars/char */ "./src/chars/char.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _items_encounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/encounter */ "./src/items/encounter.js");
/* harmony import */ var _itemgen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../itemgen */ "./src/itemgen.js");








/**
 * Explore locations of arcane importance.
 */
class Explore {

	get id() { return 'explore';}

	toJSON() {

		return {
			locale:this.locale ? this.locale.id : undefined,
			enc:this.enc
		}

	}

	/**
	 * @property {string} name - name of locale in progress.
	 */
	get name() { return this.locale? this.locale.name : ''; }

	get cost() { return this.locale ? this.locale.cost : null; }
	get run() { return this.locale ? this.locale.run : null; }

	get exp(){ return this.locale ? this.locale.exp : 0; }
	set exp(v){

		if ( v >= this.locale.length ) {
			this.complete();
		} else this.locale.exp=v;

	}

	percent() { return this.locale ? this.locale.percent() : 0; }
	maxed() { return !this.locale || this.locale.maxed(); }

	canUse() { return this.locale && !this.locale.maxed(); }

	get encs() { return this.locale ? this.locale.encs : null; }

	/**
	 * @property {number} length - length of locale in progress.
	 */
	get length() { return this.locale ? this.locale.length : 0; }

	get enc() { return this._enc; }
	set enc(v) { this._enc = v; }

	get done() { return this.exp === this.length; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars);

		this.running = this.running || false;

		this.type = 'explore';
		this._enc = this._enc || null;

		/**
		 * @property {locale} locale - current locale.
		 */
		this.locale = this.locale || null;

	}

	revive( gameState ) {

		this.state = gameState;
		this.player = gameState.player;

		if ( typeof this.locale === 'string') this.locale = gameState.getData(this.locale);

		if ( this._enc ) { this.enc = Object(_itemgen__WEBPACK_IMPORTED_MODULE_5__["itemRevive"])( gameState, new _items_encounter__WEBPACK_IMPORTED_MODULE_4__["default"](this._enc) ); }

		if ( !this.locale) this.running = false;

	}

	update(dt) {

		if ( this.locale == null || this.done ) return;

		if ( !this.enc ) this.nextEnc();

		// done by runner.
		/*if ( this.locale.effect ) { Game.applyEffect( this.locale.effect, dt ); }*/
		if ( this.enc ) {

			this.enc.update( dt );
			if ( this.player.defeated ) {

				_events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_1__["DEFEATED"], this );
				_events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_1__["ACT_BLOCKED"], this, true );

			} else if ( this.enc.done ) {

				this.encDone( this.enc );
				this.advance();

			}
		}

	}

	nextEnc(){

		if ( !this.locale ) return;
		// get random encounter.
		this.player.delay = Object(_chars_char__WEBPACK_IMPORTED_MODULE_2__["getDelay"])( this.player.speed );
		var e = this.locale.getEnc();

		if ( typeof e === 'string') {

			var it = _game__WEBPACK_IMPORTED_MODULE_3__["default"].instance(e);

			if ( it ){

				this._enc = it;
				it.exp = 0;

			} else console.warn('MISSING ENCOUNTER: ' + e );

		}

	}

	/**
	 * encounter complete.
	 * @param {*} enc
	 */
	encDone( enc ) {

		this.player.exp += 0.75 + Math.max( enc.level - this.player.level, 0 );

		//console.log('ENEMY templ: ' + (typeof enemy.template) );

		if ( enc.template && enc.template.id ) {

			let tmp = this.state.getData(enc.template.id );
			if ( tmp ) tmp.value++;

		} else enc.value++;

		if ( enc.result ) _game__WEBPACK_IMPORTED_MODULE_3__["default"].applyEffect( enc.result );
		if ( enc.loot ) _game__WEBPACK_IMPORTED_MODULE_3__["default"].getLoot( enc.loot, _game__WEBPACK_IMPORTED_MODULE_3__["default"].state.drops );

		this.enc = null;

	}

	/**
	 * advance locale progress.
	 */
	advance() {
		this.exp += 1;
	}

	complete() {

		this.locale.exp = this.locale.length;
		this.locale.dirty = true;

		if ( this.locale.loot ) _game__WEBPACK_IMPORTED_MODULE_3__["default"].getLoot( this.locale.loot, _game__WEBPACK_IMPORTED_MODULE_3__["default"].state.drops );
		if ( this.locale.result ) _game__WEBPACK_IMPORTED_MODULE_3__["default"].applyEffect( this.locale.result );
		this.locale.value++;

		var del = Math.max( 1 + this.player.level - this.locale.level, 1 );

		this.player.exp +=	(this.locale.level)*( 15 + this.locale.length )/( 0.8*del );

		this.enc = null;

		_events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_1__["ACT_DONE"], this, false );
		this.locale = null;

	}

	enter( d ) {

		this.player.timer = this.player.delay;

		if ( d != null ) {

			if ( d != this.locale ) this.enc = null;
			if ( d.exp >= d.length ) {
				d.exp = 0;
			}
		}

		this.locale = d;

	}

	hasTag(t) { return t==='explore'; }

}

/***/ }),

/***/ "./src/composites/raid.js":
/*!********************************!*\
  !*** ./src/composites/raid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Raid; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _chars_inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chars/inventory */ "./src/chars/inventory.js");
/* harmony import */ var _combat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combat */ "./src/composites/combat.js");
/* harmony import */ var _chars_char__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chars/char */ "./src/chars/char.js");








/**
 * Represents an active dungeon raid.
 */
class Raid {

	get id() { return 'raid';}

	/**
	 * @property {string} name - name of dungeon in progress.
	 */
	get name() { return this.locale? this.locale.name : ''; }

	get cost() { return this.locale ? this.locale.cost : null; }
	get run() { return this.locale ? this.locale.run : null; }

	get exp(){ return this.locale ? this.locale.exp : 0; }
	set exp(v){

		if ( v >= this.locale.length ) {
			this.complete();
		} else this.locale.exp=v;

	}

	percent() { return this.locale ? this.locale.percent() : 0; }
	maxed() { return !this.locale || this.locale.maxed(); }

	canUse() { return this.locale && !this.locale.maxed(); }

	/**
	 * @compat @deprecated
	 */
	set dungeon(v) {this.locale = v;}

	/**
	 * @property {number} length - length of dungeon in progress.
	 */
	get length() { return this.locale ? this.locale.length : 0; }

	get combat() { return this._combat; }
	set combat(v) { this._combat = v instanceof _combat__WEBPACK_IMPORTED_MODULE_3__["default"] ? v : new _combat__WEBPACK_IMPORTED_MODULE_3__["default"](v); }

	get enc() { return this._combat; }
	set enc(v) {}

	get done() { return this.exp === this.length; }

	toJSON() {

		return {
			locale:this.locale ? this.locale.id : undefined,
			drops:this.drops
		}

	}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars);

		this.drops = this._drops || new _chars_inventory__WEBPACK_IMPORTED_MODULE_2__["default"]();

		this._combat =  this._combat || new _combat__WEBPACK_IMPORTED_MODULE_3__["default"]();

		this.running = this.running || false;

		this.type = 'raid';

		/**
		 * @property {Dungeon} locale - current dungeon.
		 */
		this.locale = this.locale || null;

	}

	revive( gameState ) {

		this.state = gameState;
		this.player = gameState.player;

		_events__WEBPACK_IMPORTED_MODULE_0__["default"].add( _events__WEBPACK_IMPORTED_MODULE_0__["ENEMY_SLAIN"], this.enemyDied, this );
		_events__WEBPACK_IMPORTED_MODULE_0__["default"].add( _events__WEBPACK_IMPORTED_MODULE_0__["ITEM_ATTACK"], this.spellAttack, this );
		_events__WEBPACK_IMPORTED_MODULE_0__["default"].add( _events__WEBPACK_IMPORTED_MODULE_0__["CHAR_DIED"], this.charDied, this );

		if ( typeof this.locale === 'string') this.locale = gameState.getData(this.locale);

		if ( !this.locale) this.running = false;

		this._combat.revive( gameState );

	}

	charDied( c ) {

		if ( c !== this.player || !this.running ) return;

		_events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_0__["DEFEATED"], null );
		_events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_0__["ACT_BLOCKED"], this,
			this.locale && this.player.level>this.locale.level && this.player.retreat>0 );

	}

	update(dt) {

		if ( this.locale == null || this.done ) return;

		if ( this._combat.complete ) {

			this.advance();
			if ( !this.done ) this.nextEnc();

		} else this._combat.update(dt);

	}

	/**
	 * Player-casted spell or action attack.
	 * @param {Item} it
	 */
	spellAttack( it ) { if ( this.locale && this.running ) this._combat.spellAttack(it); }

	/**
	 * Get next dungeon enemy.
	 */
	nextEnc() {


		/**
		 * @todo: maket this happen automatically.
		 */
		this.player.delay = Object(_chars_char__WEBPACK_IMPORTED_MODULE_4__["getDelay"])( this.player.speed );
		this.combat.setEnemies( this.locale.getEnemy(), this.exp/this.length );

	}

	enemyDied( enemy, attacker ) {

		this.player.exp += 1 + Math.max( enemy.level - this.player.level, 0 );
		attacker.timer =attacker.delay;

		//console.log('ENEMY templ: ' + (typeof enemy.template) );

		if ( enemy.template && enemy.template.id ) {

			let tmp = this.state.getData(enemy.template.id );
			if ( tmp ) {
				tmp.value++;
			}
		}

		if ( enemy.result ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].applyEffect( enemy.result );
		if ( enemy.loot ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].getLoot( enemy.loot, _game__WEBPACK_IMPORTED_MODULE_1__["default"].state.drops );
		else _game__WEBPACK_IMPORTED_MODULE_1__["default"].getLoot( {max:enemy.level, pct:30}, _game__WEBPACK_IMPORTED_MODULE_1__["default"].state.drops );

	}

	advance() { this.exp += 1; }

	complete() {

		this.locale.exp = this.locale.length;
		this.locale.dirty = true;

		if ( this.locale.loot ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].getLoot( this.locale.loot, _game__WEBPACK_IMPORTED_MODULE_1__["default"].state.drops );
		if ( this.locale.result ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].applyEffect( this.locale.result );
		this.locale.value++;

		var del = Math.max( 1 + this.player.level - this.locale.level, 1 );

		this.player.exp +=	(this.locale.level)*( 15 + this.locale.length )/( 0.8*del );

		_events__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_0__["ACT_DONE"], this, false );
		this.locale = null;

	}

	/**
	 * enter dungeon
	 * @param {*} d
	 */
	enter( d ) {

		this.player.timer = this.player.delay;

		if ( d != null ) {

			if ( d != this.locale ) {
				this.combat.clear();
			}

			if ( d.exp >= d.length ) {
				d.exp = 0;
			}
		}

		this.locale = d;
		if ( this.combat.complete ) this.nextEnc();

	}

	hasTag(t) { return t==='raid'; }
}

/***/ }),

/***/ "./src/composites/runnable.js":
/*!************************************!*\
  !*** ./src/composites/runnable.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Runnable; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/events.js");



/**
 * Wraps an action in progress with an action target, and possible
 * extra instance data.
 */
class Runnable {

	toJSON(){

		return {
			item:this.item ? this.item.id : undefined,
			target:this.target ? this.target.id : undefined,
			exp:this._exp
		};
	}

	get type() { return 'runnable'; }

	/**
	 * @property {?Item} target - target of the running item.
	 * may be undefined if not applicable.
	 */
	get target() { return this._target;}
	set target(v) { this._target = v; }

	/**
	 * @property {Item} item - item being run.
	 */
	get item() { return this._item; }
	set item(v) { this._item = v; }

	/**
	 * @property {string} id - maybe a bad idea.
	 */
	get id() { return this.item.id; }

	set count(v){}
	set name(v){}

	/**
	 * @property {string} name
	 */
	get name() { return this.item ? this.item.name : ''; }

	hasTag(t) { return this.item && this.item.hasTag(t); }
	hasTags(t) { return this.item && this.items.hasTag(t); }

	get cost() { return this.item ? this.item.cost : null; }
	get run() { return this.item ? this.item.run : null; }
	get effect() { return this.item ? this.item.effect : null; }

	get running() { return this.item ? this.item.running:false;}
	set running(v) { if ( this.item) this.item.running=v;}

	get exp(){ return this._exp; }
	set exp(v) { this._exp = v; }

	get repeatable() { return this._item && this._item.repeatable || false; }

	percent() { return this._length ? 100*this._exp / this._length : 0; }
	maxed() { return this.item.maxed(); }
	canUse() { return this.item.canUse(); }

	get length() { return this._length; }
	set length(v) { this._length = v;}

	complete() { return this._exp < this._length; }

	/**
	 * If target is supplied, first element MUST be the item
	 * being used with target.
	 * @param {*} vars
	 * @param {*} targ
	 */
	constructor( vars=null, targ=null ) {

		if ( targ ) {

			this.target = targ;
			this.item = vars;

		} else if (vars) Object.assign( this, vars );

		this.length = ( typeof this.item === 'object') ? this.item.length || 0 : 0;
		this.exp = this._exp || 0;

	}

	update(dt){

		this.exp += dt;

		if ( this.exp > this.length ) {
			if ( this.target ) _game__WEBPACK_IMPORTED_MODULE_0__["default"].useWith( this.item, this.target );
			_events__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_1__["ACT_DONE"], this, this.repeatable );
		}

	}

	revive( state ) {

		if ( typeof this._item === 'string') this._item = state.findData(this._item);
		if ( typeof this._target === 'string') this._target = state.findData(this._target);

		if ( this.item ) this._length = this._item.length;
		console.log('this exp: ' + this.exp );
		console.log('enc len: ' + this.length );

	}

}

/***/ }),

/***/ "./src/dataLoader.js":
/*!***************************!*\
  !*** ./src/dataLoader.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_gdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/gdata */ "./src/items/gdata.js");
/* harmony import */ var _chars_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chars/player */ "./src/chars/player.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values/range */ "./src/values/range.js");
/* harmony import */ var _values_percent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./values/percent */ "./src/values/percent.js");
/* harmony import */ var _values_mod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./values/mod */ "./src/values/mod.js");
/* harmony import */ var _items_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/resource */ "./src/items/resource.js");
/* harmony import */ var _items_zerosum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/zerosum */ "./src/items/zerosum.js");
/* harmony import */ var _items_revStat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/revStat */ "./src/items/revStat.js");
/* harmony import */ var _items_statData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/statData */ "./src/items/statData.js");
/* harmony import */ var _items_skill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items/skill */ "./src/items/skill.js");
/* harmony import */ var _items_monster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items/monster */ "./src/items/monster.js");
/* harmony import */ var _items_dungeon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./items/dungeon */ "./src/items/dungeon.js");
/* harmony import */ var _items_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./items/locale */ "./src/items/locale.js");
/* harmony import */ var _items_spell_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./items/spell.js */ "./src/items/spell.js");
/* harmony import */ var _items_action__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./items/action */ "./src/items/action.js");
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");
/* harmony import */ var _items_protoItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./items/protoItem */ "./src/items/protoItem.js");
/* harmony import */ var _chars_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chars/material */ "./src/chars/material.js");
/* harmony import */ var _items_enchant__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./items/enchant */ "./src/items/enchant.js");
/* harmony import */ var _items_item__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./items/item */ "./src/items/item.js");
/* harmony import */ var _items_potion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./items/potion */ "./src/items/potion.js");
/* harmony import */ var _items_encounter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./items/encounter */ "./src/items/encounter.js");














//import VarPath  from './varPath';














const DataDir = './data/';
const DataFiles = [ 'resources', 'upgrades', 'actions', 'homes', 'furniture', 'skills',
	'player', 'spells', 'monsters', 'dungeons', 'events', 'classes', 'armors', 'weapons',
	'materials', 'enchants', 'sections', 'potions', 'encounters', 'locales','stressors' ];

/**
 * @const {RegEx} IdTest - Test for a simple id name.
 */
const IdTest = /^[A-Za-z_]+\w*$/;

/**
 * @todo replace with server call.
 */
/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {Object.<string,Object>} templates - default GameData templates.
	 * item id => default item data.
	 */
	templates:null,

	/**
	 * Lists of item ids for each item type.
	 * itemType => item id list
	 * @property {Object.<string,string[]>}
	 */
	itemLists:null,

	async loadGame( saveData ) {

		if ( this.templates === null ) {

			return this.loadData().then(()=>{
				return this.makeGameData( this.templates, this.itemLists, saveData );
			});

		} else return this.makeGameData( this.templates, this.itemLists, saveData );

	},

	loadData() {

		let headers = new Headers();
		headers.append( 'Content-Type', 'text/json');
		return Promise.all(

			DataFiles.map(
				v=>window.fetch( DataDir + v + '.json', {

					method:'GET',
					headers:headers,
					mode:'cors',
					credentials:'same-origin'
				}).then( r=>{

					if ( r.status !== 200 ) return null;
					return r.json();
				})

			)

		).then( arr=>this.filesLoaded(arr),
			err=>{ console.error(err); });

	},

	/**
	 * Raw data files loaded.
	 * @param {Object[][]} filesArr
	 */
	filesLoaded( filesArr ) {

		let templates = {};

		let lists = {};

		for( let i = filesArr.length-1; i>=0; i-- ) {

			var itemList = filesArr[i];
			//console.log('Setting Default List: ' + DataFiles[i] );

			for( let j = itemList.length-1; j >= 0; j-- ) {

				// copy every list item as a template.
				templates[ itemList[j].id ] = ( itemList[j] );

			}

			lists[ DataFiles[i] ] = itemList.map(v=>v.id);

		}

		this.templates = this.freezeData( templates );
		//for( let p in this.templates ) console.log('template: ' + p );

		this.itemLists = lists;

	},

	makeGameData( templates, itemLists, saveData={} ){

		saveData = saveData || {};

		// restore Percent/Range classes /special functions of non-item data.
		for( let p in saveData ) {

			if ( p === 'items') continue;
			var dataItem = saveData[p];

			saveData[p] = this.parseSub(dataItem);

		}

		saveData.items = this.mergeDefaults( templates, saveData.items );

		/**
		 * Form the actual item lists used as the gameData.
		 */
		let gameLists = {};

		var idList, gameList;
		for( let p in itemLists ) {

			idList = itemLists[p];

			// lists of game-item data by type.
			gameLists[p] = gameList = [];

			for( let i = 0; i < idList.length; i++ ) {
				// copy actual game data into game list.
				//console.log('Adding ' + idList[i] + ' Item: ' + saveData.items[ idList[i] ] );
				gameList[i] = saveData.items[ idList[i] ];
			}


		}

		return this.initGameData( saveData, gameLists );

	},

	/**
	 *
	 * @param {Object.<string,Object>} templates - template items.
	 * @param {?Object} [saveItems={}] - previous save items, if any.
	 * @returns {Object.<string,Object>} - the saveItems with data merged from default data.
	 */
	mergeDefaults( templates, saveItems={} ) {

		// NOTE: This requires that properties are never actually deleted from items,
		// though they can be set to null.
		for( let p in templates ) {

			var saveObj = saveItems[p] || {};

			Object(objecty__WEBPACK_IMPORTED_MODULE_15__["mergeSafe"])( saveObj, templates[p] );

			saveItems[p] = this.parseSub( saveObj );
			saveObj.template = templates[p];

		}

		return saveItems;

	},

	initGameData( gd, dataLists ){

		this.items = gd.items;

		gd.resources = this.initItems( dataLists['resources'], _items_resource__WEBPACK_IMPORTED_MODULE_5__["default"] );
		gd.stressors = this.initItems( dataLists['stressors'], _items_resource__WEBPACK_IMPORTED_MODULE_5__["default"], 'stress', 'stress' );

		gd.upgrades = this.initItems( dataLists['upgrades'], _items_gdata__WEBPACK_IMPORTED_MODULE_0__["default"], null, 'upgrade' );

		gd.homes = this.initItems( dataLists['homes'], _items_gdata__WEBPACK_IMPORTED_MODULE_0__["default"], 'home', 'home' );
		gd.homes.forEach( v=>v.slot='home');

		this.initItems( dataLists['furniture'], _items_gdata__WEBPACK_IMPORTED_MODULE_0__["default"], 'furniture', 'furniture' );

		gd.skills = this.initItems( dataLists['skills'], _items_skill__WEBPACK_IMPORTED_MODULE_9__["default"] );

		gd.encounters = this.initItems( dataLists['encounters'], _items_encounter__WEBPACK_IMPORTED_MODULE_21__["default"], _items_encounter__WEBPACK_IMPORTED_MODULE_21__["ENCOUNTER"], _items_encounter__WEBPACK_IMPORTED_MODULE_21__["ENCOUNTER"]);
		gd.monsters = this.initItems( dataLists['monsters'], _items_monster__WEBPACK_IMPORTED_MODULE_10__["default"], 'monster', 'monster' );

		this.initItems( dataLists['locales'], _items_locale__WEBPACK_IMPORTED_MODULE_12__["default"] );
		this.initItems( dataLists['dungeons'], _items_dungeon__WEBPACK_IMPORTED_MODULE_11__["default"] );
		this.initItems( dataLists['spells'], _items_spell_js__WEBPACK_IMPORTED_MODULE_13__["default"] );

		gd.armors = this.initItems( dataLists['armors'], _items_protoItem__WEBPACK_IMPORTED_MODULE_16__["default"], 'armor','armor' );
		gd.armors.forEach( v=>v.kind = v.kind || 'armor' );

		gd.weapons = this.initItems( dataLists['weapons'], _items_protoItem__WEBPACK_IMPORTED_MODULE_16__["default"], 'weapon', 'weapon' );
		gd.weapons.forEach(v=>v.kind=v.kind ||'weapon');

		gd.potions = this.initItems( dataLists['potions'], _items_potion__WEBPACK_IMPORTED_MODULE_20__["default"], 'potion', 'potion' );

		gd.materials = this.initItems( dataLists['materials'], _chars_material__WEBPACK_IMPORTED_MODULE_17__["default"], 'material', 'material ');

		gd.events = this.initItems( dataLists['events'], _items_gdata__WEBPACK_IMPORTED_MODULE_0__["default"], null, 'event' );
		gd.classes = this.initItems( dataLists['classes'], _items_gdata__WEBPACK_IMPORTED_MODULE_0__["default"], 'class', 'class' );
		gd.classes.forEach(v=>{
			v.warn=true;
			v.repeat = false;
			v.max = 1;
		});

		gd.actions = this.initItems( dataLists['actions'], _items_action__WEBPACK_IMPORTED_MODULE_14__["default"], null, 'action' );
		gd.actions.forEach( v=>v.repeat = (v.repeat!==undefined ) ? v.repeat : true );

		gd.enchants =this.initItems( dataLists['enchants'], _items_enchant__WEBPACK_IMPORTED_MODULE_18__["default"], null, 'enchant' );
		gd.sections = this.initItems( dataLists['sections']);

		gd.player = this.items.player = this.initPlayer( dataLists['player'], gd.items.player );

		return gd;

	},

	parseSub( sub ) {

		if (Array.isArray(sub) ) {

			for( let i = sub.length-1; i >= 0; i-- ) sub[i] = this.parseSub( sub[i] );

		} else if ( sub instanceof Object ) {

			for( let p in sub ) {

				if ( p === 'mod') {
					sub[p] = this.parseMods( sub[p], sub.id );
					continue;
				} else if ( p === 'require' || p === 'need' ) {

					sub[p] = this.parseRequire( sub[p] );

					continue;
				}

				var obj = sub[p];
				if ( typeof obj === 'string' ){

					if ( _values_percent__WEBPACK_IMPORTED_MODULE_3__["PercentTest"].test(obj) ) {

						sub[p] = new _values_percent__WEBPACK_IMPORTED_MODULE_3__["default"](obj);

					} else if ( _values_range__WEBPACK_IMPORTED_MODULE_2__["RangeTest"].test(obj) ) sub[p] = new _values_range__WEBPACK_IMPORTED_MODULE_2__["default"](obj);
					else if ( !isNaN(obj) ) {
						if ( obj !== null && obj !== undefined && obj !== '' ) console.warn('string used as Number: ' + p + ' -> ' + obj );
						//console.warn('store numeric data as number.');
						//sub[p] = Number(obj);
					}
					else if ( p === 'damage' || p === 'dmg') sub[p] = this.makeDmgFunc(obj);

				} else if ( typeof obj === 'object' ) this.parseSub(obj);

				if ( p.includes('.')) this.splitKeyPath( sub, p );

			}

		} else if ( typeof sub === 'string') {

			if ( _values_range__WEBPACK_IMPORTED_MODULE_2__["RangeTest"].test(sub) ) return new _values_range__WEBPACK_IMPORTED_MODULE_2__["default"](sub);
			else if ( _values_percent__WEBPACK_IMPORTED_MODULE_3__["PercentTest"].test(sub)) return new _values_percent__WEBPACK_IMPORTED_MODULE_3__["default"](sub);
			//else if ( sub.includes('.') ) return new VarPath( sub );

		}

		return sub;

	},

	/**
	 * Parse a requirement-type object.
	 * currently: 'require' or 'need'
	 */
	parseRequire( sub ){

		// REQUIRE
		if ( sub === null || sub === undefined || sub === false || sub === '') return undefined;
		if ( Array.isArray(sub) ) {

			for( let i = sub.length-1; i>= 0; i-- )sub[i] = this.parseRequire( sub[i] );

		} else if ( typeof sub === 'string' && !IdTest.test(sub )) return this.makeTestFunc( sub );

		return sub;

	},

	parseMods( mods, id ) {

		if ( typeof mods === 'string' ) return mods;

		for( let s in mods ){
			if ( s.includes('.')) this.splitKeyPath( mods, s );
		}

		for( let s in mods ) {

			var val = mods[s];
			var typ = typeof val;
			if ( typ === 'number' || (typ === 'string' && _values_mod__WEBPACK_IMPORTED_MODULE_4__["ModTest"].test(val)) ) {

				val = mods[s] = new _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"](val, id);

			} else if ( val instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) continue;
			else if ( typ === 'object') {

				if ( val.id ) mods[s] = new _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"]( val );
				else this.parseMods( val, id );
			}

		}
		return mods;

	},

	/**
	 * Create a testing function that accepts when
	 * the level of the given data item exceeds the level
	 * of the item to be unlocked.
	 * @todo: doesn't work. unlock test too abstract to detect in code.
	 * @param {string} unlocker - name of item that unlocks the item.
	 * @returns {function}
	 */
	levelTestFunc( unlocker ) {
		return (g,i)=>{
			g[unlocker].level >= i.level; };
	},

	/**
	 * Create a boolean testing function from a data string.
	 * @param {string} text - function text.
	 */
	makeTestFunc( text ) {

		return new Function( "g", 'i', 's', 'return ' + text );
	},

	/**
	 * Create a function which performs an arbitrary effect.
	 * player and target params are given for simplicity.
	 * target is the current enemy, if any.
	 * dt is the elapsed time.
	 * @param {*} text
	 */
	makeEffectFunc( text ) {
		return new Function( 'g', 't', 'dt', text );
	},

	/**
	 * Create a damage-value function for an attack.
	 * @param {*} text
	 */
	makeDmgFunc(text){
		return new Function( 'state', 'player', 'target', 'return ' + text );
	},

	initItems( dataList, UseClass=_items_gdata__WEBPACK_IMPORTED_MODULE_0__["default"], tag=null, type=null ) {

		for( let i = dataList.length-1; i >= 0; i-- ) {

			var def = dataList[i];

			if ( def.reverse) dataList[i] = def = new _items_revStat__WEBPACK_IMPORTED_MODULE_7__["default"](def);
			else if ( def.zerosum ) dataList[i] = def = new _items_zerosum__WEBPACK_IMPORTED_MODULE_6__["default"](def);
			else dataList[i] = def = new UseClass( def );

			if ( tag ) def.addTag( tag );
			if ( type ) def.type = type;

			this.items[def.id] = def;

		}

		return dataList;

	},

	/**
	 *
	 * @param {*} stats - player stats from json.
	 * @param {Object} savePlayer - player data from previous save.
	 */
	initPlayer( stats, savePlayer=null ) {

		let vars = savePlayer || {};

		let res;
		for( let def of stats ) {

			res = vars[ def.id ] = def.zerosum === true ? new _items_zerosum__WEBPACK_IMPORTED_MODULE_6__["default"](def) :
				( def.stat === true ? new _items_statData__WEBPACK_IMPORTED_MODULE_8__["default"](def) :
				( def.reverse === true ? new _items_revStat__WEBPACK_IMPORTED_MODULE_7__["default"](def) : new _items_resource__WEBPACK_IMPORTED_MODULE_5__["default"]( def ) )
			);
			this.items[def.id] = res;

		}

		return new _chars_player__WEBPACK_IMPORTED_MODULE_1__["default"]( vars );

	},

	/**
	 * For an object variable path key, the key is expanded
	 * into subojects, each with a single property of the next
	 * part of the variable path.
	 * This is done to allow object props to represent variable paths
	 * without changing all the code to use Maps (with VarPath keys) and not Objects.
	 * @param {Object} obj - object containing the key to expand.
	 * @param {string} prop
	 */
	splitKeyPath( obj, prop ) {

		let val = obj[prop];

		delete obj[prop];

		let keys = prop.split('.');

		let max = keys.length-1;

		// stops before length-1 since last assign goes to val.
		for( let i = 0; i < max; i++ ) {

			var cur = obj[ keys[i] ];
			if ( cur === null || cur === undefined ) cur = {};
			else if ( typeof cur !== 'object') cur = { value:cur };

			obj = obj[ keys[i] ] = cur;

		}

		obj[ keys[max] ] = val;

	},

	/**
	 * Freeze all template data.
	 * Clones must be made for any new edits.
	 */
	freezeData( obj ) {

		let sub;
		for( let p in obj ){

			sub = obj[p];
			if ( typeof sub === 'object') this.freezeData(sub);
			else Object.freeze( sub );

		}

		return Object.freeze( obj );

	}

});

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: HALT_ACT, EVT_COMBAT, EVT_EVENT, EVT_UNLOCK, EXP_MAX, EVT_LOOT, ACT_DONE, ALLY_DIED, CHAR_DIED, ENTER_LOC, EXIT_LOC, ITEM_ATTACK, ACT_CHANGED, ACT_IMPROVED, ACT_BLOCKED, DAMAGE_MISS, ENEMY_HIT, PLAYER_HIT, DEFEATED, ENEMY_SLAIN, COMBAT_DONE, ENC_DONE, LEVEL_UP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HALT_ACT", function() { return HALT_ACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_COMBAT", function() { return EVT_COMBAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_EVENT", function() { return EVT_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_UNLOCK", function() { return EVT_UNLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXP_MAX", function() { return EXP_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_LOOT", function() { return EVT_LOOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACT_DONE", function() { return ACT_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLY_DIED", function() { return ALLY_DIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAR_DIED", function() { return CHAR_DIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER_LOC", function() { return ENTER_LOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXIT_LOC", function() { return EXIT_LOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_ATTACK", function() { return ITEM_ATTACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACT_CHANGED", function() { return ACT_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACT_IMPROVED", function() { return ACT_IMPROVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACT_BLOCKED", function() { return ACT_BLOCKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAMAGE_MISS", function() { return DAMAGE_MISS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENEMY_HIT", function() { return ENEMY_HIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_HIT", function() { return PLAYER_HIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFEATED", function() { return DEFEATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENEMY_SLAIN", function() { return ENEMY_SLAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMBAT_DONE", function() { return COMBAT_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENC_DONE", function() { return ENC_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_UP", function() { return LEVEL_UP; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/util */ "./src/util/util.js");



const events = new eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a();

const EVT_COMBAT = 'combat';
/**
 * Generic game event.
 */
const EVT_EVENT = 'event';
const EVT_UNLOCK = 'unlock';
const EVT_LOOT = 'loot';
const EVT_DISABLED = 'disabled';

const COMBAT_DONE = 'combat_done';
const ENEMY_SLAIN = 'slain';
/**
 * Any character died by damage.
 */
const CHAR_DIED = 'char_died';

const ALLY_DIED = 'ally_died';

/**
 * player defeated by some stat.
 */
const DEFEATED = 'defeated';

const DAMAGE_MISS = 'damage_miss';
const ENEMY_HIT = 'enemy_hit';
const PLAYER_HIT = 'player_hit';
const LEVEL_UP = 'levelup'

const ACT_CHANGED = 'actchanged';
const ACT_IMPROVED = 'actimprove';

/**
 * Dispatched by a Runnable when it has completed.
 * It is the job of the runnable to determine when it has completed.
 */
const ACT_DONE = 'act_done';

/**
 * Action should be stopped by runner.
 */
const HALT_ACT = 'halt_act';

/**
 * Action blocked or failed.
 */
const ACT_BLOCKED = 'act_blocked';

/**
 * Triggered when Action, Skill, or Dungeon reaches max experience.
 */
const EXP_MAX = 'exp_max';

/**
 * Item with attack used. Typically spell; could be something else.
 */
const ITEM_ATTACK = 'item_atk';

/**
 * Encounter done.
 */
const ENC_DONE = 'enc_done';
const ENTER_LOC = 'enter_loc';
const EXIT_LOC = 'exit_loc';



/* harmony default export */ __webpack_exports__["default"] = ({

	log:null,

	started:false,

	init( game ) {

		this.log = game.log;
		this.game = game;

		this.clearGameEvents();

		events.addListener( EVT_LOOT, this.onLoot, this );
		events.addListener( EVT_UNLOCK, this.onUnlock, this );
		events.addListener( EVT_EVENT, this.onEvent, this );
		events.addListener( LEVEL_UP, this.onLevel, this );

		events.addListener( ACT_IMPROVED, this.actImproved, this );

		events.addListener( EVT_COMBAT, this.onCombat, this );
		events.addListener( ENEMY_SLAIN, this.enemySlain, this );
		events.addListener( DEFEATED, this.onDefeat, this );
		events.addListener( DAMAGE_MISS, this.onMiss, this );

	},

	clearGameEvents() {

		this.started = false;

		events.removeAllListeners( EVT_COMBAT );
		events.removeAllListeners( EVT_LOOT );
		events.removeAllListeners( EVT_UNLOCK );
		events.removeAllListeners( EVT_EVENT );
		events.removeAllListeners( LEVEL_UP );
		events.removeAllListeners( EXP_MAX );

		events.removeAllListeners( ACT_DONE );
		events.removeAllListeners( ACT_CHANGED );
		events.removeAllListeners( ACT_IMPROVED );
		events.removeAllListeners( ACT_BLOCKED );
		events.removeAllListeners( HALT_ACT);

		events.removeAllListeners( EVT_COMBAT );
		events.removeAllListeners( CHAR_DIED );
		events.removeAllListeners( ENEMY_SLAIN );
		events.removeAllListeners( DEFEATED );

		events.removeAllListeners( DAMAGE_MISS );

		events.removeAllListeners( ENTER_LOC );
		events.removeAllListeners( EXIT_LOC );
		events.removeAllListeners( ENC_DONE );
		events.removeAllListeners( ITEM_ATTACK );

		events.removeAllListeners( PLAYER_HIT );
		events.removeAllListeners( ENEMY_HIT );
		events.removeAllListeners( ALLY_DIED );

	},

	/**
	 * Event item event.
	 * @param {Item} it
	 */
	onEvent( it ) {
		if ( it.hidden) return;
		this.log.log( it.name, it.desc, EVT_EVENT );
	},

	onUnlock( it ) {
		if ( it.hidden) return;
		this.log.log( Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["uppercase"])(it.type) + ' Unlocked: ' + it.name, null, EVT_UNLOCK );
	},

	onLoot( loot ) {
	},

	actionDone(it){
	},

	actImproved(it) {
		this.log.log( it.name + ' Improved', null, EVT_UNLOCK );
	},

	onLevel( player ) {
		this.log.log( player.name + ' Level Up!', null, EVT_EVENT );
	},

	onDefeat( locale ) {

		this.log.log( 'Retreat', '', EVT_COMBAT );

	},

	onMiss( msg ) {

		this.log.log( '', msg, EVT_COMBAT );
	},

	onCombat( title, msg) {
		this.log.log( title, msg, EVT_COMBAT );
	},

	enemySlain( enemy, attacker ) {
		this.log.log( '', enemy.name + ' slain' + ( attacker ? ' by ' + attacker.name : ''), EVT_COMBAT );
	},

	/**
	 * Dispatch only if game running.
	 * @param  {...any} params
	 */
	gfire( ...params ) {
		if ( this.started ) events.emit.apply( events, params );
	},

	/**
	 *
	 * @param {string} evt
	 */
	add( evt, listener, context ) {
		events.addListener(evt, listener, context );
	},

	/**
	 * @alias add() for Vue switch-out.
	 * @param {*} evt
	 * @param {*} f
	 * @param {*} context
	 */
	listen(evt, f, context) {
		events.addListener(evt,f,context);
	},

	/**
	 *
	 * @param  {...any} params
	 */
	dispatch( ...params ) {
		events.emit.apply( events, params );
	}


});

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: TICK_TIME, EVT_TIME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICK_TIME", function() { return TICK_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_TIME", function() { return EVT_TIME; });
/* harmony import */ var _dataLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataLoader */ "./src/dataLoader.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/util */ "./src/util/util.js");
/* harmony import */ var _items_gdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/gdata */ "./src/items/gdata.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.js */ "./src/log.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameState */ "./src/gameState.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./values/range */ "./src/values/range.js");
/* harmony import */ var _itemgen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./itemgen */ "./src/itemgen.js");
/* harmony import */ var _techTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./techTree */ "./src/techTree.js");
/* harmony import */ var _chars_dot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chars/dot */ "./src/chars/dot.js");
/* harmony import */ var _modules_randoms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/randoms */ "./src/modules/randoms.js");
/* harmony import */ var _modules_runner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/runner */ "./src/modules/runner.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _items_resource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./items/resource */ "./src/items/resource.js");
/* harmony import */ var _items_skill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./items/skill */ "./src/items/skill.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./values/stat */ "./src/values/stat.js");










/**
 * @module Randoms - randomized events.
 */


/**
 * @property {Runner} Runner - runs actions in tandem.
 */


/**
 * @note these refer to Code-events, not in-game events.
 */





var techTree;

/**
 * @constant {number} TICK_TIME - time in milliseconds between updates.
 */
const TICK_TIME = 200;

/**
 * @constant {number} EVT_TIME - time for checking randomized events.
 */
const EVT_TIME = 1000;

/* harmony default export */ __webpack_exports__["default"] = ({

	toJSON() { return JSON.stringify( this.state ); },

	/**
	 * @property {GameState} gameData
	 */
	state:null,

	/**
	 * @property {Object.<string,Item>} items
	 */
	get items() { return this._items; },

	/**
	 * @property {boolean} loaded - true when data is ready and game ready to play.
	 */
	loaded:false,

	/**
	 * @property {Log} log
	 */
	log:new _log_js__WEBPACK_IMPORTED_MODULE_3__["default"](),

	timers:[],

	/**
	 *
	 * @param {*} obj
	 * @param {(number)=>boolean} obj.tick -tick function.
	 */
	addTimer( obj ){
		console.log('adding timer: ' + obj.id );
		this.timers.push(obj);
	},

	/**
	 * Clear game data.
	 */
	reset() {

		this.loaded = false;
		this.state = null;
		this._items = null;
		this.timers = [];


		return this.load();

	},

	load( saveData=null ) {

		this.loaded = false;

		this.log.clear();

		_events__WEBPACK_IMPORTED_MODULE_11__["default"].started = false;
		// Code events. Not game events.
		_events__WEBPACK_IMPORTED_MODULE_11__["default"].init(this);

		return this.loader = _dataLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadGame( saveData ).then( allData=>{

			this.state = new _gameState__WEBPACK_IMPORTED_MODULE_4__["default"]( allData, saveData );
			this.itemGen = new _itemgen__WEBPACK_IMPORTED_MODULE_6__["default"]( this.state );

			this._items = this.state.items;

			this.recheckTiers();
			this.restoreMods();

			techTree = new _techTree__WEBPACK_IMPORTED_MODULE_7__["default"]( this._items );
			for( let p in this._items ) {
				if ( !this._items[p].locked ) techTree.changed(p);
			}

			this.initTimers();

			this.loaded = true;
			_events__WEBPACK_IMPORTED_MODULE_11__["default"].started = true;

			_events__WEBPACK_IMPORTED_MODULE_11__["default"].add( _events__WEBPACK_IMPORTED_MODULE_11__["ENTER_LOC"], this.enterLoc, this );
			_events__WEBPACK_IMPORTED_MODULE_11__["default"].add( _events__WEBPACK_IMPORTED_MODULE_11__["EXIT_LOC"], this.enterLoc, this );

		}, err=>{ console.error('game err: ' + err )});

	},

	save() {
	},

	recheckTiers() {

		let n = 0;
		while ( ++n <= 5 ) {

			var list = this.state.getTagList('t_tier'+n);
			var evt = this.state.getData('tier'+n);

			var hasEvent = false;

			for( var i = list.length-1; i>= 0; i-- ) {

				if ( list[i].value > 0) {
					this.doEvent( evt );
					hasEvent = true;
					break;
				}

			}
			// none of this tier.
			if ( !hasEvent ) evt.value = 0;

		}

	},

	/**
	 * Reapply mods for all owned items.
	 */
	restoreMods() {

		let items = this.state.items;

		for( let p in items ) {

			var it = items[p];
			if ( !it.locked && it.value >0 && !it.disabled ) {

				if ( it.mod ) this.addMod( it.mod, it.value );
				if ( it.lock ) this.lock( it.lock, it.count );

			}

		}
		for( let e of this.state.equip ) {
			if ( e.mod ) this.addMod( e.mod, 1 );
		}

	},

	/**
	 * Any item with a timer>0 should be added to timers.
	 */
	initTimers() {

		let acts = this.state.actions;
		for( let i = acts.length-1; i>= 0; i-- ) {
			if ( acts[i].timer > 0) this.addTimer( acts[i]);
		}

	},

	enterLoc( locale, enter ) {

		let control = locale.type === 'dungeon' ? this.state.raid : this.state.explore;
		if ( enter ) {

			control.enter( locale );
			this.setAction( control );

		} else {

			control.locale = null;
			this.haltAction( control );

		}

	},

	pause() {
	},

	unpause() {
	},

	/**
	 * Frame update.
	 */
	update() {

		//console.log('tests: ' + unlockTests );
		//unlockTests = 0;

		let time = Date.now();
		let dt = Math.min( ( time - this.lastUpdate )/1000, 1 );
		this.lastUpdate = time;

		this.state.player.update(dt);
		this.state.minions.update(dt);

		_modules_runner__WEBPACK_IMPORTED_MODULE_10__["default"].update(dt);

		this.doResources(dt, this.state.resources);
		this.doResources( dt, this.state.playerStats );

		if ( this.timers ) {

			for( let i = this.timers.length-1; i>= 0; i-- ) {
				if ( this.timers[i].tick(dt) ) Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["quickSplice"])( this.timers, i );
			}

		}

		for( let p in this._items ) {

			var it = this._items[p];
			if ( it.dirty === true ) {

				it.dirty = false;
				techTree.changed(p);
			}

		}

	},

	/**
	 * Frame update of all resources.
	 * @param {number} dt - elapsed time.
	 */
	doResources( dt, stats ) {

		let len = stats.length, stat;
		for( let i = len-1; i >= 0; i-- ) {

			stat = stats[i];
			if ( stat.locked === false ) {

				if  ( stat.rate.value !== 0 ) {
					this.doItem( stat, stat.rate.value*dt );
				}

			}

		}

	},

	/**
	 * Toggles an action on or off.
	 * @param {GData} a
	 */
	toggleAction(a) { _modules_runner__WEBPACK_IMPORTED_MODULE_10__["default"].toggleAct(a); },

	/**
	 * Wrapper for Runner rest
	 */
	doRest() { _modules_runner__WEBPACK_IMPORTED_MODULE_10__["default"].tryAdd( this.state.restAction ) },

	haltAction(a) { _modules_runner__WEBPACK_IMPORTED_MODULE_10__["default"].stopAction(a);},

	setAction( a ) { _modules_runner__WEBPACK_IMPORTED_MODULE_10__["default"].setAction(a); },

	/**
	 * Tests if an action has effectively filled a resource.
	 * @param {string|string[]} v - data or datas to fill.
	 * @param {GData} a - action doing the filling.
	 * @param {string} - name of relavant filling effect ( for tag-item fills)
	 */
	filled( v, a, tag ) {

		if ( Array.isArray(v) ) {
			for( let i = v.length-1; i>=0; i-- ) {
				if ( !this.filled( v[i], a, tag ) ) return false;
			}
			return true;
		}

		let fill = this.getData(v);
		if (fill === undefined ) {

			fill = this.state.getTagList( v );
			return fill === undefined ? true : this.filled(fill, a, v );

		}

		if ( !fill.rate || !a.effect || fill.rate.value >= 0 ) return fill.maxed();

		// actual filling rate.
		tag = a.effect[ tag || v ];

		return ( !tag || fill.filled(tag ) );

	},

	/**
	 * Completely disable an item - cannot be purchased/used/etc.
	 * @param {string|GData|Array} it
	 */
	disable( it ) {

		if ( Array.isArray(it) ) for( let v of it ) this.disable(v);
		else {

			if ( typeof it === 'string' ) {

				let item = this.getData( it );
				if ( !item ) {

					let list = this.state.getTagList(it);
					if ( list ) for( let v of list ) this.disable(v);
					return;

				} else it = item;

			}

			if ( it ) {

				it.disabled = true;

				console.log( 'DISABLE: ' + it.id );

				if ( it.slot && this.state.getSlot(it.slot, it.type) === it ) {
					this.state.setSlot(it.slot, null );
				}

				if ( it.running ) this.doRest();
				if ( it == this.state.raid.dungeon ) this.state.raid.setDungeon(null);

				if ( it instanceof _items_resource__WEBPACK_IMPORTED_MODULE_12__["default"] || it instanceof _items_skill__WEBPACK_IMPORTED_MODULE_13__["default"] ) {
					this.remove( it, it.value);

				} else if ( it.mod ) this.removeMod( it.mod, it.value );

			}

		}
	},

	sellPrice( it ) {

		let sellObj = it.sell || it.cost || (5*it.level) || 5;

		if ( typeof sellObj === 'object' ) {
			sellObj = sellObj.gold || it.level || 1;
		}
		return Math.ceil( sellObj*this.state.sellRate );


	},

	/**
	 * Attempt to sell one unit of an item.
	 * @param {GData} it
	 * @returns {boolean}
	 */
	trySell( it, inv, count=1 ) {

		if ( it.value < 1 && !it.instance ) {
			return false; }

		if ( count > it.value ) count = it.value;

		console.log('sell count: ' + count );
		let sellObj = it.sell || it.cost;
		let goldPrice = count*this.sellPrice(it);

		if ( sellObj && typeof sellObj === 'object' ) {
			if ( sellObj.space ) this.getData('space').value += count*sellObj.space;
		}
		this.getData('gold').value += goldPrice;

		if ( it.slot && this.state.getSlot(it.slot) === it ) this.state.setSlot(it.slot,null);

		it.value -= count;
		if ( inv && it.instance ) {

			console.log('remainig: ' + it.value );
			if ( !it.stack || it.value <= 0 ) inv.remove( it );

		} else {

			if ( it.mod ) this.removeMod( it.mod, count );

		}

		return true;

	},

	/**
	 * Remove all quantity of an item.
	 * @param {string|string[]|GData|GData[]} it
	 */
	removeAll( it ){

		if ( it instanceof Object ) {

			this.remove( it, it.value );

		} else if ( Array.isArray(it)) {
			it.forEach( this.removeAll, this );

		} else {

			let item = this.getData( it );
			if ( item ) this.remove( it, it.value );
			else {

				item = this.state.getTagList( it );
				if ( item ) item.forEach( this.removeAll, this );

			}

		}

	},

	/**
	 * Attempt to pay the cost to permanently buy an item.
	 * @param {GData} it
	 * @returns {boolean}
	 */
	tryBuy(it) {

		if ( this.canPay(it.buy) === false ) return false;
		this.payCost( it.buy );

		if ( it.isProto ) this.create( it );

		it.owned = true;

	},

	/**
	 * Attempt to pay for an item, and if the cost is met, apply it.
	 * @param {GData} it
	 * @returns {boolean} - true if item is used. note that 'buying' an item
	 * does not actually use it, and returns false.
	 */
	tryItem(it) {

		if ( it.type ==='dungeon') return this.startRaid(it);

		if ( !this.canUse(it) ) return false;

		if ( it.buy && !it.owned ) {

			this.payCost( it.buy );
			it.owned = true;
			return false;

		} else {

			if ( it.isProto ) {

				this.craft(it );

			} else if ( it.perpetual || it.length > 0 ) {

				this.setAction(it);

			} else {

				if ( it.slot && this.state.getSlot( it.slot, it.type) === it ) return;

				this.payCost( it.cost );
				return this.doItem(it);
			}

		}

	},

	/**
	 * Craft an item by paying its cost, then instantiating it.
	 * Note that a crafted item does not use any of its effects or abilities.
	 * @param {*} it
	 */
	craft( it ) {

		if ( !this.canPay( it.cost ) ) return false;
		this.payCost( it.cost );

		this.create( it );

	},

	/**
	 * Create instance from data.
	 * @param {string|Object} data
	 */
	instance( data ) {

		if ( typeof data === 'string') data = this.state.getData(data);

		return this.itemGen.instance(data);

	},

	/**
	 * Create an item whose cost has been met ( or been provided by an effect )
	 * @param {*} it
	 * @param {boolean} active - whether the created item can be activated.
	 */
	create( it, active=false ) {

		/**
		 * create monster and add to inventory.
		 * @todo this is hacky.
		*/
		if ( it.type === 'monster' ) {

			let m = this.itemGen.npc(it);
			m.active = active;
			this.state.minions.add( m );

		} else {

			let inst = it.stack ? this.state.inventory.find( it.id, true ) : null;
			if ( inst ) {

				console.log('stack exists: ' + inst.value);
				inst.value++;

			} else {

				inst = this.itemGen.instance( it );
				if ( inst ) inst.value = 1;
				this.state.inventory.add( inst );

			}

		}


	},

	/**
	 * Use item from inventory.
	 * @param {*} it
	 */
	use( it, targ, inv=null ) {

		if ( it.consume === true ) {
			it.value--;
			if ( it.value <= 0 ) ( inv || this.state.inventory ).remove(it);
		}
		if ( it.use ) {
			if ( it.use.dot ) this.state.player.addDot( new _chars_dot__WEBPACK_IMPORTED_MODULE_8__["default"]( it.use.dot, it.id, it.name) );
			this.applyEffect( it.use );
		}

	},

	/**
	 *
	 * @param {GData} it
	 * @param {GData} targ - enchant target.
	 */
	tryUseWith( it, targ ) {

		if ( targ === null || targ === undefined ) return;

		if ( it.buy && !it.owned ) {

			this.payCost( it.buy );
			it.owned = true;

		} else {

			if ( !it.length ) {

				this.payCost( it.cost );
				this.useWith( it, targ );

			} else {

				// runner will handle costs.
				_modules_runner__WEBPACK_IMPORTED_MODULE_10__["default"].useWith( it, targ );

			}
		}

	},

	/**
	 * Use an item in conjunction with another item.
	 * Item is used immediately. No running or costs necessary.
	 * The item effects/modifiers are applied to the target.
	 * @param {GData} it
	 * @param {GData} targ - use target.
	 */
	useWith( it, targ ) {

		if ( targ === null || targ === undefined ) return;

		if ( typeof it.usingWith === 'function') it.usingWith( targ );
		it.value++;

		console.log('USING: ' + it.id  + ' with ' + targ.id );

		if ( it.mod ) targ.applyMods( it.mod, 1 );
		if ( it.effect ) targ.applyVars( it.effect, 1 );

	},


	fillItem( id ) {

		let it = this.getData(id);
		if ( !it || !it.max ) return;

		let del = it.max.value - it.value;
		if ( del > 0) this.doItem( it, it.max.value - it.value );

	},

	/**
	 * Get a game item without paying cost.
	 * @param {GData} it
	 * @param {number} count
	 */
	doItem( it, count=1 ) {

		count = it.topoff(count);
		if ( count === 0 ) {
			return;
		}
		//it.value += it.consume ? -count : count;

		if ( it.isProto ) {
			console.log('CREATING ISPROTO: ' + it.id );
			return this.create(it, true );
		}

		if ( it.slot) {

			let cur = this.state.getSlot(it.slot, it.type );
			console.log('cur slot: ' + (cur ? cur.id : 'none'));
			if ( cur ) {
				this.remove( cur, 1 );
			}
			this.state.setSlot(it.slot, it);

		}
		if ( it.exec ) it.exec();

		if ( it.title ) this.state.player.title = it.title;
		if ( it.effect ) this.applyEffect(it.effect);
		if ( it.mod ) this.addMod( it.mod, count );
		if ( it.lock ) this.lock( it.lock );
		if ( it.dot ) this.state.player.addDot( new _chars_dot__WEBPACK_IMPORTED_MODULE_8__["default"](it.dot, it.id, it.name) );
		if ( it.disable ) this.disable( it.disable );

		if ( it.log ) _events__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_11__["EVT_EVENT"], it.log );

		if ( it.attack ) {
			if (it.type !== 'wearable' && it.type !== 'weapon') _events__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_11__["ITEM_ATTACK"], it );
		}

		it.dirty = true;
		return true;

	},

	/**
	 *
	 * @param {Object} evt
	 */
	unlockEvent( evt ) {

		// randomized event.
		if ( evt.rand ) {

		} else this.doEvent(evt);

	},

	/**
	 * Trigger an event. (Randomized events are also triggered.)
	 * @param {*} evt
	 */
	doEvent(evt){
		if ( !this.doItem(evt) ) {
			console.log('EVENT MAXED: ' +  evt.id );
			return false;
		}
		console.log('triggering tier: ' + evt.id );
		evt.locked = false;
		_events__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_11__["EVT_EVENT"], evt );
	},

	doLog( logItem ) {
		_events__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_11__["EVT_EVENT"], logItem );
	},

	/**
	 * Remove some amount of an item.
	 * @property {string} id - item id or tag.
	 */
	remove( id, amt=1 ){

		let it = typeof id === 'string' ? this.getData(id) : id;

		if ( !it ) {

			it = this.state.getTagList(id);
			it = it ? it.find( v=>!v.disabled&& v.value>=amt ) : null;
			if ( !it ) return;

		}

		if ( it.slot ) {
			if ( this.state.getSlot(it.slot) === it ) this.state.setSlot(it.slot, null);
		}

		if ( it.cost && it.cost.space ) this.getData('space').value += amt*it.cost.space;

		it.value -= amt;
		if ( it.mod ) this.removeMod( it.mod, amt );
		if ( it.lock ) this.unlock( it.lock, amt );

		it.dirty = true;

	},

	/**
	 * Attempt to unlock an item.
	 * @param {GData} it
	 * @returns {boolean} true on success.
	 */
	tryUnlock( it ) {

		//unlockTests++;

		if ( it.disabled || it.locks > 0 ) return false;

		let test = it.require || it.need;
		if ( test && !this.unlockTest(test, it ) ) return false;

		if ( it.type === 'event') this.unlockEvent( it );
		else {
			it.locked = false;
			it.dirty = true;
			_events__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_11__["EVT_UNLOCK"], it );
		}

		return true;

	},

	/**
	 * Called when an item's modifier to other items changes.
	 * The item must be subtracted and re-added to ensure mods are correct.
	 * @param {GData} item
	 */
	modChanged( it ) {

		let val = it.value;
		if ( it.mod ) this.removeMod( it.mod, val );
		if ( it.lock ) this.unlock( it.lock );

	},

	/**
	 * Return the results of a testing object.
	 * @param {string|function|Object|Array} test - test object.
	 * @param {?GData} [item=null] - item being used/unlocked.
	 * @returns {boolean}
	 */
	unlockTest( test, item=null ) {

		//console.log('trying unlock: ' + item.id );
		let type = typeof test;
		if ( type === 'function') return test( this._items, item, this.state );

		else if ( type === 'string') {

			// test that another item is unlocked.
			let it = this.getData(test);
			if ( it === undefined || it === null ) {

				// tag test - if any item with the tag is unlocked, test passes.
				it = this.state.getTagList(test);

				//if ( !it ) console.warn('undefined: ' + test );
				//console.log('testing tag list: ' + test );
				//it.forEach( v=>console.log(v.id));

				return it ? it.some( this.unlockTest, this ) : false;

			}

			// don't need to actually use an action or resource to mark it unlocked.
			return ( it.type === 'resource' || it.type === 'action') ?
				(it.locked === false) : it.value > 0;

		} else if (  Array.isArray(test) ) return test.every( v=>this.unlockTest(v,item), this );
		else if ( test.type != null ) {

			return ( test.type === 'resource' || test.type === 'action') ? !test.locked : test.value > 0;

		} //else console.warn( 'unknown test: ' + test.id || test );

	},

	/**
	 * Perform the one-time effect of an action, resource, or upgrade.
	 * @param {GData} effect
	 * @param {number} dt - time elapsed.
	 */
	applyEffect( effect, dt=1 ) {

		if ( typeof effect === 'object' ) {

			if (  Array.isArray(effect) ) {
				for( let e of effect ) { this.applyEffect( e,dt); }
				return;
			}

			let target, e;
			for( let p in effect ){

				target = this.getData(p);
				e = effect[p];

				if ( target === undefined || target === null ) {

					if ( p === 'title') this.state.player.addTitle( e );
					else if ( p === 'log') _events__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_11__["EVT_EVENT"], e );
					else this.applyToTag( p, e, dt );

				} else {

					if ( target.type === 'event' ) this.unlockEvent( target );
					else if ( typeof e === 'number' ) this.doItem( target, e*dt );
					else if ( e instanceof _values_range__WEBPACK_IMPORTED_MODULE_5__["default"] ) {

						this.doItem( target, e.value*dt );
					} else if ( typeof e === 'boolean') {

						target.locked = !e;
						this.doItem( target );

					} else target.applyVars(e,dt);

					target.dirty = true;
				}
			}

		} else if ( typeof effect === 'string') {

			let target = this.getData(effect);
			if ( target !== undefined ) {

				if ( target.type === 'event') this.unlockEvent( target );
				else this.doItem( target, dt );

			}

		}

	},

	/**
	 * Test if a mod can be applied without making value
	 * become negative.
	 * @param {Array|Object} mod
	 * @param {number} amt
	 */
	canMod( mod, amt ) {

		if ( Array.isArray(mod)  ) for( let m of mod ) if ( !this.canMod(m, amt) ) return false;
		else if ( typeof mod === 'object' ) {

			for( let p in mod ) {

				var target = this.getData( p );
				if ( target !== undefined ) return target.canApply( mod[p], amt );

			}

		}

	},

	/**
	 * Apply a mod.
	 * @param {Array|Object} mod
	 * @param {number} amt - amount added.
	 */
	addMod( mod, amt=1 ) {

		if ( Array.isArray(mod)  ) for( let m of mod ) this.addMod(m, amt);
		else if ( typeof mod === 'object' ) {

			for( let p in mod ) {

				var target = this.getData( p );

				if ( target === undefined ) this.modTag( p, mod[p], amt );
				else if ( mod[p] === true ) this.doItem( target, 1 );
				else {
					target.applyMods( mod[p], amt );
					target.dirty = true;
				}
			}

		} else if ( typeof mod === 'string') {

			let t = this.getData(mod);
			if ( t ) {
				this.doItem(t,amt);
			} else {
				t = this.getTagList(mod);
				if ( t ) {
					this.doItem(t,amt);
				}
			}

		}

	},

	/**
	 * Apply an effect or mod to all Items with given tag.
	 * @param {string} tag - item tag.
	 * @param {Object} mods - object mod.
	 * @param {number} dt - time or percent of mod to apply.
	 */
	modTag( tag, mods, dt ) {

		let target = this.state.getTagList(tag);
		if ( target ) {
			for( let i = target.length-1; i>=0; i--) {
				target[i].applyMods( mods, dt);
				target[i].dirty = true;
			}
		}

	},

	/**
	 * Apply an effect or mod to all Items with given tag.
	 * @param {string} tag - item tag.
	 * @param {Object} obj - object mod.
	 * @param {number} dt - time or percent of mod to apply.
	 */
	applyToTag( tag, obj, dt ) {

		let target = this.state.getTagList(tag);
		if ( target ) {
			for( let i = target.length-1; i>=0; i--) {
				target[i].applyVars( obj, dt);
				target[i].dirty = true;
			}
		}

	},

	/**
	 *
	 * @param {Object} mod
	 * @param {number} amt
	 */
	removeMod( mod, amt=1 ) {
		this.addMod( mod, -amt);
	},

	/**
	 *
	 * @param {*} it
	 */
	canBuy(it) {

		if ( it.disabled || it.locked || it.locks > 0 ) return false;

		if ( it.buy && !this.canPay(it.buy) ) return false;

		return !it.maxed();

	},

	/**
	 * Determines whether an item can be run as a continuous action.
	 * @returns {boolean}
	 */
	canRun( it ) {

		if ( it.disabled || it.maxed() || (it.need && !this.unlockTest( it.need, it )) ) return false;

		if ( it.buy && !it.owned && !this.canPay(it.buy) ) return false;

		// cost only paid at _start_ of runnable action.
		if ( it.cost && (it.exp === 0) && !this.canPay(it.cost) ) return false;

		if ( it.fill ) {

			let t = this.getData(it.fill);
			if ( t && t.maxed() ) return false;

		}
		return !it.run || this.canPay( it.run, TICK_TIME/1000 );

	},

	/**
	 * Determine if a one-use item can be used. Ongoing/perpetual actions
	 * test with 'canRun' instead.
	 * @param {GData} it
	 */
	canUse( it ){

		if ( it.disabled || (it.need && !this.unlockTest( it.need, it )) ) return false;
		if ( it.buy && !it.owned && !this.canPay(it.buy) ) return false;

		if ( it.perpetual || it.length>0 ) { return this.canRun(it); }

		if ( it.slot && this.state.getSlot(it.slot, it.type ) === it) return false;
		if ( it.maxed() ) return false;

		if ( it.cd && it.timer > 0 ) return false;

		if ( it.fill ) {

			let t = this.getData(it.fill);
			if ( t && t.maxed() ) return false;

		}

		return !it.cost || this.canPay(it.cost);
	},

	/**
	 * Attempts to pay the cost to perform an action, buy an upgrade, etc.
	 * Before calling this function, ensure cost can be met with canPay()
	 *
	 * @param {Array|Object} cost
	 */
	payCost( cost, unit=1) {

		if ( cost === undefined || cost === null ) return;
		if ( Array.isArray(cost)  ) return cost.forEach( v=>this.payCost(v,unit), this );

		let res;
		if ( typeof cost === 'object' ){

			if ( cost instanceof _values_stat__WEBPACK_IMPORTED_MODULE_14__["default"] ) {
				var g = this.getData('gold');
				g.value -= cost.value*unit;
				g.dirty = true;
			}

			for( let p in cost ) {

				res = cost[p];

				res = this.getData(p);
				if ( res ) {

					if ( !isNaN(cost[p]) ) this.remove( res, cost[p]*unit );
					else res.applyVars( cost[p], -unit );
					res.dirty = true;

				}

			}

		} else if ( typeof cost === 'boolean') return;
	 	else if ( !isNaN(cost ) ) {

			res = this.getData('gold');
			res.value -= cost*unit;
			res.dirty = true;

		}

	},

	/**
	 * Determine if an object cost can be paid before the pay attempt
	 * is actually made.
	 * @param {Array|Object} cost
	 * @returns {boolean} true if cost can be paid.
	 */
	canPay( cost, unit=1 ) {

		if (Array.isArray(cost) ) return cost.every( v=>this.canPay(v,unit), this );

		let res;

		if ( typeof cost === 'object' ){

			if ( cost instanceof _values_stat__WEBPACK_IMPORTED_MODULE_14__["default"] ) { return this.getData('gold').value >= cost.value*unit; }

			for( let p in cost ) {

				res = this.getData(p);
				if ( res === undefined || res.value < cost[p]*unit ) return false;

				// @todo: recursive mod test.
				/*let mod = res.mod;
				if ( mod ) {

				}*/

			}


		} else if ( typeof cost === 'boolean') return true;
		else if (!isNaN(cost) ) {

			res = this.getData('gold');
			if ( !res) console.error('Error: Gold is missing');
			return res.value >= cost*unit;

		}

		return true;
	},

	/**
	 * Test if equip is possible. ( Must have space in inventory
	 * for any items replaced. )
	 * @param {*} it
	 */
	canEquip(it) {

		// if inventory contains item, +1 free spaces.
		let adjust = this.state.inventory.includes(it) ? 1 : 0;
		return this.state.equip.replaceCount(it ) <= this.state.inventory.freeSpace() + adjust;

	},

	/**
	 *
	 * @param {*} it
	 * @param {?Inventory} inv - source inventory of item.
	 */
	equip( it, inv=null ) {

		if ( !this.canEquip(it) ) return false;

		console.log('equip:' + it.id  + ' it.type: ' + it.type + ' it.kind: ' + it.kind );
		let res = this.state.equip.equip( it );
		if ( !res) return;

		(inv || this.state.inventory).remove(it);

		if ( typeof res === 'object') {

			if ( Array.isArray(res) ) res.forEach(v=>{

					if ( typeof v === 'boolean') return;
					v.unequip(this.state.player);
					if ( v.mod ) this.removeMod( v.mod );

				});
			else {
				res.unequip( this.state.player );
				if ( res.mod ) this.removeMod( res.mod );
			}
			this.state.inventory.add(res);

		}
		if ( it.mod) this.addMod(it.mod);
		//this.doItem(it);
		it.equip( this.state.player );


	},

	unequip( slot, it){

		if ( this.state.inventory.full() ) return false;

		let res = this.state.equip.remove( it, slot );
		if ( res ) {

			console.log('to inv-> ' + res.id );
			this.state.inventory.add(res);

			if (  Array.isArray(res) ) res.forEach(v=>{
				v.unequip(this.state.player);
				if ( v.mod ) this.removeMod( v.mod );
				//this.remove(v);
			});
			else {
				res.unequip(this.state.player);
				if ( res.mod ) this.removeMod( res.mod );
				//this.remove(res);
			}

		} else console.log('no reuslt');

	},

	/**
	 * Remove an item from inventory.
	 * @param {*} it
	 */
	drop(it) {
		this.state.inventory.remove(it);
	},

	/**
	 * Add an item to player's inventory.
	 * @param {*} it
	 */
	take( it ) {
		//console.log('adding: ' + it.id );
		return this.state.inventory.add(it);
	},

	/**
	 * Get loot from an action, monster, or dungeon.
	 * @param {string|Wearable|Object|Array} it
	 * @param {?Inventory} inv - inventory to place looted item.
	 */
	getLoot(it, inv=null) {

		inv = inv || this.state.inventory;

		/** @todo this won't work right */
		if ( typeof it === 'object' && it.stack ) {

			let inst = inv.find( it.id, true );
			if ( inst ) {
				inst.value++;
				return;
			}

		}

		let res = this.itemGen.getLoot(it);
		if ( res === null || res === undefined ) return;
		inv.add( res );

	},

	/**
	 * Decrement lock count on an Item or array of items, etc.
	 * @param {string|string[]|GData|GData[]} id
	 */
	unlock( id ) { this.lock(id, -1); },

	/**
	 * Increment lock counter on item or items.
	 * @param {string|string[]|GData|GData[]} id
	 */
	lock(id, amt=1) {

		if (  Array.isArray(id)) {
			id.forEach( v=>this.lock(v,amt), this );
		} else if ( typeof id === 'object' ) {

			id.locks += amt;
			id.dirty =true;

		} else {

			let it = this.getData(id);
			if ( it ) {

				it.locks += amt;
				console.log( it.id + ' adding locks: ' + it.locks );
				it.dirty = true;

			} else {

				it = this.state.getTagList(id);
				if ( it ) it.forEach(v=>this.lock(v,amt), this );

			}

		}

	},

	/**
	 *
	 * @param {(it)=>boolean} pred
	 */
	filterItems( pred ) {
		let a = [];
		let items = this._items;
		for( let p in items ) {
			if ( pred( items[p] ) ) a.push( items[p] );
		}
		return a;
	},

	/**
	 *
	 * @param {string} id
	 * @returns {GData|undefined}
	 */
	getData(id) { return this._items[id] || this.state[id]; },

});

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameState; });
/* harmony import */ var _chars_inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chars/inventory */ "./src/chars/inventory.js");
/* harmony import */ var _composites_raid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composites/raid */ "./src/composites/raid.js");
/* harmony import */ var _items_gdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/gdata */ "./src/items/gdata.js");
/* harmony import */ var _chars_equip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chars/equip */ "./src/chars/equip.js");
/* harmony import */ var _composites_runnable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./composites/runnable */ "./src/composites/runnable.js");
/* harmony import */ var _chars_minions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chars/minions */ "./src/chars/minions.js");
/* harmony import */ var _modules_runner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/runner */ "./src/modules/runner.js");
/* harmony import */ var _composites_explore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./composites/explore */ "./src/composites/explore.js");







/**
 * @todo violation of principle.
 */



class GameState {

	toJSON(){

		let slotIds = {};
		for( let p in this.slots ) {
			if ( this.slots[p] ) slotIds[p] = this.slots[p].id;
			else slotIds[p] = null;
		}

		let data = {

			items:( this.items ),
			quickslots:this.quickslots.map(v=> v ? v.id : null ),
			slots:slotIds,
			equip:( this.equip ),
			raid:( this.raid ),
			drops:this.drops,
			explore:this.explore,
			sellRate:this.sellRate,
			restAction:this.restAction ? this.restAction.id : null,
			NEXT_ID:this.NEXT_ID

		};

		return data;

	}

	nextId() {
		return this.NEXT_ID++;
	}

	/**
	 *
	 * @param {Object} baseData - base game data.
	 */
	constructor( baseData, restore=false ){

		Object.assign( this, baseData );

		/**
		 * Next item id.
		 */
		this.NEXT_ID = this.NEXT_ID || 0;

		/**
		 * @property {Object.<string,Item>} slots - slots for items which can only have
		 * a single active at a given time.
		 */
		this.slots = this.slots || {
			'home':null,
			'mount':null,
			'bed':null
		}

		/**
		 * @property {string} restAction - default resting action.
		 */
		this.restAction = this.restAction || this.getData( 'rest' );

		this.quickslots = this.quickslots || [];

		this.initMaterials( this.materials );

		this.inventory = new _chars_inventory__WEBPACK_IMPORTED_MODULE_0__["default"]( this.items.inv || baseData.inventory || {max:3} );
		this.items.inv = this.inventory;

		this.drops = new _chars_inventory__WEBPACK_IMPORTED_MODULE_0__["default"]();

		/**
		 * @property {Minions} minions
		 */
		this.minions = this.items.minions = new _chars_minions__WEBPACK_IMPORTED_MODULE_5__["default"]( this.items.minions || null );

		this.equip = new _chars_equip__WEBPACK_IMPORTED_MODULE_3__["default"]( baseData.equip );

		/**
 		* @property {number} sellRate - percent of initial cost
 		* items sell for.
 		*/
		this.sellRate = this.sellRate || 0.5;

		this.raid = new _composites_raid__WEBPACK_IMPORTED_MODULE_1__["default"]( baseData.raid );
		this.explore = new _composites_explore__WEBPACK_IMPORTED_MODULE_7__["default"]( baseData.explore );

		this.revive();

		/** @todo: messy bug fix. */
		this.playerStats = this.player.getResources();

		/**
		 * @property {Object.<string,Item[]>} tagLists - tag to array of items with tag.
		 * makes upgrading/referencing by tag easier.
		*/
		this.tagLists = this.makeLists( this.items );

		let count = 0;
		for( let p in this.items ) {

			var it = this.items[p];
			count++;
			if ( !it.hasTag ) {
				console.warn( p + ' -> ' + this.items[p].id + ' Has no type. Removing.');
				delete this.items[p];
			} else if ( it.hasTag('home')) {

				it.need = this.homeTest;

			}

		}
		console.log('item count: ' + count );

	}

	/**
	 *
	 * @param {Object.<string,Items>} g - all game data.
	 * @param {GData} i - item being tested.
	 * @param {*} gs
	 */
	homeTest( g, i, gs ) {

		var cur = gs.slots.home;
		return g.space.used <=
			g.space.max.delValue( i.mod.space.max.bonus - ( cur ? cur.mod.space.max.bonus : 0) );

	}

	initMaterials( mats ) {

		let byId = {};
		for( let i = mats.length-1; i>=0; i-- ) {
			byId[ mats[i].id] = mats[i];
		}

		this.matsById = byId;

	}

	revive() {

		if ( typeof this.restAction === 'string') this.restAction = this.getData( this.restAction );

		for( let p in this.slots ) {
			if ( typeof this.slots[p] === 'string') this.slots[p] = this.getData(this.slots[p] );
		}

		if ( this.quickslots ) {
			this.quickslots = this.quickslots.map( v=>this.getData(v) );
		}

		this.equip.revive( this );
		this.inventory.revive( this );

		this.minions.revive(this);
		this.player.revive(this);

		this.drops.revive(this);
		this.raid.revive( this );
		this.explore.revive(this);

		_modules_runner__WEBPACK_IMPORTED_MODULE_6__["default"].revive(this);
		this.items.runner = _modules_runner__WEBPACK_IMPORTED_MODULE_6__["default"];

	}

	mergeItems( dest, src ) {

		let it;
		for( let p in src ) {

			it = dest[p];
			if ( !it ) {
				console.warn(`Attempt to revive undefined object: ${p}` );
				dest[p] = src[p]
			} else if ( it.hasOwnProperty('reviver' ) ) {

				it.reviver( dest, src[p] );

			} else Object.assign( dest[p], src[p] );

		}

	}

	/**
	 * Create lists of tagged items.
	 * @param {Object.<string,GData>} items
	 * @returns {Object.<string,GData[]>} lists
	 */
	makeLists( items ) {

		var lists = {};

		for( let p in items ) {

			var it = items[p];
			var tags = it.tags;
			if ( !tags ) continue;

			for( var t of tags ){

				//console.log('adding list: ' + t );
				var list = lists[t];
				if ( !list ) lists[t] = list = [];
				list.push( it );

			}

		}

		return lists;

	}

	/**
	 *
	 * @param {GData} it
	 * @param {number} slotNum
	 */
	setQuickSlot( it, slotNum ) {

		//console.log('use slot: ' + slotNum );
		// NOTE: using splice for Vue reactivity.
		if ( slotNum >= 0 && slotNum <=9 ) {

			let ind = slotNum > 0 ? slotNum - 1 : 9;
			if ( ind < this.quickslots.length ) this.quickslots.splice(ind,1, it );
			else {

				let a = this.quickslots.slice();
				a[ind] = it;
				this.quickslots = a;

			}

		}

	}

	/**
	 * Replace all ids in array with corresponding GData.
	 * @param {Array.<string|GData>} a
	 * @returns - the original array.
	 */
	toData(a) {

		for( let i = a.length-1; i >= 0; i-- ) {

			var s = a[i];
			if ( typeof s === 'string') a[i] = this.getData(s);

		}

		return a;
	}

	/**
	 * Get quickslot item for slot number.
	 * @param {number} slotNum
	 * @returns {?GData}
	 */
	getQuickSlot( slotNum ) {
		let ind = slotNum > 0 ? slotNum - 1 : 9;
		return this.quickslots[ind];
	}

	/**
	 *
	 * @param {string} tag
	 * @returns {GData[]|undefined}
	 */
	getTagList( tag ) {
		return this.tagLists[tag];
	}

	/**
	 * Get the amount of a specific item subtype
	 * required to buy.
	 * @param {string} type
	 * @returns {number}
	 */
	typeCost( cost, type ) {

		if ( !cost ) return 0;

		if ( !isNaN( cost) ) return type === 'gold' ? cost : 0;
		return ( cost.hasOwnProperty(type) ) ? cost[type] : 0;
	}

	/**
	 * Add to maximum value of resource.
	 * Used for implementing testing cheats.
	 * @param {string} id
	 * @param {number} amt
	 */
	addMax( id, amt=10) {

		console.log('adding max');
		let it = this.getData(id);
		if ( !it) return;

		it.max.base += amt;
	}

	/**
	 *
	 * @param {(it)=>boolean} pred
	 */
	filterItems( pred ) {
		let a = [];
		let items = this.items;
		for( let p in items ) {
			if ( pred( items[p] ) ) a.push( items[p] );
		}
		return a;
	}

	/**
	 * Return a list of items containing given tags.
	 * @param {string[]} tags
	 * @returns {GData[]}
	 */
	filterByTag( tags ) {

		let a = [];
		for( let p in this.items ) {
			if ( this.items[p].hasTags(tags) ) a.push(this.items[p]);
		}
		return a;

	}

	/**
	 * Assign all items passing the predicate test the given tag.
	 * @param {Predicate} test
	 * @param {string} tag
	 */
	tagItems( test, tag ) {
		let items = this.items;
		for( let p in items ) {
			if ( test( items[p] ) ) items[p].addTag(tag);
		}
	}

	/**
	 * Get an item on an item-id varpath.
	 * @param {VarPath} v
	 */
	/*getPathItem(v){
		return v.readVar( this._items );
	}*/

	/**
	 * Get item in named slot.
	 * @param {string} id - slot id.
	 * @param {string} type - item type for determining subslot (equip,home,etc)
	 */
	getSlot( id, type) {
		if ( type === 'wearable' || type === 'armor' || type ==='weapon' ) return null;
		return this.slots[id];
	}

	/**
	 * Set slotted item for exclusive items.
	 * @param {string} id
	 * @param {?GData} v - item to place in slot, or null.
	 */
	setSlot(id,v) {
		if ( v && (v.type === 'wearable') ) return;
		this.slots[id] = v;
	}

	/**
	 * Find item in base items, equip, or inventory.
	 * @param {string} id
	 */
	findData(id) {

		return this.getData(id) || this.inventory.find(id) || this.equip.find(id);
	}

	getData(id) {
		return this.items[id] || this[id];
	}

	getMaterial(id) { return this.matsById[id]; }

}

/***/ }),

/***/ "./src/genGroup.js":
/*!*************************!*\
  !*** ./src/genGroup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenGroup; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/util */ "./src/util/util.js");


/**
 * Category for items without an assigned value to a property
 * that should define their category.
 */
const DEFAULT_CATEGORY = 'any';

/**
 * Item generation group for a given item type.
 */
class GenGroup {

	/**
	 *
	 * @param {GData[]} items
	 */
	constructor( items ){

		this.items= items;
		this.filters = {};

	}

	/**
	 * Get a random item at or below the given level.
	 * @property {number} level - max item level.
	 * @property {function} [pred=null] - optional filter predicate.
	 * @returns {GData}
	 */
	randBelow( level=1, pred) {

		let levels = this.filters.level;

		let st = 1 + Math.floor( Math.random()*level );
		let i = st;

		do {

			var it = Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["randElm"])( levels[i] );
			if ( it != null && (!pred || pred(it) ) ) return it;

			if ( --i < 0 ) i = level;

		} while ( i != st );

		return it;

	}

	/**
	 * Get a random item without any restriction
	 * @returns {object}
	 */
	rand(){
		if ( this.items.length === 0) return null;
		return this.items[Math.floor(Math.random()*this.items.length)];
	}

	/**
	 * Get a filtered sublist.
	 * @param {string} filter - filter type 'level', 'biome' etc.
	 * @param {string} match
	 */
	filtered( filter, match ) {

		let f = this.filters[filter];
		if ( f !== undefined ) return f[match];

		return null;

	}

	/**
	 * Get a random item from a filtered subcategory.
	 * @param {string} filter
	 * @param {string} match
	 */
	filterRand( filter, match ) {

		var o = this.filters[filter];
		if ( o===undefined) return null;

		o = filter[match];
		if ( o===undefined || o.length === 0) return null;

		return o[ Math.floor( Math.random()*o.length) ];

	}

	/**
	 * Create a new named item category based on the 'prop' property
	 * of the items.
	 * @param {string} name - category name.
	 * @param {string} prop - prop to sort on. equal to name by default.
	 */
	makeFilter( name, prop='') {

		let filter = this.filters[name] = {};
		prop = prop || name;

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = this.items[i];
			var cat = it[prop] || DEFAULT_CATEGORY;

			var list = filter[ cat ];
			if ( list === undefined ) {

				filter[ cat ] = [ it ];

			} else {
				list.push( it );
			}

		}

	}

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var ui_main_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/main.vue */ "./src/ui/main.vue");
/* harmony import */ var ui_components_confirm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/components/confirm.vue */ "./src/ui/components/confirm.vue");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./src/events.js");






/**
 * Global dispatch.
 */
//var dispatch = new Vue();

vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin({

	components:{
		confirm:ui_components_confirm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
	},
	methods: {

		listen:_events__WEBPACK_IMPORTED_MODULE_4__["default"].listen,
		dispatch:_events__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch,

		// get id for html element.
		elmId(name) { return name + this._uid; }

	}

});

var vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
	el: '#vueRoot',
	components:{ Main: ui_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"] },
	created(){

		this.lastSave = null;
		this.game = _game__WEBPACK_IMPORTED_MODULE_3__["default"];

		this.listen('save-file', this.saveFile );
		this.listen('load-file', this.loadFile );
		this.listen('load', this.loadSave );
		this.listen('reset', this.reset );

		this.listen('save', this.save );
		this.listen('autosave', this.autosave );

		this.listen( 'setting', this.onSetting );

		this.loadSave();

	},
	methods:{

		gameLoaded() {
			console.log('gameLoaded()');
			this.dispatch( 'game-loaded' );
			this.dispatch('unpause');
		},

		onSetting( setting, v ) {

			if ( setting === 'darkMode') {

				if ( v ) document.body.classList.add( 'darkmode');
				else document.body.classList.remove( 'darkmode');

			} else if ( setting === 'compactMode' ) {

				if ( v ) document.body.classList.add( 'compact');
				else document.body.classList.remove( 'compact');

			}

		},

		saveFile(e){

			try {

				if ( this.lastSave ) URL.revokeObjectURL( this.lastSave );


				let json = JSON.stringify( this.game.state );


				this.lastSave = new File( [json], 'arcanum.json', {type:"text/json;charset=utf-8"} );

				e.target.href = URL.createObjectURL( this.lastSave );

			} catch(ex) {
				console.error(ex);
			}

		},

		loadFile(files) {

			const file = files[0];
			if ( !file) return;

			const reader = new FileReader();
			reader.onload = (e)=>{

				this.loadData( e.target.result );

			}
			reader.readAsText( file );

		},

		loadSave() {

			let str = window.localStorage.getItem( 'gameData');
			if ( !str ) console.log('no data saved.');
			this.loadData( str );

		},

		loadData( text ){

			this.dispatch('pause');

			let obj = text ? JSON.parse( text ) : null;
			this.game.load( obj ).then( this.gameLoaded );

		},

		/**
		 * No console output.
		 */
		autosave(){

			let store = window.localStorage;
			let json = JSON.stringify( this.game.state );
			store.setItem( 'gameData', json );
		},

		save() {

			console.log('saving...');
			let store = window.localStorage;

			let json = JSON.stringify( this.game.state );
			console.log( json )
			store.setItem( 'gameData', json );

		},
		reset() {

			this.dispatch('pause');

			// clear all save data.
			let store = window.localStorage;
			store.clear();

			this.game.reset().then( this.gameLoaded );

		}

	},
	render( createElm ) {
		return createElm(ui_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"], { props:{} } );
	}

});

/***/ }),

/***/ "./src/itemgen.js":
/*!************************!*\
  !*** ./src/itemgen.js ***!
  \************************/
/*! exports provided: itemRevive, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemRevive", function() { return itemRevive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemGen; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _chars_wearable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chars/wearable */ "./src/chars/wearable.js");
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");
/* harmony import */ var _values_percent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./values/percent */ "./src/values/percent.js");
/* harmony import */ var _items_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/item */ "./src/items/item.js");
/* harmony import */ var _items_encounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/encounter */ "./src/items/encounter.js");
/* harmony import */ var _chars_npc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chars/npc */ "./src/chars/npc.js");
/* harmony import */ var _genGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./genGroup */ "./src/genGroup.js");
/* harmony import */ var _values_mod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./values/mod */ "./src/values/mod.js");










/**
 * Revive a prototyped item based on an item template.
 * @param {*} gs
 * @param {*} it
 */
function itemRevive(gs, it ) {

		var orig = it.template;
		if ( typeof orig === 'string') orig = gs.getData( orig );
		if ( !orig) {
			console.warn('inv. bad item type: ' + it.id + ' -> ' + it.template );
			return null;
		}
		it.template = orig;

		var type = orig.type;
		if ( type == null ) {
			console.warn( 'Unknown Item type: '+ it.type + ' -> ' + it.template + ' -> ' + it.protoId );
		}

		if ( type === 'armor' || type === 'weapon' || type === 'wearable') {

			it = new _chars_wearable__WEBPACK_IMPORTED_MODULE_1__["default"](it);

		} else if ( type === 'monster') {
			it = new _chars_npc__WEBPACK_IMPORTED_MODULE_6__["default"](it);
		} else if ( type === 'enc') {

			// encounter.
			it = new _items_encounter__WEBPACK_IMPORTED_MODULE_5__["default"](it);

		} else {
			console.log('default revive: ' + it.id );
			it = new _items_item__WEBPACK_IMPORTED_MODULE_4__["default"](it);
		}

		it.revive( gs );

		return it;

}

/**
 * Generates random Equipment from Item data, and instantiates Items from prototypes.
 */
class ItemGen {

	constructor( state ){

		this.state = state;

		/**
		 * Groups of item types to generate. 'armor', 'weapon', 'npc' etc.
		 */
		this.groups = {};

		/**
		 * Iitem lists by kind then level.
		 * @property {Object.<string,Object.<number,Wearable[]>>} byLevel
		 */
		this.byLevel = {};

		/**
		 * Item lists by kind.
		 * @property {Object.<string,Item[]>} byKind
		 */
		this.byKind = {};

		this.initGroup( 'armor', state.armors );
		this.initGroup('weapon', state.weapons );
		this.initGroup('materials', state.materials );

		let g = this.initGroup('npc', state.monsters );
		g.makeFilter( 'biome' );
		g.makeFilter( 'kind' );


		this.initList( 'armor', state.armors );
		this.initList( 'weapon', state.weapons );

	}

	npc( proto ) {

		let it = new _chars_npc__WEBPACK_IMPORTED_MODULE_6__["default"]( proto );
		it.value = 1;
		it.name = proto.name;
		it.id = proto.id + this.state.nextId();
		return it;

	}

	/**
	 * Generate an enemy from rand definition.
	 * @param {*} data
	 */
	genEnemy( data, pct=1 ) {

		var level =1;

		if ( data.level ) {

			level = data.level;

			if ( level instanceof Object ) level =  level.value;
			if ( data.scale ) level *= pct;

		} else if ( data.min && data.max ) {

			level = data.min + pct*(data.max - data.min);

		}

		if ( data.range ) level += (data.range*( -1 + 2*Math.random() ) );
		level = Math.ceil(level);

		let npc = this.groups.npc.randBelow( level );
		return npc;

	}

	/**
	 * Instantiate a prototypical item.
	 * @param {object} proto
	 * @returns {Item|Wearable} the item created, or null on failure.
	 */
	instance( proto ) {

		let it;

		if ( proto.type === 'armor' || proto.type === 'weapon' || proto.type === 'wearable' ) {

			//console.log('instance wearable: ' + proto.id );
			return this.itemClone( proto, this.matForItem(proto ));

		} else if ( proto.type === _items_encounter__WEBPACK_IMPORTED_MODULE_5__["ENCOUNTER"] ) {

			it = new _items_encounter__WEBPACK_IMPORTED_MODULE_5__["default"](proto);

		} else if ( proto.type === 'potion' ) {

			it = new _items_item__WEBPACK_IMPORTED_MODULE_4__["default"](proto);

		} else if ( proto.type === 'item') {

			it = new _items_item__WEBPACK_IMPORTED_MODULE_4__["default"]( proto );

		} else if ( proto.type === 'monster') return this.npc(proto);

		if ( it === undefined ) return null;

		it.id = proto.id + this.state.nextId();
		return it;

	}

	/**
	 * Generate a new item from a template item.
	 * @param {Wearable} data
	 * @param {string|Material} material - material to use for item.
	 */
	fromData( data, material=null ) {

		//console.log('wearable from data');
		if ( data === null || data === undefined ) return null;

		let mat = material || data.material;
		if ( !mat ) mat = this.matForItem( data );

		if ( typeof mat === 'string' ) mat = this.state.getData( mat );

		return this.itemClone( data, mat );

	}

	/**
	 * Generate loot from looting info.
	 * @param {string|Wearable|Object|Array} info
	 * @returns {?Wearable|Wearable[]}
	 */
	getLoot( info, amt=1 ) {

		if ( amt instanceof _values_percent__WEBPACK_IMPORTED_MODULE_3__["default"] ) {

			if ( !amt.value ) return null;
			amt = 1;

		} else if ( amt.value ) amt = amt.value;

		if ( Array.isArray(info) ) return info.map( this.getLoot, this );

		if ( typeof info === 'string' ) {
			info = this.state.getData(info);
		}

		if (!info) {
			console.log('skipping NULL gen.')
			return null;
		}

		if ( info.type === 'wearable' || info.type === 'weapon'
			|| info.type ==='armor') return this.fromData( info );

		/** @todo: THIS IS BAD */

		else if ( info.type && !info.isProto ) {
			_game__WEBPACK_IMPORTED_MODULE_0__["default"].doItem( info, amt ||0 );
			return;
		}

		if ( info.pct && (100*Math.random() > info.pct) ) return null;
		if ( info.level ) return this.fromLevel( info.level, info.type, info.material );
		else if ( info.max ) return this.randBelow( info.max, info.type, info.material );

		let items = [];
		for( let p in info ) {
			//console.log('GETTING SUB LOOT: ' + p);
			var it = this.getLoot( this.state.getData(p), info[p] );
			if ( it ) items.push(it );
		}

		return items;

	}

	/**
	 * Get loot which is a basic game data item.
	 * @param {GData} item
	 */
	getDataLoot( item ){
	}

	/**
	 * Return a random item of the given level.
	 * @param {number} [level=0]
	 * @param {?string} [kind=null]
	 * @param {?string|Material} [mat=null] - item material.
	 */
	fromLevel( level=0, kind=null, mat=null ){

		kind = kind || this.pickKind();

		let list = this.byLevel[kind];
		if ( list ) {

			list = list[level];
			if ( list ) {
				let it = Object(objecty__WEBPACK_IMPORTED_MODULE_2__["randElm"])( list );
				return this.fromData( it, mat );
			}


		}

		return null;

	}

	/**
	 * Get random item of given level or below.
	 * @param {number} [maxLevel=1] - maximum level of item to return.
	 * @param {?string} [type=null] - kind of item to generate.
	 * @param {?string|Material} [mat=null] - item material.
	 * @returns {Wearable|null}
	 */
	randBelow( maxLevel=1, type=null, mat=null ){

		maxLevel = Math.floor( Math.random()*(maxLevel+1) );
		do {
			var it = this.fromLevel( maxLevel, type, mat );

		} while ( !it && --maxLevel >= 0 );

		return it;
	}

	/**
	 *
	 * @param {string} name - group name.
	 * @param {Item[]} items
	 * @returns {GenGroup}
	 */
	initGroup( name, items ) {

		if ( !items ) {
			console.warn( 'group: ' + name + ' undefined.');
			return;
		}

		let g = this.groups[name] = new _genGroup__WEBPACK_IMPORTED_MODULE_7__["default"](items);
		g.makeFilter('level');

		return g;

	}


	/**
	 *
	 * @param {string} type
	 * @param {*} list
	 * @returns {Object}
	 */
	initList( type, list ) {

		if ( !list ) {
			console.warn( 'list: ' + type + ' undefined.');
			return;
		}
		/**
		 * Maps item level to item types of the appropriate level.
		 * Object.<number,item[]>
		 */
		let byLevel = {};
		let levelArr;

		for( let i = list.length-1; i>= 0; i-- ) {

			var it = list[i];
			levelArr = byLevel[ it.level ] || (byLevel[it.level] = []);

			levelArr.push(it);

		}

		this.byKind[type] = list || [];
		this.byLevel[ type ] = byLevel;

	}

	/**
	 * Get a material compatible with the given item data.
	 * @param {Item} item
	 * @returns {Material|null}
	 */
	matForItem( item ) {

		let max = item.level || 1;

		let only = item.only;
		let exclude = item.exclude;

		while ( max >= 0 ) {

			var matList = this.groups.materials.filtered( 'level', max-- );
			if ( !matList) continue;

			var res = Object(objecty__WEBPACK_IMPORTED_MODULE_2__["randMatch"])( matList, v=>{

				if ( only && !Object(objecty__WEBPACK_IMPORTED_MODULE_2__["includesAny"])(only, v.type, v.kind ) ) return false;
				if ( exclude && Object(objecty__WEBPACK_IMPORTED_MODULE_2__["includesAny"])(exclude, v.type, v.kind, v.name) ) return false;

				if ( v.only && !Object(objecty__WEBPACK_IMPORTED_MODULE_2__["includesAny"])( v.only, item.type, item.kind ) ) return false;
				if ( v.exclude && Object(objecty__WEBPACK_IMPORTED_MODULE_2__["includesAny"])( v.exclude, item.type, item.kind ) ) return false;
				return true;

			});
			if ( res ) return res;

		}

		return null;

	}

	/**
	 * Get a material below or including the given level.
	 * @param {number} level
	 * @param {string} itemKind
	 */
	getMatBelow( level, itemKind=null ) {

		var pred = itemKind ? v=>!v.exclude||!v.exclude.includes(itemKind) : null;

		return this.groups.materials.randBelow( level, pred );

	}

	pickKind() {

		let r = Math.random();
		if ( r < 0.5 ) return 'armor';
		if ( r < 1 ) return 'weapon';
		return 'equip';

	}

	itemClone( data, material ) {

		data = new _chars_wearable__WEBPACK_IMPORTED_MODULE_1__["default"](data);

		if ( material ) {
			data.applyMaterial( material );
			data.name = material.id + ' ' + data.name;
		} else data.name = data.name;

		data.id = data.id + this.state.nextId();

		return data;
	}


}

/***/ }),

/***/ "./src/items/action.js":
/*!*****************************!*\
  !*** ./src/items/action.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");




class Action extends _gdata__WEBPACK_IMPORTED_MODULE_0__["default"] {

	valueOf(){ return this.locked ? 0 : this._value; }

	get level() {return this._level;}
	set level(v) { this._level = v;}

	/**
	 * @property {number} exp - alias ex data files.
	 */
	get exp() { return this._exp || 0; }
	set exp(v){

		this._exp = v;
		if ( (this._length&& (v>=this._length) )
			|| ( this.perpetual && v >= 1 ) ) {

			_events__WEBPACK_IMPORTED_MODULE_2__["default"].gfire( _events__WEBPACK_IMPORTED_MODULE_2__["EXP_MAX"], this );

		}

	}

	get length() { return this._length; }
	set length(v) { this._length = v;}

	get running() { return this._running; }
	set running(v) { this._running = v;}

	percent() {
		return 100*(this._exp / this._length );
	}

	constructor( vars=null ){

		super(vars);

		this.repeat = this.repeat === false ? false : true;
		this.type = 'action';
		if ( this.length || this.perpetual ) this._exp = this._exp || 0;

		this.running = this.running || false;

		if ( this.cd ) this.timer = this.timer || 0;

		this.applyImproves();

	}

	applyImproves() {

		let v = this._value;
		if ( this.at ) {

			for( let p in this.at) {

				if ( v >= Number(p) ) {
					this.applyMods( this.at[p] );
				}

			}

		}

		if ( this.every ) {

			for( let p in this.every ) {

				var amt = Math.floor( v / p );
				if ( amt > 0 ) this.applyMods( this.every[p], amt );

			}

		}

	}

	/**
	 * Update a running action.
	 * @param {number} dt - elapsed time.
	 */
	update( dt ) {
		this.exp += ( this._rate ? this._rate.value : 1 )*dt;
	}

	/**
	 * completion of ongoing action.
	 */
	complete() {

		if ( this.log ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].doLog( this.log );
		if ( this.result ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].applyEffect( this.result );
		if ( this.mod ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].addMod( this.mod );
		if ( this.loot ) _game__WEBPACK_IMPORTED_MODULE_1__["default"].getLoot( this.loot );

		this.value++;

		if ( this.exec ) this.exec();
		_events__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_2__["ACT_DONE"], this );

	}

	canUse() {
		if ( this.maxed() ) return false;
		if ( this.cd > 0 && this.timer > 0 ) return false;
		return true;
	}

	/**
	 * Action executed, whether runnable or one-time.
	 * RESETS EXP
	 * No value increment because that is currently done by game (@todo fix)
	 */
	exec() {

		if ( this.cd ) {

			_game__WEBPACK_IMPORTED_MODULE_1__["default"].addTimer( this );
			this.timer = this.cd;
		}

		var improve = false;

		if ( this.at ) {

			let cur = this.at[this.value];
			if ( cur ) {

				improve = true;
				this.applyMods( cur );

			}

		} else if ( this.every ) {

			for( let p in this.every ) {

				if ( this.value % p === 0 ) {

					improve = true;
					this.applyMods( this.every[p] );

				}

			}


		}

		if ( improve ) _events__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_2__["ACT_IMPROVED"], this );

		this._exp = 0;

	}

	/**
	 * Performs a timer tick.
	 * @param {number} dt - elapsed time.
	 * @returns {boolean} true if timer is complete.
	 */
	tick( dt) {

		if ( this.timer > 0 ) {

			//console.log('timer: ' + this.timer );
			this.timer -= dt;
			if ( this.timer > 0 ) return false;
			else {
				this.timer = 0;
				return true;
			}

		}
		return false;

	}

}

/***/ }),

/***/ "./src/items/base.js":
/*!***************************!*\
  !*** ./src/items/base.js ***!
  \***************************/
/*! exports provided: mergeClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeClass", function() { return mergeClass; });
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");
/* harmony import */ var _values_percent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/percent */ "./src/values/percent.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _values_mod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values/mod */ "./src/values/mod.js");






function mergeClass( destClass, src ) {

	let proto = destClass.prototype || destClass;
	let descs = Object.getOwnPropertyDescriptors(src);

	// NOTE: valueOf not overwritten.
	for( let p in descs ) {
		if ( !proto.hasOwnProperty(p) ) Object.defineProperty( proto, p, descs[p]);
	}

	return destClass;

}


 // TODO: restore 'tags' later if tags become dynamic.
 /**
  * @const {string[]} JSONIgnore - ignore these properties by default when saving.
  */
 const JSONIgnore = [ 'template', 'id', 'type', 'defaults', 'name', 'desc', 'running', 'current',
 	'locked', 'locks', 'value', 'exp', 'delta', 'tags', 'mod', 'effect', 'progress','need', 'require'];

/**
 * Base class of all Game Objects.
 */
/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * Get JSON for a sub-class with additional properties excluded.
	 * @param {string[]} [excludes=null]
	*/
	excludeJSON( excludes ) {

		excludes = excludes ? JSONIgnore.concat( excludes ) : JSONIgnore;

		let vars = Object(objecty__WEBPACK_IMPORTED_MODULE_0__["changes"])( Object(objecty__WEBPACK_IMPORTED_MODULE_0__["jsonify"])(this, excludes ), this.template || {} );


		if ( this.locked === false && this.template.locked !== false ){
			vars = vars || {};
			vars.locked = this.locked;
		}

		return vars || undefined;

	},


	toJSON() {

		let vars = Object(objecty__WEBPACK_IMPORTED_MODULE_0__["changes"])( Object(objecty__WEBPACK_IMPORTED_MODULE_0__["jsonify"])(this, JSONIgnore ),
			this.template || {} );

		if ( this.locked === false && this.template.locked !== false ){
			vars = vars || {};
			vars.locked = this.locked;
		}

		return vars || undefined;

	},

	/**
	 * @property {Object} template - data used to create this Item.
	 */
	get template() { return this._template; },
	set template(v) { this._template = v;},

	/**
	 * @property {string} type
	 */
	get type() { return this._type },
	set type(v) { this._type =v;},

	/**
	 * @property {string} id - internal id.
	 */
	toString(){return this.id;},

	/**
	 * @property {string} name - displayed name.
	 */
	get name() { return ( this._actname && this._value < 1 ) ? this.actname : (this._name||this.id); },
	set name(v) { this._name = v;},

	/**
	 * @property {boolean} repeat - whether the item is repeatable.
	 */

	/**
	 * @property {string} desc
	 */
	get desc() { return ( this.actdesc && this._value < 1 ) ? this.actdesc : (this._desc || null ); },
	set desc(v) { this._desc=v;},

	/**
	 * @property {number} current - displayable value; override in subclass for auto rounding, floor, etc.
	 */
	get current() { return this.value },
	set current(v) {},

	/**
	 * @property {number} ex - save/load alias for exp with no triggers.
	 */
	get ex(){return this._exp; },
	set ex(v) { this._exp = v;},

	/**
	 * @property {number} val - saving/loading from json without triggers.
	 */
	get val() { return this._value },
	set val(v) { this._value = v; },

	/**
	 * @property {number} value
	 */
	get value() { return this._value; },
	set value(v) {

		this._value = v;

	},
	valueOf() { return this._value; },

	/**
	 * @property {string[]} tags - tag to distinguish between
	 * item subtypes.
	 */
	get tags() { return this._tags;},
	set tags(v) {

		if ( typeof v === 'string') {
			this._tags = v.split(',');
		} else if ( !v ) this._tags = null;
		else if ( typeof v === 'object' ) {
			let a = [];
			for( let p in v ) {
				a.push( v[p] );
			}
			this._tags = a;

		} else {
			this._tags = null;
		}

	},

	/**
	 *
	 * @param {Object} mods - effect/mod description.
	 * @param {number} amt - factor of base amount added
	 * ( fractions of full amount due to tick time. )
	 */
	applyVars( mods, amt=1 ) {

		if ( typeof mods === 'number') { this.value += mods*amt; }
		else if ( typeof mods === 'object' ) {

			if ( mods instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) {

				// this is possible by one mod adding a new effect to an existing item,
				// causing the mod to be cloned into the effect.
				// coals: mod->rest.effect.fire:0.1
				// use rest: apply effect to fire: 0.1 is now a mod.
				mods.applyTo( this, 'value', amt);
				return;

			}

			if ( mods.mod ) this.changeMod( mods.mod, amt );

			for( let p in mods ) {

				// add any final value last.
				if (  p === 'skipLocked' || p === 'value') continue;

				var targ = this[p];
				if ( targ instanceof _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"] || targ instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) {

					//console.log('applying mod to stat: '+ p);
					targ.apply( mods[p], amt );

				} else if ( typeof mods[p] === 'object' ) {

					console.log('subassign: ' + p)
					if ( mods[p] instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) mods[p].applyTo( this, p, amt );
					else this.subeffect( this[p], mods[p], amt );

				} else if ( this[p] !== undefined ) {
					//console.log( this.id + ' adding vars: ' + p );
					this[p] += Number(mods[p])*amt;
				} else {
					console.log('NEW SUB: ' + p );
					this.newSub( this, p, mods[p], amt )
				}

			}
			if ( mods.value ) this.value += Number(mods.value)*amt;

		}

	},

	/**
	 *
	 * @param {*} mods
	 * @param {number} amt
	 * @param {Object} [targ=null]
	 */
	applyMods( mods, amt=1, targ=null ) {

		targ = targ || this;

		if ( mods instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) {

			mods.applyTo( targ, 'value', amt );

		} else if ( typeof mods === 'object') {

			this.applyObj( mods, amt, targ );

		} else if ( typeof mods === 'number') {

			if ( targ instanceof _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"] || targ instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) targ.apply( mods, amt );
			else if ( typeof targ === 'object') {

				targ.value = (targ.value || 0 ) + amt*mods;
			}

			// nothing can be done if targ is just a number. no parent object.

		} else console.warn( this.id + ' unknown mod type: ' + mods );

	},

	/**
	 * Apply a mod when the mod is an object.
	 * @param {Object} mod
	 * @param {number} amt - percent of mod added.
	 * @param {Object} targ - target of mods.
	 */
	applyObj( mods, amt, targ ) {

		if ( mods.mod ) this.changeMod( mods.mod, amt );

		for( let p in mods ) {

			//console.log('MOD NAME: ' + p);

			var m = mods[p];
			var sub = targ[p];

			if ( sub === undefined || sub === null ) {

				sub = targ[p] = ( typeof m === 'number') ? m*amt : Object(objecty__WEBPACK_IMPORTED_MODULE_0__["cloneClass"])( m );
				console.log( mods + '["' + p + '"]:' + m + ' -> mod targ undefined' + ' -> ' + sub );

			} else if ( m instanceof _values_mod__WEBPACK_IMPORTED_MODULE_4__["default"] ) m.applyTo( targ, p, amt );
			else if ( typeof m === 'object' ) {

				this.applyObj( m, amt, sub );

			} else if ( typeof m === 'number' ) {

				if ( typeof sub === 'number') targ[p] += m*amt;
				else this.applyMods( m, amt, sub);

			} else {
				console.warn( `UNKNOWN Mod applied to ${this.id}: ${p}:${m}`);
			}

		}

	},

	/**
	 * Get the value of an object, or a default value.
	 * @param {Object|number} obj
	 * @param {*} def
	 */
	getValue( obj, def=0 ) {
	},

	/**
	 * Perform a subobject assignment.
	 * @param {Object} obj - base object being assigned to.
	 * @param {Object} m - object with subobjects representing assignment paths.
	 * @param {number} amt - amount multiplier for any assignments.
	 */
	subeffect( obj, m, amt ) {

		if ( typeof obj !== 'object' ) {
			console.warn( 'invalid assign: ' + obj + ' = ' + m );
			return;
		}

		for( let p in m ) {

			console.log('SUBEFFECT(): ' + p + '=' + m[p]);

			if ( typeof m[p] === 'object' ) {
				this.subeffect( obj[p], m[p], amt );
			} else {

				if ( typeof obj[p] === 'object') {

					obj[p].value = ( obj[p].value || 0 ) + Number(m[p])*amt;

				} else obj[p] += Number(m[p])*amt;

			}

		}

	},

	/**
	 * Add new sub-object to this object.
	 * Vue reactivity??
	 * @todo
	 * @param {Object} obj - parent object.
	 * @param {string} key - prop key to set.
	 * @param {Object} mod - modify amount.
	 * @param {number} amt - times modifier applied.
	 */
	newSub( obj, key, mod, amt ) {

		//console.log( this.id + ' adding KEY: ' + key );
		obj[key] = amt*mod.value;
	},

	/**
	 * Modify a mod applied by the Item.
	 * @param {Object|Mod|number} mod
	 * @param {number} amt - percent of change applied to modifier.
	 */
	changeMod( mod, amt ) {

		if ( this.equippable ) return;
		//console.log( this.id + ': adding mod amt: ' + amt );

		// apply change to modifier for existing item amount.
		_game__WEBPACK_IMPORTED_MODULE_2__["default"].addMod( mod, amt*this.value );

	},

	/**
	 *
	 * @param {string} tag
	 */
	addTag( tag ) {
		if ( this._tags === null || this._tags === undefined) this._tags = [ tag ];
		else if ( !this._tags.includes(tag) ) this._tags.push(tag);
	},

	/**
	 * Test if item has every tag in list.
	 * @param {string[]} a - array of tags to test.
	 * @returns {boolean}
	*/
	hasTags( a ) {

		if ( !this._tags ) return false;
		for( let i = a.length-1; i >= 0; i-- ) if ( !this._tags.includes(a[i]) ) return false;

		return true;

	},

	/**
	 * Test if tag has any tag in the list.
	 * @param {string[]} a - array of tags to test.
	 * @returns {boolean}
	 */
	anyTag( a ) {

		if ( !this._tags ) return false;
		for( let i = a.length-1; i >= 0; i-- ) if ( !this._tags.includes(a[i]) ) return true;

		return false;

	},

	/**
	 *
	 * @param {string} t - tag to test.
	 * @returns {boolean}
	 */
	hasTag( t ) {
		return (this.tags) && this._tags.includes(t); }

});

/***/ }),

/***/ "./src/items/dungeon.js":
/*!******************************!*\
  !*** ./src/items/dungeon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dungeon; });
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster */ "./src/items/monster.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/items/action.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale */ "./src/items/locale.js");





/**
 * @type {Object} Enemy
 * @property {number} weight - weighted chance of attack occuring. Not Implemented.
 * @property {number} min - min damage
 * @property {number} max - max damage
 * @property {string} type - attack type
 * @property {number} defense
 * @property {number} attack
 * @property {number} hp
 */

class Dungeon extends _action__WEBPACK_IMPORTED_MODULE_1__["default"] {

	get enemies() { return this._enemies; }
	set enemies(v) {

		// json data not true arrays.
		let a = [];

		for( let p in v) {
			a.push( v[p]);
		}
		this._enemies=a;
	}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		this.level = this.level !== undefined ? this.level : 1;

		this.type = 'dungeon';

		/**
		 * @property {number} progress
		 */
		this._exp = this._exp || 0;
		this._length = this._length || 100;

		// default require for dungeon is player-level.
		this.require = this.require || this.levelTest;

		this.dist = ( this.dist === undefined || this.dist === null ) ? Object(_locale__WEBPACK_IMPORTED_MODULE_3__["getDist"])(this.level) : this.dist;
		//this.addRequire( 'dist', this.dist );

		//console.log(this.id + ' dist: ' + this.dist );

		if ( this.need == null ) this.need = this.distTest;

		/**
		 * Total of all enemy weights, used to roll which
		 * enemy is used.
		 * @property {number} attackTot
		 */
		//this.attackTot = this.totalWeights();

	}

	/**
	 * Get next enemy.
	 * @returns {string|Monster|Object}
	 */
	getEnemy() {

		return this.getBoss() || this._enemies[ Math.floor( Math.random()*this._enemies.length ) ];

	}

	/**
	 * Return a random non-boss mob. (Used to exclude dead/locked uniques)
	 */
	getMob() {
		return this._enemies[ Math.floor( Math.random()*this._enemies.length ) ];
	}

	getBoss() {

		var boss = this.boss;
		if ( !boss ) return null;

		if ( typeof boss === 'string' ) {

			if ( this.exp !== this.length-1) return null;

		} else if ( boss.hasOwnProperty( (this.exp+1) ) ) {
			// mid-level boss
			boss = boss[this.exp+1];
		}

		boss = _game__WEBPACK_IMPORTED_MODULE_2__["default"].state.getData( boss );
		if ( !boss || (boss.unique && boss.value>= 1) ) return null;
		return boss.id;

	}

	/**
	 * Catch complete() to prevent default action. ugly.
	 */
	complete() {
	}

	distTest( g, self) {
		return g.dist >= self.dist;
	}

	levelTest(g, self) {
		return g.player.level >= (self.level-1);
	}

	/**
	 *
	 */
	/*totalWeights() {

		let tot = 0;
		for( let a of this._enemies ) tot += a.weight || 1;
		return tot;

	}*/

}

/***/ }),

/***/ "./src/items/enchant.js":
/*!******************************!*\
  !*** ./src/items/enchant.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enchant; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/items/action.js");


class Enchant extends _action__WEBPACK_IMPORTED_MODULE_0__["default"] {

	/**
	 * @property {string} target - target type, name, kind, or tag, to which
	 * the enchantment can be applied.
	 */
	get targets(){return this._targets;}
	set targets(v){
		this._targets = typeof v === 'string' ? v.split(',') : v;
	}

	constructor(vars){

		super(vars);

		this.level = this.level || 0;
		this.need = this.need || 'enchantsource';

	}

	/**
	 * Called when enchant is being used on target.
	 * @param {*} it
	 */
	usingWith( it ) {

		console.log( this.id + ' enchant: ' + it.id );
		if ( this.adj && !it.name.includes(this.adj) ) {

			it.name += ' ' + this.adj;

		} else if ( !it.name.includes('Enchanted') ) it.name = 'Enchanted ' + it.name;

		it.enchants = (it.enchants || 0) + this.level;

		this.exec();

	}

	/**
	 * Catch complete
	 */
	complete(){
	}

	/**
	 * Test if enchantment can be applied to target item.
	 * @param {Item} it
	 */
	canApply( it ) {

		if ( it.enchants + this.level > it.level ) return false;

		return !this._targets ||
			this._targets.some(t=> it.type === t || it.kind === t || it.slot === t || it.hasTag(t) );

	}

}

/***/ }),

/***/ "./src/items/encounter.js":
/*!********************************!*\
  !*** ./src/items/encounter.js ***!
  \********************************/
/*! exports provided: ENCOUNTER, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENCOUNTER", function() { return ENCOUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Encounter; });
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");




const defaults = {

	level:1,
	locked:false

};

const ENCOUNTER = 'enc';

/**
 * Sublocation of a Locale
 */
class Encounter extends _gdata__WEBPACK_IMPORTED_MODULE_0__["default"] {

	get isProto() {return true; }

	get exp() { return this._exp;}
	set exp(v) { this._exp = v;}

	/**
	 *
	 */
	get length() { return this._length; }
	set length(v) { this._length = v;}

	toJSON() {
		if ( this.value > 0 ) return { value:this.value};
		else return undefined;
	}

	clone() {
		let e = new Encounter( this );
		e.exp = 0;
		return e;
	}

	get done() { return this._exp >= this.length; }

	constructor( vars=null ) {

		super(vars );

		this.type = ENCOUNTER;

		this._exp = this._exp || 0;

		this.level = this.level || 1;
		this.length = this.length || 5*this.level;

		/*for( let p in this.effect ) {
			console.log( p + ' -> ' + (typeof this.effect[p] ) + ': ' + this.effect[p] );
		}*/

	}

	revive(gs) {
	}

	update( dt ){

		this._exp += dt;
		if ( this.effect ) {
			_game__WEBPACK_IMPORTED_MODULE_1__["default"].applyEffect( this.effect, dt );
		}

	}

	maxed() { return false; }

}

/***/ }),

/***/ "./src/items/gdata.js":
/*!****************************!*\
  !*** ./src/items/gdata.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GData; });
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/items/base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");





/**
 * @typedef {Object} Effect
 * @property {?number} duration
 */

/**
 * Game Data base class.
 */
class GData {

	/**
	 * @property {boolean} disabled - whether the item has been
	 * disabled / is no longer available.
	 */
	get disabled() { return this._disabled; }
	set disabled(v) { this._disabled = v;}

	/**
	 * @property {Stat} max
	 */
	get max() { return this._max; }
	set max(v) {

		if ( this._max ) {

			if ( v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"] ) this._max = v;
			else if ( !isNaN(v) ) this._max.base = v;

		} else this._max = v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"] ? v : new _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"](v,true);
	}

	/**
	 * @property {Stat} rate - rate of stat change in value/second.
	 */
	get rate() { return this._rate; }
	set rate(v){

		if ( v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"] ) this._rate = v;
		else if ( this._rate ) {

			if ( typeof v === 'object' ) Object.assign( this._rate, v);
			else this._rate.base = v;

		} else this._rate = new _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"](v);

	}

	/**
	 * @property {number|Object.<string,number>} cost
	 */
	get cost() { return this._cost; }
	set cost(v) { this._cost=v;}

	/**
	 * @property {string|Object}
	 */
	get require() { return this._require; }
	set require(v) { this._require =v;}

	/**
	 * @property {Object|Array|string|function} effect
	 */
	get effect() { return this._effect; }
	set effect(v) { this._effect=v;}

	/**
	 * @property {number} locks - number of locks preventing item from
	 * being used or unlocked.
	 */
	get locks() { return this._locks||0;}
	set locks(v) { this._locks = v;}

	/**
	 * @property {boolean} locked
	 */
	get locked() { return this._locked; }
	set locked(v) { this._locked = v; }

	get owned() { return this._owned;}
	set owned(v) { this._owned = v; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null, defaults=null ){

		if ( vars ) Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["assignPublic"])( this, vars );
		if ( defaults ) this.setDefaults( defaults );

		if ( this._locked === undefined || this._locked === null ) this.locked = true;

		/**
		 * recomputed at game start.
		 */
		this.locks = 0;

		this._value = this._value || 0;

		if ( vars.nomax ) {
			this._max = null;
		}

		//if ( this.owned && !this.buy && !this.value ) this._value = 1;
		//if ( this.owned) console.log('owned: ' + this.owned + ' id: ' + this.id);

		//if ( this.slot ) console.log( this.id + ' slot: ' + this.slot );
		Object(objecty__WEBPACK_IMPORTED_MODULE_0__["defineExcept"])( this, null,
			['require', 'rate', 'need', 'value', 'buy', 'max', 'cost', 'id', 'name', 'warn', 'effect', 'slot' ]);

	}

	/**
	 * Add or remove amount from Item, after min/max bounds are taken into account.
	 * Returns the amount actually added or removed.
	 *
	 * @param {number} amt
	 * @returns {number}
	 */
	topoff( amt ) {

		if ( amt <= 0 ) {

			if ( this.value < 0 ) return 0;
			else if ( this.value + amt < 0 ) amt = -this.value;

			this.value += amt;

			return amt;

		}

		if ( this.repeat !== true && !this.max &&
			this.value > 1 &&
			(!this.buy || this.owned===true) ) {
			return 0;
		}

		if ( this.max && (this.value + amt) >= this.max.value ) amt = this.max.value - this.value;
		if ( amt === 0 ) return 0;

		this.value += amt;

		return amt;

	}

	/**
	 * Determine whether the item is filled relative to a filling rate.
	 * if the filling rate + natural item rate can't fill the item
	 * it is considered filled to avoid getting stuck.
	 * @param {number} rate
	 */
	filled( rate=0 ) { return (this.max && this.value>=this.max.value) || (this.rate && (this.rate+rate) <= 0); }

	/**
	 * @returns {boolean} true if an unlocked item is at maximum value.
	*/
	maxed() {

		return this.max ? (this.value >= Math.floor(this.max.value) ) :
			( this.repeat !== true &&
				this._value > 0 &&
				(!this.buy || this.owned===true) );

	}

	setDefaults( defaults ) {

		var obj;

		for( let p in defaults ) {

			var cur = this[p];
			if ( cur === undefined || cur === null ) {

				obj = defaults[p];
				if ( typeof obj === 'function' ) this[p] = obj( this );
				else if ( typeof obj === 'object' ) this[p] = Object(objecty__WEBPACK_IMPORTED_MODULE_0__["clone"])( obj );
				else this[p] = obj;

			}

		}

	}

	/**
	 * shorthand for locked||disabled||locks>0
	 */
	blocked() {
		return this.locked || this.disabled || this.locks>0;
	}

	/**
	 * Perform cost scaling based on current value.
	 * @param {*} s
	 */
	scaleCost( s ) {

		let cost = this.cost;
		if (!cost) return;

		let type = typeof cost;
		if ( type === 'string') return;
		else if ( !isNaN(type)) {

		}

	}

	/**
	 * Add a requirement for unlocking this data.
	 * @param {string|string[]} item
	 */
	addRequire( item ) {

		if ( !this.require ) {
			this.require = item;
		} else {

			if ( this.require === item ||
				(Array.isArray(this.require) && this.require.includes(item)) ) return;
			this.require = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["arrayMerge"])( this.require, item );
		}

	}

}

Object(_base__WEBPACK_IMPORTED_MODULE_2__["mergeClass"])( GData, _base__WEBPACK_IMPORTED_MODULE_2__["default"] );

/***/ }),

/***/ "./src/items/item.js":
/*!***************************!*\
  !*** ./src/items/item.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/items/base.js");
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");



/**
 * Carryable or equippable instanced Item.
 * An instanced item can be created, destroyed, discarded, etc.
 */
class Item {

	toJSON() {

		let data = this.excludeJSON() || {};

		data.id = this.id;
		data.template = this.template.id;
		data.value = this.value;

		return data ? data : undefined;

	}

	get instance() { return true; }

	/**
	 * @property {string} protoId - id of item template used to instance this item.
	 */
	get protoId() { return this.template?  this.template.id : this._id; }

	/**
	 * @property {boolean} consume - whether the item is consumed when used.
	 */
	get consume() { return this._consume; }
	set consume(v) { this._consume = v;}

	/**
	 * @property {boolean} stack - whether the item should stack.
	 */
	get stack() { return this._stack; }
	set stack(v) { this._stack = v; }

	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars );
		if ( this.consume === null || this.consume === undefined ) this.consume = true;

		console.log('Item: ' +  this.id );
		if ( this.stack !== false ) this.stack = true;
	}

	maxed(){
		return (this.stack === false &&this.value>0) || ( this.max && this.value >= this.max );
	}

	/**
	 * does nothing.
	 */
	revive( state ){

		if ( typeof this.template ==='string' ) this.template = state.getData( this.template );
		if ( this.template ) {
			console.log('it revive from: ' + this.template );
			Object(objecty__WEBPACK_IMPORTED_MODULE_1__["mergeSafe"])( this, this.template);
		}

	}

}

Object(_base__WEBPACK_IMPORTED_MODULE_0__["mergeClass"])( Item, _base__WEBPACK_IMPORTED_MODULE_0__["default"] );

/***/ }),

/***/ "./src/items/locale.js":
/*!*****************************!*\
  !*** ./src/items/locale.js ***!
  \*****************************/
/*! exports provided: getDist, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDist", function() { return getDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Locale; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/items/action.js");


/**
 * Default dist per level function.
 * @param {number} lvl
 */
const getDist = (lvl)=> {
	return Math.ceil( 4.4*Math.exp( 0.32*lvl ) );
};

class Locale extends _action__WEBPACK_IMPORTED_MODULE_0__["default"] {

	get encs() { return this._encs; }
	set encs(v) {

		// json data not true arrays.
		let a = [];

		for( let p in v) { a.push( v[p]); }

		this._encs=a;
	}

	constructor(vars=null) {

		super(vars);

		this.level = this.level !== undefined ? this.level : 1;

		this.type = 'locale';

		/**
		 * @property {number} progress
		 */
		this._exp = this._exp || 0;
		this._length = this._length || 100;

		// default require for dungeon is player-level.
		this.require =  this.require || this.levelTest;

		this.dist = ( this.dist === undefined || this.dist === null ) ? getDist(this.level) : this.dist;
		//this.addRequire( 'dist', this.dist );

		if ( this._encs == null ) this._encs = [];

		//console.log(this.id + ' dist: ' + this.dist );

		if ( this.need == null ) this.need = this.distTest;

	}

	/**
	 * Get next enemy.
	 * @returns {string|Encounter|Object}
	 */
	getEnc() {
		return this._encs[ Math.floor( Math.random()*this._encs.length ) ];
	}

	/**
	 * Catch complete() to prevent default action. ugly.
	*/
	complete() {
	}

	lockReq() { return false;}
	distTest( g, self) {
		return g.dist >= self.dist;
	}

	levelTest(g, self) {
		return g.player.level >= (self.level-1);
	}
}

/***/ }),

/***/ "./src/items/monster.js":
/*!******************************!*\
  !*** ./src/items/monster.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Monster; });
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");




const defaults = {

	level:1,
	buy:(it)=>new _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"](200*( it.level||1) ),
	locked:false

};

class Monster extends _gdata__WEBPACK_IMPORTED_MODULE_0__["default"] {

	get defaults() { return defaults; }

	get isProto() {return true; }

	toJSON() {
		if ( this.value > 0 ) return { value:this.value};
		else return undefined;
	}

	constructor(vars=null) {

		super(vars, defaults );

		this.type = 'monster';

		this.hp = this.hp || (2*this.level);
		this.speed = this.speed || this.level;
		this.tohit = this.tohit || this.level;
		this.defense = ( this.defense === null || this.defense === undefined )
								? this.level : this.defense;


	}

	maxed() { return false; }

}

/***/ }),

/***/ "./src/items/potion.js":
/*!*****************************!*\
  !*** ./src/items/potion.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Potion; });
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");


const defaults = {

	level:1,
	repeat:true,
	stack:true

};

/**
 * This is actually only the prototype for a potion.
 * Individual potions are instanced from this data.
 */
class Potion extends _gdata__WEBPACK_IMPORTED_MODULE_0__["default"] {

	get isProto() {return true; }

	constructor(vars=null ) {

		super(vars, defaults );

		this.require = this.require||this.unlockTest;

	}

	unlockTest( g, i) {
		return g.herbalism.level >=i.level;
	}

}

/***/ }),

/***/ "./src/items/protoItem.js":
/*!********************************!*\
  !*** ./src/items/protoItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProtoItem; });
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");



/**
 * Generic prototype for a wearable item.
 */
class ProtoItem extends _gdata__WEBPACK_IMPORTED_MODULE_0__["default"] {

	toJSON() {

		let data = this.excludeJSON( ['kind'] );
		return data ? data : undefined;

	}

	get isProto() { return true; }

	get material() { return this._material; }
	set material(v) { this._material=v;}

	/**
	 * @property {} armor
	 */
	get armor(){ return this._armor; }
	set armor(v) { this._armor = v; }

	get attack() { return this._attack; }
	set attack(v) { this._attack = v; }

	/**
	 * @property {string} kind - subtype of wearable.
	 */
	get kind() { return this._kind; }
	set kind(v) { this._kind = v; }

	constructor(vars=null){

		super(vars);

		this.level = this.level || 1;

		if ( this.attack ) {
			if ( !this.attack.damage ) this.attack.damage = this.attack.dmg;
		}


	}

}

/***/ }),

/***/ "./src/items/resource.js":
/*!*******************************!*\
  !*** ./src/items/resource.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resource; });
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");



class Resource extends _gdata__WEBPACK_IMPORTED_MODULE_1__["default"] {

	get require() {
		return super.require ||
		( !this._locked ? null : ()=>this.positive() );
	}
	set require(v){super.require = v;}

	/**
	 * @property {number} current - identical to value except uses floor of values.
	 */
	get current() { return this.unit ? Math.floor(this.value) : this._value; }

	/**
	 * @property {number} value
	 */
	get value() { return this._value; }
	set value(v) {

		if ( this._max && v > this._max ) {

			if ( v < this._value ) this._value = v;

			//
			else this._value = Math.max( this._max.value, this._value );

		} else this._value = (v >= 0 ) ? v :0;

	}

	/**
	 * @property {number} delta - last change in value.
	 */
	get delta() { return this._delta; }
	set delta(v) { this._delta = v; }

	/**
	 * @property {Stat} max - maximum resource value.
	 */
	get max() { return this._max; }
	set max(v) {

		if ( this._max === null || this._max === undefined ) {

			this._max = new _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"](v,true);

		} else {

			if ( v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"] ) this._max = v;
			else this._max.base = v;

		}

	}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		//if ( this._value != vars.val ) console.log( 'this.valu: ' + this._value );

		this._value = this._value || 0;

		if ( this.repeat !== false ) this.repeat = true;

		/**
		 * @property {boolean} unit - true if current value is reported in integer amounts.
		 */
		if ( this.unit === null || this.unit === undefined ) this.unit = true;

		if ( this._rate === null || this._rate === undefined ) this._rate = new _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"](0);

		this._lastValue = this._value;

		this._type = this._type || 'resource';

		this._delta = 0;

	}

	/**
	 * @returns {boolean} true if an unlocked item is at maximum value.
	 */
	maxed() {

		return this.max ? (this._value >= this.max) : false;

	}


	/**
	 * Not currently used any more.
	 * @param {} dt
	 */
	update( dt ) {

		if ( this._rate.value ) {

			let v = this._value + this._rate.value*dt;

			if ( this._max && v > this._max.value ) v = this._max.value;
			else if ( v < 0 ) v = 0;

			this._delta = v - this._lastValue;

			this._value = this._lastValue = v;

		} else this._delta = 0;

	}

	/**
	 * @returns {boolean} true if resource value is positive.
	 */
	positive(){
		return (this._value > 0 || (this._rate.value>0&&( (!this.max) ||this.max.value>0) ) );
	}

}

/***/ }),

/***/ "./src/items/revStat.js":
/*!******************************!*\
  !*** ./src/items/revStat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RevStat; });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./src/items/resource.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");



/**
 * A reversed Resource is 'filled' at 0 and bad at max.
 */
class RevStat extends _resource__WEBPACK_IMPORTED_MODULE_0__["default"] {

	constructor( vars ){

		super(vars);

		if ( !this._max ) this.max = 0;
		this._value = this._value || 0;

	}

	/**
	 * Determine whether the item is filled relative to a filling rate.
	 * if the filling rate + natural item rate can't fill the item
	 * it is considered filled to avoid getting stuck.
	 * @param {number} rate
	 */
	filled( rate=0 ) { return this._value <= 0 || (this.rate && (this.rate+rate) >=0); }

	maxed() { return this._value <= 0; }

}

/***/ }),

/***/ "./src/items/skill.js":
/*!****************************!*\
  !*** ./src/items/skill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skill; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/items/action.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");



const EXP_RATIO = 0.35;

class Skill extends _action__WEBPACK_IMPORTED_MODULE_0__["default"] {

	toJSON(){

		let data = super.toJSON();

		// for skills, level is always equal to value.
		data.level = undefined;

		return data;

	}

	get exp() { return super.exp; }
	set exp(v) {
		if ( this.locked || this.maxed() ) return;
		super.exp = v;
	}

	/**
	 * @deprecated - deprecation intended.
	 */
	get level() { return this.value; }
	set level(v) { this.value = v; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null){

		super(vars);

		this.type = 'skill';
		this.length = this.length || 50;

		this._exp = this._exp || 0;

		/** @compatibility */
		if ( this.value >= 1 ){

			let len = (vars.template.length || 50)*Math.pow( (1+EXP_RATIO), this.value );
			if ( this.length > len ) {
				this.length = len;
			}

		}


		this.buy = this.buy || { "sp":1 };

		if ( !this.value) this.value = 0;
		this.rate = this.rate || new _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"](0.5);
		this.max = this.max || new _values_stat__WEBPACK_IMPORTED_MODULE_1__["default"](5);

	}

	exec() {

		if ( this.value > Math.floor(this._max.value) ) {
			this.value = Math.floor(this.max.value);
			return;
		}

		this._length += this._length*EXP_RATIO;

		this.dirty = true;

		super.exec();

	}

}

/***/ }),

/***/ "./src/items/spell.js":
/*!****************************!*\
  !*** ./src/items/spell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spell; });
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");
/* harmony import */ var _chars_attack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chars/attack */ "./src/chars/attack.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/items/action.js");




class Spell extends _action__WEBPACK_IMPORTED_MODULE_2__["default"] {

	toJSON(){

		let data = super.toJSON();

		if ( this.owned ) data.owned = this.owned;
		if ( this.timer > 0 ) data.timer = this.timer;

		return data;
	}

	constructor(vars=null) {

		super(vars);

		this.timer = this.timer || 0;

		this.repeat = true;
		this.type = 'spell';
		this.level = this.level || 1;

		this.owned = this.owned || false;
		if ( !this.owned ) {

			if ( !this.buy ) this.buy = {};
			if ( !this.buy.arcana && this.level > 1 ) this.buy.arcana = this.level - 1;

		}

		if ( this.attack ) {

			if ( !(this.attack instanceof _chars_attack__WEBPACK_IMPORTED_MODULE_1__["default"]) ) this.attack = new _chars_attack__WEBPACK_IMPORTED_MODULE_1__["default"](this.attack);
			this.attack.name = this.name;
			if (!this.attack.kind) this.attack.kind = this.school;

		}


		if ( this.locked ) this.addRequire( this.spellRequire );
		if ( this.school ) this.addRequire( this.school );

	}

	/**
	 * Default require function for spells.
	 * @param {Object} g - items
	 */
	spellRequire( g, self ) {
		return ( g.player.level >= 2*self.level );
	}

};

/***/ }),

/***/ "./src/items/statData.js":
/*!*******************************!*\
  !*** ./src/items/statData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatData; });
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _gdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gdata */ "./src/items/gdata.js");



/**
 * Like a resource but a single Stat value with no max, that can be directly modified.
 * Resources can't be modified by stats because they represent progress vs a max.
 */
class StatData extends _gdata__WEBPACK_IMPORTED_MODULE_1__["default"] {

	/**
	 * @property {number} current - identical to value except uses floor of values.
	 */
	get current() { return this.unit ? Math.floor(this.value) : this._value; }

	/**
	 * @property {number} value
	 */
	get value() { return this._value; }
	set value(v) {

		if ( v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"] ) this._value = v;
		else if ( this._value ) {

			this._value.base = (typeof v === 'object') ? v.value : v;

		} else this._value = new _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"](v);

	}
	valueOf(){ return this._value.value; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		this.value = new _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"]( this._value || 0 );

		/**
		 * @property {boolean} unit - true if current value is reported in integer amounts.
		 */
		if ( this.unit === null || this.unit === undefined ) this.unit = true;

		if ( this._rate === null || this.rate === undefined ) this._rate = new _values_stat__WEBPACK_IMPORTED_MODULE_0__["default"](0);

		this._type = this._type || 'resource';

	}

	/**
	 * @returns {boolean} true if an unlocked item is at maximum value.
	 */
	maxed() {
		return false;
	}


	/**
	 * Not currently used any more.
	 * @param {} dt
	 */
	update( dt ) {

		if ( this._rate.value ) {

			let v = this._value + this._rate.value*dt;
			this.value = v;

		}

	}

}

/***/ }),

/***/ "./src/items/zerosum.js":
/*!******************************!*\
  !*** ./src/items/zerosum.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZeroSum; });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./src/items/resource.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");



/**
 * A Zero-sum resource starts filled at its maximum value.
 * When the resource is expended, it cannot be renewed
 * except by removing the items which used the resource, or
 * further increasing the maximum resource value.
 *
 * Contrast with normal resources like gold, hp, which
 * can be constantly replenished.
 */
class ZeroSum extends _resource__WEBPACK_IMPORTED_MODULE_0__["default"] {

	toJSON(){

		let v = super.toJSON();
		v.value = undefined;
		v.used = this._used;

		return v;

	}

	valueOf() { return this.value; }

	/**
	 * Adding value => more space left.
	 * Removing value => increasing space used.
	 */
	set value(v){

		if ( this.max !== null && this.max !== undefined ) {

			this._used = this.max.value - v;
			super.value = v;

		}
		//console.log( 'setval: ' + (super.value === this._value) );

	}
	get value(){

		//console.log( 'getval: ' + (super.value === this._value) );

		return this.max.value - this._used;
	}

	get used() { return this._used; }
	set used(v) {
		this._used = v; }

	/**
	 * @property {number} unused - amount of resource still available.
	 */
	get unused() { return this.max.value - this._value; }

	constructor( vars ){

		super(vars);

		this._used = this._used || ( this.max.value - super.value ) || 0;

	}

}

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! exports provided: LogItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogItem", function() { return LogItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
class LogItem {

	constructor( title='', text='', type=''){

		this.text = text;
		this.title = title;

		/**
	 	* @var {string} type - message type.
	 	*/
		this.type = type;

	}

}

class Log {

	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars );

		/**
		 * @property {LogItem[]} items
		 */
		this.items = this.items || [];

		/**
		 * @property {number} maxItems
		 */
		this.maxItems = this.maxItems || 100;

	}

	clear() {
		this.items.splice( 0, this.items.length );
	}

	log( title='', text='', type='event' ) {

		this.items.push( new LogItem(title, text, type ) );
		if ( this.items.length >= this.maxItems+50 ) {
			this.items.splice( 0, 50 );
		}

	}

	logItem(it) {

		this.items.push( it);
		if ( this.items.length >= this.maxItems+50 ) {
			this.items.splice( 0, 50 );
		}

	}

}

/***/ }),

/***/ "./src/modules/randoms.js":
/*!********************************!*\
  !*** ./src/modules/randoms.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");




/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {GEvent[]} randoms - unlocked random events
	 * that can proc.
	 */
	randoms:[],

	/**
	 * update for checking random events.
	 */
	update(){

		for( let i = this.randoms.length-1; i>=0; i-- ) {

			var e = this.randoms[i];
			if ( e.disabled === true ) {

				Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["quickSplice"])( this.randoms, i );

			} else if ( 6000*Math.random() < e.rand ) {

				_game__WEBPACK_IMPORTED_MODULE_0__["default"].doEvent(e);

			}


		}

	},

	/**
	 *
	 * @param {GEvent} evt
	 */
	add( evt ) {

		this.randoms.push( evt );

	}

});

/***/ }),

/***/ "./src/modules/runner.js":
/*!*******************************!*\
  !*** ./src/modules/runner.js ***!
  \*******************************/
/*! exports provided: LOCALE, DUNGEON, REST_TAG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE", function() { return LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUNGEON", function() { return DUNGEON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REST_TAG", function() { return REST_TAG; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/* harmony import */ var _items_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/base */ "./src/items/base.js");
/* harmony import */ var _composites_runnable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../composites/runnable */ "./src/composites/runnable.js");







const REST_TAG = 't_rest';
const DUNGEON = 'dungeon';
const LOCALE = 'locale';



/**
 * Tracks running/perpetual actions.
 */
const Runner = {


	toJSON() {

		return {
			max:this.max,
			waiting:this.waiting.map(v=> v instanceof _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"] ? v : v.id),
			actives:this.actives.map(v=> v instanceof _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"] ? v : v.id),

			/**
			 * @property {Runnable[]} runnables - running combinations of objects.
			 */
			//runnables:this.runnables
		};

	},

	/**
	 * @todo : Messy for Focus skill.
	 */
	get exp() {
		for( let i = this.actives.length-1; i>= 0;i-- ) {
			var a = this.actives[i];
			if ( a.type === 'skill' ) return a.exp;
		}
		return 0;
	},

	set exp(v) {

		for( let i = this.actives.length-1; i>= 0;i-- ) {

			var a = this.actives[i];
			if ( a.type === 'skill' ) {
				a.exp = v;
				return;
			}

		}
	},

	/**
	 * Used for cheat.
	 */
	autoProgress(){

		for( let i = 0; i < this.actives.length; i ++ ) {
			var a = this.actives[i];

			if ( a.length ) a.exp = a.length - 0.01;

		}

	},

	/**
	 * @item compat.
	 */
	get type() { return 'runner'; },
	hasTag() { return false; },

	/**
	 * @property {number} running - number currently running.
	 */
	get running(){return this.actives.length; },

	/**
	 * @property {number} available - number of available run slots.
	 */
	get free(){
		return this.max.value - this.actives.length;
	},

	get max() { return this._max; },
	set max(v) {

		if ( v instanceof _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"] ) {

			this._max =v;

		} else if ( !this._max ) {

			this._max = new _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"](v,true);
		} else if ( typeof v === 'number' ) {


			this._max.base = v;

		} else this._max = new _values_stat__WEBPACK_IMPORTED_MODULE_3__["default"](v,true);

	},

	/**
	 * @property {Runnable[]} runnables - use-with object combinations.
	 */
	//runnables:null,

	/**
	 * @property {Action[]} actives - Actively running tasks.
	 */
	actives:null,

	/**
	 * @property {Action[]} waiting - actions waiting to run once rest is complete.
	 */
	waiting:null,

		/**
	 * revive data from save.
	 * @param {GameState} gs
	 */
	revive( gs ) {

		/**
		 * Only one object. page reloads, etc.
		 */
		this.waiting = null;
		this.actives = null;
		this._max = null;

		let data = gs.getData('runner');
		if ( data ) {

			this.waiting = data.waiting;
			this.actives = data.actives;
			this.max = data.max;
		}

		this.max = this._max || 1;

		this.waiting = this.reviveList( this.waiting, gs, false );

		if ( this.waiting.length > this.max ) {
			this.waiting = this.waiting.slice( this.waiting.length - this.max );
		}

		this.actives = this.reviveList( this.actives, gs, true );

		_events__WEBPACK_IMPORTED_MODULE_2__["default"].add( _events__WEBPACK_IMPORTED_MODULE_2__["ACT_DONE"], this.actDone, this );
		_events__WEBPACK_IMPORTED_MODULE_2__["default"].add( _events__WEBPACK_IMPORTED_MODULE_2__["HALT_ACT"], this.haltAction, this );
		_events__WEBPACK_IMPORTED_MODULE_2__["default"].add( _events__WEBPACK_IMPORTED_MODULE_2__["ACT_BLOCKED"], this.actBlocked, this );
		_events__WEBPACK_IMPORTED_MODULE_2__["default"].add( _events__WEBPACK_IMPORTED_MODULE_2__["EXP_MAX"], this.expMax, this );

	},

	/**
	 * Item reached max exp value.
	 * @param {*} it
	 */
	expMax( it ) {
		//console.log('EXP. COMPLETE: ' + it.id );
		if ( it.complete && (typeof it.complete) === 'function') it.complete();

	},

	/**
	 * Revive a list, removing Runnable elements that can't revive (missing items, etc.)
	 * @param {object[]} list
	 * @param {GameState} gs
	 * @param {boolean} [running=false] - whether the items in list are running.
	 */
	reviveList( list, gs, running=false ) {

		if ( !list ) return [];

		for( let i = list.length-1; i >= 0; i-- ) {

			var a = list[i] = this.reviveAct( list[i], gs, running);

			if ( a == null ) list.splice(a,1);

		}

		return list;

	},

	reviveAct( a, gs, running=false ) {

		if (!a) return;

		if ( typeof a === 'string' ) a = gs.getData( a);
		else if ( typeof a === 'object') {

			a = new _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"]( a );
			if ( typeof a.revive === 'function' ) a.revive(gs);
			if ( a.target == null || a.item == null ) return null;

		}
		if ( a.type === DUNGEON ) return gs.raid;

		a.running=running;

		return a;

	},

	/**
	 * setAction of two items combined.
	 * Before using an item and target, check if any existing Runnable matches.
	 * If no match, create a Runnable.
	 * @param {*} it
	 * @param {*} targ
	 */
	useWith( it, targ ) {

		let id = it.id;
		let t = targ.id;

		let p = (v)=>{
			return (v instanceof _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"])&&(id===v.item.id && t === v.target.id );
		};

		let run = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["findRemove"])( this.waiting, p);

		if ( !run ) {

			//run = findRemove( this.runnables, p );

			if ( !run ) {
				console.log('CREATING NEW RUNNABLE');
				run = new _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"]( it, targ );
			}

		}
		this.setAction( run );

	},

	/**
	 * Toggle running state of action.
	 * @public
	 * @param {Action} a
	 */
	toggleAct( a ) {

		let ind = this.actives.indexOf(a);

		if ( ind >= 0 ) {

			this.stopAction(ind, false);


		} else {

			this.setAction(a);

		}


	},

	/**
	 * Add an action absolutely, removing a running action if necessary.
	 * @public
	 * @param {*} a
	 */
	setAction(a) {

		if ( !a) return;

		if ( a.cost && (a.exp === 0) ) {
			console.warn('PAY FIRST ACTION COST');
			_game__WEBPACK_IMPORTED_MODULE_0__["default"].payCost( a.cost);
		}

		if ( !this.has(a) ) {

			// free space for action. actions.length is a double check.
			if ( this.actives.length > 0 && this.free <= 0 ) {

				let i = 0;

				console.log('Force Stop: ' + this.actives[i].id);
				let cur = this.actives[i];
				this.stopAction( i, false );

				if ( (cur instanceof _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"]) ){
					console.log('WAITING RUNNABLE');
					this.addWait(cur);
				}

			}

			// action already in running list.
			_events__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch( _events__WEBPACK_IMPORTED_MODULE_2__["ACT_CHANGED"] );
			this.runAction(a);

		}



	},

	/**
	 *
	 * @param {Action} act
	 */
	actBlocked( act, resume=true ) {

		this.stopAction( act, false );
		if ( act.hasTag(REST_TAG) ) {

			this.tryResume();

		} else {
			//if( resume) console.log('ADDING NEW WAIT: ' + act.id );
			if ( resume ) this.addWait(act);
			this.doRest();
		}

	},

	/**
	 * UNIQUE ACCESS POINT for removing active action.
	 * @param {number|Action} i
	 * @param {boolean} tryResume - whether can attempt to resume another action.
	 */
	stopAction( i, tryResume=true ){

		if ( typeof i !== 'number') {
			i = this.actives.indexOf(i);
			if ( i < 0 ) return;
		}

		let a = this.actives[i];
		//console.log('STOPPING: ' + a.name );

		a.running = false;
		this.actives.splice(i,1);

		if ( tryResume && a.hasTag(REST_TAG) ){
			this.tryResume();
		}

	},

	/**
	 * Attempt to add an action, while avoiding any conflicting action types.
	 * @public
	 * @param {*} a
	 */
	tryAdd( a ) {

		if ( !this.free || this.hasType(a) ) return false;

		this.runAction(a);

		return true;

	},

	addWait( a ){

		if ( a.hasTag(REST_TAG) ) return;

		//console.log('adding wait: ' + a.id );
		this.waiting.push(a);

		let len = this.waiting.length - this.max.value;
		let i = 0;

		while ( len > 0 ) {

			a = this.waiting[i];
			if ( !(a instanceof _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"] ) ) {
				this.waiting.splice( i, 1 );
			} else i++;
			len--;

		}

	},

	haltAction( act ) {

		if ( act instanceof _composites_runnable__WEBPACK_IMPORTED_MODULE_5__["default"] ) this.addWait(act);
		this.stopAction( act );

	},

	/**
	 * Action is done, but could be perpetual/ongoing.
	 * Attempt to repay cost and keep action.
	 * @param {*} act
	 */
	actDone( act, repeatable=true ){

		if ( repeatable ) {

			if ( _game__WEBPACK_IMPORTED_MODULE_0__["default"].canRun(act) ) {

				this.setAction(act);

			} else {

				this.stopAction(act);
				this.addWait(act);

				// attempt to resume any waiting actions.
				this.tryResume();
				this.tryAdd( _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.restAction );

			}

		} else {

			this.stopAction( act );

			// attempt to resume any waiting actions.
			this.tryResume();
			this.tryAdd( _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.restAction );

		}

	},

	clearWaits() {
		this.waiting.splice(0,this.waiting.length);
	},

	/**
	 * Attempt to resume any waiting actions.
	 */
	tryResume() {

		let avail = this.free;

		for( let i = this.waiting.length-1; i >= 0; i-- ) {

			var a = this.waiting[i];

			if ( a == null ) {

				Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["quickSplice"])(this.waiting,i);

			} else if ( _game__WEBPACK_IMPORTED_MODULE_0__["default"].canRun(a) && this.tryAdd(a) ) {

				Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["quickSplice"])(this.waiting,i);
				if ( --avail <= 0 ) return;

			}

		}

		//this.tryAdd( Game.state.restAction );

	},

	update(dt) {

		for( let i = this.actives.length-1; i>= 0; i-- ) {

			this.doAction( this.actives[i], dt );

		}

	},

	/**
	 * Force-add a rest action.
	 * @public
	 */
	doRest(){
		this.tryAdd( _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.restAction );
	},

	/**
	 * Update individual action. Called during update()
	 * @param {Action} a
	 * @param {number} dt
	 * @returns {boolean} false if action should be halted.
	 */
	doAction(a, dt) {

		if ( !a.canUse() ) {
			this.stopAction(a);
		}

		if ( a.run ) {

			if ( !_game__WEBPACK_IMPORTED_MODULE_0__["default"].canPay( a.run, dt ) ) {
				this.stopAction(a);
				console.log('ADD WAIT: ' + a.id );
				this.addWait(a);
				this.tryAdd( _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.restAction );
				return false;
			}
			_game__WEBPACK_IMPORTED_MODULE_0__["default"].payCost( a.run, dt );

		}

		if ( a.fill && _game__WEBPACK_IMPORTED_MODULE_0__["default"].filled( a.fill, a ) ) {

			this.actBlocked(a);

		} else if ( a.update ) {

			a.update(dt);
			if ( a.effect) _game__WEBPACK_IMPORTED_MODULE_0__["default"].applyEffect( a.effect, dt );
			a.dirty = true;

		}

	},

	/**
	 * UNIQUE ACCESS POINT for pushing action active.
	 * @param {*} a
	 */
	runAction(a) {
		a.running=true;
		this.actives.push(a);
	},

	/**
	 * Tests if exact action is running.
	 * @param {Action} a
	 * @returns {boolean}
	 */
	has(a) {
		return this.actives.includes(a);
	},

	/**
	 * Get index of a running action matching the type of the given action.
	 * This is used to replace actions in progress.
	 * @param {Action|Runnable} it
	 * @returns {number}
	 */
	typeIndex( it ) {

		let t = it.type;

		for( let i = this.actives.length-1; i>= 0; i-- ) {

			var a = this.actives[i];
			if ( a.type === t && a != it ) return i;

		}

		return -1;

	},

	/**
	 * Tests if the runner already has a similar action in progress.
	 * Only actives are tested. Waiting action will not resume if
	 * a new active takes its place.
	 * @param {Action} a
	 */
	hasType( it ) {

		let t = typeof it ==='string'? it : it.type;

		for( let i = this.actives.length-1; i>= 0; i-- ) {

			var a = this.actives[i];
			if ( a.type === t ) return true;

		}

		return false;

	}


};

/**
 * applyMods() etc.
 */
Object(_items_base__WEBPACK_IMPORTED_MODULE_4__["mergeClass"])( Runner, _items_base__WEBPACK_IMPORTED_MODULE_4__["default"] );

/* harmony default export */ __webpack_exports__["default"] = (Runner);


/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {Object} vars - variables saved to browser.
	 */
	vars: {

		autoSave:true,
		saveTime:30,
		darkMode:false,
		compactMode:false

	},

	load() {

		let str = window.localStorage.getItem( 'gameSettings');

		if ( str ) {

			let data = JSON.parse( str );
			for ( let p in data ) {
				this.vars[p] = data[p];
			}

		}

	},

	save(){

		let store = window.localStorage;
		if ( store ) {

			let json = JSON.stringify( this.vars );
			store.setItem('gameSettings', json );

		}

	}

});

/***/ }),

/***/ "./src/techTree.js":
/*!*************************!*\
  !*** ./src/techTree.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TechTree; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


/**
 * @const {RegExp} FuncRE - regular expression to find tree relationships
 * in requirement/need functions.
 */
const FuncRE = /[^\.]\b\w+\.((?:\w|\.)+\b)/gi;

class TechTree {

	/**
	 *
	 * @param {Object} [vars=null]
	 */
	constructor( items ) {

		this.items = items;

		/**
		 * @property {Object.<string,Array>} unlocks - maps item id to target Items
		 * the id Item could potentially unlock.
		 */
		this.unlocks = {};

		for( let p in this.items ) {

			this.mapTree( this.items[p]);

		}

	}

	/**
	 * Mark all Items which might potentially unlock this item.
	 * @param {Item} item
	 */
	mapTree( item ) {

		if ( !item.locked || item.disabled ) return;

		if ( item.require ) this.markLinks( item, item.require );
		if ( item.need ) this.markLinks( item, item.need );

	}

	/**
	 * Mark the links that unlock item.
	 * @param {*} item
	 * @param {*} need
	 */
	markLinks( item, need ) {

		let type = typeof need;

		if ( type === 'string') {

			this.markUnlocker( need, item );

		} else if ( type === 'function' ) {

			this.markFunc( item, need );

		} else if (  Array.isArray(need) ) return need.forEach( v=>this.markLinks(item,v), this );

	}

	/**
	 * Mark unlock links from a requirement function.
	 * @param {Item} item - item being unlocked.
	 * @param {function} func - function testing if item can be unlocked.
	 */
	markFunc( item, func ) {

		let text = func.toString();
		let results;

		while ( results = FuncRE.exec( text )) {

			//var varPath = results[1];
			//console.log( item.id + 'require: ' + varPath );

			let sub = results[1].split('.')[0];
			if ( sub === 'mod' || sub === 'slot' ) continue;
			this.markUnlocker( sub, item );

		}
		if ( text.includes('this') ) this.markUnlocker( item.id, item );

	}

	/**
	 * Map src as an unlocker of item.
	 * @param {string} src
	 * @param {Item} item
	 */
	markUnlocker( src, item ) {

		if ( !src) return;
		let it = this.items[src];

		if ( it === undefined ) {
			it = _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.getTagList( src );
			if ( it ) it.forEach( v=>this.markUnlocker(v.id,item) );
			//else console.warn('unlocker not found: ' + src );
			return;
		}

		let map = this.unlocks[src];
		if ( map === undefined ) this.unlocks[src] = map = {};

		map[item.id] = true;

	}

	/**
	 * Call when some variable of src Item changes.
	 * Test unlocks on all variables linked by a possible unlock chain.
	 * @param {string} src
	 */
	changed( src ){

		let links = this.unlocks[src];
		if ( links === undefined) return;

		let it;
		let count = 0;
		for( let p in links ) {

			it = this.items[p];
			if ( !it ) {
				console.warn('MISSING UNLOCK LINK: ' + p );
			} else if ( it.locked === false || it.disabled === true || _game__WEBPACK_IMPORTED_MODULE_0__["default"].tryUnlock(it) ) {

				// remove unlock link.
				links[p] = undefined;

			} else count++;

		}
		if ( count === 0 ) this.unlocks[src] = undefined;

	}

}

/***/ }),

/***/ "./src/ui/actionsView.vue":
/*!********************************!*\
  !*** ./src/ui/actionsView.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionsView_vue_vue_type_template_id_5043b240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionsView.vue?vue&type=template&id=5043b240&scoped=true& */ "./src/ui/actionsView.vue?vue&type=template&id=5043b240&scoped=true&");
/* harmony import */ var _actionsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionsView.vue?vue&type=script&lang=js& */ "./src/ui/actionsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _actionsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _actionsView_vue_vue_type_template_id_5043b240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _actionsView_vue_vue_type_template_id_5043b240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5043b240",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/actionsView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/actionsView.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/ui/actionsView.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_actionsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./actionsView.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/actionsView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_actionsView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/actionsView.vue?vue&type=template&id=5043b240&scoped=true&":
/*!***************************************************************************!*\
  !*** ./src/ui/actionsView.vue?vue&type=template&id=5043b240&scoped=true& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_actionsView_vue_vue_type_template_id_5043b240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./actionsView.vue?vue&type=template&id=5043b240&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/actionsView.vue?vue&type=template&id=5043b240&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_actionsView_vue_vue_type_template_id_5043b240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_actionsView_vue_vue_type_template_id_5043b240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/adventure.vue":
/*!******************************!*\
  !*** ./src/ui/adventure.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adventure_vue_vue_type_template_id_d27ac1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adventure.vue?vue&type=template&id=d27ac1a4&scoped=true& */ "./src/ui/adventure.vue?vue&type=template&id=d27ac1a4&scoped=true&");
/* harmony import */ var _adventure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adventure.vue?vue&type=script&lang=js& */ "./src/ui/adventure.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _adventure_vue_vue_type_style_index_0_id_d27ac1a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css& */ "./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adventure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adventure_vue_vue_type_template_id_d27ac1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adventure_vue_vue_type_template_id_d27ac1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d27ac1a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/adventure.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/adventure.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/ui/adventure.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./adventure.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_style_index_0_id_d27ac1a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=style&index=0&id=d27ac1a4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_style_index_0_id_d27ac1a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_style_index_0_id_d27ac1a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_style_index_0_id_d27ac1a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_style_index_0_id_d27ac1a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_style_index_0_id_d27ac1a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/adventure.vue?vue&type=template&id=d27ac1a4&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/ui/adventure.vue?vue&type=template&id=d27ac1a4&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_template_id_d27ac1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./adventure.vue?vue&type=template&id=d27ac1a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/adventure.vue?vue&type=template&id=d27ac1a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_template_id_d27ac1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adventure_vue_vue_type_template_id_d27ac1a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/confirm.vue":
/*!***************************************!*\
  !*** ./src/ui/components/confirm.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirm_vue_vue_type_template_id_193f0119_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm.vue?vue&type=template&id=193f0119&scoped=true& */ "./src/ui/components/confirm.vue?vue&type=template&id=193f0119&scoped=true&");
/* harmony import */ var _confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.vue?vue&type=script&lang=js& */ "./src/ui/components/confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _confirm_vue_vue_type_style_index_0_id_193f0119_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css& */ "./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _confirm_vue_vue_type_template_id_193f0119_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _confirm_vue_vue_type_template_id_193f0119_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "193f0119",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/confirm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/confirm.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/ui/components/confirm.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./confirm.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_id_193f0119_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=style&index=0&id=193f0119&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_id_193f0119_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_id_193f0119_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_id_193f0119_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_id_193f0119_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_style_index_0_id_193f0119_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/confirm.vue?vue&type=template&id=193f0119&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/ui/components/confirm.vue?vue&type=template&id=193f0119&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_template_id_193f0119_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./confirm.vue?vue&type=template&id=193f0119&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/confirm.vue?vue&type=template&id=193f0119&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_template_id_193f0119_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_vue_vue_type_template_id_193f0119_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/filterbox.vue":
/*!*****************************************!*\
  !*** ./src/ui/components/filterbox.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& */ "./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&");
/* harmony import */ var _filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterbox.vue?vue&type=script&lang=js& */ "./src/ui/components/filterbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& */ "./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d0e0bec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/filterbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/filterbox.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/ui/components/filterbox.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/menu.vue":
/*!************************************!*\
  !*** ./src/ui/components/menu.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_636f3856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=636f3856& */ "./src/ui/components/menu.vue?vue&type=template&id=636f3856&");
/* harmony import */ var _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js& */ "./src/ui/components/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_636f3856___WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_636f3856___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/menu.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/ui/components/menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/menu.vue?vue&type=template&id=636f3856&":
/*!*******************************************************************!*\
  !*** ./src/ui/components/menu.vue?vue&type=template&id=636f3856& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_636f3856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=636f3856& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/menu.vue?vue&type=template&id=636f3856&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_636f3856___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_636f3856___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/popups.js":
/*!*************************************!*\
  !*** ./src/ui/components/popups.js ***!
  \*************************************/
/*! exports provided: center, positionAt, getChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionAt", function() { return positionAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChild", function() { return getChild; });
const PADDING = 20;

/**
 *
 * @param {*} elm
 * @param {DOMRect} targRect
 */
const getTop = ( elm, targRect) => {

	let y = targRect.top - 40;

	return ( y < PADDING ) ? PADDING : (

		y + elm.offsetHeight > ( window.innerHeight - PADDING) ?
			(window.innerHeight - PADDING - elm.offsetHeight) : y

	);

}

const center = elm => {

	let style = elm.style;
	style.left = (( window.innerWidth - elm.offsetWidth )/2) + 'px'

};

/**
 *
 * @param {HTMLElement} elm - element being positioned
 * @param {HTMLElement} target - target being rolled over.
 */
const positionAt = (elm, target) =>{

	let style = elm.style;
	let rect = target.getBoundingClientRect();
	//let myBox = this.$el.getBoundingClientRect();

	let left = rect.left;
	if ( left < window.innerWidth/2 ) {

			//	console.log('left: ' + left);
		style['left'] = ( left + target.offsetWidth + 32 ) + 'px';

		} else {

		//console.log('width: ' + myBox.width + ' , ' + myBox.right );
		style['left'] = ( left- elm.offsetWidth - 32 ) + 'px';
	}

	style.top = getTop( elm, rect ) + 'px';

};

const getChild = (targ) => {

	/**
	 * Give priority to buttons so popup wont be on click.
	 */
	if ( targ.children ) {

		let c = targ.children[0];

		for( let t of targ.children ) {

		}
	}

	return targ;

};

/***/ }),

/***/ "./src/ui/components/progbar.vue":
/*!***************************************!*\
  !*** ./src/ui/components/progbar.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progbar_vue_vue_type_template_id_1a530f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progbar.vue?vue&type=template&id=1a530f5c& */ "./src/ui/components/progbar.vue?vue&type=template&id=1a530f5c&");
/* harmony import */ var _progbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progbar.vue?vue&type=script&lang=js& */ "./src/ui/components/progbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _progbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progbar.vue?vue&type=style&index=0&lang=css& */ "./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _progbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _progbar_vue_vue_type_template_id_1a530f5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _progbar_vue_vue_type_template_id_1a530f5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/progbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/progbar.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/ui/components/progbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./progbar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./progbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/progbar.vue?vue&type=template&id=1a530f5c&":
/*!**********************************************************************!*\
  !*** ./src/ui/components/progbar.vue?vue&type=template&id=1a530f5c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_template_id_1a530f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./progbar.vue?vue&type=template&id=1a530f5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/progbar.vue?vue&type=template&id=1a530f5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_template_id_1a530f5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progbar_vue_vue_type_template_id_1a530f5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/warn.vue":
/*!************************************!*\
  !*** ./src/ui/components/warn.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warn_vue_vue_type_template_id_b5da6c06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn.vue?vue&type=template&id=b5da6c06&scoped=true& */ "./src/ui/components/warn.vue?vue&type=template&id=b5da6c06&scoped=true&");
/* harmony import */ var _warn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warn.vue?vue&type=script&lang=js& */ "./src/ui/components/warn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _warn_vue_vue_type_style_index_0_id_b5da6c06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css& */ "./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _warn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _warn_vue_vue_type_template_id_b5da6c06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _warn_vue_vue_type_template_id_b5da6c06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b5da6c06",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/warn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/warn.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/ui/components/warn.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./warn.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_style_index_0_id_b5da6c06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=style&index=0&id=b5da6c06&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_style_index_0_id_b5da6c06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_style_index_0_id_b5da6c06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_style_index_0_id_b5da6c06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_style_index_0_id_b5da6c06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_style_index_0_id_b5da6c06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/warn.vue?vue&type=template&id=b5da6c06&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/ui/components/warn.vue?vue&type=template&id=b5da6c06&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_template_id_b5da6c06_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./warn.vue?vue&type=template&id=b5da6c06&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/warn.vue?vue&type=template&id=b5da6c06&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_template_id_b5da6c06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warn_vue_vue_type_template_id_b5da6c06_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/dotView.vue":
/*!****************************!*\
  !*** ./src/ui/dotView.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dotView_vue_vue_type_template_id_7dcb4a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true& */ "./src/ui/dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true&");
/* harmony import */ var _dotView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dotView.vue?vue&type=script&lang=js& */ "./src/ui/dotView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dotView_vue_vue_type_style_index_0_id_7dcb4a2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css& */ "./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dotView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dotView_vue_vue_type_template_id_7dcb4a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dotView_vue_vue_type_template_id_7dcb4a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7dcb4a2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/dotView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/dotView.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/ui/dotView.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./dotView.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_style_index_0_id_7dcb4a2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=style&index=0&id=7dcb4a2c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_style_index_0_id_7dcb4a2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_style_index_0_id_7dcb4a2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_style_index_0_id_7dcb4a2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_style_index_0_id_7dcb4a2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_style_index_0_id_7dcb4a2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/ui/dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_template_id_7dcb4a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/dotView.vue?vue&type=template&id=7dcb4a2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_template_id_7dcb4a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dotView_vue_vue_type_template_id_7dcb4a2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/itemPopup.vue":
/*!******************************!*\
  !*** ./src/ui/itemPopup.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemPopup_vue_vue_type_template_id_4a3f5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true& */ "./src/ui/itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true&");
/* harmony import */ var _itemPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemPopup.vue?vue&type=script&lang=js& */ "./src/ui/itemPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _itemPopup_vue_vue_type_style_index_0_id_4a3f5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css& */ "./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _itemPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _itemPopup_vue_vue_type_template_id_4a3f5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _itemPopup_vue_vue_type_template_id_4a3f5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a3f5612",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/itemPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/itemPopup.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/ui/itemPopup.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./itemPopup.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_style_index_0_id_4a3f5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=style&index=0&id=4a3f5612&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_style_index_0_id_4a3f5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_style_index_0_id_4a3f5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_style_index_0_id_4a3f5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_style_index_0_id_4a3f5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_style_index_0_id_4a3f5612_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/ui/itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_template_id_4a3f5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/itemPopup.vue?vue&type=template&id=4a3f5612&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_template_id_4a3f5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_itemPopup_vue_vue_type_template_id_4a3f5612_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/items/attack.vue":
/*!*********************************!*\
  !*** ./src/ui/items/attack.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attack_vue_vue_type_template_id_50c6c96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attack.vue?vue&type=template&id=50c6c96e& */ "./src/ui/items/attack.vue?vue&type=template&id=50c6c96e&");
/* harmony import */ var _attack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attack.vue?vue&type=script&lang=js& */ "./src/ui/items/attack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _attack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attack_vue_vue_type_template_id_50c6c96e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attack_vue_vue_type_template_id_50c6c96e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/items/attack.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/items/attack.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/ui/items/attack.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_attack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./attack.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/attack.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_attack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/items/attack.vue?vue&type=template&id=50c6c96e&":
/*!****************************************************************!*\
  !*** ./src/ui/items/attack.vue?vue&type=template&id=50c6c96e& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attack_vue_vue_type_template_id_50c6c96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./attack.vue?vue&type=template&id=50c6c96e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/attack.vue?vue&type=template&id=50c6c96e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attack_vue_vue_type_template_id_50c6c96e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attack_vue_vue_type_template_id_50c6c96e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/items/combat.vue":
/*!*********************************!*\
  !*** ./src/ui/items/combat.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combat_vue_vue_type_template_id_35ac75f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combat.vue?vue&type=template&id=35ac75f5&scoped=true& */ "./src/ui/items/combat.vue?vue&type=template&id=35ac75f5&scoped=true&");
/* harmony import */ var _combat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combat.vue?vue&type=script&lang=js& */ "./src/ui/items/combat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _combat_vue_vue_type_style_index_0_id_35ac75f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css& */ "./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _combat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _combat_vue_vue_type_template_id_35ac75f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _combat_vue_vue_type_template_id_35ac75f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35ac75f5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/items/combat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/items/combat.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/ui/items/combat.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./combat.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_style_index_0_id_35ac75f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=style&index=0&id=35ac75f5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_style_index_0_id_35ac75f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_style_index_0_id_35ac75f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_style_index_0_id_35ac75f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_style_index_0_id_35ac75f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_style_index_0_id_35ac75f5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/items/combat.vue?vue&type=template&id=35ac75f5&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/ui/items/combat.vue?vue&type=template&id=35ac75f5&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_template_id_35ac75f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./combat.vue?vue&type=template&id=35ac75f5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/combat.vue?vue&type=template&id=35ac75f5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_template_id_35ac75f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_combat_vue_vue_type_template_id_35ac75f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/items/dot.vue":
/*!******************************!*\
  !*** ./src/ui/items/dot.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dot_vue_vue_type_template_id_b9be64d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dot.vue?vue&type=template&id=b9be64d0& */ "./src/ui/items/dot.vue?vue&type=template&id=b9be64d0&");
/* harmony import */ var _dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dot.vue?vue&type=script&lang=js& */ "./src/ui/items/dot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dot_vue_vue_type_template_id_b9be64d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dot_vue_vue_type_template_id_b9be64d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/items/dot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/items/dot.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/ui/items/dot.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./dot.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/dot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_dot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/items/dot.vue?vue&type=template&id=b9be64d0&":
/*!*************************************************************!*\
  !*** ./src/ui/items/dot.vue?vue&type=template&id=b9be64d0& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dot_vue_vue_type_template_id_b9be64d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./dot.vue?vue&type=template&id=b9be64d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/dot.vue?vue&type=template&id=b9be64d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dot_vue_vue_type_template_id_b9be64d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dot_vue_vue_type_template_id_b9be64d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/items/explore.vue":
/*!**********************************!*\
  !*** ./src/ui/items/explore.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _explore_vue_vue_type_template_id_2024cb3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore.vue?vue&type=template&id=2024cb3c&scoped=true& */ "./src/ui/items/explore.vue?vue&type=template&id=2024cb3c&scoped=true&");
/* harmony import */ var _explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore.vue?vue&type=script&lang=js& */ "./src/ui/items/explore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _explore_vue_vue_type_style_index_0_id_2024cb3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css& */ "./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _explore_vue_vue_type_template_id_2024cb3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _explore_vue_vue_type_template_id_2024cb3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2024cb3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/items/explore.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/items/explore.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/ui/items/explore.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_2024cb3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=style&index=0&id=2024cb3c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_2024cb3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_2024cb3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_2024cb3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_2024cb3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_style_index_0_id_2024cb3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/items/explore.vue?vue&type=template&id=2024cb3c&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/ui/items/explore.vue?vue&type=template&id=2024cb3c&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_template_id_2024cb3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./explore.vue?vue&type=template&id=2024cb3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/explore.vue?vue&type=template&id=2024cb3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_template_id_2024cb3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_explore_vue_vue_type_template_id_2024cb3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/items/gdata.vue":
/*!********************************!*\
  !*** ./src/ui/items/gdata.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gdata_vue_vue_type_template_id_2d591720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gdata.vue?vue&type=template&id=2d591720&scoped=true& */ "./src/ui/items/gdata.vue?vue&type=template&id=2d591720&scoped=true&");
/* harmony import */ var _gdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gdata.vue?vue&type=script&lang=js& */ "./src/ui/items/gdata.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _gdata_vue_vue_type_style_index_0_id_2d591720_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css& */ "./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gdata_vue_vue_type_template_id_2d591720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gdata_vue_vue_type_template_id_2d591720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d591720",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/items/gdata.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/items/gdata.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/ui/items/gdata.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./gdata.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_style_index_0_id_2d591720_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=style&index=0&id=2d591720&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_style_index_0_id_2d591720_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_style_index_0_id_2d591720_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_style_index_0_id_2d591720_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_style_index_0_id_2d591720_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_style_index_0_id_2d591720_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/items/gdata.vue?vue&type=template&id=2d591720&scoped=true&":
/*!***************************************************************************!*\
  !*** ./src/ui/items/gdata.vue?vue&type=template&id=2d591720&scoped=true& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_template_id_2d591720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./gdata.vue?vue&type=template&id=2d591720&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/gdata.vue?vue&type=template&id=2d591720&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_template_id_2d591720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gdata_vue_vue_type_template_id_2d591720_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/items/info-block.vue":
/*!*************************************!*\
  !*** ./src/ui/items/info-block.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_block_vue_vue_type_template_id_408e302f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-block.vue?vue&type=template&id=408e302f&scoped=true& */ "./src/ui/items/info-block.vue?vue&type=template&id=408e302f&scoped=true&");
/* harmony import */ var _info_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-block.vue?vue&type=script&lang=js& */ "./src/ui/items/info-block.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _info_block_vue_vue_type_style_index_0_id_408e302f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css& */ "./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_block_vue_vue_type_template_id_408e302f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_block_vue_vue_type_template_id_408e302f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "408e302f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/items/info-block.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/items/info-block.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/ui/items/info-block.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./info-block.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_style_index_0_id_408e302f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=style&index=0&id=408e302f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_style_index_0_id_408e302f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_style_index_0_id_408e302f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_style_index_0_id_408e302f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_style_index_0_id_408e302f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_style_index_0_id_408e302f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/items/info-block.vue?vue&type=template&id=408e302f&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/ui/items/info-block.vue?vue&type=template&id=408e302f&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_template_id_408e302f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./info-block.vue?vue&type=template&id=408e302f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/info-block.vue?vue&type=template&id=408e302f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_template_id_408e302f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_block_vue_vue_type_template_id_408e302f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/items/npc-group.vue":
/*!************************************!*\
  !*** ./src/ui/items/npc-group.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npc_group_vue_vue_type_template_id_09dd16a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./npc-group.vue?vue&type=template&id=09dd16a2&scoped=true& */ "./src/ui/items/npc-group.vue?vue&type=template&id=09dd16a2&scoped=true&");
/* harmony import */ var _npc_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./npc-group.vue?vue&type=script&lang=js& */ "./src/ui/items/npc-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _npc_group_vue_vue_type_style_index_0_id_09dd16a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css& */ "./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _npc_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _npc_group_vue_vue_type_template_id_09dd16a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _npc_group_vue_vue_type_template_id_09dd16a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09dd16a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/items/npc-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/items/npc-group.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/ui/items/npc-group.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./npc-group.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_style_index_0_id_09dd16a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=style&index=0&id=09dd16a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_style_index_0_id_09dd16a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_style_index_0_id_09dd16a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_style_index_0_id_09dd16a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_style_index_0_id_09dd16a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_style_index_0_id_09dd16a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/items/npc-group.vue?vue&type=template&id=09dd16a2&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/ui/items/npc-group.vue?vue&type=template&id=09dd16a2&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_template_id_09dd16a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./npc-group.vue?vue&type=template&id=09dd16a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/items/npc-group.vue?vue&type=template&id=09dd16a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_template_id_09dd16a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_npc_group_vue_vue_type_template_id_09dd16a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/itemsBase.js":
/*!*****************************!*\
  !*** ./src/ui/itemsBase.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/format */ "./src/util/format.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _items_skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/skill */ "./src/items/skill.js");
/* harmony import */ var _values_stat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values/stat */ "./src/values/stat.js");
/**
 * Base view for all item lists.
 */







/* harmony default export */ __webpack_exports__["default"] = ({

	methods:{

		floor:_util_format__WEBPACK_IMPORTED_MODULE_0__["floor"],

		showName(it) {
			return it.actname || it.name || it.id;
		},

		usable(it) {
			return (it.length || it.perpetual ) ? _game__WEBPACK_IMPORTED_MODULE_2__["default"].canRun(it) : _game__WEBPACK_IMPORTED_MODULE_2__["default"].canUse( it );
		},

		visible(it) {
			return !it.locked && it.disabled === false;
		},

		buyable(it) { return _game__WEBPACK_IMPORTED_MODULE_2__["default"].canBuy(it)},

		reslocked( it ) {
			return it.disabled === true || it.locks > 0 || it.locked !== false;
		},

		runnable(it) {
			return it.perpetual || it.length>0;
		},

		locked(it) {

			return (it.disabled === true) || it.maxed() || it.locks>0 || (it.locked !== false);

		},

		/**
		 * Convert tag strings into viewable format.
		 * @param {*} t
		 */
		stripTags( t ) {

			if ( Array.isArray(t) ) { return t.map( this.stripTags, this ); }

			if ( typeof t === 'string' ) {

				if ( t.substring(0,2) === 't_' ) t = t.slice(2);
				else if ( t.substring(0,3) === 'tag') t = t.slice(3);

			}

			return t;

		},

		/**
		 *
		 * @param {*} obj
		 * @param {boolean} rate - items represent /sec rates.
		 */
		effectItems( obj, rate=false) {

			let type = typeof obj;
			let results = {};

			if ( type === 'number') {

				// gold is default.
				results.gold = obj;

			} else if ( type === 'string') {

				let it = _game__WEBPACK_IMPORTED_MODULE_2__["default"].getData(obj);
				results[ it ? it.name : this.stripTags(obj) ] = true;

			} else if ( Array.isArray(obj) ) obj.forEach(v=>this.effectList(v,results));
			else if ( type === 'function' ) {}
			else if ( type === 'object') {

				if ( obj instanceof _values_stat__WEBPACK_IMPORTED_MODULE_4__["default"] ) results.gold = obj.value;
				else this.effectList( obj, results, '', rate );

			}

			return results;

		},

		/**
		 * @param {Object} obj - object whose effects to enumerate.
		 * @param {Object} results - [name/effect] pairs to display to user.
		 * @param {string} propPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 */
		effectList( obj, results={}, propPath='', rate=false ) {

			if ( typeof obj === 'string' ) {

				let it = _game__WEBPACK_IMPORTED_MODULE_2__["default"].getData(obj);
				results[ it ? it.name : this.stripTags(obj) ] = true;
				return;
			}

			for( let p in obj ) {

				// displayed path to subitem.
				var subPath = p;
				var sub = obj[p];
				var subRate = rate;

				if ( p === 'skipLocked') continue;
				else if ( p === 'max' ) {

					let index = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["indexAfter"])( propPath, 'mod' );
					if ( index < 0 ) index = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["indexAfter"])( propPath, 'effect' );

					if ( index > 0 ) subPath = propPath.slice(0, index) + ' max' + propPath.slice(index);
					else subPath = 'max ' + propPath;

				} else if ( p==='base' || p === 'value') subPath = propPath;
				else if ( p === 'rate') {

					subPath = propPath;
					subRate = true;

					let baseItem = propPath.split('.')[0];
					if ( _game__WEBPACK_IMPORTED_MODULE_2__["default"].getData(baseItem) instanceof _items_skill__WEBPACK_IMPORTED_MODULE_3__["default"] ) subPath = 'train ' + subPath + ' rate';

				} else {

					// check if sub-prop refers to an item.
					let refItem = _game__WEBPACK_IMPORTED_MODULE_2__["default"].getData(p);
					if ( refItem ) subPath = refItem.name;

					subPath = propPath ? propPath + ' ' + subPath : subPath;

				}

				if ( typeof sub !== 'object' ) results[subPath] = Object(_util_format__WEBPACK_IMPORTED_MODULE_0__["precise"])(sub) + ( subRate ? '/s' : '');
				else if ( typeof sub === 'function' ) {}
				else {

					if ( sub.skipLocked ) {

						let refItem = _game__WEBPACK_IMPORTED_MODULE_2__["default"].getData(p);
						if ( refItem && (refItem.locked || refItem.disabled) ) continue;

					}
					if ( sub.toString && (sub.toString != Object.prototype.toString) ) {

						results[subPath] = sub.toString() + ( subRate ? '/s' : '');

					} else this.effectList( sub, results, subPath, subRate );

				}

			}

		}

	}

});

/***/ }),

/***/ "./src/ui/main.vue":
/*!*************************!*\
  !*** ./src/ui/main.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_6f034aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=6f034aea&scoped=true& */ "./src/ui/main.vue?vue&type=template&id=6f034aea&scoped=true&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/ui/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _main_vue_vue_type_style_index_0_id_6f034aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css& */ "./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_6f034aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_6f034aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f034aea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/main.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./src/ui/main.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css&":
/*!**********************************************************************************!*\
  !*** ./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6f034aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=style&index=0&id=6f034aea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6f034aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6f034aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6f034aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6f034aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6f034aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/main.vue?vue&type=template&id=6f034aea&scoped=true&":
/*!********************************************************************!*\
  !*** ./src/ui/main.vue?vue&type=template&id=6f034aea&scoped=true& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_6f034aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=6f034aea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/main.vue?vue&type=template&id=6f034aea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_6f034aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_6f034aea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/outlog.vue":
/*!***************************!*\
  !*** ./src/ui/outlog.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _outlog_vue_vue_type_template_id_c9d4ddf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true& */ "./src/ui/outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true&");
/* harmony import */ var _outlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outlog.vue?vue&type=script&lang=js& */ "./src/ui/outlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _outlog_vue_vue_type_style_index_0_id_c9d4ddf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css& */ "./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _outlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _outlog_vue_vue_type_template_id_c9d4ddf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _outlog_vue_vue_type_template_id_c9d4ddf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c9d4ddf0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/outlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/outlog.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/ui/outlog.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./outlog.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css&":
/*!************************************************************************************!*\
  !*** ./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_style_index_0_id_c9d4ddf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=style&index=0&id=c9d4ddf0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_style_index_0_id_c9d4ddf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_style_index_0_id_c9d4ddf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_style_index_0_id_c9d4ddf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_style_index_0_id_c9d4ddf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_style_index_0_id_c9d4ddf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true&":
/*!**********************************************************************!*\
  !*** ./src/ui/outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_template_id_c9d4ddf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/outlog.vue?vue&type=template&id=c9d4ddf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_template_id_c9d4ddf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlog_vue_vue_type_template_id_c9d4ddf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/quickbar.vue":
/*!*****************************!*\
  !*** ./src/ui/quickbar.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quickbar_vue_vue_type_template_id_3473ec58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickbar.vue?vue&type=template&id=3473ec58&scoped=true& */ "./src/ui/quickbar.vue?vue&type=template&id=3473ec58&scoped=true&");
/* harmony import */ var _quickbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickbar.vue?vue&type=script&lang=js& */ "./src/ui/quickbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _quickbar_vue_vue_type_style_index_0_id_3473ec58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css& */ "./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _quickbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _quickbar_vue_vue_type_template_id_3473ec58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _quickbar_vue_vue_type_template_id_3473ec58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3473ec58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/quickbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/quickbar.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/ui/quickbar.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./quickbar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css&":
/*!**************************************************************************************!*\
  !*** ./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_style_index_0_id_3473ec58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=style&index=0&id=3473ec58&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_style_index_0_id_3473ec58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_style_index_0_id_3473ec58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_style_index_0_id_3473ec58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_style_index_0_id_3473ec58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_style_index_0_id_3473ec58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/quickbar.vue?vue&type=template&id=3473ec58&scoped=true&":
/*!************************************************************************!*\
  !*** ./src/ui/quickbar.vue?vue&type=template&id=3473ec58&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_template_id_3473ec58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./quickbar.vue?vue&type=template&id=3473ec58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/quickbar.vue?vue&type=template&id=3473ec58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_template_id_3473ec58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quickbar_vue_vue_type_template_id_3473ec58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/resources.vue":
/*!******************************!*\
  !*** ./src/ui/resources.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_vue_vue_type_template_id_9c4a587a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=9c4a587a&scoped=true& */ "./src/ui/resources.vue?vue&type=template&id=9c4a587a&scoped=true&");
/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ "./src/ui/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _resources_vue_vue_type_style_index_0_id_9c4a587a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css& */ "./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resources_vue_vue_type_template_id_9c4a587a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resources_vue_vue_type_template_id_9c4a587a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9c4a587a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/resources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/resources.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/ui/resources.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_9c4a587a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=style&index=0&id=9c4a587a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_9c4a587a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_9c4a587a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_9c4a587a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_9c4a587a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_9c4a587a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/resources.vue?vue&type=template&id=9c4a587a&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/ui/resources.vue?vue&type=template&id=9c4a587a&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_9c4a587a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=9c4a587a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/resources.vue?vue&type=template&id=9c4a587a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_9c4a587a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_9c4a587a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/running.vue":
/*!****************************!*\
  !*** ./src/ui/running.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _running_vue_vue_type_template_id_a3fd1046_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./running.vue?vue&type=template&id=a3fd1046&scoped=true& */ "./src/ui/running.vue?vue&type=template&id=a3fd1046&scoped=true&");
/* harmony import */ var _running_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./running.vue?vue&type=script&lang=js& */ "./src/ui/running.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _running_vue_vue_type_style_index_0_id_a3fd1046_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css& */ "./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _running_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _running_vue_vue_type_template_id_a3fd1046_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _running_vue_vue_type_template_id_a3fd1046_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a3fd1046",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/running.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/running.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/ui/running.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./running.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_style_index_0_id_a3fd1046_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=style&index=0&id=a3fd1046&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_style_index_0_id_a3fd1046_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_style_index_0_id_a3fd1046_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_style_index_0_id_a3fd1046_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_style_index_0_id_a3fd1046_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_style_index_0_id_a3fd1046_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/running.vue?vue&type=template&id=a3fd1046&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/ui/running.vue?vue&type=template&id=a3fd1046&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_template_id_a3fd1046_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./running.vue?vue&type=template&id=a3fd1046&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/running.vue?vue&type=template&id=a3fd1046&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_template_id_a3fd1046_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_running_vue_vue_type_template_id_a3fd1046_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/settings.vue":
/*!*****************************!*\
  !*** ./src/ui/settings.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_0292def5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=0292def5&scoped=true& */ "./src/ui/settings.vue?vue&type=template&id=0292def5&scoped=true&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./src/ui/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_vue_vue_type_style_index_0_id_0292def5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css& */ "./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_0292def5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_0292def5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0292def5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/settings.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/ui/settings.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css&":
/*!**************************************************************************************!*\
  !*** ./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0292def5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=style&index=0&id=0292def5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0292def5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0292def5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0292def5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0292def5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0292def5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/settings.vue?vue&type=template&id=0292def5&scoped=true&":
/*!************************************************************************!*\
  !*** ./src/ui/settings.vue?vue&type=template&id=0292def5&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_0292def5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=template&id=0292def5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/settings.vue?vue&type=template&id=0292def5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_0292def5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_0292def5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/top-bar.vue":
/*!****************************!*\
  !*** ./src/ui/top-bar.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top_bar_vue_vue_type_template_id_5e8f13b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true& */ "./src/ui/top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true&");
/* harmony import */ var _top_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-bar.vue?vue&type=script&lang=js& */ "./src/ui/top-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _top_bar_vue_vue_type_style_index_0_id_5e8f13b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css& */ "./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _top_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _top_bar_vue_vue_type_template_id_5e8f13b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _top_bar_vue_vue_type_template_id_5e8f13b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e8f13b9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/top-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/top-bar.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/ui/top-bar.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./top-bar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_style_index_0_id_5e8f13b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=style&index=0&id=5e8f13b9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_style_index_0_id_5e8f13b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_style_index_0_id_5e8f13b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_style_index_0_id_5e8f13b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_style_index_0_id_5e8f13b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_style_index_0_id_5e8f13b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/ui/top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_template_id_5e8f13b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/top-bar.vue?vue&type=template&id=5e8f13b9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_template_id_5e8f13b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_top_bar_vue_vue_type_template_id_5e8f13b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/upgrades.vue":
/*!*****************************!*\
  !*** ./src/ui/upgrades.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upgrades_vue_vue_type_template_id_d7d65aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrades.vue?vue&type=template&id=d7d65aae& */ "./src/ui/upgrades.vue?vue&type=template&id=d7d65aae&");
/* harmony import */ var _upgrades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrades.vue?vue&type=script&lang=js& */ "./src/ui/upgrades.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upgrades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upgrades_vue_vue_type_template_id_d7d65aae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upgrades_vue_vue_type_template_id_d7d65aae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/upgrades.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/upgrades.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/ui/upgrades.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_upgrades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./upgrades.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/upgrades.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_upgrades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/upgrades.vue?vue&type=template&id=d7d65aae&":
/*!************************************************************!*\
  !*** ./src/ui/upgrades.vue?vue&type=template&id=d7d65aae& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upgrades_vue_vue_type_template_id_d7d65aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./upgrades.vue?vue&type=template&id=d7d65aae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/upgrades.vue?vue&type=template&id=d7d65aae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upgrades_vue_vue_type_template_id_d7d65aae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upgrades_vue_vue_type_template_id_d7d65aae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/vitals.vue":
/*!***************************!*\
  !*** ./src/ui/vitals.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vitals_vue_vue_type_template_id_0b887939_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vitals.vue?vue&type=template&id=0b887939&scoped=true& */ "./src/ui/vitals.vue?vue&type=template&id=0b887939&scoped=true&");
/* harmony import */ var _vitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vitals.vue?vue&type=script&lang=js& */ "./src/ui/vitals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vitals_vue_vue_type_style_index_0_id_0b887939_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css& */ "./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vitals_vue_vue_type_template_id_0b887939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vitals_vue_vue_type_template_id_0b887939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b887939",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/vitals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/vitals.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/ui/vitals.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./vitals.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css&":
/*!************************************************************************************!*\
  !*** ./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_style_index_0_id_0b887939_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=style&index=0&id=0b887939&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_style_index_0_id_0b887939_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_style_index_0_id_0b887939_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_style_index_0_id_0b887939_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_style_index_0_id_0b887939_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_style_index_0_id_0b887939_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/vitals.vue?vue&type=template&id=0b887939&scoped=true&":
/*!**********************************************************************!*\
  !*** ./src/ui/vitals.vue?vue&type=template&id=0b887939&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_template_id_0b887939_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./vitals.vue?vue&type=template&id=0b887939&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/vitals.vue?vue&type=template&id=0b887939&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_template_id_0b887939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vitals_vue_vue_type_template_id_0b887939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/util/format.js":
/*!****************************!*\
  !*** ./src/util/format.js ***!
  \****************************/
/*! exports provided: precise, abbr, fixed, seconds, floor, ceil, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precise", function() { return precise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abbr", function() { return abbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixed", function() { return fixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
const postfixes = [

	'k', 'm', 'b'
]

/**
 * Formatting helpers for HTML/Display.
 */
const precise = (v, n=2) => {

	if ( isNaN(v) ) return v;
	else v = Number(v);

	if ( v > 1 ) return v.toFixed(n);

	if ( Math.pow(10,n)*v < 1 ) n += 2;
	return v.toFixed(n);
}

/**
 * Returns abbreviation of an item based on first letters.
 * @param {*} it
 */
const abbr = (it)=>{

	if ( !it ) return '';

	let s = it.name;
	let ind = s.indexOf(' ');
	if ( ind >= 0 && ind < s.length ) return s[0] + s[ind+1];
	return s.slice(0,2);

}

const fixed = (v, n=2) => {
	return ( typeof v === 'number') ? v.toFixed(n) : v;
}

const seconds = (v) => {
	return Math.ceil(v) + ' s';
}

const floor = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.floor(v);
}

const ceil = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.ceil(v);
}


const round = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.round(v);
}

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: assignOwn, findRemove, logPublic, assignNoFunc, assignPublic, showObj, logObj, randElm, random, uppercase, quickSplice, indexAfter, arrayMerge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignOwn", function() { return assignOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRemove", function() { return findRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPublic", function() { return logPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignNoFunc", function() { return assignNoFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignPublic", function() { return assignPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showObj", function() { return showObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logObj", function() { return logObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randElm", function() { return randElm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickSplice", function() { return quickSplice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexAfter", function() { return indexAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMerge", function() { return arrayMerge; });
/* harmony import */ var objecty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objecty */ "./node_modules/objecty/index.js");


/**
 * Only assign values already defined in dest's protochain.
 * @param {*} dest
 * @param {*} src
 */
const assignOwn = (dest, src ) => {

	var vars = Object.getPrototypeOf(dest);
	while ( vars !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(vars) ) {

			var desc = Object(objecty__WEBPACK_IMPORTED_MODULE_0__["getPropDesc"])(dest, p);
			if ( desc && (!desc.writable && desc.set === undefined) ) {
				continue;
			}

			if ( src[p] !== undefined ) dest[p] = src[p];

		}
		vars = Object.getPrototypeOf(vars);

	}

	return dest;

}

/**
 * Find an item in an array matching predicate, remove and return it.
 * @param {Array} a
 * @param {*} pred
 * @returns {object|null} Item removed or null.
 */
const findRemove = (a,pred) => {

	for( let i = a.length-1; i>= 0; i-- ) {

		if ( pred(a[i] ) ) {

			let res = a[i];
			a.splice( i, 1 );
			return res;

		}

	}
	return null;

}

/**
 * Log all public properties.
 * @param {*} src
 */
function logPublic( src ) {

	let a = [];

	while ( src !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(src) ) {

			if ( p[0] === '_'){continue; }
			a.push(p);
		}
		src = Object.getPrototypeOf(src);

	}

	console.log('PUBLIC: ' + a.join(',' ) );

}

function assignNoFunc( dest, src ) {

	var vars = src;
	while ( vars !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(vars) ) {

			if ( p[0] === '_' || typeof src[p] === 'function'){
				continue;
			}

			var desc = Object(objecty__WEBPACK_IMPORTED_MODULE_0__["getPropDesc"])(dest, p);
			if ( desc && (!desc.writable && desc.set === undefined) ) {
				continue;
			}

			dest[p ] = src[p];

		}
		vars = Object.getPrototypeOf(vars);

	}

	return dest;

}

function assignPublic( dest, src ) {

	var vars = src;
	while ( vars !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(vars) ) {

			if ( p[0] === '_'){
				continue;
			}

			var desc = Object(objecty__WEBPACK_IMPORTED_MODULE_0__["getPropDesc"])(dest, p);
			if ( desc && (!desc.writable && desc.set === undefined) ) {
				//console.log('SKIPPING: ' + p);
				continue;
			}

			dest[p ] = src[p];

		}
		vars = Object.getPrototypeOf(vars);

	}

	return dest;

}


function showObj(obj) {

	if ( Array.isArray(obj)){

		return '[ \n' + obj.map(v=>showObj(v)).join(', ') + '\n ]';

	} else if ( typeof obj === 'object') {

		let s = '{ ';
		for( let p in obj ) {

			s += `\n${p}: ` + showObj(obj[p] );

		}
		s += '\n}';

		return s;

	} else return '' + obj;


}

function logObj( obj, msg='' ) {
	console.log( (msg ? msg + ': ' : '' ) + showObj(obj) );
}

const randElm = (arr)=>{
	const ind = Math.floor( Math.random()*(arr.length));
	return arr[ind];
}

/**
 * Returns a random number between [min,max]
 * @param {number} min
 * @param {number} max
 */
const random = (min, max)=>{
	return min + Math.round( Math.random()*(max-min) );
}


const uppercase = (s) => {
	return !s ? '' : (s.length > 1 ? s[0].toUpperCase() + s.slice(1) : s[0].toUpperCase());
}

/**
 * NOTE: Not reactive with Vue.
 * @param {*} a
 * @param {*} i
 */
const quickSplice = ( a, i ) => {

	a[i] = a[ a.length-1 ];
	a.pop();

}


const indexAfter = ( s, k ) => {

	let i = s.indexOf(k);
	return i >= 0 ? i + k.length : i;

}

/**
 * Merge two items which may or may not be arrays,
 * and return a ray containing the flattened result of both.
 * If either a or b is already an array, it will be used to join
 * the results in-place.
 * @param {*} a
 * @param {*} b
 * @return {Array}
 */
const arrayMerge = ( a, b ) => {

	if ( Array.isArray(a) ) {

		if ( Array.isArray(b) ) return a.concat(b);

		a.push(b);

		return a;

	} else if ( Array.isArray(b) ) {

		// a is not array:
		b.push(a);
		return b;

	} else return [a,b];

}

/***/ }),

/***/ "./src/values/mod.js":
/*!***************************!*\
  !*** ./src/values/mod.js ***!
  \***************************/
/*! exports provided: ModTest, DEFAULT_MOD, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModTest", function() { return ModTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MOD", function() { return DEFAULT_MOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mod; });
/* harmony import */ var _percent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./percent */ "./src/values/percent.js");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat */ "./src/values/stat.js");



const ModTest = /^([\+\-]?\d+\.?\d*\b)?(?:([\+\-]?\d+\.?\d*)\%)?$/i;

/**
 * Modifier for mod without id.
 */
const DEFAULT_MOD = 'all';

class Mod {

	toJSON(){

		var val = this._pct === 0 ? this.bonus : (
			(this.bonus || '') + (( this._pct > 0 ? '+' : '') + (100*this._pct)  + '%')
		);

		//console.log('mod save val: ' + val );

		return {
			id:this.id,
			value:val,
			count:this.count
		};

	}

	toString() {

		let s = ( this.bonus !== 0 ?
			this.bonus.toString()
		: '' );


		if ( this._pct !== 0 ) {

			if ( this.bonus !== 0 ) s += ', ';
			s += ( this._pct > 0 ? '+' : '' ) + (100*this._pct) + '%';
		}
		return s;
	}

	/**
	 * @property {string} [id=DEFAULT_MOD]
	 */
	get id() { return this._id; }
	set id(v) { this._id = v; }

	/**
	 * @property {number} [count=0] - number of times mod is applied.
	 */
	get count() { return this._count; }
	set count(v) { this._count = v; }

	/**
	 * @property {number} [pct=0] - pct as a decimal.
	 */
	get pct() { return this._pct; }
	set pct(v) { this._pct = v; }

	/**
	 * @property {number} [bonus=0] - base modifier. (constant added bonus)
	 */
	get bonus() { return this._bonus; }
	set bonus(v) { this._bonus = v; }

	get value() { return this.bonus; }
	set value(v) {

		//console.log('assinging to mod: ' + this.id + ' val: ' + v );

		if ( typeof v ==='string' ){

			let res = ModTest.exec( v);

			if ( res ) {

				//res.forEach((v,i)=>console.log('reg['+i+']: ' + v ));
				this.bonus = Number(res[1]) || 0;
				this.pct = Number(res[2])/100 || 0;

				//console.log( this.id + 'mod regex: ' + this.bonus + ' + ' + this.pct );

			} else console.log( this.id + ' no mod regex: ' + v );


		} else if ( v instanceof _percent__WEBPACK_IMPORTED_MODULE_0__["default"] ) {

			this.pct = v.value;

		} else if ( !isNaN(v) ) {

			this.bonus = v;
		}

	}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null, id=null ){

		if ( typeof vars === 'number') this._bonus = vars;
		else if ( typeof vars === 'string') this.value = vars;
		else if ( vars ) Object.assign( this, vars );

		this._count = this._count || 0;
		this._bonus = this._bonus || 0;
		this._pct = this._pct || 0;

		this.id = this.id || id || DEFAULT_MOD;

		//console.log(this.id + ' mod created: ' + this.bonus + ' +' +this.pct+'%');
	}

	clone() {
		return new Mod({bonus:this._bonus, pct:this._pct, count:1}, this.id );
	}

	/**
	 * Apply a modifier to this modifier.
	 * @todo: Can't safely apply a pct mod to a mod without adding support for recursive mods.
	 * Otherwise the pct+/- is based on the current value of the mod, so won't be constant when
	 * added/removed.
	 * @param {*} mod
	 * @param {*} amt
	 */
	applySelf( mod, amt=1) {

		let typ = typeof mod;
		if ( typ === 'number') {

			this.bonus += amt*mod;

		} else if ( mod instanceof _percent__WEBPACK_IMPORTED_MODULE_0__["default"] ) {

			this.bonus *= ( 1+ amt*mod.pct );
			this.pct *= (1+ amt*mod.pct);

		} else if ( typ === 'object') {

			//console.log( 'apply: ' +  mod.toString() );
			this.bonus += amt*mod.bonus || 0;

			if ( mod.pct ) {
				let pctMod = 1 + amt*( mod.pct );
				this.bonus += pctMod;
				this.pct *= pctMod;
			}

		}

	}

	/**
	 * Update the modifier with additional values.
	 * @param {number|Percent|Object} mod
	 * @param {number} [amt=1]
	 */
	add( mod, amt=1 ) {

		//console.warn('CHANGING MOD: ' + this.id + ' by mod: ' + (mod.id||typeof mod) );

		let typ = typeof mod;
		if ( typ === 'number') {

			this.bonus += amt*mod;

		} else if ( mod instanceof _percent__WEBPACK_IMPORTED_MODULE_0__["default"] ) {

			this.pct += amt*mod.pct;

		} else if ( typ === 'object') {

			this.bonus += amt*mod.bonus || 0;
			this.pct += amt*mod.pct || 0;

		}


	}

	/**
	 * Apply this modifier to a given target.
	 * This is a one-time modify and doesnt use count total.
	 * @param {Object} obj - owner of the property being modified.
	 * @param {string} p - target property to which mod is being applied.
	 * @param {number} amt
	 */
	applyTo( obj, p, amt ) {

		let targ = obj[p];

		if ( targ instanceof _stat__WEBPACK_IMPORTED_MODULE_1__["default"] ) targ.addMod( this, amt );
		else if ( targ instanceof Mod) targ.applySelf( this, amt );
		else if ( targ === null || targ === undefined ){

			//console.log('MOD.applyTo() CREATE NEW MOD AT TARGET: ' + p );
			obj[p] = new Mod( amt*this.bonus );

		} else if ( typeof targ === 'object') {

			targ.value = ( ( Number(targ.value) || 0 ) + amt*this._bonus )*( 1 + amt*this._pct );

			// TODO? Percent all of obj?

		} else if ( typeof targ === 'number' ) {
			obj[p] = ( targ + amt*this._bonus )*(1 + amt*this._pct );
		}

	}

}

/***/ }),

/***/ "./src/values/percent.js":
/*!*******************************!*\
  !*** ./src/values/percent.js ***!
  \*******************************/
/*! exports provided: PercentTest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentTest", function() { return PercentTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Percent; });
const PercentTest = /^(\d+(?:\.?\d+)?)\%$/i

/**
 * Represents a percentage probability.
 */
class Percent {

	toJSON(){ return (100*this.pct) + '%'; }

	/**
	 * @property {number} pct - decimal percent.
	 */

	/**
	 * @property {number} value - 1 if a random roll
	 * is below the percentile.
	 */
	get value() {
		return (Math.random() < this.pct) ? 1 : 0;
	}

	toString() { return (100*this.pct) + '%';}

	constructor( val ) {

		if ( typeof val === 'string') {

			let res = PercentTest.exec( val );
			if ( res ) {

				this.pct = res[1];

			} else this.pct = Number(val);

		} else if ( !isNaN(val) ) this.pct = val;

		this.pct = ( this.pct || 0 )/100;

	}

	clone() { return new Percent(this.pct) }

}

/***/ }),

/***/ "./src/values/range.js":
/*!*****************************!*\
  !*** ./src/values/range.js ***!
  \*****************************/
/*! exports provided: RangeTest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeTest", function() { return RangeTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Range; });
const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

const SPLIT_CHAR = '~';

class Range {

	toJSON() { return this.min + SPLIT_CHAR + this.max; }

	toString() { return this.min + ' ' + SPLIT_CHAR + ' ' + this.max; }

	/**
	 * @property {number} value - getting a range value
	 * returns a random number in the range, inclusive.
	 */
	get value() {
		return this.min + Math.random()*( this.max - this.min );
	}

	/**
	 *
	 * @param {Object|number|string} min
	 * @param {?number} max
	 */
	constructor(min=0, max=undefined) {

		let type = typeof min;
		if ( type === 'object' ) Object.assign( this, min );
		else if ( type === 'string') {

			let parts = min.split( SPLIT_CHAR );
			this.min = Number( parts[0] );
			this.max = Number( parts[1] );

		} else {

			this.min = Number( min );
			this.max = Number( max === undefined ? min : max );

		}

		//console.log('min: ' + this.min + ' -> ' + this.max );


	}

	/**
	 * Add amount to range.
	 * @param {number|Range} amt
	 */
	add( amt ) {

		if ( typeof amt === 'number' ) {
			this.min += amt;
			this.max += amt;
		} else if ( typeof amt ==='object') {
			this.min += amt.min;
			this.max += amt.max;
		}

	}

}

/***/ }),

/***/ "./src/values/stat.js":
/*!****************************!*\
  !*** ./src/values/stat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stat; });
/* harmony import */ var _mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mod */ "./src/values/mod.js");


/**
 * Stat with a list of modifiers.
 */
class Stat {

	toJSON(){

		let o = { base: this._base };
		let def = this._mods[_mod__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MOD"]];
		if ( def !== undefined ) o.mods = { [_mod__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MOD"]]:def};

		if ( this.pos ) o.pos = true;

		return o;

	}

	/**
	 * @returns {Object} JSON Object with only the default modifier
	 * included in the mods list. Use this when the other modifiers
	 * can be recomputed on load.
	 */
	/*defaultJSON() {

		return {
			base:this._base,
			mods:{ DEFAULT_MOD:this._mods[DEFAULT_MOD] }
		};

	}*/

	toString(){
		return this._base + (this._pct >= 0 ? '+' : '') + (100*this._pct) + '%';
	}

	/**
	 * @property {number} value
	 */
	get value() {
		return this._pos ? Math.max( (this._base + this._bonus)*( 1 + this._pct ),0) :
		(this._base + this._bonus)*( 1 + this._pct );
	}
	set value(v){}

	valueOf() {return this._pos ? Math.max( (this._base + this._bonus)*( 1 + this._pct ),0) :
		(this._base + this._bonus)*( 1 + this._pct );}

	get base() { return this._base; }
	set base(v) {
		this._base = v;
	}

	/**
	 * @property {number} bonus - total bonus to base.
	 */
	get bonus(){return this._bonus; }

	/**
	 * @property {number} pct - total pct bonus, as a decimal.
	 */
	get pct() { return this._pct };

	/**
	 * @property {Object.<string,Mod>} mods - mods applied to object.
	 */
	get mods() { return this._mods; }
	set mods(v) {

		for( let p in v ) {

			var mod = v[p];
			v[p] = (mod instanceof _mod__WEBPACK_IMPORTED_MODULE_0__["default"] ) ? mod : new _mod__WEBPACK_IMPORTED_MODULE_0__["default"]( v[p] );
		}
		this._mods = v;
	}

	/**
	 * @property {boolean} pos - force positive value after mods.
	 */
	get pos(){return this._pos; }
	set pos(v) { this._pos = v;}

	/**
	 *
	 * @param {Object|number} vars
	 */
	constructor( vars=null, pos ) {

		if ( typeof vars === 'object') {

			if ( vars ) Object.assign( this, vars );

		} else if ( !isNaN(vars) ) this._base = Number(vars);

		if ( pos ) this.pos = pos;

		this._base = this._base||0;

		this.mods = this.mods || {};
		this.recalc();

	}

	/**
	 * Add a nonstandard modifier with no id.
	 * The modifiers are applied to the default base/pct values.
	 * The default modifier keeps a count of '1' since there is no
	 * standard amount for its bonus/pct amounts.
	 * @param {Mod|number|Percent|Object} mod
	 * @param {number} [amt=1]
	 */
	apply( mod, amt=1 ) {

		if ( mod instanceof _mod__WEBPACK_IMPORTED_MODULE_0__["default"] ) return this.addMod( mod, amt );

		//console.log('apply default mod: ' + mod );
		let cur = this.defaultMod();

		let prevBonus = cur.bonus;
		let prevPct = cur.pct;

		cur.add( mod, amt );

		// save and update change.
		this._bonus += cur.bonus - prevBonus;
		this._pct += cur.pct - prevPct;

	}

	/**
	 * Add a modifier to the stat.
	 * @param {Mod} mod
	 * @param {number} [amt=1] - amount by which mod increased.
	 */
	addMod( mod, amt=1 ) {

		this._pct += amt*mod.pct;
		this._bonus += amt*mod.bonus;

		//console.log( mod.id + ' MOD: ' + mod.toString() + ' x' + amt );

		let cur = this.mods[ mod.id ];
		if ( cur === undefined ) {
			cur = this.mods[mod.id] = mod;
		}

		cur.count += amt;

	}

	/**
	 * Get or create the default stat modifier.
	 * The modifier count begins and stays at '1' because only its
	 * bonuses and percents change.
	 * @returns {Mod}
	 */
	defaultMod(){

		let cur = this.mods[_mod__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MOD"]];
		return (cur!==undefined) ? cur : (this.mods[_mod__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MOD"]] = new _mod__WEBPACK_IMPORTED_MODULE_0__["default"]( {count:1}) );

	}

	/**
	 * Test if a mod can be applied to this stat without value becoming
	 * negative.
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	canApply( mod, amt ) {
		return this.delValue( amt*(mod.bonus||0), amt*(mod.pct||0) )>=0;
	}

	/**
	 * Get the new stat value if base and percent are changed
	 * by the given amounts.
	 * @param {number} delBonus - delta base.
	 * @param {number} delPct - delta percent.
	 * @returns {number} - new stat value.
	 */
	delValue( delBonus=0, delPct=0 ) {
		return ( this._base + this._bonus + delBonus )*( 1 + this._pct + delPct );
	}

	/**
	 * Recalculate the total bonus and percent applied to stat.
	 */
	recalc(){

		let bonus = 0, pct = 0;

		for( let p in this._mods ) {

			var mod = this._mods[p];

			pct += mod.count*mod.pct;
			bonus += mod.count*mod.bonus;

		}

		this._pct = pct;
		this._bonus = bonus;

	}

}

/***/ })

/******/ });