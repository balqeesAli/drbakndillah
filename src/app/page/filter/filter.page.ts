import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { PlaceApiPage } from '../../place-api/place-api.page';
// import { PlaceApiPage } from '../../place-api/place-api.page'; 
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// import { threadId } from 'worker_threads';

import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { UserPhoto, PhotoService } from '../../services/photo.service';

const IMAGE_DIR = 'stored-images';


interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  distance='';
  mincost='';
  maxcost='';

  today = Date.now();

  applang;
  countryArr: any;
  governateArr: any;
  cityArr: any;
  City_id;
  Governate_id;
  City_name;
  Governate_name;

  
  constructor(
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private alertController: AlertController,
    private translate: TranslateService,
    private http: HttpClient,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public photoService: PhotoService,
  ) {
    this.Selected_language_direction();
    this.countryCode();


  }

  async ngOnInit() {
    
  }

  async filterMarker(){
    
    
    const UID = await Storage.get({ key: 'Id' });
    console.log(JSON.parse(UID.value)); 

    const userLat = await Storage.get({ key: 'cureent_latitude' });
    console.log(JSON.parse(userLat.value)); 

    const userLog = await Storage.get({ key: 'cureent_longitude' });
    console.log(JSON.parse(userLog.value)); 

    if(this.City_name == undefined){ this.City_name = '' };

    if(this.Governate_name == undefined){ this.Governate_name = '' };
    let FilterDetails: any = {
      "userLat": JSON.parse(userLat.value),
      "userLong": JSON.parse(userLog.value),
      "userId": JSON.parse(UID.value),
      "sort": "nearest",
      "distance": this.distance,
      "mincost": this.mincost,
      "maxcost": this.maxcost,
      "goverate": this.Governate_name,
      "city":this.City_name

  };

 console.log("FilterDetails");
  this.navCtrl.navigateForward('/filter-item', {
    state: FilterDetails
 });

 
    
 
  }



  async countryCode() {

    const loading = await this.loadingCtrl.create({

      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();

    this.http.get('https://drbakndillah.com/Api/getGovernateById.php?ID=1').subscribe((response) => {
      console.log(response);
      this.governateArr = response;
      loading.dismiss();
    }, (error) => {
      console.log(error);
    });

  }

  governateIdSelected(selectedValue: any) {
  //   governate_name_en
  // city_name_en
  

    this.Governate_id = selectedValue.detail.value.id;
    this.City_id = '';

    console.log(selectedValue.detail.value.Id);
    console.log(selectedValue.detail.value.Name_en);

    this.Governate_name = selectedValue.detail.value.Name_en;

    this.http.get('https://drbakndillah.com/Api/getCityById.php?ID=' + selectedValue.detail.value.Id ).subscribe((response) => {
      console.log(response);
      this.cityArr = response;
    }, (error) => {
      console.log(error);
    });


  }


  cityIdSelected(selectedValue: any) {
    //   governate_name_en
    // city_name_en
    
  
      this.Governate_id = selectedValue.detail.value.id;
      this.City_id = '';
  
      console.log(selectedValue.detail.value.Id); 
      console.log(selectedValue.detail.value.Name_en); 
      this.City_name = selectedValue.detail.value.Name_en;
      
    }


  //  cityIdSelected(selectedValue: any) {
  //   this.City_id = selectedValue.detail.value.Id;
  //   console.log('CLicked'+ selectedValue.detail.value);

  // }


  async Selected_language_direction() {

    const language = await Storage.get({ key: 'language' });
    console.log(JSON.parse(language.value));
    this.applang = JSON.parse(language.value);
    this.translate.setDefaultLang(JSON.parse(language.value));

    const direction = await Storage.get({ key: 'direction' });
    console.log(JSON.parse(direction.value));
    document.documentElement.dir = JSON.parse(direction.value);


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
