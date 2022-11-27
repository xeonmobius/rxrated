"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst validateEmail = (email)=>{\n    // regex to validate 99.99% email format\n    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/;\n    return regex.test(email);\n};\nfunction Home() {\n    const [myForm, setMyForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const onEmailChange = (e)=>{\n        e.preventDefault();\n        setMyForm({\n            ...myForm,\n            email: e.target.value\n        });\n    };\n    const onUsernameChange = (e)=>{\n        e.preventDefault();\n        setMyForm({\n            ...myForm,\n            username: e.target.value\n        });\n    };\n    const onPasswordChange = (e)=>{\n        e.preventDefault();\n        setMyForm({\n            ...myForm,\n            password: e.target.value\n        });\n    };\n    const signup = async (e)=>{\n        e.preventDefault();\n        const payload = {\n            username: myForm.username,\n            email: myForm.email,\n            password: myForm.password\n        };\n        const { data , status  } = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/login/\", payload);\n        if (status === 200) {\n            console.info(data);\n        //router.push(\"/home\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: signup,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"username:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"username\",\n                name: \"username\",\n                value: myForm.username,\n                onChange: (e)=>onUsernameChange(e)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"email:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"email\",\n                name: \"email\",\n                value: myForm.email,\n                onChange: (e)=>onEmailChange(e)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"password:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                id: \"password\",\n                name: \"password\",\n                value: myForm.password,\n                onChange: (e)=>onPasswordChange(e)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shann\\\\OneDrive\\\\Desktop\\\\rxrated\\\\rxrated-fe\\\\pages\\\\index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2M7QUFDUTtBQUVoRCxNQUFNSyxnQkFBZ0IsQ0FBQ0MsUUFBVTtJQUMvQix3Q0FBd0M7SUFDeEMsTUFBTUMsUUFBUTtJQUNkLE9BQU9BLE1BQU1DLElBQUksQ0FBQ0Y7QUFDcEI7QUFFZSxTQUFTRyxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUFFSSxPQUFPO1FBQUlNLFVBQVU7SUFBRztJQUUvRCxNQUFNQyxTQUFTVCxzREFBU0E7SUFFeEIsTUFBTVUsZ0JBQWdCLENBQUNDLElBQU07UUFDM0JBLEVBQUVDLGNBQWM7UUFDaEJMLFVBQVU7WUFBRSxHQUFHRCxNQUFNO1lBQUVKLE9BQU9TLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUFDO0lBQy9DO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNKLElBQU07UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEJMLFVBQVU7WUFBRSxHQUFHRCxNQUFNO1lBQUVVLFVBQVVMLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUFDO0lBQ2xEO0lBRUEsTUFBTUcsbUJBQW1CLENBQUNOLElBQU07UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEJMLFVBQVU7WUFBRSxHQUFHRCxNQUFNO1lBQUVFLFVBQVVHLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUFDO0lBQ2xEO0lBRUEsTUFBTUksU0FBUyxPQUFPUCxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1PLFVBQVU7WUFDZEgsVUFBVVYsT0FBT1UsUUFBUTtZQUN6QmQsT0FBT0ksT0FBT0osS0FBSztZQUNuQk0sVUFBVUYsT0FBT0UsUUFBUTtRQUMzQjtRQUVBLE1BQU0sRUFBRVksS0FBSSxFQUFFQyxPQUFNLEVBQUUsR0FBRyxNQUFNekIsa0RBQVUsQ0FDdkMsZ0NBQ0F1QjtRQUdGLElBQUlFLFdBQVcsS0FBSztZQUNsQkUsUUFBUUMsSUFBSSxDQUFDSjtRQUNiLHVCQUF1QjtRQUN6QixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0s7UUFBS0MsVUFBVVI7OzBCQUNkLDhEQUFDUzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsSUFBRztnQkFDSEMsTUFBSztnQkFDTGpCLE9BQU9SLE9BQU9VLFFBQVE7Z0JBQ3RCZ0IsVUFBVSxDQUFDckIsSUFBTUksaUJBQWlCSjs7Ozs7OzBCQUVwQyw4REFBQ3NCOzs7OzswQkFDRCw4REFBQ047MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xqQixPQUFPUixPQUFPSixLQUFLO2dCQUNuQjhCLFVBQVUsQ0FBQ3JCLElBQU1ELGNBQWNDOzs7Ozs7MEJBRWpDLDhEQUFDc0I7Ozs7OzBCQUNELDhEQUFDTjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsSUFBRztnQkFDSEMsTUFBSztnQkFDTGpCLE9BQU9SLE9BQU9FLFFBQVE7Z0JBQ3RCd0IsVUFBVSxDQUFDckIsSUFBTU0saUJBQWlCTjs7Ozs7OzBCQUVwQyw4REFBQ3NCOzs7OzswQkFDRCw4REFBQ0M7Z0JBQU9MLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnhyYXRlZC1mZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XG4gIC8vIHJlZ2V4IHRvIHZhbGlkYXRlIDk5Ljk5JSBlbWFpbCBmb3JtYXRcbiAgY29uc3QgcmVnZXggPSAvW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLH0kLztcbiAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW215Rm9ybSwgc2V0TXlGb3JtXSA9IHVzZVN0YXRlKHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IG9uRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRNeUZvcm0oeyAuLi5teUZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBvblVzZXJuYW1lQ2hhbmdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TXlGb3JtKHsgLi4ubXlGb3JtLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25QYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldE15Rm9ybSh7IC4uLm15Rm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNpZ251cCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHVzZXJuYW1lOiBteUZvcm0udXNlcm5hbWUsXG4gICAgICBlbWFpbDogbXlGb3JtLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IG15Rm9ybS5wYXNzd29yZCxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbi9cIixcbiAgICAgIHBheWxvYWRcbiAgICApO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmluZm8oZGF0YSk7XG4gICAgICAvL3JvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3NpZ251cH0+XG4gICAgICA8bGFiZWw+dXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICB2YWx1ZT17bXlGb3JtLnVzZXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXNlcm5hbWVDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8bGFiZWw+ZW1haWw6PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICB2YWx1ZT17bXlGb3JtLmVtYWlsfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRW1haWxDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8bGFiZWw+cGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e215Rm9ybS5wYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblBhc3N3b3JkQ2hhbmdlKGUpfVxuICAgICAgLz5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwidXNlUm91dGVyIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmVnZXgiLCJ0ZXN0IiwiSG9tZSIsIm15Rm9ybSIsInNldE15Rm9ybSIsInBhc3N3b3JkIiwicm91dGVyIiwib25FbWFpbENoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwib25Vc2VybmFtZUNoYW5nZSIsInVzZXJuYW1lIiwib25QYXNzd29yZENoYW5nZSIsInNpZ251cCIsInBheWxvYWQiLCJkYXRhIiwic3RhdHVzIiwicG9zdCIsImNvbnNvbGUiLCJpbmZvIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();