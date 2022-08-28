import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentFailedPageRoutingModule } from './payment-failed-routing.module';

import { PaymentFailedPage } from './payment-failed.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PaymentFailedPageRoutingModule
  ],
  declarations: [PaymentFailedPage]
})
export class PaymentFailedPageModule {}
