import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAddsPageRoutingModule } from './view-adds-routing.module';

import { ViewAddsPage } from './view-adds.page';

import { TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ViewAddsPageRoutingModule
  ],
  declarations: [ViewAddsPage]
})
export class ViewAddsPageModule {}
