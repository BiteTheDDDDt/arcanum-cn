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
			this.levels = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT80NjA0Iiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzI0YTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzZmNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NjcmFmdC52dWU/ZjYwZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZT9lNTZlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zY3JhZnQudnVlPzdjMWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsMkdBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLGtEQUFrRCxtQkFBbUIsNkJBQTZCLEdBQUcsMkNBQTJDLG1CQUFtQix5QkFBeUIsb0NBQW9DLEdBQUcsbUNBQW1DLG1CQUFtQiw2QkFBNkIsR0FBRywyQ0FBMkMsbUJBQW1CLDBCQUEwQixxQ0FBcUMsR0FBRyxzRkFBc0YsbUJBQW1CLDZCQUE2QixHQUFHOzs7Ozs7Ozs7Ozs7O0FDRHpsQixjQUFjLG1CQUFPLENBQUMsa2RBQXdQOztBQUU5USw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjs7QUFFTjs7QUFFZjs7QUFFZixRQUFRLGtEQUFRO0FBQ2hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQUEiLCJmaWxlIjoiZGV2L3NjcmFmdC11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5zcGVsbGNyYWZ0IC51c2Vyc3BlbGxzW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYudXNlcnNwZWxscyAuc3BlbGxzW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpyb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbmRpdi5zcGVsbGNyYWZ0W2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYuc3BlbGxjcmFmdCAuYm90dG9tW2RhdGEtdi02MjJlODEyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZGl2LnNwZWxsY3JhZnQgLmNyYWZ0aW5nW2RhdGEtdi02MjJlODEyY10sIGRpdi5zcGVsbGNyYWZ0IC5zcGVsbHNbZGF0YS12LTYyMmU4MTJjXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjcmFmdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8c2NyaXB0PlxyXG5pbXBvcnQgSXRlbUJhc2UgZnJvbSAnLi4vaXRlbXNCYXNlJztcclxuXHJcbmltcG9ydCBHYW1lIGZyb20gJy4uLy4uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRtaXhpbnM6SXRlbUJhc2UsXHJcblx0ZGF0YSgpe1xyXG5cclxuXHRcdHJldHVybiB7XHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogTGlzdCBvZiBzcGVsbHMgaW4gY3VycmVudCBjcmFmdGluZy5cclxuXHRcdFx0ICovXHJcblx0XHRcdGxpc3Q6W10sXHJcblxyXG5cdFx0XHRsZXZlbHM6MCxcclxuXHRcdFx0bmFtZTonTmV3IFNwZWxsJ1xyXG5cclxuXHRcdH07XHJcblxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgdXNlciBzcGVsbCBmcm9tIFVzZXJTcGVsbHNcclxuXHRcdCAqL1xyXG5cdFx0cmVtb3ZlU3BlbGwocyl7XHJcblx0XHRcdHRoaXMudXNlclNwZWxscy5yZW1vdmUocyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNhbkFkZChzKSB7XHJcblx0XHRcdHJldHVybiBzLmxldmVsICsgdGhpcy5sZXZlbHMgPD0gdGhpcy5tYXhMZXZlbHM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGZ1bmN0aW9uIGNyZWF0ZSAtIGNyZWF0ZSB0aGUgbmV3IHNwZWxsIGNvbWJpbmF0aW9uLlxyXG5cdFx0ICovXHJcblx0XHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0XHR0aGlzLnVzZXJTcGVsbHMuY3JlYXRlKCB0aGlzLmxpc3QsIHRoaXMubmFtZSApO1xyXG5cdFx0XHR0aGlzLmxpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5sZXZlbHMgPSAwO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIGdyb3VwIGJlaW5nIGNyZWF0ZWQgY2FuIGJlIGNyYWZ0ZWQuXHJcblx0XHQgKiBjb3N0K2xlbmd0aCArIHVzZXIgc2xvdHMgYXZhaWxhYmxlLlxyXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0XHQgKi9cclxuXHRcdGNhbkNyYWZ0KCkge1xyXG5cclxuXHRcdFx0cmV0dXJuICF0aGlzLnVzZXJTcGVsbHMuZnVsbCgpICYmIHRoaXMubGlzdC5sZW5ndGg+MDtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWRkIHNwZWxsIHRvIHRoZSBjdXJyZW50IGNyYWZ0aW5nIGdyb3VwLlxyXG5cdFx0ICovXHJcblx0XHRhZGQocykge1xyXG5cdFx0XHR0aGlzLmxpc3QucHVzaChzKTtcclxuXHRcdFx0dGhpcy5sZXZlbHMgKz0gcy5sZXZlbDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZW1vdmUgc3BlbGwgZnJvbSBidWlsZGluZyBsaXN0LlxyXG5cdFx0ICovXHJcblx0XHRyZW1vdmVBdChpKSB7XHJcblxyXG5cdFx0XHRsZXQgcyA9IHRoaXMubGlzdFtpXTtcclxuXHRcdFx0aWYgKCBzICkgdGhpcy5sZXZlbHMgLT0gcy5sZXZlbDtcclxuXHJcblx0XHRcdHRoaXMubGlzdC5zcGxpY2UoaSwxKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZShzKSB7XHJcblxyXG5cdFx0XHRsZXQgaW5kID0gdGhpcy5saXN0LmluZGV4T2Yocyk7XHJcblx0XHRcdGlmICggaW5kID49IDAgKSB7XHJcblx0XHRcdFx0dGhpcy5saXN0LnNwbGljZSggaW5kLCAxICk7XHJcblx0XHRcdFx0dGhpcy5sZXZlbHMgLT0gcy5sZXZlbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1VzZXJTcGVsbHN9IHVzZXJTcGVsbHMgLSBzcGVsbHMgYWxyZWFkeSBjcmFmdGVkLlxyXG5cdFx0ICovXHJcblx0XHR1c2VyU3BlbGxzKCkge1xyXG5cdFx0XHRyZXR1cm4gR2FtZS5zdGF0ZS51c2VyU3BlbGxzO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U3BlbGxbXX0gc3BlbGxzIC0gYWxsIHNwZWxscyBpbiBnYW1lLlxyXG5cdFx0ICovXHJcblx0XHRzcGVsbHMoKSB7XHJcblx0XHRcdHJldHVybiBHYW1lLnN0YXRlLmZpbHRlckl0ZW1zKCB2PT52LnR5cGUgPT09ICdzcGVsbCcpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNwZWxsY3JhZnQgcG93ZXIuXHJcblx0XHQgKi9cclxuXHRcdHNjcmFmdCgpe1xyXG5cdFx0XHRyZXR1cm4gR2FtZS5zdGF0ZS5nZXREYXRhKCdzY3JhZnQnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bWF4TGV2ZWxzKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnU0NSQUZUIExFVkVMOiAnICsgdGhpcy5zY3JhZnQudmFsdWUgKTtcclxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuc2NyYWZ0LnZhbHVlICk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cInNwZWxsY3JhZnRcIj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ1c2Vyc3BlbGxzXCI+XHJcblxyXG5cdDxkaXY+XHJcblx0XHRDdXN0b20gU3BlbGxzOiB7eyBNYXRoLmZsb29yKCB1c2VyU3BlbGxzLnVzZWQpICsgJyAvICcgKyBNYXRoLmZsb29yKCB1c2VyU3BlbGxzLm1heC52YWx1ZSApIH19XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cInNwZWxsc1wiPlxyXG5cdDxkaXYgY2xhc3M9XCJjdXN0b21cIiB2LWZvcj1cImMgaW4gdXNlclNwZWxscy5pdGVtc1wiIDprZXk9XCJjLmlkXCI+XHJcblx0XHQ8c3Bhbj57e2MubmFtZX19PC9zcGFuPjxidXR0b24gQGNsaWNrPVwicmVtb3ZlU3BlbGwoYylcIj5SZW1vdmU8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxyXG48ZGl2IGNsYXNzPVwiY3JhZnRpbmdcIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cIm9wdGlvbnNcIj5cclxuXHRcdDxzcGFuIGNsYXNzPVwid2Fybi10ZXh0XCIgdi1pZj1cImxldmVscz49bWF4TGV2ZWxzXCI+WW91IGhhdmUgcmVhY2hlZCB5b3VyIHBvd2VyIGxpbWl0Ljwvc3Bhbj5cclxuXHJcblx0XHQ8ZGl2PjxsYWJlbCA6Zm9yPVwiZWxtSWQoJ3NwTmFtZScpXCI+U3BlbGwgTmFtZTwvbGFiZWw+XHJcblx0XHQ8aW5wdXQgOmlkPVwiZWxtSWQoJ3NwTmFtZScpXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PHNwYW4+UG93ZXIgVXNlZDoge3sgbGV2ZWxzICsgJyAvICcgKyBNYXRoLmZsb29yKG1heExldmVscykgfX08L3NwYW4+XHJcblx0XHQ8YnV0dG9uIEBjbGljaz1cImNyZWF0ZVwiIDpkaXNhYmxlZD1cIiFjYW5DcmFmdFwiPkNyYWZ0PC9idXR0b24+XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgdi1mb3I9XCIocyxpbmQpIGluIGxpc3RcIiA6a2V5PVwiaW5kXCI+XHJcblx0XHQ8c3Bhbj57e3MubmFtZX19PC9zcGFuPjxidXR0b24gQGNsaWNrPVwicmVtb3ZlQXQoaW5kKVwiPlJlbW92ZTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJzcGVsbHNcIj5cclxuXHJcblx0PGRpdiB2LWZvcj1cIihzKSBpbiBzcGVsbHNcIiA6a2V5PVwicy5pZFwiPlxyXG5cdFx0PHNwYW4+e3tzLm5hbWV9fTwvc3Bhbj48YnV0dG9uIEBjbGljaz1cImFkZChzKVwiIDpkaXNhYmxlZD1cIiFjYW5BZGQocylcIj5BZGQ8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG5kaXYuc3BlbGxjcmFmdCAudXNlcnNwZWxscyB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmRpdi51c2Vyc3BlbGxzIC5zcGVsbHMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbmRpdi5zcGVsbGNyYWZ0IHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuZGl2LnNwZWxsY3JhZnQgLmJvdHRvbSB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5kaXYuc3BlbGxjcmFmdCAuY3JhZnRpbmcsIGRpdi5zcGVsbGNyYWZ0IC5zcGVsbHMge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGVsbGNyYWZ0XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcnNwZWxsc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxyXFxuXFx0XFx0Q3VzdG9tIFNwZWxsczogXCIgK1xuICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICBNYXRoLmZsb29yKF92bS51c2VyU3BlbGxzLnVzZWQpICtcbiAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKF92bS51c2VyU3BlbGxzLm1heC52YWx1ZSlcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgXCJcXHJcXG5cXHRcIlxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzcGVsbHNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnVzZXJTcGVsbHMuaXRlbXMsIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGMuaWQsIHN0YXRpY0NsYXNzOiBcImN1c3RvbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhjLm5hbWUpKV0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVNwZWxsKGMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVtb3ZlXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNyYWZ0aW5nXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3B0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5sZXZlbHMgPj0gX3ZtLm1heExldmVsc1xuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm4tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIllvdSBoYXZlIHJlYWNoZWQgeW91ciBwb3dlciBsaW1pdC5cIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogX3ZtLmVsbUlkKFwic3BOYW1lXCIpIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlNwZWxsIE5hbWVcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5lbG1JZChcInNwTmFtZVwiKSwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJQb3dlciBVc2VkOiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxldmVscyArIFwiIC8gXCIgKyBNYXRoLmZsb29yKF92bS5tYXhMZXZlbHMpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jYW5DcmFmdCB9LCBvbjogeyBjbGljazogX3ZtLmNyZWF0ZSB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDcmFmdFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24ocywgaW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZCB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhzLm5hbWUpKV0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUF0KGluZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlJlbW92ZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNwZWxsc1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0uc3BlbGxzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBzLmlkIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhzLm5hbWUpKV0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jYW5BZGQocykgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZChzKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkFkZFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NjcmFmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MjJlODEyY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYyMmU4MTJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYyMmU4MTJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYyMmU4MTJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMmU4MTJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYyMmU4MTJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvc2VjdGlvbnMvc2NyYWZ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zY3JhZnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIyZTgxMmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2NyYWZ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjJlODEyYyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=