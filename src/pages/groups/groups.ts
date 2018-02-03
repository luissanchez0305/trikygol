import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HelperService } from '../../providers/helper';
import { ModalController } from 'ionic-angular';
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

  private teamA1 : string;
  private teamA1Flag : string;
  private teamA1Points : string;
  private teamA2 : string;
  private teamA2Flag : string;
  private teamA2Points : string;
  private teamA3 : string;
  private teamA3Flag : string;
  private teamA3Points : string;
  private teamA4 : string;
  private teamA4Flag : string;
  private teamA4Points : string;
  private teamB1 : string;
  private teamB1Flag : string;
  private teamB1Points : string;
  private teamB2 : string;
  private teamB2Flag : string;
  private teamB2Points : string;
  private teamB3 : string;
  private teamB3Flag : string;
  private teamB3Points : string;
  private teamB4 : string;
  private teamB4Flag : string;
  private teamB4Points : string;
  private teamC1 : string;
  private teamC1Flag : string;
  private teamC1Points : string;
  private teamC2 : string;
  private teamC2Flag : string;
  private teamC2Points : string;
  private teamC3 : string;
  private teamC3Flag : string;
  private teamC3Points : string;
  private teamC4 : string;
  private teamC4Flag : string;
  private teamC4Points : string;
  private teamD1 : string;
  private teamD1Flag : string;
  private teamD1Points : string;
  private teamD2 : string;
  private teamD2Flag : string;
  private teamD2Points : string;
  private teamD3 : string;
  private teamD3Flag : string;
  private teamD3Points : string;
  private teamD4 : string;
  private teamD4Flag : string;
  private teamD4Points : string;
  private teamE1 : string;
  private teamE1Flag : string;
  private teamE1Points : string;
  private teamE2 : string;
  private teamE2Flag : string;
  private teamE2Points : string;
  private teamE3 : string;
  private teamE3Flag : string;
  private teamE3Points : string;
  private teamE4 : string;
  private teamE4Flag : string;
  private teamE4Points : string;
  private teamF1 : string;
  private teamF1Flag : string;
  private teamF1Points : string;
  private teamF2 : string;
  private teamF2Flag : string;
  private teamF2Points : string;
  private teamF3 : string;
  private teamF3Flag : string;
  private teamF3Points : string;
  private teamF4 : string;
  private teamF4Flag : string;
  private teamF4Points : string;
  private teamG1 : string;
  private teamG1Flag : string;
  private teamG1Points : string;
  private teamG2 : string;
  private teamG2Flag : string;
  private teamG2Points : string;
  private teamG3 : string;
  private teamG3Flag : string;
  private teamG3Points : string;
  private teamG4 : string;
  private teamG4Flag : string;
  private teamG4Points : string;
  private teamH1 : string;
  private teamH1Flag : string;
  private teamH1Points : string;
  private teamH2 : string;
  private teamH2Flag : string;
  private teamH2Points : string;
  private teamH3 : string;
  private teamH3Flag : string;
  private teamH3Points : string;
  private teamH4 : string;
  private teamH4Flag : string;
  private teamH4Points : string;
  
  private fillTextA : string;
  private fillTextB : string;
  private fillTextC : string;
  private fillTextD : string;
  private fillTextE : string;
  private fillTextF : string;
  private fillTextG : string;
  private fillTextH : string;
  
  private responseData : any;
  private typeShowing : string;
  private defaultFillScoresText : string = "Click para llenar los marcadores";
  
  constructor(public navCtrl: NavController, private authService : AuthService, public navParams: NavParams, 
    public helper : HelperService, public modalCtrl: ModalController, public events : Events) {
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
      
      // HACER EL PHP "getFirstSecondTeams.php" QUE TRAIGA TODOS LOS EQUIPOS POR GRUPOS
      
      this.authService.getData('source='+_source+(_source == 'triky' ? "&u=" + localStorage.getItem('userID') : ""),'/getFirstSecondTeams.php').then((result) => {
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
                  this.teamA1 = grupo.team1.nombre;
                  this.teamA1Flag = grupo.team1.bandera;
                  this.teamA1Points = grupo.team1.puntos;
                  this.teamA2 = grupo.team2.nombre;
                  this.teamA2Flag = grupo.team2.bandera;
                  this.teamA2Points = grupo.team2.puntos;
                  this.teamA3 = grupo.team3.nombre;
                  this.teamA3Flag = grupo.team3.bandera;
                  this.teamA3Points = grupo.team3.puntos;
                  this.teamA4 = grupo.team4.nombre;
                  this.teamA4Flag = grupo.team4.bandera;
                  this.teamA4Points = grupo.team4.puntos;
                  this.showPlacesA = grupo.team1.puntos != '0';
                break;
              case 'b':
                  this.teamB1 = grupo.team1.nombre;
                  this.teamB1Flag = grupo.team1.bandera;
                  this.teamB1Points = grupo.team1.puntos;
                  this.teamB2 = grupo.team2.nombre;
                  this.teamB2Flag = grupo.team2.bandera;
                  this.teamB2Points = grupo.team2.puntos;
                  this.teamB3 = grupo.team3.nombre;
                  this.teamB3Flag = grupo.team3.bandera;
                  this.teamB3Points = grupo.team3.puntos;
                  this.teamB4 = grupo.team4.nombre;
                  this.teamB4Flag = grupo.team4.bandera;
                  this.teamB4Points = grupo.team4.puntos;
                  this.showPlacesB = grupo.team1.puntos != '0';
                break;
              case 'c':
                  this.teamC1 = grupo.team1.nombre;
                  this.teamC1Flag = grupo.team1.bandera;
                  this.teamC1Points = grupo.team1.puntos;
                  this.teamC2 = grupo.team2.nombre;
                  this.teamC2Flag = grupo.team2.bandera;
                  this.teamC2Points = grupo.team2.puntos;
                  this.teamC3 = grupo.team3.nombre;
                  this.teamC3Flag = grupo.team3.bandera;
                  this.teamC3Points = grupo.team3.puntos;
                  this.teamC4 = grupo.team4.nombre;
                  this.teamC4Flag = grupo.team4.bandera;
                  this.teamC4Points = grupo.team4.puntos;
                  this.showPlacesC = grupo.team1.puntos != '0';
                break;
              case 'd':
                  this.teamD1 = grupo.team1.nombre;
                  this.teamD1Flag = grupo.team1.bandera;
                  this.teamD1Points = grupo.team1.puntos;
                  this.teamD2 = grupo.team2.nombre;
                  this.teamD2Flag = grupo.team2.bandera;
                  this.teamD2Points = grupo.team2.puntos;
                  this.teamD3 = grupo.team3.nombre;
                  this.teamD3Flag = grupo.team3.bandera;
                  this.teamD3Points = grupo.team3.puntos;
                  this.teamD4 = grupo.team4.nombre;
                  this.teamD4Flag = grupo.team4.bandera;
                  this.teamD4Points = grupo.team4.puntos;
                  this.showPlacesD = grupo.team1.puntos != '0';
                break;
              case 'e':
                  this.teamE1 = grupo.team1.nombre;
                  this.teamE1Flag = grupo.team1.bandera;
                  this.teamE1Points = grupo.team1.puntos;
                  this.teamE2 = grupo.team2.nombre;
                  this.teamE2Flag = grupo.team2.bandera;
                  this.teamE2Points = grupo.team2.puntos;
                  this.teamE3 = grupo.team3.nombre;
                  this.teamE3Flag = grupo.team3.bandera;
                  this.teamE3Points = grupo.team3.puntos;
                  this.teamE4 = grupo.team4.nombre;
                  this.teamE4Flag = grupo.team4.bandera;
                  this.teamE4Points = grupo.team4.puntos;
                  this.showPlacesE = grupo.team1.puntos != '0';
                break;
              case 'f':
                  this.teamF1 = grupo.team1.nombre;
                  this.teamF1Flag = grupo.team1.bandera;
                  this.teamF1Points = grupo.team1.puntos;
                  this.teamF2 = grupo.team2.nombre;
                  this.teamF2Flag = grupo.team2.bandera;
                  this.teamF2Points = grupo.team2.puntos;
                  this.teamF3 = grupo.team3.nombre;
                  this.teamF3Flag = grupo.team3.bandera;
                  this.teamF3Points = grupo.team3.puntos;
                  this.teamF4 = grupo.team4.nombre;
                  this.teamF4Flag = grupo.team4.bandera;
                  this.teamF4Points = grupo.team4.puntos;
                  this.showPlacesF = grupo.team1.puntos != '0';
                break;
              case 'g':
                  this.teamG1 = grupo.team1.nombre;
                  this.teamG1Flag = grupo.team1.bandera;
                  this.teamG1Points = grupo.team1.puntos;
                  this.teamG2 = grupo.team2.nombre;
                  this.teamG2Flag = grupo.team2.bandera;
                  this.teamG2Points = grupo.team2.puntos;
                  this.teamG3 = grupo.team3.nombre;
                  this.teamG3Flag = grupo.team3.bandera;
                  this.teamG3Points = grupo.team3.puntos;
                  this.teamG4 = grupo.team4.nombre;
                  this.teamG4Flag = grupo.team4.bandera;
                  this.teamG4Points = grupo.team4.puntos;
                  this.showPlacesG = grupo.team1.puntos != '0';
                break;
              case 'h':
                  this.teamH1 = grupo.team1.nombre;
                  this.teamH1Flag = grupo.team1.bandera;
                  this.teamH1Points = grupo.team1.puntos;
                  this.teamH2 = grupo.team2.nombre;
                  this.teamH2Flag = grupo.team2.bandera;
                  this.teamH2Points = grupo.team2.puntos;
                  this.teamH3 = grupo.team3.nombre;
                  this.teamH3Flag = grupo.team3.bandera;
                  this.teamH3Points = grupo.team3.puntos;
                  this.teamH4 = grupo.team4.nombre;
                  this.teamH4Flag = grupo.team4.bandera;
                  this.teamH4Points = grupo.team4.puntos;
                  this.showPlacesH = grupo.team1.puntos != '0';
                break;
            }
          }
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
    console.log(letter + ' clicked');
    this.navCtrl.push(GamesPage, { type: this.typeShowing, group: letter });
  }
}
