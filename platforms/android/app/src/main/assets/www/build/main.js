webpackJsonp([8],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickersMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StickersMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StickersMatchPage = (function () {
    function StickersMatchPage(navCtrl, helper, navParams, authService) {
        this.navCtrl = navCtrl;
        this.helper = helper;
        this.navParams = navParams;
        this.authService = authService;
    }
    StickersMatchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StickersMatchPage');
        this.authService.getData('u=' + localStorage.getItem('userID') + '&g=' + localStorage.getItem('UserLoggedGroup'), 'getStickersMatch.php').then(function (result) {
            _this.matchResult = result;
            if (_this.matchResult.status == 'no results' || _this.matchResult.status == 'no params') {
                _this.showNoResult = true;
            }
            else {
                _this.showNoResult = false;
                _this.stickers = result;
                var _stickers = [];
                var currentName = '';
                for (var i = 0; i < _this.stickers.length; i++) {
                    var sticker = _this.stickers[i];
                    if (sticker.nombre != currentName) {
                        currentName = sticker.nombre;
                        var _numbers = [];
                        for (var j = i; j < _this.stickers.length; j++) {
                            var number = _this.stickers[j];
                            if (number.nombre != currentName) {
                                break;
                            }
                            _numbers.push(number.numero);
                        }
                        _stickers.push({ nombre: currentName, numeros: _numbers });
                    }
                }
                _this.stickers = _stickers;
            }
        }, function (error) {
            alert(error);
        });
    };
    return StickersMatchPage;
}());
StickersMatchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stickers-match',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\stickers-match\stickers-match.html"*/'<!--\n\n  Generated template for the StickersMatchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Quien las tiene?</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="sticker-numbers">\n\n    <ion-item *ngIf="showNoResult">No existe ningun match</ion-item>\n\n    <div style="float:left; width:100%;" *ngFor="let sticker of stickers">\n\n    <div>{{ sticker.nombre }}</div>\n\n    <div id="wrapper">\n\n      <ul id="circles">\n\n          <li *ngFor="let numero of sticker.numeros">\n\n              <div class="circle">\n\n                  <div>{{ numero }}</div>\n\n              </div>\n\n          </li>\n\n      </ul>\n\n    </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\stickers-match\stickers-match.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
], StickersMatchPage);

//# sourceMappingURL=stickers-match.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickersMissingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*import { SpeechRecognition } from '@ionic-native/speech-recognition';*/
/**
 * Generated class for the StickersMissingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StickersMissingPage = (function () {
    function StickersMissingPage(helper, navCtrl, navParams, authService /*, private plt: Platform,
        private speechRecognition: SpeechRecognition*/) {
        var _this = this;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService; /*, private plt: Platform,
        private speechRecognition: SpeechRecognition*/
        /*matches : String[];
        recording : string = 'pause';*/
        this.sections = [];
        this.authService.getData('u=' + localStorage.getItem('userID') + '&t=missing', 'getStickers.php').then(function (result) {
            _this.myStickers = result;
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers.length; i++) {
                var _stickers = [];
                for (var j = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers[i].range[0]; j <= __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers[i].range[1]; j++) {
                    var founded = _this.helper.searchNumber(_this.myStickers, j);
                    _stickers.push({ number: j, active: founded ? 'active' : '' });
                }
                _this.sections.push({ name: __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers[i].name, stickers: _stickers });
            }
        });
    }
    StickersMissingPage.prototype.ionViewDidLoad = function () {
    };
    StickersMissingPage.prototype.click_number = function (obj) {
        var _this = this;
        this.authService.getData('u=' + localStorage.getItem('userID') + '&t=missing&n=' + obj.number, 'updateStickers.php').then(function (result) {
            _this.updateResult = result;
            if (_this.updateResult.status == 'success') {
                obj.active = 'active';
            }
        });
    };
    return StickersMissingPage;
}());
StickersMissingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stickers-missing',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\stickers-missing\stickers-missing.html"*/'<!--\n\n  Generated template for the StickersMissingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Faltantes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="sticker-numbers">\n\n  <!--<div>Puedes ingresar tus figuritas repetidas con reconocimiento de voz</div>\n\n  <div style="width:100%; height: 30px;" [class]="recording"><label [class]="recording">Escuchando</label></div>\n\n  <button ion-button full (click)="startListening()">Empezar</button>\n\n  <button ion-button full (click)="stopListening()" *ngIf="isIos()">Detener</button>\n\n  <ion-card>\n\n    <ion-card-header>Numeros escuchados</ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item *ngFor="let match of matches">\n\n          {{ match }}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <div>O puedes ingresarlas manualmente</div>\n\n  <ion-list>\n\n    <ion-item *ngFor="let section of sections">\n\n      <ion-list>\n\n        {{ section.name }}\n\n        <ion-item *ngFor="let number of section.numbers">\n\n          {{ number }}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-item>\n\n  </ion-list>-->\n\n\n\n  <div style="float:left; width:100%;" *ngFor="let section of sections">\n\n    <h2>{{ section.name }}</h2>\n\n    <div id="wrapper">\n\n      <ul id="circles">\n\n          <li *ngFor="let sticker of section.stickers">\n\n              <div class="circle {{ sticker.active }}" (click)="click_number(sticker)">\n\n                  <div>{{ sticker.number }}</div>\n\n              </div>\n\n          </li>\n\n      </ul>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\stickers-missing\stickers-missing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */] /*, private plt: Platform,
        private speechRecognition: SpeechRecognition*/])
], StickersMissingPage);

//# sourceMappingURL=stickers-missing.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickersRepeatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StickersRepeatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StickersRepeatedPage = (function () {
    function StickersRepeatedPage(helper, navCtrl, navParams, authService) {
        var _this = this;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.sections = [];
        this.authService.getData('u=' + localStorage.getItem('userID') + '&t=repeated', 'getStickers.php').then(function (result) {
            _this.myStickers = result;
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers.length; i++) {
                var _stickers = [];
                for (var j = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers[i].range[0]; j <= __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers[i].range[1]; j++) {
                    var founded = _this.helper.searchNumber(_this.myStickers, j);
                    _stickers.push({ number: j, active: founded ? 'active' : '' });
                }
                _this.sections.push({ name: __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].stickers[i].name, stickers: _stickers });
            }
        });
    }
    StickersRepeatedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StickersRepeatedPage');
    };
    StickersRepeatedPage.prototype.click_number = function (obj) {
        var _this = this;
        this.authService.getData('u=' + localStorage.getItem('userID') + '&t=repeated&n=' + obj.number, 'updateStickers.php').then(function (result) {
            _this.updateResult = result;
            if (_this.updateResult.status == 'success') {
                obj.active = 'active';
            }
        });
    };
    return StickersRepeatedPage;
}());
StickersRepeatedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stickers-repeated',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\stickers-repeated\stickers-repeated.html"*/'<!--\n\n  Generated template for the StickersRepeatedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Repetidas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="sticker-numbers">\n\n  <div style="float:left; width:100%;" *ngFor="let section of sections">\n\n    <div>{{ section.name }}</div>\n\n    <div id="wrapper">\n\n      <ul id="circles">\n\n          <li *ngFor="let sticker of section.stickers">\n\n              <div class="circle {{ sticker.active }}" (click)="click_number(sticker)">\n\n                  <div>{{ sticker.number }}</div>\n\n              </div>\n\n          </li>\n\n      </ul>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\stickers-repeated\stickers-repeated.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]])
], StickersRepeatedPage);

//# sourceMappingURL=stickers-repeated.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stickers_missing_stickers_missing__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stickers_repeated_stickers_repeated__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stickers_match_stickers_match__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StickersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StickersPage = (function () {
    function StickersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StickersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StickersPage');
    };
    StickersPage.prototype.missing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__stickers_missing_stickers_missing__["a" /* StickersMissingPage */]);
    };
    StickersPage.prototype.repeated = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__stickers_repeated_stickers_repeated__["a" /* StickersRepeatedPage */]);
    };
    StickersPage.prototype.makeMatch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stickers_match_stickers_match__["a" /* StickersMatchPage */]);
    };
    return StickersPage;
}());
StickersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stickers',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\stickers\stickers.html"*/'<!--\n\n  Generated template for the StickersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>TrikyGol</ion-title>\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<button class = "button button-block button-large button-assertive icon ion-left ion-asterisk" (click)="missing()">\n\n   Faltantes\n\n</button>\n\n<br/>\n\n<button class = "button button-block button-large button-energized icon ion-left ion-more" (click)="repeated()">\n\n   Repetidas\n\n</button>\n\n<br/>\n\n<button class = "button button-block button-large button-balance icon ion-left ion-person" (click)="makeMatch()">\n\n   Match\n\n</button>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\stickers\stickers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], StickersPage);

//# sourceMappingURL=stickers.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot/forgot.module": [
		286,
		7
	],
	"../pages/games/games.module": [
		287,
		6
	],
	"../pages/login/login.module": [
		288,
		5
	],
	"../pages/register/register.module": [
		289,
		4
	],
	"../pages/stickers-match/stickers-match.module": [
		290,
		3
	],
	"../pages/stickers-missing/stickers-missing.module": [
		291,
		2
	],
	"../pages/stickers-repeated/stickers-repeated.module": [
		292,
		1
	],
	"../pages/stickers/stickers.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, authService, events, formBuilder, network, zone, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.events = events;
        this.formBuilder = formBuilder;
        this.network = network;
        this.zone = zone;
        this.plt = plt;
        this.group = this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
        if (localStorage.getItem('UserLoggedIn') == null || localStorage.getItem('UserLoggedIn') != 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            return;
        }
        var data = { e: localStorage.getItem('userID') };
        this.authService.postData(data, 'userExists.php').then(function (result) {
            _this.responseUserData = result;
            _this.myPoints = _this.responseUserData.puntos != null ? _this.responseUserData.puntos : '0';
            _this.scoresRight = _this.responseUserData.marcadoresAcertados != null ? _this.responseUserData.marcadoresAcertados : '0';
            _this.tieGames = _this.responseUserData.empates != null ? _this.responseUserData.empates : '0';
            _this.winTeams = _this.responseUserData.equiposGanadores != null ? _this.responseUserData.equiposGanadores : '0';
            _this.passedTeams = _this.responseUserData.equiposClasificados != null ? _this.responseUserData.equiposClasificados : '0';
        });
        this.events.subscribe('reloadPositionTable', function () {
            //call method to refresh content
            _this.loadPositionTable();
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('UserLoggedIn') != 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            return;
        }
        this.loadPositionTable();
        var date = new Date('2018-06-14 5:00:00');
        var firstDate = new Date('2018-07-14 5:00:00');
        var lastDate = new Date('2018-06-14 5:00:00');
        if (this.plt.is('ios')) {
            date = new Date(2018, 5, 14, 5, 0, 0);
            firstDate = new Date(2018, 5, 14, 5, 0, 0);
            lastDate = new Date(2018, 5, 14, 5, 0, 0);
        }
        if (Date.now() > lastDate.getTime()) {
            date = new Date('2018-07-15 5:00:00');
            if (this.plt.is('ios'))
                date = new Date(2018, 5, 15, 5, 0, 0);
        }
        if (Date.now() > firstDate.getTime() && Date.now() <= lastDate.getTime()) {
            date = new Date();
        }
        this.authService.getData('date=' + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(), 'getNextGames.php').then(function (result) {
            _this.nextGames = result;
            _this.gameDate = __WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].months[date.getMonth()] + ', ' + date.getDate() + ' de ' + date.getFullYear();
        });
    };
    HomePage.prototype.loadPositionTable = function () {
        var _this = this;
        this.authService.getData(localStorage.getItem('UserLoggedGroup').length > 0 ? 'g=' + localStorage.getItem('UserLoggedGroup') : '', 'getUsersOrderedPoints.php').then(function (result) {
            _this.positions = result;
            if (_this.positions.status == 'no params') {
                _this.positionTable = false;
            }
            else {
                _this.positionTable = true;
                /*for(var i = 0; i < this.positions.length; i++){
                  var user = this.responsePositionData[i];
                  var user_data = user.nombre + ' - ' + (user.puntos != null ? user.puntos : 'Sin ') + ' puntos';
  
                  if(i == 0)
                this.positionName1 = user_data;
              else if(i == 1)
                this.positionName2 = user_data;
              else if(i == 2)
                this.positionName3 = user_data;
              else if(i == 3)
                this.positionName4 = user_data;
              else if(i == 4)
                this.positionName5 = user_data;
                }*/
            }
        }, function (error) {
            alert(error);
        });
    };
    HomePage.prototype.attemptJoinGroup = function () {
        var _this = this;
        localStorage.setItem('UserLoggedGroup', this.group.value.code);
        var data = { g: this.group.value.code, u: localStorage.getItem('userID') };
        this.authService.postData(data, 'updateUserGroup.php').then(function (result) {
            _this.positions = result;
            if (_this.positions.status == 'ok') {
                _this.loadPositionTable();
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>TrikyGol</ion-title>\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n<ion-content padding>\n\n  <!--Marcador Partido-->\n\n  <div class="headers-ion">Próximos partidos</div>\n\n  <div padding margin-bottom text-center style="height: auto;" class="card-triky">\n\n    <ion-grid>\n\n      <ion-col col-12 class="score-home"> <ion-icon name="md-calendar"></ion-icon>{{ gameDate }}</ion-col>\n\n      <ion-row *ngFor="let game of nextGames" class="next-games">\n\n        <ion-col class="team1" col-4><img style="border-radius:4px" height="20" width="32" src="images/{{ game.flag1 }}"> {{ game.player1 }}</ion-col>\n\n        <ion-col col-3><div><span style="font-weight:700">{{ game.score1 }}</span> : <span style="font-weight:700;">{{ game.score2 }}</span></div></ion-col>\n\n        <ion-col class="team2" col-4> {{ game.player2 }} <img style="border-radius:4px" height="20" width="32" src="images/{{ game.flag2 }}"></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!--panel de mis puntos-->\n\n  <ion-item-group class="people-group">\n\n  <div class="headers-ion">Puntos Ganados</div>\n\n  <div padding margin-bottom text-center class="card-triky">\n\n        <div class="title" end>  <ion-icon style="color:#ff9800; font-size:3.5rem" name="md-trophy"></ion-icon> Mis puntos: {{ myPoints }}</div>\n\n  	<ion-label class="entire-text">Mis puntos total, acertados</ion-label>\n\n</div>\n\n<!--panel de estadisticas-->\n\n    <ion-grid style="font-size:1.4rem;text-align:center;white-space: inherit !important;">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n              <div padding class="card-triky">\n\n                <div style="white-space: normal;"># de marcadores acertados</div>\n\n                <div style="font-size:1.9rem;padding-bottom:16px"><b>{{ scoresRight }}</b></div>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n               <div padding class="card-triky">\n\n                <div style="white-space: normal;"># de partidos  empatados</div>\n\n                <div style="font-size:1.9rem;padding-bottom:16px"><b>{{ tieGames }}</b></div>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <div padding class="card-triky">\n\n                <div style="white-space: normal;"># de equipos ganadores</div>\n\n                <div style="font-size:1.9rem;"><b>{{ winTeams }}</b></div>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <div padding class="card-triky">\n\n                <div style="white-space: normal;"># de equipos clasificados(x2)</div>\n\n                <div style="font-size:1.9rem;"><b>{{ passedTeams }}</b></div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-item-group>\n\n\n\n<!--tabla de usuarios-->\n\n<ion-item-group class="people-group positions">\n\n  <div class="headers-ion">Participantes</div>\n\n  <div padding class="card-triky">\n\n    <div *ngIf="positionTable">\n\n      <ion-item class="position1 hidden">\n\n        <ion-grid>\n\n          <ion-row class="header-table">\n\n            <ion-col col-6>Usuario</ion-col>\n\n            <ion-col col-6>Puntos</ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-item>\n\n      <ion-item class="position1" *ngFor="let position of positions">{{ position.number }}\n\n        <ion-icon class="icon-table" name="ios-medal"></ion-icon> {{ position.nombre }}\n\n      </ion-item>\n\n    </div>\n\n    <div class="un-code" *ngIf="!positionTable">\n\n        <ion-item>\n\n          <h2>Aún no perteneces a un grupo</h2>\n\n          <p>Introduce el grupo abajo y dale a "Entrar" para empezar a jugar</p>\n\n          <form [formGroup]="group" (ngSubmit)="attemptJoinGroup()">\n\n            <ion-item>\n\n                <ion-input class="code-group" type="text" placeholder="Código" autocapitalize="none" formControlName="code"></ion-input>\n\n            </ion-item>\n\n            <br>\n\n            <button ion-button full type="submit" class="button button-calm" [disabled]="!group.valid">ENTRAR</button>\n\n          </form>\n\n        </ion-item>\n\n    </div>\n\n    </div>\n\n\n\n  </ion-item-group>\n\n  <ion-item-group>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_dialogs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelperService = (function () {
    function HelperService(dialogs, pfm) {
        this.dialogs = dialogs;
        this.pfm = pfm;
    }
    HelperService.prototype.gapAlert = function (message, title) {
        this.dialogs.alert(message, // message
        title, // title
        "Ok" // buttonName
        );
    };
    HelperService.prototype.gapConfirmAlert = function (message, title, yesButtonLabel, noButtonLabel, onConfirm) {
        this.dialogs.confirm(message, // message
        title, // title
        [yesButtonLabel, noButtonLabel] // buttonLabels
        ).then(onConfirm);
    };
    HelperService.prototype.logout = function () {
        localStorage.setItem('userEmail', '');
        localStorage.setItem('userID', '0');
        localStorage.setItem('UserLoggedIn', 'false');
    };
    HelperService.prototype.formatDate = function (date) {
        var _date = new Date(date);
        if (this.pfm.is('ios')) {
            var arr = date.split(/[- :]/);
            _date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
        }
        var monthNames = [
            "Enero", "Febrero", "Marzo",
            "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"
        ];
        var day = _date.getDate();
        var monthIndex = _date.getMonth();
        return day + ' ' + monthNames[monthIndex];
    };
    HelperService.prototype.searchNumber = function (numbers, number) {
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i].numero == number)
                return true;
        }
        return false;
    };
    return HelperService;
}());
HelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_dialogs__["a" /* Dialogs */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
], HelperService);

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__games_games__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsPage = (function () {
    function GroupsPage(navCtrl, authService, navParams, helper, modalCtrl, events, loadingCtrl, network, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.zone = zone;
        this.defaultFillScoresText = "Click para llenar los marcadores";
        this.fillTextA = this.defaultFillScoresText;
        this.fillTextB = this.defaultFillScoresText;
        this.fillTextC = this.defaultFillScoresText;
        this.fillTextD = this.defaultFillScoresText;
        this.fillTextE = this.defaultFillScoresText;
        this.fillTextF = this.defaultFillScoresText;
        this.fillTextG = this.defaultFillScoresText;
        this.fillTextH = this.defaultFillScoresText;
        this.events.subscribe('reloadGroups', function () {
            //call methods to refresh content
            _this.displayGroupsAndTeams('triky');
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    GroupsPage.prototype.ionViewDidEnter = function () {
        this.displayGroupsAndTeams('triky');
    };
    GroupsPage.prototype.displayGroupsAndTeams = function (_source) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        if (typeof localStorage.getItem('userID') === 'undefined' || localStorage.getItem('userID') == '') {
            loading.dismiss();
            this.logout();
        }
        // HACER EL PHP "getFirstSecondTeams.php" QUE TRAIGA TODOS LOS EQUIPOS POR GRUPOS
        this.authService.getData('source=' + _source + (_source == 'triky' ? "&u=" + localStorage.getItem('userID') : ""), 'getFirstSecondTeams.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            _this.typeShowing = _source;
            _this.showPlacesA = false;
            _this.showPlacesB = false;
            _this.showPlacesC = false;
            _this.showPlacesD = false;
            _this.showPlacesE = false;
            _this.showPlacesF = false;
            _this.showPlacesG = false;
            _this.showPlacesH = false;
            /* PONER LOS EQUIPOS DE CADA GRUPO teamA1, teamA2... SI EL GRUPO TIENE EQUIPOS PONER VARIABLE noWrap<LETRA> = "col"
              O PONER SI EL GRUPO NO TIENE EQUIPO - PONER TEXTO "Equipos aun no seleccionados" Y VARIABLE noWrap<LETRA> = "noWrap"*/
            for (var i = 0; i < _this.responseData.length; i++) {
                var grupo = _this.responseData[i];
                switch (grupo.letter) {
                    case 'a':
                        _this.teamA1 = grupo.team1.nombre;
                        _this.teamA1Flag = grupo.team1.bandera;
                        _this.teamA1Points = grupo.team1.puntos;
                        _this.teamA2 = grupo.team2.nombre;
                        _this.teamA2Flag = grupo.team2.bandera;
                        _this.teamA2Points = grupo.team2.puntos;
                        _this.teamA3 = grupo.team3.nombre;
                        _this.teamA3Flag = grupo.team3.bandera;
                        _this.teamA3Points = grupo.team3.puntos;
                        _this.teamA4 = grupo.team4.nombre;
                        _this.teamA4Flag = grupo.team4.bandera;
                        _this.teamA4Points = grupo.team4.puntos;
                        _this.showPlacesA = grupo.team1.puntos != '0';
                        _this.showInfoBarA = !_this.showPlacesA;
                        break;
                    case 'b':
                        _this.teamB1 = grupo.team1.nombre;
                        _this.teamB1Flag = grupo.team1.bandera;
                        _this.teamB1Points = grupo.team1.puntos;
                        _this.teamB2 = grupo.team2.nombre;
                        _this.teamB2Flag = grupo.team2.bandera;
                        _this.teamB2Points = grupo.team2.puntos;
                        _this.teamB3 = grupo.team3.nombre;
                        _this.teamB3Flag = grupo.team3.bandera;
                        _this.teamB3Points = grupo.team3.puntos;
                        _this.teamB4 = grupo.team4.nombre;
                        _this.teamB4Flag = grupo.team4.bandera;
                        _this.teamB4Points = grupo.team4.puntos;
                        _this.showPlacesB = grupo.team1.puntos != '0';
                        _this.showInfoBarB = !_this.showPlacesB;
                        break;
                    case 'c':
                        _this.teamC1 = grupo.team1.nombre;
                        _this.teamC1Flag = grupo.team1.bandera;
                        _this.teamC1Points = grupo.team1.puntos;
                        _this.teamC2 = grupo.team2.nombre;
                        _this.teamC2Flag = grupo.team2.bandera;
                        _this.teamC2Points = grupo.team2.puntos;
                        _this.teamC3 = grupo.team3.nombre;
                        _this.teamC3Flag = grupo.team3.bandera;
                        _this.teamC3Points = grupo.team3.puntos;
                        _this.teamC4 = grupo.team4.nombre;
                        _this.teamC4Flag = grupo.team4.bandera;
                        _this.teamC4Points = grupo.team4.puntos;
                        _this.showPlacesC = grupo.team1.puntos != '0';
                        _this.showInfoBarC = !_this.showPlacesC;
                        break;
                    case 'd':
                        _this.teamD1 = grupo.team1.nombre;
                        _this.teamD1Flag = grupo.team1.bandera;
                        _this.teamD1Points = grupo.team1.puntos;
                        _this.teamD2 = grupo.team2.nombre;
                        _this.teamD2Flag = grupo.team2.bandera;
                        _this.teamD2Points = grupo.team2.puntos;
                        _this.teamD3 = grupo.team3.nombre;
                        _this.teamD3Flag = grupo.team3.bandera;
                        _this.teamD3Points = grupo.team3.puntos;
                        _this.teamD4 = grupo.team4.nombre;
                        _this.teamD4Flag = grupo.team4.bandera;
                        _this.teamD4Points = grupo.team4.puntos;
                        _this.showPlacesD = grupo.team1.puntos != '0';
                        _this.showInfoBarD = !_this.showPlacesD;
                        break;
                    case 'e':
                        _this.teamE1 = grupo.team1.nombre;
                        _this.teamE1Flag = grupo.team1.bandera;
                        _this.teamE1Points = grupo.team1.puntos;
                        _this.teamE2 = grupo.team2.nombre;
                        _this.teamE2Flag = grupo.team2.bandera;
                        _this.teamE2Points = grupo.team2.puntos;
                        _this.teamE3 = grupo.team3.nombre;
                        _this.teamE3Flag = grupo.team3.bandera;
                        _this.teamE3Points = grupo.team3.puntos;
                        _this.teamE4 = grupo.team4.nombre;
                        _this.teamE4Flag = grupo.team4.bandera;
                        _this.teamE4Points = grupo.team4.puntos;
                        _this.showPlacesE = grupo.team1.puntos != '0';
                        _this.showInfoBarE = !_this.showPlacesE;
                        break;
                    case 'f':
                        _this.teamF1 = grupo.team1.nombre;
                        _this.teamF1Flag = grupo.team1.bandera;
                        _this.teamF1Points = grupo.team1.puntos;
                        _this.teamF2 = grupo.team2.nombre;
                        _this.teamF2Flag = grupo.team2.bandera;
                        _this.teamF2Points = grupo.team2.puntos;
                        _this.teamF3 = grupo.team3.nombre;
                        _this.teamF3Flag = grupo.team3.bandera;
                        _this.teamF3Points = grupo.team3.puntos;
                        _this.teamF4 = grupo.team4.nombre;
                        _this.teamF4Flag = grupo.team4.bandera;
                        _this.teamF4Points = grupo.team4.puntos;
                        _this.showPlacesF = grupo.team1.puntos != '0';
                        _this.showInfoBarF = !_this.showPlacesF;
                        break;
                    case 'g':
                        _this.teamG1 = grupo.team1.nombre;
                        _this.teamG1Flag = grupo.team1.bandera;
                        _this.teamG1Points = grupo.team1.puntos;
                        _this.teamG2 = grupo.team2.nombre;
                        _this.teamG2Flag = grupo.team2.bandera;
                        _this.teamG2Points = grupo.team2.puntos;
                        _this.teamG3 = grupo.team3.nombre;
                        _this.teamG3Flag = grupo.team3.bandera;
                        _this.teamG3Points = grupo.team3.puntos;
                        _this.teamG4 = grupo.team4.nombre;
                        _this.teamG4Flag = grupo.team4.bandera;
                        _this.teamG4Points = grupo.team4.puntos;
                        _this.showPlacesG = grupo.team1.puntos != '0';
                        _this.showInfoBarG = !_this.showPlacesG;
                        break;
                    case 'h':
                        _this.teamH1 = grupo.team1.nombre;
                        _this.teamH1Flag = grupo.team1.bandera;
                        _this.teamH1Points = grupo.team1.puntos;
                        _this.teamH2 = grupo.team2.nombre;
                        _this.teamH2Flag = grupo.team2.bandera;
                        _this.teamH2Points = grupo.team2.puntos;
                        _this.teamH3 = grupo.team3.nombre;
                        _this.teamH3Flag = grupo.team3.bandera;
                        _this.teamH3Points = grupo.team3.puntos;
                        _this.teamH4 = grupo.team4.nombre;
                        _this.teamH4Flag = grupo.team4.bandera;
                        _this.teamH4Points = grupo.team4.puntos;
                        _this.showPlacesH = grupo.team1.puntos != '0';
                        _this.showInfoBarH = !_this.showPlacesH;
                        break;
                }
            }
            if (_source == 'fifa') {
                _this.showInfoBarA = false;
                _this.showInfoBarB = false;
                _this.showInfoBarC = false;
                _this.showInfoBarD = false;
                _this.showInfoBarE = false;
                _this.showInfoBarF = false;
                _this.showInfoBarG = false;
                _this.showInfoBarH = false;
            }
            /*
            PONER LOS 1ro y 2do lugar de cada equipo
              O PONER SI LOS MARCADORES NO HAN SIDO LLENADOS POR EL USUARIO - PONER VARIABLE showPlaces<LETRA> = TRUE O FALSE
            */
        }, function (err) {
            // Error log
            //this.helper.gapAlert('Error en al traer grupos', err);
            _this.isDeviceOnline = false;
            loading.dismiss();
        });
    };
    GroupsPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    GroupsPage.prototype.clickGroups = function (type) {
        document.querySelector('page-groups button.selected').className = document.querySelector('page-groups button.selected').className.replace(/\bselected\b/, '');
        this.typeShowing = type;
        document.querySelector('page-groups #' + type + '-button').className += ' selected';
        this.displayGroupsAndTeams(type);
        if (type == 'triky') {
            this.fillTextA = this.defaultFillScoresText;
            this.fillTextB = this.defaultFillScoresText;
            this.fillTextC = this.defaultFillScoresText;
            this.fillTextD = this.defaultFillScoresText;
            this.fillTextE = this.defaultFillScoresText;
            this.fillTextF = this.defaultFillScoresText;
            this.fillTextG = this.defaultFillScoresText;
            this.fillTextH = this.defaultFillScoresText;
        }
        else {
            this.fillTextA = '';
            this.fillTextB = '';
            this.fillTextC = '';
            this.fillTextD = '';
            this.fillTextE = '';
            this.fillTextF = '';
            this.fillTextG = '';
            this.fillTextH = '';
        }
    };
    GroupsPage.prototype.clickGroup = function (letter) {
        console.log(letter + ' clicked');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__games_games__["a" /* GamesPage */], { type: this.typeShowing, group: letter });
    };
    return GroupsPage;
}());
GroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-groups',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\groups\groups.html"*/'<!--\n\n  Generated template for the GroupsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Grupos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button menuToggle end class="button button-clear">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full id="triky-button" class="selected" color="triky-button" (click)="clickGroups(\'triky\')">TRIKY</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button full id="fifa-button" color="triky-button" (click)="clickGroups(\'fifa\')">FIFA</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n          <div class="card-triky" margin-bottom padding>\n\n  	<label><ion-icon name="ios-thumbs-up"></ion-icon>Coloca tu pronostico, el los siguientes recuadros de cada partido</label>\n\n</div>\n\n    <ion-item-group class="table-cla">\n\n    <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo A <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'A\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n    <ion-item-group class="notifications" (click)="clickGroup(\'A\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarA"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextA }}</h2>\n\n        <div class="{{ showPlacesA ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesA ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamA1Flag }}" /> {{ teamA1 }} <ion-icon *ngIf="showPlacesA" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamA1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesA ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamA2Flag }}" /> {{ teamA2 }} <ion-icon *ngIf="showPlacesA" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamA2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamA3Flag  }}" /> {{ teamA3 }} <span class="point-g">{{ teamA3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamA4Flag  }}" /> {{ teamA4 }} <span class="point-g">{{ teamA4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div>  \n\n  \n\n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo B <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'B\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n       <ion-item-group class="notifications" (click)="clickGroup(\'B\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarB"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextB }}</h2>\n\n        <div class="{{ showPlacesB ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesB ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamB1Flag }}" /> {{ teamB1 }} <ion-icon *ngIf="showPlacesB" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamB1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesB ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamB2Flag }}" /> {{ teamB2 }} <ion-icon *ngIf="showPlacesB" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamB2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamB3Flag  }}" /> {{ teamB3 }} <span class="point-g">{{ teamB3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamB4Flag  }}" /> {{ teamB4 }} <span class="point-g">{{ teamB4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div> \n\n  \n\n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo C <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'C\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n       <ion-item-group class="notifications" (click)="clickGroup(\'C\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarC"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextC }}</h2>\n\n        <div class="{{ showPlacesC ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesC ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamC1Flag }}" /> {{ teamC1 }} <ion-icon *ngIf="showPlacesC" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamC1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesC ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamC2Flag }}" /> {{ teamC2 }} <ion-icon *ngIf="showPlacesC" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamC2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamC3Flag  }}" /> {{ teamC3 }} <span class="point-g">{{ teamC3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamC4Flag  }}" /> {{ teamC4 }} <span class="point-g">{{ teamC4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div> \n\n  \n\n             <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo D <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'D\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n         <ion-item-group class="notifications" (click)="clickGroup(\'D\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarD"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextD }}</h2>\n\n        <div class="{{ showPlacesD ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesD ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamD1Flag }}" /> {{ teamD1 }} <ion-icon *ngIf="showPlacesD" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamD1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesD ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamD2Flag }}" /> {{ teamD2 }} <ion-icon *ngIf="showPlacesD" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamD2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamD3Flag  }}" /> {{ teamD3 }} <span class="point-g">{{ teamD3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamD4Flag  }}" /> {{ teamD4 }} <span class="point-g">{{ teamD4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div> \n\n  \n\n           <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo E <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'E\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n           <ion-item-group class="notifications" (click)="clickGroup(\'E\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarE"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextA }}</h2>\n\n        <div class="{{ showPlacesE ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesE ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamE1Flag }}" /> {{ teamE1 }} <ion-icon *ngIf="showPlacesE" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamE1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesE ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamE2Flag }}" /> {{ teamE2 }} <ion-icon *ngIf="showPlacesE" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamE2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamE3Flag  }}" /> {{ teamE3 }} <span class="point-g">{{ teamE3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamE4Flag  }}" /> {{ teamE4 }} <span class="point-g">{{ teamE4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div> \n\n  \n\n         <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo F <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'F\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n           <ion-item-group class="notifications" (click)="clickGroup(\'F\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarF"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextF }}</h2>\n\n        <div class="{{ showPlacesF ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesF ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamF1Flag }}" /> {{ teamF1 }} <ion-icon *ngIf="showPlacesF" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamF1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesF ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamF2Flag }}" /> {{ teamF2 }} <ion-icon *ngIf="showPlacesF" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamF2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamF3Flag  }}" /> {{ teamF3 }} <span class="point-g">{{ teamF3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamF4Flag  }}" /> {{ teamF4 }} <span class="point-g">{{ teamF4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div> \n\n  \n\n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo G <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'G\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n         <ion-item-group class="notifications" (click)="clickGroup(\'G\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarG"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextG }}</h2>\n\n        <div class="{{ showPlacesG ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesG ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamG1Flag }}" /> {{ teamG1 }} <ion-icon *ngIf="showPlacesG" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamG1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesG ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamG2Flag }}" /> {{ teamG2 }} <ion-icon *ngIf="showPlacesG" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamG2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamG3Flag  }}" /> {{ teamG3 }} <span class="point-g">{{ teamG3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamG4Flag  }}" /> {{ teamG4 }} <span class="point-g">{{ teamG4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div> \n\n  \n\n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo H <button class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'H\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n\n    <div margin-bottom padding class="card-triky">\n\n       <ion-item-group class="notifications" (click)="clickGroup(\'H\')">\n\n      <!--Ganadores dentro de este bloque-->\n\n        <h2 *ngIf="showInfoBarH"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextH }}</h2>\n\n        <div class="{{ showPlacesH ? \'header-group\' : \'\' }}">\n\n        <ion-item><span class="{{ showPlacesH ? \'\' : \'claf\' }}">1</span><img width="30" height="19"  src="images/{{ teamH1Flag }}" /> {{ teamH1 }} <ion-icon *ngIf="showPlacesH" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamH1Points }} Pts</span></ion-item>\n\n        <ion-item><span class="{{ showPlacesH ? \'\' : \'claf\' }}">2</span><img width="30" height="19"  src="images/{{ teamH2Flag }}" /> {{ teamH2 }} <ion-icon *ngIf="showPlacesH" name="ios-checkmark-circle"></ion-icon> <span class="point-g">{{ teamH2Points }} Pts</span></ion-item>\n\n        </div>\n\n        <!--termina bloque de ganadores-->\n\n        <ion-item><span class="claf">3</span><img width="30" height="19"  src="images/{{ teamH3Flag  }}" /> {{ teamH3 }} <span class="point-g">{{ teamH3Points }} Pts</span></ion-item>\n\n        <ion-item><span class="claf">4</span><img width="30" height="19"  src="images/{{ teamH4Flag  }}" /> {{ teamH4 }} <span class="point-g">{{ teamH4Points }} Pts</span></ion-item>\n\n    </ion-item-group>\n\n  </div> \n\n    </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\groups\groups.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], GroupsPage);

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.postData = function (data, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT + type, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.getData = function (data, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT + url + '?' + data).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_groups_groups__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_games_games__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_stickers_stickers__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_stickers_missing_stickers_missing__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_stickers_repeated_stickers_repeated__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_stickers_match_stickers_match__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__ = __webpack_require__(33);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_groups_groups__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_games_games__["a" /* GamesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_stickers_stickers__["a" /* StickersPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_stickers_missing_stickers_missing__["a" /* StickersMissingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_stickers_repeated_stickers_repeated__["a" /* StickersRepeatedPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_stickers_match_stickers_match__["a" /* StickersMatchPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stickers-match/stickers-match.module#StickersMatchPageModule', name: 'StickersMatchPage', segment: 'stickers-match', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stickers-missing/stickers-missing.module#StickersMissingPageModule', name: 'StickersMissingPage', segment: 'stickers-missing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stickers-repeated/stickers-repeated.module#StickersRepeatedPageModule', name: 'StickersRepeatedPage', segment: 'stickers-repeated', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stickers/stickers.module#StickersPageModule', name: 'StickersPage', segment: 'stickers', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_groups_groups__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_games_games__["a" /* GamesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_stickers_stickers__["a" /* StickersPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_stickers_missing_stickers_missing__["a" /* StickersMissingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_stickers_repeated_stickers_repeated__["a" /* StickersRepeatedPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_stickers_match_stickers_match__["a" /* StickersMatchPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_21__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__providers_helper__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__["a" /* Network */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, navParams, authService, helper, formBuilder, network, zone, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.network = network;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.login = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
        this.tabBarElement = document.querySelector('#tabs div.tabbar');
        if (this.tabBarElement)
            this.tabBarElement.style.display = 'none';
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    LoginPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(LoginPage_1);
    };
    LoginPage.prototype.attemptUserLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var data = { type: 'cred', e: this.login.value.email, p: this.login.value.pwd };
        this.authService.postData(data, '/cred.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            if (_this.responseData.status == "ok") {
                localStorage.setItem('userEmail', _this.login.value.email);
                localStorage.setItem('userID', _this.responseData.user[0].id);
                localStorage.setItem('UserLoggedIn', 'true');
                localStorage.setItem('UserLoggedGroup', _this.responseData.user[0].grupo);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                // reaparece el nav bar
                _this.tabBarElement.style.display = null;
            }
            else {
                _this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
            }
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.helper.gapAlert('Error en logueo', err);
        });
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>    \n\n  <div ng-show="true">\n\n        <div class="list card cardprogram">\n\n            <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n\n            <div padding class="item item-body">\n\n                <p text-center padding margin-bottom><img width="70%" height="auto"  src="images/trikygol-green.png" /></p>\n\n                <div padding margin-bottom class="card-triky"><label>\n\n                   <ion-icon name="information-circle"></ion-icon> Por favor introduce la información de tu cuenta\n\n                </label></div>\n\n\n\n                <div padding margin-bottom class="card-triky">\n\n                         <ion-item>\n\n                    <ion-input type="text" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n\n                </ion-item>\n\n                <br>\n\n                <ion-item>\n\n                    <ion-input type="password" placeholder="Contraseña" formControlName="pwd"></ion-input>\n\n                </ion-item>\n\n                </div>\n\n                <br>\n\n                <button ion-button full type="submit" class="button button-calm" [disabled]="!login.valid">INGRESAR</button>\n\n                <br>\n\n                <div style="text-align:center">\n\n                <div ion-button clear (click)="openRegister()">\n\n                    Crear una cuenta\n\n                </div>\n\n                <br>\n\n                <div ion-button clear (click)="openForgot()">\n\n                    Olvide mi contraseña\n\n                </div>\n\n                </div>\n\n\n\n            </div>\n\n            </form>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_stickers_stickers__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, helper, events, splashScreen) {
        this.helper = helper;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */], type: 'root', icon: 'home' },
            { title: 'FIGURITAS', component: __WEBPACK_IMPORTED_MODULE_6__pages_stickers_stickers__["a" /* StickersPage */], type: 'root', icon: '' },
            { title: 'PERFIL', component: __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */], type: 'push', icon: 'person' },
            { title: 'LOGOUT', component: null, type: 'logout', icon: 'log-out' }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.type == 'logout')
            this.events.publish('logout');
        else if (page.type == 'root')
            this.nav.setRoot(page.component);
        else
            this.nav.push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n   <p text-center><img width="70%" height="auto"  src="images/trikygol-white.png" /></p>\n\n    <ion-list>\n\n      <button menuClose ion-item class="item item-block item-md {{ p.icon }}" *ngFor="let p of pages" (click)="openPage(p)">\n\n        <label class="item-content"></label>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_forgot__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authService, helper, formBuilder, events, network, zone, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.events = events;
        this.network = network;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.showLogout = false;
        this.emailValue = '';
        this.nameValue = '';
        this.groupValue = '';
        this.passwordStar = '';
        this.submitText = '';
        this.showDuplicateText = false;
        // Quitar password de las validaciones al hacer submit
        this.isLoggedIn = localStorage.getItem('UserLoggedIn') == 'true';
        if (localStorage.getItem('UserLoggedIn') == 'true') {
            this.register = this.formBuilder.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                name: [''],
                pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6)],
                group: ['']
            });
        }
        else {
            this.register = this.formBuilder.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
                name: [''],
                pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6)])],
                group: ['']
            });
        }
        if (localStorage.getItem('UserLoggedIn') == 'true') {
            this.submitText = 'GUARDAR';
            this.passwordStar = '';
            this.showLogout = true;
            var data = { e: localStorage.getItem('userID') };
            this.authService.postData(data, '/userExists.php').then(function (result) {
                _this.responseData = result;
                _this.emailValue = _this.responseData[0].email;
                _this.nameValue = _this.responseData[0].nombre;
                _this.groupValue = _this.responseData[0].grupo;
            });
        }
        else {
            this.submitText = 'REGISTRAR';
            this.passwordStar = '*';
        }
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    RegisterPage.prototype.ionViewDidLeave = function () {
        this.events.publish('reloadPositionTable');
    };
    RegisterPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__forgot_forgot__["a" /* ForgotPage */]);
    };
    RegisterPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.attemptUserRegister = function () {
        var _this = this;
        this.showDuplicateText = false;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var data = { n: this.register.value.name, c: localStorage.getItem('userEmail'), e: this.register.value.email, p: this.register.value.pwd, g: this.register.value.group };
        this.authService.postData(data, localStorage.getItem('UserLoggedIn') == 'true' ? '/updateUser.php' : '/createUser.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //localStorage.setItem('loginData', JSON.stringify(this.responseData));
                localStorage.setItem('userEmail', _this.register.value.email);
                if (_this.register.value.group.length > 0)
                    localStorage.setItem('UserLoggedGroup', _this.register.value.group);
                else
                    localStorage.setItem('UserLoggedGroup', 'null');
                if (localStorage.getItem('UserLoggedIn') == 'false')
                    localStorage.setItem('userID', _this.responseData.id);
                if (localStorage.getItem('UserLoggedIn') == 'true')
                    _this.helper.gapAlert('Perfil actualizado con exito', 'Perfil');
                else {
                    localStorage.setItem('UserLoggedIn', 'true');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                // reaparece el nav bar
                _this.tabBarElement = document.querySelector('#tabs div.tabbar');
                if (_this.tabBarElement)
                    _this.tabBarElement.style.display = null;
            }
            else if (_this.responseData.msg == 'duplicate') {
                _this.showDuplicateText = true;
            }
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.helper.gapAlert('Error en registro', err);
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Registrarse</ion-title>\n\n        <ion-buttons end *ngIf="showLogout">\n\n            <button id="logout" (click)="logout()">\n\n           Logout\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div ng-show="true">\n\n\n\n        <div class="list card cardprogram">\n\n            <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n\n                <div class="item item-body">\n\n                    <p text-center padding margin-bottom><img width="70%" height="auto"  src="images/trikygol-green.png" /></p>\n\n              <div padding margin-bottom class="card-triky"><label>\n\n                   <ion-icon name="information-circle"></ion-icon> Por favor llene sus datos en el siguiente formulario\n\n                </label>\n\n</div>\n\n                    <div padding class="card-triky">\n\n                        <ion-item>\n\n                            <ion-input value="{{ emailValue }}" type="email" placeholder="Email*" autocapitalize="none" formControlName="email"></ion-input>\n\n                        </ion-item>\n\n                        <br/>\n\n                        <ion-item>\n\n                            <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n\n                        </ion-item>\n\n                        <br/>\n\n                        <ion-item>\n\n                            <ion-input type="text" placeholder="Codigo de grupo" value="{{ groupValue }}" formControlName="group"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n                        <ion-item>\n\n                            <ion-input type="password" placeholder="Contraseña{{ passwordStar }}" formControlName="pwd"></ion-input>\n\n                        </ion-item>\n\n                    </div>\n\n                    <br>\n\n                    <button ion-button full type="submit" class="button button-calm" [disabled]="!register.valid">{{ submitText }}</button>\n\n                    <label class="error" *ngIf="showDuplicateText">Este correo ya existe, intente otro</label>\n\n                    <br>\n\n                    <div style="text-align:center">\n\n                                            <div *ngIf="!isLoggedIn" ion-button clear (click)="openLogin()">\n\n                        Ya tengo una cuenta\n\n                    </div>\n\n                    <br/>\n\n                    <div *ngIf="!isLoggedIn" ion-button clear (click)="openForgot()">\n\n                        Olvide mi contraseña\n\n                    </div>\n\n                    </div>\n\n\n\n                </div>\n\n            </form>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__games_games__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, helper, events, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.helper = helper;
        this.events = events;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__groups_groups__["a" /* GroupsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__games_games__["a" /* GamesPage */];
        this.tab8vosParam = { mode: '8', type: 'triky' };
        this.tab4tosParam = { mode: '4', type: 'triky' };
        this.tabSemiFinalParam = { mode: 'semifinal', type: 'triky' };
        this.tabFinalParam = { mode: 'final', type: 'triky' };
        this.events.subscribe('logout', function () {
            //call method to refresh content
            _this.logout();
        });
    }
    TabsPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\tabs\tabs.html"*/'<ion-tabs id="tabs">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Grupos" tabIcon="ios-browsers"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="8vos" [rootParams]="tab8vosParam"  tabIcon="ios-list-box"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="4tos" [rootParams]="tab4tosParam" tabIcon="md-expand"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Semi" [rootParams]="tabSemiFinalParam" tabIcon="ios-star"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Final" [rootParams]="tabFinalParam" tabIcon="ios-trophy"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
//export var Constants = {  };
//export var Constants = {  };
var Constants = {
    //API_ENDPOINT : '/ws/',
    API_ENDPOINT: 'https://www.esferasoluciones.com/api/trikygol/',
    months: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    stickers: [
        { name: 'Simbolos', range: [0, 7] },
        { name: 'Estadios', range: [8, 19] },
        { name: 'Rusia', range: [20, 39] },
        { name: 'Arabia Saudita', range: [40, 59] },
        { name: 'Egipto', range: [60, 79] },
        { name: 'Urugay', range: [80, 99] },
        { name: 'Portugal', range: [100, 119] },
        { name: 'España', range: [120, 139] },
        { name: 'Marruecos', range: [140, 159] },
        { name: 'Iran', range: [160, 179] },
        { name: 'Francia', range: [180, 199] },
        { name: 'Australia', range: [200, 219] },
        { name: 'Peru', range: [220, 239] },
        { name: 'Dinamarca', range: [240, 259] },
        { name: 'Argentina', range: [260, 279] },
        { name: 'Islandia', range: [280, 299] },
        { name: 'Croacia', range: [300, 319] },
        { name: 'Nigeria', range: [320, 339] },
        { name: 'Brasil', range: [340, 359] },
        { name: 'Suiza', range: [360, 379] },
        { name: 'Costa Rica', range: [380, 399] },
        { name: 'Serbia', range: [400, 419] },
        { name: 'Alemania', range: [420, 439] },
        { name: 'Mexico', range: [440, 459] },
        { name: 'Suecia', range: [460, 479] },
        { name: 'Corea del Sur', range: [480, 499] },
        { name: 'Bélgica', range: [500, 519] },
        { name: 'Panamá', range: [520, 539] },
        { name: 'Túnez', range: [540, 559] },
        { name: 'Inglaterra', range: [560, 579] },
        { name: 'Polonia', range: [580, 599] },
        { name: 'Senegal', range: [600, 619] },
        { name: 'Colombia', range: [620, 639] },
        { name: 'Japón', range: [640, 659] },
        { name: 'Leyendas', range: [660, 669] },
    ]
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(loadingCtrl, navCtrl, navParams, authService, helper, formBuilder, network, zone) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.network = network;
        this.zone = zone;
        this.showSent = false;
        this.forgot = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.showSent = false;
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    ForgotPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ForgotPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    ForgotPage.prototype.attemptUserForgot = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var data = { type: 'cred', e: this.forgot.value.email };
        this.authService.postData(data, '/sendMail.php').then(function (result) {
            loading.dismiss();
            _this.showSent = true;
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.helper.gapAlert('Error en logueao', err);
        });
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the ForgotPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Recuperar mi contraseña</ion-title>\n\n    </ion-navbar>\n\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div ng-show="true">\n\n\n\n        <div class="list card cardprogram">\n\n            <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n\n                <div class="item item-body">\n\n                    <div margin-bottom padding class="card-triky"><label>\n\n                   <ion-icon name="information-circle"></ion-icon> Por favor introduce la información de tu cuenta\n\n                </label>\n\n                    </div>\n\n                    <div margin-bottom padding class="card-triky">\n\n\n\n                        <ion-item *ngIf="!showSent">\n\n                            <ion-input type="email" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n\n                        </ion-item>\n\n\n\n                    </div>\n\n                    <div style="text-align:center">\n\n                        <br *ngIf="!showSent">\n\n                        <button ion-button full type="submit" class="button button-calm" [disabled]="!forgot.valid" *ngIf="!showSent">ENVIAR</button>\n\n                        <!--<br *ngIf="!showSent">-->\n\n                        <!--<br *ngIf="!showSent">-->\n\n                        <label class="lorems lorems-content" *ngIf="showSent">\n\n                   Una nueva contraseña ha sido enviada a la direccion de correo que envio<br>Por favor, le recomendamos que la cambie tan pronto vuelva a entrar\n\n                </label>\n\n                        <br/>\n\n                        <div ion-button clear (click)="openRegister()">\n\n                            Registrarse\n\n                        </div>\n\n                        <br/>\n\n                        <div ion-button clear (click)="openLogin()">\n\n                            Login\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </form>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamesPage = (function () {
    function GamesPage(navCtrl, authService, navParams, helper, events, loadingCtrl, network, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.zone = zone;
        this.GroupGames = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            formGameId1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador1_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador1_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formGameId2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador2_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador2_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formGameId3: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador3_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador3_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formGameId4: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador4_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador4_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formGameId5: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador5_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador5_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formGameId6: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador6_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador6_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formGameId7: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador7_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador7_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formGameId8: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador8_1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
            formMarcador8_2: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](),
        });
        this.mode = navParams.get('mode');
        if (typeof this.mode !== 'undefined') {
            this.trikyButtonId = 'triky-button-' + this.mode;
            this.fifaButtonId = 'fifa-button-' + this.mode;
        }
        else {
            this.trikyButtonId = 'triky-button-';
            this.fifaButtonId = 'fifa-button-';
        }
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    GamesPage.prototype.ionViewDidEnter = function () {
        this.saveButtonText = 'Guardar';
        this.mode = this.navParams.get('mode');
        this.isPlayoff = (typeof this.mode === 'undefined');
        this.showGameMenu = (typeof this.mode !== 'undefined');
        this.isFifa = this.navParams.get('type') == 'fifa';
        this.displaySelectedSource(this.navParams.get('type'));
        this.showMenuToggle = true;
        if (this.isPlayoff) {
            this.showMenuToggle = false;
            this.group = this.navParams.get('group');
            this.gamesTitle = "Juegos Grupo " + this.group;
            this.loadGames(1);
        }
        else {
            this.loadPlayOffs();
        }
    };
    // Despliega seleccionado el boton de Triky o Fifa
    GamesPage.prototype.displaySelectedSource = function (source) {
        var oppositeSource = source == 'fifa' ? 'triky' : 'fifa';
        var currentSelectedButton = document.querySelector('page-games button.selected#' + oppositeSource + '-button-' + this.mode);
        if (currentSelectedButton != null) {
            document.querySelector('page-games button.selected#' + oppositeSource + '-button-' + this.mode).className = currentSelectedButton.className.replace(/ selected/g, '');
        }
        else {
            currentSelectedButton = document.querySelector('page-games #' + source + '-button-' + (typeof this.mode === 'undefined' ? '' : this.mode));
            if (currentSelectedButton != null)
                currentSelectedButton.className += ' selected';
        }
        this.isFifa = source == 'fifa';
    };
    GamesPage.prototype.loadPlayOffs = function () {
        switch (this.mode) {
            case '8':
                this.gamesTitle = '8vos de final';
                this.loadGames(2);
                console.log('octavos');
                break;
            case '4':
                this.gamesTitle = '4tos de final';
                this.loadGames(3);
                console.log('cuartos');
                break;
            case 'semifinal':
                this.gamesTitle = 'Semifinales';
                this.loadGames(4);
                console.log('semifinal');
                break;
            case 'final':
                this.gamesTitle = 'Finales';
                this.loadGames(5);
                console.log('final');
                break;
        }
    };
    GamesPage.prototype.loadGames = function (gameType) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        if (typeof localStorage.getItem('userID') === 'undefined' || localStorage.getItem('userID') == '') {
            loading.dismiss();
            this.helper.logout();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        }
        this.showGame5 = false;
        this.showGame6 = false;
        this.showGame7 = false;
        this.showGame8 = false;
        var url = this.isFifa ? '/getGamesByGroup.php' : '/getGamesByUserAndGroup.php';
        var data = '';
        switch (gameType) {
            case 1:
                data = this.isFifa ? 'g=' + this.group.toLowerCase() : 'g=' + this.group.toLowerCase() + '&u=' + localStorage.getItem('userID');
                break;
            case 2:
                url = this.isFifa ? '/getGamesOn8th.php' : '/getGamesByUserOn8th.php';
                data = this.isFifa ? '' : 'u=' + localStorage.getItem('userID');
                break;
            case 3:
                url = this.isFifa ? '/getGamesOn4th.php' : '/getGamesByUserOn4th.php';
                data = this.isFifa ? '' : 'u=' + localStorage.getItem('userID');
                break;
            case 4: // semifinal
            case 5: // 3er lugar y final
            case 6:
                url = this.isFifa ? '/getGamesOnFinals.php' : '/getGamesByUserOnFinals.php';
                data = 't=' + (gameType == 4 ? 'semi' : 'final') + '&' + (this.isFifa ? '' : 'u=' + localStorage.getItem('userID'));
                break;
        }
        this.authService.getData(data, url).then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            if (gameType == 4) {
                _this.gameTitle1 = " - Semifinal";
                _this.gameTitle2 = " - Semifinal";
            }
            else if (gameType == 5 || gameType == 6) {
                _this.gameTitle1 = " - 3er puesto";
                _this.gameTitle2 = " - FINAL";
            }
            for (var i = 0; i < _this.responseData.length; i++) {
                var juego = _this.responseData[i];
                var gameId = juego.id;
                var date = _this.helper.formatDate(juego.fecha);
                var bandera1 = juego.bandera1 != null && juego.bandera1.length > 0 ? juego.bandera1 : 'noflag.png';
                var marcador1 = juego.equipo1marcador;
                var equipo1 = juego.equipo1;
                var bandera2 = juego.bandera2 != null && juego.bandera2.length > 0 ? juego.bandera2 : 'noflag.png';
                var marcador2 = juego.equipo2marcador;
                var equipo2 = juego.equipo2;
                switch (i) {
                    case 0:
                        _this.showGame1 = true;
                        _this.gameId1 = gameId;
                        _this.date1 = date;
                        _this.bandera1_1 = bandera1;
                        _this.marcador1_1 = marcador1;
                        _this.equipo1_1 = equipo1;
                        _this.bandera1_2 = bandera2;
                        _this.marcador1_2 = marcador2;
                        _this.equipo1_2 = equipo2;
                        break;
                    case 1:
                        _this.showGame2 = true;
                        _this.gameId2 = gameId;
                        _this.date2 = date;
                        _this.bandera2_1 = bandera1;
                        _this.marcador2_1 = marcador1;
                        _this.equipo2_1 = equipo1;
                        _this.bandera2_2 = bandera2;
                        _this.marcador2_2 = marcador2;
                        _this.equipo2_2 = equipo2;
                        break;
                    case 2:
                        _this.showGame3 = true;
                        _this.gameId3 = gameId;
                        _this.date3 = date;
                        _this.bandera3_1 = bandera1;
                        _this.marcador3_1 = marcador1;
                        _this.equipo3_1 = equipo1;
                        _this.bandera3_2 = bandera2;
                        _this.marcador3_2 = marcador2;
                        _this.equipo3_2 = equipo2;
                        break;
                    case 3:
                        _this.showGame4 = true;
                        _this.gameId4 = gameId;
                        _this.date4 = date;
                        _this.bandera4_1 = bandera1;
                        _this.marcador4_1 = marcador1;
                        _this.equipo4_1 = equipo1;
                        _this.bandera4_2 = bandera2;
                        _this.marcador4_2 = marcador2;
                        _this.equipo4_2 = equipo2;
                        break;
                    case 4:
                        _this.showGame5 = true;
                        _this.gameId5 = gameId;
                        _this.date5 = date;
                        _this.bandera5_1 = bandera1;
                        _this.marcador5_1 = marcador1;
                        _this.equipo5_1 = equipo1;
                        _this.bandera5_2 = bandera2;
                        _this.marcador5_2 = marcador2;
                        _this.equipo5_2 = equipo2;
                        break;
                    case 5:
                        _this.showGame6 = true;
                        _this.gameId6 = gameId;
                        _this.date6 = date;
                        _this.bandera6_1 = bandera1;
                        _this.marcador6_1 = marcador1;
                        _this.equipo6_1 = equipo1;
                        _this.bandera6_2 = bandera2;
                        _this.marcador6_2 = marcador2;
                        _this.equipo6_2 = equipo2;
                        break;
                    case 6:
                        _this.showGame7 = true;
                        _this.gameId7 = gameId;
                        _this.date7 = date;
                        _this.bandera7_1 = bandera1;
                        _this.marcador7_1 = marcador1;
                        _this.equipo7_1 = equipo1;
                        _this.bandera7_2 = bandera2;
                        _this.marcador7_2 = marcador2;
                        _this.equipo7_2 = equipo2;
                        break;
                    case 7:
                        _this.showGame8 = true;
                        _this.gameId8 = gameId;
                        _this.date8 = date;
                        _this.bandera8_1 = bandera1;
                        _this.marcador8_1 = marcador1;
                        _this.equipo8_1 = equipo1;
                        _this.bandera8_2 = bandera2;
                        _this.marcador8_2 = marcador2;
                        _this.equipo8_2 = equipo2;
                        break;
                }
            }
        }, function (error) {
            _this.isDeviceOnline = false;
            loading.dismiss();
        });
    };
    GamesPage.prototype.saveGroupGames = function () {
        var url = 'updateUserGameScoreById.php';
        var data = '';
        var games = '';
        var scores1 = '';
        var scores2 = '';
        if (this.GroupGames.value.formMarcador1_1 && this.GroupGames.value.formMarcador1_2) {
            games = this.GroupGames.value.formGameId1 + ',';
            scores1 = this.GroupGames.value.formMarcador1_1 + ',';
            scores2 = this.GroupGames.value.formMarcador1_2 + ',';
        }
        if (this.GroupGames.value.formMarcador2_1 && this.GroupGames.value.formMarcador2_2) {
            games += this.GroupGames.value.formGameId2 + ',';
            scores1 += this.GroupGames.value.formMarcador2_1 + ',';
            scores2 += this.GroupGames.value.formMarcador2_2 + ',';
        }
        if (this.GroupGames.value.formMarcador3_1 && this.GroupGames.value.formMarcador3_2) {
            games += this.GroupGames.value.formGameId3 + ',';
            scores1 += this.GroupGames.value.formMarcador3_1 + ',';
            scores2 += this.GroupGames.value.formMarcador3_2 + ',';
        }
        if (this.GroupGames.value.formMarcador4_1 && this.GroupGames.value.formMarcador4_2) {
            games += this.GroupGames.value.formGameId4 + ',';
            scores1 += this.GroupGames.value.formMarcador4_1 + ',';
            scores2 += this.GroupGames.value.formMarcador4_2 + ',';
        }
        if (this.GroupGames.value.formMarcador5_1 && this.GroupGames.value.formMarcador5_2) {
            games += this.GroupGames.value.formGameId5 + ',';
            scores1 += this.GroupGames.value.formMarcador5_1 + ',';
            scores2 += this.GroupGames.value.formMarcador5_2 + ',';
        }
        if (this.GroupGames.value.formMarcador6_1 && this.GroupGames.value.formMarcador6_2) {
            games += this.GroupGames.value.formGameId6 + ',';
            scores1 += this.GroupGames.value.formMarcador6_1 + ',';
            scores2 += this.GroupGames.value.formMarcador6_2 + ',';
        }
        if (this.GroupGames.value.formMarcador7_1 && this.GroupGames.value.formMarcador7_2) {
            games += this.GroupGames.value.formGameId7 + ',';
            scores1 += this.GroupGames.value.formMarcador7_1 + ',';
            scores2 += this.GroupGames.value.formMarcador7_2 + ',';
        }
        if (this.GroupGames.value.formMarcador8_1 && this.GroupGames.value.formMarcador8_2) {
            games += this.GroupGames.value.formGameId8 + ',';
            scores1 += this.GroupGames.value.formMarcador8_1 + ',';
            scores2 += this.GroupGames.value.formMarcador8_2 + ',';
        }
        data = 'g=' + games + '&s1=' + scores1 + '&s2=' + scores2 + '&u=' + localStorage.getItem('userID');
        this.saveButtonText = 'Guardando...';
        var $this = this;
        this.authService.getData(data, url).then(function (result) {
            $this.saveButtonText = 'Guardado';
            if ($this.isPlayoff) {
                $this.navCtrl.popToRoot();
                $this.events.publish('reloadGroups');
            }
            else {
                setTimeout(function () { $this.saveButtonText = 'Guardar'; }, 8000);
            }
            console.log('saved');
        });
    };
    GamesPage.prototype.clickGames = function (type) {
        this.displaySelectedSource(type);
        this.loadPlayOffs();
    };
    return GamesPage;
}());
GamesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-games',template:/*ion-inline-start:"c:\Users\lsanc\projects\trikygol\src\pages\games\games.html"*/'<!--\n\n  Generated template for the GamesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ gamesTitle }}</ion-title>\n\n    <ion-buttons end *ngIf="showMenuToggle">\n\n      <button ion-button menuToggle end class="button button-clear">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n<ion-content padding>\n\n<!-- Generated template for the TrikyGamesComponent component -->\n\n    <ion-grid *ngIf="!isPlayoff">\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button full id="{{ trikyButtonId }}" color="triky-button" (click)="clickGames(\'triky\')">TRIKY</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button full id="{{ fifaButtonId }}" color="triky-button" (click)="clickGames(\'fifa\')">FIFA</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <div class="card-triky" margin-bottom padding>\n\n  	<label style="white-space: normal !important;"><ion-icon name="ios-thumbs-up"></ion-icon>Coloca tu pronostico, el los siguientes recuadros de cada partido</label>\n\n</div>\n\n    <form [formGroup]="GroupGames" (ngSubmit)="saveGroupGames()">\n\n    	<div *ngIf="showGame1">\n\n        	<ion-input type="hidden" value="{{ gameId1 }}" formControlName="formGameId1"></ion-input>\n\n            <div class="date">{{ date1 }}{{ gameTitle1 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera1_1 }}" /></ion-col>\n\n                        <ion-col><label>{{ equipo1_1 }}</label></ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador1_1 }}" formControlName="formMarcador1_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera1_2 }}"/></ion-col>\n\n                		<ion-col><label>{{ equipo1_2 }}</label></ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador1_2 }}" formControlName="formMarcador1_2"></ion-input>\n\n                        </ion-col>\n\n                	</ion-row>\n\n            	</ion-grid>\n\n        	</div>\n\n    	</div>\n\n    	\n\n    	<div *ngIf="showGame2">\n\n    	    <ion-input type="hidden" value="{{ gameId2 }}" formControlName="formGameId2"></ion-input>\n\n            <div class="date">{{ date2 }}{{ gameTitle2 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera2_1 }}" /></ion-col>\n\n                        <ion-col>{{ equipo2_1 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador2_1 }}" formControlName="formMarcador2_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera2_2 }}"/></ion-col>\n\n                		<ion-col>{{ equipo2_2 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador2_2 }}" formControlName="formMarcador2_2"></ion-input>\n\n                        </ion-col>\n\n                	</ion-row>\n\n                </ion-grid>\n\n        	</div>	\n\n    	</div>\n\n    	\n\n    	<div *ngIf="showGame3">\n\n    	   <ion-input type="hidden" value="{{ gameId3 }}" formControlName="formGameId3"></ion-input>\n\n            <div class="date">{{ date3 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera3_1 }}" /></ion-col>\n\n                        <ion-col>{{ equipo3_1 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador3_1 }}" formControlName="formMarcador3_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                     <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera3_2 }}"/></ion-col>\n\n                		<ion-col>{{ equipo3_2 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador3_2 }}" formControlName="formMarcador3_2"></ion-input>\n\n                        </ion-col>\n\n                	</ion-row>\n\n                </ion-grid>\n\n        	</div>	\n\n    	</div>	\n\n    	\n\n    	<div *ngIf="showGame4">\n\n        	<ion-input type="hidden" value="{{ gameId4 }}" formControlName="formGameId4"></ion-input>\n\n            <div class="date">{{ date4 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera4_1 }}" /></ion-col>\n\n                        <ion-col>{{ equipo4_1 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador4_1 }}" formControlName="formMarcador4_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera4_2 }}"/></ion-col>\n\n                		<ion-col>{{ equipo4_2 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador4_2 }}" formControlName="formMarcador4_2"></ion-input>\n\n                        </ion-col>\n\n            	    </ion-row>\n\n                </ion-grid>\n\n        	</div>	\n\n    	</div>	\n\n    	\n\n    	\n\n    	<div *ngIf="showGame5">\n\n        	<ion-input type="hidden" value="{{ gameId5 }}" formControlName="formGameId5"></ion-input>\n\n            <div class="date">{{ date5 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera5_1 }}" /></ion-col>\n\n                        <ion-col>{{ equipo5_1 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador5_1 }}" formControlName="formMarcador5_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera5_2 }}"/></ion-col>\n\n                		<ion-col>{{ equipo5_2 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador5_2 }}" formControlName="formMarcador5_2"></ion-input>\n\n                        </ion-col>\n\n                	</ion-row>\n\n                </ion-grid>\n\n        	</div>\n\n    	</div>\n\n    	\n\n    	<div *ngIf="showGame6">\n\n    	    <ion-input type="hidden" value="{{ gameId6 }}" formControlName="formGameId6"></ion-input>\n\n            <div class="date">{{ date6 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28" src="images/{{ bandera6_1 }}" /></ion-col>\n\n                        <ion-col>{{ equipo6_1 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador6_1 }}" formControlName="formMarcador6_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera6_2 }}"/></ion-col>\n\n                		<ion-col>{{ equipo6_2 }}</ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador6_2 }}" formControlName="formMarcador6_2"></ion-input>\n\n                        </ion-col>\n\n                	</ion-row>\n\n                </ion-grid>\n\n        	</div>\n\n    	</div>\n\n    	\n\n    	<div *ngIf="showGame7">\n\n        	<ion-input type="hidden" value="{{ gameId7 }}" formControlName="formGameId7"></ion-input>\n\n            <div class="date">{{ date7 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera7_1 }}" /></ion-col>\n\n                        <ion-col><label>{{ equipo7_1 }}</label></ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador7_1 }}" formControlName="formMarcador7_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera7_2 }}"/></ion-col>\n\n                		<ion-col><label>{{ equipo7_2 }}</label></ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador7_2 }}" formControlName="formMarcador7_2"></ion-input>\n\n                        </ion-col>\n\n                	</ion-row>\n\n            	</ion-grid>\n\n        	</div>\n\n    	</div>\n\n    	\n\n    	<div *ngIf="showGame8">\n\n        	<ion-input type="hidden" value="{{ gameId8 }}" formControlName="formGameId8"></ion-input>\n\n            <div class="date">{{ date8 }}</div>\n\n            <div margin-bottom class="card-triky">\n\n                <ion-grid>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera8_1 }}" /></ion-col>\n\n                        <ion-col><label>{{ equipo8_1 }}</label></ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador8_1 }}" formControlName="formMarcador8_1"></ion-input>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <span class="line-score"></span>\n\n                    <ion-row class="scores">\n\n                        <ion-col><img width="42" height="28"  src="images/{{ bandera8_2 }}"/></ion-col>\n\n                		<ion-col><label>{{ equipo8_2 }}</label></ion-col>\n\n                        <ion-col>\n\n                            <ion-input *ngIf="!isFifa" type="number" value="{{ marcador8_2 }}" formControlName="formMarcador8_2"></ion-input>\n\n                        </ion-col>\n\n                	</ion-row>\n\n            	</ion-grid>\n\n        	</div>\n\n    	</div>\n\n    	\n\n        <button ion-button full type="submit" class="button button-calm" *ngIf="!isFifa">{{ saveButtonText }}</button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\trikygol\src\pages\games\games.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], GamesPage);

//# sourceMappingURL=games.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map