import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  galleries:any = [];

  options: CameraOptions;
  optionsGallery: CameraOptions

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public camera : Camera,
    public device : Device) {

      this.options = {
        quality : 10,
        destinationType : this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum:(this.device.platform == 'Android' ? true: false)
      };
    
      this.optionsGallery = {
        quality : 10,
        destinationType : this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        correctOrientation:true
      };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }

  newPhoto(){ 
    this.camera.getPicture(this.options).then((imageData)=>{
      let imgSrc = 'data:image/jpeg;base64,' + imageData;
      this.galleries.push(imgSrc);
    },(err)=>{

    });
  }

  loadPhoto(){
    this.camera.getPicture(this.optionsGallery).then((imageData)=>{
      let imgSrc = 'data:image/jpeg;base64,' + imageData;
      this.galleries.push(imgSrc);      
    },(err)=>{

    }); 
  }

}
