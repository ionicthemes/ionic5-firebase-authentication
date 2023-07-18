(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipe-back-2c765762-js"],{

/***/ "3wQK":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-2c765762.js ***!
  \******************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-47d562d2.js */ "9t5z");
/* harmony import */ var _gesture_controller_89173521_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gesture-controller-89173521.js */ "rxGk");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-eea61379.js */ "ItpF");




const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
    const win = el.ownerDocument.defaultView;
    const canStart = (detail) => {
        return detail.startX <= 50 && canStartHandler();
    };
    const onMove = (detail) => {
        // set the transition animation's progress
        const delta = detail.deltaX;
        const stepValue = delta / win.innerWidth;
        onMoveHandler(stepValue);
    };
    const onEnd = (detail) => {
        // the swipe back gesture has ended
        const delta = detail.deltaX;
        const width = win.innerWidth;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        const missing = shouldComplete ? 1 - stepValue : stepValue;
        const missingDistance = missing * width;
        let realDur = 0;
        if (missingDistance > 5) {
            const dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 540);
        }
        /**
         * TODO: stepValue can sometimes return negative values
         * or values greater than 1 which should not be possible.
         * Need to investigate more to find where the issue is.
         */
        onEndHandler(shouldComplete, (stepValue <= 0) ? 0.01 : Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(0, stepValue, 0.9999), realDur);
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
        el,
        gestureName: 'goback-swipe',
        gesturePriority: 40,
        threshold: 10,
        canStart,
        onStart: onStartHandler,
        onMove,
        onEnd
    });
};




/***/ })

}]);
//# sourceMappingURL=swipe-back-2c765762-js-es2015.js.map