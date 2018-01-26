import { NgModule } from '@angular/core';
import { List2Page } from './list2';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    List2Page,
  ],
  imports: [
    IonicPageModule.forChild(List2Page),
  ],
  exports: [
    List2Page
  ]
})
export class List2PageModule {}
