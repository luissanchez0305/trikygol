import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { FormGroup, FormControl } from '@angular/forms';
import { HelperService } from '../../providers/helper';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  date1: string;
  date2: string;
  date3: string;
  date4: string;
  date5: string;
  date6: string;
  date7: string;
  date8: string;
  
  gameId1: string;
  gameId2: string;
  gameId3: string;
  gameId4: string;
  gameId5: string;
  gameId6: string;
  gameId7: string;
  gameId8: string;
  
  marcador1_1: string;
  marcador1_2: string;
  marcador2_1: string;
  marcador2_2: string;
  marcador3_1: string;
  marcador3_2: string;
  marcador4_1: string;
  marcador4_2: string;
  marcador5_1: string;
  marcador5_2: string;
  marcador6_1: string;
  marcador6_2: string;
  marcador7_1: string;
  marcador7_2: string;
  marcador8_1: string;
  marcador8_2: string;
  
  bandera1_1: string;
  bandera1_2: string;
  bandera2_1: string;
  bandera2_2: string;
  bandera3_1: string;
  bandera3_2: string;
  bandera4_1: string;
  bandera4_2: string;
  bandera5_1: string;
  bandera5_2: string;
  bandera6_1: string;
  bandera6_2: string;
  bandera7_1: string;
  bandera7_2: string;
  bandera8_1: string;
  bandera8_2: string;
  
  equipo1_1: string;
  equipo1_2: string;
  equipo2_1: string;
  equipo2_2: string;
  equipo3_1: string;
  equipo3_2: string;
  equipo4_1: string;
  equipo4_2: string;
  equipo5_1: string;
  equipo5_2: string;
  equipo6_1: string;
  equipo6_2: string;
  equipo7_1: string;
  equipo7_2: string;
  equipo8_1: string;
  equipo8_2: string;
  
  public gamesTitle: string;
  public showMenuToggle : boolean;
  private responseData : any;
  private isFifa: boolean;
  private isPlayoff: boolean;
  private group: string;
  private GroupGames : FormGroup;
  private mode : string;
  private trikyButtonId : string;
  private fifaButtonId : string;
  private showGameMenu : boolean;
  private gameTitle1 : string;
  private gameTitle2 : string;
  private showGame1: boolean;
  private showGame2: boolean;
  private showGame3: boolean;
  private showGame4: boolean;
  private showGame5: boolean;
  private showGame6: boolean;
  private showGame7: boolean;
  private showGame8: boolean;
   
  constructor(public navCtrl: NavController,  private authService : AuthService, public navParams: NavParams, public helper : HelperService,
    public events : Events, public loadingCtrl: LoadingController) {
    this.GroupGames = new FormGroup({
       formGameId1: new FormControl(),
       formMarcador1_1: new FormControl(),
       formMarcador1_2: new FormControl(),
       formGameId2: new FormControl(),
       formMarcador2_1: new FormControl(),
       formMarcador2_2: new FormControl(),
       formGameId3: new FormControl(),
       formMarcador3_1: new FormControl(),
       formMarcador3_2: new FormControl(),
       formGameId4: new FormControl(),
       formMarcador4_1: new FormControl(),
       formMarcador4_2: new FormControl(),
       formGameId5: new FormControl(),
       formMarcador5_1: new FormControl(),
       formMarcador5_2: new FormControl(),
       formGameId6: new FormControl(),
       formMarcador6_1: new FormControl(),
       formMarcador6_2: new FormControl(),
       formGameId7: new FormControl(),
       formMarcador7_1: new FormControl(),
       formMarcador7_2: new FormControl(),
       formGameId8: new FormControl(),
       formMarcador8_1: new FormControl(),
       formMarcador8_2: new FormControl(),
    });
    this.mode = navParams.get('mode');
    if(typeof this.mode !== 'undefined') {
      this.trikyButtonId = 'triky-button-' + this.mode;
      this.fifaButtonId = 'fifa-button-' + this.mode;
    }
    else{
      this.trikyButtonId = 'triky-button-';
      this.fifaButtonId = 'fifa-button-';
    }
  }
  
  ionViewDidEnter(){
    this.mode = this.navParams.get('mode');
    this.isPlayoff = (typeof this.mode === 'undefined');
    this.showGameMenu = (typeof this.mode !== 'undefined');
    this.isFifa = this.navParams.get('type') == 'fifa';
    this.displaySelectedSource(this.navParams.get('type'));
    this.showMenuToggle = true;
    if(this.isPlayoff){
      this.showMenuToggle = false;
      this.group = this.navParams.get('group');
      this.gamesTitle = "Juegos Grupo " + this.group;
      this.loadGames(1);
    }
    else {
      this.loadPlayOffs();
    }
  }
   
  // Despliega seleccionado el boton de Triky o Fifa
  displaySelectedSource(source){
    var oppositeSource = source == 'fifa' ? 'triky' : 'fifa';
    var currentSelectedButton = document.querySelector('page-games button.selected#' + oppositeSource + '-button-' + this.mode);
    if(currentSelectedButton != null){
      document.querySelector('page-games button.selected#' + oppositeSource + '-button-' + this.mode).className = currentSelectedButton.className.replace(/ selected/g,'');
    }
    else{
      currentSelectedButton = document.querySelector('page-games #' + source + '-button-' + (typeof this.mode === 'undefined' ? '' : this.mode));
      if(currentSelectedButton != null)
        currentSelectedButton.className += ' selected';
    }
    this.isFifa = source == 'fifa';
  }
  
  loadPlayOffs(){
    switch(this.mode){
      case '8':
        this.gamesTitle = '8vos de final';
        this.loadGames(2);
        console.log('octavos');
        break;
      case '4':
        this.gamesTitle = '4tos de final';
        this.loadGames(3);
        console.log('cuartos');
        break;
      case 'semifinal':
        this.gamesTitle = 'Semifinales';
        this.loadGames(4);
        console.log('semifinal');
        break;
      case 'final':
        this.gamesTitle = 'Finales';
        this.loadGames(5);
        console.log('final');
        break;
    }
  }
  
  loadGames(gameType){
    let loading = this.loadingCtrl.create({
      content: 'Espere un momento...'
    });
    loading.present();
    this.showGame5 = false;
    this.showGame6 = false;
    this.showGame7 = false;
    this.showGame8 = false;
    var url = this.isFifa ? '/getGamesByGroup.php' : '/getGamesByUserAndGroup.php';
    var data = '';
    switch(gameType){
      case 1:
        data = this.isFifa ? 'g='+ this.group.toLowerCase() : 'g=' + this.group.toLowerCase() + '&u=' + localStorage.getItem('userID');
        break;
      case 2: // octavos
        url = this.isFifa ? '/getGamesOn8th.php' : '/getGamesByUserOn8th.php';
        data = this.isFifa ? '' : 'u=' + localStorage.getItem('userID');
        break;
      case 3: // cuartos
        url = this.isFifa ? '/getGamesOn4th.php' : '/getGamesByUserOn4th.php';
        data = this.isFifa ? '' : 'u=' + localStorage.getItem('userID');
        break;
      case 4: // semifinal
      case 5: // 3er lugar y final
      case 6:
        url = this.isFifa ? '/getGamesOnFinals.php' : '/getGamesByUserOnFinals.php';
        data = 't=' + (gameType == 4 ? 'semi' : 'final') + '&' + (this.isFifa ? '' : 'u=' + localStorage.getItem('userID'));
        break;
    }
    this.authService.getData(data,url).then((result) => {
      loading.dismiss();
      this.responseData = result;
      if(gameType == 4){
        this.gameTitle1 = " - Semifinal";
        this.gameTitle2 = " - Semifinal";
      }
      else if(gameType == 5 || gameType == 6){
        this.gameTitle1 = " - 3er puesto";
        this.gameTitle2 = " - FINAL";
      }
      for(var i = 0; i < this.responseData.length; i++){
        var juego = this.responseData[i];
        var gameId = juego.juegoid;
        var date = this.helper.formatDate(juego.fecha);
        var bandera1 = juego.bandera1 != null && juego.bandera1.length>0 ? juego.bandera1 : 'noflag.png';
        var marcador1 = juego.equipo1marcador;
        var equipo1 = juego.equipo1;
        var bandera2 = juego.bandera2 != null && juego.bandera2.length>0 ? juego.bandera2 : 'noflag.png'
        var marcador2 = juego.equipo2marcador;
        var equipo2 = juego.equipo2;
        
        switch(i){
          case 0:
            this.showGame1 = true;
            this.gameId1 = gameId;
            this.date1 = date;
            this.bandera1_1 = bandera1;
            this.marcador1_1 = marcador1;
            this.equipo1_1 = equipo1;
            this.bandera1_2 = bandera2;
            this.marcador1_2 = marcador2;
            this.equipo1_2 = equipo2;
            break;
          case 1:
            this.showGame2 = true;
            this.gameId2 = gameId;
            this.date2 = date;
            this.bandera2_1 = bandera1;
            this.marcador2_1 = marcador1;
            this.equipo2_1 = equipo1;
            this.bandera2_2 = bandera2;
            this.marcador2_2 = marcador2;
            this.equipo2_2 = equipo2;
            break;
          case 2:
            this.showGame3 = true;
            this.gameId3 = gameId;
            this.date3 = date;
            this.bandera3_1 = bandera1;
            this.marcador3_1 = marcador1;
            this.equipo3_1 = equipo1;
            this.bandera3_2 = bandera2;
            this.marcador3_2 = marcador2;
            this.equipo3_2 = equipo2;
            break;
          case 3:
            this.showGame4 = true;
            this.gameId4 = gameId;
            this.date4 = date;
            this.bandera4_1 = bandera1;
            this.marcador4_1 = marcador1;
            this.equipo4_1 = equipo1;
            this.bandera4_2 = bandera2;
            this.marcador4_2 = marcador2;
            this.equipo4_2 = equipo2;
            break;
          case 4:
            this.showGame5 = true;
            this.gameId5 = gameId;
            this.date5 = date;
            this.bandera5_1 = bandera1;
            this.marcador5_1 = marcador1;
            this.equipo5_1 = equipo1;
            this.bandera5_2 = bandera2;
            this.marcador5_2 = marcador2;
            this.equipo5_2 = equipo2;
            break;
          case 5:
            this.showGame6 = true;
            this.gameId6 = gameId;
            this.date6 = date;
            this.bandera6_1 = bandera1;
            this.marcador6_1 = marcador1;
            this.equipo6_1 = equipo1;
            this.bandera6_2 = bandera2;
            this.marcador6_2 = marcador2;
            this.equipo6_2 = equipo2;
            break;
          case 6:
            this.showGame7 = true;
            this.gameId7 = gameId;
            this.date7 = date;
            this.bandera7_1 = bandera1;
            this.marcador7_1 = marcador1;
            this.equipo7_1 = equipo1;
            this.bandera7_2 = bandera2;
            this.marcador7_2 = marcador2;
            this.equipo7_2 = equipo2;
            break;
          case 7:
            this.showGame8 = true;
            this.gameId8 = gameId;
            this.date8 = date;
            this.bandera8_1 = bandera1;
            this.marcador8_1 = marcador1;
            this.equipo8_1 = equipo1;
            this.bandera8_2 = bandera2;
            this.marcador8_2 = marcador2;
            this.equipo8_2 = equipo2;
            break;
          }
        }
    });
  }
  
  saveGroupGames() {
    var url = '/updateUserGameScoreById.php';
    var data = '';
    if(this.GroupGames.value.formMarcador1_1 && this.GroupGames.value.formMarcador1_2){
      data = 'g='+ this.GroupGames.value.formGameId1+'&s1='+ this.GroupGames.value.formMarcador1_1+'&s2='+ this.GroupGames.value.formMarcador1_2 +'&u='+ localStorage.getItem('userID');
    }
    if(this.GroupGames.value.formMarcador2_1 && this.GroupGames.value.formMarcador2_2){
      data = 'g='+ this.GroupGames.value.formGameId2+'&s1='+ this.GroupGames.value.formMarcador2_1+'&s2='+ this.GroupGames.value.formMarcador2_2 +'&u='+ localStorage.getItem('userID');
    }
    if(this.GroupGames.value.formMarcador3_1 && this.GroupGames.value.formMarcador3_2){
      data = 'g='+ this.GroupGames.value.formGameId3+'&s1='+ this.GroupGames.value.formMarcador3_1+'&s2='+ this.GroupGames.value.formMarcador3_2 +'&u='+ localStorage.getItem('userID');
    }
    if(this.GroupGames.value.formMarcador4_1 && this.GroupGames.value.formMarcador4_2){
      data = 'g='+ this.GroupGames.value.formGameId4+'&s1='+ this.GroupGames.value.formMarcador4_1+'&s2='+ this.GroupGames.value.formMarcador4_2 +'&u='+ localStorage.getItem('userID');
    }
    if(this.GroupGames.value.formMarcador5_1 && this.GroupGames.value.formMarcador5_2){
      data = 'g='+ this.GroupGames.value.formGameId5+'&s1='+ this.GroupGames.value.formMarcador5_1+'&s2='+ this.GroupGames.value.formMarcador5_2 +'&u='+ localStorage.getItem('userID');
    }
    if(this.GroupGames.value.formMarcador6_1 && this.GroupGames.value.formMarcador6_2){
      data = 'g='+ this.GroupGames.value.formGameId6+'&s1='+ this.GroupGames.value.formMarcador6_1+'&s2='+ this.GroupGames.value.formMarcador6_2 +'&u='+ localStorage.getItem('userID');
    }
  
    this.navCtrl.popToRoot();
    this.authService.getData(data,url).then(function(result){
      console.log('saved');
    });
    this.events.publish('reloadGroups');
  }
  
  clickGames(type){
    this.displaySelectedSource(type);
    this.loadPlayOffs()
  }
}
