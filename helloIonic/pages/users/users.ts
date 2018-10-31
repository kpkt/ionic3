import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  title:string = '';
  headerColor:string = '';
  id:number = 0;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController, public toastCtrl:ToastController) {

    this.title = 'User Form Page';
    this.headerColor = 'danger';
    this.id = 1 + 3;

    this.data = ["Monitor","Keybord"];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');

    setTimeout(()=>{
      this.id = this.id + 5;

    },5000);

  }

  /**
   * Nama Function dari event click button
   */
  push(){
    alert('push');
  }

  newData(val?:string){


    //set alert parameter
    let alert = this.alertCtrl.create({
      title : 'Insert Alert',
      message : 'Do you confirm to insert new data?',
      buttons : [
        {
          //Cancel
          text:'Cancel',
          role:'cancel',
          handler:()=>{
              //call toast function
              this.callToast("Oppss..");
          }
        },
        {
          //OK
          text:'OK',
          handler:()=>{

            //Insert Data
            if(val){
              this.data.push(val);
            }else{
              this.data.push("Mouse");
            }

            //call toast function
            this.callToast("Data success insert.");

          }
        }
      ]
    });

    //show alert
    alert.present();
    
  }


  callToast(text?:string){

      let toast = this.toastCtrl.create({
        message : text,
        duration : 3000,
        position : 'top'
      });

      toast.present();

  }
  


}
