import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentFailedPage } from './payment-failed.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentFailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentFailedPageRoutingModule {}
