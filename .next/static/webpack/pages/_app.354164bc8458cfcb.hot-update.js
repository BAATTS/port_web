"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'\n// import { SunIcon, MoonIcon } from '@chakra-ui/icons'\n// import { AnimatePresence, motion } from 'framer-motion'\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = useColorMode().toggleColorMode;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnimatePresence, {\n        exitBeforeEnter: true,\n        initial: false,\n        __source: {\n            fileName: \"I:\\\\GitProjects\\\\portfolio_website\\\\port_web\\\\components\\\\theme-toggle-button.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(motion.div, {\n            style: {\n                display: 'inline-block'\n            },\n            initial: {\n                y: -20,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            exit: {\n                y: 20,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.2\n            },\n            __source: {\n                fileName: \"I:\\\\GitProjects\\\\portfolio_website\\\\port_web\\\\components\\\\theme-toggle-button.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconButton, {\n                \"aria-label\": \"Toggle theme\",\n                colorScheme: useColorModeValue('purple', 'orange'),\n                icon: useColorModeValue(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MoonIcon, {\n                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SunIcon, {\n                })),\n                onClick: toggleColorMode,\n                __source: {\n                    fileName: \"I:\\\\GitProjects\\\\portfolio_website\\\\port_web\\\\components\\\\theme-toggle-button.js\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                },\n                __self: _this\n            })\n        }, useColorModeValue('light', 'dark'))\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", true);\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEVBQWlGO0FBQ2pGLEVBQXVEO0FBQ3ZELEVBQTBEO0FBRTFELEdBQUssQ0FBQ0EsaUJBQWlCLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLQyxZQUFZLEdBQWhDRCxlQUFlO0lBRXZCLE1BQU0sc0VBQ0hFLGVBQWU7UUFBQ0MsZUFBZTtRQUFDQyxPQUFPLEVBQUksS0FBSzs7Ozs7Ozt1RkFDaERDLE1BQU0sQ0FBQ0MsR0FBRztZQUNUQyxLQUFLLEVBQUUsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBRSxDQUFjO1lBQUEsQ0FBQztZQUVoQ0osT0FBTyxFQUFJLENBQUM7Z0JBQUNLLENBQUMsR0FBRyxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztZQUFBLENBQUM7WUFDaENDLE9BQU8sRUFBRSxDQUFDO2dCQUFDRixDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7WUFBQyxDQUFDO1lBQzdCRSxJQUFJLEVBQUUsQ0FBQztnQkFBQ0gsQ0FBQyxFQUFFLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO1lBQUEsQ0FBQztZQUMxQkcsVUFBVSxFQUFFLENBQUNDO2dCQUFBQSxRQUFRLEVBQUUsR0FBRztZQUFDLENBQUM7Ozs7Ozs7MkZBRTdCQyxVQUFVO2dCQUNQQyxDQUFVLGFBQUMsQ0FBYztnQkFDekJDLFdBQVcsRUFBRUMsaUJBQWlCLENBQUMsQ0FBUSxTQUFFLENBQVE7Z0JBQ2pEQyxJQUFJLEVBQUVELGlCQUFpQixzRUFBRUUsUUFBUTt5RkFBTUMsT0FBTzs7Z0JBQzlDQyxPQUFPLEVBQUV0QixlQUFlOzs7Ozs7OztXQVZyQmtCLGlCQUFpQixDQUFDLENBQU8sUUFBRSxDQUFNOztBQWU1QyxDQUFDO0dBdEJLbkIsaUJBQWlCO0tBQWpCQSxpQkFBaUI7QUF3QnZCLCtEQUFlQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS10b2dnbGUtYnV0dG9uLmpzP2NjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbi8vIGltcG9ydCB7IFN1bkljb24sIE1vb25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuLy8gaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5cclxuY29uc3QgVGhlbWVUb2dnbGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsID0ge2ZhbHNlfT5cclxuICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0gXHJcbiAgICAgIGtleT17dXNlQ29sb3JNb2RlVmFsdWUoJ2xpZ2h0JywgJ2RhcmsnKX0gXHJcbiAgICAgIGluaXRpYWwgPSB7eyB5OiAtMjAsIG9wYWNpdHk6IDB9fSBcclxuICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XHJcbiAgICAgIGV4aXQ9e3sgeTogMjAsIG9wYWNpdHk6IDB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuMiB9fVxyXG4gICAgPlxyXG4gICAgPEljb25CdXR0b25cclxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIHRoZW1lXCJcclxuICAgICAgICBjb2xvclNjaGVtZT17dXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZScsICdvcmFuZ2UnKX1cclxuICAgICAgICBpY29uPXt1c2VDb2xvck1vZGVWYWx1ZSg8TW9vbkljb24gLz4sIDxTdW5JY29uIC8+KX1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XHJcbiAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZSIsIkFuaW1hdGVQcmVzZW5jZSIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJtb3Rpb24iLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiSWNvbkJ1dHRvbiIsImFyaWEtbGFiZWwiLCJjb2xvclNjaGVtZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiaWNvbiIsIk1vb25JY29uIiwiU3VuSWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});