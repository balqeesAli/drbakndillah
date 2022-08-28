import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeLanguagePage } from './welcome-language.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeLanguagePageRoutingModule {}
