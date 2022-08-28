import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController,
    private http: HttpClient, private loadingController: LoadingController) {}

  async ngOnInit() {
    // await this.photoService.loadSaved().then((sucess)=>{

    //   console.log(sucess);

    // }).catch((error)=>{

    // });

  }


  async OpenImage(){

    this.photoService.addNewToGallery().then((success)=>{

      console.log("Sucess");

this.LoadIMG();
    }).catch((error)=>{

  console.log("Error");

    });

   
  }


  async OpenCamera(){


    this.photoService.addNewToGalleryFromPhone().then((success)=>{

      console.log("Sucess");

this.LoadIMG();
    }).catch((error)=>{

  console.log("Error");

    });


  }
  
  async LoadIMG(){
    await this.photoService.loadSaved().then((sucess)=>{

      console.log(sucess);
      //console.log(sucess[0].webviewPath);

    
      this.uploadIMGintoServer(sucess[0].webviewPath , sucess[0].filepath);
      

    }).catch((error)=>{

    });


  }

  


  // Upload the formData to our API
  async uploadData(formData: FormData) {
    const loading = await this.loadingController.create({
      // message: 'Uploading image...',
    });
    await loading.present();
 

    // Use your own API!
    const url = 'https://drbakndillah.com/Api/upload.php';

    this.http.post(url, formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        loading.dismiss();


        if (res['success']) {
          // this.imagaUploaded = 1;
          // this.presentToast('File upload complete.')
        } else {
          // this.imagaUploaded = 0;
          // this.presentToast('File upload failed.')
        }
      });
  }




  async uploadIMGintoServer(imageBase64 , name ){
 
    
    const response = await fetch(imageBase64);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append('file', blob, name);
    this.uploadData(formData);

    console.log('name'+name);


    
//     // https://drbakndillah.com/Api/uploadIMG.php?imageBase64=
//     const loading = await this.loadingController.create({
//       spinner: 'bubbles'
//     });
//     await loading.present();

//     let url = 'https://drbakndillah.com/Api/uploadIMG.php?imageBase64='+imageBase64;
// console.log(url);
//     this.http.get(url, {}).subscribe((sucess)=>{
// loading.dismiss();
//       console.log('sucess___'+sucess);
//     },(error)=>{
//     loading.dismiss();
//       console.log('error_____'+error);
//     });



  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }
}

