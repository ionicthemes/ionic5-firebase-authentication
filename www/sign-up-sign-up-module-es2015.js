(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "kEuc":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up.page */ "v2PJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"],
    }
];
let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "mydc":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sign-up-content\">\n  <h2 class=\"auth-title\">\n    Sign Up with Firebase\n  </h2>\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpWithEmail()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\" *ngIf=\"signUpForm.get('email').hasError(validation.type) && (signUpForm.get('email').dirty || signUpForm.get('email').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item\">\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"signUpForm.get('password').hasError(validation.type) && (signUpForm.get('password').dirty || signUpForm.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signUpForm.valid\">Sign Up</ion-button>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-row class=\"sign-in-btn-wrapper\">\n      <ion-button class=\"sign-in-btn\" fill=\"clear\" [routerLink]=\"['/sign-in']\">\n        Already have an account?\n      </ion-button>\n    </ion-row>\n  </form>\n\n  <div class=\"social-auth-options\">\n    <p class=\"options-divider\">Or</p>\n    <ion-button class=\"social-auth-btn\" color=\"primary\" expand=\"block\" (click)=\"facebookSignUp()\">Facebook Sign Up</ion-button>\n    <ion-button class=\"social-auth-btn google-auth-btn\" color=\"danger\" expand=\"block\" (click)=\"googleSignUp()\">Google Sign Up</ion-button>\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" color=\"secondary\" expand=\"block\" (click)=\"twitterSignUp()\">Twitter Sign Up</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "p7nS":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-up-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-up-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-up-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-up-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-up-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-up-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  padding-inline-end: 8px;\n}\n.sign-up-content .sign-up-btn {\n  margin: 16px 0px;\n}\n.sign-up-content .sign-in-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-up-content .sign-in-btn-wrapper .sign-in-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFHSTtFQUNBLGtCQUFBO0FBREo7QUFNSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpOO0FBU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBU007RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFQUjtBQVlFO0VBQ0UsZ0JBQUE7QUFWSjtBQWFFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFDRSxrQkFBQTtBQVhOIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLXVwLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcblxuICAuYXV0aC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIH1cblxuICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XG4gICAgLm9wdGlvbnMtZGl2aWRlciB7XG4gIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0cy1saXN0IHtcbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lnbi11cC1idG4ge1xuICAgIG1hcmdpbjogMTZweCAwcHg7XG4gIH1cblxuICAuc2lnbi1pbi1idG4td3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnNpZ24taW4tYnRuIHtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "v2PJ":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.page.html */ "mydc");
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.page.scss */ "p7nS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-auth.service */ "0+S0");








let SignUpPage = class SignUpPage {
    constructor(angularFire, router, ngZone, authService) {
        this.angularFire = angularFire;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ]
        };
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]))
        });
        // Get firebase authentication redirect result invoken when using signInWithRedirect()
        // signInWithRedirect() is only used when client is in web but not desktop
        this.authRedirectResult = this.authService.getRedirectResult()
            .subscribe(result => {
            if (result.user) {
                this.redirectLoggedUserToProfilePage();
            }
            else if (result.error) {
                this.submitError = result.error;
            }
        });
    }
    // Once the auth provider finished the authentication flow, and the auth redirect completes,
    // redirect the user to the profile page
    redirectLoggedUserToProfilePage() {
        // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
        // That's why we need to wrap the router navigation call inside an ngZone wrapper
        this.ngZone.run(() => {
            this.router.navigate(['profile']);
        });
    }
    signUpWithEmail() {
        this.authService.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password'])
            .then(user => {
            // navigate to user profile
            this.redirectLoggedUserToProfilePage();
        })
            .catch(error => {
            this.submitError = error.message;
        });
    }
    facebookSignUp() {
        this.authService.signInWithFacebook()
            .then((result) => {
            if (result.additionalUserInfo) {
                this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;
            this.redirectLoggedUserToProfilePage();
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
    }
    googleSignUp() {
        this.authService.signInWithGoogle()
            .then((result) => {
            if (result.additionalUserInfo) {
                this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;
            this.redirectLoggedUserToProfilePage();
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
    }
    twitterSignUp() {
        this.authService.signInWithTwitter()
            .then((result) => {
            if (result.additionalUserInfo) {
                this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            }
            // This gives you a Twitter Access Token. You can use it to access the Twitter API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;
            this.redirectLoggedUserToProfilePage();
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"] }
];
SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map