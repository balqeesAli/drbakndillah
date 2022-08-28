//  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35
//  https://drbakndillah.com/Api/viewUserChat.php?id=35&Orders_id=32 

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms"; 
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, NavController, PopoverController, ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';
import { Browser } from '@capacitor/browser';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { UserPhoto, PhotoService } from '../../services/photo.service';
import { formatDate } from '@angular/common';
import {  VERSION } from "@angular/core";

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-single-chat',
  templateUrl: './single-chat.page.html',
  styleUrls: ['./single-chat.page.scss'],
})
export class SingleChatPage implements OnInit {

  name = "Angular " + VERSION.major;

  @ViewChild("messageContainer") mContainer: ElementRef;
  frmMessage: FormGroup;

  messages = [
    "Hi",
    "Welcome to our secure message platform",
    "We donnot share your privacy",
    "Not sell your privacy to potential buyers..."
  ];

  today = Date.now();
  sendIcon;
  chatUserDetails;
  chattext;
  @ViewChild(IonContent, { static: false }) content: IonContent;
 
  /*

  {
   "orderid":"32",
   "ostatus_ar":"جديد",
   "ostatus_en":"new",
   "mid":"40",
   "memail":"token@gmail.com",
   "mname_ar":"Token",
   "mname_en":"Token",
   "mphone":"99999",
   "mcountry_code":"968",
   "mtoken":"cRDqEWOrQFqK8LeaxYPsix:APA91bFm-oR4YdawkxGBS-_RsUr4DP-twSbE9jvoJ7Tlgs9ATfGw5koxL60VDzLgt9sX0goR3uhN5oqMPTDiKlso1JwkMOQ8kt05SbIa2rlnS16lLO_kLyTIH7phG6D2u0sAZRV2iDXc",
   "oid":"35",
   "oemail":"balqqesalyahyei@gmail.com",
   "oname_ar":"Bqeed",
   "oname_en":"fgdfgh",
   "ophone":"99823650",
   "ocountry_code":"968",
   "otoken":"cRDqEWOrQFqK8LeaxYPsix:APA91bFm-oR4YdawkxGBS-_RsUr4DP-twSbE9jvoJ7Tlgs9ATfGw5koxL60VDzLgt9sX0goR3uhN5oqMPTDiKlso1JwkMOQ8kt05SbIa2rlnS16lLO_kLyTIH7phG6D2u0sAZRV2iDXc",
   "iid":"97",
   "iimage":"https://drbakndillah.com/Api/uploads/1644259133601.jpeg",
   "itype":"item",
   "ititle_ar":"سس",
   "ititle_en":"ss",
   "iothernote":"",
   "ilog":"58.21130852307578",
   "ilat":"23.609156951723843",
   "rate":0,
   "itime":":00",
   "idate":"2022-02-07",
   "mnickname":"abc",
   "approvedorder":"0"
}

  */


  MyChatArr: any[] = [];
   NewMyChatArr  :any[]= [];
   ScrrolTOUP = 1;

  IdCardImage: any = 'https://drbakndillah.com/Api/uploads/car_card_id.png';

  Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';

  Api_URL = 'https://drbakndillah.com/Api/';

  IdCardImageView = 1;
  selected_image_name: any = 'imgName';
  AppUser;
  applang;
  singleChatDetails={
    "Car_card_Id_img":"",
  }

  mesaageconentHeight ;


  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private plt: Platform,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    public photoService: PhotoService,
    private popCtrl: PopoverController,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    platform: Platform,
    private fb: FormBuilder
    ) {



      platform.ready().then(() => {
        console.log('Width: ' + platform.width());
        console.log('Height: ' + platform.height());

        this.mesaageconentHeight = platform.height() - (platform.height() / 4.5 ) + "px";
 
        console.log('Height: ' + this.mesaageconentHeight);

       
      }); 

    this.Selected_language_direction();

    this.translate.get('sendIcon').subscribe(value => { this.sendIcon = value; })


    if (router.getCurrentNavigation().extras.state) {

      this.chatUserDetails = this.router.getCurrentNavigation().extras.state;
      console.log('chatUserDetails' + JSON.stringify(this.chatUserDetails));

    }


  }


  ngOnInit() {
 
this.frmMessage = this.fb.group({
      message: new FormControl(null)
    });
 

    // Calling function every 2 seconds 

    setInterval(data => { 

      this.getMyChat();

      // this.ScrollToBottom();
    }, 1000); 

  }

  ngAfterViewChecked() {
    if(this.ScrrolTOUP == 1){
    this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement.scrollHeight;
  }
}

  send() {
    const message = this.frmMessage.get("message");
    console.log(message.value);

    this.messages.push(message.value);

    // clear
    message.setValue("");
  }

  async Selected_language_direction() {

    const UID = await Storage.get({ key: 'Id' });
    console.log(JSON.parse(UID.value));
    this.AppUser = JSON.parse(UID.value);


    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);

    this.applang = JSON.parse(language.value);
    this.getMyChat();
    
    // this.presentAlertConfirm(); 
  }

  ScrollToBottom() {
    // this.content.scrollToBottom(100);
  }

  async getMyChat() {
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
 

    const userId = await Storage.get({ key: 'Id' });
    // console.log(JSON.parse(userId.value));
    let User_id = JSON.parse(userId.value);

    let url = this.Api_URL + "viewUserChat.php?id=" + User_id+"&Orders_id="+this.chatUserDetails.orderid;
    console.log(url);

    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

      // console.log('response'+response.id);

      //console.log(response[0].response);
       if (retrivedResponse.response == 'error') {

        this.presentToast(wrong_inserttopackage_details);
        return;

      } else {

        this.NewMyChatArr = retrivedResponse;

        console.log("NewMyChatArr__"+JSON.stringify(this.NewMyChatArr));

        console.log("NewMyChatArr__"+JSON.stringify(this.NewMyChatArr[this.NewMyChatArr.length-1]));

        if( JSON.stringify(this.NewMyChatArr )!= JSON.stringify(this.MyChatArr) ){

          this.MyChatArr = retrivedResponse;

        console.log( "1100011_" +  "NOT EQUAL");
        this.ScrrolTOUP = 1;
       
        
        }else{
 
          if( this.NewMyChatArr[this.NewMyChatArr.length-1].Image != ""){

this.getMyChat2();
          }
          this.ScrrolTOUP = 0;
        console.log( "1100011_" +  "  EQUAL");
       
        }

       // console.log( "1100011_" + this.NewMyChatArr  + "__" + JSON.stringify(this.MyChatArr) + "_____________" + JSON.stringify(retrivedResponse) );
        return;
      }


    }, (error) => {

    });


  }

  async getMyChat2() {
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
 

    const userId = await Storage.get({ key: 'Id' });
    // console.log(JSON.parse(userId.value));
    let User_id = JSON.parse(userId.value);

    let url = this.Api_URL + "viewUserChat.php?id=" + User_id+"&Orders_id="+this.chatUserDetails.orderid;
    console.log(url);

    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

      // console.log('response'+response.id);

      //console.log(response[0].response);
       if (retrivedResponse.response == 'error') {

        this.presentToast(wrong_inserttopackage_details);
        return;

      } else {

        this.NewMyChatArr = retrivedResponse;
 
        this.ScrrolTOUP = 1; 
      }


    }, (error) => {

    });


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
    this.singleChatDetails.Car_card_Id_img = name;
   this.Upload_img();
  }


  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }


  async changeState(state, state_ar) {
    // https://drbakndillah.com/Api/updateOrdermState.php.php?id=1&status=test&status_ar=معتمد
 
    // approved 
    // Completed
    // rejected
    // deleted 

    let somethingwronghappend;
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })

    let DoneSuccessfully;
    this.translate.get('DoneSuccessfully').subscribe(value => { DoneSuccessfully = value; })

    let url = this.Api_URL + 'updateOrdermState.php?id=' + this.chatUserDetails.orderid + '&status=' + state + '&status_ar=' + state_ar;
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {
      console.log(response);
      if (response[0].response == 'success') {
        if (state == 'approved') { 

          //Update item state from new to approved 
          let other_url = this.Api_URL + 'updateItemState.php?id='+this.chatUserDetails.iid+'&status=approved';
          console.log(other_url);
          this.http.get(other_url, {}).subscribe((response) => { 

            console.log('response' + response[0].response); 
          
          }, (error) => { 
        this.presentToast(somethingwronghappend);
          });

           //Update orders state to rejected
           let other_url2 = this.Api_URL + 'updateAllOrdermStatetorejected.php?id='+this.chatUserDetails.orderid +'&itemid=' + this.chatUserDetails.iid ;
           console.log(other_url2);
           this.http.get(other_url2, {}).subscribe((response) => { 
 
             console.log('response' + response[0].response); 
           
           }, (error) => { 
         this.presentToast(somethingwronghappend);
           });

           

        } else if (state == 'Completed') {

          this.sendNotification('Order Completed', 'Mandoob completed their job please rate them ', this.chatUserDetails.otoken );

        } else if (state == 'rejected') {


          this.sendNotification('Order Rejected', 'Delivery requester reject your offer ', this.chatUserDetails.mtoken);


        } else if (state == 'deleted') {


          this.sendNotification('Order Deleted', 'Mandoob had delete their offer ', this.chatUserDetails.otoken );


        }

        this.presentToast(DoneSuccessfully);
      } else {
        this.presentToast(somethingwronghappend);
      }
    }, (error) => {
      this.presentToast(somethingwronghappend);
    });



  }


  async sendNotification(title, body, token) {
    let somethingwronghappend;
    let YouAcceptOrder;

    this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; })
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })


    let other_url = this.Api_URL + 'firebaseRequest.php?title=' + title + '&body=' + body + '&token=' + token;
    console.log(other_url);
    this.http.get(other_url, {}).subscribe((response) => {

      console.log('response' + response[0].response);

    }, (error) => {

      //  this.presentToast(somethingwronghappend);


    });

  }

  async Upload_img() {

     if(this.singleChatDetails.Car_card_Id_img  == ''){
       return;
     }
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    let error_uploading_car_card_id = 'error_uploading_car_card_id';
    

    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
    this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; })

    if( this.selected_image_name == 'imgName'){

      this.presentToast(error_uploading_car_card_id);
      return;

    }
    
    //  insert data in DB 
     const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();
    

  //  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35 


    let url = this.Api_URL + "insertintoSingleChat.php?Img=" + this.singleChatDetails.Car_card_Id_img +  "&Orders_id="+this.chatUserDetails.orderid+"&Text=&User_id=" + this.AppUser;
    console.log(url);
 
    this.http.get(url, {}).subscribe((response) => {
      loading.dismiss();

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));
 
      if (retrivedResponse.response[0] == 'error') {
        loading.dismiss();
        this.presentToast(error_uploading_car_card_id);
        return;

      } else if (retrivedResponse.response[0] == 'success') {
        loading.dismiss(); 

        this.getMyChat();

   //Send notification 

        if (this.chatUserDetails.mid  ==  this.AppUser ) {

          this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.otoken);

        }else if(this.chatUserDetails.mid  !=  this.AppUser ) {

          this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.mtoken);

        }

        this.getMyChat();
      
        // this.navCtrl.navigateForward('/tabs/profile');
        return;
      }

    }, (error) => {

    });


  }


  async Upload_text() {

     if(this.chattext  != ''){
        
     
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    let error_uploading_car_card_id = 'error_uploading_car_card_id';
    

    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
    this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; })
 
    //  insert data in DB 
     const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();
    

  //  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35 


    let url = this.Api_URL + "insertintoSingleChat.php?Img=&Orders_id="+this.chatUserDetails.orderid+"&Text="+this.chattext.trim() +"&User_id=" + this.AppUser;
    console.log(url);
 
    this.http.get(url, {}).subscribe((response) => {
      loading.dismiss();

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));
 
      if (retrivedResponse[0].response == 'error') {
        loading.dismiss();
        this.presentToast(wrong_inserttopackage_details);
        return;

      } else if (retrivedResponse[0].response == 'success') {
        loading.dismiss(); 
        this.chattext = "";

   //Send notification 
   
        if (this.chatUserDetails.mid  ==  this.AppUser ) {

          this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.otoken);

        }else if(this.chatUserDetails.mid  !=  this.AppUser ) {

          this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.mtoken);

        }

        // this.navCtrl.navigateForward('/tabs/profile');
        return;
      }

    }, (error) => {

    });


  }
}
}
