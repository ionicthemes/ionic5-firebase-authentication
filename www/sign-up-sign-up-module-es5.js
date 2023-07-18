(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
    /***/
    "kEuc":
    /*!*******************************************!*\
      !*** ./src/app/sign-up/sign-up.module.ts ***!
      \*******************************************/

    /*! exports provided: SignUpPageModule */

    /***/
    function kEuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
        return SignUpPageModule;
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


      var _sign_up_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sign-up.page */
      "v2PJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]
      }];

      var SignUpPageModule = function SignUpPageModule() {
        _classCallCheck(this, SignUpPageModule);
      };

      SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]]
      })], SignUpPageModule);
      /***/
    },

    /***/
    "mydc":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function mydc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sign-up-content\">\n  <h2 class=\"auth-title\">\n    Sign Up with Firebase\n  </h2>\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpWithEmail()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\" *ngIf=\"signUpForm.get('email').hasError(validation.type) && (signUpForm.get('email').dirty || signUpForm.get('email').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item\">\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"signUpForm.get('password').hasError(validation.type) && (signUpForm.get('password').dirty || signUpForm.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signUpForm.valid\">Sign Up</ion-button>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-row class=\"sign-in-btn-wrapper\">\n      <ion-button class=\"sign-in-btn\" fill=\"clear\" [routerLink]=\"['/sign-in']\">\n        Already have an account?\n      </ion-button>\n    </ion-row>\n  </form>\n\n  <div class=\"social-auth-options\">\n    <p class=\"options-divider\">Or</p>\n    <ion-button class=\"social-auth-btn\" color=\"primary\" expand=\"block\" (click)=\"facebookSignUp()\">Facebook Sign Up</ion-button>\n    <ion-button class=\"social-auth-btn google-auth-btn\" color=\"danger\" expand=\"block\" (click)=\"googleSignUp()\">Google Sign Up</ion-button>\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" color=\"secondary\" expand=\"block\" (click)=\"twitterSignUp()\">Twitter Sign Up</ion-button>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "p7nS":
    /*!*******************************************!*\
      !*** ./src/app/sign-up/sign-up.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function p7nS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sign-up-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-up-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-up-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-up-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-up-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-up-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n.sign-up-content .sign-up-btn {\n  margin: 16px 0px;\n}\n.sign-up-content .sign-in-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-up-content .sign-in-btn-wrapper .sign-in-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFHSTtFQUNBLGtCQUFBO0FBREo7QUFNSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpOO0FBU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBU007RUFDRSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQVBSO0FBWUU7RUFDRSxnQkFBQTtBQVZKO0FBYUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNFLGtCQUFBO0FBWE4iLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24tdXAtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuXG4gIC5hdXRoLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgfVxuXG4gIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcbiAgICAub3B0aW9ucy1kaXZpZGVyIHtcbiAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaW5wdXRzLWxpc3Qge1xuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWduLXVwLWJ0biB7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgfVxuXG4gIC5zaWduLWluLWJ0bi13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2lnbi1pbi1idG4ge1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "v2PJ":
    /*!*****************************************!*\
      !*** ./src/app/sign-up/sign-up.page.ts ***!
      \*****************************************/

    /*! exports provided: SignUpPage */

    /***/
    function v2PJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
        return SignUpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "mydc");
      /* harmony import */


      var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up.page.scss */
      "p7nS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "0+S0");

      var SignUpPage = /*#__PURE__*/function () {
        function SignUpPage(angularFire, router, ngZone, authService) {
          var _this = this;

          _classCallCheck(this, SignUpPage);

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
          this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
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


        _createClass(SignUpPage, [{
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
          key: "signUpWithEmail",
          value: function signUpWithEmail() {
            var _this3 = this;

            this.authService.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password']).then(function (user) {
              // navigate to user profile
              _this3.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              _this3.submitError = error.message;
            });
          }
        }, {
          key: "facebookSignUp",
          value: function facebookSignUp() {
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
          key: "googleSignUp",
          value: function googleSignUp() {
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
          key: "twitterSignUp",
          value: function twitterSignUp() {
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

        return SignUpPage;
      }();

      SignUpPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]
        }];
      };

      SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]])], SignUpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map