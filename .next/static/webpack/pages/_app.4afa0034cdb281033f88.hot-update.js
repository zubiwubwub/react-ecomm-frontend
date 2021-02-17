webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downshift */ \"./node_modules/downshift/dist/downshift.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/DropDown */ \"./components/styles/DropDown.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/zubenko/code/projects/React/WESBOS/Advanced-React-master 2/sick-fits/frontend/components/Search.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\\n    searchTerms: allProducts(\\n      where: {\\n        OR: [\\n          { name_contains_i: $searchTerm }\\n          { description_contains_i: $searchTerm }\\n        ]\\n      }\\n    ) {\\n      id\\n      name\\n      photo {\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SEARCH_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nfunction Search() {\n  _s();\n\n  var _this = this;\n\n  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useLazyQuery\"])(SEARCH_PRODUCTS_QUERY, {\n    fetchPolicy: 'no-cache'\n  }),\n      _useLazyQuery2 = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLazyQuery, 2),\n      findItems = _useLazyQuery2[0],\n      _useLazyQuery2$ = _useLazyQuery2[1],\n      loading = _useLazyQuery2$.loading,\n      data = _useLazyQuery2$.data,\n      error = _useLazyQuery2$.error;\n\n  var items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];\n  var findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()(findItems, 350);\n  Object(downshift__WEBPACK_IMPORTED_MODULE_5__[\"resetIdCounter\"])();\n\n  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_5__[\"useCombobox\"])({\n    items: items,\n    onInputValueChange: function onInputValueChange() {\n      findItemsButChill({\n        variables: {\n          searchTerm: inputValue\n        }\n      });\n    },\n    onSelectedItemChange: function onSelectedItemChange(_ref) {\n      var selectedItem = _ref.selectedItem;\n      console.log(selectedItem);\n      console.log('selected item change');\n    }\n  }),\n      isOpen = _useCombobox.isOpen,\n      inputValue = _useCombobox.inputValue,\n      getMenuProps = _useCombobox.getMenuProps,\n      getInputProps = _useCombobox.getInputProps,\n      getComboboxProps = _useCombobox.getComboboxProps,\n      getItemProps = _useCombobox.getItemProps,\n      highlightedIndex = _useCombobox.highlightedIndex;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__[\"SearchStyles\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", _objectSpread({}, getInputProps({\n        type: 'search',\n        placeholder: 'Search for an Item',\n        id: 'search',\n        className: loading ? 'loading' : ''\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__[\"DropDown\"], _objectSpread(_objectSpread({}, getMenuProps()), {}, {\n      children: [isOpen && items.map(function (item, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__[\"DropDownItem\"], _objectSpread(_objectSpread({}, getItemProps({\n          item: item\n        })), {}, {\n          highlighted: index === highlightedIndex,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n            src: item.photo.image.publicUrlTransformed,\n            alt: item.name,\n            width: \"50\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 15\n          }, _this), item.name]\n        }), item.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, _this);\n      }), isOpen && !items.length && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_8__[\"DropDownItem\"], {\n        children: [\"Sorry, no items found for \", inputValue]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }, this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"B/ZogQoNtB5tct7bDRwOIxhQhoE=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useLazyQuery\"], downshift__WEBPACK_IMPORTED_MODULE_5__[\"useCombobox\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanM/NjYxZSJdLCJuYW1lcyI6WyJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJTZWFyY2giLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZpbmRJdGVtcyIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJpdGVtcyIsInNlYXJjaFRlcm1zIiwiZmluZEl0ZW1zQnV0Q2hpbGwiLCJkZWJvdW5jZSIsInJlc2V0SWRDb3VudGVyIiwidXNlQ29tYm9ib3giLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJ2YXJpYWJsZXMiLCJzZWFyY2hUZXJtIiwiaW5wdXRWYWx1ZSIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwic2VsZWN0ZWRJdGVtIiwiY29uc29sZSIsImxvZyIsImlzT3BlbiIsImdldE1lbnVQcm9wcyIsImdldElucHV0UHJvcHMiLCJnZXRDb21ib2JveFByb3BzIiwiZ2V0SXRlbVByb3BzIiwiaGlnaGxpZ2h0ZWRJbmRleCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxrREFBSCxtQkFBM0I7QUFxQmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLHNCQUNlQyxtRUFBWSxDQUN4REgscUJBRHdELEVBRXhEO0FBQ0VJLGVBQVcsRUFBRTtBQURmLEdBRndELENBRDNCO0FBQUE7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQTtBQUFBLE1BQ1hDLE9BRFcsbUJBQ1hBLE9BRFc7QUFBQSxNQUNGQyxJQURFLG1CQUNGQSxJQURFO0FBQUEsTUFDSUMsS0FESixtQkFDSUEsS0FESjs7QUFRL0IsTUFBTUMsS0FBSyxHQUFHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxXQUFOLEtBQXFCLEVBQW5DO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLHNEQUFRLENBQUNQLFNBQUQsRUFBWSxHQUFaLENBQWxDO0FBQ0FRLGtFQUFjOztBQVZpQixxQkFtQjNCQyw2REFBVyxDQUFDO0FBQ2RMLFNBQUssRUFBTEEsS0FEYztBQUVkTSxzQkFGYyxnQ0FFTztBQUNuQkosdUJBQWlCLENBQUM7QUFDaEJLLGlCQUFTLEVBQUU7QUFDVEMsb0JBQVUsRUFBRUM7QUFESDtBQURLLE9BQUQsQ0FBakI7QUFLRCxLQVJhO0FBU2RDLHdCQVRjLHNDQVN5QjtBQUFBLFVBQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7QUFDckNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixZQUFaO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0Q7QUFaYSxHQUFELENBbkJnQjtBQUFBLE1BWTdCQyxNQVo2QixnQkFZN0JBLE1BWjZCO0FBQUEsTUFhN0JMLFVBYjZCLGdCQWE3QkEsVUFiNkI7QUFBQSxNQWM3Qk0sWUFkNkIsZ0JBYzdCQSxZQWQ2QjtBQUFBLE1BZTdCQyxhQWY2QixnQkFlN0JBLGFBZjZCO0FBQUEsTUFnQjdCQyxnQkFoQjZCLGdCQWdCN0JBLGdCQWhCNkI7QUFBQSxNQWlCN0JDLFlBakI2QixnQkFpQjdCQSxZQWpCNkI7QUFBQSxNQWtCN0JDLGdCQWxCNkIsZ0JBa0I3QkEsZ0JBbEI2Qjs7QUFrQy9CLHNCQUNFLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0UsNEdBQVNGLGdCQUFnQixFQUF6QjtBQUFBLDZCQUNFLGdHQUNNRCxhQUFhLENBQUM7QUFDaEJJLFlBQUksRUFBRSxRQURVO0FBRWhCQyxtQkFBVyxFQUFFLG9CQUZHO0FBR2hCQyxVQUFFLEVBQUUsUUFIWTtBQUloQkMsaUJBQVMsRUFBRTFCLE9BQU8sR0FBRyxTQUFILEdBQWU7QUFKakIsT0FBRCxDQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0UscUVBQUMseURBQUQsa0NBQWNrQixZQUFZLEVBQTFCO0FBQUEsaUJBQ0dELE1BQU0sSUFDTGQsS0FBSyxDQUFDd0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNSLHFFQUFDLDZEQUFELGtDQUVNUixZQUFZLENBQUM7QUFBRU8sY0FBSSxFQUFKQTtBQUFGLFNBQUQsQ0FGbEI7QUFHRSxxQkFBVyxFQUFFQyxLQUFLLEtBQUtQLGdCQUh6QjtBQUFBLGtDQUtFO0FBQ0UsZUFBRyxFQUFFTSxJQUFJLENBQUNFLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsb0JBRHhCO0FBRUUsZUFBRyxFQUFFSixJQUFJLENBQUNLLElBRlo7QUFHRSxpQkFBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixFQVVHTCxJQUFJLENBQUNLLElBVlI7QUFBQSxZQUNPTCxJQUFJLENBQUNILEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVYsQ0FGSixFQWdCR1IsTUFBTSxJQUFJLENBQUNkLEtBQUssQ0FBQytCLE1BQWpCLElBQTJCLENBQUNsQyxPQUE1QixpQkFDQyxxRUFBQyw2REFBRDtBQUFBLGlEQUF5Q1ksVUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQXBFdUJoQixNO1VBQ3dCQywyRCxFQWtCMUNXLHFEOzs7S0FuQmtCWixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tICdkb3duc2hpZnQnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcbmltcG9ydCB7IERyb3BEb3duLCBEcm9wRG93bkl0ZW0sIFNlYXJjaFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzL0Ryb3BEb3duJztcblxuY29uc3QgU0VBUkNIX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcbiAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXG4gICAgICB3aGVyZToge1xuICAgICAgICBPUjogW1xuICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XG4gICAgICAgICAgeyBkZXNjcmlwdGlvbl9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICApIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBwaG90byB7XG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IFtmaW5kSXRlbXMsIHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXG4gICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxuICAgIHtcbiAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBpdGVtcyA9IGRhdGE/LnNlYXJjaFRlcm1zIHx8IFtdO1xuICBjb25zdCBmaW5kSXRlbXNCdXRDaGlsbCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcbiAgcmVzZXRJZENvdW50ZXIoKTtcbiAgY29uc3Qge1xuICAgIGlzT3BlbixcbiAgICBpbnB1dFZhbHVlLFxuICAgIGdldE1lbnVQcm9wcyxcbiAgICBnZXRJbnB1dFByb3BzLFxuICAgIGdldENvbWJvYm94UHJvcHMsXG4gICAgZ2V0SXRlbVByb3BzLFxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gIH0gPSB1c2VDb21ib2JveCh7XG4gICAgaXRlbXMsXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKCkge1xuICAgICAgZmluZEl0ZW1zQnV0Q2hpbGwoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSh7IHNlbGVjdGVkSXRlbSB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEl0ZW0pO1xuICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGl0ZW0gY2hhbmdlJyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoU3R5bGVzPlxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xuICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBmb3IgYW4gSXRlbScsXG4gICAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGxvYWRpbmcgPyAnbG9hZGluZycgOiAnJyxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XG4gICAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8RHJvcERvd25JdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0gfSl9XG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICB3aWR0aD0nNTAnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAge2lzT3BlbiAmJiAhaXRlbXMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgICA8RHJvcERvd25JdGVtPlNvcnJ5LCBubyBpdGVtcyBmb3VuZCBmb3Ige2lucHV0VmFsdWV9PC9Ecm9wRG93bkl0ZW0+XG4gICAgICAgICl9XG4gICAgICA8L0Ryb3BEb3duPlxuICAgIDwvU2VhcmNoU3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Search.js\n");

/***/ })

})