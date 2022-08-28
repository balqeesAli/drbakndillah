import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackagePageRoutingModule } from './package-routing.module';

import { PackagePage } from './package.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PackagePageRoutingModule
  ],
  declarations: [PackagePage]
})
export class PackagePageModule { }
