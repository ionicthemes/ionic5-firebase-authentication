(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"], {
    /***/
    "FuQ6":
    /*!*******************************************!*\
      !*** ./src/app/sign-in/sign-in.module.ts ***!
      \*******************************************/

    /*! exports provided: SignInPageModule */

    /***/
    function FuQ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
        return SignInPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-in.page */
      "WawN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]
      }];

      var SignInPageModule = function SignInPageModule() {
        _classCallCheck(this, SignInPageModule);
      };

      SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
      })], SignInPageModule);
      /***/
    },

    /***/
    "P3na":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function P3na(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar></ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sign-in-content\">\n  <h2 class=\"auth-title\">\n    Sign In with Fire\n  </h2>\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"signInWithEmail()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\" *ngIf=\"signInForm.get('email').hasError(validation.type) && (signInForm.get('email').dirty || signInForm.get('email').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item\">\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"signInForm.get('password').hasError(validation.type) && (signInForm.get('password').dirty || signInForm.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"sign-in-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signInForm.valid\">Sign In</ion-button>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-row class=\"sign-up-btn-wrapper\">\n      <ion-button class=\"sign-up-btn\" fill=\"clear\" [routerLink]=\"['/sign-up']\">\n        Don't have an account?\n      </ion-button>\n    </ion-row>\n  </form>\n\n  <div class=\"social-auth-options\">\n    <p class=\"options-divider\">Or</p>\n    <ion-button class=\"social-auth-btn\" color=\"primary\" expand=\"block\" (click)=\"facebookSignIn()\">Facebook Sign In</ion-button>\n    <ion-button class=\"social-auth-btn google-auth-btn\" color=\"danger\" expand=\"block\" (click)=\"googleSignIn()\">Google Sign In</ion-button>\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" color=\"secondary\" expand=\"block\" (click)=\"twitterSignIn()\">Twitter Sign In</ion-button>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "WawN":
    /*!*****************************************!*\
      !*** ./src/app/sign-in/sign-in.page.ts ***!
      \*****************************************/

    /*! exports provided: SignInPage */

    /***/
    function WawN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
        return SignInPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "P3na");
      /* harmony import */


      var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-in.page.scss */
      "i5US");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "0+S0");

      var SignInPage = /*#__PURE__*/function () {
        function SignInPage(angularFire, router, ngZone, authService) {
          var _this = this;

          _classCallCheck(this, SignInPage);

          this.angularFire = angularFire;
          this.router = router;
          this.ngZone = ngZone;
          this.authService = authService;
          this.validation_messages = {
            'email': [{
              type: 'required',
              message: 'Email is required.'
            }, {
              type: 'pattern',
              message: 'Enter a valid email.'
            }],
            'password': [{
              type: 'required',
              message: 'Password is required.'
            }, {
              type: 'minlength',
              message: 'Password must be at least 6 characters long.'
            }]
          };
          this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]))
          }); // Get firebase authentication redirect result invoken when using signInWithRedirect()
          // signInWithRedirect() is only used when client is in web but not desktop

          this.authRedirectResult = this.authService.getRedirectResult().subscribe(function (result) {
            if (result.user) {
              _this.redirectLoggedUserToProfilePage();
            } else if (result.error) {
              _this.submitError = result.error;
            }
          });
        } // Once the auth provider finished the authentication flow, and the auth redirect completes,
        // redirect the user to the profile page


        _createClass(SignInPage, [{
          key: "redirectLoggedUserToProfilePage",
          value: function redirectLoggedUserToProfilePage() {
            var _this2 = this;

            // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
            // That's why we need to wrap the router navigation call inside an ngZone wrapper
            this.ngZone.run(function () {
              _this2.router.navigate(['profile']);
            });
          }
        }, {
          key: "signInWithEmail",
          value: function signInWithEmail() {
            var _this3 = this;

            this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password']).then(function (user) {
              // navigate to user profile
              _this3.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              _this3.submitError = error.message;
            });
          }
        }, {
          key: "facebookSignIn",
          value: function facebookSignIn() {
            var _this4 = this;

            this.authService.signInWithFacebook().then(function (result) {
              if (result.additionalUserInfo) {
                _this4.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
              } // This gives you a Facebook Access Token. You can use it to access the Facebook API.
              // const token = result.credential.accessToken;
              // The signed-in user info is in result.user;


              _this4.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              // Handle Errors here.
              console.log(error);
            });
          }
        }, {
          key: "googleSignIn",
          value: function googleSignIn() {
            var _this5 = this;

            this.authService.signInWithGoogle().then(function (result) {
              if (result.additionalUserInfo) {
                _this5.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
              } // This gives you a Google Access Token. You can use it to access the Google API.
              // const token = result.credential.accessToken;
              // The signed-in user info is in result.user;


              _this5.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              // Handle Errors here.
              console.log(error);
            });
          }
        }, {
          key: "twitterSignIn",
          value: function twitterSignIn() {
            var _this6 = this;

            this.authService.signInWithTwitter().then(function (result) {
              if (result.additionalUserInfo) {
                _this6.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
              } // This gives you a Twitter Access Token. You can use it to access the Twitter API.
              // const token = result.credential.accessToken;
              // The signed-in user info is in result.user;


              _this6.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              // Handle Errors here.
              console.log(error);
            });
          }
        }]);

        return SignInPage;
      }();

      SignInPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]
        }];
      };

      SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]])], SignInPage);
      /***/
    },

    /***/
    "i5US":
    /*!*******************************************!*\
      !*** ./src/app/sign-in/sign-in.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function i5US(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sign-in-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-in-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-in-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-in-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-in-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-in-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  padding-inline-end: 8px;\n}\n.sign-in-content .sign-in-btn {\n  margin: 16px 0px;\n}\n.sign-in-content .sign-up-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-in-content .sign-up-btn-wrapper .sign-up-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFHSTtFQUNBLGtCQUFBO0FBREo7QUFNSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpOO0FBU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBU007RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFQUjtBQVlFO0VBQ0UsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFDRSxrQkFBQTtBQVhOIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLWluLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcblxuICAuYXV0aC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIH1cblxuICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XG4gICAgLm9wdGlvbnMtZGl2aWRlciB7XG4gIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0cy1saXN0IHtcbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lnbi1pbi1idG4ge1xuICAgIG1hcmdpbjogMTZweCAwcHg7XG4gIH1cblxuICAuc2lnbi11cC1idG4td3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnNpZ24tdXAtYnRuIHtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map