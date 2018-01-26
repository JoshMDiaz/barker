import { NgModule } from '@angular/core';
import { ActionsheetPage } from './actionsheet';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ActionsheetPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionsheetPage),
  ],
  exports: [
    ActionsheetPage
  ]
})
export class ActionsheetPageModule {}
