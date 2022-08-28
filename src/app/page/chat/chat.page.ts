import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { HttpClient } from '@angular/common/http';
import { Network } from '@capacitor/network';
 
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
 
  ChatListArray: any = [];

  Api_URL = 'https://drbakndillah.com/Api/';
  viewLoginBtn: any;
  applang;
  AppUser;
  UserBlock;
  unreadAdminMsg=0;
  @ViewChild('content') content:any;

  constructor(public loadingController: LoadingController,
    private alertController: AlertController,
    private nativeGeocoder: NativeGeocoder,
    private navCtrl: NavController,
    private translate: TranslateService,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private actionSheetController: ActionSheetController) {

    // document.documentElement.dir = "rtl";
    setInterval(data => {
      
      this.Selected_language_direction();
      this.IsLogin();

      this.GetChat();
      this.GetUnreadAdminChat();


    }, 2000);


     
  }

  ngOnInit() {
  }

  
  moveToChat(i){

    
 
    this.navCtrl.navigateForward('/single-chat', {
      state: i
   });
   
   
    }
  


  moveToChatadmin(i){ 
    this.navCtrl.navigateForward('/single-chat-admin', {
      state: i
   });
   
    } 

    async GetUnreadAdminChat() { 
      let userData: any;
      const UID = await Storage.get({ key: 'Id' });
      console.log(JSON.parse(UID.value));
      this.AppUser = JSON.parse(UID.value);
  
      let url = this.Api_URL + '/getUnreadAdmidChat.php?id='+JSON.parse(UID.value);
  
      console.log(url);
      this.http.get(url, {}).subscribe((response) => {
  
        console.log('getUnreadAdmidChat  ' + JSON.stringify(response[0].unread));
        this.unreadAdminMsg =  response[0].unread;
   
      }, (error) => { });
  
  
    }


  async GetChat() { 

    let somethingwronghappend;
    let YouAcceptOrder;

    this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; })
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })

     
    let userData: any;
    const UID = await Storage.get({ key: 'Id' });
    console.log(JSON.parse(UID.value));
    this.AppUser = JSON.parse(UID.value);

    let url = this.Api_URL + '/getChatListbyid.php?id='+JSON.parse(UID.value);

    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      console.log('response' + JSON.stringify(response));
      this.ChatListArray = response;

      //  if(response[0].response == 'success' ){
      //    this.presentToast("YouAcceptOrder");
      //   //  https://drbakndillah.com/Api/firebaseRequest.php?title=Hi&body=Are%20you%20okey&token=


      //   //  let other_url = this.Api_URL + 'firebaseRequest.php?title=New%20Offer&body=One%20Mandoob%20accept%20your%20Order&token='+data.token;
      //   //  console.log(other_url); 
      //   //  this.http.get(other_url, {}).subscribe((response) => {

      //   //    console.log('response'+ response[0].response);

      //   //  }, (error) => {

      //   //    this.presentToast(somethingwronghappend);


      //   //  });


      //   //  this.navCtrl.navigateForward('tabs/orders');


      //  } 
    }, (error) => {

      this.presentToast(somethingwronghappend);


    });


  }

  async MovetoRate(data){
  
 
  this.navCtrl.navigateForward('/rate', {
    state: data
 });

  }

  async changeState(state, i , state_ar) {
    // https://drbakndillah.com/Api/updateOrdermState.php.php?id=1&status=test&status_ar=معتمد
 
    // approved 
    // Completed
    // rejected
    // deleted 

    let somethingwronghappend;
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })

    let DoneSuccessfully;
    this.translate.get('DoneSuccessfully').subscribe(value => { DoneSuccessfully = value; })

    let url = this.Api_URL + 'updateOrdermState.php?id=' + i.orderid + '&status=' + state + '&status_ar=' + state_ar;
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {
      console.log(response);
      if (response[0].response == 'success') {
        if (state == 'approved') { 

          //Update item state from new to approved 
          let other_url = this.Api_URL + 'updateItemState.php?id='+i.iid+'&status=approved';
          console.log(other_url);
          this.http.get(other_url, {}).subscribe((response) => { 

            console.log('response' + response[0].response); 
          
          }, (error) => { 
        this.presentToast(somethingwronghappend);
          });

           //Update orders state to rejected
           let other_url2 = this.Api_URL + 'updateAllOrdermStatetorejected.php?id='+i.orderid+'&itemid=' + i.iid ;
           console.log(other_url2);
           this.http.get(other_url2, {}).subscribe((response) => { 
 
             console.log('response' + response[0].response); 
           
           }, (error) => { 
         this.presentToast(somethingwronghappend);
           });

           

        } else if (state == 'Completed') {

          this.sendNotification('Order Completed', 'Mandoob completed their job please rate them ', i.otoken);

        } else if (state == 'rejected') {


          this.sendNotification('Order Rejected', 'Delivery requester reject your offer ', i.mtoken);


        } else if (state == 'deleted') {


          this.sendNotification('Order Deleted', 'Mandoob had delete their offer ', i.otoken);


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

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 1500,
    });
    toast.present();
  }
  
  ionViewDidEnter() {

    this.Checkinternetconnction();

   // this.content.scrollToBottom(300);


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

  async IsLogin() {

    const HasLogin = await Storage.get({ key: 'HasLogin' });
    console.log(JSON.parse(HasLogin.value));
    this.viewLoginBtn = JSON.parse(HasLogin.value);

    const Blocked = await Storage.get({ key: 'Blocked' });
    console.log(JSON.parse(Blocked.value));
    this.UserBlock = JSON.parse(Blocked.value);



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
