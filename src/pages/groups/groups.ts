import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HelperService } from '../../providers/helper';
import { ModalController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { GamesPage } from '../games/games';

import { LoginPage } from '../login/login';
/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  private showPlacesA : boolean;
  private showPlacesB : boolean; 
  private showPlacesC : boolean;
  private showPlacesD : boolean; 
  private showPlacesE : boolean;
  private showPlacesF : boolean; 
  private showPlacesG : boolean;
  private showPlacesH : boolean;  
  private showInfoBarA : boolean;
  private showInfoBarB : boolean;
  private showInfoBarC : boolean;
  private showInfoBarD : boolean;
  private showInfoBarE : boolean;
  private showInfoBarF : boolean;
  private showInfoBarG : boolean;
  private showInfoBarH : boolean;

  private teamA1Id : number;
  private teamA1 : string;
  private teamA1Flag : string;
  private teamA1Points : string;
  private teamA1Pos : number;
  private teamA2Id : number;
  private teamA2 : string;
  private teamA2Flag : string;
  private teamA2Points : string;
  private teamA2Pos : number;
  private teamA3Id : number;
  private teamA3 : string;
  private teamA3Flag : string;
  private teamA3Points : string;
  private teamA3Pos : number;
  private teamA4Id : number;
  private teamA4 : string;
  private teamA4Flag : string;
  private teamA4Points : string;
  private teamA4Pos : number;
  private teamB1Id : number;
  private teamB1 : string;
  private teamB1Flag : string;
  private teamB1Points : string;
  private teamB1Pos : number;
  private teamB2Id : number;
  private teamB2 : string;
  private teamB2Flag : string;
  private teamB2Points : string;
  private teamB2Pos : number;
  private teamB3Id : number;
  private teamB3 : string;
  private teamB3Flag : string;
  private teamB3Points : string;
  private teamB3Pos : number;
  private teamB4Id : number;
  private teamB4 : string;
  private teamB4Flag : string;
  private teamB4Points : string;
  private teamB4Pos : number;
  private teamC1Id : number;
  private teamC1 : string;
  private teamC1Flag : string;
  private teamC1Points : string;
  private teamC1Pos : number;
  private teamC2Id : number;
  private teamC2 : string;
  private teamC2Flag : string;
  private teamC2Points : string;
  private teamC2Pos : number;
  private teamC3Id : number;
  private teamC3 : string;
  private teamC3Flag : string;
  private teamC3Points : string;
  private teamC3Pos : number;
  private teamC4Id : number;
  private teamC4 : string;
  private teamC4Flag : string;
  private teamC4Points : string;
  private teamC4Pos : number;
  private teamD1Id : number;
  private teamD1 : string;
  private teamD1Flag : string;
  private teamD1Points : string;
  private teamD1Pos : number;
  private teamD2Id : number;
  private teamD2 : string;
  private teamD2Flag : string;
  private teamD2Points : string;
  private teamD2Pos : number;
  private teamD3Id : number;
  private teamD3 : string;
  private teamD3Flag : string;
  private teamD3Points : string;
  private teamD3Pos : number;
  private teamD4Id : number;
  private teamD4 : string;
  private teamD4Flag : string;
  private teamD4Points : string;
  private teamD4Pos : number;
  private teamE1Id : number;
  private teamE1 : string;
  private teamE1Flag : string;
  private teamE1Points : string;
  private teamE1Pos : number;
  private teamE2Id : number;
  private teamE2 : string;
  private teamE2Flag : string;
  private teamE2Points : string;
  private teamE2Pos : number;
  private teamE3Id : number;
  private teamE3 : string;
  private teamE3Flag : string;
  private teamE3Points : string;
  private teamE3Pos : number;
  private teamE4Id : number;
  private teamE4 : string;
  private teamE4Flag : string;
  private teamE4Points : string;
  private teamE4Pos : number;
  private teamF1Id : number;
  private teamF1 : string;
  private teamF1Flag : string;
  private teamF1Points : string;
  private teamF1Pos : number;
  private teamF2Id : number;
  private teamF2 : string;
  private teamF2Flag : string;
  private teamF2Points : string;
  private teamF2Pos : number;
  private teamF3Id : number;
  private teamF3 : string;
  private teamF3Flag : string;
  private teamF3Points : string;
  private teamF3Pos : number;
  private teamF4Id : number;
  private teamF4 : string;
  private teamF4Flag : string;
  private teamF4Points : string;
  private teamF4Pos : number;
  private teamG1Id : number;
  private teamG1 : string;
  private teamG1Flag : string;
  private teamG1Points : string;
  private teamG1Pos : number;
  private teamG2Id : number;
  private teamG2 : string;
  private teamG2Flag : string;
  private teamG2Points : string;
  private teamG2Pos : number;
  private teamG3Id : number;
  private teamG3 : string;
  private teamG3Flag : string;
  private teamG3Points : string;
  private teamG3Pos : number;
  private teamG4Id : number;
  private teamG4 : string;
  private teamG4Flag : string;
  private teamG4Points : string;
  private teamG4Pos : number;
  private teamH1Id : number;
  private teamH1 : string;
  private teamH1Flag : string;
  private teamH1Points : string;
  private teamH1Pos : number;
  private teamH2Id : number;
  private teamH2 : string;
  private teamH2Flag : string;
  private teamH2Points : string;
  private teamH2Pos : number;
  private teamH3Id : number;
  private teamH3 : string;
  private teamH3Flag : string;
  private teamH3Points : string;
  private teamH3Pos : number;
  private teamH4Id : number;
  private teamH4 : string;
  private teamH4Flag : string;
  private teamH4Points : string;
  private teamH4Pos : number;
  
  private fillTextA : string;
  private fillTextB : string;
  private fillTextC : string;
  private fillTextD : string;
  private fillTextE : string;
  private fillTextF : string;
  private fillTextG : string;
  private fillTextH : string;
  
  private groupAFirst : number = 0;
  private groupASecond : number = 0;
  private groupBFirst : number = 0;
  private groupBSecond : number = 0;
  private groupCFirst : number = 0;
  private groupCSecond : number = 0;
  private groupDFirst : number = 0;
  private groupDSecond : number = 0;
  private groupEFirst : number = 0;
  private groupESecond : number = 0;
  private groupFFirst : number = 0;
  private groupFSecond : number = 0;
  private groupGFirst : number = 0;
  private groupGSecond : number = 0;
  private groupHFirst : number = 0;
  private groupHSecond : number = 0;
  
  private responseData : any;
  private typeShowing : string;
  private defaultFillScoresText : string = "Click a equipos que pasan a 8vos";
  private showFifaItems : boolean;
  
  constructor(public navCtrl: NavController, private authService : AuthService, public navParams: NavParams, public helper : HelperService, 
    public modalCtrl: ModalController, public events : Events, public loadingCtrl: LoadingController) {
    this.displayGroupsAndTeams('triky');
      
    this.fillTextA = this.defaultFillScoresText;
    this.fillTextB = this.defaultFillScoresText;
    this.fillTextC = this.defaultFillScoresText;
    this.fillTextD = this.defaultFillScoresText;
    this.fillTextE = this.defaultFillScoresText;
    this.fillTextF = this.defaultFillScoresText;
    this.fillTextG = this.defaultFillScoresText;
    this.fillTextH = this.defaultFillScoresText;
    
    this.events.subscribe('reloadGroups',() => {
        //call methods to refresh content
        this.displayGroupsAndTeams('triky');
    });
  }
  
  private displayGroupsAndTeams(_source){
      let loading = this.loadingCtrl.create({
        content: 'Espere un momento...'
      });
      loading.present();
      // "getFirstSecondTeams.php" TRAE TODOS LOS EQUIPOS POR GRUPOS
      
      this.authService.getData('source='+_source+(_source == 'triky' ? "&u=" + localStorage.getItem('userID') : ""),_source == 'triky' ? 'getUserTeamsPositions.php' : 'getFirstSecondTeams.php')
        .then((result) => {
          loading.dismiss();
          this.responseData = result;
          this.typeShowing = _source;
          this.showPlacesA = false;
          this.showPlacesB = false; 
          this.showPlacesC = false;
          this.showPlacesD = false; 
          this.showPlacesE = false;
          this.showPlacesF = false; 
          this.showPlacesG = false;
          this.showPlacesH = false;  
          /* PONER LOS EQUIPOS DE CADA GRUPO teamA1, teamA2... SI EL GRUPO TIENE EQUIPOS PONER VARIABLE noWrap<LETRA> = "col"
            O PONER SI EL GRUPO NO TIENE EQUIPO - PONER TEXTO "Equipos aun no seleccionados" Y VARIABLE noWrap<LETRA> = "noWrap"*/
          for(var i = 0; i < this.responseData.length; i++){
            var grupo = this.responseData[i];
            switch(grupo.letter){
              case 'a':
                  this.teamA1Id = grupo.team1.id;
                  this.teamA1 = grupo.team1.nombre;
                  this.teamA1Flag = grupo.team1.bandera;
                  this.teamA1Points = grupo.team1.puntos;
                  this.showPlacesA = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamA1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamA2Id = grupo.team2.id;
                  this.teamA2 = grupo.team2.nombre;
                  this.teamA2Flag = grupo.team2.bandera;
                  this.teamA2Points = grupo.team2.puntos;
                  this.teamA2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamA3Id = grupo.team3.id;
                  this.teamA3 = grupo.team3.nombre;
                  this.teamA3Flag = grupo.team3.bandera;
                  this.teamA3Points = grupo.team3.puntos;
                  this.teamA3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamA4Id = grupo.team4.id;
                  this.teamA4 = grupo.team4.nombre;
                  this.teamA4Flag = grupo.team4.bandera;
                  this.teamA4Points = grupo.team4.puntos;
                  this.teamA4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarA = !this.showPlacesA;
                break;
              case 'b':
                  this.teamB1Id = grupo.team1.id;
                  this.teamB1 = grupo.team1.nombre;
                  this.teamB1Flag = grupo.team1.bandera;
                  this.teamB1Points = grupo.team1.puntos;
                  this.showPlacesB = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamB1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamB2Id = grupo.team2.id;
                  this.teamB2 = grupo.team2.nombre;
                  this.teamB2Flag = grupo.team2.bandera;
                  this.teamB2Points = grupo.team2.puntos;
                  this.teamB2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamB3Id = grupo.team3.id;
                  this.teamB3 = grupo.team3.nombre;
                  this.teamB3Flag = grupo.team3.bandera;
                  this.teamB3Points = grupo.team3.puntos;
                  this.teamB3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamB4Id = grupo.team4.id;
                  this.teamB4 = grupo.team4.nombre;
                  this.teamB4Flag = grupo.team4.bandera;
                  this.teamB4Points = grupo.team4.puntos;
                  this.teamB4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarB = !this.showPlacesB;
                break;
              case 'c':
                  this.teamC1Id = grupo.team1.id;
                  this.teamC1 = grupo.team1.nombre;
                  this.teamC1Flag = grupo.team1.bandera;
                  this.teamC1Points = grupo.team1.puntos;
                  this.showPlacesC = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamC1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamC2Id = grupo.team2.id;
                  this.teamC2 = grupo.team2.nombre;
                  this.teamC2Flag = grupo.team2.bandera;
                  this.teamC2Points = grupo.team2.puntos;
                  this.teamC2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamC3Id = grupo.team3.id;
                  this.teamC3 = grupo.team3.nombre;
                  this.teamC3Flag = grupo.team3.bandera;
                  this.teamC3Points = grupo.team3.puntos;
                  this.teamC3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamC4Id = grupo.team4.id;
                  this.teamC4 = grupo.team4.nombre;
                  this.teamC4Flag = grupo.team4.bandera;
                  this.teamC4Points = grupo.team4.puntos;
                  this.teamC4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarC = !this.showPlacesC;
                break;
              case 'd':
                  this.teamD1Id = grupo.team1.id;
                  this.teamD1 = grupo.team1.nombre;
                  this.teamD1Flag = grupo.team1.bandera;
                  this.teamD1Points = grupo.team1.puntos;
                  this.showPlacesD = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamD1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamD2Id = grupo.team2.id;
                  this.teamD2 = grupo.team2.nombre;
                  this.teamD2Flag = grupo.team2.bandera;
                  this.teamD2Points = grupo.team2.puntos;
                  this.teamD2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamD3Id = grupo.team3.id;
                  this.teamD3 = grupo.team3.nombre;
                  this.teamD3Flag = grupo.team3.bandera;
                  this.teamD3Points = grupo.team3.puntos;
                  this.teamD3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamD4Id = grupo.team4.id;
                  this.teamD4 = grupo.team4.nombre;
                  this.teamD4Flag = grupo.team4.bandera;
                  this.teamD4Points = grupo.team4.puntos;
                  this.teamD4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarD = !this.showPlacesD;
                break;
              case 'e':
                  this.teamE1Id = grupo.team1.id;
                  this.teamE1 = grupo.team1.nombre;
                  this.teamE1Flag = grupo.team1.bandera;
                  this.teamE1Points = grupo.team1.puntos;
                  this.showPlacesE = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamE1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamE2Id = grupo.team2.id;
                  this.teamE2 = grupo.team2.nombre;
                  this.teamE2Flag = grupo.team2.bandera;
                  this.teamE2Points = grupo.team2.puntos;
                  this.teamE2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamE3Id = grupo.team3.id;
                  this.teamE3 = grupo.team3.nombre;
                  this.teamE3Flag = grupo.team3.bandera;
                  this.teamE3Points = grupo.team3.puntos;
                  this.teamE3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamE4Id = grupo.team4.id;
                  this.teamE4 = grupo.team4.nombre;
                  this.teamE4Flag = grupo.team4.bandera;
                  this.teamE4Points = grupo.team4.puntos;
                  this.teamE4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarE = !this.showPlacesE;
                break;
              case 'f':
                  this.teamF1Id = grupo.team1.id;
                  this.teamF1 = grupo.team1.nombre;
                  this.teamF1Flag = grupo.team1.bandera;
                  this.teamF1Points = grupo.team1.puntos;
                  this.showPlacesF = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamF1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamF2Id = grupo.team2.id;
                  this.teamF2 = grupo.team2.nombre;
                  this.teamF2Flag = grupo.team2.bandera;
                  this.teamF2Points = grupo.team2.puntos;
                  this.teamF2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamF3Id = grupo.team3.id;
                  this.teamF3 = grupo.team3.nombre;
                  this.teamF3Flag = grupo.team3.bandera;
                  this.teamF3Points = grupo.team3.puntos;
                  this.teamF3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamF4Id = grupo.team4.id;
                  this.teamF4 = grupo.team4.nombre;
                  this.teamF4Flag = grupo.team4.bandera;
                  this.teamF4Points = grupo.team4.puntos;
                  this.teamF4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarF = !this.showPlacesF;
                break;
              case 'g':
                  this.teamG1Id = grupo.team1.id;
                  this.teamG1 = grupo.team1.nombre;
                  this.teamG1Flag = grupo.team1.bandera;
                  this.teamG1Points = grupo.team1.puntos;
                  this.showPlacesG = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamG1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamG2Id = grupo.team2.id;
                  this.teamG2 = grupo.team2.nombre;
                  this.teamG2Flag = grupo.team2.bandera;
                  this.teamG2Points = grupo.team2.puntos;
                  this.teamG2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamG3Id = grupo.team3.id;
                  this.teamG3 = grupo.team3.nombre;
                  this.teamG3Flag = grupo.team3.bandera;
                  this.teamG3Points = grupo.team3.puntos;
                  this.teamG3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamG4Id = grupo.team4.id;
                  this.teamG4 = grupo.team4.nombre;
                  this.teamG4Flag = grupo.team4.bandera;
                  this.teamG4Points = grupo.team4.puntos;
                  this.teamG4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarG = !this.showPlacesG;
                break;
              case 'h':
                  this.teamH1Id = grupo.team1.id;
                  this.teamH1 = grupo.team1.nombre;
                  this.teamH1Flag = grupo.team1.bandera;
                  this.teamH1Points = grupo.team1.puntos;
                  this.showPlacesH = _source != 'triky' || (_source == 'triky' && (grupo.team1.puntos != '0' || grupo.team2.puntos != '0' || grupo.team3.puntos != '0' || grupo.team4.puntos != '0'));
                  this.teamH1Pos = _source == 'triky' ? (grupo.team1.puntos != '0' ? grupo.team1.puntos : null) : 1;
                  this.teamH2Id = grupo.team2.id;
                  this.teamH2 = grupo.team2.nombre;
                  this.teamH2Flag = grupo.team2.bandera;
                  this.teamH2Points = grupo.team2.puntos;
                  this.teamH2Pos = _source == 'triky' ? (grupo.team2.puntos != '0' ? grupo.team2.puntos : null) : 2;
                  this.teamH3Id = grupo.team3.id;
                  this.teamH3 = grupo.team3.nombre;
                  this.teamH3Flag = grupo.team3.bandera;
                  this.teamH3Points = grupo.team3.puntos;
                  this.teamH3Pos = _source == 'triky' ? (grupo.team3.puntos != '0' ? grupo.team3.puntos : null) : 3;
                  this.teamH4Id = grupo.team4.id;
                  this.teamH4 = grupo.team4.nombre;
                  this.teamH4Flag = grupo.team4.bandera;
                  this.teamH4Points = grupo.team4.puntos;
                  this.teamH4Pos = _source == 'triky' ? (grupo.team4.puntos != '0' ? grupo.team4.puntos : null) : 4;
                  this.showInfoBarH = !this.showPlacesH;
                break;
            }
          }
          if(_source == 'fifa'){
            this.showInfoBarA = false;
            this.showInfoBarB = false;
            this.showInfoBarC = false;
            this.showInfoBarD = false;
            this.showInfoBarE = false;
            this.showInfoBarF = false;
            this.showInfoBarG = false;
            this.showInfoBarH = false;
            this.showFifaItems = true;
          }
          else
            this.showFifaItems = false;
          /* 
          PONER LOS 1ro y 2do lugar de cada equipo
            O PONER SI LOS MARCADORES NO HAN SIDO LLENADOS POR EL USUARIO - PONER VARIABLE showPlaces<LETRA> = TRUE O FALSE
          */
          
        }, (err) => {
          // Error log
          this.helper.gapAlert('Error en al traer grupos', err);
        });   
  
  }
  
  logout(){
    this.helper.logout();
    this.navCtrl.setRoot(LoginPage);
  }
  
  clickGroups(type){
    document.querySelector('page-groups button.selected').className = document.querySelector('page-groups button.selected').className.replace(/\bselected\b/,'');
    this.typeShowing = type;
    document.querySelector('page-groups #' + type + '-button').className += ' selected';
    this.displayGroupsAndTeams(type);
    if(type == 'triky'){
      this.fillTextA = this.defaultFillScoresText;
      this.fillTextB = this.defaultFillScoresText;
      this.fillTextC = this.defaultFillScoresText;
      this.fillTextD = this.defaultFillScoresText;
      this.fillTextE = this.defaultFillScoresText;
      this.fillTextF = this.defaultFillScoresText;
      this.fillTextG = this.defaultFillScoresText;
      this.fillTextH = this.defaultFillScoresText;
    }
    else{ 
      this.fillTextA = '';
      this.fillTextB = '';
      this.fillTextC = '';
      this.fillTextD = '';
      this.fillTextE = '';
      this.fillTextF = '';
      this.fillTextG = '';
      this.fillTextH = '';
    }
  }

  clickGroup(letter){
    if(this.typeShowing == 'fifa'){
      console.log(letter + ' clicked');
      this.navCtrl.push(GamesPage, { type: this.typeShowing, group: letter });
    }
  }
  
  clickTeam(group, position, id){
    if(this.typeShowing == 'triky'){
      var pos = 1;
      switch(group){
        case 'A':
          this.showPlacesA = true;
          this.showInfoBarA = false;
          if(this.groupAFirst != 0 && this.groupASecond != 0){
            pos = 1;
            this.groupAFirst = id;
            this.groupASecond = 0;
          }
          else if(this.groupAFirst != 0){
            pos = 2;
            this.groupASecond = id;
          }
          else{
            pos = 1;
            this.groupAFirst = id;
          }
          break;
        case 'B':
          this.showPlacesB = true;
          this.showInfoBarB = false;
          if(this.groupBFirst != 0 && this.groupBSecond != 0){
            pos = 1;
            this.groupBFirst = id;
            this.groupBSecond = 0;
          }
          else if(this.groupBFirst != 0){
            pos = 2;
            this.groupBSecond = id;
          }
          else{
            pos = 1;
            this.groupBFirst = id;
          }
          break;
        case 'C':
          this.showPlacesC = true;
          this.showInfoBarC = false;
          if(this.groupCFirst != 0 && this.groupCSecond != 0){
            pos = 1;
            this.groupCFirst = id;
            this.groupCSecond = 0;
          }
          else if(this.groupCFirst != 0){
            pos = 2;
            this.groupCSecond = id;
          }
          else{
            pos = 1;
            this.groupCFirst = id;
          }
          break;
        case 'D':
          this.showPlacesD = true;
          this.showInfoBarD = false;
          if(this.groupDFirst != 0 && this.groupDSecond != 0){
            pos = 1;
            this.groupDFirst = id;
            this.groupDSecond = 0;
          }
          else if(this.groupDFirst != 0){
            pos = 2;
            this.groupDSecond = id;
          }
          else{
            pos = 1;
            this.groupDFirst = id;
          }
          break;
        case 'E':
          this.showPlacesE = true;
          this.showInfoBarE = false;
          if(this.groupEFirst != 0 && this.groupESecond != 0){
            pos = 1;
            this.groupEFirst = id;
            this.groupESecond = 0;
          }
          else if(this.groupEFirst != 0){
            pos = 2;
            this.groupESecond = id;
          }
          else{
            pos = 1;
            this.groupEFirst = id;
          }
          break;
        case 'F':
          this.showPlacesF = true;
          this.showInfoBarF = false;
          if(this.groupFFirst != 0 && this.groupFSecond != 0){
            pos = 1;
            this.groupFFirst = id;
            this.groupFSecond = 0;
          }
          else if(this.groupFFirst != 0){
            pos = 2;
            this.groupFSecond = id;
          }
          else{
            pos = 1;
            this.groupFFirst = id;
          }
          break;
        case 'G':
          this.showPlacesG = true;
          this.showInfoBarG = false;
          if(this.groupGFirst != 0 && this.groupGSecond != 0){
            pos = 1;
            this.groupGFirst = id;
            this.groupGSecond = 0;
          }
          else if(this.groupGFirst != 0){
            pos = 2;
            this.groupGSecond = id;
          }
          else{
            pos = 1;
            this.groupGFirst = id;
          }
          break;
        case 'H':
          this.showPlacesH = true;
          this.showInfoBarH = false;
          if(this.groupHFirst != 0 && this.groupHSecond != 0){
            pos = 1;
            this.groupHFirst = id;
            this.groupHSecond = 0;
          }
          else if(this.groupHFirst != 0){
            pos = 2;
            this.groupHSecond = id;
          }
          else{
            pos = 1;
            this.groupHFirst = id;
          }
          break;
      }
      this.cleanAssignedPosition(group,pos);
      this.assignNewPosition(group, position, pos);
      let loading = this.loadingCtrl.create({
        content: 'Guardando...'
      });
      loading.present();
      this.authService.getData("&u=" + localStorage.getItem('userID') + "&pg=" + pos + group + "&te=" + id + "&t=2",'updateUserTeamPosition.php').then((result) => {
        loading.dismiss();
      });
    }
  }
  
  /* METODOS HELPER */
  cleanAssignedPosition(group, pos){
      switch(group){
        case 'A':
          if(this.teamA1Pos == pos){
            this.teamA1Points = '0';
            this.teamA1Pos = null;
          }
          if(this.teamA2Pos == pos){
            this.teamA2Points = '0';
            this.teamA2Pos = null;
          }
          if(this.teamA3Pos == pos){
            this.teamA3Points = '0';
            this.teamA3Pos = null;
          }
          if(this.teamA4Pos == pos){
            this.teamA4Points = '0';
            this.teamA4Pos = null;
          }
          break;
        case 'B':      
          if(this.teamB1Pos == pos){
            this.teamB1Points = '0';
            this.teamB1Pos = null;
          }
          if(this.teamB2Pos == pos){
            this.teamB2Points = '0';
            this.teamB2Pos = null;
          }
          if(this.teamB3Pos == pos){
            this.teamB3Points = '0';
            this.teamB3Pos = null;
          }
          if(this.teamB4Pos == pos){
            this.teamB4Points = '0';
            this.teamB4Pos = null;
          }
          break;
        case 'C':
          if(this.teamC1Pos == pos){
            this.teamC1Points = '0';
            this.teamC1Pos = null;
          }
          if(this.teamC2Pos == pos){
            this.teamC2Points = '0';
            this.teamC2Pos = null;
          }
          if(this.teamC3Pos == pos){
            this.teamC3Points = '0';
            this.teamC3Pos = null;
          }
          if(this.teamC4Pos == pos){
            this.teamC4Points = '0';
            this.teamC4Pos = null;
          }
          break;
        case 'D':
          if(this.teamD1Pos == pos){
            this.teamD1Points = '0';
            this.teamD1Pos = null;
          }
          if(this.teamD2Pos == pos){
            this.teamD2Points = '0';
            this.teamD2Pos = null;
          }
          if(this.teamD3Pos == pos){
            this.teamD3Points = '0';
            this.teamD3Pos = null;
          }
          if(this.teamD4Pos == pos){
            this.teamD4Points = '0';
            this.teamD4Pos = null;
          }
          break;
        case 'D':
          if(this.teamE1Pos == pos){
            this.teamE1Points = '0';
            this.teamE1Pos = null;
          }
          if(this.teamE2Pos == pos){
            this.teamE2Points = '0';
            this.teamE2Pos = null;
          }
          if(this.teamE3Pos == pos){
            this.teamE3Points = '0';
            this.teamE3Pos = null;
          }
          if(this.teamE4Pos == pos){
            this.teamE4Points = '0';
            this.teamE4Pos = null;
          }
          break;
        case 'F':
          if(this.teamF1Pos == pos){
            this.teamF1Points = '0';
            this.teamF1Pos = null;
          }
          if(this.teamF2Pos == pos){
            this.teamF2Points = '0';
            this.teamF2Pos = null;
          }
          if(this.teamF3Pos == pos){
            this.teamF3Points = '0';
            this.teamF3Pos = null;
          }
          if(this.teamF4Pos == pos){
            this.teamF4Points = '0';
            this.teamF4Pos = null;
          }
          break;
        case 'G':
          if(this.teamG1Pos == pos){
            this.teamG1Points = '0';
            this.teamG1Pos = null;
          }
          if(this.teamG2Pos == pos){
            this.teamG2Points = '0';
            this.teamG2Pos = null;
          }
          if(this.teamG3Pos == pos){
            this.teamG3Points = '0';
            this.teamG3Pos = null;
          }
          if(this.teamG4Pos == pos){
            this.teamG4Points = '0';
            this.teamG4Pos = null;
          }
          break;
        case 'H':
          if(this.teamH1Pos == pos){
            this.teamH1Points = '0';
            this.teamH1Pos = null;
          }
          if(this.teamH2Pos == pos){
            this.teamH2Points = '0';
            this.teamH2Pos = null;
          }
          if(this.teamH3Pos == pos){
            this.teamH3Points = '0';
            this.teamH3Pos = null;
          }
          if(this.teamH4Pos == pos){
            this.teamH4Points = '0';
            this.teamH4Pos = null;
          }
          break;
      }
  }
  assignNewPosition(group, position, pos){
      switch(group){
        case 'A':
          switch(position){
            case 1:
              this.teamA1Points = '1';
              this.teamA1Pos = pos;
              break;
            case 2:
              this.teamA2Points = '1';
              this.teamA2Pos = pos;
              break;
            case 3:
              this.teamA3Points = '1';
              this.teamA3Pos = pos;
              break;
            case 4:
              this.teamA4Points = '1';
              this.teamA4Pos = pos;
              break;
          }
          break;
        case 'B':
          switch(position){
            case 1:
              this.teamB1Points = '1';
              this.teamB1Pos = pos;
              break;
            case 2:
              this.teamB2Points = '1';
              this.teamB2Pos = pos;
              break;
            case 3:
              this.teamB3Points = '1';
              this.teamB3Pos = pos;
              break;
            case 4:
              this.teamB4Points = '1';
              this.teamB4Pos = pos;
              break;
          }
          break;
        case 'C':
          switch(position){
            case 1:
              this.teamC1Points = '1';
              this.teamC1Pos = pos;
              break;
            case 2:
              this.teamC2Points = '1';
              this.teamC2Pos = pos;
              break;
            case 3:
              this.teamC3Points = '1';
              this.teamC3Pos = pos;
              break;
            case 4:
              this.teamC4Points = '1';
              this.teamC4Pos = pos;
              break;
          }
          break;
        case 'D':
          switch(position){
            case 1:
              this.teamD1Points = '1';
              this.teamD1Pos = pos;
              break;
            case 2:
              this.teamD2Points = '1';
              this.teamD2Pos = pos;
              break;
            case 3:
              this.teamD3Points = '1';
              this.teamD3Pos = pos;
              break;
            case 4:
              this.teamD4Points = '1';
              this.teamD4Pos = pos;
              break;
          }
          break;
        case 'E':
          switch(position){
            case 1:
              this.teamE1Points = '1';
              this.teamE1Pos = pos;
              break;
            case 2:
              this.teamE2Points = '1';
              this.teamE2Pos = pos;
              break;
            case 3:
              this.teamE3Points = '1';
              this.teamE3Pos = pos;
              break;
            case 4:
              this.teamE4Points = '1';
              this.teamE4Pos = pos;
              break;
          }
          break;
        case 'F':
          switch(position){
            case 1:
              this.teamF1Points = '1';
              this.teamF1Pos = pos;
              break;
            case 2:
              this.teamF2Points = '1';
              this.teamF2Pos = pos;
              break;
            case 3:
              this.teamF3Points = '1';
              this.teamF3Pos = pos;
              break;
            case 4:
              this.teamF4Points = '1';
              this.teamF4Pos = pos;
              break;
          }
          break;
        case 'G':
          switch(position){
            case 1:
              this.teamG1Points = '1';
              this.teamG1Pos = pos;
              break;
            case 2:
              this.teamG2Points = '1';
              this.teamG2Pos = pos;
              break;
            case 3:
              this.teamG3Points = '1';
              this.teamG3Pos = pos;
              break;
            case 4:
              this.teamG4Points = '1';
              this.teamG4Pos = pos;
              break;
          }
          break;
        case 'H':
          switch(position){
            case 1:
              this.teamH1Points = '1';
              this.teamH1Pos = pos;
              break;
            case 2:
              this.teamH2Points = '1';
              this.teamH2Pos = pos;
              break;
            case 3:
              this.teamH3Points = '1';
              this.teamH3Pos = pos;
              break;
            case 4:
              this.teamH4Points = '1';
              this.teamH4Pos = pos;
              break;
          }
          break;
      }
  }
}