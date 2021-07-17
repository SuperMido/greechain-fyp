self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "M:\\greechain\\pages\\user.js",
    _this = undefined;




var user = function user(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    minHeight: "100px",
    width: "100%",
    alignContent: "center",
    align: "center",
    justifyContent: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      width: "90%",
      boxShadow: "lg",
      borderRadius: 8,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        backgroundColor: "lavender",
        width: "full",
        borderRadius: 8,
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          as: "h4",
          size: "md",
          children: "Name here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
          children: "Key here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        backgroundColor: "white",
        width: "full",
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          as: "h4",
          size: "md",
          children: "Name here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
          children: "Key here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (user);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsS0FBSyxFQUFJO0FBQ2xCLHNCQUNJLDhEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLE9BQWhCO0FBQXdCLFNBQUssRUFBQyxNQUE5QjtBQUFxQyxnQkFBWSxFQUFDLFFBQWxEO0FBQTJELFNBQUssRUFBQyxRQUFqRTtBQUEwRSxrQkFBYyxFQUFDLFFBQXpGO0FBQUEsMkJBQ0EsOERBQUMsaURBQUQ7QUFBSyxXQUFLLEVBQUMsS0FBWDtBQUFpQixlQUFTLEVBQUMsSUFBM0I7QUFBZ0Msa0JBQVksRUFBRSxDQUE5QztBQUFBLDhCQUVBLDhEQUFDLGlEQUFEO0FBQUssdUJBQWUsRUFBQyxVQUFyQjtBQUFnQyxhQUFLLEVBQUMsTUFBdEM7QUFBNkMsb0JBQVksRUFBRSxDQUEzRDtBQUE4RCxpQkFBUyxFQUFDLFFBQXhFO0FBQUEsZ0NBQ0ksOERBQUMscURBQUQ7QUFBUyxZQUFFLEVBQUMsSUFBWjtBQUFpQixjQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxlQU1BLDhEQUFDLGlEQUFEO0FBQUssdUJBQWUsRUFBQyxPQUFyQjtBQUE2QixhQUFLLEVBQUMsTUFBbkM7QUFBMEMsaUJBQVMsRUFBQyxRQUFwRDtBQUFBLGdDQUNJLDhEQUFDLHFEQUFEO0FBQVMsWUFBRSxFQUFDLElBQVo7QUFBaUIsY0FBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBakJEOztBQW1CQSwrREFBZUQsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyLjFhMjlhYTgzYzkwNDk1ZmIxM2JkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgSW1hZ2UsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5jb25zdCB1c2VyID0gcHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleCBtaW5IZWlnaHQ9XCIxMDBweFwiIHdpZHRoPVwiMTAwJVwiIGFsaWduQ29udGVudD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgPEJveCB3aWR0aD1cIjkwJVwiIGJveFNoYWRvdz0nbGcnIGJvcmRlclJhZGl1cz17OH0+XHJcblxyXG4gICAgICAgIDxCb3ggYmFja2dyb3VuZENvbG9yPVwibGF2ZW5kZXJcIiB3aWR0aD1cImZ1bGxcIiBib3JkZXJSYWRpdXM9ezh9IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJtZFwiPk5hbWUgaGVyZTwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+S2V5IGhlcmU8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiIHdpZHRoPVwiZnVsbFwiIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJtZFwiPk5hbWUgaGVyZTwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+S2V5IGhlcmU8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9