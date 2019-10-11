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
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../craft */ "./src/craft.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game */ "./src/game.js");






/* harmony default export */ __webpack_exports__["default"] = ({

	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_0__["default"]],
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
			this.craft.buy = Object(_craft__WEBPACK_IMPORTED_MODULE_1__["spellCost"])( this.list );

		},

		/**
		 * Remove spell from building list.
		 */
		removeAt(i) {

			let s = this.list[i];
			if ( s ) this.craft.level -= s.level;

			this.list.splice(i,1);
			this.craft.buy = Object(_craft__WEBPACK_IMPORTED_MODULE_1__["spellCost"])( this.list );

		},

		remove(s) {

			let ind = this.list.indexOf(s);
			if ( ind >= 0 ) {

				this.list.splice( ind, 1 );
				this.craft.level -= s.level;
				this.craft.buy = Object(_craft__WEBPACK_IMPORTED_MODULE_1__["spellCost"])( this.list );

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
			return _game__WEBPACK_IMPORTED_MODULE_2__["default"].state.filterItems( v=>v.type === 'spell'&&!this.locked(v)&&v.owned);
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

/***/ "./src/craft.js":
/*!**********************!*\
  !*** ./src/craft.js ***!
  \**********************/
/*! exports provided: minionCost, spellCost, schoolCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minionCost", function() { return minionCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spellCost", function() { return spellCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schoolCost", function() { return schoolCost; });
/**
 * Functions for crafting/buying items.
 */

const addCost = ( buy, type, amt ) => {

	let e = buy[type];
	buy[type] = e ? e + amt : amt;

};

const minionCost = ( b ) => {

	let cost = {};

	let level = b.level;
	if ( b.regen ) level = level+1;

	if ( b.regen ) {
	}

	cost.gold = 100*(level*level);

}

 /**
 * Return a cost object for crafting the list of spells.
 * @param {Spell[]} list
 */
const spellCost = (list) => {

	var res = {};

	for( let i = list.length-1; i>= 0; i--) {

		var s = list[i];
		res.gold = (res.gold||0) + 300*s.level;

		schoolCost( s.school, s.level, res );

	}

	return res;

}

 /**
 * Generic cost function for crafting for a school of magic.
 * @param {string|string[]} school
 * @param {object} res
 */
const schoolCost = ( school, level=1, res={} ) => {

	if ( Array.isArray(school) ) {
		for( let i = school.length-1; i>=0; i--) schoolCost(school[i],level,res);
	} else if ( school != null ) {

		addCost( res, school + 'gem', level*level );

		if ( level <= 5 ) addCost( res, 'codices', level );
		else addCost( res, 'tomes', level = 5 );

	}

	return res;

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT80NjA0Iiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzI0YTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzZmNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyYWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlP2Y2MGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWU/ZTU2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT83YzFlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxzQ0FBc0MsbUJBQW1CLDZCQUE2QixHQUFHLCtDQUErQyxtQkFBbUIsNkJBQTZCLG1CQUFtQix3REFBd0QsR0FBRywyQ0FBMkMsbUJBQW1CLHlCQUF5QixHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRyx1Q0FBdUMsMEJBQTBCLEdBQUcsMkNBQTJDLG1CQUFtQiwwQkFBMEIscUNBQXFDLHVCQUF1Qix3QkFBd0IsR0FBRyx5RkFBeUYsbUJBQW1CLDZCQUE2QixHQUFHOzs7Ozs7Ozs7Ozs7O0FDRHh6QixjQUFjLG1CQUFPLENBQUMsa2RBQXdQOztBQUU5USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7O0FBRUU7QUFDUjs7QUFFZjs7QUFFZixTQUFTLGtEQUFRO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLDZDQUFJOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFTOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHdEQUFTOztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVM7O0FBRTlCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyw2Q0FBSTs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQUk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQUk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQUk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxSUQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hELGVBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekMsNkJBQTZCLGdCQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25ELDJCQUEyQixTQUFTLDJCQUEyQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNPOztBQUVQOztBQUVBLDRCQUE0QixPQUFPOztBQUVuQztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLE9BQU87QUFDbEI7QUFDTyw0Q0FBNEM7O0FBRW5EO0FBQ0EsK0JBQStCLE1BQU07QUFDckMsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUcxRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE0SCxDQUFnQixtTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoSjtBQUFBO0FBQUE7QUFBQTtBQUFxVCxDQUFnQixnV0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6VTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZGV2L3NjcmFmdC11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5zcGVsbGNyYWZ0W2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYuc3BlbGxjcmFmdCAudXNlcnNwZWxsc1tkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiA4cHg7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB0IHNvbGlkIHZhciggLS1zZXBhcmF0b3ItY29sb3IgKTtcXG59XFxuZGl2LnVzZXJzcGVsbHMgLnNwZWxsc1tkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246cm93O1xcbn1cXG5kaXYuc3BlbGxzIC5jdXN0b21bZGF0YS12LTYyMmU4MTJjXSB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OjIwcHg7XFxufVxcbi5jcmFmdGluZyAub3B0aW9uc1tkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5kaXYuc3BlbGxjcmFmdCAuYm90dG9tW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRwYWRkaW5nLXRvcDogOHB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG5kaXYuc3BlbGxjcmFmdCAuY3JhZnRpbmdbZGF0YS12LTYyMmU4MTJjXSwgZGl2LnNwZWxsY3JhZnQgLmFsbHNwZWxsc1tkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjxzY3JpcHQ+XHJcbmltcG9ydCBJdGVtQmFzZSBmcm9tICcuLi9pdGVtc0Jhc2UnO1xyXG5cclxuaW1wb3J0IHtzcGVsbENvc3R9IGZyb20gJy4uLy4uL2NyYWZ0JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdG1peGluczpbSXRlbUJhc2VdLFxyXG5cdGRhdGEoKXtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIExpc3Qgb2Ygc3BlbGxzIGluIGN1cnJlbnQgY3JhZnRpbmcuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRsaXN0OltdLFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIENyYWZ0IGluZm8gb2JqZWN0LlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0Y3JhZnQ6e1xyXG5cclxuXHRcdFx0XHRuYW1lOiduZXcgc3BlbGwnLFxyXG5cdFx0XHRcdGxldmVsOjAsXHJcblx0XHRcdFx0YnV5Om51bGxcclxuXHRcdFx0fVxyXG5cclxuXHRcdH07XHJcblxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdXNlciBzcGVsbCBmcm9tIFVzZXJTcGVsbHNcclxuXHRcdCAqL1xyXG5cdFx0cmVtb3ZlU3BlbGwocyl7XHJcblx0XHRcdHRoaXMudXNlclNwZWxscy5yZW1vdmUocyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNhbkFkZChzKSB7XHJcblx0XHRcdHJldHVybiBzLmxldmVsICsgdGhpcy5jcmFmdC5sZXZlbCA8PSB0aGlzLm1heExldmVscztcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAZnVuY3Rpb24gY3JlYXRlIC0gY3JlYXRlIHRoZSBuZXcgc3BlbGwgY29tYmluYXRpb24uXHJcblx0XHQgKi9cclxuXHRcdGNyZWF0ZSgpIHtcclxuXHJcblx0XHRcdEdhbWUucGF5Q29zdCggdGhpcy5jcmFmdC5idXkgKTtcclxuXHJcblx0XHRcdHRoaXMudXNlclNwZWxscy5jcmVhdGUoIHRoaXMubGlzdCwgdGhpcy5jcmFmdC5uYW1lICk7XHJcblx0XHRcdHRoaXMubGlzdCA9IFtdO1xyXG5cclxuXHRcdFx0dGhpcy5jcmFmdC5sZXZlbCA9IDA7XHJcblx0XHRcdHRoaXMuY3JhZnQuYnV5ID0gbnVsbDtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIHNwZWxsIHRvIHRoZSBjdXJyZW50IGNyYWZ0aW5nIGdyb3VwLlxyXG5cdFx0ICovXHJcblx0XHRhZGQocykge1xyXG5cclxuXHRcdFx0dGhpcy5saXN0LnB1c2gocyk7XHJcblx0XHRcdHRoaXMuY3JhZnQubGV2ZWwgKz0gcy5sZXZlbDtcclxuXHRcdFx0dGhpcy5jcmFmdC5idXkgPSBzcGVsbENvc3QoIHRoaXMubGlzdCApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgc3BlbGwgZnJvbSBidWlsZGluZyBsaXN0LlxyXG5cdFx0ICovXHJcblx0XHRyZW1vdmVBdChpKSB7XHJcblxyXG5cdFx0XHRsZXQgcyA9IHRoaXMubGlzdFtpXTtcclxuXHRcdFx0aWYgKCBzICkgdGhpcy5jcmFmdC5sZXZlbCAtPSBzLmxldmVsO1xyXG5cclxuXHRcdFx0dGhpcy5saXN0LnNwbGljZShpLDEpO1xyXG5cdFx0XHR0aGlzLmNyYWZ0LmJ1eSA9IHNwZWxsQ29zdCggdGhpcy5saXN0ICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmUocykge1xyXG5cclxuXHRcdFx0bGV0IGluZCA9IHRoaXMubGlzdC5pbmRleE9mKHMpO1xyXG5cdFx0XHRpZiAoIGluZCA+PSAwICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLmxpc3Quc3BsaWNlKCBpbmQsIDEgKTtcclxuXHRcdFx0XHR0aGlzLmNyYWZ0LmxldmVsIC09IHMubGV2ZWw7XHJcblx0XHRcdFx0dGhpcy5jcmFmdC5idXkgPSBzcGVsbENvc3QoIHRoaXMubGlzdCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIGdyb3VwIGJlaW5nIGNyZWF0ZWQgY2FuIGJlIGNyYWZ0ZWQuXHJcblx0XHQgKiBjb3N0K2xlbmd0aCArIHVzZXIgc2xvdHMgYXZhaWxhYmxlLlxyXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0XHQgKi9cclxuXHRcdGNhbkNyYWZ0KCkge1xyXG5cclxuXHRcdFx0cmV0dXJuICF0aGlzLnVzZXJTcGVsbHMuZnVsbCgpICYmIHRoaXMubGlzdC5sZW5ndGg+MFxyXG5cdFx0XHRcdCYmIEdhbWUuY2FuUGF5KCB0aGlzLmNyYWZ0LmJ1eSApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1VzZXJTcGVsbHN9IHVzZXJTcGVsbHMgLSBzcGVsbHMgYWxyZWFkeSBjcmFmdGVkLlxyXG5cdFx0ICovXHJcblx0XHR1c2VyU3BlbGxzKCkge1xyXG5cdFx0XHRyZXR1cm4gR2FtZS5zdGF0ZS51c2VyU3BlbGxzO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U3BlbGxbXX0gc3BlbGxzIC0gYWxsIHNwZWxscyBpbiBnYW1lLlxyXG5cdFx0ICovXHJcblx0XHRzcGVsbHMoKSB7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLmZpbHRlckl0ZW1zKCB2PT52LnR5cGUgPT09ICdzcGVsbCcmJiF0aGlzLmxvY2tlZCh2KSYmdi5vd25lZCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3BlbGxjcmFmdCBwb3dlci5cclxuXHRcdCAqL1xyXG5cdFx0c2NyYWZ0KCl7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLmdldERhdGEoJ3NjcmFmdCcpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtYXhMZXZlbHMoKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCB0aGlzLnNjcmFmdC52YWx1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJzcGVsbGNyYWZ0XCI+XHJcblxyXG48ZGl2IGNsYXNzPVwidXNlcnNwZWxsc1wiPlxyXG5cclxuXHQ8ZGl2PlxyXG5cdFx0Q3VzdG9tIFNwZWxsczoge3sgTWF0aC5mbG9vciggdXNlclNwZWxscy51c2VkKSArICcgLyAnICsgTWF0aC5mbG9vciggdXNlclNwZWxscy5tYXgudmFsdWUgKSB9fVxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJzcGVsbHNcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiY3VzdG9tXCIgdi1mb3I9XCJjIGluIHVzZXJTcGVsbHMuaXRlbXNcIiA6a2V5PVwiYy5pZFwiIEBtb3VzZWVudGVyLmNhcHR1cmUuc3RvcD1cImVtaXQoICdpdGVtb3ZlcicsJGV2ZW50LGMpXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cInRleHQtZW50cnlcIj5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwiZmxkLW5hbWVcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJjLm5hbWVcIj5cclxuXHRcdDwvc3Bhbj5cclxuXHRcdDxidXR0b24gQGNsaWNrPVwicmVtb3ZlU3BlbGwoYylcIj5SZW1vdmU8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxyXG48ZGl2IGNsYXNzPVwiY3JhZnRpbmdcIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cIm9wdGlvbnNcIj5cclxuXHRcdDxzcGFuIGNsYXNzPVwid2Fybi10ZXh0XCIgdi1pZj1cImNyYWZ0LmxldmVsPj1tYXhMZXZlbHNcIj5Zb3UgYXJlIGF0IHlvdXIgcG93ZXIgbGltaXQuPC9zcGFuPlxyXG5cclxuXHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LWVudHJ5XCI+PGxhYmVsIDpmb3I9XCJlbG1JZCgnc3BOYW1lJylcIj5TcGVsbDwvbGFiZWw+XHJcblx0XHQ8aW5wdXQgY2xhc3M9XCJmbGQtbmFtZVwiIDppZD1cImVsbUlkKCdzcE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImNyYWZ0Lm5hbWVcIj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDwhLS1jaHJvbWUgd3JhcC0tPlxyXG5cdFx0PHNwYW4gQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQsY3JhZnQpXCI+XHJcblx0XHQ8c3Bhbj5Qb3dlcjoge3sgY3JhZnQubGV2ZWwgKyAnIC8gJyArIE1hdGguZmxvb3IobWF4TGV2ZWxzKSB9fTwvc3Bhbj5cclxuXHRcdDxidXR0b24gQGNsaWNrPVwiY3JlYXRlXCIgOmRpc2FibGVkPVwiIWNhbkNyYWZ0XCI+Q3JhZnQ8L2J1dHRvbj5cclxuXHRcdDwvc3Bhbj5cclxuXHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgdi1mb3I9XCIocyxpbmQpIGluIGxpc3RcIiA6a2V5PVwiaW5kXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQscylcIj5cclxuXHRcdDxzcGFuPnt7cy5uYW1lfX08L3NwYW4+PGJ1dHRvbiBAY2xpY2s9XCJyZW1vdmVBdChpbmQpXCI+UmVtb3ZlPC9idXR0b24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFsbHNwZWxsc1wiPlxyXG5cclxuXHQ8ZGl2IHYtZm9yPVwiKHMpIGluIHNwZWxsc1wiIDprZXk9XCJzLmlkXCIgIEBtb3VzZWVudGVyLmNhcHR1cmUuc3RvcD1cImVtaXQoICdpdGVtb3ZlcicsJGV2ZW50LHMpXCI+XHJcblx0XHQ8c3Bhbj57e3MubmFtZX19PC9zcGFuPjxidXR0b24gQGNsaWNrPVwiYWRkKHMpXCIgOmRpc2FibGVkPVwiIWNhbkFkZChzKVwiPkFkZDwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbmRpdi5zcGVsbGNyYWZ0IHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuZGl2LnNwZWxsY3JhZnQgLnVzZXJzcGVsbHMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHQgc29saWQgdmFyKCAtLXNlcGFyYXRvci1jb2xvciApO1xyXG59XHJcblxyXG5kaXYudXNlcnNwZWxscyAuc3BlbGxzIHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG59XHJcblxyXG5kaXYuc3BlbGxzIC5jdXN0b20ge1xyXG5cdG1hcmdpbi1yaWdodDoyMHB4O1xyXG59XHJcblxyXG4uY3JhZnRpbmcgLm9wdGlvbnMge1xyXG5cdHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbmRpdi5zcGVsbGNyYWZ0IC5ib3R0b20ge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRwYWRkaW5nLXRvcDogOHB4O1xyXG5cdHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG5kaXYuc3BlbGxjcmFmdCAuY3JhZnRpbmcsIGRpdi5zcGVsbGNyYWZ0IC5hbGxzcGVsbHMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGVsbGNyYWZ0XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcnNwZWxsc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxyXFxuXFx0XFx0Q3VzdG9tIFNwZWxsczogXCIgK1xuICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICBNYXRoLmZsb29yKF92bS51c2VyU3BlbGxzLnVzZWQpICtcbiAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKF92bS51c2VyU3BlbGxzLm1heC52YWx1ZSlcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgXCJcXHJcXG5cXHRcIlxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzcGVsbHNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnVzZXJTcGVsbHMuaXRlbXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGMuaWQsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgYylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZW50cnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImMubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGQtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBjLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChjLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVNwZWxsKGMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNyYWZ0aW5nXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3B0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5jcmFmdC5sZXZlbCA+PSBfdm0ubWF4TGV2ZWxzXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2Fybi10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWW91IGFyZSBhdCB5b3VyIHBvd2VyIGxpbWl0LlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWVudHJ5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBfdm0uZWxtSWQoXCJzcE5hbWVcIikgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiU3BlbGxcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jcmFmdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNyYWZ0Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxkLW5hbWVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLmVsbUlkKFwic3BOYW1lXCIpLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY3JhZnQubmFtZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jcmFmdCwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIF92bS5jcmFmdClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlBvd2VyOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNyYWZ0LmxldmVsICsgXCIgLyBcIiArIE1hdGguZmxvb3IoX3ZtLm1heExldmVscylcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNhbkNyYWZ0IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ3JhZnRcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uKHMsIGluZCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpbmQsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIHMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHMubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlQXQoaW5kKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhbGxzcGVsbHNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnNwZWxscywgZnVuY3Rpb24ocykge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogcy5pZCxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIHMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3Mocy5uYW1lKSldKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jYW5BZGQocykgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZChzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyoqXHJcbiAqIEZ1bmN0aW9ucyBmb3IgY3JhZnRpbmcvYnV5aW5nIGl0ZW1zLlxyXG4gKi9cclxuXHJcbmNvbnN0IGFkZENvc3QgPSAoIGJ1eSwgdHlwZSwgYW10ICkgPT4ge1xyXG5cclxuXHRsZXQgZSA9IGJ1eVt0eXBlXTtcclxuXHRidXlbdHlwZV0gPSBlID8gZSArIGFtdCA6IGFtdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWluaW9uQ29zdCA9ICggYiApID0+IHtcclxuXHJcblx0bGV0IGNvc3QgPSB7fTtcclxuXHJcblx0bGV0IGxldmVsID0gYi5sZXZlbDtcclxuXHRpZiAoIGIucmVnZW4gKSBsZXZlbCA9IGxldmVsKzE7XHJcblxyXG5cdGlmICggYi5yZWdlbiApIHtcclxuXHR9XHJcblxyXG5cdGNvc3QuZ29sZCA9IDEwMCoobGV2ZWwqbGV2ZWwpO1xyXG5cclxufVxyXG5cclxuIC8qKlxyXG4gKiBSZXR1cm4gYSBjb3N0IG9iamVjdCBmb3IgY3JhZnRpbmcgdGhlIGxpc3Qgb2Ygc3BlbGxzLlxyXG4gKiBAcGFyYW0ge1NwZWxsW119IGxpc3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGVsbENvc3QgPSAobGlzdCkgPT4ge1xyXG5cclxuXHR2YXIgcmVzID0ge307XHJcblxyXG5cdGZvciggbGV0IGkgPSBsaXN0Lmxlbmd0aC0xOyBpPj0gMDsgaS0tKSB7XHJcblxyXG5cdFx0dmFyIHMgPSBsaXN0W2ldO1xyXG5cdFx0cmVzLmdvbGQgPSAocmVzLmdvbGR8fDApICsgMzAwKnMubGV2ZWw7XHJcblxyXG5cdFx0c2Nob29sQ29zdCggcy5zY2hvb2wsIHMubGV2ZWwsIHJlcyApO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXM7XHJcblxyXG59XHJcblxyXG4gLyoqXHJcbiAqIEdlbmVyaWMgY29zdCBmdW5jdGlvbiBmb3IgY3JhZnRpbmcgZm9yIGEgc2Nob29sIG9mIG1hZ2ljLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gc2Nob29sXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzY2hvb2xDb3N0ID0gKCBzY2hvb2wsIGxldmVsPTEsIHJlcz17fSApID0+IHtcclxuXHJcblx0aWYgKCBBcnJheS5pc0FycmF5KHNjaG9vbCkgKSB7XHJcblx0XHRmb3IoIGxldCBpID0gc2Nob29sLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHNjaG9vbENvc3Qoc2Nob29sW2ldLGxldmVsLHJlcyk7XHJcblx0fSBlbHNlIGlmICggc2Nob29sICE9IG51bGwgKSB7XHJcblxyXG5cdFx0YWRkQ29zdCggcmVzLCBzY2hvb2wgKyAnZ2VtJywgbGV2ZWwqbGV2ZWwgKTtcclxuXHJcblx0XHRpZiAoIGxldmVsIDw9IDUgKSBhZGRDb3N0KCByZXMsICdjb2RpY2VzJywgbGV2ZWwgKTtcclxuXHRcdGVsc2UgYWRkQ29zdCggcmVzLCAndG9tZXMnLCBsZXZlbCA9IDUgKTtcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzO1xyXG5cclxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjIyZTgxMmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MjJlODEyYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MjJlODEyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MjJlODEyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MjJlODEyYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9