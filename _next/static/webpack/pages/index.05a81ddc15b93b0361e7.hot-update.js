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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: "No Vaccine Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92YWNjaW5lLWNlbnRyZS10YWJsZS50c3giXSwibmFtZXMiOlsiUk9XX1BFUl9QQUdFIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImZsZXhDZW50ZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImVtcHR5Qm94IiwicGFkZGluZyIsIm1pbldpZHRoIiwid2lkdGgiLCJWYWNjaW5lQ2VudHJlVGFibGUiLCJjZW50cmVMaXN0Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJuZXdBdmFpbGFibGUiLCJzZXROZXdBdmFpbGFibGUiLCJhdmFpbGFibGVEYXRhIiwic2V0QXZhaWxhYmxlRGF0YSIsInRhYmxlUm93cyIsInNldFRhYmxlUm93cyIsInJvd3NUb1JlbmRlciIsInNldFJvd3NUb1JlbmRlciIsInBhZ2UiLCJzZXRQYWdlIiwiaGVhZGVyTGlzdCIsImhlYWRlck1hcCIsImF2YWlsYWJsZV9jYXBhY2l0eSIsImRpc3BsYXlOYW1lIiwidHlwZSIsImRpc3RyaWN0X25hbWUiLCJhZGRyZXNzIiwiZGF0ZSIsInBpbmNvZGUiLCJmZWVfdHlwZSIsInZhY2NpbmUiLCJzX25vIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsInVwZGF0ZUF2YWlsYWJsZURhdGEiLCJjbnQiLCJwcmVwYXJlTGlzdCIsInJlZHVjZSIsImN1cnJlbnQiLCJkYXRhIiwicm93TGlzdCIsInNlc3Npb25zIiwibWFwIiwiYmxvY2tOYW1lIiwiYmxvY2tfbmFtZSIsImNvbmNhdCIsInVzZUVmZmVjdCIsImN1cnJlbnRSb3ciLCJyb3dzIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFpQkEsSUFBTUEsWUFBWSxHQUFHLEVBQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyw2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WSxLQUFLLEtBQXJCLEVBQTRCO0FBQ3hCeUIseUJBQW1CO0FBQ3RCO0FBQ0osR0FKUSxFQUlOLENBQUN2QixhQUFELEVBQWdCRixZQUFoQixDQUpNLENBQVQ7QUFNQXFDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUl4QyxVQUFKLEVBQWdCO0FBQ1o0QyxhQUFPLENBQUNDLEdBQVIsQ0FBWTdDLFVBQVo7QUFDQU0sc0JBQWdCLENBQUNOLFVBQUQsQ0FBaEI7QUFDQUkscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSDtBQUNKLEdBTlEsRUFNTixDQUFDSixVQUFELENBTk0sQ0FBVDtBQVFBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxNQUFNLENBQUNYLFVBQXZCO0FBQUEsMkJBRUksOERBQUMsb0RBQUQ7QUFBTyxlQUFTLEVBQUUsQ0FBbEI7QUFBcUIsZUFBUyxZQUFLVyxNQUFNLENBQUNOLFFBQVosY0FBd0JNLE1BQU0sQ0FBQ1gsVUFBL0IsQ0FBOUI7QUFBQSw4QkFDSSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBQyxpQkFBWDtBQUE2QixXQUFHLEVBQUMsT0FBakM7QUFBeUMsYUFBSyxFQUFDLEtBQS9DO0FBQXFELGNBQU0sRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtFSCxDQXhJRDs7R0FBTVMsa0I7VUFFYVgsUzs7O0tBRmJXLGtCO0FBMElOLCtEQUFlQSxrQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNWE4MWRkYzE1YjkzYjAzNjFlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUsIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVSb3csIFBhcGVyLCBUYWJsZUJvZHksIFRhYmxlUGFnaW5hdGlvbiwgQnV0dG9uLCBDaGlwLCBDYXJkQ29udGVudCwgQ2FyZCwgQ2FyZE1lZGlhLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgSVZhY2NpbmVDZW50cmUgfSBmcm9tIFwiLi4vbW9kZWwvdmFjY2luZS1jZW50cmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmludGVyZmFjZSBJVmFjY2luZUNlbnRyZVRhYmxlUHJvcHMge1xyXG4gICAgY2VudHJlTGlzdDogSVZhY2NpbmVDZW50cmVbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElUYWJsZVJvdyB7XHJcbiAgICBhdmFpbGFibGVfY2FwYWNpdHk6IG51bWJlcjtcclxuICAgIHZhY2NpbmU6IHN0cmluZztcclxuICAgIGRpc3RyaWN0X25hbWU6IHN0cmluZztcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxuICAgIGJsb2NrTmFtZTogc3RyaW5nO1xyXG4gICAgcGluY29kZTogc3RyaW5nO1xyXG4gICAgZGF0ZTogc3RyaW5nO1xyXG4gICAgZmVlX3R5cGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUk9XX1BFUl9QQUdFID0gMTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICBmbGV4Q2VudGVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIGVtcHR5Qm94OiB7XHJcbiAgICAgICAgcGFkZGluZzogMzIsXHJcbiAgICAgICAgbWluV2lkdGg6IDMwMCxcclxuICAgICAgICB3aWR0aDogJzUwJSdcclxuICAgIH1cclxufSkpXHJcblxyXG5jb25zdCBWYWNjaW5lQ2VudHJlVGFibGU6IFJlYWN0LkZDPElWYWNjaW5lQ2VudHJlVGFibGVQcm9wcz4gPSAoeyBjZW50cmVMaXN0IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbbmV3QXZhaWxhYmxlLCBzZXROZXdBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2F2YWlsYWJsZURhdGEsIHNldEF2YWlsYWJsZURhdGFdID0gdXNlU3RhdGU8SVZhY2NpbmVDZW50cmVbXT4oW10pO1xyXG4gICAgY29uc3QgW3RhYmxlUm93cywgc2V0VGFibGVSb3dzXSA9IHVzZVN0YXRlPElUYWJsZVJvd1tdPihbXSk7XHJcbiAgICBjb25zdCBbcm93c1RvUmVuZGVyLCBzZXRSb3dzVG9SZW5kZXJdID0gdXNlU3RhdGU8SVRhYmxlUm93W10+KFtdKTtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlckxpc3QgPSBbJ2F2YWlsYWJsZV9jYXBhY2l0eScsICd2YWNjaW5lJywgJ2Rpc3RyaWN0X25hbWUnLCAnYWRkcmVzcycsICdkYXRlJywgJ2ZlZV90eXBlJ107XHJcblxyXG4gICAgY29uc3QgaGVhZGVyTWFwID0ge1xyXG4gICAgICAgIGF2YWlsYWJsZV9jYXBhY2l0eTogeyBkaXNwbGF5TmFtZTogJ0F2YWlsYWJsZScsIHR5cGU6ICdjaGlwJywgd2lkdGg6IDEwMCB9LFxyXG4gICAgICAgIGRpc3RyaWN0X25hbWU6IHsgZGlzcGxheU5hbWU6ICdEaXN0cmljdCcsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgIGFkZHJlc3M6IHsgZGlzcGxheU5hbWU6ICdBZGRyZXNzJywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgZGF0ZTogeyBkaXNwbGF5TmFtZTogJ0RhdGUnLCB0eXBlOiAndGV4dCcsIHdpZHRoOiAnYXV0bycgfSxcclxuICAgICAgICBwaW5jb2RlOiB7IGRpc3BsYXlOYW1lOiAnUGluY29kZScsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6ICdhdXRvJyB9LFxyXG4gICAgICAgIGZlZV90eXBlOiB7IGRpc3BsYXlOYW1lOiAnVHlwZScsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6IDEwMCB9LFxyXG4gICAgICAgIHZhY2NpbmU6IHsgZGlzcGxheU5hbWU6ICdWYWNjaW5lJywgdHlwZTogJ3RleHQnLCB3aWR0aDogJ2F1dG8nIH0sXHJcbiAgICAgICAgc19ubzogeyBkaXNwbGF5TmFtZTogJ1NlcmlhbCBObycsIHR5cGU6ICd0ZXh0Jywgd2lkdGg6ICdhdXRvJyB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVBdmFpbGFibGVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjbnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IHByZXBhcmVMaXN0ID0gYXZhaWxhYmxlRGF0YS5yZWR1Y2UoKGN1cnJlbnQsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93TGlzdDogSVRhYmxlUm93W10gPSBkYXRhLnNlc3Npb25zLm1hcCgoeyBhdmFpbGFibGVfY2FwYWNpdHksIHZhY2NpbmUsIGRhdGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNfbm86IGNudCxcclxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVfY2FwYWNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFjY2luZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZV90eXBlOiBkYXRhLmZlZV90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja05hbWU6IGRhdGEuYmxvY2tfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwaW5jb2RlOiBkYXRhLnBpbmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJpY3RfbmFtZTogZGF0YS5kaXN0cmljdF9uYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50LmNvbmNhdChyb3dMaXN0KTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgc2V0VGFibGVSb3dzKHByZXBhcmVMaXN0KTtcclxuICAgICAgICBzZXRQYWdlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJvdyA9IChwYWdlICogUk9XX1BFUl9QQUdFKTtcclxuICAgICAgICBjb25zdCByb3dzID0gdGFibGVSb3dzLnNsaWNlKGN1cnJlbnRSb3csIGN1cnJlbnRSb3cgKyBST1dfUEVSX1BBR0UpO1xyXG4gICAgICAgIHNldFJvd3NUb1JlbmRlcihyb3dzKTtcclxuICAgIH0sIFt0YWJsZVJvd3MsIHBhZ2VdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5ld0F2YWlsYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdXBkYXRlQXZhaWxhYmxlRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthdmFpbGFibGVEYXRhLCBuZXdBdmFpbGFibGVdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNlbnRyZUxpc3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2VudHJlTGlzdCk7XHJcbiAgICAgICAgICAgIHNldEF2YWlsYWJsZURhdGEoY2VudHJlTGlzdCk7XHJcbiAgICAgICAgICAgIHNldE5ld0F2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2VudHJlTGlzdF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDZW50ZXJ9PlxyXG4gICAgICAgICAgICB7LyogPEJ1dHRvbiBkaXNhYmxlZD17IW5ld0F2YWlsYWJsZX0gb25DbGljaz17KCkgPT4gc2V0TmV3QXZhaWxhYmxlKGZhbHNlKX0+VXBkYXRlPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5lbXB0eUJveH0gJHtzdHlsZXMuZmxleENlbnRlcn1gfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY292aWQtZGF0YS5zdmdcIiBhbHQ9XCJlbXB0eVwiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+Tm8gVmFjY2luZSBGb3VuZDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICB7LyogPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIGFyaWEtbGFiZWw9XCJBdmFpbGFibGUgVmFjY2luZSBUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJMaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiA8VGFibGVDZWxsIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBoZWFkZXJNYXBbdmFsdWVdPy53aWR0aCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlck1hcFt2YWx1ZV0/LmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzVG9SZW5kZXIubGVuZ3RoID09PSAwICYmIDxkaXY+Tm8gQXZhaWxhYmxlIFNsb3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzVG9SZW5kZXIubWFwKCh2YWx1ZSwgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3dJbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckxpc3QubWFwKChjb2wsIGluZGV4KSA9PiA8VGFibGVDZWxsIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBoZWFkZXJNYXBbY29sXT8ud2lkdGggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPT09ICdhdmFpbGFibGVfY2FwYWNpdHknICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPXt2YWx1ZVtjb2xdfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlW2NvbF0gPiAxMCA/ICcjYTlkMThlJyA6ICcjZmZiZjAwJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9PT0gJ2ZlZV90eXBlJyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2NvbF0udG9VcHBlckNhc2UoKSA9PT0gJ0ZSRUUnID8gdmFsdWVbY29sXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNlOTY1NjUnLCBjb2xvcjogJyNmZmZmZmYnIH19IGxhYmVsPXt2YWx1ZVtjb2xdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1snZmVlX3R5cGUnLCAnYXZhaWxhYmxlX2NhcGFjaXR5J10uaW5kZXhPZihjb2wpID09PSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtjb2xdLnR5cGUgPT09ICdjaGlwJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPXt2YWx1ZVtjb2xdfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICBjb3VudD17dGFibGVSb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZT17Uk9XX1BFUl9QQUdFfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbXX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFjY2luZUNlbnRyZVRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=