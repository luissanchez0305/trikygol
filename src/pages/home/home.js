"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var login_1 = require('../login/login');
var HomePage = (function () {
    function HomePage(navCtrl, helper) {
        this.navCtrl = navCtrl;
        this.helper = helper;
        if (localStorage.getItem('UserLoggedIn') != 'true') {
            this.navCtrl.setRoot(login_1.LoginPage);
        }
        this.myPoints = "50";
        this.scoresRight = '1000';
        this.tieGames = '200';
        this.winTeams = '300';
        this.passedTeams = '400';
        this.positionName1 = 'Luis - 50 puntos';
        this.positionName2 = 'Jorge - 40 puntos';
        this.positionName3 = 'Alejandro - 30 puntos';
        this.positionName4 = 'Christian - 20 puntos';
        this.positionName5 = 'Jan - 10 puntos';
    }
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
