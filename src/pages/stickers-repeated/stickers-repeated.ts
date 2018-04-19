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

  private symbols : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var name = Constants.stickers.symbols['name'];
    for(var i = 0; i < Constants.stickers.symbols.range[1] - Constants.stickers.symbols.range[0]; i++){
      this.symbols.push(i);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersRepeatedPage');
  }
  
  click_number(number){
    console.log(number);
  }

}
