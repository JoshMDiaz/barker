import { NgModule } from '@angular/core';
import { FormPage } from './form';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FormPage,
  ],
  imports: [
    IonicPageModule.forChild(FormPage),
  ],
  exports: [
    FormPage
  ]
})
export class FormPageModule {}
