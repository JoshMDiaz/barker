import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageConversationPage } from './message-conversation';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MessageConversationPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageConversationPage),
    ComponentsModule
  ],
})
export class MessageConversationPageModule {}
