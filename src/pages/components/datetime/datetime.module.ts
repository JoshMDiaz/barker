import { NgModule } from '@angular/core';
import { DatetimePage } from './datetime';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    DatetimePage,
  ],
  imports: [
    IonicPageModule.forChild(DatetimePage),
  ],
  exports: [
    DatetimePage
  ]
})
export class DatetimePageModule {}
