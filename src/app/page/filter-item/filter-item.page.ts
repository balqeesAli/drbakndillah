import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { PlaceApiPage } from '../../place-api/place-api.page';
// import { PlaceApiPage } from '../../place-api/place-api.page'; 
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// import { threadId } from 'worker_threads';
import { ActivatedRoute, Router } from '@angular/router';

import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Browser } from '@capacitor/browser';
import { ViewChild, ElementRef } from '@angular/core';

const IMAGE_DIR = 'stored-images';


interface LocalFile {
  name: string;
  path: string;
  data: string;
}


@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.page.html',
  styleUrls: ['./filter-item.page.scss'],
})
export class FilterItemPage implements OnInit {

  offercostStyle;
  lan = 'ar';

  distance;
  public item: any = { "type": "item", };
  today = Date.now();
  imagaUploaded: any = 0;
  IdCardImage: any = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';

  Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';

  Api_URL = 'https://drbakndillah.com/Api/';

  IdCardImageView = 1;

  images: LocalFile[] = [];
  markers: any[] = [];

  selected_image_name: any = 'imgName';

  // city: ""
  // distance: ""
  // goverate: ""
  // maxcost: ""
  // mincost: ""
  // sort: "heighest"
  // userId: "35"
  // userLat: 23.6108913
  // userLong: 58.2185611

  // type => Passenger , type => Item
  public inputItemName_ar = "Item Name (Arabic)";
  public inputItemName_en = "Item Name (English)";

  applang;
  AppUser;


  dataReturned: any;
  userlocation: any;
  userlong: any = "";
  userlat: any = "";
  FilterDetails: any =  {
    city: "",
    distance: "",
    goverate: "",
    maxcost: "",
    mincost: "",
    sort: "",
    userId: "",
    userLat: "",
    userLong: ""
  };


  constructor(
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private alertController: AlertController,
    private http: HttpClient,
    private nativeGeocoder: NativeGeocoder,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService) {
    translate.setDefaultLang('en');

    // [ngClass]="offercostStyle?'offer-cost':'offer-cost_ar'" 


    this.translate.get('offercostStyle').subscribe(value => { this.offercostStyle = value; })

    if (router.getCurrentNavigation().extras.state) {

      this.FilterDetails = this.router.getCurrentNavigation().extras.state;
      console.log('FilterDetails'+this.FilterDetails);

      this.GetMarkers();
    }
    console.log('FilterDetails');

    this.Selected_language_direction();

   

  }

  ngOnInit() {
    this.GetMarkers();
  }



  async specifyFilter() {

    this.navCtrl.navigateForward('/filter');

  }

  DirectionClick(lat , long ){

    
    let url = 'https://www.google.com/maps/search/?api=1&query='+lat+','+long;
   
    Browser.open({ url: url });

  }


  async viewItemDetails(data) {

    console.log(data);
    let cancel;
    let PriceDelivery;
    let OMR;
    let Deliverbefore;
    let at;
    let address;


    this.translate.get('cancel').subscribe(value => { cancel = value; })
    this.translate.get('Price Delivery').subscribe(value => { PriceDelivery = value; })
    this.translate.get('OMR').subscribe(value => { OMR = value; })
    this.translate.get('Deliver before').subscribe(value => { Deliverbefore = value; })
    this.translate.get('at').subscribe(value => { at = value; })


    let location = '';

    if (this.applang == 'ar') {

      location = data.governate_name_ar + "," + data.city_name_ar;

    } else {
      location = data.governate_name_en + "," + data.city_name_en;

    }



    //Get User Position 
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(parseFloat(data.Lat), parseFloat(data.Log), options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]));
        address = result[0].countryName + "," + result[0].administrativeArea + "," + result[0].locality + "," + result[0].subLocality + "," + result[0].thoroughfare;
        console.log(address);

      })
      .catch((error: any) => console.log(error));



    const actionSheet = await this.actionSheetController.create({
      header: data.Title_ar + ' - ' + data.Title_en,
      subHeader: data.Other_note,

      buttons: [{
        text: PriceDelivery + '  ' + data.Max_price_delivery + ' ' + OMR,
        role: 'destructive',
        icon: 'logo-usd',
        handler: () => {
        }
      }, {
        text: Deliverbefore + '  ' + data.Maximin_date,
        icon: 'calendar',
        handler: () => {

        }
      }, {
        text: at + ' ' + data.Maximin_time,
        icon: 'time',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: location,
        icon: 'pin',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: cancel,
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

    async AcceptItem(data){
      // https://drbakndillah.com/Api/insertintoOrder.php?itemID=45&MID=38&OID=35

      let somethingwronghappend;
      let YouAcceptOrder;

      this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; })
      this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })
 
  const loading = await this.loadingCtrl.create({
   
    duration: 2000,
    spinner: 'bubbles'
  });
  await loading.present();
 
      let userData: any;
      const UID = await Storage.get({ key: 'Id' });
      console.log(JSON.parse(UID.value));
      this.AppUser = JSON.parse(UID.value);
  
  
      let url = this.Api_URL + 'insertintoOrder.php?itemID='+data.itemID+'&MID='+JSON.parse(UID.value)+'&OID=' + data.User_id;
      console.log(url);
      console.log(url);
      this.http.get(url, {}).subscribe((response) => {
  
        console.log('response'+ response[0].response);
       if(response[0].response == 'success' ){
         this.presentToast("YouAcceptOrder");
        //  https://drbakndillah.com/Api/firebaseRequest.php?title=Hi&body=Are%20you%20okey&token=
   

         let other_url = this.Api_URL + 'firebaseRequest.php?title=New Offer&body=One Mandoob accept your Order&token='+data.token;
         console.log(other_url); 
         this.http.get(other_url, {}).subscribe((response) => {
     
           console.log('response'+ response[0].response);
          
         }, (error) => {
      
           this.presentToast(somethingwronghappend);
           
           
         });


         this.navCtrl.navigateForward('tabs/orders');

 
       } 
      }, (error) => {
   
        this.presentToast(somethingwronghappend);
        
        
      });


    }

    filterMarker(sort){

      this.FilterDetails.sort = sort;
      this.GetMarkers();
    }


  async GetMarkers() {
    console.log('response');

    let noOrderMeg;
    this.translate.get('There are no order to delivery').subscribe(value => { noOrderMeg = value; })

    let somethingwronghappend;
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })


    let userData: any;

    // city: ""
    // distance: ""
    // goverate: ""
    // maxcost: ""
    // mincost: ""
    // sort: "heighest"
    // userId: "35"
    // userLat: 23.6108913
    // userLong: 58.2185611

    if (this.FilterDetails.mincost == '') {
      this.FilterDetails.mincost = 0;
    }

    if (this.FilterDetails.maxcost == '') {
      this.FilterDetails.maxcost = 1000;
    }



    let url = this.Api_URL + 'FilterMarkers.php?ID=' + this.FilterDetails.userId + '&UserLat=' + this.FilterDetails.userLat + '&UserLog=' + this.FilterDetails.userLong + '&userdistance=' + this.FilterDetails.distance + '&mincost=' + this.FilterDetails.mincost + '&maxcost=' + this.FilterDetails.maxcost + '&governate=' + this.FilterDetails.goverate + '&city=' + this.FilterDetails.city + '&sort=' + this.FilterDetails.sort;
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      console.log('response ' + response);
      userData = response;
      this.markers = userData;



    }, (error) => {

      this.presentToast(somethingwronghappend);


    });

    ////
    console.log('markers__' + this.markers);

  }


  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }



  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.applang = JSON.parse(language.value);
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);


    this.translate.get('Item Name (Arabic)').subscribe(value => { this.inputItemName_ar = value; })
    this.translate.get('Item Name (English)').subscribe(value => { this.inputItemName_en = value; })


  }



  radioChecked() {
    let inputItemName_ar_1;
    let inputItemName_en_1;
    let inputItemName_ar_2;
    let inputItemName_en_2;


    if (this.item.type == 'passenger') {
      this.translate.get('Passenger Name (Arabic)').subscribe(value => { this.inputItemName_ar = value; })
      this.translate.get('Passenger Name (English)').subscribe(value => { this.inputItemName_en = value; })

    } else {
      this.translate.get('Item Name (Arabic)').subscribe(value => { this.inputItemName_ar = value; })
      this.translate.get('Item Name (English)').subscribe(value => { this.inputItemName_en = value; })

    }



  }



}
