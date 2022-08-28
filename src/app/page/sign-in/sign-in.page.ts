import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  Api_URL = 'https://drbakndillah.com/Api/';
  loginDetails = {
    "email": "",
    "password": ""
  }

  constructor(  
    private navCtrl: NavController,
    private toastController: ToastController,
    private alertController: AlertController,
    private translate: TranslateService,
    private http: HttpClient,
    private loadingController: LoadingController) {

    this.Selected_language_direction();
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

  }

  async forgotpassword() {
    let header;
    let subHeader;
    let message;
    let Restpassword;
    let Cancel;

    this.translate.get('forgot password').subscribe(value => { header = value; })
    this.translate.get('forgot password_subheader').subscribe(value => { subHeader = value; })
    this.translate.get('forgot password_msg').subscribe(value => { message = value; })
    this.translate.get('reset password').subscribe(value => { Restpassword = value; })
    this.translate.get('cancel').subscribe(value => { Cancel = value; })

    this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      inputs: [
        {
          name: 'mail',
          placeholder: 'example@gmail.com',

        },
      ],
      buttons: [
        {
          text: Restpassword,
          handler: (data: any) => {
            console.log('Saved Information', data.mail );

            this.sendForgetMail(data.mail);
          }
        },
        {
          text: Cancel,
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });

  }

  async sendForgetMail(mail){


    let mailSent;
    let mailwrong;

    this.translate.get('mailSent').subscribe(value => { mailSent = value; })
    this.translate.get('mailwrong').subscribe(value => { mailwrong = value; })

    if ( mail  == ""  ) {
      
      return;
    }  

      // const loading = await this.loadingController.create({
      //   spinner: 'bubbles'
      // });
      // await loading.present();

      let url = this.Api_URL + 'forgetPasswordMail.php?Email=' +  mail.trim()  ;
      console.log("response"+url);
      this.http.get(url, {}).subscribe((response) => {
        console.log("response"+response);


        console.log(response[0].response);
        // loading.dismiss();
        if (response[0].response == 'error') {
          // loading.dismiss();
          this.presentToast(mailwrong);
          return;

        } else if (response[0].response == 'success') {
          // loading.dismiss();
          this.presentToast(mailSent);
          return;
        }

      }, (error) => {
        this.presentToast(mailwrong);

      });
    

  }


  async SignInClick() {
    let login_details_empty_err;
    let wrong_login_details;

    this.translate.get('login_details_empty_err').subscribe(value => { login_details_empty_err = value; })
    this.translate.get('wrong_login_details').subscribe(value => { wrong_login_details = value; })

    if (this.loginDetails.email == "" || this.loginDetails.password == "") {
      const toast = await this.toastController.create({
        message: login_details_empty_err,
        duration: 2000
      });
      toast.present();
      return;
    } else {


      //Sigin 


      const loading = await this.loadingController.create({
        spinner: 'bubbles'
      });
      await loading.present();

      let url = this.Api_URL + 'UserSignIn.php?Email=' + this.loginDetails.email.trim() + '&Password=' + this.loginDetails.password.trim();

      this.http.get(url, {}).subscribe((response) => {

        console.log(response[0].response);
        loading.dismiss();
        if (response[0].response == 'notfound') {

          this.presentToast(wrong_login_details);
          return;

        } else if (response[0].response == 'success') {

          Storage.set({
            key: 'HasLogin',
            value: JSON.stringify('1'),
          });
          Storage.set({
            key: 'Email',
            value: JSON.stringify(this.loginDetails.email.trim()),
          });
          this.navCtrl.navigateForward('/tabs/map');
          return;
        }

      }, (error) => {

      });
    }




    // if login successfully then store data in storage 
    //  `Id`, `Email`, `Name_ar`, `Name_en`, `Family_name_ar`, `Family_name_en`, `Phone_no`, 
    // `Country_code`, `Country_id`, `Governate_id`, `City_id`, `Lat`, `log`, `Blocked`, `Password`, `token`,
    // Storage.set({
    //   key: 'HasLogin',
    //   value: JSON.stringify('1'),
    // });
    // Storage.set({
    //   key: 'Id',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Email',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Name_ar',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Name_en',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Family_name_ar',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Family_name_en',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Phone_no',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Country_code',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Country_id',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Governate_id',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'City_id',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Lat',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'log',
    //   value: JSON.stringify(''),
    // });
    // Storage.set({
    //   key: 'Blocked',
    //   value: JSON.stringify('0'),
    // });



    // this.navCtrl.navigateForward('/all-packages');

  }


  f 

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


}
