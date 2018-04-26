import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StickersPage } from './stickers';

@NgModule({
  declarations: [
    StickersPage,
  ],
  imports: [
    IonicPageModule.forChild(StickersPage),
  ],
})
export class StickersPageModule {}
