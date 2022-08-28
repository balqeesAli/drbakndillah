import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Browser } from '@capacitor/browser';

import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { HttpClient } from '@angular/common/http';
import { Network } from '@capacitor/network';


declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  Api_URL = 'https://drbakndillah.com/Api/';
  viewLoginBtn: any;
  viewMap = 1;
  infoWindowView = 0;

  HasLogin;

  viewMandoobCard = 0;
  viewAddnewItem = 0;
  infoWindowDetails: any = "";
  public sliderOptions: any = {
    autoplay: true,
    slidesPerView: 1
  }
  coords: any;
  map: any;
  applang;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  AppUser;
  UserBlock;
  infoWindows: any = [];

  AddsArray: any = [];
  newmarkers: any = [];
  markers: any = [

    // {
    //   latitude: "23.594427",
    //   longitude: "58.428210",
    //   data:[
    //     {
    //       Title_ar: "Salm",
    //       itemID:"1",
    //       latitude: "22.593817",
    //       longitude: "58.429606",
    //       icon: "peopleicon",
    //       date: "12-2-2021",
    //       time: "16:00",
    //       Max_price_delivery: 2,
    //       image: "../../../assets/icon/logo.png"
    //     },
    //     {
    //       Title_ar: "Ahmed",
    //       itemID:"2",
    //       latitude: "23.593817",
    //       longitude: "58.429605",
    //       icon: "peopleicon",
    //       date: "12-2-2021",
    //       time: "16:00",
    //       Max_price_delivery: 2,
    //       image: "../../../assets/icon/logo.png"
    //     }
    //   ],
    //   icon: "itemicon",
    // },
    // {

    //   latitude: "23.593665",
    //   longitude: "58.429031",
    //   data:[
    //     {
    //       Title_ar: "Balqees",
    //       itemID:"3",
    //       latitude: "22.593817",
    //       longitude: "58.429606",
    //       icon: "peopleicon",
    //       date: "12-2-2021",
    //       time: "16:00",
    //       Max_price_delivery: 2,
    //       image: "../../../assets/icon/logo.png"
    //     },
    //     {
    //       Title_ar: "Sara",
    //       itemID:"4",
    //       latitude: "23.593817",
    //       longitude: "58.429605",
    //       icon: "peopleicon",
    //       date: "12-2-2021",
    //       time: "16:00",
    //       Max_price_delivery: 2,
    //       image: "../../../assets/icon/logo.png"
    //     }
    //   ],
    //   icon: "myitem", 
    // },
    // {

    //   latitude: "23.593665",
    //   longitude: "58.429031",
    //   data:[
    //     {
    //       Title_ar: "Omar",
    //       itemID:"5",
    //       latitude: "22.593817",
    //       longitude: "58.429606",
    //       icon: "peopleicon",
    //       date: "12-2-2021",
    //       time: "16:00",
    //       Max_price_delivery: 2,
    //       image: "../../../assets/icon/logo.png"
    //     },
    //     {
    //       Title_ar: "Majad",
    //       itemID:"7",
    //       latitude: "23.593817",
    //       longitude: "58.429605",
    //       icon: "peopleicon",
    //       date: "12-2-2021",
    //       time: "16:00",
    //       Max_price_delivery: 2,
    //       image: "../../../assets/icon/logo.png"
    //     }
    //   ],
    //   icon: "myitem", 
    // }

  ];

  constructor(public loadingController: LoadingController,
    private alertController: AlertController,
    private nativeGeocoder: NativeGeocoder,
    private navCtrl: NavController,
    private translate: TranslateService,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private actionSheetController: ActionSheetController


  ) {


    //  this.GetMarkers();

    this.Selected_language_direction();
    this.IsLogin();



    // Calling function every 2 seconds 

    setInterval(data => {
      this.IsLogin();
      this.IsBlocked();

      this.Selected_language_direction();
      this.IsLogin();
      this.IsBlocked();
      this.GetUserDataandStoreinLoacalStorage();

      // console.log("hi");
      // ckeck internet connectivity 

      if (this.viewLoginBtn == 1 && this.UserBlock == 0) {
        this.GetMarkers();
        console.log("GetMarkers");
      }


    }, 2000);

    // this.Selected_language_direction();
    // Storage.set({
    //   key: 'name',
    //   value: JSON.stringify(this.markers),
    // });
    // Storage.set({
    //   key: 'HasLogin',
    //   value: '0',
    // });

  }



  ionViewDidEnter() {



    this.Checkinternetconnction();
    this.showMap();

    this.ViewAdds();
    this.Selected_language_direction();
    this.IsLogin();
    this.IsBlocked();
    this.GetUserDataandStoreinLoacalStorage();


  }

  ngOnInit() {
    this.getNumbersOfPackages();

  }

  async specifyFilter() {

    this.navCtrl.navigateForward('/filter');

  }

  async filterMarker(sort) {


    const UID = await Storage.get({ key: 'Id' });
    console.log(JSON.parse(UID.value));

    const userLat = await Storage.get({ key: 'cureent_latitude' });
    console.log(JSON.parse(userLat.value));

    const userLog = await Storage.get({ key: 'cureent_longitude' });
    console.log(JSON.parse(userLog.value));


    let FilterDetails: any = {
      "userLat": JSON.parse(userLat.value),
      "userLong": JSON.parse(userLog.value),
      "userId": JSON.parse(UID.value),
      "sort": sort,
      "distance": "",
      "mincost": "",
      "maxcost": "",
      "goverate": "",
      "city": ""

    };

    console.log("FilterDetails");
    this.navCtrl.navigateForward('/filter-item', {
      state: FilterDetails
    });

  }


  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 2000,
    });
    toast.present();
  }

  async DeleteItem(itemID) {




    let Alarm;
    this.translate.get('Alarm !').subscribe(value => { Alarm = value; })



    let Delete;
    this.translate.get('Delete').subscribe(value => { Delete = value; })


    let Areyousure;
    this.translate.get('Are you sure ?').subscribe(value => { Areyousure = value; })

    let Cancel;
    this.translate.get('cancel').subscribe(value => { Cancel = value; })



    const alert = await this.alertController.create({
      header: Alarm,
      message: Areyousure,
      buttons: [
        {
          text: Cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: Delete,
          handler: () => {
            this.DeleteItem_confirm(itemID);
          }
        }
      ]
    });

    await alert.present();
  }
  async DeleteItem_confirm(itemID) {



    let somethingWronghappedpleasetryagin;
    this.translate.get('somethingWronghappedpleasetryagin').subscribe(value => { somethingWronghappedpleasetryagin = value; })


    let Deletedsuccessfully;
    this.translate.get('Deleted successfully').subscribe(value => { Deletedsuccessfully = value; })




    const loading = await this.loadingController.create({

      spinner: 'bubbles'
    });
    await loading.present();


    let url = this.Api_URL + 'updateItemState.php?id=' + itemID + '&status=deleted';
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {
      console.log(response[0].response);
      this.GetMarkers();
      this.addMarkersToMap(this.markers);

      loading.dismiss();
      if (response[0].response == 'success') {
        this.infoWindowView = 0;
        this.presentToast(Deletedsuccessfully);


      } else {
        this.presentToast(somethingWronghappedpleasetryagin);
      }

    }, (error) => {
      this.presentToast(somethingWronghappedpleasetryagin);

    });

    loading.dismiss();


  }
  editclick(data){
    this.navCtrl.navigateForward('/edit-item', {
      state: data
    });
  }


  async getNumbersOfPackages() {

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
      console.log('response' + JSON.stringify(response));

      mandoobCard = retrivedResponse.non_service_requester_package_number;
      newitem =retrivedResponse.service_requester_package_number;

      console.log(mandoobCard + "__" + newitem);

      //  console.log('viewMandoobCard'+this.viewMandoobCard);

      if (mandoobCard !=  '0') { this.viewMandoobCard = 1; console.log("viewMandoobCard"+this.viewMandoobCard); };
      if (newitem != '0') { this.viewAddnewItem = 1; console.log("viewAddnewItem"); };



    }, (error) => {

    });






  }

  movetoAddPAde(data) {
 
    this.navCtrl.navigateForward('/view-adds', {

      
      state: data
    });

  

    // /view-adds
    //         Description_ar: "اشتراك الانترنت 4 رسالات لمدة سنة مع مكالمات مجانية و استخدام مواقع التواصل الاجتماعي"
    // Description_en: "get one year internet only with 4 rials with free calls and unlimited social media"
    // End_date: "2022-02-18"
    // Image: "applogo.png"
    // Period_ar: "اسبوع"
    // Period_en: "one week"
    // Start_date: "2021-11-11"
    // Title_ar: "عمانتل"
    // Title_en: "omantel"
    // URL_link: "https://www.omantel.om/"


  }

  async ViewAdds() {

    let url = this.Api_URL + 'viewadds.php';
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {
      console.log(response);
      this.AddsArray = response;

    }, (error) => { });

  }
  async AcceptItem(data) {
    // https://drbakndillah.com/Api/insertintoOrder.php?itemID=45&MID=38&OID=35

    let somethingwronghappend;
    let YouAcceptOrder;

    this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; })
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })

    const loading = await this.loadingController.create({

      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();

    let userData: any;
    const UID = await Storage.get({ key: 'Id' });
    console.log(JSON.parse(UID.value));
    this.AppUser = JSON.parse(UID.value);


    let url = this.Api_URL + 'insertintoOrder.php?itemID=' + data.itemID + '&MID=' + JSON.parse(UID.value) + '&OID=' + data.User_id;
    console.log(url);
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      console.log('response' + response[0].response);
      if (response[0].response == 'success') {
        this.presentToast("YouAcceptOrder");
        //  https://drbakndillah.com/Api/firebaseRequest.php?title=Hi&body=Are%20you%20okey&token=


        let other_url = this.Api_URL + 'firebaseRequest.php?title=New Offer&body=One Mandoob accept your Order&token=' + data.token;
        console.log(other_url);
        this.http.get(other_url, {}).subscribe((response) => {

          console.log('response' + response[0].response);

        }, (error) => {

          this.presentToast(somethingwronghappend);


        });


        this.navCtrl.navigateForward('tabs/orders');


      }
    }, (error) => {

      this.presentToast(somethingwronghappend);


    });


  }

  UpdateDeleteStatus(status, iid) {
    let somethingwronghappend;
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })


    let itemDeleted;
    this.translate.get('itemDeleted').subscribe(value => { itemDeleted = value; })


    let url = this.Api_URL + 'updateItemState.php?id=' + iid + '&status=' + status;
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      console.log(response);
      if (response[0].response == 'success') {
        this.presentToast(itemDeleted);
        this.infoWindowView = 0;

      } else {
        this.presentToast(somethingwronghappend);
        console.log('somethingwronghappend');

      }



    }, (error) => {

      this.presentToast(somethingwronghappend);
      console.log('somethingwronghappend');


    });

  }

  cancelClick() {
    this.infoWindowView = 0;
  }


  DirectionClick(lat, long) {

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
  async GetMarkers() {


    let noOrderMeg;
    this.translate.get('There are no order to delivery').subscribe(value => { noOrderMeg = value; })

    let somethingwronghappend;
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })






    let userData: any;
    const UID = await Storage.get({ key: 'Id' });
    console.log(JSON.parse(UID.value));
    this.AppUser = JSON.parse(UID.value);


    let url = this.Api_URL + 'returnMarkers2.php?ID=' + JSON.parse(UID.value);
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      console.log(response);
      userData = response;
      this.markers = response;
      if (this.markers.length == 0) {
        // this.presentToast(noOrderMeg);
      }


    }, (error) => {

      this.presentToast(somethingwronghappend);


    });

    ////
    console.log('markers__' + this.markers);

    this.newmarkers = [];
    let latVal: any;
    for (let i = 0; i < this.markers.length; i++) {
      console.log('I am inside loop ');
      latVal = this.markers[i].latitude;
      if (this.newmarkers.length == 0) {
        console.log('Length is ZERO');
        this.newmarkers.push(this.markers[i]);

      } else {
        let count = 0;
        for (let x = 0; x < this.newmarkers.length; x++) {



          console.log(this.newmarkers[x].latitude + "_________" + this.markers[i].latitude);

          if (JSON.stringify(this.newmarkers[x].latitude) == JSON.stringify(latVal)) {

            console.log('IsEqual');

            let tempData = [];
            tempData = this.markers[i].data.concat(this.newmarkers[x].data);

            /// Check data duplication
            ///
            this.newmarkers[x].icon = "appicon";
            this.newmarkers[x].data = tempData;
              



          }

          else {
            count++;
            if (count == this.newmarkers.length) {
              this.newmarkers.push(this.markers[i]);
              console.log('Is Push it');
            }


          }


        }
      }

    }


    console.log("I am still in side function");
    this.markers = this.newmarkers;




    ///////
    console.log('newmarkers___'+JSON.stringify(this.newmarkers));

  }

  async Checkinternetconnction() {
    Network.getStatus().then((success) => {
      console.log(success.connected);

      let message;
      this.translate.get('Please check your internet connection').subscribe(value => { message = value; })

      console.log('message' + message);
      if (success.connected == false) {

        this.PreserntAlert(message);
      }
    }).catch((error) => {
      console.log(error);
    });

  }
  async GetUserDataandStoreinLoacalStorage() {

    let userData: any;
    const Email = await Storage.get({ key: 'Email' });
    console.log(JSON.parse(Email.value));


    let url = this.Api_URL + 'getUserDetailsByEmail.php?Email=' + JSON.parse(Email.value);
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      console.log(response);
      userData = response;
      console.log(userData.Id);


      //StoreUser data in local device storage 


      Storage.set({
        key: 'Blocked',
        value: JSON.stringify(userData.Blocked),
      });
      Storage.set({
        key: 'City_id',
        value: JSON.stringify(userData.City_id),
      });
      Storage.set({
        key: 'Country_code',
        value: JSON.stringify(userData.Country_code),
      });
      Storage.set({
        key: 'Country_id',
        value: JSON.stringify(userData.Country_id),
      });
      Storage.set({
        key: 'Email',
        value: JSON.stringify(userData.Email),
      });
      Storage.set({
        key: 'Family_name_ar',
        value: JSON.stringify(userData.Family_name_ar),
      });
      Storage.set({
        key: 'Family_name_en',
        value: JSON.stringify(userData.Family_name_en),
      });
      Storage.set({
        key: 'Governate_id',
        value: JSON.stringify(userData.Governate_id),
      });
      Storage.set({
        key: 'Id',
        value: JSON.stringify(userData.Id),
      });
      Storage.set({
        key: 'Lat',
        value: JSON.stringify(userData.Lat),
      });

      Storage.set({
        key: 'Name_ar',
        value: JSON.stringify(userData.Name_ar),
      });

      Storage.set({
        key: 'Name_en',
        value: JSON.stringify(userData.Name_en),
      });

      Storage.set({
        key: 'Phone_no',
        value: JSON.stringify(userData.Phone_no),
      });

      Storage.set({
        key: 'log',
        value: JSON.stringify(userData.log),
      });






    }, (error) => {

    });


  }

  browser() {
    Browser.open({ url: 'http://capacitorjs.com/' });
  }

  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.applang = JSON.parse(language.value);
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);

    // this.presentAlertConfirm(); 
  }


  async IsBlocked() {
    const Blocked = await Storage.get({ key: 'Blocked' });
    console.log(JSON.parse(Blocked.value));
    if (JSON.parse(Blocked.value) == 1) {
      let message;
      this.translate.get('You are blocked! Contact us by drbak.ndillah@gmail.com').subscribe(value => { message = value; })


      this.PreserntAlert(message);
    }
  }


  async IsLogin() {

    const HasLogin = await Storage.get({ key: 'HasLogin' });
    console.log(JSON.parse(HasLogin.value));
    this.viewLoginBtn = JSON.parse(HasLogin.value);
    this.HasLogin = JSON.parse(HasLogin.value);

    const Blocked = await Storage.get({ key: 'Blocked' });
    console.log(JSON.parse(Blocked.value));
    this.UserBlock = JSON.parse(Blocked.value);



  }





  addMarkersToMap(markers) {

    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        data: marker.data,
        icon: {
          url: "../../../assets/icon/" + marker.icon + ".png",
          scaledSize: new google.maps.Size(30, 30)
        },
        latitude: marker.latitude,
        longitude: marker.longitude

      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  ir() {
    console.log("go");
  }

  addInfoWindowToMarker(marker) {


    let infoWindowContent = '<div id="content" ><img src="' + marker.image + '"  width="60px" height="60px" alt="">' +
      '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
      '<p> Latitude:' + marker.latitude + '</p>' +
      '<p (click)="ir()"> Longitude: ' + marker.longitude + '</p>' +
      ' <ion-button id="directionclick"  (click)="onClick()" expand="block"  shape="round">direction</ion-button>' +
      ' <ion-button id="viewclick"  (click)="onClick()" expand="block"  shape="round">view</ion-button>' +
      ' <ion-button id="editclick"  (click)="onClick()" expand="block"  shape="round">edit</ion-button>' +
      ' <ion-button id="deleteclick"  (click)="onClick()" expand="block"  shape="round">deleteclick</ion-button>' +
      ' <ion-button id="acceptclick"  (click)="onClick()" expand="block"  shape="round">accept</ion-button></div>';

    // let infoWindowContent = '<div  class="popup_mark_details"> <ion-row><ion-col size="3"> <img  width="60px" height="60px"  src="../../../assets/icon/logo.png" alt=""></ion-col> <ion-col size="9"><ion-row><ion-col size="6"> Book</ion-col> <ion-col size="6"><ion-icon  name="logo-usd"></ion-icon>2 OMR</ion-col><ion-col size="12"> Deliverd before 12/2/2021 At 16:00</ion-col></ion-row> </ion-col>  </ion-row> </div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent

    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      this.infoWindowView = 1;
      this.infoWindowDetails = marker;

      console.log(this.infoWindowDetails);
      console.log(this.infoWindowView);
      // infoWindow.open(this.map, marker);
    });

    // Once click on Accept btn
    google.maps.event.addListener(infoWindow, 'domready', () => {
      var clickableItem = document.getElementById('acceptclick');
      clickableItem.addEventListener('click', () => {
        console.log(marker);
      });
    });

    this.infoWindows.push(infoWindow);


  }

  closeAllInfoWindows() {

    for (let window of this.infoWindows) {
      window.close();
    }
  }

  async showMap() {

    // Get User current location
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
    console.log(coordinates.coords.latitude);
    console.log(coordinates.coords.longitude);

    // Store user current location in Storage

    Storage.set({
      key: 'cureent_latitude',
      value: JSON.stringify(coordinates.coords.latitude),
    });

    Storage.set({
      key: 'cureent_longitude',
      value: JSON.stringify(coordinates.coords.longitude),
    });


    //load Map 
    const location = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
    // const location = new google.maps.LatLng(23.593717, 58.429206);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);


    // Set marker foor user location 
    let position = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
    let mapMarker = new google.maps.Marker({
      position: position,
      icon: {
        url: "../../../assets/icon/currentUserLocation.png",
        scaledSize: new google.maps.Size(40, 50)
      },
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude
    });

    mapMarker.setMap(this.map);
    this.viewMap = 0;



  }



  async presentAlertConfirm() {


    let SignUp;
    let message;
    let SignIn;
    let Cancel;

    this.translate.get('Sign Up').subscribe(value => { SignUp = value; })
    this.translate.get('Sign in to continue using the app ').subscribe(value => { message = value; })
    this.translate.get('Sign In').subscribe(value => { SignIn = value; })
    this.translate.get('cancel').subscribe(value => { Cancel = value; })

    console.log("LOGIN_" + SignUp + "__" + message + "__" + SignIn + "__" + Cancel + "__");
    if (SignUp != undefined) {

      const alert = await this.alertController.create({
        header: SignIn + '!',
        message: message,
        buttons: [
          {
            text: SignIn,
            handler: () => {
              this.navCtrl.navigateForward('sign-in');

            }
          },
          {
            text: SignUp,
            handler: () => {
              this.navCtrl.navigateForward('sign-up');
            }
          },
          {
            text: Cancel,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          }
        ]
      });

      await alert.present();
    }


  }


  async PreserntAlert(message) {

    let Alarm;

    this.translate.get('Alarm !').subscribe(value => { Alarm = value; })


    const alert = await this.alertController.create({
      header: Alarm,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
