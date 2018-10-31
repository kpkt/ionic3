import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TourismProvider } from '../../providers/tourism/tourism';
import { DetailsPage } from '../details/details';
import { TourismFormPage } from '../tourism-form/tourism-form';

/**
 * Generated class for the TourismsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourisms',
  templateUrl: 'tourisms.html',
})
export class TourismsPage {

  tourisms:any;
  filter:string = '';
  filterStatus:boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public tourismProvider:TourismProvider,
    public modalCtrl : ModalController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismsPage');
    //call function query from tourismProvider
    this.tourisms = this.tourismProvider.query();
  }

  openItem(item?:any){
    //console.log(item);
    this.navCtrl.push(DetailsPage,{data:item});
  }

  newData(){
    
    let form = this.modalCtrl.create(TourismFormPage);
    
    form.present();
  }

  getItem(ev){

    let val = ev.target.value;//check input isset value
    
    //if empty, just list of default data
    if(!val || !val.trim()){
        this.filterStatus = false;
        //call function query from tourismProvider
        //without params keyword searchbar
        this.tourisms = this.tourismProvider.query();
        return;

    }else{

        //call function query from tourismProvider
        //with params keyword searchbar
        this.tourisms = this.tourismProvider.query(val);
        
        this.filterStatus = (this.tourisms.length == 0 ? true : false);

        /*if(this.tourisms.length == 0){
          this.filterStatus = true;
        }else{
          this.filterStatus = false;
        }*/

    }

  }

}
