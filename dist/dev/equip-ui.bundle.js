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

	props:['equip']

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlPzRiMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL2VxdWlwLnZ1ZT8yODkzIiwid2VicGFjazovLy9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9lcXVpcC52dWU/ZTdkMiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlIiwid2VicGFjazovLy8uL3NyYy91aS9zZWN0aW9ucy9lcXVpcC52dWU/MWViYiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlPzhhZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3NlY3Rpb25zL2VxdWlwLnZ1ZT83ZTk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxxQ0FBcUMsbUJBQW1CLHNCQUFzQixxQkFBcUIsR0FBRyx5Q0FBeUMsd0JBQXdCLG1CQUFtQixHQUFHLGlDQUFpQyxxQkFBcUIscUJBQXFCLHNCQUFzQixHQUFHLGtDQUFrQyxrQkFBa0IsR0FBRyxpQ0FBaUMsd0JBQXdCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEM2EsY0FBYyxtQkFBTyxDQUFDLGdkQUF1UDs7QUFFN1EsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUVmOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QjtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Qsa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUd6RjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEySCxDQUFnQixrTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvSTtBQUFBO0FBQUE7QUFBQTtBQUFvVCxDQUFnQiwrVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4VTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZGV2L2VxdWlwLXVpLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudHIuZXF1aXAtc2xvdFtkYXRhLXYtNDI4NGNhNjFdIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0bWFyZ2luOiAycHggMHB4O1xcclxcblxcdG1heC13aWR0aDogMzAlO1xcbn1cXG50ci5lcXVpcC1zbG90IGJ1dHRvbltkYXRhLXYtNDI4NGNhNjFdIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG5cXHRwYWRkaW5nOiA2cHg7XFxufVxcbnRkLnNsb3QtaXRlbVtkYXRhLXYtNDI4NGNhNjFdIHtcXHJcXG5cXHRmbGV4LWJhc2lzOjM1JTtcXHJcXG5cXHRmbGV4LXNocmluazogMTtcXHJcXG5cXHRtaW4td2lkdGg6IDQycHg7XFxufVxcbnRyLmVxdWlwLXNsb3RbZGF0YS12LTQyODRjYTYxXSB7XFxyXFxuXFx0aGVpZ2h0OjQycHg7XFxufVxcbnRkLnNsb3QtbmFtZVtkYXRhLXYtNDI4NGNhNjFdIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lcXVpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Mjg0Y2E2MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdHByb3BzOlsnZXF1aXAnXVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcblxyXG5cdDx0YWJsZSBjbGFzcz1cImVxdWlwXCI+XHJcblxyXG5cdFx0PHRyIGNsYXNzPVwiZXF1aXAtc2xvdFwiIHYtZm9yPVwiKHNsb3QscCkgaW4gZXF1aXAuc2xvdHNcIiA6a2V5PVwicFwiPlxyXG5cdFx0XHQ8dGQgY2xhc3M9XCJzbG90LW5hbWVcIj57eyBzbG90Lm5hbWUgKyAnOicgfX08L3RkPlxyXG5cdFx0XHQ8dGQgY2xhc3M9XCJzbG90LWl0ZW1cIiB2LWlmPVwic2xvdC5lbXB0eSgpXCI+PC90ZD5cclxuXHRcdFx0PHRkIGNsYXNzPVwic2xvdC1pdGVtXCIgdi1lbHNlLWlmPVwic2xvdC5tdWx0aVwiPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IHYtZm9yPVwiaXQgaW4gc2xvdC5pdGVtXCIgOmtleT1cIml0LmlkXCIgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQsaXQpXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPnt7IGl0Lm5hbWUgfX08L3NwYW4+IDxidXR0b24gQGNsaWNrPVwiZW1pdCgndW5lcXVpcCcsIHNsb3QsIGl0KVwiPlVuZXF1aXA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC90ZD5cclxuXHRcdFx0PHRkIGNsYXNzPVwic2xvdC1pdGVtXCIgdi1lbHNlPlxyXG5cdFx0XHRcdDxkaXYgQG1vdXNlZW50ZXIuY2FwdHVyZS5zdG9wPVwiZW1pdCggJ2l0ZW1vdmVyJywkZXZlbnQsc2xvdC5pdGVtKVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpdGVtLW5hbWVcIj57eyBzbG90Lml0ZW0ubmFtZSB9fTwvc3Bhbj48YnV0dG9uIEBjbGljaz1cImVtaXQoJ3VuZXF1aXAnLCBzbG90LCBzbG90Lml0ZW0gKVwiPlVuZXF1aXA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvdGQ+XHJcblx0XHQ8L3RyPlxyXG5cclxuXHQ8L3RhYmxlPlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG5cclxudHIuZXF1aXAtc2xvdCB7XHJcblx0ZGlzcGxheTpmbGV4O1xyXG5cdG1hcmdpbjogMnB4IDBweDtcclxuXHRtYXgtd2lkdGg6IDMwJTtcclxufVxyXG5cclxudHIuZXF1aXAtc2xvdCBidXR0b24ge1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxudGQuc2xvdC1pdGVtIHtcclxuXHRmbGV4LWJhc2lzOjM1JTtcclxuXHRmbGV4LXNocmluazogMTtcclxuXHRtaW4td2lkdGg6IDQycHg7XHJcbn1cclxudHIuZXF1aXAtc2xvdCB7XHJcblx0aGVpZ2h0OjQycHg7XHJcbn1cclxuXHJcbnRkLnNsb3QtbmFtZSB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0YWJsZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZXF1aXBcIiB9LFxuICAgIF92bS5fbChfdm0uZXF1aXAuc2xvdHMsIGZ1bmN0aW9uKHNsb3QsIHApIHtcbiAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBwLCBzdGF0aWNDbGFzczogXCJlcXVpcC1zbG90XCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwic2xvdC1uYW1lXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3Moc2xvdC5uYW1lICsgXCI6XCIpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgc2xvdC5lbXB0eSgpXG4gICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwic2xvdC1pdGVtXCIgfSlcbiAgICAgICAgICA6IHNsb3QubXVsdGlcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2xvdC1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKHNsb3QuaXRlbSwgZnVuY3Rpb24oaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGl0LmlkLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiIW1vdXNlZW50ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdC5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcInVuZXF1aXBcIiwgc2xvdCwgaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVbmVxdWlwXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInNsb3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBcIiFtb3VzZWVudGVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcIml0ZW1vdmVyXCIsICRldmVudCwgc2xvdC5pdGVtKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2xvdC5pdGVtLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdChcInVuZXF1aXBcIiwgc2xvdCwgc2xvdC5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlVuZXF1aXBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2VxdWlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Mjg0Y2E2MSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9lcXVpcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9lcXVpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Mjg0Y2E2MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDI4NGNhNjFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXREZXZcXFxcYXJjYW51bVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0Mjg0Y2E2MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0Mjg0Y2E2MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0Mjg0Y2E2MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZXF1aXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQyODRjYTYxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdWkvc2VjdGlvbnMvZXF1aXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lcXVpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Mjg0Y2E2MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyODRjYTYxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VxdWlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Mjg0Y2E2MSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=