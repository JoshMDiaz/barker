import { NgModule } from '@angular/core';
import { RadioButtonPage } from './radio-button';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    RadioButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioButtonPage),
  ],
  exports: [
    RadioButtonPage
  ]
})
export class RadioButtonPageModule {}
