import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
 

  tourismLists:any = [
    { name: "Pulau Rawa", description: "Did you know there's paradise on earth? Yup! And it's called 'RAWA'. A dream of an island 16km off the coast of Mersing. Stretches of white sugary sand, secluded beaches, clear green water and swaying palm fronds offering cooling shades." },
    { name: "Lang Tengah Island", description: "Lang Tengah Island is an island off the coast of Terengganu. It features crystal clear seawater, white beaches and an untouched tropical jungle" },
    { name: "Pulau Beras Basah", description: "One of the most known islands of Langkawi Pulau Beras Basah (The Island of Wet Rice) is located at the west end of Langkawi." },
    { name: "Pulau Redang", description: "Redang Island, locally known as Pulau Redang or just \"Redang\" is one of the largest islands off the east coast of Malaysia. It is one of nine islands, which form a marine park, and which offer snorkeling and diving opportunities" },
    { name: "Langkawi Island", description: "Langkawi, officially known as Langkawi, the Jewel of Kedah (Malay: Langkawi Permata Kedah) is an archipelago of 104 islands in the Andaman Sea, some 30 km off the mainland coast of northwestern Malaysia." }
  ];

  constructor(public navCtrl: NavController) {
    
  }
}
