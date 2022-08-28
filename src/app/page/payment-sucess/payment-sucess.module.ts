import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSucessPageRoutingModule } from './payment-sucess-routing.module';

import { PaymentSucessPage } from './payment-sucess.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PaymentSucessPageRoutingModule
  ],
  declarations: [PaymentSucessPage]
})
export class PaymentSucessPageModule {}
