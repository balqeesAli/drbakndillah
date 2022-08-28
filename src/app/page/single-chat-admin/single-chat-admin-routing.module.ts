import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleChatAdminPage } from './single-chat-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SingleChatAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleChatAdminPageRoutingModule {}
