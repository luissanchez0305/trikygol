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
  private noWrapA : string;
  private noWrapB : string;
  private noWrapC : string;
  private noWrapD : string;
  private noWrapE : string;
  private noWrapF : string;
  private noWrapG : string;
  private noWrapH : string;
  
  private showPlacesA : boolean;
  private showPlacesB : boolean; 
  private showPlacesC : boolean;
  private showPlacesD : boolean; 
  private showPlacesE : boolean;
  private showPlacesF : boolean; 
  private showPlacesG : boolean;
  private showPlacesH : boolean;  

  private teamA1 : string;
  private teamA2 : string;
  private teamA3 : string;
  private teamA4 : string;
  private teamB1 : string;
  private teamB2 : string;
  private teamB3 : string;
  private teamB4 : string;
  private teamC1 : string;
  private teamC2 : string;
  private teamC3 : string;
  private teamC4 : string;
  private teamD1 : string;
  private teamD2 : string;
  private teamD3 : string;
  private teamD4 : string;
  private teamE1 : string;
  private teamE2 : string;
  private teamE3 : string;
  private teamE4 : string;
  private teamF1 : string;
  private teamF2 : string;
  private teamF3 : string;
  private teamF4 : string;
  private teamG1 : string;
  private teamG2 : string;
  private teamG3 : string;
  private teamG4 : string;
  private teamH1 : string;
  private teamH2 : string;
  private teamH3 : string;
  private teamH4 : string;
  
  private firstA : string;
  private firstB : string;
  private firstC : string;
  private firstD : string;
  private firstE : string;
  private firstF : string;
  private firstG : string;
  private firstH : string;
  
  private secondA : string;
  private secondB : string;
  private secondC : string;
  private secondD : string;
  private secondE : string;
  private secondF : string;
  private secondG : string;
  private secondH : string;
  
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
      
      this.authService.getData('source='+_source,'/getFirstSecondTeams.php').then((result) => {
          this.responseData = result;
          this.typeShowing = _source;
          this.noWrapA = "noWrap";
          this.noWrapB = "noWrap";
          this.noWrapC = "noWrap";
          this.noWrapD = "noWrap";
          this.noWrapE = "noWrap";
          this.noWrapF = "noWrap";
          this.noWrapG = "noWrap";
          this.noWrapH = "noWrap";
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
                  this.noWrapA = "col";
                  this.teamA1 = grupo.team1.nombre;
                  this.teamA2 = grupo.team2.nombre;
                  this.teamA3 = grupo.team3.nombre;
                  this.teamA4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstA = grupo.firstname;
                    this.secondA = grupo.secondname;
                  }
                break;
              case 'b':
                this.noWrapB = "col";
                  this.teamB1 = grupo.team1.nombre;
                  this.teamB2 = grupo.team2.nombre;
                  this.teamB3 = grupo.team3.nombre;
                  this.teamB4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstB = grupo.firstname;
                    this.secondB = grupo.secondname;
                  }
                break;
              case 'c':
                this.noWrapC = "col";
                  this.teamC1 = grupo.team1.nombre;
                  this.teamC2 = grupo.team2.nombre;
                  this.teamC3 = grupo.team3.nombre;
                  this.teamC4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstC = grupo.firstname;
                    this.secondC = grupo.secondname;
                  }
                break;
              case 'd':
                this.noWrapD = "col";
                  this.teamD1 = grupo.team1.nombre;
                  this.teamD2 = grupo.team2.nombre;
                  this.teamD3 = grupo.team3.nombre;
                  this.teamD4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstD = grupo.firstname;
                    this.secondD = grupo.secondname;
                  }
                break;
              case 'e':
                this.noWrapE = "col";
                  this.teamE1 = grupo.team1.nombre;
                  this.teamE2 = grupo.team2.nombre;
                  this.teamE3 = grupo.team3.nombre;
                  this.teamE4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstE = grupo.firstname;
                    this.secondE = grupo.secondname;
                  }
                break;
              case 'f':
                this.noWrapF = "col";
                  this.teamF1 = grupo.team1.nombre;
                  this.teamF2 = grupo.team2.nombre;
                  this.teamF3 = grupo.team3.nombre;
                  this.teamF4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstF = grupo.firstname;
                    this.secondF = grupo.secondname;
                  }
                break;
              case 'g':
                this.noWrapG = "col";
                  this.teamG1 = grupo.team1.nombre;
                  this.teamG2 = grupo.team2.nombre;
                  this.teamG3 = grupo.team3.nombre;
                  this.teamG4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstG = grupo.firstname;
                    this.secondG = grupo.secondname;
                  }
                break;
              case 'h':
                this.noWrapH = "col";
                  this.teamH1 = grupo.team1.nombre;
                  this.teamH2 = grupo.team2.nombre;
                  this.teamH3 = grupo.team3.nombre;
                  this.teamH4 = grupo.team4.nombre;
                  if(grupo.firstname.length > 0){
                    this.showPlacesA = true;
                    this.firstH = grupo.firstname;
                    this.secondH = grupo.secondname;
                  }
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
