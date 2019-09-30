(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["potions-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.potions[data-v-7ac2a2de] {\r\n\tpadding: 0px 16px;\r\n\theight:100%;\r\n\toverflow-y:auto;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/potions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filterbox.vue */ "./src/ui/components/filterbox.vue");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsBase */ "./src/ui/itemsBase.js");






/* harmony default export */ __webpack_exports__["default"] = ({

	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_2__["default"]],
	data(){

		return {
			/**
			 * @property {Item[]} filtered - filtered search results.
			 */
			filtered:null
		}
	},

	components:{
		inv:()=>__webpack_require__.e(/*! import() | inv-ui */ "inv-ui").then(__webpack_require__.bind(null, /*! ./inventory.vue */ "./src/ui/inventory.vue")),
		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
	},
	beforeCreate(){
		this.game = _game__WEBPACK_IMPORTED_MODULE_0__["default"]
	},
	methods:{
	},
	computed:{

		potions(){ return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.potions.filter(v=>!this.locked(v)); }

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=template&id=7ac2a2de&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/potions.vue?vue&type=template&id=7ac2a2de&scoped=true& ***!
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
    { staticClass: "potions" },
    [
      _c("filterbox", {
        attrs: { items: _vm.potions, "min-items": "7" },
        model: {
          value: _vm.filtered,
          callback: function($$v) {
            _vm.filtered = $$v
          },
          expression: "filtered"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "flex-row separate" }, [
        _c(
          "div",
          { staticClass: "flex-col" },
          _vm._l(_vm.filtered, function(it) {
            return _c(
              "div",
              {
                key: it.id,
                on: {
                  "!mouseenter": function($event) {
                    $event.stopPropagation()
                    return _vm.dispatch("itemover", $event, it)
                  }
                }
              },
              [
                _vm._v("\r\n\r\n\t\t\t" + _vm._s(it.name) + "\r\n\r\n\t\t\t"),
                it.buy && !it.owned
                  ? _c(
                      "button",
                      {
                        attrs: { disabled: !_vm.buyable(it) },
                        on: {
                          click: function($event) {
                            return _vm.dispatch("buy", it)
                          }
                        }
                      },
                      [_vm._v("Unlock")]
                    )
                  : _c(
                      "button",
                      {
                        attrs: { disabled: !_vm.usable(it) },
                        on: {
                          click: function($event) {
                            return _vm.dispatch("brew", it)
                          }
                        }
                      },
                      [_vm._v("Brew")]
                    )
              ]
            )
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/ui/potions.vue":
/*!****************************!*\
  !*** ./src/ui/potions.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _potions_vue_vue_type_template_id_7ac2a2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./potions.vue?vue&type=template&id=7ac2a2de&scoped=true& */ "./src/ui/potions.vue?vue&type=template&id=7ac2a2de&scoped=true&");
/* harmony import */ var _potions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./potions.vue?vue&type=script&lang=js& */ "./src/ui/potions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _potions_vue_vue_type_style_index_0_id_7ac2a2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css& */ "./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _potions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _potions_vue_vue_type_template_id_7ac2a2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _potions_vue_vue_type_template_id_7ac2a2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ac2a2de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/potions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/potions.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/ui/potions.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./potions.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_style_index_0_id_7ac2a2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=style&index=0&id=7ac2a2de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_style_index_0_id_7ac2a2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_style_index_0_id_7ac2a2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_style_index_0_id_7ac2a2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_style_index_0_id_7ac2a2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_style_index_0_id_7ac2a2de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/potions.vue?vue&type=template&id=7ac2a2de&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/ui/potions.vue?vue&type=template&id=7ac2a2de&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_template_id_7ac2a2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./potions.vue?vue&type=template&id=7ac2a2de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/potions.vue?vue&type=template&id=7ac2a2de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_template_id_7ac2a2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_potions_vue_vue_type_template_id_7ac2a2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvcG90aW9ucy52dWU/YzU0MiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcG90aW9ucy52dWU/ZGVhOCIsIndlYnBhY2s6Ly8vc3JjL3VpL3BvdGlvbnMudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9wb3Rpb25zLnZ1ZT9jY2ZkIiwid2VicGFjazovLy8uL3NyYy91aS9wb3Rpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcG90aW9ucy52dWU/YTU5OCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcG90aW9ucy52dWU/MGZjMyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcG90aW9ucy52dWU/MTNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsbUNBQW1DLHdCQUF3QixrQkFBa0Isc0JBQXNCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEN0gsY0FBYyxtQkFBTyxDQUFDLGtjQUFnUDs7QUFFdFEsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlk7O0FBRXdCO0FBQ2Y7O0FBRXJCOztBQUVmLFNBQVMsa0RBQVM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDhJQUEyRDtBQUNyRSxZQUFZLGlFQUFTO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjLDZDQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw2Q0FBSTs7QUFFeEI7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlCQUF5QjtBQUM5QjtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUF1QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0EsV0FBVywwQkFBMEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkJBQTZCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0QkFBNEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzNGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTBILENBQWdCLG9NQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlJO0FBQUE7QUFBQTtBQUFBO0FBQTBTLENBQWdCLGlXQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZXYvcG90aW9ucy11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5wb3Rpb25zW2RhdGEtdi03YWMyYTJkZV0ge1xcclxcblxcdHBhZGRpbmc6IDBweCAxNnB4O1xcclxcblxcdGhlaWdodDoxMDAlO1xcclxcblxcdG92ZXJmbG93LXk6YXV0bztcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhYzJhMmRlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG90aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YWMyYTJkZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhYzJhMmRlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjxzY3JpcHQ+XHJcbmltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUnO1xyXG5cclxuaW1wb3J0IEZpbHRlckJveCBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZSc7XHJcbmltcG9ydCBJdGVtc0Jhc2UgZnJvbSAnLi9pdGVtc0Jhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRtaXhpbnM6W0l0ZW1zQmFzZV0sXHJcblx0ZGF0YSgpe1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBAcHJvcGVydHkge0l0ZW1bXX0gZmlsdGVyZWQgLSBmaWx0ZXJlZCBzZWFyY2ggcmVzdWx0cy5cclxuXHRcdFx0ICovXHJcblx0XHRcdGZpbHRlcmVkOm51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRjb21wb25lbnRzOntcclxuXHRcdGludjooKT0+aW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImludi11aVwiICovICcuL2ludmVudG9yeS52dWUnKSxcclxuXHRcdGZpbHRlcmJveDpGaWx0ZXJCb3hcclxuXHR9LFxyXG5cdGJlZm9yZUNyZWF0ZSgpe1xyXG5cdFx0dGhpcy5nYW1lID0gR2FtZVxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0cG90aW9ucygpeyByZXR1cm4gR2FtZS5zdGF0ZS5wb3Rpb25zLmZpbHRlcih2PT4hdGhpcy5sb2NrZWQodikpOyB9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJwb3Rpb25zXCI+XHJcblxyXG5cdFx0PGZpbHRlcmJveCB2LW1vZGVsPVwiZmlsdGVyZWRcIiA6aXRlbXM9XCJwb3Rpb25zXCIgbWluLWl0ZW1zPVwiN1wiIC8+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImZsZXgtcm93IHNlcGFyYXRlXCI+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImZsZXgtY29sXCI+XHJcblx0XHQ8ZGl2IHYtZm9yPVwiaXQgaW4gZmlsdGVyZWRcIiA6a2V5PVwiaXQuaWRcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJkaXNwYXRjaCggJ2l0ZW1vdmVyJywgJGV2ZW50LGl0KVwiPlxyXG5cclxuXHRcdFx0e3sgaXQubmFtZSB9fVxyXG5cclxuXHRcdFx0PGJ1dHRvbiB2LWlmPVwiaXQuYnV5JiYhaXQub3duZWRcIiA6ZGlzYWJsZWQ9XCIhYnV5YWJsZShpdClcIlxyXG5cdFx0XHRcdEBjbGljaz1cImRpc3BhdGNoKCdidXknLCBpdClcIj5VbmxvY2s8L2J1dHRvbj5cclxuXHJcblx0XHRcdDxidXR0b24gdi1lbHNlIDpkaXNhYmxlZD1cIiF1c2FibGUoaXQpXCJcclxuXHRcdFx0XHRAY2xpY2s9XCJkaXNwYXRjaCggJ2JyZXcnLCBpdCApXCI+QnJldzwvYnV0dG9uPlxyXG5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuZGl2LnBvdGlvbnMge1xyXG5cdHBhZGRpbmc6IDBweCAxNnB4O1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdG92ZXJmbG93LXk6YXV0bztcclxufVxyXG5cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwb3Rpb25zXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImZpbHRlcmJveFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0ucG90aW9ucywgXCJtaW4taXRlbXNcIjogXCI3XCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcmVkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5maWx0ZXJlZCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJlZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1yb3cgc2VwYXJhdGVcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4LWNvbFwiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5maWx0ZXJlZCwgZnVuY3Rpb24oaXQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaXQuaWQsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRpc3BhdGNoKFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBpdClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXHJcXG5cXHJcXG5cXHRcXHRcXHRcIiArIF92bS5fcyhpdC5uYW1lKSArIFwiXFxyXFxuXFxyXFxuXFx0XFx0XFx0XCIpLFxuICAgICAgICAgICAgICAgIGl0LmJ1eSAmJiAhaXQub3duZWRcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5idXlhYmxlKGl0KSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGlzcGF0Y2goXCJidXlcIiwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVbmxvY2tcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS51c2FibGUoaXQpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNwYXRjaChcImJyZXdcIiwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCcmV3XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BvdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhYzJhMmRlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wb3Rpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wb3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhYzJhMmRlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YWMyYTJkZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdhYzJhMmRlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdhYzJhMmRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdhYzJhMmRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wb3Rpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YWMyYTJkZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YWMyYTJkZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL3BvdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG90aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG90aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YWMyYTJkZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2FjMmEyZGUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG90aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2FjMmEyZGUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9