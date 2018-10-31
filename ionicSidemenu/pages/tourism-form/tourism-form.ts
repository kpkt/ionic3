import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TourismProvider } from '../../providers/tourism/tourism';

/**
 * Generated class for the TourismFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourism-form',
  templateUrl: 'tourism-form.html',
})
export class TourismFormPage {

  input:any = {
    title:'tajuk',
    description:'keterangan tajuk'
  };

  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams,
    public tourismProvider : TourismProvider,
    public loadingCtrl : LoadingController,
    public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismFormPage');
  }

  saveForm(data){

      let saved = {
        name: data.title,
        description : data.description
      };
     
      let loading = this.loadingCtrl.create({
        content : 'Sila tunggu sebentar...',
        duration: 3000
      });

      //sebelum loading hilang
      loading.onWillDismiss(()=>{
        this.tourismProvider.add(saved);//Save data into tourismProvider
      });
      
      //selepas loading hilang
      loading.onDidDismiss(()=>{
         this.closeModal(); //closed modal to previus page
         this.callToast(); //toast message
      });

      loading.present();

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }


  callToast(){
      let toast = this.toastCtrl.create({
        message : 'Data berjaya di simpan.',
        duration : 3000,
        position: 'top'
      });

      toast.present();
  }
}
