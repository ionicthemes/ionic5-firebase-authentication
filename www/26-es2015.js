(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "nYbb":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_refresher, ion_refresher_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher", function() { return Refresher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher_content", function() { return RefresherContent; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "sxy2");
/* harmony import */ var _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-23e7365a.js */ "N4tN");
/* harmony import */ var _helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-47d562d2.js */ "9t5z");
/* harmony import */ var _animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-239bd3e5.js */ "L1bk");
/* harmony import */ var _cubic_bezier_685f606a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cubic-bezier-685f606a.js */ "PLvT");
/* harmony import */ var _index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-79d74e0b.js */ "PQ8F");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "2c9M");
/* harmony import */ var _spinner_configs_c78e170e_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spinner-configs-c78e170e.js */ "6i10");









const getRefresherAnimationType = (contentEl) => {
    const previousSibling = contentEl.previousElementSibling;
    const hasHeader = previousSibling !== null && previousSibling.tagName === 'ION-HEADER';
    return hasHeader ? 'translate' : 'scale';
};
const createPullingAnimation = (type, pullingSpinner) => {
    return type === 'scale' ? createScaleAnimation(pullingSpinner) : createTranslateAnimation(pullingSpinner);
};
const createBaseAnimation = (pullingRefresherIcon) => {
    const spinner = pullingRefresherIcon.querySelector('ion-spinner');
    const circle = spinner.shadowRoot.querySelector('circle');
    const spinnerArrowContainer = pullingRefresherIcon.querySelector('.spinner-arrow-container');
    const arrowContainer = pullingRefresherIcon.querySelector('.arrow-container');
    const arrow = (arrowContainer) ? arrowContainer.querySelector('ion-icon') : null;
    const baseAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .duration(1000)
        .easing('ease-out');
    const spinnerArrowContainerAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(spinnerArrowContainer)
        .keyframes([
        { offset: 0, opacity: '0.3' },
        { offset: 0.45, opacity: '0.3' },
        { offset: 0.55, opacity: '1' },
        { offset: 1, opacity: '1' }
    ]);
    const circleInnerAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(circle)
        .keyframes([
        { offset: 0, strokeDasharray: '1px, 200px' },
        { offset: 0.20, strokeDasharray: '1px, 200px' },
        { offset: 0.55, strokeDasharray: '100px, 200px' },
        { offset: 1, strokeDasharray: '100px, 200px' }
    ]);
    const circleOuterAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(spinner)
        .keyframes([
        { offset: 0, transform: 'rotate(-90deg)' },
        { offset: 1, transform: 'rotate(210deg)' }
    ]);
    /**
     * Only add arrow animation if present
     * this allows users to customize the spinners
     * without errors being thrown
     */
    if (arrowContainer && arrow) {
        const arrowContainerAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
            .addElement(arrowContainer)
            .keyframes([
            { offset: 0, transform: 'rotate(0deg)' },
            { offset: 0.30, transform: 'rotate(0deg)' },
            { offset: 0.55, transform: 'rotate(280deg)' },
            { offset: 1, transform: 'rotate(400deg)' }
        ]);
        const arrowAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
            .addElement(arrow)
            .keyframes([
            { offset: 0, transform: 'translateX(2px) scale(0)' },
            { offset: 0.30, transform: 'translateX(2px) scale(0)' },
            { offset: 0.55, transform: 'translateX(-1.5px) scale(1)' },
            { offset: 1, transform: 'translateX(-1.5px) scale(1)' }
        ]);
        baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
    }
    return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
const createScaleAnimation = (pullingRefresherIcon) => {
    const height = pullingRefresherIcon.clientHeight;
    const spinnerAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(pullingRefresherIcon)
        .keyframes([
        { offset: 0, transform: `scale(0) translateY(-${height + 20}px)` },
        { offset: 1, transform: 'scale(1) translateY(100px)' }
    ]);
    return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createTranslateAnimation = (pullingRefresherIcon) => {
    const height = pullingRefresherIcon.clientHeight;
    const spinnerAnimation = Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .addElement(pullingRefresherIcon)
        .keyframes([
        { offset: 0, transform: `translateY(-${height + 20}px)` },
        { offset: 1, transform: 'translateY(100px)' }
    ]);
    return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createSnapBackAnimation = (pullingRefresherIcon) => {
    return Object(_animation_239bd3e5_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
        .duration(125)
        .addElement(pullingRefresherIcon)
        .fromTo('transform', 'translateY(var(--ion-pulling-refresher-translate, 100px))', 'translateY(0px)');
};
// iOS Native Refresher
// -----------------------------
const setSpinnerOpacity = (spinner, opacity) => {
    spinner.style.setProperty('opacity', opacity.toString());
};
const handleScrollWhilePulling = (spinner, ticks, opacity, currentTickToShow) => {
    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
        setSpinnerOpacity(spinner, opacity);
        ticks.forEach((el, i) => el.style.setProperty('opacity', (i <= currentTickToShow) ? '0.99' : '0'));
    });
};
const handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
        // If user pulls down quickly, the spinner should spin faster
        spinner.style.setProperty('--refreshing-rotation-duration', (lastVelocityY >= 1.0) ? '0.5s' : '2s');
        spinner.style.setProperty('opacity', '1');
    });
};
const translateElement = (el, value) => {
    if (!el) {
        return Promise.resolve();
    }
    const trans = transitionEndAsync(el, 200);
    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
        el.style.setProperty('transition', '0.2s all ease-out');
        if (value === undefined) {
            el.style.removeProperty('transform');
        }
        else {
            el.style.setProperty('transform', `translate3d(0px, ${value}, 0px)`);
        }
    });
    return trans;
};
// Utils
// -----------------------------
const shouldUseNativeRefresher = (referenceEl, mode) => {
    const pullingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
    const refreshingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
    return (pullingSpinner !== null &&
        refreshingSpinner !== null &&
        ((mode === 'ios' && Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["i"])('mobile') && referenceEl.style.webkitOverflowScrolling !== undefined) ||
            mode === 'md'));
};
const transitionEndAsync = (el, expectedDuration = 0) => {
    return new Promise(resolve => {
        transitionEnd(el, expectedDuration, resolve);
    });
};
const transitionEnd = (el, expectedDuration = 0, callback) => {
    let unRegTrans;
    let animationTimeout;
    const opts = { passive: true };
    const ANIMATION_FALLBACK_TIMEOUT = 500;
    const unregister = () => {
        if (unRegTrans) {
            unRegTrans();
        }
    };
    const onTransitionEnd = (ev) => {
        if (ev === undefined || el === ev.target) {
            unregister();
            callback(ev);
        }
    };
    if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);
        animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);
        unRegTrans = () => {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
                animationTimeout = undefined;
            }
            el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
            el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
    }
    return unregister;
};

const refresherIosCss = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";

const refresherMdCss = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:white;-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}";

const Refresher = class {
    constructor(hostRef) {
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionRefresh = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRefresh", 7);
        this.ionPull = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPull", 7);
        this.ionStart = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStart", 7);
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        this.pointerDown = false;
        this.needsCompletion = false;
        this.didRefresh = false;
        this.lastVelocityY = 0;
        this.animations = [];
        this.nativeRefresher = false;
        /**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */
        this.state = 1 /* Inactive */;
        /**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.pullMin = 60;
        /**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         * Does not apply when  the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.pullMax = this.pullMin + 60;
        /**
         * Time it takes to close the refresher.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.closeDuration = '280ms';
        /**
         * Time it takes the refresher to to snap back to the `refreshing` state.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.snapbackDuration = '280ms';
        /**
         * How much to multiply the pull speed by. To slow the pull animation down,
         * pass a number less than `1`. To speed up the pull, pass a number greater
         * than `1`. The default value is `1` which is equal to the speed of the cursor.
         * If a negative value is passed in, the factor will be `1` instead.
         *
         * For example: If the value passed is `1.2` and the content is dragged by
         * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
         * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
         * will be `8` pixels, less than the amount the cursor has moved.
         *
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.pullFactor = 1;
        /**
         * If `true`, the refresher will be hidden.
         */
        this.disabled = false;
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.enable(!this.disabled);
        }
    }
    checkNativeRefresher() {
        const useNativeRefresher = shouldUseNativeRefresher(this.el, Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this));
        if (useNativeRefresher && !this.nativeRefresher) {
            const contentEl = this.el.closest('ion-content');
            this.setupNativeRefresher(contentEl);
        }
        else if (!useNativeRefresher) {
            this.destroyNativeRefresher();
        }
    }
    destroyNativeRefresher() {
        if (this.scrollEl && this.scrollListenerCallback) {
            this.scrollEl.removeEventListener('scroll', this.scrollListenerCallback);
            this.scrollListenerCallback = undefined;
        }
        this.nativeRefresher = false;
    }
    async resetNativeRefresher(el, state) {
        this.state = state;
        if (Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) === 'ios') {
            await translateElement(el, undefined);
        }
        else {
            await transitionEndAsync(this.el.querySelector('.refresher-refreshing-icon'), 200);
        }
        this.didRefresh = false;
        this.needsCompletion = false;
        this.pointerDown = false;
        this.animations.forEach(ani => ani.destroy());
        this.animations = [];
        this.progress = 0;
        this.state = 1 /* Inactive */;
    }
    async setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
        this.elementToTransform = this.scrollEl;
        const ticks = pullingSpinner.shadowRoot.querySelectorAll('svg');
        const MAX_PULL = this.scrollEl.clientHeight * 0.16;
        const NUM_TICKS = ticks.length;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => ticks.forEach(el => el.style.setProperty('animation', 'none')));
        this.scrollListenerCallback = () => {
            // If pointer is not on screen or refresher is not active, ignore scroll
            if (!this.pointerDown && this.state === 1 /* Inactive */) {
                return;
            }
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
                // PTR should only be active when overflow scrolling at the top
                const scrollTop = this.scrollEl.scrollTop;
                const refresherHeight = this.el.clientHeight;
                if (scrollTop > 0) {
                    /**
                     * If refresher is refreshing and user tries to scroll
                     * progressively fade refresher out/in
                     */
                    if (this.state === 8 /* Refreshing */) {
                        const ratio = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["e"])(0, scrollTop / (refresherHeight * 0.5), 1);
                        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
                        return;
                    }
                    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => setSpinnerOpacity(pullingSpinner, 0));
                    return;
                }
                if (this.pointerDown) {
                    if (!this.didStart) {
                        this.didStart = true;
                        this.ionStart.emit();
                    }
                    // emit "pulling" on every move
                    if (this.pointerDown) {
                        this.ionPull.emit();
                    }
                }
                // delay showing the next tick marks until user has pulled 30px
                const opacity = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["e"])(0, Math.abs(scrollTop) / refresherHeight, 0.99);
                const pullAmount = this.progress = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["e"])(0, (Math.abs(scrollTop) - 30) / MAX_PULL, 1);
                const currentTickToShow = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["e"])(0, Math.floor(pullAmount * NUM_TICKS), NUM_TICKS - 1);
                const shouldShowRefreshingSpinner = this.state === 8 /* Refreshing */ || currentTickToShow === NUM_TICKS - 1;
                if (shouldShowRefreshingSpinner) {
                    if (this.pointerDown) {
                        handleScrollWhileRefreshing(refreshingSpinner, this.lastVelocityY);
                    }
                    if (!this.didRefresh) {
                        this.beginRefresh();
                        this.didRefresh = true;
                        Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_6__["d"])({ style: 'light' });
                        /**
                         * Translate the content element otherwise when pointer is removed
                         * from screen the scroll content will bounce back over the refresher
                         */
                        if (!this.pointerDown) {
                            translateElement(this.elementToTransform, `${refresherHeight}px`);
                        }
                    }
                }
                else {
                    this.state = 2 /* Pulling */;
                    handleScrollWhilePulling(pullingSpinner, ticks, opacity, currentTickToShow);
                }
            });
        };
        this.scrollEl.addEventListener('scroll', this.scrollListenerCallback);
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-eea61379.js */ "ItpF"))).createGesture({
            el: this.scrollEl,
            gestureName: 'refresher',
            gesturePriority: 10,
            direction: 'y',
            threshold: 5,
            onStart: () => {
                this.pointerDown = true;
                if (!this.didRefresh) {
                    translateElement(this.elementToTransform, '0px');
                }
            },
            onMove: ev => {
                this.lastVelocityY = ev.velocityY;
            },
            onEnd: () => {
                this.pointerDown = false;
                this.didStart = false;
                if (this.needsCompletion) {
                    this.resetNativeRefresher(this.elementToTransform, 32 /* Completing */);
                    this.needsCompletion = false;
                }
                else if (this.didRefresh) {
                    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => translateElement(this.elementToTransform, `${this.el.clientHeight}px`));
                }
            },
        });
        this.disabledChanged();
    }
    async setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
        const circle = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["g"])(pullingSpinner).querySelector('circle');
        const pullingRefresherIcon = this.el.querySelector('ion-refresher-content .refresher-pulling-icon');
        const refreshingCircle = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["g"])(refreshingSpinner).querySelector('circle');
        if (circle !== null && refreshingCircle !== null) {
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
                circle.style.setProperty('animation', 'none');
                // This lines up the animation on the refreshing spinner with the pulling spinner
                refreshingSpinner.style.setProperty('animation-delay', '-655ms');
                refreshingCircle.style.setProperty('animation-delay', '-655ms');
            });
        }
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-eea61379.js */ "ItpF"))).createGesture({
            el: this.scrollEl,
            gestureName: 'refresher',
            gesturePriority: 10,
            direction: 'y',
            threshold: 5,
            canStart: () => this.state !== 8 /* Refreshing */ && this.state !== 32 /* Completing */ && this.scrollEl.scrollTop === 0,
            onStart: (ev) => {
                ev.data = { animation: undefined, didStart: false, cancelled: false };
            },
            onMove: (ev) => {
                if ((ev.velocityY < 0 && this.progress === 0 && !ev.data.didStart) || ev.data.cancelled) {
                    ev.data.cancelled = true;
                    return;
                }
                if (!ev.data.didStart) {
                    ev.data.didStart = true;
                    this.state = 2 /* Pulling */;
                    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
                        const animationType = getRefresherAnimationType(contentEl);
                        const animation = createPullingAnimation(animationType, pullingRefresherIcon);
                        ev.data.animation = animation;
                        this.scrollEl.style.setProperty('--overflow', 'hidden');
                        animation.progressStart(false, 0);
                        this.ionStart.emit();
                        this.animations.push(animation);
                    });
                    return;
                }
                // Since we are using an easing curve, slow the gesture tracking down a bit
                this.progress = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["e"])(0, (ev.deltaY / 180) * 0.5, 1);
                ev.data.animation.progressStep(this.progress);
                this.ionPull.emit();
            },
            onEnd: (ev) => {
                if (!ev.data.didStart) {
                    return;
                }
                Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => this.scrollEl.style.removeProperty('--overflow'));
                if (this.progress <= 0.4) {
                    this.gesture.enable(false);
                    ev.data.animation
                        .progressEnd(0, this.progress, 500)
                        .onFinish(() => {
                        this.animations.forEach(ani => ani.destroy());
                        this.animations = [];
                        this.gesture.enable(true);
                        this.state = 1 /* Inactive */;
                    });
                    return;
                }
                const progress = Object(_cubic_bezier_685f606a_js__WEBPACK_IMPORTED_MODULE_4__["g"])([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
                const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
                this.animations.push(snapBackAnimation);
                Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(async () => {
                    pullingRefresherIcon.style.setProperty('--ion-pulling-refresher-translate', `${(progress * 100)}px`);
                    ev.data.animation.progressEnd();
                    await snapBackAnimation.play();
                    this.beginRefresh();
                    ev.data.animation.destroy();
                });
            }
        });
        this.disabledChanged();
    }
    async setupNativeRefresher(contentEl) {
        if (this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl) {
            return;
        }
        this.nativeRefresher = true;
        const pullingSpinner = this.el.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
        const refreshingSpinner = this.el.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
        await contentEl.componentOnReady();
        if (Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) === 'ios') {
            this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
        }
        else {
            this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
        }
    }
    componentDidUpdate() {
        this.checkNativeRefresher();
    }
    async connectedCallback() {
        if (this.el.getAttribute('slot') !== 'fixed') {
            console.error('Make sure you use: <ion-refresher slot="fixed">');
            return;
        }
        const contentEl = this.el.closest('ion-content');
        if (!contentEl) {
            console.error('<ion-refresher> must be used inside an <ion-content>');
            return;
        }
        this.scrollEl = await contentEl.getScrollElement();
        this.backgroundContentEl = Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["g"])(contentEl).querySelector('#background-content');
        if (shouldUseNativeRefresher(this.el, Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this))) {
            this.setupNativeRefresher(contentEl);
        }
        else {
            this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-eea61379.js */ "ItpF"))).createGesture({
                el: contentEl,
                gestureName: 'refresher',
                gesturePriority: 10,
                direction: 'y',
                threshold: 20,
                passive: false,
                canStart: () => this.canStart(),
                onStart: () => this.onStart(),
                onMove: ev => this.onMove(ev),
                onEnd: () => this.onEnd(),
            });
            this.disabledChanged();
        }
    }
    disconnectedCallback() {
        this.destroyNativeRefresher();
        this.scrollEl = undefined;
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    /**
     * Call `complete()` when your async operation has completed.
     * For example, the `refreshing` state is while the app is performing
     * an asynchronous operation, such as receiving more data from an
     * AJAX request. Once the data has been received, you then call this
     * method to signify that the refreshing has completed and to close
     * the refresher. This method also changes the refresher's state from
     * `refreshing` to `completing`.
     */
    async complete() {
        if (this.nativeRefresher) {
            this.needsCompletion = true;
            // Do not reset scroll el until user removes pointer from screen
            if (!this.pointerDown) {
                Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["r"])(() => Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["r"])(() => this.resetNativeRefresher(this.elementToTransform, 32 /* Completing */)));
            }
        }
        else {
            this.close(32 /* Completing */, '120ms');
        }
    }
    /**
     * Changes the refresher's state from `refreshing` to `cancelling`.
     */
    async cancel() {
        if (this.nativeRefresher) {
            // Do not reset scroll el until user removes pointer from screen
            if (!this.pointerDown) {
                Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["r"])(() => Object(_helpers_47d562d2_js__WEBPACK_IMPORTED_MODULE_2__["r"])(() => this.resetNativeRefresher(this.elementToTransform, 16 /* Cancelling */)));
            }
        }
        else {
            this.close(16 /* Cancelling */, '');
        }
    }
    /**
     * A number representing how far down the user has pulled.
     * The number `0` represents the user hasn't pulled down at all. The
     * number `1`, and anything greater than `1`, represents that the user
     * has pulled far enough down that when they let go then the refresh will
     * happen. If they let go and the number is less than `1`, then the
     * refresh will not happen, and the content will return to it's original
     * position.
     */
    getProgress() {
        return Promise.resolve(this.progress);
    }
    canStart() {
        if (!this.scrollEl) {
            return false;
        }
        if (this.state !== 1 /* Inactive */) {
            return false;
        }
        // if the scrollTop is greater than zero then it's
        // not possible to pull the content down yet
        if (this.scrollEl.scrollTop > 0) {
            return false;
        }
        return true;
    }
    onStart() {
        this.progress = 0;
        this.state = 1 /* Inactive */;
    }
    onMove(detail) {
        if (!this.scrollEl) {
            return;
        }
        // this method can get called like a bazillion times per second,
        // so it's built to be as efficient as possible, and does its
        // best to do any DOM read/writes only when absolutely necessary
        // if multi-touch then get out immediately
        const ev = detail.event;
        if (ev.touches && ev.touches.length > 1) {
            return;
        }
        // do nothing if it's actively refreshing
        // or it's in the way of closing
        // or this was never a startY
        if ((this.state & 56 /* _BUSY_ */) !== 0) {
            return;
        }
        const pullFactor = (Number.isNaN(this.pullFactor) || this.pullFactor < 0) ? 1 : this.pullFactor;
        const deltaY = detail.deltaY * pullFactor;
        // don't bother if they're scrolling up
        // and have not already started dragging
        if (deltaY <= 0) {
            // the current Y is higher than the starting Y
            // so they scrolled up enough to be ignored
            this.progress = 0;
            this.state = 1 /* Inactive */;
            if (this.appliedStyles) {
                // reset the styles only if they were applied
                this.setCss(0, '', false, '');
                return;
            }
            return;
        }
        if (this.state === 1 /* Inactive */) {
            // this refresh is not already actively pulling down
            // get the content's scrollTop
            const scrollHostScrollTop = this.scrollEl.scrollTop;
            // if the scrollTop is greater than zero then it's
            // not possible to pull the content down yet
            if (scrollHostScrollTop > 0) {
                this.progress = 0;
                return;
            }
            // content scrolled all the way to the top, and dragging down
            this.state = 2 /* Pulling */;
        }
        // prevent native scroll events
        if (ev.cancelable) {
            ev.preventDefault();
        }
        // the refresher is actively pulling at this point
        // move the scroll element within the content element
        this.setCss(deltaY, '0ms', true, '');
        if (deltaY === 0) {
            // don't continue if there's no delta yet
            this.progress = 0;
            return;
        }
        const pullMin = this.pullMin;
        // set pull progress
        this.progress = deltaY / pullMin;
        // emit "start" if it hasn't started yet
        if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
        }
        // emit "pulling" on every move
        this.ionPull.emit();
        // do nothing if the delta is less than the pull threshold
        if (deltaY < pullMin) {
            // ensure it stays in the pulling state, cuz its not ready yet
            this.state = 2 /* Pulling */;
            return;
        }
        if (deltaY > this.pullMax) {
            // they pulled farther than the max, so kick off the refresh
            this.beginRefresh();
            return;
        }
        // pulled farther than the pull min!!
        // it is now in the `ready` state!!
        // if they let go then it'll refresh, kerpow!!
        this.state = 4 /* Ready */;
        return;
    }
    onEnd() {
        // only run in a zone when absolutely necessary
        if (this.state === 4 /* Ready */) {
            // they pulled down far enough, so it's ready to refresh
            this.beginRefresh();
        }
        else if (this.state === 2 /* Pulling */) {
            // they were pulling down, but didn't pull down far enough
            // set the content back to it's original location
            // and close the refresher
            // set that the refresh is actively cancelling
            this.cancel();
        }
    }
    beginRefresh() {
        // assumes we're already back in a zone
        // they pulled down far enough, so it's ready to refresh
        this.state = 8 /* Refreshing */;
        // place the content in a hangout position while it thinks
        this.setCss(this.pullMin, this.snapbackDuration, true, '');
        // emit "refresh" because it was pulled down far enough
        // and they let go to begin refreshing
        this.ionRefresh.emit({
            complete: this.complete.bind(this)
        });
    }
    close(state, delay) {
        // create fallback timer incase something goes wrong with transitionEnd event
        setTimeout(() => {
            this.state = 1 /* Inactive */;
            this.progress = 0;
            this.didStart = false;
            this.setCss(0, '0ms', false, '');
        }, 600);
        // reset set the styles on the scroll element
        // set that the refresh is actively cancelling/completing
        this.state = state;
        this.setCss(0, this.closeDuration, true, delay);
        // TODO: stop gesture
    }
    setCss(y, duration, overflowVisible, delay) {
        if (this.nativeRefresher) {
            return;
        }
        this.appliedStyles = (y > 0);
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => {
            if (this.scrollEl && this.backgroundContentEl) {
                const scrollStyle = this.scrollEl.style;
                const backgroundStyle = this.backgroundContentEl.style;
                scrollStyle.transform = backgroundStyle.transform = ((y > 0) ? `translateY(${y}px) translateZ(0px)` : '');
                scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
                scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
                scrollStyle.overflow = (overflowVisible ? 'hidden' : '');
            }
        });
    }
    render() {
        const mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["H"], { slot: "fixed", class: {
                [mode]: true,
                // Used internally for styling
                [`refresher-${mode}`]: true,
                'refresher-native': this.nativeRefresher,
                'refresher-active': this.state !== 1 /* Inactive */,
                'refresher-pulling': this.state === 2 /* Pulling */,
                'refresher-ready': this.state === 4 /* Ready */,
                'refresher-refreshing': this.state === 8 /* Refreshing */,
                'refresher-cancelling': this.state === 16 /* Cancelling */,
                'refresher-completing': this.state === 32 /* Completing */,
            } }));
    }
    get el() { return Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
};
Refresher.style = {
    ios: refresherIosCss,
    md: refresherMdCss
};

const RefresherContent = class {
    constructor(hostRef) {
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentWillLoad() {
        if (this.pullingIcon === undefined) {
            const mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : 'arrow-down';
            this.pullingIcon = _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('refreshingIcon', mode === 'ios' && Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["i"])('mobile') ? _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('spinner', overflowRefresher) : 'circular');
        }
        if (this.refreshingSpinner === undefined) {
            const mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            this.refreshingSpinner = _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('refreshingSpinner', _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('spinner', mode === 'ios' ? 'lines' : 'circular'));
        }
    }
    render() {
        const pullingIcon = this.pullingIcon;
        const hasSpinner = pullingIcon != null && _spinner_configs_c78e170e_js__WEBPACK_IMPORTED_MODULE_7__["S"][pullingIcon] !== undefined;
        const mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: mode }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling" }, this.pullingIcon && hasSpinner &&
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-icon" }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "spinner-arrow-container" }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.pullingIcon, paused: true }), mode === 'md' && this.pullingIcon === 'circular' &&
                Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "arrow-container" }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { name: "caret-back-sharp" })))), this.pullingIcon && !hasSpinner &&
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-icon" }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-text", innerHTML: Object(_index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_5__["s"])(this.pullingText) })), Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-icon" }, Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
            Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-text", innerHTML: Object(_index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_5__["s"])(this.refreshingText) }))));
    }
    get el() { return Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this); }
};




/***/ })

}]);
//# sourceMappingURL=26-es2015.js.map