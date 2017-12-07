"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var forms_1 = require('@angular/forms');
/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamesPage = (function () {
    function GamesPage(navCtrl, authService, navParams, helper, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.GroupGames = new forms_1.FormGroup({
            formGameId1: new forms_1.FormControl(),
            formMarcador1_1: new forms_1.FormControl(),
            formMarcador1_2: new forms_1.FormControl(),
            formGameId2: new forms_1.FormControl(),
            formMarcador2_1: new forms_1.FormControl(),
            formMarcador2_2: new forms_1.FormControl(),
            formGameId3: new forms_1.FormControl(),
            formMarcador3_1: new forms_1.FormControl(),
            formMarcador3_2: new forms_1.FormControl(),
            formGameId4: new forms_1.FormControl(),
            formMarcador4_1: new forms_1.FormControl(),
            formMarcador4_2: new forms_1.FormControl(),
            formGameId5: new forms_1.FormControl(),
            formMarcador5_1: new forms_1.FormControl(),
            formMarcador5_2: new forms_1.FormControl(),
            formGameId6: new forms_1.FormControl(),
            formMarcador6_1: new forms_1.FormControl(),
            formMarcador6_2: new forms_1.FormControl()
        });
        this.isFifa = navParams.get('type') == 'fifa';
        this.group = navParams.get('group');
        this.groupLetter = this.group;
        var url = this.isFifa ? '/getGamesByGroup.php' : '/getGamesByUserAndGroup.php';
        var data = this.isFifa ? 'g=' + this.group.toLowerCase() : 'g=' + this.group.toLowerCase() + '&u=' + localStorage.getItem('userID');
        this.authService.getData(data, url).then(function (result) {
            _this.responseData = result;
            for (var i = 0; i < _this.responseData.length; i++) {
                var juego = _this.responseData[i];
                var gameId = juego.juegoid;
                var date = _this.helper.formatDate(juego.fecha);
                var bandera1 = juego.bandera1.length > 0 ? juego.bandera1 : 'noflag.png';
                var marcador1 = juego.equipo1marcador;
                var equipo1 = juego.equipo1;
                var bandera2 = juego.bandera2.length > 0 ? juego.bandera2 : 'noflag.png';
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
                        _this.gameId6 = gameId;
                        _this.date6 = date;
                        _this.bandera6_1 = bandera1;
                        _this.marcador6_1 = marcador1;
                        _this.equipo6_1 = equipo1;
                        _this.bandera6_2 = bandera2;
                        _this.marcador6_2 = marcador2;
                        _this.equipo6_2 = equipo2;
                        break;
                }
            }
        });
    }
    GamesPage.prototype.saveGroupGames = function () {
        this.form;
        console.log('save games');
    };
    GamesPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-games',
            templateUrl: 'games.html'
        })
    ], GamesPage);
    return GamesPage;
}());
exports.GamesPage = GamesPage;
