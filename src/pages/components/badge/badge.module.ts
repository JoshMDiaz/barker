import { NgModule } from '@angular/core';
import { BadgePage } from './badge';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    BadgePage,
  ],
  imports: [
    IonicPageModule.forChild(BadgePage),
  ],
  exports: [
    BadgePage
  ]
})
export class BadgePageModule {}
