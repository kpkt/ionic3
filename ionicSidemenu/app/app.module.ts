import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TourismProvider } from '../providers/tourism/tourism';
import { TourismsPage } from '../pages/tourisms/tourisms';
import { DetailsPage } from '../pages/details/details';
import { TourismFormPage } from '../pages/tourism-form/tourism-form';
import { DatabasePage } from '../pages/database/database';
import { PhotoPage } from '../pages/photo/photo';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TourismsPage,
    DetailsPage,
    TourismFormPage,
    DatabasePage,
    PhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({name:'__TutoDb'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TourismsPage,
    DetailsPage,
    TourismFormPage,
    DatabasePage,
    PhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TourismProvider,
    Camera,
    Device
  ]
})
export class AppModule {}
