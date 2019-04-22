webpackJsonp([1,5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1_page1_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page2_page2_component__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_2__page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2', component: __WEBPACK_IMPORTED_MODULE_3__page2_page2_component__["a" /* Page2Component */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(169),
        styles: [__webpack_require__(164)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page1_page1_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page2_page2_component__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__page1_page1_component__["a" /* Page1Component */],
            __WEBPACK_IMPORTED_MODULE_8__page2_page2_component__["a" /* Page2Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "nav input {\r\n    display: none;\r\n}\r\n.nav {\r\n    display: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n.nav__showmenu {\r\n    position: absolute;\r\n    z-index: 3;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n    border-radius: 50%;\r\n    top: 7px;\r\n    left: 0px;\r\n    font-size: 23px;\r\n    background-color: #ffbe33;\r\n\r\n}\r\n.menu {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 220px;\r\n    margin: 0;\r\n    padding: 17px 0;\r\n    text-transform: uppercase;\r\n    line-height: 2em;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    overflow-y: auto;\r\n    transform: translateX(-100%);\r\n    transition: transform .3s;\r\n}\r\n.menu__item {\r\n    text-align: center;\r\n    color: #ff0000;\r\n}\r\n.menu__item:hover,.nav__showmenu:hover,.menu__showsub:hover {\r\n    opacity: 0.7;\r\n}\r\n.nav__check:checked+.nav__showmenu {\r\n    color:#fff;\r\n}\r\n.nav__check:checked~.menu {\r\n    transform: translateX(0);\r\n}\r\n\r\n.sityhead{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 60px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n    background:url(" + __webpack_require__(61) + ");\r\n    background-size: cover;\r\n}\r\n.sityhead img{\r\n    max-width: 451px;\r\n}\r\n.sityheadDiv{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n\r\n.sityheadDiv img{\r\n    max-width: 135px;\r\n    max-height: 43px;\r\n    margin: 0 15px;\r\n}\r\n.israel{\r\n    width: 356px;\r\n}\r\n.israel img{\r\n    margin-left: 15px;\r\n    max-width: 167px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "nav input {\r\n    display: none;\r\n}\r\n.nav {\r\n    display: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n.nav__showmenu {\r\n    position: absolute;\r\n    z-index: 3;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n    border-radius: 50%;\r\n    top: 7px;\r\n    left: 0px;\r\n    font-size: 23px;\r\n    background-color: #ffbe33;\r\n\r\n}\r\n.menu {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 220px;\r\n    margin: 0;\r\n    padding: 17px 0;\r\n    text-transform: uppercase;\r\n    line-height: 2em;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    overflow-y: auto;\r\n    transform: translateX(-100%);\r\n    transition: transform .3s;\r\n}\r\n.menu__item {\r\n    text-align: center;\r\n    color: #ff0000;\r\n}\r\n.menu__item:hover,.nav__showmenu:hover,.menu__showsub:hover {\r\n    opacity: 0.7;\r\n}\r\n.nav__check:checked+.nav__showmenu {\r\n    color:#fff;\r\n}\r\n.nav__check:checked~.menu {\r\n    transform: translateX(0);\r\n}\r\n\r\n\r\n.sity{\r\n    height: 990px;\r\n    background:url(" + __webpack_require__(94) + ") no-repeat center center;\r\n    background-size: cover;\r\n}\r\n.sityhead{\r\n    height: 60px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n    background:url(" + __webpack_require__(61) + ");\r\n    background-size: cover;\r\n}\r\n.sityhead img{\r\n    max-width: 451px;\r\n}\r\n.sityheadDiv{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n\r\n.sityheadDiv img{\r\n    max-width: 135px;\r\n    max-height: 43px;\r\n    margin: 0 15px;\r\n}\r\n\r\n.sityfoot{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n}\r\n.sityfootHead{\r\n    margin: 17px auto;\r\n}\r\n.sityfootHead img {\r\n    max-width: 695px;\r\n}\r\n.video{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-family: 'Khand', sans-serif;\r\n    color: white;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    width: 782px;\r\n    height: 440px;\r\n    background-color: black;\r\n    margin: 0 auto;\r\n}\r\nform {\r\n    font-family: 'Khand', sans-serif;\r\n    width: 782px;\r\n    margin: 18px auto 0;\r\n}\r\n.forminput div input{\r\n    width: 385px;\r\n    padding-left: 30px;\r\n    font-family: sans-serif;\r\n    font-weight: 100;\r\n    height: 60px;\r\n    border-radius: 11px;\r\n}\r\n.forminput div{\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    height: 20px;\r\n}\r\nform button{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    font-size: 80px;\r\n    color: #4f2922;\r\n    height: 117px;\r\n    padding: 0;\r\n    border: 6px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 12px;\r\n    background-color: #ffbe33;\r\n    margin: 24px 0;\r\n    box-shadow: 0 0 5px -1px black;\r\n}\r\n.forminput{\r\n    height: 30%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n}\r\n.logos{\r\n    margin: 40px auto 0px;\r\n    max-width: 696px;\r\n}\r\n.israel{\r\n    width: 356px;\r\n}\r\n.israel img{\r\n    margin-left: 15px;\r\n    max-width: 167px;\r\n}\r\n\r\n\r\n.white_center{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    background-color: white;\r\n    height: 2012px;\r\n}\r\n\r\n.MeatScott{\r\n    margin: 36px auto 0px;\r\n    max-width: 320px;\r\n}\r\n.Group6{\r\n    margin: 21px auto 0px;\r\n    max-width: 662px;\r\n}\r\n.reviews{\r\n    margin: 35px auto 0px;\r\n    max-width: 922px;\r\n}\r\n\r\n\r\n.sityfooter{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    height: 552px;\r\n    background:url(" + __webpack_require__(94) + ") no-repeat top right;\r\n    background-size: cover;\r\n}\r\n.sityfooterHead{\r\n    margin: 22px auto 0px;\r\n    max-width: 708px;\r\n}\r\n.footer{\r\n    max-width: 746px;\r\n    margin: 28px auto 0px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .israel img{\r\n        margin-left: 15px;\r\n        max-width: 110px;\r\n    }\r\n    .sityheadDiv img{\r\n        max-width: 90px;\r\n        max-height: 29px;\r\n        margin: 0 15px;\r\n    }\r\n    .israel{\r\n        width: 235px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .nav{\r\n        display: block;\r\n    }\r\n    .sity{\r\n        height: 800px;\r\n    }\r\n    .israel{\r\n        display: none;\r\n    }\r\n    .sityheadDiv{\r\n        display: none;\r\n    }\r\n    .sityhead{\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    }\r\n    .video{\r\n        width: 520px;\r\n        height: 293px;\r\n    }\r\n    .sityfootHead img {\r\n        max-width: 463px;\r\n    }\r\n    form{\r\n        width: 520px;\r\n    }\r\n    .forminput div input{\r\n        width: 250px;\r\n    }\r\n    form button{\r\n        font-size: 53px;\r\n    }\r\n    .logos{\r\n        max-width: 464px;\r\n    }\r\n    .white_center{\r\n        height: 1390px;\r\n    }\r\n    .MeatScott{\r\n        max-width: 213px;\r\n    }\r\n    .Group6{\r\n        max-width: 441px;\r\n    }\r\n    .reviews{\r\n        max-width: 590px;\r\n    }\r\n\r\n    .sityfooterHead{\r\n        max-width: 472px;\r\n    }\r\n    .footer{\r\n        max-width: 497px;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .sity{\r\n        height: 700px;\r\n    }\r\n    .sityhead img{\r\n        max-width: 300px;\r\n    }\r\n    .video{\r\n        width: 346px;\r\n        height: 195px;\r\n    }\r\n    .sityfootHead img {\r\n        max-width: 308px;\r\n    }\r\n    form{\r\n        -ms-flex-line-pack: justify;\r\n            align-content: space-between;\r\n        margin: 10px auto;\r\n        width: 346px;\r\n        height: 280px;\r\n    }\r\n    .forminput div input{\r\n        width: 100%;\r\n    }\r\n    form button{\r\n        margin: 0px auto;\r\n        font-size: 35px;\r\n    }\r\n    .logos{\r\n        margin: 20px auto;\r\n        max-width: 309px;\r\n    }\r\n    .forminput{\r\n        height: 60%;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    }\r\n    .forminput input{\r\n        width: 100%;\r\n    }\r\n    .forminput > div{\r\n        height: 50%;\r\n    }\r\n\r\n\r\n    .white_center{\r\n        height: 890px;\r\n    }\r\n    .MeatScott{\r\n        max-width: 142px;\r\n    }\r\n    .Group6{\r\n        max-width: 294px;\r\n    }\r\n    .reviews{\r\n        max-width: 340px;\r\n    }\r\n\r\n    .sityfooterHead{\r\n        max-width: 314px;\r\n    }\r\n    .footer{\r\n        max-width: 331px;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "nav input {\r\n    display: none;\r\n}\r\n.nav {\r\n    display: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n.nav__showmenu {\r\n    position: absolute;\r\n    z-index: 3;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n    border-radius: 50%;\r\n    top: 7px;\r\n    left: 0px;\r\n    font-size: 23px;\r\n    background-color: #ffbe33;\r\n\r\n}\r\n.menu {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 220px;\r\n    margin: 0;\r\n    padding: 17px 0;\r\n    text-transform: uppercase;\r\n    line-height: 2em;\r\n    background-color:rgba(0, 0, 0, 0.5);\r\n    overflow-y: auto;\r\n    transform: translateX(-100%);\r\n    transition: transform .3s;\r\n}\r\n.menu__item {\r\n    text-align: center;\r\n    color: #fd0000;\r\n}\r\n.menu__item:hover,.nav__showmenu:hover,.menu__showsub:hover {\r\n    opacity: 0.7;\r\n}\r\n.nav__check:checked+.nav__showmenu {\r\n    color:#fff;\r\n}\r\n.nav__check:checked~.menu {\r\n    transform: translateX(0);\r\n}\r\n\r\n.sity{\r\n    height: 515px;\r\n    background:url(" + __webpack_require__(95) + ") no-repeat top right;\r\n    background-size: cover;\r\n}\r\n.sityhead{\r\n    height: 60px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n    background:url(" + __webpack_require__(61) + ");\r\n    background-size: cover;\r\n}\r\n.sityhead img{\r\n    max-width: 451px;\r\n}\r\n.israel{\r\n    width: 356px;\r\n}\r\n.israel img{\r\n    margin-left: 15px;\r\n    max-width: 167px;\r\n}\r\n.sityheadDiv{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n\r\n.sityheadDiv img{\r\n    max-width: 135px;\r\n    max-height: 43px;\r\n    margin: 0 15px;\r\n}\r\n\r\n.sityfoot{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n}\r\n.sityfootHead{\r\n    margin: 17px auto;\r\n}\r\n.sityfootHead img {\r\n    max-width: 900px;\r\n}\r\n.video{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-family: 'Khand', sans-serif;\r\n    color: white;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    width: 611px;\r\n    height: 351px;\r\n    background-color: black;\r\n}\r\n\r\n.box button{\r\n    font-family: 'Khand', sans-serif;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    font-size: 40px;\r\n    color: #4f2922;\r\n    height: 75px;\r\n    padding: 0;\r\n    border: 6px solid rgba(255, 255, 255, 0.4);\r\n    border-radius: 9px;\r\n    background-color: #ffbe33;\r\n    box-shadow: 0 0 7px 0.1px black;\r\n}\r\n.forminput{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n}\r\n.videoForm{\r\n    width: 922px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n    margin: 0 auto;\r\n}\r\n.box{\r\n    width: 294px;\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n}\r\n.box input, select{\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-weight: 100;\r\n    height: 45px;\r\n    border-radius: 6px;\r\n    padding-left: 12px;\r\n}\r\nselect{\r\n    width: 72px;\r\n    margin-right: 10px;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n}\r\n.alertDanger{\r\n    color: #721c24;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    border-radius: 5px;\r\n    height: 22px;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n}\r\n.telefonLabel{\r\n    color: #721c24;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    border-radius: 5px;\r\n    height: 80px;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n}\r\n.telefon{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n\r\n.white_center{\r\n    height: 2850px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n}\r\n.logos{\r\n    margin: 17px auto 0px;\r\n    max-width: 924px;\r\n}\r\n.Group6{\r\n    margin: 34px auto 0px;\r\n    max-width: 924px;\r\n}\r\n.StartProfiting{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    width: 924px;\r\n    margin: 34px auto 0px;\r\n}\r\n.StartProfiting img:nth-child(1){\r\n    width: 924px;\r\n}\r\n.StartProfiting img:nth-child(2){\r\n    margin: 24px auto 0;\r\n    width: 484px;\r\n}\r\n.StartProfiting img:nth-child(3){\r\n    margin-top: 31px;\r\n    width: 680px;\r\n}\r\n.StartProfiting img:nth-child(4){\r\n    margin-top: 25px;\r\n    width: 779px;\r\n}\r\n.StartProfiting img:nth-child(5){\r\n    margin-top: 25px;\r\n    width: 887px;\r\n}\r\n.reasons{\r\n    margin: 32px auto 0px;\r\n    max-width: 952px;\r\n}\r\n.accounts{\r\n    margin: 27px auto 0px;\r\n    max-width: 304px;\r\n}\r\n.tableAccounts{\r\n    margin: 27px auto 0px;\r\n    max-width: 925px;\r\n}\r\n.FAQ{\r\n    margin: 27px auto 0px;\r\n    max-width: 925px;\r\n}\r\n\r\n\r\n.sityfooter{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    height: 552px;\r\n    background:url(" + __webpack_require__(95) + ") no-repeat top right;\r\n    background-size: cover;\r\n}\r\n.sityfooter form{\r\n    width: 697px;\r\n    margin: 0px auto;\r\n}\r\n.boxfooter{\r\n    padding-top: 27px;\r\n}\r\n.boxfooter div{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n.boxfooter div div{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 50%;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n}\r\n.boxfooterDiv1{\r\n    margin-right: 5px;\r\n}\r\n.boxfooterDiv2{\r\n    margin-left: 5px;\r\n}\r\n.boxfooter button{\r\n    font-family: 'Khand', sans-serif;\r\n    font-size: 40px;\r\n    color: #4f2922;\r\n    height: 75px;\r\n    padding: 0;\r\n    border: 6px solid rgba(255, 255, 255, 0.4);\r\n    border-radius: 9px;\r\n    background-color: #ffbe33;\r\n    box-shadow: 0 0 7px 0.1px black;\r\n}\r\n.boxfooter input, select{\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-weight: 100;\r\n    height: 45px;\r\n    border-radius: 6px;\r\n    margin-bottom: 10px;\r\n    padding-left: 12px;\r\n}\r\n.boxfooter div div div{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n.logosFooter{\r\n    margin: 24px auto 0px;\r\n    max-width: 696px;\r\n}\r\n.footer2{\r\n    margin: 24px auto 0px;\r\n    max-width: 744px;\r\n}\r\n\r\n @media screen and (max-width: 1200px) { \r\n    .israel img{\r\n        margin-left: 15px;\r\n        max-width: 110px;\r\n    }\r\n    .sityheadDiv img{\r\n        max-width: 90px;\r\n        max-height: 29px;\r\n        margin: 0 15px;\r\n    }\r\n    .israel{\r\n        width: 235px;\r\n    }\r\n} \r\n\r\n @media screen and (max-width: 992px) {\r\n    .white_center{\r\n        height: 2235px;\r\n    }\r\n    .nav{\r\n        display: block;\r\n    }\r\n    .israel{\r\n        display: none;\r\n    }\r\n    .sityhead{\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    }\r\n    .sityheadDiv{\r\n        display: none;\r\n    }\r\n    .sityfootHead img {\r\n        max-width: 675px;\r\n    }\r\n    .video{\r\n        width: 458px;\r\n        height: 300px;\r\n    }\r\n    .videoForm{\r\n        width: 690px;\r\n    }\r\n    .box{\r\n        width: 248px;\r\n    }\r\n    button{\r\n        font-size: 30px;\r\n    }\r\n    .box input, select{\r\n        margin-bottom: 0;\r\n    }\r\n    .logos{\r\n        max-width: 693px;\r\n    }\r\n    .Group6{\r\n        max-width: 693px;\r\n    }\r\n    .StartProfiting{\r\n        width: 693px;\r\n    }\r\n    .StartProfiting img:nth-child(1){\r\n        width: 693px;\r\n    }\r\n    .StartProfiting img:nth-child(2){\r\n        width: 363px;\r\n    }\r\n    .StartProfiting img:nth-child(3){\r\n        width: 510px;\r\n    }\r\n    .StartProfiting img:nth-child(4){\r\n        width: 584px;\r\n    }\r\n    .StartProfiting img:nth-child(5){\r\n        width: 665px;\r\n    }\r\n    .reasons{\r\n        max-width: 714px;\r\n    }\r\n    .accounts{\r\n        max-width: 228px;\r\n    }\r\n    .tableAccounts{\r\n        max-width: 740px;\r\n    }\r\n    .FAQ{\r\n        max-width: 693px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .white_center{\r\n        height: 1750px;\r\n    }\r\n    .sityhead img{\r\n        max-width: 338px;\r\n    }\r\n    .sityfootHead img {\r\n        max-width: 506px;\r\n    }\r\n    .video{\r\n        display: none;\r\n    }\r\n    .videoForm{\r\n        width: 517px;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    }\r\n    .box{\r\n        width: 517px;\r\n    }\r\n    .logos{\r\n        max-width: 519px;\r\n    }\r\n    .Group6{\r\n        max-width: 519px;\r\n    }\r\n    .StartProfiting{\r\n        width: 519px;\r\n    }\r\n    .StartProfiting img:nth-child(1){\r\n        width: 519px;\r\n    }\r\n    .StartProfiting img:nth-child(2){\r\n        width: 272px;\r\n    }\r\n    .StartProfiting img:nth-child(3){\r\n        width: 382px;\r\n    }\r\n    .StartProfiting img:nth-child(4){\r\n        width: 438px;\r\n    }\r\n    .StartProfiting img:nth-child(5){\r\n        width: 498px;\r\n    }\r\n    .reasons{\r\n        max-width: 535px;\r\n    }\r\n    .accounts{\r\n        max-width: 171px;\r\n    }\r\n    .tableAccounts{\r\n        max-width: 555px;\r\n    }\r\n    .FAQ{\r\n        max-width: 519px;\r\n    }\r\n    .sityfooter form{\r\n        max-width: 522px;\r\n    }\r\n    .boxfooter div{\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    }\r\n    .boxfooter div div{\r\n        width: 100%;\r\n    }\r\n    .boxfooterDiv1{\r\n        margin-right: 0px;\r\n    }\r\n    .boxfooterDiv2{\r\n        margin-left: 0px;\r\n    }\r\n    .logosFooter{\r\n        max-width: 522px;\r\n    }\r\n    .footer2{\r\n        max-width: 522px;\r\n    }\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .white_center{\r\n        height: 1085px;\r\n    }\r\n    .sityhead img{\r\n        max-width: 300px;\r\n    }\r\n    .sityfootHead img {\r\n        max-width: 325px;\r\n    }\r\n    .videoForm, .box{\r\n        width: 300px;\r\n    }\r\n    .logos{\r\n        margin: 12px auto 0px;\r\n        max-width: 311px;\r\n    }\r\n    .Group6{\r\n        margin: 22px auto 0px;\r\n        max-width: 311px;\r\n    }\r\n    .StartProfiting{\r\n        margin: 22px auto 0px;\r\n        width: 311px;\r\n    }\r\n    .StartProfiting img:nth-child(1){\r\n        margin-top: 16px;\r\n        width: 311px;\r\n    }\r\n    .StartProfiting img:nth-child(2){\r\n        margin-top: 20px;\r\n        width: 163px;\r\n    }\r\n    .StartProfiting img:nth-child(3){\r\n        margin-top: 16px;\r\n        width: 229px;\r\n    }\r\n    .StartProfiting img:nth-child(4){\r\n        margin-top: 16px;\r\n        width: 262px;\r\n    }\r\n    .StartProfiting img:nth-child(5){\r\n        margin-top: 16px;\r\n        width: 298px;\r\n    }\r\n    .reasons{\r\n        margin: 22px auto 0px;\r\n        max-width: 321px;\r\n    }\r\n    .accounts{\r\n        margin: 18px auto 0px;\r\n        max-width: 102px;\r\n    }\r\n    .tableAccounts{\r\n        margin: 18px auto 0px;\r\n        max-width: 333px;\r\n    }\r\n    .FAQ{\r\n        margin: 18px auto 0px;\r\n        max-width: 311px;\r\n    }\r\n    .sityfooter form{\r\n        max-width: 313px;\r\n    }\r\n    .logosFooter{\r\n        max-width: 311px;\r\n    }\r\n    .footer2{\r\n        max-width: 311px;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"sity\">\n  <div class=\"sityhead\">\n\n        <nav class=\"nav\">\n          <input class=\"nav__check\" type=\"checkbox\" id=\"showmenu\"/>\n          <label class=\"nav__showmenu\" for=\"showmenu\">&#9776;</label>\n          <ul class=\"menu\">\n            <li class=\"menu__item\">Catalog</li>\n            <li class=\"menu__item\" >About</li>\n            <li class=\"menu__item\">Price</li>\n            <li class=\"menu__item\">Contacts</li>\n            <li class=\"menu__item\">Other</li>\n          </ul>\n        </nav>\n\n    <div class=\"israel\"><img src=\"../../assets/spot.png\"></div>\n    <img src=\"../../assets/logo.png\">    \n    <div class=\"sityheadDiv\">\n      <img src=\"../../assets/time.png\">\n      <img src=\"../../assets/numbers.png\">\n    </div>\n  </div>\n\n  <div class=\"sityfoot\">\n    <div class=\"sityfootHead\">\n      <img src=\"../../assets/beone.png\">\n    </div>\n    <div class=\"video\"><p>Some video</p></div>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit(userForm)\">\n      <div class=\"forminput\">\n          <div>\n            <input id=\"firstname\" formControlName=\"firstname\" required  placeholder=\"{{input1}}\" class=\"form-control\" type=\"text\">\n            <div *ngIf=\"formErrors.firstname\" class=\"alert-danger\">\n              {{ formErrors.firstname }}\n          </div>\n        </div>\n        <div>\n            <input id=\"email\" formControlName=\"email\" required placeholder=\"{{input2}}\" class=\"form-control\" type=\"text\">\n            <div *ngIf=\"formErrors.email\" class=\"alert-danger\">\n              {{ formErrors.email }}\n            </div>\n          </div>\n        </div>\n      \n      <button type=\"submit\" class=\"form-control\" >{{button}}</button>\n    </form>\n    <img class=\"logos\" src=\"../../assets/logos.png\">\n  </div>\n</div>\n<div class=\"white_center\">\n  <img class=\"MeatScott\" src=\"../../assets/meet.png\" >\n  <img class=\"Group6\" src=\"../../assets/group6.png\" >\n  <img class=\"reviews\" src=\"../../assets/reviews.png\" >\n</div>\n<div class=\"sityfooter\">\n  <img class=\"sityfooterHead\" src=\"../../assets/enter.png\" >\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit(userForm)\">\n      <div class=\"forminput\">\n          <div>\n            <input id=\"firstname\" formControlName=\"firstname\" required  placeholder=\"{{input1}}\" class=\"form-control\" type=\"text\">\n            <div *ngIf=\"formErrors.firstname\" class=\"alert-danger\">\n              {{ formErrors.firstname }}\n          </div>\n        </div>\n        <div>\n            <input id=\"email\" formControlName=\"email\" required placeholder=\"{{input2}}\" class=\"form-control\" type=\"text\">\n            <div *ngIf=\"formErrors.email\" class=\"alert-danger\">\n              {{ formErrors.email }}\n            </div>\n          </div>\n        </div>\n      \n      <button type=\"submit\" class=\"form-control\" >{{button}}</button>\n    </form>\n  <img class=\"logos\" src=\"../../assets/../../assets/logos.png\">\n  <img class=\"footer\" src=\"../../assets/footer.png\" >\n</div>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div class=\"sity\">\n  <div class=\"sityhead\">\n\n      <nav class=\"nav\">\n          <input class=\"nav__check\" type=\"checkbox\" id=\"showmenu\"/>\n          <label class=\"nav__showmenu\" for=\"showmenu\">&#9776;</label>\n          <ul class=\"menu\">\n            <li class=\"menu__item\">Catalog</li>\n            <li class=\"menu__item\" >About</li>\n            <li class=\"menu__item\">Price</li>\n            <li class=\"menu__item\">Contacts</li>\n            <li class=\"menu__item\">Other</li>\n          </ul>\n        </nav>\n\n    <div class=\"israel\"><img src=\"../../assets/spot.png\"></div>\n    <img src=\"../../assets/logo.png\">\n    <div class=\"sityheadDiv\">\n      <img src=\"../../assets/time.png\">\n      <img src=\"../../assets/numbers.png\">\n    </div>\n  </div>\n\n  <div class=\"sityfoot\">\n    <div class=\"sityfootHead\">\n      <img src=\"../../assets/welcome.png\">\n    </div>\n    <div class=\"videoForm\">\n      <div class=\"video\"><p>Some video</p></div>\n      <form [formGroup]=\"userForm2\" (ngSubmit)=\"onSubmit(userForm2)\">\n        <div class=\"box\">\n            <input formControlName=\"firstname\" required [(ngModel)]=\"input1\" placeholder=\"{{input1placeholder}}\" class=\"form-control\" type=\"text\">\n              <label *ngIf=\"formErrors.firstname\" class=\"alertDanger\">\n                {{ formErrors.firstname }}\n              </label>\n            <input formControlName=\"lastname\" required placeholder=\"{{input2placeholder}}\" class=\"form-control\" type=\"text\">\n              <label *ngIf=\"formErrors.lastname\" class=\"alertDanger\">\n              {{ formErrors.lastname }}\n              </label>\n            <input formControlName=\"email\" required [(ngModel)]=\"input3\" placeholder=\"{{input3placeholder}}\" class=\"form-control\" type=\"email\">\n              <label *ngIf=\"formErrors.email\" class=\"alertDanger\">\n                {{ formErrors.email }}\n              </label>\n            <input formControlName=\"password\" required placeholder=\"{{input4placeholder}}\" class=\"form-control\" type=\"password\">\n              <label *ngIf=\"formErrors.password\" class=\"alertDanger\">\n                {{ formErrors.password }}(6-12 symbols)\n              </label>\n            <div class=\"telefon\">\n                <select class=\"form-control\">\n                    <option value=\"38\" selected>+38</option>\n                    <option value=\"49\">+49</option>\n                    <option value=\"50\">+50</option>\n                    <option value=\"60\">+60</option>\n                </select>\n                  <input formControlName=\"number\" required placeholder=\"{{input5placeholder}}\" class=\"form-control\" type=\"tel\">\n                    <label *ngIf=\"formErrors.number\" class=\"telefonLabel\">\n                      {{ formErrors.number }}(7 numbers)\n                    </label>\n            </div>\n              <button type=\"submit\" class=\"form-control\">{{button}}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"white_center\">\n    <img class=\"logos\" src=\"../../assets/logos2.png\">\n    <img class=\"Group6\" src=\"../../assets/group62.png\">\n    <div class=\"StartProfiting\">\n        <img class=\"center\" src=\"../../assets/startprofiting/rectangle.png\">\n        <img src=\"../../assets/startprofiting/start.png\">\n        <img src=\"../../assets/startprofiting/s1.png\">\n        <img src=\"../../assets/startprofiting/s2.png\">\n        <img src=\"../../assets/startprofiting/s3.png\">\n    </div>\n    <img class=\"reasons\" src=\"../../assets/reasons.png\">\n    <img class=\"accounts\" src=\"../../assets/watch.png\">\n    <img class=\"tableAccounts\" src=\"../../assets/live.png\">\n    <img class=\"FAQ\" src=\"../../assets/faq.png\">\n</div>\n<div class=\"sityfooter\">\n    <form [formGroup]=\"userForm2\" (ngSubmit)=\"onSubmit(userForm2)\">\n        <div class=\"boxfooter\">\n          <div>\n            <div class=\"boxfooterDiv1\">\n                <input formControlName=\"firstname\" required [(ngModel)]=\"input1\" placeholder=\"{{input1placeholder}}\" class=\"form-control\" type=\"text\">\n                <label *ngIf=\"formErrors.firstname\" class=\"alertDanger\">\n                  {{ formErrors.firstname }}\n                </label>\n              <input formControlName=\"lastname\" required placeholder=\"{{input2placeholder}}\" class=\"form-control\" type=\"text\">\n                <label *ngIf=\"formErrors.lastname\" class=\"alertDanger\">\n                {{ formErrors.lastname }}\n                </label>\n                <div class=\"telefonFooter\">\n                    <select class=\"form-control\">\n                        <option value=\"38\" selected>+38</option>\n                        <option value=\"49\">+49</option>\n                        <option value=\"50\">+50</option>\n                        <option value=\"60\">+60</option>\n                    </select>\n                      <input formControlName=\"number\" required placeholder=\"{{input5placeholder}}\" class=\"form-control\" type=\"tel\">\n                        <label *ngIf=\"formErrors.number\" class=\"telefonLabel\">\n                          {{ formErrors.number }}(7 numbers)\n                        </label>\n                </div>\n            </div>\n            <div class=\"boxfooterDiv2\">\n                <input formControlName=\"email\" required [(ngModel)]=\"input3\" placeholder=\"{{input3placeholder}}\" class=\"form-control\" type=\"email\">\n                <label *ngIf=\"formErrors.email\" class=\"alertDanger\">\n                  {{ formErrors.email }}\n                </label>\n              <input formControlName=\"password\" required placeholder=\"{{input4placeholder}}\" class=\"form-control\" type=\"password\">\n                <label *ngIf=\"formErrors.password\" class=\"alertDanger\">\n                  {{ formErrors.password }}(6-12 symbols)\n                </label>\n            </div>\n          </div>                \n              <button type=\"submit\" class=\"form-control\">{{button}}</button>\n        </div>\n    </form>\n    <img class=\"logosFooter\" src=\"../../assets/logos.png\">\n    <img class=\"footer2\" src=\"../../assets/footer.png\">\n\n</div>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACHAAAABDCAYAAAD+zWANAAAC7klEQVR4nO3aQQHAIADEsBti8S9hMvogUVAB/bbdAQAAAAAAAACQOXUAAAAAAAAAAMDrDBwAAAAAAAAAADEDBwAAAAAAAABAzMABAAAAAAAAABAzcAAAAAAAAAAAxAwcAAAAAAAAAAAxAwcAAAAAAAAAQMzAAQAAAAAAAAAQM3AAAAAAAAAAAMQMHAAAAAAAAAAAMQMHAAAAAAAAAEDMwAEAAAAAAAAAEDNwAAAAAAAAAADEDBwAAAAAAAAAADEDBwAAAAAAAABAzMABAAAAAAAAABAzcAAAAAAAAAAAxAwcAAAAAAAAAAAxAwcAAAAAAAAAQMzAAQAAAAAAAAAQM3AAAAAAAAAAAMQMHAAAAAAAAAAAMQMHAAAAAAAAAEDMwAEAAAAAAAAAEDNwAAAAAAAAAADEDBwAAAAAAAAAADEDBwAAAAAAAABAzMABAAAAAAAAABAzcAAAAAAAAAAAxAwcAAAAAAAAAAAxAwcAAAAAAAAAQMzAAQAAAAAAAAAQM3AAAAAAAAAAAMQMHAAAAAAAAAAAMQMHAAAAAAAAAEDMwAEAAAAAAAAAEDNwAAAAAAAAAADEDBwAAAAAAAAAADEDBwAAAAAAAABAzMABAAAAAAAAABAzcAAAAAAAAAAAxAwcAAAAAAAAAAAxAwcAAAAAAAAAQMzAAQAAAAAAAAAQM3AAAAAAAAAAAMQMHAAAAAAAAAAAMQMHAAAAAAAAAEDMwAEAAAAAAAAAEDNwAAAAAAAAAADEDBwAAAAAAAAAADEDBwAAAAAAAABAzMABAAAAAAAAABAzcAAAAAAAAAAAxAwcAAAAAAAAAAAxAwcAAAAAAAAAQMzAAQAAAAAAAAAQM3AAAAAAAAAAAMQMHAAAAAAAAAAAMQMHAAAAAAAAAEDMwAEAAAAAAAAAEDNwAAAAAAAAAADEDBwAAAAAAAAAADEDBwAAAAAAAABAzMABAAAAAAAAABAzcAAAAAAAAAAAxAwcAAAAAAAAAACxHx9oAOwUwGa1AAAAAElFTkSuQmCC"

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var data = __webpack_require__(77);
var User = (function () {
    function User() {
    }
    return User;
}());

var Page1Component = (function () {
    function Page1Component(fb, router) {
        this.fb = fb;
        this.router = router;
        this.user = new User();
        this.button = data.FORMS.BUTTONS.STEP_1;
        this.input1 = data.FORMS.PLACEHOLDERS.FIRSTNAME;
        this.input2 = data.FORMS.PLACEHOLDERS.EMAIL;
        //Объект с ошибками, которые будут выведены в пользовательском интерфейсе
        this.formErrors = {
            "firstname": "",
            "email": ""
        };
        // Объект с сообщениями ошибок
        this.validationMessages = {
            "firstname": {
                "required": data.FORMS.VALIDATION.REQUIRED,
                "pattern": data.FORMS.VALIDATION.INVALID
            },
            "email": {
                "required": data.FORMS.VALIDATION.REQUIRED
            }
        };
    }
    Page1Component.prototype.ngOnInit = function () {
        this.buildForm();
    };
    Page1Component.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            "firstname": [this.user.firstname, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("^[a-zA-Z]+$")
                ]],
            "email": [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                ]]
        });
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    Page1Component.prototype.onValueChange = function (data) {
        if (!this.userForm)
            return;
        var form = this.userForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    Page1Component.prototype.onSubmit = function (userForm) {
        if (this.userForm.valid) {
            this.router.navigate(["/page2"], { queryParams: { firstname: userForm.value.firstname, email: userForm.value.email } });
        }
    };
    return Page1Component;
}());
Page1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page1',
        template: __webpack_require__(170),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], Page1Component);

var _a, _b;
//# sourceMappingURL=page1.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* unused harmony export User2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var data = __webpack_require__(77);
var User2 = (function () {
    function User2() {
    }
    return User2;
}());

var Page2Component = (function () {
    function Page2Component(fb, activatedRoute, router) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user2 = new User2();
        this.button = (data).FORMS.BUTTONS.STEP_2;
        this.input1placeholder = data.FORMS.PLACEHOLDERS.FIRSTNAME;
        this.input2placeholder = data.FORMS.PLACEHOLDERS.LASTNAME;
        this.input3placeholder = data.FORMS.PLACEHOLDERS.EMAIL;
        this.input4placeholder = data.FORMS.PLACEHOLDERS.PASSWORD;
        this.input5placeholder = data.FORMS.PLACEHOLDERS.NUMBER;
        //Объект с ошибками, которые будут выведены в пользовательском интерфейсе
        this.formErrors = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": "",
            "number": ""
        };
        // Объект с сообщениями ошибок
        this.validationMessages = {
            "firstname": {
                "required": data.FORMS.VALIDATION.REQUIRED,
                "pattern": data.FORMS.VALIDATION.INVALID
            },
            "lastname": {
                "required": data.FORMS.VALIDATION.REQUIRED,
                "pattern": data.FORMS.VALIDATION.INVALID
            },
            "email": {
                "required": data.FORMS.VALIDATION.REQUIRED
            },
            "password": {
                "required": data.FORMS.VALIDATION.REQUIRED,
                "minlength": data.FORMS.VALIDATION.INVALID,
                "maxlength": data.FORMS.VALIDATION.INVALID
            },
            "number": {
                "required": data.FORMS.VALIDATION.REQUIRED,
                "pattern": data.FORMS.VALIDATION.INVALID
            },
        };
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.input1 = params['firstname'];
            _this.input3 = params['email'];
        });
    };
    Page2Component.prototype.buildForm = function () {
        var _this = this;
        this.userForm2 = this.fb.group({
            "firstname": [this.user2.firstname, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("^[a-zA-Z]+$")
                ]],
            "lastname": [this.user2.lastname, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("^[a-zA-Z]+$")
                ]],
            "email": [this.user2.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
                ]],
            "password": [this.user2.password, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(12)
                ]],
            "number": [this.user2.number, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[0-9]{7}")
                ]]
        });
        this.userForm2.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    Page2Component.prototype.onValueChange = function (data) {
        if (!this.userForm2)
            return;
        var form = this.userForm2;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    Page2Component.prototype.onSubmit = function (userForm2) {
        if (this.userForm2.valid) {
            alert(data.REGISTRATION.SUCCESS);
            this.router.navigate(["/page1"], { relativeTo: this.activatedRoute });
        }
        else {
            alert(data.REGISTRATION.FAILURE);
        }
    };
    return Page2Component;
}());
Page2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page2',
        template: __webpack_require__(171),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], Page2Component);

var _a, _b, _c;
//# sourceMappingURL=page2.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = {"FORMS":{"VALIDATION":{"REQUIRED":"This field is required","INVALID":"This field is not valid"},"PLACEHOLDERS":{"EMAIL":"You email","FIRSTNAME":"Your firstname","LASTNAME":"Your lastname","PASSWORD":"Your password","NUMBER":"You telephone number"},"BUTTONS":{"STEP_1":"Next step","STEP_2":"Register"}},"REGISTRATION":{"SUCCESS":"Registration has been completed","FAILURE":"Oops, some error has been occurred"}}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sity.8b2a594e89e49bd95f10.png";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sity2.87d762b7953d31091b91.png";

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map