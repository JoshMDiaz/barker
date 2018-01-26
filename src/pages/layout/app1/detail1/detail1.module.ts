import { NgModule } from '@angular/core';
import { Detail1Page } from './detail1';
import { IonicPageModule } from 'ionic-angular';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    Detail1Page,
  ],
  imports: [
    IonicPageModule.forChild(Detail1Page),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  exports: [
    Detail1Page
  ]
})
export class Detail1PageModule {}
