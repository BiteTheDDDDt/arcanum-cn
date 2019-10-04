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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzRjNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/ZjlhOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8zMGZkIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/NzFhZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83ZjZhIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzE0MTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlIiwid2VicGFjazovLy9zcmMvdWkvc3BlbGxib29rLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9lNWMyIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzc1M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/YzNlMCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT84YjM2Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9hYzdhIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/ODMwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzQxNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/NWY4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83MDhmIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzJiOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/MzVkMyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8yNDRiIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzAwOGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWU/ODgyOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT8zNDMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsdUJBQXVCLEdBQUcsbUNBQW1DLHNCQUFzQiw2QkFBNkIseUJBQXlCLCtCQUErQixHQUFHLGlEQUFpRCxtQkFBbUIsc0JBQXNCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0Y1VCwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsa0NBQWtDLHVCQUF1QiwrQkFBK0Isd0JBQXdCLGtCQUFrQixHQUFHLHVDQUF1QyxtQkFBbUIsNEJBQTRCLEdBQUcsMENBQTBDLGtCQUFrQixHQUFHLDBDQUEwQyxzREFBc0Qsa0JBQWtCLGlDQUFpQyxxQkFBcUIsR0FBRyx3Q0FBd0MsK0JBQStCLGVBQWUsNERBQTRELHNCQUFzQixjQUFjLGtCQUFrQixHQUFHLCtDQUErQyx3QkFBd0IsV0FBVyxHQUFHLHlIQUF5SCw0QkFBNEIsR0FBRyw0REFBNEQsc0JBQXNCLEdBQUcsdUlBQXVJLG9CQUFvQiwwQkFBMEIseUJBQXlCLHlC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QUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRztBQUN2QztBQUNMOzs7QUFHeEQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNEgsQ0FBZ0Isc01BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImRldi9zcGVsbHMtdWkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5sYWJlbFtkYXRhLXYtNmQwZTBiZWNdIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6OHB4O1xcbn1cXG5kaXYuZmlsdGVyLWJveFtkYXRhLXYtNmQwZTBiZWNdIHtcXHJcXG5cXHRmb250LXNpemU6IDEwNSU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4yZW07XFxyXFxuXFx0bWFyZ2luOiA4cHggNHB4IDhweCAxMnB4O1xcbn1cXG4uZmlsdGVyLWJveCBpbnB1dFt0eXBlPXRleHRdW2RhdGEtdi02ZDBlMGJlY10ge1xcclxcblxcdHBhZGRpbmc6IDRweDtcXHJcXG5cXHRmb250LXNpemU6IDEwNSU7XFxufVxcclxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5zcGVsbHNbZGF0YS12LTE5NjczNjJjXSB7XFxyXFxuXFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG5cXHRwYWRkaW5nOiA4cHggMTRweDtcXHJcXG5cXHRoZWlnaHQ6MTAwJTtcXG59XFxuZGl2LnNwZWxscyAuYm90dG9tW2RhdGEtdi0xOTY3MzYyY10ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxufVxcbmRpdi5zcGVsbHMgLnNwZWxsYm9va1tkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHRmbGV4LWdyb3c6MTtcXG59XFxuZGl2LnNwZWxscyAuc3BlbGxsaXN0W2RhdGEtdi0xOTY3MzYyY10ge1xcclxcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKCAtLXNlcGFyYXRvci1jb2xvciApO1xcclxcblxcdHdpZHRoOjE0MHB4O1xcclxcblxcdHBhZGRpbmc6IHZhciggLS10aW55LWdhcCApO1xcclxcblxcdGZsZXgtc2hyaW5rOiAxO1xcbn1cXG5kaXYuc3BlbGxzIC5maWx0ZXJzW2RhdGEtdi0xOTY3MzYyY10ge1xcclxcbiAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwOyBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlcGFyYXRvci1jb2xvcik7XFxyXFxuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDRweDsgbGluZS1oZWlnaHQ6IDJlbTtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXZbZGF0YS12LTE5NjczNjJjXSB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXZbZGF0YS12LTE5NjczNjJjXTpudGgtY2hpbGQoMSksXFxyXFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXZbZGF0YS12LTE5NjczNjJjXTpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGlucHV0W3R5cGU9dGV4dF1bZGF0YS12LTE5NjczNjJjXSB7IHBhZGRpbmc6IDRweCAwIDRweCAwO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9dGV4dF1bZGF0YS12LTE5NjczNjJjXSxcXHJcXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9bnVtYmVyXVtkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMWVtO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuXFx0XFx0bWluLXdpZHRoOiB1bnNldDtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IHVuc2V0O1xcclxcblxcdFxcdHBhZGRpbmc6IDRweCAwO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTA1JTtcXHJcXG5cXHRcXHR3aWR0aDogMDtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdltkYXRhLXYtMTk2NzM2MmNdIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBsYWJlbFtkYXRhLXYtMTk2NzM2MmNdIHsgZmxleC1iYXNpczogMjAlO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W2RhdGEtdi0xOTY3MzYyY10geyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiA0cHg7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2LmNoZWNrc1tkYXRhLXYtMTk2NzM2MmNdIHsgbWFyZ2luOiAwOyBmbGV4LWJhc2lzOiAxNiU7XFxufVxcclxcblxcclxcblxcdFxcdC8qZGl2LnNwZWxsYm9vayAuZmlsdGVycyB7XFxyXFxuXFx0XFx0XFx0b3JkZXI6IDE7IGZsZXgtZmxvdzogcm93IHdyYXA7IGRpc3BsYXk6IGZsZXg7IHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCk7IGxpbmUtaGVpZ2h0OiAyZW07IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0LmRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2IHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXY6bnRoLWNoaWxkKDEpLFxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuXFx0XFx0XFx0ZmxleC1iYXNpczogNTAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGlucHV0W3R5cGU9dGV4dF0geyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApIDAgdmFyKC0tc21hbGwtZ2FwKSAwOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPXRleHRdLFxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT1udW1iZXJdIHtcXHJcXG5cXHRcXHRcXHRmbGV4OiAxOyBtYXJnaW4tcmlnaHQ6IDFlbTsgbWFyZ2luLWxlZnQ6IDFlbTsgbWluLXdpZHRoOiB1bnNldDsgbWF4LXdpZHRoOiB1bnNldDsgd2lkdGg6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiBsYWJlbCB7IGZsZXgtYmFzaXM6IDIwJTsgfVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiB2YXIoLS1zbWFsbC1nYXApOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXYuY2hlY2tzIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwIDAuNWVtOyBmbGV4LWJhc2lzOiB1bnNldDsgfSovXFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNwZWxsYm9va1tkYXRhLXYtNmFkY2IwYTJdIHtcXHJcXG5cXHRwYWRkaW5nOiA0cHg7XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRoZWlnaHQ6MTAwJTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uc3BlbGxib29rIHRhYmxlW2RhdGEtdi02YWRjYjBhMl0geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IHJvdyB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zcGVsbGJvb2sgdGFibGUgdHJbZGF0YS12LTZhZGNiMGEyXSB7IGRpc3BsYXk6ZmxleDsgZmxleC1iYXNpczogNDglO1xcbn1cXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDEpLCAuc3BlbGxib29rIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDMpIHtcXHJcXG5cXHRmbGV4LWJhc2lzOiAyMCU7IG9yZGVyOiAzO1xcbn1cXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDIpIHsgZmxleDogMTsgb3JkZXI6IDE7fVxcbi5zcGVsbGJvb2sgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMykgeyBmbGV4LWJhc2lzOiAyMCU7IG9yZGVyOiAyO1xcbn1cXG4uc3BlbGxib29rIHRhYmxlIHRkW2RhdGEtdi02YWRjYjBhMl0geyBkaXNwbGF5OiBmbGV4O1xcbn1cXG5kaXYuc3BlbGxib29rW2RhdGEtdi02YWRjYjBhMl0geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuc3BlbGxib29rW2RhdGEtdi02YWRjYjBhMl0geyBtYXJnaW46IDA7IHBhZGRpbmc6IHZhcigtLW1lZGl1bS1nYXApO1xcbn1cXG5kaXYuc3BlbGxib29rIHRhYmxlW2RhdGEtdi02YWRjYjBhMl0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoIDI1NnB4LCAxZnIgKSByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoIDI1NnB4LCAxZnIgKSk7XFxyXFxuICAgICAgICBncmlkLWF1dG8tcm93czogIDFmcjtcXG59XFxuZGl2LnNwZWxsYm9vayAgdGFibGUgdHJbZGF0YS12LTZhZGNiMGEyXSB7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCk7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG5kaXYuc3BlbGxib29rICB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgxKSxcXHJcXG4gICAgZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMil7IGZsZXg6IDE7XFxufVxcbmRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDIpeyBmbGV4OiAyO1xcbn1cXG5kaXYuc3BlbGxib29rIGJ1dHRvbltkYXRhLXYtNmFkY2IwYTJdIHsgZmxleDogMTsgZm9udC1zaXplOiB2YXIoLS1jb21wYWN0LXNtYWxsLWZvbnQpOyBtYXJnaW46IDA7XFxufVxcclxcblxcclxcblxcclxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwcm9wZXJ0eSB7b2JqZWN0W119IGl0ZW1zIC0gaXRlbXMgdG8gZmlsdGVyLlxyXG5cdCAqIEBwcm9wZXJ0eSB7cHJvcH0gW3Byb3A9J25hbWUnXSAtIHRhcmdldCBwcm9wIG9mIGZpbHRlciB0ZXN0LlxyXG5cdCAqXHJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5JdGVtcz0wXSAtIG1pbmltdW0gbnVtYmVyIG9mIGl0ZW1zIGJlZm9yZSBib3ggaXMgdmlzaWJsZS5cclxuXHQgKi9cclxuXHRwcm9wczpbJ3ZhbHVlJywgJ2l0ZW1zJywgJ3Byb3AnLCAnbWluSXRlbXMnXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dGV4dDonJyxcclxuXHRcdFx0cHByb3A6dGhpcy5wcm9wfHwnbmFtZSdcclxuXHRcdH1cclxuXHR9LFxyXG5cdHdhdGNoOntcclxuXHRcdGl0ZW1zKG5ld1ZhbCxvbGRWYWwpe1xyXG5cdFx0XHR0aGlzLmZpbmRUZXh0ID0gdGhpcy5maW5kVGV4dDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNyZWF0ZWQoKXtcclxuXHRcdHRoaXMuZmluZFRleHQgPSB0aGlzLnRleHQ7XHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0ZmluZFRleHQ6e1xyXG5cclxuXHRcdFx0Z2V0KCkgeyByZXR1cm4gdGhpcy50ZXh0OyB9LFxyXG5cdFx0XHRzZXQodil7XHJcblxyXG5cdFx0XHRcdHRoaXMudGV4dCA9IHY7XHJcblxyXG5cdFx0XHRcdGxldCBwID0gdGhpcy5wcHJvcDtcclxuXHJcblx0XHRcdFx0aWYgKCAhdiApIHRoaXMuJGVtaXQoICdpbnB1dCcsIHRoaXMuaXRlbXMgKTtcclxuXHRcdFx0XHRlbHNlIGlmICggdHlwZW9mIHAgPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiBcdFx0XHRcdFx0dGhpcy4kZW1pdCggJ2lucHV0JywgdGhpcy5pdGVtcy5maWx0ZXIoXHJcblx0XHRcdFx0XHRcdGl0PT5wKGl0LCB2KVxyXG5cdFx0XHRcdFx0KSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB0aGlzLiRlbWl0KCAnaW5wdXQnLCB0aGlzLml0ZW1zLmZpbHRlcihcclxuXHRcdFx0XHRcdGl0PT4odHlwZW9mIGl0ID09PSAnb2JqZWN0JykgJiZcclxuXHRcdFx0XHRcdCggKHR5cGVvZiBpdFtwXSkgPT09ICdzdHJpbmcnICkgJiYgaXRbcF0uaW5jbHVkZXMoIHYgKVxyXG5cdFx0XHRcdCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImZpbHRlci1ib3hcIiB2LWlmPVwiIXRoaXMubWluSXRlbXN8fCh0aGlzLml0ZW1zLmxlbmd0aD49dGhpcy5taW5JdGVtcylcIj5cclxuXHRcdDxsYWJlbCA6Zm9yPVwiZWxtSWQoJ2ZpbHRlcicpXCI+RmluZDwvbGFiZWw+XHJcblx0XHQ8aW5wdXQgOmlkPVwiZWxtSWQoJ2ZpbHRlcicpXCIgdi1tb2RlbD1cImZpbmRUZXh0XCIgdHlwZT1cInRleHRcIj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5sYWJlbCB7XHJcblx0bWFyZ2luLXJpZ2h0OjhweDtcclxufVxyXG5kaXYuZmlsdGVyLWJveCB7XHJcblx0Zm9udC1zaXplOiAxMDUlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0bGluZS1oZWlnaHQ6IDEuMmVtO1xyXG5cdG1hcmdpbjogOHB4IDRweCA4cHggMTJweDtcclxufVxyXG5cclxuLmZpbHRlci1ib3ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdGZvbnQtc2l6ZTogMTA1JTtcclxufVxyXG48L3N0eWxlPiIsIjxzY3JpcHQ+XHJcbmltcG9ydCBHYW1lIGZyb20gJy4uLy4uL2dhbWUnO1xyXG5pbXBvcnQgSXRlbUJhc2UgZnJvbSAnLi4vaXRlbXNCYXNlJztcclxuXHJcbmltcG9ydCBGaWx0ZXJCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9maWx0ZXJib3gudnVlJztcclxuaW1wb3J0IEJvb2sgZnJvbSAnLi4vc3BlbGxib29rLnZ1ZSc7XHJcbmltcG9ydCBTcGVsbExpc3QgZnJvbSAnLi4vc3BlbGxsaXN0LnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdGRhdGEoKXtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRzaG93TGlzdDpmYWxzZSxcclxuXHRcdFx0ZmlsdGVyZWQ6bnVsbCxcclxuXHRcdFx0dmlld1NjaG9vbHM6W10sXHJcblx0XHRcdHBNaW46bnVsbCxcclxuXHRcdFx0cE1heDpudWxsXHJcblx0XHR9O1xyXG5cclxuXHR9LFxyXG5cdG1peGluczpbSXRlbUJhc2VdLFxyXG5cdGNvbXBvbmVudHM6e1xyXG5cclxuXHRcdGZpbHRlcmJveDpGaWx0ZXJCb3gsXHJcblx0XHRib29rOkJvb2ssXHJcblx0XHRzcGVsbGxpc3Q6U3BlbGxMaXN0XHJcblxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0dG9nZ2xlKCl7XHJcblx0XHRcdHRoaXMuc2hvd0xpc3QgPSAhdGhpcy5zaG93TGlzdDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1NIT1c6ICcgKyB0aGlzLnNob3dMaXN0ICk7XHJcblx0XHR9XHJcblxyXG5cdH0sIGNvbXB1dGVkOntcclxuXHJcblx0XHRzdGF0ZSgpIHsgcmV0dXJuIEdhbWUuc3RhdGU7IH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1NwZWxsTGlzdH0gc3BlbGxsaXN0IC0gc3BlbGxzIGluIGFjdGl2ZSB1c2UuIChkdW5nZW9ucylcclxuXHRcdCAqL1xyXG5cdFx0bGlzdCgpIHsgcmV0dXJuIEdhbWUuc3RhdGUuc3BlbGxsaXN0OyB9LFxyXG5cclxuXHRcdG1pbkxldmVsOntcclxuXHJcblx0XHRcdGdldCgpeyByZXR1cm4gdGhpcy5wTWluOyB9LFxyXG5cdFx0XHRzZXQodil7IHRoaXMucE1pbiA9IE51bWJlcih2KTsgfVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLHN0cmluZz59IHNjaG9vbHMgLSBzY2hvb2xzIG9mIGFsbCB1bmxvY2tlZCBzcGVsbHMuXHJcblx0XHQgKi9cclxuXHRcdHNjaG9vbHMoKSB7XHJcblxyXG5cdFx0XHRsZXQgcmVzID0ge307XHJcblxyXG5cdFx0XHRsZXQgYSA9IHRoaXMuc3BlbGxzO1xyXG5cdFx0XHRmb3IoIGxldCBpID0gYS5sZW5ndGgtMTsgaT49IDA7IGktLSApIHtcclxuXHRcdFx0XHR2YXIgcyA9IGFbaV07XHJcblx0XHRcdFx0aWYgKCBzLnNjaG9vbCApIHJlc1tzLnNjaG9vbF0gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1NwZWxsW119IHZpZXdpbmcgLSBhcnJheSBvZiBzcGVsbHMgYWN0dWFsbHkgdmlzaWJsZVxyXG5cdFx0ICogYWZ0ZXIgbWluL21heCBsZXZlbHMgYW5kIHNjaG9vbHMgaGF2ZSBiZWVuIGFwcGxpZWQgdG8gZmlsdGVyZWQuXHJcblx0XHQgKi9cclxuXHRcdHZpZXdpbmcoKSB7XHJcblxyXG5cdFx0XHRsZXQgc3BlbGxzID0gdGhpcy5maWx0ZXJlZDtcclxuXHRcdFx0bGV0IHZTY2hvb2xzID0gdGhpcy52aWV3U2Nob29scztcclxuXHRcdFx0bGV0IGxldmVsID0gdGhpcy5taW5MZXZlbDtcclxuXHJcblx0XHRcdGlmICggdlNjaG9vbHMubGVuZ3RoPjAgfHwgbGV2ZWwgKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBzcGVsbHMuZmlsdGVyKHY9PntcclxuXHRcdFx0XHRcdHJldHVybiAoKHZTY2hvb2xzLmxlbmd0aD09PTB8fHZTY2hvb2xzLmluY2x1ZGVzKHYuc2Nob29sKSkgKVxyXG5cdFx0XHRcdFx0XHQmJighbGV2ZWx8fCh2LmxldmVsPT09bGV2ZWwpKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHNwZWxscztcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3BlcnR5IHtTcGVsbH0gc3BlbGxzIC0gYXJyYXkgb2YgdW5sb2NrZWQgc3BlbGxzLlxyXG5cdFx0ICovXHJcblx0XHRzcGVsbHMoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGUuZmlsdGVySXRlbXMoXHJcblx0XHRcdFx0aXQ9Pml0LnR5cGUgPT09ICdzcGVsbCcgJiYgIXRoaXMubG9ja2VkKGl0KSApO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cInNwZWxsc1wiPlxyXG5cclxuXHQ8ZGl2IGNsYXNzPVwiZmlsdGVyc1wiPlxyXG5cclxuXHRcdFx0PGZpbHRlcmJveCB2LW1vZGVsPVwiZmlsdGVyZWRcIiA6aXRlbXM9XCJzcGVsbHNcIiAvPlxyXG5cclxuXHRcdDxkaXY+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cImxldmVsLWxibFwiIDpmb3I9XCJlbG1JZCgnbGV2ZWwnKVwiPkxldmVsPC9sYWJlbD5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwibGV2ZWxcIiA6aWQ9XCJlbG1JZCgnbGV2ZWwnKVwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwibWluTGV2ZWxcIiBtaW49MCBzaXplPTU+XHJcblxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImNoZWNrc1wiIHYtZm9yPVwiKHAsaykgaW4gc2Nob29sc1wiIDprZXk9XCJrXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgOnZhbHVlPVwia1wiIDppZD1cImVsbUlkKCdjaGsnK2spXCIgdi1tb2RlbD1cInZpZXdTY2hvb2xzXCIgPlxyXG5cdFx0XHRcdFx0PGxhYmVsIDpmb3I9XCJlbG1JZCgnY2hrJytrKVwiPnt7IGsgfX08L2xhYmVsPlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGVcIj5NZW1vcml6ZWQ8L2J1dHRvbj5cclxuXHJcblx0PC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYm90dG9tXCI+XHJcblxyXG48Ym9vayBjbGFzcz1cInNwZWxsYm9va1wiIDp2aWV3aW5nPVwidmlld2luZ1wiIC8+XHJcbjxkaXYgdi1zaG93PVwic2hvd0xpc3RcIj5cclxuPHNwZWxsbGlzdCBjbGFzcz1cInNwZWxsbGlzdFwiIDpsaXN0PVwibGlzdFwiIC8+XHJcbjwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuZGl2LnNwZWxscyB7XHJcblxyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcblx0cGFkZGluZzogOHB4IDE0cHg7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcblxyXG5kaXYuc3BlbGxzIC5ib3R0b20ge1xyXG5cdGRpc3BsYXk6ZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbn1cclxuXHJcbmRpdi5zcGVsbHMgLnNwZWxsYm9vayB7XHJcblx0ZmxleC1ncm93OjE7XHJcbn1cclxuXHJcblxyXG5kaXYuc3BlbGxzIC5zcGVsbGxpc3Qge1xyXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKCAtLXNlcGFyYXRvci1jb2xvciApO1xyXG5cdHdpZHRoOjE0MHB4O1xyXG5cdHBhZGRpbmc6IHZhciggLS10aW55LWdhcCApO1xyXG5cdGZsZXgtc2hyaW5rOiAxO1xyXG59XHJcblxyXG5kaXYuc3BlbGxzIC5maWx0ZXJzIHtcclxuICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7IGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlcGFyYXRvci1jb2xvcik7XHJcbiAgICAgICAgbWFyZ2luOiAwOyBwYWRkaW5nOiA0cHg7IGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2IHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgxKSxcclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7IHBhZGRpbmc6IDRweCAwIDRweCAwOyB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT10ZXh0XSxcclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG5cclxuXHRcdGZsZXg6IDE7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDFlbTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxZW07XHJcblx0XHRtaW4td2lkdGg6IHVuc2V0O1xyXG5cdFx0bWF4LXdpZHRoOiB1bnNldDtcclxuXHRcdHBhZGRpbmc6IDRweCAwO1xyXG5cdFx0Zm9udC1zaXplOiAxMDUlO1xyXG5cdFx0d2lkdGg6IDA7XHJcbn1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBsYWJlbCB7IGZsZXgtYmFzaXM6IDIwJTsgfVxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0IHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAwOyB0ZXh0LWluZGVudDogNHB4OyB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgZGl2LmNoZWNrcyB7IG1hcmdpbjogMDsgZmxleC1iYXNpczogMTYlOyB9XHJcblxyXG5cdFx0LypkaXYuc3BlbGxib29rIC5maWx0ZXJzIHtcclxuXHRcdFx0b3JkZXI6IDE7IGZsZXgtZmxvdzogcm93IHdyYXA7IGRpc3BsYXk6IGZsZXg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlcGFyYXRvci1jb2xvcik7XHJcblx0XHRcdG1hcmdpbjogMDsgcGFkZGluZzogdmFyKC0tc21hbGwtZ2FwKTsgbGluZS1oZWlnaHQ6IDJlbTsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0fVxyXG5cdFx0LmRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2IHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyB9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdjpudGgtY2hpbGQoMSksXHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRmbGV4LWJhc2lzOiA1MCU7XHJcblx0XHR9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGlucHV0W3R5cGU9dGV4dF0geyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApIDAgdmFyKC0tc21hbGwtZ2FwKSAwOyB9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9dGV4dF0sXHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcblx0XHRcdGZsZXg6IDE7IG1hcmdpbi1yaWdodDogMWVtOyBtYXJnaW4tbGVmdDogMWVtOyBtaW4td2lkdGg6IHVuc2V0OyBtYXgtd2lkdGg6IHVuc2V0OyB3aWR0aDogMDtcclxuXHRcdH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGxhYmVsIHsgZmxleC1iYXNpczogMjAlOyB9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0IHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAwOyB0ZXh0LWluZGVudDogdmFyKC0tc21hbGwtZ2FwKTsgfVxyXG5cdFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXYuY2hlY2tzIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwIDAuNWVtOyBmbGV4LWJhc2lzOiB1bnNldDsgfSovXHJcblxyXG48L3N0eWxlPiIsIjxzY3JpcHQ+XHJcbmltcG9ydCBJdGVtQmFzZSBmcm9tICcuL2l0ZW1zQmFzZSc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRwcm9wczpbJ3ZpZXdpbmcnXSxcclxuXHRtaXhpbnM6W0l0ZW1CYXNlXSxcclxuXHJcblx0bWV0aG9kczp7XHJcblxyXG5cdFx0YWRkTGlzdChpdCkge1xyXG5cdFx0XHR0aGlzLmxpc3QuYWRkKGl0KTtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdFx0c3RhdGUoKSB7IHJldHVybiBHYW1lLnN0YXRlOyB9LFxyXG5cclxuXHRcdGxpc3QoKXsgcmV0dXJuIEdhbWUuc3RhdGUuc3BlbGxsaXN0OyB9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJzcGVsbGJvb2tcIj5cclxuXHRcdDx0YWJsZT5cclxuXHRcdDx0ciB2LWZvcj1cInMgaW4gdmlld2luZ1wiIDprZXk9XCJzLmlkXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywgJGV2ZW50LCBzIClcIj5cclxuXHJcblx0XHRcdDx0ZD5cclxuXHJcblx0XHRcdFx0PGJ1dHRvbiB2LWlmPVwicy5vd25lZCYmcy5hdHRhY2smJmxpc3QuY2FuQWRkKHMpXCIgQGNsaWNrPVwiYWRkTGlzdChzKVwiPk1lbW9yaXplPC9idXR0b24+XHJcblx0XHRcdFx0PCEtLTxidXR0b24gdi1pZj1cInMub3duZWQmJnMuYXR0YWNrXCIgQGNsaWNrPVwiZW1pdCgncHJpbWFyeScscylcIj5cclxuXHRcdFx0XHR7eyBzdGF0ZS5wbGF5ZXIucHJpbWFyeT09PXMgPyAnVW5lcXVpcCcgOiAnUHJpbWFyeScgfX1cclxuXHRcdFx0XHQ8L2J1dHRvbj4tLT5cclxuXHJcblx0XHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkPnt7IHMubmFtZSB9fTwvdGQ+XHJcblx0XHRcdDx0ZD5cclxuXHJcblx0XHRcdFx0PGJ1dHRvbiB2LWlmPVwicy5vd25lZFwiIEBjbGljaz1cImVtaXQoJ3NwZWxsJywgcylcIiA6ZGlzYWJsZWQ9XCIhdXNhYmxlKHMpXCI+Q2FzdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtZWxzZSBAY2xpY2s9XCJlbWl0KCdidXknLCBzKVwiIDpkaXNhYmxlZD1cIiF1c2FibGUocylcIj5MZWFybjwvYnV0dG9uPlxyXG5cclxuXHRcdFx0PC90ZD5cclxuXHJcblx0XHQ8L3RyPlxyXG5cdFx0PC90YWJsZT5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLnNwZWxsYm9vayB7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc3BlbGxib29rIHRhYmxlIHsgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XHJcbi5zcGVsbGJvb2sgdGFibGUgdHIgeyBkaXNwbGF5OmZsZXg7IGZsZXgtYmFzaXM6IDQ4JTsgfVxyXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgxKSwgLnNwZWxsYm9vayB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMykge1xyXG5cdGZsZXgtYmFzaXM6IDIwJTsgb3JkZXI6IDM7IH1cclxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikgeyBmbGV4OiAxOyBvcmRlcjogMTt9XHJcbi5zcGVsbGJvb2sgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDMpIHsgZmxleC1iYXNpczogMjAlOyBvcmRlcjogMjsgfVxyXG4uc3BlbGxib29rIHRhYmxlIHRkIHsgZGlzcGxheTogZmxleDsgfVxyXG5cclxuIGRpdi5zcGVsbGJvb2sgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nOiAwOyB9XHJcbmRpdi5zcGVsbGJvb2sgeyBtYXJnaW46IDA7IHBhZGRpbmc6IHZhcigtLW1lZGl1bS1nYXApOyB9XHJcblxyXG4gZGl2LnNwZWxsYm9vayB0YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoIDI1NnB4LCAxZnIgKSByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoIDI1NnB4LCAxZnIgKSk7XHJcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6ICAxZnI7XHJcbiAgICB9XHJcbiAgICBkaXYuc3BlbGxib29rICB0YWJsZSB0ciB7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCk7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyB9XHJcbiAgICBkaXYuc3BlbGxib29rICB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMSksXHJcbiAgICBkaXYuc3BlbGxib29rICB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMil7IGZsZXg6IDE7IH1cclxuICAgIGRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKXsgZmxleDogMjsgfVxyXG5cdGRpdi5zcGVsbGJvb2sgYnV0dG9uIHsgZmxleDogMTsgZm9udC1zaXplOiB2YXIoLS1jb21wYWN0LXNtYWxsLWZvbnQpOyBtYXJnaW46IDA7IH1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdHByb3BzOlsnbGlzdCddLFxyXG5cdG1ldGhvZHM6e1xyXG5cclxuXHRcdHJlbW92ZShpdCkge1xyXG5cdFx0XHR0aGlzLmxpc3QucmVtb3ZlKGl0KTtcclxuXHJcblx0XHR9LFxyXG5cdFx0YWRkKGl0KSB7XHJcblx0XHRcdHRoaXMubGlzdC5hZGQoaXQpO1xyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cdGNvbXB1dGVkOntcclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwic3BlbGxsaXN0XCI+XHJcblxyXG5cdDxzcGFuPk1heCBMZXZlbHM6IHt7IGxpc3QudXNlZCArICcgLyAnICsgTWF0aC5mbG9vciggbGlzdC5tYXgudmFsdWUgKSB9fTwvc3Bhbj5cclxuXHQ8c3BhbiBjbGFzcz0nd2Fybi10ZXh0JyB2LWlmPVwibGlzdC5mdWxsKClcIj5TcGVsbGxpc3QgaXMgRnVsbDwvc3Bhbj5cclxuXHQ8ZGl2IHYtZm9yPVwiKGl0LGluZCkgaW4gbGlzdC5pdGVtc1wiIDprZXk9XCJpbmRcIj5cclxuXHRcdDxzcGFuPnt7IGl0Lm5hbWUgfX08L3NwYW4+PGJ1dHRvbiBAY2xpY2s9XCJyZW1vdmUoaXQpXCI+UmVtb3ZlPC9idXR0b24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiAhdGhpcy5taW5JdGVtcyB8fCB0aGlzLml0ZW1zLmxlbmd0aCA+PSB0aGlzLm1pbkl0ZW1zXG4gICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbHRlci1ib3hcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IF92bS5lbG1JZChcImZpbHRlclwiKSB9IH0sIFtfdm0uX3YoXCJGaW5kXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5maW5kVGV4dCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaW5kVGV4dFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLmVsbUlkKFwiZmlsdGVyXCIpLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmluZFRleHQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0uZmluZFRleHQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwZWxsc1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbHRlcnNcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImZpbHRlcmJveFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5zcGVsbHMgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXJlZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmZpbHRlcmVkID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJlZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sYmxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZWxtSWQoXCJsZXZlbFwiKSB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiTGV2ZWxcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWluTGV2ZWwsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtaW5MZXZlbFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsZXZlbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5lbG1JZChcImxldmVsXCIpLFxuICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgICAgICBzaXplOiBcIjVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWluTGV2ZWwgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ubWluTGV2ZWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5zY2hvb2xzLCBmdW5jdGlvbihwLCBrKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBrLCBzdGF0aWNDbGFzczogXCJjaGVja3NcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS52aWV3U2Nob29scyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmlld1NjaG9vbHNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogX3ZtLmVsbUlkKFwiY2hrXCIgKyBrKSB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBrLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnZpZXdTY2hvb2xzKVxuICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnZpZXdTY2hvb2xzLCBrKSA+IC0xXG4gICAgICAgICAgICAgICAgICA6IF92bS52aWV3U2Nob29sc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnZpZXdTY2hvb2xzLFxuICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBrLFxuICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS52aWV3U2Nob29scyA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnZpZXdTY2hvb2xzID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnZpZXdTY2hvb2xzID0gJCRjXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBfdm0uZWxtSWQoXCJjaGtcIiArIGspIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGspKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3ZtLnRvZ2dsZSB9IH0sIFtfdm0uX3YoXCJNZW1vcml6ZWRcIildKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImJvb2tcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwZWxsYm9va1wiLFxuICAgICAgICAgIGF0dHJzOiB7IHZpZXdpbmc6IF92bS52aWV3aW5nIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dMaXN0LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0xpc3RcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInNwZWxsbGlzdFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNwZWxsbGlzdFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBsaXN0OiBfdm0ubGlzdCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3BlbGxib29rXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJ0YWJsZVwiLFxuICAgICAgX3ZtLl9sKF92bS52aWV3aW5nLCBmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBzLmlkLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJpdGVtb3ZlclwiLCAkZXZlbnQsIHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICBzLm93bmVkICYmIHMuYXR0YWNrICYmIF92bS5saXN0LmNhbkFkZChzKVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZExpc3QocylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNZW1vcml6ZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHMubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgIHMub3duZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0udXNhYmxlKHMpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwic3BlbGxcIiwgcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYXN0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS51c2FibGUocykgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXQoXCJidXlcIiwgcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMZWFyblwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic3BlbGxsaXN0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJNYXggTGV2ZWxzOiBcIiArXG4gICAgICAgICAgICBfdm0uX3MoX3ZtLmxpc3QudXNlZCArIFwiIC8gXCIgKyBNYXRoLmZsb29yKF92bS5saXN0Lm1heC52YWx1ZSkpXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5saXN0LmZ1bGwoKVxuICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIndhcm4tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlNwZWxsbGlzdCBpcyBGdWxsXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmxpc3QuaXRlbXMsIGZ1bmN0aW9uKGl0LCBpbmQpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpbmQgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdC5uYW1lKSldKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmUoaXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlJlbW92ZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2ZDBlMGJlY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZkMGUwYmVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZkMGUwYmVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZkMGUwYmVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZkMGUwYmVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NwZWxscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NwZWxscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxOTY3MzYyY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE5NjczNjJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE5NjczNjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE5NjczNjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5NjczNjJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmFkY2IwYTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YWRjYjBhMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YWRjYjBhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YWRjYjBhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YWRjYjBhMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL3NwZWxsYm9vay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjk2YjhhMzgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjk2YjhhMzhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiOTZiOGEzOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiOTZiOGEzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiOTZiOGEzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOTZiOGEzOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiOTZiOGEzOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL3NwZWxsbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iOTZiOGEzOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=