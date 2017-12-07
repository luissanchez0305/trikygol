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
var home_1 = require('../home/home');
var forgot_1 = require('../forgot/forgot');
var register_1 = require('../register/register');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authService, helper, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
        this.formBuilder = formBuilder;
        this.login = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            pwd: ['', forms_1.Validators.required]
        });
        this.tabBarElement = document.querySelector('#tabs div.tabbar');
        this.tabBarElement.style.display = 'none';
    }
    LoginPage.prototype.openRegister = function () {
        this.navCtrl.setRoot(register_1.RegisterPage);
    };
    LoginPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(forgot_1.ForgotPage);
    };
    LoginPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(LoginPage);
    };
    LoginPage.prototype.attemptUserLogin = function () {
        var _this = this;
        var data = { type: 'cred', e: this.login.value.email, p: this.login.value.pwd };
        this.authService.postData(data, '/cred.php').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.status == "ok") {
                //loginObjects();
                //localStorage.setItem('loginData', JSON.stringify(this.responseData));
                _this.helper.gapAlert('Usuario logueado', 'Login');
                localStorage.setItem('userEmail', _this.login.value.email);
                localStorage.setItem('UserLoggedIn', 'true');
                _this.navCtrl.setRoot(home_1.HomePage);
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
    LoginPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
