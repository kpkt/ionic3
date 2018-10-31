import { Injectable } from '@angular/core';

/*
  Generated class for the TourismProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TourismProvider {

  
  tourismList:any = [];

  constructor() {
    console.log('Hello TourismProvider Provider');

    let tourisms:any = [
      { name: "Pulau Rawa", description: "Did you know there's paradise on earth? Yup! And it's called 'RAWA'. A dream of an island 16km off the coast of Mersing. Stretches of white sugary sand, secluded beaches, clear green water and swaying palm fronds offering cooling shades." },
      { name: "Lang Tengah Island", description: "Lang Tengah Island is an island off the coast of Terengganu. It features crystal clear seawater, white beaches and an untouched tropical jungle" },
      { name: "Pulau Beras Basah", description: "One of the most known islands of Langkawi Pulau Beras Basah (The Island of Wet Rice) is located at the west end of Langkawi." },
      { name: "Pulau Redang", description: "Redang Island, locally known as Pulau Redang or just \"Redang\" is one of the largest islands off the east coast of Malaysia. It is one of nine islands, which form a marine park, and which offer snorkeling and diving opportunities" },
      { name: "Langkawi Island", description: "Langkawi, officially known as Langkawi, the Jewel of Kedah (Malay: Langkawi Permata Kedah) is an archipelago of 104 islands in the Andaman Sea, some 30 km off the mainland coast of northwestern Malaysia." }
    ];

    for(let data of tourisms){
      this.tourismList.push(data);
    }

  }

  /*
  * Insert new data in array tourismList
  */
  add(data?:any){
    this.tourismList.push(data);
  }

  
  /*
  * call data
  */
  query(params?: any) {
     //if no params return all list
      if (!params) {
        return this.tourismList;
      }
      
      //if with params return selected result
      return this.tourismList.filter((item) => {
          if(item.name.toLowerCase().indexOf(params.toLowerCase()) >= 0){
            return item;//data untuk name
          }else if(item.description.toLowerCase().indexOf(params.toLowerCase()) >= 0){
            return item;//data untuk description
          }
          return null;
      });
  }

}
