import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StickersMatchPage } from './stickers-match';

@NgModule({
  declarations: [
    StickersMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(StickersMatchPage),
  ],
})
export class StickersMatchPageModule {}
