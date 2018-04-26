import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../services/constants';
import { AuthService } from '../../providers/auth-service';
import { HelperService } from '../../providers/helper';

/**
 * Generated class for the StickersRepeatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stickers-repeated',
  templateUrl: 'stickers-repeated.html',
})
export class StickersRepeatedPage {

  private sections : any = [];
  private updateResult : any;
  private myStickers : any;
  constructor(public helper : HelperService, public navCtrl: NavController, public navParams: NavParams, private authService : AuthService, private zone: NgZone) {
    this.authService.getData('u=' + localStorage.getItem('userID') + '&t=repeated','getStickers.php').then((result) => {
      this.myStickers = result;

      for(var i = 0; i < Constants.stickers.length; i++){
        var _stickers = [];
        for(var j = Constants.stickers[i].range[0]; j <= Constants.stickers[i].range[1]; j++){
          var founded = this.helper.searchNumber(this.myStickers, j);
          _stickers.push({ number: j, active: founded ? 'active' : '' });
        }
        this.sections.push({ name: Constants.stickers[i].name, stickers: _stickers  });
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersRepeatedPage');
  }

  click_number(obj){
    this.authService.getData('u=' + localStorage.getItem('userID') + '&t=repeated&n=' + obj.number,'updateStickers.php').then((result) => {
      this.updateResult = result;
      if(this.updateResult.status == 'success'){
        obj.active = 'active';
      }
    });
  }

}
