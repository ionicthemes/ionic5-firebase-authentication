(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "HTFn":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js ***!
      \*************************************************************************************/

    /*! exports provided: AngularFireAuthGuard, AngularFireAuthGuardModule, canActivate, customClaims, emailVerified, hasCustomClaim, idTokenResult, isNotAnonymous, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo */

    /***/
    function HTFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function () {
        return AngularFireAuthGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function () {
        return AngularFireAuthGuardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canActivate", function () {
        return canActivate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customClaims", function () {
        return customClaims;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emailVerified", function () {
        return emailVerified;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function () {
        return hasCustomClaim;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "idTokenResult", function () {
        return idTokenResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function () {
        return isNotAnonymous;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loggedIn", function () {
        return loggedIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function () {
        return redirectLoggedInTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function () {
        return redirectUnauthorizedTo;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /**
       * @fileoverview added by tsickle
       * Generated from: auth-guard.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ɵ0 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ0(user) {
        return !!user;
      };
      /** @type {?} */


      var loggedIn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ0);

      var AngularFireAuthGuard =
      /**
       * @param {?} options
       * @param {?} nameOrConfig
       * @param {?} zone
       * @param {?} router
       */
      function AngularFireAuthGuard(options, nameOrConfig, zone, router) {
        var _this = this;

        _classCallCheck(this, AngularFireAuthGuard);

        this.router = router;

        this.canActivate =
        /**
        * @param {?} next
        * @param {?} state
        * @return {?}
        */
        function (next, state) {
          /** @type {?} */
          var authPipeFactory =
          /** @type {?} */
          next.data.authGuardPipe ||
          /**
          * @return {?}
          */
          function () {
            return loggedIn;
          };

          return _this.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), authPipeFactory(next, state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} can
          * @return {?}
          */
          function (can) {
            return typeof can === 'boolean' ? can : _this.router.createUrlTree(
            /** @type {?} */
            can);
          }));
        };
        /** @type {?} */


        var schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵAngularFireSchedulers"](zone);
        /** @type {?} */

        var keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵkeepUnstableUntilFirstFactory"])(schedulers);
        /** @type {?} */

        var auth = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵAngularFireSchedulers"](zone).outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @return {?}
        */
        function () {
          return zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return __webpack_require__.e(
            /*! import() | firebase-auth */
            "firebase-auth").then(__webpack_require__.bind(null,
            /*! firebase/auth */
            "6nsN"));
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @return {?}
        */
        function () {
          return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} app
        * @return {?}
        */
        function (app) {
          return zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return app.auth();
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
          bufferSize: 1,
          refCount: false
        }));
        this.authState = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} auth
        * @return {?}
        */
        function (auth) {
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](auth.onAuthStateChanged.bind(auth));
        }), keepUnstableUntilFirst);
      };

      AngularFireAuthGuard.ɵfac = function AngularFireAuthGuard_Factory(t) {
        return new (t || AngularFireAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };
      /** @nocollapse */


      AngularFireAuthGuard.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };
      /** @nocollapse */


      AngularFireAuthGuard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AngularFireAuthGuard_Factory() {
          return new AngularFireAuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        },
        token: AngularFireAuthGuard,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();

      if (false) {}
      /** @type {?} */


      var canActivate =
      /**
      * @param {?} pipe
      * @return {?}
      */
      function canActivate(pipe) {
        return {
          canActivate: [AngularFireAuthGuard],
          data: {
            authGuardPipe: pipe
          }
        };
      };

      var ɵ1 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ1(user) {
        return !!user && !user.isAnonymous;
      };
      /** @type {?} */


      var isNotAnonymous = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ1);

      var ɵ2 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ2(user) {
        return user ? user.getIdTokenResult() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
      };
      /** @type {?} */


      var idTokenResult = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(ɵ2);

      var ɵ3 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ3(user) {
        return !!user && user.emailVerified;
      };
      /** @type {?} */


      var emailVerified = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ3);

      var ɵ4 =
      /**
      * @param {?} idTokenResult
      * @return {?}
      */
      function ɵ4(idTokenResult) {
        return idTokenResult ? idTokenResult.claims : [];
      };
      /** @type {?} */


      var customClaims = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(idTokenResult, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ4));
      /** @type {?} */

      var hasCustomClaim =
      /**
      * @param {?} claim
      * @return {?}
      */
      function hasCustomClaim(claim) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(customClaims, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} claims
        * @return {?}
        */
        function (claims) {
          return claims.hasOwnProperty(claim);
        }));
      };
      /** @type {?} */


      var redirectUnauthorizedTo =
      /**
      * @param {?} redirect
      * @return {?}
      */
      function redirectUnauthorizedTo(redirect) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} loggedIn
        * @return {?}
        */
        function (loggedIn) {
          return loggedIn || redirect;
        }));
      };
      /** @type {?} */


      var redirectLoggedInTo =
      /**
      * @param {?} redirect
      * @return {?}
      */
      function redirectLoggedInTo(redirect) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} loggedIn
        * @return {?}
        */
        function (loggedIn) {
          return loggedIn && redirect || true;
        }));
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: auth-guard.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFireAuthGuardModule = function AngularFireAuthGuardModule() {
        _classCallCheck(this, AngularFireAuthGuardModule);
      };

      AngularFireAuthGuardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFireAuthGuardModule
      });
      AngularFireAuthGuardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFireAuthGuardModule_Factory(t) {
          return new (t || AngularFireAuthGuardModule)();
        },
        providers: [AngularFireAuthGuard]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [AngularFireAuthGuard]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-fire-auth-guard.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-auth-guard.js.map

      /***/

    },

    /***/
    "MQDv":
    /*!*********************************************!*\
      !*** ./src/app/profile/profile.resolver.ts ***!
      \*********************************************/

    /*! exports provided: ProfilePageResolver */

    /***/
    function MQDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageResolver", function () {
        return ProfilePageResolver;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "0+S0");

      var ProfilePageResolver = /*#__PURE__*/function () {
        function ProfilePageResolver(firebaseAuthService) {
          _classCallCheck(this, ProfilePageResolver);

          this.firebaseAuthService = firebaseAuthService;
        }

        _createClass(ProfilePageResolver, [{
          key: "resolve",
          value: function resolve() {
            return this.firebaseAuthService.getProfileDataSource();
          }
        }]);

        return ProfilePageResolver;
      }();

      ProfilePageResolver.ctorParameters = function () {
        return [{
          type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]
        }];
      };

      ProfilePageResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]])], ProfilePageResolver);
      /***/
    },

    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile.resolver */
      "MQDv");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["redirectUnauthorizedTo"])(['sign-in']);
      };

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin
        },
        resolve: {
          data: _profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"]
        }
      }];

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]],
        providers: [_profile_resolver__WEBPACK_IMPORTED_MODULE_7__["ProfilePageResolver"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "0+S0");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, route, authService) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.route = route;
          this.authService = authService;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.data.subscribe(function (result) {
              _this2.user = result['data'];
            }, function (err) {});
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this3 = this;

            this.authService.signOut().subscribe(function () {
              // Sign-out successful.
              _this3.router.navigate(['sign-in']);
            }, function (error) {
              console.log('signout error', error);
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]])], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"sign-in\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile-content\">\n  <ion-row class=\"user-details-wrapper\">\n    <ion-col size=\"6\" class=\"user-image-wrapper\">\n      <img class=\"user-image\" [src]=\"user.image\">\n    </ion-col>\n    <ion-col class=\"user-info-wrapper\" size=\"12\">\n      <h3>{{user.name}}</h3>\n      <p>{{user.description}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <h4>Mobile</h4>\n      <p>\n        {{user.phoneNumber}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4>Email</h4>\n      <p>\n        {{user.email}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4>Auth Provider</h4>\n      <p>\n        {{user.provider}}\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"signOut()\">Sign out</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".profile-content {\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.profile-content .user-image {\n  border-radius: 4%;\n}\n.profile-content .user-details-wrapper {\n  justify-content: center;\n}\n.profile-content .user-details-wrapper .user-image-wrapper {\n  text-align: center;\n}\n.profile-content .user-details-wrapper .user-info-wrapper {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0FBQ0o7QUFFRTtFQUNFLHVCQUFBO0FBQUo7QUFFSTtFQUNFLGtCQUFBO0FBQU47QUFHSTtFQUNFLGtCQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcblxuICAudXNlci1pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNCU7XG4gIH1cblxuICAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map