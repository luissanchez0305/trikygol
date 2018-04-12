import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StickersMissingPage } from '../stickers-missing/stickers-missing';
import { StickersRepeatedPage } from '../stickers-repeated/stickers-repeated';
import { StickersMatchPage } from '../stickers-match/stickers-match';

/**
 * Generated class for the StickersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stickers',
  templateUrl: 'stickers.html',
})
export class StickersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersPage');
  }

  missing(){
    this.navCtrl.push(StickersMissingPage);
  }

  repeated(){
    this.navCtrl.push(StickersRepeatedPage);
  }

  makeMatch(){
    this.navCtrl.push(StickersMatchPage);
  }
}
