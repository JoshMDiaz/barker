import { NgModule } from '@angular/core';
import { ProfilePage } from './profile';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule {}
