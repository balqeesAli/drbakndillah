import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./page/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./page/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./page/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
 
  {
    path: 'welcome-language',
    loadChildren: () => import('./page/welcome-language/welcome-language.module').then( m => m.WelcomeLanguagePageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./page/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'all-packages',
    loadChildren: () => import('./page/all-packages/all-packages.module').then( m => m.AllPackagesPageModule)
  },
  {
    path: 'package',
    loadChildren: () => import('./page/package/package.module').then( m => m.PackagePageModule)
  },
  {
    path: 'view-adds',
    loadChildren: () => import('./page/view-adds/view-adds.module').then( m => m.ViewAddsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./page/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-sucess',
    loadChildren: () => import('./page/payment-sucess/payment-sucess.module').then( m => m.PaymentSucessPageModule)
  },
  {
    path: 'payment-failed',
    loadChildren: () => import('./page/payment-failed/payment-failed.module').then( m => m.PaymentFailedPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./page/add-item/add-item.module').then( m => m.AddItemPageModule)
  },
  {
    path: 'edit-item',
    loadChildren: () => import('./page/edit-item/edit-item.module').then( m => m.EditItemPageModule)
  },
  {
    path: 'single-chat',
    loadChildren: () => import('./page/single-chat/single-chat.module').then( m => m.SingleChatPageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./page/rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'my-packages',
    loadChildren: () => import('./page/my-packages/my-packages.module').then( m => m.MyPackagesPageModule)
  },
  {
    path: 'my-details',
    loadChildren: () => import('./page/my-details/my-details.module').then( m => m.MyDetailsPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./page/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./page/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./page/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./page/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'post-add',
    loadChildren: () => import('./page/post-add/post-add.module').then( m => m.PostAddPageModule)
  },
  {
    path: 'filter-item',
    loadChildren: () => import('./page/filter-item/filter-item.module').then( m => m.FilterItemPageModule)
  },
  {
    path: 'mandoob-card',
    loadChildren: () => import('./page/mandoob-card/mandoob-card.module').then( m => m.MandoobCardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./page/tabs/tabs.module').then( m => m.TabsPageModule)
  },   {
    path: 'user-location',
    loadChildren: () => import('./page/user-location/user-location.module').then( m => m.UserLocationPageModule)
  },
  {
    path: 'place-api',
    loadChildren: () => import('./place-api/place-api.module').then( m => m.PlaceApiPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./modals/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./page/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'single-chat-admin',
    loadChildren: () => import('./page/single-chat-admin/single-chat-admin.module').then( m => m.SingleChatAdminPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
