webpackJsonp([4],{

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot/forgot.module": [
		280,
		3
	],
	"../pages/games/games.module": [
		282,
		2
	],
	"../pages/login/login.module": [
		281,
		1
	],
	"../pages/register/register.module": [
		283,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__groups_groups__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__games_games__ = __webpack_require__(60);
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
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__groups_groups__["a" /* GroupsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__games_games__["a" /* GamesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.tab8vosParam = { mode: '8', type: 'triky' };
        this.tab4tosParam = { mode: '4', type: 'triky' };
        this.tabFinalParam = { mode: 'final', type: 'triky' };
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabs">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Grupos" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="8vos" [rootParams]="tab8vosParam"  tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="4tos" [rootParams]="tab4tosParam" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Finales" [rootParams]="tabFinalParam" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__games_games__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(34);
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
    function GroupsPage(navCtrl, authService, navParams, helper, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.defaultFillScoresText = "Click para llenar los marcadores";
        this.displayGroupsAndTeams('triky');
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
    }
    GroupsPage.prototype.displayGroupsAndTeams = function (_source) {
        // HACER EL PHP "getFirstSecondTeams.php" QUE TRAIGA TODOS LOS EQUIPOS POR GRUPOS
        var _this = this;
        this.authService.getData('source=' + _source, '/getFirstSecondTeams.php').then(function (result) {
            _this.responseData = result;
            _this.typeShowing = _source;
            _this.noWrapA = "noWrap";
            _this.noWrapB = "noWrap";
            _this.noWrapC = "noWrap";
            _this.noWrapD = "noWrap";
            _this.noWrapE = "noWrap";
            _this.noWrapF = "noWrap";
            _this.noWrapG = "noWrap";
            _this.noWrapH = "noWrap";
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
                        _this.noWrapA = "col";
                        _this.teamA1 = grupo.team1.nombre;
                        _this.teamA2 = grupo.team2.nombre;
                        _this.teamA3 = grupo.team3.nombre;
                        _this.teamA4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstA = grupo.firstname;
                            _this.secondA = grupo.secondname;
                        }
                        break;
                    case 'b':
                        _this.noWrapB = "col";
                        _this.teamB1 = grupo.team1.nombre;
                        _this.teamB2 = grupo.team2.nombre;
                        _this.teamB3 = grupo.team3.nombre;
                        _this.teamB4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstB = grupo.firstname;
                            _this.secondB = grupo.secondname;
                        }
                        break;
                    case 'c':
                        _this.noWrapC = "col";
                        _this.teamC1 = grupo.team1.nombre;
                        _this.teamC2 = grupo.team2.nombre;
                        _this.teamC3 = grupo.team3.nombre;
                        _this.teamC4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstC = grupo.firstname;
                            _this.secondC = grupo.secondname;
                        }
                        break;
                    case 'd':
                        _this.noWrapD = "col";
                        _this.teamD1 = grupo.team1.nombre;
                        _this.teamD2 = grupo.team2.nombre;
                        _this.teamD3 = grupo.team3.nombre;
                        _this.teamD4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstD = grupo.firstname;
                            _this.secondD = grupo.secondname;
                        }
                        break;
                    case 'e':
                        _this.noWrapE = "col";
                        _this.teamE1 = grupo.team1.nombre;
                        _this.teamE2 = grupo.team2.nombre;
                        _this.teamE3 = grupo.team3.nombre;
                        _this.teamE4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstE = grupo.firstname;
                            _this.secondE = grupo.secondname;
                        }
                        break;
                    case 'f':
                        _this.noWrapF = "col";
                        _this.teamF1 = grupo.team1.nombre;
                        _this.teamF2 = grupo.team2.nombre;
                        _this.teamF3 = grupo.team3.nombre;
                        _this.teamF4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstF = grupo.firstname;
                            _this.secondF = grupo.secondname;
                        }
                        break;
                    case 'g':
                        _this.noWrapG = "col";
                        _this.teamG1 = grupo.team1.nombre;
                        _this.teamG2 = grupo.team2.nombre;
                        _this.teamG3 = grupo.team3.nombre;
                        _this.teamG4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstG = grupo.firstname;
                            _this.secondG = grupo.secondname;
                        }
                        break;
                    case 'h':
                        _this.noWrapH = "col";
                        _this.teamH1 = grupo.team1.nombre;
                        _this.teamH2 = grupo.team2.nombre;
                        _this.teamH3 = grupo.team3.nombre;
                        _this.teamH4 = grupo.team4.nombre;
                        if (grupo.firstname.length > 0) {
                            _this.showPlacesA = true;
                            _this.firstH = grupo.firstname;
                            _this.secondH = grupo.secondname;
                        }
                        break;
                }
            }
            /*
            PONER LOS 1ro y 2do lugar de cada equipo
              O PONER SI LOS MARCADORES NO HAN SIDO LLENADOS POR EL USUARIO - PONER VARIABLE showPlaces<LETRA> = TRUE O FALSE
            */
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en al traer grupos', err);
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
        selector: 'page-groups',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/groups/groups.html"*/'<!--\n  Generated template for the GroupsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Grupos</ion-title>\n    <ion-buttons end>\n      <button (click)="logout()">\n        Logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button full id="triky-button" class="selected" color="triky-button" (click)="clickGroups(\'triky\')">TRIKY</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button full id="fifa-button" color="triky-button" (click)="clickGroups(\'fifa\')">FIFA</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item-group>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'A\')">\n          <ion-avatar item-left>\n            <span class="group-letter">A</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesA"><p class="firstPlace">1er {{ firstA }}</p><p class="secondPlace">2do {{ secondA }}</p></div>\n          <h2 *ngIf="!showPlacesA">{{ fillTextA }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamA1 }}</ion-col>\n              <ion-col>{{ teamA2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamA3 }}</ion-col>\n              <ion-col>{{ teamA4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'B\')">\n          <ion-avatar item-left>\n            <span class="group-letter">B</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesB"><p class="firstPlace">1er {{ firstB }}</p><p class="secondPlace">2do {{ secondB }}</p></div>\n          <h2 *ngIf="!showPlacesB">{{ fillTextB }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapB }}">{{ teamB1 }}</ion-col>\n              <ion-col>{{ teamB2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamB3 }}</ion-col>\n              <ion-col>{{ teamB4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'C\')">\n          <ion-avatar item-left>\n            <span class="group-letter">C</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesC"><p class="firstPlace">1er {{ firstC }}</p><p class="secondPlace">2do {{ secondC }}</p></div>\n          <h2 *ngIf="!showPlacesC">{{ fillTextC }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapC }}">{{ teamC1 }}</ion-col>\n              <ion-col>{{ teamC2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamC3 }}</ion-col>\n              <ion-col>{{ teamC4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'D\')">\n          <ion-avatar item-left>\n            <span class="group-letter">D</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesD"><p class="firstPlace">1er {{ firstD }}</p><p class="secondPlace">2do {{ secondD }}</p></div>\n          <h2 *ngIf="!showPlacesD">{{ fillTextD }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapD }}">{{ teamD1 }}</ion-col>\n              <ion-col>{{ teamD2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamD3 }}</ion-col>\n              <ion-col>{{ teamD4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'E\')">\n          <ion-avatar item-left>\n            <span class="group-letter">E</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesE"><p class="firstPlace">1er {{ firstE }}</p><p class="secondPlace">2do {{ secondE }}</p></div>\n          <h2 *ngIf="!showPlacesE">{{ fillTextE }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapE }}">{{ teamE1 }}</ion-col>\n              <ion-col>{{ teamE2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamE3 }}</ion-col>\n              <ion-col>{{ teamE4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'F\')">\n          <ion-avatar item-left>\n            <span class="group-letter">F</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesF"><p class="firstPlace">1er {{ firstF }}</p><p class="secondPlace">2do {{ secondF }}</p></div>\n          <h2 *ngIf="!showPlacesF">{{ fillTextF }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapF }}">{{ teamF1 }}</ion-col>\n              <ion-col>{{ teamF2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamF3 }}</ion-col>\n              <ion-col>{{ teamF4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'G\')">\n          <ion-avatar item-left>\n            <span class="group-letter">G</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesG"><p class="firstPlace">1er {{ firstG }}</p><p class="secondPlace">2do {{ secondG }}</p></div>\n          <h2 *ngIf="!showPlacesG">{{ fillTextG }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapG }}">{{ teamG1 }}</ion-col>\n              <ion-col>{{ teamG2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamG3 }}</ion-col>\n              <ion-col>{{ teamG4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n      <ion-item>\n        <ion-item class="notifications" (click)="clickGroup(\'H\')">\n          <ion-avatar item-left>\n            <span class="group-letter">H</span>\n          </ion-avatar>\n          <div *ngIf="showPlacesH"><p class="firstPlace">1er {{ firstH }}</p><p class="secondPlace">2do {{ secondH }}</p></div>\n          <h2 *ngIf="!showPlacesH">{{ fillTextH }}</h2>\n          <ion-grid>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapH }}">{{ teamH1 }}</ion-col>\n              <ion-col>{{ teamH2 }}</ion-col>\n            </ion-row>\n            <ion-row wrap class="notifications-details">\n              <ion-col class="{{ noWrapA }}">{{ teamH3 }}</ion-col>\n              <ion-col>{{ teamH4 }}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item>\n    </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/groups/groups.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], GroupsPage);

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_groups_groups__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_games_games__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_helper__ = __webpack_require__(30);
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
            __WEBPACK_IMPORTED_MODULE_13__pages_games_games__["a" /* GamesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */]
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
            __WEBPACK_IMPORTED_MODULE_13__pages_games_games__["a" /* GamesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_18__providers_helper__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = { API_ENDPOINT: '/ws' };
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-about',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-contact',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_dialogs__ = __webpack_require__(160);
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
    function HelperService(dialogs) {
        this.dialogs = dialogs;
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
        // desaparece el nav bar
        this.tabBarElement = document.querySelector('#tabs div.tabbar');
        this.tabBarElement.style.display = 'none';
    };
    HelperService.prototype.formatDate = function (date) {
        var _date = new Date(date);
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
    return HelperService;
}());
HelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_dialogs__["a" /* Dialogs */]])
], HelperService);

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(257);
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
            /*.toPromise()
            .then(this.extractData);*/
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(54);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, navParams, authService, helper, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.login = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
        this.tabBarElement = document.querySelector('#tabs div.tabbar');
        this.tabBarElement.style.display = 'none';
    }
    LoginPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(LoginPage_1);
    };
    LoginPage.prototype.attemptUserLogin = function () {
        var _this = this;
        var data = { type: 'cred', e: this.login.value.email, p: this.login.value.pwd };
        this.authService.postData(data, '/cred.php').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.status == "ok") {
                _this.helper.gapAlert('Usuario logueado', 'Login');
                localStorage.setItem('userEmail', _this.login.value.email);
                localStorage.setItem('userID', _this.responseData.user[0].id);
                localStorage.setItem('UserLoggedIn', 'true');
                localStorage.setItem('UserLoggedGroup', _this.responseData.user[0].grupo);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                // reaparece el nav bar
                _this.tabBarElement.style.display = null;
            }
            else {
                _this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
            }
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en logueo', err);
        });
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>    \n  <div ng-show="true">\n        <div class="list card cardprogram">\n            <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n            <div class="item item-body">\n                <label class="lorems lorems-content">\n                   Por favor introduce la información de tu cuenta\n                </label>\n                <br/>\n                <br/>\n                <ion-item>\n                    <ion-input type="text" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n                </ion-item>\n                <br>\n                <ion-item>\n                    <ion-input type="password" placeholder="Contraseña" formControlName="pwd"></ion-input>\n                </ion-item>\n                <br>\n                <button ion-button full type="submit" class="button button-calm" [disabled]="!login.valid">INGRESAR</button>\n                <br>\n                <br>\n                <div ion-button (click)="openRegister()">\n                    REGISTRARSE\n                </div>\n                <div ion-button (click)="openForgot()">\n                    RECUPERAR MI CONTRASEÑA\n                </div>\n\n            </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_forgot__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(54);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authService, helper, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.showLogout = false;
        this.emailValue = '';
        this.nameValue = '';
        this.groupValue = '';
        this.passwordStar = '';
        this.submitText = '';
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
    }
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
        var data = { n: this.register.value.name, c: localStorage.getItem('userEmail'), e: this.register.value.email, p: this.register.value.pwd, g: this.register.value.group };
        this.authService.postData(data, localStorage.getItem('UserLoggedIn') == 'true' ? '/updateUser.php' : '/createUser.php').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //localStorage.setItem('loginData', JSON.stringify(this.responseData));
                localStorage.setItem('userEmail', _this.register.value.email);
                localStorage.setItem('userID', _this.register.value.id);
                localStorage.setItem('UserLoggedIn', 'true');
                if (localStorage.getItem('UserLoggedIn') == 'true')
                    _this.helper.gapAlert('Perfil actualizado con exito', 'Perfil');
                else
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                // reaparece el nav bar
                _this.tabBarElement = document.querySelector('#tabs div.tabbar');
                _this.tabBarElement.style.display = null;
            }
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en registro', err);
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrarse</ion-title>\n    <ion-buttons end *ngIf="showLogout">\n      <button (click)="logout()">\n        Logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div ng-show="true">\n\n        <div class="list card cardprogram">\n            <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n            <div class="item item-body">\n                <label class="lorems lorems-content">\n                   Por favor llene sus datos en el siguiente formulario\n                </label>\n                <br/>\n                <br/>\n                <ion-item>\n                    <ion-input value="{{ emailValue }}" type="email" placeholder="Email*" autocapitalize="none" formControlName="email"></ion-input>\n                </ion-item>\n                <br/>\n                <ion-item>\n                    <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n                </ion-item>\n                <br/>\n                <ion-item>\n                    <ion-input type="text" placeholder="Codigo de grupo" value="{{ groupValue }}" formControlName="group"></ion-input>\n                </ion-item>\n                <br>  \n                <ion-item>\n                    <ion-input type="password" placeholder="Contraseña{{ passwordStar }}" formControlName="pwd"></ion-input>\n                </ion-item>\n                <br>\n                <button ion-button full type="submit" class="button button-calm" [disabled]="!register.valid">{{ submitText }}</button>\n                <br>\n                <br>\n                <div *ngIf="!isLoggedIn" ion-button (click)="openLogin()">\n                    LOGIN\n                </div>\n                <div *ngIf="!isLoggedIn" ion-button (click)="openForgot()">\n                    RECUPERAR MI CONTRASEÑA\n                </div>\n\n            </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
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
    function HomePage(navCtrl, helper, authService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.helper = helper;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.group = this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        });
        if (localStorage.getItem('UserLoggedIn') != 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            return;
        }
        var data = { e: localStorage.getItem('userID') };
        this.authService.postData(data, '/userExists.php').then(function (result) {
            _this.responseUserData = result;
            _this.myPoints = _this.responseUserData.puntos != null ? _this.responseUserData.puntos : '0';
            _this.scoresRight = _this.responseUserData.marcadoresAcertados != null ? _this.responseUserData.marcadoresAcertados : '0';
            _this.tieGames = _this.responseUserData.empates != null ? _this.responseUserData.empates : '0';
            _this.winTeams = _this.responseUserData.equiposGanadores != null ? _this.responseUserData.equiposGanadores : '0';
            _this.passedTeams = _this.responseUserData.equiposClasificados != null ? _this.responseUserData.equiposClasificados : '0';
        });
        this.positionName1 = '';
        this.positionName2 = '';
        this.positionName3 = '';
        this.positionName4 = '';
        this.positionName5 = '';
        this.loadPositionTable();
    }
    HomePage.prototype.loadPositionTable = function () {
        var _this = this;
        this.authService.getData('g=' + localStorage.getItem('UserLoggedGroup'), '/getUsersOrderedPoints.php').then(function (result) {
            _this.responsePositionData = result;
            if (_this.responsePositionData.status == 'no params') {
                _this.positionTable = false;
            }
            else {
                _this.positionTable = true;
                for (var i = 0; i < _this.responsePositionData.length; i++) {
                    var user = _this.responsePositionData[i];
                    var user_data = user.nombre + ' - ' + (user.puntos != null ? user.puntos : 'Sin ') + ' puntos';
                    if (i == 0)
                        _this.positionName1 = user_data;
                    else if (i == 1)
                        _this.positionName2 = user_data;
                    else if (i == 2)
                        _this.positionName3 = user_data;
                    else if (i == 3)
                        _this.positionName4 = user_data;
                    else if (i == 4)
                        _this.positionName5 = user_data;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.attemptJoinGroup = function () {
        var _this = this;
        localStorage.setItem('UserLoggedGroup', this.group.value.code);
        var data = { g: this.group.value.code, u: localStorage.getItem('userID') };
        this.authService.postData(data, '/updateUserGroup.php').then(function (result) {
            _this.responsePositionData = result;
            if (_this.responsePositionData.status == 'ok') {
                _this.loadPositionTable();
            }
        });
    };
    HomePage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TrikyGol</ion-title>\n    <ion-buttons end>\n      <button (click)="logout()">\n        Logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item-group class="people-group">	\n    <ion-item-divider color="grey" class="title" end>Mis puntos: {{ myPoints }}</ion-item-divider>\n  	<ion-label class="entire-text">Conforme se vayan dando los juegos los puntos se iran llenando de acorde a los aciertos en sus pronósticos</ion-label>\n		<ion-grid>\n      <ion-row>\n        <ion-col>\n          <section>\n            <ion-item color="grey-light" no-lines>\n              <p># de marcadores acertados</p>\n              <p padding>{{ scoresRight }}</p>\n            </ion-item>\n          </section>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <section>\n            <ion-item color="grey-light" no-lines>\n              <p># de empates</p>\n              <p padding>{{ tieGames }}</p>\n            </ion-item>\n          </section>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <section>\n            <ion-item color="grey-light" no-lines>\n              <p># de equipos ganadores</p>\n              <p padding>{{ winTeams }}</p>\n            </ion-item>\n          </section>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <section>\n            <ion-item color="grey-light" no-lines>\n              <p># de equipos clasificados(x2)</p>\n              <p padding>{{ passedTeams }}</p>\n            </ion-item>\n          </section>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item-group>\n  <ion-item-group class="people-group positions">\n    <ion-item-divider color="grey" class="title">Tabla de posiciones</ion-item-divider>\n    <div *ngIf="positionTable">\n      <ion-item class="position1">\n        <h1>{{ positionName1 }}</h1>\n      </ion-item>  \n      <ion-item class="position1">{{ positionName2 }}\n      </ion-item>  \n      <ion-item class="position1">{{ positionName3 }}\n      </ion-item>  \n      <ion-item class="position1">{{ positionName4 }}\n      </ion-item>  \n      <ion-item class="position1">{{ positionName5 }}\n      </ion-item>  \n    </div>\n    <div *ngIf="!positionTable">\n      <section>\n        <ion-item color="grey-light" no-lines>\n          <h2>Aún no perteneces a un grupo</h2>\n          <p>Introduce el grupo abajo y dale a "Entrar" para empezar a jugar</p>\n          <form [formGroup]="group" (ngSubmit)="attemptJoinGroup()">\n            <ion-item>\n                <ion-input type="text" placeholder="Código" autocapitalize="none" formControlName="code"></ion-input>\n            </ion-item>\n            <br>\n            <button ion-button full type="submit" class="button button-calm" [disabled]="!group.valid">ENTRAR</button>\n          </form>\n        </ion-item>\n      </section>\n    </div>\n  </ion-item-group>\n  <ion-item-group>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
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
    function ForgotPage(navCtrl, navParams, authService, helper, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.showSent = false;
        this.forgot = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.showSent = false;
    }
    ForgotPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ForgotPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    ForgotPage.prototype.attemptUserForgot = function () {
        var _this = this;
        var data = { type: 'cred', e: this.forgot.value.email };
        this.authService.postData(data, '/sendMail.php').then(function (result) {
            _this.showSent = true;
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en logueao', err);
        });
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/forgot/forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recuperar mi contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div ng-show="true">\n\n        <div class="list card cardprogram">\n            <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n            <div class="item item-body">\n                <label class="lorems lorems-content">\n                   Por favor introduce el email de tu cuenta\n                </label>\n                <br/>\n                <br/>\n                <ion-item  *ngIf="!showSent">\n                    <ion-input type="email" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n                </ion-item>\n                <br *ngIf="!showSent">\n                <button ion-button full type="submit" class="button button-calm" [disabled]="!forgot.valid" *ngIf="!showSent">ENVIAR</button>\n                <br *ngIf="!showSent">\n                <br *ngIf="!showSent">\n                <label class="lorems lorems-content" *ngIf="showSent">\n                   Una nueva contraseña ha sido enviada a la direccion de correo que envio<br>Por favor, le recomendamos que la cambie tan pronto vuelva a entrar\n                </label>\n                <br/>\n                <div ion-button (click)="openRegister()">\n                    REGISTRARSE\n                </div>\n                <div ion-button (click)="openLogin()">\n                    LOGIN\n                </div>\n\n            </div>\n            </form>\n        </div>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/forgot/forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(30);
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
    function GamesPage(navCtrl, authService, navParams, helper, events) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.events = events;
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
    }
    GamesPage.prototype.ionViewDidEnter = function () {
        this.mode = this.navParams.get('mode');
        this.isPlayoff = (typeof this.mode === 'undefined');
        this.isFifa = this.navParams.get('type') == 'fifa';
        this.displaySelectedSource(this.navParams.get('type'));
        if (this.isPlayoff) {
            this.group = this.navParams.get('group');
            this.groupLetter = this.group;
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
        document.querySelector('page-games #' + source + '-button-' + (typeof this.mode === 'undefined' ? '' : this.mode)).className += ' selected';
        this.isFifa = source == 'fifa';
    };
    GamesPage.prototype.loadPlayOffs = function () {
        switch (this.mode) {
            case '8':
                this.loadGames(2);
                console.log('octavos');
                break;
            case '4':
                this.loadGames(3);
                console.log('cuartos');
                break;
            case 'final':
                this.loadGames(4);
                console.log('semifinal & final');
                break;
        }
    };
    GamesPage.prototype.loadGames = function (gameType) {
        var _this = this;
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
                data = this.isFifa ? '' : 'u=' + localStorage.getItem('userID');
                break;
        }
        this.authService.getData(data, url).then(function (result) {
            _this.responseData = result;
            for (var i = 0; i < _this.responseData.length; i++) {
                var juego = _this.responseData[i];
                var gameId = juego.juegoid;
                var date = _this.helper.formatDate(juego.fecha);
                var bandera1 = juego.bandera1 != null && juego.bandera1.length > 0 ? juego.bandera1 : 'noflag.png';
                var marcador1 = juego.equipo1marcador;
                var equipo1 = juego.equipo1;
                var bandera2 = juego.bandera2 != null && juego.bandera2.length > 0 ? juego.bandera2 : 'noflag.png';
                var marcador2 = juego.equipo2marcador;
                var equipo2 = juego.equipo2;
                switch (i) {
                    case 0:
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
        });
    };
    GamesPage.prototype.saveGroupGames = function () {
        var url = '/updateUserGameScoreById.php';
        var data = '';
        if (this.GroupGames.value.formMarcador1_1 && this.GroupGames.value.formMarcador1_2) {
            data = 'g=' + this.GroupGames.value.formGameId1 + '&s1=' + this.GroupGames.value.formMarcador1_1 + '&s2=' + this.GroupGames.value.formMarcador1_2 + '&u=' + localStorage.getItem('userID');
        }
        if (this.GroupGames.value.formMarcador2_1 && this.GroupGames.value.formMarcador2_2) {
            data = 'g=' + this.GroupGames.value.formGameId2 + '&s1=' + this.GroupGames.value.formMarcador2_1 + '&s2=' + this.GroupGames.value.formMarcador2_2 + '&u=' + localStorage.getItem('userID');
        }
        if (this.GroupGames.value.formMarcador3_1 && this.GroupGames.value.formMarcador3_2) {
            data = 'g=' + this.GroupGames.value.formGameId3 + '&s1=' + this.GroupGames.value.formMarcador3_1 + '&s2=' + this.GroupGames.value.formMarcador3_2 + '&u=' + localStorage.getItem('userID');
        }
        if (this.GroupGames.value.formMarcador4_1 && this.GroupGames.value.formMarcador4_2) {
            data = 'g=' + this.GroupGames.value.formGameId4 + '&s1=' + this.GroupGames.value.formMarcador4_1 + '&s2=' + this.GroupGames.value.formMarcador4_2 + '&u=' + localStorage.getItem('userID');
        }
        if (this.GroupGames.value.formMarcador5_1 && this.GroupGames.value.formMarcador5_2) {
            data = 'g=' + this.GroupGames.value.formGameId5 + '&s1=' + this.GroupGames.value.formMarcador5_1 + '&s2=' + this.GroupGames.value.formMarcador5_2 + '&u=' + localStorage.getItem('userID');
        }
        if (this.GroupGames.value.formMarcador6_1 && this.GroupGames.value.formMarcador6_2) {
            data = 'g=' + this.GroupGames.value.formGameId6 + '&s1=' + this.GroupGames.value.formMarcador6_1 + '&s2=' + this.GroupGames.value.formMarcador6_2 + '&u=' + localStorage.getItem('userID');
        }
        this.navCtrl.popToRoot();
        this.authService.getData(data, url).then(function (result) {
            console.log('saved');
        });
        this.events.publish('reloadGroups');
    };
    GamesPage.prototype.clickGames = function (type) {
        this.displaySelectedSource(type);
        this.loadPlayOffs();
    };
    return GamesPage;
}());
GamesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-games',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/games/games.html"*/'<!--\n  Generated template for the GamesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Juegos Grupo {{ groupLetter }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!-- Generated template for the TrikyGamesComponent component -->\n    <ion-grid *ngIf="!isPlayoff">\n      <ion-row>\n        <ion-col>\n          <button ion-button full id="{{ trikyButtonId }}" color="triky-button" (click)="clickGames(\'triky\')">TRIKY</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button full id="{{ fifaButtonId }}" color="triky-button" (click)="clickGames(\'fifa\')">FIFA</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <form [formGroup]="GroupGames" (ngSubmit)="saveGroupGames()">\n        <div class="game-container">\n        	<ion-input type="hidden" value="{{ gameId1 }}" formControlName="formGameId1"></ion-input>\n            <div class="date">{{ date1 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera1_1 }}" /></ion-col>\n                    <ion-col><label>{{ equipo1_1 }}</label></ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador1_1 }}" formControlName="formMarcador1_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera1_2 }}"/></ion-col>\n            		<ion-col><label>{{ equipo1_2 }}</label></ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador1_2 }}" formControlName="formMarcador1_2"></ion-input>\n                    </ion-col>\n            	</ion-row>\n        	</ion-grid>\n    	</div>\n    	\n        <div class="game-container">\n        	<ion-input type="hidden" value="{{ gameId2 }}" formControlName="formGameId2"></ion-input>\n            <div class="date">{{ date2 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera2_1 }}" /></ion-col>\n                    <ion-col>{{ equipo2_1 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador2_1 }}" formControlName="formMarcador2_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera2_2 }}"/></ion-col>\n            		<ion-col>{{ equipo2_2 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador2_2 }}" formControlName="formMarcador2_2"></ion-input>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>	\n        <div class="game-container">\n        	<ion-input type="hidden" value="{{ gameId3 }}" formControlName="formGameId3"></ion-input>\n            <div class="date">{{ date3 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera3_1 }}" /></ion-col>\n                    <ion-col>{{ equipo3_1 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador3_1 }}" formControlName="formMarcador3_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera3_2 }}"/></ion-col>\n            		<ion-col>{{ equipo3_2 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador3_2 }}" formControlName="formMarcador3_2"></ion-input>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>	\n        <div class="game-container">\n        	<ion-input type="hidden" value="{{ gameId4 }}" formControlName="formGameId4"></ion-input>\n            <div class="date">{{ date4 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera4_1 }}" /></ion-col>\n                    <ion-col>{{ equipo4_1 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador4_1 }}" formControlName="formMarcador4_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera4_2 }}"/></ion-col>\n            		<ion-col>{{ equipo4_2 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador4_2 }}" formControlName="formMarcador4_2"></ion-input>\n                    </ion-col>\n        	    </ion-row>\n            </ion-grid>\n    	</div>	\n        <div class="game-container" *ngIf="showGame5">\n        	<ion-input type="hidden" value="{{ gameId5 }}" formControlName="formGameId5"></ion-input>\n            <div class="date">{{ date5 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera5_1 }}" /></ion-col>\n                    <ion-col>{{ equipo5_1 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador5_1 }}" formControlName="formMarcador5_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera5_2 }}"/></ion-col>\n            		<ion-col>{{ equipo5_2 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador5_2 }}" formControlName="formMarcador5_2"></ion-input>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>	\n    	\n        <div class="game-container" *ngIf="showGame6">\n        	<ion-input type="hidden" value="{{ gameId6 }}" formControlName="formGameId6"></ion-input>\n            <div class="date">{{ date6 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28" src="images/{{ bandera6_1 }}" /></ion-col>\n                    <ion-col>{{ equipo6_1 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador6_1 }}" formControlName="formMarcador6_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera6_2 }}"/></ion-col>\n            		<ion-col>{{ equipo6_2 }}</ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador6_2 }}" formControlName="formMarcador6_2"></ion-input>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>	\n        <div class="game-container" *ngIf="showGame7">\n        	<ion-input type="hidden" value="{{ gameId7 }}" formControlName="formGameId7"></ion-input>\n            <div class="date">{{ date7 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera7_1 }}" /></ion-col>\n                    <ion-col><label>{{ equipo7_1 }}</label></ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador7_1 }}" formControlName="formMarcador7_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera7_2 }}"/></ion-col>\n            		<ion-col><label>{{ equipo7_2 }}</label></ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador7_2 }}" formControlName="formMarcador7_2"></ion-input>\n                    </ion-col>\n            	</ion-row>\n        	</ion-grid>\n    	</div>\n        <div class="game-container" *ngIf="showGame8">\n        	<ion-input type="hidden" value="{{ gameId8 }}" formControlName="formGameId8"></ion-input>\n            <div class="date">{{ date8 }}</div>\n            <ion-grid>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera8_1 }}" /></ion-col>\n                    <ion-col><label>{{ equipo8_1 }}</label></ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador8_1 }}" formControlName="formMarcador8_1"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="scores">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera8_2 }}"/></ion-col>\n            		<ion-col><label>{{ equipo8_2 }}</label></ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="!isFifa" type="number" value="{{ marcador8_2 }}" formControlName="formMarcador8_2"></ion-input>\n                    </ion-col>\n            	</ion-row>\n        	</ion-grid>\n    	</div>\n        <button ion-button full type="submit" class="button button-calm" *ngIf="!isFifa">GUARDAR</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/games/games.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], GamesPage);

//# sourceMappingURL=games.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map