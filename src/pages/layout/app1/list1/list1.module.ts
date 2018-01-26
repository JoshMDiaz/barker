import { NgModule } from '@angular/core';
import { List1Page } from './list1';
import { IonicPageModule } from 'ionic-angular';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    List1Page,
  ],
  imports: [
    IonicPageModule.forChild(List1Page),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  exports: [
    List1Page
  ]
})
export class List1PageModule {}
