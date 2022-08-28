import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SingleChatAdminPageRoutingModule } from './single-chat-admin-routing.module';
import { TranslateModule} from '@ngx-translate/core';
import { SingleChatAdminPage } from './single-chat-admin.page';
import { BrowserModule } from "@angular/platform-browser";
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SingleChatAdminPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SingleChatAdminPage]
})
export class SingleChatAdminPageModule {}
