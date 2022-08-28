import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { PlaceApiPage } from '../../place-api/place-api.page';
// import { PlaceApiPage } from '../../place-api/place-api.page'; 
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../../modals/my-modal/my-modal.page';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  Api_URL='https://drbakndillah.com/Api/';
  applang;
  dataReturned: any;
  userlocation: any;
  userlong: any = "";
  userlat: any = "";
  countryArr: any;
  governateArr: any;
  cityArr: any;
  options = { location: "test", time: "today" }
  usersData = {
    "Email": "",
    "Name_ar": "",
    "Name_en": "",
    "Family_name_ar": "",
    "Family_name_en": "",
    "Phone_no": "",
    "Country_code": "", //////////////
    "Country_id": "",
    "Governate_id": "",
    "City_id": "",
    "Lat": "",
    "log": "",
    "Blocked": "0",
    "Password": "",
    "com_Password": "",
    "token": ""
  }
  checkTerms = false ;


  constructor(
    private navCtrl: NavController,
    public modalController: ModalController,
    private alertController: AlertController,
    private translate: TranslateService,
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController) {
    this.Selected_language_direction();

    //Get List of country

    this.http.get('https://drbakndillah.com/Api/getCountryDetails.php').subscribe((response) => {
      console.log(response);
      this.countryArr = response;
    }, (error) => {
      console.log(error);
    });

  }



  ngOnInit() {


  }

  countryCode(selectedValue: any) {
    this.usersData.Country_code = selectedValue.code;
    this.usersData.Country_id = selectedValue.Id;
    console.log(this.usersData.Country_code);

    this.http.get('https://drbakndillah.com/Api/getGovernateById.php?ID=' + this.usersData.Country_id).subscribe((response) => {
      console.log(response);
      this.governateArr = response;
    }, (error) => {
      console.log(error);
    });

  }


  governateIdSelected(selectedValue: any) {
    this.usersData.Governate_id = selectedValue.detail.value;
    this.usersData.City_id = '';
    console.log(selectedValue.detail.value);
    this.http.get('https://drbakndillah.com/Api/getCityById.php?ID=' + this.usersData.Governate_id).subscribe((response) => {
      console.log(response);
      this.cityArr = response;
    }, (error) => {
      console.log(error);
    });


  }
  cityIdSelected(selectedValue: any) {
    this.usersData.City_id = selectedValue;
    console.log(this.usersData.City_id);

  }
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: PlaceApiPage,
  //     componentProps: { 
  //       foo: 'hello',
  //       bar: 'world'
  //     }
  //   });
  //   return await modal.present();
  // }

  isemailValid(search: string): boolean {
    let emailvalid: boolean;

    let regexp = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

    emailvalid = regexp.test(search);

    return emailvalid;
  }


  ispasswordValid(search: string): boolean {
    let passwordvalid: boolean;

    let regexp = new RegExp(/^[^\n]{6,}$/);

    passwordvalid = regexp.test(search);

    return passwordvalid;
  }

  isStringValid(search: string): boolean {
    let stringvalid: boolean;

    let regexp = new RegExp(/^([a-zA-Z]+)$/);

    stringvalid = regexp.test(search);

    return stringvalid;
  }

  isStringArabicValid(search: string): boolean {
    let stringvalid: boolean;

    let regexp = new RegExp(/^([گچپژیلفقهمو ء-ي]+)$/);

    stringvalid = regexp.test(search);

    return stringvalid;
  }

  isNumberValid(search: string): boolean {
    let numbervalid: boolean;

    let regexp = new RegExp(/^([0-9]+)$/);

    numbervalid = regexp.test(search);

    return numbervalid;
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
        // console.log(this.userlat); 
        this.userlong = JSON.parse(dataReturned.data.Longitude);

      }
    });

    return await modal.present();
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
            console.log('Saved Information', data);
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


  async SignUpClick() {

    let Name_ar_err_msg;
    let Name_en_err_msg;
    let Family_name_ar_err_msg;
    let Family_name_en_err_msg;
    let Email_err_msg;
    let Phone_no_err_msg;
    let Country_id_err_msg;
    let Governate_id_err_msg;
    let City_id_err_msg;
    let Password_err_msg;
    let com_Password_err_msg;
    let user_location_err_msg;
    let sigup_error_msg;
    let sigup_duplicated_msg;
    let sigup_success_msg;
    let terms_check_error;
    
       
     

    this.translate.get('Name_ar_err_msg').subscribe(value => { Name_ar_err_msg = value; })
    this.translate.get('Name_en_err_msg').subscribe(value => { Name_en_err_msg = value; })
    this.translate.get('Family_name_ar_err_msg').subscribe(value => { Family_name_ar_err_msg = value; })
    this.translate.get('Family_name_en_err_msg').subscribe(value => { Family_name_en_err_msg = value; })
    this.translate.get('Email_err_msg').subscribe(value => { Email_err_msg = value; })
    this.translate.get('Phone_no_err_msg').subscribe(value => { Phone_no_err_msg = value; })
    this.translate.get('Country_id_err_msg').subscribe(value => { Country_id_err_msg = value; })
    this.translate.get('Governate_id_err_msg').subscribe(value => { Governate_id_err_msg = value; })
    this.translate.get('City_id_err_msg').subscribe(value => { City_id_err_msg = value; })
    this.translate.get('Password_err_msg').subscribe(value => { Password_err_msg = value; })
    this.translate.get('com_Password_err_msg').subscribe(value => { com_Password_err_msg = value; })
    this.translate.get('user_location_err_msg').subscribe(value => { user_location_err_msg = value; })
    this.translate.get('sigup_error_msg').subscribe(value => { sigup_error_msg = value; })
    this.translate.get('sigup_duplicated_msg').subscribe(value => { sigup_duplicated_msg = value; })
    this.translate.get('sigup_success_msg').subscribe(value => { sigup_success_msg = value; })
    this.translate.get('terms_check_error').subscribe(value => { terms_check_error = value; })



    if (this.usersData.Name_ar.trim() == '' && this.usersData.Name_en.trim() == '') {
      const toast = await this.toastController.create({
        message: Name_ar_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    // if (!this.isStringValid(this.usersData.Name_en)) {
    //   const toast = await this.toastController.create({
    //     message: Name_en_err_msg,
    //     duration: 2000
    //   });
    //   toast.present();
    //   return;
    // } else { }

    if (this.usersData.Family_name_en.trim() == '' && this.usersData.Family_name_ar.trim() == '') {
      const toast = await this.toastController.create({
        message: Family_name_ar_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    // if (!this.isStringValid(this.usersData.Family_name_en)) {
    //   const toast = await this.toastController.create({
    //     message: Family_name_en_err_msg,
    //     duration: 2000
    //   });
    //   toast.present();
    //   return;
    // } else { }

    if (!this.isemailValid(this.usersData.Email.trim())) {
      const toast = await this.toastController.create({
        message: Email_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    if (!this.isNumberValid(this.usersData.Phone_no)) {
      const toast = await this.toastController.create({
        message: Phone_no_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    if (this.usersData.Country_id == undefined || this.usersData.Country_id == "") {
      const toast = await this.toastController.create({
        message: Country_id_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    if (this.usersData.Governate_id == undefined || this.usersData.Governate_id == "") {
      const toast = await this.toastController.create({
        message: Governate_id_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    if (this.usersData.City_id == undefined || this.usersData.City_id == "") {
      const toast = await this.toastController.create({
        message: City_id_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }


    if (!this.ispasswordValid(this.usersData.Password.trim())) {
      const toast = await this.toastController.create({
        message: Password_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    if (this.usersData.Password.trim() != this.usersData.com_Password.trim()) {
      const toast = await this.toastController.create({
        message: com_Password_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else { }

    if (this.userlong == '' || this.userlat == '') {
      const toast = await this.toastController.create({
        message: user_location_err_msg,
        duration: 2000
      });
      toast.present();
      return;
    } else {

      this.usersData.log = this.userlong;
      this.usersData.Lat = this.userlat;
    }


    if (this.checkTerms == false ) {
      const toast = await this.toastController.create({
        message: terms_check_error,
        duration: 2000
      });
      toast.present();
      return;
    } else {
 
    }

    
    const token = await Storage.get({ key: 'token' });
    console.log(JSON.parse(token.value));
    this.usersData.token = JSON.parse(token.value);




    // if (!this.ispasswordValid(this.usersData.Password)) {
    //   let msg;

    //   const toast = await this.toastController.create({
    //     message: 'Error magges for you.',
    //     duration: 2000
    //   });
    //   toast.present();


    //   return;
    // } else { }



    // if (!this.ispasswordValid(this.usersData.Password)) {
    //   let msg;

    //     const toast = await this.toastController.create({
    //       message: 'Error magges for you.',
    //       duration: 2000
    //     });
    //     toast.present();


    //   return;
    // } else { }

    // let url='https://drbakndillah.com/Api/UserSignUp.php?Email='+this.usersData.Email.trim()+'&Name_ar='+this.usersData.Name_ar.trim()+'&Name_en='+this.usersData.Name_en.trim()+'&Family_name_ar='+this.usersData.Family_name_ar.trim()+'&Family_name_en='+this.usersData.Family_name_en.trim()+'&Phone_no='+this.usersData.Phone_no+'&Country_code='+this.usersData.Country_code+'&Country_id='+this.usersData.Country_id+'&Governate_id='+this.usersData.Governate_id+'&City_id='+this.usersData.City_id+'&Lat='+this.usersData.Lat+'&log='+this.usersData.log+'&Password='+this.usersData.Password.trim()+'&token='+this.usersData.token;
    // this.http.post(url,{},{}).subscribe((response)=>{
    // console.log(response);
    // },
    // (error)=>{
    // console.log(error);
    // });

    // this.http.get('https://drbakndillah.com/Api/UserSignUp.php?Email=' + this.usersData.Email.trim() + '&Name_ar=' + this.usersData.Name_ar.trim() + '&Name_en=' + this.usersData.Name_en.trim() + '&Family_name_ar=' + this.usersData.Family_name_ar.trim() + '&Family_name_en=' + this.usersData.Family_name_en.trim() + '&Phone_no=' + this.usersData.Phone_no + '&Country_code=' + this.usersData.Country_code + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Lat=' + this.usersData.Lat + '&log=' + this.usersData.log + '&Password=' + this.usersData.Password.trim() + '&token=' + this.usersData.token).subscribe((response) => {
    //   console.log('response' + response);

    // }, (error) => {
    //   console.log('error' + JSON.parse(error));
    // });
 
  const loading = await this.loadingController.create({
    spinner: 'bubbles'
  });
  await loading.present();


    let url=this.Api_URL+'UserSignUp.php?Email=' + this.usersData.Email.trim() + '&Name_ar=' + this.usersData.Name_ar.trim() + '&Name_en=' + this.usersData.Name_en.trim() + '&Family_name_ar=' + this.usersData.Family_name_ar.trim() + '&Family_name_en=' + this.usersData.Family_name_en.trim() + '&Phone_no=' + this.usersData.Phone_no + '&Country_code=' + this.usersData.Country_code + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Lat=' + this.usersData.Lat + '&log=' + this.usersData.log + '&Password=' + this.usersData.Password.trim() + '&token=' + this.usersData.token;
    this.http.get(url,{}).subscribe((response)=>{
    console.log(response[0].response);
    loading.dismiss();
    if(response[0].response == 'error'){
       
      this.presentToast(sigup_error_msg);
      return;
       
    }else if(response[0].response == 'duplicated'){
     
      this.presentToast(sigup_duplicated_msg);
      return;

     }else if(response[0].response == 'success'){ 
      this.presentToast(sigup_success_msg);
      Storage.set({
        key: 'HasLogin',
        value: JSON.stringify('1'),
      });
      Storage.set({
        key: 'Email',
        value: JSON.stringify(this.usersData.Email.trim()),
      });


    this.navCtrl.navigateForward('/all-packages');
 
      return;

     }


},
(error)=>{
console.log(error);
});


    // this.http.get('https://drbakndillah.com/Api/UserSignUp.php?Email='+this.usersData.Email.trim()+'&Name_ar='+this.usersData.Name_ar.trim()+'&Name_en='+this.usersData.Name_en.trim()+'&Family_name_ar='+this.usersData.Family_name_ar.trim()+'&Family_name_en='+this.usersData.Family_name_en.trim()+'&Phone_no='+this.usersData.Phone_no+'&Country_code='+this.usersData.Country_code+'&Country_id='+this.usersData.Country_id+'&Governate_id='+this.usersData.Governate_id+'&City_id='+this.usersData.City_id+'&Lat='+this.usersData.Lat+'&log='+this.usersData.log+'&Password='+this.usersData.Password.trim()+'&token='+this.usersData.token).subscribe()

    // .map(res => res.json())
    //   .subscribe(
    //     data => {
    //       var user = data; 
    //       console.log("data : ", data);


    //     },
    //     err => {

    //       console.log("ERROR!: ", err);

    //     }
    //   );





    // if sign up successfully then store data in storage  
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
    // Storage.set({
    //   key: 'token',
    //   value: JSON.stringify('0'),
    // });

    // this.navCtrl.navigateForward('/all-packages');

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
