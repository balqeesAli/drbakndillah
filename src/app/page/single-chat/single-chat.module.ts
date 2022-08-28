import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SingleChatPageRoutingModule } from './single-chat-routing.module';
import { SingleChatPage } from './single-chat.page';
import { TranslateModule} from '@ngx-translate/core';
import { BrowserModule } from "@angular/platform-browser";
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SingleChatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SingleChatPage]
})
export class SingleChatPageModule {}
