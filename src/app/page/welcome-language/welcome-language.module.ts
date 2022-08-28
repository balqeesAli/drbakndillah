import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeLanguagePageRoutingModule } from './welcome-language-routing.module';

import { WelcomeLanguagePage } from './welcome-language.page';

import { TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WelcomeLanguagePageRoutingModule
  ],
  declarations: [WelcomeLanguagePage]
})
export class WelcomeLanguagePageModule {}
