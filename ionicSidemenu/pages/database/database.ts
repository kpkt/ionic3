import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DatabasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
})
export class DatabasePage {

  profiles:any;
  data:any = [];
  input:any = {  
    name:'',
    email : '',
    phone: 0
  }
  callForm:boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage:Storage,
    public toatsCtrl:ToastController) {

      //Init data into storage
      this.input = {
        name:'Mohd Zaki',
        email : 'mzm@kpkt.gov.my',
        phone: 5378
      };

      /*this.input.name = 'Mohd Zaki';
      this.input.email = 'mzm@kpkt.gov.my';
      this.input.phone = 5378;*/    

      this.data.push(this.input);
      this.storage.set('profile', this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');

    this.getDataProfile().then((data)=>{
      console.log(data);
      this.profiles = data;
    });

  }

  deleteData(key?:string){
    this.profiles.splice(key, 1);//splice from array profile
    this.storage.remove('profile');  //remove key from storage
    this.storage.set('profile',this.profiles);  //store new storage
    this.toatsCtrl.create(
      {message:'Hapus data berjaya.',duration:3000, position:'top'}
    ).present(); 
  }

  async getDataProfile(){
    return await this.storage.get('profile');
  }

  newData(){
    this.callForm = true;
    //Set empty input form
    this.input = {
      name:'',
      email : '',
      phone: 0
    };
  }

  saveForm(input?:any){
    
    this.callForm = false;

    //change format phone from string to number
    input.phone = input.phone *1;
        
    this.profiles.push(input);
    this.storage.set('profile', this.profiles);
    
    this.toatsCtrl.create(
      {message:'Data berjaya disimpan',duration:3000, position:'top'}
    ).present();

  }

}
