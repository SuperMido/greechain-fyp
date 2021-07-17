self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "M:\\greechain\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var App = function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    theme: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginArea, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = App;

var LoginArea = function LoginArea() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    minHeight: "100vh",
    width: "full",
    align: "center",
    justifyContent: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      borderWidth: 1,
      px: 4,
      width: "full",
      maxWidth: "500px",
      borderRadius: 4,
      textAlign: "center",
      boxShadow: "lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeSelector, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        p: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginHeader, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginForm, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_c2 = LoginArea;

var ThemeSelector = function ThemeSelector() {
  _s();

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    textAlign: "right",
    py: 4,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
      icon: colorMode === 'light' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 39
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 54
      }, _this),
      onClick: toggleColorMode,
      variant: "ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, _this);
};

_s(ThemeSelector, "uURyIwMgIfFLStF4nJMrxbb6o/4=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode];
});

_c3 = ThemeSelector;

var LoginHeader = function LoginHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    textAlign: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
      src: "https://bit.ly/sage-adebayo",
      boxSize: "100px",
      objectFit: "cover",
      alt: "Segun Adebayo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      children: "Sign In to Your Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
      children: "Something i will write it later !!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_c4 = LoginHeader;

var LoginForm = function LoginForm() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    my: 8,
    textAlign: "left",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        colorScheme: "purple",
        width: "full",
        mt: 4,
        children: "Get MetaMask"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        colorScheme: "messenger",
        width: "full",
        mt: 4,
        children: "Log In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
};

_c5 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "LoginArea");
$RefreshReg$(_c3, "ThemeSelector");
$RefreshReg$(_c4, "LoginHeader");
$RefreshReg$(_c5, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwidGhlbWUiLCJMb2dpbkFyZWEiLCJUaGVtZVNlbGVjdG9yIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwiTG9naW5IZWFkZXIiLCJMb2dpbkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsc0JBQ0UsOERBQUMsMkRBQUQ7QUFBZSxTQUFLLEVBQUVDLG1EQUF0QjtBQUFBLDRCQUNJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FQRDs7S0FBTUQsRzs7QUFTTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLE9BQWhCO0FBQXdCLFNBQUssRUFBQyxNQUE5QjtBQUFxQyxTQUFLLEVBQUMsUUFBM0M7QUFBb0Qsa0JBQWMsRUFBQyxRQUFuRTtBQUFBLDJCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsaUJBQVcsRUFBRSxDQURmO0FBRUUsUUFBRSxFQUFFLENBRk47QUFHRSxXQUFLLEVBQUMsTUFIUjtBQUlFLGNBQVEsRUFBQyxPQUpYO0FBS0Usa0JBQVksRUFBRSxDQUxoQjtBQU1FLGVBQVMsRUFBQyxRQU5aO0FBT0UsZUFBUyxFQUFDLElBUFo7QUFBQSw4QkFTRSw4REFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLDhEQUFDLGlEQUFEO0FBQUssU0FBQyxFQUFFLENBQVI7QUFBQSxnQ0FDRSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJEOztNQUFNQSxTOztBQXNCTixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxzQkFDYUMsOERBQVksRUFEekI7QUFBQSxNQUNsQkMsU0FEa0IsaUJBQ2xCQSxTQURrQjtBQUFBLE1BQ1BDLGVBRE8saUJBQ1BBLGVBRE87O0FBRzFCLHNCQUNFLDhEQUFDLGlEQUFEO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBdUIsTUFBRSxFQUFFLENBQTNCO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUVELFNBQVMsS0FBSyxPQUFkLGdCQUF3Qiw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXhCLGdCQUF1Qyw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRC9DO0FBRUUsYUFBTyxFQUFFQyxlQUZYO0FBR0UsYUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBWkQ7O0dBQU1ILGE7VUFDbUNDLDBEOzs7TUFEbkNELGE7O0FBY04sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixzQkFDRSw4REFBQyxpREFBRDtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUMsNkJBQVg7QUFBeUMsYUFBTyxFQUFDLE9BQWpEO0FBQXlELGVBQVMsRUFBQyxPQUFuRTtBQUEyRSxTQUFHLEVBQUM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZEOztNQUFNQSxXOztBQVlOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsc0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0UsOERBQUMsb0RBQUQ7QUFBUSxtQkFBVyxFQUFDLFFBQXBCO0FBQThCLGFBQUssRUFBQyxNQUFwQztBQUEyQyxVQUFFLEVBQUUsQ0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLG9EQUFEO0FBQVEsbUJBQVcsRUFBQyxXQUFwQjtBQUFpQyxhQUFLLEVBQUMsTUFBdkM7QUFBOEMsVUFBRSxFQUFFLENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7TUFBTUEsUztBQVdOLCtEQUFlUixHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlZWE5OGE2YzNkMzFiOWZhZTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgVGhlbWVQcm92aWRlcixcclxuICB0aGVtZSxcclxuICBDU1NSZXNldCxcclxuICBCb3gsXHJcbiAgRmxleCxcclxuICBJY29uQnV0dG9uLFxyXG4gIHVzZUNvbG9yTW9kZSxcclxuICBIZWFkaW5nLFxyXG4gIFRleHQsXHJcbiAgSW1hZ2UsXHJcbiAgQnV0dG9uXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmltcG9ydCB7IE1vb25JY29uLCBTdW5JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8Q1NTUmVzZXQgLz5cclxuICAgICAgICA8TG9naW5BcmVhIC8+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBMb2dpbkFyZWEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IG1pbkhlaWdodD0nMTAwdmgnIHdpZHRoPSdmdWxsJyBhbGlnbj0nY2VudGVyJyBqdXN0aWZ5Q29udGVudD0nY2VudGVyJz5cclxuICAgICAgPEJveCBcclxuICAgICAgICBib3JkZXJXaWR0aD17MX1cclxuICAgICAgICBweD17NH1cclxuICAgICAgICB3aWR0aD0nZnVsbCdcclxuICAgICAgICBtYXhXaWR0aD0nNTAwcHgnXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXs0fVxyXG4gICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgIGJveFNoYWRvdz0nbGcnXHJcbiAgICAgID5cclxuICAgICAgICA8VGhlbWVTZWxlY3RvciAvPlxyXG4gICAgICAgIDxCb3ggcD17NH0+XHJcbiAgICAgICAgICA8TG9naW5IZWFkZXIgLz5cclxuICAgICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBUaGVtZVNlbGVjdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHRleHRBbGlnbj0ncmlnaHQnIHB5PXs0fT5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBpY29uPXtjb2xvck1vZGUgPT09ICdsaWdodCcgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XHJcbiAgICAgICAgdmFyaWFudD0nZ2hvc3QnXHJcbiAgICAgIC8+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IExvZ2luSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9iaXQubHkvc2FnZS1hZGViYXlvXCIgYm94U2l6ZT1cIjEwMHB4XCIgb2JqZWN0Rml0PVwiY292ZXJcIiBhbHQ9XCJTZWd1biBBZGViYXlvXCIgLz5cclxuICAgICAgPEhlYWRpbmc+U2lnbiBJbiB0byBZb3VyIEFjY291bnQ8L0hlYWRpbmc+XHJcbiAgICAgIDxUZXh0PlxyXG4gICAgICAgIFNvbWV0aGluZyBpIHdpbGwgd3JpdGUgaXQgbGF0ZXIgISFcclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbXk9ezh9IHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJwdXJwbGVcIiAgd2lkdGg9J2Z1bGwnIG10PXs0fT5HZXQgTWV0YU1hc2s8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwibWVzc2VuZ2VyXCIgIHdpZHRoPSdmdWxsJyBtdD17NH0+TG9nIEluPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==