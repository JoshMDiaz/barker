import { NgModule } from '@angular/core';
import { ListMap1Page } from './list-map1';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ListMap1Page,
  ],
  imports: [
    IonicPageModule.forChild(ListMap1Page),
  ],
  exports: [
    ListMap1Page
  ]
})
export class ListMap1PageModule {}
