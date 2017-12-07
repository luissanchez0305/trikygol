"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
    HelperService = __decorate([
        core_1.Injectable()
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
