(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["scraft-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/scraft.vue?vue&type=style&index=0&id=622e812c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.spellcraft .userspells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\ndiv.userspells .spells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction:row;\r\n\tjustify-content: space-evenly;\n}\ndiv.spellcraft[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\ndiv.spellcraft .bottom[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\n}\ndiv.spellcraft .crafting[data-v-622e812c], div.spellcraft .spells[data-v-622e812c] {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\n}\r\n\r\n", ""]);


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
			this.list = [];

		},

		/**
		 * Determine if the group being created can be crafted.
		 * cost+length + user slots available.
		 * @returns {boolean}
		 */
		canCraft() {

			return !this.userSpells.full() && this.list.length>0;

		},

		/**
		 * Add spell to the current crafting group.
		 */
		add(s) {
			this.list.push(s);
			this.levels += s.level;
		},

		/**
		 * Remove spell from building list.
		 */
		removeAt(i) {

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
          return _c("div", { key: c.id, staticClass: "custom" }, [
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
            _c(
              "button",
              { attrs: { disabled: !_vm.canCraft }, on: { click: _vm.create } },
              [_vm._v("Craft")]
            )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT80NjA0Iiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzI0YTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzZmNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWU/ZjYwZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT9lNTZlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzdjMWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLGtEQUFrRCxtQkFBbUIsNkJBQTZCLEdBQUcsMkNBQTJDLG1CQUFtQix5QkFBeUIsb0NBQW9DLEdBQUcsbUNBQW1DLG1CQUFtQiw2QkFBNkIsR0FBRywyQ0FBMkMsbUJBQW1CLDBCQUEwQixxQ0FBcUMsR0FBRyxzRkFBc0YsbUJBQW1CLDZCQUE2QixHQUFHOzs7Ozs7Ozs7Ozs7O0FDRHpsQixjQUFjLG1CQUFPLENBQUMsa2RBQXdQOztBQUU5USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjs7QUFFTjs7QUFFZjs7QUFFZixRQUFRLGtEQUFRO0FBQ2hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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IiwiZmlsZSI6ImRldi9zY3JhZnQtdWkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYuc3BlbGxjcmFmdCAudXNlcnNwZWxsc1tkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZGl2LnVzZXJzcGVsbHMgLnNwZWxsc1tkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246cm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5kaXYuc3BlbGxjcmFmdFtkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZGl2LnNwZWxsY3JhZnQgLmJvdHRvbVtkYXRhLXYtNjIyZTgxMmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmRpdi5zcGVsbGNyYWZ0IC5jcmFmdGluZ1tkYXRhLXYtNjIyZTgxMmNdLCBkaXYuc3BlbGxjcmFmdCAuc3BlbGxzW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4uL2l0ZW1zQmFzZSc7XHJcblxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi8uLi9nYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0bWl4aW5zOkl0ZW1CYXNlLFxyXG5cdGRhdGEoKXtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIExpc3Qgb2Ygc3BlbGxzIGluIGN1cnJlbnQgY3JhZnRpbmcuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRsaXN0OltdLFxyXG5cclxuXHRcdFx0bGV2ZWxzOjAsXHJcblx0XHRcdG5hbWU6J05ldyBTcGVsbCdcclxuXHJcblx0XHR9O1xyXG5cclxuXHR9LFxyXG5cdG1ldGhvZHM6e1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIHVzZXIgc3BlbGwgZnJvbSBVc2VyU3BlbGxzXHJcblx0XHQgKi9cclxuXHRcdHJlbW92ZVNwZWxsKHMpe1xyXG5cdFx0XHR0aGlzLnVzZXJTcGVsbHMucmVtb3ZlKHMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjYW5BZGQocykge1xyXG5cdFx0XHRyZXR1cm4gcy5sZXZlbCArIHRoaXMubGV2ZWxzIDw9IHRoaXMubWF4TGV2ZWxzO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBmdW5jdGlvbiBjcmVhdGUgLSBjcmVhdGUgdGhlIG5ldyBzcGVsbCBjb21iaW5hdGlvbi5cclxuXHRcdCAqL1xyXG5cdFx0Y3JlYXRlKCkge1xyXG5cclxuXHRcdFx0dGhpcy51c2VyU3BlbGxzLmNyZWF0ZSggdGhpcy5saXN0LCB0aGlzLm5hbWUgKTtcclxuXHRcdFx0dGhpcy5saXN0ID0gW107XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgZ3JvdXAgYmVpbmcgY3JlYXRlZCBjYW4gYmUgY3JhZnRlZC5cclxuXHRcdCAqIGNvc3QrbGVuZ3RoICsgdXNlciBzbG90cyBhdmFpbGFibGUuXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHRcdCAqL1xyXG5cdFx0Y2FuQ3JhZnQoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gIXRoaXMudXNlclNwZWxscy5mdWxsKCkgJiYgdGhpcy5saXN0Lmxlbmd0aD4wO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGQgc3BlbGwgdG8gdGhlIGN1cnJlbnQgY3JhZnRpbmcgZ3JvdXAuXHJcblx0XHQgKi9cclxuXHRcdGFkZChzKSB7XHJcblx0XHRcdHRoaXMubGlzdC5wdXNoKHMpO1xyXG5cdFx0XHR0aGlzLmxldmVscyArPSBzLmxldmVsO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSBzcGVsbCBmcm9tIGJ1aWxkaW5nIGxpc3QuXHJcblx0XHQgKi9cclxuXHRcdHJlbW92ZUF0KGkpIHtcclxuXHJcblx0XHRcdGxldCBzID0gdGhpcy5saXN0W2ldO1xyXG5cdFx0XHRpZiAoIHMgKSB0aGlzLmxldmVscyAtPSBzLmxldmVsO1xyXG5cclxuXHRcdFx0dGhpcy5saXN0LnNwbGljZShpLDEpO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVtb3ZlKHMpIHtcclxuXHJcblx0XHRcdGxldCBpbmQgPSB0aGlzLmxpc3QuaW5kZXhPZihzKTtcclxuXHRcdFx0aWYgKCBpbmQgPj0gMCApIHtcclxuXHRcdFx0XHR0aGlzLmxpc3Quc3BsaWNlKCBpbmQsIDEgKTtcclxuXHRcdFx0XHR0aGlzLmxldmVscyAtPSBzLmxldmVsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cdGNvbXB1dGVkOntcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7VXNlclNwZWxsc30gdXNlclNwZWxscyAtIHNwZWxscyBhbHJlYWR5IGNyYWZ0ZWQuXHJcblx0XHQgKi9cclxuXHRcdHVzZXJTcGVsbHMoKSB7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLnVzZXJTcGVsbHM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtTcGVsbFtdfSBzcGVsbHMgLSBhbGwgc3BlbGxzIGluIGdhbWUuXHJcblx0XHQgKi9cclxuXHRcdHNwZWxscygpIHtcclxuXHRcdFx0cmV0dXJuIEdhbWUuc3RhdGUuZmlsdGVySXRlbXMoIHY9PnYudHlwZSA9PT0gJ3NwZWxsJyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3BlbGxjcmFmdCBwb3dlci5cclxuXHRcdCAqL1xyXG5cdFx0c2NyYWZ0KCl7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLmdldERhdGEoJ3NjcmFmdCcpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtYXhMZXZlbHMoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTQ1JBRlQgTEVWRUw6ICcgKyB0aGlzLnNjcmFmdC52YWx1ZSApO1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vciggdGhpcy5zY3JhZnQudmFsdWUgKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwic3BlbGxjcmFmdFwiPlxyXG5cclxuPGRpdiBjbGFzcz1cInVzZXJzcGVsbHNcIj5cclxuXHJcblx0PGRpdj5cclxuXHRcdEN1c3RvbSBTcGVsbHM6IHt7IE1hdGguZmxvb3IoIHVzZXJTcGVsbHMudXNlZCkgKyAnIC8gJyArIE1hdGguZmxvb3IoIHVzZXJTcGVsbHMubWF4LnZhbHVlICkgfX1cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwic3BlbGxzXCI+XHJcblx0PGRpdiBjbGFzcz1cImN1c3RvbVwiIHYtZm9yPVwiYyBpbiB1c2VyU3BlbGxzLml0ZW1zXCIgOmtleT1cImMuaWRcIj5cclxuXHRcdDxzcGFuPnt7Yy5uYW1lfX08L3NwYW4+PGJ1dHRvbiBAY2xpY2s9XCJyZW1vdmVTcGVsbChjKVwiPlJlbW92ZTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYm90dG9tXCI+XHJcbjxkaXYgY2xhc3M9XCJjcmFmdGluZ1wiPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJ3YXJuLXRleHRcIiB2LWlmPVwibGV2ZWxzPj1tYXhMZXZlbHNcIj5Zb3UgaGF2ZSByZWFjaGVkIHlvdXIgcG93ZXIgbGltaXQuPC9zcGFuPlxyXG5cclxuXHRcdDxkaXY+PGxhYmVsIDpmb3I9XCJlbG1JZCgnc3BOYW1lJylcIj5TcGVsbCBOYW1lPC9sYWJlbD5cclxuXHRcdDxpbnB1dCA6aWQ9XCJlbG1JZCgnc3BOYW1lJylcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJuYW1lXCI+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8c3Bhbj5Qb3dlciBVc2VkOiB7eyBsZXZlbHMgKyAnIC8gJyArIE1hdGguZmxvb3IobWF4TGV2ZWxzKSB9fTwvc3Bhbj5cclxuXHRcdDxidXR0b24gQGNsaWNrPVwiY3JlYXRlXCIgOmRpc2FibGVkPVwiIWNhbkNyYWZ0XCI+Q3JhZnQ8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PGRpdiB2LWZvcj1cIihzLGluZCkgaW4gbGlzdFwiIDprZXk9XCJpbmRcIj5cclxuXHRcdDxzcGFuPnt7cy5uYW1lfX08L3NwYW4+PGJ1dHRvbiBAY2xpY2s9XCJyZW1vdmVBdChpbmQpXCI+UmVtb3ZlPC9idXR0b24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInNwZWxsc1wiPlxyXG5cclxuXHQ8ZGl2IHYtZm9yPVwiKHMpIGluIHNwZWxsc1wiIDprZXk9XCJzLmlkXCI+XHJcblx0XHQ8c3Bhbj57e3MubmFtZX19PC9zcGFuPjxidXR0b24gQGNsaWNrPVwiYWRkKHMpXCIgOmRpc2FibGVkPVwiIWNhbkFkZChzKVwiPkFkZDwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbmRpdi5zcGVsbGNyYWZ0IC51c2Vyc3BlbGxzIHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuZGl2LnVzZXJzcGVsbHMgLnNwZWxscyB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOnJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuZGl2LnNwZWxsY3JhZnQge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5kaXYuc3BlbGxjcmFmdCAuYm90dG9tIHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmRpdi5zcGVsbGNyYWZ0IC5jcmFmdGluZywgZGl2LnNwZWxsY3JhZnQgLnNwZWxscyB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwZWxsY3JhZnRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2Vyc3BlbGxzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXHJcXG5cXHRcXHRDdXN0b20gU3BlbGxzOiBcIiArXG4gICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoX3ZtLnVzZXJTcGVsbHMudXNlZCkgK1xuICAgICAgICAgICAgICAgIFwiIC8gXCIgK1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoX3ZtLnVzZXJTcGVsbHMubWF4LnZhbHVlKVxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBcIlxcclxcblxcdFwiXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNwZWxsc1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0udXNlclNwZWxscy5pdGVtcywgZnVuY3Rpb24oYykge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogYy5pZCwgc3RhdGljQ2xhc3M6IFwiY3VzdG9tXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGMubmFtZSkpXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlU3BlbGwoYylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3JhZnRpbmdcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLmxldmVscyA+PSBfdm0ubWF4TGV2ZWxzXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2Fybi10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWW91IGhhdmUgcmVhY2hlZCB5b3VyIHBvd2VyIGxpbWl0LlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBfdm0uZWxtSWQoXCJzcE5hbWVcIikgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiU3BlbGwgTmFtZVwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLmVsbUlkKFwic3BOYW1lXCIpLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlBvd2VyIFVzZWQ6IFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubGV2ZWxzICsgXCIgLyBcIiArIE1hdGguZmxvb3IoX3ZtLm1heExldmVscykpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNhbkNyYWZ0IH0sIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkNyYWZ0XCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbihzLCBpbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHMubmFtZSkpXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlQXQoaW5kKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVtb3ZlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3BlbGxzXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5zcGVsbHMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHMuaWQgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHMubmFtZSkpXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNhbkFkZChzKSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKHMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYyMmU4MTJjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjIyZTgxMmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjIyZTgxMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjIyZTgxMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjIyZTgxMmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==