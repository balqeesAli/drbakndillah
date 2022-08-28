import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mandoob-card',
  templateUrl: './mandoob-card.page.html',
  styleUrls: ['./mandoob-card.page.scss'],
})
export class MandoobCardPage implements OnInit {

  UserName_en;
  packageExpiryDate;
  UserName_ar;
  Api_URL = 'https://drbakndillah.com/Api/';
  
  constructor(private http: HttpClient, private loadingController: LoadingController) { 
    this.userName();
    this.getNumbersOfPackages();
  }


  ngOnInit() {
  }



  async userName(){


    const Name_en = await Storage.get({ key: 'Name_en' });
    console.log(JSON.parse(Name_en.value)); 

    const Family_name_en = await Storage.get({ key: 'Family_name_en' });
    console.log(JSON.parse(Family_name_en.value)); 

    this.UserName_en = JSON.parse(Name_en.value);


    const Name_ar = await Storage.get({ key: 'Name_ar' });
    console.log(JSON.parse(Name_ar.value)); 

    const Family_name_ar = await Storage.get({ key: 'Family_name_ar' });
    console.log(JSON.parse(Family_name_ar.value)); 

    
    this.UserName_en =  JSON.parse(Name_en.value) + " " + JSON.parse(Family_name_en.value);
    this.UserName_ar = JSON.parse(Name_ar.value) + " " + JSON.parse(Family_name_ar.value);


  }

  async getNumbersOfPackages() {
 
      const loading = await this.loadingController.create({
        
        duration: 2000,
        spinner: 'bubbles'
      });
      await loading.present();
    

    let mandoobCard;
    let newitem;
    // const userId = await Storage.get({ key: 'Id' });
    // console.log("userId_____"+ JSON.parse(userId.value));
    const userId = await Storage.get({ key: 'Id' });
    console.log("userId_____"+JSON.parse(userId.value));


 

    let url = this.Api_URL + "getUsersPackagesNumber.php?id=" + JSON.parse(userId.value);
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response; 

      this.packageExpiryDate = retrivedResponse.packageExpiryDate; 
      loading.dismiss();
 


    }, (error) => {
      loading.dismiss();

    });






  }

}
