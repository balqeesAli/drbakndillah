import { Component } from '@angular/core'; 
import { isCordovaAvailable } from '../app/is-cordova-avaliable';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@capacitor/storage'; 

import { HttpClient } from '@angular/common/http';

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token
  } from '@capacitor/push-notifications';
  import { Router } from '@angular/router';
  import { Capacitor } from '@capacitor/core'; 
  import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  Api_URL = 'https://drbakndillah.com/Api/';
  token ='0';

  constructor(
              platform: Platform,
              private router: Router,
              private navCtrl:NavController,
              private http: HttpClient,
              
              
              ) {


                // PushNotifications.register().then((response) => {
                //   console.log("register response" + response);
                // }).catch((error) => {
                //   console.log("register error" + error);
                // });

                
 
  //   if (isCordovaAvailable()) {
  //     this.oneSignal.startInit('b88d86e0-551b-4410-84bc-9258fffa300a', '879911352936');
  //     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
  //     this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
  //     this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
  //     this.oneSignal.endInit();
       
  //     console.log("____Cordova____Available____");
  //     // this.oneSignal.getIds().then(identity => {
  //     //   console.log(identity.pushToken + ' its PUSHTOKEN');
  //     //   console.log(identity.userId + 'its USERID');

  //     // console.log("____Cordova__try to get id__Available____");

  //     //   // alert(identity.pushToken + ' it's PUSHTOKEN'); 
  //     //   // alert(identity.userId + 'it's USERID);
  //     // });


  //     // console.log("____Cordova__Out get id__Available____");


  // //     window["plugins"].OneSignal.getIds(function(ids) {
  // //       console.log("Player ID __ "+ids.userId);
    
  // //       localStorage.setItem("fcmtoken", ids.userId);
  // //       console.log("fcmtoken"+ids.userId);
        
  // //       // this.addPlayidInDB(ids.userId);
  // //           // Player ID will be available at the object ids.userId
  // //       });


  //   }

  }
    // private onPushReceived(payload: OSNotificationPayload) {
    //   alert('Push recevied:' + payload.body);
    // }

    // private onPushOpened(payload: OSNotificationPayload) {
    //   alert('Push opened: ' + payload.body);
    // }


    ngOnInit() {
      console.log('Initializing HomePage');
      this.GetUserDataandStoreinLoacalStorage();
      this.packagesDeadline();
      this.GetUserDataandStoreinLoacalStorage();

      this.GetUpdateUserToken();
  

    if (isCordovaAvailable()) {
      // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register().then(success =>{

          }).catch(error => {

            Storage.set({
              key: 'token',
              value: JSON.stringify("Invalid Registration"),
            });

          });

          
          this.GetUpdateUserToken();
        } else {
          // Show some error
          Storage.set({
            key: 'token',
            value: JSON.stringify("error msg registed"),
          });

        }
      });
  
      // On success, we should be able to receive notifications
      PushNotifications.addListener('registration',
        (token: Token) => {
          console.log('token_____'+token);
          // alert('Push registration success, token: ' + token.value);
          console.log('Push registration success, token: ' + token.value);
          Storage.set({
            key: 'token',
            value: JSON.stringify(token.value),
          });

        }
      );
  
      this.GetUpdateUserToken();
      
      // Some issue with our setup and push will not work
      PushNotifications.addListener('registrationError',
        (error: any) => {
          // alert('Error on registration: ' + JSON.stringify(error));
          Storage.set({
            key: 'token',
            value: JSON.stringify(error),
          });

        }
      );
  
      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          // alert('Push received: ' + JSON.stringify(notification));
        }
      );
  
      // Method called when tapping on a notification
      PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          // alert('Push action performed: ' + JSON.stringify(notification));

          
    this.navCtrl.navigateForward('/tabs/chat');
        }
      );
  }
  
    }

    async packagesDeadline(){
  
      let url = this.Api_URL +'viewandeditdeadline.php';
       console.log(url);
      this.http.get(url, {}).subscribe((response) => { }, (error) => {    });
  
    } 

    async GetUpdateUserToken(){
      const HasLogin = await Storage.get({ key: 'HasLogin' });
      console.log(JSON.parse(HasLogin.value));
      const ID = await Storage.get({ key: 'Id' });
      console.log(JSON.parse(ID.value));
  
      if(this.token == '0' || JSON.parse(ID.value) == ''){
        return;
      }
  
      let url = this.Api_URL +'updateusertoken.php?id='+JSON.parse(ID.value)+'&token='+this.token ;
       console.log(url);
      this.http.get(url, {}).subscribe((response) => { 

   

      }, (error) => {    });
  
    }


  async GetUserDataandStoreinLoacalStorage(){
    const HasLogin = await Storage.get({ key: 'HasLogin' });
    console.log(JSON.parse(HasLogin.value));

    if(JSON.parse(HasLogin.value) != 1){
      return;
    }
 
    let userData:any;
    const Email = await Storage.get({ key: 'Email' });
    console.log(JSON.parse(Email.value)); 


    let url = this.Api_URL + 'getUserDetailsByEmail.php?Email=' +JSON.parse(Email.value) ;
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

}
