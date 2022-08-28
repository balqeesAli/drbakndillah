import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPackagesPageRoutingModule } from './my-packages-routing.module';

import { MyPackagesPage } from './my-packages.page';

import { TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MyPackagesPageRoutingModule
  ],
  declarations: [MyPackagesPage]
})
export class MyPackagesPageModule {}
