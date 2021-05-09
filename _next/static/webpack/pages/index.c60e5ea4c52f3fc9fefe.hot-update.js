self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/vaccine-centre-table.tsx":
/*!*********************************************!*\
  !*** ./components/vaccine-centre-table.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\mrmil\\Desktop\\nextjs cowin\\cowin-tracker\\components\\vaccine-centre-table.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var ROW_PER_PAGE = 10;
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function () {
  return {
    flexCenter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    emptyBox: {
      padding: 32,
      minWidth: 300,
      width: '50%'
    }
  };
});

var VaccineCentreTable = function VaccineCentreTable(_ref) {
  _s();

  var centreList = _ref.centreList;
  var styles = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      newAvailable = _useState[0],
      setNewAvailable = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      availableData = _useState2[0],
      setAvailableData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      tableRows = _useState3[0],
      setTableRows = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      rowsToRender = _useState4[0],
      setRowsToRender = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      page = _useState5[0],
      setPage = _useState5[1];

  var headerList = ['available_capacity', 'vaccine', 'district_name', 'address', 'date', 'fee_type'];
  var headerMap = {
    available_capacity: {
      displayName: 'Available',
      type: 'chip',
      width: 100
    },
    district_name: {
      displayName: 'District',
      type: 'text',
      width: 'auto'
    },
    address: {
      displayName: 'Address',
      type: 'text',
      width: 'auto'
    },
    date: {
      displayName: 'Date',
      type: 'text',
      width: 'auto'
    },
    pincode: {
      displayName: 'Pincode',
      type: 'text',
      width: 'auto'
    },
    fee_type: {
      displayName: 'Type',
      type: 'text',
      width: 100
    },
    vaccine: {
      displayName: 'Vaccine',
      type: 'text',
      width: 'auto'
    },
    s_no: {
      displayName: 'Serial No',
      type: 'text',
      width: 'auto'
    }
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var updateAvailableData = function updateAvailableData() {
    var cnt = 0;
    var prepareList = availableData.reduce(function (current, data) {
      var rowList = data.sessions.map(function (_ref2) {
        var available_capacity = _ref2.available_capacity,
            vaccine = _ref2.vaccine,
            date = _ref2.date;
        cnt++;
        return {
          s_no: cnt,
          available_capacity: available_capacity,
          vaccine: vaccine,
          date: date,
          fee_type: data.fee_type,
          address: data.address,
          blockName: data.block_name,
          pincode: data.pincode,
          district_name: data.district_name
        };
      });
      return current.concat(rowList);
    }, []);
    setTableRows(prepareList);
    setPage(0);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var currentRow = page * ROW_PER_PAGE;
    var rows = tableRows.slice(currentRow, currentRow + ROW_PER_PAGE);
    setRowsToRender(rows);
  }, [tableRows, page]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (newAvailable === false) {
      updateAvailableData();
    }
  }, [availableData, newAvailable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (centreList) {
      console.log(centreList);
      setAvailableData(centreList);
      setNewAvailable(true);
    }
  }, [centreList]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles.flexCenter,
    children: centreList.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {
      elevation: 3,
      className: "".concat(styles.emptyBox, " ").concat(styles.flexCenter),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/covid-data.svg",
        alt: "empty",
        width: "300",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        variant: "h6",
        color: "textPrimary",
        children: "No Vaccine Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        variant: "subtitle1",
        children: "Keep Patience. We'll update as soon as vaccine are available"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableContainer, {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Table, {
        "aria-label": "Available Vaccine Table",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableHead, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
            children: headerList.map(function (value, index) {
              var _headerMap$value, _headerMap$value2;

              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                style: {
                  width: (_headerMap$value = headerMap[value]) === null || _headerMap$value === void 0 ? void 0 : _headerMap$value.width
                },
                children: (_headerMap$value2 = headerMap[value]) === null || _headerMap$value2 === void 0 ? void 0 : _headerMap$value2.displayName
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 74
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableBody, {
          children: rowsToRender.map(function (value, rowIndex) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
              children: headerList.map(function (col, index) {
                var _headerMap$col;

                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                  style: {
                    width: (_headerMap$col = headerMap[col]) === null || _headerMap$col === void 0 ? void 0 : _headerMap$col.width
                  },
                  children: [col === 'available_capacity' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                    label: value[col],
                    style: {
                      backgroundColor: value[col] > 10 ? '#a9d18e' : '#ffbf00'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 57
                  }, _this), col === 'fee_type' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: value[col].toUpperCase() === 'FREE' ? value[col] : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                      style: {
                        backgroundColor: '#e96565',
                        color: '#ffffff'
                      },
                      label: value[col]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 69
                    }, _this)
                  }, void 0, false), ['fee_type', 'available_capacity'].indexOf(col) === -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: headerMap[col].type === 'chip' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                      label: value[col]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 69
                    }, _this) : value[col]
                  }, void 0, false)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 80
                }, _this);
              })
            }, rowIndex, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 41
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TablePagination, {
        component: "div",
        count: tableRows.length,
        rowsPerPage: ROW_PER_PAGE,
        page: page,
        rowsPerPageOptions: [],
        onChangePage: handleChangePage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }, _this);
};

_s(VaccineCentreTable, "cb/LfbgGljJfvBGa15C0Utu21Vg=", false, function () {
  return [useStyles];
});

_c = VaccineCentreTable;
/* harmony default export */ __webpack_exports__["default"] = (VaccineCentreTable);

var _c;

$RefreshReg$(_c, "VaccineCentreTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92YWNjaW5lLWNlbnRyZS10YWJsZS50c3giXSwibmFtZXMiOlsiUk9XX1BFUl9QQUdFIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImZsZXhDZW50ZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImVtcHR5Qm94IiwicGFkZGluZyIsIm1pbldpZHRoIiwid2lkdGgiLCJWYWNjaW5lQ2VudHJlVGFibGUiLCJjZW50cmVMaXN0Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJuZXdBdmFpbGFibGUiLCJzZXROZXdBdmFpbGFibGUiLCJhdmFpbGFibGVEYXRhIiwic2V0QXZhaWxhYmxlRGF0YSIsInRhYmxlUm93cyIsInNldFRhYmxlUm93cyIsInJvd3NUb1JlbmRlciIsInNldFJvd3NUb1JlbmRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaGVhZGVyTGlzdCIsImhlYWRlck1hcCIsImF2YWlsYWJsZV9jYXBhY2l0eSIsImRpc3BsYXlOYW1lIiwidHlwZSIsImRpc3RyaWN0X25hbWUiLCJhZGRyZXNzIiwiZGF0ZSIsInBpbmNvZGUiLCJmZWVfdHlwZSIsInZhY2NpbmUiLCJzX25vIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsInVwZGF0ZUF2YWlsYWJsZURhdGEiLCJjbnQiLCJwcmVwYXJlTGlzdCIsInJlZHVjZSIsImN1cnJlbnQiLCJkYXRhIiwicm93TGlzdCIsInNlc3Npb25zIiwibWFwIiwiYmxvY2tOYW1lIiwiYmxvY2tfbmFtZSIsImNvbmNhdCIsInVzZUVmZmVjdCIsImN1cnJlbnRSb3ciLCJyb3dzIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiUGFwZXIiLCJ2YWx1ZSIsImluZGV4Iiwicm93SW5kZXgiLCJjb2wiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b1VwcGVyQ2FzZSIsImNvbG9yIiwiaW5kZXhPZiJdLCJt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QU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1FSCxDQXpJRDs7R0FBTTFCLGtCO1VBRWFYLFM7OztLQUZiVyxrQjtBQTJJTiwrREFBZUEsa0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzYwZTVlYTRjNTJmM2ZjOWZlZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlLCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBQYXBlciwgVGFibGVCb2R5LCBUYWJsZVBhZ2luYXRpb24sIEJ1dHRvbiwgQ2hpcCwgQ2FyZENvbnRlbnQsIENhcmQsIENhcmRNZWRpYSwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IElWYWNjaW5lQ2VudHJlIH0gZnJvbSBcIi4uL21vZGVsL3ZhY2NpbmUtY2VudHJlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgSVZhY2NpbmVDZW50cmVUYWJsZVByb3BzIHtcclxuICAgIGNlbnRyZUxpc3Q6IElWYWNjaW5lQ2VudHJlW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJVGFibGVSb3cge1xyXG4gICAgYXZhaWxhYmxlX2NhcGFjaXR5OiBudW1iZXI7XHJcbiAgICB2YWNjaW5lOiBzdHJpbmc7XHJcbiAgICBkaXN0cmljdF9uYW1lOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBibG9ja05hbWU6IHN0cmluZztcclxuICAgIHBpbmNvZGU6IHN0cmluZztcclxuICAgIGRhdGU6IHN0cmluZztcclxuICAgIGZlZV90eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJPV19QRVJfUEFHRSA9IDEwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgZmxleENlbnRlcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBlbXB0eUJveDoge1xyXG4gICAgICAgIHBhZGRpbmc6IDMyLFxyXG4gICAgICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICAgICAgd2lkdGg6ICc1MCUnXHJcbiAgICB9XHJcbn0pKVxyXG5cclxuY29uc3QgVmFjY2luZUNlbnRyZVRhYmxlOiBSZWFjdC5GQzxJVmFjY2luZUNlbnRyZVRhYmxlUHJvcHM+ID0gKHsgY2VudHJlTGlzdCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW25ld0F2YWlsYWJsZSwgc2V0TmV3QXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdmFpbGFibGVEYXRhLCBzZXRBdmFpbGFibGVEYXRhXSA9IHVzZVN0YXRlPElWYWNjaW5lQ2VudHJlW10+KFtdKTtcclxuICAgIGNvbnN0IFt0YWJsZVJvd3MsIHNldFRhYmxlUm93c10gPSB1c2VTdGF0ZTxJVGFibGVSb3dbXT4oW10pO1xyXG4gICAgY29uc3QgW3Jvd3NUb1JlbmRlciwgc2V0Um93c1RvUmVuZGVyXSA9IHVzZVN0YXRlPElUYWJsZVJvd1tdPihbXSk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJMaXN0ID0gWydhdmFpbGFibGVfY2FwYWNpdHknLCAndmFjY2luZScsICdkaXN0cmljdF9uYW1lJywgJ2FkZHJlc3MnLCAnZGF0ZScsICdmZWVfdHlwZSddO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlck1hcCA9IHtcclxuICAgICAgICBhdmFpbGFibGVfY2FwYWNpdHk6IHsgZGlzcGxheU5hbWU6ICdBdmFpbGFibGUnLCB0eXBlOiAnY2hpcCcsIHdpZHRoOiAxMDAgfSxcclxuICAgICAgICBkaXN0cmljdF9uYW1lOiB7IGRpc3BsYXlOYW1lOiAnRGlzdHJpY3QnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICBhZGRyZXNzOiB7IGRpc3BsYXlOYW1lOiAnQWRkcmVzcycsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgIGRhdGU6IHsgZGlzcGxheU5hbWU6ICdEYXRlJywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgcGluY29kZTogeyBkaXNwbGF5TmFtZTogJ1BpbmNvZGUnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICBmZWVfdHlwZTogeyBkaXNwbGF5TmFtZTogJ1R5cGUnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAxMDAgfSxcclxuICAgICAgICB2YWNjaW5lOiB7IGRpc3BsYXlOYW1lOiAnVmFjY2luZScsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgIHNfbm86IHsgZGlzcGxheU5hbWU6ICdTZXJpYWwgTm8nLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQ6IHVua25vd24sIG5ld1BhZ2U6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQXZhaWxhYmxlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgY250ID0gMDtcclxuICAgICAgICBjb25zdCBwcmVwYXJlTGlzdCA9IGF2YWlsYWJsZURhdGEucmVkdWNlKChjdXJyZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0xpc3Q6IElUYWJsZVJvd1tdID0gZGF0YS5zZXNzaW9ucy5tYXAoKHsgYXZhaWxhYmxlX2NhcGFjaXR5LCB2YWNjaW5lLCBkYXRlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzX25vOiBjbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlX2NhcGFjaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhY2NpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBmZWVfdHlwZTogZGF0YS5mZWVfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tOYW1lOiBkYXRhLmJsb2NrX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGluY29kZTogZGF0YS5waW5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RyaWN0X25hbWU6IGRhdGEuZGlzdHJpY3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudC5jb25jYXQocm93TGlzdCk7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIHNldFRhYmxlUm93cyhwcmVwYXJlTGlzdCk7XHJcbiAgICAgICAgc2V0UGFnZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3cgPSAocGFnZSAqIFJPV19QRVJfUEFHRSk7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHRhYmxlUm93cy5zbGljZShjdXJyZW50Um93LCBjdXJyZW50Um93ICsgUk9XX1BFUl9QQUdFKTtcclxuICAgICAgICBzZXRSb3dzVG9SZW5kZXIocm93cyk7XHJcbiAgICB9LCBbdGFibGVSb3dzLCBwYWdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdBdmFpbGFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUF2YWlsYWJsZURhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXZhaWxhYmxlRGF0YSwgbmV3QXZhaWxhYmxlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjZW50cmVMaXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNlbnRyZUxpc3QpO1xyXG4gICAgICAgICAgICBzZXRBdmFpbGFibGVEYXRhKGNlbnRyZUxpc3QpO1xyXG4gICAgICAgICAgICBzZXROZXdBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NlbnRyZUxpc3RdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q2VudGVyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2VudHJlTGlzdC5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmVtcHR5Qm94fSAke3N0eWxlcy5mbGV4Q2VudGVyfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvdmlkLWRhdGEuc3ZnXCIgYWx0PVwiZW1wdHlcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5ObyBWYWNjaW5lIEZvdW5kPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+S2VlcCBQYXRpZW5jZS4gV2UnbGwgdXBkYXRlIGFzIHNvb24gYXMgdmFjY2luZSBhcmUgYXZhaWxhYmxlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJBdmFpbGFibGUgVmFjY2luZSBUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckxpc3QubWFwKCh2YWx1ZSwgaW5kZXgpID0+IDxUYWJsZUNlbGwga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6IGhlYWRlck1hcFt2YWx1ZV0/LndpZHRoIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJNYXBbdmFsdWVdPy5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzVG9SZW5kZXIubWFwKCh2YWx1ZSwgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvd0luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckxpc3QubWFwKChjb2wsIGluZGV4KSA9PiA8VGFibGVDZWxsIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBoZWFkZXJNYXBbY29sXT8ud2lkdGggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID09PSAnYXZhaWxhYmxlX2NhcGFjaXR5JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPXt2YWx1ZVtjb2xdfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlW2NvbF0gPiAxMCA/ICcjYTlkMThlJyA6ICcjZmZiZjAwJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9PT0gJ2ZlZV90eXBlJyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtjb2xdLnRvVXBwZXJDYXNlKCkgPT09ICdGUkVFJyA/IHZhbHVlW2NvbF0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNlOTY1NjUnLCBjb2xvcjogJyNmZmZmZmYnIH19IGxhYmVsPXt2YWx1ZVtjb2xdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WydmZWVfdHlwZScsICdhdmFpbGFibGVfY2FwYWNpdHknXS5pbmRleE9mKGNvbCkgPT09IC0xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWFwW2NvbF0udHlwZSA9PT0gJ2NoaXAnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD17dmFsdWVbY29sXX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXt0YWJsZVJvd3MubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e1JPV19QRVJfUEFHRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1tdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFjY2luZUNlbnRyZVRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=