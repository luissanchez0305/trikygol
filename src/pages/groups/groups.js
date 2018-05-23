"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var games_1 = require('../games/games');
var login_1 = require('../login/login');
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
        this.authService.getData('source=' + _source + (_source == 'triky' ? "&u=" + localStorage.getItem('userID') : ""), 'getFirstSecondTeams.php').then(function (result) {
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
        this.navCtrl.setRoot(login_1.LoginPage);
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
        this.navCtrl.push(games_1.GamesPage, { type: this.typeShowing, group: letter });
    };
    GroupsPage = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'page-groups',
            templateUrl: 'groups.html'
        })
    ], GroupsPage);
    return GroupsPage;
}());
exports.GroupsPage = GroupsPage;
