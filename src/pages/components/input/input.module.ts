import { NgModule } from '@angular/core';
import { InputPage } from './input';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    InputPage,
  ],
  imports: [
    IonicPageModule.forChild(InputPage),
  ],
  exports: [
    InputPage
  ]
})
export class InputPageModule {}
