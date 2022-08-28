import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService} from '@ngx-translate/core';

import { Storage } from '@capacitor/storage'; 

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  HasLogin = 0;

  constructor(
    private navCtrl:NavController,
    private translate: TranslateService,
    ) { }

  ngOnInit() {
    setInterval(data=>{
      

  this.StorageMethod();
  
      console.log("hi");
      },2000);

      
}
  gotoHome(){
    this.navCtrl.navigateForward('home');
  }
  

  async StorageMethod() {
    const HasLogin = await Storage.get({ key: 'HasLogin' });
    console.log(JSON.parse(HasLogin.value));
    this.HasLogin = JSON.parse(HasLogin.value);
  }


}
