"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var login_1 = require('../login/login');
/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupsPage = (function () {
    function GroupsPage(navCtrl, navParams, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helper = helper;
        this.noWrapA = "";
        this.noWrapB = "noWrap";
        this.noWrapC = "noWrap";
        this.noWrapD = "noWrap";
        this.noWrapE = "noWrap";
        this.noWrapF = "noWrap";
        this.noWrapG = "noWrap";
        this.noWrapH = "noWrap";
    }
    GroupsPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(login_1.LoginPage);
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
