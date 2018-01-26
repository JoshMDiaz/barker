import { NgModule } from '@angular/core';
import { AnimationsPage } from './animations';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AnimationsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimationsPage),
  ],
  exports: [
    AnimationsPage
  ]
})
export class AnimationsPageModule {}
