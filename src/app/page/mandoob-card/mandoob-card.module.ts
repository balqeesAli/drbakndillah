import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandoobCardPageRoutingModule } from './mandoob-card-routing.module';

import { MandoobCardPage } from './mandoob-card.page';

import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MandoobCardPageRoutingModule
  ],
  declarations: [MandoobCardPage]
})
export class MandoobCardPageModule {}
