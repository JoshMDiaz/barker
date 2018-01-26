import { NgModule } from '@angular/core';
import { Profile2Page } from './profile2';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Profile2Page,
  ],
  imports: [
    IonicPageModule.forChild(Profile2Page),
  ],
  exports: [
    Profile2Page
  ]
})
export class Profile2PageModule {}
