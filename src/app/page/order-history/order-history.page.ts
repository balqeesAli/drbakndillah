import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { from } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  
  OrderHistoryArr:any[]=[];
  
  Api_URL = 'https://drbakndillah.com/Api/';
  applang;
  constructor(


    public navCtrl: NavController,
    private popCtrl: PopoverController,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController, 
    private translate: TranslateService) {

      
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
    
    this.applang = JSON.parse(language.value);
    this.getOrderhistory();
    // this.presentAlertConfirm(); 
  }


  
  async getOrderhistory() { 
    
    
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
 

  const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();

    
    const userId = await Storage.get({ key: 'Id' });
    // console.log(JSON.parse(userId.value));
  let User_id = JSON.parse(userId.value);

    
    let url = this.Api_URL + "/vieworderhistory.php?id="+User_id;
    console.log(url); 

    this.http.get(url, {}).subscribe((response) => {

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

      // console.log('response'+response.id);

      //console.log(response[0].response);
      loading.dismiss();
      if (retrivedResponse.response == 'error') {

        this.presentToast(wrong_inserttopackage_details);
        return;

      } else  {
        this.OrderHistoryArr =  retrivedResponse;
        
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

}

