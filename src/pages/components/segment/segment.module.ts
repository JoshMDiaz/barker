import { NgModule } from '@angular/core';
import { SegmentPage } from './segment';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SegmentPage,
  ],
  imports: [
    IonicPageModule.forChild(SegmentPage),
  ],
  exports: [
    SegmentPage
  ]
})
export class SegmentPageModule {}
