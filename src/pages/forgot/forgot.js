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
var login_1 = require('../login/login');
var register_1 = require('../register/register');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
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
            email: ['', forms_1.Validators.required]
        });
        this.showSent = false;
    }
    ForgotPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(login_1.LoginPage);
    };
    ForgotPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(register_1.RegisterPage);
    };
    ForgotPage.prototype.attemptUserForgot = function () {
        var _this = this;
        var data = { type: 'cred', e: this.forgot.value.email };
        this.authService.postData(data, 'sendMail.php').then(function (result) {
            _this.showSent = true;
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en logueao', err);
        });
    };
    ForgotPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-forgot',
            templateUrl: 'forgot.html'
        })
    ], ForgotPage);
    return ForgotPage;
}());
exports.ForgotPage = ForgotPage;
