import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, PopoverController } from '@ionic/angular';
import { from } from 'rxjs';
import { PopoverComponentComponent } from '../../components/popover-component/popover-component.component';
import { ServiceRequesterComponent } from '../../component/package/service-requester/service-requester.component';
import { ServiceRequesterArComponent } from '../../component/package/service-requester-ar/service-requester-ar.component';
import { MandoobComponent } from '../../component/package/mandoob/mandoob.component';
import { MandoobArComponent } from '../../component/package/mandoob-ar/mandoob-ar.component';
import { TaxiComponent } from '../../component/package/taxi/taxi.component';
import { TaxiArComponent } from '../../component/package/taxi-ar/taxi-ar.component';
import { SpecialComponent } from '../../component/package/special/special.component';
import { SpecialArComponent } from '../../component/package/special-ar/special-ar.component';
 
import { NavigationExtras, Router } from '@angular/router';

import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.page.html',
  styleUrls: ['./all-packages.page.scss'],
})

export class AllPackagesPage implements OnInit {

  constructor(
    
    private router: Router,
    public navCtrl: NavController,
    private popCtrl: PopoverController, 
    private translate: TranslateService) {
 

    this.Selected_language_direction();
  }

  ngOnInit() {
  } 

  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);

    // this.presentAlertConfirm(); 
  }

  MoveToPackagePage_ServiceRequester(){
    let PackageDetails: any = {
 
      "name": "Service Requester Package",
      "peroid":
        [
          {
            "name": "Once",
            "price": "0.200"
          }, {
            "name": "Monthly",
            "price": "1.000"
          },
          {
            "name": "Yearly",
            "price": "5.000"
          }],
      "company_name": "1",
      "nickname": "0",
      "startDate": "1",
      "IDCardIMG": "0",
      "nationallity": "0"
    
  };
 
  this.navCtrl.navigateForward('/package', {
    state: PackageDetails
 });
 
  }

  MoveToPackagePage_Mandoob(){
    let PackageDetails: any = {
 
      "name": "Mandoob Package",
      "peroid":
        [
          {
            "name": "Once",
            "price": "0.200"
          }, {
            "name": "Monthly",
            "price": "1.000"
          },
          {
            "name": "Yearly",
            "price": "5.000"
          }],
      "company_name": "0",
      "nickname": "1",
      "startDate": "1",
      "IDCardIMG": "0",
      "nationallity": "1"
    
  };
 
  this.navCtrl.navigateForward('/package', {
    state: PackageDetails
 });
 
  }

  MoveToPackagePage_Taxi(){
    let PackageDetails: any = {
 
      "name": "Taxi Package",
      "peroid":
        [
          {
            "name": "Daily",
            "price": "0.500"
          }, {
            "name": "Monthly",
            "price": "5.00"
          },
          {
            "name": "Yearly",
            "price": "50.00"
          }],
      "company_name": "0",
      "nickname": "1",
      "startDate": "1",
      "IDCardIMG": "1",
      "nationallity": "1"
    
  };
 
  this.navCtrl.navigateForward('/package', {
    state: PackageDetails
 });
 
  }


  MoveToPackagePage_Special(){
    let PackageDetails: any = {
 
      "name": "Special Package",
      "peroid":
        [
          {
            "name": "Daily",
            "price": "1.00"
          }, {
            "name": "Monthly",
            "price": "5.00"
          },
          {
            "name": "Yearly",
            "price": "50.00"
          }],
      "company_name": "1",
      "nickname": "1",
      "startDate": "1",
      "IDCardIMG": "1",
      "nationallity": "1"
    
  };
 
  this.navCtrl.navigateForward('/package', {
    state: PackageDetails
 });
 
  }


// POPOVER Service_popOver
  async Service_popOver(ev: any) {

    let S_component;
    this.translate.get('ServiceRequesterComponent').subscribe( value => { S_component = value; })
    
    if(S_component == 'ServiceRequesterComponent' ){

      const popOver = await this.popCtrl.create({
        component: ServiceRequesterComponent,
        cssClass: 'my-popover-class',
        event: ev,
      })
  
      popOver.onDidDismiss().then(data => console.log(data))
  
      return await popOver.present()

    }else{

      const popOver = await this.popCtrl.create({
        component: ServiceRequesterArComponent,
        cssClass: 'my-popover-class',
        event: ev,
      })
  
      popOver.onDidDismiss().then(data => console.log(data))
  
      return await popOver.present()
    }

  }

  //POPOVER Mandoob_popOver
  async Mandoob_popOver(ev: any) {

    let S_component;
    this.translate.get('MandoobComponent').subscribe( value => { S_component = value; })
    
    if(S_component == 'MandoobComponent' ){

      const popOver = await this.popCtrl.create({
        component: MandoobComponent,
        cssClass: 'my-popover-class',
        event: ev,
      })
  
      popOver.onDidDismiss().then(data => console.log(data))
  
      return await popOver.present()

    }else{

      const popOver = await this.popCtrl.create({
        component: MandoobArComponent,
        cssClass: 'my-popover-class',
        event: ev,
      })
  
      popOver.onDidDismiss().then(data => console.log(data))
  
      return await popOver.present()
    }

  }

 //POPOVER Taxi_popOver
 async Taxi_popOver(ev: any) {

  let S_component;
  this.translate.get('TaxiComponent').subscribe( value => { S_component = value; })
  
  if(S_component == 'TaxiComponent' ){

    const popOver = await this.popCtrl.create({
      component: TaxiComponent,
      cssClass: 'my-popover-class',
      event: ev,
    })

    popOver.onDidDismiss().then(data => console.log(data))

    return await popOver.present()

  }else{

    const popOver = await this.popCtrl.create({
      component: TaxiArComponent,
      cssClass: 'my-popover-class',
      event: ev,
    })

    popOver.onDidDismiss().then(data => console.log(data))

    return await popOver.present()
  }

}


 //POPOVER special_popOver
 async special_popOver(ev: any) {

  let S_component;
  this.translate.get('specialComponent').subscribe( value => { S_component = value; })
  
  if(S_component == 'specialComponent' ){

    const popOver = await this.popCtrl.create({
      component: SpecialComponent,
      cssClass: 'my-popover-class',
      event: ev,
    })

    popOver.onDidDismiss().then(data => console.log(data))

    return await popOver.present()

  }else{

    const popOver = await this.popCtrl.create({
      component: SpecialArComponent,
      cssClass: 'my-popover-class',
      event: ev,
    })

    popOver.onDidDismiss().then(data => console.log(data))

    return await popOver.present()
  }

}

}
