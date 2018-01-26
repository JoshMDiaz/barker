import { NgModule } from '@angular/core';
import { RadioPage } from './radio';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    RadioPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioPage),
  ],
  exports: [
    RadioPage
  ]
})
export class RadioPageModule {}
