(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["inv-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.flex-row[data-v-1b7fbb7a] {\r\n\talign-items:center;\r\n\tjustify-content: flex-start;\n}\n.flex-row div[data-v-1b7fbb7a] {\r\n\tmargin-right: 12px;\n}\n.inv[data-v-1b7fbb7a] {\r\n\twidth:auto;\n}\r\n\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/inventory.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filterbox.vue */ "./src/ui/components/filterbox.vue");




/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {Inventory} inv - the inventory object.
	 * @property {boolean} take - whether to display take button.
	 */
	props:['inv', 'take', 'value', 'selecting', 'nosearch'],
	data() {
		return {
			filtered:null
		}
	},
	components:{
		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
	},
	methods:{

		sellAll(){

			let items = this.inv.removeAll();
			for( let i = items.length-1; i>=0; i-- ){
				this.dispatch( 'sell', items[i], null, items[i].value);
			}

		},

		count(it) { return it.value > 1 ? ' (' + Math.floor(it.value) + ')': ''; },
		drop( it ){
			this.inv.remove(it);
		},

		onTake(it) {

			//console.log('start take: ' + it.id );
			this.dispatch('take', it );
			this.inv.remove(it);

		}

	},
	computed:{

		playerInv(){ return this.inv === _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.inventory; },
		playerFull(){
			return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.inventory.full();
		}
	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true& ***!
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
    [
      !_vm.nosearch
        ? _c("filterbox", {
            attrs: { items: _vm.inv.items, "min-items": "10" },
            model: {
              value: _vm.filtered,
              callback: function($$v) {
                _vm.filtered = $$v
              },
              expression: "filtered"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "flex-row" }, [
        _vm.inv.max > 0
          ? _c("div", [
              _vm._v(
                _vm._s(
                  _vm.inv.items.length +
                    " / " +
                    Math.floor(_vm.inv.max.value) +
                    " Used"
                )
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.inv.count > 0
          ? _c("button", { on: { click: _vm.sellAll } }, [_vm._v("Sell All")])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "inv item-table" },
        _vm._l(_vm.nosearch ? _vm.inv.items : _vm.filtered, function(it) {
          return _c(
            "tr",
            { key: it.id },
            [
              _c(
                "td",
                {
                  on: {
                    "!mouseenter": function($event) {
                      $event.stopPropagation()
                      return _vm.dispatch("itemover", $event, it)
                    }
                  }
                },
                [_vm._v(_vm._s(it.name + _vm.count(it)))]
              ),
              _vm._v(" "),
              !_vm.selecting
                ? [
                    it.equippable
                      ? _c("td", [
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.dispatch("equip", it, _vm.inv)
                                }
                              }
                            },
                            [_vm._v("Equip")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    it.use
                      ? _c("td", [
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.dispatch("use", it)
                                }
                              }
                            },
                            [_vm._v("Use")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.take && !_vm.playerFull
                      ? _c("td", [
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.onTake(it)
                                }
                              }
                            },
                            [_vm._v("Take")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.dispatch("sell", it, _vm.inv)
                            },
                            "!mouseenter": function($event) {
                              $event.stopPropagation()
                              return _vm.dispatch("itemover", $event, it)
                            }
                          }
                        },
                        [_vm._v("Sell")]
                      ),
                      _vm._v(" "),
                      it.value > 1
                        ? _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.dispatch(
                                    "sell",
                                    it,
                                    _vm.inv,
                                    it.value
                                  )
                                },
                                "!mouseenter": function($event) {
                                  $event.stopPropagation()
                                  return _vm.dispatch("itemover", $event, it)
                                }
                              }
                            },
                            [_vm._v("Sell All")]
                          )
                        : _vm._e()
                    ])
                  ]
                : [
                    _c("td", [
                      _c(
                        "button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.$emit("input", it)
                            }
                          }
                        },
                        [_vm._v("Select")]
                      )
                    ])
                  ]
            ],
            2
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.playerFull
        ? _c("div", { staticClass: "warn-text" }, [
            _vm._v("Player inventory full")
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/ui/inventory.vue":
/*!******************************!*\
  !*** ./src/ui/inventory.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inventory_vue_vue_type_template_id_1b7fbb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true& */ "./src/ui/inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true&");
/* harmony import */ var _inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.vue?vue&type=script&lang=js& */ "./src/ui/inventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _inventory_vue_vue_type_style_index_0_id_1b7fbb7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css& */ "./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inventory_vue_vue_type_template_id_1b7fbb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inventory_vue_vue_type_template_id_1b7fbb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b7fbb7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/inventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/inventory.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/ui/inventory.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./inventory.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_style_index_0_id_1b7fbb7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=style&index=0&id=1b7fbb7a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_style_index_0_id_1b7fbb7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_style_index_0_id_1b7fbb7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_style_index_0_id_1b7fbb7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_style_index_0_id_1b7fbb7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_style_index_0_id_1b7fbb7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/ui/inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_template_id_1b7fbb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/inventory.vue?vue&type=template&id=1b7fbb7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_template_id_1b7fbb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_template_id_1b7fbb7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW52ZW50b3J5LnZ1ZT9iNjQ2Iiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlPzUyMjUiLCJ3ZWJwYWNrOi8vL3NyYy91aS9pbnZlbnRvcnkudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlPzFmNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2ludmVudG9yeS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2ludmVudG9yeS52dWU/ZGU2YyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW52ZW50b3J5LnZ1ZT8xZWI2Iiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlP2U4M2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLGlDQUFpQyx5QkFBeUIsa0NBQWtDLEdBQUcsa0NBQWtDLHlCQUF5QixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0RqTyxjQUFjLG1CQUFPLENBQUMsc2NBQWtQOztBQUV4USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJZO0FBQ3dCOztBQUVwQzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBUztBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyw2Q0FBSTtBQUN2QztBQUNBLFVBQVUsNkNBQUk7QUFDZDtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxxQkFBcUIsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQ0FBZ0M7QUFDekM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9HO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUc3RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE0SCxDQUFnQixzTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoSjtBQUFBO0FBQUE7QUFBQTtBQUE0UyxDQUFnQixtV0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZGV2L2ludi11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mbGV4LXJvd1tkYXRhLXYtMWI3ZmJiN2FdIHtcXHJcXG5cXHRhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uZmxleC1yb3cgZGl2W2RhdGEtdi0xYjdmYmI3YV0ge1xcclxcblxcdG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuLmludltkYXRhLXYtMWI3ZmJiN2FdIHtcXHJcXG5cXHR3aWR0aDphdXRvO1xcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWI3ZmJiN2Emc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XHJcbmltcG9ydCBGaWx0ZXJCb3ggZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHQvKipcclxuXHQgKiBAcHJvcGVydHkge0ludmVudG9yeX0gaW52IC0gdGhlIGludmVudG9yeSBvYmplY3QuXHJcblx0ICogQHByb3BlcnR5IHtib29sZWFufSB0YWtlIC0gd2hldGhlciB0byBkaXNwbGF5IHRha2UgYnV0dG9uLlxyXG5cdCAqL1xyXG5cdHByb3BzOlsnaW52JywgJ3Rha2UnLCAndmFsdWUnLCAnc2VsZWN0aW5nJywgJ25vc2VhcmNoJ10sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGZpbHRlcmVkOm51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6e1xyXG5cdFx0ZmlsdGVyYm94OkZpbHRlckJveFxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0c2VsbEFsbCgpe1xyXG5cclxuXHRcdFx0bGV0IGl0ZW1zID0gdGhpcy5pbnYucmVtb3ZlQWxsKCk7XHJcblx0XHRcdGZvciggbGV0IGkgPSBpdGVtcy5sZW5ndGgtMTsgaT49MDsgaS0tICl7XHJcblx0XHRcdFx0dGhpcy5kaXNwYXRjaCggJ3NlbGwnLCBpdGVtc1tpXSwgbnVsbCwgaXRlbXNbaV0udmFsdWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRjb3VudChpdCkgeyByZXR1cm4gaXQudmFsdWUgPiAxID8gJyAoJyArIE1hdGguZmxvb3IoaXQudmFsdWUpICsgJyknOiAnJzsgfSxcclxuXHRcdGRyb3AoIGl0ICl7XHJcblx0XHRcdHRoaXMuaW52LnJlbW92ZShpdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uVGFrZShpdCkge1xyXG5cclxuXHRcdFx0Ly9jb25zb2xlLmxvZygnc3RhcnQgdGFrZTogJyArIGl0LmlkICk7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2goJ3Rha2UnLCBpdCApO1xyXG5cdFx0XHR0aGlzLmludi5yZW1vdmUoaXQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0cGxheWVySW52KCl7IHJldHVybiB0aGlzLmludiA9PT0gR2FtZS5zdGF0ZS5pbnZlbnRvcnk7IH0sXHJcblx0XHRwbGF5ZXJGdWxsKCl7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLmludmVudG9yeS5mdWxsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcbjxkaXY+XHJcblx0PGZpbHRlcmJveCB2LWlmPVwiIW5vc2VhcmNoXCIgdi1tb2RlbD1cImZpbHRlcmVkXCIgOml0ZW1zPVwiaW52Lml0ZW1zXCIgbWluLWl0ZW1zPVwiMTBcIiAvPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cclxuXHRcdDxkaXYgdi1pZj1cImludi5tYXggPiAwXCI+e3sgaW52Lml0ZW1zLmxlbmd0aCArICcgLyAnICsgTWF0aC5mbG9vcihpbnYubWF4LnZhbHVlICkgKyAnIFVzZWQnIH19PC9kaXY+XHJcblx0XHQ8YnV0dG9uIHYtaWY9XCJpbnYuY291bnQ+MFwiIEBjbGljaz1cInNlbGxBbGxcIj5TZWxsIEFsbDwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG48dGFibGUgY2xhc3M9XCJpbnYgaXRlbS10YWJsZVwiPlxyXG5cclxuXHQ8dHIgdi1mb3I9XCJpdCBpbiAoIG5vc2VhcmNoID8gaW52Lml0ZW1zIDogZmlsdGVyZWQgKVwiIDprZXk9XCJpdC5pZFwiPlxyXG5cdFx0PHRkIEBtb3VzZWVudGVyLmNhcHR1cmUuc3RvcD1cImRpc3BhdGNoKCdpdGVtb3ZlcicsJGV2ZW50LGl0KVwiPnt7IGl0Lm5hbWUgKyBjb3VudChpdCkgfX08L3RkPlxyXG5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cIiFzZWxlY3RpbmdcIj5cclxuXHJcblx0XHRcdDx0ZCB2LWlmPVwiaXQuZXF1aXBwYWJsZVwiPjxidXR0b24gQGNsaWNrPVwiZGlzcGF0Y2goJ2VxdWlwJyxpdCwgaW52KVwiPkVxdWlwPC9idXR0b24+PC90ZD5cclxuXHRcdFx0PHRkIHYtaWY9XCJpdC51c2VcIj48YnV0dG9uIEBjbGljaz1cImRpc3BhdGNoKCAndXNlJywgaXQpXCI+VXNlPC9idXR0b24+PC90ZD5cclxuXHRcdFx0PHRkIHYtaWY9XCJ0YWtlJiYhcGxheWVyRnVsbFwiPjxidXR0b24gQGNsaWNrPVwib25UYWtlKGl0KVwiPlRha2U8L2J1dHRvbj48L3RkPlxyXG5cclxuXHRcdFx0PHRkPlxyXG5cdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRpc3BhdGNoKCdzZWxsJyxpdCxpbnYpXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZGlzcGF0Y2goJ2l0ZW1vdmVyJywkZXZlbnQsaXQpXCI+U2VsbDwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHYtaWY9XCJpdC52YWx1ZT4xXCIgQGNsaWNrPVwiZGlzcGF0Y2goJ3NlbGwnLGl0LGludiwgaXQudmFsdWUpXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZGlzcGF0Y2goJ2l0ZW1vdmVyJywkZXZlbnQsaXQpXCI+U2VsbCBBbGw8L2J1dHRvbj5cclxuXHRcdFx0XHQ8IS0tPGJ1dHRvbiB2LWVsc2UgQGNsaWNrPVwiZHJvcChpdClcIj5Ecm9wPC9idXR0b24+LS0+PC90ZD5cclxuXHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PHRlbXBsYXRlIHYtZWxzZT5cclxuXHRcdFx0PHRkPjxidXR0b24gQGNsaWNrPVwiJGVtaXQoJ2lucHV0JywgaXQpXCI+U2VsZWN0PC9idXR0b24+PC90ZD5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC90cj5cclxuPC90YWJsZT5cclxuPGRpdiB2LWlmPVwicGxheWVyRnVsbFwiIGNsYXNzPVwid2Fybi10ZXh0XCI+UGxheWVyIGludmVudG9yeSBmdWxsPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uZmxleC1yb3cge1xyXG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmZsZXgtcm93IGRpdiB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uaW52IHtcclxuXHR3aWR0aDphdXRvO1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgIV92bS5ub3NlYXJjaFxuICAgICAgICA/IF9jKFwiZmlsdGVyYm94XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uaW52Lml0ZW1zLCBcIm1pbi1pdGVtc1wiOiBcIjEwXCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyZWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uZmlsdGVyZWQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtcm93XCIgfSwgW1xuICAgICAgICBfdm0uaW52Lm1heCA+IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5pbnYuaXRlbXMubGVuZ3RoICtcbiAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoX3ZtLmludi5tYXgudmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgVXNlZFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5pbnYuY291bnQgPiAwXG4gICAgICAgICAgPyBfYyhcImJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uc2VsbEFsbCB9IH0sIFtfdm0uX3YoXCJTZWxsIEFsbFwiKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGFibGVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnYgaXRlbS10YWJsZVwiIH0sXG4gICAgICAgIF92bS5fbChfdm0ubm9zZWFyY2ggPyBfdm0uaW52Lml0ZW1zIDogX3ZtLmZpbHRlcmVkLCBmdW5jdGlvbihpdCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgIHsga2V5OiBpdC5pZCB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRpc3BhdGNoKFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBpdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXQubmFtZSArIF92bS5jb3VudChpdCkpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5zZWxlY3RpbmdcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgaXQuZXF1aXBwYWJsZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGlzcGF0Y2goXCJlcXVpcFwiLCBpdCwgX3ZtLmludilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVxdWlwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGl0LnVzZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGlzcGF0Y2goXCJ1c2VcIiwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVc2VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRha2UgJiYgIV92bS5wbGF5ZXJGdWxsXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblRha2UoaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUYWtlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRpc3BhdGNoKFwic2VsbFwiLCBpdCwgX3ZtLmludilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGlzcGF0Y2goXCJpdGVtb3ZlclwiLCAkZXZlbnQsIGl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdC52YWx1ZSA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaW52LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNwYXRjaChcIml0ZW1vdmVyXCIsICRldmVudCwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxsIEFsbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsIGl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxlY3RcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wbGF5ZXJGdWxsXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJQbGF5ZXIgaW52ZW50b3J5IGZ1bGxcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI3ZmJiN2Emc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWI3ZmJiN2Emc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFiN2ZiYjdhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWI3ZmJiN2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWI3ZmJiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWI3ZmJiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI3ZmJiN2Emc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWI3ZmJiN2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9pbnZlbnRvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiN2ZiYjdhJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==