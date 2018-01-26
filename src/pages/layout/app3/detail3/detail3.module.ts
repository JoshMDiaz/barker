import { NgModule } from '@angular/core';
import { Detail3Page } from './detail3';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    Detail3Page,
  ],
  imports: [
    IonicPageModule.forChild(Detail3Page),
  ],
  exports: [
    Detail3Page
  ]
})
export class Detail3PageModule {}
