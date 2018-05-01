import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import { Network } from '@ionic-native/network';
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
  private isDeviceOnline : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public helper : HelperService,
    private formBuilder: FormBuilder, private network: Network, private zone: NgZone, public loadingCtrl: LoadingController) {
        this.login = this.formBuilder.group({
          email: ['', Validators.required],
          pwd: ['', Validators.required],
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(() => {
          this.zone.run(() => {
            this.isDeviceOnline = false;
          });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(() => {
          this.zone.run(() => {
            this.isDeviceOnline = true;
          });
        });
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
      let loading = this.loadingCtrl.create({
        content: 'Espere un momento...'
      });
      loading.present();
      var data = { type : 'cred', e : this.login.value.email, p : this.login.value.pwd };
      this.authService.postData(data,'/cred.php').then((result) => {
        loading.dismiss();
        this.responseData = result;
        if (this.responseData.status == "ok") {
            localStorage.setItem('userEmail', this.login.value.email);
            localStorage.setItem('userID', this.responseData.user[0].id);
            localStorage.setItem('UserLoggedIn', 'true');
            localStorage.setItem('UserLoggedGroup', this.responseData.user[0].grupo);
            this.navCtrl.setRoot(TabsPage);
        } else {
            this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
        }
      }, (err) => {
        // Error log
        loading.dismiss();
        this.helper.gapAlert('Error en logueo', err);
      });
    }

}
