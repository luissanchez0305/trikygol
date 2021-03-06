import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPage } from '../pages/forgot/forgot';
import { GroupsPage } from '../pages/groups/groups';
import { GamesPage } from '../pages/games/games';
import { StickersPage } from '../pages/stickers/stickers';
import { StickersMissingPage } from '../pages/stickers-missing/stickers-missing';
import { StickersRepeatedPage } from '../pages/stickers-repeated/stickers-repeated';
import { StickersMatchPage } from '../pages/stickers-match/stickers-match';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AuthService } from '../providers/auth-service';
import { HelperService } from '../providers/helper';
import { Network } from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ForgotPage,
    GroupsPage,
    GamesPage,
    StickersPage,
    StickersMissingPage,
    StickersRepeatedPage,
    StickersMatchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ForgotPage,
    GroupsPage,
    GamesPage,
    StickersPage,
    StickersMissingPage,
    StickersRepeatedPage,
    StickersMatchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    HelperService,
    Dialogs,
    Network,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
