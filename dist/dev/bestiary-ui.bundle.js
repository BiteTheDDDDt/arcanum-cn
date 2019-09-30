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