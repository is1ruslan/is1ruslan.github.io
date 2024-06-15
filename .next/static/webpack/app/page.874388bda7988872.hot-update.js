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

/***/ "(app-pages-browser)/./components/WhyUs.jsx":
/*!******************************!*\
  !*** ./components/WhyUs.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst cardArr = [\n    {\n        title: \"Safety First\",\n        icon: \"/whyus/safety.svg\",\n        description: \"Our protocol works on smart contracts, ensuring transparency and strict adherence to terms for each party of the deal.\",\n        firstText: true\n    },\n    {\n        title: \"Security and Trust Assurance\",\n        icon: \"/whyus/immediate.svg\",\n        description: \"To build a foundation of trust and security, we have undergone an audit and KYC process with Cyberscope, one of the leading companies in this field.\",\n        secondText: true\n    },\n    {\n        title: \"Сonfidential Experience\",\n        icon: \"/whyus/global.svg\",\n        description: \"Privacy enabled by decentralization.\"\n    }\n];\nconst WhyUs = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-[15px] sm:p-[30px] lg:p-[60px] flex flex-col gap-[15px] sm:gap-[30px] items-center border border-secondary rounded-[30px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-[32px] sm:text-[46px] text-center\",\n                children: \"Why Choose OpenLiquidity?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 gap-[30px]\",\n                children: cardArr.map((el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-highlightDark bg-moduleDark rounded-2xl p-[15px] sm:p-[30px] flex flex-col gap-[15px] \".concat(index === 2 ? \"col-span-3 lg:col-span-1\" : \"col-span-3 lg:col-span-1 justify-between\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-3 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: el.icon,\n                                        alt: el.title,\n                                        width: 30,\n                                        height: 30\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"bg-brandBacking neutral text-brand px-[10px] py-[6px] rounded-[15px]\",\n                                        children: el.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm sm:text-base text-landingSubtext\",\n                                children: el.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            el.firstText ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm sm:text-base justify-center text-maintextDark rounded-2xl flex items-center gap-3 px-0 sm:px-5 py-1 border-0 sm:border border-secondary\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"block lg:hidden  font-thin\",\n                                        children: \"Powered by\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"hover:scale-105 ease-linear duration-100 transition-all\",\n                                        href: \"https://cryptodo.app\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            src: \"/whyus/cryptodo2.png\",\n                                            alt: \"kleros\",\n                                            width: 40,\n                                            height: 15,\n                                            className: \"my-3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"block xl:block sm:text-sm md:text-md lg:text-xl font-thin\",\n                                        children: \"CryptoDo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined) : el.secondText ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm min-h-[73px] justify-center sm:text-sm rounded-2xl flex  items-center gap-3 lg:gap-3 2xl:gap-6 px-0 sm:px-5 py-1 border-0 sm:border border-secondary\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"block neutral lg:hidden xl:block my-3 min-w-[63px] text-center px-3 py-2 rounded-xl hover:bg-[#DCB97640] ease-linear duration-100 transition-all text-primary bg-brandBacking\",\n                                        href: \"https://github.com/cyberscope-io/audits/blob/main/0xlp/audit.pdf\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"Audit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: \"/whyus/cyberscope.png\",\n                                        alt: \"kleros\",\n                                        width: 224,\n                                        height: 40,\n                                        className: \"w-[47%] sm:w-auto xl:w-[47%]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"block neutral lg:hidden xl:block my-3 min-w-[63px] text-center px-3 py-2 rounded-xl hover:bg-[#DCB97640] ease-linear duration-100 transition-all text-primary bg-brandBacking\",\n                                        href: \"https://github.com/coinscope-co/kyc/blob/main/0xlp/kyc.png\",\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"KYC\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined) : null\n                        ]\n                    }, el.title, true, {\n                        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mnogo\\\\VSCodeProjects\\\\0xlend\\\\components\\\\WhyUs.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WhyUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhyUs);\nvar _c;\n$RefreshReg$(_c, \"WhyUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2h5VXMuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUNMO0FBRTFCLE1BQU1FLFVBQVU7SUFDZDtRQUNFQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxXQUFXO0lBQ2I7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFDRTtRQUNGRSxZQUFZO0lBQ2Q7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFDRTtJQUNKO0NBQ0Q7QUFFRCxNQUFNRyxRQUFRO0lBQ1oscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUM7Ozs7OzswQkFHdkQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaUixRQUFRVSxHQUFHLENBQUMsQ0FBQ0MsSUFBSUMsc0JBQ2hCLDhEQUFDTDt3QkFFQ0MsV0FBVyx1R0FJVixPQUhDSSxVQUFVLElBQ04sNkJBQ0E7OzBDQUdOLDhEQUFDTDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNWLGtEQUFLQTt3Q0FBQ2UsS0FBS0YsR0FBR1QsSUFBSTt3Q0FBRVksS0FBS0gsR0FBR1YsS0FBSzt3Q0FBRWMsT0FBTzt3Q0FBSUMsUUFBUTs7Ozs7O29DQUFPO2tEQUM5RCw4REFBQ0M7d0NBQUVULFdBQVU7a0RBQ1ZHLEdBQUdWLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FHYiw4REFBQ2dCO2dDQUFFVCxXQUFVOzBDQUNWRyxHQUFHUixXQUFXOzs7Ozs7NEJBRWhCUSxHQUFHUCxTQUFTLGlCQUNYLDhEQUFDRztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNTO3dDQUFFVCxXQUFVO2tEQUE2Qjs7Ozs7O2tEQUcxQyw4REFBQ1U7d0NBQ0NWLFdBQVU7d0NBQ1ZXLE1BQUs7d0NBQ0xDLFFBQU87d0NBQ1BDLEtBQUk7a0RBRUosNEVBQUN2QixrREFBS0E7NENBQ0plLEtBQUk7NENBQ0pDLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JSLFdBQVU7Ozs7Ozs7Ozs7O2tEQUlkLDhEQUFDUzt3Q0FBRVQsV0FBVTtrREFBNEQ7Ozs7Ozs7Ozs7OzRDQUV6RUcsR0FBR04sVUFBVSxpQkFDZiw4REFBQ0U7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDVTt3Q0FDQ1YsV0FBVTt3Q0FDVlcsTUFBSzt3Q0FDTEMsUUFBTzt3Q0FDUEMsS0FBSTtrREFDTDs7Ozs7O2tEQUdELDhEQUFDdkIsa0RBQUtBO3dDQUNKZSxLQUFJO3dDQUNKQyxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSUixXQUFVOzs7Ozs7a0RBRVosOERBQUNVO3dDQUNDVixXQUFVO3dDQUNWVyxNQUFLO3dDQUNMQyxRQUFPO3dDQUNQQyxLQUFJO2tEQUNMOzs7Ozs7Ozs7Ozs0Q0FJRDs7dUJBaEVDVixHQUFHVixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBc0V6QjtLQS9FTUs7QUFpRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaHlVcy5qc3g/NGI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY2FyZEFyciA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlNhZmV0eSBGaXJzdFwiLFxuICAgIGljb246IFwiL3doeXVzL3NhZmV0eS5zdmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiT3VyIHByb3RvY29sIHdvcmtzIG9uIHNtYXJ0IGNvbnRyYWN0cywgZW5zdXJpbmcgdHJhbnNwYXJlbmN5IGFuZCBzdHJpY3QgYWRoZXJlbmNlIHRvIHRlcm1zIGZvciBlYWNoIHBhcnR5IG9mIHRoZSBkZWFsLlwiLFxuICAgIGZpcnN0VGV4dDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNlY3VyaXR5IGFuZCBUcnVzdCBBc3N1cmFuY2VcIixcbiAgICBpY29uOiBcIi93aHl1cy9pbW1lZGlhdGUuc3ZnXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRvIGJ1aWxkIGEgZm91bmRhdGlvbiBvZiB0cnVzdCBhbmQgc2VjdXJpdHksIHdlIGhhdmUgdW5kZXJnb25lIGFuIGF1ZGl0IGFuZCBLWUMgcHJvY2VzcyB3aXRoIEN5YmVyc2NvcGUsIG9uZSBvZiB0aGUgbGVhZGluZyBjb21wYW5pZXMgaW4gdGhpcyBmaWVsZC5cIixcbiAgICBzZWNvbmRUZXh0OiB0cnVlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwi0KFvbmZpZGVudGlhbCBFeHBlcmllbmNlXCIsXG4gICAgaWNvbjogXCIvd2h5dXMvZ2xvYmFsLnN2Z1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQcml2YWN5IGVuYWJsZWQgYnkgZGVjZW50cmFsaXphdGlvbi5cIixcbiAgfSxcbl07XG5cbmNvbnN0IFdoeVVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC1bMTVweF0gc206cC1bMzBweF0gbGc6cC1bNjBweF0gZmxleCBmbGV4LWNvbCBnYXAtWzE1cHhdIHNtOmdhcC1bMzBweF0gaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IHJvdW5kZWQtWzMwcHhdXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bMzJweF0gc206dGV4dC1bNDZweF0gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgV2h5IENob29zZSBPcGVuTGlxdWlkaXR5P1xuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtWzMwcHhdXCI+XG4gICAgICAgIHtjYXJkQXJyLm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtlbC50aXRsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItaGlnaGxpZ2h0RGFyayBiZy1tb2R1bGVEYXJrIHJvdW5kZWQtMnhsIHAtWzE1cHhdIHNtOnAtWzMwcHhdIGZsZXggZmxleC1jb2wgZ2FwLVsxNXB4XSAke1xuICAgICAgICAgICAgICBpbmRleCA9PT0gMlxuICAgICAgICAgICAgICAgID8gXCJjb2wtc3Bhbi0zIGxnOmNvbC1zcGFuLTFcIlxuICAgICAgICAgICAgICAgIDogXCJjb2wtc3Bhbi0zIGxnOmNvbC1zcGFuLTEganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZWwuaWNvbn0gYWx0PXtlbC50aXRsZX0gd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmctYnJhbmRCYWNraW5nIG5ldXRyYWwgdGV4dC1icmFuZCBweC1bMTBweF0gcHktWzZweF0gcm91bmRlZC1bMTVweF1cIj5cbiAgICAgICAgICAgICAgICB7ZWwudGl0bGV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2UgdGV4dC1sYW5kaW5nU3VidGV4dFwiPlxuICAgICAgICAgICAgICB7ZWwuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7ZWwuZmlyc3RUZXh0ID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlIGp1c3RpZnktY2VudGVyIHRleHQtbWFpbnRleHREYXJrIHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTAgc206cHgtNSBweS0xIGJvcmRlci0wIHNtOmJvcmRlciBib3JkZXItc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuICBmb250LXRoaW5cIj5cbiAgICAgICAgICAgICAgICAgIFBvd2VyZWQgYnlcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnNjYWxlLTEwNSBlYXNlLWxpbmVhciBkdXJhdGlvbi0xMDAgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY3J5cHRvZG8uYXBwXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3doeXVzL2NyeXB0b2RvMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJrbGVyb3NcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayB4bDpibG9jayBzbTp0ZXh0LXNtIG1kOnRleHQtbWQgbGc6dGV4dC14bCBmb250LXRoaW5cIj5DcnlwdG9EbzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogZWwuc2Vjb25kVGV4dCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1pbi1oLVs3M3B4XSBqdXN0aWZ5LWNlbnRlciBzbTp0ZXh0LXNtIHJvdW5kZWQtMnhsIGZsZXggIGl0ZW1zLWNlbnRlciBnYXAtMyBsZzpnYXAtMyAyeGw6Z2FwLTYgcHgtMCBzbTpweC01IHB5LTEgYm9yZGVyLTAgc206Ym9yZGVyIGJvcmRlci1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbmV1dHJhbCBsZzpoaWRkZW4geGw6YmxvY2sgbXktMyBtaW4tdy1bNjNweF0gdGV4dC1jZW50ZXIgcHgtMyBweS0yIHJvdW5kZWQteGwgaG92ZXI6YmctWyNEQ0I5NzY0MF0gZWFzZS1saW5lYXIgZHVyYXRpb24tMTAwIHRyYW5zaXRpb24tYWxsIHRleHQtcHJpbWFyeSBiZy1icmFuZEJhY2tpbmdcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jeWJlcnNjb3BlLWlvL2F1ZGl0cy9ibG9iL21haW4vMHhscC9hdWRpdC5wZGZcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEF1ZGl0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3doeXVzL2N5YmVyc2NvcGUucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImtsZXJvc1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjI0fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzQ3JV0gc206dy1hdXRvIHhsOnctWzQ3JV1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG5ldXRyYWwgbGc6aGlkZGVuIHhsOmJsb2NrIG15LTMgbWluLXctWzYzcHhdIHRleHQtY2VudGVyIHB4LTMgcHktMiByb3VuZGVkLXhsIGhvdmVyOmJnLVsjRENCOTc2NDBdIGVhc2UtbGluZWFyIGR1cmF0aW9uLTEwMCB0cmFuc2l0aW9uLWFsbCB0ZXh0LXByaW1hcnkgYmctYnJhbmRCYWNraW5nXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29pbnNjb3BlLWNvL2t5Yy9ibG9iL21haW4vMHhscC9reWMucG5nXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBLWUNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaHlVcztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiY2FyZEFyciIsInRpdGxlIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZmlyc3RUZXh0Iiwic2Vjb25kVGV4dCIsIldoeVVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJlbCIsImluZGV4Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WhyUs.jsx\n"));

/***/ })

});