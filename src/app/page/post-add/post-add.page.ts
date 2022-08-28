import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { PlaceApiPage } from '../../place-api/place-api.page';
// import { PlaceApiPage } from '../../place-api/place-api.page'; 
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../../modals/my-modal/my-modal.page';
import { HttpClient } from '@angular/common/http';
import { UserPhoto, PhotoService } from '../../services/photo.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';


interface LocalFile {
  name: string;
  path: string;
  data: string;
}


@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.page.html',
  styleUrls: ['./post-add.page.scss'],
})
export class PostAddPage implements OnInit {

  
  Api_URL = 'https://drbakndillah.com/Api/';
  IdCardImage: any = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';
  Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';

  selected_image_name:any = 'imgName';
  applang;
  dataReturned: any;
  userlocation: any;
  userlong: any = "";
  userlat: any = "";
  countryArr: any;
  governateArr: any;
  cityArr: any;
  public item: any = { "type": "Item", };

  images: LocalFile[] = [];
  imagaUploaded: any = 0;
  ClickToSetLocation:any = 0;
 
  usersData = {
    "name_ar": "",
    "name_en": "",
    "discription_ar": "",
    "discription_en": "",
    "date": "",
    "link": "",
    "User_id": "",
    "item_image":""
  }

  today = new Date().toJSON().split('T')[0];
  seleted_days;
  seleted_days_price;
  constructor( private alertController: AlertController,
    private translate: TranslateService,
    private navCtrl: NavController,
    public modalController: ModalController, 
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private loadingController: LoadingController,
    private actionSheetController: ActionSheetController,
    public photoService: PhotoService,
    private toastController: ToastController) {
    this.Selected_language_direction();


    this.seleted_days = 15;
    this.Set_price_days();
   }

  ngOnInit() {
  }
  Set_price_days(){
    if(this.seleted_days == 15){
      this.seleted_days_price = '10';
    }

    if(this.seleted_days == 30){
      this.seleted_days_price = '15';
    }

    if(this.seleted_days == 180){
      this.seleted_days_price = '60';
    }

    if(this.seleted_days == 360){
      this.seleted_days_price = '100';
    }

  }
  

  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.applang = JSON.parse(language.value);
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);

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
    this.usersData.item_image = name; 
    this.selected_image_name = name;

  
   
  }
 

  async Add_btn() {
    let header;
    let message;
    let Cancel;
    let Okay;


    this.translate.get('Add Advertisement').subscribe(value => { header = value; })
    this.translate.get('Add message_Advertisement').subscribe(value => { message = value; })
    this.translate.get('cancel').subscribe(value => { Cancel = value; })
    this.translate.get('ok').subscribe(value => { Okay = value; })


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
          text: Okay,
          handler: () => {
            console.log('Confirm Okay');
            


  this.usersData.name_ar= '';
  
  this.usersData.name_en= '';
  
  this.usersData.discription_ar= '';
  
  this.usersData.discription_en= '';

  this.usersData.date= '';
  
  this.usersData.link= ''; 

  this.IdCardImage = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';

          }
        }
      ]
    });

    await alert.present();
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


    // Access upload img method

    this.imagaUploaded = 0;
    if( this.selected_image_name == 'imgName'){

      this.presentToast(error_uploading_car_card_id);
    }else{
      this.imagaUploaded = 1;
    }


    // this.itemData.Image = this.images[0].name;
    if( this.imagaUploaded  == 0){ this.usersData.item_image = 'applogo.png'; }
   
 

    //  insert data in DB 


    const userId = await Storage.get({ key: 'Id' });
    this.usersData.User_id = JSON.parse(userId.value); 



    if (this.usersData.name_ar  == '' || this.usersData.name_en == '' ||  this.usersData.discription_ar == '' ||  this.usersData.discription_en == ''||  this.usersData.link.trim() == ''||  this.usersData.date.substring(0, 10) == '' ) {
      this.presentToast(Fill_ALl_requird_details_package);
      return;
    }

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();


    let url = this.Api_URL + 'insertintoadds.php?Title_ar=' + this.usersData.name_ar.trim() + '&Title_en=' + this.usersData.name_en.trim() + '&Description_ar=' + this.usersData.discription_ar.trim() + '&Description_en=' + this.usersData.discription_en.trim() + '&Image=' + this.usersData.item_image + '&Start_date=' + this.usersData.date.substring(0, 10) + '&Price=' + this.seleted_days_price + '&Period_ar=' + this.seleted_days + '&Period_en=' + this.seleted_days + '&URL_link=' + this.usersData.link + '&User_id='+ this.usersData.User_id;
    
    // let url = this.Api_URL + 'insertInToItem.php?Image=' + this.usersData.item_image + '&Max_price_delivery=' + this.usersData.price  + '&Type=' + this.item.type + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Title_ar='+this.usersData.itemname_ar.trim() +'&Title_en=' + this.usersData.itemname_en.trim()  + '&Other_note=' + this.usersData.note.trim()  + '&Maximin_time=' + this.usersData.time.substring(11, 16)  + '&Maximin_date=' + this.usersData.date.substring(0, 10) + '&Log=' + this.usersData.log + '&Lat=' + this.usersData.Lat + '&Item_status=new&User_id=' + this.usersData.User_id;
  
    console.log(url);




    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

      // console.log('response'+response.id); k

      //console.log(response[0].response);
      loading.dismiss();
      if (retrivedResponse.response == 'error') {

        // this.presentToast(wrong_inserttopackage_details);
        return;

      } else if (retrivedResponse[0].response == 'success') {
        console.log(retrivedResponse.uid);
        this.Add_btn();

        // this.navCtrl.navigateForward('/tabs/profile');
        return;
      }

    }, (error) => {
      loading.dismiss();
      

    });


  }


  // Little helper
  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }

}
