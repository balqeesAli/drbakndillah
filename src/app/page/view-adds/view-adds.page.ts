import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-view-adds',
  templateUrl: './view-adds.page.html',
  styleUrls: ['./view-adds.page.scss'],
})
export class ViewAddsPage implements OnInit {
  AddDetails;
  applang;

  constructor(private route: ActivatedRoute,
    
    private translate: TranslateService,
    private router: Router,) {
    
    if (router.getCurrentNavigation().extras.state) {

      this.AddDetails = this.router.getCurrentNavigation().extras.state;

    }

    this.Selected_language_direction();
   }

  ngOnInit() {
  }

  

  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.translate.setDefaultLang(JSON.parse(language.value));
this.applang = JSON.parse(language.value);

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);

  }

  moveToPage(url){
    console.log("AddDetails____"+url);
    
if(url.startsWith('https://') ||  url.startsWith('http://')){


  Browser.open({ url: url });

}else{

  Browser.open({ url: 'https://'+url });
}

  }
}
