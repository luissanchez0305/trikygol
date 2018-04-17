import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ForgotPage } from '../forgot/forgot';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
    private register : FormGroup;
    responseData : any;
    private tabBarElement : any;
    showLogout: boolean = false;
    emailValue : string = '';
    nameValue : string = '';
    groupValue : string = '';
    passwordStar : string = '';
    submitText : string = '';
    isLoggedIn : boolean;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public authService : AuthService, public helper : HelperService, private formBuilder: FormBuilder,
  public events : Events) {
        // Quitar password de las validaciones al hacer submit
        this.isLoggedIn = localStorage.getItem('UserLoggedIn') == 'true';
        if(localStorage.getItem('UserLoggedIn') == 'true'){
            this.register = this.formBuilder.group({
                email: ['', Validators.required],
                name: [''],
                pwd: ['', Validators.minLength(6)],
                group : ['']
            });        
        }
        else {
            this.register = this.formBuilder.group({
                email: ['', Validators.required],
                name: [''],
                pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
                group : ['']
            });
        }
        
        if(localStorage.getItem('UserLoggedIn') == 'true'){
            this.submitText = 'GUARDAR';
            this.passwordStar = '';
            this.showLogout = true;
            var data = { e : localStorage.getItem('userID') };
            this.authService.postData(data,'/userExists.php').then((result) => {
                this.responseData = result;
                this.emailValue = this.responseData[0].email;
                this.nameValue = this.responseData[0].nombre;
                this.groupValue = this.responseData[0].grupo;
            });
        }
        else{
            this.submitText = 'REGISTRAR';
            this.passwordStar = '*';
        }
  }
  
    ionViewDidLeave(){
        this.events.publish('reloadPositionTable');
    }
    
    openLogin(){
        this.navCtrl.setRoot(LoginPage);
    }
    
    openForgot(){
        this.navCtrl.setRoot(ForgotPage);
    }
  
    logout(){
        this.helper.logout();
        this.navCtrl.setRoot(LoginPage);
    }
    
    attemptUserRegister() {
        var data = { n : this.register.value.name, c : localStorage.getItem('userEmail'), e : this.register.value.email, p : this.register.value.pwd, g : this.register.value.group };
            
        this.authService.postData(data, localStorage.getItem('UserLoggedIn') == 'true' ? '/updateUser.php' : '/createUser.php').then((result) => {
            this.responseData = result;
            console.log(this.responseData);
            if (this.responseData.status == "ok") {
                //loginObjects();
                //localStorage.setItem('loginData', JSON.stringify(this.responseData));
                localStorage.setItem('userEmail', this.register.value.email);
                if(this.register.value.group.length > 0)
                    localStorage.setItem('UserLoggedGroup', this.register.value.group);
                else
                    localStorage.setItem('UserLoggedGroup', 'null');
                    
                if (localStorage.getItem('UserLoggedIn') == 'false')
                    localStorage.setItem('userID', this.responseData.id);
                if(localStorage.getItem('UserLoggedIn') == 'true')
                    this.helper.gapAlert('Perfil actualizado con exito', 'Perfil');
                else{
                    localStorage.setItem('UserLoggedIn', 'true');
                    this.navCtrl.setRoot(HomePage);
                }
                
                // reaparece el nav bar
                this.tabBarElement = document.querySelector('#tabs div.tabbar');
                this.tabBarElement.style.display = null;
            }
        }, (err) => {
            // Error log
            this.helper.gapAlert('Error en registro', err);
        });
    }

}
