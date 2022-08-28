import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ID;
  HasLogin =0;
  viewMandoobCard = 0;
  viewAddnewItem = 0;
  unreadnotification = 0 ;

  Api_URL = 'https://drbakndillah.com/Api/';
  constructor(
    private translate: TranslateService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.Selected_language_direction();
    this.StorageMethod();


    setInterval(data=>{
    this.getNumbersOfPackages();
    this.StorageMethod();
    console.log("hi");
    },2000);



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


    const Id = await Storage.get({ key: 'Id' });
    console.log(JSON.parse(Id.value));

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

      if (mandoobCard !=  '0') { this.viewMandoobCard = 1; console.log("viewMandoobCard"); };
      if (newitem != '0') { this.viewAddnewItem = 1; console.log("viewAddnewItem"); };



    }, (error) => {

    });


 

    let url2 = this.Api_URL + "getUserNotificationUnread.php?id=" + JSON.parse(userId.value);
    console.log(url2);
    this.http.get(url2, {}).subscribe((response) => {

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

      this.unreadnotification = retrivedResponse.no; 
  
    }, (error) => {

    });






  }


  async DeleteAccount() { 
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details'; 
    let updatedsuccessfully = 'updatedsuccessfully'; 


    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; }) 
    this.translate.get('DoneSuccessfully').subscribe(value => { updatedsuccessfully = value; }) 



    let mandoobCard;
    let newitem;
    // const userId = await Storage.get({ key: 'Id' });
    // console.log("userId_____"+ JSON.parse(userId.value));
    const userId = await Storage.get({ key: 'Id' });
    console.log("userId_____"+JSON.parse(userId.value));

 

    let url = this.Api_URL + "updateuserIsDeleted.php?id=" + JSON.parse(userId.value);
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response;


console.log("retrivedResponse.response"+ JSON.stringify(retrivedResponse[0].response));

      if (retrivedResponse[0].response == 'error') {


console.log("retrivedResponse.response"+retrivedResponse.response);
        this.presentToast(wrong_inserttopackage_details);
        return;

      } else if (retrivedResponse[0].response == 'success') { 
         

        console.log("retrivedResponse.response"+retrivedResponse.response);
        this.presentToast(updatedsuccessfully);
        Storage.clear();
        this.navCtrl.navigateForward('welcome');

        
        return;
      }



    }, (error) => {

    });
  }


  async StorageMethod() {
    const HasLogin = await Storage.get({ key: 'HasLogin' });
    console.log(JSON.parse(HasLogin.value));
    this.HasLogin = JSON.parse(HasLogin.value);
  }


  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }


  changeLanguage(selectedLan) {
    this.translate.use(selectedLan);
    if (selectedLan == 'ar') {
      document.documentElement.dir = "rtl";
      Storage.set({
        key: 'direction',
        value: JSON.stringify("rtl"),
      });


      Storage.set({
        key: 'language',
        value: JSON.stringify("ar"),
      });


    } else {
      document.documentElement.dir = "ltr";

      Storage.set({
        key: 'direction',
        value: JSON.stringify("ltr"),
      });

      Storage.set({
        key: 'language',
        value: JSON.stringify("en"),
      });


    }

    this.navCtrl.navigateForward('/tabs/map');

  }

  async ChangeLanguage() {
    let header;
    let message;
    let cancel;

    this.translate.get('Change Language').subscribe(value => { header = value; })
    this.translate.get('Select language !').subscribe(value => { message = value; })
    this.translate.get('cancel').subscribe(value => { cancel = value; })


    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'العربية',
          handler: () => {
            console.log('Confirm Okay');
            this.changeLanguage('ar');
          }

        }, {
          text: 'English',
          handler: () => {
            console.log('Confirm Okay');
            this.changeLanguage('en');
          }

        }, {
          text: cancel,
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

  async Logout() {
    let header;
    let message;
    let cancel;

    this.translate.get('Logout').subscribe(value => { header = value; })
    this.translate.get('Are you sure you want to logout !').subscribe(value => { message = value; })
    this.translate.get('cancel').subscribe(value => { cancel = value; })


    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: header,
          handler: () => {
            console.log('Confirm Okay');

            Storage.set({
              key: 'HasLogin',
              value: '0',
            });
            Storage.clear();
            this.navCtrl.navigateForward('welcome');


          }

        }, {
          text: cancel,
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
