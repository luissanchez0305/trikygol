import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the StickersMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stickers-match',
  templateUrl: 'stickers-match.html',
})
export class StickersMatchPage {

  private stickers : any;
  private showNoResult : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService : AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersMatchPage');
    this.authService.getData('u=' + localStorage.getItem('userID'), 'getStickersMatch.php').then((result) => {
    this.stickers = result;
    if(this.stickers.status == 'no results'){
      this.showNoResult = true;
    }
    else {
      this.showNoResult = false;
    }
    }, (error) => {
    alert(error);
    });
  }

  logout(){
    this.helper.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
