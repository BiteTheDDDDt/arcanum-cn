(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["bestiary-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.bestiary[data-v-223367d6] {\r\ndisplay:flex;\r\nflex-direction: column;\r\nmargin-left:12px;\r\nheight:100%;\n}\n.char-list[data-v-223367d6] {\r\n\twidth:100%;\r\n\toverflow-y:auto;\r\n\tmargin-bottom:14px;\n}\ntable[data-v-223367d6] {\r\n\tborder-spacing: 4px 0px;\r\n\tborder-collapse: collapse;\r\n\trow-gap: 4px;\r\n\tcolumn-gap: 10px;\n}\ntr:first-child th[data-v-223367d6] {\r\n\tborder-bottom: 1pt solid black;\r\n\tmargin: 4px 4px;\n}\ntr > th[data-v-223367d6]:first-of-type {\r\n\ttext-align: left;\n}\nth[data-v-223367d6] {\r\n\tpadding: 4px 10px;\n}\ntd.num-align[data-v-223367d6] {\r\n\tpadding: 8px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/bestiary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _values_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../values/range */ "./src/values/range.js");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filterbox.vue */ "./src/ui/components/filterbox.vue");






/* harmony default export */ __webpack_exports__["default"] = ({

	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_1__["default"]],
	data(){
		return {
			filtered:null
		};
	},
	components:{
		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
	},
	methods:{

		showHp(m) {
			return this.totalLore >= 4*m.level;
		},

		toNum(v) {
			return ( typeof v === 'object' ?
				( v instanceof _values_range__WEBPACK_IMPORTED_MODULE_2__["default"] ? v.max : v.value ) : v ).toFixed(0);
		}

	},
	computed:{

		minions(){return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.minions; },

		totalLore() { return this.animals.value + this.lore.value + this.demonology.value; },

		animals() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.getData('animals');},

		lore() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.getData('lore');},

		demonology() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.getData('demonology');},

		items(){
			return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.monsters.filter( v=>v.value>=1 ).sort(
				(a,b)=>a.level - b.level
			);
		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=template&id=223367d6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/bestiary.vue?vue&type=template&id=223367d6&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "bestiary" },
    [
      _c("filterbox", {
        attrs: { items: _vm.items, "min-items": "14" },
        model: {
          value: _vm.filtered,
          callback: function($$v) {
            _vm.filtered = $$v
          },
          expression: "filtered"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "char-list" }, [
        _c(
          "table",
          { staticClass: "bestiary" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.filtered, function(b) {
              return _c(
                "tr",
                {
                  key: b.id,
                  on: {
                    "!mouseenter": function($event) {
                      $event.stopPropagation()
                      return _vm.dispatch("itemover", $event, b)
                    }
                  }
                },
                [
                  _c("th", [_vm._v(_vm._s(b.name))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "num-align" }, [
                    _vm._v(_vm._s(b.level))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "num-align" }, [
                    _vm._v(_vm._s(b.value))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "num-align" }, [
                    _vm._v(_vm._s(_vm.showHp(b) ? _vm.toNum(b.hp) : "??"))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        attrs: {
                          disabled:
                            b.unique ||
                            !_vm.buyable(b) ||
                            _vm.minions.freeSpace() == 0 ||
                            b.value < 10
                        },
                        on: {
                          click: function($event) {
                            return _vm.dispatch("buy", b)
                          }
                        }
                      },
                      [_vm._v("Buy")]
                    )
                  ])
                ]
              )
            })
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Creature")]),
      _c("th", [_vm._v("Level")]),
      _c("th", [_vm._v("Slain")]),
      _c("th", { staticClass: "num-align" }, [_vm._v("Hp")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/ui/bestiary.vue":
/*!*****************************!*\
  !*** ./src/ui/bestiary.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bestiary_vue_vue_type_template_id_223367d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bestiary.vue?vue&type=template&id=223367d6&scoped=true& */ "./src/ui/bestiary.vue?vue&type=template&id=223367d6&scoped=true&");
/* harmony import */ var _bestiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bestiary.vue?vue&type=script&lang=js& */ "./src/ui/bestiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _bestiary_vue_vue_type_style_index_0_id_223367d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css& */ "./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bestiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bestiary_vue_vue_type_template_id_223367d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bestiary_vue_vue_type_template_id_223367d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "223367d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/bestiary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/bestiary.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/ui/bestiary.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./bestiary.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css&":
/*!**************************************************************************************!*\
  !*** ./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_style_index_0_id_223367d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=style&index=0&id=223367d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_style_index_0_id_223367d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_style_index_0_id_223367d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_style_index_0_id_223367d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_style_index_0_id_223367d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_style_index_0_id_223367d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/bestiary.vue?vue&type=template&id=223367d6&scoped=true&":
/*!************************************************************************!*\
  !*** ./src/ui/bestiary.vue?vue&type=template&id=223367d6&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_template_id_223367d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./bestiary.vue?vue&type=template&id=223367d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/bestiary.vue?vue&type=template&id=223367d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_template_id_223367d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bestiary_vue_vue_type_template_id_223367d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvYmVzdGlhcnkudnVlP2U2ODciLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2Jlc3RpYXJ5LnZ1ZT85MDEwIiwid2VicGFjazovLy9zcmMvdWkvYmVzdGlhcnkudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9iZXN0aWFyeS52dWU/NjU2OSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvYmVzdGlhcnkudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9iZXN0aWFyeS52dWU/M2Q1OSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvYmVzdGlhcnkudnVlPzBmNzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2Jlc3RpYXJ5LnZ1ZT9kYWI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxvQ0FBb0MsaUJBQWlCLDJCQUEyQixxQkFBcUIsZ0JBQWdCLEdBQUcsK0JBQStCLGlCQUFpQixzQkFBc0IseUJBQXlCLEdBQUcsMEJBQTBCLDhCQUE4QixnQ0FBZ0MsbUJBQW1CLHVCQUF1QixHQUFHLHNDQUFzQyxxQ0FBcUMsc0JBQXNCLEdBQUcsMENBQTBDLHVCQUF1QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEdm9CLGNBQWMsbUJBQU8sQ0FBQyxvY0FBaVA7O0FBRXZRLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCWTtBQUNRO0FBQ0M7QUFDZTs7QUFFcEM7O0FBRWYsU0FBUyxrREFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscURBQUs7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsNkNBQUk7O0FBRXZCOztBQUVBLHFCQUFxQiw2Q0FBSTs7QUFFekIsa0JBQWtCLDZDQUFJOztBQUV0Qix3QkFBd0IsNkNBQUk7O0FBRTVCO0FBQ0EsVUFBVSw2Q0FBSTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakREO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMEJBQTBCO0FBQy9CO0FBQ0E7QUFDQSxnQkFBZ0Isc0NBQXNDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxXQUFXLDBCQUEwQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHNUY7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMkgsQ0FBZ0IscU1BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL0k7QUFBQTtBQUFBO0FBQUE7QUFBMlMsQ0FBZ0Isa1dBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImRldi9iZXN0aWFyeS11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5iZXN0aWFyeVtkYXRhLXYtMjIzMzY3ZDZdIHtcXHJcXG5kaXNwbGF5OmZsZXg7XFxyXFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5tYXJnaW4tbGVmdDoxMnB4O1xcclxcbmhlaWdodDoxMDAlO1xcbn1cXG4uY2hhci1saXN0W2RhdGEtdi0yMjMzNjdkNl0ge1xcclxcblxcdHdpZHRoOjEwMCU7XFxyXFxuXFx0b3ZlcmZsb3cteTphdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206MTRweDtcXG59XFxudGFibGVbZGF0YS12LTIyMzM2N2Q2XSB7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDRweCAwcHg7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRyb3ctZ2FwOiA0cHg7XFxyXFxuXFx0Y29sdW1uLWdhcDogMTBweDtcXG59XFxudHI6Zmlyc3QtY2hpbGQgdGhbZGF0YS12LTIyMzM2N2Q2XSB7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB0IHNvbGlkIGJsYWNrO1xcclxcblxcdG1hcmdpbjogNHB4IDRweDtcXG59XFxudHIgPiB0aFtkYXRhLXYtMjIzMzY3ZDZdOmZpcnN0LW9mLXR5cGUge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbnRoW2RhdGEtdi0yMjMzNjdkNl0ge1xcclxcblxcdHBhZGRpbmc6IDRweCAxMHB4O1xcbn1cXG50ZC5udW0tYWxpZ25bZGF0YS12LTIyMzM2N2Q2XSB7XFxyXFxuXFx0cGFkZGluZzogOHB4O1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jlc3RpYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIzMzY3ZDYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIzMzY3ZDYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XHJcbmltcG9ydCBJdGVtQmFzZSBmcm9tICcuL2l0ZW1zQmFzZSc7XHJcbmltcG9ydCBSYW5nZSBmcm9tICcuLi92YWx1ZXMvcmFuZ2UnO1xyXG5pbXBvcnQgRmlsdGVyQm94IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXJib3gudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0bWl4aW5zOltJdGVtQmFzZV0sXHJcblx0ZGF0YSgpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZmlsdGVyZWQ6bnVsbFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6e1xyXG5cdFx0ZmlsdGVyYm94OkZpbHRlckJveFxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0c2hvd0hwKG0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxMb3JlID49IDQqbS5sZXZlbDtcclxuXHRcdH0sXHJcblxyXG5cdFx0dG9OdW0odikge1xyXG5cdFx0XHRyZXR1cm4gKCB0eXBlb2YgdiA9PT0gJ29iamVjdCcgP1xyXG5cdFx0XHRcdCggdiBpbnN0YW5jZW9mIFJhbmdlID8gdi5tYXggOiB2LnZhbHVlICkgOiB2ICkudG9GaXhlZCgwKTtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0bWluaW9ucygpe3JldHVybiBHYW1lLnN0YXRlLm1pbmlvbnM7IH0sXHJcblxyXG5cdFx0dG90YWxMb3JlKCkgeyByZXR1cm4gdGhpcy5hbmltYWxzLnZhbHVlICsgdGhpcy5sb3JlLnZhbHVlICsgdGhpcy5kZW1vbm9sb2d5LnZhbHVlOyB9LFxyXG5cclxuXHRcdGFuaW1hbHMoKSB7IHJldHVybiBHYW1lLnN0YXRlLmdldERhdGEoJ2FuaW1hbHMnKTt9LFxyXG5cclxuXHRcdGxvcmUoKSB7IHJldHVybiBHYW1lLnN0YXRlLmdldERhdGEoJ2xvcmUnKTt9LFxyXG5cclxuXHRcdGRlbW9ub2xvZ3koKSB7IHJldHVybiBHYW1lLnN0YXRlLmdldERhdGEoJ2RlbW9ub2xvZ3knKTt9LFxyXG5cclxuXHRcdGl0ZW1zKCl7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLm1vbnN0ZXJzLmZpbHRlciggdj0+di52YWx1ZT49MSApLnNvcnQoXHJcblx0XHRcdFx0KGEsYik9PmEubGV2ZWwgLSBiLmxldmVsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwiYmVzdGlhcnlcIj5cclxuXHJcblx0PGZpbHRlcmJveCB2LW1vZGVsPVwiZmlsdGVyZWRcIiA6aXRlbXM9XCJpdGVtc1wiIG1pbi1pdGVtcz1cIjE0XCIgLz5cclxuXHJcblx0PGRpdiBjbGFzcz1cImNoYXItbGlzdFwiPlxyXG5cdDx0YWJsZSBjbGFzcz1cImJlc3RpYXJ5XCI+XHJcblx0XHQ8dHI+PHRoPkNyZWF0dXJlPC90aD48dGg+TGV2ZWw8L3RoPjx0aD5TbGFpbjwvdGg+PHRoIGNsYXNzPVwibnVtLWFsaWduXCI+SHA8L3RoPjwvdHI+XHJcblx0XHQ8dHIgdi1mb3I9XCJiIGluIGZpbHRlcmVkXCIgOmtleT1cImIuaWRcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJkaXNwYXRjaCgnaXRlbW92ZXInLCRldmVudCxiKVwiPlxyXG5cdFx0XHQ8dGg+e3sgYi5uYW1lIH19PC90aD5cclxuXHRcdFx0PHRkIGNsYXNzPVwibnVtLWFsaWduXCI+e3sgYi5sZXZlbCB9fTwvdGQ+XHJcblx0XHRcdDx0ZCBjbGFzcz1cIm51bS1hbGlnblwiPnt7IGIudmFsdWUgfX08L3RkPlxyXG5cdFx0XHQ8dGQgY2xhc3M9XCJudW0tYWxpZ25cIj57eyBzaG93SHAoYikgPyB0b051bShiLmhwKSA6ICc/PycgfX08L3RkPlxyXG5cdFx0XHQ8dGQ+PGJ1dHRvbiBAY2xpY2s9XCJkaXNwYXRjaCgnYnV5JyxiKVwiIDpkaXNhYmxlZD1cImIudW5pcXVlfHwhYnV5YWJsZShiKXx8bWluaW9ucy5mcmVlU3BhY2UoKT09MHx8Yi52YWx1ZTwxMFwiPkJ1eTwvYnV0dG9uPjwvdGQ+XHJcblx0XHQ8L3RyPlxyXG5cdDwvdGFibGU+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuZGl2LmJlc3RpYXJ5IHtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5tYXJnaW4tbGVmdDoxMnB4O1xyXG5oZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmNoYXItbGlzdCB7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRvdmVyZmxvdy15OmF1dG87XHJcblx0bWFyZ2luLWJvdHRvbToxNHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDRweCAwcHg7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRyb3ctZ2FwOiA0cHg7XHJcblx0Y29sdW1uLWdhcDogMTBweDtcclxufVxyXG5cclxudHI6Zmlyc3QtY2hpbGQgdGgge1xyXG5cdGJvcmRlci1ib3R0b206IDFwdCBzb2xpZCBibGFjaztcclxuXHRtYXJnaW46IDRweCA0cHg7XHJcbn1cclxuXHJcbnRyID4gdGg6Zmlyc3Qtb2YtdHlwZSB7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGgge1xyXG5cdHBhZGRpbmc6IDRweCAxMHB4O1xyXG59XHJcblxyXG50ZC5udW0tYWxpZ24ge1xyXG5cdHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJiZXN0aWFyeVwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJmaWx0ZXJib3hcIiwge1xuICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLml0ZW1zLCBcIm1pbi1pdGVtc1wiOiBcIjE0XCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcmVkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5maWx0ZXJlZCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJlZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hhci1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiZXN0aWFyeVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uZmlsdGVyZWQsIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGIuaWQsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGlzcGF0Y2goXCJpdGVtb3ZlclwiLCAkZXZlbnQsIGIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoYi5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtLWFsaWduXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGIubGV2ZWwpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bS1hbGlnblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhiLnZhbHVlKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJudW0tYWxpZ25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNob3dIcChiKSA/IF92bS50b051bShiLmhwKSA6IFwiPz9cIikpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLnVuaXF1ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uYnV5YWJsZShiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5taW5pb25zLmZyZWVTcGFjZSgpID09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLnZhbHVlIDwgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNwYXRjaChcImJ1eVwiLCBiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQnV5XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDcmVhdHVyZVwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTGV2ZWxcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlNsYWluXCIpXSksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtLWFsaWduXCIgfSwgW192bS5fdihcIkhwXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Jlc3RpYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Jlc3RpYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMjMzNjdkNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIyMzM2N2Q2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIyMzM2N2Q2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIyMzM2N2Q2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9iZXN0aWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjIzMzY3ZDYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjIzMzY3ZDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9iZXN0aWFyeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jlc3RpYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIzMzY3ZDYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==