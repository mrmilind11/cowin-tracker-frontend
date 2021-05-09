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
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Track Vaccine Availability"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "contained",
            color: "secondary",
            children: "UPDATE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Switch, {
            color: "secondary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "basic-vertical",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "basic-vertical ".concat(styles.container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vaccine_centre_table__WEBPACK_IMPORTED_MODULE_4__.default, {
          centreList: sampleData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIm1hcmdpbiIsIndpZHRoIiwibWF4V2lkdGgiLCJicmVha3BvaW50cyIsImRvd24iLCJTT0NLRVRfVVJMIiwiU09DS0VUX0VWRU5UX01TRyIsIkhvbWUiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsImNlbnRyZUxpc3QiLCJzZXRDZW50cmVMaXN0IiwibGlzdGVuU29ja2V0RXZlbnQiLCJ1c2VFZmZlY3QiLCJzYW1wbGVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsYUFBUyxFQUFFO0FBQ1RDLFlBQU0sRUFBRSxXQUREO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLGNBQVEsRUFBRTtBQUhILE9BSU5KLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FKTSxFQUl5QjtBQUM5QkYsY0FBUSxFQUFFLE1BRG9CO0FBRTlCRixZQUFNLEVBQUU7QUFGc0IsS0FKekI7QUFEOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFZQSxJQUFNSyxVQUFVLEdBQUcsdUJBQW5CO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsY0FBekI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHWixTQUFTLEVBQXhCOztBQUY2QixrQkFJT2EsK0NBQVEsQ0FBbUIsRUFBbkIsQ0FKZjtBQUFBLE1BSXRCQyxVQUpzQjtBQUFBLE1BSVZDLGFBSlU7O0FBTTdCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTSxDQUM5QjtBQUNBO0FBQ0E7QUFDRCxHQUpEOztBQU1B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QU1FLGFBQVMsQ0FDUCxpQkFETyxFQUVQLGlCQUZPLEVBR1AsaUJBSE8sRUFJUCxpQkFKTztBQU5YLEdBRFU7QUFiZCxDQTlGc0IsQ0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWU0OTAzYzI1MWZlZmU0NGM5OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEJhciwgQnV0dG9uLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBtYWtlU3R5bGVzLCBTd2l0Y2gsIFRvb2xiYXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IFZhY2NpbmVDZW50cmVUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3ZhY2NpbmUtY2VudHJlLXRhYmxlJ1xuaW1wb3J0IHsgSVZhY2NpbmVDZW50cmUgfSBmcm9tICcuLi9tb2RlbC92YWNjaW5lLWNlbnRyZS5pbnRlcmZhY2UnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBtYXJnaW46ICczMnB4IGF1dG8nLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICc3MCUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzE2cHgnXG4gICAgfVxuICB9XG59KSlcblxuY29uc3QgU09DS0VUX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnO1xuY29uc3QgU09DS0VUX0VWRU5UX01TRyA9ICdBVkFJTF9ERVRBSUwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBjb25zdCBzb2NrZXRSZWYgPSBpbyhTT0NLRVRfVVJMKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgW2NlbnRyZUxpc3QsIHNldENlbnRyZUxpc3RdID0gdXNlU3RhdGU8SVZhY2NpbmVDZW50cmVbXT4oW10pO1xuXG4gIGNvbnN0IGxpc3RlblNvY2tldEV2ZW50ID0gKCkgPT4ge1xuICAgIC8vIHNvY2tldFJlZi5vbihTT0NLRVRfRVZFTlRfTVNHLCAoZGF0YTogSVZhY2NpbmVDZW50cmVbXSkgPT4ge1xuICAgIC8vICAgc2V0Q2VudHJlTGlzdChkYXRhKTtcbiAgICAvLyB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzb2NrZXRSZWYuY29ubmVjdCgpO1xuICAgIGxpc3RlblNvY2tldEV2ZW50KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIHNvY2tldFJlZi5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvd2luIFZhY2NpbmUgVHJhY2tlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUcmFjayBWYWNjaW5lIEF2YWlsYWJpbGl0eVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIj5WYWNjaW5lIEF2YWlsYWJpbGl0eSBUcmFja2VyPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPlVQREFURTwvQnV0dG9uPlxuICAgICAgICAgICAgPFN3aXRjaCBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmFzaWMtdmVydGljYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BiYXNpYy12ZXJ0aWNhbCAke3N0eWxlcy5jb250YWluZXJ9YH0+XG4gICAgICAgICAgPFZhY2NpbmVDZW50cmVUYWJsZSBjZW50cmVMaXN0PXtzYW1wbGVEYXRhfT48L1ZhY2NpbmVDZW50cmVUYWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuXG5jb25zdCBzYW1wbGVEYXRhOiBhbnkgPSBbXG4gIHtcbiAgICBcImNlbnRlcl9pZFwiOiA1NjA3NjYsXG4gICAgXCJuYW1lXCI6IFwiRHIgQiBMIEthcHVyIEhvc3BpdGFsIFNpdGUgMlwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIlBVU0EgUk9BRCBSQUpJTkRSQSBQTEFDRSBORVcgREVMSEkgMTEwMDA1XCIsXG4gICAgXCJzdGF0ZV9uYW1lXCI6IFwiRGVsaGlcIixcbiAgICBcImRpc3RyaWN0X25hbWVcIjogXCJDZW50cmFsIERlbGhpXCIsXG4gICAgXCJibG9ja19uYW1lXCI6IFwiTm90IEFwcGxpY2FibGVcIixcbiAgICBcInBpbmNvZGVcIjogMTEwMDA1LFxuICAgIFwibGF0XCI6IDI4LFxuICAgIFwibG9uZ1wiOiA3NyxcbiAgICBcImZyb21cIjogXCIwOTowMDowMFwiLFxuICAgIFwidG9cIjogXCIxODowMDowMFwiLFxuICAgIFwiZmVlX3R5cGVcIjogXCJQYWlkXCIsXG4gICAgXCJzZXNzaW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwic2Vzc2lvbl9pZFwiOiBcIjNjZWY2MDlhLTQ4OWEtNGE0NC1iNjA1LWQzYTZkMmM2ZmYwOVwiLFxuICAgICAgICBcImRhdGVcIjogXCIxMC0wNS0yMDIxXCIsXG4gICAgICAgIFwiYXZhaWxhYmxlX2NhcGFjaXR5XCI6IDEsXG4gICAgICAgIFwibWluX2FnZV9saW1pdFwiOiAxOCxcbiAgICAgICAgXCJ2YWNjaW5lXCI6IFwiQ09WSVNISUVMRFwiLFxuICAgICAgICBcInNsb3RzXCI6IFtcbiAgICAgICAgICBcIjA5OjAwQU0tMTE6MDBBTVwiLFxuICAgICAgICAgIFwiMTE6MDBBTS0wMTowMFBNXCIsXG4gICAgICAgICAgXCIwMTowMFBNLTAzOjAwUE1cIixcbiAgICAgICAgICBcIjAzOjAwUE0tMDY6MDBQTVwiXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwidmFjY2luZV9mZWVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ2YWNjaW5lXCI6IFwiQ09WSVNISUVMRFwiLFxuICAgICAgICBcImZlZVwiOiBcIjkwMFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJjZW50ZXJfaWRcIjogNjk2MDI1LFxuICAgIFwibmFtZVwiOiBcIlNLViBEZWxoaSBDYW50dCBTaXRlIC0gMlwiLFxuICAgIFwiYWRkcmVzc1wiOiBcIkdvdnQuIFNhcnZvZGF5YSBLYW55YSBWaWR5YWxheWEgRGVsaGkgQ2FudHQgLSAxMTAwMTBcIixcbiAgICBcInN0YXRlX25hbWVcIjogXCJEZWxoaVwiLFxuICAgIFwiZGlzdHJpY3RfbmFtZVwiOiBcIk5ldyBEZWxoaVwiLFxuICAgIFwiYmxvY2tfbmFtZVwiOiBcIk5vdCBBcHBsaWNhYmxlXCIsXG4gICAgXCJwaW5jb2RlXCI6IDExMDAxMCxcbiAgICBcImxhdFwiOiAyOCxcbiAgICBcImxvbmdcIjogNzcsXG4gICAgXCJmcm9tXCI6IFwiMDk6MDA6MDBcIixcbiAgICBcInRvXCI6IFwiMTc6MDA6MDBcIixcbiAgICBcImZlZV90eXBlXCI6IFwiRnJlZVwiLFxuICAgIFwic2Vzc2lvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcInNlc3Npb25faWRcIjogXCIzMzA1YTIzYS05OWM1LTQwZGEtYWZhMi0xZjM5ZTM3YjA1NjZcIixcbiAgICAgICAgXCJkYXRlXCI6IFwiMTAtMDUtMjAyMVwiLFxuICAgICAgICBcImF2YWlsYWJsZV9jYXBhY2l0eVwiOiAyLFxuICAgICAgICBcIm1pbl9hZ2VfbGltaXRcIjogMTgsXG4gICAgICAgIFwidmFjY2luZVwiOiBcIkNPVklTSElFTERcIixcbiAgICAgICAgXCJzbG90c1wiOiBbXG4gICAgICAgICAgXCIwOTowMEFNLTExOjAwQU1cIixcbiAgICAgICAgICBcIjExOjAwQU0tMDE6MDBQTVwiLFxuICAgICAgICAgIFwiMDE6MDBQTS0wMzowMFBNXCIsXG4gICAgICAgICAgXCIwMzowMFBNLTA1OjAwUE1cIlxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJjZW50ZXJfaWRcIjogNjk0MjI3LFxuICAgIFwibmFtZVwiOiBcIkdHU1NTIE5vLjEgWUFNVU5BIFZJSEFSIFM0XCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiQi1CbG9jayBZYW11bmEgVmloYXIgRGVsaGlcIixcbiAgICBcInN0YXRlX25hbWVcIjogXCJEZWxoaVwiLFxuICAgIFwiZGlzdHJpY3RfbmFtZVwiOiBcIk5vcnRoIEVhc3QgRGVsaGlcIixcbiAgICBcImJsb2NrX25hbWVcIjogXCJOb3QgQXBwbGljYWJsZVwiLFxuICAgIFwicGluY29kZVwiOiAxMTAwNTMsXG4gICAgXCJsYXRcIjogMjgsXG4gICAgXCJsb25nXCI6IDc3LFxuICAgIFwiZnJvbVwiOiBcIjA5OjAwOjAwXCIsXG4gICAgXCJ0b1wiOiBcIjE3OjAwOjAwXCIsXG4gICAgXCJmZWVfdHlwZVwiOiBcIkZyZWVcIixcbiAgICBcInNlc3Npb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJzZXNzaW9uX2lkXCI6IFwiZjJjNjE3YzctMTNkMC00MjU0LThkOTctNDg5ZjBjYmMxMjhjXCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjEwLTA1LTIwMjFcIixcbiAgICAgICAgXCJhdmFpbGFibGVfY2FwYWNpdHlcIjogMixcbiAgICAgICAgXCJtaW5fYWdlX2xpbWl0XCI6IDE4LFxuICAgICAgICBcInZhY2NpbmVcIjogXCJDT1ZBWElOXCIsXG4gICAgICAgIFwic2xvdHNcIjogW1xuICAgICAgICAgIFwiMDk6MDBBTS0xMTowMEFNXCIsXG4gICAgICAgICAgXCIxMTowMEFNLTAxOjAwUE1cIixcbiAgICAgICAgICBcIjAxOjAwUE0tMDM6MDBQTVwiLFxuICAgICAgICAgIFwiMDM6MDBQTS0wNTowMFBNXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiY2VudGVyX2lkXCI6IDY5Mzc5NixcbiAgICBcIm5hbWVcIjogXCJHQlNTUyBKQU5BS1BVUkkgQkxPQ0stQSAyXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiQkxPQ0stQSBKQU5BS1BVUkkgU0NIT09MIElEIDE2MTgwNjVcIixcbiAgICBcInN0YXRlX25hbWVcIjogXCJEZWxoaVwiLFxuICAgIFwiZGlzdHJpY3RfbmFtZVwiOiBcIlNvdXRoIFdlc3QgRGVsaGlcIixcbiAgICBcImJsb2NrX25hbWVcIjogXCJOb3QgQXBwbGljYWJsZVwiLFxuICAgIFwicGluY29kZVwiOiAxMTAwNTksXG4gICAgXCJsYXRcIjogMjgsXG4gICAgXCJsb25nXCI6IDc3LFxuICAgIFwiZnJvbVwiOiBcIjA5OjAwOjAwXCIsXG4gICAgXCJ0b1wiOiBcIjE3OjAwOjAwXCIsXG4gICAgXCJmZWVfdHlwZVwiOiBcIkZyZWVcIixcbiAgICBcInNlc3Npb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJzZXNzaW9uX2lkXCI6IFwiNjAzMmUwYWMtNDYxYS00ZTUzLTgxZGMtMWRkNWZiZmViOTdmXCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjEwLTA1LTIwMjFcIixcbiAgICAgICAgXCJhdmFpbGFibGVfY2FwYWNpdHlcIjogMSxcbiAgICAgICAgXCJtaW5fYWdlX2xpbWl0XCI6IDE4LFxuICAgICAgICBcInZhY2NpbmVcIjogXCJDT1ZJU0hJRUxEXCIsXG4gICAgICAgIFwic2xvdHNcIjogW1xuICAgICAgICAgIFwiMDk6MDBBTS0xMTowMEFNXCIsXG4gICAgICAgICAgXCIxMTowMEFNLTAxOjAwUE1cIixcbiAgICAgICAgICBcIjAxOjAwUE0tMDM6MDBQTVwiLFxuICAgICAgICAgIFwiMDM6MDBQTS0wNTowMFBNXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXSJdLCJzb3VyY2VSb290IjoiIn0=