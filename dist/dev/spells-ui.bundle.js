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
exports.push([module.i, "\ndiv.spells[data-v-1967362c] {\r\n\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tpadding: 8px 14px;\r\n\theight:100%;\n}\ndiv.spells .bottom[data-v-1967362c] {\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\n}\ndiv.spells .spellbook[data-v-1967362c] {\r\n\tflex-grow:1;\n}\ndiv.spells .spelllist[data-v-1967362c] {\r\n\tborder-left: 1px solid var( --separator-color );\r\n\twidth:100px;\r\n\tflex-shrink: 1;\n}\ndiv.spells .filters[data-v-1967362c] {\r\n        order: 1; flex-flow: row wrap; display: flex;\r\n        border-bottom: 1px solid var(--separator-color);\r\n        margin: 0; padding: 4px; line-height: 2em;\n}\ndiv.spells div.filters div[data-v-1967362c] { box-sizing: border-box; margin: 0;\n}\ndiv.spells div.filters div[data-v-1967362c]:nth-child(1),\r\ndiv.spells div.filters div[data-v-1967362c]:nth-child(2) {\r\n        flex-basis: 50%;\n}\ndiv.spells div.filters input[type=text][data-v-1967362c] { padding: 4px 0 4px 0;\n}\ndiv.spells div.filters > div input[type=text][data-v-1967362c],\r\ndiv.spells div.filters > div input[type=number][data-v-1967362c] {\r\n\r\n\t\tflex: 1;\r\n\t\tmargin-right: 1em;\r\n\t\tmargin-left: 1em;\r\n\t\tmin-width: unset;\r\n\t\tmax-width: unset;\r\n\t\tpadding: 4px 0;\r\n\t\tfont-size: 105%;\r\n\t\twidth: 0;\n}\ndiv.spells div.filters > div[data-v-1967362c] { display: flex; align-items: center;\n}\ndiv.spells div.filters > div label[data-v-1967362c] { flex-basis: 20%;\n}\ndiv.spells div.filters > div input[data-v-1967362c] { min-width: 0; padding: 0; text-indent: 4px;\n}\ndiv.spells div.filters div.checks[data-v-1967362c] { margin: 0; flex-basis: 16%;\n}\r\n\r\n\t\t/*div.spellbook .filters {\r\n\t\t\torder: 1; flex-flow: row wrap; display: flex; text-align: center;\r\n\t\t\tborder-bottom: 1px solid var(--separator-color);\r\n\t\t\tmargin: 0; padding: var(--small-gap); line-height: 2em; justify-content: flex-start;\r\n\t\t}\r\n\t\t.div.spellbook div.filters div { box-sizing: border-box; margin: 0; }\r\n\t\tdiv.spellbook div.filters div:nth-child(1),\r\n\t\tdiv.spellbook div.filters div:nth-child(2) {\r\n\t\t\tflex-basis: 50%;\r\n\t\t}\r\n\t\tdiv.spellbook div.filters input[type=text] { padding: var(--small-gap) 0 var(--small-gap) 0; }\r\n\t\tdiv.spellbook div.filters > div input[type=text],\r\n\t\tdiv.spellbook div.filters > div input[type=number] {\r\n\t\t\tflex: 1; margin-right: 1em; margin-left: 1em; min-width: unset; max-width: unset; width: 0;\r\n\t\t}\r\n\t\tdiv.spellbook div.filters > div { display: flex; align-items: center; }\r\n\t\tdiv.spellbook div.filters > div label { flex-basis: 20%; }\r\n\t\tdiv.spellbook div.filters > div input { min-width: 0; padding: 0; text-indent: var(--small-gap); }\r\n\t\tdiv.spellbook div.filters div.checks { margin: 0; padding: 0 0.5em; flex-basis: unset; }*/\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/spellbook.vue?vue&type=style&index=0&id=6adcb0a2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.spellbook[data-v-6adcb0a2] {\r\n\torder: 2; padding: 4px;\r\n\toverflow-y: auto;\r\n\theight:100%;\r\n\tmargin-bottom: 20px;\n}\n.spellbook table[data-v-6adcb0a2] { display: flex; flex-flow: row wrap; justify-content: space-between;\n}\n.spellbook table tr[data-v-6adcb0a2] { display:flex; flex-basis: 48%;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(1), .spellbook table tr td[data-v-6adcb0a2]:nth-child(3) {\r\n\tflex-basis: 20%; order: 3;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(2) { flex: 1; order: 1;}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(3) { flex-basis: 20%; order: 2;\n}\n.spellbook table td[data-v-6adcb0a2] { display: flex;\n}\ndiv.spellbook[data-v-6adcb0a2] { flex-direction: column; padding: 0;\n}\ndiv.spellbook[data-v-6adcb0a2] { margin: 0; padding: var(--medium-gap);\n}\ndiv.spellbook table[data-v-6adcb0a2] {\r\n        display: grid; grid-template-columns: minmax( 256px, 1fr ) repeat( auto-fit, minmax( 256px, 1fr ));\r\n        grid-auto-rows:  1fr;\n}\ndiv.spellbook  table tr[data-v-6adcb0a2] { padding: var(--small-gap); display:flex; align-items:center;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(1),\r\n    div.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 1;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 2;\n}\ndiv.spellbook button[data-v-6adcb0a2] { flex: 1; font-size: var(--compact-small-font); margin: 0;\n}\r\n\r\n\r\n", ""]);


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
				else if ( typeof p === 'function') {

 					this.$emit( 'input', this.items.filter(
						it=>p(it, v)
					));

				} else this.$emit( 'input', this.items.filter(
					it=>(typeof it === 'object') &&
					( (typeof it[p]) === 'string' ) && it[p].includes( v )
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
/* harmony import */ var _itemsBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../itemsBase */ "./src/ui/itemsBase.js");
/* harmony import */ var _components_filterbox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/filterbox.vue */ "./src/ui/components/filterbox.vue");
/* harmony import */ var _spellbook_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spellbook.vue */ "./src/ui/spellbook.vue");
/* harmony import */ var _spelllist_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spelllist.vue */ "./src/ui/spelllist.vue");








/* harmony default export */ __webpack_exports__["default"] = ({

	data(){

		return {
			showList:false,
			filtered:null,
			viewSchools:[],
			pMin:null,
			pMax:null
		};

	},
	mixins:[_itemsBase__WEBPACK_IMPORTED_MODULE_1__["default"]],
	components:{

		filterbox:_components_filterbox_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
		book:_spellbook_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
		spelllist:_spelllist_vue__WEBPACK_IMPORTED_MODULE_4__["default"]

	},
	methods:{

		toggle(){
			this.showList = !this.showList;
			console.log('SHOW: ' + this.showList );
		}

	}, computed:{

		state() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state; },

		/**
		 * @property {SpellList} spelllist - spells in active use. (dungeons)
		 */
		list() { return _game__WEBPACK_IMPORTED_MODULE_0__["default"].state.spelllist; },

		minLevel:{

			get(){ return this.pMin; },
			set(v){ this.pMin = Number(v); }

		},

		/**
		 * @property {Object.<string,string>} schools - schools of all unlocked spells.
		 */
		schools() {

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

			let spells = this.filtered;
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

	methods:{

		addList(it) {
			this.list.add(it);
		}

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

	props:['list'],
	methods:{

		remove(it) {
			this.list.remove(it);

		},
		add(it) {
			this.list.add(it);
		}

	},
	computed:{

	}

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
        _c("button", { on: { click: _vm.toggle } }, [_vm._v("Memorized")]),
        _vm._v(" "),
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
        _vm._l(_vm.schools, function(p, k) {
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
        })
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
              s.owned && s.attack && _vm.list.canAdd(s)
                ? _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.addList(s)
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
                      attrs: { disabled: !_vm.usable(s) },
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
                      attrs: { disabled: !_vm.usable(s) },
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
    { staticClass: "spelllist" },
    [
      _vm.list.full()
        ? _c("span", { staticClass: "warn-text" }, [
            _vm._v("Spelllist is Full")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.list.items, function(it, ind) {
        return _c("div", { key: ind }, [
          _c("span", [_vm._v(_vm._s(it.name))]),
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  return _vm.remove(it)
                }
              }
            },
            [_vm._v("Remove")]
          )
        ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzRjNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/ZjlhOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8zMGZkIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/NzFhZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83ZjZhIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzE0MTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlIiwid2VicGFjazovLy9zcmMvdWkvc3BlbGxib29rLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9lNWMyIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzc1M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/YzNlMCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT84YjM2Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9hYzdhIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/ODMwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzQxNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/NWY4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83MDhmIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzJiOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/MzVkMyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8yNDRiIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzAwOGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWU/ODgyOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT8zNDMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsdUJBQXVCLEdBQUcsbUNBQW1DLHNCQUFzQiw2QkFBNkIseUJBQXlCLCtCQUErQixHQUFHLGlEQUFpRCxtQkFBbUIsc0JBQXNCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0Y1VCwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsa0NBQWtDLHVCQUF1QiwrQkFBK0Isd0JBQXdCLGtCQUFrQixHQUFHLHVDQUF1QyxtQkFBbUIsNEJBQTRCLEdBQUcsMENBQTBDLGtCQUFrQixHQUFHLDBDQUEwQyxzREFBc0Qsa0JBQWtCLHFCQUFxQixHQUFHLHdDQUF3QyxxQkFBcUIscUJBQXFCLGVBQWUsNERBQTRELHNCQUFzQixjQUFjLGtCQUFrQixHQUFHLCtDQUErQyx3QkFBd0IsV0FBVyxHQUFHLHlIQUF5SCw0QkFBNEIsR0FBRyw0REFBNEQsc0JBQXNCLEdBQUcsdUlBQXVJLG9CQUFvQiwwQkFBMEIseUJBQXlCLHlC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QUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDs7O0FBR3hEO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRILENBQWdCLHNNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZXYvc3BlbGxzLXVpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxubGFiZWxbZGF0YS12LTZkMGUwYmVjXSB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OjhweDtcXG59XFxuZGl2LmZpbHRlci1ib3hbZGF0YS12LTZkMGUwYmVjXSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDUlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMmVtO1xcclxcblxcdG1hcmdpbjogOHB4IDRweCA4cHggMTJweDtcXG59XFxuLmZpbHRlci1ib3ggaW5wdXRbdHlwZT10ZXh0XVtkYXRhLXYtNmQwZTBiZWNdIHtcXHJcXG5cXHRwYWRkaW5nOiA0cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDUlO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYuc3BlbGxzW2RhdGEtdi0xOTY3MzYyY10ge1xcclxcblxcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuXFx0cGFkZGluZzogOHB4IDE0cHg7XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxufVxcbmRpdi5zcGVsbHMgLmJvdHRvbVtkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xcbn1cXG5kaXYuc3BlbGxzIC5zcGVsbGJvb2tbZGF0YS12LTE5NjczNjJjXSB7XFxyXFxuXFx0ZmxleC1ncm93OjE7XFxufVxcbmRpdi5zcGVsbHMgLnNwZWxsbGlzdFtkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhciggLS1zZXBhcmF0b3ItY29sb3IgKTtcXHJcXG5cXHR3aWR0aDoxMDBweDtcXHJcXG5cXHRmbGV4LXNocmluazogMTtcXG59XFxuZGl2LnNwZWxscyAuZmlsdGVyc1tkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG4gICAgICAgIG9yZGVyOiAxOyBmbGV4LWZsb3c6IHJvdyB3cmFwOyBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlcGFyYXRvci1jb2xvcik7XFxyXFxuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDRweDsgbGluZS1oZWlnaHQ6IDJlbTtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXZbZGF0YS12LTE5NjczNjJjXSB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXZbZGF0YS12LTE5NjczNjJjXTpudGgtY2hpbGQoMSksXFxyXFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXZbZGF0YS12LTE5NjczNjJjXTpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGlucHV0W3R5cGU9dGV4dF1bZGF0YS12LTE5NjczNjJjXSB7IHBhZGRpbmc6IDRweCAwIDRweCAwO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9dGV4dF1bZGF0YS12LTE5NjczNjJjXSxcXHJcXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9bnVtYmVyXVtkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMWVtO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuXFx0XFx0bWluLXdpZHRoOiB1bnNldDtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IHVuc2V0O1xcclxcblxcdFxcdHBhZGRpbmc6IDRweCAwO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTA1JTtcXHJcXG5cXHRcXHR3aWR0aDogMDtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdltkYXRhLXYtMTk2NzM2MmNdIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBsYWJlbFtkYXRhLXYtMTk2NzM2MmNdIHsgZmxleC1iYXNpczogMjAlO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W2RhdGEtdi0xOTY3MzYyY10geyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiA0cHg7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2LmNoZWNrc1tkYXRhLXYtMTk2NzM2MmNdIHsgbWFyZ2luOiAwOyBmbGV4LWJhc2lzOiAxNiU7XFxufVxcclxcblxcclxcblxcdFxcdC8qZGl2LnNwZWxsYm9vayAuZmlsdGVycyB7XFxyXFxuXFx0XFx0XFx0b3JkZXI6IDE7IGZsZXgtZmxvdzogcm93IHdyYXA7IGRpc3BsYXk6IGZsZXg7IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCk7IGxpbmUtaGVpZ2h0OiAyZW07IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0LmRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2IHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXY6bnRoLWNoaWxkKDEpLFxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuXFx0XFx0XFx0ZmxleC1iYXNpczogNTAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGlucHV0W3R5cGU9dGV4dF0geyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApIDAgdmFyKC0tc21hbGwtZ2FwKSAwOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPXRleHRdLFxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT1udW1iZXJdIHtcXHJcXG5cXHRcXHRcXHRmbGV4OiAxOyBtYXJnaW4tcmlnaHQ6IDFlbTsgbWFyZ2luLWxlZnQ6IDFlbTsgbWluLXdpZHRoOiB1bnNldDsgbWF4LXdpZHRoOiB1bnNldDsgd2lkdGg6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiBsYWJlbCB7IGZsZXgtYmFzaXM6IDIwJTsgfVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiB2YXIoLS1zbWFsbC1nYXApOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXYuY2hlY2tzIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwIDAuNWVtOyBmbGV4LWJhc2lzOiB1bnNldDsgfSovXFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNwZWxsYm9va1tkYXRhLXYtNmFkY2IwYTJdIHtcXHJcXG5cXHRvcmRlcjogMjsgcGFkZGluZzogNHB4O1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnNwZWxsYm9vayB0YWJsZVtkYXRhLXYtNmFkY2IwYTJdIHsgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc3BlbGxib29rIHRhYmxlIHRyW2RhdGEtdi02YWRjYjBhMl0geyBkaXNwbGF5OmZsZXg7IGZsZXgtYmFzaXM6IDQ4JTtcXG59XFxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgxKSwgLnNwZWxsYm9vayB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgzKSB7XFxyXFxuXFx0ZmxleC1iYXNpczogMjAlOyBvcmRlcjogMztcXG59XFxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgyKSB7IGZsZXg6IDE7IG9yZGVyOiAxO31cXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDMpIHsgZmxleC1iYXNpczogMjAlOyBvcmRlcjogMjtcXG59XFxuLnNwZWxsYm9vayB0YWJsZSB0ZFtkYXRhLXYtNmFkY2IwYTJdIHsgZGlzcGxheTogZmxleDtcXG59XFxuZGl2LnNwZWxsYm9va1tkYXRhLXYtNmFkY2IwYTJdIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcGFkZGluZzogMDtcXG59XFxuZGl2LnNwZWxsYm9va1tkYXRhLXYtNmFkY2IwYTJdIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiB2YXIoLS1tZWRpdW0tZ2FwKTtcXG59XFxuZGl2LnNwZWxsYm9vayB0YWJsZVtkYXRhLXYtNmFkY2IwYTJdIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KCAyNTZweCwgMWZyICkgcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCAyNTZweCwgMWZyICkpO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6ICAxZnI7XFxufVxcbmRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyW2RhdGEtdi02YWRjYjBhMl0geyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMSksXFxyXFxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDIpeyBmbGV4OiAxO1xcbn1cXG5kaXYuc3BlbGxib29rICB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgyKXsgZmxleDogMjtcXG59XFxuZGl2LnNwZWxsYm9vayBidXR0b25bZGF0YS12LTZhZGNiMGEyXSB7IGZsZXg6IDE7IGZvbnQtc2l6ZTogdmFyKC0tY29tcGFjdC1zbWFsbC1mb250KTsgbWFyZ2luOiAwO1xcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHQvKipcclxuXHQgKiBAcHJvcGVydHkge29iamVjdFtdfSBpdGVtcyAtIGl0ZW1zIHRvIGZpbHRlci5cclxuXHQgKiBAcHJvcGVydHkge3Byb3B9IFtwcm9wPSduYW1lJ10gLSB0YXJnZXQgcHJvcCBvZiBmaWx0ZXIgdGVzdC5cclxuXHQgKlxyXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluSXRlbXM9MF0gLSBtaW5pbXVtIG51bWJlciBvZiBpdGVtcyBiZWZvcmUgYm94IGlzIHZpc2libGUuXHJcblx0ICovXHJcblx0cHJvcHM6Wyd2YWx1ZScsICdpdGVtcycsICdwcm9wJywgJ21pbkl0ZW1zJ10sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRleHQ6JycsXHJcblx0XHRcdHBwcm9wOnRoaXMucHJvcHx8J25hbWUnXHJcblx0XHR9XHJcblx0fSxcclxuXHR3YXRjaDp7XHJcblx0XHRpdGVtcyhuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0dGhpcy5maW5kVGV4dCA9IHRoaXMuZmluZFRleHQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHRjcmVhdGVkKCl7XHJcblx0XHR0aGlzLmZpbmRUZXh0ID0gdGhpcy50ZXh0O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6e1xyXG5cclxuXHRcdGZpbmRUZXh0OntcclxuXHJcblx0XHRcdGdldCgpIHsgcmV0dXJuIHRoaXMudGV4dDsgfSxcclxuXHRcdFx0c2V0KHYpe1xyXG5cclxuXHRcdFx0XHR0aGlzLnRleHQgPSB2O1xyXG5cclxuXHRcdFx0XHRsZXQgcCA9IHRoaXMucHByb3A7XHJcblxyXG5cdFx0XHRcdGlmICggIXYgKSB0aGlzLiRlbWl0KCAnaW5wdXQnLCB0aGlzLml0ZW1zICk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoIHR5cGVvZiBwID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gXHRcdFx0XHRcdHRoaXMuJGVtaXQoICdpbnB1dCcsIHRoaXMuaXRlbXMuZmlsdGVyKFxyXG5cdFx0XHRcdFx0XHRpdD0+cChpdCwgdilcclxuXHRcdFx0XHRcdCkpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgdGhpcy4kZW1pdCggJ2lucHV0JywgdGhpcy5pdGVtcy5maWx0ZXIoXHJcblx0XHRcdFx0XHRpdD0+KHR5cGVvZiBpdCA9PT0gJ29iamVjdCcpICYmXHJcblx0XHRcdFx0XHQoICh0eXBlb2YgaXRbcF0pID09PSAnc3RyaW5nJyApICYmIGl0W3BdLmluY2x1ZGVzKCB2IClcclxuXHRcdFx0XHQpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJmaWx0ZXItYm94XCIgdi1pZj1cIiF0aGlzLm1pbkl0ZW1zfHwodGhpcy5pdGVtcy5sZW5ndGg+PXRoaXMubWluSXRlbXMpXCI+XHJcblx0XHQ8bGFiZWwgOmZvcj1cImVsbUlkKCdmaWx0ZXInKVwiPkZpbmQ8L2xhYmVsPlxyXG5cdFx0PGlucHV0IDppZD1cImVsbUlkKCdmaWx0ZXInKVwiIHYtbW9kZWw9XCJmaW5kVGV4dFwiIHR5cGU9XCJ0ZXh0XCI+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxubGFiZWwge1xyXG5cdG1hcmdpbi1yaWdodDo4cHg7XHJcbn1cclxuZGl2LmZpbHRlci1ib3gge1xyXG5cdGZvbnQtc2l6ZTogMTA1JTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuXHRtYXJnaW46IDhweCA0cHggOHB4IDEycHg7XHJcbn1cclxuXHJcbi5maWx0ZXItYm94IGlucHV0W3R5cGU9dGV4dF0ge1xyXG5cdHBhZGRpbmc6IDRweDtcclxuXHRmb250LXNpemU6IDEwNSU7XHJcbn1cclxuPC9zdHlsZT4iLCI8c2NyaXB0PlxyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi8uLi9nYW1lJztcclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4uL2l0ZW1zQmFzZSc7XHJcblxyXG5pbXBvcnQgRmlsdGVyQm94IGZyb20gJy4uL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZSc7XHJcbmltcG9ydCBCb29rIGZyb20gJy4uL3NwZWxsYm9vay52dWUnO1xyXG5pbXBvcnQgU3BlbGxMaXN0IGZyb20gJy4uL3NwZWxsbGlzdC52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRkYXRhKCl7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvd0xpc3Q6ZmFsc2UsXHJcblx0XHRcdGZpbHRlcmVkOm51bGwsXHJcblx0XHRcdHZpZXdTY2hvb2xzOltdLFxyXG5cdFx0XHRwTWluOm51bGwsXHJcblx0XHRcdHBNYXg6bnVsbFxyXG5cdFx0fTtcclxuXHJcblx0fSxcclxuXHRtaXhpbnM6W0l0ZW1CYXNlXSxcclxuXHRjb21wb25lbnRzOntcclxuXHJcblx0XHRmaWx0ZXJib3g6RmlsdGVyQm94LFxyXG5cdFx0Ym9vazpCb29rLFxyXG5cdFx0c3BlbGxsaXN0OlNwZWxsTGlzdFxyXG5cclxuXHR9LFxyXG5cdG1ldGhvZHM6e1xyXG5cclxuXHRcdHRvZ2dsZSgpe1xyXG5cdFx0XHR0aGlzLnNob3dMaXN0ID0gIXRoaXMuc2hvd0xpc3Q7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTSE9XOiAnICsgdGhpcy5zaG93TGlzdCApO1xyXG5cdFx0fVxyXG5cclxuXHR9LCBjb21wdXRlZDp7XHJcblxyXG5cdFx0c3RhdGUoKSB7IHJldHVybiBHYW1lLnN0YXRlOyB9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtTcGVsbExpc3R9IHNwZWxsbGlzdCAtIHNwZWxscyBpbiBhY3RpdmUgdXNlLiAoZHVuZ2VvbnMpXHJcblx0XHQgKi9cclxuXHRcdGxpc3QoKSB7IHJldHVybiBHYW1lLnN0YXRlLnNwZWxsbGlzdDsgfSxcclxuXHJcblx0XHRtaW5MZXZlbDp7XHJcblxyXG5cdFx0XHRnZXQoKXsgcmV0dXJuIHRoaXMucE1pbjsgfSxcclxuXHRcdFx0c2V0KHYpeyB0aGlzLnBNaW4gPSBOdW1iZXIodik7IH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZyxzdHJpbmc+fSBzY2hvb2xzIC0gc2Nob29scyBvZiBhbGwgdW5sb2NrZWQgc3BlbGxzLlxyXG5cdFx0ICovXHJcblx0XHRzY2hvb2xzKCkge1xyXG5cclxuXHRcdFx0bGV0IHJlcyA9IHt9O1xyXG5cclxuXHRcdFx0bGV0IGEgPSB0aGlzLnNwZWxscztcclxuXHRcdFx0Zm9yKCBsZXQgaSA9IGEubGVuZ3RoLTE7IGk+PSAwOyBpLS0gKSB7XHJcblx0XHRcdFx0dmFyIHMgPSBhW2ldO1xyXG5cdFx0XHRcdGlmICggcy5zY2hvb2wgKSByZXNbcy5zY2hvb2xdID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlcztcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtTcGVsbFtdfSB2aWV3aW5nIC0gYXJyYXkgb2Ygc3BlbGxzIGFjdHVhbGx5IHZpc2libGVcclxuXHRcdCAqIGFmdGVyIG1pbi9tYXggbGV2ZWxzIGFuZCBzY2hvb2xzIGhhdmUgYmVlbiBhcHBsaWVkIHRvIGZpbHRlcmVkLlxyXG5cdFx0ICovXHJcblx0XHR2aWV3aW5nKCkge1xyXG5cclxuXHRcdFx0bGV0IHNwZWxscyA9IHRoaXMuZmlsdGVyZWQ7XHJcblx0XHRcdGxldCB2U2Nob29scyA9IHRoaXMudmlld1NjaG9vbHM7XHJcblx0XHRcdGxldCBsZXZlbCA9IHRoaXMubWluTGV2ZWw7XHJcblxyXG5cdFx0XHRpZiAoIHZTY2hvb2xzLmxlbmd0aD4wIHx8IGxldmVsICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3BlbGxzLmZpbHRlcih2PT57XHJcblx0XHRcdFx0XHRyZXR1cm4gKCh2U2Nob29scy5sZW5ndGg9PT0wfHx2U2Nob29scy5pbmNsdWRlcyh2LnNjaG9vbCkpIClcclxuXHRcdFx0XHRcdFx0JiYoIWxldmVsfHwodi5sZXZlbD09PWxldmVsKSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzcGVsbHM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U3BlbGx9IHNwZWxscyAtIGFycmF5IG9mIHVubG9ja2VkIHNwZWxscy5cclxuXHRcdCAqL1xyXG5cdFx0c3BlbGxzKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlLmZpbHRlckl0ZW1zKFxyXG5cdFx0XHRcdGl0PT5pdC50eXBlID09PSAnc3BlbGwnICYmICF0aGlzLmxvY2tlZChpdCkgKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJzcGVsbHNcIj5cclxuXHJcblx0PGRpdiBjbGFzcz1cImZpbHRlcnNcIj5cclxuXHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwidG9nZ2xlXCI+TWVtb3JpemVkPC9idXR0b24+XHJcblxyXG5cdFx0XHQ8ZmlsdGVyYm94IHYtbW9kZWw9XCJmaWx0ZXJlZFwiIDppdGVtcz1cInNwZWxsc1wiIC8+XHJcblxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwibGV2ZWwtbGJsXCIgOmZvcj1cImVsbUlkKCdsZXZlbCcpXCI+TGV2ZWw8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJsZXZlbFwiIDppZD1cImVsbUlkKCdsZXZlbCcpXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJtaW5MZXZlbFwiIG1pbj0wIHNpemU9NT5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2hlY2tzXCIgdi1mb3I9XCIocCxrKSBpbiBzY2hvb2xzXCIgOmtleT1cImtcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJrXCIgOmlkPVwiZWxtSWQoJ2NoaycraylcIiB2LW1vZGVsPVwidmlld1NjaG9vbHNcIiA+XHJcblx0XHRcdFx0XHQ8bGFiZWwgOmZvcj1cImVsbUlkKCdjaGsnK2spXCI+e3sgayB9fTwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0PC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYm90dG9tXCI+XHJcblxyXG48Ym9vayBjbGFzcz1cInNwZWxsYm9va1wiIDp2aWV3aW5nPVwidmlld2luZ1wiIC8+XHJcbjxkaXYgdi1zaG93PVwic2hvd0xpc3RcIj5cclxuPHNwZWxsbGlzdCBjbGFzcz1cInNwZWxsbGlzdFwiIDpsaXN0PVwibGlzdFwiIC8+XHJcbjwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuZGl2LnNwZWxscyB7XHJcblxyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcblx0cGFkZGluZzogOHB4IDE0cHg7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcblxyXG5kaXYuc3BlbGxzIC5ib3R0b20ge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbn1cclxuXHJcbmRpdi5zcGVsbHMgLnNwZWxsYm9vayB7XHJcblx0ZmxleC1ncm93OjE7XHJcbn1cclxuXHJcblxyXG5kaXYuc3BlbGxzIC5zcGVsbGxpc3Qge1xyXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKCAtLXNlcGFyYXRvci1jb2xvciApO1xyXG5cdHdpZHRoOjEwMHB4O1xyXG5cdGZsZXgtc2hyaW5rOiAxO1xyXG59XHJcblxyXG5kaXYuc3BlbGxzIC5maWx0ZXJzIHtcclxuICAgICAgICBvcmRlcjogMTsgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDRweDsgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXY6bnRoLWNoaWxkKDEpLFxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgIH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBpbnB1dFt0eXBlPXRleHRdIHsgcGFkZGluZzogNHB4IDAgNHB4IDA7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPXRleHRdLFxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcblxyXG5cdFx0ZmxleDogMTtcclxuXHRcdG1hcmdpbi1yaWdodDogMWVtO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDFlbTtcclxuXHRcdG1pbi13aWR0aDogdW5zZXQ7XHJcblx0XHRtYXgtd2lkdGg6IHVuc2V0O1xyXG5cdFx0cGFkZGluZzogNHB4IDA7XHJcblx0XHRmb250LXNpemU6IDEwNSU7XHJcblx0XHR3aWR0aDogMDtcclxufVxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGxhYmVsIHsgZmxleC1iYXNpczogMjAlOyB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiA0cHg7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXYuY2hlY2tzIHsgbWFyZ2luOiAwOyBmbGV4LWJhc2lzOiAxNiU7IH1cclxuXHJcblx0XHQvKmRpdi5zcGVsbGJvb2sgLmZpbHRlcnMge1xyXG5cdFx0XHRvcmRlcjogMTsgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxuXHRcdFx0bWFyZ2luOiAwOyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApOyBsaW5lLWhlaWdodDogMmVtOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHR9XHJcblx0XHQuZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgxKSxcclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgyKSB7XHJcblx0XHRcdGZsZXgtYmFzaXM6IDUwJTtcclxuXHRcdH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCkgMCB2YXIoLS1zbWFsbC1nYXApIDA7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT10ZXh0XSxcclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuXHRcdFx0ZmxleDogMTsgbWFyZ2luLXJpZ2h0OiAxZW07IG1hcmdpbi1sZWZ0OiAxZW07IG1pbi13aWR0aDogdW5zZXQ7IG1heC13aWR0aDogdW5zZXQ7IHdpZHRoOiAwO1xyXG5cdFx0fVxyXG5cdFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgbGFiZWwgeyBmbGV4LWJhc2lzOiAyMCU7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiB2YXIoLS1zbWFsbC1nYXApOyB9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdi5jaGVja3MgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDAgMC41ZW07IGZsZXgtYmFzaXM6IHVuc2V0OyB9Ki9cclxuXHJcbjwvc3R5bGU+IiwiPHNjcmlwdD5cclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4vaXRlbXNCYXNlJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdHByb3BzOlsndmlld2luZyddLFxyXG5cdG1peGluczpbSXRlbUJhc2VdLFxyXG5cclxuXHRtZXRob2RzOntcclxuXHJcblx0XHRhZGRMaXN0KGl0KSB7XHJcblx0XHRcdHRoaXMubGlzdC5hZGQoaXQpO1xyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cdGNvbXB1dGVkOntcclxuXHJcblx0XHRzdGF0ZSgpIHsgcmV0dXJuIEdhbWUuc3RhdGU7IH0sXHJcblxyXG5cdFx0bGlzdCgpeyByZXR1cm4gR2FtZS5zdGF0ZS5zcGVsbGxpc3Q7IH1cclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcblx0PGRpdiBjbGFzcz1cInNwZWxsYm9va1wiPlxyXG5cdFx0PHRhYmxlPlxyXG5cdFx0PHRyIHYtZm9yPVwicyBpbiB2aWV3aW5nXCIgOmtleT1cInMuaWRcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCAkZXZlbnQsIHMgKVwiPlxyXG5cclxuXHRcdFx0PHRkPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtaWY9XCJzLm93bmVkJiZzLmF0dGFjayYmbGlzdC5jYW5BZGQocylcIiBAY2xpY2s9XCJhZGRMaXN0KHMpXCI+TWVtb3JpemU8L2J1dHRvbj5cclxuXHRcdFx0XHQ8IS0tPGJ1dHRvbiB2LWlmPVwicy5vd25lZCYmcy5hdHRhY2tcIiBAY2xpY2s9XCJlbWl0KCdwcmltYXJ5JyxzKVwiPlxyXG5cdFx0XHRcdHt7IHN0YXRlLnBsYXllci5wcmltYXJ5PT09cyA/ICdVbmVxdWlwJyA6ICdQcmltYXJ5JyB9fVxyXG5cdFx0XHRcdDwvYnV0dG9uPi0tPlxyXG5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+e3sgcy5uYW1lIH19PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtaWY9XCJzLm93bmVkXCIgQGNsaWNrPVwiZW1pdCgnc3BlbGwnLCBzKVwiIDpkaXNhYmxlZD1cIiF1c2FibGUocylcIj5DYXN0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gdi1lbHNlIEBjbGljaz1cImVtaXQoJ2J1eScsIHMpXCIgOmRpc2FibGVkPVwiIXVzYWJsZShzKVwiPkxlYXJuPC9idXR0b24+XHJcblxyXG5cdFx0XHQ8L3RkPlxyXG5cclxuXHRcdDwvdHI+XHJcblx0XHQ8L3RhYmxlPlxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uc3BlbGxib29rIHtcclxuXHRvcmRlcjogMjsgcGFkZGluZzogNHB4O1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc3BlbGxib29rIHRhYmxlIHsgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XHJcbi5zcGVsbGJvb2sgdGFibGUgdHIgeyBkaXNwbGF5OmZsZXg7IGZsZXgtYmFzaXM6IDQ4JTsgfVxyXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgxKSwgLnNwZWxsYm9vayB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMykge1xyXG5cdGZsZXgtYmFzaXM6IDIwJTsgb3JkZXI6IDM7IH1cclxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikgeyBmbGV4OiAxOyBvcmRlcjogMTt9XHJcbi5zcGVsbGJvb2sgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDMpIHsgZmxleC1iYXNpczogMjAlOyBvcmRlcjogMjsgfVxyXG4uc3BlbGxib29rIHRhYmxlIHRkIHsgZGlzcGxheTogZmxleDsgfVxyXG5cclxuIGRpdi5zcGVsbGJvb2sgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nOiAwOyB9XHJcbmRpdi5zcGVsbGJvb2sgeyBtYXJnaW46IDA7IHBhZGRpbmc6IHZhcigtLW1lZGl1bS1nYXApOyB9XHJcbiBkaXYuc3BlbGxib29rIHRhYmxlIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCggMjU2cHgsIDFmciApIHJlcGVhdCggYXV0by1maXQsIG1pbm1heCggMjU2cHgsIDFmciApKTtcclxuICAgICAgICBncmlkLWF1dG8tcm93czogIDFmcjtcclxuICAgIH1cclxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHsgcGFkZGluZzogdmFyKC0tc21hbGwtZ2FwKTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cclxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgxKSxcclxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKXsgZmxleDogMTsgfVxyXG4gICAgZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpeyBmbGV4OiAyOyB9XHJcblx0ZGl2LnNwZWxsYm9vayBidXR0b24geyBmbGV4OiAxOyBmb250LXNpemU6IHZhcigtLWNvbXBhY3Qtc21hbGwtZm9udCk7IG1hcmdpbjogMDsgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0cHJvcHM6WydsaXN0J10sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0cmVtb3ZlKGl0KSB7XHJcblx0XHRcdHRoaXMubGlzdC5yZW1vdmUoaXQpO1xyXG5cclxuXHRcdH0sXHJcblx0XHRhZGQoaXQpIHtcclxuXHRcdFx0dGhpcy5saXN0LmFkZChpdCk7XHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6e1xyXG5cclxuXHR9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJzcGVsbGxpc3RcIj5cclxuXHJcblx0PHNwYW4gY2xhc3M9J3dhcm4tdGV4dCcgdi1pZj1cImxpc3QuZnVsbCgpXCI+U3BlbGxsaXN0IGlzIEZ1bGw8L3NwYW4+XHJcblx0PGRpdiB2LWZvcj1cIihpdCxpbmQpIGluIGxpc3QuaXRlbXNcIiA6a2V5PVwiaW5kXCI+XHJcblx0XHQ8c3Bhbj57eyBpdC5uYW1lIH19PC9zcGFuPjxidXR0b24gQGNsaWNrPVwicmVtb3ZlKGl0KVwiPlJlbW92ZTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gIXRoaXMubWluSXRlbXMgfHwgdGhpcy5pdGVtcy5sZW5ndGggPj0gdGhpcy5taW5JdGVtc1xuICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItYm94XCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBfdm0uZWxtSWQoXCJmaWx0ZXJcIikgfSB9LCBbX3ZtLl92KFwiRmluZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmluZFRleHQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmluZFRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5lbG1JZChcImZpbHRlclwiKSwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbmRUZXh0IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLmZpbmRUZXh0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGVsbHNcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXJzXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3ZtLnRvZ2dsZSB9IH0sIFtfdm0uX3YoXCJNZW1vcml6ZWRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJmaWx0ZXJib3hcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uc3BlbGxzIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyZWQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5maWx0ZXJlZCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtbGJsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmVsbUlkKFwibGV2ZWxcIikgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkxldmVsXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1pbkxldmVsLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWluTGV2ZWxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGV2ZWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0uZWxtSWQoXCJsZXZlbFwiKSxcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgc2l6ZTogXCI1XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm1pbkxldmVsIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLm1pbkxldmVsID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uc2Nob29scywgZnVuY3Rpb24ocCwgaykge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaywgc3RhdGljQ2xhc3M6IFwiY2hlY2tzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmlld1NjaG9vbHMsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZpZXdTY2hvb2xzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IF92bS5lbG1JZChcImNoa1wiICsgaykgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogayxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS52aWV3U2Nob29scylcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS52aWV3U2Nob29scywgaykgPiAtMVxuICAgICAgICAgICAgICAgICAgOiBfdm0udmlld1NjaG9vbHNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS52aWV3U2Nob29scyxcbiAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gayxcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udmlld1NjaG9vbHMgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS52aWV3U2Nob29scyA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS52aWV3U2Nob29scyA9ICQkY1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogX3ZtLmVsbUlkKFwiY2hrXCIgKyBrKSB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhrKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJib29rXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcGVsbGJvb2tcIixcbiAgICAgICAgICBhdHRyczogeyB2aWV3aW5nOiBfdm0udmlld2luZyB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93TGlzdCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dMaXN0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGVsbGxpc3RcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcGVsbGxpc3RcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbGlzdDogX3ZtLmxpc3QgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwZWxsYm9va1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwidGFibGVcIixcbiAgICAgIF92bS5fbChfdm0udmlld2luZywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogcy5pZCxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgcy5vd25lZCAmJiBzLmF0dGFjayAmJiBfdm0ubGlzdC5jYW5BZGQocylcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRMaXN0KHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWVtb3JpemVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhzLm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICBzLm93bmVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLnVzYWJsZShzKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcInNwZWxsXCIsIHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FzdFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0udXNhYmxlKHMpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiYnV5XCIsIHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGVhcm5cIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNwZWxsbGlzdFwiIH0sXG4gICAgW1xuICAgICAgX3ZtLmxpc3QuZnVsbCgpXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2Fybi10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiU3BlbGxsaXN0IGlzIEZ1bGxcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0ubGlzdC5pdGVtcywgZnVuY3Rpb24oaXQsIGluZCkge1xuICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZCB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0Lm5hbWUpKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZShpdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUmVtb3ZlXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZkMGUwYmVjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmQwZTBiZWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmQwZTBiZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmQwZTBiZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmQwZTBiZWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NwZWxscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE5NjczNjJjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTk2NzM2MmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTk2NzM2MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTk2NzM2MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NwZWxscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTk2NzM2MmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2YWRjYjBhMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZhZGNiMGEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZhZGNiMGEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZhZGNiMGEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZhZGNiMGEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvc3BlbGxib29rLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOTZiOGEzOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zcGVsbGxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zcGVsbGxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiOTZiOGEzOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2I5NmI4YTM4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2I5NmI4YTM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2I5NmI4YTM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zcGVsbGxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI5NmI4YTM4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I5NmI4YTM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvc3BlbGxsaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI5NmI4YTM4JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==