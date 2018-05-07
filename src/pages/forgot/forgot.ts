import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import { Network } from '@ionic-native/network';
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
    private isDeviceOnline : boolean;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams,
    public authService : AuthService, public helper : HelperService, private formBuilder: FormBuilder, private network: Network, private zone: NgZone) {
      this.forgot = this.formBuilder.group({
        email: ['', Validators.required]
      });
      this.showSent = false;
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

    openLogin(){
        this.navCtrl.setRoot(LoginPage);
    }

    openRegister(){
        this.navCtrl.setRoot(RegisterPage);
    }

    attemptUserForgot() {
      let loading = this.loadingCtrl.create({
        content: 'Espere un momento...'
      });
      loading.present();
      var data = { type : 'cred', e : this.forgot.value.email };
        this.authService.postData(data,'/sendMail.php').then((result) => {
          loading.dismiss();
          this.showSent = true;
      }, (err) => {
        // Error log
        loading.dismiss();
        this.helper.gapAlert('Error en logueao', err);
      });
    }
}
