import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { from } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {

  termsandcondition_ar = "";
  termsandcondition_en = "";
  
  
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
    this.getTerms();
    // this.presentAlertConfirm(); 
  }


  
  async getTerms() { 

    
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
    
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
 

  const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();

    // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1

    let url = this.Api_URL + "/viewtermandcondition.php";
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
        this.termsandcondition_ar =  retrivedResponse[0].Text_ar;
        
        this.termsandcondition_en =  retrivedResponse[0].Text_en;
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

