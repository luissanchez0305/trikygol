import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

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
  matches : String[];
  languages : String[];
  recording : string = 'pause';
  showPermissionButton : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform,
  private speechRecognition: SpeechRecognition) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StickersMissingPage');
    // Get the list of supported languages
    /*this.speechRecognition.getSupportedLanguages()
      .then(
        (languages: Array<string>) => this.languages = languages,
        (error) => console.log(error)
      )*/
  }
  
  getPermissions(){
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if(!hasPermission){
          this.speechRecognition.requestPermission();
        }
      });
  }
  
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
    )*/
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
  }

}
