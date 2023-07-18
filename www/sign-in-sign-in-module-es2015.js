(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "FuQ6":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in.page */ "WawN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"],
    }
];
let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "P3na":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar></ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sign-in-content\">\n  <h2 class=\"auth-title\">\n    Sign In with Firebase\n  </h2>\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"signInWithEmail()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\" *ngIf=\"signInForm.get('email').hasError(validation.type) && (signInForm.get('email').dirty || signInForm.get('email').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item class=\"input-item\">\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"signInForm.get('password').hasError(validation.type) && (signInForm.get('password').dirty || signInForm.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"sign-in-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signInForm.valid\">Sign In</ion-button>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-row class=\"sign-up-btn-wrapper\">\n      <ion-button class=\"sign-up-btn\" fill=\"clear\" [routerLink]=\"['/sign-up']\">\n        Don't have an account?\n      </ion-button>\n    </ion-row>\n  </form>\n\n  <div class=\"social-auth-options\">\n    <p class=\"options-divider\">Or</p>\n    <ion-button class=\"social-auth-btn\" color=\"primary\" expand=\"block\" (click)=\"facebookSignIn()\">Facebook Sign In</ion-button>\n    <ion-button class=\"social-auth-btn google-auth-btn\" color=\"danger\" expand=\"block\" (click)=\"googleSignIn()\">Google Sign In</ion-button>\n    <ion-button class=\"social-auth-btn twitter-auth-btn\" color=\"secondary\" expand=\"block\" (click)=\"twitterSignIn()\">Twitter Sign In</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "WawN":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-in.page.html */ "P3na");
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.page.scss */ "i5US");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-auth.service */ "0+S0");








let SignInPage = class SignInPage {
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
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
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
    signInWithEmail() {
        this.authService.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password'])
            .then(user => {
            // navigate to user profile
            this.redirectLoggedUserToProfilePage();
        })
            .catch(error => {
            this.submitError = error.message;
        });
    }
    facebookSignIn() {
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
    googleSignIn() {
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
    twitterSignIn() {
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
SignInPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]])
], SignInPage);



/***/ }),

/***/ "i5US":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-in-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-in-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-in-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-in-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-in-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-in-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n.sign-in-content .sign-in-btn {\n  margin: 16px 0px;\n}\n.sign-in-content .sign-up-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-in-content .sign-up-btn-wrapper .sign-up-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFHSTtFQUNBLGtCQUFBO0FBREo7QUFNSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpOO0FBU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVBOO0FBU007RUFDRSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQVBSO0FBWUU7RUFDRSxnQkFBQTtBQVZKO0FBYUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNFLGtCQUFBO0FBWE4iLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24taW4tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuXG4gIC5hdXRoLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgfVxuXG4gIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcbiAgICAub3B0aW9ucy1kaXZpZGVyIHtcbiAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaW5wdXRzLWxpc3Qge1xuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWduLWluLWJ0biB7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgfVxuXG4gIC5zaWduLXVwLWJ0bi13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2lnbi11cC1idG4ge1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map