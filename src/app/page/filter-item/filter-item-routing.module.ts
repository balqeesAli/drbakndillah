import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterItemPage } from './filter-item.page';

const routes: Routes = [
  {
    path: '',
    component: FilterItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterItemPageRoutingModule {}
