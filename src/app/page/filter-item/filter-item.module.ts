import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterItemPageRoutingModule } from './filter-item-routing.module';

import { FilterItemPage } from './filter-item.page';

import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FilterItemPageRoutingModule
  ],
  declarations: [FilterItemPage]
})
export class FilterItemPageModule {}
