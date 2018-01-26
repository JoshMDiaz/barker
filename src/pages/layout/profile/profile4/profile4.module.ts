import { NgModule } from '@angular/core';
import { Profile4Page } from './profile4';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Profile4Page,
  ],
  imports: [
    IonicPageModule.forChild(Profile4Page),
  ],
  exports: [
    Profile4Page
  ]
})
export class Profile4PageModule {}
