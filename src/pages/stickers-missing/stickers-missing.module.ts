import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StickersMissingPage } from './stickers-missing';

@NgModule({
  declarations: [
    StickersMissingPage,
  ],
  imports: [
    IonicPageModule.forChild(StickersMissingPage),
  ],
})
export class StickersMissingPageModule {}
