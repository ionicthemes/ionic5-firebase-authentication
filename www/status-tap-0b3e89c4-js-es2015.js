(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-0b3e89c4-js"],{

/***/ "9r5H":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-0b3e89c4.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");


const startStatusTap = () => {
    const win = window;
    win.addEventListener('statusTap', () => {
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
            const width = win.innerWidth;
            const height = win.innerHeight;
            const el = document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            const contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(() => {
                    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => contentEl.scrollToTop(300));
                });
            }
        });
    });
};




/***/ })

}]);
//# sourceMappingURL=status-tap-0b3e89c4-js-es2015.js.map