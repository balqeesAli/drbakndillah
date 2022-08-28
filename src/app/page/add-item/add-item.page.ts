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

import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util'; 
import { UserPhoto, PhotoService } from '../../services/photo.service';

const IMAGE_DIR = 'stored-images';


interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})

export class AddItemPage implements OnInit {
  public item: any = { "type": "item", };
  today = Date.now();
  imagaUploaded: any = 0;
  IdCardImage: any = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';

  //IdCardImage: any ='https://drbakndillah.com/Api/uploads/1657713550189.jpeg';
  Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';

  Api_URL = 'https://drbakndillah.com/Api/';

  IdCardImageView = 1;

  images: LocalFile[] = [];

  selected_image_name:any = 'imgName';



  // type => Passenger , type => Item
  public inputItemName_ar = "Item Name (Arabic)";
  public inputItemName_en = "Item Name (English)";
   
  applang; 

  public itemData={
    "Country_id":"",
    "Governate_id":"",
    "City_id":"",
    "Image":"",
    "Max_price_delivery":"",
    "Type":"",
    "Title_ar":"",
    "Title_en":"",
    "Other_note":"",
    "Maximin_time":"",
    "Maximin_date":"",
    "Item_status":"new",
    "Log":"",
    "Lat":"",
    "User_id":""

  };
  
  countryArr: any;
  governateArr: any;
  cityArr: any;

  dataReturned: any;
  userlocation: any;
  userlong: any = "";
  userlat: any = "";


  constructor( 
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
      public modalController: ModalController,
      private alertController: AlertController,
      private translate: TranslateService,
      private http: HttpClient,
      private plt: Platform,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      public photoService: PhotoService, 
      ) {
      this.Selected_language_direction();
      this.countryCode();

      
     }

  ngOnInit() {
  }
 

  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  } 
 

  async selectImagefromphone() {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Albums',
      buttons: [{
        text: 'Photo',
        role: 'Photo',
        icon: 'images',
        handler: () => {
          console.log('Delete clicked');
          // this.selectImage_photo();
          this.OpenCamera();

        }
      }, {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('Share clicked');
          // this.selectImage_camera();
  
          this.OpenImage();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }
  
 
  async OpenCamera(){

    this.photoService.addNewToGallery().then((success)=>{

      console.log("Sucess");

this.LoadIMG();
    }).catch((error)=>{

  console.log("Error");

    });

   
  }


  async OpenImage(){


    this.photoService.addNewToGalleryFromPhone().then((success)=>{

      console.log("Sucess");

this.LoadIMG();
    }).catch((error)=>{

  console.log("Error");

    });


  }
  
  async LoadIMG(){
    await this.photoService.loadSaved().then((sucess)=>{

      console.log(sucess);
      //console.log(sucess[0].webviewPath);

    console.log("sucess[0].webviewPath"+JSON.stringify(sucess[0]));
      this.uploadIMGintoServer(sucess[0].webviewPath , sucess[0].filepath);
      // this.IdCardImage = sucess[0].webviewPath.substring(sucess[0].filepath.lastIndexOf('/') + 1);
       var imgName = sucess[0].filepath.substring(sucess[0].filepath.lastIndexOf('/') + 1);
      //this.IdCardImage = "https://drbakndillah.com/Api/uploads/"+imgName;
      //   this.IdCardImage = "https://drbakndillah.com/Api/uploads/"+imgName;
      //this.IdCardImage = sucess[0].webviewPath;
      

      console.log("IdCardImage"+this.IdCardImage);

    }).catch((error)=>{

    });


  } 

  // Upload the formData to our API
  async uploadData(formData: FormData ,   name) {
    const loading = await this.loadingCtrl.create({
      // message: 'Uploading image...',
    });
    await loading.present();
 

    // Use your own API!
    const url = 'https://drbakndillah.com/Api/upload.php';

    this.http.post(url, formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        loading.dismiss();
 
        if (res['success']) {

          var imgName = name.substring(name.lastIndexOf('/') + 1);

          console.log('name'+name);

          this.IdCardImage = "https://drbakndillah.com/Api/uploads/"+imgName;

          // this.imagaUploaded = 1;
          // this.presentToast('File upload complete.')
        } else {
          // this.imagaUploaded = 0;
          // this.presentToast('File upload failed.')
        }
      });
  } 

  async uploadIMGintoServer(imageBase64 , name ){

    const response = await fetch(imageBase64);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append('file', blob, name);
    this.uploadData(formData , name);

    console.log('name'+name);
    this.itemData.Image = name; 
    this.selected_image_name = name;

  
   
  }

  

  async Upload() {
    
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    let Fill_ALl_requird_details_package = 'Fill ALl requird details';
    let subscrition_Done_succeefully = 'subscrition_Done_succeefully';
    let error_uploading_car_card_id = 'error_uploading_car_card_id';


    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
    this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; })
    this.translate.get('subscrition_Done_succeefully').subscribe(value => { subscrition_Done_succeefully = value; })
    this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; })


      this.imagaUploaded = 0;
      if( this.selected_image_name == 'imgName'){

        this.presentToast(error_uploading_car_card_id);
      }else{
        this.imagaUploaded = 1;
      }


      // this.itemData.Image = this.images[0].name;
      if( this.imagaUploaded  == 0){ this.itemData.Image = 'applogo.png'; }
    // }

    // //  insert data in DB 

    
  this.itemData.Type = this.item.type;
  
  const userId = await Storage.get({ key: 'Id' });
  // console.log(JSON.parse(userId.value)); 
  this.itemData.User_id = JSON.parse(userId.value);


  if(this.userlat == '' || this.userlong == ''){

    const log = await Storage.get({ key: 'log' });
    // console.log(JSON.parse(log.value)); 
    this.itemData.Log = JSON.parse(log.value);
  
    const Lat = await Storage.get({ key: 'Lat' });
    // console.log(JSON.parse(Lat.value)); 
    this.itemData.Lat = JSON.parse(Lat.value);  
    
    }
 
    this.itemData.Maximin_date =  this.itemData.Maximin_date.substring(0, 10);

    this.itemData.Maximin_time =  this.itemData.Maximin_time.substring(11, 16);


  console.log("Type"+this.itemData.Type);
  console.log("Country_id"+this.itemData.Country_id);

  console.log("Governate_id"+this.itemData.Governate_id);

  console.log("City_id"+this.itemData.City_id);

  console.log("Image"+this.itemData.Image);

  console.log("Max_price_delivery"+this.itemData.Max_price_delivery);

  console.log("Title_ar"+this.itemData.Title_ar);

  console.log("Title_en"+this.itemData.Title_en);

  console.log("Other_note"+this.itemData.Other_note);

  console.log("Maximin_time"+this.itemData.Maximin_time);
  
  console.log("Maximin_date"+this.itemData.Maximin_date);
  
  console.log("Log"+this.itemData.Log);
  
  console.log("Lat"+this.itemData.Lat);
  
  console.log("User_id"+this.itemData.User_id);


  if (this.itemData.Governate_id == undefined || this.itemData.City_id == undefined ||  this.itemData.Max_price_delivery == ''  || this.itemData.Title_ar == ''  || this.itemData.Title_en == ''    || this.itemData.Maximin_date == ''    ) {
    const toast = await this.toastCtrl.create({
      message: Fill_ALl_requird_details_package,
      duration: 2000
    });
    toast.present();
    return;
  } 


  
   

  ///////////////////////////////////////////////////////////

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();

    // // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1

    let url = this.Api_URL + "insertInToItem.php?Image="+this.itemData.Image+"&Max_price_delivery="+this.itemData.Max_price_delivery+"&Type="+this.itemData.Type+"&Country_id=1&Governate_id="+this.itemData.Governate_id+"&City_id="+this.itemData.City_id+"&Title_ar="+this.itemData.Title_ar+"&Title_en="+this.itemData.Title_en+"&Other_note="+this.itemData.Other_note+"&Maximin_time="+this.itemData.Maximin_time+"&Maximin_date="+this.itemData.Maximin_date+"&Log="+this.itemData.Log+"&Lat="+this.itemData.Lat+"&Item_status=new&User_id="+this.itemData.User_id;
         console.log(url);
 
    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

    //   // console.log('response'+response.id);

    //   //console.log(response[0].response);
      loading.dismiss();
      if (retrivedResponse.response == 'error') {

        this.presentToast(wrong_inserttopackage_details);
        return;

      } else if (retrivedResponse.response == 'success') {
        //console.log(retrivedResponse.uid);
        this.AddnewItemAlert();
       
        // this.navCtrl.navigateForward('/tabs/profile');
        return;
      }else{
        this.presentToast(wrong_inserttopackage_details);
        return;
      }

    }, (error) => {

    });


  }
 



  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.applang = JSON.parse(language.value);
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);


    this.translate.get('Item Name (Arabic)').subscribe( value => { this.inputItemName_ar = value; })
    this.translate.get('Item Name (English)').subscribe( value => { this.inputItemName_en = value; })
  
    
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: PlaceApiPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ JSON.stringify(dataReturned));
        console.log(dataReturned.data);
        // console.log(JSON.parse(dataReturned.data.Latitude));
        // {"latitude":23.593273300000003,"longitude":58.4447587,"countryCode":"OM","countryName":"Oman","postalCode":"",
        // "administrativeArea":"Muscat Governorate","subAdministrativeArea":"","locality":"Muscat","subLocality":"Al Khuwayr South",
        // "thoroughfare":"","subThoroughfare":"","areasOfInterest":["Maktabi Building"]}
        this.userlocation = JSON.stringify(dataReturned.data.Selected_address);
        // this.userlat = JSON.stringify(dataReturned.data.Latitude);
        // console.log(this.userlat);
        this.userlat = JSON.parse(dataReturned.data.Latitude);
        this.itemData.Lat =  this.userlat;
        console.log(this.userlat); 
        this.userlong = JSON.parse(dataReturned.data.Longitude);
        this.itemData.Log = this.userlong;
        console.log(this.userlong); 

      }
    });

    return await modal.present();
  }

  async countryCode() {   
     
      const loading = await this.loadingCtrl.create({
       
        duration: 2000,
        spinner: 'bubbles'
      });
      await loading.present();
    
    this.http.get('https://drbakndillah.com/Api/getGovernateById.php?ID=1').subscribe((response) => {
      console.log(response);
      this.governateArr = response;
      loading.dismiss();
    }, (error) => {
      console.log(error);
    });

  }


  governateIdSelected(selectedValue: any) {
    this.itemData.Governate_id = selectedValue.detail.value;
    this.itemData.City_id = '';
    console.log(selectedValue.detail.value);
    this.http.get('https://drbakndillah.com/Api/getCityById.php?ID=' + this.itemData.Governate_id).subscribe((response) => {
      console.log(response);
      this.cityArr = response;
    }, (error) => {
      console.log(error);
    });


  }
  cityIdSelected(selectedValue: any) {
    this.itemData.City_id = selectedValue;
    console.log(this.itemData.City_id);

  }
  radioChecked() {
    let inputItemName_ar_1;
    let inputItemName_en_1;
    let inputItemName_ar_2;
    let inputItemName_en_2;


    if (this.item.type == 'passenger') { 
      this.translate.get('Passenger Name (Arabic)').subscribe( value => { this.inputItemName_ar  = value; })
      this.translate.get('Passenger Name (English)').subscribe( value => { this.inputItemName_en = value; })
  
    } else { 
      this.translate.get('Item Name (Arabic)').subscribe( value => { this.inputItemName_ar  = value; })
      this.translate.get('Item Name (English)').subscribe( value => { this.inputItemName_en = value; })
  
    } 



  }

  async AddnewItemAlert() {
    let header;
    let message;
    let Cancel;
    let Add;


    this.translate.get('Add Item / Passenger').subscribe( value => { header = value; })
    this.translate.get('Add message').subscribe( value => { message = value; })
    this.translate.get('cancel').subscribe( value => { Cancel = value; })
    this.translate.get('Add').subscribe( value => { Add = value; })
  

    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: Cancel,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');

        this.navCtrl.navigateForward('/tabs/map');

          }
        }, {
          text: Add,
          handler: () => {
            console.log('Confirm Okay');

  
           this.itemData={
    "Country_id":"",
    "Governate_id":"",
    "City_id":"",
    "Image":"",
    "Max_price_delivery":"",
    "Type":"",
    "Title_ar":"",
    "Title_en":"",
    "Other_note":"",
    "Maximin_time":"",
    "Maximin_date":"",
    "Item_status":"new",
    "Log":"",
    "Lat":"",
    "User_id":""

  };

          }
        }
      ]
    });
  
    await alert.present();
  }

}
