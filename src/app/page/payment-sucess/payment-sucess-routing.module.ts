import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSucessPage } from './payment-sucess.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSucessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSucessPageRoutingModule {}
