//  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35
//  https://drbakndillah.com/Api/viewUserChat.php?id=35&Orders_id=32 
import {  VERSION } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms"; 

import { Component, OnInit } from '@angular/core';
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

 

@Component({
  selector: 'app-single-chat-admin',
  templateUrl: './single-chat-admin.page.html',
  styleUrls: ['./single-chat-admin.page.scss'],
})
export class SingleChatAdminPage implements OnInit {
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
    

  MyChatArr: any[] = [];

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

        this.mesaageconentHeight = platform.height() - (platform.height() / 5.6 ) + "px";
 
        console.log('Height: ' + this.mesaageconentHeight);

       
      });


    this.Selected_language_direction();
 

    // if (router.getCurrentNavigation().extras.state) {

    //   this.chatUserDetails = this.router.getCurrentNavigation().extras.state;
    //   console.log('chatUserDetails' + JSON.stringify(this.chatUserDetails));
    // }

  }


  ngOnInit() {

    this.frmMessage = this.fb.group({
      message: new FormControl(null)
    });

    // Calling function every 2 seconds 

    setInterval(data => { 
      this.getMyChat();
  

    }, 2000); 

  }

  ngAfterViewChecked() {
    this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement.scrollHeight;
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



  async getMyChat() {


    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';

    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })



    const userId = await Storage.get({ key: 'Id' });  
    let User_id = JSON.parse(userId.value);

    let url = this.Api_URL + "viewUserChatAdmin.php?id=" + User_id;
    console.log(url);

    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));
 
       if (retrivedResponse.response == 'error') {

        this.presentToast(wrong_inserttopackage_details);
        return;

      } else {
        this.MyChatArr = retrivedResponse;
console.log( this.MyChatArr );
        return;
      }

    }, (error) => {

    });


  }
 
 
 
  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }

 

  // async sendNotification(title, body, token) {
  //   let somethingwronghappend;
  //   let YouAcceptOrder;

  //   this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; })
  //   this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })


  //   let other_url = this.Api_URL + 'firebaseRequest.php?title=' + title + '&body=' + body + '&token=' + token;
  //   console.log(other_url);
  //   this.http.get(other_url, {}).subscribe((response) => {

  //     console.log('response' + response[0].response);

  //   }, (error) => {

  //     //  this.presentToast(somethingwronghappend);


  //   });

  // }

  

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


    let url = this.Api_URL + "insertintoSingleChatAdmin.php?Text="+this.chattext.trim() +"&User_id=" + this.AppUser;
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

        
        return;
      }

    }, (error) => {

    });


  }
}
}
