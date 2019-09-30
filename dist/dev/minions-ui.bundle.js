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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWluaW9ucy52dWU/OWE5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWluaW9ucy52dWU/ZTA3NCIsIndlYnBhY2s6Ly8vc3JjL3VpL21pbmlvbnMudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9taW5pb25zLnZ1ZT9jM2RkIiwid2VicGFjazovLy8uL3NyYy91aS9taW5pb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWluaW9ucy52dWU/ZDM1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWluaW9ucy52dWU/YTA1MiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWluaW9ucy52dWU/NGZmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsaURBQWlELG1CQUFtQixtQkFBbUIscUNBQXFDLEdBQUcsZ0NBQWdDLHdCQUF3QixrQkFBa0IsR0FBRywrQkFBK0IsaUJBQWlCLHNCQUFzQixHQUFHLDBCQUEwQiw4QkFBOEIsZ0NBQWdDLG1CQUFtQix1QkFBdUIsR0FBRyxzQ0FBc0MscUNBQXFDLHNCQUFzQixHQUFHLDBDQUEwQyx1QkFBdUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHOzs7Ozs7Ozs7Ozs7O0FDRGxzQixjQUFjLG1CQUFPLENBQUMsa2NBQWdQOztBQUV0USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJZOztBQUV3Qjs7QUFFcEM7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBUztBQUNyQjtBQUNBOztBQUVBLG9CQUFvQiw2Q0FBSTs7QUFFeEIsb0JBQW9CLDZDQUFJOztBQUV4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5QkFBeUI7QUFDOUI7QUFDQTtBQUNBLGdCQUFnQixzQ0FBc0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QyxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzNGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTBILENBQWdCLG9NQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlJO0FBQUE7QUFBQTtBQUFBO0FBQTBTLENBQWdCLGlXQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZXYvbWluaW9ucy11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5taW5pb25zIC5taW5pb24tdGl0bGVbZGF0YS12LWVlN2Q2YzRhXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdHdpZHRoOiAzODBweDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmRpdi5taW5pb25zW2RhdGEtdi1lZTdkNmM0YV0ge1xcclxcblxcdHBhZGRpbmctbGVmdDoxNnB4O1xcclxcblxcdGhlaWdodDoxMDAlO1xcbn1cXG4uY2hhci1saXN0W2RhdGEtdi1lZTdkNmM0YV0ge1xcclxcblxcdGhlaWdodDo4NSU7XFxyXFxuXFx0b3ZlcmZsb3cteTphdXRvO1xcbn1cXG50YWJsZVtkYXRhLXYtZWU3ZDZjNGFdIHtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogNHB4IDBweDtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdHJvdy1nYXA6IDRweDtcXHJcXG5cXHRjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG50cjpmaXJzdC1jaGlsZCB0aFtkYXRhLXYtZWU3ZDZjNGFdIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHQgc29saWQgYmxhY2s7XFxyXFxuXFx0bWFyZ2luOiA0cHggNHB4O1xcbn1cXG50ciA+IHRoW2RhdGEtdi1lZTdkNmM0YV06Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxudGhbZGF0YS12LWVlN2Q2YzRhXSB7XFxyXFxuXFx0cGFkZGluZzogNHB4IDEwcHg7XFxufVxcbnRkLm51bS1hbGlnbltkYXRhLXYtZWU3ZDZjNGFdIHtcXHJcXG5cXHRwYWRkaW5nOiA4cHg7XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWluaW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZTdkNmM0YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21pbmlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWU3ZDZjNGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWluaW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZTdkNmM0YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8c2NyaXB0PlxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJztcclxuXHJcbmltcG9ydCBGaWx0ZXJCb3ggZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRkYXRhKCl7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRmaWx0ZXJlZDpudWxsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcG9uZW50czp7XHJcblx0XHRmaWx0ZXJib3g6RmlsdGVyQm94XHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0aW5SYWlkKCkgeyByZXR1cm4gR2FtZS5zdGF0ZS5yYWlkLnJ1bm5pbmcgfSxcclxuXHJcblx0XHRtaW5pb25zKCl7IHJldHVybiBHYW1lLnN0YXRlLm1pbmlvbnM7IH0sXHJcblxyXG5cdFx0aXRlbXMoKXsgcmV0dXJuIHRoaXMubWluaW9ucy5maWx0ZXIoIHY9PnYudmFsdWU+PTEgKTsgfSxcclxuXHJcblx0fSxcclxuXHRtZXRob2RzOntcclxuXHJcblx0XHRsZXZlbENhcChiKXtcclxuXHRcdFx0cmV0dXJuIGIubGV2ZWwgKyB0aGlzLm1pbmlvbnMuYWxseVRvdGFsID4gdGhpcy5taW5pb25zLm1heEFsbGllcztcclxuXHRcdH0sXHJcblxyXG5cdFx0dG9nZ2xlQWN0aXZlKGIpIHtcclxuXHRcdFx0dGhpcy5taW5pb25zLnNldEFjdGl2ZSggYiwgIWIuYWN0aXZlICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRpc21pc3MoYil7XHJcblx0XHRcdHRoaXMubWluaW9ucy5yZW1vdmUoYik7XHJcblx0XHR9LFxyXG5cclxuXHRcdHRvTnVtKHYpIHtcclxuXHRcdFx0aWYgKCB2ID09PSB1bmRlZmluZWQgKSByZXR1cm4gMDtcclxuXHRcdFx0cmV0dXJuICggKHYgJiYgdHlwZW9mIHYgPT09ICdvYmplY3QnKSA/IHYudmFsdWUgOiB2ICkudG9GaXhlZCgxKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJtaW5pb25zXCI+XHJcblxyXG5cdDxmaWx0ZXJib3ggdi1tb2RlbD1cImZpbHRlcmVkXCIgOml0ZW1zPVwiaXRlbXNcIiBtaW4taXRlbXM9XCIxMFwiIC8+XHJcblxyXG5cdDxzcGFuIHYtaWY9XCJpblJhaWRcIiBjbGFzcz1cIndhcm4tdGV4dFwiPkNhbm5vdCBjaGFuZ2UgYWN0aXZlIG1pbmlvbnMgd2hpbGUgYWR2ZW50dXJpbmc8L3NwYW4+XHJcblx0PGRpdiBjbGFzcz1cIm1pbmlvbi10aXRsZVwiPlxyXG5cdFx0PHNwYW4+e3sgbWluaW9ucy5jb3VudCArICcgLyAnICsgTWF0aC5mbG9vcihtaW5pb25zLm1heCkgKyAnIFVzZWQnIH19PC9zcGFuPlxyXG5cdFx0PHNwYW4+QWxsaWVzIFBvd2VyOiB7eyBtaW5pb25zLmFsbHlUb3RhbC50b0ZpeGVkKDIpICsgJyAvICcgKyBNYXRoLmZsb29yKCBtaW5pb25zLm1heEFsbGllcy52YWx1ZSApIH19PC9zcGFuPjwvZGl2PlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiY2hhci1saXN0XCI+XHJcblx0PHRhYmxlPlxyXG5cdFx0PHRyPjx0aD5DcmVhdHVyZTwvdGg+PHRoIGNsYXNzPVwibnVtLWFsaWduXCI+SHA8L3RoPjx0aD5hY3RpdmU8L3RoPjwvdHI+XHJcblx0XHQ8dHIgY2xhc3M9XCJjaGFyLXJvd1wiIHYtZm9yPVwiYiBpbiBmaWx0ZXJlZFwiIDprZXk9XCJiLmlkXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZGlzcGF0Y2goJ2l0ZW1vdmVyJywkZXZlbnQsYilcIj5cclxuXHRcdFx0PHRoPjxpbnB1dCBjbGFzcz1cImZsZC1uYW1lXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiYi5uYW1lXCI+PC90aD5cclxuXHRcdFx0PHRkIGNsYXNzPVwibnVtLWFsaWduXCI+e3sgdG9OdW0oYi5ocCkgfX0gLyB7eyB0b051bSggYi5tYXhIcCApIH19PC90ZD5cclxuXHJcblx0XHRcdDx0ZCB2LWlmPVwiIWIuYWxpdmVcIj5EZWFkPC90ZD5cclxuXHRcdFx0PHRkIHYtZWxzZT5cclxuXHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInRvZ2dsZUFjdGl2ZShiKVwiIDpkaXNhYmxlZD1cImluUmFpZHx8KCBsZXZlbENhcChiKSYmIWIuYWN0aXZlIClcIj57eyBiLmFjdGl2ZSA9PT0gdHJ1ZSA/ICdSZXN0JyA6ICdBY3RpdmF0ZScgfX08L2J1dHRvbj5cclxuXHRcdFx0PC90ZD5cclxuXHJcblx0XHRcdDx0ZD48Y29uZmlybSBAY29uZmlybT1cImRpc21pc3MoYilcIj57eyAnRGlzbWlzcyd9fTwvY29uZmlybT48L3RkPlxyXG5cdFx0PC90cj5cclxuXHQ8L3RhYmxlPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbmRpdi5taW5pb25zIC5taW5pb24tdGl0bGUge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHR3aWR0aDogMzgwcHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5kaXYubWluaW9ucyB7XHJcblx0cGFkZGluZy1sZWZ0OjE2cHg7XHJcblx0aGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5jaGFyLWxpc3Qge1xyXG5cdGhlaWdodDo4NSU7XHJcblx0b3ZlcmZsb3cteTphdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDRweCAwcHg7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRyb3ctZ2FwOiA0cHg7XHJcblx0Y29sdW1uLWdhcDogMTBweDtcclxuXHJcbn1cclxuXHJcbnRyOmZpcnN0LWNoaWxkIHRoIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHQgc29saWQgYmxhY2s7XHJcblx0bWFyZ2luOiA0cHggNHB4O1xyXG59XHJcblxyXG50ciA+IHRoOmZpcnN0LW9mLXR5cGUge1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRoIHtcclxuXHRwYWRkaW5nOiA0cHggMTBweDtcclxufVxyXG5cclxudGQubnVtLWFsaWduIHtcclxuXHRwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWluaW9uc1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJmaWx0ZXJib3hcIiwge1xuICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLml0ZW1zLCBcIm1pbi1pdGVtc1wiOiBcIjEwXCIgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcmVkLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5maWx0ZXJlZCA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJlZFwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pblJhaWRcbiAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJDYW5ub3QgY2hhbmdlIGFjdGl2ZSBtaW5pb25zIHdoaWxlIGFkdmVudHVyaW5nXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1pbmlvbi10aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgIF92bS5taW5pb25zLmNvdW50ICsgXCIgLyBcIiArIE1hdGguZmxvb3IoX3ZtLm1pbmlvbnMubWF4KSArIFwiIFVzZWRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJBbGxpZXMgUG93ZXI6IFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgIF92bS5taW5pb25zLmFsbHlUb3RhbC50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgIFwiIC8gXCIgK1xuICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihfdm0ubWluaW9ucy5tYXhBbGxpZXMudmFsdWUpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXItbGlzdFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZpbHRlcmVkLCBmdW5jdGlvbihiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBiLmlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hhci1yb3dcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNwYXRjaChcIml0ZW1vdmVyXCIsICRldmVudCwgYilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJiLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxkLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBiLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChiLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtLWFsaWduXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50b051bShiLmhwKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRvTnVtKGIubWF4SHApKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhYi5hbGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW192bS5fdihcIkRlYWRcIildKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pblJhaWQgfHwgKF92bS5sZXZlbENhcChiKSAmJiAhYi5hY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUFjdGl2ZShiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhiLmFjdGl2ZSA9PT0gdHJ1ZSA/IFwiUmVzdFwiIDogXCJBY3RpdmF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaXNtaXNzKGIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoXCJEaXNtaXNzXCIpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXR1cmVcIildKSxcbiAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJudW0tYWxpZ25cIiB9LCBbX3ZtLl92KFwiSHBcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcImFjdGl2ZVwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21pbmlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVlN2Q2YzRhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21pbmlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9taW5pb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9taW5pb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVlN2Q2YzRhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlZTdkNmM0YVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VlN2Q2YzRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VlN2Q2YzRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VlN2Q2YzRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9taW5pb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZTdkNmM0YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlZTdkNmM0YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL21pbmlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21pbmlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWluaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWluaW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZTdkNmM0YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21pbmlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWU3ZDZjNGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWluaW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWU3ZDZjNGEmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9