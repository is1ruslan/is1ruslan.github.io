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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Hero = ()=>{\n    _s();\n    const [price, setPrice] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);\n    const [marketCap, setMarketCap] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);\n    const [holders, setHolders] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // const fetchData = () => {\n    //   axios.get('https://api.coingecko.com/api/v3/coins/0xliquidity?tickers=false&community_data=false&developer_data=false&sparkline=false')\n    //     .then(response => {\n    //       setMarketCap(response.data['market_data']['fully_diluted_valuation'][\"usd\"]);\n    //       setPrice(response.data['market_data']['current_price'][\"usd\"]);\n    //     })\n    //     .catch(error => {\n    //       console.error('Error:', error);\n    //     });\n    // };\n    // fetchData();\n    // const intervalId = setInterval(fetchData, 60000);\n    // return () => clearInterval(intervalId);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n    // const fetchData = () => {\n    //   axios.get('https://api.chainbase.online/v1/token/holders?chain_id=1&contract_address=0xd377F28245BC505190c8f34D2bFE5f215754f634', {\n    //     headers: {\n    //       accept: 'application/json',\n    //       'X-API-Key': '2dUb3e0Yj6g5LmZVOttHnhlDSbq',\n    //     }\n    //   })\n    //     .then(response => {\n    //       setHolders(response.data.count);\n    //     })\n    //     .catch(error => {\n    //       console.error('Error:', error);\n    //     });\n    // };\n    // fetchData();\n    // const intervalId = setInterval(fetchData, 300000);\n    // return () => clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen w-full flex justify-center items-center relative pt-10 md:pt-[130px] pb-[150px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/grid.svg\",\n                alt: \"grid\",\n                width: 1920,\n                height: 1080,\n                className: \"z-[11] bg-contain hidden lg:block pointer-events-none bg-center absolute top-0 left-0 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/gridSM.svg\",\n                alt: \"grid\",\n                width: 1920,\n                height: 1080,\n                className: \"z-[11] bg-contain block lg:hidden pointer-events-none bg-center absolute top-0 left-0 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-[12] text-center items-center justify-center flex flex-col gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl sm:text-4xl lg:text-[46px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-primary\",\n                                        children: \"Unlock\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 63\n                                    }, undefined),\n                                    \" the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-primary\",\n                                        children: \"potential\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 112\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 159\n                                    }, undefined),\n                                    \"of locked \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-primary\",\n                                        children: \"liquidity\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    \" in DeFi\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 py-3 text-sm hover:bg-[#f8d99c] ease-linear duration-100 transition-all bg-primary gap-2 text-backingDark rounded-2xl w-fit flex items-center justify-center mt-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Get Started\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: \"/hero/arrowright.svg\",\n                                        alt: \"arrowright\",\n                                        width: 18,\n                                        height: 18\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        width: \"100%\",\n                        height: \"100%\",\n                        className: \"-mt-20 z-0 -mb-10 h-[400px] md:h-full object-cover md:object-contain pointer-events-none\",\n                        title: \"Video tooltip on hover.\",\n                        poster: \"/pre.png\",\n                        muted: true,\n                        playsInline: true,\n                        loop: true,\n                        autoPlay: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"/clock_alpha.webm\",\n                                type: \"video/webm\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"/clock_alpha.mp4\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"/hero/linetree.svg\",\n                        alt: \"clock\",\n                        width: 787,\n                        height: 35,\n                        className: \"px-5 sm:px-[100px] lg:px-0 z-[12]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-[12] grid grid-cols-1 md:grid-cols-3 px-5 gap-5 md:gap-20 mt-7 w-full\",\n                        children: [\n                            {\n                                title: \"Market Cap\",\n                                value: \"$\".concat(marketCap)\n                            },\n                            {\n                                title: \"Token Price\",\n                                value: \"$\".concat(price)\n                            },\n                            {\n                                title: \"Holders\",\n                                value: \"\".concat(holders)\n                            }\n                        ].map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-6 w-full px-5 lg:px-20 rounded-[20px] border border-secondary bg-backingDark flex flex-col gap-2 items-center justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm sm:text-lg bulky\",\n                                        children: el.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl sm:text-[32px] text-primary monotext\",\n                                        children: el.value\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, el.title, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\Hero.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hero, \"slQJgWZgiWM0XQodex4PfWgem0w=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMwQjtBQUNLO0FBQ1U7QUFHekMsTUFBTUksT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0oscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AscURBQWMsQ0FBQztJQUNqRCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QscURBQWMsQ0FBQztJQUU3Q0MsZ0RBQVNBLENBQUM7SUFDUiw0QkFBNEI7SUFDNUIsNElBQTRJO0lBQzVJLDBCQUEwQjtJQUMxQixzRkFBc0Y7SUFDdEYsd0VBQXdFO0lBQ3hFLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixLQUFLO0lBRUwsZUFBZTtJQUNmLG9EQUFvRDtJQUNwRCwwQ0FBMEM7SUFDNUMsR0FBRyxFQUFFO0lBRUxBLGdEQUFTQSxDQUFDO0lBQ1IsNEJBQTRCO0lBRTVCLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLG9EQUFvRDtJQUNwRCxRQUFRO0lBQ1IsT0FBTztJQUNQLDBCQUEwQjtJQUMxQix5Q0FBeUM7SUFDekMsU0FBUztJQUNULHdCQUF3QjtJQUN4Qix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLEtBQUs7SUFFTCxlQUFlO0lBQ2YscURBQXFEO0lBQ3JELDBDQUEwQztJQUM1QyxHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNaLGtEQUFLQTtnQkFDSmEsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDWixrREFBS0E7Z0JBQ0phLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFHTCxXQUFVOztrREFBc0MsOERBQUNNO3dDQUFLTixXQUFVO2tEQUFlOzs7Ozs7b0NBQWE7a0RBQUssOERBQUNNO3dDQUFLTixXQUFVO2tEQUFlOzs7Ozs7a0RBQWdCLDhEQUFDTzs7Ozs7b0NBQUs7a0RBQ2hKLDhEQUFDRDt3Q0FBS04sV0FBVTtrREFBZTs7Ozs7O29DQUFnQjs7Ozs7OzswQ0FDekQsOERBQUNRO2dDQUFPUixXQUFVOztrREFDaEIsOERBQUNTO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNyQixrREFBS0E7d0NBQ0phLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZCw4REFBQ007d0JBQ0NQLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BKLFdBQVU7d0JBQ1ZXLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BDLEtBQUs7d0JBQ0xDLFdBQVc7d0JBQ1hDLElBQUk7d0JBQ0pDLFFBQVE7OzBDQUNSLDhEQUFDQztnQ0FBT2hCLEtBQUk7Z0NBQW9CaUIsTUFBSzs7Ozs7OzBDQUNyQyw4REFBQ0Q7Z0NBQU9oQixLQUFJO2dDQUFtQmlCLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FTdEMsOERBQUM5QixrREFBS0E7d0JBQ0phLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JKLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1o7NEJBQUM7Z0NBQUVXLE9BQU87Z0NBQWNRLE9BQU8sSUFBYyxPQUFWeEI7NEJBQVk7NEJBQ3hEO2dDQUFFZ0IsT0FBTztnQ0FBZVEsT0FBTyxJQUFVLE9BQU4zQjs0QkFBUTs0QkFDM0M7Z0NBQUVtQixPQUFPO2dDQUFXUSxPQUFPLEdBQVcsT0FBUnRCOzRCQUFVO3lCQUFFLENBQUN1QixHQUFHLENBQUMsQ0FBQ0MsbUJBQ3RDLDhEQUFDdEI7Z0NBRUNDLFdBQVU7O2tEQUVWLDhEQUFDUzt3Q0FBRVQsV0FBVTtrREFBNEJxQixHQUFHVixLQUFLOzs7Ozs7a0RBQ2pELDhEQUFDRjt3Q0FBRVQsV0FBVTtrREFDVnFCLEdBQUdGLEtBQUs7Ozs7Ozs7K0JBTE5FLEdBQUdWLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhM0I7R0F4SE1wQjtLQUFBQTtBQTBITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8uanN4PzI4YWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBIZXJvID0gKCkgPT4ge1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbbWFya2V0Q2FwLCBzZXRNYXJrZXRDYXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtob2xkZXJzLCBzZXRIb2xkZXJzXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgIC8vICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy8weGxpcXVpZGl0eT90aWNrZXJzPWZhbHNlJmNvbW11bml0eV9kYXRhPWZhbHNlJmRldmVsb3Blcl9kYXRhPWZhbHNlJnNwYXJrbGluZT1mYWxzZScpXG4gICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICBzZXRNYXJrZXRDYXAocmVzcG9uc2UuZGF0YVsnbWFya2V0X2RhdGEnXVsnZnVsbHlfZGlsdXRlZF92YWx1YXRpb24nXVtcInVzZFwiXSk7XG4gICAgLy8gICAgICAgc2V0UHJpY2UocmVzcG9uc2UuZGF0YVsnbWFya2V0X2RhdGEnXVsnY3VycmVudF9wcmljZSddW1widXNkXCJdKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH07XG4gIFxuICAgIC8vIGZldGNoRGF0YSgpO1xuICAgIC8vIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmZXRjaERhdGEsIDYwMDAwKTtcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgICBcbiAgICAvLyAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuY2hhaW5iYXNlLm9ubGluZS92MS90b2tlbi9ob2xkZXJzP2NoYWluX2lkPTEmY29udHJhY3RfYWRkcmVzcz0weGQzNzdGMjgyNDVCQzUwNTE5MGM4ZjM0RDJiRkU1ZjIxNTc1NGY2MzQnLCB7XG4gICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgICAnWC1BUEktS2V5JzogJzJkVWIzZTBZajZnNUxtWlZPdHRIbmhsRFNicScsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICBzZXRIb2xkZXJzKHJlc3BvbnNlLmRhdGEuY291bnQpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfTtcbiAgXG4gICAgLy8gZmV0Y2hEYXRhKCk7XG4gICAgLy8gY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZldGNoRGF0YSwgMzAwMDAwKTtcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBwdC0xMCBtZDpwdC1bMTMwcHhdIHBiLVsxNTBweF1cIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9XCIvZ3JpZC5zdmdcIlxuICAgICAgICBhbHQ9XCJncmlkXCJcbiAgICAgICAgd2lkdGg9ezE5MjB9XG4gICAgICAgIGhlaWdodD17MTA4MH1cbiAgICAgICAgY2xhc3NOYW1lPVwiei1bMTFdIGJnLWNvbnRhaW4gaGlkZGVuIGxnOmJsb2NrIHBvaW50ZXItZXZlbnRzLW5vbmUgYmctY2VudGVyIGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGxcIlxuICAgICAgLz5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9XCIvZ3JpZFNNLnN2Z1wiXG4gICAgICAgIGFsdD1cImdyaWRcIlxuICAgICAgICB3aWR0aD17MTkyMH1cbiAgICAgICAgaGVpZ2h0PXsxMDgwfVxuICAgICAgICBjbGFzc05hbWU9XCJ6LVsxMV0gYmctY29udGFpbiBibG9jayBsZzpoaWRkZW4gcG9pbnRlci1ldmVudHMtbm9uZSBiZy1jZW50ZXIgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotWzEyXSB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbCBnYXAtNVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBsZzp0ZXh0LVs0NnB4XVwiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlVubG9jazwvc3Bhbj4gdGhlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPnBvdGVudGlhbDwvc3Bhbj48YnIgLz4gXG4gICAgICAgICAgb2YgbG9ja2VkIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPmxpcXVpZGl0eTwvc3Bhbj4gaW4gRGVGaTwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1zbSBob3ZlcjpiZy1bI2Y4ZDk5Y10gZWFzZS1saW5lYXIgZHVyYXRpb24tMTAwIHRyYW5zaXRpb24tYWxsIGJnLXByaW1hcnkgZ2FwLTIgdGV4dC1iYWNraW5nRGFyayByb3VuZGVkLTJ4bCB3LWZpdCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0xMFwiPlxuICAgICAgICAgICAgPHA+R2V0IFN0YXJ0ZWQ8L3A+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL2hlcm8vYXJyb3dyaWdodC5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJhcnJvd3JpZ2h0XCJcbiAgICAgICAgICAgICAgd2lkdGg9ezE4fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiLW10LTIwIHotMCAtbWItMTAgaC1bNDAwcHhdIG1kOmgtZnVsbCBvYmplY3QtY292ZXIgbWQ6b2JqZWN0LWNvbnRhaW4gcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgICAgdGl0bGU9XCJWaWRlbyB0b29sdGlwIG9uIGhvdmVyLlwiXG4gICAgICAgICAgcG9zdGVyPVwiL3ByZS5wbmdcIlxuICAgICAgICAgIG11dGVkXG4gICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICBsb29wXG4gICAgICAgICAgYXV0b1BsYXk+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCIvY2xvY2tfYWxwaGEud2VibVwiIHR5cGU9XCJ2aWRlby93ZWJtXCIgLz5cbiAgICAgICAgICA8c291cmNlIHNyYz1cIi9jbG9ja19hbHBoYS5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgPC92aWRlbz5cbiAgICAgICAgey8qIDxJbWFnZVxuICAgICAgICAgIHdpZHRoPXs3MDB9XG4gICAgICAgICAgaGVpZ2h0PXs2ODZ9XG4gICAgICAgICAgc3JjPVwiL2hlcm8vY2xvY2suc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJjbG9ja1wiXG4gICAgICAgICAgXG4gICAgICAgIC8+ICovfVxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvaGVyby9saW5ldHJlZS5zdmdcIlxuICAgICAgICAgIGFsdD1cImNsb2NrXCJcbiAgICAgICAgICB3aWR0aD17Nzg3fVxuICAgICAgICAgIGhlaWdodD17MzV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBzbTpweC1bMTAwcHhdIGxnOnB4LTAgei1bMTJdXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LVsxMl0gZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBweC01IGdhcC01IG1kOmdhcC0yMCBtdC03IHctZnVsbFwiPlxuICAgICAgICAgIHtbeyB0aXRsZTogXCJNYXJrZXQgQ2FwXCIsIHZhbHVlOiBgJCR7bWFya2V0Q2FwfWAgfSxcbiAgeyB0aXRsZTogXCJUb2tlbiBQcmljZVwiLCB2YWx1ZTogYCQke3ByaWNlfWAgfSxcbiAgeyB0aXRsZTogXCJIb2xkZXJzXCIsIHZhbHVlOiBgJHtob2xkZXJzfWAgfV0ubWFwKChlbCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2VsLnRpdGxlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS02IHctZnVsbCBweC01IGxnOnB4LTIwIHJvdW5kZWQtWzIwcHhdIGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IGJnLWJhY2tpbmdEYXJrIGZsZXggZmxleC1jb2wgZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWxnIGJ1bGt5XCI+e2VsLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC1bMzJweF0gdGV4dC1wcmltYXJ5IG1vbm90ZXh0XCI+XG4gICAgICAgICAgICAgICAge2VsLnZhbHVlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiSGVybyIsInByaWNlIiwic2V0UHJpY2UiLCJ1c2VTdGF0ZSIsIm1hcmtldENhcCIsInNldE1hcmtldENhcCIsImhvbGRlcnMiLCJzZXRIb2xkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInNwYW4iLCJiciIsImJ1dHRvbiIsInAiLCJ2aWRlbyIsInRpdGxlIiwicG9zdGVyIiwibXV0ZWQiLCJwbGF5c0lubGluZSIsImxvb3AiLCJhdXRvUGxheSIsInNvdXJjZSIsInR5cGUiLCJ2YWx1ZSIsIm1hcCIsImVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Hero.jsx\n"));

/***/ })

});