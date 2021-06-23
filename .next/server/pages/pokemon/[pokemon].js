(function() {
var exports = {};
exports.id = "pages/pokemon/[pokemon]";
exports.ids = ["pages/pokemon/[pokemon]"];
exports.modules = {

/***/ "./pages/pokemon/[pokemon].js":
/*!************************************!*\
  !*** ./pages/pokemon/[pokemon].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\aryvi\\Documents\\Websites\\_Lab\\my-next-project\\pages\\pokemon\\[pokemon].js";


function Pokemon({
  pokemon
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Pokemon: ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Welcome , ", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name, "!", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.sprites.front_default
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

async function getStaticPaths() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const pokemon = await res.json();
  let paths = pokemon.results.map(p => {
    return `/pokemon/${p.name}`;
  });
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
  const pokemon = await res.json();
  return {
    props: {
      pokemon
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[pokemon].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LXByb2plY3QvLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LXByb2plY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1uZXh0LXByb2plY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJQb2tlbW9uIiwicG9rZW1vbiIsIm5hbWUiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicGF0aHMiLCJyZXN1bHRzIiwibWFwIiwicCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUE4QjtBQUM1QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxnQ0FBaUJBLE9BQWpCLGFBQWlCQSxPQUFqQix1QkFBaUJBLE9BQU8sQ0FBRUMsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFBLCtCQUNhRCxPQURiLGFBQ2FBLE9BRGIsdUJBQ2FBLE9BQU8sQ0FBRUMsSUFEdEIsb0JBRUU7QUFBSyxXQUFHLEVBQUVELE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFRSxPQUFULENBQWlCQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQVlEOztBQUNNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSw2Q0FBRixDQUF2QjtBQUNBLFFBQU1OLE9BQU8sR0FBRyxNQUFNSyxHQUFHLENBQUNFLElBQUosRUFBdEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdSLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQkMsR0FBaEIsQ0FBcUJDLENBQUQsSUFBTztBQUNyQyxXQUFRLFlBQVdBLENBQUMsQ0FBQ1YsSUFBSyxFQUExQjtBQUNELEdBRlcsQ0FBWjtBQUdBLFNBQU87QUFDTE8sU0FESztBQUVMSSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQ7QUFFTSxlQUFlQyxjQUFmLENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBMEM7QUFDL0MsUUFBTVQsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDcEIscUNBQW9DUSxNQUFNLENBQUNkLE9BQVEsRUFEL0IsQ0FBdkI7QUFHQSxRQUFNQSxPQUFPLEdBQUcsTUFBTUssR0FBRyxDQUFDRSxJQUFKLEVBQXRCO0FBQ0EsU0FBTztBQUNMUSxTQUFLLEVBQUU7QUFDTGY7QUFESztBQURGLEdBQVA7QUFLRDtBQUVELCtEQUFlRCxPQUFmLEU7Ozs7Ozs7Ozs7O0FDdkNBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3Bva2Vtb24vW3Bva2Vtb25dLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5mdW5jdGlvbiBQb2tlbW9uKHsgcG9rZW1vbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb2tlbW9uOiB7cG9rZW1vbj8ubmFtZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFdlbGNvbWUgLCB7cG9rZW1vbj8ubmFtZX0hXHJcbiAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24/LnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MWApO1xyXG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGxldCBwYXRocyA9IHBva2Vtb24ucmVzdWx0cy5tYXAoKHApID0+IHtcclxuICAgIHJldHVybiBgL3Bva2Vtb24vJHtwLm5hbWV9YDtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMucG9rZW1vbn1gXHJcbiAgKTtcclxuICBjb25zdCBwb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9rZW1vbixcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=