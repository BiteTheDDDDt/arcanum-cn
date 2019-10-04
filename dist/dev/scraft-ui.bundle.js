(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["scraft-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.spellcraft .customs[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\n}\ndiv.spellcraft[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\ndiv.spellcraft .bottom[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\n}\ndiv.spellcraft .crafting[data-v-622e812c], div.spellcraft .spells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\r\n\r\n", ""]);


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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game */ "./src/game.js");





/* harmony default export */ __webpack_exports__["default"] = ({

	mixins:_itemsBase__WEBPACK_IMPORTED_MODULE_0__["default"],
	data(){

		return {

			/**
			 * List of spells in current crafting.
			 */
			list:[],

			levels:0,
			name:'New Spell'

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
			return s.level + this.levels <= this.maxLevels;
		},

		/**
		 * @function create - create the new spell combination.
		 */
		create() {
			this.userSpells.create( this.list, this.name );
		},

		add(s) {
			this.list.push(s);
			this.levels += s.level;
		},

		/**
		 * Remove spell from building list.
		 */
		removeAt(ind) {

			let s = this.list[i];
			if ( s ) this.levels -= s.level;

			this.list.splice(i,1);

		},

		remove(s) {

			let ind = this.list.indexOf(s);
			if ( ind >= 0 ) {
				this.list.splice( ind, 1 );
				this.levels -= s.level;
			}

		}

	},
	computed:{

		/**
		 * @property {UserSpells} userSpells - spells already crafted.
		 */
		userSpells() {
			return _game__WEBPACK_IMPORTED_MODULE_1__["default"].state.userSpells;
		},

		/**
		 * @property {Spell[]} spells - all spells in game.
		 */
		spells() {
			return _game__WEBPACK_IMPORTED_MODULE_1__["default"].state.filterItems( v=>v.type === 'spell');
		},

		/**
		 * Spellcraft power.
		 */
		scraft(){
			return _game__WEBPACK_IMPORTED_MODULE_1__["default"].state.getData('scraft');
		},

		maxLevels() {
			console.log('SCRAFT LEVEL: ' + this.scraft.value );
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
    _c(
      "div",
      { staticClass: "customs" },
      [
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
        _vm._l(_vm.userSpells.items, function(c) {
          return _c("div", { key: c.id }, [
            _c("span", [_vm._v(_vm._s(c.name))]),
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
          ])
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "bottom" }, [
      _c(
        "div",
        { staticClass: "crafting" },
        [
          _c("div", { staticClass: "options" }, [
            _vm.levels >= _vm.maxLevels
              ? _c("span", { staticClass: "warn-text" }, [
                  _vm._v("You have reached your power limit.")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", [
              _c("label", { attrs: { for: _vm.elmId("spName") } }, [
                _vm._v("Spell Name")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.name,
                    expression: "name"
                  }
                ],
                attrs: { id: _vm.elmId("spName"), type: "text" },
                domProps: { value: _vm.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.name = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("span", [
              _vm._v(
                "Power Used: " +
                  _vm._s(_vm.levels + " / " + Math.floor(_vm.maxLevels))
              )
            ]),
            _vm._v(" "),
            _c("button", { on: { click: _vm.create } }, [_vm._v("Craft")])
          ]),
          _vm._v(" "),
          _vm._l(_vm.list, function(s, ind) {
            return _c("div", { key: ind }, [
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
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "spells" },
        _vm._l(_vm.spells, function(s) {
          return _c("div", { key: s.id }, [
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
          ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT80NjA0Iiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzI0YTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzZmNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWU/ZjYwZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT9lNTZlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzdjMWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLCtDQUErQyxtQkFBbUIsMEJBQTBCLEdBQUcsbUNBQW1DLG1CQUFtQiw2QkFBNkIsR0FBRywyQ0FBMkMsbUJBQW1CLDBCQUEwQixHQUFHLHNGQUFzRixtQkFBbUIsNkJBQTZCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEaGIsY0FBYyxtQkFBTyxDQUFDLGtkQUF3UDs7QUFFOVEsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7O0FBRU47O0FBRWY7O0FBRWYsUUFBUSxrREFBUTtBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNyR0Q7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPLHlCQUF5QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTLDBCQUEwQjtBQUNuQztBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUywyQkFBMkIsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0NBQXdDO0FBQ2hFLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxvQkFBb0IsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUcxRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE0SCxDQUFnQixtTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoSjtBQUFBO0FBQUE7QUFBQTtBQUFxVCxDQUFnQixnV0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6VTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZGV2L3NjcmFmdC11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5zcGVsbGNyYWZ0IC5jdXN0b21zW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5kaXYuc3BlbGxjcmFmdFtkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZGl2LnNwZWxsY3JhZnQgLmJvdHRvbVtkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LnNwZWxsY3JhZnQgLmNyYWZ0aW5nW2RhdGEtdi02MjJlODEyY10sIGRpdi5zcGVsbGNyYWZ0IC5zcGVsbHNbZGF0YS12LTYyMmU4MTJjXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8c2NyaXB0PlxyXG5pbXBvcnQgSXRlbUJhc2UgZnJvbSAnLi4vaXRlbXNCYXNlJztcclxuXHJcbmltcG9ydCBHYW1lIGZyb20gJy4uLy4uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRtaXhpbnM6SXRlbUJhc2UsXHJcblx0ZGF0YSgpe1xyXG5cclxuXHRcdHJldHVybiB7XHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogTGlzdCBvZiBzcGVsbHMgaW4gY3VycmVudCBjcmFmdGluZy5cclxuXHRcdFx0ICovXHJcblx0XHRcdGxpc3Q6W10sXHJcblxyXG5cdFx0XHRsZXZlbHM6MCxcclxuXHRcdFx0bmFtZTonTmV3IFNwZWxsJ1xyXG5cclxuXHRcdH07XHJcblxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdXNlciBzcGVsbCBmcm9tIFVzZXJTcGVsbHNcclxuXHRcdCAqL1xyXG5cdFx0cmVtb3ZlU3BlbGwocyl7XHJcblx0XHRcdHRoaXMudXNlclNwZWxscy5yZW1vdmUocyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNhbkFkZChzKSB7XHJcblx0XHRcdHJldHVybiBzLmxldmVsICsgdGhpcy5sZXZlbHMgPD0gdGhpcy5tYXhMZXZlbHM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGZ1bmN0aW9uIGNyZWF0ZSAtIGNyZWF0ZSB0aGUgbmV3IHNwZWxsIGNvbWJpbmF0aW9uLlxyXG5cdFx0ICovXHJcblx0XHRjcmVhdGUoKSB7XHJcblx0XHRcdHRoaXMudXNlclNwZWxscy5jcmVhdGUoIHRoaXMubGlzdCwgdGhpcy5uYW1lICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFkZChzKSB7XHJcblx0XHRcdHRoaXMubGlzdC5wdXNoKHMpO1xyXG5cdFx0XHR0aGlzLmxldmVscyArPSBzLmxldmVsO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSBzcGVsbCBmcm9tIGJ1aWxkaW5nIGxpc3QuXHJcblx0XHQgKi9cclxuXHRcdHJlbW92ZUF0KGluZCkge1xyXG5cclxuXHRcdFx0bGV0IHMgPSB0aGlzLmxpc3RbaV07XHJcblx0XHRcdGlmICggcyApIHRoaXMubGV2ZWxzIC09IHMubGV2ZWw7XHJcblxyXG5cdFx0XHR0aGlzLmxpc3Quc3BsaWNlKGksMSk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmUocykge1xyXG5cclxuXHRcdFx0bGV0IGluZCA9IHRoaXMubGlzdC5pbmRleE9mKHMpO1xyXG5cdFx0XHRpZiAoIGluZCA+PSAwICkge1xyXG5cdFx0XHRcdHRoaXMubGlzdC5zcGxpY2UoIGluZCwgMSApO1xyXG5cdFx0XHRcdHRoaXMubGV2ZWxzIC09IHMubGV2ZWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6e1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtVc2VyU3BlbGxzfSB1c2VyU3BlbGxzIC0gc3BlbGxzIGFscmVhZHkgY3JhZnRlZC5cclxuXHRcdCAqL1xyXG5cdFx0dXNlclNwZWxscygpIHtcclxuXHRcdFx0cmV0dXJuIEdhbWUuc3RhdGUudXNlclNwZWxscztcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1NwZWxsW119IHNwZWxscyAtIGFsbCBzcGVsbHMgaW4gZ2FtZS5cclxuXHRcdCAqL1xyXG5cdFx0c3BlbGxzKCkge1xyXG5cdFx0XHRyZXR1cm4gR2FtZS5zdGF0ZS5maWx0ZXJJdGVtcyggdj0+di50eXBlID09PSAnc3BlbGwnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTcGVsbGNyYWZ0IHBvd2VyLlxyXG5cdFx0ICovXHJcblx0XHRzY3JhZnQoKXtcclxuXHRcdFx0cmV0dXJuIEdhbWUuc3RhdGUuZ2V0RGF0YSgnc2NyYWZ0Jyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1heExldmVscygpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1NDUkFGVCBMRVZFTDogJyArIHRoaXMuc2NyYWZ0LnZhbHVlICk7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCB0aGlzLnNjcmFmdC52YWx1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJzcGVsbGNyYWZ0XCI+XHJcblxyXG48ZGl2IGNsYXNzPVwiY3VzdG9tc1wiPlxyXG5cclxuXHQ8ZGl2PlxyXG5cdFx0Q3VzdG9tIFNwZWxsczoge3sgTWF0aC5mbG9vciggdXNlclNwZWxscy51c2VkKSArICcgLyAnICsgTWF0aC5mbG9vciggdXNlclNwZWxscy5tYXgudmFsdWUgKSB9fVxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgdi1mb3I9XCJjIGluIHVzZXJTcGVsbHMuaXRlbXNcIiA6a2V5PVwiYy5pZFwiPlxyXG5cdFx0PHNwYW4+e3tjLm5hbWV9fTwvc3Bhbj48YnV0dG9uIEBjbGljaz1cInJlbW92ZVNwZWxsKGMpXCI+UmVtb3ZlPC9idXR0b24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJib3R0b21cIj5cclxuPGRpdiBjbGFzcz1cImNyYWZ0aW5nXCI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cIndhcm4tdGV4dFwiIHYtaWY9XCJsZXZlbHM+PW1heExldmVsc1wiPllvdSBoYXZlIHJlYWNoZWQgeW91ciBwb3dlciBsaW1pdC48L3NwYW4+XHJcblxyXG5cdFx0PGRpdj48bGFiZWwgOmZvcj1cImVsbUlkKCdzcE5hbWUnKVwiPlNwZWxsIE5hbWU8L2xhYmVsPlxyXG5cdFx0PGlucHV0IDppZD1cImVsbUlkKCdzcE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hbWVcIj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDxzcGFuPlBvd2VyIFVzZWQ6IHt7IGxldmVscyArICcgLyAnICsgTWF0aC5mbG9vcihtYXhMZXZlbHMpIH19PC9zcGFuPlxyXG5cdFx0PGJ1dHRvbiBAY2xpY2s9XCJjcmVhdGVcIj5DcmFmdDwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cclxuXHQ8ZGl2IHYtZm9yPVwiKHMsaW5kKSBpbiBsaXN0XCIgOmtleT1cImluZFwiPlxyXG5cdFx0PHNwYW4+e3tzLm5hbWV9fTwvc3Bhbj48YnV0dG9uIEBjbGljaz1cInJlbW92ZUF0KGluZClcIj5SZW1vdmU8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwic3BlbGxzXCI+XHJcblxyXG5cdDxkaXYgdi1mb3I9XCIocykgaW4gc3BlbGxzXCIgOmtleT1cInMuaWRcIj5cclxuXHRcdDxzcGFuPnt7cy5uYW1lfX08L3NwYW4+PGJ1dHRvbiBAY2xpY2s9XCJhZGQocylcIiA6ZGlzYWJsZWQ9XCIhY2FuQWRkKHMpXCI+QWRkPC9idXR0b24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuZGl2LnNwZWxsY3JhZnQgLmN1c3RvbXMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5kaXYuc3BlbGxjcmFmdCB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmRpdi5zcGVsbGNyYWZ0IC5ib3R0b20ge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5kaXYuc3BlbGxjcmFmdCAuY3JhZnRpbmcsIGRpdi5zcGVsbGNyYWZ0IC5zcGVsbHMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGVsbGNyYWZ0XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tc1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcclxcblxcdFxcdEN1c3RvbSBTcGVsbHM6IFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoX3ZtLnVzZXJTcGVsbHMudXNlZCkgK1xuICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKF92bS51c2VyU3BlbGxzLm1heC52YWx1ZSlcbiAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgIFwiXFxyXFxuXFx0XCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLnVzZXJTcGVsbHMuaXRlbXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGMuaWQgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGMubmFtZSkpXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlU3BlbGwoYylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3JhZnRpbmdcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLmxldmVscyA+PSBfdm0ubWF4TGV2ZWxzXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2Fybi10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWW91IGhhdmUgcmVhY2hlZCB5b3VyIHBvd2VyIGxpbWl0LlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBfdm0uZWxtSWQoXCJzcE5hbWVcIikgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiU3BlbGwgTmFtZVwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLmVsbUlkKFwic3BOYW1lXCIpLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlBvd2VyIFVzZWQ6IFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGV2ZWxzICsgXCIgLyBcIiArIE1hdGguZmxvb3IoX3ZtLm1heExldmVscykpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5jcmVhdGUgfSB9LCBbX3ZtLl92KFwiQ3JhZnRcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbihzLCBpbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHMubmFtZSkpXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlQXQoaW5kKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVtb3ZlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3BlbGxzXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5zcGVsbHMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHMuaWQgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHMubmFtZSkpXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNhbkFkZChzKSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKHMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYyMmU4MTJjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjIyZTgxMmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjIyZTgxMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjIyZTgxMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjIyZTgxMmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==