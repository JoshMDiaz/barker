import { NgModule } from '@angular/core';
import { SelectOptionPage } from './select-option';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SelectOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectOptionPage),
  ],
  exports: [
    SelectOptionPage
  ]
})
export class SelectOptionPageModule {}
