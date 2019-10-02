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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events */ "./src/events.js");







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
	created() {
		this.TRY_BUY = _events__WEBPACK_IMPORTED_MODULE_4__["TRY_BUY"];
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
                      return _vm.emit("itemover", $event, b)
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
                            return _vm.emit(_vm.TRY_BUY, b)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvYmVzdGlhcnkudnVlP2U2ODciLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2Jlc3RpYXJ5LnZ1ZT85MDEwIiwid2VicGFjazovLy9zcmMvdWkvYmVzdGlhcnkudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9iZXN0aWFyeS52dWU/NjU2OSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvYmVzdGlhcnkudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9iZXN0aWFyeS52dWU/M2Q1OSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvYmVzdGlhcnkudnVlPzBmNzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2Jlc3RpYXJ5LnZ1ZT9kYWI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxvQ0FBb0MsaUJBQWlCLDJCQUEyQixxQkFBcUIsZ0JBQWdCLEdBQUcsK0JBQStCLGlCQUFpQixzQkFBc0IseUJBQXlCLEdBQUcsMEJBQTBCLDhCQUE4QixnQ0FBZ0MsbUJBQW1CLHVCQUF1QixHQUFHLHNDQUFzQyxxQ0FBcUMsc0JBQXNCLEdBQUcsMENBQTBDLHVCQUF1QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEdm9CLGNBQWMsbUJBQU8sQ0FBQyxvY0FBaVA7O0FBRXZRLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlk7QUFDUTtBQUNDO0FBQ2U7QUFDZjs7QUFFckI7O0FBRWYsU0FBUyxrREFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFTO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxREFBSztBQUN4Qjs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQiw2Q0FBSTs7QUFFdkI7O0FBRUEscUJBQXFCLDZDQUFJOztBQUV6QixrQkFBa0IsNkNBQUk7O0FBRXRCLHdCQUF3Qiw2Q0FBSTs7QUFFNUI7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyREQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQkFBMEI7QUFDL0I7QUFDQTtBQUNBLGdCQUFnQixzQ0FBc0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFdBQVcsMEJBQTBCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUc1RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEySCxDQUFnQixxTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvSTtBQUFBO0FBQUE7QUFBQTtBQUEyUyxDQUFnQixrV0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZGV2L2Jlc3RpYXJ5LXVpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZGl2LmJlc3RpYXJ5W2RhdGEtdi0yMjMzNjdkNl0ge1xcclxcbmRpc3BsYXk6ZmxleDtcXHJcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbm1hcmdpbi1sZWZ0OjEycHg7XFxyXFxuaGVpZ2h0OjEwMCU7XFxufVxcbi5jaGFyLWxpc3RbZGF0YS12LTIyMzM2N2Q2XSB7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG5cXHRvdmVyZmxvdy15OmF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbToxNHB4O1xcbn1cXG50YWJsZVtkYXRhLXYtMjIzMzY3ZDZdIHtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogNHB4IDBweDtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdHJvdy1nYXA6IDRweDtcXHJcXG5cXHRjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG50cjpmaXJzdC1jaGlsZCB0aFtkYXRhLXYtMjIzMzY3ZDZdIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHQgc29saWQgYmxhY2s7XFxyXFxuXFx0bWFyZ2luOiA0cHggNHB4O1xcbn1cXG50ciA+IHRoW2RhdGEtdi0yMjMzNjdkNl06Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxudGhbZGF0YS12LTIyMzM2N2Q2XSB7XFxyXFxuXFx0cGFkZGluZzogNHB4IDEwcHg7XFxufVxcbnRkLm51bS1hbGlnbltkYXRhLXYtMjIzMzY3ZDZdIHtcXHJcXG5cXHRwYWRkaW5nOiA4cHg7XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIzMzY3ZDYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iZXN0aWFyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjMzNjdkNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iZXN0aWFyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjMzNjdkNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8c2NyaXB0PlxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJztcclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4vaXRlbXNCYXNlJztcclxuaW1wb3J0IFJhbmdlIGZyb20gJy4uL3ZhbHVlcy9yYW5nZSc7XHJcbmltcG9ydCBGaWx0ZXJCb3ggZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUnO1xyXG5pbXBvcnQgeyBUUllfQlVZIH0gZnJvbSAnLi4vZXZlbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0bWl4aW5zOltJdGVtQmFzZV0sXHJcblx0ZGF0YSgpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZmlsdGVyZWQ6bnVsbFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6e1xyXG5cdFx0ZmlsdGVyYm94OkZpbHRlckJveFxyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMuVFJZX0JVWSA9IFRSWV9CVVk7XHJcblx0fSxcclxuXHRtZXRob2RzOntcclxuXHJcblx0XHRzaG93SHAobSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50b3RhbExvcmUgPj0gNCptLmxldmVsO1xyXG5cdFx0fSxcclxuXHJcblx0XHR0b051bSh2KSB7XHJcblx0XHRcdHJldHVybiAoIHR5cGVvZiB2ID09PSAnb2JqZWN0JyA/XHJcblx0XHRcdFx0KCB2IGluc3RhbmNlb2YgUmFuZ2UgPyB2Lm1heCA6IHYudmFsdWUgKSA6IHYgKS50b0ZpeGVkKDApO1xyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cdGNvbXB1dGVkOntcclxuXHJcblx0XHRtaW5pb25zKCl7cmV0dXJuIEdhbWUuc3RhdGUubWluaW9uczsgfSxcclxuXHJcblx0XHR0b3RhbExvcmUoKSB7IHJldHVybiB0aGlzLmFuaW1hbHMudmFsdWUgKyB0aGlzLmxvcmUudmFsdWUgKyB0aGlzLmRlbW9ub2xvZ3kudmFsdWU7IH0sXHJcblxyXG5cdFx0YW5pbWFscygpIHsgcmV0dXJuIEdhbWUuc3RhdGUuZ2V0RGF0YSgnYW5pbWFscycpO30sXHJcblxyXG5cdFx0bG9yZSgpIHsgcmV0dXJuIEdhbWUuc3RhdGUuZ2V0RGF0YSgnbG9yZScpO30sXHJcblxyXG5cdFx0ZGVtb25vbG9neSgpIHsgcmV0dXJuIEdhbWUuc3RhdGUuZ2V0RGF0YSgnZGVtb25vbG9neScpO30sXHJcblxyXG5cdFx0aXRlbXMoKXtcclxuXHRcdFx0cmV0dXJuIEdhbWUuc3RhdGUubW9uc3RlcnMuZmlsdGVyKCB2PT52LnZhbHVlPj0xICkuc29ydChcclxuXHRcdFx0XHQoYSxiKT0+YS5sZXZlbCAtIGIubGV2ZWxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJiZXN0aWFyeVwiPlxyXG5cclxuXHQ8ZmlsdGVyYm94IHYtbW9kZWw9XCJmaWx0ZXJlZFwiIDppdGVtcz1cIml0ZW1zXCIgbWluLWl0ZW1zPVwiMTRcIiAvPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiY2hhci1saXN0XCI+XHJcblx0PHRhYmxlIGNsYXNzPVwiYmVzdGlhcnlcIj5cclxuXHRcdDx0cj48dGg+Q3JlYXR1cmU8L3RoPjx0aD5MZXZlbDwvdGg+PHRoPlNsYWluPC90aD48dGggY2xhc3M9XCJudW0tYWxpZ25cIj5IcDwvdGg+PC90cj5cclxuXHRcdDx0ciB2LWZvcj1cImIgaW4gZmlsdGVyZWRcIiA6a2V5PVwiYi5pZFwiIEBtb3VzZWVudGVyLmNhcHR1cmUuc3RvcD1cImVtaXQoICdpdGVtb3ZlcicsJGV2ZW50LGIpXCI+XHJcblx0XHRcdDx0aD57eyBiLm5hbWUgfX08L3RoPlxyXG5cdFx0XHQ8dGQgY2xhc3M9XCJudW0tYWxpZ25cIj57eyBiLmxldmVsIH19PC90ZD5cclxuXHRcdFx0PHRkIGNsYXNzPVwibnVtLWFsaWduXCI+e3sgYi52YWx1ZSB9fTwvdGQ+XHJcblx0XHRcdDx0ZCBjbGFzcz1cIm51bS1hbGlnblwiPnt7IHNob3dIcChiKSA/IHRvTnVtKGIuaHApIDogJz8/JyB9fTwvdGQ+XHJcblx0XHRcdDx0ZD48YnV0dG9uIEBjbGljaz1cImVtaXQoIFRSWV9CVVksYilcIiA6ZGlzYWJsZWQ9XCJiLnVuaXF1ZXx8IWJ1eWFibGUoYil8fG1pbmlvbnMuZnJlZVNwYWNlKCk9PTB8fGIudmFsdWU8MTBcIj5CdXk8L2J1dHRvbj48L3RkPlxyXG5cdFx0PC90cj5cclxuXHQ8L3RhYmxlPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbmRpdi5iZXN0aWFyeSB7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxubWFyZ2luLWxlZnQ6MTJweDtcclxuaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5jaGFyLWxpc3Qge1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0b3ZlcmZsb3cteTphdXRvO1xyXG5cdG1hcmdpbi1ib3R0b206MTRweDtcclxufVxyXG5cclxudGFibGUge1xyXG5cdGJvcmRlci1zcGFjaW5nOiA0cHggMHB4O1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0cm93LWdhcDogNHB4O1xyXG5cdGNvbHVtbi1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbnRyOmZpcnN0LWNoaWxkIHRoIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHQgc29saWQgYmxhY2s7XHJcblx0bWFyZ2luOiA0cHggNHB4O1xyXG59XHJcblxyXG50ciA+IHRoOmZpcnN0LW9mLXR5cGUge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRoIHtcclxuXHRwYWRkaW5nOiA0cHggMTBweDtcclxufVxyXG5cclxudGQubnVtLWFsaWduIHtcclxuXHRwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYmVzdGlhcnlcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZmlsdGVyYm94XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5pdGVtcywgXCJtaW4taXRlbXNcIjogXCIxNFwiIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXJlZCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uZmlsdGVyZWQgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyZWRcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXItbGlzdFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmVzdGlhcnlcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZpbHRlcmVkLCBmdW5jdGlvbihiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBiLmlkLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIGIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoYi5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtLWFsaWduXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGIubGV2ZWwpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bS1hbGlnblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhiLnZhbHVlKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJudW0tYWxpZ25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNob3dIcChiKSA/IF92bS50b051bShiLmhwKSA6IFwiPz9cIikpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLnVuaXF1ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uYnV5YWJsZShiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5taW5pb25zLmZyZWVTcGFjZSgpID09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLnZhbHVlIDwgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KF92bS5UUllfQlVZLCBiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQnV5XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDcmVhdHVyZVwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTGV2ZWxcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlNsYWluXCIpXSksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtLWFsaWduXCIgfSwgW192bS5fdihcIkhwXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Jlc3RpYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Jlc3RpYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMjMzNjdkNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIyMzM2N2Q2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIyMzM2N2Q2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIyMzM2N2Q2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9iZXN0aWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjIzMzY3ZDYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjIzMzY3ZDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9iZXN0aWFyeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jlc3RpYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIzMzY3ZDYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmVzdGlhcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyMzM2N2Q2JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==