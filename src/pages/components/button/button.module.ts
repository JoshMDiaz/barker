import { NgModule } from '@angular/core';
import { ButtonPage } from './button';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonPage),
  ],
  exports: [
    ButtonPage
  ]
})
export class ButtonPageModule {}
