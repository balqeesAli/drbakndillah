import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryPageRoutingModule } from './order-history-routing.module';

import { OrderHistoryPage } from './order-history.page';

import { TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OrderHistoryPageRoutingModule
  ],
  declarations: [OrderHistoryPage]
})
export class OrderHistoryPageModule {}
