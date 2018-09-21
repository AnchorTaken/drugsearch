webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside></app-aside>\n<div class=\"main-body\">\n<app-nav></app-nav><router-outlet></router-outlet>\n<app-static-on-all></app-static-on-all>\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_bootstrap__ = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pill_library_pill_library_component__ = __webpack_require__("./src/app/components/pill-library/pill-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_forofor_forofor_component__ = __webpack_require__("./src/app/components/forofor/forofor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_aside_aside_component__ = __webpack_require__("./src/app/components/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_drugsingle_drugsingle_component__ = __webpack_require__("./src/app/components/drugsingle/drugsingle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_typeahead_focus_typeahead_focus_component__ = __webpack_require__("./src/app/components/typeahead-focus/typeahead-focus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_friends_list_friends_list_component__ = __webpack_require__("./src/app/components/friends-list/friends-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_static_on_all_static_on_all_component__ = __webpack_require__("./src/app/components/static-on-all/static-on-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core






// Mat design Imports









// Bootstrap


// Components












// Modules

// Services


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'typeahead', component: __WEBPACK_IMPORTED_MODULE_25__components_typeahead_focus_typeahead_focus_component__["a" /* TypeaheadFocusComponent */] },
    { path: 'drug/:slug', component: __WEBPACK_IMPORTED_MODULE_23__components_drugsingle_drugsingle_component__["a" /* DrugsingleComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pill_library_pill_library_component__["a" /* PillLibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_forofor_forofor_component__["a" /* ForoforComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_aside_aside_component__["a" /* AsideComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_drugsingle_drugsingle_component__["a" /* DrugsingleComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_typeahead_focus_typeahead_focus_component__["a" /* TypeaheadFocusComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_friends_list_friends_list_component__["a" /* FriendsListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_static_on_all_static_on_all_component__["a" /* StaticOnAllComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_28__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__["a" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_29__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_30__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aside/aside.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aside-container\">\n<div class=\"main-aside\" [ngClass]=\"{'asidemoved-class': highlightedDiv === 1}\">\n  <div class=\"img-logo-container\">\n  <a routerLink='/'>\n  <img src=\"../assets/img/logo-lite.svg\" alt=\"\"></a></div>\n  <ul class=\"nav-custom\">\n   <li class=\"title\" style=\"margin-top: 0px\">Top Searched Drugs</li> \n    <li class=\"nav-item\" *ngFor='let drug of topsearcheddrugs | slice:0:5'>\n      <a class=\"nav-link active\" routerLink='drug/{{drug.slug}}'>{{drug.name}}</a>\n    </li>\n    <li class=\"title\">Safety Information</li> \n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink='#'>Some info here</a>\n    </li>\n    <li class=\"title\">Market Information</li> \n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink='#'>Vendor List</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" routerLink='#'>Market List</a>\n    </li>\n  </ul>\n  <div class=\"aside-footer-container\">\n      © 2018 AnchorDesigns. All Rights Reserved.</div>\n  <button class=\"btn btn-primary aside-button\" (click)=\"toggleHighlight(1);\"> <i class=\"fa\"  [ngClass]=\"[highlightedDiv === 1 ? 'fa-angle-double-left' : 'fa-angle-double-right']\" aria-hidden=\"true\"></i></button>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/aside/aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideComponent = /** @class */ (function () {
    function AsideComponent(dataService) {
        this.dataService = dataService;
    }
    AsideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getTopSearched().subscribe(function (topsearcheddrugs) {
            // console.log(drugs);
            _this.topsearcheddrugs = topsearcheddrugs;
        });
        // this.dataService.getSafetylist().subscribe((safety) => {
        //   // console.log(safety);
        //   this.safety = safety;
        // });
        // this.dataService.getMarketlist().subscribe((market) => {
        //   // console.log(market);
        //   this.market = market;
        // });
    };
    AsideComponent.prototype.toggleHighlight = function (newValue) {
        if (this.highlightedDiv === newValue) {
            this.highlightedDiv = 0;
        }
        else {
            this.highlightedDiv = newValue;
        }
    };
    AsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-aside',
            template: __webpack_require__("./src/app/components/aside/aside.component.html"),
            styles: [__webpack_require__("./src/app/components/aside/aside.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "./src/app/components/drugsingle/drugsingle.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/drugsingle/drugsingle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='drugsingle'>\n  \n  <!--  -->\n  <div class=\"single-container\" style=\"margin: 20px; position: relative;\">\n <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n    <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"img-container\" style=\"margin-bottom:30px;height: 600px; display: block; background-image: url(http://via.placeholder.com/1920x1080); background-size: cover; background-position: center; width: 100%;\">\n  </div>\n  <span style=\"display: block; position: absolute; width:100%; height: 2px; background:#7e57c2; left: 0px; right: 0px; margin:20px 0px; margin: auto\"></span>\n  <div class=\"main-content\" style=\"padding-top: 30px;display: block;\">\n    <h3 style=\"color: #7e57c2; text-transform: uppercase;\">Official Drug Name: <span style=\"font-weight: 100\">{{drugsingle.name}}</span></h3>\n    <h3 style=\"color: #7e57c2; text-transform: uppercase;\">Alt Names or Street names: <span style=\"font-weight: 100\">{{drugsingle.alt_names}}</span></h3>\n  </div>\n  <div style=\"display: flex; margin: 20px; width: 100%\"><span style=\"display: block; position: absolute; width:100%; height: 2px; background:#7e57c2; left: 0px; right: 0px; margin: auto\"></span></div>\n  <div class=\"row\"><div class=\"col-4 offset-lg-2\"><h3 style=\"text-align: center; text-transform: uppercase; color:#7e57c2;\">Dosages</h3>\n    <table class=\"table table-bordered\" style=\"color: #7e57c2;\">\n    <thead class=\"bg-primary\" style=\"color:#fff\">\n      <tr>\n        <th scope=\"col\">Dosage</th>\n        <th scope=\"col\">Strength</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">25 µg</th>\n        <td>Threshold</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">25 - 75 µg</th>\n        <td>Light</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">75 - 150 µg</th>\n        <td>Common</td>\n      </tr>\n      <tr>\n          <th scope=\"row\">150 - 300 µg</th>\n          <td>Strong</td>\n      </tr>\n      <tr>\n          <th scope=\"row\">300 µg +</th>\n          <td>Heavy</td>\n      </tr>\n    </tbody>\n  </table></div>\n  <div class=\"col-4\"><h3 style=\"text-align: center; text-transform: uppercase; color:#7e57c2;\">Duration</h3>\n    <table class=\"table table-bordered\" style=\"color: #7e57c2;\">\n    <thead class=\"bg-primary\" style=\"color:#fff\">\n      <tr>\n        <th scope=\"col\">Stage</th>\n        <th scope=\"col\">Approximate Time</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th scope=\"row\">Total</th>\n        <td>8 - 12 hours</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Onset</th>\n        <td>15 - 30 minutes</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Come up</th>\n        <td>45 - 90 minutes</td>\n      </tr>\n      <tr>\n          <th scope=\"row\">Peak</th>\n          <td>3 - 5 hours</td>\n      </tr>\n      <tr>\n          <th scope=\"row\">Comedown</th>\n          <td>3 - 5 hours</td>\n      </tr>\n      <tr>\n          <th scope=\"row\">After effects</th>\n          <td>12 - 48 hours</td>\n      </tr>\n    </tbody>\n  </table></div>\n  \n  </div>\n  <div style=\"display: flex; margin: 20px; width: 100%\"><span style=\"display: block; position: absolute; width:100%; height: 2px; background:#7e57c2; left: 0px; right: 0px; margin: auto\"></span></div>\n  <h1 class=\"lined-h1\"></h1>\n  <div class=\"row\">\n    <div class=\"col-lg-12\"><h3 style=\"text-align: center; text-transform: uppercase; color:#7e57c2; margin-bottom: 20px;\">Short Term</h3></div><div class=\"col-4 offset-lg-2\">\n    <ul class=\"list-group good-effects\">\n        <li class=\"list-group-item active\">Positive</li>\n        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n        <li class=\"list-group-item\">Morbi leo risus</li>\n        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li>\n      </ul></div>\n  <div class=\"col-4\">\n    <ul class=\"list-group bad-effects\">\n        <li class=\"list-group-item active\">Negative</li>\n        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n        <li class=\"list-group-item\">Morbi leo risus</li>\n        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li>\n      </ul></div>\n  \n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\"><h3 style=\"text-align: center; text-transform: uppercase; color:#7e57c2; margin: 20px 0px;\">Long Term</h3></div><div class=\"col-4 offset-lg-2\">\n      <ul class=\"list-group good-effects\">\n          <li class=\"list-group-item active\">Positive</li>\n          <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n          <li class=\"list-group-item\">Morbi leo risus</li>\n          <li class=\"list-group-item\">Porta ac consectetur ac</li>\n          <li class=\"list-group-item\">Vestibulum at eros</li>\n        </ul></div>\n    <div class=\"col-4\">\n      <ul class=\"list-group bad-effects\">\n          <li class=\"list-group-item active\">Negative</li>\n          <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n          <li class=\"list-group-item\">Morbi leo risus</li>\n          <li class=\"list-group-item\">Porta ac consectetur ac</li>\n          <li class=\"list-group-item\">Vestibulum at eros</li>\n        </ul></div>\n    \n    </div>\n    <div style=\"display: flex; margin: 20px; width: 100%\"><span style=\"display: block; position: absolute; width:100%; height: 2px; background:#7e57c2; left: 0px; right: 0px; margin: auto\"></span></div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\"><h3 style=\"text-align: center; text-transform: uppercase; color:#7e57c2; margin-bottom: 20px;\">Feedback</h3></div><div class=\"col-lg-12\">\n    <div class=\"col-lg-12\">\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">User</th>\n                <th scope=\"col\">Trust Level</th>\n                <th scope=\"col\">Rating of Experience</th>\n                <th scope=\"col\">Submitted at</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <th><img class=\"profile-img\" src=\"https://vignette.wikia.nocookie.net/substratum-themes/images/f/f6/Com.google.android.contacts.png/revision/latest?cb=20170901212735\" alt=\"\" style=\"\"> Jhon Doe</th>\n                    <td><span class=\"badge badge-pill badge-dark badge-feedback\">New</span></td>\n                    <td><ul class=\"rating\">\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    </ul></td>\n                    <td>21 Sep 2018</td>\n                  </tr>\n                  <tr>\n                    <th><img class=\"profile-img\" src=\"https://vignette.wikia.nocookie.net/substratum-themes/images/f/f6/Com.google.android.contacts.png/revision/latest?cb=20170901212735\" alt=\"\" style=\"\"> Jhon Doe</th>\n                    <td><span class=\"badge badge-pill badge-warning badge-feedback\">Untrusted</span></td>\n                    <td><ul class=\"rating\">\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    </ul></td>\n                    <td>21 Sep 2018</td>\n                  </tr>\n                  <tr>\n                    <th><img class=\"profile-img\" src=\"https://vignette.wikia.nocookie.net/substratum-themes/images/f/f6/Com.google.android.contacts.png/revision/latest?cb=20170901212735\" alt=\"\" style=\"\"> Jhon Doe</th>\n                    <td><span class=\"badge badge-pill badge-success badge-feedback\">Trusted</span></td>\n                    <td><ul class=\"rating\">\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    </ul></td>\n                    <td>21 Sep 2018</td>\n                  </tr>\n                  <tr>\n                    <th><img class=\"profile-img\" src=\"https://vignette.wikia.nocookie.net/substratum-themes/images/f/f6/Com.google.android.contacts.png/revision/latest?cb=20170901212735\" alt=\"\" style=\"\"> Jhon Doe</th>\n                    <td><span class=\"badge badge-pill badge-danger badge-feedback\">Banned</span></td>\n                    <td><ul class=\"rating\">\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                      <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    </ul></td>\n                    <td>21 Sep 2018</td>\n                  </tr>\n            </tbody>\n          </table>\n          <nav aria-label=\"Page navigation example\">\n              <ul class=\"pagination\">\n                <li class=\"page-item\">\n                  <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                    <span aria-hidden=\"true\">&laquo;</span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                </li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                <li class=\"page-item\">\n                  <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                    <span aria-hidden=\"true\">&raquo;</span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </li>\n              </ul>\n            </nav>\n        </div> \n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-12\"><h3 style=\"text-align: center; text-transform: uppercase; color:#7e57c2; margin-bottom: 20px;\">Add your experience</h3></div>\n            <form class=\"custom-form-group\">\n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-6\">\n                  <div class=\"exp-fields\">\n                      <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\n                      <div class=\"input-group mb-2\">\n                        <div class=\"input-group-prepend\">\n                          <div class=\"input-group-text\">Dosage Taken</div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Dosage in {{drugsingle.dosage}}\">\n                      </div>\n                  </div>\n                  </div>\n                  <div class=\"form-group col-md-6\">\n                      <div class=\"exp-fields\">\n                          <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\n                          <div class=\"input-group mb-2\">\n                            <div class=\"input-group-prepend\">\n                              <div class=\"input-group-text\">Overall Experience</div>\n                            </div>\n                            <div class=\"form-control\"> <ul class=\"rating\">\n                                <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                                <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                                <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                                <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                                <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                            </ul></div>\n                          </div>\n                      </div>    \n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"feedback\">\n                    <label class=\"form-check-label\" for=\"gridCheck\">\n                      Feedback in Detail\n                    </label>\n                    <textarea class=\"form-control\" name=\"\" id=\"\" cols=\"30\" rows=\"10\" style=\"border-radius: 0px\"></textarea>\n                  </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n              </form>\n\n        </div>   \n   </div>\n   \n      \n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/drugsingle/drugsingle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugsingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugsingleComponent = /** @class */ (function () {
    // light: string = '20px';
    function DrugsingleComponent(route, http, titleService) {
        this.route = route;
        this.http = http;
        this.titleService = titleService;
    }
    DrugsingleComponent.prototype.setTitle = function (newTitle) {
    };
    DrugsingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            // console.log(params);
            _this.slug = params['slug'];
            _this.http.get('http://localhost/api/drugs').subscribe(function (data) {
                data.json().filter(function (item) {
                    // console.log(item)
                    if (item.slug === _this.slug) {
                        // console.log(item)
                        _this.drugsingle = item;
                    }
                    else {
                    }
                });
            });
        });
        this.titleService.setTitle('Drug Search - ' + this.slug.toUpperCase());
    };
    DrugsingleComponent.prototype.ngOnDestroy = function () {
        // this.routeSub.params.unsubscribe()
    };
    DrugsingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-drugsingle',
            template: __webpack_require__("./src/app/components/drugsingle/drugsingle.component.html"),
            styles: [__webpack_require__("./src/app/components/drugsingle/drugsingle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */]])
    ], DrugsingleComponent);
    return DrugsingleComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/forofor/forofor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forofor/forofor.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> 404 MY DUDE</h1>"

/***/ }),

/***/ "./src/app/components/forofor/forofor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForoforComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForoforComponent = /** @class */ (function () {
    function ForoforComponent() {
    }
    ForoforComponent.prototype.ngOnInit = function () {
    };
    ForoforComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-forofor',
            template: __webpack_require__("./src/app/components/forofor/forofor.component.html"),
            styles: [__webpack_require__("./src/app/components/forofor/forofor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForoforComponent);
    return ForoforComponent;
}());



/***/ }),

/***/ "./src/app/components/friends-list/friends-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/friends-list/friends-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  friends-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/friends-list/friends-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendsListComponent = /** @class */ (function () {
    function FriendsListComponent() {
    }
    FriendsListComponent.prototype.ngOnInit = function () {
    };
    FriendsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-friends-list',
            template: __webpack_require__("./src/app/components/friends-list/friends-list.component.html"),
            styles: [__webpack_require__("./src/app/components/friends-list/friends-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendsListComponent);
    return FriendsListComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-body-inner page \">\n<div class=\"container home-container\">\n  \n  <div class=\"row stats\">\n    <div class=\"col-lg-3\">\n      <div class=\"box first\">\n        <span class=\"title\">Drugs</span>\n        <p class=\"subtitle\">Drug covarage on platform</p>\n        <span class=\"number\">23</span>\n        <i class=\"fa fa-flask\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"box first\">\n        <span class=\"title\">Drugs</span>\n        <p class=\"subtitle\">Drug covarage on platform</p>\n        <span class=\"number\">23</span>\n        <i class=\"fa fa-flask\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"box first\">\n        <span class=\"title\">Drugs</span>\n        <p class=\"subtitle\">Drug covarage on platform</p>\n        <span class=\"number\">23</span>\n        <i class=\"fa fa-flask\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"box first\">\n        <span class=\"title\">Drugs</span>\n        <p class=\"subtitle\">Drug covarage on platform</p>\n        <span class=\"number\">23</span>\n        <i class=\"fa fa-flask\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n\n  </div>\n\n<!-- <div class=\"col-lg-12\" *ngFor='let n of notification'>\n<div *ngIf='n?.show'>\n  <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n{{n.important}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div></div>\n</div> -->\n<div class=\"row\">\n<div class=\"col-lg-4\">\n  <div class=\"box-my-list\">\n  <div class=\"title\">My List</div>\n  <div class=\"inside\">\n      <a href=\"javascript:void(0)\" *ngFor='let drug of drugs' (click)=\"doSearch(spann.value)\" class=\"badge badge-pill badge-primary category favourites\">\n \n          <input type=\"text\" class=\"form-control\"  placeholder=\"Search\" #spann value=\"{{drug.name}}\" hidden>{{drug.name}}\n        </a> \n  </div>\n</div>\n</div>\n\n<!-- <div class=\"col-lg-4\">\n<a href=\"javascript:void(0)\" *ngFor='let drug of drugs' (click)=\"doSearch(spann.value)\" class=\"badge badge-pill badge-primary category\">\n \n    <input type=\"text\" class=\"form-control\"  placeholder=\"Search\" #spann value=\"{{drug.name}}\" hidden>{{drug.name}}\n  </a> \n</div> -->\n\n\n    <div class=\"col-lg-4\">\n      <div class=\"search-box\" style=\"margin-bottom: 20px\">\n          <div class=\"main-title\">Search</div>\n          <div class=\"input-group home\">\n              <input type=\"text\" class=\"form-control\"  placeholder=\"Search\" #inputbox>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\" (click)=\"doSearch(inputbox.value)\">Search</button>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-lg-12 col-md-6\" *ngFor='let drug of dataService.results' style=\"margin-bottom: 10px\">\n          <div class=\"card\" style=\"width: 100%\">\n            <img class=\"card-img-top\" src=\"{{drug.thumbnail}}\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{drug.name}}</h5>\n              <b class=\"card-text\">ALT NAMES:</b>{{drug.alt_names}}\n              <p class=\"card-text\">{{drug.description}}</p>\n              <a routerLink='drug/{{drug.slug}}' class=\"btn btn-primary full-width\">About</a>\n              <a href=\"#\" class=\"btn btn-primary full-width\">Safety</a>\n              <a href=\"#\" class=\"btn btn-primary full-width\">Combinations</a>\n            </div>\n          </div>\n          </div> \n      </div></div>\n<!-- <div class=\"row home-menu-box\" *ngFor='let drug of drugs'>\n  <div class=\"col-lg-2 inside-one\">\n    {{drug.name}}\n  </div>\n  <div class=\"col-lg-8\">\n    <div class=\"container-that-hides\">\n    <div class=\"holder-for-effects\">\n    <span class=\"badge badge-pill badge-primary category\">{{drug.category}}</span>\n    <span class=\"badge badge-pill badge-secondary\">Secondary</span>\n    <span class=\"badge badge-pill badge-success\">Success</span>\n    <span class=\"badge badge-pill badge-danger\">Danger</span>\n    <span class=\"badge badge-pill badge-warning\">Warning</span>\n    <span class=\"badge badge-pill badge-info\">Info</span>\n    <span class=\"badge badge-pill badge-light\">Light</span>\n    <span class=\"badge badge-pill badge-dark\">Dark</span>\n  </div></div></div>\n  <div class=\"col-lg-2 lets-get-lg-fked\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-primary full-width and-the-btn-inside-it\">Search</button>\n    </div>\n  </div>\n</div> -->\n\n<!--  -->\n\n\n\n\n</div></div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, titleService) {
        this.dataService = dataService;
        this.titleService = titleService;
    }
    // notification: Notification;
    HomeComponent.prototype.setTitle = function (newTitle) {
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getDrugslist().subscribe(function (drugs) {
            // console.log(drugs);
            _this.drugs = drugs;
        });
        this.dataService.getDrugsslist().subscribe(function (drugss) {
            // console.log(drugss);
            _this.drugss = drugss;
        });
        // this.dataService.getNotificationlist().subscribe((notification) => {
        //   console.log(notification);
        //   this.notification = notification;
        // });
        this.titleService.setTitle('Drug Search');
        this.dataService.getTopSearched().subscribe(function (topsearcheddrugs) {
            // console.log(drugs);
            _this.topsearcheddrugs = topsearcheddrugs;
        });
    };
    HomeComponent.prototype.doSearch = function (drugname) {
        this.dataService.getDruglist(drugname);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */]])
    ], HomeComponent);
    return HomeComponent;
}());

// interface Notification {
//   notification: string;
//   enabled: boolean;
// }


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-model\">\n    <form class=\"form-inline my-2 my-lg-0\">\n        <div *ngIf=\"auth.user | async; then authenticated else guest\">\n          <!-- template will replace this div -->\n        </div>\n      </form>\n      <ng-template #guest>\n          <div class=\"btn-group\">\n              <span class=\"btn btn-dark no-hover\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i></span> \n              <button class=\"btn btn-dark\" (click)=\"auth.googleLogin()\">Login with Google </button>\n          </div>\n    </ng-template>\n    <ng-template #authenticated>\n      <div *ngIf=\"auth.user | async as user\">\n          <button class=\"btn btn-dark my-2 my-sm-0\" (click)=\"auth.signOut()\">Logout</button>\n      </div>\n    </ng-template>\n   \n  </div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <button type=\"button\" class=\"btn btn-dark my-2 my-sm-0\">Home</button>\n      </li>\n      <li class=\"nav-item\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-dark my-2 my-sm-0\">Categories</button>\n          <button type=\"button\" class=\"btn btn-dark my-2 my-sm-0 dropdown-toggle dropdown-toggle-split btn-nopadding-dropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle Dropdown</span>\n          </button>\n          <div class=\"dropdown-menu icall-custom-li-on-this\">\n            <a class=\"dropdown-item title disabled\" href=\"#\">Top 5 Searched Categories</a>\n           <a class=\"dropdown-item\" *ngFor='let cats of cat | slice:0:5, async' routerLink='drug'>{{cats.category}}</a>\n            \n          </div>\n        </div>\n      </li>\n    </ul>\n    <div *ngFor='let u of userdata'>\n    <div *ngIf='u?.NAME'>\n    <form class=\"form-inline my-2 my-lg-0\">\n     <button class=\"btn btn-dark my-2 my-sm-0\" (click)=\"onNavigate()\">Logout</button>\n    </form>\n    </div>\n    <div *ngIf='!u?.NAME'>\n      <form class=\"form-inline my-2 my-lg-0\">\n       <button class=\"btn btn-dark my-2 my-sm-0\" (click)=\"onNavigate()\">Login</button>\n      </form>\n      </div>\n</div>\n  </div>\n</nav>\n<div class=\"bottom-slash\"></div>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(dataService) {
        this.dataService = dataService;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getUserinfo().subscribe(function (userdata) {
            _this.userdata = userdata;
            console.log(userdata);
        });
        this.dataService.getTopSearched().subscribe(function (drugs) {
            // console.log(drugs);
            _this.drugs = drugs;
        });
        this.dataService.getTopSearchedCategories().subscribe(function (cat) {
            // console.log(cat);
            _this.cat = cat;
        });
    };
    NavComponent.prototype.onNavigate = function () {
        window.location.href = '/app/logout';
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/pill-library/pill-library.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pill-library/pill-library.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pill-library works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pill-library/pill-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PillLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PillLibraryComponent = /** @class */ (function () {
    function PillLibraryComponent() {
    }
    PillLibraryComponent.prototype.ngOnInit = function () {
    };
    PillLibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pill-library',
            template: __webpack_require__("./src/app/components/pill-library/pill-library.component.html"),
            styles: [__webpack_require__("./src/app/components/pill-library/pill-library.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PillLibraryComponent);
    return PillLibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/static-on-all/static-on-all.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/static-on-all/static-on-all.component.html":
/***/ (function(module, exports) {

module.exports = "<a (click)=\"friendsSwtich(1);\"><div class=\"usersonline\" [ngClass]=\"{'friends-up': friendsSwtichStatus === 1}\" >\n  <div class=\"holder\">\n  <div class=\"title\">My Friends</div>\n  <div class=\"inside\">\n    <a href=\"javascript:void(0)\" *ngFor='let useon of usersonline' class=\"\">{{useon.username}}\n    <span class=\"status online\"></span> \n    </a>\n    <a href=\"javascript:void(0)\" *ngFor='let useoff of usersoffline' class=\"\">{{useoff.username}}\n         <span class=\"status offline\"></span> \n        </a>\n  </div></div>\n</div>\n</a>"

/***/ }),

/***/ "./src/app/components/static-on-all/static-on-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticOnAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaticOnAllComponent = /** @class */ (function () {
    function StaticOnAllComponent(dataService) {
        this.dataService = dataService;
    }
    StaticOnAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getOnlineusers().subscribe(function (usersonline) {
            console.log(usersonline);
            _this.usersonline = usersonline;
        });
        this.dataService.getOfflineusers().subscribe(function (usersoffline) {
            console.log(usersoffline);
            _this.usersoffline = usersoffline;
        });
    };
    StaticOnAllComponent.prototype.friendsSwtich = function (newValue) {
        if (this.friendsSwtichStatus === newValue) {
            this.friendsSwtichStatus = 0;
        }
        else {
            this.friendsSwtichStatus = newValue;
        }
    };
    StaticOnAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-static-on-all',
            template: __webpack_require__("./src/app/components/static-on-all/static-on-all.component.html"),
            styles: [__webpack_require__("./src/app/components/static-on-all/static-on-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], StaticOnAllComponent);
    return StaticOnAllComponent;
}());



/***/ }),

/***/ "./src/app/components/typeahead-focus/typeahead-focus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typeahead-focus/typeahead-focus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  typeahead-focus works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/typeahead-focus/typeahead-focus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadFocusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypeaheadFocusComponent = /** @class */ (function () {
    function TypeaheadFocusComponent() {
    }
    TypeaheadFocusComponent.prototype.ngOnInit = function () {
    };
    TypeaheadFocusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-typeahead-focus',
            template: __webpack_require__("./src/app/components/typeahead-focus/typeahead-focus.component.html"),
            styles: [__webpack_require__("./src/app/components/typeahead-focus/typeahead-focus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypeaheadFocusComponent);
    return TypeaheadFocusComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        //// Get auth data, then get firestore user document || null
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
    }
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.produrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].produrl;
        this.searchRoot = this.produrl + '/api/drug';
        // console.log('works');
        this.results = [];
    }
    DataService.prototype.getDrugslist = function () {
        return this.drugs = this.http.get(this.produrl + '/api/drugs')
            .map(function (response) { return response.json(); })
            .catch(this._errorrHandler);
    };
    DataService.prototype.getDruglist = function (drugname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiRoot = _this.searchRoot + "/" + drugname;
            _this.http.get(apiRoot)
                .toPromise()
                .then(function (res) {
                _this.results = res.json();
                console.log(_this.results);
                resolve();
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    DataService.prototype.getUserinfo = function () {
        return this.drugs = this.http.get(this.produrl + '/api/userdata')
            .map(function (response) { return response.json(); })
            .catch(this._errorrHandler);
    };
    DataService.prototype.getTopSearched = function () {
        return this.drugs = this.http.get(this.produrl + '/api/top5drugs')
            .map(function (response) { return response.json(); })
            .catch(this._errorrHandler);
    };
    DataService.prototype.getTopSearchedCategories = function () {
        return this.cat = this.http.get(this.produrl + '/api/top5categories')
            .map(function (response) { return response.json(); })
            .catch(this._errorrHandler);
    };
    DataService.prototype.getOnlineusers = function () {
        return this.cat = this.http.get(this.produrl + '/api/onlineusers')
            .map(function (response) { return response.json(); })
            .catch(this._errorrHandler);
    };
    DataService.prototype.getOfflineusers = function () {
        return this.cat = this.http.get(this.produrl + '/api/offlineusers')
            .map(function (response) { return response.json(); })
            .catch(this._errorrHandler);
    };
    DataService.prototype.getDrugsslist = function () {
        return this.cat = this.http.get(this.produrl + '/api/defaultdruglist/lsd')
            .map(function (response) { return response.json(); })
            .catch(this._errorrHandler);
    };
    DataService.prototype._errorrHandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server Error');
    };
    // getSafetylist() {
    //   return this.http.get('../assets/json/safety.json')
    //   .map(res => res.json());
    // }
    // getMarketlist() {
    //   return this.http.get('../assets/json/market.json')
    //   .map(res => res.json());
    // }
    DataService.prototype.getNotificationlist = function () {
        return this.http.get('../assets/json/notifications.json')
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    produrl: 'http://localhost'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map