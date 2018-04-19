import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Constants } from '../../services/constants';
/*import { SpeechRecognition } from '@ionic-native/speech-recognition';*/

/**
 * Generated class for the StickersMissingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stickers-missing',
  templateUrl: 'stickers-missing.html',
})
export class StickersMissingPage {
  /*matches : String[];
  recording : string = 'pause';*/
  private sections : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams/*, private plt: Platform,
  private speechRecognition: SpeechRecognition*/) {
    for(var i = 0; i < Constants.stickers.length; i++){
      var _stickers = [];
      for(var j = Constants.stickers[i].range[0]; j <= Constants.stickers[i].range[1]; j++){
        _stickers.push({ number: j, active: '' });
      }
      this.sections.push({ name: Constants.stickers[i].name, stickers: _stickers  });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersMissingPage');
  }
  click_number(obj){
    console.log(obj.number);
    obj.active = 'active';
  }
  /*
  async startListening(){
    const hasPermission = await this.speechRecognition.hasPermission();
    if(!hasPermission){
      await this.speechRecognition.requestPermission();
    }
    
    let options = {
      language: 'es-ES'
    };
    this.speechRecognition.startListening(options)
    
    /*.subscribe(
      (matches: Array<string>) => console.log(matches),
      (onerror) => console.log('error:', onerror)
    )/
    .subscribe(
      async (matches: Array<string>) => {
        this.matches = matches;
        this.recording = 'pause';
      },
      async (onerror) => { 
        alert('error: ' + onerror) 
        this.recording = 'pause';
      });
    this.recording = 'recording';
  }
  
  stopListening(){
    this.speechRecognition.stopListening().then(() => {
      this.recording = 'pause';
    })
  }
  
  isIos(){
    return this.plt.is('ios');
  }*/

}
