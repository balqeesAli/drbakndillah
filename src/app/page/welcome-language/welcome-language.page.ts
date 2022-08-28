import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-welcome-language',
  templateUrl: './welcome-language.page.html',
  styleUrls: ['./welcome-language.page.scss'],
})
export class WelcomeLanguagePage implements OnInit {


  public selectedLan = "";

  constructor(
    private translate: TranslateService,
    private navCtrl: NavController) {
    this.selectedLan = this.translate.getDefaultLang();
  }


  ngOnInit() {
  }

  changeLanguage(selectedLan) {
    this.translate.use(selectedLan);
    if (selectedLan == 'ar') {
      document.documentElement.dir = "rtl";
      Storage.set({
        key: 'direction',
        value: JSON.stringify('rtl'),
      });


    } else {
      document.documentElement.dir = "ltr";

      Storage.set({
        key: 'direction',
        value: JSON.stringify('ltr'),
      });

    }

    Storage.set({
      key: 'language',
      value: JSON.stringify(selectedLan),
    });




    this.navCtrl.navigateForward('/tabs/map');

  }

}
