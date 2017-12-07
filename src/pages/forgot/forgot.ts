import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
    private forgot : FormGroup;
    showSent: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public helper : HelperService, private formBuilder: FormBuilder) {
        this.forgot = this.formBuilder.group({
          email: ['', Validators.required]
        });
        this.showSent = false;
  }
    
    openLogin(){
        this.navCtrl.setRoot(LoginPage);
    }
    
    openRegister(){
        this.navCtrl.setRoot(RegisterPage);
    }
    
    attemptUserForgot() {
      var data = { type : 'cred', e : this.forgot.value.email };
        this.authService.postData(data,'/sendMail.php').then((result) => {
          this.showSent = true;
      }, (err) => {
        // Error log
        this.helper.gapAlert('Error en logueao', err);
      });
    }

}
