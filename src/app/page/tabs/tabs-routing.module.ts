import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'map',
        loadChildren: () => import('../../page/map/map.module').then( m => m.MapPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../../page/orders/orders.module').then( m => m.OrdersPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../../page/chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../page/profile/profile.module').then( m => m.ProfilePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
