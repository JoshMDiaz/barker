import { NgModule } from '@angular/core';
import { TimelinePage } from './timeline';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePage),
  ],
  exports: [
    TimelinePage
  ]
})
export class TimelinePageModule {}
