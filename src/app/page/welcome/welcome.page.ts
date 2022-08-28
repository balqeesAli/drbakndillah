import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  AppFeatures: any[] = [
    {
      Title_ar: "التوصيل متوفر ٢٤ ساعة",
      Title_en: "24 Hour Delivery",
      img: "../../../assets/icon/slider_1.png",
    }, {
      Title_ar: "سهولة و سرعة الاستلام و التوصيل",
      Title_en: "Easy and Fast Delivery",
      img: "../../../assets/icon/slider_2.png",
    }, {
      Title_ar: "اعلانات تجارية",
      Title_en: "Business Advertaisment",
      img: "../../../assets/icon/slider_3.png",
    }, {
      Title_ar: "خدمة توصيل الافراد ",
      Title_en: "Passenger Transportation",
      img: "../../../assets/icon/slider_4.png",
    },

  ];

  public sliderOptions: any = {
    autoplay: true,
    slidesPerView: 1
  }
  HasLogin: any = 0;
  ID;
  constructor(private navCtrl: NavController) {
 
    this.HasLoginedMethod();

  }

  

  ngOnInit() {
  }

  async HasLoginedMethod() {

    const HasLogin = await Storage.get({ key: 'HasLogin' });
    console.log(JSON.parse(HasLogin.value));

    if (JSON.parse(HasLogin.value) == 1) {
      this.navCtrl.navigateForward('/tabs/map');
    }else{
    this.setAlocalStorage();
    }

  }

  setAlocalStorage(){
    Storage.set({
      key: 'HasLogin',
      value: JSON.stringify('0'),
    });
    Storage.set({
      key: 'Id',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Email',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Name_ar',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Name_en',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Family_name_ar',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Family_name_en',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Phone_no',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Country_code',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Country_id',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Governate_id',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'City_id',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Lat',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'log',
      value: JSON.stringify(''),
    });
    Storage.set({
      key: 'Blocked',
      value: JSON.stringify('0'),
    });

  }

  // Skip(){
  //   this.setAlocalStorage();

  //   this.navCtrl.navigateForward('/welcome-language');
    
  // }

}
