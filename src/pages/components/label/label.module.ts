import { NgModule } from '@angular/core';
import { LabelPage } from './label';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LabelPage,
  ],
  imports: [
    IonicPageModule.forChild(LabelPage),
  ],
  exports: [
    LabelPage
  ]
})
export class LabelPageModule {}
