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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {
      elevation: 3,
      className: "".concat(styles.emptyBox, " ").concat(styles.flexCenter),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: "/covid-data.svg",
        alt: "empty",
        width: "300",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        variant: "h6",
        color: "textPrimary",
        children: "No Vaccine Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        variant: "subtitle1",
        children: "Keep Patience. We'll update as soon as vaccine are available"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92YWNjaW5lLWNlbnRyZS10YWJsZS50c3giXSwibmFtZXMiOlsiUk9XX1BFUl9QQUdFIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImZsZXhDZW50ZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImVtcHR5Qm94IiwicGFkZGluZyIsIm1pbldpZHRoIiwid2lkdGgiLCJWYWNjaW5lQ2VudHJlVGFibGUiLCJjZW50cmVMaXN0Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJuZXdBdmFpbGFibGUiLCJzZXROZXdBdmFpbGFibGUiLCJhdmFpbGFibGVEYXRhIiwic2V0QXZhaWxhYmxlRGF0YSIsInRhYmxlUm93cyIsInNldFRhYmxlUm93cyIsInJvd3NUb1JlbmRlciIsInNldFJvd3NUb1JlbmRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaGVhZGVyTGlzdCIsImhlYWRlck1hcCIsImF2YWlsYWJsZV9jYXBhY2l0eSIsImRpc3BsYXlOYW1lIiwidHlwZSIsImRpc3RyaWN0X25hbWUiLCJhZGRyZXNzIiwiZGF0ZSIsInBpbmNvZGUiLCJmZWVfdHlwZSIsInZhY2NpbmUiLCJzX25vIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsInVwZGF0ZUF2YWlsYWJsZURhdGEiLCJjbnQiLCJwcmVwYXJlTGlzdCIsInJlZHVjZSIsImN1cnJlbnQiLCJkYXRhIiwicm93TGlzdCIsInNlc3Npb25zIiwibWFwIiwiYmxvY2tOYW1lIiwiYmxvY2tfbmFtZSIsImNvbmNhdCIsInVzZUVmZmVjdCIsImN1cnJlbnRSb3ciLCJyb3dzIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFpQkEsSUFBTUEsWUFBWSxHQUFHLEVBQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyw2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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVJvdywgUGFwZXIsIFRhYmxlQm9keSwgVGFibGVQYWdpbmF0aW9uLCBCdXR0b24sIENoaXAsIENhcmRDb250ZW50LCBDYXJkLCBDYXJkTWVkaWEsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBJVmFjY2luZUNlbnRyZSB9IGZyb20gXCIuLi9tb2RlbC92YWNjaW5lLWNlbnRyZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIElWYWNjaW5lQ2VudHJlVGFibGVQcm9wcyB7XHJcbiAgICBjZW50cmVMaXN0OiBJVmFjY2luZUNlbnRyZVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVRhYmxlUm93IHtcclxuICAgIGF2YWlsYWJsZV9jYXBhY2l0eTogbnVtYmVyO1xyXG4gICAgdmFjY2luZTogc3RyaW5nO1xyXG4gICAgZGlzdHJpY3RfbmFtZTogc3RyaW5nO1xyXG4gICAgYWRkcmVzczogc3RyaW5nO1xyXG4gICAgYmxvY2tOYW1lOiBzdHJpbmc7XHJcbiAgICBwaW5jb2RlOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICBmZWVfdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBST1dfUEVSX1BBR0UgPSAxMDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIGZsZXhDZW50ZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgZW1wdHlCb3g6IHtcclxuICAgICAgICBwYWRkaW5nOiAzMixcclxuICAgICAgICBtaW5XaWR0aDogMzAwLFxyXG4gICAgICAgIHdpZHRoOiAnNTAlJ1xyXG4gICAgfVxyXG59KSlcclxuXHJcbmNvbnN0IFZhY2NpbmVDZW50cmVUYWJsZTogUmVhY3QuRkM8SVZhY2NpbmVDZW50cmVUYWJsZVByb3BzPiA9ICh7IGNlbnRyZUxpc3QgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtuZXdBdmFpbGFibGUsIHNldE5ld0F2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYXZhaWxhYmxlRGF0YSwgc2V0QXZhaWxhYmxlRGF0YV0gPSB1c2VTdGF0ZTxJVmFjY2luZUNlbnRyZVtdPihbXSk7XHJcbiAgICBjb25zdCBbdGFibGVSb3dzLCBzZXRUYWJsZVJvd3NdID0gdXNlU3RhdGU8SVRhYmxlUm93W10+KFtdKTtcclxuICAgIGNvbnN0IFtyb3dzVG9SZW5kZXIsIHNldFJvd3NUb1JlbmRlcl0gPSB1c2VTdGF0ZTxJVGFibGVSb3dbXT4oW10pO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyTGlzdCA9IFsnYXZhaWxhYmxlX2NhcGFjaXR5JywgJ3ZhY2NpbmUnLCAnZGlzdHJpY3RfbmFtZScsICdhZGRyZXNzJywgJ2RhdGUnLCAnZmVlX3R5cGUnXTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJNYXAgPSB7XHJcbiAgICAgICAgYXZhaWxhYmxlX2NhcGFjaXR5OiB7IGRpc3BsYXlOYW1lOiAnQXZhaWxhYmxlJywgdHlwZTogJ2NoaXAnLCB3aWR0aDogMTAwIH0sXHJcbiAgICAgICAgZGlzdHJpY3RfbmFtZTogeyBkaXNwbGF5TmFtZTogJ0Rpc3RyaWN0JywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgYWRkcmVzczogeyBkaXNwbGF5TmFtZTogJ0FkZHJlc3MnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICBkYXRlOiB7IGRpc3BsYXlOYW1lOiAnRGF0ZScsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgIHBpbmNvZGU6IHsgZGlzcGxheU5hbWU6ICdQaW5jb2RlJywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgZmVlX3R5cGU6IHsgZGlzcGxheU5hbWU6ICdUeXBlJywgdHlwZTogJ3RleHQnLCB3aWR0aDogMTAwIH0sXHJcbiAgICAgICAgdmFjY2luZTogeyBkaXNwbGF5TmFtZTogJ1ZhY2NpbmUnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICBzX25vOiB7IGRpc3BsYXlOYW1lOiAnU2VyaWFsIE5vJywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50OiB1bmtub3duLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUF2YWlsYWJsZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgY29uc3QgcHJlcGFyZUxpc3QgPSBhdmFpbGFibGVEYXRhLnJlZHVjZSgoY3VycmVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3dMaXN0OiBJVGFibGVSb3dbXSA9IGRhdGEuc2Vzc2lvbnMubWFwKCh7IGF2YWlsYWJsZV9jYXBhY2l0eSwgdmFjY2luZSwgZGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc19ubzogY250LFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZV9jYXBhY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICB2YWNjaW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlX3R5cGU6IGRhdGEuZmVlX3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrTmFtZTogZGF0YS5ibG9ja19uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpbmNvZGU6IGRhdGEucGluY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdF9uYW1lOiBkYXRhLmRpc3RyaWN0X25hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQuY29uY2F0KHJvd0xpc3QpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICBzZXRUYWJsZVJvd3MocHJlcGFyZUxpc3QpO1xyXG4gICAgICAgIHNldFBhZ2UoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um93ID0gKHBhZ2UgKiBST1dfUEVSX1BBR0UpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0YWJsZVJvd3Muc2xpY2UoY3VycmVudFJvdywgY3VycmVudFJvdyArIFJPV19QRVJfUEFHRSk7XHJcbiAgICAgICAgc2V0Um93c1RvUmVuZGVyKHJvd3MpO1xyXG4gICAgfSwgW3RhYmxlUm93cywgcGFnZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobmV3QXZhaWxhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVBdmFpbGFibGVEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F2YWlsYWJsZURhdGEsIG5ld0F2YWlsYWJsZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2VudHJlTGlzdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjZW50cmVMaXN0KTtcclxuICAgICAgICAgICAgc2V0QXZhaWxhYmxlRGF0YShjZW50cmVMaXN0KTtcclxuICAgICAgICAgICAgc2V0TmV3QXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjZW50cmVMaXN0XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleENlbnRlcn0+XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIGRpc2FibGVkPXshbmV3QXZhaWxhYmxlfSBvbkNsaWNrPXsoKSA9PiBzZXROZXdBdmFpbGFibGUoZmFsc2UpfT5VcGRhdGU8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmVtcHR5Qm94fSAke3N0eWxlcy5mbGV4Q2VudGVyfWB9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb3ZpZC1kYXRhLnN2Z1wiIGFsdD1cImVtcHR5XCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPk5vIFZhY2NpbmUgRm91bmQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+S2VlcCBQYXRpZW5jZS4gV2UnbGwgdXBkYXRlIGFzIHNvb24gYXMgdmFjY2luZSBhcmUgYXZhaWxhYmxlPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICB7LyogPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJBdmFpbGFibGUgVmFjY2luZSBUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJMaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiA8VGFibGVDZWxsIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBoZWFkZXJNYXBbdmFsdWVdPy53aWR0aCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlck1hcFt2YWx1ZV0/LmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzVG9SZW5kZXIubGVuZ3RoID09PSAwICYmIDxkaXY+Tm8gQXZhaWxhYmxlIFNsb3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzVG9SZW5kZXIubWFwKCh2YWx1ZSwgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dJbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckxpc3QubWFwKChjb2wsIGluZGV4KSA9PiA8VGFibGVDZWxsIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBoZWFkZXJNYXBbY29sXT8ud2lkdGggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPT09ICdhdmFpbGFibGVfY2FwYWNpdHknICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPXt2YWx1ZVtjb2xdfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlW2NvbF0gPiAxMCA/ICcjYTlkMThlJyA6ICcjZmZiZjAwJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9PT0gJ2ZlZV90eXBlJyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2NvbF0udG9VcHBlckNhc2UoKSA9PT0gJ0ZSRUUnID8gdmFsdWVbY29sXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNlOTY1NjUnLCBjb2xvcjogJyNmZmZmZmYnIH19IGxhYmVsPXt2YWx1ZVtjb2xdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1snZmVlX3R5cGUnLCAnYXZhaWxhYmxlX2NhcGFjaXR5J10uaW5kZXhPZihjb2wpID09PSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtjb2xdLnR5cGUgPT09ICdjaGlwJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPXt2YWx1ZVtjb2xdfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICBjb3VudD17dGFibGVSb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZT17Uk9XX1BFUl9QQUdFfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFjY2luZUNlbnRyZVRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=