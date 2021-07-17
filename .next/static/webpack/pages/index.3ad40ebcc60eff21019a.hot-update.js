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




var VARIANT_COLOR = 'teal';

var App = function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    theme: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginArea, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        p: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginHeader, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginForm, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
        lineNumber: 62,
        columnNumber: 39
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 54
      }, _this),
      onClick: toggleColorMode,
      variant: "ghost"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      children: "Sign In to Your Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
      children: "Something i will write it later !!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
        variantColor: VARIANT_COLOR,
        width: "full",
        mt: 4,
        children: "Get MetaMask"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variantColor: VARIANT_COLOR,
        width: "full",
        mt: 4,
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVkFSSUFOVF9DT0xPUiIsIkFwcCIsInRoZW1lIiwiTG9naW5BcmVhIiwiVGhlbWVTZWxlY3RvciIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsIkxvZ2luSGVhZGVyIiwiTG9naW5Gb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFtQkE7QUFFQSxJQUFNQSxhQUFhLEdBQUcsTUFBdEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixzQkFDRSw4REFBQywyREFBRDtBQUFlLFNBQUssRUFBRUMsbURBQXRCO0FBQUEsNEJBQ0ksOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQVBEOztLQUFNRCxHOztBQVNOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUMsT0FBaEI7QUFBd0IsU0FBSyxFQUFDLE1BQTlCO0FBQXFDLFNBQUssRUFBQyxRQUEzQztBQUFvRCxrQkFBYyxFQUFDLFFBQW5FO0FBQUEsMkJBQ0UsOERBQUMsaURBQUQ7QUFDRSxpQkFBVyxFQUFFLENBRGY7QUFFRSxRQUFFLEVBQUUsQ0FGTjtBQUdFLFdBQUssRUFBQyxNQUhSO0FBSUUsY0FBUSxFQUFDLE9BSlg7QUFLRSxrQkFBWSxFQUFFLENBTGhCO0FBTUUsZUFBUyxFQUFDLFFBTlo7QUFPRSxlQUFTLEVBQUMsSUFQWjtBQUFBLDhCQVNFLDhEQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLGVBVUUsOERBQUMsaURBQUQ7QUFBSyxTQUFDLEVBQUUsQ0FBUjtBQUFBLGdDQUNFLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FwQkQ7O01BQU1BLFM7O0FBc0JOLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLHNCQUNhQyw4REFBWSxFQUR6QjtBQUFBLE1BQ2xCQyxTQURrQixpQkFDbEJBLFNBRGtCO0FBQUEsTUFDUEMsZUFETyxpQkFDUEEsZUFETzs7QUFHMUIsc0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixNQUFFLEVBQUUsQ0FBM0I7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUNFLFVBQUksRUFBRUQsU0FBUyxLQUFLLE9BQWQsZ0JBQXdCLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeEIsZ0JBQXVDLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEL0M7QUFFRSxhQUFPLEVBQUVDLGVBRlg7QUFHRSxhQUFPLEVBQUM7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FaRDs7R0FBTUgsYTtVQUNtQ0MsMEQ7OztNQURuQ0QsYTs7QUFjTixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLHNCQUNFLDhEQUFDLGlEQUFEO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O01BQU1BLFc7O0FBV04sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixzQkFDRSw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRSw4REFBQyxvREFBRDtBQUFRLG9CQUFZLEVBQUVULGFBQXRCO0FBQXNDLGFBQUssRUFBQyxNQUE1QztBQUFtRCxVQUFFLEVBQUUsQ0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLG9EQUFEO0FBQVEsb0JBQVksRUFBRUEsYUFBdEI7QUFBc0MsYUFBSyxFQUFDLE1BQTVDO0FBQW1ELFVBQUUsRUFBRSxDQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O01BQU1TLFM7QUFXTiwrREFBZVIsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYWQ0MGViY2M2MGVmZjIxMDE5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgdGhlbWUsXHJcbiAgQ1NTUmVzZXQsXHJcbiAgQm94LFxyXG4gIEZsZXgsXHJcbiAgSWNvbkJ1dHRvbixcclxuICB1c2VDb2xvck1vZGUsXHJcbiAgSGVhZGluZyxcclxuICBUZXh0LFxyXG4gIExpbmssXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUxhYmVsLFxyXG4gIElucHV0LFxyXG4gIFN0YWNrLFxyXG4gIENoZWNrYm94LFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5pbXBvcnQgeyBNb29uSWNvbiwgU3VuSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXHJcblxyXG5jb25zdCBWQVJJQU5UX0NPTE9SID0gJ3RlYWwnXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPENTU1Jlc2V0IC8+XHJcbiAgICAgICAgPExvZ2luQXJlYSAvPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTG9naW5BcmVhID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBtaW5IZWlnaHQ9JzEwMHZoJyB3aWR0aD0nZnVsbCcgYWxpZ249J2NlbnRlcicganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgIDxCb3ggXHJcbiAgICAgICAgYm9yZGVyV2lkdGg9ezF9XHJcbiAgICAgICAgcHg9ezR9XHJcbiAgICAgICAgd2lkdGg9J2Z1bGwnXHJcbiAgICAgICAgbWF4V2lkdGg9JzUwMHB4J1xyXG4gICAgICAgIGJvcmRlclJhZGl1cz17NH1cclxuICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICBib3hTaGFkb3c9J2xnJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPFRoZW1lU2VsZWN0b3IgLz5cclxuICAgICAgICA8Qm94IHA9ezR9PlxyXG4gICAgICAgICAgPExvZ2luSGVhZGVyIC8+XHJcbiAgICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgVGhlbWVTZWxlY3RvciA9ICgpID0+IHtcclxuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB0ZXh0QWxpZ249J3JpZ2h0JyBweT17NH0+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgaWNvbj17Y29sb3JNb2RlID09PSAnbGlnaHQnID8gPE1vb25JY29uIC8+IDogPFN1bkljb24gLz59XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxyXG4gICAgICAgIHZhcmlhbnQ9J2dob3N0J1xyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBMb2dpbkhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgIDxIZWFkaW5nPlNpZ24gSW4gdG8gWW91ciBBY2NvdW50PC9IZWFkaW5nPlxyXG4gICAgICA8VGV4dD5cclxuICAgICAgICBTb21ldGhpbmcgaSB3aWxsIHdyaXRlIGl0IGxhdGVyICEhXHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG15PXs4fSB0ZXh0QWxpZ249J2xlZnQnPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj17VkFSSUFOVF9DT0xPUn0gIHdpZHRoPSdmdWxsJyBtdD17NH0+R2V0IE1ldGFNYXNrPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50Q29sb3I9e1ZBUklBTlRfQ09MT1J9ICB3aWR0aD0nZnVsbCcgbXQ9ezR9PlNpZ24gSW48L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwic291cmNlUm9vdCI6IiJ9