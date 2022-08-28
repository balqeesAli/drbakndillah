import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';

import { TranslateModule} from '@ngx-translate/core';
 
// import { PlaceApiPageModule } from '../../place-api/place-api.module'; 
 
// import { MyModalPageModule } from '../../modals/my-modal/my-modal.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    // MyModalPageModule,
    // PlaceApiPageModule,
    SignUpPageRoutingModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
