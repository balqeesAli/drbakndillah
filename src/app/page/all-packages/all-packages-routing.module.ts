import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPackagesPage } from './all-packages.page';

const routes: Routes = [
  {
    path: '',
    component: AllPackagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPackagesPageRoutingModule {}
