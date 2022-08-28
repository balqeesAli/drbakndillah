import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAddsPage } from './view-adds.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAddsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAddsPageRoutingModule {}
