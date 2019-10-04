(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["scraft-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.spellcraft[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\ndiv.spellcraft .userspells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tpadding: 8px;\r\n\tborder-bottom: 1pt solid var( --separator-color );\n}\ndiv.userspells .spells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction:row;\n}\ndiv.spells .custom[data-v-622e812c] {\r\n\tmargin-right:20px;\n}\n.crafting .options[data-v-622e812c] {\r\n\tpadding-bottom: 4px;\n}\ndiv.spellcraft .bottom[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\tpadding-top: 8px;\r\n\tpadding-left: 8px;\n}\ndiv.spellcraft .crafting[data-v-622e812c], div.spellcraft .allspells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/scraft.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _composites_userSpells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composites/userSpells */ "./src/composites/userSpells.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game */ "./src/game.js");






/* harmony default export */ __webpack_exports__["default"] = ({

	mixins:_itemsBase__WEBPACK_IMPORTED_MODULE_0__["default"],
	data(){

		return {

			/**
			 * List of spells in current crafting.
			 */
			list:[],

			/**
			 * Craft info object.
			 */
			craft:{

				name:'new spell',
				level:0,
				buy:null
			}

		};

	},
	methods:{

		/**
		 * Remove user spell from UserSpells
		 */
		removeSpell(s){
			this.userSpells.remove(s);
		},

		canAdd(s) {
			return s.level + this.craft.level <= this.maxLevels;
		},

		/**
		 * @function create - create the new spell combination.
		 */
		create() {

			_game__WEBPACK_IMPORTED_MODULE_2__["default"].payCost( this.craft.buy );

			this.userSpells.create( this.list, this.craft.name );
			this.list = [];

			this.craft.level = 0;
			this.craft.buy = null;

		},

		/**
		 * Add spell to the current crafting group.
		 */
		add(s) {

			this.list.push(s);
			this.craft.level += s.level;
			this.craft.buy = Object(_composites_userSpells__WEBPACK_IMPORTED_MODULE_1__["craftCost"])( this.list );

		},

		/**
		 * Remove spell from building list.
		 */
		removeAt(i) {

			let s = this.list[i];
			if ( s ) this.craft.level -= s.level;
			this.craft.buy = Object(_composites_userSpells__WEBPACK_IMPORTED_MODULE_1__["craftCost"])( this.list );

			this.list.splice(i,1);

		},

		remove(s) {

			let ind = this.list.indexOf(s);
			if ( ind >= 0 ) {

				this.list.splice( ind, 1 );
				this.craft.level -= s.level;
				this.craft.buy = Object(_composites_userSpells__WEBPACK_IMPORTED_MODULE_1__["craftCost"])( this.list );

			}

		}

	},
	computed:{

		/**
		 * Determine if the group being created can be crafted.
		 * cost+length + user slots available.
		 * @returns {boolean}
		 */
		canCraft() {

			return !this.userSpells.full() && this.list.length>0
				&& _game__WEBPACK_IMPORTED_MODULE_2__["default"].canPay( this.craft.buy );

		},

		/**
		 * @property {UserSpells} userSpells - spells already crafted.
		 */
		userSpells() {
			return _game__WEBPACK_IMPORTED_MODULE_2__["default"].state.userSpells;
		},

		/**
		 * @property {Spell[]} spells - all spells in game.
		 */
		spells() {
			return _game__WEBPACK_IMPORTED_MODULE_2__["default"].state.filterItems( v=>v.type === 'spell');
		},

		/**
		 * Spellcraft power.
		 */
		scraft(){
			return _game__WEBPACK_IMPORTED_MODULE_2__["default"].state.getData('scraft');
		},

		maxLevels() {
			return Math.floor( this.scraft.value );
		}

	}

});



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=template&id=622e812c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/scraft.vue?vue&type=template&id=622e812c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "spellcraft" }, [
    _c("div", { staticClass: "userspells" }, [
      _c("div", [
        _vm._v(
          "\r\n\t\tCustom Spells: " +
            _vm._s(
              Math.floor(_vm.userSpells.used) +
                " / " +
                Math.floor(_vm.userSpells.max.value)
            ) +
            "\r\n\t"
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "spells" },
        _vm._l(_vm.userSpells.items, function(c) {
          return _c(
            "div",
            {
              key: c.id,
              staticClass: "custom",
              on: {
                "!mouseenter": function($event) {
                  $event.stopPropagation()
                  return _vm.emit("itemover", $event, c)
                }
              }
            },
            [
              _c("span", { staticClass: "text-entry" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: c.name,
                      expression: "c.name"
                    }
                  ],
                  staticClass: "fld-name",
                  attrs: { type: "text" },
                  domProps: { value: c.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(c, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.removeSpell(c)
                    }
                  }
                },
                [_vm._v("Remove")]
              )
            ]
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "bottom" }, [
      _c(
        "div",
        { staticClass: "crafting" },
        [
          _c("div", { staticClass: "options" }, [
            _vm.craft.level >= _vm.maxLevels
              ? _c("span", { staticClass: "warn-text" }, [
                  _vm._v("You are at your power limit.")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "text-entry" }, [
              _c("label", { attrs: { for: _vm.elmId("spName") } }, [
                _vm._v("Spell")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.craft.name,
                    expression: "craft.name"
                  }
                ],
                staticClass: "fld-name",
                attrs: { id: _vm.elmId("spName"), type: "text" },
                domProps: { value: _vm.craft.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.craft, "name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                on: {
                  "!mouseenter": function($event) {
                    $event.stopPropagation()
                    return _vm.emit("itemover", $event, _vm.craft)
                  }
                }
              },
              [
                _c("span", [
                  _vm._v(
                    "Power: " +
                      _vm._s(
                        _vm.craft.level + " / " + Math.floor(_vm.maxLevels)
                      )
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    attrs: { disabled: !_vm.canCraft },
                    on: { click: _vm.create }
                  },
                  [_vm._v("Craft")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.list, function(s, ind) {
            return _c(
              "div",
              {
                key: ind,
                on: {
                  "!mouseenter": function($event) {
                    $event.stopPropagation()
                    return _vm.emit("itemover", $event, s)
                  }
                }
              },
              [
                _c("span", [_vm._v(_vm._s(s.name))]),
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.removeAt(ind)
                      }
                    }
                  },
                  [_vm._v("Remove")]
                )
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "allspells" },
        _vm._l(_vm.spells, function(s) {
          return _c(
            "div",
            {
              key: s.id,
              on: {
                "!mouseenter": function($event) {
                  $event.stopPropagation()
                  return _vm.emit("itemover", $event, s)
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(s.name))]),
              _c(
                "button",
                {
                  attrs: { disabled: !_vm.canAdd(s) },
                  on: {
                    click: function($event) {
                      return _vm.add(s)
                    }
                  }
                },
                [_vm._v("Add")]
              )
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/ui/sections/scraft.vue":
/*!************************************!*\
  !*** ./src/ui/sections/scraft.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scraft_vue_vue_type_template_id_622e812c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scraft.vue?vue&type=template&id=622e812c&scoped=true& */ "./src/ui/sections/scraft.vue?vue&type=template&id=622e812c&scoped=true&");
/* harmony import */ var _scraft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scraft.vue?vue&type=script&lang=js& */ "./src/ui/sections/scraft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _scraft_vue_vue_type_style_index_0_id_622e812c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& */ "./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _scraft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _scraft_vue_vue_type_template_id_622e812c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _scraft_vue_vue_type_template_id_622e812c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "622e812c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/sections/scraft.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/sections/scraft.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/ui/sections/scraft.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./scraft.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_style_index_0_id_622e812c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_style_index_0_id_622e812c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_style_index_0_id_622e812c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_style_index_0_id_622e812c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_style_index_0_id_622e812c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_style_index_0_id_622e812c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/sections/scraft.vue?vue&type=template&id=622e812c&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/ui/sections/scraft.vue?vue&type=template&id=622e812c&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_template_id_622e812c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./scraft.vue?vue&type=template&id=622e812c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=template&id=622e812c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_template_id_622e812c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_scraft_vue_vue_type_template_id_622e812c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT80NjA0Iiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzI0YTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzZmNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWU/ZjYwZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT9lNTZlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzdjMWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLHNDQUFzQyxtQkFBbUIsNkJBQTZCLEdBQUcsK0NBQStDLG1CQUFtQiw2QkFBNkIsbUJBQW1CLHdEQUF3RCxHQUFHLDJDQUEyQyxtQkFBbUIseUJBQXlCLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLHVDQUF1QywwQkFBMEIsR0FBRywyQ0FBMkMsbUJBQW1CLDBCQUEwQixxQ0FBcUMsdUJBQXVCLHdCQUF3QixHQUFHLHlGQUF5RixtQkFBbUIsNkJBQTZCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEeHpCLGNBQWMsbUJBQU8sQ0FBQyxrZEFBd1A7O0FBRTlRLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjs7QUFFa0I7QUFDeEI7O0FBRWY7O0FBRWYsUUFBUSxrREFBUTtBQUNoQjs7QUFF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QTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUc7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzFGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTRILENBQWdCLG1NQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhKO0FBQUE7QUFBQTtBQUFBO0FBQXFULENBQWdCLGdXQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZXYvc2NyYWZ0LXVpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZGl2LnNwZWxsY3JhZnRbZGF0YS12LTYyMmU4MTJjXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdi5zcGVsbGNyYWZ0IC51c2Vyc3BlbGxzW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHBhZGRpbmc6IDhweDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHQgc29saWQgdmFyKCAtLXNlcGFyYXRvci1jb2xvciApO1xcbn1cXG5kaXYudXNlcnNwZWxscyAuc3BlbGxzW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpyb3c7XFxufVxcbmRpdi5zcGVsbHMgLmN1c3RvbVtkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6MjBweDtcXG59XFxuLmNyYWZ0aW5nIC5vcHRpb25zW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcbmRpdi5zcGVsbGNyYWZ0IC5ib3R0b21bZGF0YS12LTYyMmU4MTJjXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmctdG9wOiA4cHg7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbmRpdi5zcGVsbGNyYWZ0IC5jcmFmdGluZ1tkYXRhLXYtNjIyZTgxMmNdLCBkaXYuc3BlbGxjcmFmdCAuYWxsc3BlbGxzW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4uL2l0ZW1zQmFzZSc7XHJcblxyXG5pbXBvcnQge2NyYWZ0Q29zdH0gZnJvbSAnLi4vLi4vY29tcG9zaXRlcy91c2VyU3BlbGxzJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdG1peGluczpJdGVtQmFzZSxcclxuXHRkYXRhKCl7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBMaXN0IG9mIHNwZWxscyBpbiBjdXJyZW50IGNyYWZ0aW5nLlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0bGlzdDpbXSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBDcmFmdCBpbmZvIG9iamVjdC5cclxuXHRcdFx0ICovXHJcblx0XHRcdGNyYWZ0OntcclxuXHJcblx0XHRcdFx0bmFtZTonbmV3IHNwZWxsJyxcclxuXHRcdFx0XHRsZXZlbDowLFxyXG5cdFx0XHRcdGJ1eTpudWxsXHJcblx0XHRcdH1cclxuXHJcblx0XHR9O1xyXG5cclxuXHR9LFxyXG5cdG1ldGhvZHM6e1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHVzZXIgc3BlbGwgZnJvbSBVc2VyU3BlbGxzXHJcblx0XHQgKi9cclxuXHRcdHJlbW92ZVNwZWxsKHMpe1xyXG5cdFx0XHR0aGlzLnVzZXJTcGVsbHMucmVtb3ZlKHMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjYW5BZGQocykge1xyXG5cdFx0XHRyZXR1cm4gcy5sZXZlbCArIHRoaXMuY3JhZnQubGV2ZWwgPD0gdGhpcy5tYXhMZXZlbHM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGZ1bmN0aW9uIGNyZWF0ZSAtIGNyZWF0ZSB0aGUgbmV3IHNwZWxsIGNvbWJpbmF0aW9uLlxyXG5cdFx0ICovXHJcblx0XHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0XHRHYW1lLnBheUNvc3QoIHRoaXMuY3JhZnQuYnV5ICk7XHJcblxyXG5cdFx0XHR0aGlzLnVzZXJTcGVsbHMuY3JlYXRlKCB0aGlzLmxpc3QsIHRoaXMuY3JhZnQubmFtZSApO1xyXG5cdFx0XHR0aGlzLmxpc3QgPSBbXTtcclxuXHJcblx0XHRcdHRoaXMuY3JhZnQubGV2ZWwgPSAwO1xyXG5cdFx0XHR0aGlzLmNyYWZ0LmJ1eSA9IG51bGw7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZCBzcGVsbCB0byB0aGUgY3VycmVudCBjcmFmdGluZyBncm91cC5cclxuXHRcdCAqL1xyXG5cdFx0YWRkKHMpIHtcclxuXHJcblx0XHRcdHRoaXMubGlzdC5wdXNoKHMpO1xyXG5cdFx0XHR0aGlzLmNyYWZ0LmxldmVsICs9IHMubGV2ZWw7XHJcblx0XHRcdHRoaXMuY3JhZnQuYnV5ID0gY3JhZnRDb3N0KCB0aGlzLmxpc3QgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHNwZWxsIGZyb20gYnVpbGRpbmcgbGlzdC5cclxuXHRcdCAqL1xyXG5cdFx0cmVtb3ZlQXQoaSkge1xyXG5cclxuXHRcdFx0bGV0IHMgPSB0aGlzLmxpc3RbaV07XHJcblx0XHRcdGlmICggcyApIHRoaXMuY3JhZnQubGV2ZWwgLT0gcy5sZXZlbDtcclxuXHRcdFx0dGhpcy5jcmFmdC5idXkgPSBjcmFmdENvc3QoIHRoaXMubGlzdCApO1xyXG5cclxuXHRcdFx0dGhpcy5saXN0LnNwbGljZShpLDEpO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVtb3ZlKHMpIHtcclxuXHJcblx0XHRcdGxldCBpbmQgPSB0aGlzLmxpc3QuaW5kZXhPZihzKTtcclxuXHRcdFx0aWYgKCBpbmQgPj0gMCApIHtcclxuXHJcblx0XHRcdFx0dGhpcy5saXN0LnNwbGljZSggaW5kLCAxICk7XHJcblx0XHRcdFx0dGhpcy5jcmFmdC5sZXZlbCAtPSBzLmxldmVsO1xyXG5cdFx0XHRcdHRoaXMuY3JhZnQuYnV5ID0gY3JhZnRDb3N0KCB0aGlzLmxpc3QgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6e1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSBncm91cCBiZWluZyBjcmVhdGVkIGNhbiBiZSBjcmFmdGVkLlxyXG5cdFx0ICogY29zdCtsZW5ndGggKyB1c2VyIHNsb3RzIGF2YWlsYWJsZS5cclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdFx0ICovXHJcblx0XHRjYW5DcmFmdCgpIHtcclxuXHJcblx0XHRcdHJldHVybiAhdGhpcy51c2VyU3BlbGxzLmZ1bGwoKSAmJiB0aGlzLmxpc3QubGVuZ3RoPjBcclxuXHRcdFx0XHQmJiBHYW1lLmNhblBheSggdGhpcy5jcmFmdC5idXkgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtVc2VyU3BlbGxzfSB1c2VyU3BlbGxzIC0gc3BlbGxzIGFscmVhZHkgY3JhZnRlZC5cclxuXHRcdCAqL1xyXG5cdFx0dXNlclNwZWxscygpIHtcclxuXHRcdFx0cmV0dXJuIEdhbWUuc3RhdGUudXNlclNwZWxscztcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1NwZWxsW119IHNwZWxscyAtIGFsbCBzcGVsbHMgaW4gZ2FtZS5cclxuXHRcdCAqL1xyXG5cdFx0c3BlbGxzKCkge1xyXG5cdFx0XHRyZXR1cm4gR2FtZS5zdGF0ZS5maWx0ZXJJdGVtcyggdj0+di50eXBlID09PSAnc3BlbGwnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTcGVsbGNyYWZ0IHBvd2VyLlxyXG5cdFx0ICovXHJcblx0XHRzY3JhZnQoKXtcclxuXHRcdFx0cmV0dXJuIEdhbWUuc3RhdGUuZ2V0RGF0YSgnc2NyYWZ0Jyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1heExldmVscygpIHtcclxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuc2NyYWZ0LnZhbHVlICk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cInNwZWxsY3JhZnRcIj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ1c2Vyc3BlbGxzXCI+XHJcblxyXG5cdDxkaXY+XHJcblx0XHRDdXN0b20gU3BlbGxzOiB7eyBNYXRoLmZsb29yKCB1c2VyU3BlbGxzLnVzZWQpICsgJyAvICcgKyBNYXRoLmZsb29yKCB1c2VyU3BlbGxzLm1heC52YWx1ZSApIH19XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cInNwZWxsc1wiPlxyXG5cdDxkaXYgY2xhc3M9XCJjdXN0b21cIiB2LWZvcj1cImMgaW4gdXNlclNwZWxscy5pdGVtc1wiIDprZXk9XCJjLmlkXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQsYylcIj5cclxuXHRcdDxzcGFuIGNsYXNzPVwidGV4dC1lbnRyeVwiPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJmbGQtbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImMubmFtZVwiPlxyXG5cdFx0PC9zcGFuPlxyXG5cdFx0PGJ1dHRvbiBAY2xpY2s9XCJyZW1vdmVTcGVsbChjKVwiPlJlbW92ZTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYm90dG9tXCI+XHJcbjxkaXYgY2xhc3M9XCJjcmFmdGluZ1wiPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJ3YXJuLXRleHRcIiB2LWlmPVwiY3JhZnQubGV2ZWw+PW1heExldmVsc1wiPllvdSBhcmUgYXQgeW91ciBwb3dlciBsaW1pdC48L3NwYW4+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cInRleHQtZW50cnlcIj48bGFiZWwgOmZvcj1cImVsbUlkKCdzcE5hbWUnKVwiPlNwZWxsPC9sYWJlbD5cclxuXHRcdDxpbnB1dCBjbGFzcz1cImZsZC1uYW1lXCIgOmlkPVwiZWxtSWQoJ3NwTmFtZScpXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiY3JhZnQubmFtZVwiPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PCEtLWNocm9tZSB3cmFwLS0+XHJcblx0XHQ8c3BhbiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCRldmVudCxjcmFmdClcIj5cclxuXHRcdDxzcGFuPlBvd2VyOiB7eyBjcmFmdC5sZXZlbCArICcgLyAnICsgTWF0aC5mbG9vcihtYXhMZXZlbHMpIH19PC9zcGFuPlxyXG5cdFx0PGJ1dHRvbiBAY2xpY2s9XCJjcmVhdGVcIiA6ZGlzYWJsZWQ9XCIhY2FuQ3JhZnRcIj5DcmFmdDwvYnV0dG9uPlxyXG5cdFx0PC9zcGFuPlxyXG5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiB2LWZvcj1cIihzLGluZCkgaW4gbGlzdFwiIDprZXk9XCJpbmRcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCRldmVudCxzKVwiPlxyXG5cdFx0PHNwYW4+e3tzLm5hbWV9fTwvc3Bhbj48YnV0dG9uIEBjbGljaz1cInJlbW92ZUF0KGluZClcIj5SZW1vdmU8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYWxsc3BlbGxzXCI+XHJcblxyXG5cdDxkaXYgdi1mb3I9XCIocykgaW4gc3BlbGxzXCIgOmtleT1cInMuaWRcIiAgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQscylcIj5cclxuXHRcdDxzcGFuPnt7cy5uYW1lfX08L3NwYW4+PGJ1dHRvbiBAY2xpY2s9XCJhZGQocylcIiA6ZGlzYWJsZWQ9XCIhY2FuQWRkKHMpXCI+QWRkPC9idXR0b24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuZGl2LnNwZWxsY3JhZnQge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5kaXYuc3BlbGxjcmFmdCAudXNlcnNwZWxscyB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFwdCBzb2xpZCB2YXIoIC0tc2VwYXJhdG9yLWNvbG9yICk7XHJcbn1cclxuXHJcbmRpdi51c2Vyc3BlbGxzIC5zcGVsbHMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbn1cclxuXHJcbmRpdi5zcGVsbHMgLmN1c3RvbSB7XHJcblx0bWFyZ2luLXJpZ2h0OjIwcHg7XHJcbn1cclxuXHJcbi5jcmFmdGluZyAub3B0aW9ucyB7XHJcblx0cGFkZGluZy1ib3R0b206IDRweDtcclxufVxyXG5cclxuZGl2LnNwZWxsY3JhZnQgLmJvdHRvbSB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHBhZGRpbmctdG9wOiA4cHg7XHJcblx0cGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbmRpdi5zcGVsbGNyYWZ0IC5jcmFmdGluZywgZGl2LnNwZWxsY3JhZnQgLmFsbHNwZWxscyB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwZWxsY3JhZnRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2Vyc3BlbGxzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXHJcXG5cXHRcXHRDdXN0b20gU3BlbGxzOiBcIiArXG4gICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoX3ZtLnVzZXJTcGVsbHMudXNlZCkgK1xuICAgICAgICAgICAgICAgIFwiIC8gXCIgK1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoX3ZtLnVzZXJTcGVsbHMubWF4LnZhbHVlKVxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBcIlxcclxcblxcdFwiXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNwZWxsc1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0udXNlclNwZWxscy5pdGVtcywgZnVuY3Rpb24oYykge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogYy5pZCxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBjKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1lbnRyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYy5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZC1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGMubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGMsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlU3BlbGwoYylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlJlbW92ZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3JhZnRpbmdcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLmNyYWZ0LmxldmVsID49IF92bS5tYXhMZXZlbHNcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJZb3UgYXJlIGF0IHlvdXIgcG93ZXIgbGltaXQuXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZW50cnlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IF92bS5lbG1JZChcInNwTmFtZVwiKSB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJTcGVsbFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNyYWZ0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3JhZnQubmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGQtbmFtZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBfdm0uZWxtSWQoXCJzcE5hbWVcIiksIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jcmFmdC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNyYWZ0LCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgX3ZtLmNyYWZ0KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiUG93ZXI6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3JhZnQubGV2ZWwgKyBcIiAvIFwiICsgTWF0aC5mbG9vcihfdm0ubWF4TGV2ZWxzKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uY2FuQ3JhZnQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGUgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDcmFmdFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24ocywgaW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGluZCxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgcylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3Mocy5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVBdChpbmQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlbW92ZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFsbHNwZWxsc1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0uc3BlbGxzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBzLmlkLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhzLm5hbWUpKV0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNhbkFkZChzKSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBZGRcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYyMmU4MTJjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjIyZTgxMmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjIyZTgxMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjIyZTgxMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjIyZTgxMmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==