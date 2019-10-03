(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["equip-ui"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ntr.equip-slot[data-v-4284ca61] {\r\n\tdisplay:flex;\r\n\tmargin: 2px 0px;\r\n\tmax-width: 30%;\n}\ntr.equip-slot button[data-v-4284ca61] {\r\n\tmargin-left: 10px;\r\n\tpadding: 6px;\n}\ntd.slot-item[data-v-4284ca61] {\r\n\tflex-basis:35%;\r\n\tflex-shrink: 1;\r\n\tmin-width: 42px;\n}\ntr.equip-slot[data-v-4284ca61] {\r\n\theight:42px;\n}\ntd.slot-name[data-v-4284ca61] {\r\n\tfont-weight: bold;\n}\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/equip.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({

	props:['equip'],
	methods:{

	}

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=template&id=4284ca61&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/sections/equip.vue?vue&type=template&id=4284ca61&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "table",
    { staticClass: "equip" },
    _vm._l(_vm.equip.slots, function(slot, p) {
      return _c("tr", { key: p, staticClass: "equip-slot" }, [
        _c("td", { staticClass: "slot-name" }, [
          _vm._v(_vm._s(slot.name + ":"))
        ]),
        _vm._v(" "),
        slot.empty()
          ? _c("td", { staticClass: "slot-item" })
          : slot.multi
          ? _c(
              "td",
              { staticClass: "slot-item" },
              _vm._l(slot.item, function(it) {
                return _c(
                  "div",
                  {
                    key: it.id,
                    on: {
                      "!mouseenter": function($event) {
                        $event.stopPropagation()
                        return _vm.emit("itemover", $event, it)
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "item-name" }, [
                      _vm._v(_vm._s(it.name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.emit("unequip", slot, it)
                          }
                        }
                      },
                      [_vm._v("Unequip")]
                    )
                  ]
                )
              }),
              0
            )
          : _c("td", { staticClass: "slot-item" }, [
              _c(
                "div",
                {
                  on: {
                    "!mouseenter": function($event) {
                      $event.stopPropagation()
                      return _vm.emit("itemover", $event, slot.item)
                    }
                  }
                },
                [
                  _c("span", { staticClass: "item-name" }, [
                    _vm._v(_vm._s(slot.item.name))
                  ]),
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.emit("unequip", slot, slot.item)
                        }
                      }
                    },
                    [_vm._v("Unequip")]
                  )
                ]
              )
            ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/ui/sections/equip.vue":
/*!***********************************!*\
  !*** ./src/ui/sections/equip.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equip_vue_vue_type_template_id_4284ca61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equip.vue?vue&type=template&id=4284ca61&scoped=true& */ "./src/ui/sections/equip.vue?vue&type=template&id=4284ca61&scoped=true&");
/* harmony import */ var _equip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equip.vue?vue&type=script&lang=js& */ "./src/ui/sections/equip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _equip_vue_vue_type_style_index_0_id_4284ca61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css& */ "./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _equip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _equip_vue_vue_type_template_id_4284ca61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _equip_vue_vue_type_template_id_4284ca61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4284ca61",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui/sections/equip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/sections/equip.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/ui/sections/equip.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./equip.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_style_index_0_id_4284ca61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=style&index=0&id=4284ca61&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_style_index_0_id_4284ca61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_style_index_0_id_4284ca61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_style_index_0_id_4284ca61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_style_index_0_id_4284ca61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_style_index_0_id_4284ca61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/sections/equip.vue?vue&type=template&id=4284ca61&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/ui/sections/equip.vue?vue&type=template&id=4284ca61&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_template_id_4284ca61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./equip.vue?vue&type=template&id=4284ca61&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/ui/sections/equip.vue?vue&type=template&id=4284ca61&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_template_id_4284ca61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_equip_vue_vue_type_template_id_4284ca61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlPzRiMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL2VxdWlwLnZ1ZT8yODkzIiwid2VicGFjazovLy9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9lcXVpcC52dWU/ZTdkMiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9lcXVpcC52dWU/MWViYiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlPzhhZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL2VxdWlwLnZ1ZT83ZTk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxxQ0FBcUMsbUJBQW1CLHNCQUFzQixxQkFBcUIsR0FBRyx5Q0FBeUMsd0JBQXdCLG1CQUFtQixHQUFHLGlDQUFpQyxxQkFBcUIscUJBQXFCLHNCQUFzQixHQUFHLGtDQUFrQyxrQkFBa0IsR0FBRyxpQ0FBaUMsd0JBQXdCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEM2EsY0FBYyxtQkFBTyxDQUFDLGdkQUF1UDs7QUFFN1EsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRCxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDhCQUE4QiwyQkFBMkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR3pGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTJILENBQWdCLGtNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9JO0FBQUE7QUFBQTtBQUFBO0FBQW9ULENBQWdCLCtWQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZXYvZXF1aXAtdWkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG50ci5lcXVpcC1zbG90W2RhdGEtdi00Mjg0Y2E2MV0ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRtYXJnaW46IDJweCAwcHg7XFxyXFxuXFx0bWF4LXdpZHRoOiAzMCU7XFxufVxcbnRyLmVxdWlwLXNsb3QgYnV0dG9uW2RhdGEtdi00Mjg0Y2E2MV0ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdHBhZGRpbmc6IDZweDtcXG59XFxudGQuc2xvdC1pdGVtW2RhdGEtdi00Mjg0Y2E2MV0ge1xcclxcblxcdGZsZXgtYmFzaXM6MzUlO1xcclxcblxcdGZsZXgtc2hyaW5rOiAxO1xcclxcblxcdG1pbi13aWR0aDogNDJweDtcXG59XFxudHIuZXF1aXAtc2xvdFtkYXRhLXYtNDI4NGNhNjFdIHtcXHJcXG5cXHRoZWlnaHQ6NDJweDtcXG59XFxudGQuc2xvdC1uYW1lW2RhdGEtdi00Mjg0Y2E2MV0ge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI4NGNhNjEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI4NGNhNjEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0cHJvcHM6WydlcXVpcCddLFxyXG5cdG1ldGhvZHM6e1xyXG5cclxuXHR9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuXHJcblx0PHRhYmxlIGNsYXNzPVwiZXF1aXBcIj5cclxuXHJcblx0XHQ8dHIgY2xhc3M9XCJlcXVpcC1zbG90XCIgdi1mb3I9XCIoc2xvdCxwKSBpbiBlcXVpcC5zbG90c1wiIDprZXk9XCJwXCI+XHJcblx0XHRcdDx0ZCBjbGFzcz1cInNsb3QtbmFtZVwiPnt7IHNsb3QubmFtZSArICc6JyB9fTwvdGQ+XHJcblx0XHRcdDx0ZCBjbGFzcz1cInNsb3QtaXRlbVwiIHYtaWY9XCJzbG90LmVtcHR5KClcIj48L3RkPlxyXG5cdFx0XHQ8dGQgY2xhc3M9XCJzbG90LWl0ZW1cIiB2LWVsc2UtaWY9XCJzbG90Lm11bHRpXCI+XHJcblxyXG5cdFx0XHRcdDxkaXYgdi1mb3I9XCJpdCBpbiBzbG90Lml0ZW1cIiA6a2V5PVwiaXQuaWRcIiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCRldmVudCxpdClcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+e3sgaXQubmFtZSB9fTwvc3Bhbj4gPGJ1dHRvbiBAY2xpY2s9XCJlbWl0KCd1bmVxdWlwJywgc2xvdCwgaXQpXCI+VW5lcXVpcDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3RkPlxyXG5cdFx0XHQ8dGQgY2xhc3M9XCJzbG90LWl0ZW1cIiB2LWVsc2U+XHJcblx0XHRcdFx0PGRpdiBAbW91c2VlbnRlci5jYXB0dXJlLnN0b3A9XCJlbWl0KCAnaXRlbW92ZXInLCRldmVudCxzbG90Lml0ZW0pXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPnt7IHNsb3QuaXRlbS5uYW1lIH19PC9zcGFuPjxidXR0b24gQGNsaWNrPVwiZW1pdCgndW5lcXVpcCcsIHNsb3QsIHNsb3QuaXRlbSApXCI+VW5lcXVpcDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC90ZD5cclxuXHRcdDwvdHI+XHJcblxyXG5cdDwvdGFibGU+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcblxyXG50ci5lcXVpcC1zbG90IHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0bWFyZ2luOiAycHggMHB4O1xyXG5cdG1heC13aWR0aDogMzAlO1xyXG59XHJcblxyXG50ci5lcXVpcC1zbG90IGJ1dHRvbiB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0cGFkZGluZzogNnB4O1xyXG59XHJcblxyXG50ZC5zbG90LWl0ZW0ge1xyXG5cdGZsZXgtYmFzaXM6MzUlO1xyXG5cdGZsZXgtc2hyaW5rOiAxO1xyXG5cdG1pbi13aWR0aDogNDJweDtcclxufVxyXG50ci5lcXVpcC1zbG90IHtcclxuXHRoZWlnaHQ6NDJweDtcclxufVxyXG5cclxudGQuc2xvdC1uYW1lIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRhYmxlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlcXVpcFwiIH0sXG4gICAgX3ZtLl9sKF92bS5lcXVpcC5zbG90cywgZnVuY3Rpb24oc2xvdCwgcCkge1xuICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHAsIHN0YXRpY0NsYXNzOiBcImVxdWlwLXNsb3RcIiB9LCBbXG4gICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJzbG90LW5hbWVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhzbG90Lm5hbWUgKyBcIjpcIikpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBzbG90LmVtcHR5KClcbiAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJzbG90LWl0ZW1cIiB9KVxuICAgICAgICAgIDogc2xvdC5tdWx0aVxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbG90LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woc2xvdC5pdGVtLCBmdW5jdGlvbihpdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaXQuaWQsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCIhbW91c2VlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBpdClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwidW5lcXVpcFwiLCBzbG90LCBpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVuZXF1aXBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwic2xvdC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwiaXRlbW92ZXJcIiwgJGV2ZW50LCBzbG90Lml0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzbG90Lml0ZW0ubmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0KFwidW5lcXVpcFwiLCBzbG90LCBzbG90Lml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVW5lcXVpcFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICBdKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0Mjg0Y2E2MVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdERldlxcXFxhcmNhbnVtXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyODRjYTYxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyODRjYTYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyODRjYTYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9lcXVpcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI4NGNhNjEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDI4NGNhNjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy91aS9zZWN0aW9ucy9lcXVpcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI4NGNhNjEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==