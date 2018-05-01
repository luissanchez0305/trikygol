import { Component, NgZone } from '@angular/core';
import { NavController, Events, Platform } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../../services/constants';
import { Network } from '@ionic-native/network';
import { LoginPage } from '../login/login';

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
  private positions : any;
  private responseUserData : any;
  private positionTable : boolean;
  private nextGames : any;
  private gameDate : string;
  private isDeviceOnline : boolean;

  constructor(public navCtrl: NavController, private authService : AuthService,
    public events : Events, private formBuilder: FormBuilder, private network: Network, private zone: NgZone,
    private plt: Platform) {
      this.group = this.formBuilder.group({
        code: ['', Validators.required]
      });
      var data = { e : localStorage.getItem('userID') };
      this.authService.postData(data,'userExists.php').then((result) => {
        this.responseUserData = result;
        this.myPoints = this.responseUserData.puntos != null ? this.responseUserData.puntos : '0';
        this.scoresRight = this.responseUserData.marcadoresAcertados != null ? this.responseUserData.marcadoresAcertados : '0';
        this.tieGames = this.responseUserData.empates != null ? this.responseUserData.empates : '0';
        this.winTeams = this.responseUserData.equiposGanadores != null ? this.responseUserData.equiposGanadores : '0';
        this.passedTeams = this.responseUserData.equiposClasificados != null ? this.responseUserData.equiposClasificados : '0';
      });

      this.events.subscribe('reloadPositionTable',() => {
          //call method to refresh content
          this.loadPositionTable();
      });
      this.isDeviceOnline = true;
      // watch network for a disconnect
      this.network.onDisconnect().subscribe(() => {
        this.zone.run(() => {
          this.isDeviceOnline = false;
        });
      });
      // watch network for a connection
      this.network.onConnect().subscribe(() => {
        this.zone.run(() => {
          this.isDeviceOnline = true;
        });
      });
  }

  ionViewDidLoad(){
      if(localStorage.getItem('UserLoggedIn') != 'true'){
          this.navCtrl.setRoot(LoginPage);
          return;
      }
      this.loadPositionTable();

      var date = new Date('2018-06-14 5:00:00');
      var firstDate = new Date('2018-07-14 5:00:00');
      var lastDate = new Date('2018-06-14 5:00:00');

      if(this.plt.is('ios')){
        date = new Date(2018,5,14,5,0,0);
        firstDate = new Date(2018,5,14,5,0,0);
        lastDate = new Date(2018,5,14,5,0,0);
      }

      if(Date.now() > lastDate.getTime()){
        date = new Date('2018-07-15 5:00:00');
        if(this.plt.is('ios'))
          date = new Date(2018,5,15,5,0,0);
      }
      if(Date.now() > firstDate.getTime() && Date.now() <= lastDate.getTime()){
        date = new Date();
      }

      this.authService.getData('date=' + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate(), 'getNextGames.php').then((result) => {
        this.nextGames = result;
        this.gameDate = Constants.months[date.getMonth()] + ', ' + date.getDate() + ' de ' + date.getFullYear();
      });
  }

  loadPositionTable(){
      this.authService.getData(localStorage.getItem('UserLoggedGroup').length > 0 ? 'g=' + localStorage.getItem('UserLoggedGroup') : '', 'getUsersOrderedPoints.php').then((result) => {
        this.positions = result;
        if(this.positions.status == 'no params'){
          this.positionTable = false;
        }
        else {
          this.positionTable = true;

    		  /*for(var i = 0; i < this.positions.length; i++){
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
    		  }*/
        }
      }, (error) => {
        alert(error);
      });
  }

  attemptJoinGroup(){
    localStorage.setItem('UserLoggedGroup', this.group.value.code);
    var data = { g : this.group.value.code, u : localStorage.getItem('userID') };
    this.authService.postData(data, 'updateUserGroup.php').then((result) => {
      this.positions = result;
      if(this.positions.status == 'ok'){
        this.loadPositionTable();
      }
    });
  }
}
