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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");





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
	created() {
		this.USE = _events__WEBPACK_IMPORTED_MODULE_2__["USE"];
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
                    it.onuse
                      ? _c("td", [
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.emit(_vm.USE, it)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW52ZW50b3J5LnZ1ZT9iNjQ2Iiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlPzUyMjUiLCJ3ZWJwYWNrOi8vL3NyYy91aS9pbnZlbnRvcnkudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlPzFmNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2ludmVudG9yeS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2ludmVudG9yeS52dWU/ZGU2YyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW52ZW50b3J5LnZ1ZT8xZWI2Iiwid2VicGFjazovLy8uL3NyYy91aS9pbnZlbnRvcnkudnVlP2U4M2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLGlDQUFpQyx5QkFBeUIsa0NBQWtDLEdBQUcsa0NBQWtDLHlCQUF5QixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0RqTyxjQUFjLG1CQUFPLENBQUMsc2NBQWtQOztBQUV4USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCWTtBQUN3QjtBQUNuQjs7QUFFakI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkNBQUc7QUFDaEI7QUFDQTtBQUNBLFlBQVksaUVBQVM7QUFDckI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsNkNBQUk7QUFDdkM7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEREO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU0scUJBQXFCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0NBQWdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9HO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUc3RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE0SCxDQUFnQixzTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoSjtBQUFBO0FBQUE7QUFBQTtBQUE0UyxDQUFnQixtV0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZGV2L2ludi11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mbGV4LXJvd1tkYXRhLXYtMWI3ZmJiN2FdIHtcXHJcXG5cXHRhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uZmxleC1yb3cgZGl2W2RhdGEtdi0xYjdmYmI3YV0ge1xcclxcblxcdG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuLmludltkYXRhLXYtMWI3ZmJiN2FdIHtcXHJcXG5cXHR3aWR0aDphdXRvO1xcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWI3ZmJiN2Emc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XHJcbmltcG9ydCBGaWx0ZXJCb3ggZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUnO1xyXG5pbXBvcnQgeyBVU0UgfSBmcm9tICcuLi9ldmVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHQvKipcclxuXHQgKiBAcHJvcGVydHkge0ludmVudG9yeX0gaW52IC0gdGhlIGludmVudG9yeSBvYmplY3QuXHJcblx0ICogQHByb3BlcnR5IHtib29sZWFufSB0YWtlIC0gd2hldGhlciB0byBkaXNwbGF5IHRha2UgYnV0dG9uLlxyXG5cdCAqL1xyXG5cdHByb3BzOlsnaW52JywgJ3Rha2UnLCAndmFsdWUnLCAnc2VsZWN0aW5nJywgJ25vc2VhcmNoJ10sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGZpbHRlcmVkOm51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLlVTRSA9IFVTRTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6e1xyXG5cdFx0ZmlsdGVyYm94OkZpbHRlckJveFxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0c2VsbEFsbCgpe1xyXG5cclxuXHRcdFx0bGV0IGl0ZW1zID0gdGhpcy5pbnYucmVtb3ZlQWxsKCk7XHJcblx0XHRcdGZvciggbGV0IGkgPSBpdGVtcy5sZW5ndGgtMTsgaT49MDsgaS0tICl7XHJcblx0XHRcdFx0dGhpcy5lbWl0KCAnc2VsbCcsIGl0ZW1zW2ldLCBudWxsLCBpdGVtc1tpXS52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGNvdW50KGl0KSB7IHJldHVybiBpdC52YWx1ZSA+IDEgPyAnICgnICsgTWF0aC5mbG9vcihpdC52YWx1ZSkgKyAnKSc6ICcnOyB9LFxyXG5cdFx0ZHJvcCggaXQgKXtcclxuXHRcdFx0dGhpcy5pbnYucmVtb3ZlKGl0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b25UYWtlKGl0KSB7XHJcblxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdzdGFydCB0YWtlOiAnICsgaXQuaWQgKTtcclxuXHRcdFx0dGhpcy5lbWl0KCd0YWtlJywgaXQgKTtcclxuXHRcdFx0dGhpcy5pbnYucmVtb3ZlKGl0KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6e1xyXG5cclxuXHRcdHBsYXllckludigpeyByZXR1cm4gdGhpcy5pbnYgPT09IEdhbWUuc3RhdGUuaW52ZW50b3J5OyB9LFxyXG5cdFx0cGxheWVyRnVsbCgpe1xyXG5cdFx0XHRyZXR1cm4gR2FtZS5zdGF0ZS5pbnZlbnRvcnkuZnVsbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG5cdDxmaWx0ZXJib3ggdi1pZj1cIiFub3NlYXJjaFwiIHYtbW9kZWw9XCJmaWx0ZXJlZFwiIDppdGVtcz1cImludi5pdGVtc1wiIG1pbi1pdGVtcz1cIjEwXCIgLz5cclxuXHJcblx0PGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XHJcblx0XHQ8ZGl2IHYtaWY9XCJpbnYubWF4ID4gMFwiPnt7IGludi5pdGVtcy5sZW5ndGggKyAnIC8gJyArIE1hdGguZmxvb3IoaW52Lm1heC52YWx1ZSApICsgJyBVc2VkJyB9fTwvZGl2PlxyXG5cdFx0PGJ1dHRvbiB2LWlmPVwiaW52LmNvdW50PjBcIiBAY2xpY2s9XCJzZWxsQWxsXCI+U2VsbCBBbGw8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuPHRhYmxlIGNsYXNzPVwiaW52IGl0ZW0tdGFibGVcIj5cclxuXHJcblx0PHRyIHYtZm9yPVwiaXQgaW4gKCBub3NlYXJjaCA/IGludi5pdGVtcyA6IGZpbHRlcmVkIClcIiA6a2V5PVwiaXQuaWRcIj5cclxuXHRcdDx0ZCBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCRldmVudCxpdClcIj57eyBpdC5uYW1lICsgY291bnQoaXQpIH19PC90ZD5cclxuXHJcblxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCIhc2VsZWN0aW5nXCI+XHJcblxyXG5cdFx0XHQ8dGQgdi1pZj1cIml0LmVxdWlwcGFibGVcIj48YnV0dG9uIEBjbGljaz1cImVtaXQoJ2VxdWlwJyxpdCwgaW52KVwiPkVxdWlwPC9idXR0b24+PC90ZD5cclxuXHRcdFx0PHRkIHYtaWY9XCJpdC5vbnVzZVwiPjxidXR0b24gQGNsaWNrPVwiZW1pdCggVVNFLCBpdClcIj5Vc2U8L2J1dHRvbj48L3RkPlxyXG5cdFx0XHQ8dGQgdi1pZj1cInRha2UmJiFwbGF5ZXJGdWxsXCI+PGJ1dHRvbiBAY2xpY2s9XCJvblRha2UoaXQpXCI+VGFrZTwvYnV0dG9uPjwvdGQ+XHJcblxyXG5cdFx0XHQ8dGQ+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwiZW1pdCgnc2VsbCcsaXQsaW52KVwiIEBtb3VzZWVudGVyLmNhcHR1cmUuc3RvcD1cImVtaXQoICdpdGVtb3ZlcicsJGV2ZW50LGl0KVwiPlNlbGw8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiB2LWlmPVwiaXQudmFsdWU+MVwiIEBjbGljaz1cImVtaXQoJ3NlbGwnLGl0LGludiwgaXQudmFsdWUpXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQsaXQpXCI+U2VsbCBBbGw8L2J1dHRvbj5cclxuXHRcdFx0XHQ8IS0tPGJ1dHRvbiB2LWVsc2UgQGNsaWNrPVwiZHJvcChpdClcIj5Ecm9wPC9idXR0b24+LS0+PC90ZD5cclxuXHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PHRlbXBsYXRlIHYtZWxzZT5cclxuXHRcdFx0PHRkPjxidXR0b24gQGNsaWNrPVwiJGVtaXQoJ2lucHV0JywgaXQpXCI+U2VsZWN0PC9idXR0b24+PC90ZD5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC90cj5cclxuPC90YWJsZT5cclxuPGRpdiB2LWlmPVwicGxheWVyRnVsbFwiIGNsYXNzPVwid2Fybi10ZXh0XCI+UGxheWVyIGludmVudG9yeSBmdWxsPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uZmxleC1yb3cge1xyXG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmZsZXgtcm93IGRpdiB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uaW52IHtcclxuXHR3aWR0aDphdXRvO1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgIV92bS5ub3NlYXJjaFxuICAgICAgICA/IF9jKFwiZmlsdGVyYm94XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uaW52Lml0ZW1zLCBcIm1pbi1pdGVtc1wiOiBcIjEwXCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyZWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uZmlsdGVyZWQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtcm93XCIgfSwgW1xuICAgICAgICBfdm0uaW52Lm1heCA+IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5pbnYuaXRlbXMubGVuZ3RoICtcbiAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoX3ZtLmludi5tYXgudmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgVXNlZFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5pbnYuY291bnQgPiAwXG4gICAgICAgICAgPyBfYyhcImJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uc2VsbEFsbCB9IH0sIFtfdm0uX3YoXCJTZWxsIEFsbFwiKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGFibGVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnYgaXRlbS10YWJsZVwiIH0sXG4gICAgICAgIF92bS5fbChfdm0ubm9zZWFyY2ggPyBfdm0uaW52Lml0ZW1zIDogX3ZtLmZpbHRlcmVkLCBmdW5jdGlvbihpdCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgIHsga2V5OiBpdC5pZCB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIGl0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdC5uYW1lICsgX3ZtLmNvdW50KGl0KSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLnNlbGVjdGluZ1xuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBpdC5lcXVpcHBhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiZXF1aXBcIiwgaXQsIF92bS5pbnYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFcXVpcFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBpdC5vbnVzZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChfdm0uVVNFLCBpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVzZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0udGFrZSAmJiAhX3ZtLnBsYXllckZ1bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uVGFrZShpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRha2VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcInNlbGxcIiwgaXQsIF92bS5pbnYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIGl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdC52YWx1ZSA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwic2VsbFwiLCBpdCwgX3ZtLmludiwgaXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGwgQWxsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIiwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGVjdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBsYXllckZ1bGxcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm4tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlBsYXllciBpbnZlbnRvcnkgZnVsbFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbnZlbnRvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWI3ZmJiN2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYjdmYmI3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjdmYmI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjdmYmI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjdmYmI3YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYjdmYmI3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL2ludmVudG9yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiN2ZiYjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW52ZW50b3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiN2ZiYjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludmVudG9yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI3ZmJiN2Emc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9