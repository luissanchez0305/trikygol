import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HomePage } from '../home/home';
import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private login : FormGroup;
  responseData : any;
  private tabBarElement : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public helper : HelperService, 
    private formBuilder: FormBuilder) {
        this.login = this.formBuilder.group({
          email: ['', Validators.required],
          pwd: ['', Validators.required],
        });
        this.tabBarElement = document.querySelector('#tabs div.tabbar');
        this.tabBarElement.style.display = 'none';
  }
    
    openRegister(){
      this.navCtrl.setRoot(RegisterPage);
    }
    
    openForgot(){
        this.navCtrl.setRoot(ForgotPage);
    }
  
    logout(){
      this.helper.logout();
      this.navCtrl.setRoot(LoginPage);
    }
    
    attemptUserLogin() {
        var data = { type : 'cred', e : this.login.value.email, p : this.login.value.pwd };
        this.authService.postData(data,'/cred.php').then((result) => {
          this.responseData = result;
          if (this.responseData.status == "ok") {
              this.helper.gapAlert('Usuario logueado', 'Login');
              localStorage.setItem('userEmail', this.login.value.email);
              localStorage.setItem('userID', this.responseData.user[0].id);
              localStorage.setItem('UserLoggedIn', 'true');
              localStorage.setItem('UserLoggedGroup', this.responseData.user[0].grupo);
              this.navCtrl.setRoot(HomePage);
              
              // reaparece el nav bar
              this.tabBarElement.style.display = null;
          } else {
              this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
          }
        }, (err) => {
          // Error log
          this.helper.gapAlert('Error en logueo', err);
        });
    }

}
