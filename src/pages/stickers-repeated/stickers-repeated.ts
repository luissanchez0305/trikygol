import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../services/constants';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(var i = 0; i < Constants.stickers.length; i++){
      var _stickers = [];
      for(var j = Constants.stickers[i].range[0]; j <= Constants.stickers[i].range[1]; j++){
        _stickers.push({ number: j, active: '' });
      }
      this.sections.push({ name: Constants.stickers[i].name, stickers: _stickers  });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersRepeatedPage');
  }
  
  click_number(obj){
    console.log(obj.number);
    obj.active = 'active';
  }

}
