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
    function GamesPage(navCtrl, authService, navParams, helper, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.helper = helper;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
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
            formMarcador6_2: new forms_1.FormControl(),
            formGameId7: new forms_1.FormControl(),
            formMarcador7_1: new forms_1.FormControl(),
            formMarcador7_2: new forms_1.FormControl(),
            formGameId8: new forms_1.FormControl(),
            formMarcador8_1: new forms_1.FormControl(),
            formMarcador8_2: new forms_1.FormControl()
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
        var url = this.isFifa ? 'getGamesByGroup.php' : 'getGamesByUserAndGroup.php';
        var data = '';
        switch (gameType) {
            case 1:
                data = this.isFifa ? 'g=' + this.group.toLowerCase() : 'g=' + this.group.toLowerCase() + '&u=' + localStorage.getItem('userID');
                break;
            case 2:
                url = this.isFifa ? 'getGamesOn8th.php' : 'getGamesByUserOn8th.php';
                data = this.isFifa ? '' : 'u=' + localStorage.getItem('userID');
                break;
            case 3:
                url = this.isFifa ? 'getGamesOn4th.php' : 'getGamesByUserOn4th.php';
                data = this.isFifa ? '' : 'u=' + localStorage.getItem('userID');
                break;
            case 4: // semifinal
            case 5: // 3er lugar y final
            case 6:
                url = this.isFifa ? 'getGamesOnFinals.php' : 'getGamesByUserOnFinals.php';
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
        });
    };
    GamesPage.prototype.saveGroupGames = function () {
        var url = 'updateUserGameScoreById.php';
        var data = '';
        var games = '';
        var scores1 = '';
        var scores2 = '';
        if (this.GroupGames.value.formMarcador1_1 && this.GroupGames.value.formMarcador1_2) {
            games = this.GroupGames.value.formGameId1;
            scores1 = this.GroupGames.value.formMarcador1_1;
            scores2 = this.GroupGames.value.formMarcador1_2;
        }
        if (this.GroupGames.value.formMarcador2_1 && this.GroupGames.value.formMarcador2_2) {
            games = this.GroupGames.value.formGameId2;
            scores1 = this.GroupGames.value.formMarcador2_1;
            scores2 = this.GroupGames.value.formMarcador2_2;
        }
        if (this.GroupGames.value.formMarcador3_1 && this.GroupGames.value.formMarcador3_2) {
            games = this.GroupGames.value.formGameId3;
            scores1 = this.GroupGames.value.formMarcador3_1;
            scores2 = this.GroupGames.value.formMarcador3_2;
        }
        if (this.GroupGames.value.formMarcador4_1 && this.GroupGames.value.formMarcador4_2) {
            games = this.GroupGames.value.formGameId3;
            scores1 = this.GroupGames.value.formMarcador3_1;
            scores2 = this.GroupGames.value.formMarcador3_2;
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
