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
var login_1 = require('../login/login');
var forgot_1 = require('../forgot/forgot');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, authService, helper, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.helper = helper;
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
                email: ['', forms_1.Validators.required],
                name: [''],
                pwd: ['', forms_1.Validators.minLength(6)],
                group: ['']
            });
        }
        else {
            this.register = this.formBuilder.group({
                email: ['', forms_1.Validators.required],
                name: [''],
                pwd: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
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
    RegisterPage.prototype.openLogin = function () {
        this.navCtrl.setRoot(login_1.LoginPage);
    };
    RegisterPage.prototype.openForgot = function () {
        this.navCtrl.setRoot(forgot_1.ForgotPage);
    };
    RegisterPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(login_1.LoginPage);
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
                localStorage.setItem('userEmail', _this.register.value.email);
                if (_this.register.value.group.length > 0)
                    localStorage.setItem('UserLoggedGroup', _this.register.value.group);
                else
                    localStorage.setItem('UserLoggedGroup', 'null');
                if (localStorage.getItem('UserLoggedIn') == 'false')
                    localStorage.setItem('userID', _this.responseData.id);
                if (localStorage.getItem('UserLoggedIn') == 'true')
                    _this.helper.gapAlert('Perfil actualizado con exito', 'Perfil');
                else {
                    localStorage.setItem('UserLoggedIn', 'true');
                    _this.navCtrl.setRoot(home_1.HomePage);
                }
                // reaparece el nav bar
                _this.tabBarElement = document.querySelector('#tabs div.tabbar');
                _this.tabBarElement.style.display = null;
            }
        }, function (err) {
            // Error log
            _this.helper.gapAlert('Error en registro', err);
        });
    };
    RegisterPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-register',
            templateUrl: 'register.html'
        })
    ], RegisterPage);
    return RegisterPage;
}());
exports.RegisterPage = RegisterPage;
