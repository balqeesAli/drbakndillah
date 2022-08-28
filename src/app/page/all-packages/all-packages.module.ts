import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPackagesPageRoutingModule } from './all-packages-routing.module';

import { AllPackagesPage } from './all-packages.page';

import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AllPackagesPageRoutingModule
  ],
  declarations: [AllPackagesPage]
})
export class AllPackagesPageModule {}
