self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_mrmil_Desktop_nextjs_cowin_cowin_tracker_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_vaccine_centre_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/vaccine-centre-table */ "./components/vaccine-centre-table.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\mrmil\\Desktop\\nextjs cowin\\cowin-tracker\\pages\\index.tsx",
    _s = $RefreshSig$();





var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    container: (0,C_Users_mrmil_Desktop_nextjs_cowin_cowin_tracker_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      margin: '32px auto',
      width: '100%',
      maxWidth: '70%'
    }, theme.breakpoints.down('sm'), {
      maxWidth: '100%',
      margin: '16px'
    })
  };
});
var SOCKET_URL = 'http://localhost:5000';
var SOCKET_EVENT_MSG = 'AVAIL_DETAIL';
function Home() {
  _s();

  // const socketRef = io(SOCKET_URL);
  var styles = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      centreList = _useState[0],
      setCentreList = _useState[1];

  var listenSocketEvent = function listenSocketEvent() {// socketRef.on(SOCKET_EVENT_MSG, (data: IVaccineCentre[]) => {
    //   setCentreList(data);
    // })
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // socketRef.connect();
    listenSocketEvent();
    return function () {// socketRef.disconnect();
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cowin Vaccine Tracker"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Track Vaccine Availability"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.AppBar, {
      position: "relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
          variant: "h6",
          color: "inherit",
          children: "Vaccine Availability Tracker"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "contained",
            color: "secondary",
            children: "UPDATE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Switch, {
            color: "secondary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "basic-vertical",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: styles.container,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vaccine_centre_table__WEBPACK_IMPORTED_MODULE_4__.default, {
          centreList: sampleData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "JSyMbcrKhu3BiQ7YldJ7zVLF78E=", false, function () {
  return [useStyles];
});

_c = Home;
var sampleData = [{
  "center_id": 560766,
  "name": "Dr B L Kapur Hospital Site 2",
  "address": "PUSA ROAD RAJINDRA PLACE NEW DELHI 110005",
  "state_name": "Delhi",
  "district_name": "Central Delhi",
  "block_name": "Not Applicable",
  "pincode": 110005,
  "lat": 28,
  "long": 77,
  "from": "09:00:00",
  "to": "18:00:00",
  "fee_type": "Paid",
  "sessions": [{
    "session_id": "3cef609a-489a-4a44-b605-d3a6d2c6ff09",
    "date": "10-05-2021",
    "available_capacity": 1,
    "min_age_limit": 18,
    "vaccine": "COVISHIELD",
    "slots": ["09:00AM-11:00AM", "11:00AM-01:00PM", "01:00PM-03:00PM", "03:00PM-06:00PM"]
  }],
  "vaccine_fees": [{
    "vaccine": "COVISHIELD",
    "fee": "900"
  }]
}, {
  "center_id": 696025,
  "name": "SKV Delhi Cantt Site - 2",
  "address": "Govt. Sarvodaya Kanya Vidyalaya Delhi Cantt - 110010",
  "state_name": "Delhi",
  "district_name": "New Delhi",
  "block_name": "Not Applicable",
  "pincode": 110010,
  "lat": 28,
  "long": 77,
  "from": "09:00:00",
  "to": "17:00:00",
  "fee_type": "Free",
  "sessions": [{
    "session_id": "3305a23a-99c5-40da-afa2-1f39e37b0566",
    "date": "10-05-2021",
    "available_capacity": 2,
    "min_age_limit": 18,
    "vaccine": "COVISHIELD",
    "slots": ["09:00AM-11:00AM", "11:00AM-01:00PM", "01:00PM-03:00PM", "03:00PM-05:00PM"]
  }]
}, {
  "center_id": 694227,
  "name": "GGSSS No.1 YAMUNA VIHAR S4",
  "address": "B-Block Yamuna Vihar Delhi",
  "state_name": "Delhi",
  "district_name": "North East Delhi",
  "block_name": "Not Applicable",
  "pincode": 110053,
  "lat": 28,
  "long": 77,
  "from": "09:00:00",
  "to": "17:00:00",
  "fee_type": "Free",
  "sessions": [{
    "session_id": "f2c617c7-13d0-4254-8d97-489f0cbc128c",
    "date": "10-05-2021",
    "available_capacity": 2,
    "min_age_limit": 18,
    "vaccine": "COVAXIN",
    "slots": ["09:00AM-11:00AM", "11:00AM-01:00PM", "01:00PM-03:00PM", "03:00PM-05:00PM"]
  }]
}, {
  "center_id": 693796,
  "name": "GBSSS JANAKPURI BLOCK-A 2",
  "address": "BLOCK-A JANAKPURI SCHOOL ID 1618065",
  "state_name": "Delhi",
  "district_name": "South West Delhi",
  "block_name": "Not Applicable",
  "pincode": 110059,
  "lat": 28,
  "long": 77,
  "from": "09:00:00",
  "to": "17:00:00",
  "fee_type": "Free",
  "sessions": [{
    "session_id": "6032e0ac-461a-4e53-81dc-1dd5fbfeb97f",
    "date": "10-05-2021",
    "available_capacity": 1,
    "min_age_limit": 18,
    "vaccine": "COVISHIELD",
    "slots": ["09:00AM-11:00AM", "11:00AM-01:00PM", "01:00PM-03:00PM", "03:00PM-05:00PM"]
  }]
}];

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsIm1hcmdpbiIsIndpZHRoIiwibWF4V2lkdGgiLCJicmVha3BvaW50cyIsImRvd24iLCJTT0NLRVRfVVJMIiwiU09DS0VUX0VWRU5UX01TRyIsIkhvbWUiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsImNlbnRyZUxpc3QiLCJzZXRDZW50cmVMaXN0IiwibGlzdGVuU29ja2V0RXZlbnQiLCJ1c2VFZmZlY3QiLCJzYW1wbGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUyxFQUFFO0FBQ1RDLGFBQU8sRUFBRSxNQURGO0FBRVBDLG1CQUFhLEVBQUUsUUFGUjtBQUdQQyxVQUFJLEVBQUUsQ0FIQztBQUlQQyxZQUFNLEVBQUUsV0FKRDtBQUtQQyxXQUFLLEVBQUUsTUFMQTtBQU1QQyxjQUFRLEVBQUU7QUFOSCxPQU9OUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBUE0sRUFPeUI7QUFDOUJGLGNBQVEsRUFBRSxNQURvQjtBQUU5QkYsWUFBTSxFQUFFO0FBRnNCLEtBUHpCO0FBRDhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBZUEsSUFBTUssVUFBVSxHQUFHLHVCQUFuQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGNBQXpCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUM3QjtBQUNBLE1BQU1DLE1BQU0sR0FBR2YsU0FBUyxFQUF4Qjs7QUFGNkIsa0JBSU9nQiwrQ0FBUSxDQUFtQixFQUFuQixDQUpmO0FBQUEsTUFJdEJD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WSxDQUNWO0FBQ0Usa0JBQWMsc0NBRGhCO0FBRUUsWUFBUSxZQUZWO0FBR0UsMEJBQXNCLENBSHhCO0FBSUUscUJBQWlCLEVBSm5CO0FBS0UsZUFBVyxZQUxiO0FBTUUsYUFBUyxDQUNQLGlCQURPLEVBRVAsaUJBRk8sRUFHUCxpQkFITyxFQUlQLGlCQUpPO0FBTlgsR0FEVTtBQWJkLENBOUZzQixDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMzJiYjExOTk1YjQwN2E1NDE4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQmFyLCBCdXR0b24sIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIG1ha2VTdHlsZXMsIFN3aXRjaCwgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgVmFjY2luZUNlbnRyZVRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvdmFjY2luZS1jZW50cmUtdGFibGUnXG5pbXBvcnQgeyBJVmFjY2luZUNlbnRyZSB9IGZyb20gJy4uL21vZGVsL3ZhY2NpbmUtY2VudHJlLmludGVyZmFjZSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBmbGV4OiAxLFxuICAgIG1hcmdpbjogJzMycHggYXV0bycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzcwJScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnMTZweCdcbiAgICB9XG4gIH1cbn0pKVxuXG5jb25zdCBTT0NLRVRfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCc7XG5jb25zdCBTT0NLRVRfRVZFTlRfTVNHID0gJ0FWQUlMX0RFVEFJTCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIGNvbnN0IHNvY2tldFJlZiA9IGlvKFNPQ0tFVF9VUkwpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbY2VudHJlTGlzdCwgc2V0Q2VudHJlTGlzdF0gPSB1c2VTdGF0ZTxJVmFjY2luZUNlbnRyZVtdPihbXSk7XG5cbiAgY29uc3QgbGlzdGVuU29ja2V0RXZlbnQgPSAoKSA9PiB7XG4gICAgLy8gc29ja2V0UmVmLm9uKFNPQ0tFVF9FVkVOVF9NU0csIChkYXRhOiBJVmFjY2luZUNlbnRyZVtdKSA9PiB7XG4gICAgLy8gICBzZXRDZW50cmVMaXN0KGRhdGEpO1xuICAgIC8vIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNvY2tldFJlZi5jb25uZWN0KCk7XG4gICAgbGlzdGVuU29ja2V0RXZlbnQoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gc29ja2V0UmVmLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q293aW4gVmFjY2luZSBUcmFja2VyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRyYWNrIFZhY2NpbmUgQXZhaWxhYmlsaXR5XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiPlZhY2NpbmUgQXZhaWxhYmlsaXR5IFRyYWNrZXI8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+VVBEQVRFPC9CdXR0b24+XG4gICAgICAgICAgICA8U3dpdGNoIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiYXNpYy12ZXJ0aWNhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPFZhY2NpbmVDZW50cmVUYWJsZSBjZW50cmVMaXN0PXtzYW1wbGVEYXRhfT48L1ZhY2NpbmVDZW50cmVUYWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuXG5jb25zdCBzYW1wbGVEYXRhOiBhbnkgPSBbXG4gIHtcbiAgICBcImNlbnRlcl9pZFwiOiA1NjA3NjYsXG4gICAgXCJuYW1lXCI6IFwiRHIgQiBMIEthcHVyIEhvc3BpdGFsIFNpdGUgMlwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIlBVU0EgUk9BRCBSQUpJTkRSQSBQTEFDRSBORVcgREVMSEkgMTEwMDA1XCIsXG4gICAgXCJzdGF0ZV9uYW1lXCI6IFwiRGVsaGlcIixcbiAgICBcImRpc3RyaWN0X25hbWVcIjogXCJDZW50cmFsIERlbGhpXCIsXG4gICAgXCJibG9ja19uYW1lXCI6IFwiTm90IEFwcGxpY2FibGVcIixcbiAgICBcInBpbmNvZGVcIjogMTEwMDA1LFxuICAgIFwibGF0XCI6IDI4LFxuICAgIFwibG9uZ1wiOiA3NyxcbiAgICBcImZyb21cIjogXCIwOTowMDowMFwiLFxuICAgIFwidG9cIjogXCIxODowMDowMFwiLFxuICAgIFwiZmVlX3R5cGVcIjogXCJQYWlkXCIsXG4gICAgXCJzZXNzaW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwic2Vzc2lvbl9pZFwiOiBcIjNjZWY2MDlhLTQ4OWEtNGE0NC1iNjA1LWQzYTZkMmM2ZmYwOVwiLFxuICAgICAgICBcImRhdGVcIjogXCIxMC0wNS0yMDIxXCIsXG4gICAgICAgIFwiYXZhaWxhYmxlX2NhcGFjaXR5XCI6IDEsXG4gICAgICAgIFwibWluX2FnZV9saW1pdFwiOiAxOCxcbiAgICAgICAgXCJ2YWNjaW5lXCI6IFwiQ09WSVNISUVMRFwiLFxuICAgICAgICBcInNsb3RzXCI6IFtcbiAgICAgICAgICBcIjA5OjAwQU0tMTE6MDBBTVwiLFxuICAgICAgICAgIFwiMTE6MDBBTS0wMTowMFBNXCIsXG4gICAgICAgICAgXCIwMTowMFBNLTAzOjAwUE1cIixcbiAgICAgICAgICBcIjAzOjAwUE0tMDY6MDBQTVwiXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwidmFjY2luZV9mZWVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2YWNjaW5lXCI6IFwiQ09WSVNISUVMRFwiLFxuICAgICAgICBcImZlZVwiOiBcIjkwMFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJjZW50ZXJfaWRcIjogNjk2MDI1LFxuICAgIFwibmFtZVwiOiBcIlNLViBEZWxoaSBDYW50dCBTaXRlIC0gMlwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIkdvdnQuIFNhcnZvZGF5YSBLYW55YSBWaWR5YWxheWEgRGVsaGkgQ2FudHQgLSAxMTAwMTBcIixcbiAgICBcInN0YXRlX25hbWVcIjogXCJEZWxoaVwiLFxuICAgIFwiZGlzdHJpY3RfbmFtZVwiOiBcIk5ldyBEZWxoaVwiLFxuICAgIFwiYmxvY2tfbmFtZVwiOiBcIk5vdCBBcHBsaWNhYmxlXCIsXG4gICAgXCJwaW5jb2RlXCI6IDExMDAxMCxcbiAgICBcImxhdFwiOiAyOCxcbiAgICBcImxvbmdcIjogNzcsXG4gICAgXCJmcm9tXCI6IFwiMDk6MDA6MDBcIixcbiAgICBcInRvXCI6IFwiMTc6MDA6MDBcIixcbiAgICBcImZlZV90eXBlXCI6IFwiRnJlZVwiLFxuICAgIFwic2Vzc2lvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcInNlc3Npb25faWRcIjogXCIzMzA1YTIzYS05OWM1LTQwZGEtYWZhMi0xZjM5ZTM3YjA1NjZcIixcbiAgICAgICAgXCJkYXRlXCI6IFwiMTAtMDUtMjAyMVwiLFxuICAgICAgICBcImF2YWlsYWJsZV9jYXBhY2l0eVwiOiAyLFxuICAgICAgICBcIm1pbl9hZ2VfbGltaXRcIjogMTgsXG4gICAgICAgIFwidmFjY2luZVwiOiBcIkNPVklTSElFTERcIixcbiAgICAgICAgXCJzbG90c1wiOiBbXG4gICAgICAgICAgXCIwOTowMEFNLTExOjAwQU1cIixcbiAgICAgICAgICBcIjExOjAwQU0tMDE6MDBQTVwiLFxuICAgICAgICAgIFwiMDE6MDBQTS0wMzowMFBNXCIsXG4gICAgICAgICAgXCIwMzowMFBNLTA1OjAwUE1cIlxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJjZW50ZXJfaWRcIjogNjk0MjI3LFxuICAgIFwibmFtZVwiOiBcIkdHU1NTIE5vLjEgWUFNVU5BIFZJSEFSIFM0XCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiQi1CbG9jayBZYW11bmEgVmloYXIgRGVsaGlcIixcbiAgICBcInN0YXRlX25hbWVcIjogXCJEZWxoaVwiLFxuICAgIFwiZGlzdHJpY3RfbmFtZVwiOiBcIk5vcnRoIEVhc3QgRGVsaGlcIixcbiAgICBcImJsb2NrX25hbWVcIjogXCJOb3QgQXBwbGljYWJsZVwiLFxuICAgIFwicGluY29kZVwiOiAxMTAwNTMsXG4gICAgXCJsYXRcIjogMjgsXG4gICAgXCJsb25nXCI6IDc3LFxuICAgIFwiZnJvbVwiOiBcIjA5OjAwOjAwXCIsXG4gICAgXCJ0b1wiOiBcIjE3OjAwOjAwXCIsXG4gICAgXCJmZWVfdHlwZVwiOiBcIkZyZWVcIixcbiAgICBcInNlc3Npb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJzZXNzaW9uX2lkXCI6IFwiZjJjNjE3YzctMTNkMC00MjU0LThkOTctNDg5ZjBjYmMxMjhjXCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjEwLTA1LTIwMjFcIixcbiAgICAgICAgXCJhdmFpbGFibGVfY2FwYWNpdHlcIjogMixcbiAgICAgICAgXCJtaW5fYWdlX2xpbWl0XCI6IDE4LFxuICAgICAgICBcInZhY2NpbmVcIjogXCJDT1ZBWElOXCIsXG4gICAgICAgIFwic2xvdHNcIjogW1xuICAgICAgICAgIFwiMDk6MDBBTS0xMTowMEFNXCIsXG4gICAgICAgICAgXCIxMTowMEFNLTAxOjAwUE1cIixcbiAgICAgICAgICBcIjAxOjAwUE0tMDM6MDBQTVwiLFxuICAgICAgICAgIFwiMDM6MDBQTS0wNTowMFBNXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiY2VudGVyX2lkXCI6IDY5Mzc5NixcbiAgICBcIm5hbWVcIjogXCJHQlNTUyBKQU5BS1BVUkkgQkxPQ0stQSAyXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiQkxPQ0stQSBKQU5BS1BVUkkgU0NIT09MIElEIDE2MTgwNjVcIixcbiAgICBcInN0YXRlX25hbWVcIjogXCJEZWxoaVwiLFxuICAgIFwiZGlzdHJpY3RfbmFtZVwiOiBcIlNvdXRoIFdlc3QgRGVsaGlcIixcbiAgICBcImJsb2NrX25hbWVcIjogXCJOb3QgQXBwbGljYWJsZVwiLFxuICAgIFwicGluY29kZVwiOiAxMTAwNTksXG4gICAgXCJsYXRcIjogMjgsXG4gICAgXCJsb25nXCI6IDc3LFxuICAgIFwiZnJvbVwiOiBcIjA5OjAwOjAwXCIsXG4gICAgXCJ0b1wiOiBcIjE3OjAwOjAwXCIsXG4gICAgXCJmZWVfdHlwZVwiOiBcIkZyZWVcIixcbiAgICBcInNlc3Npb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJzZXNzaW9uX2lkXCI6IFwiNjAzMmUwYWMtNDYxYS00ZTUzLTgxZGMtMWRkNWZiZmViOTdmXCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjEwLTA1LTIwMjFcIixcbiAgICAgICAgXCJhdmFpbGFibGVfY2FwYWNpdHlcIjogMSxcbiAgICAgICAgXCJtaW5fYWdlX2xpbWl0XCI6IDE4LFxuICAgICAgICBcInZhY2NpbmVcIjogXCJDT1ZJU0hJRUxEXCIsXG4gICAgICAgIFwic2xvdHNcIjogW1xuICAgICAgICAgIFwiMDk6MDBBTS0xMTowMEFNXCIsXG4gICAgICAgICAgXCIxMTowMEFNLTAxOjAwUE1cIixcbiAgICAgICAgICBcIjAxOjAwUE0tMDM6MDBQTVwiLFxuICAgICAgICAgIFwiMDM6MDBQTS0wNTowMFBNXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXSJdLCJzb3VyY2VSb290IjoiIn0=