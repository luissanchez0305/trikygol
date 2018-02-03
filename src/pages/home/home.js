"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var login_1 = require('../login/login');
var forms_1 = require('@angular/forms');
var HomePage = (function () {
    function HomePage(navCtrl, helper, authService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.helper = helper;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.group = this.formBuilder.group({
            code: ['', forms_1.Validators.required]
        });
        if (localStorage.getItem('UserLoggedIn') != 'true') {
            this.navCtrl.setRoot(login_1.LoginPage);
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
        this.navCtrl.setRoot(login_1.LoginPage);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
