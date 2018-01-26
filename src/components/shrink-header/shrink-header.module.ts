import { IonicModule } from 'ionic-angular';
import { ShrinkHeader } from './shrink-header';
import { NgModule } from '@angular/core';
 
@NgModule({
  declarations: [
    ShrinkHeader
  ],
  imports: [
    IonicModule
  ],
  exports: [
    ShrinkHeader
  ]
})
export class ShrinkHeaderModule {}