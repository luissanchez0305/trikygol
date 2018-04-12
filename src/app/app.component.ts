import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelperService } from '../providers/helper';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StickersPage } from '../pages/stickers/stickers';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any, type: string, icon: any}>;

  constructor(platform: Platform, statusBar: StatusBar, public helper : HelperService, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, type: 'root', icon: 'home' },
      { title: 'FIGURITAS', component: StickersPage, type: 'root', icon: '' },
      { title: 'PERFIL', component: RegisterPage, type: 'push', icon: 'person' },
      { title: 'LOGOUT', component: null, type: 'logout', icon: 'log-out' }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.type == 'logout')
      this.logout();
    else if(page.type == 'root')
      this.nav.setRoot(page.component);
    else
      this.nav.push(page.component);
  }
  
  logout(){
    this.helper.logout();
    this.nav.setRoot(LoginPage);
  }
}
