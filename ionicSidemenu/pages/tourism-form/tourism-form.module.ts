import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourismFormPage } from './tourism-form';

@NgModule({
  declarations: [
    TourismFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TourismFormPage),
  ],
})
export class TourismFormPageModule {}
