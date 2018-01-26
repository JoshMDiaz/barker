import { NgModule } from '@angular/core';
import { RangePage } from './range';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    RangePage,
  ],
  imports: [
    IonicPageModule.forChild(RangePage),
  ],
  exports: [
    RangePage
  ]
})
export class RangePageModule {}
