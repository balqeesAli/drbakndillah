import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDetailsPageRoutingModule } from './my-details-routing.module';

import { MyDetailsPage } from './my-details.page';

import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MyDetailsPageRoutingModule
  ],
  declarations: [MyDetailsPage]
})
export class MyDetailsPageModule {}
