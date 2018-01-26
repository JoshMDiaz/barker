import { NgModule } from '@angular/core';
import { FormResultPage } from './form-result';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FormResultPage,
  ],
  imports: [
    IonicPageModule.forChild(FormResultPage),
  ],
  exports: [
    FormResultPage
  ]
})
export class FormResultPageModule {}
