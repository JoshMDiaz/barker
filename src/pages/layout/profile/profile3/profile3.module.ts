import { NgModule } from '@angular/core';
import { Profile3Page } from './profile3';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Profile3Page,
  ],
  imports: [
    IonicPageModule.forChild(Profile3Page),
  ],
  exports: [
    Profile3Page
  ]
})
export class Profile3PageModule {}
