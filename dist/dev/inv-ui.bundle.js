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