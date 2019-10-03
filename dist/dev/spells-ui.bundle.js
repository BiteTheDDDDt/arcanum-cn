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
exports.push([module.i, "\ndiv.spells[data-v-1967362c] {\r\n\r\n\tdisplay:flex;\r\n\tflex-flow: column nowrap;\r\n\tpadding: 8px 14px;\r\n\theight:100%;\n}\ndiv.spells .bottom[data-v-1967362c] {\r\n\tdisplay:flex;\r\n\tflex-flow: row nowrap;\n}\ndiv.spells .spellbook[data-v-1967362c] {\r\n\tflex-grow:1;\n}\ndiv.spells .spelllist[data-v-1967362c] {\r\n\tborder-left: 1px solid var( --separator-color );\r\n\twidth:100px;\r\n\tflex-shrink: 1;\n}\ndiv.spells .filters[data-v-1967362c] {\r\n       flex-flow: row wrap; display: flex;\r\n        border-bottom: 1px solid var(--separator-color);\r\n        margin: 0; padding: 4px; line-height: 2em;\n}\ndiv.spells div.filters div[data-v-1967362c] { box-sizing: border-box; margin: 0;\n}\ndiv.spells div.filters div[data-v-1967362c]:nth-child(1),\r\ndiv.spells div.filters div[data-v-1967362c]:nth-child(2) {\r\n        flex-basis: 50%;\n}\ndiv.spells div.filters input[type=text][data-v-1967362c] { padding: 4px 0 4px 0;\n}\ndiv.spells div.filters > div input[type=text][data-v-1967362c],\r\ndiv.spells div.filters > div input[type=number][data-v-1967362c] {\r\n\r\n\t\tflex: 1;\r\n\t\tmargin-right: 1em;\r\n\t\tmargin-left: 1em;\r\n\t\tmin-width: unset;\r\n\t\tmax-width: unset;\r\n\t\tpadding: 4px 0;\r\n\t\tfont-size: 105%;\r\n\t\twidth: 0;\n}\ndiv.spells div.filters > div[data-v-1967362c] { display: flex; align-items: center;\n}\ndiv.spells div.filters > div label[data-v-1967362c] { flex-basis: 20%;\n}\ndiv.spells div.filters > div input[data-v-1967362c] { min-width: 0; padding: 0; text-indent: 4px;\n}\ndiv.spells div.filters div.checks[data-v-1967362c] { margin: 0; flex-basis: 16%;\n}\r\n\r\n\t\t/*div.spellbook .filters {\r\n\t\t\torder: 1; flex-flow: row wrap; display: flex; text-align: center;\r\n\t\t\tborder-bottom: 1px solid var(--separator-color);\r\n\t\t\tmargin: 0; padding: var(--small-gap); line-height: 2em; justify-content: flex-start;\r\n\t\t}\r\n\t\t.div.spellbook div.filters div { box-sizing: border-box; margin: 0; }\r\n\t\tdiv.spellbook div.filters div:nth-child(1),\r\n\t\tdiv.spellbook div.filters div:nth-child(2) {\r\n\t\t\tflex-basis: 50%;\r\n\t\t}\r\n\t\tdiv.spellbook div.filters input[type=text] { padding: var(--small-gap) 0 var(--small-gap) 0; }\r\n\t\tdiv.spellbook div.filters > div input[type=text],\r\n\t\tdiv.spellbook div.filters > div input[type=number] {\r\n\t\t\tflex: 1; margin-right: 1em; margin-left: 1em; min-width: unset; max-width: unset; width: 0;\r\n\t\t}\r\n\t\tdiv.spellbook div.filters > div { display: flex; align-items: center; }\r\n\t\tdiv.spellbook div.filters > div label { flex-basis: 20%; }\r\n\t\tdiv.spellbook div.filters > div input { min-width: 0; padding: 0; text-indent: var(--small-gap); }\r\n\t\tdiv.spellbook div.filters div.checks { margin: 0; padding: 0 0.5em; flex-basis: unset; }*/\r\n\r\n", ""]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzRjNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/ZjlhOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8zMGZkIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/NzFhZSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83ZjZhIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzE0MTkiLCJ3ZWJwYWNrOi8vL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlIiwid2VicGFjazovLy9zcmMvdWkvc3BlbGxib29rLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9lNWMyIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzc1M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/YzNlMCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT84YjM2Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZT9hYzdhIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ZpbHRlcmJveC52dWU/ODMwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9maWx0ZXJib3gudnVlPzQxNWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWU/NWY4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvc3BlbGxzLnZ1ZT83MDhmIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9zcGVsbHMudnVlPzJiOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsYm9vay52dWU/MzVkMyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxib29rLnZ1ZT8yNDRiIiwid2VicGFjazovLy8uL3NyYy91aS9zcGVsbGJvb2sudnVlPzAwOGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NwZWxsbGlzdC52dWU/ODgyOCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc3BlbGxsaXN0LnZ1ZT8zNDMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsdUJBQXVCLEdBQUcsbUNBQW1DLHNCQUFzQiw2QkFBNkIseUJBQXlCLCtCQUErQixHQUFHLGlEQUFpRCxtQkFBbUIsc0JBQXNCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0Y1VCwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsa0NBQWtDLHVCQUF1QiwrQkFBK0Isd0JBQXdCLGtCQUFrQixHQUFHLHVDQUF1QyxtQkFBbUIsNEJBQTRCLEdBQUcsMENBQTBDLGtCQUFrQixHQUFHLDBDQUEwQyxzREFBc0Qsa0JBQWtCLHFCQUFxQixHQUFHLHdDQUF3QywrQkFBK0IsZUFBZSw0REFBNEQsc0JBQXNCLGNBQWMsa0JBQWtCLEdBQUcsK0NBQStDLHdCQUF3QixXQUFXLEdBQUcseUhBQXlILDRCQUE0QixHQUFHLDREQUE0RCxzQkFBc0IsR0FBRyx1SUFBdUksb0JBQW9CLDBCQUEwQix5QkFBeUIseUJBQXlCLHlC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O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9HO0FBQ3ZDO0FBQ0w7OztBQUd4RDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE0SCxDQUFnQixzTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZGV2L3NwZWxscy11aS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmxhYmVsW2RhdGEtdi02ZDBlMGJlY10ge1xcclxcblxcdG1hcmdpbi1yaWdodDo4cHg7XFxufVxcbmRpdi5maWx0ZXItYm94W2RhdGEtdi02ZDBlMGJlY10ge1xcclxcblxcdGZvbnQtc2l6ZTogMTA1JTtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG5cXHRtYXJnaW46IDhweCA0cHggOHB4IDEycHg7XFxufVxcbi5maWx0ZXItYm94IGlucHV0W3R5cGU9dGV4dF1bZGF0YS12LTZkMGUwYmVjXSB7XFxyXFxuXFx0cGFkZGluZzogNHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMTA1JTtcXG59XFxyXFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZGl2LnNwZWxsc1tkYXRhLXYtMTk2NzM2MmNdIHtcXHJcXG5cXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcblxcdHBhZGRpbmc6IDhweCAxNHB4O1xcclxcblxcdGhlaWdodDoxMDAlO1xcbn1cXG5kaXYuc3BlbGxzIC5ib3R0b21bZGF0YS12LTE5NjczNjJjXSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG59XFxuZGl2LnNwZWxscyAuc3BlbGxib29rW2RhdGEtdi0xOTY3MzYyY10ge1xcclxcblxcdGZsZXgtZ3JvdzoxO1xcbn1cXG5kaXYuc3BlbGxzIC5zcGVsbGxpc3RbZGF0YS12LTE5NjczNjJjXSB7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoIC0tc2VwYXJhdG9yLWNvbG9yICk7XFxyXFxuXFx0d2lkdGg6MTAwcHg7XFxyXFxuXFx0ZmxleC1zaHJpbms6IDE7XFxufVxcbmRpdi5zcGVsbHMgLmZpbHRlcnNbZGF0YS12LTE5NjczNjJjXSB7XFxyXFxuICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7IGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogNHB4OyBsaW5lLWhlaWdodDogMmVtO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGRpdltkYXRhLXYtMTk2NzM2MmNdIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGRpdltkYXRhLXYtMTk2NzM2MmNdOm50aC1jaGlsZCgxKSxcXHJcXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGRpdltkYXRhLXYtMTk2NzM2MmNdOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgaW5wdXRbdHlwZT10ZXh0XVtkYXRhLXYtMTk2NzM2MmNdIHsgcGFkZGluZzogNHB4IDAgNHB4IDA7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT10ZXh0XVtkYXRhLXYtMTk2NzM2MmNdLFxcclxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT1udW1iZXJdW2RhdGEtdi0xOTY3MzYyY10ge1xcclxcblxcclxcblxcdFxcdGZsZXg6IDE7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAxZW07XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDFlbTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IHVuc2V0O1xcclxcblxcdFxcdG1heC13aWR0aDogdW5zZXQ7XFxyXFxuXFx0XFx0cGFkZGluZzogNHB4IDA7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxMDUlO1xcclxcblxcdFxcdHdpZHRoOiAwO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2W2RhdGEtdi0xOTY3MzYyY10geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGxhYmVsW2RhdGEtdi0xOTY3MzYyY10geyBmbGV4LWJhc2lzOiAyMCU7XFxufVxcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbZGF0YS12LTE5NjczNjJjXSB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMDsgdGV4dC1pbmRlbnQ6IDRweDtcXG59XFxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXYuY2hlY2tzW2RhdGEtdi0xOTY3MzYyY10geyBtYXJnaW46IDA7IGZsZXgtYmFzaXM6IDE2JTtcXG59XFxyXFxuXFxyXFxuXFx0XFx0LypkaXYuc3BlbGxib29rIC5maWx0ZXJzIHtcXHJcXG5cXHRcXHRcXHRvcmRlcjogMTsgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDsgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDsgcGFkZGluZzogdmFyKC0tc21hbGwtZ2FwKTsgbGluZS1oZWlnaHQ6IDJlbTsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQuZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdjpudGgtY2hpbGQoMSksXFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHRcXHRcXHRmbGV4LWJhc2lzOiA1MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCkgMCB2YXIoLS1zbWFsbC1nYXApIDA7IH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9dGV4dF0sXFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPW51bWJlcl0ge1xcclxcblxcdFxcdFxcdGZsZXg6IDE7IG1hcmdpbi1yaWdodDogMWVtOyBtYXJnaW4tbGVmdDogMWVtOyBtaW4td2lkdGg6IHVuc2V0OyBtYXgtd2lkdGg6IHVuc2V0OyB3aWR0aDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzID4gZGl2IGxhYmVsIHsgZmxleC1iYXNpczogMjAlOyB9XFxyXFxuXFx0XFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dCB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMDsgdGV4dC1pbmRlbnQ6IHZhcigtLXNtYWxsLWdhcCk7IH1cXHJcXG5cXHRcXHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdi5jaGVja3MgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDAgMC41ZW07IGZsZXgtYmFzaXM6IHVuc2V0OyB9Ki9cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc3BlbGxib29rW2RhdGEtdi02YWRjYjBhMl0ge1xcclxcblxcdHBhZGRpbmc6IDRweDtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdGhlaWdodDoxMDAlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5zcGVsbGJvb2sgdGFibGVbZGF0YS12LTZhZGNiMGEyXSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogcm93IHdyYXA7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNwZWxsYm9vayB0YWJsZSB0cltkYXRhLXYtNmFkY2IwYTJdIHsgZGlzcGxheTpmbGV4OyBmbGV4LWJhc2lzOiA0OCU7XFxufVxcbi5zcGVsbGJvb2sgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMSksIC5zcGVsbGJvb2sgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMykge1xcclxcblxcdGZsZXgtYmFzaXM6IDIwJTsgb3JkZXI6IDM7XFxufVxcbi5zcGVsbGJvb2sgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMikgeyBmbGV4OiAxOyBvcmRlcjogMTt9XFxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgzKSB7IGZsZXgtYmFzaXM6IDIwJTsgb3JkZXI6IDI7XFxufVxcbi5zcGVsbGJvb2sgdGFibGUgdGRbZGF0YS12LTZhZGNiMGEyXSB7IGRpc3BsYXk6IGZsZXg7XFxufVxcbmRpdi5zcGVsbGJvb2tbZGF0YS12LTZhZGNiMGEyXSB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmc6IDA7XFxufVxcbmRpdi5zcGVsbGJvb2tbZGF0YS12LTZhZGNiMGEyXSB7IG1hcmdpbjogMDsgcGFkZGluZzogdmFyKC0tbWVkaXVtLWdhcCk7XFxufVxcbmRpdi5zcGVsbGJvb2sgdGFibGVbZGF0YS12LTZhZGNiMGEyXSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCggMjU2cHgsIDFmciApIHJlcGVhdCggYXV0by1maXQsIG1pbm1heCggMjU2cHgsIDFmciApKTtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAgMWZyO1xcbn1cXG5kaXYuc3BlbGxib29rICB0YWJsZSB0cltkYXRhLXYtNmFkY2IwYTJdIHsgcGFkZGluZzogdmFyKC0tc21hbGwtZ2FwKTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbmRpdi5zcGVsbGJvb2sgIHRhYmxlIHRyIHRkW2RhdGEtdi02YWRjYjBhMl06bnRoLWNoaWxkKDEpLFxcclxcbiAgICBkaXYuc3BlbGxib29rICB0YWJsZSB0ciB0ZFtkYXRhLXYtNmFkY2IwYTJdOm50aC1jaGlsZCgyKXsgZmxleDogMTtcXG59XFxuZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGRbZGF0YS12LTZhZGNiMGEyXTpudGgtY2hpbGQoMil7IGZsZXg6IDI7XFxufVxcbmRpdi5zcGVsbGJvb2sgYnV0dG9uW2RhdGEtdi02YWRjYjBhMl0geyBmbGV4OiAxOyBmb250LXNpemU6IHZhcigtLWNvbXBhY3Qtc21hbGwtZm9udCk7IG1hcmdpbjogMDtcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkMGUwYmVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0LyoqXHJcblx0ICogQHByb3BlcnR5IHtvYmplY3RbXX0gaXRlbXMgLSBpdGVtcyB0byBmaWx0ZXIuXHJcblx0ICogQHByb3BlcnR5IHtwcm9wfSBbcHJvcD0nbmFtZSddIC0gdGFyZ2V0IHByb3Agb2YgZmlsdGVyIHRlc3QuXHJcblx0ICpcclxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gW21pbkl0ZW1zPTBdIC0gbWluaW11bSBudW1iZXIgb2YgaXRlbXMgYmVmb3JlIGJveCBpcyB2aXNpYmxlLlxyXG5cdCAqL1xyXG5cdHByb3BzOlsndmFsdWUnLCAnaXRlbXMnLCAncHJvcCcsICdtaW5JdGVtcyddLFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0ZXh0OicnLFxyXG5cdFx0XHRwcHJvcDp0aGlzLnByb3B8fCduYW1lJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0d2F0Y2g6e1xyXG5cdFx0aXRlbXMobmV3VmFsLG9sZFZhbCl7XHJcblx0XHRcdHRoaXMuZmluZFRleHQgPSB0aGlzLmZpbmRUZXh0O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y3JlYXRlZCgpe1xyXG5cdFx0dGhpcy5maW5kVGV4dCA9IHRoaXMudGV4dDtcclxuXHR9LFxyXG5cdGNvbXB1dGVkOntcclxuXHJcblx0XHRmaW5kVGV4dDp7XHJcblxyXG5cdFx0XHRnZXQoKSB7IHJldHVybiB0aGlzLnRleHQ7IH0sXHJcblx0XHRcdHNldCh2KXtcclxuXHJcblx0XHRcdFx0dGhpcy50ZXh0ID0gdjtcclxuXHJcblx0XHRcdFx0bGV0IHAgPSB0aGlzLnBwcm9wO1xyXG5cclxuXHRcdFx0XHRpZiAoICF2ICkgdGhpcy4kZW1pdCggJ2lucHV0JywgdGhpcy5pdGVtcyApO1xyXG5cdFx0XHRcdGVsc2UgaWYgKCB0eXBlb2YgcCA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuIFx0XHRcdFx0XHR0aGlzLiRlbWl0KCAnaW5wdXQnLCB0aGlzLml0ZW1zLmZpbHRlcihcclxuXHRcdFx0XHRcdFx0aXQ9PnAoaXQsIHYpXHJcblx0XHRcdFx0XHQpKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHRoaXMuJGVtaXQoICdpbnB1dCcsIHRoaXMuaXRlbXMuZmlsdGVyKFxyXG5cdFx0XHRcdFx0aXQ9Pih0eXBlb2YgaXQgPT09ICdvYmplY3QnKSAmJlxyXG5cdFx0XHRcdFx0KCAodHlwZW9mIGl0W3BdKSA9PT0gJ3N0cmluZycgKSAmJiBpdFtwXS5pbmNsdWRlcyggdiApXHJcblx0XHRcdFx0KSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiZmlsdGVyLWJveFwiIHYtaWY9XCIhdGhpcy5taW5JdGVtc3x8KHRoaXMuaXRlbXMubGVuZ3RoPj10aGlzLm1pbkl0ZW1zKVwiPlxyXG5cdFx0PGxhYmVsIDpmb3I9XCJlbG1JZCgnZmlsdGVyJylcIj5GaW5kPC9sYWJlbD5cclxuXHRcdDxpbnB1dCA6aWQ9XCJlbG1JZCgnZmlsdGVyJylcIiB2LW1vZGVsPVwiZmluZFRleHRcIiB0eXBlPVwidGV4dFwiPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbmxhYmVsIHtcclxuXHRtYXJnaW4tcmlnaHQ6OHB4O1xyXG59XHJcbmRpdi5maWx0ZXItYm94IHtcclxuXHRmb250LXNpemU6IDEwNSU7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRsaW5lLWhlaWdodDogMS4yZW07XHJcblx0bWFyZ2luOiA4cHggNHB4IDhweCAxMnB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWJveCBpbnB1dFt0eXBlPXRleHRdIHtcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0Zm9udC1zaXplOiAxMDUlO1xyXG59XHJcbjwvc3R5bGU+IiwiPHNjcmlwdD5cclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vLi4vZ2FtZSc7XHJcbmltcG9ydCBJdGVtQmFzZSBmcm9tICcuLi9pdGVtc0Jhc2UnO1xyXG5cclxuaW1wb3J0IEZpbHRlckJveCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbHRlcmJveC52dWUnO1xyXG5pbXBvcnQgQm9vayBmcm9tICcuLi9zcGVsbGJvb2sudnVlJztcclxuaW1wb3J0IFNwZWxsTGlzdCBmcm9tICcuLi9zcGVsbGxpc3QudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0ZGF0YSgpe1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNob3dMaXN0OmZhbHNlLFxyXG5cdFx0XHRmaWx0ZXJlZDpudWxsLFxyXG5cdFx0XHR2aWV3U2Nob29sczpbXSxcclxuXHRcdFx0cE1pbjpudWxsLFxyXG5cdFx0XHRwTWF4Om51bGxcclxuXHRcdH07XHJcblxyXG5cdH0sXHJcblx0bWl4aW5zOltJdGVtQmFzZV0sXHJcblx0Y29tcG9uZW50czp7XHJcblxyXG5cdFx0ZmlsdGVyYm94OkZpbHRlckJveCxcclxuXHRcdGJvb2s6Qm9vayxcclxuXHRcdHNwZWxsbGlzdDpTcGVsbExpc3RcclxuXHJcblx0fSxcclxuXHRtZXRob2RzOntcclxuXHJcblx0XHR0b2dnbGUoKXtcclxuXHRcdFx0dGhpcy5zaG93TGlzdCA9ICF0aGlzLnNob3dMaXN0O1xyXG5cdFx0XHRjb25zb2xlLmxvZygnU0hPVzogJyArIHRoaXMuc2hvd0xpc3QgKTtcclxuXHRcdH1cclxuXHJcblx0fSwgY29tcHV0ZWQ6e1xyXG5cclxuXHRcdHN0YXRlKCkgeyByZXR1cm4gR2FtZS5zdGF0ZTsgfSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U3BlbGxMaXN0fSBzcGVsbGxpc3QgLSBzcGVsbHMgaW4gYWN0aXZlIHVzZS4gKGR1bmdlb25zKVxyXG5cdFx0ICovXHJcblx0XHRsaXN0KCkgeyByZXR1cm4gR2FtZS5zdGF0ZS5zcGVsbGxpc3Q7IH0sXHJcblxyXG5cdFx0bWluTGV2ZWw6e1xyXG5cclxuXHRcdFx0Z2V0KCl7IHJldHVybiB0aGlzLnBNaW47IH0sXHJcblx0XHRcdHNldCh2KXsgdGhpcy5wTWluID0gTnVtYmVyKHYpOyB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsc3RyaW5nPn0gc2Nob29scyAtIHNjaG9vbHMgb2YgYWxsIHVubG9ja2VkIHNwZWxscy5cclxuXHRcdCAqL1xyXG5cdFx0c2Nob29scygpIHtcclxuXHJcblx0XHRcdGxldCByZXMgPSB7fTtcclxuXHJcblx0XHRcdGxldCBhID0gdGhpcy5zcGVsbHM7XHJcblx0XHRcdGZvciggbGV0IGkgPSBhLmxlbmd0aC0xOyBpPj0gMDsgaS0tICkge1xyXG5cdFx0XHRcdHZhciBzID0gYVtpXTtcclxuXHRcdFx0XHRpZiAoIHMuc2Nob29sICkgcmVzW3Muc2Nob29sXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwcm9wZXJ0eSB7U3BlbGxbXX0gdmlld2luZyAtIGFycmF5IG9mIHNwZWxscyBhY3R1YWxseSB2aXNpYmxlXHJcblx0XHQgKiBhZnRlciBtaW4vbWF4IGxldmVscyBhbmQgc2Nob29scyBoYXZlIGJlZW4gYXBwbGllZCB0byBmaWx0ZXJlZC5cclxuXHRcdCAqL1xyXG5cdFx0dmlld2luZygpIHtcclxuXHJcblx0XHRcdGxldCBzcGVsbHMgPSB0aGlzLmZpbHRlcmVkO1xyXG5cdFx0XHRsZXQgdlNjaG9vbHMgPSB0aGlzLnZpZXdTY2hvb2xzO1xyXG5cdFx0XHRsZXQgbGV2ZWwgPSB0aGlzLm1pbkxldmVsO1xyXG5cclxuXHRcdFx0aWYgKCB2U2Nob29scy5sZW5ndGg+MCB8fCBsZXZlbCApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHNwZWxscy5maWx0ZXIodj0+e1xyXG5cdFx0XHRcdFx0cmV0dXJuICgodlNjaG9vbHMubGVuZ3RoPT09MHx8dlNjaG9vbHMuaW5jbHVkZXModi5zY2hvb2wpKSApXHJcblx0XHRcdFx0XHRcdCYmKCFsZXZlbHx8KHYubGV2ZWw9PT1sZXZlbCkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc3BlbGxzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcHJvcGVydHkge1NwZWxsfSBzcGVsbHMgLSBhcnJheSBvZiB1bmxvY2tlZCBzcGVsbHMuXHJcblx0XHQgKi9cclxuXHRcdHNwZWxscygpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5maWx0ZXJJdGVtcyhcclxuXHRcdFx0XHRpdD0+aXQudHlwZSA9PT0gJ3NwZWxsJyAmJiAhdGhpcy5sb2NrZWQoaXQpICk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwic3BlbGxzXCI+XHJcblxyXG5cdDxkaXYgY2xhc3M9XCJmaWx0ZXJzXCI+XHJcblxyXG5cdFx0XHQ8ZmlsdGVyYm94IHYtbW9kZWw9XCJmaWx0ZXJlZFwiIDppdGVtcz1cInNwZWxsc1wiIC8+XHJcblxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwibGV2ZWwtbGJsXCIgOmZvcj1cImVsbUlkKCdsZXZlbCcpXCI+TGV2ZWw8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJsZXZlbFwiIDppZD1cImVsbUlkKCdsZXZlbCcpXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJtaW5MZXZlbFwiIG1pbj0wIHNpemU9NT5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2hlY2tzXCIgdi1mb3I9XCIocCxrKSBpbiBzY2hvb2xzXCIgOmtleT1cImtcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJrXCIgOmlkPVwiZWxtSWQoJ2NoaycraylcIiB2LW1vZGVsPVwidmlld1NjaG9vbHNcIiA+XHJcblx0XHRcdFx0XHQ8bGFiZWwgOmZvcj1cImVsbUlkKCdjaGsnK2spXCI+e3sgayB9fTwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVwiPk1lbW9yaXplZDwvYnV0dG9uPlxyXG5cclxuXHQ8L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJib3R0b21cIj5cclxuXHJcbjxib29rIGNsYXNzPVwic3BlbGxib29rXCIgOnZpZXdpbmc9XCJ2aWV3aW5nXCIgLz5cclxuPGRpdiB2LXNob3c9XCJzaG93TGlzdFwiPlxyXG48c3BlbGxsaXN0IGNsYXNzPVwic3BlbGxsaXN0XCIgOmxpc3Q9XCJsaXN0XCIgLz5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG5kaXYuc3BlbGxzIHtcclxuXHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRwYWRkaW5nOiA4cHggMTRweDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHJcbn1cclxuXHJcbmRpdi5zcGVsbHMgLmJvdHRvbSB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxufVxyXG5cclxuZGl2LnNwZWxscyAuc3BlbGxib29rIHtcclxuXHRmbGV4LWdyb3c6MTtcclxufVxyXG5cclxuXHJcbmRpdi5zcGVsbHMgLnNwZWxsbGlzdCB7XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoIC0tc2VwYXJhdG9yLWNvbG9yICk7XHJcblx0d2lkdGg6MTAwcHg7XHJcblx0ZmxleC1zaHJpbms6IDE7XHJcbn1cclxuXHJcbmRpdi5zcGVsbHMgLmZpbHRlcnMge1xyXG4gICAgICAgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDRweDsgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXY6bnRoLWNoaWxkKDEpLFxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgIH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBpbnB1dFt0eXBlPXRleHRdIHsgcGFkZGluZzogNHB4IDAgNHB4IDA7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyA+IGRpdiBpbnB1dFt0eXBlPXRleHRdLFxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcblxyXG5cdFx0ZmxleDogMTtcclxuXHRcdG1hcmdpbi1yaWdodDogMWVtO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDFlbTtcclxuXHRcdG1pbi13aWR0aDogdW5zZXQ7XHJcblx0XHRtYXgtd2lkdGg6IHVuc2V0O1xyXG5cdFx0cGFkZGluZzogNHB4IDA7XHJcblx0XHRmb250LXNpemU6IDEwNSU7XHJcblx0XHR3aWR0aDogMDtcclxufVxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5kaXYuc3BlbGxzIGRpdi5maWx0ZXJzID4gZGl2IGxhYmVsIHsgZmxleC1iYXNpczogMjAlOyB9XHJcbmRpdi5zcGVsbHMgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiA0cHg7IH1cclxuZGl2LnNwZWxscyBkaXYuZmlsdGVycyBkaXYuY2hlY2tzIHsgbWFyZ2luOiAwOyBmbGV4LWJhc2lzOiAxNiU7IH1cclxuXHJcblx0XHQvKmRpdi5zcGVsbGJvb2sgLmZpbHRlcnMge1xyXG5cdFx0XHRvcmRlcjogMTsgZmxleC1mbG93OiByb3cgd3JhcDsgZGlzcGxheTogZmxleDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxuXHRcdFx0bWFyZ2luOiAwOyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApOyBsaW5lLWhlaWdodDogMmVtOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHR9XHJcblx0XHQuZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyBkaXYgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBtYXJnaW46IDA7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgxKSxcclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgZGl2Om50aC1jaGlsZCgyKSB7XHJcblx0XHRcdGZsZXgtYmFzaXM6IDUwJTtcclxuXHRcdH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7IHBhZGRpbmc6IHZhcigtLXNtYWxsLWdhcCkgMCB2YXIoLS1zbWFsbC1nYXApIDA7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT10ZXh0XSxcclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuXHRcdFx0ZmxleDogMTsgbWFyZ2luLXJpZ2h0OiAxZW07IG1hcmdpbi1sZWZ0OiAxZW07IG1pbi13aWR0aDogdW5zZXQ7IG1heC13aWR0aDogdW5zZXQ7IHdpZHRoOiAwO1xyXG5cdFx0fVxyXG5cdFx0ZGl2LnNwZWxsYm9vayBkaXYuZmlsdGVycyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgbGFiZWwgeyBmbGV4LWJhc2lzOiAyMCU7IH1cclxuXHRcdGRpdi5zcGVsbGJvb2sgZGl2LmZpbHRlcnMgPiBkaXYgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDA7IHRleHQtaW5kZW50OiB2YXIoLS1zbWFsbC1nYXApOyB9XHJcblx0XHRkaXYuc3BlbGxib29rIGRpdi5maWx0ZXJzIGRpdi5jaGVja3MgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDAgMC41ZW07IGZsZXgtYmFzaXM6IHVuc2V0OyB9Ki9cclxuXHJcbjwvc3R5bGU+IiwiPHNjcmlwdD5cclxuaW1wb3J0IEl0ZW1CYXNlIGZyb20gJy4vaXRlbXNCYXNlJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdHByb3BzOlsndmlld2luZyddLFxyXG5cdG1peGluczpbSXRlbUJhc2VdLFxyXG5cclxuXHRtZXRob2RzOntcclxuXHJcblx0XHRhZGRMaXN0KGl0KSB7XHJcblx0XHRcdHRoaXMubGlzdC5hZGQoaXQpO1xyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cdGNvbXB1dGVkOntcclxuXHJcblx0XHRzdGF0ZSgpIHsgcmV0dXJuIEdhbWUuc3RhdGU7IH0sXHJcblxyXG5cdFx0bGlzdCgpeyByZXR1cm4gR2FtZS5zdGF0ZS5zcGVsbGxpc3Q7IH1cclxuXHJcblx0fVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcblx0PGRpdiBjbGFzcz1cInNwZWxsYm9va1wiPlxyXG5cdFx0PHRhYmxlPlxyXG5cdFx0PHRyIHYtZm9yPVwicyBpbiB2aWV3aW5nXCIgOmtleT1cInMuaWRcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCAkZXZlbnQsIHMgKVwiPlxyXG5cclxuXHRcdFx0PHRkPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtaWY9XCJzLm93bmVkJiZzLmF0dGFjayYmbGlzdC5jYW5BZGQocylcIiBAY2xpY2s9XCJhZGRMaXN0KHMpXCI+TWVtb3JpemU8L2J1dHRvbj5cclxuXHRcdFx0XHQ8IS0tPGJ1dHRvbiB2LWlmPVwicy5vd25lZCYmcy5hdHRhY2tcIiBAY2xpY2s9XCJlbWl0KCdwcmltYXJ5JyxzKVwiPlxyXG5cdFx0XHRcdHt7IHN0YXRlLnBsYXllci5wcmltYXJ5PT09cyA/ICdVbmVxdWlwJyA6ICdQcmltYXJ5JyB9fVxyXG5cdFx0XHRcdDwvYnV0dG9uPi0tPlxyXG5cclxuXHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQ+e3sgcy5uYW1lIH19PC90ZD5cclxuXHRcdFx0PHRkPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHYtaWY9XCJzLm93bmVkXCIgQGNsaWNrPVwiZW1pdCgnc3BlbGwnLCBzKVwiIDpkaXNhYmxlZD1cIiF1c2FibGUocylcIj5DYXN0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gdi1lbHNlIEBjbGljaz1cImVtaXQoJ2J1eScsIHMpXCIgOmRpc2FibGVkPVwiIXVzYWJsZShzKVwiPkxlYXJuPC9idXR0b24+XHJcblxyXG5cdFx0XHQ8L3RkPlxyXG5cclxuXHRcdDwvdHI+XHJcblx0XHQ8L3RhYmxlPlxyXG5cdDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4uc3BlbGxib29rIHtcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zcGVsbGJvb2sgdGFibGUgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IHJvdyB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cclxuLnNwZWxsYm9vayB0YWJsZSB0ciB7IGRpc3BsYXk6ZmxleDsgZmxleC1iYXNpczogNDglOyB9XHJcbi5zcGVsbGJvb2sgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDEpLCAuc3BlbGxib29rIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgzKSB7XHJcblx0ZmxleC1iYXNpczogMjAlOyBvcmRlcjogMzsgfVxyXG4uc3BlbGxib29rIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7IGZsZXg6IDE7IG9yZGVyOiAxO31cclxuLnNwZWxsYm9vayB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMykgeyBmbGV4LWJhc2lzOiAyMCU7IG9yZGVyOiAyOyB9XHJcbi5zcGVsbGJvb2sgdGFibGUgdGQgeyBkaXNwbGF5OiBmbGV4OyB9XHJcblxyXG4gZGl2LnNwZWxsYm9vayB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmc6IDA7IH1cclxuZGl2LnNwZWxsYm9vayB7IG1hcmdpbjogMDsgcGFkZGluZzogdmFyKC0tbWVkaXVtLWdhcCk7IH1cclxuIGRpdi5zcGVsbGJvb2sgdGFibGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KCAyNTZweCwgMWZyICkgcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCAyNTZweCwgMWZyICkpO1xyXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAgMWZyO1xyXG4gICAgfVxyXG4gICAgZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgeyBwYWRkaW5nOiB2YXIoLS1zbWFsbC1nYXApOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgfVxyXG4gICAgZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDEpLFxyXG4gICAgZGl2LnNwZWxsYm9vayAgdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpeyBmbGV4OiAxOyB9XHJcbiAgICBkaXYuc3BlbGxib29rICB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMil7IGZsZXg6IDI7IH1cclxuXHRkaXYuc3BlbGxib29rIGJ1dHRvbiB7IGZsZXg6IDE7IGZvbnQtc2l6ZTogdmFyKC0tY29tcGFjdC1zbWFsbC1mb250KTsgbWFyZ2luOiAwOyB9XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRwcm9wczpbJ2xpc3QnXSxcclxuXHRtZXRob2RzOntcclxuXHJcblx0XHRyZW1vdmUoaXQpIHtcclxuXHRcdFx0dGhpcy5saXN0LnJlbW92ZShpdCk7XHJcblxyXG5cdFx0fSxcclxuXHRcdGFkZChpdCkge1xyXG5cdFx0XHR0aGlzLmxpc3QuYWRkKGl0KTtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHRjb21wdXRlZDp7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cInNwZWxsbGlzdFwiPlxyXG5cclxuXHQ8c3Bhbj5NYXggTGV2ZWxzOiB7eyBsaXN0LnVzZWQgKyAnIC8gJyArIE1hdGguZmxvb3IoIGxpc3QubWF4LnZhbHVlICkgfX08L3NwYW4+XHJcblx0PHNwYW4gY2xhc3M9J3dhcm4tdGV4dCcgdi1pZj1cImxpc3QuZnVsbCgpXCI+U3BlbGxsaXN0IGlzIEZ1bGw8L3NwYW4+XHJcblx0PGRpdiB2LWZvcj1cIihpdCxpbmQpIGluIGxpc3QuaXRlbXNcIiA6a2V5PVwiaW5kXCI+XHJcblx0XHQ8c3Bhbj57eyBpdC5uYW1lIH19PC9zcGFuPjxidXR0b24gQGNsaWNrPVwicmVtb3ZlKGl0KVwiPlJlbW92ZTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gIXRoaXMubWluSXRlbXMgfHwgdGhpcy5pdGVtcy5sZW5ndGggPj0gdGhpcy5taW5JdGVtc1xuICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXItYm94XCIgfSwgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBfdm0uZWxtSWQoXCJmaWx0ZXJcIikgfSB9LCBbX3ZtLl92KFwiRmluZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmluZFRleHQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmluZFRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5lbG1JZChcImZpbHRlclwiKSwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbmRUZXh0IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLmZpbmRUZXh0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGVsbHNcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWx0ZXJzXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJmaWx0ZXJib3hcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uc3BlbGxzIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyZWQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5maWx0ZXJlZCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtbGJsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmVsbUlkKFwibGV2ZWxcIikgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkxldmVsXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1pbkxldmVsLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWluTGV2ZWxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGV2ZWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0uZWxtSWQoXCJsZXZlbFwiKSxcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgICAgc2l6ZTogXCI1XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm1pbkxldmVsIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLm1pbkxldmVsID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uc2Nob29scywgZnVuY3Rpb24ocCwgaykge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaywgc3RhdGljQ2xhc3M6IFwiY2hlY2tzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmlld1NjaG9vbHMsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZpZXdTY2hvb2xzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IF92bS5lbG1JZChcImNoa1wiICsgaykgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogayxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS52aWV3U2Nob29scylcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS52aWV3U2Nob29scywgaykgPiAtMVxuICAgICAgICAgICAgICAgICAgOiBfdm0udmlld1NjaG9vbHNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS52aWV3U2Nob29scyxcbiAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gayxcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udmlld1NjaG9vbHMgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS52aWV3U2Nob29scyA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS52aWV3U2Nob29scyA9ICQkY1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogX3ZtLmVsbUlkKFwiY2hrXCIgKyBrKSB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhrKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfSB9LCBbX3ZtLl92KFwiTWVtb3JpemVkXCIpXSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJib29rXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcGVsbGJvb2tcIixcbiAgICAgICAgICBhdHRyczogeyB2aWV3aW5nOiBfdm0udmlld2luZyB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93TGlzdCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dMaXN0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGVsbGxpc3RcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcGVsbGxpc3RcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbGlzdDogX3ZtLmxpc3QgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwZWxsYm9va1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwidGFibGVcIixcbiAgICAgIF92bS5fbChfdm0udmlld2luZywgZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogcy5pZCxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgcy5vd25lZCAmJiBzLmF0dGFjayAmJiBfdm0ubGlzdC5jYW5BZGQocylcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRMaXN0KHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWVtb3JpemVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhzLm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICBzLm93bmVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLnVzYWJsZShzKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcInNwZWxsXCIsIHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FzdFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0udXNhYmxlKHMpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiYnV5XCIsIHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTGVhcm5cIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNwZWxsbGlzdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiTWF4IExldmVsczogXCIgK1xuICAgICAgICAgICAgX3ZtLl9zKF92bS5saXN0LnVzZWQgKyBcIiAvIFwiICsgTWF0aC5mbG9vcihfdm0ubGlzdC5tYXgudmFsdWUpKVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubGlzdC5mdWxsKClcbiAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJTcGVsbGxpc3QgaXMgRnVsbFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5saXN0Lml0ZW1zLCBmdW5jdGlvbihpdCwgaW5kKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXQubmFtZSkpXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlKGl0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2ZpbHRlcmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmQwZTBiZWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZDBlMGJlYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZDBlMGJlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZDBlMGJlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZDBlMGJlYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVyYm94LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9maWx0ZXJib3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmQwZTBiZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmlsdGVyYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZDBlMGJlYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3BlbGxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zcGVsbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NwZWxscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTk2NzM2MmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOTY3MzYyYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOTY3MzYyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOTY3MzYyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc3BlbGxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOTY3MzYyYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxOTY3MzYyYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3VpL3NlY3Rpb25zL3NwZWxscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3BlbGxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5NjczNjJjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTk2NzM2MmMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3BlbGxib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZhZGNiMGEyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmFkY2IwYTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmFkY2IwYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmFkY2IwYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFkY2IwYTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmFkY2IwYTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9zcGVsbGJvb2sudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsYm9vay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YWRjYjBhMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhZGNiMGEyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zcGVsbGxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI5NmI4YTM4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImI5NmI4YTM4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcR2l0RGV2XFxcXGFyY2FudW1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjk2YjhhMzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjk2YjhhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjk2YjhhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjk2YjhhMzgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjk2YjhhMzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9zcGVsbGxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcGVsbGxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NwZWxsbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjk2YjhhMzgmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9