import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';

import { ViewChild, ElementRef } from '@angular/core';
import { Filesystem, Directory , Encoding} from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';
import { Browser } from '@capacitor/browser';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util'; 
import { UserPhoto, PhotoService } from '../../services/photo.service';

;


@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {
  today = Date.now();
  PayURL = '';
  PackageDetails: any = {
    "name": "",
    "peroid":
      [
        {
          "name": "once",
          "price": "0.200"
        }, {
          "name": "monthly",
          "price": "1.000"
        },
        {
          "name": "yearly",
          "price": "5.000"
        }],
    "company_name": "",
    "nickname": "",
    "startDate": "",
    "IDCardIMG": "",
    "nationallity": ""
  };
  price: any;
  period: any;
  selectPrice: any
  imagaUploaded: any = 0;

  UserPackageDetails: any = {
    "Package_name_ar": "",
    "Package_name_en": "",
    "Package_price": "",
    "Package_period_ar": "",
    "Package_period_en": "",
    "Start_date": "",
    "End_date": "",
    "Shop_company_name": "",
    "Nick_name": "",
    "Car_card_Id_img": "",
    "Status_ Package_ar": "",
    "Status_ Package_en": "",
    "User_id": "",
    "nationallityClicked": "false"

  };

  IdCardImage: any = 'https://drbakndillah.com/Api/uploads/car_card_id.png';

  Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';

  Api_URL = 'https://drbakndillah.com/Api/';

  IdCardImageView = 1;
  selected_image_name:any = 'imgName';


  constructor(private route: ActivatedRoute,
    private translate: TranslateService,
    private router: Router,
    private plt: Platform,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    public photoService: PhotoService, 

  ) {


    this.Selected_language_direction();


    if (router.getCurrentNavigation().extras.state) {

      this.PackageDetails = this.router.getCurrentNavigation().extras.state;
      console.log(this.PackageDetails);
    }
  }


  ngOnInit() {
      
    // this.deleteAllImage();
    // this.loadFiles();
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

    
      this.uploadIMGintoServer(sucess[0].webviewPath , sucess[0].filepath);
      this.IdCardImage = sucess[0].webviewPath;
      

    }).catch((error)=>{

    });


  } 

  // Upload the formData to our API
  async uploadData(formData: FormData) {
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
    this.uploadData(formData);

    console.log('name'+name);
    this.selected_image_name = name;
    this.UserPackageDetails.Car_card_Id_img = name;
   
  }





  async Upload(cost) {
    console.log(cost);
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    let Fill_ALl_requird_details_package = 'Fill ALl requird details';
    let subscrition_Done_succeefully = 'subscrition_Done_succeefully';
    let error_uploading_car_card_id = 'error_uploading_car_card_id';


    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
    this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; })
    this.translate.get('subscrition_Done_succeefully').subscribe(value => { subscrition_Done_succeefully = value; })
    this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; })


    // Access upload img method
    if (this.PackageDetails.name == 'Taxi Package' || this.PackageDetails.name == 'Special Package') {
      this.imagaUploaded = 0;
      if( this.selected_image_name == 'imgName'){

        this.presentToast(error_uploading_car_card_id);
      }else{
        this.imagaUploaded = 1;
      }
      // this.startUpload(this.images[0]); 


      // this.startUpload(this.images[0]).then((success) => {

      //   this.imagaUploaded = 1;

      // }).catch((error) => {
      //   console.log('images error');
      //   this.presentToast(error_uploading_car_card_id);
      // });
      //  this.UserPackageDetails.Car_card_Id_img = this.selected_image_name;
    }

    //  insert data in DB 

    if (this.PackageDetails.name == 'Taxi Package') {
      // console.log('Taxi Package');
      this.UserPackageDetails.Package_name_ar = 'باقة التاكسي';
      this.UserPackageDetails.Package_name_en = 'Taxi Package';
    }

    if (this.PackageDetails.name == 'Mandoob Package') {
      this.UserPackageDetails.Package_name_ar = 'باقة مندوب';
      this.UserPackageDetails.Package_name_en = 'Mandoob Package';
    }

    if (this.PackageDetails.name == 'Special Package') {
      this.UserPackageDetails.Package_name_ar = 'باقة المميزه';
      this.UserPackageDetails.Package_name_en = 'Special Package';
    }

    if (this.PackageDetails.name == 'Service Requester Package') {
      this.UserPackageDetails.Package_name_ar = 'باقة طالب الخدمة';
      this.UserPackageDetails.Package_name_en = 'Service Requester Package';
    }

    this.UserPackageDetails.Package_price = this.selectPrice;

    if (this.period == 'Daily') {
      this.UserPackageDetails.Package_period_ar = 'يومي';
      this.UserPackageDetails.Package_period_en = 'Daily';

    }
    if (this.period == 'Yearly') {
      this.UserPackageDetails.Package_period_ar = 'سنوي';
      this.UserPackageDetails.Package_period_en = 'Yearly';

    }
    if (this.period == 'Monthly') {
      this.UserPackageDetails.Package_period_ar = 'شهري';
      this.UserPackageDetails.Package_period_en = 'Monthly';

    }
    if (this.period == 'Once') {
      this.UserPackageDetails.Package_period_ar = 'لمرة واحده';
      this.UserPackageDetails.Package_period_en = 'Once';

    }

    console.log(this.UserPackageDetails.Start_date.substring(0, 10));

    this.UserPackageDetails.Start_date = this.UserPackageDetails.Start_date.substring(0, 10);
    const userId = await Storage.get({ key: 'Id' });
    // console.log(JSON.parse(userId.value));

    this.UserPackageDetails.User_id = JSON.parse(userId.value);

    // contun. for free clicked 

    if (cost == 'free') {

      console.log("On free");

      this.UserPackageDetails.Package_price = '0';

      if (this.PackageDetails.name == 'Taxi Package' || this.PackageDetails.name == 'Special Package') {


        this.UserPackageDetails.Status_Package_en = 'Pendding';
        this.UserPackageDetails.Status_Package_ar = 'قيد التفعيل';

      } else if (this.PackageDetails.name == 'Service Requester Package' || this.PackageDetails.name == 'Mandoob Package') {

        this.UserPackageDetails.Status_Package_en = 'active';
        this.UserPackageDetails.Status_Package_ar = 'فعال';

      }

    } else if (cost == 'paid') {
      this.UserPackageDetails.Status_Package_en = 'new';
      this.UserPackageDetails.Status_Package_ar = 'جديد';
    }

    console.log("Data__" + this.UserPackageDetails.Package_name_ar + "__" + this.UserPackageDetails.Package_name_en + "__" + this.UserPackageDetails.Package_price + "__" + this.UserPackageDetails.Package_period_ar + "__" + this.UserPackageDetails.Package_period_en + "__"
      + this.UserPackageDetails.Start_date + "__" + this.UserPackageDetails.End_date + "__" + this.UserPackageDetails.Shop_company_name + "__" + this.UserPackageDetails.Nick_name + "__" + this.UserPackageDetails.Car_card_Id_img + "__" + this.UserPackageDetails.User_id);


    // this.UserPackageDetails.Start_date
    // this.UserPackageDetails.Shop_company_name
    // this.UserPackageDetails.Nick_name
    // this.UserPackageDetails.Car_card_Id_img
    // this.UserPackageDetails.Package_price

    if (this.PackageDetails.name == 'Special Package') {

      if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Shop_company_name == '' || this.UserPackageDetails.Nick_name == '' ||  this.UserPackageDetails.nationallityClicked == 'false') {
        this.presentToast(Fill_ALl_requird_details_package);
        return;
      }

    }

    if (this.PackageDetails.name == 'Taxi Package') {

      if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Nick_name == '' || this.UserPackageDetails.Car_card_Id_img == '' || this.UserPackageDetails.nationallityClicked == 'false') {
        this.presentToast(Fill_ALl_requird_details_package);
        return;
      }

    }
    if (this.PackageDetails.name == 'Mandoob Package') {

      if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Nick_name == '' || this.UserPackageDetails.nationallityClicked == 'false') {
        this.presentToast(Fill_ALl_requird_details_package);
        return;
      }

    }
    if (this.PackageDetails.name == 'Service Requester Package') {

      if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Shop_company_name == '') {
        this.presentToast(Fill_ALl_requird_details_package);
        return;
      }

    }

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();

    // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1

    let url = this.Api_URL + "insertIntoPackage.php?Package_name_ar=" + this.UserPackageDetails.Package_name_ar + "&Package_name_en=" + this.UserPackageDetails.Package_name_en + "&Package_price=" + this.UserPackageDetails.Package_price + "&Package_period_ar=" + this.UserPackageDetails.Package_period_ar + "&Package_period_en=" + this.UserPackageDetails.Package_period_en + "&Start_date=" + this.UserPackageDetails.Start_date + "&Shop_company_name=" + this.UserPackageDetails.Shop_company_name + "&Nick_name=" + this.UserPackageDetails.Nick_name + "&Car_card_Id_img=" + this.UserPackageDetails.Car_card_Id_img + "&Status_Package_ar=" + this.UserPackageDetails.Status_Package_ar + "&Status_Package_en=" + this.UserPackageDetails.Status_Package_en + "&User_id=" + this.UserPackageDetails.User_id;
    console.log(url);




    this.http.get(url, {}).subscribe((response) => {
      loading.dismiss();

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

      // console.log('response'+response.id);

      //console.log(response[0].response);
 
      if (retrivedResponse.response == 'error') {
        loading.dismiss();
        this.presentToast(wrong_inserttopackage_details);
        return;

      } else if (retrivedResponse.response == 'success') {
        loading.dismiss();
        console.log(retrivedResponse.uid);

        if (cost == 'free') {
          loading.dismiss();

          this.presentToast(subscrition_Done_succeefully);

        this.navCtrl.navigateForward('/tabs/profile');
        } else {
          loading.dismiss();
       this.Link_to_payment(retrivedResponse.uid);
      //  this.url3(this.UserPackageDetails.Package_name_ar);

        }
        // this.navCtrl.navigateForward('/tabs/profile');
        return;
      }

    }, (error) => {

    });


  }


  async Link_to_payment(id) {

    let somethingWronghappedpleasetryagin = 'somethingWronghappedpleasetryagin';

    this.translate.get('somethingWronghappedpleasetryagin').subscribe(value => { somethingWronghappedpleasetryagin = value; })

          // Getting Username , phone , email from local storage 
          const Email = await Storage.get({ key: 'Email' }); 
          let UserEmail = JSON.parse(Email.value);

          const Phone_no = await Storage.get({ key: 'Phone_no' }); 
          let UserPhone_no = JSON.parse(Phone_no.value);

          const userName_ar = await Storage.get({ key: 'Name_ar' });
          const userName_en = await Storage.get({ key: 'Name_en' });
          
          let userName = JSON.parse(userName_ar.value)+"__"+JSON.parse(userName_en.value);

          // console.log(JSON.parse(userId.value));
 
          let paymentUrl = "https://drbakndillah.com/Api/payment/ecommerce.php?package_name_en=" + this.UserPackageDetails.Package_name_en + "&price=" + this.UserPackageDetails.Package_price * 1000 + "&customer="+userName+"&order_id=" + id + "&contact_number="+UserPhone_no+"&email_address="+UserEmail;
         

          console.log(paymentUrl);

          Browser.open({ url: 'https://drbakndillah.com/Api/payment/ecommerce.php?package_name_en=PackageSubscription&price=' + this.UserPackageDetails.Package_price * 1000 + '&customer='+userName+'&order_id=' + id + '&contact_number='+UserPhone_no+'&email_address='+UserEmail });


          // const openCapacitorSite = async () => {
          //   await Browser.open({ url: paymentUrl }).then((sucess)=>{
       
          //     this.navCtrl.navigateForward('/tabs/profile');
          // }).catch((error)=>{
          //   this.presentToast(somethingWronghappedpleasetryagin);
          // });
          // };

    // Browser.open({ url: paymentUrl }).then((sucess)=>{
       
    //     this.navCtrl.navigateForward('/tabs/profile');
    // }).catch((error)=>{
    //   this.presentToast(somethingWronghappedpleasetryagin);
    // });
    

  }

  
radioGroupChange(event) {
    let OMR;
    this.translate.get('OMR').subscribe(value => { OMR = value; })
    console.log("“radioGroupChange”", event.detail);
    this.price = event.detail.value.price + "  " + OMR;
    this.selectPrice = event.detail.value.price;

    this.period = event.detail.value.name;
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


}
