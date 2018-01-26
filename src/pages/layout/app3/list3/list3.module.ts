import { NgModule } from '@angular/core';
import { List3Page } from './list3';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    List3Page,
  ],
  imports: [
    IonicPageModule.forChild(List3Page),
  ],
  exports: [
    List3Page
  ]
})
export class List3PageModule {}
