import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private group : FormGroup;
  private myPoints : string;
  private scoresRight : string;
  private tieGames : string;
  private winTeams : string;
  private passedTeams : string;
  private positionName1 : string;
  private positionName2 : string;
  private positionName3 : string;
  private positionName4 : string;
  private positionName5 : string;
  private responseUserData : any;
  private responsePositionData : any;
  private positionTable : boolean;
  
  constructor(public navCtrl: NavController, public helper : HelperService, private authService : AuthService, private formBuilder: FormBuilder) {
      this.group = this.formBuilder.group({
        code: ['', Validators.required]
      });
      if(localStorage.getItem('UserLoggedIn') != 'true'){
          this.navCtrl.setRoot(LoginPage);
          return;
      }
      var data = { e : localStorage.getItem('userID') };
      this.authService.postData(data,'/userExists.php').then((result) => {
        this.responseUserData = result;
        this.myPoints = this.responseUserData.puntos != null ? this.responseUserData.puntos : '0';
        this.scoresRight = this.responseUserData.marcadoresAcertados != null ? this.responseUserData.marcadoresAcertados : '0';
        this.tieGames = this.responseUserData.empates != null ? this.responseUserData.empates : '0';
        this.winTeams = this.responseUserData.equiposGanadores != null ? this.responseUserData.equiposGanadores : '0';
        this.passedTeams = this.responseUserData.equiposClasificados != null ? this.responseUserData.equiposClasificados : '0';
      });
      
      this.positionName1 = '';
      this.positionName2 = '';
      this.positionName3 = '';
      this.positionName4 = '';
      this.positionName5 = '';
      
      this.loadPositionTable();
  }
  
  loadPositionTable(){
      this.authService.getData('g=' + localStorage.getItem('UserLoggedGroup'), '/getUsersOrderedPoints.php').then((result) => {
        this.responsePositionData = result;
        if(this.responsePositionData.status == 'no params'){
          this.positionTable = false;
        }
        else {
          this.positionTable = true;
          
    		  for(var i = 0; i < this.responsePositionData.length; i++){
    		    var user = this.responsePositionData[i];
    		    var user_data = user.nombre + ' - ' + (user.puntos != null ? user.puntos : 'Sin ') + ' puntos';
    		    if(i == 0)
              this.positionName1 = user_data;
            else if(i == 1)
              this.positionName2 = user_data;
            else if(i == 2)
              this.positionName3 = user_data;
            else if(i == 3)
              this.positionName4 = user_data;
            else if(i == 4)
              this.positionName5 = user_data;
    		  }
        }
      }, (error) => {
        console.log(error);
      });
  }
  
  attemptJoinGroup(){
    localStorage.setItem('UserLoggedGroup', this.group.value.code);
    var data = { g : this.group.value.code, u : localStorage.getItem('userID') };
    this.authService.postData(data, '/updateUserGroup.php').then((result) => {
      this.responsePositionData = result;
      if(this.responsePositionData.status == 'ok'){
        this.loadPositionTable();
      }
    });
  }
  
  logout(){
    this.helper.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
