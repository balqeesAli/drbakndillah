import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceApiPage } from './place-api.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceApiPageRoutingModule {}
