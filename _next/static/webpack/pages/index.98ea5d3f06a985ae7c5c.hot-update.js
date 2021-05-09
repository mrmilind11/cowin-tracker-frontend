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
          children: [rowsToRender.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "No Available Slot"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 66
          }, _this), rowsToRender.map(function (value, rowIndex) {
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
                    lineNumber: 139,
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
                      lineNumber: 145,
                      columnNumber: 69
                    }, _this)
                  }, void 0, false), ['fee_type', 'available_capacity'].indexOf(col) === -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: headerMap[col].type === 'chip' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Chip, {
                      label: value[col]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 69
                    }, _this) : value[col]
                  }, void 0, false)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 80
                }, _this);
              })
            }, rowIndex, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 41
            }, _this);
          })]
        }, void 0, true, {
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
        lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92YWNjaW5lLWNlbnRyZS10YWJsZS50c3giXSwibmFtZXMiOlsiUk9XX1BFUl9QQUdFIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImZsZXhDZW50ZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImVtcHR5Qm94IiwicGFkZGluZyIsIm1pbldpZHRoIiwid2lkdGgiLCJWYWNjaW5lQ2VudHJlVGFibGUiLCJjZW50cmVMaXN0Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJuZXdBdmFpbGFibGUiLCJzZXROZXdBdmFpbGFibGUiLCJhdmFpbGFibGVEYXRhIiwic2V0QXZhaWxhYmxlRGF0YSIsInRhYmxlUm93cyIsInNldFRhYmxlUm93cyIsInJvd3NUb1JlbmRlciIsInNldFJvd3NUb1JlbmRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaGVhZGVyTGlzdCIsImhlYWRlck1hcCIsImF2YWlsYWJsZV9jYXBhY2l0eSIsImRpc3BsYXlOYW1lIiwidHlwZSIsImRpc3RyaWN0X25hbWUiLCJhZGRyZXNzIiwiZGF0ZSIsInBpbmNvZGUiLCJmZWVfdHlwZSIsInZhY2NpbmUiLCJzX25vIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsInVwZGF0ZUF2YWlsYWJsZURhdGEiLCJjbnQiLCJwcmVwYXJlTGlzdCIsInJlZHVjZSIsImN1cnJlbnQiLCJkYXRhIiwicm93TGlzdCIsInNlc3Npb25zIiwibWFwIiwiYmxvY2tOYW1lIiwiYmxvY2tfbmFtZSIsImNvbmNhdCIsInVzZUVmZmVjdCIsImN1cnJlbnRSb3ciLCJyb3dzIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiUGFwZXIiLCJ2YWx1ZSIsImluZGV4Iiwicm93SW5kZXgiLCJjb2wiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b1VwcGVyQ2FzZSIsImNvbG9yIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQWlCQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDZEQUFVLENBQUM7QUFBQSxTQUFPO0FBQ2hDQyxjQUFVLEVBQUU7QUFDUkMsYUFBTyxFQUFFLE1BREQ7QUFFUkMsbUJBQWEsRUFBRSxRQUZQO0FBR1JDLG9CQUFjLEVBQUUsUUFIUjtBQUlSQyxnQkFBVSxFQUFFO0FBSkosS0FEb0I7QUFPaENDLFlBQVEsRUFBRTtBQUNOQyxhQUFPLEVBQUUsRUFESDtBQUVOQyxjQUFRLEVBQUUsR0FGSjtBQUdOQyxXQUFLLEVBQUU7QUFIRDtBQVBzQixHQUFQO0FBQUEsQ0FBRCxDQUE1Qjs7QUFjQSxJQUFNQyxrQkFBc0QsR0FBRyxTQUF6REEsa0JBQXlELE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUUvRSxNQUFNQyxNQUFNLEdBQUdiLFNBQVMsRUFBeEI7O0FBRitFLGtCQUl2Q2MsK0NBQVEsQ0FBQyxLQUFELENBSitCO0FBQUEsTUFJeEVDLFlBSndFO0FBQUEsTUFJMURDLGVBSjBEOztBQUFBLG1CQUtyQ0YsK0NBQVEsQ0FBbUIsRUFBbkIsQ0FMNkI7QUFBQSxNQUt4RUcsYUFMd0U7QUFBQSxNQUt6REMsZ0JBTHlEOztBQUFBLG1CQU03Q0osK0NBQVEsQ0FBYyxFQUFkLENBTnFDO0FBQUEsTUFNeEVLLFNBTndFO0FBQUEsTUFNN0RDLFlBTjZEOztBQUFBLG1CQU92Q04sK0NBQVEsQ0FBYyxFQUFkLENBUCtCO0FBQUEsTUFPeEVPLFlBUHdFO0FBQUEsTUFPMURDLGVBUDBEOztBQUFBLG1CQVF2RFIsK0NBQVEsQ0FBQyxDQUFELENBUitDO0FBQUEsTUFReEVTLElBUndFO0FBQUEsTUFRbEVDLE9BUmtFOztBQVUvRSxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxvQkFBRCxFQUF1QixTQUF2QixFQUFrQyxlQUFsQyxFQUFtRCxTQUFuRCxFQUE4RCxNQUE5RCxFQUFzRSxVQUF0RSxDQUFuQjtBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUNkQyxzQkFBa0IsRUFBRTtBQUFFQyxpQkFBVyxFQUFFLFdBQWY7QUFBNEJDLFVBQUksRUFBRSxNQUFsQztBQUEwQ25CLFdBQUssRUFBRTtBQUFqRCxLQUROO0FBRWRvQixpQkFBYSxFQUFFO0FBQUVGLGlCQUFXLEVBQUUsVUFBZjtBQUEyQkMsVUFBSSxFQUFFLE1BQWpDO0FBQXlDbkIsV0FBSyxFQUFFO0FBQWhELEtBRkQ7QUFHZHFCLFdBQU8sRUFBRTtBQUFFSCxpQkFBVyxFQUFFLFNBQWY7QUFBMEJDLFVBQUksRUFBRSxNQUFoQztBQUF3Q25CLFdBQUssRUFBRTtBQUEvQyxLQUhLO0FBSWRzQixRQUFJLEVBQUU7QUFBRUosaUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxVQUFJLEVBQUUsTUFBN0I7QUFBcUNuQixXQUFLLEVBQUU7QUFBNUMsS0FKUTtBQUtkdUIsV0FBTyxFQUFFO0FBQUVMLGlCQUFXLEVBQUUsU0FBZjtBQUEwQkMsVUFBSSxFQUFFLE1BQWhDO0FBQXdDbkIsV0FBSyxFQUFFO0FBQS9DLEtBTEs7QUFNZHdCLFlBQVEsRUFBRTtBQUFFTixpQkFBVyxFQUFFLE1BQWY7QUFBdUJDLFVBQUksRUFBRSxNQUE3QjtBQUFxQ25CLFdBQUssRUFBRTtBQUE1QyxLQU5JO0FBT2R5QixXQUFPLEVBQUU7QUFBRVAsaUJBQVcsRUFBRSxTQUFmO0FBQTBCQyxVQUFJLEVBQUUsTUFBaEM7QUFBd0NuQixXQUFLLEVBQUU7QUFBL0MsS0FQSztBQVFkMEIsUUFBSSxFQUFFO0FBQUVSLGlCQUFXLEVBQUUsV0FBZjtBQUE0QkMsVUFBSSxFQUFFLE1BQWxDO0FBQTBDbkIsV0FBSyxFQUFFO0FBQWpEO0FBUlEsR0FBbEI7O0FBV0EsTUFBTTJCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFpQkMsT0FBakIsRUFBcUM7QUFDMURmLFdBQU8sQ0FBQ2UsT0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUIsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxRQUFNQyxXQUFXLEdBQUd6QixhQUFhLENBQUMwQixNQUFkLENBQXFCLFVBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUN4RCxVQUFNQyxPQUFvQixHQUFHRCxJQUFJLENBQUNFLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixpQkFBMkM7QUFBQSxZQUF4Q3JCLGtCQUF3QyxTQUF4Q0Esa0JBQXdDO0FBQUEsWUFBcEJRLE9BQW9CLFNBQXBCQSxPQUFvQjtBQUFBLFlBQVhILElBQVcsU0FBWEEsSUFBVztBQUN0RlMsV0FBRztBQUNILGVBQU87QUFDSEwsY0FBSSxFQUFFSyxHQURIO0FBRUhkLDRCQUFrQixFQUFsQkEsa0JBRkc7QUFHSFEsaUJBQU8sRUFBUEEsT0FIRztBQUlISCxjQUFJLEVBQUpBLElBSkc7QUFLSEUsa0JBQVEsRUFBRVcsSUFBSSxDQUFDWCxRQUxaO0FBTUhILGlCQUFPLEVBQUVjLElBQUksQ0FBQ2QsT0FOWDtBQU9Ia0IsbUJBQVMsRUFBRUosSUFBSSxDQUFDSyxVQVBiO0FBUUhqQixpQkFBTyxFQUFFWSxJQUFJLENBQUNaLE9BUlg7QUFTSEgsdUJBQWEsRUFBRWUsSUFBSSxDQUFDZjtBQVRqQixTQUFQO0FBV0gsT0FiNEIsQ0FBN0I7QUFjQSxhQUFPYyxPQUFPLENBQUNPLE1BQVIsQ0FBZUwsT0FBZixDQUFQO0FBQ0gsS0FoQm1CLEVBZ0JqQixFQWhCaUIsQ0FBcEI7QUFpQkExQixnQkFBWSxDQUFDc0IsV0FBRCxDQUFaO0FBQ0FsQixXQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0gsR0FyQkQ7O0FBdUJBNEIsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsVUFBVSxHQUFJOUIsSUFBSSxHQUFHeEIsWUFBM0I7QUFDQSxRQUFNdUQsSUFBSSxHQUFHbkMsU0FBUyxDQUFDb0MsS0FBVixDQUFnQkYsVUFBaEIsRUFBNEJBLFVBQVUsR0FBR3RELFlBQXpDLENBQWI7QUFDQXVCLG1CQUFlLENBQUNnQyxJQUFELENBQWY7QUFDSCxHQUpRLEVBSU4sQ0FBQ25DLFNBQUQsRUFBWUksSUFBWixDQUpNLENBQVQ7QUFNQTZCLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlyQyxZQUFZLEtBQUssS0FBckIsRUFBNEI7QUFDeEJ5Qix5QkFBbUI7QUFDdEI7QUFDSixHQUpRLEVBSU4sQ0FBQ3ZCLGFBQUQsRUFBZ0JGLFlBQWhCLENBSk0sQ0FBVDtBQU1BcUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSXhDLFVBQUosRUFBZ0I7QUFDWjRDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZN0MsVUFBWjtBQUNBTSxzQkFBZ0IsQ0FBQ04sVUFBRCxDQUFoQjtBQUNBSSxxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNIO0FBQ0osR0FOUSxFQU1OLENBQUNKLFVBQUQsQ0FOTSxDQUFUO0FBUUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLE1BQU0sQ0FBQ1gsVUFBdkI7QUFBQSxjQUVRVSxVQUFVLENBQUM4QyxNQUFYLEtBQXNCLENBQXRCLGdCQUNJLDhEQUFDLG9EQUFEO0FBQU8sZUFBUyxFQUFFLENBQWxCO0FBQXFCLGVBQVMsWUFBSzdDLE1BQU0sQ0FBQ04sUUFBWixjQUF3Qk0sTUFBTSxDQUFDWCxVQUEvQixDQUE5QjtBQUFBLDhCQUNJLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFDLGlCQUFYO0FBQTZCLFdBQUcsRUFBQyxPQUFqQztBQUF5QyxhQUFLLEVBQUMsS0FBL0M7QUFBcUQsY0FBTSxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLDhEQUFDLHlEQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQUssRUFBQyxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0ksOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixnQkFPSSw4REFBQyw2REFBRDtBQUFnQixlQUFTLEVBQUV5RCxvREFBM0I7QUFBQSw4QkFDSSw4REFBQyxvREFBRDtBQUFPLHNCQUFXLHlCQUFsQjtBQUFBLGdDQUNJLDhEQUFDLHdEQUFEO0FBQUEsaUNBQ0ksOERBQUMsdURBQUQ7QUFBQSxzQkFFUWxDLFVBQVUsQ0FBQ3VCLEdBQVgsQ0FBZSxVQUFDWSxLQUFELEVBQVFDLEtBQVI7QUFBQTs7QUFBQSxrQ0FBa0IsOERBQUMsd0RBQUQ7QUFBdUIscUJBQUssRUFBRTtBQUFFbkQsdUJBQUssc0JBQUVnQixTQUFTLENBQUNrQyxLQUFELENBQVgscURBQUUsaUJBQWtCbEQ7QUFBM0IsaUJBQTlCO0FBQUEsK0NBQzVCZ0IsU0FBUyxDQUFDa0MsS0FBRCxDQURtQixzREFDNUIsa0JBQWtCaEM7QUFEVSxpQkFBZ0JpQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFsQjtBQUFBLGFBQWY7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVVJLDhEQUFDLHdEQUFEO0FBQUEscUJBRVF4QyxZQUFZLENBQUNxQyxNQUFiLEtBQXdCLENBQXhCLGlCQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGckMsRUFLUXJDLFlBQVksQ0FBQzJCLEdBQWIsQ0FBaUIsVUFBQ1ksS0FBRCxFQUFRRSxRQUFSO0FBQUEsZ0NBQ2IsOERBQUMsdURBQUQ7QUFBQSx3QkFFUXJDLFVBQVUsQ0FBQ3VCLEdBQVgsQ0FBZSxVQUFDZSxHQUFELEVBQU1GLEtBQU47QUFBQTs7QUFBQSxvQ0FBZ0IsOERBQUMsd0RBQUQ7QUFBdUIsdUJBQUssRUFBRTtBQUFFbkQseUJBQUssb0JBQUVnQixTQUFTLENBQUNxQyxHQUFELENBQVgsbURBQUUsZUFBZ0JyRDtBQUF6QixtQkFBOUI7QUFBQSw2QkFFdkJxRCxHQUFHLEtBQUssb0JBQVIsaUJBQ0EsOERBQUMsbURBQUQ7QUFBTSx5QkFBSyxFQUFFSCxLQUFLLENBQUNHLEdBQUQsQ0FBbEI7QUFBeUIseUJBQUssRUFBRTtBQUFFQyxxQ0FBZSxFQUFFSixLQUFLLENBQUNHLEdBQUQsQ0FBTCxHQUFhLEVBQWIsR0FBa0IsU0FBbEIsR0FBOEI7QUFBakQ7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIdUIsRUFNdkJBLEdBQUcsS0FBSyxVQUFSLGlCQUFzQjtBQUFBLDhCQUVkSCxLQUFLLENBQUNHLEdBQUQsQ0FBTCxDQUFXRSxXQUFYLE9BQTZCLE1BQTdCLEdBQXNDTCxLQUFLLENBQUNHLEdBQUQsQ0FBM0MsZ0JBQ0ksOERBQUMsbURBQUQ7QUFBTSwyQkFBSyxFQUFFO0FBQUVDLHVDQUFlLEVBQUUsU0FBbkI7QUFBOEJFLDZCQUFLLEVBQUU7QUFBckMsdUJBQWI7QUFBK0QsMkJBQUssRUFBRU4sS0FBSyxDQUFDRyxHQUFEO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIVSxtQ0FOQyxFQWExQixDQUFDLFVBQUQsRUFBYSxvQkFBYixFQUFtQ0ksT0FBbkMsQ0FBMkNKLEdBQTNDLE1BQW9ELENBQUMsQ0FBckQsaUJBQ0c7QUFBQSw4QkFFUXJDLFNBQVMsQ0FBQ3FDLEdBQUQsQ0FBVCxDQUFlbEMsSUFBZixLQUF3QixNQUF4QixnQkFDSSw4REFBQyxtREFBRDtBQUFNLDJCQUFLLEVBQUUrQixLQUFLLENBQUNHLEdBQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESixHQUVJSCxLQUFLLENBQUNHLEdBQUQ7QUFKakIsbUNBZHVCO0FBQUEsbUJBQWdCRixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFoQjtBQUFBLGVBQWY7QUFGUixlQUFlQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFqQixDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWdESSw4REFBQyw4REFBRDtBQUNJLGlCQUFTLEVBQUMsS0FEZDtBQUVJLGFBQUssRUFBRTNDLFNBQVMsQ0FBQ3VDLE1BRnJCO0FBR0ksbUJBQVcsRUFBRTNELFlBSGpCO0FBSUksWUFBSSxFQUFFd0IsSUFKVjtBQUtJLDBCQUFrQixFQUFFLEVBTHhCO0FBTUksb0JBQVksRUFBRWM7QUFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzRUgsQ0E1SUQ7O0dBQU0xQixrQjtVQUVhWCxTOzs7S0FGYlcsa0I7QUE4SU4sK0RBQWVBLGtCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4ZWE1ZDNmMDZhOTg1YWU3YzVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVJvdywgUGFwZXIsIFRhYmxlQm9keSwgVGFibGVQYWdpbmF0aW9uLCBCdXR0b24sIENoaXAsIENhcmRDb250ZW50LCBDYXJkLCBDYXJkTWVkaWEsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBJVmFjY2luZUNlbnRyZSB9IGZyb20gXCIuLi9tb2RlbC92YWNjaW5lLWNlbnRyZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIElWYWNjaW5lQ2VudHJlVGFibGVQcm9wcyB7XHJcbiAgICBjZW50cmVMaXN0OiBJVmFjY2luZUNlbnRyZVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVRhYmxlUm93IHtcclxuICAgIGF2YWlsYWJsZV9jYXBhY2l0eTogbnVtYmVyO1xyXG4gICAgdmFjY2luZTogc3RyaW5nO1xyXG4gICAgZGlzdHJpY3RfbmFtZTogc3RyaW5nO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgYmxvY2tOYW1lOiBzdHJpbmc7XHJcbiAgICBwaW5jb2RlOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICBmZWVfdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBST1dfUEVSX1BBR0UgPSAxMDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGZsZXhDZW50ZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgZW1wdHlCb3g6IHtcclxuICAgICAgICBwYWRkaW5nOiAzMixcclxuICAgICAgICBtaW5XaWR0aDogMzAwLFxyXG4gICAgICAgIHdpZHRoOiAnNTAlJ1xyXG4gICAgfVxyXG59KSlcclxuXHJcbmNvbnN0IFZhY2NpbmVDZW50cmVUYWJsZTogUmVhY3QuRkM8SVZhY2NpbmVDZW50cmVUYWJsZVByb3BzPiA9ICh7IGNlbnRyZUxpc3QgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtuZXdBdmFpbGFibGUsIHNldE5ld0F2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYXZhaWxhYmxlRGF0YSwgc2V0QXZhaWxhYmxlRGF0YV0gPSB1c2VTdGF0ZTxJVmFjY2luZUNlbnRyZVtdPihbXSk7XHJcbiAgICBjb25zdCBbdGFibGVSb3dzLCBzZXRUYWJsZVJvd3NdID0gdXNlU3RhdGU8SVRhYmxlUm93W10+KFtdKTtcclxuICAgIGNvbnN0IFtyb3dzVG9SZW5kZXIsIHNldFJvd3NUb1JlbmRlcl0gPSB1c2VTdGF0ZTxJVGFibGVSb3dbXT4oW10pO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyTGlzdCA9IFsnYXZhaWxhYmxlX2NhcGFjaXR5JywgJ3ZhY2NpbmUnLCAnZGlzdHJpY3RfbmFtZScsICdhZGRyZXNzJywgJ2RhdGUnLCAnZmVlX3R5cGUnXTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJNYXAgPSB7XHJcbiAgICAgICAgYXZhaWxhYmxlX2NhcGFjaXR5OiB7IGRpc3BsYXlOYW1lOiAnQXZhaWxhYmxlJywgdHlwZTogJ2NoaXAnLCB3aWR0aDogMTAwIH0sXHJcbiAgICAgICAgZGlzdHJpY3RfbmFtZTogeyBkaXNwbGF5TmFtZTogJ0Rpc3RyaWN0JywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgYWRkcmVzczogeyBkaXNwbGF5TmFtZTogJ0FkZHJlc3MnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICBkYXRlOiB7IGRpc3BsYXlOYW1lOiAnRGF0ZScsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgIHBpbmNvZGU6IHsgZGlzcGxheU5hbWU6ICdQaW5jb2RlJywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgZmVlX3R5cGU6IHsgZGlzcGxheU5hbWU6ICdUeXBlJywgdHlwZTogJ3RleHQnLCB3aWR0aDogMTAwIH0sXHJcbiAgICAgICAgdmFjY2luZTogeyBkaXNwbGF5TmFtZTogJ1ZhY2NpbmUnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICBzX25vOiB7IGRpc3BsYXlOYW1lOiAnU2VyaWFsIE5vJywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50OiB1bmtub3duLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUF2YWlsYWJsZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgY29uc3QgcHJlcGFyZUxpc3QgPSBhdmFpbGFibGVEYXRhLnJlZHVjZSgoY3VycmVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3dMaXN0OiBJVGFibGVSb3dbXSA9IGRhdGEuc2Vzc2lvbnMubWFwKCh7IGF2YWlsYWJsZV9jYXBhY2l0eSwgdmFjY2luZSwgZGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc19ubzogY250LFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZV9jYXBhY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICB2YWNjaW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlX3R5cGU6IGRhdGEuZmVlX3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrTmFtZTogZGF0YS5ibG9ja19uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpbmNvZGU6IGRhdGEucGluY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdF9uYW1lOiBkYXRhLmRpc3RyaWN0X25hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQuY29uY2F0KHJvd0xpc3QpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICBzZXRUYWJsZVJvd3MocHJlcGFyZUxpc3QpO1xyXG4gICAgICAgIHNldFBhZ2UoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um93ID0gKHBhZ2UgKiBST1dfUEVSX1BBR0UpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0YWJsZVJvd3Muc2xpY2UoY3VycmVudFJvdywgY3VycmVudFJvdyArIFJPV19QRVJfUEFHRSk7XHJcbiAgICAgICAgc2V0Um93c1RvUmVuZGVyKHJvd3MpO1xyXG4gICAgfSwgW3RhYmxlUm93cywgcGFnZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobmV3QXZhaWxhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVBdmFpbGFibGVEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F2YWlsYWJsZURhdGEsIG5ld0F2YWlsYWJsZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2VudHJlTGlzdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjZW50cmVMaXN0KTtcclxuICAgICAgICAgICAgc2V0QXZhaWxhYmxlRGF0YShjZW50cmVMaXN0KTtcclxuICAgICAgICAgICAgc2V0TmV3QXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjZW50cmVMaXN0XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleENlbnRlcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNlbnRyZUxpc3QubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5lbXB0eUJveH0gJHtzdHlsZXMuZmxleENlbnRlcn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb3ZpZC1kYXRhLnN2Z1wiIGFsdD1cImVtcHR5XCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+Tm8gVmFjY2luZSBGb3VuZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPktlZXAgUGF0aWVuY2UuIFdlJ2xsIHVwZGF0ZSBhcyBzb29uIGFzIHZhY2NpbmUgYXJlIGF2YWlsYWJsZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiQXZhaWxhYmxlIFZhY2NpbmUgVGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJMaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiA8VGFibGVDZWxsIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBoZWFkZXJNYXBbdmFsdWVdPy53aWR0aCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyTWFwW3ZhbHVlXT8uZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1RvUmVuZGVyLmxlbmd0aCA9PT0gMCAmJiA8ZGl2Pk5vIEF2YWlsYWJsZSBTbG90PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1RvUmVuZGVyLm1hcCgodmFsdWUsIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dJbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJMaXN0Lm1hcCgoY29sLCBpbmRleCkgPT4gPFRhYmxlQ2VsbCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogaGVhZGVyTWFwW2NvbF0/LndpZHRoIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9PT0gJ2F2YWlsYWJsZV9jYXBhY2l0eScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD17dmFsdWVbY29sXX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB2YWx1ZVtjb2xdID4gMTAgPyAnI2E5ZDE4ZScgOiAnI2ZmYmYwMCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPT09ICdmZWVfdHlwZScgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbY29sXS50b1VwcGVyQ2FzZSgpID09PSAnRlJFRScgPyB2YWx1ZVtjb2xdIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZTk2NTY1JywgY29sb3I6ICcjZmZmZmZmJyB9fSBsYWJlbD17dmFsdWVbY29sXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1snZmVlX3R5cGUnLCAnYXZhaWxhYmxlX2NhcGFjaXR5J10uaW5kZXhPZihjb2wpID09PSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtjb2xdLnR5cGUgPT09ICdjaGlwJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgbGFiZWw9e3ZhbHVlW2NvbF19IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtjb2xdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17dGFibGVSb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlPXtST1dfUEVSX1BBR0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlQ2hhbmdlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhY2NpbmVDZW50cmVUYWJsZTsiXSwic291cmNlUm9vdCI6IiJ9