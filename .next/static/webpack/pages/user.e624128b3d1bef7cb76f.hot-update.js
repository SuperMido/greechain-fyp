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
      my: 8,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        backgroundColor: "lavender",
        width: "90%",
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
        backgroundColor: "lavender",
        width: "90%",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQUMsS0FBSyxFQUFJO0FBQ2xCLHNCQUNJLDhEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLE9BQWhCO0FBQXdCLFNBQUssRUFBQyxNQUE5QjtBQUFxQyxnQkFBWSxFQUFDLFFBQWxEO0FBQTJELFNBQUssRUFBQyxRQUFqRTtBQUEwRSxrQkFBYyxFQUFDLFFBQXpGO0FBQUEsMkJBQ0EsOERBQUMsaURBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBLDhCQUVBLDhEQUFDLGlEQUFEO0FBQUssdUJBQWUsRUFBQyxVQUFyQjtBQUFnQyxhQUFLLEVBQUMsS0FBdEM7QUFBNEMsaUJBQVMsRUFBQyxRQUF0RDtBQUFBLGdDQUNJLDhEQUFDLHFEQUFEO0FBQVMsWUFBRSxFQUFDLElBQVo7QUFBaUIsY0FBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkEsZUFNQSw4REFBQyxpREFBRDtBQUFLLHVCQUFlLEVBQUMsVUFBckI7QUFBZ0MsYUFBSyxFQUFDLEtBQXRDO0FBQTRDLGlCQUFTLEVBQUMsUUFBdEQ7QUFBQSxnQ0FDSSw4REFBQyxxREFBRDtBQUFTLFlBQUUsRUFBQyxJQUFaO0FBQWlCLGNBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQWpCRDs7QUFtQkEsK0RBQWVELElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci5lNjI0MTI4YjNkMWJlZjdjYjc2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIEltYWdlLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuY29uc3QgdXNlciA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXggbWluSGVpZ2h0PVwiMTAwcHhcIiB3aWR0aD1cIjEwMCVcIiBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PSdjZW50ZXInPlxyXG4gICAgICAgIDxCb3ggbXk9ezh9PlxyXG5cclxuICAgICAgICA8Qm94IGJhY2tncm91bmRDb2xvcj1cImxhdmVuZGVyXCIgd2lkdGg9XCI5MCVcIiB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibWRcIj5OYW1lIGhlcmU8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0PktleSBoZXJlPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggYmFja2dyb3VuZENvbG9yPVwibGF2ZW5kZXJcIiB3aWR0aD1cIjkwJVwiIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJtZFwiPk5hbWUgaGVyZTwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQ+S2V5IGhlcmU8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9