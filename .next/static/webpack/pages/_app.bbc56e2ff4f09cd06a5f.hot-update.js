webpackHotUpdate_N_E("pages/_app",{

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pedro_Desktop_Pedro_UdemyReact_paginaVentaProductos_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./firebase/config.js");




var firebase = function firebase() {
  Object(C_Users_pedro_Desktop_Pedro_UdemyReact_paginaVentaProductos_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, firebase);

  if (!firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].apps.length) {
    //Si no hay una app inicializada entonces ...
    firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(_config__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
};

var firebase1 = new firebase();
/* harmony default export */ __webpack_exports__["default"] = (firebase);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuanMiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiZmlyZWJhc2UxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztJQUdNQSxRLEdBQ0Ysb0JBQWM7QUFBQTs7QUFDVixNQUFHLENBQUNDLG9EQUFHLENBQUNDLElBQUosQ0FBU0MsTUFBYixFQUFvQjtBQUFHO0FBQ25CRix3REFBRyxDQUFDRyxhQUFKLENBQWtCQywrQ0FBbEI7QUFDSDtBQUNKLEM7O0FBSUwsSUFBTUMsU0FBUyxHQUFHLElBQUlOLFFBQUosRUFBbEI7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYmM1NmUyZmY0ZjA5Y2QwNmE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5pbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5cclxuY2xhc3MgZmlyZWJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYoIWFwcC5hcHBzLmxlbmd0aCl7ICAvL1NpIG5vIGhheSB1bmEgYXBwIGluaWNpYWxpemFkYSBlbnRvbmNlcyAuLi5cclxuICAgICAgICAgICAgYXBwLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgZmlyZWJhc2UxID0gbmV3IGZpcmViYXNlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTsiXSwic291cmNlUm9vdCI6IiJ9