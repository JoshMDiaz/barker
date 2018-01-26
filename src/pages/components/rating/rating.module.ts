import { NgModule } from '@angular/core';
import { RatingPage } from './rating';
import { IonicPageModule } from 'ionic-angular';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    RatingPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingPage),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  exports: [
    RatingPage
  ]
})
export class RatingPageModule {}
