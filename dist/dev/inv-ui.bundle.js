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
				this.emit( 'sell', items[i], null, items[i].value);
			}

		},

		count(it) { return it.value > 1 ? ' (' + Math.floor(it.value) + ')': ''; },
		drop( it ){
			this.inv.remove(it);
		},

		onTake(it) {

			//console.log('start take: ' + it.id );
			this.emit('take', it );
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
                      return _vm.emit("itemover", $event, it)
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
                                  return _vm.emit("equip", it, _vm.inv)
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
                                  return _vm.emit("use", it)
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
                              return _vm.emit("sell", it, _vm.inv)
                            },
                            "!mouseenter": function($event) {
                              $event.stopPropagation()
                              return _vm.emit("itemover", $event, it)
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
                                  return _vm.emit("sell", it, _vm.inv, it.value)
                                },
                                "!mouseenter": function($event) {
                                  $event.stopPropagation()
                                  return _vm.emit("itemover", $event, it)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW52ZW50b3J5LnZ1ZT9iNjQ2Iiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlPzUyMjUiLCJ3ZWJwYWNrOi8vL3NyYy91aS9pbnZlbnRvcnkudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlPzFmNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2ludmVudG9yeS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2ludmVudG9yeS52dWU/ZGU2YyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW52ZW50b3J5LnZ1ZT8xZWI2Iiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlP2U4M2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLGlDQUFpQyx5QkFBeUIsa0NBQWtDLEdBQUcsa0NBQWtDLHlCQUF5QixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0RqTyxjQUFjLG1CQUFPLENBQUMsc2NBQWtQOztBQUV4USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJZO0FBQ3dCOztBQUVwQzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBUztBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyw2Q0FBSTtBQUN2QztBQUNBLFVBQVUsNkNBQUk7QUFDZDtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUEwQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxxQkFBcUIsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQ0FBZ0M7QUFDekM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzdGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTRILENBQWdCLHNNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhKO0FBQUE7QUFBQTtBQUFBO0FBQTRTLENBQWdCLG1XQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZXYvaW52LXVpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZsZXgtcm93W2RhdGEtdi0xYjdmYmI3YV0ge1xcclxcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5mbGV4LXJvdyBkaXZbZGF0YS12LTFiN2ZiYjdhXSB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG4uaW52W2RhdGEtdi0xYjdmYmI3YV0ge1xcclxcblxcdHdpZHRoOmF1dG87XFxufVxcclxcblxcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiN2ZiYjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiN2ZiYjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8c2NyaXB0PlxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJztcclxuaW1wb3J0IEZpbHRlckJveCBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwcm9wZXJ0eSB7SW52ZW50b3J5fSBpbnYgLSB0aGUgaW52ZW50b3J5IG9iamVjdC5cclxuXHQgKiBAcHJvcGVydHkge2Jvb2xlYW59IHRha2UgLSB3aGV0aGVyIHRvIGRpc3BsYXkgdGFrZSBidXR0b24uXHJcblx0ICovXHJcblx0cHJvcHM6WydpbnYnLCAndGFrZScsICd2YWx1ZScsICdzZWxlY3RpbmcnLCAnbm9zZWFyY2gnXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZmlsdGVyZWQ6bnVsbFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcG9uZW50czp7XHJcblx0XHRmaWx0ZXJib3g6RmlsdGVyQm94XHJcblx0fSxcclxuXHRtZXRob2RzOntcclxuXHJcblx0XHRzZWxsQWxsKCl7XHJcblxyXG5cdFx0XHRsZXQgaXRlbXMgPSB0aGlzLmludi5yZW1vdmVBbGwoKTtcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGl0ZW1zLmxlbmd0aC0xOyBpPj0wOyBpLS0gKXtcclxuXHRcdFx0XHR0aGlzLmVtaXQoICdzZWxsJywgaXRlbXNbaV0sIG51bGwsIGl0ZW1zW2ldLnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0Y291bnQoaXQpIHsgcmV0dXJuIGl0LnZhbHVlID4gMSA/ICcgKCcgKyBNYXRoLmZsb29yKGl0LnZhbHVlKSArICcpJzogJyc7IH0sXHJcblx0XHRkcm9wKCBpdCApe1xyXG5cdFx0XHR0aGlzLmludi5yZW1vdmUoaXQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRvblRha2UoaXQpIHtcclxuXHJcblx0XHRcdC8vY29uc29sZS5sb2coJ3N0YXJ0IHRha2U6ICcgKyBpdC5pZCApO1xyXG5cdFx0XHR0aGlzLmVtaXQoJ3Rha2UnLCBpdCApO1xyXG5cdFx0XHR0aGlzLmludi5yZW1vdmUoaXQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0cGxheWVySW52KCl7IHJldHVybiB0aGlzLmludiA9PT0gR2FtZS5zdGF0ZS5pbnZlbnRvcnk7IH0sXHJcblx0XHRwbGF5ZXJGdWxsKCl7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLmludmVudG9yeS5mdWxsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcbjxkaXY+XHJcblx0PGZpbHRlcmJveCB2LWlmPVwiIW5vc2VhcmNoXCIgdi1tb2RlbD1cImZpbHRlcmVkXCIgOml0ZW1zPVwiaW52Lml0ZW1zXCIgbWluLWl0ZW1zPVwiMTBcIiAvPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cclxuXHRcdDxkaXYgdi1pZj1cImludi5tYXggPiAwXCI+e3sgaW52Lml0ZW1zLmxlbmd0aCArICcgLyAnICsgTWF0aC5mbG9vcihpbnYubWF4LnZhbHVlICkgKyAnIFVzZWQnIH19PC9kaXY+XHJcblx0XHQ8YnV0dG9uIHYtaWY9XCJpbnYuY291bnQ+MFwiIEBjbGljaz1cInNlbGxBbGxcIj5TZWxsIEFsbDwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG48dGFibGUgY2xhc3M9XCJpbnYgaXRlbS10YWJsZVwiPlxyXG5cclxuXHQ8dHIgdi1mb3I9XCJpdCBpbiAoIG5vc2VhcmNoID8gaW52Lml0ZW1zIDogZmlsdGVyZWQgKVwiIDprZXk9XCJpdC5pZFwiPlxyXG5cdFx0PHRkIEBtb3VzZWVudGVyLmNhcHR1cmUuc3RvcD1cImVtaXQoICdpdGVtb3ZlcicsJGV2ZW50LGl0KVwiPnt7IGl0Lm5hbWUgKyBjb3VudChpdCkgfX08L3RkPlxyXG5cclxuXHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cIiFzZWxlY3RpbmdcIj5cclxuXHJcblx0XHRcdDx0ZCB2LWlmPVwiaXQuZXF1aXBwYWJsZVwiPjxidXR0b24gQGNsaWNrPVwiZW1pdCgnZXF1aXAnLGl0LCBpbnYpXCI+RXF1aXA8L2J1dHRvbj48L3RkPlxyXG5cdFx0XHQ8dGQgdi1pZj1cIml0LnVzZVwiPjxidXR0b24gQGNsaWNrPVwiZW1pdCggJ3VzZScsIGl0KVwiPlVzZTwvYnV0dG9uPjwvdGQ+XHJcblx0XHRcdDx0ZCB2LWlmPVwidGFrZSYmIXBsYXllckZ1bGxcIj48YnV0dG9uIEBjbGljaz1cIm9uVGFrZShpdClcIj5UYWtlPC9idXR0b24+PC90ZD5cclxuXHJcblx0XHRcdDx0ZD5cclxuXHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJlbWl0KCdzZWxsJyxpdCxpbnYpXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQsaXQpXCI+U2VsbDwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHYtaWY9XCJpdC52YWx1ZT4xXCIgQGNsaWNrPVwiZW1pdCgnc2VsbCcsaXQsaW52LCBpdC52YWx1ZSlcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCRldmVudCxpdClcIj5TZWxsIEFsbDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwhLS08YnV0dG9uIHYtZWxzZSBAY2xpY2s9XCJkcm9wKGl0KVwiPkRyb3A8L2J1dHRvbj4tLT48L3RkPlxyXG5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxyXG5cdFx0XHQ8dGQ+PGJ1dHRvbiBAY2xpY2s9XCIkZW1pdCgnaW5wdXQnLCBpdClcIj5TZWxlY3Q8L2J1dHRvbj48L3RkPlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHQ8L3RyPlxyXG48L3RhYmxlPlxyXG48ZGl2IHYtaWY9XCJwbGF5ZXJGdWxsXCIgY2xhc3M9XCJ3YXJuLXRleHRcIj5QbGF5ZXIgaW52ZW50b3J5IGZ1bGw8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi5mbGV4LXJvdyB7XHJcblx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4uZmxleC1yb3cgZGl2IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5pbnYge1xyXG5cdHdpZHRoOmF1dG87XHJcbn1cclxuXHJcblxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICAhX3ZtLm5vc2VhcmNoXG4gICAgICAgID8gX2MoXCJmaWx0ZXJib3hcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5pbnYuaXRlbXMsIFwibWluLWl0ZW1zXCI6IFwiMTBcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXJlZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5maWx0ZXJlZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlcmVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1yb3dcIiB9LCBbXG4gICAgICAgIF92bS5pbnYubWF4ID4gMFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLmludi5pdGVtcy5sZW5ndGggK1xuICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihfdm0uaW52Lm1heC52YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIiBVc2VkXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmludi5jb3VudCA+IDBcbiAgICAgICAgICA/IF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5zZWxsQWxsIH0gfSwgW192bS5fdihcIlNlbGwgQWxsXCIpXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImludiBpdGVtLXRhYmxlXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5ub3NlYXJjaCA/IF92bS5pbnYuaXRlbXMgOiBfdm0uZmlsdGVyZWQsIGZ1bmN0aW9uKGl0KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgeyBrZXk6IGl0LmlkIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgaXQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0Lm5hbWUgKyBfdm0uY291bnQoaXQpKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0uc2VsZWN0aW5nXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIGl0LmVxdWlwcGFibGVcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJlcXVpcFwiLCBpdCwgX3ZtLmludilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVxdWlwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGl0LnVzZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcInVzZVwiLCBpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVzZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0udGFrZSAmJiAhX3ZtLnBsYXllckZ1bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uVGFrZShpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRha2VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcInNlbGxcIiwgaXQsIF92bS5pbnYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIGl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdC52YWx1ZSA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwic2VsbFwiLCBpdCwgX3ZtLmludiwgaXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGwgQWxsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIiwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGVjdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBsYXllckZ1bGxcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm4tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlBsYXllciBpbnZlbnRvcnkgZnVsbFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWI3ZmJiN2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYjdmYmI3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjdmYmI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjdmYmI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYjdmYmI3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL2ludmVudG9yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiN2ZiYjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiN2ZiYjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI3ZmJiN2Emc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9