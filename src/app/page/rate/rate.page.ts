import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular'; 


@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  rate_value="5";
  today = Date.now();
  orderData:any='';
   
  

  Api_URL = 'https://drbakndillah.com/Api/';
 

  constructor(private route: ActivatedRoute,
    private translate: TranslateService,
    private router: Router, 
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, 
    private navCtrl: NavController, 

  ) {


    this.Selected_language_direction();


    if (router.getCurrentNavigation().extras.state) {

      this.orderData = this.router.getCurrentNavigation().extras.state;
      console.log(this.orderData);
    }
  }





  ngOnInit() {
  }

  async SendRating() { 
    let wrong_inserttopackage_details = 'wrong_inserttopackage_details'; 
    let YouhaveRateMandoob = 'YouhaveRateMandoob';


    this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
    this.translate.get('YouhaveRateMandoob').subscribe(value => { YouhaveRateMandoob = value; })
 

    //  insert data in DB 
   

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles'
    });
    await loading.present();

    // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1
  

    let url = this.Api_URL + "insertIntoRate.php?rate="+this.rate_value+"&uid="+JSON.parse(this.orderData.mid)+"&oid="+JSON.parse(this.orderData.orderid);
    console.log(url);




    this.http.get(url, {}).subscribe((response) => {
      loading.dismiss();

      let retrivedResponse: any = response;
      console.log('response' + JSON.stringify(response));

      // console.log('response'+response.id);

      //console.log(response[0].response);
 
      if (response[0].response == 'error') {
        loading.dismiss();
        this.presentToast(wrong_inserttopackage_details);
        return;

      } else if (response[0].response == 'success') {
        loading.dismiss();
        console.log(retrivedResponse.uid);
        this.changeState();
        this.presentToast(YouhaveRateMandoob);
        return;

      }

    }, (error) => {
      loading.dismiss();
      this.presentToast(wrong_inserttopackage_details);
    
    });


  }


  async changeState() {
    // https://drbakndillah.com/Api/updateOrdermState.php.php?id=1&status=test&status_ar=معتمد
 
    // approved 
    // Completed
    // rejected
    // deleted 

    let somethingwronghappend;
    this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })

    let DoneSuccessfully;
    this.translate.get('DoneSuccessfully').subscribe(value => { DoneSuccessfully = value; })

    let url = this.Api_URL + 'updateOrdermState.php?id=' +JSON.parse(this.orderData.orderid)+ '&status=history&status_ar=ارشيف';
    console.log(url);
    this.http.get(url, {}).subscribe((response) => {
      console.log(response);
      if (response[0].response == 'success') {
           

      } else {
        this.presentToast(somethingwronghappend);
      }
    }, (error) => {
      this.presentToast(somethingwronghappend);
    });



  }
  


  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);

    // this.presentAlertConfirm(); 
  }


  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
    });
    toast.present();
  }

}
