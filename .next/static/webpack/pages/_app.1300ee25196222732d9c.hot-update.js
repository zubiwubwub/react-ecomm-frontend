webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/zubenko/code/projects/React/WESBOS/Advanced-React-master 2/sick-fits/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\\n    searchTerms: allProducts(\\n      where: {\\n        OR: [\\n          { name_contains_i: $searchTerm }\\n          { description_contains_i: $searchTerm }\\n        ]\\n      }\\n    ) {\\n      id\\n      name\\n      photo {\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SEARCH_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nfunction Search() {\n  _s();\n\n  var _this = this;\n\n  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useLazyQuery\"])(SEARCH_PRODUCTS_QUERY, {\n    fetchPolicy: 'no-cache'\n  }),\n      _useLazyQuery2 = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLazyQuery, 2),\n      findItems = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      loading = _useLazyQuery2$.loading,\n      data = _useLazyQuery2$.data,\n      error = _useLazyQuery2$.error;\n\n  var items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];\n  var findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()(findItems, 350);\n  Object(downshift__WEBPACK_IMPORTED_MODULE_5__[\"resetIdCounter\"])();\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_5__[\"useCombobox\"])({\n    items: items,\n    onInputValueChange: function onInputValueChange() {\n      findItemsButChill({\n        variables: {\n          searchTerm: inputValue\n        }\n      });\n    },\n    onSelectedItemChange: function onSelectedItemChange() {\n      console.log('selected item change');\n    }\n  }),\n      inputValue = _useCombobox.inputValue,\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps,\n      getItemProps = _useCombobox.getItemProps;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps({\n        type: 'search',\n        placeholder: 'Search for an Item',\n        id: 'search',\n        className: loading ? 'loading' : ''\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__[\"DropDown\"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {\n      children: items.map(function (item, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__[\"DropDownItem\"], _objectSpread(_objectSpread({}, getItemProps({\n          item: item\n        })), {}, {\n          highlighted: index === highlightedIndex,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n            src: item.photo.image.publicUrlTransformed,\n            alt: item.name,\n            width: \"50\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), item.name]\n        }), item.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this);\n      })\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"TFLmfTXg/fJ1aA2lqd5F3GDJGH4=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useLazyQuery\"], downshift__WEBPACK_IMPORTED_MODULE_5__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJpdGVtcyIsInNlYXJjaFRlcm1zIiwiZmluZEl0ZW1zQnV0Q2hpbGwiLCJkZWJvdW5jZSIsInJlc2V0SWRDb3VudGVyIiwidXNlQ29tYm9ib3giLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJ2YXJpYWJsZXMiLCJzZWFyY2hUZXJtIiwiaW5wdXRWYWx1ZSIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImdldE1lbnVQcm9wcyIsImdldElucHV0UHJvcHMiLCJnZXRDb21ib2JveFByb3BzIiwiZ2V0SXRlbVByb3BzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJoaWdobGlnaHRlZEluZGV4IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxrREFBSCxtQkFBM0I7QUFxQmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLHNCQUNlQyxtRUFBWSxDQUN4REgscUJBRHdELEVBRXhEO0FBQ0VJLGVBQVcsRUFBRTtBQURmLEdBRndELENBRDNCO0FBQUE7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQTtBQUFBLE1BQ1hDLE9BRFcsbUJBQ1hBLE9BRFc7QUFBQSxNQUNGQyxJQURFLG1CQUNGQSxJQURFO0FBQUEsTUFDSUMsS0FESixtQkFDSUEsS0FESjs7QUFRL0IsTUFBTUMsS0FBSyxHQUFHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxXQUFOLEtBQXFCLEVBQW5DO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLHNEQUFRLENBQUNQLFNBQUQsRUFBWSxHQUFaLENBQWxDO0FBQ0FRLGtFQUFjOztBQVZpQixxQkFpQjNCQyw2REFBVyxDQUFDO0FBQ2RMLFNBQUssRUFBTEEsS0FEYztBQUVkTSxzQkFGYyxnQ0FFTztBQUNuQkosdUJBQWlCLENBQUM7QUFDaEJLLGlCQUFTLEVBQUU7QUFDVEMsb0JBQVUsRUFBRUM7QUFESDtBQURLLE9BQUQsQ0FBakI7QUFLRCxLQVJhO0FBU2RDLHdCQVRjLGtDQVNTO0FBQ3JCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNEO0FBWGEsR0FBRCxDQWpCZ0I7QUFBQSxNQVk3QkgsVUFaNkIsZ0JBWTdCQSxVQVo2QjtBQUFBLE1BYTdCSSxZQWI2QixnQkFhN0JBLFlBYjZCO0FBQUEsTUFjN0JDLGFBZDZCLGdCQWM3QkEsYUFkNkI7QUFBQSxNQWU3QkMsZ0JBZjZCLGdCQWU3QkEsZ0JBZjZCO0FBQUEsTUFnQjdCQyxZQWhCNkIsZ0JBZ0I3QkEsWUFoQjZCOztBQStCL0Isc0JBQ0UscUVBQUMsNkRBQUQ7QUFBQSw0QkFDRSw0R0FBU0QsZ0JBQWdCLEVBQXpCO0FBQUEsNkJBQ0UsZ0dBQ01ELGFBQWEsQ0FBQztBQUNoQkcsWUFBSSxFQUFFLFFBRFU7QUFFaEJDLG1CQUFXLEVBQUUsb0JBRkc7QUFHaEJDLFVBQUUsRUFBRSxRQUhZO0FBSWhCQyxpQkFBUyxFQUFFdkIsT0FBTyxHQUFHLFNBQUgsR0FBZTtBQUpqQixPQUFELENBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSxxRUFBQyx5REFBRCxrQ0FBY2dCLFlBQVksRUFBMUI7QUFBQSxnQkFDR2IsS0FBSyxDQUFDcUIsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNULHFFQUFDLDZEQUFELGtDQUVNUCxZQUFZLENBQUM7QUFBRU0sY0FBSSxFQUFKQTtBQUFGLFNBQUQsQ0FGbEI7QUFHRSxxQkFBVyxFQUFFQyxLQUFLLEtBQUtDLGdCQUh6QjtBQUFBLGtDQUtFO0FBQ0UsZUFBRyxFQUFFRixJQUFJLENBQUNHLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsb0JBRHhCO0FBRUUsZUFBRyxFQUFFTCxJQUFJLENBQUNNLElBRlo7QUFHRSxpQkFBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixFQVVHTixJQUFJLENBQUNNLElBVlI7QUFBQSxZQUNPTixJQUFJLENBQUNILEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBN0R1QjFCLE07VUFDd0JDLDJELEVBZ0IxQ1cscUQ7OztLQWpCa0JaLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gJ2Rvd25zaGlmdCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMvRHJvcERvd24nO1xuXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNFQVJDSF9QUk9EVUNUU19RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xuICAgIHNlYXJjaFRlcm1zOiBhbGxQcm9kdWN0cyhcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIE9SOiBbXG4gICAgICAgICAgeyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgICkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHBob3RvIHtcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgW2ZpbmRJdGVtcywgeyBsb2FkaW5nLCBkYXRhLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcbiAgICBTRUFSQ0hfUFJPRFVDVFNfUVVFUlksXG4gICAge1xuICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XG4gIGNvbnN0IGZpbmRJdGVtc0J1dENoaWxsID0gZGVib3VuY2UoZmluZEl0ZW1zLCAzNTApO1xuICByZXNldElkQ291bnRlcigpO1xuICBjb25zdCB7XG4gICAgaW5wdXRWYWx1ZSxcbiAgICBnZXRNZW51UHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wcyxcbiAgICBnZXRDb21ib2JveFByb3BzLFxuICAgIGdldEl0ZW1Qcm9wcyxcbiAgfSA9IHVzZUNvbWJvYm94KHtcbiAgICBpdGVtcyxcbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XG4gICAgICBmaW5kSXRlbXNCdXRDaGlsbCh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKCkge1xuICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGl0ZW0gY2hhbmdlJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoU3R5bGVzPlxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xuICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBmb3IgYW4gSXRlbScsXG4gICAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGxvYWRpbmcgPyAnbG9hZGluZycgOiAnJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPERyb3BEb3duSXRlbVxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0gfSl9XG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aW5kZXggPT09IGhpZ2hsaWdodGVkSW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICB3aWR0aD0nNTAnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0Ryb3BEb3duPlxuICAgIDwvU2VhcmNoU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})