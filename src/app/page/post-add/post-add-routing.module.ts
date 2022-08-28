import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostAddPage } from './post-add.page';

const routes: Routes = [
  {
    path: '',
    component: PostAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostAddPageRoutingModule {}
