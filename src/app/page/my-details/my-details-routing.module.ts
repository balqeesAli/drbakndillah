import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDetailsPage } from './my-details.page';

const routes: Routes = [
  {
    path: '',
    component: MyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDetailsPageRoutingModule {}
