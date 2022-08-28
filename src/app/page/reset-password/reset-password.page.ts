import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { PlaceApiPage } from '../../place-api/place-api.page';
// import { PlaceApiPage } from '../../place-api/place-api.page'; 
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../../modals/my-modal/my-modal.page';
import { HttpClient } from '@angular/common/http';
import { UserPhoto, PhotoService } from '../../services/photo.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';




@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {


Api_URL = 'https://drbakndillah.com/Api/';
 
applang;
  
usersData = {
  "password": "",
  "newpassword": "",
  "confirmpassword": "",
  "UserId":""
}


constructor(
  private alertController: AlertController,
  private translate: TranslateService,
  private navCtrl: NavController,
   private http: HttpClient,
  private loadingCtrl: LoadingController,
  private loadingController: LoadingController,
  private actionSheetController: ActionSheetController,
   private toastController: ToastController) {
  this.Selected_language_direction();
 

}

ngOnInit() {
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
 
 
async ResetPassword() {
  let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
  let Fill_ALl_requird_details_package = 'Fill ALl requird details';
  let password_updated_successfully = 'password_updated_successfully';
  let error_uploading_car_card_id = 'error_uploading_car_card_id';
  let new_password_not_equal = 'new_password_not_equal';
  let wrong_pas_msg = 'wrong_pas_msg';


  this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; })
  this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; })
  this.translate.get('password_updated_successfully').subscribe(value => { password_updated_successfully = value; })
  this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; })
  this.translate.get('new_password_not_equal').subscribe(value => { new_password_not_equal = value; })
  this.translate.get('wrong_pas_msg').subscribe(value => { wrong_pas_msg = value; })
 

  //  insert data in DB 


  const userId = await Storage.get({ key: 'Id' });
  this.usersData.UserId = JSON.parse(userId.value); 



  if (this.usersData.password.trim()  == '' || this.usersData.newpassword.trim() == '' ||  this.usersData.confirmpassword.trim() == '' ) {
    this.presentToast(Fill_ALl_requird_details_package);
    return;
  }

  
  if ( this.usersData.newpassword.trim() !=  this.usersData.confirmpassword.trim() ) {
    this.presentToast(new_password_not_equal);
    return;
  }


  const loading = await this.loadingCtrl.create({
    spinner: 'bubbles'
  });
  await loading.present();

  // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&item_image=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1

  // let url ='insertInToItem.php?Image=2342431.jpeg&Max_price_delivery=32&Type=passsenger&Country_id=1&Governate_id=1&City_id=3&Title_ar=كتب&Title_en=book&Other_note=Notes&Maximin_time=01:12&Maximin_date=12-12-1991&Log=21.2112&Lat=12.321321&Item_status=new&User_id=35';


  //  let url = this.Api_URL + 'insertInToItem.php?Image=' + this.usersData.item_image + '&Max_price_delivery=' + this.usersData.price  + '&Type=' + this.item.type + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Title_ar='+this.usersData.itemname_ar.trim() +'&Title_en=' + this.usersData.itemname_en.trim()  + '&Other_note=' + this.usersData.note.trim()  + '&Maximin_time=' + this.usersData.time.substring(11, 16)  + '&Maximin_date=' + this.usersData.date.substring(0, 10) + '&Log=' + this.usersData.log + '&Lat=' + this.usersData.Lat + '&Item_status=new&User_id=' + this.usersData.User_id;
  //  this.Api_URL + "insertIntoPackage.php?Package_name_ar=" + this.usersData.Package_name_ar + "&Package_name_en=" + this.UserPackageDetails.Package_name_en + "&Package_price=" + this.UserPackageDetails.Package_price + "&Package_period_ar=" + this.UserPackageDetails.Package_period_ar + "&Package_period_en=" + this.UserPackageDetails.Package_period_en + "&Start_date=" + this.UserPackageDetails.Start_date + "&Shop_company_name=" + this.UserPackageDetails.Shop_company_name + "&Nick_name=" + this.UserPackageDetails.Nick_name + "&item_image=" + this.UserPackageDetails.item_image + "&Status_Package_ar=" + this.UserPackageDetails.Status_Package_ar + "&Status_Package_en=" + this.UserPackageDetails.Status_Package_en + "&User_id=" + this.UserPackageDetails.User_id;
  
  let url ="https://drbakndillah.com/Api/updateuserpassword.php?id="+this.usersData.UserId +"&Password="+this.usersData.password.trim()+"&newPassword="+this.usersData.newpassword.trim();
  console.log(url);



  this.http.get(url, {}).subscribe((response) => {

    let retrivedResponse: any = response;
    console.log('response' + JSON.stringify(retrivedResponse));

    // console.log('response'+response.id); k

    // console.log(response[0].response);
    loading.dismiss();
    if (retrivedResponse[0].response == 'error') {

      this.presentToast(wrong_inserttopackage_details);
      return;

    } else if (retrivedResponse[0].response == 'success') {
       this.presentToast(password_updated_successfully);
      // this.navCtrl.navigateForward('/tabs/profile');
      return;
    }else if (retrivedResponse[0].response == 'wrongpassword') {
     this.presentToast(wrong_pas_msg);
     console.log("wrong_pas_msg__"+wrong_pas_msg);
      // this.navCtrl.navigateForward('/tabs/profile');
      return;
    }

  }, (error) => {
    loading.dismiss();
    

  });


}


// Little helper
async presentToast(text) {
  const toast = await this.toastController.create({
    message: text,
    duration: 3000,
  });
  toast.present();
}

}

