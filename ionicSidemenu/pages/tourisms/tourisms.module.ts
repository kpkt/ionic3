import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourismsPage } from './tourisms';

@NgModule({
  declarations: [
    TourismsPage,
  ],
  imports: [
    IonicPageModule.forChild(TourismsPage),
  ],
})
export class TourismsPageModule {}
