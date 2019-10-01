(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["enchant-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.enchants .enchant-list[data-v-33b50a3b] {\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tflex:1;\n}\ndiv.enchants .filtered[data-v-33b50a3b] {\r\n\tdisplay:flex;\r\n\tflex-flow: column;\n}\ndiv.enchants .enchant-list > div.enchant[data-v-33b50a3b] {\r\n\tdisplay:flex;\r\n\twidth:100%;\r\n\tflex-direction: row;\n}\ndiv.enchants .enchant-list  .ench-name[data-v-33b50a3b] {\r\n\tflex-basis: 25%;\r\n\tmin-width: 132px;\n}\ndiv.enchants[data-v-33b50a3b] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tpadding:0px 16px;\r\n\toverflow-y:auto;\r\n\theight:100%;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/enchanting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filterbox.vue */ "./src/ui/components/filterbox.vue");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsBase */ "./src/ui/itemsBase.js");






/* harmony default export */ __webpack_exports__["default"] = ({

	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_2__["default"]],
	components:{
		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
		inv:()=>__webpack_require__.e(/*! import() | inv-ui */ "inv-ui").then(__webpack_require__.bind(null, /*! ./inventory.vue */ "./src/ui/inventory.vue"))
	},
	data() {

		return {
			/**
			 * @property {Item[]} filtered - filtered search results.
			 */
			filtered:null,
			/**
			 * @property {Item} target - current enchant target.
			 */
			target:null
		}
	},
	beforeCreate(){
		this.state = _game__WEBPACK_IMPORTED_MODULE_0__["default"].state;
	},
	computed:{

		enchants(){
			return this.state.filterItems( it=>it.type==='enchant' && !this.locked(it) );
		}

	},
	methods:{
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=template&id=33b50a3b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/enchanting.vue?vue&type=template&id=33b50a3b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "enchants" }, [
    _c("div", [
      _c(
        "div",
        {
          on: {
            "!mouseenter": function($event) {
              $event.stopPropagation()
              return _vm.emit("itemover", $event, _vm.target)
            }
          }
        },
        [
          _vm._v(
            "\n\t\tTarget: " +
              _vm._s(_vm.target ? _vm.target.name : "None") +
              "\n\t"
          )
        ]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "note-text" }, [
        _vm._v(
          "Items can only be enchanted with enchantments of equal or lower level."
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "separate" },
      [
        _c(
          "div",
          { staticClass: "filtered" },
          [
            _c("filterbox", {
              attrs: { items: _vm.enchants, "min-items": "7" },
              model: {
                value: _vm.filtered,
                callback: function($$v) {
                  _vm.filtered = $$v
                },
                expression: "filtered"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "enchant-list" },
              _vm._l(_vm.filtered, function(it) {
                return _c(
                  "div",
                  {
                    key: it.id,
                    staticClass: "enchant",
                    on: {
                      "!mouseenter": function($event) {
                        $event.stopPropagation()
                        return _vm.emit("itemover", $event, it)
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "ench-name" }, [
                      _vm._v(_vm._s(it.name))
                    ]),
                    _vm._v(" "),
                    it.buy && !it.owned
                      ? _c(
                          "button",
                          {
                            attrs: { disabled: !_vm.buyable(it) },
                            on: {
                              click: function($event) {
                                return _vm.emit("buy", it)
                              }
                            }
                          },
                          [_vm._v("Unlock")]
                        )
                      : _c(
                          "button",
                          {
                            attrs: {
                              disabled:
                                !_vm.target ||
                                !it.canApply(_vm.target) ||
                                !_vm.usable(it)
                            },
                            on: {
                              click: function($event) {
                                return _vm.emit("enchant", it, _vm.target)
                              }
                            }
                          },
                          [_vm._v("Enchant")]
                        )
                  ]
                )
              }),
              0
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("inv", {
          attrs: { selecting: "true", inv: _vm.state.inventory },
          model: {
            value: _vm.target,
            callback: function($$v) {
              _vm.target = $$v
            },
            expression: "target"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/ui/enchanting.vue":
/*!*******************************!*\
  !*** ./src/ui/enchanting.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enchanting_vue_vue_type_template_id_33b50a3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enchanting.vue?vue&type=template&id=33b50a3b&scoped=true& */ "./src/ui/enchanting.vue?vue&type=template&id=33b50a3b&scoped=true&");
/* harmony import */ var _enchanting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enchanting.vue?vue&type=script&lang=js& */ "./src/ui/enchanting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _enchanting_vue_vue_type_style_index_0_id_33b50a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css& */ "./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _enchanting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _enchanting_vue_vue_type_template_id_33b50a3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _enchanting_vue_vue_type_template_id_33b50a3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33b50a3b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/enchanting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/enchanting.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/ui/enchanting.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./enchanting.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css&":
/*!****************************************************************************************!*\
  !*** ./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_style_index_0_id_33b50a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=style&index=0&id=33b50a3b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_style_index_0_id_33b50a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_style_index_0_id_33b50a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_style_index_0_id_33b50a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_style_index_0_id_33b50a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_style_index_0_id_33b50a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/enchanting.vue?vue&type=template&id=33b50a3b&scoped=true&":
/*!**************************************************************************!*\
  !*** ./src/ui/enchanting.vue?vue&type=template&id=33b50a3b&scoped=true& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_template_id_33b50a3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./enchanting.vue?vue&type=template&id=33b50a3b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/enchanting.vue?vue&type=template&id=33b50a3b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_template_id_33b50a3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_enchanting_vue_vue_type_template_id_33b50a3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvZW5jaGFudGluZy52dWU/NTBhOSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZW5jaGFudGluZy52dWU/NjBlZiIsIndlYnBhY2s6Ly8vc3JjL3VpL2VuY2hhbnRpbmcudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9lbmNoYW50aW5nLnZ1ZT9iMWYxIiwid2VicGFjazovLy8uL3NyYy91aS9lbmNoYW50aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZW5jaGFudGluZy52dWU/NWE3NyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZW5jaGFudGluZy52dWU/MTgwZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvZW5jaGFudGluZy52dWU/OGI4YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsa0RBQWtELG1CQUFtQiwrQkFBK0IsYUFBYSxHQUFHLDJDQUEyQyxtQkFBbUIsd0JBQXdCLEdBQUcsNkRBQTZELG1CQUFtQixpQkFBaUIsMEJBQTBCLEdBQUcsMkRBQTJELHNCQUFzQix1QkFBdUIsR0FBRyxpQ0FBaUMsbUJBQW1CLDZCQUE2Qix1QkFBdUIsc0JBQXNCLGtCQUFrQixHQUFHOzs7Ozs7Ozs7Ozs7O0FDRGhtQixjQUFjLG1CQUFPLENBQUMsd2NBQW1QOztBQUV6USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCWTs7QUFFd0I7QUFDZjs7QUFFckI7O0FBRWYsU0FBUyxrREFBUztBQUNsQjtBQUNBLFlBQVksaUVBQVM7QUFDckIsVUFBVSw4SUFBMkQ7QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkNEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBCQUEwQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxXQUFXLDBCQUEwQjtBQUNyQztBQUNBO0FBQ0Esc0JBQXNCLHdDQUF3QztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNkJBQTZCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBOEM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHOUY7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLGlHQUFNO0FBQ1IsRUFBRSwwR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNkgsQ0FBZ0IsdU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBako7QUFBQTtBQUFBO0FBQUE7QUFBNlMsQ0FBZ0Isb1dBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBalU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImRldi9lbmNoYW50LXVpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZGl2LmVuY2hhbnRzIC5lbmNoYW50LWxpc3RbZGF0YS12LTMzYjUwYTNiXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG5cXHRmbGV4OjE7XFxufVxcbmRpdi5lbmNoYW50cyAuZmlsdGVyZWRbZGF0YS12LTMzYjUwYTNiXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5kaXYuZW5jaGFudHMgLmVuY2hhbnQtbGlzdCA+IGRpdi5lbmNoYW50W2RhdGEtdi0zM2I1MGEzYl0ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5lbmNoYW50cyAuZW5jaGFudC1saXN0ICAuZW5jaC1uYW1lW2RhdGEtdi0zM2I1MGEzYl0ge1xcclxcblxcdGZsZXgtYmFzaXM6IDI1JTtcXHJcXG5cXHRtaW4td2lkdGg6IDEzMnB4O1xcbn1cXG5kaXYuZW5jaGFudHNbZGF0YS12LTMzYjUwYTNiXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cGFkZGluZzowcHggMTZweDtcXHJcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZW5jaGFudGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2I1MGEzYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VuY2hhbnRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzNiNTBhM2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZW5jaGFudGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2I1MGEzYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8c2NyaXB0PlxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJztcclxuXHJcbmltcG9ydCBGaWx0ZXJCb3ggZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUnO1xyXG5pbXBvcnQgSXRlbXNCYXNlIGZyb20gJy4vaXRlbXNCYXNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0bWl4aW5zOltJdGVtc0Jhc2VdLFxyXG5cdGNvbXBvbmVudHM6e1xyXG5cdFx0ZmlsdGVyYm94OkZpbHRlckJveCxcclxuXHRcdGludjooKT0+aW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImludi11aVwiICovICcuL2ludmVudG9yeS52dWUnKVxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogQHByb3BlcnR5IHtJdGVtW119IGZpbHRlcmVkIC0gZmlsdGVyZWQgc2VhcmNoIHJlc3VsdHMuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRmaWx0ZXJlZDpudWxsLFxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogQHByb3BlcnR5IHtJdGVtfSB0YXJnZXQgLSBjdXJyZW50IGVuY2hhbnQgdGFyZ2V0LlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0dGFyZ2V0Om51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGJlZm9yZUNyZWF0ZSgpe1xyXG5cdFx0dGhpcy5zdGF0ZSA9IEdhbWUuc3RhdGU7XHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0ZW5jaGFudHMoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuZmlsdGVySXRlbXMoIGl0PT5pdC50eXBlPT09J2VuY2hhbnQnICYmICF0aGlzLmxvY2tlZChpdCkgKTtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRtZXRob2RzOntcclxuXHR9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJlbmNoYW50c1wiPlxyXG5cclxuXHRcdDxkaXY+PGRpdiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCAkZXZlbnQsIHRhcmdldCApXCI+XHJcblx0XHRcdFRhcmdldDoge3sgdGFyZ2V0ID8gdGFyZ2V0Lm5hbWUgOiAnTm9uZScgfX1cclxuXHRcdDwvZGl2PlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJub3RlLXRleHRcIj5JdGVtcyBjYW4gb25seSBiZSBlbmNoYW50ZWQgd2l0aCBlbmNoYW50bWVudHMgb2YgZXF1YWwgb3IgbG93ZXIgbGV2ZWwuPC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cInNlcGFyYXRlXCI+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImZpbHRlcmVkXCI+XHJcblx0XHQ8ZmlsdGVyYm94IHYtbW9kZWw9XCJmaWx0ZXJlZFwiIDppdGVtcz1cImVuY2hhbnRzXCIgbWluLWl0ZW1zPVwiN1wiIC8+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImVuY2hhbnQtbGlzdFwiPlxyXG5cdFx0PGRpdiBjbGFzcz0nZW5jaGFudCcgdi1mb3I9XCJpdCBpbiBmaWx0ZXJlZFwiIDprZXk9XCJpdC5pZFwiIEBtb3VzZWVudGVyLmNhcHR1cmUuc3RvcD1cImVtaXQoICdpdGVtb3ZlcicsICRldmVudCxpdClcIj5cclxuXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiZW5jaC1uYW1lXCI+e3sgaXQubmFtZSB9fTwvc3Bhbj5cclxuXHJcblx0XHRcdDxidXR0b24gdi1pZj1cIml0LmJ1eSYmIWl0Lm93bmVkXCIgOmRpc2FibGVkPVwiIWJ1eWFibGUoaXQpXCJcclxuXHRcdFx0XHRAY2xpY2s9XCJlbWl0KCdidXknLCBpdClcIj5VbmxvY2s8L2J1dHRvbj5cclxuXHJcblx0XHRcdDxidXR0b24gdi1lbHNlIDpkaXNhYmxlZD1cIiF0YXJnZXR8fCFpdC5jYW5BcHBseSh0YXJnZXQpfHwhdXNhYmxlKGl0KVwiXHJcblx0XHRcdFx0QGNsaWNrPVwiZW1pdCggJ2VuY2hhbnQnLCBpdCwgdGFyZ2V0IClcIj5FbmNoYW50PC9idXR0b24+XHJcblxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxpbnYgc2VsZWN0aW5nPXRydWUgOmludj1cInN0YXRlLmludmVudG9yeVwiIHYtbW9kZWw9XCJ0YXJnZXRcIiAvPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG5kaXYuZW5jaGFudHMgLmVuY2hhbnQtbGlzdCB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRmbGV4OjE7XHJcbn1cclxuXHJcbmRpdi5lbmNoYW50cyAuZmlsdGVyZWQge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuZGl2LmVuY2hhbnRzIC5lbmNoYW50LWxpc3QgPiBkaXYuZW5jaGFudCB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuZGl2LmVuY2hhbnRzIC5lbmNoYW50LWxpc3QgIC5lbmNoLW5hbWUge1xyXG5cdGZsZXgtYmFzaXM6IDI1JTtcclxuXHRtaW4td2lkdGg6IDEzMnB4O1xyXG59XHJcblxyXG5kaXYuZW5jaGFudHMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBhZGRpbmc6MHB4IDE2cHg7XHJcblx0b3ZlcmZsb3cteTphdXRvO1xyXG5cdGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG48L3N0eWxlPn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW5jaGFudHNcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgX3ZtLnRhcmdldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcblxcdFxcdFRhcmdldDogXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRhcmdldCA/IF92bS50YXJnZXQubmFtZSA6IFwiTm9uZVwiKSArXG4gICAgICAgICAgICAgIFwiXFxuXFx0XCJcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90ZS10ZXh0XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJJdGVtcyBjYW4gb25seSBiZSBlbmNoYW50ZWQgd2l0aCBlbmNoYW50bWVudHMgb2YgZXF1YWwgb3IgbG93ZXIgbGV2ZWwuXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VwYXJhdGVcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyZWRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZmlsdGVyYm94XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5lbmNoYW50cywgXCJtaW4taXRlbXNcIjogXCI3XCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcmVkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXJlZCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVuY2hhbnQtbGlzdFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsdGVyZWQsIGZ1bmN0aW9uKGl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW5jaGFudFwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJlbmNoLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdC5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGl0LmJ1eSAmJiAhaXQub3duZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uYnV5YWJsZShpdCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJidXlcIiwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVW5sb2NrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0udGFyZ2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdC5jYW5BcHBseShfdm0udGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnVzYWJsZShpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcImVuY2hhbnRcIiwgaXQsIF92bS50YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW5jaGFudFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW52XCIsIHtcbiAgICAgICAgICBhdHRyczogeyBzZWxlY3Rpbmc6IFwidHJ1ZVwiLCBpbnY6IF92bS5zdGF0ZS5pbnZlbnRvcnkgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS50YXJnZXQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS50YXJnZXQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInRhcmdldFwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9lbmNoYW50aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zM2I1MGEzYiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9lbmNoYW50aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZW5jaGFudGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZW5jaGFudGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2I1MGEzYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzNiNTBhM2JcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczM2I1MGEzYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczM2I1MGEzYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczM2I1MGEzYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZW5jaGFudGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNiNTBhM2Imc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzNiNTBhM2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9lbmNoYW50aW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbmNoYW50aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VuY2hhbnRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VuY2hhbnRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzNiNTBhM2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbmNoYW50aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzYjUwYTNiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VuY2hhbnRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYjUwYTNiJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==