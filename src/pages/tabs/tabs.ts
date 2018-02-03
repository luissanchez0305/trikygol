import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { GroupsPage } from '../groups/groups';
import { GamesPage } from '../games/games';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = GroupsPage;
  tab3Root = GamesPage;
  
  tab8vosParam = { mode : '8', type : 'triky' };
  tab4tosParam = { mode : '4', type : 'triky' };
  tabSemiFinalParam = { mode : 'semifinal', type : 'triky' };
  tabFinalParam = { mode : 'final', type : 'triky' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
