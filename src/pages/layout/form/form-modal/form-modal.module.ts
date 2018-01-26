import { NgModule } from '@angular/core';
import { FormModalPage } from './form-modal';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FormModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FormModalPage),
  ],
  exports: [
    FormModalPage
  ]
})
export class FormModalPageModule {}
