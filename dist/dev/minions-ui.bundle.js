(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["minions-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.minions .minion-title[data-v-ee7d6c4a] {\r\n\tdisplay:flex;\r\n\twidth: 380px;\r\n\tjustify-content: space-between;\n}\ndiv.minions[data-v-ee7d6c4a] {\r\n\tpadding-left:16px;\r\n\theight:100%;\n}\n.char-list[data-v-ee7d6c4a] {\r\n\theight:85%;\r\n\toverflow-y:auto;\n}\ntable[data-v-ee7d6c4a] {\r\n\tborder-spacing: 4px 0px;\r\n\tborder-collapse: collapse;\r\n\trow-gap: 4px;\r\n\tcolumn-gap: 10px;\n}\ntr:first-child th[data-v-ee7d6c4a] {\r\n\tborder-bottom: 1pt solid black;\r\n\tmargin: 4px 4px;\n}\ntr > th[data-v-ee7d6c4a]:first-of-type {\r\n\ttext-align: left;\n}\nth[data-v-ee7d6c4a] {\r\n\tpadding: 4px 10px;\n}\ntd.num-align[data-v-ee7d6c4a] {\r\n\tpadding: 8px;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/minions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.js");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filterbox.vue */ "./src/ui/components/filterbox.vue");





/* harmony default export */ __webpack_exports__["default"] = ({

	data(){
		return {
			filtered:null
		};
	},
	components:{
		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
	},
	computed:{

		inRaid() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.raid.running },

		minions(){ return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.minions; },

		items(){ return this.minions.filter( v=>v.value>=1 ); },

	},
	methods:{

		levelCap(b){
			return b.level + this.minions.allyTotal > this.minions.maxAllies;
		},

		toggleActive(b) {
			this.minions.setActive( b, !b.active );
		},

		dismiss(b){
			this.minions.remove(b);
		},

		toNum(v) {
			if ( v === undefined ) return 0;
			return ( (v && typeof v === 'object') ? v.value : v ).toFixed(1);
		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=template&id=ee7d6c4a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/minions.vue?vue&type=template&id=ee7d6c4a&scoped=true& ***!
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
    { staticClass: "minions" },
    [
      _c("filterbox", {
        attrs: { items: _vm.items, "min-items": "10" },
        model: {
          value: _vm.filtered,
          callback: function($$v) {
            _vm.filtered = $$v
          },
          expression: "filtered"
        }
      }),
      _vm._v(" "),
      _vm.inRaid
        ? _c("span", { staticClass: "warn-text" }, [
            _vm._v("Cannot change active minions while adventuring")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "minion-title" }, [
        _c("span", [
          _vm._v(
            _vm._s(
              _vm.minions.count + " / " + Math.floor(_vm.minions.max) + " Used"
            )
          )
        ]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "Allies Power: " +
              _vm._s(
                _vm.minions.allyTotal.toFixed(2) +
                  " / " +
                  Math.floor(_vm.minions.maxAllies.value)
              )
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "char-list" }, [
        _c(
          "table",
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.filtered, function(b) {
              return _c(
                "tr",
                {
                  key: b.id,
                  staticClass: "char-row",
                  on: {
                    "!mouseenter": function($event) {
                      $event.stopPropagation()
                      return _vm.dispatch("itemover", $event, b)
                    }
                  }
                },
                [
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: b.name,
                          expression: "b.name"
                        }
                      ],
                      staticClass: "fld-name",
                      attrs: { type: "text" },
                      domProps: { value: b.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(b, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "num-align" }, [
                    _vm._v(
                      _vm._s(_vm.toNum(b.hp)) +
                        " / " +
                        _vm._s(_vm.toNum(b.maxHp))
                    )
                  ]),
                  _vm._v(" "),
                  !b.alive
                    ? _c("td", [_vm._v("Dead")])
                    : _c("td", [
                        _c(
                          "button",
                          {
                            attrs: {
                              disabled:
                                _vm.inRaid || (_vm.levelCap(b) && !b.active)
                            },
                            on: {
                              click: function($event) {
                                return _vm.toggleActive(b)
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(b.active === true ? "Rest" : "Activate")
                            )
                          ]
                        )
                      ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "confirm",
                        {
                          on: {
                            confirm: function($event) {
                              return _vm.dismiss(b)
                            }
                          }
                        },
                        [_vm._v(_vm._s("Dismiss"))]
                      )
                    ],
                    1
                  )
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
      _c("th", { staticClass: "num-align" }, [_vm._v("Hp")]),
      _c("th", [_vm._v("active")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/ui/minions.vue":
/*!****************************!*\
  !*** ./src/ui/minions.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _minions_vue_vue_type_template_id_ee7d6c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minions.vue?vue&type=template&id=ee7d6c4a&scoped=true& */ "./src/ui/minions.vue?vue&type=template&id=ee7d6c4a&scoped=true&");
/* harmony import */ var _minions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minions.vue?vue&type=script&lang=js& */ "./src/ui/minions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _minions_vue_vue_type_style_index_0_id_ee7d6c4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css& */ "./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _minions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _minions_vue_vue_type_template_id_ee7d6c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _minions_vue_vue_type_template_id_ee7d6c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee7d6c4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/minions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/minions.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/ui/minions.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./minions.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_style_index_0_id_ee7d6c4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=style&index=0&id=ee7d6c4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_style_index_0_id_ee7d6c4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_style_index_0_id_ee7d6c4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_style_index_0_id_ee7d6c4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_style_index_0_id_ee7d6c4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_style_index_0_id_ee7d6c4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/minions.vue?vue&type=template&id=ee7d6c4a&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/ui/minions.vue?vue&type=template&id=ee7d6c4a&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_template_id_ee7d6c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./minions.vue?vue&type=template&id=ee7d6c4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/minions.vue?vue&type=template&id=ee7d6c4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_template_id_ee7d6c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_minions_vue_vue_type_template_id_ee7d6c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);