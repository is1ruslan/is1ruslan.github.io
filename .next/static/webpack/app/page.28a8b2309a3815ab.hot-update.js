"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Hero = ()=>{\n    _s();\n    const [price, setPrice] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);\n    const [marketCap, setMarketCap] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);\n    const [holders, setHolders] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // const fetchData = () => {\n    //   axios.get('https://api.coingecko.com/api/v3/coins/0xliquidity?tickers=false&community_data=false&developer_data=false&sparkline=false')\n    //     .then(response => {\n    //       setMarketCap(response.data['market_data']['fully_diluted_valuation'][\"usd\"]);\n    //       setPrice(response.data['market_data']['current_price'][\"usd\"]);\n    //     })\n    //     .catch(error => {\n    //       console.error('Error:', error);\n    //     });\n    // };\n    // fetchData();\n    // const intervalId = setInterval(fetchData, 60000);\n    // return () => clearInterval(intervalId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // const fetchData = () => {\n    //   axios.get('https://api.chainbase.online/v1/token/holders?chain_id=1&contract_address=0xd377F28245BC505190c8f34D2bFE5f215754f634', {\n    //     headers: {\n    //       accept: 'application/json',\n    //       'X-API-Key': '2dUb3e0Yj6g5LmZVOttHnhlDSbq',\n    //     }\n    //   })\n    //     .then(response => {\n    //       setHolders(response.data.count);\n    //     })\n    //     .catch(error => {\n    //       console.error('Error:', error);\n    //     });\n    // };\n    // fetchData();\n    // const intervalId = setInterval(fetchData, 300000);\n    // return () => clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen w-full flex justify-center items-center relative pt-10 md:pt-[70px] pb-[200px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/grid.svg\",\n                alt: \"grid\",\n                width: 1920,\n                height: 1080,\n                className: \"z-[11] bg-contain hidden lg:block pointer-events-none bg-center absolute top-0 left-0 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/gridSM.svg\",\n                alt: \"grid\",\n                width: 1920,\n                height: 1080,\n                className: \"z-[11] bg-contain block lg:hidden pointer-events-none bg-center absolute top-0 left-0 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-[12] text-center items-center justify-center flex flex-col gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl sm:text-4xl lg:text-[46px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-primary\",\n                                        children: \"Unlock\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 63\n                                    }, undefined),\n                                    \" the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-primary\",\n                                        children: \"potential\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 112\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 159\n                                    }, undefined),\n                                    \"of locked \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-primary\",\n                                        children: \"liquidity\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    \" in DeFi\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 py-3 text-sm hover:bg-[#f8d99c] ease-linear duration-100 transition-all bg-primary gap-2 text-backingDark rounded-2xl w-fit flex items-center justify-center mt-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Get Started\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: \"/hero/arrowright.svg\",\n                                        alt: \"arrowright\",\n                                        width: 18,\n                                        height: 18\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        width: \"100%\",\n                        height: \"100%\",\n                        className: \"-mt-25 z-0 -mb-10 h-[400px] md:h-full object-cover md:object-contain pointer-events-none\",\n                        title: \"Video tooltip on hover.\",\n                        poster: \"/pre.png\",\n                        muted: true,\n                        playsInline: true,\n                        loop: true,\n                        autoPlay: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"/clock_alpha.webm\",\n                                type: \"video/webm\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"/clock_alpha.mp4\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"/hero/linetree.svg\",\n                        alt: \"clock\",\n                        width: 787,\n                        height: 35,\n                        className: \"px-5 sm:px-[100px] lg:px-0 z-[12]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-[12] grid grid-cols-1 md:grid-cols-3 px-5 gap-5 md:gap-20 mt-7 w-full\",\n                        children: [\n                            {\n                                title: \"Market Cap\",\n                                value: \"$\".concat(marketCap)\n                            },\n                            {\n                                title: \"Token Price\",\n                                value: \"$\".concat(price)\n                            },\n                            {\n                                title: \"Holders\",\n                                value: \"\".concat(holders)\n                            }\n                        ].map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-6 w-full px-5 lg:px-20 rounded-[20px] border border-secondary bg-backingDark flex flex-col gap-2 items-center justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm sm:text-lg bulky\",\n                                        children: el.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl sm:text-[32px] text-primary monotext\",\n                                        children: el.value\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, el.title, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hero, \"slQJgWZgiWM0XQodex4PfWgem0w=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMwQjtBQUNLO0FBQ1U7QUFHekMsTUFBTUksT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0oscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AscURBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QscURBQWMsQ0FBQztJQUU3Q0MsZ0RBQVNBLENBQUM7SUFDUiw0QkFBNEI7SUFDNUIsNElBQTRJO0lBQzVJLDBCQUEwQjtJQUMxQixzRkFBc0Y7SUFDdEYsd0VBQXdFO0lBQ3hFLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixLQUFLO0lBRUwsZUFBZTtJQUNmLG9EQUFvRDtJQUNwRCwwQ0FBMEM7SUFDNUMsR0FBRyxFQUFFO0lBRUxBLGdEQUFTQSxDQUFDO0lBQ1IsNEJBQTRCO0lBRTVCLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLG9EQUFvRDtJQUNwRCxRQUFRO0lBQ1IsT0FBTztJQUNQLDBCQUEwQjtJQUMxQix5Q0FBeUM7SUFDekMsU0FBUztJQUNULHdCQUF3QjtJQUN4Qix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLEtBQUs7SUFFTCxlQUFlO0lBQ2YscURBQXFEO0lBQ3JELDBDQUEwQztJQUM1QyxHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNaLGtEQUFLQTtnQkFDSmEsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDWixrREFBS0E7Z0JBQ0phLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFHTCxXQUFVOztrREFBc0MsOERBQUNNO3dDQUFLTixXQUFVO2tEQUFlOzs7Ozs7b0NBQWE7a0RBQUssOERBQUNNO3dDQUFLTixXQUFVO2tEQUFlOzs7Ozs7a0RBQWdCLDhEQUFDTzs7Ozs7b0NBQUs7a0RBQ2hKLDhEQUFDRDt3Q0FBS04sV0FBVTtrREFBZTs7Ozs7O29DQUFnQjs7Ozs7OzswQ0FDekQsOERBQUNRO2dDQUFPUixXQUFVOztrREFDaEIsOERBQUNTO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNyQixrREFBS0E7d0NBQ0phLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZCw4REFBQ007d0JBQ0NQLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BKLFdBQVU7d0JBQ1ZXLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BDLEtBQUs7d0JBQ0xDLFdBQVc7d0JBQ1hDLElBQUk7d0JBQ0pDLFFBQVE7OzBDQUNSLDhEQUFDQztnQ0FBT2hCLEtBQUk7Z0NBQW9CaUIsTUFBSzs7Ozs7OzBDQUNyQyw4REFBQ0Q7Z0NBQU9oQixLQUFJO2dDQUFtQmlCLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FTdEMsOERBQUM5QixrREFBS0E7d0JBQ0phLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JKLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1o7NEJBQUM7Z0NBQUVXLE9BQU87Z0NBQWNRLE9BQU8sSUFBYyxPQUFWeEI7NEJBQVk7NEJBQ3hEO2dDQUFFZ0IsT0FBTztnQ0FBZVEsT0FBTyxJQUFVLE9BQU4zQjs0QkFBUTs0QkFDM0M7Z0NBQUVtQixPQUFPO2dDQUFXUSxPQUFPLEdBQVcsT0FBUnRCOzRCQUFVO3lCQUFFLENBQUN1QixHQUFHLENBQUMsQ0FBQ0MsbUJBQ3RDLDhEQUFDdEI7Z0NBRUNDLFdBQVU7O2tEQUVWLDhEQUFDUzt3Q0FBRVQsV0FBVTtrREFBNEJxQixHQUFHVixLQUFLOzs7Ozs7a0RBQ2pELDhEQUFDRjt3Q0FBRVQsV0FBVTtrREFDVnFCLEdBQUdGLEtBQUs7Ozs7Ozs7K0JBTE5FLEdBQUdWLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhM0I7R0F4SE1wQjtLQUFBQTtBQTBITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8uanN4PzI4YWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBIZXJvID0gKCkgPT4ge1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbbWFya2V0Q2FwLCBzZXRNYXJrZXRDYXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtob2xkZXJzLCBzZXRIb2xkZXJzXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgIC8vICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy8weGxpcXVpZGl0eT90aWNrZXJzPWZhbHNlJmNvbW11bml0eV9kYXRhPWZhbHNlJmRldmVsb3Blcl9kYXRhPWZhbHNlJnNwYXJrbGluZT1mYWxzZScpXG4gICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICBzZXRNYXJrZXRDYXAocmVzcG9uc2UuZGF0YVsnbWFya2V0X2RhdGEnXVsnZnVsbHlfZGlsdXRlZF92YWx1YXRpb24nXVtcInVzZFwiXSk7XG4gICAgLy8gICAgICAgc2V0UHJpY2UocmVzcG9uc2UuZGF0YVsnbWFya2V0X2RhdGEnXVsnY3VycmVudF9wcmljZSddW1widXNkXCJdKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH07XG4gIFxuICAgIC8vIGZldGNoRGF0YSgpO1xuICAgIC8vIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmZXRjaERhdGEsIDYwMDAwKTtcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgICBcbiAgICAvLyAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuY2hhaW5iYXNlLm9ubGluZS92MS90b2tlbi9ob2xkZXJzP2NoYWluX2lkPTEmY29udHJhY3RfYWRkcmVzcz0weGQzNzdGMjgyNDVCQzUwNTE5MGM4ZjM0RDJiRkU1ZjIxNTc1NGY2MzQnLCB7XG4gICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgICAnWC1BUEktS2V5JzogJzJkVWIzZTBZajZnNUxtWlZPdHRIbmhsRFNicScsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICBzZXRIb2xkZXJzKHJlc3BvbnNlLmRhdGEuY291bnQpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfTtcbiAgXG4gICAgLy8gZmV0Y2hEYXRhKCk7XG4gICAgLy8gY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZldGNoRGF0YSwgMzAwMDAwKTtcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBwdC0xMCBtZDpwdC1bNzBweF0gcGItWzIwMHB4XVwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9ncmlkLnN2Z1wiXG4gICAgICAgIGFsdD1cImdyaWRcIlxuICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgaGVpZ2h0PXsxMDgwfVxuICAgICAgICBjbGFzc05hbWU9XCJ6LVsxMV0gYmctY29udGFpbiBoaWRkZW4gbGc6YmxvY2sgcG9pbnRlci1ldmVudHMtbm9uZSBiZy1jZW50ZXIgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbFwiXG4gICAgICAvPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9ncmlkU00uc3ZnXCJcbiAgICAgICAgYWx0PVwiZ3JpZFwiXG4gICAgICAgIHdpZHRoPXsxOTIwfVxuICAgICAgICBoZWlnaHQ9ezEwODB9XG4gICAgICAgIGNsYXNzTmFtZT1cInotWzExXSBiZy1jb250YWluIGJsb2NrIGxnOmhpZGRlbiBwb2ludGVyLWV2ZW50cy1ub25lIGJnLWNlbnRlciBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei1bMTJdIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sIGdhcC01XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIGxnOnRleHQtWzQ2cHhdXCI+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+VW5sb2NrPC9zcGFuPiB0aGUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+cG90ZW50aWFsPC9zcGFuPjxiciAvPiBcbiAgICAgICAgICBvZiBsb2NrZWQgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+bGlxdWlkaXR5PC9zcGFuPiBpbiBEZUZpPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LXNtIGhvdmVyOmJnLVsjZjhkOTljXSBlYXNlLWxpbmVhciBkdXJhdGlvbi0xMDAgdHJhbnNpdGlvbi1hbGwgYmctcHJpbWFyeSBnYXAtMiB0ZXh0LWJhY2tpbmdEYXJrIHJvdW5kZWQtMnhsIHctZml0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTEwXCI+XG4gICAgICAgICAgICA8cD5HZXQgU3RhcnRlZDwvcD5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvaGVyby9hcnJvd3JpZ2h0LnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cImFycm93cmlnaHRcIlxuICAgICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICAgIGhlaWdodD17MTh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCItbXQtMjUgei0wIC1tYi0xMCBoLVs0MDBweF0gbWQ6aC1mdWxsIG9iamVjdC1jb3ZlciBtZDpvYmplY3QtY29udGFpbiBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICB0aXRsZT1cIlZpZGVvIHRvb2x0aXAgb24gaG92ZXIuXCJcbiAgICAgICAgICBwb3N0ZXI9XCIvcHJlLnBuZ1wiXG4gICAgICAgICAgbXV0ZWRcbiAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgIGxvb3BcbiAgICAgICAgICBhdXRvUGxheT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cIi9jbG9ja19hbHBoYS53ZWJtXCIgdHlwZT1cInZpZGVvL3dlYm1cIiAvPlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiL2Nsb2NrX2FscGhhLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgd2lkdGg9ezcwMH1cbiAgICAgICAgICBoZWlnaHQ9ezY4Nn1cbiAgICAgICAgICBzcmM9XCIvaGVyby9jbG9jay5zdmdcIlxuICAgICAgICAgIGFsdD1cImNsb2NrXCJcbiAgICAgICAgICBcbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9oZXJvL2xpbmV0cmVlLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiY2xvY2tcIlxuICAgICAgICAgIHdpZHRoPXs3ODd9XG4gICAgICAgICAgaGVpZ2h0PXszNX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHNtOnB4LVsxMDBweF0gbGc6cHgtMCB6LVsxMl1cIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotWzEyXSBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIHB4LTUgZ2FwLTUgbWQ6Z2FwLTIwIG10LTcgdy1mdWxsXCI+XG4gICAgICAgICAge1t7IHRpdGxlOiBcIk1hcmtldCBDYXBcIiwgdmFsdWU6IGAkJHttYXJrZXRDYXB9YCB9LFxuICB7IHRpdGxlOiBcIlRva2VuIFByaWNlXCIsIHZhbHVlOiBgJCR7cHJpY2V9YCB9LFxuICB7IHRpdGxlOiBcIkhvbGRlcnNcIiwgdmFsdWU6IGAke2hvbGRlcnN9YCB9XS5tYXAoKGVsKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17ZWwudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTYgdy1mdWxsIHB4LTUgbGc6cHgtMjAgcm91bmRlZC1bMjBweF0gYm9yZGVyIGJvcmRlci1zZWNvbmRhcnkgYmctYmFja2luZ0RhcmsgZmxleCBmbGV4LWNvbCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtbGcgYnVsa3lcIj57ZWwudGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LVszMnB4XSB0ZXh0LXByaW1hcnkgbW9ub3RleHRcIj5cbiAgICAgICAgICAgICAgICB7ZWwudmFsdWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZXJvIiwicHJpY2UiLCJzZXRQcmljZSIsInVzZVN0YXRlIiwibWFya2V0Q2FwIiwic2V0TWFya2V0Q2FwIiwiaG9sZGVycyIsInNldEhvbGRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwic3BhbiIsImJyIiwiYnV0dG9uIiwicCIsInZpZGVvIiwidGl0bGUiLCJwb3N0ZXIiLCJtdXRlZCIsInBsYXlzSW5saW5lIiwibG9vcCIsImF1dG9QbGF5Iiwic291cmNlIiwidHlwZSIsInZhbHVlIiwibWFwIiwiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Hero.jsx\n"));

/***/ })

});