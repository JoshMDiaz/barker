import { NgModule } from '@angular/core';
import { ItemSlidingPage } from './item-sliding';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ItemSlidingPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemSlidingPage),
  ],
  exports: [
    ItemSlidingPage
  ]
})
export class ItemSlidingPageModule {}
