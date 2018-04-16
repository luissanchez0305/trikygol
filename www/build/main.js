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
		281,
		2
	],
	"../pages/login/login.module": [
		283,
		1
	],
	"../pages/register/register.module": [
		282,
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
//export var Constants = {  };
//export var Constants = {  };
var Constants = {
    //API_ENDPOINT : '/ws/',
    API_ENDPOINT: 'https://www.esferasoluciones.com/api/trikygol/',
    //API_ENDPOINT : 'http://34.212.30.101/api/trikygol/',
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
    ]
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__games_games__ = __webpack_require__(60);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__groups_groups__["a" /* GroupsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__games_games__["a" /* GamesPage */];
        this.tab8vosParam = { mode: '8', type: 'triky' };
        this.tab4tosParam = { mode: '4', type: 'triky' };
        this.tabSemiFinalParam = { mode: 'semifinal', type: 'triky' };
        this.tabFinalParam = { mode: 'final', type: 'triky' };
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabs">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Grupos" tabIcon="ios-browsers"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="8vos" [rootParams]="tab8vosParam"  tabIcon="ios-list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="4tos" [rootParams]="tab4tosParam" tabIcon="md-expand"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Semi" [rootParams]="tabSemiFinalParam" tabIcon="ios-star"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Final" [rootParams]="tabFinalParam" tabIcon="ios-trophy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__games_games__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(32);
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
    function GroupsPage(navCtrl, authService, navParams, helper, modalCtrl, events, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.groupAFirst = 0;
        this.groupASecond = 0;
        this.groupBFirst = 0;
        this.groupBSecond = 0;
        this.groupCFirst = 0;
        this.groupCSecond = 0;
        this.groupDFirst = 0;
        this.groupDSecond = 0;
        this.groupEFirst = 0;
        this.groupESecond = 0;
        this.groupFFirst = 0;
        this.groupFSecond = 0;
        this.groupGFirst = 0;
        this.groupGSecond = 0;
        this.groupHFirst = 0;
        this.groupHSecond = 0;
        this.defaultFillScoresText = "Click a equipos que pasan a 8vos";
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
    GroupsPage.prototype.ionViewDidEnter = function () {
        this.displayGroupsAndTeams('triky');
    };
    GroupsPage.prototype.displayGroupsAndTeams = function (_source) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        // "getFirstSecondTeams.php" TRAE TODOS LOS EQUIPOS POR GRUPOS
        this.authService.getData('source=' + _source + (_source == 'triky' ? "&u=" + localStorage.getItem('userID') : ""), _source == 'triky' ? 'getUserTeamsPositions.php' : 'getFirstSecondTeams.php')
            .then(function (result) {
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
                        _this.teamA1Id = grupo.team1.id;
                        _this.teamA1 = grupo.team1.nombre;
                        _this.teamA1Flag = grupo.team1.bandera;
                        _this.teamA1Points = grupo.team1.puntos;
                        _this.showPlacesA = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamA1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamA2Id = grupo.team2.id;
                        _this.teamA2 = grupo.team2.nombre;
                        _this.teamA2Flag = grupo.team2.bandera;
                        _this.teamA2Points = grupo.team2.puntos;
                        _this.teamA2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamA3Id = grupo.team3.id;
                        _this.teamA3 = grupo.team3.nombre;
                        _this.teamA3Flag = grupo.team3.bandera;
                        _this.teamA3Points = grupo.team3.puntos;
                        _this.teamA3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamA4Id = grupo.team4.id;
                        _this.teamA4 = grupo.team4.nombre;
                        _this.teamA4Flag = grupo.team4.bandera;
                        _this.teamA4Points = grupo.team4.puntos;
                        _this.teamA4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                        _this.showInfoBarA = !_this.showPlacesA;
                        break;
                    case 'b':
                        _this.teamB1Id = grupo.team1.id;
                        _this.teamB1 = grupo.team1.nombre;
                        _this.teamB1Flag = grupo.team1.bandera;
                        _this.teamB1Points = grupo.team1.puntos;
                        _this.showPlacesB = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamB1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamB2Id = grupo.team2.id;
                        _this.teamB2 = grupo.team2.nombre;
                        _this.teamB2Flag = grupo.team2.bandera;
                        _this.teamB2Points = grupo.team2.puntos;
                        _this.teamB2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamB3Id = grupo.team3.id;
                        _this.teamB3 = grupo.team3.nombre;
                        _this.teamB3Flag = grupo.team3.bandera;
                        _this.teamB3Points = grupo.team3.puntos;
                        _this.teamB3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamB4Id = grupo.team4.id;
                        _this.teamB4 = grupo.team4.nombre;
                        _this.teamB4Flag = grupo.team4.bandera;
                        _this.teamB4Points = grupo.team4.puntos;
                        _this.teamB4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                        _this.showInfoBarB = !_this.showPlacesB;
                        break;
                    case 'c':
                        _this.teamC1Id = grupo.team1.id;
                        _this.teamC1 = grupo.team1.nombre;
                        _this.teamC1Flag = grupo.team1.bandera;
                        _this.teamC1Points = grupo.team1.puntos;
                        _this.showPlacesC = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamC1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamC2Id = grupo.team2.id;
                        _this.teamC2 = grupo.team2.nombre;
                        _this.teamC2Flag = grupo.team2.bandera;
                        _this.teamC2Points = grupo.team2.puntos;
                        _this.teamC2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamC3Id = grupo.team3.id;
                        _this.teamC3 = grupo.team3.nombre;
                        _this.teamC3Flag = grupo.team3.bandera;
                        _this.teamC3Points = grupo.team3.puntos;
                        _this.teamC3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamC4Id = grupo.team4.id;
                        _this.teamC4 = grupo.team4.nombre;
                        _this.teamC4Flag = grupo.team4.bandera;
                        _this.teamC4Points = grupo.team4.puntos;
                        _this.teamC4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                        _this.showInfoBarC = !_this.showPlacesC;
                        break;
                    case 'd':
                        _this.teamD1Id = grupo.team1.id;
                        _this.teamD1 = grupo.team1.nombre;
                        _this.teamD1Flag = grupo.team1.bandera;
                        _this.teamD1Points = grupo.team1.puntos;
                        _this.showPlacesD = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamD1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamD2Id = grupo.team2.id;
                        _this.teamD2 = grupo.team2.nombre;
                        _this.teamD2Flag = grupo.team2.bandera;
                        _this.teamD2Points = grupo.team2.puntos;
                        _this.teamD2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamD3Id = grupo.team3.id;
                        _this.teamD3 = grupo.team3.nombre;
                        _this.teamD3Flag = grupo.team3.bandera;
                        _this.teamD3Points = grupo.team3.puntos;
                        _this.teamD3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamD4Id = grupo.team4.id;
                        _this.teamD4 = grupo.team4.nombre;
                        _this.teamD4Flag = grupo.team4.bandera;
                        _this.teamD4Points = grupo.team4.puntos;
                        _this.teamD4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                        _this.showInfoBarD = !_this.showPlacesD;
                        break;
                    case 'e':
                        _this.teamE1Id = grupo.team1.id;
                        _this.teamE1 = grupo.team1.nombre;
                        _this.teamE1Flag = grupo.team1.bandera;
                        _this.teamE1Points = grupo.team1.puntos;
                        _this.showPlacesE = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamE1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamE2Id = grupo.team2.id;
                        _this.teamE2 = grupo.team2.nombre;
                        _this.teamE2Flag = grupo.team2.bandera;
                        _this.teamE2Points = grupo.team2.puntos;
                        _this.teamE2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamE3Id = grupo.team3.id;
                        _this.teamE3 = grupo.team3.nombre;
                        _this.teamE3Flag = grupo.team3.bandera;
                        _this.teamE3Points = grupo.team3.puntos;
                        _this.teamE3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamE4Id = grupo.team4.id;
                        _this.teamE4 = grupo.team4.nombre;
                        _this.teamE4Flag = grupo.team4.bandera;
                        _this.teamE4Points = grupo.team4.puntos;
                        _this.teamE4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                        _this.showInfoBarE = !_this.showPlacesE;
                        break;
                    case 'f':
                        _this.teamF1Id = grupo.team1.id;
                        _this.teamF1 = grupo.team1.nombre;
                        _this.teamF1Flag = grupo.team1.bandera;
                        _this.teamF1Points = grupo.team1.puntos;
                        _this.showPlacesF = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamF1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamF2Id = grupo.team2.id;
                        _this.teamF2 = grupo.team2.nombre;
                        _this.teamF2Flag = grupo.team2.bandera;
                        _this.teamF2Points = grupo.team2.puntos;
                        _this.teamF2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamF3Id = grupo.team3.id;
                        _this.teamF3 = grupo.team3.nombre;
                        _this.teamF3Flag = grupo.team3.bandera;
                        _this.teamF3Points = grupo.team3.puntos;
                        _this.teamF3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamF4Id = grupo.team4.id;
                        _this.teamF4 = grupo.team4.nombre;
                        _this.teamF4Flag = grupo.team4.bandera;
                        _this.teamF4Points = grupo.team4.puntos;
                        _this.teamF4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                        _this.showInfoBarF = !_this.showPlacesF;
                        break;
                    case 'g':
                        _this.teamG1Id = grupo.team1.id;
                        _this.teamG1 = grupo.team1.nombre;
                        _this.teamG1Flag = grupo.team1.bandera;
                        _this.teamG1Points = grupo.team1.puntos;
                        _this.showPlacesG = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamG1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamG2Id = grupo.team2.id;
                        _this.teamG2 = grupo.team2.nombre;
                        _this.teamG2Flag = grupo.team2.bandera;
                        _this.teamG2Points = grupo.team2.puntos;
                        _this.teamG2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamG3Id = grupo.team3.id;
                        _this.teamG3 = grupo.team3.nombre;
                        _this.teamG3Flag = grupo.team3.bandera;
                        _this.teamG3Points = grupo.team3.puntos;
                        _this.teamG3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamG4Id = grupo.team4.id;
                        _this.teamG4 = grupo.team4.nombre;
                        _this.teamG4Flag = grupo.team4.bandera;
                        _this.teamG4Points = grupo.team4.puntos;
                        _this.teamG4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                        _this.showInfoBarG = !_this.showPlacesG;
                        break;
                    case 'h':
                        _this.teamH1Id = grupo.team1.id;
                        _this.teamH1 = grupo.team1.nombre;
                        _this.teamH1Flag = grupo.team1.bandera;
                        _this.teamH1Points = grupo.team1.puntos;
                        _this.showPlacesH = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                        _this.teamH1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                        _this.teamH2Id = grupo.team2.id;
                        _this.teamH2 = grupo.team2.nombre;
                        _this.teamH2Flag = grupo.team2.bandera;
                        _this.teamH2Points = grupo.team2.puntos;
                        _this.teamH2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                        _this.teamH3Id = grupo.team3.id;
                        _this.teamH3 = grupo.team3.nombre;
                        _this.teamH3Flag = grupo.team3.bandera;
                        _this.teamH3Points = grupo.team3.puntos;
                        _this.teamH3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                        _this.teamH4Id = grupo.team4.id;
                        _this.teamH4 = grupo.team4.nombre;
                        _this.teamH4Flag = grupo.team4.bandera;
                        _this.teamH4Points = grupo.team4.puntos;
                        _this.teamH4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
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
                _this.showFifaItems = true;
            }
            else
                _this.showFifaItems = false;
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
        if (this.typeShowing == 'fifa') {
            console.log(letter + ' clicked');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__games_games__["a" /* GamesPage */], { type: this.typeShowing, group: letter });
        }
    };
    GroupsPage.prototype.clickTeam = function (group, position, id) {
        if (this.typeShowing == 'triky') {
            var pos = 1;
            switch (group) {
                case 'A':
                    this.showPlacesA = true;
                    this.showInfoBarA = false;
                    if (this.groupAFirst != 0 && this.groupASecond != 0) {
                        pos = 1;
                        this.groupAFirst = id;
                        this.groupASecond = 0;
                    }
                    else if (this.groupAFirst != 0) {
                        pos = 2;
                        this.groupASecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupAFirst = id;
                    }
                    break;
                case 'B':
                    this.showPlacesB = true;
                    this.showInfoBarB = false;
                    if (this.groupBFirst != 0 && this.groupBSecond != 0) {
                        pos = 1;
                        this.groupBFirst = id;
                        this.groupBSecond = 0;
                    }
                    else if (this.groupBFirst != 0) {
                        pos = 2;
                        this.groupBSecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupBFirst = id;
                    }
                    break;
                case 'C':
                    this.showPlacesC = true;
                    this.showInfoBarC = false;
                    if (this.groupCFirst != 0 && this.groupCSecond != 0) {
                        pos = 1;
                        this.groupCFirst = id;
                        this.groupCSecond = 0;
                    }
                    else if (this.groupCFirst != 0) {
                        pos = 2;
                        this.groupCSecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupCFirst = id;
                    }
                    break;
                case 'D':
                    this.showPlacesD = true;
                    this.showInfoBarD = false;
                    if (this.groupDFirst != 0 && this.groupDSecond != 0) {
                        pos = 1;
                        this.groupDFirst = id;
                        this.groupDSecond = 0;
                    }
                    else if (this.groupDFirst != 0) {
                        pos = 2;
                        this.groupDSecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupDFirst = id;
                    }
                    break;
                case 'E':
                    this.showPlacesE = true;
                    this.showInfoBarE = false;
                    if (this.groupEFirst != 0 && this.groupESecond != 0) {
                        pos = 1;
                        this.groupEFirst = id;
                        this.groupESecond = 0;
                    }
                    else if (this.groupEFirst != 0) {
                        pos = 2;
                        this.groupESecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupEFirst = id;
                    }
                    break;
                case 'F':
                    this.showPlacesF = true;
                    this.showInfoBarF = false;
                    if (this.groupFFirst != 0 && this.groupFSecond != 0) {
                        pos = 1;
                        this.groupFFirst = id;
                        this.groupFSecond = 0;
                    }
                    else if (this.groupFFirst != 0) {
                        pos = 2;
                        this.groupFSecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupFFirst = id;
                    }
                    break;
                case 'G':
                    this.showPlacesG = true;
                    this.showInfoBarG = false;
                    if (this.groupGFirst != 0 && this.groupGSecond != 0) {
                        pos = 1;
                        this.groupGFirst = id;
                        this.groupGSecond = 0;
                    }
                    else if (this.groupGFirst != 0) {
                        pos = 2;
                        this.groupGSecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupGFirst = id;
                    }
                    break;
                case 'H':
                    this.showPlacesH = true;
                    this.showInfoBarH = false;
                    if (this.groupHFirst != 0 && this.groupHSecond != 0) {
                        pos = 1;
                        this.groupHFirst = id;
                        this.groupHSecond = 0;
                    }
                    else if (this.groupHFirst != 0) {
                        pos = 2;
                        this.groupHSecond = id;
                    }
                    else {
                        pos = 1;
                        this.groupHFirst = id;
                    }
                    break;
            }
            this.cleanAssignedPosition(group, pos);
            this.assignNewPosition(group, position, pos);
            var loading_1 = this.loadingCtrl.create({
                content: 'Guardando...'
            });
            loading_1.present();
            this.authService.getData("&u=" + localStorage.getItem('userID') + "&pg=" + pos + group + "&te=" + id + "&t=2", 'updateUserTeamPosition.php').then(function (result) {
                loading_1.dismiss();
            });
        }
    };
    /* METODOS HELPER */
    GroupsPage.prototype.cleanAssignedPosition = function (group, pos) {
        switch (group) {
            case 'A':
                if (this.teamA1Pos == pos) {
                    this.teamA1Points = '0';
                    this.teamA1Pos = null;
                }
                if (this.teamA2Pos == pos) {
                    this.teamA2Points = '0';
                    this.teamA2Pos = null;
                }
                if (this.teamA3Pos == pos) {
                    this.teamA3Points = '0';
                    this.teamA3Pos = null;
                }
                if (this.teamA4Pos == pos) {
                    this.teamA4Points = '0';
                    this.teamA4Pos = null;
                }
                break;
            case 'B':
                if (this.teamB1Pos == pos) {
                    this.teamB1Points = '0';
                    this.teamB1Pos = null;
                }
                if (this.teamB2Pos == pos) {
                    this.teamB2Points = '0';
                    this.teamB2Pos = null;
                }
                if (this.teamB3Pos == pos) {
                    this.teamB3Points = '0';
                    this.teamB3Pos = null;
                }
                if (this.teamB4Pos == pos) {
                    this.teamB4Points = '0';
                    this.teamB4Pos = null;
                }
                break;
            case 'C':
                if (this.teamC1Pos == pos) {
                    this.teamC1Points = '0';
                    this.teamC1Pos = null;
                }
                if (this.teamC2Pos == pos) {
                    this.teamC2Points = '0';
                    this.teamC2Pos = null;
                }
                if (this.teamC3Pos == pos) {
                    this.teamC3Points = '0';
                    this.teamC3Pos = null;
                }
                if (this.teamC4Pos == pos) {
                    this.teamC4Points = '0';
                    this.teamC4Pos = null;
                }
                break;
            case 'D':
                if (this.teamD1Pos == pos) {
                    this.teamD1Points = '0';
                    this.teamD1Pos = null;
                }
                if (this.teamD2Pos == pos) {
                    this.teamD2Points = '0';
                    this.teamD2Pos = null;
                }
                if (this.teamD3Pos == pos) {
                    this.teamD3Points = '0';
                    this.teamD3Pos = null;
                }
                if (this.teamD4Pos == pos) {
                    this.teamD4Points = '0';
                    this.teamD4Pos = null;
                }
                break;
            case 'D':
                if (this.teamE1Pos == pos) {
                    this.teamE1Points = '0';
                    this.teamE1Pos = null;
                }
                if (this.teamE2Pos == pos) {
                    this.teamE2Points = '0';
                    this.teamE2Pos = null;
                }
                if (this.teamE3Pos == pos) {
                    this.teamE3Points = '0';
                    this.teamE3Pos = null;
                }
                if (this.teamE4Pos == pos) {
                    this.teamE4Points = '0';
                    this.teamE4Pos = null;
                }
                break;
            case 'F':
                if (this.teamF1Pos == pos) {
                    this.teamF1Points = '0';
                    this.teamF1Pos = null;
                }
                if (this.teamF2Pos == pos) {
                    this.teamF2Points = '0';
                    this.teamF2Pos = null;
                }
                if (this.teamF3Pos == pos) {
                    this.teamF3Points = '0';
                    this.teamF3Pos = null;
                }
                if (this.teamF4Pos == pos) {
                    this.teamF4Points = '0';
                    this.teamF4Pos = null;
                }
                break;
            case 'G':
                if (this.teamG1Pos == pos) {
                    this.teamG1Points = '0';
                    this.teamG1Pos = null;
                }
                if (this.teamG2Pos == pos) {
                    this.teamG2Points = '0';
                    this.teamG2Pos = null;
                }
                if (this.teamG3Pos == pos) {
                    this.teamG3Points = '0';
                    this.teamG3Pos = null;
                }
                if (this.teamG4Pos == pos) {
                    this.teamG4Points = '0';
                    this.teamG4Pos = null;
                }
                break;
            case 'H':
                if (this.teamH1Pos == pos) {
                    this.teamH1Points = '0';
                    this.teamH1Pos = null;
                }
                if (this.teamH2Pos == pos) {
                    this.teamH2Points = '0';
                    this.teamH2Pos = null;
                }
                if (this.teamH3Pos == pos) {
                    this.teamH3Points = '0';
                    this.teamH3Pos = null;
                }
                if (this.teamH4Pos == pos) {
                    this.teamH4Points = '0';
                    this.teamH4Pos = null;
                }
                break;
        }
    };
    GroupsPage.prototype.assignNewPosition = function (group, position, pos) {
        switch (group) {
            case 'A':
                switch (position) {
                    case 1:
                        this.teamA1Points = '1';
                        this.teamA1Pos = pos;
                        break;
                    case 2:
                        this.teamA2Points = '1';
                        this.teamA2Pos = pos;
                        break;
                    case 3:
                        this.teamA3Points = '1';
                        this.teamA3Pos = pos;
                        break;
                    case 4:
                        this.teamA4Points = '1';
                        this.teamA4Pos = pos;
                        break;
                }
                break;
            case 'B':
                switch (position) {
                    case 1:
                        this.teamB1Points = '1';
                        this.teamB1Pos = pos;
                        break;
                    case 2:
                        this.teamB2Points = '1';
                        this.teamB2Pos = pos;
                        break;
                    case 3:
                        this.teamB3Points = '1';
                        this.teamB3Pos = pos;
                        break;
                    case 4:
                        this.teamB4Points = '1';
                        this.teamB4Pos = pos;
                        break;
                }
                break;
            case 'C':
                switch (position) {
                    case 1:
                        this.teamC1Points = '1';
                        this.teamC1Pos = pos;
                        break;
                    case 2:
                        this.teamC2Points = '1';
                        this.teamC2Pos = pos;
                        break;
                    case 3:
                        this.teamC3Points = '1';
                        this.teamC3Pos = pos;
                        break;
                    case 4:
                        this.teamC4Points = '1';
                        this.teamC4Pos = pos;
                        break;
                }
                break;
            case 'D':
                switch (position) {
                    case 1:
                        this.teamD1Points = '1';
                        this.teamD1Pos = pos;
                        break;
                    case 2:
                        this.teamD2Points = '1';
                        this.teamD2Pos = pos;
                        break;
                    case 3:
                        this.teamD3Points = '1';
                        this.teamD3Pos = pos;
                        break;
                    case 4:
                        this.teamD4Points = '1';
                        this.teamD4Pos = pos;
                        break;
                }
                break;
            case 'E':
                switch (position) {
                    case 1:
                        this.teamE1Points = '1';
                        this.teamE1Pos = pos;
                        break;
                    case 2:
                        this.teamE2Points = '1';
                        this.teamE2Pos = pos;
                        break;
                    case 3:
                        this.teamE3Points = '1';
                        this.teamE3Pos = pos;
                        break;
                    case 4:
                        this.teamE4Points = '1';
                        this.teamE4Pos = pos;
                        break;
                }
                break;
            case 'F':
                switch (position) {
                    case 1:
                        this.teamF1Points = '1';
                        this.teamF1Pos = pos;
                        break;
                    case 2:
                        this.teamF2Points = '1';
                        this.teamF2Pos = pos;
                        break;
                    case 3:
                        this.teamF3Points = '1';
                        this.teamF3Pos = pos;
                        break;
                    case 4:
                        this.teamF4Points = '1';
                        this.teamF4Pos = pos;
                        break;
                }
                break;
            case 'G':
                switch (position) {
                    case 1:
                        this.teamG1Points = '1';
                        this.teamG1Pos = pos;
                        break;
                    case 2:
                        this.teamG2Points = '1';
                        this.teamG2Pos = pos;
                        break;
                    case 3:
                        this.teamG3Points = '1';
                        this.teamG3Pos = pos;
                        break;
                    case 4:
                        this.teamG4Points = '1';
                        this.teamG4Pos = pos;
                        break;
                }
                break;
            case 'H':
                switch (position) {
                    case 1:
                        this.teamH1Points = '1';
                        this.teamH1Pos = pos;
                        break;
                    case 2:
                        this.teamH2Points = '1';
                        this.teamH2Pos = pos;
                        break;
                    case 3:
                        this.teamH3Points = '1';
                        this.teamH3Pos = pos;
                        break;
                    case 4:
                        this.teamH4Points = '1';
                        this.teamH4Pos = pos;
                        break;
                }
                break;
        }
    };
    return GroupsPage;
}());
GroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-groups',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/groups/groups.html"*/'<!--\n  Generated template for the GroupsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Grupos</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle end class="button button-clear">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button full id="triky-button" class="selected" color="triky-button" (click)="clickGroups(\'triky\')">TRIKY</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button full id="fifa-button" color="triky-button" (click)="clickGroups(\'fifa\')">FIFA</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n          <div class="card-triky" margin-bottom padding>\n  	<label><ion-icon name="ios-thumbs-up"></ion-icon>Coloca tu pronostico, el los siguientes recuadros de cada partido</label>\n</div>\n    <ion-item-group class="table-cla">\n    <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo A <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'A\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n    <ion-item-group class="notifications" (click)="clickGroup(\'A\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarA"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextA }}</h2>\n        <div class="{{ showPlacesA ? \'header-group\' : \'\' }}">\n          <ion-item (click)="clickTeam(\'A\', 1, teamA1Id)"><span class="{{ teamA1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamA1Pos }}</span><img width="30" height="19"  src="images/{{ teamA1Flag }}" /> {{ teamA1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamA1Points }} Pts</span></ion-item>\n          <ion-item (click)="clickTeam(\'A\', 2, teamA2Id)"><span class="{{ teamA2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamA2Pos }}</span><img width="30" height="19"  src="images/{{ teamA2Flag }}" /> {{ teamA2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamA2Points }} Pts</span></ion-item>\n          \n          <!--termina bloque de ganadores-->\n          <ion-item (click)="clickTeam(\'A\', 3, teamA3Id)"><span class="{{ teamA3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamA3Pos }}</span><img width="30" height="19"  src="images/{{ teamA3Flag  }}" /> {{ teamA3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamA3Points }} Pts</span></ion-item>\n          <ion-item (click)="clickTeam(\'A\', 4, teamA4Id)"><span class="{{ teamA4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamA4Pos }}</span><img width="30" height="19"  src="images/{{ teamA4Flag  }}" /> {{ teamA4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamA4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div>  \n  \n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo B <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'B\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n       <ion-item-group class="notifications" (click)="clickGroup(\'B\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarB"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextB }}</h2>\n        <div class="{{ showPlacesB ? \'header-group\' : \'\' }}">\n        <ion-item (click)="clickTeam(\'B\', 1, teamB1Id)"><span class="{{ teamB1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamB1Pos }}</span><img width="30" height="19"  src="images/{{ teamB1Flag }}" /> {{ teamB1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamB1Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'B\', 2, teamB2Id)"><span class="{{ teamB2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamB2Pos }}</span><img width="30" height="19"  src="images/{{ teamB2Flag }}" /> {{ teamB2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamB2Points }} Pts</span></ion-item>\n        \n        <!--termina bloque de ganadores-->\n        <ion-item (click)="clickTeam(\'B\', 3, teamB3Id)"><span class="{{ teamB3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamB3Pos }}</span><img width="30" height="19"  src="images/{{ teamB3Flag  }}" /> {{ teamB3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamB3Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'B\', 4, teamB4Id)"><span class="{{ teamB4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamB4Pos }}</span><img width="30" height="19"  src="images/{{ teamB4Flag  }}" /> {{ teamB4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamB4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div> \n  \n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo C <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'C\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n       <ion-item-group class="notifications" (click)="clickGroup(\'C\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarC"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextC }}</h2>\n        <div class="{{ showPlacesC ? \'header-group\' : \'\' }}">\n          <ion-item (click)="clickTeam(\'C\', 1, teamC1Id)"><span class="{{ teamC1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamC1Pos }}</span><img width="30" height="19"  src="images/{{ teamC1Flag }}" /> {{ teamC1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamC1Points }} Pts</span></ion-item>\n          <ion-item (click)="clickTeam(\'C\', 2, teamC2Id)"><span class="{{ teamC2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamC2Pos }}</span><img width="30" height="19"  src="images/{{ teamC2Flag }}" /> {{ teamC2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamC2Points }} Pts</span></ion-item>\n          \n          <!--termina bloque de ganadores-->\n          <ion-item (click)="clickTeam(\'C\', 3, teamC3Id)"><span class="{{ teamC3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamC3Pos }}</span><img width="30" height="19"  src="images/{{ teamC3Flag  }}" /> {{ teamC3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamC3Points }} Pts</span></ion-item>\n          <ion-item (click)="clickTeam(\'C\', 4, teamC4Id)"><span class="{{ teamC4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamC4Pos }}</span><img width="30" height="19"  src="images/{{ teamC4Flag  }}" /> {{ teamC4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamC4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div> \n  \n             <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo D <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'D\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n         <ion-item-group class="notifications" (click)="clickGroup(\'D\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarD"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextD }}</h2>\n        <div class="{{ showPlacesD ? \'header-group\' : \'\' }}">\n        <ion-item (click)="clickTeam(\'D\', 1, teamD1Id)"><span class="{{ teamD1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamD1Pos }}</span><img width="30" height="19"  src="images/{{ teamD1Flag }}" /> {{ teamD1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamD1Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'D\', 2, teamD2Id)"><span class="{{ teamD2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamD2Pos }}</span><img width="30" height="19"  src="images/{{ teamD2Flag }}" /> {{ teamD2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamD2Points }} Pts</span></ion-item>\n        \n        <!--termina bloque de ganadores-->\n        <ion-item (click)="clickTeam(\'D\', 3, teamD3Id)"><span class="{{ teamD3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamD3Pos }}</span><img width="30" height="19"  src="images/{{ teamD3Flag  }}" /> {{ teamD3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamD3Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'D\', 4, teamD4Id)"><span class="{{ teamD4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamD4Pos }}</span><img width="30" height="19"  src="images/{{ teamD4Flag  }}" /> {{ teamD4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamD4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div> \n  \n           <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo E <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'E\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n           <ion-item-group class="notifications" (click)="clickGroup(\'E\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarE"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextA }}</h2>\n        <div class="{{ showPlacesE ? \'header-group\' : \'\' }}">\n        <ion-item (click)="clickTeam(\'E\', 1, teamE1Id)"><span class="{{ teamE1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamE1Pos }}</span><img width="30" height="19"  src="images/{{ teamE1Flag }}" /> {{ teamE1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamE1Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'E\', 2, teamE2Id)"><span class="{{ teamE2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamE2Pos }}</span><img width="30" height="19"  src="images/{{ teamE2Flag }}" /> {{ teamE2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamE2Points }} Pts</span></ion-item>\n        \n        <!--termina bloque de ganadores-->\n        <ion-item (click)="clickTeam(\'E\', 3, teamE3Id)"><span class="{{ teamE3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamE3Pos }}</span><img width="30" height="19"  src="images/{{ teamE3Flag  }}" /> {{ teamE3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamE3Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'E\', 4, teamE4Id)"><span class="{{ teamE4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamE4Pos }}</span><img width="30" height="19"  src="images/{{ teamE4Flag  }}" /> {{ teamE4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamE4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div> \n  \n         <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo F <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'F\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n           <ion-item-group class="notifications" (click)="clickGroup(\'F\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarF"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextF }}</h2>\n        <div class="{{ showPlacesF ? \'header-group\' : \'\' }}">\n        <ion-item (click)="clickTeam(\'F\', 1, teamF1Id)"><span class="{{ teamF1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamF1Pos }}</span><img width="30" height="19"  src="images/{{ teamF1Flag }}" /> {{ teamF1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamF1Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'F\', 2, teamF2Id)"><span class="{{ teamF2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamF2Pos }}</span><img width="30" height="19"  src="images/{{ teamF2Flag }}" /> {{ teamF2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamF2Points }} Pts</span></ion-item>\n        \n        <!--termina bloque de ganadores-->\n        <ion-item (click)="clickTeam(\'F\', 3, teamF3Id)"><span class="{{ teamF3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamF3Pos }}</span><img width="30" height="19"  src="images/{{ teamF3Flag  }}" /> {{ teamF3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamF3Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'F\', 4, teamF4Id)"><span class="{{ teamF4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamF4Pos }}</span><img width="30" height="19"  src="images/{{ teamF4Flag  }}" /> {{ teamF4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamF4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div> \n  \n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo G <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'G\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n         <ion-item-group class="notifications" (click)="clickGroup(\'G\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarG"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextG }}</h2>\n        <div class="{{ showPlacesG ? \'header-group\' : \'\' }}">\n        <ion-item (click)="clickTeam(\'G\', 1, teamG1Id)"><span class="{{ teamG1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamG1Pos }}</span><img width="30" height="19"  src="images/{{ teamG1Flag }}" /> {{ teamG1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamG1Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'G\', 2, teamG2Id)"><span class="{{ teamG2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamG2Pos }}</span><img width="30" height="19"  src="images/{{ teamG2Flag }}" /> {{ teamG2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamG2Points }} Pts</span></ion-item>\n        \n        <!--termina bloque de ganadores-->\n        <ion-item (click)="clickTeam(\'G\', 3, teamG3Id)"><span class="{{ teamG3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamG3Pos }}</span><img width="30" height="19"  src="images/{{ teamG3Flag  }}" /> {{ teamG3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamG3Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'G\', 4, teamG4Id)"><span class="{{ teamG4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamG4Pos }}</span><img width="30" height="19"  src="images/{{ teamG4Flag  }}" /> {{ teamG4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamG4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div> \n  \n      <div style="display: flex;"><span class="group"><ion-icon name="football"></ion-icon> Grupo H <button *ngIf="showFifaItems" class="button-icon-arrow-" ion-button color="light" clear (click)="clickGroup(\'H\')"><ion-icon name="md-arrow-dropright-circle"></ion-icon> Ver Info. </button></span></div>\n    <div margin-bottom padding class="card-triky {{ showFifaItems ? \'fifa\' : \'\' }}">\n       <ion-item-group class="notifications" (click)="clickGroup(\'H\')">\n      <!--Ganadores dentro de este bloque-->\n        <h2 *ngIf="showInfoBarH"><ion-icon name="md-arrow-forward"></ion-icon> {{ fillTextH }}</h2>\n        <div class="{{ showPlacesH ? \'header-group\' : \'\' }}">\n        <ion-item (click)="clickTeam(\'H\', 1, teamH1Id)"><span class="{{ teamH1Points != \'0\' ? \'\' : \'claf\' }}">{{ teamH1Pos }}</span><img width="30" height="19"  src="images/{{ teamH1Flag }}" /> {{ teamH1 }} <span class="point-g" *ngIf="showFifaItems">{{ teamH1Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'H\', 2, teamH2Id)"><span class="{{ teamH2Points != \'0\' ? \'\' : \'claf\' }}">{{ teamH2Pos }}</span><img width="30" height="19"  src="images/{{ teamH2Flag }}" /> {{ teamH2 }} <span class="point-g" *ngIf="showFifaItems">{{ teamH2Points }} Pts</span></ion-item>\n        \n        <!--termina bloque de ganadores-->\n        <ion-item (click)="clickTeam(\'H\', 3, teamH3Id)"><span class="{{ teamH3Points != \'0\' ? \'\' : \'claf\' }}">{{ teamH3Pos }}</span><img width="30" height="19"  src="images/{{ teamH3Flag  }}" /> {{ teamH3 }} <span class="point-g" *ngIf="showFifaItems">{{ teamH3Points }} Pts</span></ion-item>\n        <ion-item (click)="clickTeam(\'H\', 4, teamH4Id)"><span class="{{ teamH4Points != \'0\' ? \'\' : \'claf\' }}">{{ teamH4Pos }}</span><img width="30" height="19"  src="images/{{ teamH4Flag  }}" /> {{ teamH4 }} <span class="point-g" *ngIf="showFifaItems">{{ teamH4Points }} Pts</span></ion-item>\n        </div>\n    </ion-item-group>\n  </div> \n    </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/groups/groups.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], GroupsPage);

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_groups_groups__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_games_games__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_helper__ = __webpack_require__(25);
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
                    { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
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

/***/ 25:
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { HomePage } from '../pages/home/home';


var MyApp = (function () {
    function MyApp(platform, statusBar, helper, splashScreen) {
        this.helper = helper;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            /*{ title: 'HOME', component: HomePage, type: 'root', icon: 'home' },*/
            { title: 'PERFIL', component: __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */], type: 'push', icon: 'person' },
            { title: 'LOGOUT', component: null, type: 'logout', icon: 'log-out' }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.type == 'logout')
            this.logout();
        else if (page.type == 'root')
            this.nav.setRoot(page.component);
        else
            this.nav.push(page.component);
    };
    MyApp.prototype.logout = function () {
        this.helper.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-content>\n   <p text-center><img width="70%" height="auto"  src="images/trikygol-white.png" /></p>\n    <ion-list>\n      <button menuClose ion-item class="item item-block item-md {{ p.icon }}" *ngFor="let p of pages" (click)="openPage(p)">\n        <label class="item-content"></label>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(163);
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(25);
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
    function LoginPage(navCtrl, navParams, authService, helper, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.login = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                // reaparece el nav bar
                _this.tabBarElement.style.display = null;
            }
            else {
                _this.loginStatus = "El email y la contraseña no concuerdan. Por favor intente nuevamente";
            }
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.loginStatus = "Error al intentar ingresar";
        });
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>    \n  <div ng-show="true">\n        <div class="list card cardprogram">\n            <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n            <div padding class="item item-body">\n                <p text-center padding margin-bottom><img width="70%" height="auto"  src="images/trikygol-green.png" /></p>\n                <div padding margin-bottom class="card-triky"><label>\n                   <ion-icon name="information-circle"></ion-icon> Por favor introduce la información de tu cuenta\n                </label></div>\n\n                <div padding margin-bottom class="card-triky">\n                         <ion-item>\n                    <ion-input type="text" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n                </ion-item>\n                <br/>\n                <ion-item>\n                    <ion-input type="password" placeholder="Contraseña" formControlName="pwd"></ion-input>\n                </ion-item>\n                <br/>\n                <label class="lorems lorems-content error">{{ loginStatus }}</label>\n                </div>\n                <br>\n                <button ion-button full type="submit" class="button button-calm" [disabled]="!login.valid">INGRESAR</button>\n                <br>\n                <div style="text-align:center">\n                <div ion-button clear (click)="openRegister()">\n                    Crear una cuenta\n                </div>\n                <br>\n                <div ion-button clear (click)="openForgot()">\n                    Olvide mi contraseña\n                </div>\n                </div>\n\n            </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_forgot__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(25);
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
    function RegisterPage(navCtrl, navParams, authService, helper, events, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.events = events;
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
                email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                name: [''],
                pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)],
                group: ['']
            });
        }
        else {
            this.register = this.formBuilder.group({
                email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                name: [''],
                pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
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
        var data = { n: this.register.value.name, c: localStorage.getItem('userEmail'), e: this.register.value.email, p: this.register.value.pwd, g: this.register.value.group };
        this.authService.postData(data, localStorage.getItem('UserLoggedIn') == 'true' ? '/updateUser.php' : '/createUser.php').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //localStorage.setItem('loginData', JSON.stringify(this.responseData));
                localStorage.setItem('UserLoggedGroup', _this.register.value.group);
                localStorage.setItem('userEmail', _this.register.value.email);
                localStorage.setItem('userID', _this.responseData.id);
                localStorage.setItem('UserLoggedIn', 'true');
                if (localStorage.getItem('UserLoggedIn') == 'true')
                    _this.helper.gapAlert('Perfil actualizado con exito', 'Perfil');
                else
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                // reaparece el nav bar
                if (localStorage.getItem('UserLoggedIn') == 'true') {
                    _this.tabBarElement = document.querySelector('#tabs div.tabbar');
                    _this.tabBarElement.style.display = null;
                }
            }
        }, function (err) {
            // Error log
            if (err.msg == 'duplicate')
                _this.helper.gapAlert('Este email ya existe', err);
            else
                _this.helper.gapAlert('Error en registro', err);
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Registrarse</ion-title>\n        <ion-buttons end *ngIf="showLogout">\n            <button id="logout" (click)="logout()">\n           Logout\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div ng-show="true">\n\n        <div class="list card cardprogram">\n            <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n                <div class="item item-body">\n                    <p text-center padding margin-bottom><img width="70%" height="auto"  src="images/trikygol-green.png" /></p>\n                     <div padding margin-bottom class="card-triky">\n                         <label>\n                           <ion-icon name="information-circle"></ion-icon> Por favor llene sus datos en el siguiente formulario\n                        </label>\n                    </div>\n                    <div padding class="card-triky">\n                        <ion-item>\n                            <ion-input value="{{ emailValue }}" type="email" placeholder="Email*" autocapitalize="none" formControlName="email"></ion-input>\n                        </ion-item>\n                        <br/>\n                        <ion-item>\n                            <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n                        </ion-item>\n                        <br/>\n                        <ion-item>\n                            <ion-input type="text" placeholder="Codigo de grupo" value="{{ groupValue }}" formControlName="group"></ion-input>\n                        </ion-item>\n                        <br>\n                        <ion-item>\n                            <ion-input type="password" placeholder="Contraseña{{ passwordStar }}" formControlName="pwd"></ion-input>\n                        </ion-item>\n                    </div>\n                    <br>\n                    <button ion-button full type="submit" class="button button-calm" [disabled]="!register.valid">{{ submitText }}</button>\n                    <br>\n                    <div style="text-align:center">\n                        <div *ngIf="!isLoggedIn" ion-button clear (click)="openLogin()">\n                            Ya tengo una cuenta\n                        </div>\n                        <br/>\n                        <div *ngIf="!isLoggedIn" ion-button clear (click)="openForgot()">\n                            Olvide mi contraseña\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(163);
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
    function HomePage(navCtrl, helper, authService, events, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.helper = helper;
        this.authService = authService;
        this.events = events;
        this.formBuilder = formBuilder;
        this.group = this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
        if (localStorage.getItem('UserLoggedIn') != 'true') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
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
        this.positionName1 = '';
        this.positionName2 = '';
        this.positionName3 = '';
        this.positionName4 = '';
        this.positionName5 = '';
        this.events.subscribe('reloadPositionTable', function () {
            //call method to refresh content
            _this.loadPositionTable();
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadPositionTable();
        var date = new Date('2018-06-14 5:00:00');
        var firstDate = new Date('2018-06-14 5:00:00');
        var lastDate = new Date('2018-06-14 5:00:00');
        if (Date.now() > lastDate.getTime()) {
            date = new Date('2018-07-15 5:00:00');
        }
        if (Date.now() > firstDate.getTime() && Date.now() <= lastDate.getTime()) {
            date = new Date();
        }
        this.authService.getData('date=' + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(), 'getNextGames.php').then(function (result) {
            _this.nextGames = result;
            _this.gameDate = __WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].months[date.getMonth()] + ', ' + date.getDate() + ' de ' + date.getFullYear();
        });
    };
    HomePage.prototype.loadPositionTable = function () {
        var _this = this;
        this.authService.getData(localStorage.getItem('UserLoggedGroup').length > 0 ? 'g=' + localStorage.getItem('UserLoggedGroup') : '', 'getUsersOrderedPoints.php').then(function (result) {
            _this.responsePositionData = result;
            if (_this.responsePositionData.status == 'no params') {
                _this.positionTable = false;
            }
            else {
                _this.positionTable = true;
                _this.positionName1 = '';
                _this.positionName2 = '';
                _this.positionName3 = '';
                _this.positionName4 = '';
                _this.positionName5 = '';
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
        this.authService.postData(data, 'updateUserGroup.php').then(function (result) {
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
        selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>TrikyGol</ion-title>\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!--Marcador Partido-->\n  <div class="headers-ion">Próximos partidos</div>\n  <div padding margin-bottom text-center style="height: auto;" class="card-triky">\n    <ion-grid>\n      <ion-row *ngFor="let game of nextGames">\n        <ion-col col-12 class="score-home"> <ion-icon name="md-calendar"></ion-icon>{{ gameDate }}</ion-col>\n        <ion-col col-4 class="preview-country"><img style="border-radius:4px" height="20" width="32" src="images/{{ game.flag1 }}"> {{ game.player1 }}</ion-col>\n        <ion-col col-3><div><span style="font-weight:700">{{ game.score1 }}</span> : <span style="font-weight:700;">{{ game.score2 }}</span></div></ion-col>\n        <ion-col col-4 class="preview-country"> {{ game.player2 }} <img style="border-radius:4px" height="20" width="32" src="images/{{ game.flag2 }}"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!--panel de mis puntos-->\n  <ion-item-group class="people-group">	\n  <div class="headers-ion">Puntos Ganados</div>\n  <div padding margin-bottom text-center class="card-triky">\n        <div class="title" end>  <ion-icon style="color:#ff9800; font-size:3.5rem" name="md-trophy"></ion-icon> Mis puntos: {{ myPoints }}</div>\n  	<ion-label class="entire-text">Mis puntos total, acertados</ion-label>\n</div>\n<!--panel de estadisticas-->\n    <ion-grid style="font-size:1.4rem;text-align:center;white-space: inherit !important;">\n        <ion-row>\n            <ion-col col-6>\n              <div padding class="card-triky">\n                <div style="white-space: normal;"># de equipos ganadores</div>\n                <div style="font-size:1.9rem;"><b>{{ winTeams }}</b></div>\n                </div>\n            </ion-col>\n            <ion-col col-6>\n              <div padding class="card-triky">\n                <div style="white-space: normal;"># de equipos clasificados(x2)</div>\n                <div style="font-size:1.9rem;"><b>{{ passedTeams }}</b></div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-item-group>\n  \n<!--tabla de usuarios-->\n<ion-item-group class="people-group positions">\n  <div class="headers-ion">Tabla de Posiciones</div>\n  <div padding class="card-triky">\n    <div *ngIf="positionTable">\n      <ion-item class="position1">\n        <ion-grid>\n          <ion-row class="header-table">\n            <ion-col col-6>Usuario</ion-col>\n            <ion-col col-6>Puntos</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item class="position1">1\n        <ion-icon class="icon-table" name="ios-medal"></ion-icon> {{ positionName1 }}\n      </ion-item>\n      <ion-item class="position1">2\n        <ion-icon class="icon-table" name="ios-medal"></ion-icon> {{ positionName2 }}\n      </ion-item>\n      <ion-item class="position1">3\n        <ion-icon class="icon-table" name="ios-medal"></ion-icon> {{ positionName3 }}\n      </ion-item>\n      <ion-item class="position1">4\n        <ion-icon class="icon-table" name="ios-medal"></ion-icon> {{ positionName4 }}\n      </ion-item>\n      <ion-item class="position1">5\n        <ion-icon class="icon-table" name="ios-medal"></ion-icon> {{ positionName5 }}\n      </ion-item>\n    </div>\n    <div class="un-code" *ngIf="!positionTable">\n        <ion-item>\n          <h2>Aún no perteneces a un grupo</h2>\n          <p>Introduce el grupo abajo y dale a "Entrar" para empezar a jugar</p>\n          <form [formGroup]="group" (ngSubmit)="attemptJoinGroup()">\n            <ion-item>\n                <ion-input class="code-group" type="text" placeholder="Código" autocapitalize="none" formControlName="code"></ion-input>\n            </ion-item>\n            <br>\n            <button ion-button full type="submit" class="button button-calm" [disabled]="!group.valid">ENTRAR</button>\n          </form>\n        </ion-item>\n    </div>\n    </div>\n    \n  </ion-item-group>\n  <ion-item-group>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(25);
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
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
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
        selector: 'page-forgot',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/forgot/forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Recuperar mi contraseña</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div ng-show="true">\n\n        <div class="list card cardprogram">\n            <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n                <div class="item item-body">\n                    <div margin-bottom padding class="card-triky"><label>\n                   <ion-icon name="information-circle"></ion-icon> Por favor introduce la información de tu cuenta\n                </label>\n                    </div>\n                    <div margin-bottom padding class="card-triky">\n\n                        <ion-item *ngIf="!showSent">\n                            <ion-input type="email" placeholder="Email" autocapitalize="none" formControlName="email"></ion-input>\n                        </ion-item>\n\n                    </div>\n                    <div style="text-align:center">\n                        <br *ngIf="!showSent">\n                        <button ion-button full type="submit" class="button button-calm" [disabled]="!forgot.valid" *ngIf="!showSent">ENVIAR</button>\n                        <!--<br *ngIf="!showSent">-->\n                        <!--<br *ngIf="!showSent">-->\n                        <label class="lorems lorems-content" *ngIf="showSent">\n                   Una nueva contraseña ha sido enviada a la direccion de correo que envio<br>Por favor, le recomendamos que la cambie tan pronto vuelva a entrar\n                </label>\n                        <br/>\n                        <div ion-button clear (click)="openRegister()">\n                            Registrarse\n                        </div>\n                        <br/>\n                        <div ion-button clear (click)="openLogin()">\n                            Login\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/forgot/forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(25);
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
    function GamesPage(navCtrl, authService, navParams, helper, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
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
                _this.gameTitle1 = " - FINAL";
            }
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
                        _this.showGame1 = true;
                        _this.gameId1 = gameId;
                        _this.date1 = date;
                        _this.bandera1_1 = bandera1;
                        _this.marcador1_1 = marcador1;
                        _this.equipo1_1 = equipo1;
                        _this.equipo1_1_id = juego.equipoid1;
                        _this.equipo1_1_selected = (gameId != null && gameId != '64' && juego.games4ths1 != '0') || (gameId == '64' && marcador1 != '0' && marcador1 != null);
                        _this.bandera1_2 = bandera2;
                        _this.marcador1_2 = marcador2;
                        _this.equipo1_2 = equipo2;
                        _this.equipo1_2_id = juego.equipoid2;
                        _this.equipo1_2_selected = (gameId != null && gameId != '64' && juego.games4ths2 != '0') || (gameId == '64' && marcador2 != '0' && marcador2 != null);
                        break;
                    case 1:
                        _this.showGame2 = true;
                        _this.gameId2 = gameId;
                        _this.date2 = date;
                        _this.bandera2_1 = bandera1;
                        _this.marcador2_1 = marcador1;
                        _this.equipo2_1 = equipo1;
                        _this.equipo2_1_id = juego.equipoid1;
                        _this.equipo2_1_selected = gameId != null && juego.games4ths1 != '0';
                        _this.bandera2_2 = bandera2;
                        _this.marcador2_2 = marcador2;
                        _this.equipo2_2 = equipo2;
                        _this.equipo2_2_id = juego.equipoid2;
                        _this.equipo2_2_selected = gameId != null && juego.games4ths2 != '0';
                        break;
                    case 2:
                        _this.showGame3 = true;
                        _this.gameId3 = gameId;
                        _this.date3 = date;
                        _this.bandera3_1 = bandera1;
                        _this.marcador3_1 = marcador1;
                        _this.equipo3_1 = equipo1;
                        _this.equipo3_1_id = juego.equipoid1;
                        _this.equipo3_1_selected = gameId != null && juego.games4ths1 != '0';
                        _this.bandera3_2 = bandera2;
                        _this.marcador3_2 = marcador2;
                        _this.equipo3_2 = equipo2;
                        _this.equipo3_2_id = juego.equipoid2;
                        _this.equipo3_2_selected = gameId != null && juego.games4ths2 != '0';
                        break;
                    case 3:
                        _this.showGame4 = true;
                        _this.gameId4 = gameId;
                        _this.date4 = date;
                        _this.bandera4_1 = bandera1;
                        _this.marcador4_1 = marcador1;
                        _this.equipo4_1 = equipo1;
                        _this.equipo4_1_id = juego.equipoid1;
                        _this.equipo4_1_selected = gameId != null && juego.games4ths1 != '0';
                        _this.bandera4_2 = bandera2;
                        _this.marcador4_2 = marcador2;
                        _this.equipo4_2 = equipo2;
                        _this.equipo4_2_id = juego.equipoid2;
                        _this.equipo4_2_selected = gameId != null && juego.games4ths2 != '0';
                        break;
                    case 4:
                        _this.showGame5 = true;
                        _this.gameId5 = gameId;
                        _this.date5 = date;
                        _this.bandera5_1 = bandera1;
                        _this.marcador5_1 = marcador1;
                        _this.equipo5_1 = equipo1;
                        _this.equipo5_1_id = juego.equipoid1;
                        _this.equipo5_1_selected = gameId != null && juego.games4ths1 != '0';
                        _this.bandera5_2 = bandera2;
                        _this.marcador5_2 = marcador2;
                        _this.equipo5_2 = equipo2;
                        _this.equipo5_2_id = juego.equipoid2;
                        _this.equipo5_2_selected = gameId != null && juego.games4ths2 != '0';
                        break;
                    case 5:
                        _this.showGame6 = true;
                        _this.gameId6 = gameId;
                        _this.date6 = date;
                        _this.bandera6_1 = bandera1;
                        _this.marcador6_1 = marcador1;
                        _this.equipo6_1 = equipo1;
                        _this.equipo6_1_id = juego.equipoid1;
                        _this.equipo6_1_selected = gameId != null && juego.games4ths1 != '0';
                        _this.bandera6_2 = bandera2;
                        _this.marcador6_2 = marcador2;
                        _this.equipo6_2 = equipo2;
                        _this.equipo6_2_id = juego.equipoid2;
                        _this.equipo6_2_selected = gameId != null && juego.games4ths2 != '0';
                        break;
                    case 6:
                        _this.showGame7 = true;
                        _this.gameId7 = gameId;
                        _this.date7 = date;
                        _this.bandera7_1 = bandera1;
                        _this.marcador7_1 = marcador1;
                        _this.equipo7_1 = equipo1;
                        _this.equipo7_1_id = juego.equipoid1;
                        _this.equipo7_1_selected = gameId != null && juego.games4ths1 != '0';
                        _this.bandera7_2 = bandera2;
                        _this.marcador7_2 = marcador2;
                        _this.equipo7_2 = equipo2;
                        _this.equipo7_2_id = juego.equipoid2;
                        _this.equipo7_2_selected = gameId != null && juego.games4ths2 != '0';
                        break;
                    case 7:
                        _this.showGame8 = true;
                        _this.gameId8 = gameId;
                        _this.date8 = date;
                        _this.bandera8_1 = bandera1;
                        _this.marcador8_1 = marcador1;
                        _this.equipo8_1 = equipo1;
                        _this.equipo8_1_id = juego.equipoid1;
                        _this.equipo8_1_selected = gameId != null && juego.games4ths1 != '0';
                        _this.bandera8_2 = bandera2;
                        _this.marcador8_2 = marcador2;
                        _this.equipo8_2 = equipo2;
                        _this.equipo8_2_id = juego.equipoid2;
                        _this.equipo8_2_selected = gameId != null && juego.games4ths2 != '0';
                        break;
                }
            }
        });
    };
    GamesPage.prototype.clickTeam = function (gameId, teamId, gameIndex, teamIndex, obj) {
        var _this = this;
        if (!this.isFifa && teamId != null) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Guardando...'
            });
            loading_1.present();
            this.authService.getData("&u=" + localStorage.getItem('userID') + "&pg=w" + gameId + "&te=" + teamId + "&t=" + (this.mode == '8' ? 3 : (this.mode == '4' ? 4 : (this.mode == 'semifinal' ? 5 : 6))) + (this.mode == 'semifinal' || this.mode == 'final' ? '&type=win' : ''), 'updateUserTeamPosition.php').then(function (result) {
                if (_this.mode != 'semifinal')
                    loading_1.dismiss();
                _this.switchSelected(gameIndex, teamIndex);
            });
            if (this.mode == 'semifinal') {
                var lostTeam = this.equipo1_1_id == teamId ? this.equipo1_2_id : (this.equipo2_1_id == teamId ? this.equipo2_2_id : (this.equipo1_2_id == teamId ? this.equipo1_1_id : this.equipo2_1_id));
                this.authService.getData("&u=" + localStorage.getItem('userID') + "&pg=w" + gameId + "&te=" + lostTeam + "&t=5" + (this.mode == 'semifinal' || this.mode == 'final' ? '&type=lost' : ''), 'updateUserTeamPosition.php').then(function (result) {
                    loading_1.dismiss();
                });
            }
        }
    };
    GamesPage.prototype.clickGames = function (type) {
        this.displaySelectedSource(type);
        this.loadPlayOffs();
    };
    GamesPage.prototype.switchSelected = function (game, team) {
        if (game == 1 && team == 1) {
            this.equipo1_1_selected = true;
            this.equipo1_2_selected = false;
        }
        else if (game == 1 && team == 2) {
            this.equipo1_1_selected = false;
            this.equipo1_2_selected = true;
        }
        else if (game == 2 && team == 1) {
            this.equipo2_1_selected = true;
            this.equipo2_2_selected = false;
        }
        else if (game == 2 && team == 2) {
            this.equipo2_1_selected = false;
            this.equipo2_2_selected = true;
        }
        else if (game == 3 && team == 1) {
            this.equipo3_1_selected = true;
            this.equipo3_2_selected = false;
        }
        else if (game == 3 && team == 2) {
            this.equipo3_1_selected = false;
            this.equipo3_2_selected = true;
        }
        else if (game == 4 && team == 1) {
            this.equipo4_1_selected = true;
            this.equipo4_2_selected = false;
        }
        else if (game == 4 && team == 2) {
            this.equipo4_1_selected = false;
            this.equipo4_2_selected = true;
        }
        else if (game == 5 && team == 1) {
            this.equipo5_1_selected = true;
            this.equipo5_2_selected = false;
        }
        else if (game == 5 && team == 2) {
            this.equipo5_1_selected = false;
            this.equipo5_2_selected = true;
        }
        else if (game == 6 && team == 1) {
            this.equipo6_1_selected = true;
            this.equipo6_2_selected = false;
        }
        else if (game == 6 && team == 2) {
            this.equipo6_1_selected = false;
            this.equipo6_2_selected = true;
        }
        else if (game == 7 && team == 1) {
            this.equipo7_1_selected = true;
            this.equipo7_2_selected = false;
        }
        else if (game == 7 && team == 2) {
            this.equipo7_1_selected = false;
            this.equipo7_2_selected = true;
        }
        else if (game == 8 && team == 1) {
            this.equipo8_1_selected = true;
            this.equipo8_2_selected = false;
        }
        else if (game == 8 && team == 2) {
            this.equipo8_1_selected = false;
            this.equipo8_2_selected = true;
        }
    };
    return GamesPage;
}());
GamesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-games',template:/*ion-inline-start:"/home/ubuntu/workspace/src/pages/games/games.html"*/'<!--\n  Generated template for the GamesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ gamesTitle }}</ion-title>\n    <ion-buttons end *ngIf="showMenuToggle">\n      <button ion-button menuToggle end class="button button-clear">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n<!-- Generated template for the TrikyGamesComponent component -->\n    <ion-grid *ngIf="!isPlayoff">\n      <ion-row>\n        <ion-col>\n          <button ion-button full id="{{ trikyButtonId }}" color="triky-button" (click)="clickGames(\'triky\')">TRIKY</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button full id="{{ fifaButtonId }}" color="triky-button" (click)="clickGames(\'fifa\')">FIFA</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="card-triky" margin-bottom padding>\n  	<label style="white-space: normal !important;"><ion-icon name="ios-thumbs-up"></ion-icon>Coloca tu pronostico, el los siguientes recuadros de cada partido</label>\n</div>\n	<div *ngIf="showGame1">\n    	<ion-input type="hidden" value="{{ gameId1 }}"></ion-input>\n        <div class="date">{{ date1 }}{{ gameTitle1 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId1, equipo1_1_id, 1,1)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera1_1 }}" /></ion-col>\n                    <ion-col><label>{{ equipo1_1 }}</label></ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador1_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo1_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId1, equipo1_2_id,1,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera1_2 }}"/></ion-col>\n            		<ion-col><label>{{ equipo1_2 }}</label></ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador1_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo1_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n            	</ion-row>\n        	</ion-grid>\n    	</div>\n	</div>\n	\n	<div *ngIf="showGame2">\n	    <ion-input type="hidden" value="{{ gameId2 }}"></ion-input>\n        <div class="date">{{ date2 }}{{ gameTitle2 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId2, equipo2_1_id,2,1)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera2_1 }}" /></ion-col>\n                    <ion-col>{{ equipo2_1 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador2_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo2_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId2, equipo2_2_id,2,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera2_2 }}"/></ion-col>\n            		<ion-col>{{ equipo2_2 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador2_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo2_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>	\n	</div>\n	\n	<div *ngIf="showGame3">\n	   <ion-input type="hidden" value="{{ gameId3 }}"></ion-input>\n        <div class="date">{{ date3 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId3, equipo3_1_id,3,1)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera3_1 }}" /></ion-col>\n                    <ion-col>{{ equipo3_1 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador3_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo3_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                 <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId3, equipo3_2_id,3,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera3_2 }}"/></ion-col>\n            		<ion-col>{{ equipo3_2 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador3_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo3_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>	\n	</div>	\n	\n	<div *ngIf="showGame4">\n    	<ion-input type="hidden" value="{{ gameId4 }}"></ion-input>\n        <div class="date">{{ date4 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId4, equipo4_1_id,4,1)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera4_1 }}" /></ion-col>\n                    <ion-col>{{ equipo4_1 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador4_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo4_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId4, equipo4_2_id,4,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera4_2 }}"/></ion-col>\n            		<ion-col>{{ equipo4_2 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador4_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo4_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n        	    </ion-row>\n            </ion-grid>\n    	</div>	\n	</div>	\n	\n	\n	<div *ngIf="showGame5">\n    	<ion-input type="hidden" value="{{ gameId5 }}"></ion-input>\n        <div class="date">{{ date5 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId5, equipo5_1_id,5,1)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera5_1 }}" /></ion-col>\n                    <ion-col>{{ equipo5_1 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador5_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo5_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId5, equipo5_2_id,5,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera5_2 }}"/></ion-col>\n            		<ion-col>{{ equipo5_2 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador5_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo5_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>\n	</div>\n	\n	<div *ngIf="showGame6">\n	    <ion-input type="hidden" value="{{ gameId6 }}"></ion-input>\n        <div class="date">{{ date6 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId6, equipo6_1_id,6,1)">\n                    <ion-col><img width="42" height="28" src="images/{{ bandera6_1 }}" /></ion-col>\n                    <ion-col>{{ equipo6_1 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador6_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo6_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId6, equipo6_2_id,6,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera6_2 }}"/></ion-col>\n            		<ion-col>{{ equipo6_2 }}</ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador6_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo6_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n            	</ion-row>\n            </ion-grid>\n    	</div>\n	</div>\n	\n	<div *ngIf="showGame7">\n    	<ion-input type="hidden" value="{{ gameId7 }}"></ion-input>\n        <div class="date">{{ date7 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId7, equipo7_1_id,7,1)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera7_1 }}" /></ion-col>\n                    <ion-col><label>{{ equipo7_1 }}</label></ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador7_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo7_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId7, equipo7_2_id,7,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera7_2 }}"/></ion-col>\n            		<ion-col><label>{{ equipo7_2 }}</label></ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador7_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo7_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n            	</ion-row>\n        	</ion-grid>\n    	</div>\n	</div>\n	\n	<div *ngIf="showGame8">\n    	<ion-input type="hidden" value="{{ gameId8 }}"></ion-input>\n        <div class="date">{{ date8 }}</div>\n        <div margin-bottom class="card-triky">\n            <ion-grid>\n                <ion-row class="scores" (click)="clickTeam(gameId8, equipo8_1_id,8,1)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera8_1 }}" /></ion-col>\n                    <ion-col><label>{{ equipo8_1 }}</label></ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador8_1 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo8_1_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <span class="line-score"></span>\n                <ion-row class="scores" (click)="clickTeam(gameId8, equipo8_2_id,8,2)">\n                    <ion-col><img width="42" height="28"  src="images/{{ bandera8_2 }}"/></ion-col>\n            		<ion-col><label>{{ equipo8_2 }}</label></ion-col>\n                    <ion-col class="selected-team">\n                        <ion-item *ngIf="isFifa">{{ marcador8_2 }}</ion-item>\n                        <button end ion-button round *ngIf="equipo8_2_selected"><ion-icon end ios="ios-checkmark" md="md-checkmark"></ion-icon></button>\n                    </ion-col>\n            	</ion-row>\n        	</ion-grid>\n    	</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/src/pages/games/games.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], GamesPage);

//# sourceMappingURL=games.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map