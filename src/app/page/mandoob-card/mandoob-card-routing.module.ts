import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandoobCardPage } from './mandoob-card.page';

const routes: Routes = [
  {
    path: '',
    component: MandoobCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandoobCardPageRoutingModule {}
