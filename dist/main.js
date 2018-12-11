(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/_helpers/must-match.directive.ts":
/*!**********************************************!*\
  !*** ./app/_helpers/must-match.directive.ts ***!
  \**********************************************/
/*! exports provided: MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./must-match.validator */ "./app/_helpers/must-match.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MustMatchDirective = /** @class */ (function () {
    function MustMatchDirective() {
        this.mustMatch = [];
    }
    MustMatchDirective_1 = MustMatchDirective;
    MustMatchDirective.prototype.validate = function (formGroup) {
        return Object(_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])(this.mustMatch[0], this.mustMatch[1])(formGroup);
    };
    var MustMatchDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mustMatch'),
        __metadata("design:type", Array)
    ], MustMatchDirective.prototype, "mustMatch", void 0);
    MustMatchDirective = MustMatchDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mustMatch]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MustMatchDirective_1, multi: true }]
        })
    ], MustMatchDirective);
    return MustMatchDirective;
}());



/***/ }),

/***/ "./app/_helpers/must-match.validator.ts":
/*!**********************************************!*\
  !*** ./app/_helpers/must-match.validator.ts ***!
  \**********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Montserrat);\n/* @import \"node_modules/bootstrap/scss/bootstrap\"; */\n.float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\tbackground-color:#25d366;\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n  font-size:30px;\n\tbox-shadow: 2px 2px 3px #999;\n  z-index:100;\n}\n.my-float{\n\tmargin-top:16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdFQUFnRTtBQURoRSxzREFBc0Q7QUFFdEQ7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZO0NBQ1osV0FBVztDQUNYLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGtCQUFrQjtFQUNqQixlQUFlO0NBQ2hCLDZCQUE2QjtFQUM1QixZQUFZO0NBQ2I7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXBcIjsgKi9cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0KTtcbi5mbG9hdHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdHdpZHRoOjYwcHg7XG5cdGhlaWdodDo2MHB4O1xuXHRib3R0b206NDBweDtcblx0cmlnaHQ6NDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjojMjVkMzY2O1xuXHRjb2xvcjojRkZGO1xuXHRib3JkZXItcmFkaXVzOjUwcHg7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXNpemU6MzBweDtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgei1pbmRleDoxMDA7XG59XG5cbi5teS1mbG9hdHtcblx0bWFyZ2luLXRvcDoxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n            <router-outlet></router-outlet>\n            <a href=\"https://api.whatsapp.com/send?phone=18028706770&text=Hi%20I'm%20interested%20to%20buying%20sim-card%20please.\" class=\"float\" target=\"_blank\">\n                <i class=\"fab fa-whatsapp my-float\"></i>\n                </a>\n                <br>\n                <br>\n                <br>\n                <br>\n\n                \n<app-footer></app-footer>\n      \n      \n          \n\n\n\n          \n\n\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Import the DataService
// import { DataService } from './data.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./app/header/header.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/register/register.component */ "./app/pages/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./app/footer/footer.component.ts");
/* harmony import */ var _pages_store_store_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/store/store.component */ "./app/pages/store/store.component.ts");
/* harmony import */ var _helpers_must_match_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_helpers/must-match.directive */ "./app/_helpers/must-match.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Import the HttpClient  Module and our Data Service

// import { DataService } from './data.service';
// import { PostsService } from './posts.service';



// import { PostsComponent } from "./pages/posts/posts.component";





var routes = [
    { path: "home", component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"] },
    { path: "about", component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"] },
    // { path: "posts", component: PostsComponent },
    { path: "register", component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: "store", component: _pages_store_store_component__WEBPACK_IMPORTED_MODULE_13__["StoreComponent"] },
    { path: "**", component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _helpers_must_match_directive__WEBPACK_IMPORTED_MODULE_14__["MustMatchDirective"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                // PostsComponent,
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _pages_store_store_component__WEBPACK_IMPORTED_MODULE_13__["StoreComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/email.service.ts":
/*!******************************!*\
  !*** ./app/email.service.ts ***!
  \******************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this._baseUrl = 'https://api.emailjs.com/api/v1.0/email';
    }
    EmailService.prototype.sendEmail = function (data) {
        this.http.post("/api/sendEmail", data)
            .subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./app/footer/footer.component.css":
/*!*****************************************!*\
  !*** ./app/footer/footer.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 350px) {  \n \n.footer{\n    bottom: 0;\n    /* height: 500px; */\n    min-height:20%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHsgIFxuIFxuLmZvb3RlcntcbiAgICBib3R0b206IDA7XG4gICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cbiAgICBtaW4taGVpZ2h0OjIwJTtcbn1cbn0iXX0= */"

/***/ }),

/***/ "./app/footer/footer.component.html":
/*!******************************************!*\
  !*** ./app/footer/footer.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<footer class=\"footer px-4\">\n\n  <p>&copy; 2018 Sims 4 Usa Company, Inc &middot; </p>\n  <p class=\"float-left\">\n    <a href=\"#\">Back to top</a>\n  </p>\n</footer>\n\n<!--  -->"

/***/ }),

/***/ "./app/footer/footer.component.ts":
/*!****************************************!*\
  !*** ./app/footer/footer.component.ts ***!
  \****************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/header/header.component.css":
/*!*****************************************!*\
  !*** ./app/header/header.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .navbar {\n    /* min-height: 50px; */\n    /* max-height: 70px; */\n  \n    font-size: 18px !important;\n    line-height: 1.42857143 !important;\n    letter-spacing: 4px;\n    border-radius: 0;\n    /* height: 75px; */\n    /* max-height: 60px; */\n   min-height: 100px;\n    background-color: #ffffff;\n    font-weight: bold;\n}\n\n.navbar-collapse {\n  padding-right: 15px;\n  /* padding-left: 15px; */\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n\n.logo {\n  width: 149px;\n  height: 36px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: 17.5px;\n\n  \n}\n\n.sims {\n  \n  -webkit-transform: rotate(-720deg);\n  \n          transform: rotate(-720deg);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.5px;\n  text-align: center;\n  color: #393939;\n  top: 50%;\n}\n\n.about {\n\n  -webkit-transform: rotate(-720deg);\n\n          transform: rotate(-720deg);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.1px;\n  text-align: center;\n  color: #393939;\n}\n\n.contact {\n \n  -webkit-transform: rotate(-720deg);\n \n          transform: rotate(-720deg);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.1px;\n  text-align: center;\n  color: #393939;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0dBQ3hCLGtCQUFrQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLGtDQUFrQztFQUUxQixrREFBa0Q7Q0FDM0Q7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUFvQjtLQUFwQixvQkFBb0I7RUFDcEIsb0JBQW9COzs7Q0FHckI7O0FBRUQ7O0VBRUUsbUNBQTJCOztVQUEzQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztDQUNWOztBQUVEOztFQUVFLG1DQUEyQjs7VUFBM0IsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFDRDs7RUFFRSxtQ0FBMkI7O1VBQTNCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLm5hdmJhciB7XG4gICAgLyogbWluLWhlaWdodDogNTBweDsgKi9cbiAgICAvKiBtYXgtaGVpZ2h0OiA3MHB4OyAqL1xuICBcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MyAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAvKiBoZWlnaHQ6IDc1cHg7ICovXG4gICAgLyogbWF4LWhlaWdodDogNjBweDsgKi9cbiAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAvKiBwYWRkaW5nLWxlZnQ6IDE1cHg7ICovXG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbn1cbi5sb2dvIHtcbiAgd2lkdGg6IDE0OXB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi1sZWZ0OiAxNy41cHg7XG5cbiAgXG59XG5cbi5zaW1zIHtcbiAgXG4gIHRyYW5zZm9ybTogcm90YXRlKC03MjBkZWcpO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICB0b3A6IDUwJTtcbn1cblxuLmFib3V0IHtcblxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzIwZGVnKTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM5MzkzOTtcbn1cbi5jb250YWN0IHtcbiBcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTcyMGRlZyk7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzOTM5Mzk7XG59Il19 */"

/***/ }),

/***/ "./app/header/header.component.html":
/*!******************************************!*\
  !*** ./app/header/header.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand ml-5\" href=\"#\"><input  type=\"image\"src=\"../../assets/logo@3x.jpg\"\n    srcset=\"img/logo@2x.jpg 2x,\n            img/logo@3x.jpg 3x\"\n    class=\"logo\"></a>\n\n        \n \n    <button class=\"navbar-toggler navbar-dark \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" style=\"background-color:#ffc410;\"  aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon \"></span>\n    </button>\n  \n    \n    <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n        </li>\n\n        <li class=\"nav-item px-4\">\n            <a class=\"nav-link sims \" style=\"background-color:#ffff;\" [routerLink]=\"['/store']\">  <b>SIMS</b>   </a>\n          </li>\n\n        <li class=\"nav-item px-4\">\n          <a class=\"nav-link  about\" style=\"background-color:#ffff;\" [routerLink]=\"['/about']\" >   ABOUT   </a>\n        </li>\n      \n        <li class=\"nav-item px-4 \">\n            <a class=\"nav-link  contact\" style=\"background-color:#ffff;\" href=\"#contacts\">  CONTACT  </a>\n          </li>\n  \n        \n      </ul>\n    \n    </div>\n    \n  </nav>\n  <br>\n  <br>\n  <br>\n  \n \n  \n  \n\n\n\n\n\n\n\n\n\n<!-- \n\n\n\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\"><input type=\"image\" height=\"80\"  src=\"../../assets/1j+ojl1FOMkX9WypfBe43D6kiveCqBBInxnEwXs1M3EMoAJtlSIsg...Vt8fw7.png\" class=\"d-inline-block img-responsive\"/>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" style=\"background-color:#f8f9fa;\"  aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  \n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" style=\"background-color:#f8f9fa;\" [routerLink]=\"['/about']\" >   About   </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" style=\"background-color:#f8f9fa;\" [routerLink]=\"['/store']\">  Store   </a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" style=\"background-color:#f8f9fa;\" href=\"#form4-4v\">  Contact  </a>\n        </li>\n\n      \n    </ul>\n  \n  </div>\n  \n</nav>\n<br>\n<br>\n -->\n"

/***/ }),

/***/ "./app/header/header.component.ts":
/*!****************************************!*\
  !*** ./app/header/header.component.ts ***!
  \****************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as $ from 'jquery';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./app/models/email.ts":
/*!*****************************!*\
  !*** ./app/models/email.ts ***!
  \*****************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email(fullName, phone, emailAddress, message) {
        this.fullName = fullName;
        this.phone = phone;
        this.emailAddress = emailAddress;
        this.message = message;
    }
    return Email;
}());



/***/ }),

/***/ "./app/pages/about-page/about-page.component.css":
/*!*******************************************************!*\
  !*** ./app/pages/about-page/about-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/pages/about-page/about-page.component.html":
/*!********************************************************!*\
  !*** ./app/pages/about-page/about-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<div id=\"about\" class=\"container text-center\">\n  <div class=\"row\">\n    <!-- <hr class=\"featurette-divider\"> -->\n\n    <div class=\"col-sm-8 col-lg-12\">\n      <input type=\"image\" src=\"../../assets/logo@3x.png\" srcset=\"img/logo@2x.jpg 2x,\n                img/logo@3x.jpg 3x\" class=\"logo\">\n      <br>\n      <h2>About As</h2>\n      <br>\n\n      <h4> We are company that provides cellular services within the United States of America.\n        <br> Our uniqueness lies in the following:\n        <br> The packages are very worthwhile\n        <br> Final price without surprises and additions - everything is known in advance\n        <br> Shipping to all over the world up to 3 business days</h4>\n      <br>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-signal logo\"></span>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./app/pages/about-page/about-page.component.ts":
/*!******************************************************!*\
  !*** ./app/pages/about-page/about-page.component.ts ***!
  \******************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./app/pages/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./app/pages/home-page/home-page.component.css":
/*!*****************************************************!*\
  !*** ./app/pages/home-page/home-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n####################################################\nM E D I A  Q U E R I E S\n####################################################\n*/\n\n/*\n::::::::::::::::::::::::::::::::::::::::::::::::::::\nBootstrap 4 breakpoints\n*/\n\n/* Small devices (landscape phones, 544px and up) */\n\n@media (min-width: 350px) {\n  /* body{\n        line-height: 2; \n      } */\n  .carousel-inner img {\n    width: 100%;\n    /* margin:center; */\n    min-height: 240px;\n    max-height: 240px;\n  }\n  .Sim-card-for-USA {\n    width: 120px;\n    height: 61px;\n    font-family: Montserrat;\n    font-size: 26.9px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.19;\n    letter-spacing: normal;\n    color: #ffffff;\n    color: var(--white);\n    bottom: 0;\n    top: 10%;\n  }\n  .You-will-get-the-sim {\n    width: 180px;\n    height: 30px;\n    font-family: Montserrat;\n    font-size: 11px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.6;\n    letter-spacing: normal;\n    color: #ffffff;\n    color: var(--white);\n    bottom: 0;\n    top: 38%;\n  }\n  .Rectangle-6-Copy-2 {\n    width: 10px;\n    height: 5px;\n    border-radius: 20.6px;\n    top: 68%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    max-height: 20px;\n    max-width: 80px;\n    /* background-size: 20% 20%; */\n  }\n}\n\n/* Medium devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n}\n\n/* Large devices (desktops, 992px and up) */\n\n@media (min-width: 992px) {\n  .Sim-card-for-USA {\n    width: 300px;\n    height: 120px;\n    font-family: Montserrat;\n    font-size: 60px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.13;\n    letter-spacing: norma1pxl;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 30%;\n  }\n\n  .You-will-get-the-sim {\n    width: 350px;\n    height: 100px;\n    font-family: Montserrat;\n    font-size: 20px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.4;\n    letter-spacing: 0.5px;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 50%;\n  }\n\n  .Rectangle-6-Copy-2 {\n    font-family: Montserrat;\n    font-style: bold;\n    font-weight: 700;\n    src: local(\"Montserrat-Bold\"),\n      url(http://fonts.gstatic.com/s/montserrat/v6/IQHow_FEYlDC4Gzy_m8fcvEr6Hm6RMS0v1dtXsGir4g.ttf)\n        format(\"truetype\");\n\n    font-size: 18px;\n    width: 220px;\n    height: 42px;\n    border-radius: 23.6px;\n    background-color: #ffc410;\n    color: #2424cf;\n    top: 63%;\n\n    line-height: 1.13;\n    letter-spacing: normal;\n\n    -webkit-transform: translateY(-50%);\n\n            transform: translateY(-50%);\n  }\n  .carousel-inner img {\n    width: 100%;\n    margin: center;\n    min-height: 300px;\n    max-height: 500px;\n  }\n}\n\n/* Extra large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n  .Sim-card-for-USA {\n    width: 300px;\n    height: 120px;\n    font-family: Montserrat;\n    font-size: 60px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.13;\n    letter-spacing: norma1pxl;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 30%;\n  }\n\n  .You-will-get-the-sim {\n    width: 350px;\n    height: 100px;\n    font-family: Montserrat;\n    font-size: 20px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.4;\n    letter-spacing: 0.5px;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 50%;\n  }\n\n  .Rectangle-6-Copy-2 {\n    font-family: Montserrat;\n    font-style: bold;\n    font-weight: 700;\n    src: local(\"Montserrat-Bold\"),\n      url(http://fonts.gstatic.com/s/montserrat/v6/IQHow_FEYlDC4Gzy_m8fcvEr6Hm6RMS0v1dtXsGir4g.ttf)\n        format(\"truetype\");\n\n    font-size: 18px;\n    width: 220px;\n    height: 42px;\n    border-radius: 23.6px;\n    background-color: #ffc410;\n    color: #2424cf;\n    top: 63%;\n\n    max-height: 42px;\n    max-width: 220px;\n    line-height: 1.13;\n    letter-spacing: normal;\n\n    -webkit-transform: translateY(-50%);\n\n            transform: translateY(-50%);\n  }\n  .carousel-inner img {\n    width: 100%;\n    margin: center;\n    min-height: 300px;\n    max-height: 500px;\n  }\n}\n\n/* \nbody {\n  background-color: #ffffff;\n  font-family: \"Roboto\", sans-serif;\n \n} */\n\n.row {\n  min-height: 35vh;\n}\n\n.card {\n  border: 0;\n  border-radius: 0px;\n  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease-in-out;\n  padding: 2.25rem 0;\n  position: relative;\n  will-change: transform;\n}\n\n.card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: #57e2b2;\n  transition: 0.5s;\n}\n\n.card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n}\n\n.card:hover:after {\n  width: 100%;\n}\n\n.card .card-header {\n  background-color: white;\n  padding-left: 2rem;\n  border-bottom: 0px;\n}\n\n.card .card-title {\n  margin-bottom: 1rem;\n}\n\n.card .card-block {\n  padding-top: 0;\n}\n\n.card .list-group-item {\n  border: 0px;\n  padding: 0.25rem;\n  color: #808080;\n  font-weight: 300;\n}\n\n.display-2 {\n  font-size: 7rem;\n  letter-spacing: -0.5rem;\n}\n\n.display-2 .currency {\n  font-size: 2.75rem;\n  position: relative;\n  font-weight: 400;\n  top: -45px;\n  letter-spacing: 0px;\n}\n\n.display-2 .period {\n  font-size: 1rem;\n  color: #b3b3b3;\n  letter-spacing: 0px;\n}\n\n.btn {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #a6a6a6;\n  border-radius: 0;\n  padding: 0.75rem 1.25rem;\n  letter-spacing: 1px;\n}\n\n.btn-gradient {\n  background-color: #f2f2f2;\n  transition: background 0.3s ease-in-out;\n}\n\n.btn-gradient:hover {\n  color: white;\n  background-color: #57e2b2;\n}\n\n/* body{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif !important;\n    background: black;\n} */\n\nsection {\n  width: 100%;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 140px 0;\n}\n\n.card {\n  position: relative;\n  max-width: 300px;\n  height: auto;\n  border-radius: 40px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2), 0 20px 50px rgba(0, 0, 0, 0.5);\n  transition: 0.5s;\n  overflow: hidden;\n}\n\n.card:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.col-sm-4:nth-child(1) .card,\n.col-sm-4:nth-child(1) .card .title .fa-telegram-plane {\n  background: linear-gradient(-45deg, #f403d1, #64b5f6);\n}\n\n.col-sm-4:nth-child(2) .card,\n.col-sm-4:nth-child(2) .card .title .fas {\n  background: linear-gradient(-45deg, #ffec61, #f321d7);\n}\n\n.col-sm-4:nth-child(3) .card {\n  background: linear-gradient(-45deg, #24ff72, #9a4eff);\n}\n\n.card:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 40%;\n  background: rgba(255, 255, 255, 0.1);\n  z-index: 1;\n  -webkit-transform: skewY(-5deg) scale(1.5);\n          transform: skewY(-5deg) scale(1.5);\n}\n\n.title .fa-telegram-plane {\n  color: #fff;\n  font-size: 60px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 100px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.title .fas {\n  color: #fff;\n  font-size: 60px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 100px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.title h1 {\n  position: relative;\n  margin: 20px 0 0;\n  padding: 0;\n  color: #fff;\n  font-size: 28px;\n  z-index: 2;\n}\n\n.price {\n  position: relative;\n  z-index: 2;\n}\n\n.price h3 {\n  margin: 0;\n  padding: 20px 0;\n  color: #fff;\n  font-size: 60px;\n}\n\n.option {\n  position: relative;\n  z-index: 2;\n}\n\n.option ul {\n  margin: 0;\n  padding: 0;\n}\n\n.option ul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #fff;\n  font-size: 16px;\n}\n\n.card a {\n  position: relative;\n  z-index: 2;\n  background: #fff;\n  border-radius: 40px;\n  width: 150px;\n  height: 40px;\n  line-height: 40px;\n  display: block;\n  text-align: center;\n  margin: 20px auto 0;\n  font-size: 16px;\n  cursor: pointer;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n\n.cord a:hover {\n  text-decoration: none;\n}\n\n.text-middle {\n  font-family: Montserrat;\n  font-size: 20px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.4;\n  letter-spacing: 0.5px;\n}\n\n/* .Sim-card-for-USA {\n    width: 300px;\n    height: 120px;\n    font-family: Montserrat;\n    font-size: 60px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.13;\n    letter-spacing: norma1pxl;\n    color: #ffffff;\n    color: var(--white);\n    transform: translateY(-50%);\n    bottom: 0;\n    top: 30%;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7O0FBRUY7OztFQUdFOztBQUNGLG9EQUFvRDs7QUFDcEQ7RUFDRTs7VUFFUTtFQUNSO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixTQUFTO0dBQ1Y7RUFDRDtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFNBQVM7R0FDVjtFQUNEO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwrQkFBK0I7R0FDaEM7Q0FDRjs7QUFFRCw0Q0FBNEM7O0FBQzVDO0NBQ0M7O0FBRUQsNENBQTRDOztBQUM1QztFQUNFO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLFNBQVM7R0FDVjs7RUFFRDtJQUNFLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOzsyQkFFdUI7O0lBRXZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFNBQVM7O0lBRVQsa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkIsb0NBQTRCOztZQUE1Qiw0QkFBNEI7R0FDN0I7RUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtHQUNuQjtDQUNGOztBQUNELHlEQUF5RDs7QUFDekQ7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsU0FBUztHQUNWOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixTQUFTO0dBQ1Y7O0VBRUQ7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjs7MkJBRXVCOztJQUV2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixTQUFTOztJQUVULGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkIsb0NBQTRCOztZQUE1Qiw0QkFBNEI7R0FDN0I7RUFDRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtHQUNuQjtDQUNGOztBQUVEOzs7OztJQUtJOztBQUVKO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFFdkIsOENBQThDO0NBQy9DOztBQUNEO0VBQ0UsWUFBWTtDQUNiOztBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtDQUN6Qjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQix3Q0FBd0M7Q0FDekM7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCOztBQUVEOzs7OztJQUtJOztBQUNKO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEVBQThFO0VBQzlFLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0NBQ3ZCOztBQUNEOztFQUVFLHNEQUFzRDtDQUN2RDs7QUFFRDs7RUFFRSxzREFBc0Q7Q0FDdkQ7O0FBQ0Q7RUFDRSxzREFBc0Q7Q0FDdkQ7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsV0FBVztFQUNYLDJDQUFtQztVQUFuQyxtQ0FBbUM7Q0FDcEM7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkNBQTJDO0NBQzVDOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJDQUEyQztDQUM1Qzs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztDQUNaOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFDRDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxVQUFVO0VBQ1YsV0FBVztDQUNaOztBQUNEO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztDQUMzQzs7QUFDRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtDQUN2Qjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O01BZU0iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuTSBFIEQgSSBBICBRIFUgRSBSIEkgRSBTXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuXG4vKlxuOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuQm9vdHN0cmFwIDQgYnJlYWtwb2ludHNcbiovXG4vKiBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NDRweCBhbmQgdXApICovXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHtcbiAgLyogYm9keXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7IFxuICAgICAgfSAqL1xuICAuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBtYXJnaW46Y2VudGVyOyAqL1xuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xuICB9XG4gIC5TaW0tY2FyZC1mb3ItVVNBIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA2MXB4O1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIGZvbnQtc2l6ZTogMjYuOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE5O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAxMCU7XG4gIH1cbiAgLllvdS13aWxsLWdldC10aGUtc2ltIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAzOCU7XG4gIH1cbiAgLlJlY3RhbmdsZS02LUNvcHktMiB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjAuNnB4O1xuICAgIHRvcDogNjglO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDIwJSAyMCU7ICovXG4gIH1cbn1cblxuLyogTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xufVxuXG4vKiBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5TaW0tY2FyZC1mb3ItVVNBIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYTFweGw7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMzAlO1xuICB9XG5cbiAgLllvdS13aWxsLWdldC10aGUtc2ltIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogNTAlO1xuICB9XG5cbiAgLlJlY3RhbmdsZS02LUNvcHktMiB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoXCJNb250c2VycmF0LUJvbGRcIiksXG4gICAgICB1cmwoaHR0cDovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbW9udHNlcnJhdC92Ni9JUUhvd19GRVlsREM0R3p5X204ZmN2RXI2SG02Uk1TMHYxZHRYc0dpcjRnLnR0ZilcbiAgICAgICAgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG5cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMy42cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzQxMDtcbiAgICBjb2xvcjogIzI0MjRjZjtcbiAgICB0b3A6IDYzJTtcblxuICAgIGxpbmUtaGVpZ2h0OiAxLjEzO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmNhcm91c2VsLWlubmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gIH1cbn1cbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuU2ltLWNhcmQtZm9yLVVTQSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4xMztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWExcHhsO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDMwJTtcbiAgfVxuXG4gIC5Zb3Utd2lsbC1nZXQtdGhlLXNpbSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIC5SZWN0YW5nbGUtNi1Db3B5LTIge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKFwiTW9udHNlcnJhdC1Cb2xkXCIpLFxuICAgICAgdXJsKGh0dHA6Ly9mb250cy5nc3RhdGljLmNvbS9zL21vbnRzZXJyYXQvdjYvSVFIb3dfRkVZbERDNEd6eV9tOGZjdkVyNkhtNlJNUzB2MWR0WHNHaXI0Zy50dGYpXG4gICAgICAgIGZvcm1hdChcInRydWV0eXBlXCIpO1xuXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjMuNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM0MTA7XG4gICAgY29sb3I6ICMyNDI0Y2Y7XG4gICAgdG9wOiA2MyU7XG5cbiAgICBtYXgtaGVpZ2h0OiA0MnB4O1xuICAgIG1heC13aWR0aDogMjIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICAuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuXG4vKiBcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiBcbn0gKi9cblxuLnJvdyB7XG4gIG1pbi1oZWlnaHQ6IDM1dmg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAzcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDIuMjVyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLmNhcmQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3ZTJiMjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggMzVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAzNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5jYXJkOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG4uY2FyZCAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY2FyZCAuY2FyZC1ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmNhcmQgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmRpc3BsYXktMiB7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVyZW07XG59XG4uZGlzcGxheS0yIC5jdXJyZW5jeSB7XG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0b3A6IC00NXB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuLmRpc3BsYXktMiAucGVyaW9kIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2IzYjNiMztcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNhNmE2YTY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJ0bi1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5idG4tZ3JhZGllbnQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1N2UyYjI7XG59XG5cbi8qIGJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59ICovXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDE0MHB4IDA7XG59XG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmNvbC1zbS00Om50aC1jaGlsZCgxKSAuY2FyZCxcbi5jb2wtc20tNDpudGgtY2hpbGQoMSkgLmNhcmQgLnRpdGxlIC5mYS10ZWxlZ3JhbS1wbGFuZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmNDAzZDEsICM2NGI1ZjYpO1xufVxuXG4uY29sLXNtLTQ6bnRoLWNoaWxkKDIpIC5jYXJkLFxuLmNvbC1zbS00Om50aC1jaGlsZCgyKSAuY2FyZCAudGl0bGUgLmZhcyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmVjNjEsICNmMzIxZDcpO1xufVxuLmNvbC1zbS00Om50aC1jaGlsZCgzKSAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMyNGZmNzIsICM5YTRlZmYpO1xufVxuLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHNrZXdZKC01ZGVnKSBzY2FsZSgxLjUpO1xufVxuLnRpdGxlIC5mYS10ZWxlZ3JhbS1wbGFuZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDYwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnRpdGxlIC5mYXMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi50aXRsZSBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgei1pbmRleDogMjtcbn1cbi5wcmljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5wcmljZSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuLm9wdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5vcHRpb24gdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ub3B0aW9uIHVsIGxpIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNhcmQgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uY29yZCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRleHQtbWlkZGxlIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4vKiAuU2ltLWNhcmQtZm9yLVVTQSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4xMztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWExcHhsO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDMwJTtcbiAgfSAqL1xuIl19 */"

/***/ }),

/***/ "./app/pages/home-page/home-page.component.html":
/*!******************************************************!*\
  !*** ./app/pages/home-page/home-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide  \" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators  \">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner \">\n        <div class=\"carousel-item active  \">\n\n            <img src=\"../../../assets/bridge.png\" class=\"bridge mh-100\">\n            <div class=\"carousel-caption Sim-card-for-USA text-left\">\n                <p>Sim card for USA</p>\n            </div>\n            <div class=\" carousel-caption You-will-get-the-sim text-left\">\n                <p>You will get the sim card to your home very fast and protactive</p>\n            </div>\n            <a class=\"carousel-caption Rectangle-6-Copy-2 \" href=\"#buy-now\">\n\n                <input type=\"image\" src=\"../../../assets/buy-now@3x.png\" srcset=\"../../../assets/buy-now@2x.png 2x,\n                        ../../../assets/buy-now@3x.png 3x\" class=\"Rectangle-6-Copy-2 img-responsive text-left\" style=\"height: 32px; width:120px\">\n\n            </a>\n\n        </div>\n        <div class=\"carousel-item\">\n            <img src=\"../../../assets/airplane.png\" class=\"Group-3 mh-100\">\n\n            <div class=\"carousel-caption Sim-card-for-USA text-left\">\n                <p>Sim card for USA</p>\n            </div>\n            <div class=\" carousel-caption You-will-get-the-sim text-left\">\n                <p>Worldwide shipping within 3 business days</p>\n            </div>\n            <a class=\"carousel-caption Rectangle-6-Copy-2 \" href=\"#buy-now\">\n\n                <input type=\"image\" src=\"../../../assets/buy-now@3x.png\" srcset=\"img/buy-now@2x.png 2x,\n                                         img/buy-now@3x.png 3x\" class=\"Rectangle-6-Copy-2 img-responsive text-left\" style=\"height: 32px; width:120px\">\n\n            </a>\n        </div>\n        <br>\n        <br>\n        <div class=\"container\">\n\n            <input type=\"image\" src=\"../../../assets/bitmap@3x.png\" class=\"\" style=\"height: 350x; width:100%\">\n        </div>\n\n\n        <!-- <div class=\"carousel-item\">\n            <img src=\"../../../assets/nexus2cee_n6_carriers.png\" alt=\"New York\">\n          </div>\n      \n      <div class=\"carousel-item\">\n        <img src=\"../../../assets/Hollywood.jpg\" alt=\"Hollywood\">\n      </div>\n \n      <div class=\"carousel-item\">\n        <img src=\"../../../assets/lasVegas.jpg\" alt=\"Las vegas\">\n      </div>\n    </div>  -->\n        <!-- Left and right controls -->\n        <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n        </a>\n\n    </div>\n\n\n\n\n    <br>\n    <br>\n\n    <div class=\"container\">\n        <div class=\"row justify-content-around text-center\">\n\n            <!-- <section> -->\n\n            <div class=\"container-fluid\" id=\"buy-now\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"card mb-5 text-center\">\n                                <div class=\"title\">\n                                    <i class=\"fab fa-telegram-plane\"></i>\n                                    <h1>Basic</h1>\n                                </div>\n                                <div class=\"price\">\n                                    <h3>\n                                        <sup>$</sup>44.99</h3>\n                                </div>\n                                <div class=\"option\">\n                                    <ul>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> For 1 week - 7 days</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited hot-spot</li>\n\n                                    </ul>\n                                </div>\n                                <!-- <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6YV6GH3F96Q6\">Choose Plan</a> -->\n                                <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VU3MFB3QLXJGU\">Choose Plan</a>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"card mb-5 text-center\">\n                                <div class=\"title\">\n                                    <i class=\"fas fa-plane\"></i>\n                                    <h1>Pro</h1>\n                                </div>\n\n                                <div class=\"price\">\n\n                                    <h3>\n                                        <sup>$</sup>84.99</h3>\n                                    <br>\n                                </div>\n                                <div class=\"option\">\n                                    <ul>\n\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i>Unlimited hot spot (3g network) </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Fast shipping</li>\n\n                                    </ul>\n                                </div>\n                                <br>\n                                <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T7ZMX9GPLBL9W\">Choose Plan</a>\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"card mb-5 text-center\">\n                                <div class=\"title\">\n                                    <i class=\"fas fa-rocket\"></i>\n                                    <h1>Ultimate</h1>\n                                </div>\n                                <div class=\"price\">\n                                    <h3>\n                                        <sup>$</sup>114.99</h3>\n                                </div>\n                                <div class=\"option\">\n                                    <ul>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> 15GB LTE hot-spot</li>\n                                    </ul>\n                                </div>\n                                <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=49U339MG7BDGS\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n        <br>\n        <br>\n        <br>\n        <br>\n\n\n        <!-- START THE FEATURETTES -->\n\n\n\n        <div class=\"row featurette text-middle\">\n            <div class=\"col-md-7\">\n                <h1 class=\"featurette-heading\">Fast shipping\n                    <span class=\"text-muted\">It'll blow your mind.</span>\n                </h1>\n                <p class=\"lead\">You will get the sim card to your home very fast and protactive with FedEx.</p>\n            </div>\n            <div class=\"col-md-5\">\n                <img class=\"featurette-image img-fluid mx-auto\" src=\"../../../assets/w628.jpg\" alt=\"Generic placeholder image\">\n            </div>\n        </div>\n\n\n        <br>\n        <br>\n\n        <section class=\"mbr-section form4 cid-qv5Aq4h3k3 \" id=\"contacts\" data-rv-view=\"6097\">\n\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"google-map\">\n                            <iframe frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&q=Sims4usa.comnewyork\"\n                                allowfullscreen=\"\"></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h3 class=\"pb-3 align-left mbr-fonts-style display-2\">\n                            Sims 4 USA\n                        </h3>\n                        <div>\n                            <div class=\"icon-block pb-3\">\n                                <span class=\"icon-block__icon\">\n                                    <span class=\"mbri-letter mbr-iconfont\" media-simple=\"true\"></span>\n                                </span>\n                                <h4 class=\"icon-block__title align-left mbr-fonts-style display-5\">\n                                    Don't hesitate to contact us\n                                </h4>\n                            </div>\n                            <div class=\"icon-contacts pb-3\">\n                                <h5 class=\"align-left mbr-fonts-style display-7\">\n                                    Ready for offers and cooperation\n                                </h5>\n                                <p class=\"mbr-text align-left mbr-fonts-style display-7\">\n                                    Phone:\n                                    <a href=\"tel:18028706770\">+1 (802) 870-6770 </a>\n                                    <br> Email:\n                                    <a href=\"mailto:sales@sims4usa.com\">sales@sims4usa.com</a>\n                                </p>\n                            </div>\n                        </div>\n                        <div data-form-type=\"formoid\">\n                            <div data-form-alert=\"\" hidden=\"\">\n                                Thanks for filling out the form!\n                            </div>\n                            <form class=\"block mbr-form\" data-form-title=\"Mobirise Form\">\n                                <input type=\"hidden\" data-form-email=\"true\" >\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 multi-horizontal mb-2\" data-for=\"name\">\n                                        <input type=\"text\" class=\"form-control input\" name=\"name\" data-form-field=\"Name\" placeholder=\"Your Name\" required=\"\" id=\"name-form4-4v\"  [(ngModel)]=\"email.name\" name=\"name\">\n                                    </div>\n                                    <div class=\"col-md-6 multi-horizontal mb-2\" data-for=\"phone\">\n                                        <input type=\"text\" class=\"form-control input\" name=\"phone\" data-form-field=\"Phone\" placeholder=\"Phone\" required=\"\" id=\"phone-form4-4v\" [(ngModel)]=\"email.phone\" name=\"phone\">\n                                    </div>\n                                    <div class=\"col-md-12 mb-3\" data-for=\"email\">\n                                        <input type=\"text\" class=\"form-control input\" name=\"email\" data-form-field=\"Email\" placeholder=\"Email\" required=\"\" id=\"email-form4-4v\" [(ngModel)]=\"email.emailAddress\" name=\"emailAddress\">\n                                    </div>\n                               \n                                    <div class=\"col-md-12 mb-2\" data-for=\"message\">\n                                        <textarea class=\"form-control input\" name=\"message\" rows=\"3\" data-form-field=\"Message\" placeholder=\"Message\" style=\"resize:none\"\n                                            id=\"message-form4-4v\" [(ngModel)]=\"email.message\" name=\"message\"></textarea>\n                                    </div>\n                                    <div class=\"input-group-btn col-md-12 mb-2 px-4\" style=\"margin-top: 10px;\">\n                                        <button href=\"\" type=\"submit\" class=\"btn btn-primary btn-form display-4\" (click)=\"sendEmail()\">SEND MESSAGE</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n\n\n\n\n                </div>\n            </div>\n\n        </section>\n\n\n\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n    <!-- <h3>Address Form</h3>\n    <form class=\"formwidth\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n      <table class=\"fullwidth\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <md-input-container class=\"fullwidth\">\n              <input mdInput placeholder=\"First Name\" id=\"firstname\" [(ngModel)]=\"address.firstname\" name=\"firstname\">\n            </md-input-container>\n          </td>\n          <td>\n            <md-input-container class=\"fullwidth\">\n              <input mdInput placeholder=\"Last Name\" id=\"lastname\" [(ngModel)]=\"address.lastname\" name=\"lastname\">\n            </md-input-container>\n          </td>\n        </tr>\n      </table>\n      <p>\n        <md-input-container class=\"fullwidth\">\n          <textarea mdInput placeholder=\"Address\" id=\"address\" [(ngModel)]=\"address.address\" name=\"address\"></textarea>\n        </md-input-container>\n      </p>\n      <table class=\"fullwidth\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <md-input-container class=\"fullwidth\">\n              <input mdInput placeholder=\"City\" id=\"city\" [(ngModel)]=\"address.city\" name=\"city\">\n            </md-input-container>\n          </td>\n          <td>\n            <md-input-container class=\"fullwidth\">\n              <input mdInput placeholder=\"State\" id=\"state\" [(ngModel)]=\"address.state\" name=\"state\">\n            </md-input-container>\n          </td>\n          <td>\n            <md-input-container class=\"fullwidth\">\n              <input mdInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalcode\" [(ngModel)]=\"address.postalcode\" name=\"postalcode\">\n              <md-hint align=\"end\">\n                {{postalcode.value.length}} / 5\n              </md-hint>\n            </md-input-container>\n          </td>\n        </tr>\n      </table>\n      <p>\n        <button type=\"submit\" md-raised-button>Submit</button>\n      </p>\n    </form>\n\n     -->\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>"

/***/ }),

/***/ "./app/pages/home-page/home-page.component.ts":
/*!****************************************************!*\
  !*** ./app/pages/home-page/home-page.component.ts ***!
  \****************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../email.service */ "./app/email.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/email */ "./app/models/email.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "../node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_emailService) {
        this._emailService = _emailService;
        this.email = new _models_email__WEBPACK_IMPORTED_MODULE_2__["Email"]('', '', '', '');
        this.swal = null;
        //
        this.model = {};
    }
    HomePageComponent.prototype.onSubmit = function () {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    };
    //
    HomePageComponent.prototype.sendEmail = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'sent you email?!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this._emailService.sendEmail(_this.email);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('your mail is sent', 'Thank you for conact us!', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Cancelled', 'Your mail is cancaled', 'error');
            }
        });
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_email_service__WEBPACK_IMPORTED_MODULE_0__["EmailService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./app/pages/register/register.component.css":
/*!***************************************************!*\
  !*** ./app/pages/register/register.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/pages/register/register.component.html":
/*!****************************************************!*\
  !*** ./app/pages/register/register.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n    <div class=\"row justify-content-around\">\n       <form class=\"form-horizontal\">\n              <fieldset>\n                  <!-- Address form -->\n           \n                  <h2>Address</h2>\n           \n                  <!-- full-name input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Full Name</label>\n                      <div class=\"controls\">\n                          <input id=\"full-name\" name=\"full-name\" type=\"text\" placeholder=\"full name\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- address-line1 input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Address Line 1</label>\n                      <div class=\"controls\">\n                          <input id=\"address-line1\" name=\"address-line1\" type=\"text\" placeholder=\"address line 1\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\">Street address, P.O. box, company name, c/o</p>\n                      </div>\n                  </div>\n                  <!-- address-line2 input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Address Line 2</label>\n                      <div class=\"controls\">\n                          <input id=\"address-line2\" name=\"address-line2\" type=\"text\" placeholder=\"address line 2\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\">Apartment, suite , unit, building, floor, etc.</p>\n                      </div>\n                  </div>\n                  <!-- city input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">City / Town</label>\n                      <div class=\"controls\">\n                          <input id=\"city\" name=\"city\" type=\"text\" placeholder=\"city\" class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- region input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">State / Province / Region</label>\n                      <div class=\"controls\">\n                          <input id=\"region\" name=\"region\" type=\"text\" placeholder=\"state / province / region\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- postal-code input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Zip / Postal Code</label>\n                      <div class=\"controls\">\n                          <input id=\"postal-code\" name=\"postal-code\" type=\"text\" placeholder=\"zip or postal code\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- country select -->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Country</label>\n                      <div class=\"controls\">\n                          <select id=\"country\" name=\"country\" class=\"input-xlarge\">\n                              <option value=\"\" selected=\"selected\">(please select a country)</option>\n                              <option value=\"AF\">Afghanistan</option>\n                              <option value=\"AL\">Albania</option>\n                              <option value=\"DZ\">Algeria</option>\n                              <option value=\"AS\">American Samoa</option>\n                              <option value=\"AD\">Andorra</option>\n                              <option value=\"AO\">Angola</option>\n                              <option value=\"AI\">Anguilla</option>\n                              <option value=\"AQ\">Antarctica</option>\n                              <option value=\"AG\">Antigua and Barbuda</option>\n                              <option value=\"AR\">Argentina</option>\n                              <option value=\"AM\">Armenia</option>\n                              <option value=\"AW\">Aruba</option>\n                              <option value=\"AU\">Australia</option>\n                              <option value=\"AT\">Austria</option>\n                              <option value=\"AZ\">Azerbaijan</option>\n                              <option value=\"BS\">Bahamas</option>\n                              <option value=\"BH\">Bahrain</option>\n                              <option value=\"BD\">Bangladesh</option>\n                              <option value=\"BB\">Barbados</option>\n                              <option value=\"BY\">Belarus</option>\n                              <option value=\"BE\">Belgium</option>\n                              <option value=\"BZ\">Belize</option>\n                              <option value=\"BJ\">Benin</option>\n                              <option value=\"BM\">Bermuda</option>\n                              <option value=\"BT\">Bhutan</option>\n                              <option value=\"BO\">Bolivia</option>\n                              <option value=\"BA\">Bosnia and Herzegowina</option>\n                              <option value=\"BW\">Botswana</option>\n                              <option value=\"BV\">Bouvet Island</option>\n                              <option value=\"BR\">Brazil</option>\n                              <option value=\"IO\">British Indian Ocean Territory</option>\n                              <option value=\"BN\">Brunei Darussalam</option>\n                              <option value=\"BG\">Bulgaria</option>\n                              <option value=\"BF\">Burkina Faso</option>\n                              <option value=\"BI\">Burundi</option>\n                              <option value=\"KH\">Cambodia</option>\n                              <option value=\"CM\">Cameroon</option>\n                              <option value=\"CA\">Canada</option>\n                              <option value=\"CV\">Cape Verde</option>\n                              <option value=\"KY\">Cayman Islands</option>\n                              <option value=\"CF\">Central African Republic</option>\n                              <option value=\"TD\">Chad</option>\n                              <option value=\"CL\">Chile</option>\n                              <option value=\"CN\">China</option>\n                              <option value=\"CX\">Christmas Island</option>\n                              <option value=\"CC\">Cocos (Keeling) Islands</option>\n                              <option value=\"CO\">Colombia</option>\n                              <option value=\"KM\">Comoros</option>\n                              <option value=\"CG\">Congo</option>\n                              <option value=\"CD\">Congo, the Democratic Republic of the</option>\n                              <option value=\"CK\">Cook Islands</option>\n                              <option value=\"CR\">Costa Rica</option>\n                              <option value=\"CI\">Cote d'Ivoire</option>\n                              <option value=\"HR\">Croatia (Hrvatska)</option>\n                              <option value=\"CU\">Cuba</option>\n                              <option value=\"CY\">Cyprus</option>\n                              <option value=\"CZ\">Czech Republic</option>\n                              <option value=\"DK\">Denmark</option>\n                              <option value=\"DJ\">Djibouti</option>\n                              <option value=\"DM\">Dominica</option>\n                              <option value=\"DO\">Dominican Republic</option>\n                              <option value=\"TP\">East Timor</option>\n                              <option value=\"EC\">Ecuador</option>\n                              <option value=\"EG\">Egypt</option>\n                              <option value=\"SV\">El Salvador</option>\n                              <option value=\"GQ\">Equatorial Guinea</option>\n                              <option value=\"ER\">Eritrea</option>\n                              <option value=\"EE\">Estonia</option>\n                              <option value=\"ET\">Ethiopia</option>\n                              <option value=\"FK\">Falkland Islands (Malvinas)</option>\n                              <option value=\"FO\">Faroe Islands</option>\n                              <option value=\"FJ\">Fiji</option>\n                              <option value=\"FI\">Finland</option>\n                              <option value=\"FR\">France</option>\n                              <option value=\"FX\">France, Metropolitan</option>\n                              <option value=\"GF\">French Guiana</option>\n                              <option value=\"PF\">French Polynesia</option>\n                              <option value=\"TF\">French Southern Territories</option>\n                              <option value=\"GA\">Gabon</option>\n                              <option value=\"GM\">Gambia</option>\n                              <option value=\"GE\">Georgia</option>\n                              <option value=\"DE\">Germany</option>\n                              <option value=\"GH\">Ghana</option>\n                              <option value=\"GI\">Gibraltar</option>\n                              <option value=\"GR\">Greece</option>\n                              <option value=\"GL\">Greenland</option>\n                              <option value=\"GD\">Grenada</option>\n                              <option value=\"GP\">Guadeloupe</option>\n                              <option value=\"GU\">Guam</option>\n                              <option value=\"GT\">Guatemala</option>\n                              <option value=\"GN\">Guinea</option>\n                              <option value=\"GW\">Guinea-Bissau</option>\n                              <option value=\"GY\">Guyana</option>\n                              <option value=\"HT\">Haiti</option>\n                              <option value=\"HM\">Heard and Mc Donald Islands</option>\n                              <option value=\"VA\">Holy See (Vatican City State)</option>\n                              <option value=\"HN\">Honduras</option>\n                              <option value=\"HK\">Hong Kong</option>\n                              <option value=\"HU\">Hungary</option>\n                              <option value=\"IS\">Iceland</option>\n                              <option value=\"IN\">India</option>\n                              <option value=\"ID\">Indonesia</option>\n                              <option value=\"IR\">Iran (Islamic Republic of)</option>\n                              <option value=\"IQ\">Iraq</option>\n                              <option value=\"IE\">Ireland</option>\n                              <option value=\"IL\">Israel</option>\n                              <option value=\"IT\">Italy</option>\n                              <option value=\"JM\">Jamaica</option>\n                              <option value=\"JP\">Japan</option>\n                              <option value=\"JO\">Jordan</option>\n                              <option value=\"KZ\">Kazakhstan</option>\n                              <option value=\"KE\">Kenya</option>\n                              <option value=\"KI\">Kiribati</option>\n                              <option value=\"KP\">Korea, Democratic People's Republic of</option>\n                              <option value=\"KR\">Korea, Republic of</option>\n                              <option value=\"KW\">Kuwait</option>\n                              <option value=\"KG\">Kyrgyzstan</option>\n                              <option value=\"LA\">Lao People's Democratic Republic</option>\n                              <option value=\"LV\">Latvia</option>\n                              <option value=\"LB\">Lebanon</option>\n                              <option value=\"LS\">Lesotho</option>\n                              <option value=\"LR\">Liberia</option>\n                              <option value=\"LY\">Libyan Arab Jamahiriya</option>\n                              <option value=\"LI\">Liechtenstein</option>\n                              <option value=\"LT\">Lithuania</option>\n                              <option value=\"LU\">Luxembourg</option>\n                              <option value=\"MO\">Macau</option>\n                              <option value=\"MK\">Macedonia, The Former Yugoslav Republic of</option>\n                              <option value=\"MG\">Madagascar</option>\n                              <option value=\"MW\">Malawi</option>\n                              <option value=\"MY\">Malaysia</option>\n                              <option value=\"MV\">Maldives</option>\n                              <option value=\"ML\">Mali</option>\n                              <option value=\"MT\">Malta</option>\n                              <option value=\"MH\">Marshall Islands</option>\n                              <option value=\"MQ\">Martinique</option>\n                              <option value=\"MR\">Mauritania</option>\n                              <option value=\"MU\">Mauritius</option>\n                              <option value=\"YT\">Mayotte</option>\n                              <option value=\"MX\">Mexico</option>\n                              <option value=\"FM\">Micronesia, Federated States of</option>\n                              <option value=\"MD\">Moldova, Republic of</option>\n                              <option value=\"MC\">Monaco</option>\n                              <option value=\"MN\">Mongolia</option>\n                              <option value=\"MS\">Montserrat</option>\n                              <option value=\"MA\">Morocco</option>\n                              <option value=\"MZ\">Mozambique</option>\n                              <option value=\"MM\">Myanmar</option>\n                              <option value=\"NA\">Namibia</option>\n                              <option value=\"NR\">Nauru</option>\n                              <option value=\"NP\">Nepal</option>\n                              <option value=\"NL\">Netherlands</option>\n                              <option value=\"AN\">Netherlands Antilles</option>\n                              <option value=\"NC\">New Caledonia</option>\n                              <option value=\"NZ\">New Zealand</option>\n                              <option value=\"NI\">Nicaragua</option>\n                              <option value=\"NE\">Niger</option>\n                              <option value=\"NG\">Nigeria</option>\n                              <option value=\"NU\">Niue</option>\n                              <option value=\"NF\">Norfolk Island</option>\n                              <option value=\"MP\">Northern Mariana Islands</option>\n                              <option value=\"NO\">Norway</option>\n                              <option value=\"OM\">Oman</option>\n                              <option value=\"PK\">Pakistan</option>\n                              <option value=\"PW\">Palau</option>\n                              <option value=\"PA\">Panama</option>\n                              <option value=\"PG\">Papua New Guinea</option>\n                              <option value=\"PY\">Paraguay</option>\n                              <option value=\"PE\">Peru</option>\n                              <option value=\"PH\">Philippines</option>\n                              <option value=\"PN\">Pitcairn</option>\n                              <option value=\"PL\">Poland</option>\n                              <option value=\"PT\">Portugal</option>\n                              <option value=\"PR\">Puerto Rico</option>\n                              <option value=\"QA\">Qatar</option>\n                              <option value=\"RE\">Reunion</option>\n                              <option value=\"RO\">Romania</option>\n                              <option value=\"RU\">Russian Federation</option>\n                              <option value=\"RW\">Rwanda</option>\n                              <option value=\"KN\">Saint Kitts and Nevis</option>\n                              <option value=\"LC\">Saint LUCIA</option>\n                              <option value=\"VC\">Saint Vincent and the Grenadines</option>\n                              <option value=\"WS\">Samoa</option>\n                              <option value=\"SM\">San Marino</option>\n                              <option value=\"ST\">Sao Tome and Principe</option>\n                              <option value=\"SA\">Saudi Arabia</option>\n                              <option value=\"SN\">Senegal</option>\n                              <option value=\"SC\">Seychelles</option>\n                              <option value=\"SL\">Sierra Leone</option>\n                              <option value=\"SG\">Singapore</option>\n                              <option value=\"SK\">Slovakia (Slovak Republic)</option>\n                              <option value=\"SI\">Slovenia</option>\n                              <option value=\"SB\">Solomon Islands</option>\n                              <option value=\"SO\">Somalia</option>\n                              <option value=\"ZA\">South Africa</option>\n                              <option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n                              <option value=\"ES\">Spain</option>\n                              <option value=\"LK\">Sri Lanka</option>\n                              <option value=\"SH\">St. Helena</option>\n                              <option value=\"PM\">St. Pierre and Miquelon</option>\n                              <option value=\"SD\">Sudan</option>\n                              <option value=\"SR\">Suriname</option>\n                              <option value=\"SJ\">Svalbard and Jan Mayen Islands</option>\n                              <option value=\"SZ\">Swaziland</option>\n                              <option value=\"SE\">Sweden</option>\n                              <option value=\"CH\">Switzerland</option>\n                              <option value=\"SY\">Syrian Arab Republic</option>\n                              <option value=\"TW\">Taiwan, Province of China</option>\n                              <option value=\"TJ\">Tajikistan</option>\n                              <option value=\"TZ\">Tanzania, United Republic of</option>\n                              <option value=\"TH\">Thailand</option>\n                              <option value=\"TG\">Togo</option>\n                              <option value=\"TK\">Tokelau</option>\n                              <option value=\"TO\">Tonga</option>\n                              <option value=\"TT\">Trinidad and Tobago</option>\n                              <option value=\"TN\">Tunisia</option>\n                              <option value=\"TR\">Turkey</option>\n                              <option value=\"TM\">Turkmenistan</option>\n                              <option value=\"TC\">Turks and Caicos Islands</option>\n                              <option value=\"TV\">Tuvalu</option>\n                              <option value=\"UG\">Uganda</option>\n                              <option value=\"UA\">Ukraine</option>\n                              <option value=\"AE\">United Arab Emirates</option>\n                              <option value=\"GB\">United Kingdom</option>\n                              <option value=\"US\">United States</option>\n                              <option value=\"UM\">United States Minor Outlying Islands</option>\n                              <option value=\"UY\">Uruguay</option>\n                              <option value=\"UZ\">Uzbekistan</option>\n                              <option value=\"VU\">Vanuatu</option>\n                              <option value=\"VE\">Venezuela</option>\n                              <option value=\"VN\">Viet Nam</option>\n                              <option value=\"VG\">Virgin Islands (British)</option>\n                              <option value=\"VI\">Virgin Islands (U.S.)</option>\n                              <option value=\"WF\">Wallis and Futuna Islands</option>\n                              <option value=\"EH\">Western Sahara</option>\n                              <option value=\"YE\">Yemen</option>\n                              <option value=\"YU\">Yugoslavia</option>\n                              <option value=\"ZM\">Zambia</option>\n                              <option value=\"ZW\">Zimbabwe</option>\n                          </select>\n                      </div>\n                  </div>\n              </fieldset>\n          </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./app/pages/register/register.component.ts":
/*!**************************************************!*\
  !*** ./app/pages/register/register.component.ts ***!
  \**************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/pages/store/store.component.css":
/*!*********************************************!*\
  !*** ./app/pages/store/store.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\nbody {\n  background-color: #f8f8f8;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n}\n.row {\n  min-height: 50vh;\n}\n.card {\n  border: 0;\n  border-radius: 0px;\n  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease-in-out;\n  padding: 2.25rem 0;\n  position: relative;\n  will-change: transform;\n}\n.card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: #57e2b2;\n  transition: 0.5s;\n}\n.card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n}\n.card:hover:after {\n  width: 100%;\n}\n.card .card-header {\n  background-color: white;\n  padding-left: 2rem;\n  border-bottom: 0px;\n}\n.card .card-title {\n  margin-bottom: 1rem;\n}\n.card .card-block {\n  padding-top: 0;\n}\n.card .list-group-item {\n  border: 0px;\n  padding: 0.25rem;\n  color: #808080;\n  font-weight: 300;\n}\n.display-2 {\n  font-size: 7rem;\n  letter-spacing: -0.5rem;\n}\n.display-2 .currency {\n  font-size: 2.75rem;\n  position: relative;\n  font-weight: 400;\n  top: -45px;\n  letter-spacing: 0px;\n}\n.display-2 .period {\n  font-size: 1rem;\n  color: #b3b3b3;\n  letter-spacing: 0px;\n}\n.btn {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #a6a6a6;\n  border-radius: 0;\n  padding: 0.75rem 1.25rem;\n  letter-spacing: 1px;\n}\n.btn-gradient {\n  background-color: #f2f2f2;\n  transition: background 0.3s ease-in-out;\n}\n.btn-gradient:hover {\n  color: white;\n  background-color: #57e2b2;\n}\n/* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400'); */\n/* .infoBox1{\n\tbackground-color: wheat;\n\tborder:10px solid rgba(62, 56, 138, 0.733);\n}\n\n.infoBox2{\n\tbackground-color: wheat;\n\tborder:10px solid rgba(62, 56, 138, 0.733);\n}\n.infoBox3{\n\tbackground-color: wheat;\n\tborder:10px solid rgba(62, 56, 138, 0.733);\n} */\n/* \n.MainOptions{\n    border:10px solid #ee3e64;\n}  */\n.img-class{\n\theight:250px;\n    width:100%;\n}\n/* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'); */\nbody {\n  background-color: #f8f8f8;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n}\n.row {\n  min-height: 35vh;\n}\n.card {\n  border: 0;\n  border-radius: 0px;\n  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease-in-out;\n  padding: 2.25rem 0;\n  position: relative;\n  will-change: transform;\n}\n.card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: #57e2b2;\n  transition: 0.5s;\n}\n.card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n}\n.card:hover:after {\n  width: 100%;\n}\n.card .card-header {\n  background-color: white;\n  padding-left: 2rem;\n  border-bottom: 0px;\n}\n.card .card-title {\n  margin-bottom: 1rem;\n}\n.card .card-block {\n  padding-top: 0;\n}\n.card .list-group-item {\n  border: 0px;\n  padding: 0.25rem;\n  color: #808080;\n  font-weight: 300;\n}\n.display-2 {\n  font-size: 7rem;\n  letter-spacing: -0.5rem;\n}\n.display-2 .currency {\n  font-size: 2.75rem;\n  position: relative;\n  font-weight: 400;\n  top: -45px;\n  letter-spacing: 0px;\n}\n.display-2 .period {\n  font-size: 1rem;\n  color: #b3b3b3;\n  letter-spacing: 0px;\n}\n.btn {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #a6a6a6;\n  border-radius: 0;\n  padding: 0.75rem 1.25rem;\n  letter-spacing: 1px;\n}\n.btn-gradient {\n  background-color: #f2f2f2;\n  transition: background 0.3s ease-in-out;\n}\n.btn-gradient:hover {\n  color: white;\n  background-color: #57e2b2;\n}\n/*  */\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif !important;\n    background: black;\n}\nsection{\n    width: 100%;\n    height: 100vh;\n    box-sizing: border-box;\n    padding: 140px 0;\n\n}\n.card{\n    position: relative;\n    max-width: 300px;\n    height: auto;\n    border-radius: 40px;\n    margin: 0 auto;\n    padding: 40px 20px;\n    box-shadow: inset 0 0 40px rgba(0,0,0,.2), 0 20px 50px rgba(0,0,0,.5);\n    transition: .5s;\n    overflow: hidden;\n}\n.card:hover{\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n.col-sm-4:nth-child(1) .card,\n.col-sm-4:nth-child(1) .card .title .fa-telegram-plane{\n    background: linear-gradient(-45deg,#f403d1,#64b5f6);\n}\n.col-sm-4:nth-child(2) .card,\n.col-sm-4:nth-child(2) .card .title .fas{\n    background: linear-gradient(-45deg,#ffec61,#f321d7);\n}\n.col-sm-4:nth-child(3) .card{\n    background: linear-gradient(-45deg,#24ff72,#9a4eff);\n}\n.card:before{\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 40%;\n    background: rgba(255,255,255,.1);\n    z-index: 1;\n    -webkit-transform: skewY(-5deg) scale(1.5);\n            transform: skewY(-5deg) scale(1.5);\n}\n.title .fa-telegram-plane{\n    color: #fff;\n    font-size: 60px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 100px;\n    box-shadow: 0 10px 10px rgba(0,0,0,.5);\n}\n.title .fas{\n    color: #fff;\n    font-size: 60px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 100px;\n    box-shadow: 0 10px 10px rgba(0,0,0,.5);\n}\n.title h2{\n    position: relative;\n    margin: 20px 0 0;\n    padding: 0;\n    color: #fff;\n    font-size: 28px;\n    z-index: 2;\n}\n.price{\n    position: relative;\n    z-index: 2;\n}\n.price h3{\n    margin: 0;\n    padding: 20px 0;\n    color: #fff;\n    font-size: 60px;\n}\n.option{\n    position: relative;\n    z-index: 2;\n}\n.option ul{\n    margin: 0;\n    padding: 0;\n}\n.option ul li{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    color: #fff;\n    font-size: 16px;\n}\n.card a{\n    position: relative;\n    z-index: 2;\n    background: #fff;\n    border-radius: 40px;\n    width: 150px;\n    height: 40px;\n    line-height: 40px;\n    display: block;\n    text-align: center;\n    margin: 20px auto 0;\n    font-size: 16px;\n    cursor: pointer;\n    box-shadow: 0 5px 10px rgba(0,0,0,.1);\n}\n.cord a:hover{\n    text-decoration: none;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOEVBQThFO0FBQzlFO0VBQ0UsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBRXZCLDhDQUE4QztDQUMvQztBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQix3Q0FBd0M7Q0FDekM7QUFDRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7Q0FDM0I7QUFDRCw0RUFBNEU7QUFHNUU7Ozs7Ozs7Ozs7OztJQVlJO0FBQ0o7OztLQUdLO0FBRUw7Q0FDQyxhQUFhO0lBQ1YsV0FBVztDQUNkO0FBRUQsb0ZBQW9GO0FBQ3BGO0VBQ0UsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBRXZCLDhDQUE4QztDQUMvQztBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQix3Q0FBd0M7Q0FDekM7QUFDRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7Q0FDM0I7QUFVRCxNQUFNO0FBRU47SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLDZDQUE2QztJQUM3QyxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7Q0FFcEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNFQUFzRTtJQUN0RSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7O0lBRUksb0RBQW9EO0NBQ3ZEO0FBRUQ7O0lBRUksb0RBQW9EO0NBQ3ZEO0FBQ0Q7SUFDSSxvREFBb0Q7Q0FDdkQ7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsMkNBQW1DO1lBQW5DLG1DQUFtQztDQUN0QztBQUNEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVDQUF1QztDQUMxQztBQUNEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVDQUF1QztDQUMxQztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2Q7QUFDRDtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSxzQkFBc0I7O0NBRXpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMFwiKTtcbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnJvdyB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAzcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDIuMjVyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLmNhcmQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3ZTJiMjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggMzVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAzNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5jYXJkOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG4uY2FyZCAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY2FyZCAuY2FyZC1ibG9jayB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmNhcmQgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmRpc3BsYXktMiB7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVyZW07XG59XG4uZGlzcGxheS0yIC5jdXJyZW5jeSB7XG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0b3A6IC00NXB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuLmRpc3BsYXktMiAucGVyaW9kIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2IzYjNiMztcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNhNmE2YTY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJ0bi1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5idG4tZ3JhZGllbnQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1N2UyYjI7XG59XG4vKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwJyk7ICovXG5cblxuLyogLmluZm9Cb3gxe1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcblx0Ym9yZGVyOjEwcHggc29saWQgcmdiYSg2MiwgNTYsIDEzOCwgMC43MzMpO1xufVxuXG4uaW5mb0JveDJ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuXHRib3JkZXI6MTBweCBzb2xpZCByZ2JhKDYyLCA1NiwgMTM4LCAwLjczMyk7XG59XG4uaW5mb0JveDN7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuXHRib3JkZXI6MTBweCBzb2xpZCByZ2JhKDYyLCA1NiwgMTM4LCAwLjczMyk7XG59ICovXG4vKiBcbi5NYWluT3B0aW9uc3tcbiAgICBib3JkZXI6MTBweCBzb2xpZCAjZWUzZTY0O1xufSAgKi9cblxuLmltZy1jbGFzc3tcblx0aGVpZ2h0OjI1MHB4O1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCcpOyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucm93IHtcbiAgbWluLWhlaWdodDogMzV2aDtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3gtc2hhZG93OiAwIDNweCAwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogMi4yNXJlbSAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG4uY2FyZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdlMmIyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMjBweCAzNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDM1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLmNhcmQ6aG92ZXI6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cbi5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jYXJkIC5jYXJkLWJsb2NrIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uY2FyZCAubGlzdC1ncm91cC1pdGVtIHtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGlzcGxheS0yIHtcbiAgZm9udC1zaXplOiA3cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXJlbTtcbn1cbi5kaXNwbGF5LTIgLmN1cnJlbmN5IHtcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRvcDogLTQ1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG4uZGlzcGxheS0yIC5wZXJpb2Qge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuXG4uYnRuIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2E2YTZhNjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufSBcblxuLmJ0bi1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5idG4tZ3JhZGllbnQ6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1N2UyYjI7XG59XG5cblxuXG5cblxuXG5cblxuXG4vKiAgKi9cblxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbnNlY3Rpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDE0MHB4IDA7XG5cbn1cbi5jYXJke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNDBweCByZ2JhKDAsMCwwLC4yKSwgMCAyMHB4IDUwcHggcmdiYSgwLDAsMCwuNSk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZDpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uY29sLXNtLTQ6bnRoLWNoaWxkKDEpIC5jYXJkLFxuLmNvbC1zbS00Om50aC1jaGlsZCgxKSAuY2FyZCAudGl0bGUgLmZhLXRlbGVncmFtLXBsYW5le1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsI2Y0MDNkMSwjNjRiNWY2KTtcbn1cblxuLmNvbC1zbS00Om50aC1jaGlsZCgyKSAuY2FyZCxcbi5jb2wtc20tNDpudGgtY2hpbGQoMikgLmNhcmQgLnRpdGxlIC5mYXN7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywjZmZlYzYxLCNmMzIxZDcpO1xufVxuLmNvbC1zbS00Om50aC1jaGlsZCgzKSAuY2FyZHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCMyNGZmNzIsIzlhNGVmZik7XG59XG4uY2FyZDpiZWZvcmV7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgtNWRlZykgc2NhbGUoMS41KTtcbn1cbi50aXRsZSAuZmEtdGVsZWdyYW0tcGxhbmV7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjUpO1xufVxuLnRpdGxlIC5mYXN7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjUpO1xufVxuLnRpdGxlIGgye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDIwcHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHotaW5kZXg6IDI7XG59XG4ucHJpY2V7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG59XG4ucHJpY2UgaDN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG4ub3B0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuLm9wdGlvbiB1bHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5vcHRpb24gdWwgbGl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZCBhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLC4xKTtcbn1cbi5jb3JkIGE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./app/pages/store/store.component.html":
/*!**********************************************!*\
  !*** ./app/pages/store/store.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<br>\n<br>\n\n<div class=\"container\">\n    \n<div class=\"row justify-content-around text-center\">\n    <!-- <h1> <span class=\"badge badge-secondary text-center\"  data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" \n      data-content=\" The purchased credit is used to pay for telecommunications services at the point the service is accessed or consumed.\" \n      >Prepaid</span></h1> -->\n    \n  <div class=\"card-deck mb-3 text-center\">\n      \n      \n     \n<!-- Table #1  -->\n<br>\n<br>\n\n                \n<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <i class=\"fab fa-telegram-plane\"></i>\n                        <h2>Basic</h2>\n                    </div>\n                    <div class=\"price\">\n                      <h3> <sup>$</sup>44.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> For 1 week - <b>7 days</b></li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                          <li><i class=\"fas fa-check\"></i>  Unlimited hot-spot</li>\n                          \n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6YV6GH3F96Q6\">Choose Plan</a> \n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <i class=\"fas fa-plane\"></i>\n                        <h2>Pro</h2>\n                    </div>\n                    \n                    <div class=\"price\">\n                      \n                        <h3> <sup>$</sup>84.99</h3>\n                      \n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            \n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                            <li><i class=\"fas fa-check\"></i>Unlimited hot spot (3g network) </li>\n                            <li><i class=\"fas fa-check\"></i> Fast shipping</li>\n                    \n                        </ul>\n                    </div>\n                   \n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T7ZMX9GPLBL9W\">Choose Plan</a>\n                  \n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <i class=\"fas fa-rocket\"></i>\n                        <h2>Ultimate</h2>\n                    </div>\n                    <div class=\"price\">\n                        <h3> <sup>$</sup>114.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                            <li><i class=\"fas fa-check\"></i> 15GB LTE hot-spot</li>\n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=49U339MG7BDGS\">Choose Plan</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<br>\n<br>\n\n                \n<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <!-- <i class=\"fab fa-bolt\"></i> -->\n                        \n                    </div>\n                    <div class=\"price\">\n                        <h3>At&t</h3>\n                      <h3> <sup>$</sup>69.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> For <b>15</b> days</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                          <li><i class=\"fas fa-check\"></i>  15GB LTE hot-spot</li>\n                          \n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5C4WFZ6NWN9VL\">Choose Plan</a>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <!-- <i class=\"fas fa-plane\"></i> -->\n                        \n                    </div>\n                    \n                    <div class=\"price\">\n                        <h3>H2o</h3>\n                        <h3> <sup>$</sup>54.99</h3>\n                      \n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            \n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> 4GB LTE (and then 2/3g)</li>\n                            <li><i class=\"fas fa-check\"></i>Calls to 10 destination mobile/home around the world </li>\n                           \n                    \n                        </ul>\n                    </div>\n                   \n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6EUPVGWCED8VC\">Choose Plan</a>\n                  \n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <h2>Simple mobile</h2>\n                       \n                    </div>\n                    <div class=\"price\">\n                        \n                        <h3> <sup>$</sup>94.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                            <li><i class=\"fas fa-check\"></i> 10GB 4G LTE hot spot</li>\n                            <li><i class=\"fas fa-check\"></i> Calls to a 15 destination home/mobile around the world </li>\n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KZMMZ7M4JDXFA\">Choose Plan</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n<div class=\"col-xs-12 col-lg-4\">  \n    <div class=\"card\" style=\"width: 20rem;\">\n    \n    <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n  <div class=\"card-header\">\n    <h3 class=\"display-2\"><span class=\"currency\">$</span>50<span class=\"period\">/month</span></h3>\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\"> \n      Basic Plan\n    </h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n      <li class=\"list-group-item\">8 GB LTE</li>\n    \n    </ul>\n    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHQSKNVN38E3S\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n  </div>\n</div>\n</div> -->\n\n<!-- Table #2  -\n<div class=\"col-xs-12 col-lg-4\">\n    <div class=\"card\" style=\"width: 20rem;\">\n    <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/nexus2cee_t-mobile-logo.png\" alt=\"Card image cap\" style=\"height:60%; width:60%\">\n  <div class=\"card-header\">\n    <h3 class=\"display-2\"><span class=\"currency\">$</span>50<span class=\"period\">/month</span></h3>\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\"> \n      Regular Plan\n    </h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n      <li class=\"list-group-item\">Calls worldwide</li>\n      <!-- <li class=\"list-group-item\">Visual Composer Included</li> -\n      <li class=\"list-group-item\">10 GB LTE</li>\n    </ul>\n    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FYFC2JNXHULJJ\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n  </div>\n</div>\n</div>\n\n<!-- Table #3  >\n<div class=\"col-xs-12 col-lg-4\">\n    <div class=\"card\" style=\"width: 20rem;\">\n    <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n  <div class=\"card-header\">\n    <h3 class=\"display-2\"><span class=\"currency\">$</span>17<span class=\"period\">/month</span></h3>\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\"> \n      Premium Plan\n    </h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n      <li class=\"list-group-item\">1 GB LTE</li>\n    </ul>\n    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T7ZMX9GPLBL9W\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n  </div>\n</div>\n</div>\n\n\n</div>\n</div>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n    <div class=\"row justify-content-around text-center\">\n      \n        <h1>  <span class=\"badge badge-secondary text-center\">Preloaded</span></h1>\n        <div class=\"card-deck mb-3 text-center\">\n<div class=\"col-xs-12 col-lg-4\">  \n  <div class=\"card\" style=\"width: 20rem;\">\n  \n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>23<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Basic Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">1 GB LTE</li>\n  \n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FYFC2JNXHULJJ\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #2  >\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/nexus2cee_t-mobile-logo.png\" alt=\"Card image cap\" style=\"height:60%; width:60%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>29<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Regular Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">Calls worldwide</li>\n    <!-- <li class=\"list-group-item\">Visual Composer Included</li> >\n    <li class=\"list-group-item\">4 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHQSKNVN38E3S\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #3  >\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>49<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Premium Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">20 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=28MVM73JMTYPY\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n</div>\n</div>  \n</div>\n\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row justify-content-around text-center\">\n        <h1><span class=\"badge badge-secondary text-center\"  data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" \n          data-content=\" The postpaid mobile phone is a mobile phone for which service is provided by a prior arrangement with a mobile network operator.\" \n          >postpaid</span></h1>\n        <div class=\"card-deck mb-3 text-center\">\n<div class=\"col-xs-12 col-lg-4\">  \n  <div class=\"card\" style=\"width: 20rem;\">\n  \n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>43<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Basic Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">22 GB LTE</li>\n  \n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FYFC2JNXHULJJ\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #2  -\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/nexus2cee_t-mobile-logo.png\" alt=\"Card image cap\" style=\"height:60%; width:60%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>35<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Regular Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">Calls worldwide</li>\n    <!-- <li class=\"list-group-item\">Visual Composer Included</li> ->\n    <li class=\"list-group-item\">50 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHQSKNVN38E3S\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #3  >\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>27<span class=\"period\">/15 days</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Premium Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">50 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=28MVM73JMTYPY\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div-->\n</div>\n</div>  \n\n</div>"

/***/ }),

/***/ "./app/pages/store/store.component.ts":
/*!********************************************!*\
  !*** ./app/pages/store/store.component.ts ***!
  \********************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./app/pages/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.css */ "./app/pages/store/store.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/menditoledano/Desktop/SaleTamplate/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map