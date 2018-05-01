import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { HelperService } from '../../providers/helper';

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
  private matchResult : any;
  private stickers : any;
  private showNoResult : boolean;

  constructor(public navCtrl: NavController, public helper : HelperService, public navParams: NavParams, private authService : AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersMatchPage');
    this.authService.getData('u=' + localStorage.getItem('userID') + '&g=' + localStorage.getItem('UserLoggedGroup'), 'getStickersMatch.php').then((result) => {
    this.matchResult = result;
    if(this.matchResult.status == 'no results' || this.matchResult.status == 'no params'){
        this.showNoResult = true;
    }
    else {
        this.showNoResult = false;
        this.stickers = result;
        var _stickers = [];
        var currentName = '';
        for(var i = 0; i < this.stickers.length; i++){
            var sticker = this.stickers[i];
            if(sticker.nombre != currentName){
                currentName = sticker.nombre;
                var _numbers = [];
                for(var j = i; j < this.stickers.length; j++){
                    var number = this.stickers[j];
                    if(number.nombre != currentName){
                        break;
                    }
                    _numbers.push(number.numero)
                }
                _stickers.push({ nombre: currentName, numeros:_numbers })
            }
        }
        this.stickers = _stickers;
    }
    }, (error) => {
    alert(error);
    });
  }
}
