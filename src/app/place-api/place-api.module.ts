import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceApiPageRoutingModule } from './place-api-routing.module';

import { PlaceApiPage } from './place-api.page';
 
import {GoogleMapsModule} from '@angular/google-maps';

import { TranslateModule} from '@ngx-translate/core';
 
// GoogleMapDemo = GoogleMapDemo
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GoogleMapsModule,
    PlaceApiPageRoutingModule
  ],
  declarations: [PlaceApiPage]
})
export class PlaceApiPageModule {}
