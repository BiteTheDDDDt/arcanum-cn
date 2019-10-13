(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["spells-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nlabel[data-v-6d0e0bec] {\r\n\tmargin-right:8px;\n}\ndiv.filter-box[data-v-6d0e0bec] {\r\n\tfont-size: 105%;\r\n\tvertical-align: middle;\r\n\tline-height: 1.2em;\r\n\tmargin: 8px 4px 8px 12px;\n}\n.filter-box input[type=text][data-v-6d0e0bec] {\r\n\tpadding: 4px;\r\n\tfont-size: 105%;\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv.spells[data-v-1967362c] {\r\n\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tpadding: 8px 14px;\r\n\theight:100%;\n}\ndiv.spells .bottom[data-v-1967362c] {\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\n}\ndiv.spells .spellbook[data-v-1967362c] {\r\n\tflex-grow:1;\n}\ndiv.spells .spelllist[data-v-1967362c] {\r\n\tborder-left: 1px solid var( --separator-color );\r\n\twidth:140px;\r\n\tpadding: var( --tiny-gap );\r\n\tflex-shrink: 1;\n}\ndiv.spells .filters[data-v-1967362c] {\r\n       flex-flow: row wrap; display: flex;\r\n        border-bottom: 1px solid var(--separator-color);\r\n        margin: 0; padding: 4px; line-height: 2em;\n}\ndiv.spells div.filters div[data-v-1967362c] { box-sizing: border-box; margin: 0;\n}\ndiv.spells div.filters div[data-v-1967362c]:nth-child(1),\r\ndiv.spells div.filters div[data-v-1967362c]:nth-child(2) {\r\n        flex-basis: 50%;\n}\ndiv.spells div.filters input[type=text][data-v-1967362c] { padding: 4px 0 4px 0;\n}\ndiv.spells div.filters > div input[type=text][data-v-1967362c],\r\ndiv.spells div.filters > div input[type=number][data-v-1967362c] {\r\n\r\n\t\tflex: 1;\r\n\t\tmargin-right: 1em;\r\n\t\tmargin-left: 1em;\r\n\t\tmin-width: unset;\r\n\t\tmax-width: unset;\r\n\t\tpadding: 4px 0;\r\n\t\tfont-size: 105%;\r\n\t\twidth: 0;\n}\ndiv.spells div.filters > div[data-v-1967362c] { display: flex; align-items: center;\n}\ndiv.spells div.filters > div label[data-v-1967362c] { flex-basis: 20%;\n}\ndiv.spells div.filters > div input[data-v-1967362c] { min-width: 0; padding: 0; text-indent: 4px;\n}\ndiv.spells div.filters div.checks[data-v-1967362c] { margin: 0; flex-basis: 16%;\n}\r\n\r\n\t\t/*div.spellbook .filters {\r\n\t\t\torder: 1; flex-flow: row wrap; display: flex; text-align: center;\r\n\t\t\tborder-bottom: 1px solid var(--separator-color);\r\n\t\t\tmargin: 0; padding: var(--small-gap); line-height: 2em; justify-content: flex-start;\r\n\t\t}\r\n\t\t.div.spellbook div.filters div { box-sizing: border-box; margin: 0; }\r\n\t\tdiv.spellbook div.filters div:nth-child(1),\r\n\t\tdiv.spellbook div.filters div:nth-child(2) {\r\n\t\t\tflex-basis: 50%;\r\n\t\t}\r\n\t\tdiv.spellbook div.filters input[type=text] { padding: var(--small-gap) 0 var(--small-gap) 0; }\r\n\t\tdiv.spellbook div.filters > div input[type=text],\r\n\t\tdiv.spellbook div.filters > div input[type=number] {\r\n\t\t\tflex: 1; margin-right: 1em; margin-left: 1em; min-width: unset; max-width: unset; width: 0;\r\n\t\t}\r\n\t\tdiv.spellbook div.filters > div { display: flex; align-items: center; }\r\n\t\tdiv.spellbook div.filters > div label { flex-basis: 20%; }\r\n\t\tdiv.spellbook div.filters > div input { min-width: 0; padding: 0; text-indent: var(--small-gap); }\r\n\t\tdiv.spellbook div.filters div.checks { margin: 0; padding: 0 0.5em; flex-basis: unset; }*/\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.spellbook[data-v-6adcb0a2] {\r\n\tpadding: 4px;\r\n\toverflow-y: auto;\r\n\theight:100%;\r\n\tmargin-bottom: 20px;\n}\n.spellbook table[data-v-6adcb0a2] { display: flex; flex-flow: row wrap; justify-content: space-between;\n}\n.spellbook table tr[data-v-6adcb0a2] { display:flex; flex-basis: 48%;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(1), .spellbook table tr td[data-v-6adcb0a2]:nth-child(3) {\r\n\tflex-basis: 20%; order: 3;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(2) { flex: 1; order: 1;}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(3) { flex-basis: 20%; order: 2;\n}\n.spellbook table td[data-v-6adcb0a2] { display: flex;\n}\ndiv.spellbook[data-v-6adcb0a2] { flex-direction: column; padding: 0;\n}\ndiv.spellbook[data-v-6adcb0a2] { margin: 0; padding: var(--medium-gap);\n}\ndiv.spellbook table[data-v-6adcb0a2] {\r\n        display: grid; grid-template-columns: minmax( 256px, 1fr ) repeat( auto-fit, minmax( 256px, 1fr ));\r\n        grid-auto-rows:  1fr;\n}\ndiv.spellbook  table tr[data-v-6adcb0a2] { padding: var(--small-gap); display:flex; align-items:center;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(1),\r\n    div.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 1;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 2;\n}\ndiv.spellbook button[data-v-6adcb0a2] { flex: 1; font-size: var(--compact-small-font); margin: 0;\n}\r\n\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({

	/**
	 * @property {object[]} items - items to filter.
	 * @property {prop} [prop='name'] - target prop of filter test.
	 *
	 * @property {number} [minItems=0] - minimum number of items before box is visible.
	 */
	props:['value', 'items', 'prop', 'minItems'],
	data() {
		return {
			text:'',
			pprop:this.prop||'name'
		}
	},
	watch:{
		items(newVal,oldVal){
			this.findText = this.findText;
		}
	},
	created(){
		this.findText = this.text;
	},
	computed:{

		findText:{

			get() { return this.text; },
			set(v){

				this.text = v;
				let p = this.pprop;

				if ( !v ) this.$emit( 'input', this.items );

				var txt = v.toLowerCase();

				if ( typeof p === 'function') {

 					this.$emit( 'input', this.items.filter(
						it=>p(it, txt )
					));

				} else this.$emit( 'input', this.items.filter(
					it=>(typeof it === 'object') &&
					( (typeof it[p]) === 'string' ) && it[p].toLowerCase().includes( txt )
				));

			}

		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/spells.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game */ "./src/game.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings */ "./src/settings.js");
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/filterbox.vue */ "./src/ui/components/filterbox.vue");
/* harmony import */ var _spellbook_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spellbook.vue */ "./src/ui/spellbook.vue");
/* harmony import */ var _spelllist_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spelllist.vue */ "./src/ui/spelllist.vue");










/* harmony default export */ __webpack_exports__["default"] = ({

	data(){

		let spellOps = _settings__WEBPACK_IMPORTED_MODULE_1__["default"].getVars( 'spells');

		return Object.assign( {
			showList:false,
			filtered:null,
			schools:[],
			min:null,
			max:null
		}, spellOps );

	},
	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_2__["default"]],
	components:{

		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
		book:_spellbook_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
		spelllist:_spelllist_vue__WEBPACK_IMPORTED_MODULE_5__["default"]

	},
	methods:{

		toggle(){
			this.showList = !this.showList;
			_settings__WEBPACK_IMPORTED_MODULE_1__["default"].setVar( 'spells', 'showList', this.showList );
		}

	}, computed:{

		state() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state; },

		/**
		 * @property {SpellList} spelllist - spells in active use. (dungeons)
		 */
		list() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.spelllist; },

		minLevel:{

			get(){ return this.min; },
			set(v){
				this.min = Number(v);
				_settings__WEBPACK_IMPORTED_MODULE_1__["default"].setVar( 'spells', 'min', this.min );
			}

		},

		viewSchools:{

			get(){
				return this.schools;
			},
			set(v){

				this.schools = v;
				_settings__WEBPACK_IMPORTED_MODULE_1__["default"].setVar( 'spells', 'schools', this.schools.concat() );

			}

		},

		/**
		 * @property {Object.<string,string>} schools - schools of all unlocked spells.
		 */
		allSchools() {

			let res = {};

			let a = this.spells;
			for( let i = a.length-1; i>= 0; i-- ) {
				var s = a[i];
				if ( s.school ) res[s.school] = true;
			}

			return res;

		},

		/**
		 * @property {Spell[]} viewing - array of spells actually visible
		 * after min/max levels and schools have been applied to filtered.
		 */
		viewing() {

			let spells = this.filtered || this.spells;
			let vSchools = this.viewSchools;
			let level = this.minLevel;

			if ( vSchools.length>0 || level ) {

				return spells.filter(v=>{
					return ((vSchools.length===0||vSchools.includes(v.school)) )
						&&(!level||(v.level===level));
				});

			}
			return spells;

		},

		/**
		 * @property {Spell} spells - array of unlocked spells.
		 */
		spells(){
			return this.state.filterItems(
				it=>it.type === 'spell' && !this.locked(it) );
		}

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/spellbook.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/game.js");




/* harmony default export */ __webpack_exports__["default"] = ({

	props:['viewing'],
	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_0__["default"]],
	created(){
		this.game = _game__WEBPACK_IMPORTED_MODULE_1__["default"];
	},
	computed:{

		state() { return _game__WEBPACK_IMPORTED_MODULE_1__["default"].state; },

		list(){ return _game__WEBPACK_IMPORTED_MODULE_1__["default"].state.spelllist; }

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/spelllist.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/spelllist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({

	props:['list']

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return !this.minItems || this.items.length >= this.minItems
    ? _c("div", { staticClass: "filter-box" }, [
        _c("label", { attrs: { for: _vm.elmId("filter") } }, [_vm._v("Find")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.findText,
              expression: "findText"
            }
          ],
          attrs: { id: _vm.elmId("filter"), type: "text" },
          domProps: { value: _vm.findText },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.findText = $event.target.value
            }
          }
        })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=template&id=1967362c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/spells.vue?vue&type=template&id=1967362c&scoped=true& ***!
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
  return _c("div", { staticClass: "spells" }, [
    _c(
      "div",
      { staticClass: "filters" },
      [
        _c("filterbox", {
          attrs: { items: _vm.spells },
          model: {
            value: _vm.filtered,
            callback: function($$v) {
              _vm.filtered = $$v
            },
            expression: "filtered"
          }
        }),
        _vm._v(" "),
        _c("div", [
          _c(
            "label",
            { staticClass: "level-lbl", attrs: { for: _vm.elmId("level") } },
            [_vm._v("Level")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.minLevel,
                expression: "minLevel"
              }
            ],
            staticClass: "level",
            attrs: {
              id: _vm.elmId("level"),
              type: "number",
              min: "0",
              size: "5"
            },
            domProps: { value: _vm.minLevel },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.minLevel = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._l(_vm.allSchools, function(p, k) {
          return _c("div", { key: k, staticClass: "checks" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.viewSchools,
                  expression: "viewSchools"
                }
              ],
              attrs: { type: "checkbox", id: _vm.elmId("chk" + k) },
              domProps: {
                value: k,
                checked: Array.isArray(_vm.viewSchools)
                  ? _vm._i(_vm.viewSchools, k) > -1
                  : _vm.viewSchools
              },
              on: {
                change: function($event) {
                  var $$a = _vm.viewSchools,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = k,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.viewSchools = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.viewSchools = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.viewSchools = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: _vm.elmId("chk" + k) } }, [
              _vm._v(_vm._s(k))
            ])
          ])
        }),
        _vm._v(" "),
        _c("button", { on: { click: _vm.toggle } }, [_vm._v("Memorized")])
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "bottom" },
      [
        _c("book", {
          staticClass: "spellbook",
          attrs: { viewing: _vm.viewing }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showList,
                expression: "showList"
              }
            ]
          },
          [
            _c("spelllist", {
              staticClass: "spelllist",
              attrs: { list: _vm.list }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "spellbook" }, [
    _c(
      "table",
      _vm._l(_vm.viewing, function(s) {
        return _c(
          "tr",
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
            _c("td", [
              s.owned && _vm.list.canAdd(s)
                ? _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.list.add(s)
                        }
                      }
                    },
                    [_vm._v("Memorize")]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(s.name))]),
            _vm._v(" "),
            _c("td", [
              s.owned
                ? _c(
                    "button",
                    {
                      attrs: { disabled: !s.canUse(_vm.game) },
                      on: {
                        click: function($event) {
                          return _vm.emit("spell", s)
                        }
                      }
                    },
                    [_vm._v("Cast")]
                  )
                : _c(
                    "button",
                    {
                      attrs: { disabled: !s.canUse(_vm.game) },
                      on: {
                        click: function($event) {
                          return _vm.emit("buy", s)
                        }
                      }
                    },
                    [_vm._v("Learn")]
                  )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/spelllist.vue?vue&type=template&id=b96b8a38&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/spelllist.vue?vue&type=template&id=b96b8a38&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    { staticClass: "spelllist", attrs: { functional: "" } },
    [
      _c("span", [
        _vm._v(
          "Max Levels: " +
            _vm._s(_vm.list.used + " / " + Math.floor(_vm.list.max.value))
        )
      ]),
      _vm._v(" "),
      _vm.list.full()
        ? _c("span", { staticClass: "warn-text" }, [
            _vm._v("Spelllist is Full")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.list.items, function(it, ind) {
        return _c(
          "div",
          {
            key: ind,
            on: {
              "!mouseenter": function($event) {
                $event.stopPropagation()
                return _vm.emit("itemover", $event, it)
              }
            }
          },
          [
            _c("span", [_vm._v(_vm._s(it.name))]),
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    return _vm.list.remove(it)
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/ui/components/filterbox.vue":
/*!*****************************************!*\
  !*** ./src/ui/components/filterbox.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& */ "./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&");
/* harmony import */ var _filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterbox.vue?vue&type=script&lang=js& */ "./src/ui/components/filterbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& */ "./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d0e0bec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/components/filterbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/filterbox.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/ui/components/filterbox.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=style&index=0&id=6d0e0bec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_style_index_0_id_6d0e0bec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/components/filterbox.vue?vue&type=template&id=6d0e0bec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filterbox_vue_vue_type_template_id_6d0e0bec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/sections/spells.vue":
/*!************************************!*\
  !*** ./src/ui/sections/spells.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spells_vue_vue_type_template_id_1967362c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spells.vue?vue&type=template&id=1967362c&scoped=true& */ "./src/ui/sections/spells.vue?vue&type=template&id=1967362c&scoped=true&");
/* harmony import */ var _spells_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spells.vue?vue&type=script&lang=js& */ "./src/ui/sections/spells.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _spells_vue_vue_type_style_index_0_id_1967362c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css& */ "./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _spells_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _spells_vue_vue_type_template_id_1967362c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _spells_vue_vue_type_template_id_1967362c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1967362c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/sections/spells.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/sections/spells.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/ui/sections/spells.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./spells.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_style_index_0_id_1967362c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=style&index=0&id=1967362c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_style_index_0_id_1967362c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_style_index_0_id_1967362c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_style_index_0_id_1967362c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_style_index_0_id_1967362c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_style_index_0_id_1967362c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/sections/spells.vue?vue&type=template&id=1967362c&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/ui/sections/spells.vue?vue&type=template&id=1967362c&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_template_id_1967362c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./spells.vue?vue&type=template&id=1967362c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/spells.vue?vue&type=template&id=1967362c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_template_id_1967362c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spells_vue_vue_type_template_id_1967362c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/spellbook.vue":
/*!******************************!*\
  !*** ./src/ui/spellbook.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spellbook_vue_vue_type_template_id_6adcb0a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true& */ "./src/ui/spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true&");
/* harmony import */ var _spellbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spellbook.vue?vue&type=script&lang=js& */ "./src/ui/spellbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _spellbook_vue_vue_type_style_index_0_id_6adcb0a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css& */ "./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _spellbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _spellbook_vue_vue_type_template_id_6adcb0a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _spellbook_vue_vue_type_template_id_6adcb0a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6adcb0a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/spellbook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/spellbook.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/ui/spellbook.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./spellbook.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_style_index_0_id_6adcb0a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_style_index_0_id_6adcb0a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_style_index_0_id_6adcb0a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_style_index_0_id_6adcb0a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_style_index_0_id_6adcb0a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_style_index_0_id_6adcb0a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/ui/spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_template_id_6adcb0a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=template&id=6adcb0a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_template_id_6adcb0a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spellbook_vue_vue_type_template_id_6adcb0a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/spelllist.vue":
/*!******************************!*\
  !*** ./src/ui/spelllist.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spelllist_vue_vue_type_template_id_b96b8a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spelllist.vue?vue&type=template&id=b96b8a38&scoped=true& */ "./src/ui/spelllist.vue?vue&type=template&id=b96b8a38&scoped=true&");
/* harmony import */ var _spelllist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spelllist.vue?vue&type=script&lang=js& */ "./src/ui/spelllist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _spelllist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _spelllist_vue_vue_type_template_id_b96b8a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _spelllist_vue_vue_type_template_id_b96b8a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b96b8a38",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/spelllist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/spelllist.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/ui/spelllist.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_spelllist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./spelllist.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/spelllist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_spelllist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/spelllist.vue?vue&type=template&id=b96b8a38&scoped=true&":
/*!*************************************************************************!*\
  !*** ./src/ui/spelllist.vue?vue&type=template&id=b96b8a38&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spelllist_vue_vue_type_template_id_b96b8a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./spelllist.vue?vue&type=template&id=b96b8a38&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/spelllist.vue?vue&type=template&id=b96b8a38&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spelllist_vue_vue_type_template_id_b96b8a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spelllist_vue_vue_type_template_id_b96b8a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzRjNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/ZjlhOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8zMGZkIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/NzFhZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83ZjZhIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzE0MTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlIiwid2VicGFjazovLy9zcmMvdWkvc3BlbGxib29rLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9lNWMyIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzc1M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/YzNlMCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT84YjM2Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9hYzdhIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/ODMwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzQxNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/NWY4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83MDhmIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzJiOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/MzVkMyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8yNDRiIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzAwOGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWU/ODgyOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT8zNDMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsdUJBQXVCLEdBQUcsbUNBQW1DLHNCQUFzQiw2QkFBNkIseUJBQXlCLCtCQUErQixHQUFHLGlEQUFpRCxtQkFBbUIsc0JBQXNCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0Y1VCwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsa0NBQWtDLHVCQUF1QiwrQkFBK0Isd0JBQXdCLGtCQUFrQixHQUFHLHVDQUF1QyxtQkFBbUIsNEJBQTRCLEdBQUcsMENBQTBDLGtCQUFrQixHQUFHLDBDQUEwQyxzREFBc0Qsa0JBQWtCLGlDQUFpQyxxQkFBcUIsR0FBRyx3Q0FBd0MsK0JBQStCLGVBQWUsNERBQTRELHNCQUFzQixjQUFjLGtCQUFrQixHQUFHLCtDQUErQyx3QkFBd0IsV0FBVyxHQUFHLHlIQUF5SCw0QkFBNEIsR0FBRyw0REFBNEQsc0JBQXNCLEdBQUcsdUlBQXVJLG9CQUFvQiwwQkFBMEIseUJBQXlCLHlC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ZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNEgsQ0FBZ0Isc01BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaEo7QUFBQTtBQUFBO0FBQUE7QUFBNFMsQ0FBZ0IsbVdBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDs7O0FBR3hEO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRILENBQWdCLHNNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZXYvc3BlbGxzLXVpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxubGFiZWxbZGF0YS12LTZkMGUwYmVjXSB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OjhweDtcXG59XFxuZGl2LmZpbHRlci1ib3hbZGF0YS12LTZkMGUwYmVjXSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDUlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMmVtO1xcclxcblxcdG1hcmdpbjogOHB4IDRweCA4cHggMTJweDtcXG59XFxuLmZpbHRlci1ib3ggaW5wdXRbdHlwZT10ZXh0XVtkYXRhLXYtNmQwZTBiZWNdIHtcXHJcXG5cXHRwYWRkaW5nOiA0cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDUlO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYuc3BlbGxzW2RhdGEtdi0xOTY3MzYyY10ge1xcclxcblxcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuXFx0cGFkZGluZzogOHB4IDE0cHg7XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxufVxcbmRpdi5zcGVsbHMgLmJvdHRvbVtkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xcbn1cXG5kaXYuc3BlbGxzIC5zcGVsbGJvb2tbZGF0YS12LTE5NjczNjJjXSB7XFxyXFxuXFx0ZmxleC1ncm93OjE7XFxufVxcbmRpdi5zcGVsbHMgLnNwZWxsbGlzdFtkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhciggLS1zZXBhcmF0b3ItY29sb3IgKTtcXHJcXG5cXHR3aWR0aDoxNDBweDtcXHJcXG5cXHRwYWRkaW5nOiB2YXIoIC0tdGlueS1nYXAgKTtcXHJcXG5cXHRmbGV4LXNocmluazogMTtcXG59XFxuZGl2LnNwZWxscyAuZmlsdGVyc1tkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG4gICAgICAgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xcclxcbiAgICAgICAgbWFyZ2luOiAwOyBwYWRkaW5nOiA0cHg7IGxpbmUtaGVpZ2h0OiAyZW07XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2W2RhdGEtdi0xOTY3MzYyY10geyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2W2RhdGEtdi0xOTY3MzYyY106bnRoLWNoaWxkKDEpLFxcclxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2W2RhdGEtdi0xOTY3MzYyY106bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBpbnB1dFt0eXBlPXRleHRdW2RhdGEtdi0xOTY3MzYyY10geyBwYWRkaW5nOiA0cHggMCA0cHggMDtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPXRleHRdW2RhdGEtdi0xOTY3MzYyY10sXFxyXFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPW51bWJlcl1bZGF0YS12LTE5NjczNjJjXSB7XFxyXFxuXFxyXFxuXFx0XFx0ZmxleDogMTtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDFlbTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMWVtO1xcclxcblxcdFxcdG1pbi13aWR0aDogdW5zZXQ7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiB1bnNldDtcXHJcXG5cXHRcXHRwYWRkaW5nOiA0cHggMDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDEwNSU7XFxyXFxuXFx0XFx0d2lkdGg6IDA7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXZbZGF0YS12LTE5NjczNjJjXSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgbGFiZWxbZGF0YS12LTE5NjczNjJjXSB7IGZsZXgtYmFzaXM6IDIwJTtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFtkYXRhLXYtMTk2NzM2MmNdIHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAwOyB0ZXh0LWluZGVudDogNHB4O1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGRpdi5jaGVja3NbZGF0YS12LTE5NjczNjJjXSB7IG1hcmdpbjogMDsgZmxleC1iYXNpczogMTYlO1xcbn1cXHJcXG5cXHJcXG5cXHRcXHQvKmRpdi5zcGVsbGJvb2sgLmZpbHRlcnMge1xcclxcblxcdFxcdFxcdG9yZGVyOiAxOyBmbGV4LWZsb3c6IHJvdyB3cmFwOyBkaXNwbGF5OiBmbGV4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlcGFyYXRvci1jb2xvcik7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwOyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApOyBsaW5lLWhlaWdodDogMmVtOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5kaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDsgfVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgxKSxcXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdjpudGgtY2hpbGQoMikge1xcclxcblxcdFxcdFxcdGZsZXgtYmFzaXM6IDUwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBpbnB1dFt0eXBlPXRleHRdIHsgcGFkZGluZzogdmFyKC0tc21hbGwtZ2FwKSAwIHZhcigtLXNtYWxsLWdhcCkgMDsgfVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9bnVtYmVyXSB7XFxyXFxuXFx0XFx0XFx0ZmxleDogMTsgbWFyZ2luLXJpZ2h0OiAxZW07IG1hcmdpbi1sZWZ0OiAxZW07IG1pbi13aWR0aDogdW5zZXQ7IG1heC13aWR0aDogdW5zZXQ7IHdpZHRoOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgbGFiZWwgeyBmbGV4LWJhc2lzOiAyMCU7IH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0IHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAwOyB0ZXh0LWluZGVudDogdmFyKC0tc21hbGwtZ2FwKTsgfVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2LmNoZWNrcyB7IG1hcmdpbjogMDsgcGFkZGluZzogMCAwLjVlbTsgZmxleC1iYXNpczogdW5zZXQ7IH0qL1xcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zcGVsbGJvb2tbZGF0YS12LTZhZGNiMGEyXSB7XFxyXFxuXFx0cGFkZGluZzogNHB4O1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnNwZWxsYm9vayB0YWJsZVtkYXRhLXYtNmFkY2IwYTJdIHsgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc3BlbGxib29rIHRhYmxlIHRyW2RhdGEtdi02YWRjYjBhMl0geyBkaXNwbGF5OmZsZXg7IGZsZXgtYmFzaXM6IDQ4JTtcXG59XFxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgxKSwgLnNwZWxsYm9vayB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgzKSB7XFxyXFxuXFx0ZmxleC1iYXNpczogMjAlOyBvcmRlcjogMztcXG59XFxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgyKSB7IGZsZXg6IDE7IG9yZGVyOiAxO31cXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDMpIHsgZmxleC1iYXNpczogMjAlOyBvcmRlcjogMjtcXG59XFxuLnNwZWxsYm9vayB0YWJsZSB0ZFtkYXRhLXYtNmFkY2IwYTJdIHsgZGlzcGxheTogZmxleDtcXG59XFxuZGl2LnNwZWxsYm9va1tkYXRhLXYtNmFkY2IwYTJdIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcGFkZGluZzogMDtcXG59XFxuZGl2LnNwZWxsYm9va1tkYXRhLXYtNmFkY2IwYTJdIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiB2YXIoLS1tZWRpdW0tZ2FwKTtcXG59XFxuZGl2LnNwZWxsYm9vayB0YWJsZVtkYXRhLXYtNmFkY2IwYTJdIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KCAyNTZweCwgMWZyICkgcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCAyNTZweCwgMWZyICkpO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6ICAxZnI7XFxufVxcbmRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyW2RhdGEtdi02YWRjYjBhMl0geyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMSksXFxyXFxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDIpeyBmbGV4OiAxO1xcbn1cXG5kaXYuc3BlbGxib29rICB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgyKXsgZmxleDogMjtcXG59XFxuZGl2LnNwZWxsYm9vayBidXR0b25bZGF0YS12LTZhZGNiMGEyXSB7IGZsZXg6IDE7IGZvbnQtc2l6ZTogdmFyKC0tY29tcGFjdC1zbWFsbC1mb250KTsgbWFyZ2luOiAwO1xcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHQvKipcclxuXHQgKiBAcHJvcGVydHkge29iamVjdFtdfSBpdGVtcyAtIGl0ZW1zIHRvIGZpbHRlci5cclxuXHQgKiBAcHJvcGVydHkge3Byb3B9IFtwcm9wPSduYW1lJ10gLSB0YXJnZXQgcHJvcCBvZiBmaWx0ZXIgdGVzdC5cclxuXHQgKlxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluSXRlbXM9MF0gLSBtaW5pbXVtIG51bWJlciBvZiBpdGVtcyBiZWZvcmUgYm94IGlzIHZpc2libGUuXHJcblx0ICovXHJcblx0cHJvcHM6Wyd2YWx1ZScsICdpdGVtcycsICdwcm9wJywgJ21pbkl0ZW1zJ10sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRleHQ6JycsXHJcblx0XHRcdHBwcm9wOnRoaXMucHJvcHx8J25hbWUnXHJcblx0XHR9XHJcblx0fSxcclxuXHR3YXRjaDp7XHJcblx0XHRpdGVtcyhuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0dGhpcy5maW5kVGV4dCA9IHRoaXMuZmluZFRleHQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHRjcmVhdGVkKCl7XHJcblx0XHR0aGlzLmZpbmRUZXh0ID0gdGhpcy50ZXh0O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6e1xyXG5cclxuXHRcdGZpbmRUZXh0OntcclxuXHJcblx0XHRcdGdldCgpIHsgcmV0dXJuIHRoaXMudGV4dDsgfSxcclxuXHRcdFx0c2V0KHYpe1xyXG5cclxuXHRcdFx0XHR0aGlzLnRleHQgPSB2O1xyXG5cdFx0XHRcdGxldCBwID0gdGhpcy5wcHJvcDtcclxuXHJcblx0XHRcdFx0aWYgKCAhdiApIHRoaXMuJGVtaXQoICdpbnB1dCcsIHRoaXMuaXRlbXMgKTtcclxuXHJcblx0XHRcdFx0dmFyIHR4dCA9IHYudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0aWYgKCB0eXBlb2YgcCA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuIFx0XHRcdFx0XHR0aGlzLiRlbWl0KCAnaW5wdXQnLCB0aGlzLml0ZW1zLmZpbHRlcihcclxuXHRcdFx0XHRcdFx0aXQ9PnAoaXQsIHR4dCApXHJcblx0XHRcdFx0XHQpKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHRoaXMuJGVtaXQoICdpbnB1dCcsIHRoaXMuaXRlbXMuZmlsdGVyKFxyXG5cdFx0XHRcdFx0aXQ9Pih0eXBlb2YgaXQgPT09ICdvYmplY3QnKSAmJlxyXG5cdFx0XHRcdFx0KCAodHlwZW9mIGl0W3BdKSA9PT0gJ3N0cmluZycgKSAmJiBpdFtwXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCB0eHQgKVxyXG5cdFx0XHRcdCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImZpbHRlci1ib3hcIiB2LWlmPVwiIXRoaXMubWluSXRlbXN8fCh0aGlzLml0ZW1zLmxlbmd0aD49dGhpcy5taW5JdGVtcylcIj5cclxuXHRcdDxsYWJlbCA6Zm9yPVwiZWxtSWQoJ2ZpbHRlcicpXCI+RmluZDwvbGFiZWw+XHJcblx0XHQ8aW5wdXQgOmlkPVwiZWxtSWQoJ2ZpbHRlcicpXCIgdi1tb2RlbD1cImZpbmRUZXh0XCIgdHlwZT1cInRleHRcIj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5sYWJlbCB7XHJcblx0bWFyZ2luLXJpZ2h0OjhweDtcclxufVxyXG5kaXYuZmlsdGVyLWJveCB7XHJcblx0Zm9udC1zaXplOiAxMDUlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0bGluZS1oZWlnaHQ6IDEuMmVtO1xyXG5cdG1hcmdpbjogOHB4IDRweCA4cHggMTJweDtcclxufVxyXG5cclxuLmZpbHRlci1ib3ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGZvbnQtc2l6ZTogMTA1JTtcclxufVxyXG48L3N0eWxlPiIsIjxzY3JpcHQ+XHJcbmltcG9ydCBHYW1lIGZyb20gJy4uLy4uL2dhbWUnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vLi4vc2V0dGluZ3MnO1xyXG5cclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4uL2l0ZW1zQmFzZSc7XHJcblxyXG5pbXBvcnQgRmlsdGVyQm94IGZyb20gJy4uL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZSc7XHJcbmltcG9ydCBCb29rIGZyb20gJy4uL3NwZWxsYm9vay52dWUnO1xyXG5pbXBvcnQgU3BlbGxMaXN0IGZyb20gJy4uL3NwZWxsbGlzdC52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRkYXRhKCl7XHJcblxyXG5cdFx0bGV0IHNwZWxsT3BzID0gU2V0dGluZ3MuZ2V0VmFycyggJ3NwZWxscycpO1xyXG5cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKCB7XHJcblx0XHRcdHNob3dMaXN0OmZhbHNlLFxyXG5cdFx0XHRmaWx0ZXJlZDpudWxsLFxyXG5cdFx0XHRzY2hvb2xzOltdLFxyXG5cdFx0XHRtaW46bnVsbCxcclxuXHRcdFx0bWF4Om51bGxcclxuXHRcdH0sIHNwZWxsT3BzICk7XHJcblxyXG5cdH0sXHJcblx0bWl4aW5zOltJdGVtQmFzZV0sXHJcblx0Y29tcG9uZW50czp7XHJcblxyXG5cdFx0ZmlsdGVyYm94OkZpbHRlckJveCxcclxuXHRcdGJvb2s6Qm9vayxcclxuXHRcdHNwZWxsbGlzdDpTcGVsbExpc3RcclxuXHJcblx0fSxcclxuXHRtZXRob2RzOntcclxuXHJcblx0XHR0b2dnbGUoKXtcclxuXHRcdFx0dGhpcy5zaG93TGlzdCA9ICF0aGlzLnNob3dMaXN0O1xyXG5cdFx0XHRTZXR0aW5ncy5zZXRWYXIoICdzcGVsbHMnLCAnc2hvd0xpc3QnLCB0aGlzLnNob3dMaXN0ICk7XHJcblx0XHR9XHJcblxyXG5cdH0sIGNvbXB1dGVkOntcclxuXHJcblx0XHRzdGF0ZSgpIHsgcmV0dXJuIEdhbWUuc3RhdGU7IH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1NwZWxsTGlzdH0gc3BlbGxsaXN0IC0gc3BlbGxzIGluIGFjdGl2ZSB1c2UuIChkdW5nZW9ucylcclxuXHRcdCAqL1xyXG5cdFx0bGlzdCgpIHsgcmV0dXJuIEdhbWUuc3RhdGUuc3BlbGxsaXN0OyB9LFxyXG5cclxuXHRcdG1pbkxldmVsOntcclxuXHJcblx0XHRcdGdldCgpeyByZXR1cm4gdGhpcy5taW47IH0sXHJcblx0XHRcdHNldCh2KXtcclxuXHRcdFx0XHR0aGlzLm1pbiA9IE51bWJlcih2KTtcclxuXHRcdFx0XHRTZXR0aW5ncy5zZXRWYXIoICdzcGVsbHMnLCAnbWluJywgdGhpcy5taW4gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmlld1NjaG9vbHM6e1xyXG5cclxuXHRcdFx0Z2V0KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2Nob29scztcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0KHYpe1xyXG5cclxuXHRcdFx0XHR0aGlzLnNjaG9vbHMgPSB2O1xyXG5cdFx0XHRcdFNldHRpbmdzLnNldFZhciggJ3NwZWxscycsICdzY2hvb2xzJywgdGhpcy5zY2hvb2xzLmNvbmNhdCgpICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsc3RyaW5nPn0gc2Nob29scyAtIHNjaG9vbHMgb2YgYWxsIHVubG9ja2VkIHNwZWxscy5cclxuXHRcdCAqL1xyXG5cdFx0YWxsU2Nob29scygpIHtcclxuXHJcblx0XHRcdGxldCByZXMgPSB7fTtcclxuXHJcblx0XHRcdGxldCBhID0gdGhpcy5zcGVsbHM7XHJcblx0XHRcdGZvciggbGV0IGkgPSBhLmxlbmd0aC0xOyBpPj0gMDsgaS0tICkge1xyXG5cdFx0XHRcdHZhciBzID0gYVtpXTtcclxuXHRcdFx0XHRpZiAoIHMuc2Nob29sICkgcmVzW3Muc2Nob29sXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U3BlbGxbXX0gdmlld2luZyAtIGFycmF5IG9mIHNwZWxscyBhY3R1YWxseSB2aXNpYmxlXHJcblx0XHQgKiBhZnRlciBtaW4vbWF4IGxldmVscyBhbmQgc2Nob29scyBoYXZlIGJlZW4gYXBwbGllZCB0byBmaWx0ZXJlZC5cclxuXHRcdCAqL1xyXG5cdFx0dmlld2luZygpIHtcclxuXHJcblx0XHRcdGxldCBzcGVsbHMgPSB0aGlzLmZpbHRlcmVkIHx8IHRoaXMuc3BlbGxzO1xyXG5cdFx0XHRsZXQgdlNjaG9vbHMgPSB0aGlzLnZpZXdTY2hvb2xzO1xyXG5cdFx0XHRsZXQgbGV2ZWwgPSB0aGlzLm1pbkxldmVsO1xyXG5cclxuXHRcdFx0aWYgKCB2U2Nob29scy5sZW5ndGg+MCB8fCBsZXZlbCApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHNwZWxscy5maWx0ZXIodj0+e1xyXG5cdFx0XHRcdFx0cmV0dXJuICgodlNjaG9vbHMubGVuZ3RoPT09MHx8dlNjaG9vbHMuaW5jbHVkZXModi5zY2hvb2wpKSApXHJcblx0XHRcdFx0XHRcdCYmKCFsZXZlbHx8KHYubGV2ZWw9PT1sZXZlbCkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc3BlbGxzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1NwZWxsfSBzcGVsbHMgLSBhcnJheSBvZiB1bmxvY2tlZCBzcGVsbHMuXHJcblx0XHQgKi9cclxuXHRcdHNwZWxscygpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5maWx0ZXJJdGVtcyhcclxuXHRcdFx0XHRpdD0+aXQudHlwZSA9PT0gJ3NwZWxsJyAmJiAhdGhpcy5sb2NrZWQoaXQpICk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwic3BlbGxzXCI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJmaWx0ZXJzXCI+XHJcblxyXG5cdFx0XHQ8ZmlsdGVyYm94IHYtbW9kZWw9XCJmaWx0ZXJlZFwiIDppdGVtcz1cInNwZWxsc1wiIC8+XHJcblxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwibGV2ZWwtbGJsXCIgOmZvcj1cImVsbUlkKCdsZXZlbCcpXCI+TGV2ZWw8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJsZXZlbFwiIDppZD1cImVsbUlkKCdsZXZlbCcpXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJtaW5MZXZlbFwiIG1pbj0wIHNpemU9NT5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2hlY2tzXCIgdi1mb3I9XCIocCxrKSBpbiBhbGxTY2hvb2xzXCIgOmtleT1cImtcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJrXCIgOmlkPVwiZWxtSWQoJ2NoaycraylcIiB2LW1vZGVsPVwidmlld1NjaG9vbHNcIiA+XHJcblx0XHRcdFx0XHQ8bGFiZWwgOmZvcj1cImVsbUlkKCdjaGsnK2spXCI+e3sgayB9fTwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVwiPk1lbW9yaXplZDwvYnV0dG9uPlxyXG5cclxuXHQ8L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJib3R0b21cIj5cclxuXHJcbjxib29rIGNsYXNzPVwic3BlbGxib29rXCIgOnZpZXdpbmc9XCJ2aWV3aW5nXCIgLz5cclxuPGRpdiB2LXNob3c9XCJzaG93TGlzdFwiPlxyXG48c3BlbGxsaXN0IGNsYXNzPVwic3BlbGxsaXN0XCIgOmxpc3Q9XCJsaXN0XCIgLz5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG5kaXYuc3BlbGxzIHtcclxuXHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRwYWRkaW5nOiA4cHggMTRweDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHJcbn1cclxuXHJcbmRpdi5zcGVsbHMgLmJvdHRvbSB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxufVxyXG5cclxuZGl2LnNwZWxscyAuc3BlbGxib29rIHtcclxuXHRmbGV4LWdyb3c6MTtcclxufVxyXG5cclxuXHJcbmRpdi5zcGVsbHMgLnNwZWxsbGlzdCB7XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoIC0tc2VwYXJhdG9yLWNvbG9yICk7XHJcblx0d2lkdGg6MTQwcHg7XHJcblx0cGFkZGluZzogdmFyKCAtLXRpbnktZ2FwICk7XHJcblx0ZmxleC1zaHJpbms6IDE7XHJcbn1cclxuXHJcbmRpdi5zcGVsbHMgLmZpbHRlcnMge1xyXG4gICAgICAgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDRweDsgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXY6bnRoLWNoaWxkKDEpLFxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgIH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBpbnB1dFt0eXBlPXRleHRdIHsgcGFkZGluZzogNHB4IDAgNHB4IDA7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPXRleHRdLFxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcblxyXG5cdFx0ZmxleDogMTtcclxuXHRcdG1hcmdpbi1yaWdodDogMWVtO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDFlbTtcclxuXHRcdG1pbi13aWR0aDogdW5zZXQ7XHJcblx0XHRtYXgtd2lkdGg6IHVuc2V0O1xyXG5cdFx0cGFkZGluZzogNHB4IDA7XHJcblx0XHRmb250LXNpemU6IDEwNSU7XHJcblx0XHR3aWR0aDogMDtcclxufVxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGxhYmVsIHsgZmxleC1iYXNpczogMjAlOyB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiA0cHg7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXYuY2hlY2tzIHsgbWFyZ2luOiAwOyBmbGV4LWJhc2lzOiAxNiU7IH1cclxuXHJcblx0XHQvKmRpdi5zcGVsbGJvb2sgLmZpbHRlcnMge1xyXG5cdFx0XHRvcmRlcjogMTsgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxuXHRcdFx0bWFyZ2luOiAwOyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApOyBsaW5lLWhlaWdodDogMmVtOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHR9XHJcblx0XHQuZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgxKSxcclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgyKSB7XHJcblx0XHRcdGZsZXgtYmFzaXM6IDUwJTtcclxuXHRcdH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCkgMCB2YXIoLS1zbWFsbC1nYXApIDA7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT10ZXh0XSxcclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuXHRcdFx0ZmxleDogMTsgbWFyZ2luLXJpZ2h0OiAxZW07IG1hcmdpbi1sZWZ0OiAxZW07IG1pbi13aWR0aDogdW5zZXQ7IG1heC13aWR0aDogdW5zZXQ7IHdpZHRoOiAwO1xyXG5cdFx0fVxyXG5cdFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgbGFiZWwgeyBmbGV4LWJhc2lzOiAyMCU7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiB2YXIoLS1zbWFsbC1nYXApOyB9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdi5jaGVja3MgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDAgMC41ZW07IGZsZXgtYmFzaXM6IHVuc2V0OyB9Ki9cclxuXHJcbjwvc3R5bGU+IiwiPHNjcmlwdD5cclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4vaXRlbXNCYXNlJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdHByb3BzOlsndmlld2luZyddLFxyXG5cdG1peGluczpbSXRlbUJhc2VdLFxyXG5cdGNyZWF0ZWQoKXtcclxuXHRcdHRoaXMuZ2FtZSA9IEdhbWU7XHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0c3RhdGUoKSB7IHJldHVybiBHYW1lLnN0YXRlOyB9LFxyXG5cclxuXHRcdGxpc3QoKXsgcmV0dXJuIEdhbWUuc3RhdGUuc3BlbGxsaXN0OyB9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJzcGVsbGJvb2tcIj5cclxuXHRcdDx0YWJsZT5cclxuXHRcdDx0ciB2LWZvcj1cInMgaW4gdmlld2luZ1wiIDprZXk9XCJzLmlkXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywgJGV2ZW50LCBzIClcIj5cclxuXHJcblx0XHRcdDx0ZD5cclxuXHJcblx0XHRcdFx0PGJ1dHRvbiB2LWlmPVwicy5vd25lZCYmbGlzdC5jYW5BZGQocylcIiBAY2xpY2s9XCJsaXN0LmFkZChzKVwiPk1lbW9yaXplPC9idXR0b24+XHJcblxyXG5cdFx0XHRcdDwvdGQ+XHJcblx0XHRcdDx0ZD57eyBzLm5hbWUgfX08L3RkPlxyXG5cdFx0XHQ8dGQ+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gdi1pZj1cInMub3duZWRcIiBAY2xpY2s9XCJlbWl0KCdzcGVsbCcsIHMpXCIgOmRpc2FibGVkPVwiIXMuY2FuVXNlKGdhbWUpXCI+Q2FzdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtZWxzZSBAY2xpY2s9XCJlbWl0KCdidXknLCBzKVwiIDpkaXNhYmxlZD1cIiFzLmNhblVzZShnYW1lKVwiPkxlYXJuPC9idXR0b24+XHJcblxyXG5cdFx0XHQ8L3RkPlxyXG5cclxuXHRcdDwvdHI+XHJcblx0XHQ8L3RhYmxlPlxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uc3BlbGxib29rIHtcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zcGVsbGJvb2sgdGFibGUgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IHJvdyB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cclxuLnNwZWxsYm9vayB0YWJsZSB0ciB7IGRpc3BsYXk6ZmxleDsgZmxleC1iYXNpczogNDglOyB9XHJcbi5zcGVsbGJvb2sgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDEpLCAuc3BlbGxib29rIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgzKSB7XHJcblx0ZmxleC1iYXNpczogMjAlOyBvcmRlcjogMzsgfVxyXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7IGZsZXg6IDE7IG9yZGVyOiAxO31cclxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMykgeyBmbGV4LWJhc2lzOiAyMCU7IG9yZGVyOiAyOyB9XHJcbi5zcGVsbGJvb2sgdGFibGUgdGQgeyBkaXNwbGF5OiBmbGV4OyB9XHJcblxyXG4gZGl2LnNwZWxsYm9vayB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmc6IDA7IH1cclxuZGl2LnNwZWxsYm9vayB7IG1hcmdpbjogMDsgcGFkZGluZzogdmFyKC0tbWVkaXVtLWdhcCk7IH1cclxuXHJcbiBkaXYuc3BlbGxib29rIHRhYmxlIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCggMjU2cHgsIDFmciApIHJlcGVhdCggYXV0by1maXQsIG1pbm1heCggMjU2cHgsIDFmciApKTtcclxuICAgICAgICBncmlkLWF1dG8tcm93czogIDFmcjtcclxuICAgIH1cclxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHsgcGFkZGluZzogdmFyKC0tc21hbGwtZ2FwKTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cclxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgxKSxcclxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKXsgZmxleDogMTsgfVxyXG4gICAgZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpeyBmbGV4OiAyOyB9XHJcblx0ZGl2LnNwZWxsYm9vayBidXR0b24geyBmbGV4OiAxOyBmb250LXNpemU6IHZhcigtLWNvbXBhY3Qtc21hbGwtZm9udCk7IG1hcmdpbjogMDsgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0cHJvcHM6WydsaXN0J11cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cInNwZWxsbGlzdFwiIGZ1bmN0aW9uYWw+XHJcblxyXG5cdDxzcGFuPk1heCBMZXZlbHM6IHt7IGxpc3QudXNlZCArICcgLyAnICsgTWF0aC5mbG9vciggbGlzdC5tYXgudmFsdWUgKSB9fTwvc3Bhbj5cclxuXHQ8c3BhbiBjbGFzcz0nd2Fybi10ZXh0JyB2LWlmPVwibGlzdC5mdWxsKClcIj5TcGVsbGxpc3QgaXMgRnVsbDwvc3Bhbj5cclxuXHQ8ZGl2IHYtZm9yPVwiKGl0LGluZCkgaW4gbGlzdC5pdGVtc1wiIDprZXk9XCJpbmRcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCAkZXZlbnQsIGl0IClcIj5cclxuXHRcdDxzcGFuPnt7IGl0Lm5hbWUgfX08L3NwYW4+PGJ1dHRvbiBAY2xpY2s9XCJsaXN0LnJlbW92ZShpdClcIj5SZW1vdmU8L2J1dHRvbj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuICF0aGlzLm1pbkl0ZW1zIHx8IHRoaXMuaXRlbXMubGVuZ3RoID49IHRoaXMubWluSXRlbXNcbiAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLWJveFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogX3ZtLmVsbUlkKFwiZmlsdGVyXCIpIH0gfSwgW192bS5fdihcIkZpbmRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbmRUZXh0LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbmRUZXh0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBfdm0uZWxtSWQoXCJmaWx0ZXJcIiksIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maW5kVGV4dCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5maW5kVGV4dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3BlbGxzXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyc1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZmlsdGVyYm94XCIsIHtcbiAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLnNwZWxscyB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcmVkLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZmlsdGVyZWQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlcmVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxibFwiLCBhdHRyczogeyBmb3I6IF92bS5lbG1JZChcImxldmVsXCIpIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJMZXZlbFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5taW5MZXZlbCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1pbkxldmVsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxldmVsXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLmVsbUlkKFwibGV2ZWxcIiksXG4gICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgICAgIHNpemU6IFwiNVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5taW5MZXZlbCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5taW5MZXZlbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLmFsbFNjaG9vbHMsIGZ1bmN0aW9uKHAsIGspIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGssIHN0YXRpY0NsYXNzOiBcImNoZWNrc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZpZXdTY2hvb2xzLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2aWV3U2Nob29sc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBfdm0uZWxtSWQoXCJjaGtcIiArIGspIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGssXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0udmlld1NjaG9vbHMpXG4gICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0udmlld1NjaG9vbHMsIGspID4gLTFcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnZpZXdTY2hvb2xzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0udmlld1NjaG9vbHMsXG4gICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IGssXG4gICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnZpZXdTY2hvb2xzID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udmlld1NjaG9vbHMgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdm0udmlld1NjaG9vbHMgPSAkJGNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IF92bS5lbG1JZChcImNoa1wiICsgaykgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaykpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlIH0gfSwgW192bS5fdihcIk1lbW9yaXplZFwiKV0pXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiYm9va1wiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BlbGxib29rXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdmlld2luZzogX3ZtLnZpZXdpbmcgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0xpc3QsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93TGlzdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3BlbGxsaXN0XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3BlbGxsaXN0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGxpc3Q6IF92bS5saXN0IH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGVsbGJvb2tcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBfdm0uX2woX3ZtLnZpZXdpbmcsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IHMuaWQsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgIHMub3duZWQgJiYgX3ZtLmxpc3QuY2FuQWRkKHMpXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubGlzdC5hZGQocylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNZW1vcml6ZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHMubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgIHMub3duZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFzLmNhblVzZShfdm0uZ2FtZSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJzcGVsbFwiLCBzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhc3RcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhcy5jYW5Vc2UoX3ZtLmdhbWUpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiYnV5XCIsIHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGVhcm5cIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNwZWxsbGlzdFwiLCBhdHRyczogeyBmdW5jdGlvbmFsOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJNYXggTGV2ZWxzOiBcIiArXG4gICAgICAgICAgICBfdm0uX3MoX3ZtLmxpc3QudXNlZCArIFwiIC8gXCIgKyBNYXRoLmZsb29yKF92bS5saXN0Lm1heC52YWx1ZSkpXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5saXN0LmZ1bGwoKVxuICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm4tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlNwZWxsbGlzdCBpcyBGdWxsXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmxpc3QuaXRlbXMsIGZ1bmN0aW9uKGl0LCBpbmQpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBpbmQsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgaXQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdC5uYW1lKSldKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5saXN0LnJlbW92ZShpdClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2ZDBlMGJlY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZkMGUwYmVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZkMGUwYmVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZkMGUwYmVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZkMGUwYmVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NwZWxscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NwZWxscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxOTY3MzYyY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE5NjczNjJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE5NjczNjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE5NjczNjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5NjczNjJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmFkY2IwYTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YWRjYjBhMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YWRjYjBhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YWRjYjBhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YWRjYjBhMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL3NwZWxsYm9vay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjk2YjhhMzgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjk2YjhhMzhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiOTZiOGEzOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiOTZiOGEzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiOTZiOGEzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOTZiOGEzOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiOTZiOGEzOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL3NwZWxsbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOTZiOGEzOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=