import { NgModule } from '@angular/core';
import { ItemPage } from './item';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemPage),
  ],
  exports: [
    ItemPage
  ]
})
export class ItemPageModule {}
