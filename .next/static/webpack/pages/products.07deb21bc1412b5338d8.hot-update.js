webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pagination; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ \"./components/styles/PaginationStyles.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\nvar _jsxFileName = \"/Users/zubenko/code/projects/React/WESBOS/Advanced-React-master 2/sick-fits/frontend/components/Pagination.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query {\\n    _allProductsMeta {\\n      count\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());\nfunction Pagination(_ref) {\n  _s();\n\n  var page = _ref.page;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(PAGINATION_QUERY),\n      error = _useQuery.error,\n      loading = _useQuery.loading,\n      data = _useQuery.data;\n\n  if (loading) return 'Loading...';\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 21\n  }, this);\n  var count = data._allProductsMeta.count;\n  var pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_8__[\"perPage\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [\" Sick Fits - Page \", page, \" of ___\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: \"/products/\".concat(page - 1),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        \"aria-disabled\": page <= 1,\n        children: \"Prev\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Page \", page, \" of \", pageCount]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [count, \" Items Total\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: \"/products/\".concat(page + 1),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        \"aria-disabled\": page <= pageCount,\n        children: \"Next\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Pagination, \"MadqETWYtkFh3dDWW9IjxDLlwQw=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = Pagination;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzPzJiMzMiXSwibmFtZXMiOlsiUEFHSU5BVElPTl9RVUVSWSIsImdxbCIsIlBhZ2luYXRpb24iLCJwYWdlIiwidXNlUXVlcnkiLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwiY291bnQiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJwZXJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBUWUsU0FBU0MsVUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDVkMsK0RBQVEsQ0FBQ0osZ0JBQUQsQ0FERTtBQUFBLE1BQ25DSyxLQURtQyxhQUNuQ0EsS0FEbUM7QUFBQSxNQUM1QkMsT0FENEIsYUFDNUJBLE9BRDRCO0FBQUEsTUFDbkJDLElBRG1CLGFBQ25CQSxJQURtQjs7QUFFM0MsTUFBSUQsT0FBSixFQUFhLE9BQU8sWUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTyxxRUFBQyxxREFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSGdDLE1BSW5DRyxLQUptQyxHQUl6QkQsSUFBSSxDQUFDRSxnQkFKb0IsQ0FJbkNELEtBSm1DO0FBSzNDLE1BQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLEtBQUssR0FBR0ssK0NBQWxCLENBQWxCO0FBQ0Esc0JBQ0UscUVBQUMsZ0VBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEseUNBQTBCVixJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksc0JBQWVBLElBQUksR0FBRyxDQUF0QixDQUFWO0FBQUEsNkJBQ0U7QUFBRyx5QkFBZUEsSUFBSSxJQUFJLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBT0U7QUFBQSwwQkFDUUEsSUFEUixVQUNrQk8sU0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFVRTtBQUFBLGlCQUFJRixLQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBV0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLHNCQUFlTCxJQUFJLEdBQUcsQ0FBdEIsQ0FBVjtBQUFBLDZCQUNFO0FBQUcseUJBQWVBLElBQUksSUFBSU8sU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBdkJ1QlIsVTtVQUNXRSx1RDs7O0tBRFhGLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IFBBR0lOQVRJT05fUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBfYWxsUHJvZHVjdHNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZSB9KSB7XG4gIGNvbnN0IHsgZXJyb3IsIGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KFBBR0lOQVRJT05fUVVFUlkpO1xuICBpZiAobG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJztcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xuICBjb25zdCB7IGNvdW50IH0gPSBkYXRhLl9hbGxQcm9kdWN0c01ldGE7XG4gIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChjb3VudCAvIHBlclBhZ2UpO1xuICByZXR1cm4gKFxuICAgIDxQYWdpbmF0aW9uU3R5bGVzPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4gU2ljayBGaXRzIC0gUGFnZSB7cGFnZX0gb2YgX19fPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwYWdlIC0gMX1gfT5cbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA8PSAxfT5QcmV2PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHA+XG4gICAgICAgIFBhZ2Uge3BhZ2V9IG9mIHtwYWdlQ291bnR9XG4gICAgICA8L3A+XG4gICAgICA8cD57Y291bnR9IEl0ZW1zIFRvdGFsPC9wPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgKyAxfWB9PlxuICAgICAgICA8YSBhcmlhLWRpc2FibGVkPXtwYWdlIDw9IHBhZ2VDb3VudH0+TmV4dDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L1BhZ2luYXRpb25TdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination.js\n");

/***/ })

})