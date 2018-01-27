import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LookingForPage } from './looking-for';

@NgModule({
  declarations: [
    LookingForPage,
  ],
  imports: [
    IonicPageModule.forChild(LookingForPage),
  ],
})
export class LookingForPageModule {}
